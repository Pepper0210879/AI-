const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
    date: "2026-05-28",
    sections: {
        overseas: {
            title: "海外主要厂商",
            icon: "fas fa-globe-americas",
            iconClass: "overseas",
            vendors: [
                { name: "OpenAI", color: "#7ab8d6", softBg: "#edf5fa", initial: "O", news: [{ title: "OpenAI 发布 GPT-5：多模态能力全面提升", summary: "OpenAI 今日正式发布 GPT-5，新版本在视觉理解、代码生成和多轮对话方面实现了显著提升，推理速度提升 3 倍。", link: "#", tags: ["大模型", "GPT-5"], source: "TechCrunch", time: "2小时前" }] },
                { name: "Anthropic", color: "#c4a882", softBg: "#faf5ee", initial: "A", news: [{ title: "Anthropic 发布 Claude 4：长上下文推理能力大幅增强", summary: "AI 安全公司 Anthropic 发布 Claude 4，在长文本理解和复杂推理任务上表现优异，支持 200K token 上下文窗口。", link: "#", tags: ["Claude", "AI安全"], source: "Reuters", time: "8小时前" }] },
                { name: "Google", color: "#8ac4a0", softBg: "#effaf3", initial: "G", news: [{ title: "Google DeepMind 推出 AlphaFold 4：蛋白质预测再突破", summary: "DeepMind 发布最新版 AlphaFold，在蛋白质结构预测领域取得突破性进展，准确率从上一代的 92% 提升至 98%。", link: "#", tags: ["生物AI", "DeepMind"], source: "Nature", time: "5小时前" }] },
                { name: "xAI", color: "#8ab4d4", softBg: "#eef5fb", initial: "X", news: [{ title: "xAI Grok 3.5 发布：数学推理能力对标 GPT-5", summary: "马斯克旗下 xAI 发布 Grok 3.5，在数学和代码推理基准测试中表现接近 GPT-5 水平，集成 X 平台实时数据。", link: "#", tags: ["Grok", "xAI"], source: "The Verge", time: "3小时前" }] },
                { name: "NVIDIA", color: "#a8c47a", softBg: "#f4f9ee", initial: "N", news: [{ title: "NVIDIA 发布 B300 GPU：AI 训练性能提升 4 倍", summary: "NVIDIA 在 GTC 大会上发布新一代 B300 GPU，采用 Blackwell Ultra 架构，AI 训练性能较上代提升 4 倍。", link: "#", tags: ["GPU", "芯片"], source: "AnandTech", time: "6小时前" }] },
                { name: "Meta", color: "#8a9ad4", softBg: "#eff0fa", initial: "M", news: [] }
            ]
        },
        domestic: {
            title: "国内主要厂商",
            icon: "fas fa-flag",
            iconClass: "domestic",
            vendors: [
                { name: "阿里云", color: "#d4a06a", softBg: "#faf5ee", initial: "阿", news: [{ title: "阿里云通义千问 Qwen3 发布：开源模型性能再创新高", summary: "阿里云发布通义千问 Qwen3 系列，开源版本在多项基准测试中超越同级别模型，支持 128K 上下文长度。", link: "#", tags: ["通义千问", "开源"], source: "36氪", time: "3小时前" }] },
                { name: "火山引擎", color: "#8aaed4", softBg: "#eef5fb", initial: "火", news: [{ title: "火山引擎豆包大模型升级：推理成本降低 60%", summary: "字节跳动旗下火山引擎宣布豆包大模型全面升级，推理成本降低 60%，新增多模态理解与生成能力。", link: "#", tags: ["豆包", "大模型"], source: "机器之心", time: "5小时前" }] },
                { name: "DeepSeek", color: "#7ab8d6", softBg: "#edf5fa", initial: "D", news: [{ title: "DeepSeek-V3 开源：MoE 架构训练成本仅 550 万美元", summary: "DeepSeek 发布 V3 版本，采用 MoE 架构，总训练成本仅 550 万美元，性能对标 GPT-4 级别模型。", link: "#", tags: ["开源", "MoE"], source: "量子位", time: "7小时前" }] },
                { name: "腾讯", color: "#8ac4a0", softBg: "#effaf3", initial: "腾", news: [{ title: "腾讯混元大模型接入微信生态：AI 助手全量上线", summary: "腾讯宣布混元大模型全面接入微信生态，AI 助手功能已面向全部用户上线，支持对话、搜索、内容生成。", link: "#", tags: ["混元", "微信"], source: "界面新闻", time: "4小时前" }] },
                { name: "智谱 AI", color: "#b4a0d4", softBg: "#f5f0fa", initial: "智", news: [{ title: "智谱 GLM-5 发布：中文理解能力行业领先", summary: "智谱 AI 发布 GLM-5 模型，在中文理解、代码生成和数学推理等任务上表现优异，中文理解能力行业领先。", link: "#", tags: ["GLM", "中文AI"], source: "机器之心", time: "6小时前" }] },
                { name: "MiniMax", color: "#d4a0b4", softBg: "#faf0f4", initial: "M", news: [{ title: "MiniMax 海螺 AI 视频生成能力升级：支持 60 秒长视频", summary: "MiniMax 旗下海螺 AI 升级视频生成能力，支持生成最长 60 秒的高质量视频，画面一致性大幅提升。", link: "#", tags: ["视频生成", "海螺AI"], source: "36氪", time: "8小时前" }] },
                { name: "月之暗面", color: "#b4a0d4", softBg: "#f5f0fa", initial: "月", news: [{ title: "Kimi 长上下文能力升级：支持 200 万 token 输入", summary: "月之暗面宣布 Kimi 智能助手长上下文窗口扩展至 200 万 token，可一次性处理数百页文档。", link: "#", tags: ["Kimi", "长上下文"], source: "量子位", time: "9小时前" }] },
                { name: "华为", color: "#d4a0a0", softBg: "#faf0f0", initial: "华", news: [{ title: "华为盘古大模型 5.0 发布：赋能千行百业智能化", summary: "华为发布盘古大模型 5.0，在工业制造、气象预测、金融风控等领域实现深度赋能，新增多模态能力。", link: "#", tags: ["盘古", "行业AI"], source: "华为官网", time: "10小时前" }] }
            ]
        },
        other: {
            title: "其他关注",
            icon: "fas fa-layer-group",
            iconClass: "other",
            categories: [
                { name: "其他厂商", icon: "fas fa-building", color: "#a0a8b0", softBg: "#f2f4f5", cards: [{ title: "Stability AI", news: [{ title: "Stability AI 发布 Stable Diffusion 4：图像质量再突破", summary: "Stability AI 发布 SD4 模型，图像生成质量和文字渲染能力大幅提升，支持 4K 分辨率输出。", link: "#", tags: ["图像生成", "SD4"], source: "VentureBeat", time: "4小时前" }] }] },
                { name: "自动驾驶", icon: "fas fa-car", color: "#82c4d4", softBg: "#eefafc", cards: [{ title: "Waymo", news: [{ title: "Waymo 在旧金山实现全无人驾驶商业化运营一周年", summary: "Waymo 宣布在旧金山全无人驾驶商业化运营满一周年，累计完成超 20 万次付费出行，零重大事故。", link: "#", tags: ["自动驾驶", "Waymo"], source: "TechCrunch", time: "6小时前" }] }] },
                { name: "具身智能", icon: "fas fa-robot", color: "#d4b482", softBg: "#faf6ee", cards: [{ title: "Figure", news: [{ title: "Figure 02 人形机器人进入 BMW 工厂试运行", summary: "Figure AI 的 Figure 02 人形机器人开始在 BMW 南卡工厂试运行，执行车身检测和零件搬运任务。", link: "#", tags: ["人形机器人", "具身智能"], source: "Reuters", time: "7小时前" }] }] },
                { name: "AI出海", icon: "fas fa-ship", color: "#8ac4a0", softBg: "#effaf3", cards: [{ title: "字节跳动", news: [{ title: "字节跳动 CapCut AI 功能全球用户突破 5 亿", summary: "字节跳动旗下 CapCut 的 AI 视频编辑功能全球月活用户突破 5 亿，东南亚和拉美市场增长迅猛。", link: "#", tags: ["AI出海", "CapCut"], source: "36氪出海", time: "8小时前" }] }] },
                { name: "投资资讯", icon: "fas fa-chart-line", color: "#d4c482", softBg: "#faf9ee", cards: [{ title: "CoreWeave", news: [{ title: "AI 基础设施赛道持续火热：CoreWeave 估值突破 350 亿美元", summary: "GPU 云服务商 CoreWeave 完成新一轮融资，估值达 350 亿美元，AI 基础设施投资热度不减。", link: "#", tags: ["投资", "GPU云"], source: "Bloomberg", time: "5小时前" }] }] },
                { name: "行业趋势&观点", icon: "fas fa-lightbulb", color: "#b4a0d4", softBg: "#f5f0fa", cards: [{ title: "Demis Hassabis", news: [{ title: "Demis Hassabis：AI 将在十年内解决大多数科学难题", summary: "DeepMind CEO Demis Hassabis 在最新访谈中表示，AI 将在未来十年内帮助人类解决蛋白质折叠、材料设计等核心科学问题。", link: "#", tags: ["观点", "DeepMind", "AI4Science"], source: "The Verge", time: "12小时前" }] }] }
            ]
        },
        ranking: {
            title: "榜单情况",
            icon: "fas fa-trophy",
            iconClass: "ranking",
            platforms: [
                { name: "LMArena", color: "#7ab8d6", softBg: "#edf5fa", initial: "L", date: "2026-05-28", rankings: [{ model: "GPT-5", score: "1387", change: "up" }, { model: "Claude 4 Opus", score: "1375", change: "up" }, { model: "Gemini 2.5 Pro", score: "1362", change: "same" }, { model: "Grok 3.5", score: "1350", change: "up" }, { model: "DeepSeek-V3", score: "1345", change: "down" }] },
                { name: "OpenRouter", color: "#b4a0d4", softBg: "#f5f0fa", initial: "O", date: "2026-05-28", rankings: [{ model: "Claude 4 Opus", score: "92.3%", change: "same" }, { model: "GPT-5", score: "91.8%", change: "up" }, { model: "Gemini 2.5 Pro", score: "90.1%", change: "down" }, { model: "Qwen3-72B", score: "88.5%", change: "up" }, { model: "DeepSeek-V3", score: "87.9%", change: "same" }] },
                { name: "Product Hunt", color: "#d4a882", softBg: "#faf5ee", initial: "P", date: "2026-05-28", rankings: [{ name: "Cursor AI 2.0 — AI 编程助手重大升级", upvotes: "2,847", rank: 1 }, { name: "NotebookLM Pro — Google AI 笔记工具", upvotes: "1,923", rank: 2 }, { name: "Replit Agent — 全自动代码生成 Agent", upvotes: "1,654", rank: 3 }, { name: "Gamma AI — AI 演示文稿生成", upvotes: "1,287", rank: 4 }, { name: "Perplexity Enterprise — 企业级 AI 搜索", upvotes: "1,102", rank: 5 }] }
            ]
        }
    }
};

