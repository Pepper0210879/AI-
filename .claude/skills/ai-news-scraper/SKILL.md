---
name: ai-news-scraper
description: 每日AI早报新闻抓取与整理。当用户说"抓取今日新闻"、"更新早报"、"生成今日日报"、"运行新闻抓取"时触发。
---

# 每日AI早报 — 新闻抓取工作流

## 执行规则（最高优先级，必读）

这是一个**强制工作流，不是参考文档**。违反任一规则即视为执行失败。

| # | 铁律 |
|---|------|
| 1 | 9 个步骤**按顺序逐步执行**，不得跳过、合并或调换顺序 |
| 2 | 每步结束后**必须输出检查点摘要**，确认完成后方可进入下一步 |
| 3 | 如果某步执行失败或数据缺失，**标注原因并询问用户**，不得静默跳过 |
| 4 | 所有链接必须是独立文章 URL，**日报整合页 URL 不得作为新闻链接** |
| 5 | 写入文件后**必须用 grep 自检**，确认零日报链接残留 |

**今日日期**：开始前先确认当天日期。`date` 字段使用**当天日期**（日报发布日），例如 5/29 运行 → `"date": "2026-05-29"`。

**预计总耗时**：~19 分钟（抓取 5 分钟 + 处理 13 分钟 + 复核 ~1 分钟）

---

## 目标厂商与分类

| 海外厂商 | 国内厂商 | 其他关注分类 |
|----------|----------|-------------|
| OpenAI | 阿里云 | 其他厂商 |
| Anthropic | 火山引擎 | 自动驾驶 |
| Google | DeepSeek | 具身智能 |
| xAI（含 SpaceX） | 腾讯 | AI出海 |
| NVIDIA | 小米 | 投资资讯 |
| Meta | 智谱AI | 行业趋势&观点 |
| | 月之暗面 | |
| | 华为 | |

自动驾驶重点关注：文远知行、小马智行、Waymo、特斯拉

---

## Step 1/9：定位四大早报源（~3 分钟）

**任务**：用 Playwright 直接读取四大早报源页面，找到当天最新文章 URL。

**强制要求**：必须使用 `fetcher.py news` 脚本（Playwright 无头浏览器）抓取，不得使用 WebSearch 或 WebFetch 替代。WebFetch 对企业安全策略下的中文站点不可用，WebSearch 搜索结果不稳定、经常遗漏。

```bash
cd "<项目根目录>"
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py news
```

脚本抓取内容保存到 `.claude/skills/ai-news-scraper/raw/news_raw.json`，从中提取四篇文章的标题、时间、URL。

**时效检查**：每篇文章发布时间必须是当天。如果某篇不是当天发布 → 剔除该源。周末部分源停更属正常（36氪8点1氪、爱范儿早报周末通常不更新），直接剔除即可，无需反复尝试。

| 源 | 入口 URL |
|----|---------|
| 36氪 8点1氪 | `https://36kr.com/user/5652071`（取标题含「8点1氪」的最新一篇）|
| 爱范儿 早报 | `https://www.ifanr.com/category/ifanrnews`（取标题含「早报」的最新一篇）|
| 极客公园 极客早知道 | `https://www.geekpark.net/column/74`（取最新一篇）|
| IT之家 IT早报 | `https://www.ithome.com/`（从首页提取标题含「IT早报」的最新一篇）|

如果某篇文章需要获取完整内容，用 Playwright 直接打开该文章 URL：
```python
from playwright.sync_api import sync_playwright
with sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("<文章URL>", wait_until="load", timeout=45000)
    page.wait_for_timeout(5000)
    text = page.inner_text("body")
    print(text[:30000])
    browser.close()
```

### >> 检查点 1

输出四篇文章的标题、发布时间、URL：

```
| 源 | 标题 | 发布时间 | 是否有效 |
|----|------|---------|---------|
| 36氪 | xxx | X小时前/昨天 | ✅/❌ 剔除 |
| 爱范儿 | xxx | X小时前/昨天 | ✅/❌ 剔除 |
| 极客公园 | xxx | X小时前/昨天 | ✅/❌ 剔除 |
| IT之家 | xxx | X小时前/昨天 | ✅/❌ 剔除 |
```
确认全部有效后 → 进入 Step 2。

