#!/usr/bin/env python3
"""
飞书多维表格同步脚本
将 data.js 中的每日AI早报数据同步到飞书多维表格。
每天自动创建独立子表（按日期命名），方便按日查看。

使用方式：
  python3 feishu_sync.py                          # 读取 data.js 同步到飞书
  python3 feishu_sync.py --dry-run                # 仅预览，不写入
  python3 feishu_sync.py --date 2026-05-30        # 同步指定日期
"""

import json
import os
import sys
import time
import argparse
from pathlib import Path

try:
    import requests
except ImportError:
    print("请先安装: pip3 install requests")
    sys.exit(1)

# ============================================================
# 配置
# ============================================================

CONFIG = {
    "app_id": "",
    "app_secret": "",
    "app_token": "",
}

CONFIG_FILE = Path(__file__).resolve().parent / "feishu_config.json"
TOKEN_FILE = Path(__file__).resolve().parent / "feishu_token.json"

# 合并表字段定义
TABLE_FIELDS = [
    {"field_name": "日期", "type": 1},
    {"field_name": "类型", "type": 3, "property": {"options": [
        {"name": "新闻", "color": 0}, {"name": "榜单", "color": 1},
    ]}},
    {"field_name": "板块", "type": 1},
    {"field_name": "厂商/卡片", "type": 1},
    {"field_name": "标题/名称", "type": 1},
    {"field_name": "描述", "type": 1},
    {"field_name": "链接", "type": 1},
    {"field_name": "标签", "type": 1},
    {"field_name": "来源", "type": 1},
    {"field_name": "时间/排名", "type": 1},
    {"field_name": "榜单日期", "type": 1},
    {"field_name": "变化", "type": 1},
]


def load_user_token():
    """加载 OAuth 用户授权 token"""
    if not TOKEN_FILE.exists():
        return None
    try:
        with open(TOKEN_FILE) as f:
            td = json.load(f)
        if td.get("expires_at", 0) > time.time() + 300:
            return td["user_access_token"]
        if td.get("refresh_expires_at", 0) > time.time():
            print("token 过期，尝试刷新...")
            url = "https://open.feishu.cn/open-apis/authen/v1/oidc/refresh_token"
            resp = requests.post(url, json={
                "app_id": CONFIG["app_id"],
                "app_secret": CONFIG["app_secret"],
                "refresh_token": td["refresh_token"],
                "grant_type": "refresh_token",
            }, timeout=30)
            data = resp.json()
            if data.get("code") == 0:
                new_td = {
                    "user_access_token": data["data"]["access_token"],
                    "refresh_token": data["data"]["refresh_token"],
                    "expires_at": int(time.time()) + data["data"].get("expires_in", 7200),
                    "refresh_expires_at": int(time.time()) + data["data"].get("refresh_expires_in", 2592000),
                }
                with open(TOKEN_FILE, "w") as f:
                    json.dump(new_td, f, indent=2)
                return new_td["user_access_token"]
    except Exception as e:
        print(f"加载 token 失败: {e}")
    return None


def load_config():
    for key in CONFIG:
        env_val = os.environ.get(f"FEISHU_{key.upper()}")
        if env_val:
            CONFIG[key] = env_val
    if CONFIG_FILE.exists():
        with open(CONFIG_FILE) as f:
            file_cfg = json.load(f)
            for key in CONFIG:
                if key in file_cfg and file_cfg[key]:
                    CONFIG[key] = file_cfg[key]
    missing = [k for k, v in CONFIG.items() if not v]
    if missing:
        print(f"缺少配置项: {', '.join(missing)}")
        return False
    return True


# ============================================================
# 飞书 API
# ============================================================