// ==================== 登录 ====================
const ADMIN_PASSWORD = 'admin123'; // 在这里修改密码

function checkLogin() {
    const overlay = document.getElementById('login-overlay');
    const input = document.getElementById('login-password');
    const error = document.getElementById('login-error');
    const btn = document.getElementById('login-btn');

    function attemptLogin() {
        if (input.value === ADMIN_PASSWORD) {
            overlay.style.display = 'none';
        } else {
            error.textContent = '密码错误，请重试';
            input.value = '';
            input.focus();
        }
    }

    btn.addEventListener('click', attemptLogin);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') attemptLogin();
    });
}

// ==================== 状态 ====================
let editingData = null;
let currentSection = 'overseas';

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
    loadData();
    renderEditor();

    document.querySelectorAll('#section-tabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSection = btn.dataset.section;
            document.querySelectorAll('#section-tabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderEditor();
        });
    });

    document.getElementById('save-btn').addEventListener('click', saveData);
    setupConfirmToday();
    updateSaveStatus();
});

function loadData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            editingData = JSON.parse(saved);
            return;
        }
    } catch (e) {}
    editingData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(editingData));
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(editingData));
    localStorage.setItem('ai-news-last-update', new Date().toISOString());
    updateSaveStatus();
    showToast('数据已保存');
}