---

## Step 2/9：抓取文章全文（~5 分钟）

**任务**：用 Playwright 抓取四篇文章全文。

```bash
cd "<项目根目录>"
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py articles \
  --36kr "<URL>" \
  --ifanr "<URL>" \
  --geekpark "<URL>" \
  --ithome "<URL>"
```

**产出**：`.claude/skills/ai-news-scraper/raw/daily_reports.json`

### >> 检查点 2

确认文件生成成功，输出每篇文章的字数。

---

## Step 3/9：处理四大早报文章 — 提取、归类、提炼（~5 分钟）

**最高准则：日报中的 AI 新闻必须全部提炼收录，不受 24 小时窗口约束。**

### 3a. 提取 AI 新闻

逐条识别四篇文章中的 AI 相关新闻，判断标准：
- 涉及目标厂商列表的新闻 → 收录
- 涉及大模型、AI 芯片、具身智能、自动驾驶、AI 应用、AI 政策 → 收录
- 自动驾驶新闻：涉及特斯拉、小马智行、文远知行、Waymo 的 → 一律收录
- 产品带有自研 AI 助手、Agentic AI 等实质性 AI 功能 → 收录（**不被品类名称误导**，如"游戏台式机"但内置 Agentic AI 助手 → 收录）
- 非技术人员使用 AI 编程工具（vibe coding / Claude Code / Cursor 等）独立开发应用 → 收录，归入"行业趋势&观点"
- 纯消费电子（手机/耳机/笔记本，无明确 AI 卖点）→ 排除
- 纯汽车（新车上市/财报/配件，不涉及自动驾驶/AI）→ 排除（**特斯拉的非智驾新闻同样排除**，如遮阳帘、降价、门店等）

### 3b. 归类、找链接、提炼摘要

对每条新闻依次执行以下子步骤：

**3b-1. 归类**：判断该新闻属于哪个厂商/分类。

**3b-2. 查找独立链接**：在互联网上搜索该新闻的独立报道。链接优先级：第一财经 > 华尔街见闻 > 证券时报 > 财联社 > 36氪 > 新浪财经 > 腾讯新闻 > IT之家 > 其他。

**搜索策略（必须执行多轮，直到找到高质量独立链接）**：

1. **首轮**：用「新闻核心关键词 + 来源媒体名」搜索，如「腾讯 Ardot 设计智能体 公测」
2. **次轮**：若首轮未找到权威来源，追加「百度百家号」关键词（华尔街见闻、第一财经等媒体常在百家号分发内容，链接权威且容易搜到）
3. **三轮**：若仍无满意结果，拆解关键词尝试不同组合，如「Ardot 腾讯 公测」「设计智能体 腾讯」
4. **底线**：不得将日报整合页 URL 作为最终链接；宁可多搜索几轮也要找到独立文章

找到的链接必须是专门报道该事件的独立文章，不能是日报整合页。

**IT之家 使用铁律（历史教训：曾因 IT之家 链接批量造假导致 40% 链接错误）**：

> IT之家 URL 格式为 `ithome.com/0/{批次}/{ID}.htm`，ID 是纯数字连续递增，极容易被推算编造。曾发现 14 条 `957/xxx` 系列链接全部指向不相关文章（vivo 耳机、摩托车比赛等）。

- **降权**：前三优先级来源（第一财经/华尔街见闻/证券时报/财联社/36氪/新浪财经/腾讯新闻）各搜索至少一轮后，才允许使用 IT之家 链接
- **溯源**：每个 IT之家 链接必须能追溯到具体的 WebSearch 搜索结果条目，严禁通过"已知日期 + 推算 ID 范围"自行构造 URL
- **验证**：Step 8 复核阶段，IT之家/36氪 等可推算 ID 的来源一律用 Playwright 逐条打开验证，不得跳过

