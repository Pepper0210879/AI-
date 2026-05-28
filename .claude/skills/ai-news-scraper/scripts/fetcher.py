"""
每日AI早报 — 网页抓取脚本（Playwright 版）
用无头浏览器抓取所有新闻源和榜单源，输出原始 JSON 供 Claude/AI 处理。
用法:
  python3 fetcher.py news     抓取新闻源
  python3 fetcher.py rankings 抓取榜单
  python3 fetcher.py all      抓取全部
"""
import json
import sys
import time
from datetime import datetime, date
from pathlib import Path

from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent.parent.parent
RAW_DIR = Path(__file__).resolve().parent.parent / "raw"
RAW_DIR.mkdir(exist_ok=True)

# ==================== 站点定义 ====================
DAILY_REPORT_SOURCES = [
    {"id": "36kr",      "name": "36氪行业日报",   "url": "https://36kr.com/user/5652071"},
    {"id": "geekpark",  "name": "极客公园行业日报", "url": "https://www.geekpark.net/column/74"},
    {"id": "ifanr",     "name": "爱范儿行业日报",   "url": "https://www.ifanr.com/category/ifanrnews"},
]

SUPPLEMENTARY_SOURCES = [
    {"id": "ithome",    "name": "IT之家",   "url": "https://www.ithome.com/"},
    {"id": "qbitai",    "name": "量子位",    "url": "https://www.qbitai.com/"},
    {"id": "jiqizhixin","name": "机器之心",   "url": "https://www.jiqizhixin.com/"},
    {"id": "qqnews",    "name": "腾讯新闻",  "url": "https://news.qq.com/"},
]

RANKING_SOURCES = [
    {"id": "lmarena",    "name": "LMArena",     "url": "https://lmarena.ai/leaderboard/text"},
    {"id": "openrouter", "name": "OpenRouter",  "url": "https://openrouter.ai/rankings"},
    {"id": "producthunt","name": "Product Hunt","url": "https://www.producthunt.com/"},
]


def scrape_page(browser, url, wait_sec=3):
    """
    用 Playwright 打开页面，等待渲染完成后提取内容。
    返回: {"text": "...", "html": "...", "title": "...", "links": [...]}
    """
    context = browser.new_context(
        user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        locale="zh-CN",
    )
    page = context.new_page()

    try:
        page.goto(url, wait_until="load", timeout=45000)
        page.wait_for_timeout(wait_sec * 1000)

        title = page.title()
        text = page.inner_text("body")
        html = page.content()

        # 提取所有可见链接
        links = page.evaluate("""() => {
            const links = [];
            document.querySelectorAll('a[href]').forEach(a => {
                const href = a.href;
                const text = (a.innerText || '').trim();
                if (text.length >= 6 && href.startsWith('http')) {
                    links.push({title: text.substring(0, 150), url: href});
                }
            });
            return links;
        }""")

        return {"text": text, "html": html, "title": title, "links": links, "status": "ok"}

    except PWTimeout:
        # 超时时也尝试取已加载的内容
        try:
            text = page.inner_text("body")
            return {"text": text, "html": "", "title": page.title(), "links": [], "status": "partial"}
        except:
            return {"status": "error", "error": "timeout"}
    except Exception as e:
        return {"status": "error", "error": str(e)}
    finally:
        context.close()


def fetch_news():
    """抓取所有新闻源"""
    results = {"date": date.today().isoformat(), "fetched_at": datetime.now().isoformat(), "sources": {}}

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True)

        # 三大早报源 — 取全文
        for src in DAILY_REPORT_SOURCES:
            print(f"[新闻·早报] {src['name']} ({src['url']})...")
            data = scrape_page(browser, src["url"], wait_sec=5)
            if data["status"] in ("ok", "partial"):
                results["sources"][src["id"]] = {
                    "name": src["name"],
                    "url": src["url"],
                    "type": "daily_report",
                    "title": data.get("title", ""),
                    "full_text": data.get("text", "")[:20000],
                    "links": data.get("links", [])[:60],
                    "status": data["status"],
                }
                print(f"  -> {len(data.get('text',''))} 字, {len(data.get('links',[]))} 个链接")
            else:
                results["sources"][src["id"]] = {"name": src["name"], "status": "error", "error": data.get("error", "")}
                print(f"  -> 失败: {data.get('error','')}")
            time.sleep(1)

        # 三大补充站点 — 取文章列表
        for src in SUPPLEMENTARY_SOURCES:
            print(f"[新闻·补充] {src['name']} ({src['url']})...")
            data = scrape_page(browser, src["url"], wait_sec=3)
            if data["status"] in ("ok", "partial"):
                results["sources"][src["id"]] = {
                    "name": src["name"],
                    "url": src["url"],
                    "type": "supplementary",
                    "title": data.get("title", ""),
                    "full_text": data.get("text", "")[:15000],
                    "links": data.get("links", [])[:100],
                    "status": data["status"],
                }
                print(f"  -> {len(data.get('text',''))} 字, {len(data.get('links',[]))} 个链接")
            else:
                results["sources"][src["id"]] = {"name": src["name"], "status": "error", "error": data.get("error", "")}
                print(f"  -> 失败: {data.get('error','')}")
            time.sleep(1)

        browser.close()

    output_path = RAW_DIR / "news_raw.json"
    output_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n新闻数据已保存: {output_path}")
    return results


def fetch_rankings():
    """抓取榜单数据"""
    results = {"date": date.today().isoformat(), "platforms": []}

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True)

        for src in RANKING_SOURCES:
            print(f"[榜单] {src['name']} ({src['url']})...")
            data = scrape_page(browser, src["url"], wait_sec=5)
            if data["status"] in ("ok", "partial"):
                results["platforms"].append({
                    "id": src["id"],
                    "name": src["name"],
                    "url": src["url"],
                    "title": data.get("title", ""),
                    "text": data.get("text", "")[:15000],
                    "links": data.get("links", [])[:30],
                    "status": data["status"],
                })
                print(f"  -> {len(data.get('text',''))} 字, {len(data.get('links',[]))} 个链接")
            else:
                results["platforms"].append({
                    "id": src["id"], "name": src["name"],
                    "status": "error", "error": data.get("error", ""),
                })
                print(f"  -> 失败: {data.get('error','')}")
            time.sleep(1)

        browser.close()

    output_path = RAW_DIR / "rankings_raw.json"
    output_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n榜单数据已保存: {output_path}")
    return results


# ==================== CLI ====================
if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "help"

    if cmd == "news":
        fetch_news()
    elif cmd == "rankings":
        fetch_rankings()
    elif cmd == "all":
        fetch_news()
        print("\n" + "=" * 50 + "\n")
        fetch_rankings()
    elif cmd == "help":
        print("用法: python3 fetcher.py <command>")
        print("  news     — 抓取所有新闻源")
        print("  rankings — 抓取所有榜单")
        print("  all      — 抓取全部")
    else:
        print(f"未知命令: {cmd}")
        sys.exit(1)