function updateSaveStatus() {
    const d = new Date();
    document.getElementById('save-status').textContent =
        `上次保存: ${d.toLocaleString('zh-CN')}`;
}

// ==================== 确认当日新闻 ====================
function setupConfirmToday() {
    const confirmBtn = document.getElementById('confirm-btn');
    const unconfirmBtn = document.getElementById('unconfirm-btn');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmCancelBtn = document.getElementById('confirm-cancel-btn');
    const confirmOkBtn = document.getElementById('confirm-ok-btn');
    const unconfirmModal = document.getElementById('unconfirm-modal');
    const unconfirmCancelBtn = document.getElementById('unconfirm-cancel-btn');
    const unconfirmOkBtn = document.getElementById('unconfirm-ok-btn');

    updateConfirmButtons();

    // 「确认当日新闻」按钮
    confirmBtn.addEventListener('click', () => {
        document.getElementById('confirm-date-text').textContent = getTodayStr();
        confirmModal.classList.add('active');
    });

    confirmCancelBtn.addEventListener('click', () => {
        confirmModal.classList.remove('active');
    });

    confirmOkBtn.addEventListener('click', () => {
        confirmTodayNews();
        confirmModal.classList.remove('active');
        updateConfirmButtons();
        showToast('今日新闻已确认发布');
    });

    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) confirmModal.classList.remove('active');
    });

    // 「取消确认内容」按钮
    unconfirmBtn.addEventListener('click', () => {
        unconfirmModal.classList.add('active');
    });

    unconfirmCancelBtn.addEventListener('click', () => {
        unconfirmModal.classList.remove('active');
    });

    unconfirmOkBtn.addEventListener('click', () => {
        unconfirmTodayNews();
        unconfirmModal.classList.remove('active');
        updateConfirmButtons();
        showToast('已取消今日确认，可重新编辑并确认');
    });

    unconfirmModal.addEventListener('click', (e) => {
        if (e.target === unconfirmModal) unconfirmModal.classList.remove('active');
    });

    // 页面加载时，检查过往日期是否有遗漏确认
    autoConfirmMissedDays();
}

function updateConfirmButtons() {
    const confirmBtn = document.getElementById('confirm-btn');
    const unconfirmBtn = document.getElementById('unconfirm-btn');
    if (isTodayConfirmed()) {
        confirmBtn.style.display = 'none';
        unconfirmBtn.style.display = '';
    } else {
        confirmBtn.style.display = '';
        unconfirmBtn.style.display = 'none';
    }
}

function getTodayStr() {
    return new Date().toISOString().split('T')[0];
}

function getYesterdayStr() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
}