**3b-3. 提取事件时间**：先打开独立链接阅读全文，按以下优先级提取日期：

| 优先级 | 条件 | 做法 | 示例 |
|--------|------|------|------|
| **1（最高）** | 链接正文有明确日期表述 | **直接复制原文格式**，原文写什么就写什么 | 原文「5月29日，IBM宣布」→ 写「5月29日」；原文「当地时间5月28日」→ 写「当地时间5月28日」 |
| **2** | 链接是友商官网/博客（无明确事件日） | 看官网发布日期：外国网站 →「当地时间 x月x日」，中国网站 →「x月x日」 | Anthropic Blog 标注 May 28 →「当地时间5月28日」 |
| **3（兜底）** | 链接正文无明确日期，或只写「近日」 | 写「x月x日**消息**」，日期用链接的发布日期 | 原文「近日，DeepMind CEO表示」→「5月29日消息」 |

核心原则：**不推算、不转换时区、不自行发挥**。链接写什么格式就复制什么格式。

**3b-4. 撰写摘要**：综合四大早报和独立链接的内容，撰写约 100 字的新闻摘要。格式为「日期，谁在哪里干了什么，有什么影响」。要求：
- 准确性与事实性为第一要义
- 专业名词和叙事直接引用新闻原文，不做更改
- 用新闻简报的叙事方式，清晰说明谁、干了什么、有什么影响

**3b-5. 标题**：15-25 字，保留原意，精炼表达。

**3b-6. 来源**：标注独立链接的来源媒体名称（如腾讯新闻、IT之家等），而不是早报源名称。

**3b-7. tags**：1-3 个标签。标签不要用厂商名字，用其他能概括新闻主题的关键词。

### 3c. 「其他关注」卡片标题规则

**分类归属判断（优先级最高）**：

> **「其他厂商」= 不在海外/国内重点跟踪列表里的独立厂商。** 只要新闻性质是某个厂商的 AI 产品发布或业务更新，就归入「其他厂商」。跟公司大小、知名度无关——苹果、三星、亚马逊放进「其他厂商」完全正确，它们只是不在重点跟踪列表里，不是"小公司"。

- 独立厂商的 AI 产品发布/业务动态 → 归入「其他厂商」（卡片标题用厂商名，如 `苹果`、`三星`、`微星`）
- 宏观趋势、分析报告、行业现象、非厂商主体的 AI 案例 → 归入「行业趋势&观点」
- 机器人/具身智能相关 → 归入「具身智能」（如机器人训练数据、人形机器人应用）
- 自动驾驶相关 → 归入「自动驾驶」
- 投资/融资事件 → 归入「投资资讯」

卡片标题**必须从新闻中提取具体名称**，严禁用分类名（如"其他厂商"）作为标题。按优先级：

1. 有厂商名 → 用厂商名（如 `三星`、`小米`）
2. 有人物名 → 用「人物名 + 头衔」（如 `黄仁勋（NVIDIA CEO）`）
3. 有报告名 → 用报告名（如 `QuestMobile`）
4. 融资事件 → 用被投公司名 + 轮次（如 `光轮智能 A+ 轮`）
5. 行业数据 → 用核心内容提炼

同一厂商多条新闻 → 合并为一张卡片，卡片标题用厂商名。

### 3d. 判断新闻主体

判断"谁是这个新闻的主角"，不是关键词匹配：
- 团队背景提到某公司 ≠ 该公司新闻
- 引用某产品作为对比 ≠ 该公司新闻
- 合作/发布 → 判断**谁是动作发起方/主导者**

### >> 检查点 3

输出提取结果统计表：

```
| 分类 | 厂商/卡片 | 新闻条数 |
|------|----------|---------|
| 海外 | OpenAI | 1 |
| 海外 | Anthropic | 2 |
| ... | ... | ... |
| 国内 | 阿里云 | 1 |
| ... | ... | ... |
| 其他 | MiniMax | 1 |
| ... | ... | ... |
总计：X 条
```

---

## Step 4/9：补充站点查询遗漏（~2 分钟）⚠️ 绝不可跳过

