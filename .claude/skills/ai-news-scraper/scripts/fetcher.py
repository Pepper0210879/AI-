"""
每日AI早报 — 网页抓取脚本（Playwright 版）
用无头浏览器抓取所有新闻源和榜单源，输出原始 JSON 供 Claude/AI 处理。
用法:
  python3 fetcher.py news     抓取新闻源
  python3 fetcher.py rankings 抓取榜单
  python3 fetcher.py all      抓取全部
"""
import json
import re
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


def _parse_geekpark_articles(browser, page_url):
    """
    极客公园专用解析：用 JS selector 直接提取文章标题、URL 和日期。
    解决 inner_text 中日期行与文章标题分离导致漏读当天文章的问题。
    滚动页面触发懒加载，确保获取最新文章。
    返回: [{"title": "...", "url": "...", "date": "2026/06/14"}, ...]
    """
    page = browser.new_page()
    try:
        page.goto(page_url, wait_until="load", timeout=45000)
        page.wait_for_timeout(3000)
        # 持续滚动到底部，触发全部懒加载
        prev_count = 0
        for _ in range(10):
            page.evaluate("window.scrollBy(0, 1200)")
            page.wait_for_timeout(800)
            cur = page.evaluate("() => document.querySelectorAll('a[href*=\"/news/\"]').length")
            if cur == prev_count:
                break  # 没有新内容加载了
            prev_count = cur
        page.wait_for_timeout(2000)
        articles = page.evaluate("""() => {
            const results = [];
            document.querySelectorAll('a[href*="/news/"]').forEach(a => {
                const text = (a.innerText || '').trim();
                // 匹配「极客早知道」文章（标题通常 >30 字）
                if (text.includes('极客早知道') && text.length > 30) {
                    const href = a.href;
                    // 在父级及相邻 DOM 中查找日期
                    let el = a;
                    let date = '';
                    for (let i = 0; i < 6; i++) {
                        if (el) {
                            const m = el.textContent.match(/20\\d{2}[\\/]\\d{2}[\\/]\\d{2}/);
                            if (m) { date = m[0]; break; }
                            el = el.parentElement;
                        }
                    }
                    results.push({title: text.slice(0, 200), url: href, date: date});
                }
            });
            // 去重 + 按日期倒序
            const seen = new Set();
            return results.filter(r => {
                const key = r.url;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            }).sort((a,b) => b.date.localeCompare(a.date)).slice(0, 5);
        }""")
        return articles
    except Exception as e:
        print(f"    极客公园解析失败: {e}")
        return []
    finally:
        page.close()


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
                source_entry = {
                    "name": src["name"],
                    "url": src["url"],
                    "type": "daily_report",
                    "title": data.get("title", ""),
                    "full_text": data.get("text", "")[:20000],
                    "links": data.get("links", [])[:60],
                    "status": data["status"],
                }
                # 极客公园专用：提取文章列表（含日期），解决全文日期行漏读问题
                if src["id"] == "geekpark":
                    articles = _parse_geekpark_articles(browser, src["url"])
                    source_entry["geekpark_articles"] = articles
                    if articles:
                        latest = articles[0]
                        print(f"  -> {len(data.get('text',''))} 字, 最新: {latest['date']} {latest['title'][:50]}...")
                else:
                    print(f"  -> {len(data.get('text',''))} 字, {len(data.get('links',[]))} 个链接")
                results["sources"][src["id"]] = source_entry
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


def _check_ranking_rtf_files():
    """
    检查榜单文件目录中的 RTF 文件，提取日期和条目数。
    返回: {"lmarena": {"date": "Jun 11, 2026", "entries": 22}, "producthunt": {"date": "June 13, 2026", "entries": 20}}
    """
    ranking_dir = PROJECT_ROOT / "榜单文件"
    if not ranking_dir.exists():
        return {}

    rtf_info = {}
    for rtf_file in ranking_dir.glob("*.rtf"):
        name_lower = rtf_file.name.lower()
        try:
            content = rtf_file.read_text(encoding="utf-8", errors="ignore")
            # 提取日期
            date_matches = re.findall(r'(?:Jun|June|Jan|Feb|Mar|Apr|May|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},?\s+2026', content)
            rtf_date = date_matches[0] if date_matches else "unknown"

            # 估算条目数
            entry_count = len(re.findall(r'\|\s*\d+\s+\|\s*\*\*', content))  # Product Hunt
            if entry_count == 0:
                entry_count = len(re.findall(r'\|\s*\d+\s+\|.*\\薖', content))  # LMArena

            if "lmarena" in name_lower:
                rtf_info["lmarena"] = {"date": rtf_date, "entries": entry_count, "file": str(rtf_file)}
            elif "product" in name_lower:
                rtf_info["producthunt"] = {"date": rtf_date, "entries": entry_count, "file": str(rtf_file)}
        except Exception as e:
            print(f"    读取 {rtf_file.name} 失败: {e}")

    return rtf_info


