# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 强制约束（最高优先级）

> **更新日报时，必须逐字逐句严格执行 `.claude/skills/ai-news-scraper/SKILL.md` 中的全部 9 个步骤。按顺序逐步执行，每步结束后必须输出检查点摘要并确认通过后方可进入下一步。不得跳过、合并、调换顺序，不得省略任何子步骤，不得以"节省时间"为由简化流程。任何违反即视为执行失败。**

### 早报源抓取铁律

> **Step 1 定位四大早报源时，必须直接使用 Playwright 读取网页链接，不得使用 WebSearch 或 WebFetch 替代。** 原因：WebFetch 被企业安全策略阻止（36kr.com / ifanr.com / geekpark.net / ithome.com 均无法访问），WebSearch 搜索结果不完整、不稳定，曾多次导致遗漏新闻。Playwright 无头浏览器直接打开源站页面，可完整获取文章列表和全文内容。

### IT之家 链接铁律

> **IT之家 URL 为 `ithome.com/0/{批次}/{ID}.htm`，ID 纯数字可推算。严禁自行构造 IT之家 URL，每个 IT之家 链接必须来自 WebSearch 搜索结果。2026-06-01 复核发现 5/30 日报中 14 条 `957/xxx` 系列链接全部为编造 ID，指向完全不相关的文章（vivo 耳机、摩托车比赛等），错误率 40%。**

### 链接复核铁律

> **Step 8 链接内容复核绝不可跳过。** 脚本自动分层验证：IT之家/36氪（URL 可推算）→ Playwright 逐条打开；其他来源（URL 含随机哈希无法编造）→ HTTP 快速请求。复核不通过（任何 ❌）必须回退到 Step 3b-2 重新搜索，直到 0 条可疑。

### 日期格式铁律

> **友商官方博客/官网链接（如 Anthropic Blog、OpenAI Blog 等），页面标注的发布日期即为当地时间。摘要必须写「当地时间 x 月 x 日」，不得写「x 月 x 日消息」。**

### 分类归属铁律

> **海外/国内友商新闻优先归入各自卡片，不被赛道分类抢走。** 即使 OpenAI 发布机器人、NVIDIA 发布自动驾驶芯片，这些新闻也应留在各自友商卡片内，不得因为涉及具身智能/自动驾驶赛道而移至「其他关注」板块。赛道分类（具身智能 → 自动驾驶 → AI出海 → 投资资讯 → 其他厂商 → 行业趋势&观点）仅用于「其他关注」板块内部的归类判断，不适用于被跟踪的友商。

### NVIDIA GTC 标题规范

> **GTC 大会发布的技术，标题前缀必须标注「NVIDIA GTC 2026：」，发布主体是英伟达公司而非黄仁勋个人。** 不要将 GTC 与 COMPUTEX 混淆——英伟达的主要发布在 GTC，COMPUTEX 是同期的行业展会。若新闻链接声称产品在 COMPUTEX 发布但实际在 GTC 发布，该链接不可用，必须换到正确标注 GTC 的报道。

### xAI 显示名铁律

> **数据中 xAI 的 name 字段写 `xAI`，不写「xAI（含 SpaceX）」。** SpaceX 新闻归入 xAI 卡片的内部规则通过 memory 记录，不在页面上展示。

### 其他关注空卡片铁律

> **「其他关注」中 news 为空的卡片不应保留。** 只保留有新闻的卡片。

## 项目概述

每日AI早报 — 纯静态前端网站，展示 AI 行业新闻。零依赖、无构建步骤，直接用浏览器打开 `index.html` 即可运行。

## 文件结构

| 文件 | 职责 |
|------|------|
| `index.html` | 首页，信源说明弹窗、新闻卡片、日期选择器 |
| `styles.css` | 首页全部样式 |
| `script.js` | 首页 JS：数据加载链路、渲染、弹窗、导出、近期新闻 |
| `admin.html` | 后台管理，白名单实名登录、审计日志面板 |
| `admin.css` | 后台样式（登录遮罩、编辑器面板、日志侧栏） |
| `admin.js` | 后台 CRUD + 白名单验证 + 审计日志 |
| `data.json` | 每日新闻数据源，由日报工作流写入 |
| `data.js` | `window.__RAW_DATA = {...}`，由 data.json 生成 |
| `seed-data.js` | `window.__SEED_CONFIRMED` + `__SEED_VERSION`，最近 3 天种子数据 |
| `logos/` | 友商 Logo 图片（PNG），分主厂商和 `其他厂商/` 子目录 |
| `.claude/skills/ai-news-scraper/` | 日报抓取 skill（SKILL.md + Python 脚本） |

无 package.json、无 node_modules、无构建工具。

## 数据模型

核心数据结构四个板块：

```
sections
├── overseas   → vendors[] → 每个 vendor 有 news[]
├── domestic   → vendors[] → 每个 vendor 有 news[]
├── other      → categories[] → 每个 category 有 cards[]{title, news[]}
└── ranking    → platforms[] → 每个 platform 有 link + rankings[]
```

