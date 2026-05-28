# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

每日AI早报 — 纯静态前端网站，展示 AI 行业新闻。零依赖、无构建步骤，直接用浏览器打开 `index.html` 即可运行。

## 文件结构

| 文件 | 职责 |
|------|------|
| `index.html` | 首页，展示新闻卡片、弹窗、日期选择器 |
| `styles.css` | 首页全部样式（~1365 行） |
| `script.js` | 首页全部 JS 逻辑：数据加载、渲染、弹窗、导出 |
| `admin.html` | 后台管理页面，受密码保护 |
| `admin.css` | 后台样式（登录遮罩、编辑器面板） |
| `admin.js` | 后台 CRUD 逻辑 + 登录验证 |

无 package.json、无 node_modules、无构建工具。

## 数据模型

核心数据结构位于 `script.js` 的 `NEWS_DATA` 常量中，四个板块：

```
sections
├── overseas   → vendors[] → 每个 vendor 有 news[]
├── domestic   → vendors[] → 每个 vendor 有 news[]
├── other      → categories[] → 每个 category 有 news[]
└── ranking    → platforms[] → 每个 platform 有 rankings[]
```

- **vendor** 字段：`name, color, softBg, initial, news[]`
- **news** 字段：`title, summary, link, tags[], source, time`
- **rankings** 分两种：普通榜单 `{model, score, change}` 和 ProductHunt `{name, upvotes, rank}`
- 判断 ProductHunt：`'name' in platform.rankings[0]`（而非 `platform.rank`）

### 数据流与持久化

```
NEWS_DATA (硬编码默认值)
    ↓ 首次加载时写入 localStorage
localStorage('ai-news-data')
    ↓ script.js: loadNewsData() 同步读取
newsData (运行时对象，所有渲染函数的输入)
```

- **优先级**：localStorage > 默认 NEW_DATA。`script.js:374-382` 的 `loadNewsData()` 是同步函数
- 后台 `admin.js` 保存时写入同一个 localStorage key
- 未来计划加入 n8n 抓取的 `data.json`，优先级将变为：localStorage > data.json > 默认值

### 数据重复注意

`admin.js` 中有一份独立的 `DEFAULT_DATA` 常量，用于"重置为默认"功能。修改默认数据结构时，`script.js` 的 `NEWS_DATA` 和 `admin.js` 的 `DEFAULT_DATA` 必须同步更新。

## 渲染架构

`script.js` 中：
- `renderContent(filter)` — 顶层路由，按 filter 分发到四个板块
- `renderVendorCards(key, section, rowSizes)` — 海外/国内厂商，按 `rowSizes` 数组分组为多行 grid。每行一个 `<div class="vendor-cards-row" style="--cols: N">`，CSS 通过 `--cols` 控制列数
- `renderOtherSection(section)` — "其他关注"板块，内部有横向子 tab（`.other-tab`）切换分类，只显示有新闻的分类。使用特定标记的结构
- `renderRankingSection(section)` — 榜单卡片 grid
- 所有板块的大卡片（`.content-section`）默认可折叠，点击 section-header 切换 `.collapsed` 类

关键渲染函数：
- 弹窗：`openVendorModal(category, vendorIndex)` / `openOtherNewsModal(catIndex, newsIndex)`
- 导出：`downloadReport()` 生成 Markdown 文件
- 日期：`updateHeaderDate(dateStr)` 更新标题栏日期徽章

## 后台管理关键细节

- 默认密码：`admin123`，在 `admin.js:61` 的 `ADMIN_PASSWORD` 常量中修改
- 登录遮罩通过 `overlay.style.display = 'none'` 隐藏（纯前端验证）
- 编辑器使用 HTML 字符串拼接 + 事件委托，`renderEditor()` 每次都重建整个表单并重新绑定事件
- 字段变更通过 `data-field` + `data-vi/data-ni/data-pi/data-ri/data-ci` 数据集属性映射到数据模型，`applyFieldChange()` 根据 field 名称路由到正确的数据路径

## 开发方式

直接浏览器打开文件即可。推荐使用本地静态服务器（Python 或 VS Code Live Server）：

```bash
# Python
python3 -m http.server 8080

# 或 VS Code 右键 → Open with Live Server
```

然后访问 `http://localhost:8080/index.html` 或 `admin.html`。