def fetch_rankings():
    """抓取榜单数据。优先读取本地 RTF 文件（LMArena/Product Hunt），OpenRouter 网页抓取。"""
    results = {"date": date.today().isoformat(), "platforms": []}

    # Step 1: 检查 RTF 文件
    rtf_info = _check_ranking_rtf_files()
    if rtf_info:
        print("[榜单·RTF] 本地榜单文件检查:")
        for key, info in rtf_info.items():
            print(f"  {key}: {info['date']}, ~{info['entries']} 条目")

    # Step 2: 只对没有 RTF 的榜单做网页抓取
    web_sources = [s for s in RANKING_SOURCES if s["id"] not in rtf_info]
    if web_sources:
        print(f"\n[榜单·网页] 抓取 {len(web_sources)} 个源...")
        with sync_playwright() as pw:
            browser = pw.chromium.launch(headless=True)

            for src in web_sources:
                print(f"  {src['name']} ({src['url']})...")
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
                    print(f"    -> {len(data.get('text',''))} 字")
                else:
                    results["platforms"].append({
                        "id": src["id"], "name": src["name"],
                        "status": "error", "error": data.get("error", ""),
                    })
                    print(f"    -> 失败: {data.get('error','')}")
                time.sleep(1)

            browser.close()
    else:
        print("[榜单·网页] 全部榜单已有 RTF 文件，跳过网页抓取")

    # Step 3: 将 RTF 信息写入结果（供 Claude 参考）
    results["rtf_files"] = rtf_info

    output_path = RAW_DIR / "rankings_raw.json"
    output_path.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n榜单数据已保存: {output_path}")
    return results