**历史教训：跳过此步曾导致腾讯 Hy-Memory 和 Miora 两条新闻被遗漏。**

日报源不可能 100% 覆盖所有厂商动态，必须从补充站点查漏补缺。

### 4a. 补充站点列表（共 8 个，每天必查）

| # | 站点 | 入口 URL | 侧重 |
|---|------|---------|------|
| 1 | 腾讯新闻科技 | `https://news.qq.com/ch/tech/` | 综合科技新闻 |
| 2 | IT之家 AI | `https://next.ithome.com/` | AI 综合资讯 |
| 3 | 机器之心 | `https://www.jiqizhixin.com/` | AI 专业媒体 |
| 4 | 量子位 | `https://www.qbitai.com/` | AI 专业媒体 |
| 5 | 千问技术 Blog | `https://qwen.ai/research#research_latest_advancements` | 通义千问最新研究 |
| 6 | 豆包技术 Blog | `https://seed.bytedance.com/zh/blog` | 字节豆包最新研究 |
| 7 | Kimi Blog | `https://www.kimi.com/blog/` | 月之暗面最新动态 |
| 8 | 智谱 AI Blog | `https://www.zhipuai.cn/zh/research` | 智谱 AI 最新研究 |

```bash
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py supplementary
```

### 4b. 重点查漏方向

- **海外厂商**：OpenAI、Anthropic、Google、xAI、NVIDIA、Meta 等遗漏动态
- **国内厂商**：阿里云、火山引擎、DeepSeek、腾讯、小米、智谱 AI、月之暗面、华为等遗漏动态
- **其他友商**：面壁智能、MiniMax、百川智能、零一万物、阶跃星辰等未在日报中出现但值得关注的新闻

### 4c. 处理规则（与 Step 3b 一致）

对补充站点找到的每条新闻，按 Step 3b 的 7 个子步骤处理：

- **归类** → 判断属于哪个厂商/分类（同 3b-1）
- **查找独立链接** → 同 3b-2
- **提取事件时间** → 三个规则同 3b-3（明确发生日 / 国外当地时 / 发布时间）
- **撰写摘要** → ~100 字，格式「时间，谁，干什么，有什么影响」（同 3b-4）
- **标题** → 15-25 字（同 3b-5）
- **来源** → 标注独立链接来源媒体名（同 3b-6）
- **tags** → 1-3 个，不用厂商名（同 3b-7）

### 4d. 过滤规则

- 排除与 Step 3 重复的新闻（标题相似/同一事件）
- **24 小时窗口**：标记"前天"或更早 → 剔除；"昨天"/"今天"/"X小时前" → 保留
- **二次复核**：完成过滤后再次确认无前天内容混入

### >> 检查点 4

```
补充站点扫描结果：
- 腾讯新闻科技：找到 X 条，去重后保留 Y 条
- IT之家 AI：找到 X 条，去重后保留 Y 条
- 机器之心：找到 X 条，去重后保留 Y 条
- 量子位：找到 X 条，去重后保留 Y 条
- 千问 Blog：找到 X 条，去重后保留 Y 条
- 豆包 Blog：找到 X 条，去重后保留 Y 条
- Kimi Blog：找到 X 条，去重后保留 Y 条
- 智谱 AI Blog：找到 X 条，去重后保留 Y 条
补充新增：X 条
遗漏复核：确认无前天内容混入 ✅
```

---

## Step 5/9：合并去重（~1 分钟）

1. 将 Step 3（日报）和 Step 4（补充站点）的新闻合并
2. 标题相似或同一事件 → 保留日报来源（日报优先）
3. 去重后按厂商/分类归类

### >> 检查点 5

```
合并结果：日报 X 条 + 补充 Y 条 - 去重 Z 条 = 最终 W 条
海外：A 条 | 国内：B 条 | 其他：C 条
```

---

## Step 6/9：榜单数据（~2 分钟）

每个榜单收集 **Top 20** 条数据。

### 6a. OpenRouter（自动抓取）

```bash
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py rankings
```

