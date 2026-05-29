---
name: ai-news-scraper
description: 每日AI早报新闻抓取与整理。当用户说"抓取今日新闻"、"更新早报"、"生成今日日报"、"运行新闻抓取"时触发。
---

# 每日AI早报 — 新闻抓取工作流

## 执行规则（最高优先级，必读）

这是一个**强制工作流，不是参考文档**。违反任一规则即视为执行失败。

| # | 铁律 |
|---|------|
| 1 | 8 个步骤**按顺序逐步执行**，不得跳过、合并或调换顺序 |
| 2 | 每步结束后**必须输出检查点摘要**，确认完成后方可进入下一步 |
| 3 | 如果某步执行失败或数据缺失，**标注原因并询问用户**，不得静默跳过 |
| 4 | 所有链接必须是独立文章 URL，**日报整合页 URL 不得作为新闻链接** |
| 5 | 写入文件后**必须用 grep 自检**，确认零日报链接残留 |

**今日日期**：开始前先确认当天日期。`date` 字段使用**当天日期**（日报发布日），例如 5/29 运行 → `"date": "2026-05-29"`。

**预计总耗时**：~17 分钟（抓取 5 分钟 + 处理 12 分钟）

---

## 目标厂商与分类

| 海外厂商 | 国内厂商 | 其他关注分类 |
|----------|----------|-------------|
| OpenAI | 阿里云 | 其他厂商 |
| Anthropic | 火山引擎 | 自动驾驶 |
| Google | DeepSeek | 具身智能 |
| xAI | 腾讯 | AI出海 |
| NVIDIA | 小米 | 投资资讯 |
| Meta | 智谱AI | 行业趋势&观点 |
| | 月之暗面 | |
| | 华为 | |

自动驾驶重点关注：文远知行、小马智行、Waymo、特斯拉

---

## Step 1/8：定位三大早报源（~3 分钟）

**任务**：找到 36氪「8点1氪」、爱范儿「早报」、极客公园「极客早知道」当天最新文章 URL。

**时效检查**：如果三篇中最新的发布时间距今超过 20 小时 → 询问用户是否继续；20 小时以内 → 直接继续。

| 源 | 入口 |
|----|------|
| 36氪 8点1氪 | 搜索 `https://36kr.com/search/articles/8点1氪`，取标题含「8点1氪」的最新一篇 |
| 爱范儿 早报 | `https://www.ifanr.com/category/ifanrnews`，取标题含「早报」的最新一篇 |
| 极客公园 极客早知道 | `https://www.geekpark.net/column/74`，取最新一篇 |

### >> 检查点 1

输出三篇文章的标题、发布时间、URL：

```
| 源 | 标题 | 发布时间 | 是否有效 |
|----|------|---------|---------|
| 36氪 | xxx | X小时前 | ✅/⚠️ |
| 爱范儿 | xxx | X小时前 | ✅/⚠️ |
| 极客公园 | xxx | X小时前 | ✅/⚠️ |
```
确认全部有效后 → 进入 Step 2。

---

## Step 2/8：抓取文章全文（~5 分钟）

**任务**：用 Playwright 抓取三篇文章全文。

```bash
cd "<项目根目录>"
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py articles \
  --36kr "<URL>" \
  --ifanr "<URL>" \
  --geekpark "<URL>"
```

**产出**：`.claude/skills/ai-news-scraper/raw/daily_reports.json`

### >> 检查点 2

确认文件生成成功，输出每篇文章的字数。

---

## Step 3/8：处理三大日报文章 — 提取、归类、提炼（~5 分钟）

**最高准则：日报中的 AI 新闻必须全部提炼收录，不受 24 小时窗口约束。**

### 3a. 提取 AI 新闻

逐条识别三篇文章中的 AI 相关新闻，判断标准：
- 涉及目标厂商列表的新闻 → 收录
- 涉及大模型、AI 芯片、具身智能、自动驾驶、AI 应用、AI 政策 → 收录
- 纯消费电子（手机/耳机/笔记本，无明确 AI 卖点）→ 排除
- 纯汽车（新车上市/财报，不涉及自动驾驶/AI）→ 排除

### 3b. 归类与提炼

每条新闻完成以下字段：

| 字段 | 规则 |
|------|------|
| 归类 | 判断属于哪个厂商/分类 |
| 标题 | 15-25 字，保留原意，精炼表达 |
| 摘要 | 70-100 字，客观陈述关键数据和事实，不加日期前缀 |
| 来源 | 标注来自哪个早报源（36氪/爱范儿/极客公园） |
| tags | 1-3 个标签 |

### 3c. 「其他关注」卡片标题规则

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

## Step 4/8：查找独立文章链接（~3 分钟）⚠️ 不可跳过

**日报文章本身的 URL 不能作为新闻链接。** 对 Step 3 提取的每条新闻：

1. 在补充站点（IT之家、量子位、机器之心）搜索独立报道
2. 补充站点无结果 → 搜索引擎搜索标题 → 找权威媒体独立报道
3. 链接指向的页面必须**专门报道该条新闻**，不能是日报整合页、列表页

**实在找不到时**：补充站点 > 搜索引擎 > 日报链接（降级保留）

### >> 检查点 4

输出每条新闻的链接状态：