def verify_links(data_json_path=None):
    """
    链接内容复核：读取 data.json，分层验证每条新闻链接。
    - 高风险源（IT之家/36氪，URL 可推算）：Playwright 无头浏览器
    - 低风险源（新浪/财联社/澎湃等，URL 含随机哈希）：HTTP 请求 + 正则提取标题
    输出不匹配的可疑链接列表。

    返回: {"passed": [...], "failed": [...], "skipped": [...]}
    """
    if data_json_path is None:
        data_json_path = PROJECT_ROOT / "data.json"

    with open(data_json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # 收集所有 (title, link, source, section_path) 元组
    items = []

    def walk(obj, path=""):
        if isinstance(obj, dict):
            if "link" in obj and "title" in obj and isinstance(obj["link"], str) and obj["link"].startswith("http"):
                items.append({
                    "title": obj["title"],
                    "link": obj["link"],
                    "source": obj.get("source", ""),
                    "path": path,
                })
            for k, v in obj.items():
                walk(v, f"{path}.{k}")
        elif isinstance(obj, list):
            for i, v in enumerate(obj):
                walk(v, f"{path}[{i}]")

    walk(data)
    print(f"共找到 {len(items)} 条新闻链接待复核\n")

    # 分层：高风险源用 Playwright，低风险源用 HTTP 请求
    HIGH_RISK_DOMAINS = ["ithome.com", "36kr.com"]
    high_risk = []
    low_risk = []
    for item in items:
        link = item["link"]
        if any(d in link for d in HIGH_RISK_DOMAINS):
            high_risk.append(item)
        else:
            low_risk.append(item)

    print(f"🔴 高风险源 (Playwright): {len(high_risk)} 条")
    print(f"🟢 低风险源 (HTTP请求): {len(low_risk)} 条\n")

    passed = []
    failed = []
    skipped = []

    # ===== 阶段一：低风险源 — 快速 HTTP 请求 =====
    if low_risk:
        print("--- 低风险源 (HTTP 请求) ---")
        import urllib.request
        import urllib.error
        import ssl
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE

        for idx, item in enumerate(low_risk, 1):
            title = item["title"]
            link = item["link"]
            print(f"[L{idx}/{len(low_risk)}] {title[:40]}...")

            page_title = None
            try:
                req = urllib.request.Request(link, headers={
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
                    "Accept-Language": "zh-CN,zh;q=0.9",
                })
                resp = urllib.request.urlopen(req, timeout=15, context=ctx)
                html = resp.read().decode("utf-8", errors="ignore")[:50000]
                m = re.search(r"<title[^>]*>(.*?)</title>", html, re.IGNORECASE | re.DOTALL)
                if m:
                    page_title = re.sub(r"\s+", " ", m.group(1)).strip()
            except Exception as e:
                pass

            if not page_title:
                skipped.append({**item, "reason": f"HTTP 请求失败，无法提取标题"})
                print(f"  ⚠️ 跳过: 无法提取标题")
                continue

            overlap_score = _calc_title_overlap(title, page_title)
            item["page_title"] = page_title
            item["overlap"] = overlap_score
            item["method"] = "http"

            if overlap_score >= 0.15:
                passed.append(item)
                print(f"  ✅ 匹配 ({overlap_score:.0%}): {page_title[:60]}")
            else:
                failed.append(item)
                print(f"  ❌ 不匹配 ({overlap_score:.0%}): {page_title[:60]}")

    # ===== 阶段二：高风险源 — Playwright =====
    if high_risk:
        print(f"\n--- 高风险源 (Playwright) ---")
        with sync_playwright() as pw:
            browser = pw.chromium.launch(headless=True)

            for idx, item in enumerate(high_risk, 1):
                title = item["title"]
                link = item["link"]
                print(f"[H{idx}/{len(high_risk)}] {title[:40]}...")

                try:
                    result = scrape_page(browser, link, wait_sec=3)
                    if result["status"] not in ("ok", "partial"):
                        skipped.append({**item, "reason": f"页面无法访问: {result.get('error', 'unknown')}"})
                        print(f"  ⚠️ 跳过: 页面无法访问")
                        continue

                    page_title = result.get("title", "").strip()
                    if not page_title:
                        skipped.append({**item, "reason": "页面标题为空"})
                        print(f"  ⚠️ 跳过: 页面标题为空")
                        continue

                    overlap_score = _calc_title_overlap(title, page_title)
                    item["page_title"] = page_title
                    item["overlap"] = overlap_score
                    item["method"] = "playwright"

                    if overlap_score >= 0.15:
                        passed.append(item)
                        print(f"  ✅ 匹配 ({overlap_score:.0%}): {page_title[:60]}")
                    else:
                        failed.append(item)
                        print(f"  ❌ 不匹配 ({overlap_score:.0%}): {page_title[:60]}")

                except Exception as e:
                    skipped.append({**item, "reason": str(e)})
                    print(f"  ⚠️ 跳过: {e}")

            browser.close()

    print(f"\n{'='*50}")
    total = len(items)
    pw_count = len([x for x in passed + failed + skipped if x.get("method") == "playwright"])
    http_count = len([x for x in passed + failed + skipped if x.get("method") == "http"])
    print(f"复核完成: ✅ {len(passed)} 通过 | ❌ {len(failed)} 可疑 | ⚠️ {len(skipped)} 跳过")
    print(f"耗时: Playwright {pw_count} 条 + HTTP {http_count} 条 = {total} 条")
    if failed:
        print(f"\n⚠️ 以下 {len(failed)} 条链接内容与新闻标题不匹配，需重新搜索:")
        for item in failed:
            print(f"  新闻: {item['title'][:50]}")
            print(f"  链接: {item['link']}")
            print(f"  页面: {item.get('page_title', '')[:60]}")
            print(f"  来源: {item.get('source', '')}")
            print()

    # ===== 日期校验 =====
    date_issues = _check_dates(data)
    if date_issues:
        print(f"\n⚠️ 日期校验：发现 {len(date_issues)} 条日期不一致:")
        for di in date_issues:
            print(f"  新闻: {di['title'][:50]}")
            print(f"  摘要声明: {di['summary_date']}  |  链接日期: {di['link_date']}")
            print(f"  链接: {di['link'][:80]}")
            print(f"  说明: {di['reason']}")
            print()
    else:
        print(f"\n✅ 日期校验：全部一致")

    # 保存复核报告
    report_path = RAW_DIR / "link_verify_report.json"
    report = {
        "date": date.today().isoformat(),
        "passed": passed, "failed": failed, "skipped": skipped,
        "date_issues": date_issues,
    }
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"复核报告已保存: {report_path}")

    return report