OpenRouter 数据包含每个模型的 token 使用量变化百分比，渲染时用箭头表示：
- 上升 → `↑` 绿色（如 `↑ 23%`）
- 下降 → `↓` 红色（如 `↓ 5%`）
- 持平/新上榜 → 灰色 `—`

### 6b. LMArena（读取文本文件）

检查 `榜单文件/lmarena.rtf`（用户提供的文本文件，非图片 OCR）：
- 存在 → 用 Read 工具读取 RTF 文件，提取 Top 20 榜单数据
- 不存在 → 沿用上期 data.js 中的 LMArena 数据

LMArena 表格中 `Score` 列的 `±` 值（如 `1482 ±6`）表示分数变化：
- 正变化 → `+` 绿色（如 `+6`）
- 负变化 → `-` 红色（如 `-3`）
- 无变化 → 灰色 `—`

### 6c. Product Hunt（读取文本文件）

检查 `榜单文件/producthunt.rtf`（用户提供的文本文件，非图片 OCR）：
- 存在 → 用 Read 工具读取 RTF 文件，提取 Top 20 榜单数据
- 不存在 → 沿用上期 data.js 中的 Product Hunt 数据

Product Hunt 每个产品需要额外查找**官网链接**，存入 `link` 字段，渲染时点击可跳转官网。

**Product Hunt 分类标签**：RTF 中标签列格式为 `标签1 · 标签2 · 标签3`，取**第一个标签**作为分类。

**Product Hunt 链接查找规则**：
- 直接从 RTF 中提取产品名称
- 对每个产品搜索官网 URL（优先官网 > GitHub > Product Hunt 页面）
- 无法找到官网的用 Product Hunt 页面链接代替

### 6d. 榜单数据字段规范

```json
// LMArena: 模型榜单
{ "model": "claude-opus-4-7", "score": "1503", "change": "+2" }

// OpenRouter: 模型使用量榜单
{ "model": "DeepSeek V4 Flash", "score": "3.28T tokens", "change": "↑23%" }

// Product Hunt: 产品榜单（含官网链接）
{ "name": "Ava 2.0", "category": "Sales", "rank": 1, "link": "https://artisan.co" }
```

### >> 检查点 6

```
榜单数据：
- LMArena：Top 20 ✅ / ⚠️ 截图缺位，沿用上期
- OpenRouter：Top 20 ✅
- Product Hunt：Top 20 ✅ / ⚠️ 截图缺位，沿用上期
```

---

## Step 7/9：写入文件 + 自检 + 推送（~2 分钟）⚠️ 不可跳过

### 7a. 写入 data.json

```bash
echo '<json>' | python3 .claude/skills/ai-news-scraper/scripts/helper.py write
```

### 7b. 生成 data.js

```bash
python3 -c "
import json
with open('data.json','r') as f: data=json.load(f)
js='window.__RAW_DATA = '+json.dumps(data,ensure_ascii=False,indent=2)+';'
with open('data.js','w') as f: f.write(js)
"
```

### 7c. 同步 script.js 和 admin.js

将 data.js 中的链接变更同步到 `script.js` 的 `NEWS_DATA` 和 `admin.js` 的 `DEFAULT_DATA`（三个文件的链接必须一致）。

### 7d. 链接自检（必须执行）

**自检逻辑**：从 Step 1 获取的四篇早报文章 URL 视为"日报整合页"，data.json/data.js/script.js/admin.js 中**任何新闻的 link 字段不得等于这四个 URL**。

```bash
python3 -c "
import json

# Step 1 拿到的四个早报源 URL（填入实际值）
daily_urls = {
    'https://36kr.com/p/XXXXX',        # 36氪 8点1氪
    'https://www.ifanr.com/XXXXX',     # 爱范儿早报
    'https://www.geekpark.net/news/XXXXX',  # 极客公园
    'https://www.ithome.com/0/XXX/XXX.htm',  # IT之家 IT早报
}

# 检查 data.json 中所有 link
with open('data.json', 'r') as f:
    data = json.load(f)

def check_links(obj, path=''):
    violations = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == 'link' and isinstance(v, str) and v in daily_urls:
                violations.append(f'{path}: {v}')
            check_links(v, f'{path}.{k}')
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            check_links(v, f'{path}[{i}]')
    return violations

violations = check_links(data)
if violations:
    print(f'❌ 发现 {len(violations)} 个日报链接残留，回到 Step 3b-2 补搜独立链接:')
    for v in violations:
        print(f'  {v}')
else:
    print('✅ 零日报链接残留，全部为独立文章')
"
```