function getConfirmedData() {
    try {
        return JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function isTodayConfirmed() {
    return !!getConfirmedData()[getTodayStr()];
}

function confirmTodayNews() {
    const todayStr = getTodayStr();
    const confirmed = getConfirmedData();
    confirmed[todayStr] = JSON.parse(JSON.stringify(editingData));
    localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
}

function unconfirmTodayNews() {
    const confirmed = getConfirmedData();
    delete confirmed[getTodayStr()];
    localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
}

function autoConfirmMissedDays() {
    const confirmed = getConfirmedData();
    const todayStr = getTodayStr();
    const yesterdayStr = getYesterdayStr();

    // 检查昨天是否遗漏确认（昨天 24 点已过但未确认）
    if (!confirmed[yesterdayStr]) {
        // 用当前 editingData 自动确认昨天
        // editingData 此时可能已是今天的数据，但如果没有被更新过就是昨天的
        confirmed[yesterdayStr] = JSON.parse(JSON.stringify(editingData));
        localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
    }
}

// ==================== 渲染 ====================
function renderEditor() {
    const el = document.getElementById('admin-editor');
    const sec = editingData.sections[currentSection];

    if (currentSection === 'overseas' || currentSection === 'domestic') {
        el.innerHTML = renderVendorSection(sec);
    } else if (currentSection === 'other') {
        el.innerHTML = renderOtherSection(sec);
    } else if (currentSection === 'ranking') {
        el.innerHTML = renderRankingSection(sec);
    }

    bindPanelToggles(el);
    bindTagInputs(el);
    bindFieldChanges(el);
}

// ==================== Vendor 板块 ====================
function renderVendorSection(sec) {
    const panels = sec.vendors.map((v, vi) => `
        <div class="admin-panel open" data-vendor-index="${vi}">
            <div class="panel-header" data-toggle="panel">
                <div class="panel-header-info">
                    <div class="panel-icon" style="background:${v.softBg};color:${v.color};">
                        ${v.logo ? `<img src="${esc(v.logo)}" alt="${esc(v.name)}" class="admin-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${esc(v.initial)}';">` : esc(v.initial)}
                    </div>
                    <span class="panel-name">${esc(v.name)}</span>
                    <span class="panel-count">${v.news.length} 条新闻</span>
                </div>
                <div class="panel-header-actions" style="display:flex;align-items:center;gap:0.5rem;">
                    <button class="btn-sm danger" data-delete-vendor="${vi}" onclick="event.stopPropagation()">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                    <span class="panel-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="panel-body">
                <div class="panel-meta">
                    <div class="news-field">
                        <label>厂商名称</label>
                        <input type="text" data-field="vendor-name" data-vi="${vi}" value="${esc(v.name)}">
                    </div>
                    <div class="news-field">
                        <label>首字母（logo 加载失败时回退）</label>
                        <input type="text" data-field="vendor-initial" data-vi="${vi}" value="${esc(v.initial)}" maxlength="2" style="width:60px;">
                    </div>
                    <div class="news-field">
                        <label>Logo 路径</label>
                        <input type="text" data-field="vendor-logo" data-vi="${vi}" value="${esc(v.logo || '')}" placeholder="logos/xxx.svg">
                    </div>
                    <div class="news-field">
                        <label>颜色</label>
                        <input type="color" data-field="vendor-color" data-vi="${vi}" value="${v.color}" style="width:40px;height:32px;padding:2px;">
                    </div>
                </div>
                ${v.news.map((n, ni) => renderNewsEditor(n, vi, ni)).join('')}
                <div class="add-btn-row">
                    <button class="btn-sm primary" data-add-news="${vi}">
                        <i class="fas fa-plus"></i> 添加新闻
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    return panels + `
        <div class="add-btn-row">
            <button class="btn-sm primary" id="add-vendor-btn">
                <i class="fas fa-plus"></i> 添加厂商
            </button>
        </div>
    `;
}

function renderNewsEditor(n, vi, ni, cardIdx) {
    const tags = n.tags || [];
    const cardAttr = cardIdx !== undefined ? ` data-card-idx="${cardIdx}"` : '';
    return `
        <div class="admin-news-item" data-news-index="${ni}" data-vi="${vi}"${cardAttr}>
            <div class="news-field-row">
                <div class="news-field">
                    <label>标题</label>
                    <input type="text" data-field="title" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.title)}">
                </div>
            </div>
            <div class="news-field-row single">
                <div class="news-field">
                    <label>摘要</label>
                    <textarea data-field="summary" data-vi="${vi}" data-ni="${ni}"${cardAttr}>${esc(n.summary)}</textarea>
                </div>
            </div>
            <div class="news-field-row">
                <div class="news-field">
                    <label>来源</label>
                    <input type="text" data-field="source" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.source)}">
                </div>
                <div class="news-field">
                    <label>链接</label>
                    <input type="text" data-field="link" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.link)}">
                </div>
            </div>
            <div class="news-field-row">
                <div class="news-field">
                    <label>时间标注</label>
                    <input type="text" data-field="time" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.time)}">
                </div>
                <div class="news-field">
                    <label>标签</label>
                    <div class="tags-row" data-tags-vi="${vi}" data-tags-ni="${ni}"${cardAttr}>
                        ${tags.map((t, ti) => `
                            <span class="tag-item">
                                ${esc(t)}
                                <span class="tag-remove" data-remove-tag="${ti}">&times;</span>
                            </span>
                        `).join('')}
                        <input type="text" class="tag-input" data-tag-input placeholder="+标签" size="6">
                    </div>
                </div>
            </div>
            <div class="admin-actions">
                <button class="btn-sm danger" data-delete-news="${vi}" data-ni="${ni}"${cardAttr}>
                    <i class="fas fa-trash"></i> 删除此新闻
                </button>
            </div>
        </div>
    `;
}

// ==================== Other 板块 ====================
function renderOtherSection(sec) {
    const panels = sec.categories.map((c, ci) => {
        const cards = c.cards || [];
        const totalNews = cards.reduce((s, card) => s + card.news.length, 0);
        return `
        <div class="admin-panel open" data-cat-index="${ci}">
            <div class="panel-header" data-toggle="panel">
                <div class="panel-header-info">
                    <div class="panel-icon" style="background:${c.softBg};color:${c.color};">
                        <i class="${c.icon}"></i>
                    </div>
                    <span class="panel-name">${esc(c.name)}</span>
                    <span class="panel-count">${cards.length} 卡片 / ${totalNews} 条新闻</span>
                </div>
                <div class="panel-header-actions" style="display:flex;align-items:center;gap:0.5rem;">
                    <button class="btn-sm danger" data-delete-cat="${ci}" onclick="event.stopPropagation()">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                    <span class="panel-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="panel-body">
                <div class="panel-meta">
                    <div class="news-field">
                        <label>分类名称</label>
                        <input type="text" data-field="cat-name" data-ci="${ci}" value="${esc(c.name)}">
                    </div>
                    <div class="news-field">
                        <label>图标 class</label>
                        <input type="text" data-field="cat-icon" data-ci="${ci}" value="${esc(c.icon)}">
                    </div>
                    <div class="news-field">
                        <label>颜色</label>
                        <input type="color" data-field="cat-color" data-ci="${ci}" value="${c.color}" style="width:40px;height:32px;padding:2px;">
                    </div>
                </div>
                ${cards.map((card, cardIdx) => `
                    <div class="admin-card-panel" style="margin: 0.5rem 0; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
                        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
                            <span style="font-weight:600;font-size:0.85rem;">卡片标题</span>
                            <input type="text" data-field="card-title" data-ci="${ci}" data-card-idx="${cardIdx}" value="${esc(card.title)}" style="flex:1;">
                            <button class="btn-sm danger" data-delete-card="${ci}" data-card-idx="${cardIdx}" style="white-space:nowrap;">
                                <i class="fas fa-trash"></i> 删除卡片
                            </button>
                        </div>
                        ${card.news.map((n, ni) => renderNewsEditor(n, ci, ni, cardIdx)).join('')}
                        <div class="add-btn-row">
                            <button class="btn-sm primary" data-add-card-news="${ci}" data-card-idx="${cardIdx}">
                                <i class="fas fa-plus"></i> 添加新闻
                            </button>
                        </div>
                    </div>
                `).join('')}
                <div class="add-btn-row" style="margin-top:0.75rem;">
                    <button class="btn-sm primary" data-add-card="${ci}">
                        <i class="fas fa-plus"></i> 添加卡片
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    return panels + `
        <div class="add-btn-row">
            <button class="btn-sm primary" id="add-cat-btn">
                <i class="fas fa-plus"></i> 添加分类
            </button>
        </div>
    `;
}