def _check_dates(data):
    """
    校验每条新闻摘要中的日期声明是否与链接发布日期一致。
    规则（来自 SKILL.md Step 3b-3）：
    - 「x月x日消息」→ 日期必须等于链接文章发布日期
    - 「x月x日」→ 事件发生日，与链接日期可以不同，仅标注供人工复核
    - 「当地时间x月x日」→ 事件当地日期，与链接日期可以不同
    """
    items = []

    def walk(obj):
        if isinstance(obj, dict):
            if 'title' in obj and 'summary' in obj and 'link' in obj:
                items.append({
                    'title': obj['title'],
                    'summary': obj['summary'],
                    'link': obj['link'],
                    'time': obj.get('time', ''),
                })
            for v in obj.values():
                walk(v)
        elif isinstance(obj, list):
            for v in obj:
                walk(v)

    walk(data)

    issues = []
    for item in items:
        summary = item['summary']
        link = item['link']

        # 提取摘要日期声明
        sm = re.match(r'(当地时间\s*)?(\d+)月(\d+)日(消息)?', summary)
        if not sm:
            continue

        is_local_time = bool(sm.group(1))
        summary_month = int(sm.group(2))
        summary_day = int(sm.group(3))
        is_news_format = bool(sm.group(4))  # "消息" 结尾 → 必须匹配链接日期

        # 提取链接发布日期
        link_date = _extract_link_date(link)
        if not link_date:
            continue  # 无法识别链接日期，跳过

        link_month, link_day = link_date

        if summary_month != link_month or summary_day != link_day:
            if is_news_format:
                # 「x月x日消息」必须等于链接日期 → 硬错误
                issues.append({
                    'title': item['title'],
                    'summary_date': f"{summary_month}月{summary_day}日消息",
                    'link_date': f"{link_month}月{link_day}日",
                    'link': link,
                    'severity': 'error',
                    'reason': '「消息」格式的日期必须等于链接发布日期，请修正摘要开头和 time 字段',
                })
            elif not is_local_time:
                # 「x月x日」事件发生日，仅提示
                issues.append({
                    'title': item['title'],
                    'summary_date': f"{summary_month}月{summary_day}日",
                    'link_date': f"{link_month}月{link_day}日",
                    'link': link,
                    'severity': 'warning',
                    'reason': '事件发生日与链接发布日期不同，如确认无误可忽略',
                })

    return issues


def _extract_link_date(link):
    """从链接 URL 中提取文章发布日期。返回 (month, day) 或 None。"""
    # 新浪/东方财富等：/2026-05-29/ 或 /20260529/
    m = re.search(r'/(20\d{2})[-/](\d{2})[-/](\d{2})[/.]', link)
    if m:
        return (int(m.group(2)), int(m.group(3)))

    # 火星财经/BlockBeats：/20260529 或 flash/2026052912345
    m = re.search(r'/(20\d{2})(\d{2})(\d{2})\d{4,}', link)
    if m:
        return (int(m.group(2)), int(m.group(3)))

    # IT之家 archiver：/archiver/0/956/833.htm — 无法从 URL 推断精确日期
    # 36氪：/p/3830314181896064 — 无法从 URL 推断
    return None


def _calc_title_overlap(news_title, page_title):
    """
    计算新闻标题与页面标题的关键词重叠度。
    对中文标题：提取 2-3 字片段，计算在页面标题中的命中率。
    """
    import re

    # 清理标题：去标点、去空格
    def clean(s):
        return re.sub(r"[，,。\.！!？?：:、\s\-—·《》\"\"''（）()\[\]【】]", "", s)

    nt = clean(news_title)
    pt = clean(page_title)

    if not nt or not pt:
        return 0.0

    # 提取新闻标题的 2-4 字 n-gram 作为关键词候选
    ngrams = set()
    for length in (2, 3, 4):
        for i in range(len(nt) - length + 1):
            ngram = nt[i:i + length]
            ngrams.add(ngram)

    # 排除纯数字/英文干扰（如日期、版本号）
    ngrams = {ng for ng in ngrams if not re.match(r"^[\d\.\-\+:]+$", ng)}

    if not ngrams:
        return 0.0

    # 计算命中率
    hits = sum(1 for ng in ngrams if ng in pt)
    return hits / len(ngrams)


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
    elif cmd == "verify":
        path = sys.argv[2] if len(sys.argv) > 2 else None
        verify_links(path)
    elif cmd == "help":
        print("用法: python3 fetcher.py <command>")
        print("  news     — 抓取所有新闻源")
        print("  rankings — 抓取所有榜单")
        print("  all      — 抓取全部")
        print("  verify   — 链接内容复核（读取 data.json，校验每条链接是否匹配新闻标题）")
    else:
        print(f"未知命令: {cmd}")
        sys.exit(1)
