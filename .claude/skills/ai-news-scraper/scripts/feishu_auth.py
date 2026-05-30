#!/usr/bin/env python3
"""
飞书 OAuth 授权脚本（手动粘贴版）
打开浏览器 → 登录授权 → 复制重定向页面的 code → 粘贴回终端

使用方式：python3 feishu_auth.py
"""

import json
import sys
import time
import webbrowser
import urllib.parse
from pathlib import Path

try:
    import requests
except ImportError:
    print("请先安装: pip3 install requests")
    sys.exit(1)

SCRIPT_DIR = Path(__file__).resolve().parent
CONFIG_FILE = SCRIPT_DIR / "feishu_config.json"
TOKEN_FILE = SCRIPT_DIR / "feishu_token.json"

with open(CONFIG_FILE) as f:
    cfg = json.load(f)

APP_ID = cfg["app_id"]
APP_SECRET = cfg["app_secret"]

# 使用不需要本地服务器的 redirect URI
# 飞书支持 https://open.feishu.cn/ 作为 redirect URI（会显示 auth code）
REDIRECT_URI = "http://localhost:8765/callback"


def build_auth_url():
    params = {
        "app_id": APP_ID,
        "redirect_uri": REDIRECT_URI,
        "scope": "bitable:app",
        "state": "feishu_sync",
        "response_type": "code",
    }
    return ("https://open.feishu.cn/open-apis/authen/v1/authorize?"
            + urllib.parse.urlencode(params))


def exchange_code(code):
    """用授权码换取 user_access_token"""
    code = code.strip()

    # 如果用户粘贴了整个 URL，自动提取 code
    if "code=" in code:
        from urllib.parse import urlparse, parse_qs
        parsed = urlparse(code)
        params = parse_qs(parsed.query)
        code = params.get("code", [code])[0]

    code = urllib.parse.unquote(code)
    print(f"授权码（前8位）: {code[:8]}...")

    resp = requests.post(
        "https://open.feishu.cn/open-apis/authen/v1/oidc/access_token",
        json={
            "app_id": APP_ID,
            "app_secret": APP_SECRET,
            "grant_type": "authorization_code",
            "code": code,
        },
        timeout=30,
    )
    data = resp.json()
    if data.get("code") != 0:
        print(f"换取 user token 失败: {json.dumps(data, indent=2, ensure_ascii=False)}")
        return None

    token_data = {
        "user_access_token": data["data"]["access_token"],
        "refresh_token": data["data"]["refresh_token"],
        "expires_at": int(time.time()) + data["data"].get("expires_in", 7200),
        "refresh_expires_at": int(time.time()) + data["data"].get("refresh_expires_in", 2592000),
    }
    with open(TOKEN_FILE, "w") as f:
        json.dump(token_data, f, indent=2)
    print(f"授权成功 ✅")
    print(f"Token 文件: {TOKEN_FILE}")
    print(f"过期时间: {time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(token_data['expires_at']))}")
    return token_data


def main():
    # 检查已有 token
    if TOKEN_FILE.exists():
        with open(TOKEN_FILE) as f:
            td = json.load(f)
        if td.get("expires_at", 0) > time.time() + 300:
            print(f"已有有效 token，无需重新授权 ✅")
            return

    auth_url = build_auth_url()
    print("=" * 60)
    print("飞书 OAuth 授权")
    print("=" * 60)
    print(f"\n正在打开浏览器...")
    webbrowser.open(auth_url)

    print(f"\n如果浏览器没有自动打开，请手动复制以下链接到浏览器：")
    print(f"\n{auth_url}")
    print(f"\n操作步骤：")
    print(f"1. 在浏览器中登录飞书并点击「授权」")
    print(f"2. 授权后浏览器会跳转到一个打不开的页面（localhost），这是正常的")
    print(f"3. 看浏览器地址栏，URL 大概是：")
    print(f"   http://localhost:8765/callback?code=xxxxxxxxxx&state=feishu_sync")
    print(f"4. 复制 code= 后面、& 前面的那串字符")
    print(f"\n" + "-" * 60)
    code = input("请粘贴授权码: ").strip()

    if not code:
        print("未输入授权码，已取消")
        sys.exit(1)

    exchange_code(code)


if __name__ == "__main__":
    main()