**三个文件结果必须全部为 0**。任一 > 0 → 回到 Step 3b-2 补搜独立链接。

### 7e. 校验 + 推送

```bash
python3 .claude/skills/ai-news-scraper/scripts/helper.py check
git add data.json data.js script.js admin.js
git commit -m "更新早报至 YYYY-MM-DD"
git push origin main
```

### 7f. 同步飞书知识库

```bash
python3 .claude/skills/ai-news-scraper/scripts/feishu_sync.py --date YYYY-MM-DD
```

飞书同步规则：
- 按日期创建独立子表（`AI日报MMDD`）
- **仅同步有新闻的厂商**，`news: []` 的空厂商不写入飞书
- 同步榜单数据（LMArena / OpenRouter / Product Hunt），含变化值
- 若同名表已存在 → **删除旧表并重建**，确保字段和记录完全一致
- 写入前自动检查字段，缺失则补全

### 7g. 更新种子数据

将当日 data.json 合并到 `seed-data.js`，为 GitHub Pages 提供历史新闻数据（支撑 Step 8 无新闻厂商近期动态）。

```bash
python3 -c "
import json
from pathlib import Path

# 读取当日数据
with open('data.json') as f:
    today = json.load(f)

# 读取现有种子数据
seed_file = Path('seed-data.js')
if seed_file.exists():
    content = seed_file.read_text()
    start = content.index('{')
    end = content.rindex('}') + 1
    seed = json.loads(content[start:end])
else:
    seed = {}

# 合并：当日数据覆盖同日期，保留最近 3 天
seed[today['date']] = today
dates = sorted(seed.keys(), reverse=True)
for old_date in dates[3:]:
    del seed[old_date]

# 写入
js = '// 种子数据：为 Step 8 无新闻厂商近期动态提供历史新闻\nwindow.__SEED_CONFIRMED = ' + json.dumps(seed, ensure_ascii=False, indent=2) + ';\n'
seed_file.write_text(js)
print(f'种子数据已更新：包含 {list(seed.keys())}，共 {len(js)} 字符')
"
```

### >> 检查点 7

```
✅ data.json 已写入：海外 X 条 | 国内 Y 条 | 其他 Z 条 | 榜单 3 组
✅ data.js 已同步
✅ script.js NEWS_DATA 已同步
✅ admin.js DEFAULT_DATA 已同步
✅ 链接自检：data.json 全部为独立文章，零日报链接残留
✅ 种子数据已更新：包含最近 3 天
✅ 飞书知识库已同步：X 条新闻 + Y 条榜单
✅ git push 成功
✅ 以上检查全部通过 → 进入 Step 8
```

---

## Step 8/9：链接内容复核（~1 分钟）⚠️ 绝不可跳过

**历史教训：跳过此步曾导致亚马逊 Kirorank、何小鹏机器人、高考 AI 限制等多条新闻链接指向不相关文章。2026-06-01 复核发现 5/30 日报 14 条 IT之家 957 系列链接全部为编造 ID，错误率 40%。**

当前 Step 7d 的自检只保证"链接不是日报整合页"，不保证"链接内容与新闻标题匹配"。IT之家同一批次文章 URL 格式相似（如 `957/290` vs `957/310`），仅靠 URL 无法区分。

### 8a. 分层复核策略

脚本按链接来源自动选择复核方式，兼顾速度与可靠性：