```
| 新闻标题（简写） | 链接类型 | URL 来源 |
|------------------|---------|---------|
| OpenAI 基金会... | ✅ 独立 | c114.net.cn |
| 某新闻... | ⚠️ 降级 | 日报链接（原因：全网无独立报道）|
```
确认每条链接都已处理 → 进入 Step 5。

---

## Step 5/8：补充站点查询遗漏（~2 分钟）⚠️ 绝不可跳过

**历史教训：跳过此步曾导致腾讯 Hy-Memory 和 Miora 两条新闻被遗漏。**

日报源不可能 100% 覆盖所有厂商动态，必须从补充站点查漏补缺。

**补充站点**：IT之家 (ithome.com)、量子位 (qbitai.com)、机器之心 (jiqizhixin.com)、腾讯新闻 (news.qq.com)

```bash
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py supplementary
```

**过滤规则**：
- 排除与 Step 3 重复的新闻（标题相似/同一事件）
- **24 小时窗口**：标记"前天"或更早 → 剔除；"昨天"/"今天"/"X小时前" → 保留
- **二次复核**：完成过滤后再次确认无前天内容混入

### >> 检查点 5

```
补充站点扫描结果：
- IT之家：找到 X 条 AI 新闻，去重后保留 Y 条
- 量子位：...
- 机器之心：...
- 腾讯新闻：...
补充新增：X 条
遗漏复核：确认无前天内容混入 ✅
```

---

## Step 6/8：合并去重（~1 分钟）

1. 将 Step 3（日报）和 Step 5（补充站点）的新闻合并
2. 标题相似或同一事件 → 保留日报来源（日报优先）
3. 去重后按厂商/分类归类

### >> 检查点 6

```
合并结果：日报 X 条 + 补充 Y 条 - 去重 Z 条 = 最终 W 条
海外：A 条 | 国内：B 条 | 其他：C 条
```

---

## Step 7/8：榜单数据（~2 分钟）

### 7a. OpenRouter（自动抓取）

```bash
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py rankings
```

### 7b. LMArena + ProductHunt（截图 OCR）

检查 `榜单截图/lmarena.jpg` 和 `榜单截图/producthunt.jpg`：
- 存在 → AI 识图提取榜单数据
- 不存在 → 沿用上期 data.js 中的榜单数据

### >> 检查点 7

```
榜单数据：
- LMArena：Top 10 ✅ / ⚠️ 截图缺位，沿用上期
- OpenRouter：Top 10 ✅
- Product Hunt：Top 10 ✅ / ⚠️ 截图缺位，沿用上期
```

---

## Step 8/8：写入文件 + 自检 + 推送（~2 分钟）⚠️ 不可跳过

### 8a. 写入 data.json

```bash
echo '<json>' | python3 .claude/skills/ai-news-scraper/scripts/helper.py write
```

### 8b. 生成 data.js

```bash
python3 -c "
import json
with open('data.json','r') as f: data=json.load(f)
js='window.__RAW_DATA = '+json.dumps(data,ensure_ascii=False,indent=2)+';'
with open('data.js','w') as f: f.write(js)
"
```

### 8c. 同步 script.js 和 admin.js

将 data.js 中的链接变更同步到 `script.js` 的 `NEWS_DATA` 和 `admin.js` 的 `DEFAULT_DATA`（三个文件的链接必须一致）。

### 8d. 链接自检（必须执行）

```bash
grep -c 'ifanr.com/1667419\|geekpark.net/news/365005' data.js script.js admin.js
```

三个文件结果**必须全部为 0**。任一 > 0 → 回到 Step 4 补搜独立链接。

### 8e. 校验 + 推送

```bash
python3 .claude/skills/ai-news-scraper/scripts/helper.py check
git add data.json data.js script.js admin.js
git commit -m "更新早报至 YYYY-MM-DD"
git push origin main
```

### >> 检查点 8（最终确认）

```
✅ data.json 已写入：海外 X 条 | 国内 Y 条 | 其他 Z 条 | 榜单 3 组
✅ data.js 已同步
✅ script.js NEWS_DATA 已同步
✅ admin.js DEFAULT_DATA 已同步
✅ 链接自检：data.js=0 script.js=0 admin.js=0
✅ git push 成功
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
        {"name": "Product Hunt", "date": "2026-05-28", "rankings": [{"name": "...", "category": "...", "rank": 1}]}
      ]
    }
  }
}
```

---

## 快速参考

| 规则 | 说明 |
|------|------|
| 日报优先 | 三大日报中 AI 新闻必须全部收录，不受 24 小时限制 |
| 链接强制 | 日报整合 URL 不得作为新闻链接；写入后必须 grep 自检 |
| 日期当天 | `date` 使用当天日期（日报发布日），不往前一天 |
| 补充站点 | Step 5 绝不可跳过；24 小时窗口过滤 + 二次复核 |
| 卡片标题 | 其他关注分类标题必须具体，严禁用分类名 |
| 判断主体 | 区分新闻主角 vs 被提及方，关键词匹配 ≠ 正确归类 |
| 摘要规范 | 70-100 字，不加日期前缀，客观陈述 |
| 宁缺毋滥 | 纯 PR 稿、无新信息、重复报道跳过 |
| 三文件同步 | data.js / script.js / admin.js 链接和内容必须一致 |
| 空数组 | 无新闻的厂商/分类，news/cards 保留 `[]` |