- **vendor** 字段：`name, color, softBg, initial, logo?, news[]`
- **news** 字段：`title, summary, link, tags[], source, time`
- **ranking platform** 必须含 `link` 字段指向官网
- ProductHunt 判断：`'name' in platform.rankings[0]`

### 数据加载链路（实际运行逻辑）

```
data.js → window.__RAW_DATA
seed-data.js → window.__SEED_CONFIRMED + __SEED_VERSION
    ↓ script.js: loadNewsDataFromJSON()
比较 data.js.date vs localStorage.date + _manualEdit 标记
    ↓
localStorage('ai-news-data')  ← 最终胜出的数据
    ↓
newsData → renderContent() → 渲染
```

- **优先级**：localStorage（有 `_manualEdit` 或日期更新） > data.js > NEWS_DATA 默认值
- admin 保存时设置 `_manualEdit` 时间戳，首页检测到后优先读 localStorage
- `__SEED_VERSION` 变更时自动清除全部 localStorage 缓存

### 榜单数据来源

- **LMArena**：读取 `榜单文件/LMArena.rtf`，不存在则沿用上期
- **OpenRouter**：`fetcher.py rankings` 自动抓取
- **Product Hunt**：读取 `榜单文件/Product Hunt.rtf`，需手动搜索产品官网链接

## 渲染架构

`script.js` 中：
- `renderContent(filter)` — 顶层路由，按 filter 分发到四个板块
- `renderVendorCards(key, section, rowSizes)` — 海外/国内厂商。`vendor.news.length === 0` 时调用 `getRecentNewsForVendor()` 从 seed-data 查找近期新闻展示
- `renderOtherSection(section)` — "其他关注"板块，内部横向子 tab，只显示有新闻的分类。卡片图标通过 `VENDOR_DISPLAY[card.title]` 匹配，有 `logo` 则显示图片否则显示首字母
- `renderRankingSection(section)` — 榜单卡片 grid，`platform.link` 存在时标题可点击跳转
- 所有大卡片（`.content-section`）默认可折叠，点击 section-header 切换 `.collapsed` 类

**Logo 渲染**：`VENDOR_DISPLAY` 对象统一管理，海外/国内厂商通过 `enrichData()` 注入 `logo` 字段，其他关注卡片通过 `card.title` 精确匹配。主厂商 Logo 在 `logos/` 根目录，其他厂商在 `logos/其他厂商/`，文件名 = 卡片标题。

**近期新闻**：`getRecentNewsForVendor(vendorName, sectionKey)` 从 `localStorage('ai-news-confirmed')`（由 `seed-data.js` 注入）按日期倒序查找，去重取 3 条，灰色文字展示。

关键渲染函数：
- 弹窗：`openVendorModal(category, vendorIndex)` / `openOtherNewsModal(catIndex, newsIndex)`
- 导出：`downloadReport()` 生成 Markdown 文件
- 日期：`updateHeaderDate(dateStr)` 更新标题栏日期徽章

## 后台管理关键细节

- **白名单实名登录**：`admin.js` 中 `OPERATOR_WHITELIST` 数组控制可进入人员。打开 admin 直接输入姓名，不在白名单拒绝进入。同设备已登录过自动跳过。
- **审计日志**：每次保存/确认/取消确认自动记录操作人 + 时间 + 变更内容，存储在 `localStorage('ai-news-audit-log')`，最多 50 条。右侧「日志」按钮滑出面板查看。`addAuditEntry()` 统一写入，`diffData()` 按位置逐条比对标题/摘要/链接/时间/标签变更。
- **编辑器事件**：`bindFieldChanges()` 同时监听 `input` 和 `change` 事件，确保实时同步 + 失焦兜底。仅 `change` 会在某些浏览器中导致点击保存时数据未同步。
- **保存优先**：`saveData()` 先写 localStorage 再记录日志，核心操作不因审计失败而阻塞。
- 编辑器使用 HTML 字符串拼接 + 事件委托，`renderEditor()` 每次都重建整个表单并重新绑定事件
- 字段变更通过 `data-field` + `data-vi/data-ni/data-pi/data-ri/data-ci` 数据集属性映射到数据模型，`applyFieldChange()` 根据 field 名称路由到正确的数据路径

## 开发方式

直接浏览器打开文件即可。推荐使用本地静态服务器：

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080/index.html` 或 `admin.html`。

## 脚本命令速查

所有脚本位于 `.claude/skills/ai-news-scraper/scripts/`，从项目根目录执行。

```bash
# 抓取四大早报源 + 补充站点 → raw/news_raw.json
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py news

# 抓取榜单数据 → raw/rankings_raw.json
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py rankings

# 逐条复核链接正确性 → raw/link_verify_report.json
python3 .claude/skills/ai-news-scraper/scripts/fetcher.py verify

# 同步飞书知识库
python3 .claude/skills/ai-news-scraper/scripts/feishu_sync.py --date YYYY-MM-DD
```

**注意**：`fetcher.py articles` 和 `fetcher.py supplementary` 命令可能未实现，需用 Playwright 手动抓取或用 `fetcher.py news` 替代（news 命令已包含补充站点）。