| 风险等级 | 来源 | URL 特征 | 复核方式 | 原因 |
|----------|------|---------|---------|------|
| 🔴 高风险 | IT之家、36氪 | 纯数字 ID，可推算编造 | **Playwright** | 历史造假重灾区 |
| 🟢 低风险 | 新浪、财联社、澎湃、东方财富等 | URL 含随机哈希，无法编造 | **HTTP 请求** | 速度快 10 倍，可靠性高 |

```bash
cd "<项目根目录>"
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py verify
```

脚本行为：
1. 读取 `data.json` 中所有新闻的 `link` 字段
2. 按域名自动分类：IT之家/36氪 → Playwright 无头浏览器；其余 → HTTP GET + 正则提取 `<title>`
3. 提取新闻标题的 2-4 字 n-gram 关键词，计算与页面标题的重叠度
4. 重叠度 ≥ 15% → ✅ 通过；< 15% → ❌ 可疑；页面无法访问 → ⚠️ 跳过
5. **日期校验**：提取摘要中的日期声明，与链接 URL 中的发布日期对比：
   - 「x月x日**消息**」格式 → 日期必须等于链接发布日期，不一致视为**硬错误**
   - 「x月x日」格式 → 事件发生日，与链接日期可不同，仅提示供人工确认

### 8b. 处理复核结果

| 状态 | 含义 | 处理方式 |
|------|------|---------|
| ✅ 通过 | 链接内容与新闻标题匹配 | 无需操作 |
| ❌ 可疑 | 链接指向不相关文章 | **回退到 Step 3b-2**，对该新闻重新搜索独立链接 |
| ⚠️ 跳过 | 页面无法访问 | 查看报告中的 reason，判断是否需要重试 |
| 📅 日期错误 | 「消息」格式日期与链接发布日期不一致 | **修正摘要开头和 time 字段**，改为链接实际发布日期 |

**复核通过标准**：0 条 ❌ 可疑。任何 ❌ 都必须回退重新搜索，直到全部 ✅ 或 ⚠️（页面确实无法访问且有合理原因）。

### 8c. 复核报告

报告保存在 `.claude/skills/ai-news-scraper/raw/link_verify_report.json`，包含每条新闻的校验结果和所用方法（`playwright` / `http`）。

### >> 检查点 8

```
链接内容复核：
- 共 X 条新闻链接（🔴高风险 Y 条 + 🟢低风险 Z 条）
- ✅ 通过：A 条
- ❌ 可疑：0 条（必须为 0）
- ⚠️ 跳过：B 条（注明原因）
- 📅 日期错误：0 条（必须为 0）
复核通过 ✅ → 进入 Step 9
```

---

## Step 9/9：无新闻厂商补充近期动态（~1 分钟）⚠️ 绝不可跳过

**适用板块**：「海外厂商」和「国内厂商」两个板块。

对于 `news: []` 的厂商，卡片不显示空白状态，而是展示**近期发生的 2-3 条新闻**，让读者知道该厂商最近动态。

### 8a. 查找近期新闻

从 `localStorage('ai-news-confirmed')` 中按日期倒序查找该厂商的历史新闻：

1. 获取所有已确认的历史日期，按日期倒序排列
2. 从最近日期开始，查找该厂商名称的 `news[]`
3. 取 2-3 条不重复的新闻（按 `title` 去重）
4. 记录每条新闻所属的日期（即 `confirmed[dateStr].date`）

### 8b. 渲染规则

```
本日无新闻，关注近期新闻            ← 灰色文字，左对齐
x月x日新闻  |  新闻标题            ← 灰色文字，字号与上行一致
x月x日新闻  |  新闻标题
```

- 所有文字使用 `var(--text-muted)` 灰色
- 日期格式：`M月D日新闻`（如 `5月28日新闻`）
- 标题截断到 25 字以内
- "本日无新闻，关注近期新闻" 左对齐（`align-self: flex-start`）
- 近期新闻条目字号与"本日无新闻"一致（`0.85rem`）
- 若近期新闻有原始链接，点击标题可在新标签页打开

### 8c. 代码实现位置