class FeishuBitable:
    BASE = "https://open.feishu.cn/open-apis"

    def __init__(self, app_id, app_secret, app_token, user_access_token=None):
        self.app_id = app_id
        self.app_secret = app_secret
        self.app_token = app_token
        self._token = None
        self._token_expire = 0
        if user_access_token:
            self._token = user_access_token
            self._token_expire = float("inf")

    def _auth(self):
        if self._token and time.time() < self._token_expire - 60:
            return self._token
        url = f"{self.BASE}/auth/v3/tenant_access_token/internal"
        resp = requests.post(url, json={
            "app_id": self.app_id,
            "app_secret": self.app_secret,
        }, timeout=30)
        data = resp.json()
        if data.get("code") != 0:
            raise RuntimeError(f"获取 token 失败: {data}")
        self._token = data["tenant_access_token"]
        self._token_expire = time.time() + data.get("expire", 7200)
        return self._token

    def _headers(self):
        return {
            "Authorization": f"Bearer {self._auth()}",
            "Content-Type": "application/json",
        }

    def list_tables(self):
        r = requests.get(
            f"{self.BASE}/bitable/v1/apps/{self.app_token}/tables",
            headers=self._headers(), timeout=30)
        data = r.json()
        if data.get("code") != 0:
            raise RuntimeError(f"列出表失败: {data}")
        return data["data"]["items"]

    def create_table(self, name, fields):
        """创建一张新表，返回 table_id"""
        r = requests.post(
            f"{self.BASE}/bitable/v1/apps/{self.app_token}/tables",
            headers=self._headers(),
            json={"table": {"name": name, "fields": fields}},
            timeout=30)
        data = r.json()
        if data.get("code") != 0:
            raise RuntimeError(f"创建表失败: {data}")
        return data["data"]["table_id"]

    def create_records(self, table_id, records, max_retries=3):
        if not records:
            return True
        success = 0
        for i in range(0, len(records), 500):
            batch = records[i:i + 500]
            url = f"{self.BASE}/bitable/v1/apps/{self.app_token}/tables/{table_id}/records/batch_create"
            for attempt in range(max_retries):
                resp = requests.post(url, headers=self._headers(),
                                     json={"records": batch}, timeout=120)
                data = resp.json()
                if data.get("code") == 0:
                    success += len(batch)
                    break
                elif data.get("code") == 99991401:
                    time.sleep(2 ** attempt)
                else:
                    print(f"  创建记录失败: {data}")
                    return False
            else:
                print(f"  重试 {max_retries} 次后仍失败")
                return False
        print(f"  写入 {success} 条")
        return True

    def get_or_create_table(self, name, fields):
        """查找表，不存在则创建。返回 table_id。"""
        tables = self.list_tables()
        for t in tables:
            if t["name"] == name:
                print(f"  表「{name}」已存在，追加数据")
                return t["table_id"]
        print(f"  创建新表「{name}」...")
        tid = self.create_table(name, fields)
        print(f"  创建成功: {tid}")
        return tid


# ============================================================
# 数据解析
# ============================================================

def parse_all_records(data):
    """解析新闻和榜单，合并为统一格式"""
    date_str = data["date"]
    sections = data["sections"]
    records = []

    # 新闻记录
    for vendor in sections.get("overseas", {}).get("vendors", []):
        for item in vendor.get("news", []):
            records.append({"fields": {
                "日期": date_str, "类型": "新闻",
                "板块": "海外厂商", "厂商/卡片": vendor["name"],
                "标题/名称": item["title"], "描述": item["summary"],
                "链接": item["link"],
                "标签": ", ".join(item.get("tags", [])),
                "来源": item.get("source", ""),
                "时间/排名": item.get("time", ""),
            }})

    for vendor in sections.get("domestic", {}).get("vendors", []):
        for item in vendor.get("news", []):
            records.append({"fields": {
                "日期": date_str, "类型": "新闻",
                "板块": "国内厂商", "厂商/卡片": vendor["name"],
                "标题/名称": item["title"], "描述": item["summary"],
                "链接": item["link"],
                "标签": ", ".join(item.get("tags", [])),
                "来源": item.get("source", ""),
                "时间/排名": item.get("time", ""),
            }})

    for cat in sections.get("other", {}).get("categories", []):
        for card in cat.get("cards", []):
            for item in card.get("news", []):
                records.append({"fields": {
                    "日期": date_str, "类型": "新闻",
                    "板块": cat["name"], "厂商/卡片": card["title"],
                    "标题/名称": item["title"], "描述": item["summary"],
                    "链接": item["link"],
                    "标签": ", ".join(item.get("tags", [])),
                    "来源": item.get("source", ""),
                    "时间/排名": item.get("time", ""),
                    "榜单日期": "",
                    "变化": "",
                }})

    # 榜单记录
    for platform in sections.get("ranking", {}).get("platforms", []):
        name = platform["name"]
        rank_date = platform.get("date", "")
        for idx, item in enumerate(platform.get("rankings", [])):
            change = item.get("change", "")
            if name == "Product Hunt":
                records.append({"fields": {
                    "日期": date_str, "类型": "榜单",
                    "板块": "Product Hunt",
                    "厂商/卡片": "",
                    "标题/名称": item["name"],
                    "描述": item.get("category", ""),
                    "链接": "",
                    "标签": "",
                    "来源": "",
                    "时间/排名": str(item["rank"]),
                    "榜单日期": rank_date,
                    "变化": str(change) if change else "",
                }})
            else:
                records.append({"fields": {
                    "日期": date_str, "类型": "榜单",
                    "板块": name,
                    "厂商/卡片": "",
                    "标题/名称": item.get("model", item.get("name", "")),
                    "描述": str(item.get("score", "")),
                    "链接": "",
                    "标签": "",
                    "来源": "",
                    "时间/排名": str(idx + 1),
                    "榜单日期": rank_date,
                    "变化": str(change) if change else "",
                }})

    return records


