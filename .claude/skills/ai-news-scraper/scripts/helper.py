"""
每日AI早报 — Python 辅助脚本
用于格式化新闻数据、写入 data.json、去重等操作。
被 ai-news-scraper skill 调用。
"""
import json
import os
import sys
from pathlib import Path

# 项目根目录（相对于此脚本：../../）
PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent.parent.parent
DATA_JSON = PROJECT_ROOT / "data.json"

# 默认数据结构模板
EMPTY_TEMPLATE = {
    "date": "",
    "sections": {
        "overseas": {
            "vendors": [
                {"name": "OpenAI", "news": []},
                {"name": "Anthropic", "news": []},
                {"name": "Google", "news": []},
                {"name": "xAI", "news": []},
                {"name": "NVIDIA", "news": []},
                {"name": "Meta", "news": []},
            ]
        },
        "domestic": {
            "vendors": [
                {"name": "阿里云", "news": []},
                {"name": "火山引擎", "news": []},
                {"name": "DeepSeek", "news": []},
                {"name": "腾讯", "news": []},
                {"name": "智谱AI", "news": []},
                {"name": "Minimax", "news": []},
                {"name": "月之暗面", "news": []},
                {"name": "华为", "news": []},
            ]
        },
        "other": {
            "categories": [
                {"name": "其他厂商", "cards": []},
                {"name": "自动驾驶", "cards": []},
                {"name": "具身智能", "cards": []},
                {"name": "AI出海", "cards": []},
                {"name": "投资资讯", "cards": []},
                {"name": "行业趋势&观点", "cards": []},
            ]
        },
        "ranking": {
            "platforms": []
        }
    }
}


def write_news_data(data, output_path=None):
    """将新闻数据写入 data.json"""
    path = Path(output_path) if output_path else DATA_JSON
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f"data.json 已写入: {path}")
    print(f"海外厂商: {sum(len(v['news']) for v in data['sections']['overseas']['vendors'])} 条")
    print(f"国内厂商: {sum(len(v['news']) for v in data['sections']['domestic']['vendors'])} 条")
    print(f"其他关注: {sum(len(card.get('news',[])) for c in data['sections']['other']['categories'] for card in c.get('cards',[]))} 条")


def detect_duplicates(news_list, threshold=0.8):
    """检测并标记重复新闻（基于标题相似度）"""
    # 简单实现：检查标题是否包含相同的关键词（4字以上重叠视为重复）
    unique = []
    skipped = []
    for item in news_list:
        is_dup = False
        item_kw = set(item.get('title', '')[:(len(item.get('title', ''))//2)])
        for existing in unique:
            exist_kw = set(existing.get('title', '')[:(len(existing.get('title', ''))//2)])
            common = item_kw & exist_kw
            if len(common) >= 4:
                is_dup = True
                skipped.append(item)
                break
        if not is_dup:
            unique.append(item)
    return unique, skipped


if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'help'

    if cmd == 'init':
        # 初始化空 data.json
        from datetime import date
        template = json.loads(json.dumps(EMPTY_TEMPLATE))
        template['date'] = date.today().isoformat()
        write_news_data(template)

    elif cmd == 'check':
        # 检查 data.json 状态
        if DATA_JSON.exists():
            data = json.loads(DATA_JSON.read_text(encoding='utf-8'))
            print(f"日期: {data.get('date', '未知')}")
            for sec_key, sec in data['sections'].items():
                total = 0
                items = sec.get('vendors', sec.get('categories', sec.get('platforms', [])))
                for item in items:
                    if 'cards' in item:
                        for card in item['cards']:
                            total += len(card.get('news', []))
                    else:
                        total += len(item.get('news', item.get('rankings', [])))
                print(f"  {sec_key}: {total} 条")
        else:
            print("data.json 不存在")

    elif cmd == 'help':
        print("用法: python3 helper.py <command>")
        print("  init   — 初始化空的 data.json")
        print("  check  — 查看当前 data.json 状态")
        print("  write  — 从 stdin 读取 JSON 并写入 data.json")
        print("  dedup  — 从 stdin 读取新闻列表，输出去重后的结果")

    elif cmd == 'write':
        data = json.loads(sys.stdin.read())
        output_path = sys.argv[2] if len(sys.argv) > 2 else None
        write_news_data(data, output_path)

    elif cmd == 'dedup':
        news_list = json.loads(sys.stdin.read())
        unique, skipped = detect_duplicates(news_list)
        print(json.dumps({"unique": unique, "skipped_count": len(skipped)}, ensure_ascii=False))

    print("完成")