// ==================== Ranking 板块 ====================
function renderRankingSection(sec) {
    const panels = sec.platforms.map((p, pi) => {
        const isPH = p.rankings.length > 0 && 'name' in p.rankings[0];
        return `
        <div class="admin-panel open" data-platform-index="${pi}">
            <div class="panel-header" data-toggle="panel">
                <div class="panel-header-info">
                    <div class="panel-icon" style="background:${p.softBg};color:${p.color};">
                        ${p.initial}
                    </div>
                    <span class="panel-name">${esc(p.name)}</span>
                    <span class="panel-count">${p.rankings.length} 条排名</span>
                </div>
                <div class="panel-header-actions" style="display:flex;align-items:center;gap:0.5rem;">
                    <button class="btn-sm danger" data-delete-platform="${pi}" onclick="event.stopPropagation()">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                    <span class="panel-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="panel-body">
                <div class="panel-meta">
                    <div class="news-field">
                        <label>平台名称</label>
                        <input type="text" data-field="platform-name" data-pi="${pi}" value="${esc(p.name)}">
                    </div>
                    <div class="news-field">
                        <label>日期</label>
                        <input type="date" data-field="platform-date" data-pi="${pi}" value="${p.date}">
                    </div>
                    <div class="news-field">
                        <label>颜色</label>
                        <input type="color" data-field="platform-color" data-pi="${pi}" value="${p.color}" style="width:40px;height:32px;padding:2px;">
                    </div>
                </div>
                ${p.rankings.map((r, ri) => renderRankingEditor(r, pi, ri, isPH)).join('')}
                <div class="add-btn-row">
                    <button class="btn-sm primary" data-add-ranking="${pi}">
                        <i class="fas fa-plus"></i> 添加排名
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    return panels + `
        <div class="add-btn-row">
            <button class="btn-sm primary" id="add-platform-btn">
                <i class="fas fa-plus"></i> 添加榜单平台
            </button>
        </div>
    `;
}

function renderRankingEditor(r, pi, ri, isPH) {
    if (isPH) {
        return `
            <div class="admin-news-item" data-ranking-index="${ri}" data-pi="${pi}">
                <div class="news-field-row">
                    <div class="news-field">
                        <label>产品名称</label>
                        <input type="text" data-field="ph-name" data-pi="${pi}" data-ri="${ri}" value="${esc(r.name)}">
                    </div>
                    <div class="news-field">
                        <label>Upvotes</label>
                        <input type="text" data-field="ph-upvotes" data-pi="${pi}" data-ri="${ri}" value="${esc(r.upvotes)}">
                    </div>
                </div>
                <div class="admin-actions">
                    <button class="btn-sm danger" data-delete-ranking="${pi}" data-ri="${ri}">
                        <i class="fas fa-trash"></i> 删除此排名
                    </button>
                </div>
            </div>
        `;
    }
    return `
        <div class="admin-news-item" data-ranking-index="${ri}" data-pi="${pi}">
            <div class="news-field-row">
                <div class="news-field">
                    <label>模型名称</label>
                    <input type="text" data-field="rk-model" data-pi="${pi}" data-ri="${ri}" value="${esc(r.model)}">
                </div>
                <div class="news-field">
                    <label>分数</label>
                    <input type="text" data-field="rk-score" data-pi="${pi}" data-ri="${ri}" value="${esc(r.score)}">
                </div>
            </div>
            <div class="news-field-row">
                <div class="news-field">
                    <label>变化</label>
                    <select data-field="rk-change" data-pi="${pi}" data-ri="${ri}" style="padding:0.5rem;border:1px solid var(--border);border-radius:var(--radius-xs);font-family:inherit;">
                        <option value="up" ${r.change === 'up' ? 'selected' : ''}>上升</option>
                        <option value="same" ${r.change === 'same' ? 'selected' : ''}>持平</option>
                        <option value="down" ${r.change === 'down' ? 'selected' : ''}>下降</option>
                    </select>
                </div>
            </div>
            <div class="admin-actions">
                <button class="btn-sm danger" data-delete-ranking="${pi}" data-ri="${ri}">
                    <i class="fas fa-trash"></i> 删除此排名
                </button>
            </div>
        </div>
    `;
}

// ==================== 事件绑定 ====================
function bindPanelToggles(el) {
    el.querySelectorAll('[data-toggle="panel"]').forEach(header => {
        header.addEventListener('click', () => {
            header.closest('.admin-panel').classList.toggle('open');
        });
    });
}

function bindTagInputs(el) {
    el.querySelectorAll('.tag-input').forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const val = input.value.trim();
                if (!val) return;
                const row = input.closest('[data-tags-vi]');
                const vi = parseInt(row.dataset.tagsVi);
                const ni = parseInt(row.dataset.tagsNi);
                const cardIdx = row.dataset.cardIdx !== undefined ? parseInt(row.dataset.cardIdx) : undefined;
                const vendor = getVendor(vi, ni, cardIdx);
                if (!vendor) return;
                const news = vendor.news[ni];
                if (!news.tags) news.tags = [];
                if (!news.tags.includes(val)) {
                    news.tags.push(val);
                    renderEditor();
                }
            }
        });

        input.closest('.tags-row').addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.tag-remove');
            if (!removeBtn) return;
            const ti = parseInt(removeBtn.dataset.removeTag);
            const row = removeBtn.closest('[data-tags-vi]');
            const vi = parseInt(row.dataset.tagsVi);
            const ni = parseInt(row.dataset.tagsNi);
            const cardIdx = row.dataset.cardIdx !== undefined ? parseInt(row.dataset.cardIdx) : undefined;
            const vendor = getVendor(vi, ni, cardIdx);
            if (!vendor) return;
            vendor.news[ni].tags.splice(ti, 1);
            renderEditor();
        });
    });
}

function bindFieldChanges(el) {
    // 使用事件委托监听所有输入变化
    el.addEventListener('change', (e) => {
        const target = e.target;
        if (!target.dataset.field) return;
        applyFieldChange(target);
    });

    // 删除厂商
    el.querySelectorAll('[data-delete-vendor]').forEach(btn => {
        btn.addEventListener('click', () => {
            const vi = parseInt(btn.dataset.deleteVendor);
            const sec = editingData.sections[currentSection];
            if (!confirm(`确认删除「${sec.vendors[vi].name}」及其所有新闻？`)) return;
            sec.vendors.splice(vi, 1);
            renderEditor();
        });
    });

    // 删除新闻
    el.querySelectorAll('[data-delete-news]').forEach(btn => {
        btn.addEventListener('click', () => {
            const vi = parseInt(btn.dataset.deleteNews);
            const ni = parseInt(btn.dataset.ni);
            const cardIdx = btn.dataset.cardIdx !== undefined ? parseInt(btn.dataset.cardIdx) : undefined;
            const vendor = getVendor(vi, ni, cardIdx);
            if (!vendor) return;
            if (!confirm('确认删除此新闻？')) return;
            vendor.news.splice(ni, 1);
            renderEditor();
        });
    });

    // 添加新闻
    el.querySelectorAll('[data-add-news]').forEach(btn => {
        btn.addEventListener('click', () => {
            const vi = parseInt(btn.dataset.addNews);
            const sec = editingData.sections[currentSection];
            sec.vendors[vi].news.push({
                title: '', summary: '', link: '#', tags: [], source: '', time: ''
            });
            renderEditor();
        });
    });

    // 添加厂商
    const addVendorBtn = el.querySelector('#add-vendor-btn');
    if (addVendorBtn) {
        addVendorBtn.addEventListener('click', () => {
            const sec = editingData.sections[currentSection];
            sec.vendors.push({
                name: '新厂商', color: '#8ab4d4', softBg: '#eef5fb', initial: '新', news: []
            });
            renderEditor();
        });
    }

    // Other: 删除分类
    el.querySelectorAll('[data-delete-cat]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.deleteCat);
            const sec = editingData.sections.other;
            if (!confirm(`确认删除「${sec.categories[ci].name}」？`)) return;
            sec.categories.splice(ci, 1);
            renderEditor();
        });
    });

    // Other: 添加分类
    const addCatBtn = el.querySelector('#add-cat-btn');
    if (addCatBtn) {
        addCatBtn.addEventListener('click', () => {
            editingData.sections.other.categories.push({
                name: '新分类', icon: 'fas fa-star', color: '#a0a8b0', softBg: '#f2f4f5', cards: []
            });
            renderEditor();
        });
    }

    // Other: 添加卡片
    el.querySelectorAll('[data-add-card]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.addCard);
            editingData.sections.other.categories[ci].cards.push({
                title: '新卡片', news: []
            });
            renderEditor();
        });
    });

    // Other: 删除卡片
    el.querySelectorAll('[data-delete-card]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.deleteCard);
            const cardIdx = parseInt(btn.dataset.cardIdx);
            const cat = editingData.sections.other.categories[ci];
            if (!confirm(`确认删除卡片「${cat.cards[cardIdx].title}」及其所有新闻？`)) return;
            cat.cards.splice(cardIdx, 1);
            renderEditor();
        });
    });

    // Other: 添加新闻（在卡片内）
    el.querySelectorAll('[data-add-card-news]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.addCardNews);
            const cardIdx = parseInt(btn.dataset.cardIdx);
            editingData.sections.other.categories[ci].cards[cardIdx].news.push({
                title: '', summary: '', link: '#', tags: [], source: '', time: ''
            });
            renderEditor();
        });
    });

    // Ranking: 删除平台
    el.querySelectorAll('[data-delete-platform]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pi = parseInt(btn.dataset.deletePlatform);
            const sec = editingData.sections.ranking;
            if (!confirm(`确认删除「${sec.platforms[pi].name}」？`)) return;
            sec.platforms.splice(pi, 1);
            renderEditor();
        });
    });

    // Ranking: 添加平台
    const addPlatformBtn = el.querySelector('#add-platform-btn');
    if (addPlatformBtn) {
        addPlatformBtn.addEventListener('click', () => {
            editingData.sections.ranking.platforms.push({
                name: '新榜单', color: '#8ab4d4', softBg: '#eef5fb', initial: '新',
                date: editingData.date, rankings: []
            });
            renderEditor();
        });
    }

    // Ranking: 添加排名
    el.querySelectorAll('[data-add-ranking]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pi = parseInt(btn.dataset.addRanking);
            const platform = editingData.sections.ranking.platforms[pi];
            const isPH = platform.rankings.length > 0 && 'name' in platform.rankings[0];
            if (isPH) {
                platform.rankings.push({ name: '', upvotes: '', rank: platform.rankings.length + 1 });
            } else {
                platform.rankings.push({ model: '', score: '', change: 'same' });
            }
            renderEditor();
        });
    });

    // Ranking: 删除排名
    el.querySelectorAll('[data-delete-ranking]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pi = parseInt(btn.dataset.deleteRanking);
            const ri = parseInt(btn.dataset.ri);
            editingData.sections.ranking.platforms[pi].rankings.splice(ri, 1);
            renderEditor();
        });
    });
}

function applyFieldChange(input) {
    const field = input.dataset.field;
    const value = input.type === 'color' ? input.value : input.value;

    if (field === 'vendor-name') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].name = value;
    } else if (field === 'vendor-initial') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].initial = value;
    } else if (field === 'vendor-logo') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].logo = value;
    } else if (field === 'vendor-color') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].color = value;
    } else if (field === 'title' || field === 'summary' || field === 'source' || field === 'link' || field === 'time') {
        const vi = parseInt(input.dataset.vi);
        const ni = parseInt(input.dataset.ni);
        const cardIdx = input.dataset.cardIdx !== undefined ? parseInt(input.dataset.cardIdx) : undefined;
        const vendor = getVendor(vi, ni, cardIdx);
        if (vendor) vendor.news[ni][field] = value;
    } else if (field === 'card-title') {
        const ci = parseInt(input.dataset.ci);
        const cardIdx = parseInt(input.dataset.cardIdx);
        editingData.sections.other.categories[ci].cards[cardIdx].title = value;
    } else if (field === 'cat-name') {
        const ci = parseInt(input.dataset.ci);
        editingData.sections.other.categories[ci].name = value;
    } else if (field === 'cat-icon') {
        const ci = parseInt(input.dataset.ci);
        editingData.sections.other.categories[ci].icon = value;
    } else if (field === 'cat-color') {
        const ci = parseInt(input.dataset.ci);
        editingData.sections.other.categories[ci].color = value;
    } else if (field === 'platform-name') {
        const pi = parseInt(input.dataset.pi);
        editingData.sections.ranking.platforms[pi].name = value;
    } else if (field === 'platform-date') {
        const pi = parseInt(input.dataset.pi);
        editingData.sections.ranking.platforms[pi].date = value;
    } else if (field === 'platform-color') {
        const pi = parseInt(input.dataset.pi);
        editingData.sections.ranking.platforms[pi].color = value;
    } else if (field === 'ph-name') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].name = value;
    } else if (field === 'ph-upvotes') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].upvotes = value;
    } else if (field === 'rk-model') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].model = value;
    } else if (field === 'rk-score') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].score = value;
    } else if (field === 'rk-change') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].change = value;
    }
}

function getVendor(vi, ni, cardIdx) {
    if (ni !== undefined && currentSection === 'other') {
        const cat = editingData.sections.other.categories[vi];
        if (cardIdx !== undefined && cat.cards && cat.cards[cardIdx]) {
            return { news: cat.cards[cardIdx].news };
        }
        // 兼容旧逻辑：返回第一个卡片的 news
        if (cat.cards && cat.cards.length > 0) {
            return { news: cat.cards[0].news };
        }
        return { news: [] };
    }
    const sec = editingData.sections[currentSection];
    if (sec && sec.vendors && sec.vendors[vi]) {
        return sec.vendors[vi];
    }
    return null;
}

// ==================== 蘑菇助手 API 配置 ====================
const API_PROVIDER_STORAGE = 'chatbot-api-provider';
const API_KEY_STORAGE = 'chatbot-api-key';
const API_ENDPOINT_STORAGE = 'chatbot-api-endpoint';
const API_MODEL_STORAGE = 'chatbot-api-model';

const PROVIDERS = {
    openai:    { endpoint: 'https://api.openai.com/v1/chat/completions', model: 'gpt-4o', format: 'openai' },
    deepseek:  { endpoint: 'https://api.deepseek.com/v1/chat/completions', model: 'deepseek-chat', format: 'openai' },
    moonshot:  { endpoint: 'https://api.moonshot.cn/v1/chat/completions', model: 'moonshot-v1-8k', format: 'openai' },
    zhipu:     { endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions', model: 'glm-4-flash', format: 'openai' },
    qwen:      { endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', model: 'qwen-plus', format: 'openai' },
    anthropic: { endpoint: 'https://api.anthropic.com/v1/messages', model: 'claude-sonnet-4-20250514', format: 'anthropic' },
    custom:    { endpoint: '', model: '', format: 'openai' }
};

function loadAPIConfig() {
    var provider = document.getElementById('admin-api-provider');
    var endpoint = document.getElementById('admin-api-endpoint');
    var model = document.getElementById('admin-api-model');
    var key = document.getElementById('admin-api-key');

    var savedProvider = localStorage.getItem(API_PROVIDER_STORAGE) || 'openai';
    if (provider) provider.value = savedProvider;
    if (endpoint) endpoint.value = localStorage.getItem(API_ENDPOINT_STORAGE) || '';
    if (model) model.value = localStorage.getItem(API_MODEL_STORAGE) || '';
    if (key) key.value = localStorage.getItem(API_KEY_STORAGE) || '';

    // 自动填充
    if (!endpoint.value || !model.value) {
        fillProviderDefaults(savedProvider);
    }
    updateAPIStatus();
}

function fillProviderDefaults(provider) {
    var cfg = PROVIDERS[provider];
    if (!cfg) return;
    var endpoint = document.getElementById('admin-api-endpoint');
    var model = document.getElementById('admin-api-model');
    if (endpoint && !endpoint.value) endpoint.value = cfg.endpoint;
    if (model && !model.value) model.value = cfg.model;
}

function saveAPIConfig() {
    var provider = document.getElementById('admin-api-provider').value;
    var endpoint = document.getElementById('admin-api-endpoint').value.trim();
    var model = document.getElementById('admin-api-model').value.trim();
    var key = document.getElementById('admin-api-key').value.trim();

    localStorage.setItem(API_PROVIDER_STORAGE, provider);
    localStorage.setItem(API_ENDPOINT_STORAGE, endpoint);
    localStorage.setItem(API_MODEL_STORAGE, model);
    localStorage.setItem(API_KEY_STORAGE, key);

    updateAPIStatus();
    showToast('蘑菇助手 API 配置已保存 🍄');
}

function clearAPIConfig() {
    localStorage.removeItem(API_PROVIDER_STORAGE);
    localStorage.removeItem(API_ENDPOINT_STORAGE);
    localStorage.removeItem(API_MODEL_STORAGE);
    localStorage.removeItem(API_KEY_STORAGE);

    document.getElementById('admin-api-key').value = '';
    document.getElementById('admin-api-endpoint').value = '';
    document.getElementById('admin-api-model').value = '';
    document.getElementById('admin-api-provider').value = 'openai';

    updateAPIStatus();
    showToast('API 配置已清除，蘑菇助手将使用本地搜索');
}

function updateAPIStatus() {
    var status = document.getElementById('admin-api-status');
    if (!status) return;
    var key = localStorage.getItem(API_KEY_STORAGE);
    if (key) {
        status.textContent = '✅ 已配置，蘑菇助手使用 AI 问答模式';
        status.style.color = '#4a9a6a';
    } else {
        status.textContent = '⚠️ 未配置 API Key，使用本地搜索模式';
        status.style.color = '#c09060';
    }
}

// 在 DOMContentLoaded 中初始化 API 配置
document.addEventListener('DOMContentLoaded', function() {
    loadAPIConfig();

    var providerEl = document.getElementById('admin-api-provider');
    if (providerEl) {
        providerEl.addEventListener('change', function() {
            fillProviderDefaults(this.value);
        });
    }

    var saveBtn = document.getElementById('admin-api-save-btn');
    if (saveBtn) saveBtn.addEventListener('click', saveAPIConfig);

    var clearBtn = document.getElementById('admin-api-clear-btn');
    if (clearBtn) clearBtn.addEventListener('click', clearAPIConfig);
});

// ==================== 工具 ====================
function esc(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