# ============================================================
# 加载数据
# ============================================================

def load_data(args):
    data_file = Path(args.data_file)
    if not data_file.is_absolute():
        data_file = Path(__file__).resolve().parents[4] / args.data_file
    if not data_file.exists():
        print(f"数据文件不存在: {data_file}")
        sys.exit(1)

    with open(data_file) as f:
        content = f.read().strip()
    if content.startswith("window.__RAW_DATA"):
        content = content[content.index("{"):content.rindex("}") + 1]
    data = json.loads(content)
    if args.date:
        data["date"] = args.date
    return data, data_file


# ============================================================
# 入口
# ============================================================

def main():
    parser = argparse.ArgumentParser(description="同步每日AI早报到飞书多维表格")
    parser.add_argument("--dry-run", action="store_true", help="仅预览，不写入")
    parser.add_argument("--date", type=str, help="日期，默认从数据文件读取")
    parser.add_argument("--data-file", type=str, default="data.js")
    args = parser.parse_args()

    if not load_config():
        sys.exit(1)

    data, data_file = load_data(args)
    date_str = data["date"]
    print(f"数据: {data_file.name} | 日期: {date_str}")

    records = parse_all_records(data)
    news_count = sum(1 for r in records if r["fields"]["类型"] == "新闻")
    ranking_count = sum(1 for r in records if r["fields"]["类型"] == "榜单")
    print(f"新闻: {news_count} 条 | 榜单: {ranking_count} 条 | 合计: {len(records)} 条")

    if args.dry_run:
        print("\n[DRY RUN]")
        for i, r in enumerate(records[:5]):
            print(f"  {i+1}. [{r['fields']['类型']}] {r['fields']['标题/名称']}")
        if len(records) > 5:
            print(f"  ... 共 {len(records)} 条")
        print("\n✅ [DRY RUN] 完成")
        return

    user_token = load_user_token()
    client = FeishuBitable(CONFIG["app_id"], CONFIG["app_secret"], CONFIG["app_token"],
                           user_access_token=user_token)
    token_type = "用户令牌" if user_token else "租户令牌"
    print(f"认证: {token_type} ✅")

    # 按日期创建/找到对应子表，命名格式：AI日报MMDD
    date_short = date_str.replace("-", "")[4:]
    table_name = f"AI日报{date_short}"

    print(f"\n--- {table_name} ---")
    try:
        tid = client.get_or_create_table(table_name, TABLE_FIELDS)
        client.create_records(tid, records)
    except Exception as e:
        print(f"同步失败: {e}")
        sys.exit(1)

    print(f"\n✅ 同步完成 - {date_str}")


if __name__ == "__main__":
    main()