- `script.js`：`renderVendorCards()` 函数中 `vendor.news.length === 0` 分支
- 辅助函数：`getRecentNewsForVendor(vendorName, sectionKey)` — 从 `CONFIRMED_KEY` 读取历史数据
- `styles.css`：`.vendor-card-recent`、`.vendor-card-recent-item` 样式

### >> 检查点 9

```
无新闻厂商近期动态补充：
- OpenAI：找到 3 条近期新闻 ✅
- NVIDIA：找到 2 条近期新闻 ✅
- DeepSeek：找到 3 条近期新闻 ✅
- ...
共计：X 个无新闻厂商，已全部补充
🎉 工作流执行完毕
```

---

## 输出格式（参考）

```json
{
  "date": "2026-05-29",
  "sections": {
    "overseas": {
      "vendors": [
        {"name": "OpenAI", "news": [{"title": "...", "summary": "...", "link": "https://独立链接", "tags": ["..."], "source": "极客公园", "time": "5小时前"}]}
      ]
    },
    "domestic": {
      "vendors": [
        {"name": "阿里云", "news": []}, {"name": "火山引擎", "news": []},
        {"name": "DeepSeek", "news": []}, {"name": "腾讯", "news": []},
        {"name": "小米", "news": []}, {"name": "智谱AI", "news": []},
        {"name": "月之暗面", "news": []}, {"name": "华为", "news": []}
      ]
    },
    "other": {
      "categories": [
        {"name": "其他厂商", "cards": [{"title": "三星", "news": [...]}]},
        {"name": "自动驾驶", "cards": []},
        {"name": "具身智能", "cards": []},
        {"name": "AI出海", "cards": []},
        {"name": "投资资讯", "cards": []},
        {"name": "行业趋势&观点", "cards": []}
      ]
    },
    "ranking": {
      "platforms": [
        {"name": "LMArena", "date": "2026-05-28", "rankings": [{"model": "...", "score": "..."}]},
        {"name": "OpenRouter", "date": "2026-05-28", "rankings": [{"model": "...", "score": "..."}]},
        {"name": "Product Hunt", "date": "2026-05-28", "rankings": [{"name": "...", "category": "...", "rank": 1, "link": "https://..."}]}
      ]
    }
  }
}
```

---

## 快速参考

| 规则 | 说明 |
|------|------|
| 日报优先 | 四大早报中 AI 新闻必须全部收录，不受 24 小时限制 |
| 链接强制 | 日报整合 URL 不得作为新闻链接；写入后必须 grep 自检 |
| 链接优先级 | 第一财经 > 证券时报 > 财联社 > 36氪 > 新浪财经 > 腾讯新闻 > IT之家 |
| 日期当天 | `date` 使用当天日期（日报发布日），不往前一天 |
| 时间兜底 | 链接无法确认事件确切日期 → 一律写「x月x日消息」，不做自行推断 |
| 不被品类误导 | 产品带 Agentic AI / 自研 AI 助手等实质 AI 功能 → 收录，不看品类名 |
| Vibe Coding | 非技术人员用 AI 编程工具独立开发应用 → 收录，归入行业趋势&观点 |
| 其他厂商 vs 趋势 | 具体厂商 AI 产品 → 其他厂商；宏观趋势/行业现象 → 行业趋势&观点 |
| 补充站点 | Step 4 绝不可跳过；24 小时窗口过滤 + 二次复核 |
| 卡片标题 | 其他关注分类标题必须具体，严禁用分类名 |
| 判断主体 | 区分新闻主角 vs 被提及方，关键词匹配 ≠ 正确归类 |
| 摘要规范 | 70-100 字，不加日期前缀，客观陈述 |
| 宁缺毋滥 | 纯 PR 稿、无新信息、重复报道跳过 |
| 三文件同步 | data.js / script.js / admin.js 链接和内容必须一致 |
| 空数组 | 无新闻的厂商/分类，news/cards 保留 `[]` |
| 无新闻卡片 | 海外/国内厂商无新闻时展示近期 2-3 条历史新闻，灰色文字 |
| 飞书同步 | 仅同步有新闻厂商 + 榜单；同名表存在则删除重建；确保字段完整 |
