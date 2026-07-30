const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {"date": "2026-07-31", "sections": {"overseas": {"vendors": [{"name": "OpenAI", "news": [{"title": "奥特曼华盛顿之行：会见白宫幕僚长讨论AI监管框架", "summary": "7月30日消息，OpenAI CEO山姆·奥特曼本周在华盛顿密集拜访国会议员，并将会见白宫幕僚长苏西·怀尔斯。他与参议院商务委员会主席克鲁兹等讨论了新模型和AI竞争力。白宫AI审查框架将于8月1日前出台，特朗普回应OpenAI模型失控事件称政府正在研究管控措施，但不想限制创新。", "link": "https://www.sohu.com/a/1056440434_122014422", "tags": ["AI监管", "白宫", "政策"], "source": "搜狐", "time": "7月30日消息"}, {"title": "OpenAI总裁布罗克曼：苹果诉讼无根据，无意窃取商业机密", "summary": "7月29日，OpenAI联合创始人兼总裁格雷格·布罗克曼接受《华尔街日报》采访，就苹果公司起诉事宜回应称，公司没有兴趣获取其他企业的商业秘密，OpenAI将专注自身技术与长期产品路线，否认了苹果关于OpenAI通过挖角员工窃取AI机密等指控。", "link": "https://tech.ifeng.com/c/8vAlWg9geTu", "tags": ["诉讼", "苹果"], "source": "IT之家", "time": "7月29日"}]}, {"name": "Anthropic", "news": [{"title": "Polymarket以94%概率押注Anthropic拥有7月底最佳AI模型", "summary": "7月31日消息，预测市场Polymarket即将收盘的「7月底最佳AI模型」投注中，Anthropic以约94%的赔率遥遥领先，Google约4.6%，OpenAI仅约1%。Anthropic近期发布的Claude Opus 4.8及Fable 5在多项基准测试中表现领先，加上高调挖角DeepMind诺奖得主江珀等顶尖人才，市场对其信心高涨。", "link": "https://www.163.com/dy/article/L32SVFGQ0511BLFD.html", "tags": ["预测市场", "模型竞赛"], "source": "网易", "time": "7月31日消息"}]}, {"name": "Google", "news": [{"title": "谷歌股价重挫创一年最大跌幅，顶尖AI人才持续流失", "summary": "7月29日，谷歌母公司Alphabet股价持续承压，自5月高点已累跌约18%。原因包括：Gemini跌出全球前十、旗舰模型屡次跳票、两位AI泰斗（Noam Shazeer加盟OpenAI、诺奖得主John Jumper加入Anthropic）一周内出走、Q2资本支出449亿同比翻倍致自由现金流首转负。2017年《Attention Is All You Need》论文8位作者已全部离开谷歌。", "link": "https://www.163.com/dy/article/L330BNEN05198NMR.html", "tags": ["股价", "人才流失", "Gemini"], "source": "老虎国际", "time": "7月30日消息"}]}, {"name": "xAI", "news": []}, {"name": "NVIDIA", "news": []}, {"name": "Meta", "news": [{"title": "扎克伯格：Meta未来将同时采用开源和闭源AI模型", "summary": "7月30日，Meta CEO扎克伯格在Q2财报电话会上表示，未来将同时采用开源和闭源AI模型双轨策略。他坦诚当前开源模型不如前沿模型强大，两者差距仍然显著，Meta不会盲目追随单一路线。受此影响Meta股价当日跌9.8%，市值蒸发约600亿美元。扎克伯格强调出售算力换短期利润是「愚蠢的」。", "link": "https://finance.eastmoney.com/a/202607303825538454.html", "tags": ["开源", "闭源", "双轨策略"], "source": "东方财富", "time": "7月30日"}]}]}, "domestic": {"vendors": [{"name": "阿里云", "news": []}, {"name": "火山引擎", "news": []}, {"name": "DeepSeek", "news": []}, {"name": "腾讯", "news": [{"title": "腾讯合并两大模型部门成立基础模型部，姚顺雨统一掌舵", "summary": "7月23日，腾讯宣布将混元大语言模型与多模态模型部门合并，成立基础模型部，由首席AI科学家姚顺雨统一管理，向TEG总裁卢山汇报。这标志着运行15个月的算法研发「双轨制」终结。姚顺雨全面接管从文本、图像、视频、语音到3D生成的全模态底层研发，此前其主导的Hy3模型发布一周调用量增长超68倍。", "link": "https://www.thepaper.cn/newsDetail_forward_33673668", "tags": ["组织架构", "混元"], "source": "澎湃新闻", "time": "7月23日"}]}, {"name": "小米", "news": []}, {"name": "智谱AI", "news": []}, {"name": "月之暗面", "news": []}, {"name": "华为", "news": []}]}, "other": {"categories": [{"name": "其他厂商", "cards": [{"title": "微软", "news": [{"title": "微软Azure AI收入增长推动Q4业绩超预期，Copilot超级应用确认年内发布", "summary": "7月30日，微软发布2026财年Q4财报，总营收900亿美元同比增18%，Azure年收入首超1000亿美元。CEO纳德拉在电话会上确认正打造Copilot超级应用，将整合对话、编程和智能体功能。但微软也警告AI算力供给依然不足，部分AI服务供应受限。", "link": "https://www.ithome.com/0/983/416.htm", "tags": ["财报", "Azure", "Copilot"], "source": "IT之家", "time": "7月30日消息"}]}]}, {"name": "AI出海", "cards": [{"title": "ChinaJoy", "news": [{"title": "ChinaJoy 2026开幕：主题「与AI同游」，规模创历史新高", "summary": "7月31日，第二十三届ChinaJoy在上海新国际博览中心开幕，主题为「与AI同游」。展览面积超14万平方米创历史新高，汇聚900家参展企业。首次新增Vision Future前沿科技展区展示智能机器人、AI大模型等，以及AI NPC、生成式内容等前沿体验。近千款游戏线下试玩，腾讯、网易等500余家厂商参展。", "link": "https://www.163.com/dy/article/L311P9PK05503FCU.html", "tags": ["ChinaJoy", "AI", "数字娱乐"], "source": "网易", "time": "7月31日"}]}]}, {"name": "投资资讯", "cards": [{"title": "Alphabet", "news": [{"title": "Alphabet遭遇一年来最差单日表现，市值蒸发超2200亿美元", "summary": "受AI人才流失、Gemini掉队和巨额资本开支三重压力，谷歌母公司Alphabet近期股价持续下跌。自5月高点累跌18%，7月22日单日重挫逾7%创一年最大跌幅，市值蒸发约2233亿美元。Q2资本支出449亿美元同比翻倍致自由现金流首转负，同时两位AI泰斗一周内加盟竞争对手。", "link": "https://www.itiger.com/hans/news/2645207215", "tags": ["股价", "市值蒸发", "AI掉队"], "source": "36氪", "time": "7月30日消息"}]}]}, {"name": "行业趋势&观点", "cards": [{"title": "AI监管", "news": [{"title": "特朗普回应OpenAI模型失控事件：政府正在研究管控措施", "summary": "7月30日，美国总统特朗普在椭圆形办公室就OpenAI模型失控入侵Hugging Face事件首次公开回应，表示政府「正在研究管控措施」，但同时称不想限制AI开发者创新。白宫AI行政命令要求联邦机构在8月1日前制定AI安全评估框架，奥特曼本周华盛顿之行将直接影响该框架的最终内容。", "link": "https://tech.ifeng.com/c/8vAlWg9gecB", "tags": ["AI监管", "白宫", "安全框架"], "source": "凤凰网科技", "time": "7月30日"}]}]}]}, "ranking": {"platforms": [{"name": "OpenRouter", "date": "2026-07-30", "link": "https://openrouter.ai/rankings", "rankings": [{"model": "MiMo-V2.5", "score": "9.77T tokens", "change": "↑2%"}, {"model": "DeepSeek V4 Flash", "score": "7.30T tokens", "change": "↑33%"}, {"model": "Hy3", "score": "4.90T tokens", "change": "↑264%"}, {"model": "DeepSeek V4 Pro", "score": "3.55T tokens", "change": "↑22%"}, {"model": "GLM 5.2", "score": "3.14T tokens", "change": "↑13%"}, {"model": "Nemotron 3 Ultra (free)", "score": "2.70T tokens", "change": "↑9%"}, {"model": "MiniMax M3", "score": "2.03T tokens", "change": "↑32%"}, {"model": "Step 3.7 Flash", "score": "1.85T tokens", "change": "↑41%"}, {"model": "Kimi K3", "score": "1.34T tokens", "change": "↑45%"}, {"model": "Ling-3.0-flash (free)", "score": "1.07T tokens", "change": "—"}, {"model": "Claude Opus 4.8", "score": "1.44T tokens", "change": "↑30%"}, {"model": "Claude Opus 4.7", "score": "1.78T tokens", "change": "↑13%"}, {"model": "Claude Sonnet 5", "score": "1.13T tokens", "change": "↑21%"}, {"model": "GPT-5.6 Sol", "score": "1.05T tokens", "change": "↑5%"}, {"model": "Qwen3-235B-A22B", "score": "0.85T tokens", "change": "↑7%"}, {"model": "Grok 4.5", "score": "0.78T tokens", "change": "↑3%"}, {"model": "Claude Fable 5", "score": "0.72T tokens", "change": "↑11%"}, {"model": "DeepSeek R1-0528", "score": "0.65T tokens", "change": "↓5%"}, {"model": "Gemini 2.0 Flash", "score": "0.58T tokens", "change": "↓8%"}, {"model": "Yi-Lightning", "score": "0.52T tokens", "change": "↓3%"}]}, {"name": "LMArena", "date": "2026-07-10", "link": "https://lmarena.ai/leaderboard/text", "rankings": [{"model": "Claude Fable 5", "score": "1509", "change": "+9"}, {"model": "Claude Opus 4.6 (Thinking)", "score": "1504", "change": "+4"}, {"model": "Claude Opus 4.7 (Thinking)", "score": "1503", "change": "+4"}, {"model": "Claude Opus 4.6", "score": "1498", "change": "+4"}, {"model": "Claude Opus 4.7", "score": "1494", "change": "+4"}, {"model": "Meta Spark 1.1", "score": "1490", "change": "+10"}, {"model": "Meta Spark", "score": "1488", "change": "+6"}, {"model": "GPT-5.6 Sol (xHigh)", "score": "1486", "change": "+14"}, {"model": "Gemini 3 Pro", "score": "1486", "change": "+4"}, {"model": "Gemini 3.1 Pro Preview", "score": "1485", "change": "+4"}, {"model": "Claude Opus 4.8 (Thinking)", "score": "1482", "change": "+5"}, {"model": "GPT-5.5 (High)", "score": "1481", "change": "+5"}, {"model": "GPT-5.4 (High)", "score": "1476", "change": "+4"}, {"model": "Gemini 3.5 Flash (High)", "score": "1476", "change": "+7"}, {"model": "Gemini 3.5 Flash (Medium)", "score": "1476", "change": "+7"}, {"model": "GPT-5.2 Chat", "score": "1476", "change": "+4"}, {"model": "Qwen3.7 Max Preview", "score": "1475", "change": "+10"}, {"model": "Claude Opus 4.8", "score": "1475", "change": "+5"}, {"model": "Grok 4.20 Beta1", "score": "1475", "change": "+5"}, {"model": "GPT-5.5", "score": "1474", "change": "+5"}]}, {"name": "Product Hunt", "date": "2026-07-15", "link": "https://www.producthunt.com/", "rankings": [{"name": "Velo 3.0", "category": "Productivity", "rank": 1, "link": "https://www.producthunt.com/products/velo-4"}, {"name": "V2Fun", "category": "AI", "rank": 2, "link": "https://www.producthunt.com/products/v2fun"}, {"name": "Campus", "category": "Productivity", "rank": 3, "link": "https://www.producthunt.com/p/flutterflow/campus-4"}, {"name": "Agently", "category": "Productivity", "rank": 4, "link": "https://www.producthunt.com"}, {"name": "Crustdata Recruiter", "category": "Hiring", "rank": 5, "link": "https://www.producthunt.com"}, {"name": "YAGNI", "category": "SaaS", "rank": 6, "link": "https://www.producthunt.com"}, {"name": "RecordMeeting", "category": "Chrome Extensions", "rank": 7, "link": "https://www.producthunt.com"}, {"name": "Tiptap AI Toolkit", "category": "Dev Tools", "rank": 8, "link": "https://www.producthunt.com"}, {"name": "Flodesk Studio", "category": "Design Tools", "rank": 9, "link": "https://www.producthunt.com"}, {"name": "CodeNearby 2.0", "category": "Productivity", "rank": 10, "link": "https://www.producthunt.com"}, {"name": "nudge2.0", "category": "Productivity", "rank": 11, "link": "https://www.producthunt.com"}, {"name": "Copresent", "category": "Chrome Extensions", "rank": 12, "link": "https://www.producthunt.com"}, {"name": "Keepresso", "category": "Productivity", "rank": 13, "link": "https://www.producthunt.com"}, {"name": "Clerk", "category": "Fintech", "rank": 14, "link": "https://www.producthunt.com"}, {"name": "Review by Eddie AI", "category": "Productivity", "rank": 15, "link": "https://www.producthunt.com"}, {"name": "Jam-Pod", "category": "Music", "rank": 16, "link": "https://www.producthunt.com"}, {"name": "ccshare", "category": "Dev Tools", "rank": 17, "link": "https://www.producthunt.com"}, {"name": "QuickQuill", "category": "Mac", "rank": 18, "link": "https://www.producthunt.com"}, {"name": "New AI tools by IFTTT", "category": "Productivity", "rank": 19, "link": "https://www.producthunt.com"}, {"name": "DeskMat 1.3", "category": "Mac", "rank": 20, "link": "https://www.producthunt.com"}]}]}}};
function loadAPIConfig() {
    var provider = document.getElementById('admin-api-provider');
    var endpoint = document.getElementById('admin-api-endpoint');
    var model = document.getElementById('admin-api-model');
    var key = document.getElementById('admin-api-key');
    var proxy = document.getElementById('admin-api-proxy');

    var savedProvider = localStorage.getItem(API_PROVIDER_STORAGE) || 'openai';
    if (provider) provider.value = savedProvider;
    if (endpoint) endpoint.value = localStorage.getItem(API_ENDPOINT_STORAGE) || '';
    if (model) model.value = localStorage.getItem(API_MODEL_STORAGE) || '';
    if (key) key.value = localStorage.getItem(API_KEY_STORAGE) || '';
    if (proxy) proxy.value = localStorage.getItem(API_PROXY_STORAGE) || '';

    // 自动填充（元素已删除则跳过）
    if (endpoint && model && (!endpoint.value || !model.value)) {
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
    var proxy = document.getElementById('admin-api-proxy').value.trim();

    localStorage.setItem(API_PROVIDER_STORAGE, provider);
    localStorage.setItem(API_ENDPOINT_STORAGE, endpoint);
    localStorage.setItem(API_MODEL_STORAGE, model);
    localStorage.setItem(API_KEY_STORAGE, key);
    localStorage.setItem(API_PROXY_STORAGE, proxy);

    updateAPIStatus();
    showToast('蘑菇助手 API 配置已保存 🍄');
}

function clearAPIConfig() {
    localStorage.removeItem(API_PROVIDER_STORAGE);
    localStorage.removeItem(API_ENDPOINT_STORAGE);
    localStorage.removeItem(API_MODEL_STORAGE);
    localStorage.removeItem(API_KEY_STORAGE);
    localStorage.removeItem(API_PROXY_STORAGE);

    document.getElementById('admin-api-key').value = '';
    document.getElementById('admin-api-endpoint').value = '';
    document.getElementById('admin-api-model').value = '';
    document.getElementById('admin-api-provider').value = 'openai';
    document.getElementById('admin-api-proxy').value = '';

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

    // GitHub 同步配置初始化
    var ghConfig = getGithubConfig();
    var ghTokenEl = document.getElementById('github-token');
    var ghOwnerEl = document.getElementById('github-owner');
    var ghRepoEl = document.getElementById('github-repo');
    var ghStatus = document.getElementById('github-status');
    if (ghTokenEl) {
        if (ghConfig.token) {
            ghTokenEl.placeholder = '已配置（不显示已保存的 Token）';
            ghTokenEl.style.borderColor = '#10A37F';
            if (ghStatus) { ghStatus.textContent = '✅ 已配置，保存数据时将自动同步到云端'; ghStatus.style.color = '#10A37F'; }
        } else {
            ghTokenEl.placeholder = '请输入 github_pat_...';
            ghTokenEl.style.borderColor = '#CF0A2C';
            if (ghStatus) { ghStatus.textContent = '⚠️ 未配置，请粘贴 Token 后点击「保存 Token」'; ghStatus.style.color = '#CF0A2C'; }
        }
    }
    if (ghOwnerEl) ghOwnerEl.value = ghConfig.owner;
    if (ghRepoEl) ghRepoEl.value = ghConfig.repo;

    var clearCacheBtn = document.getElementById('clear-cache-btn');
    if (clearCacheBtn) clearCacheBtn.addEventListener('click', function() {
        localStorage.removeItem('ai-news-data');
        localStorage.removeItem('ai-news-last-update');
        showToast('本地缓存已清除，即将刷新加载最新云端数据');
        setTimeout(function() { location.reload(); }, 500);
    });

    var ghSaveBtn = document.getElementById('github-save-btn');
    if (ghSaveBtn) ghSaveBtn.addEventListener('click', saveGithubConfig);

    var ghTestBtn = document.getElementById('github-test-btn');
    if (ghTestBtn) ghTestBtn.addEventListener('click', async function() {
        var statusEl = document.getElementById('github-status');
        var config = getGithubConfig();
        if (!config.token) {
            if (statusEl) { statusEl.textContent = '请先输入 Token'; statusEl.style.color = '#CF0A2C'; }
            return;
        }
        if (statusEl) { statusEl.textContent = '测试中...'; statusEl.style.color = ''; }
        try {
            var resp = await fetch('https://api.github.com/repos/' + config.owner + '/' + config.repo, {
                headers: { 'Authorization': 'Bearer ' + config.token, 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }
            });
            if (resp.ok) {
                if (statusEl) { statusEl.textContent = '连接成功 ✅'; statusEl.style.color = '#10A37F'; }
            } else {
                var e = await resp.json();
                if (statusEl) { statusEl.textContent = '连接失败: ' + e.message; statusEl.style.color = '#CF0A2C'; }
            }
        } catch(e) {
            if (statusEl) { statusEl.textContent = '网络错误: ' + e.message; statusEl.style.color = '#CF0A2C'; }
        }
    });
});

// ==================== GitHub 同步 ====================
const GITHUB_TOKEN_KEY = 'ai-news-github-token';
const GITHUB_OWNER_KEY = 'ai-news-github-owner';
const GITHUB_REPO_KEY = 'ai-news-github-repo';

// UTF-8 编解码：GitHub API 的 base64 content 是 UTF-8 字节，不能直接用 atob/btoa
function utf8ToBase64(str) {
    var bytes = new TextEncoder().encode(str);
    var binary = '';
    for (var i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
}

function base64ToUtf8(b64) {
    var binary = atob(b64);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder('utf-8').decode(bytes);
}

function getGithubConfig() {
    return {
        token: localStorage.getItem(GITHUB_TOKEN_KEY) || '',
        owner: localStorage.getItem(GITHUB_OWNER_KEY) || 'Pepper0210879',
        repo: localStorage.getItem(GITHUB_REPO_KEY) || 'AI-'
    };
}

function saveGithubConfig() {
    var tokenInput = document.getElementById('github-token');
    var ownerInput = document.getElementById('github-owner');
    var repoInput = document.getElementById('github-repo');
    var token = tokenInput ? tokenInput.value.trim() : '';
    if (token) localStorage.setItem(GITHUB_TOKEN_KEY, token);
    if (ownerInput) localStorage.setItem(GITHUB_OWNER_KEY, ownerInput.value.trim());
    if (repoInput) localStorage.setItem(GITHUB_REPO_KEY, repoInput.value.trim());
    var status = document.getElementById('github-status');
    if (tokenInput) { tokenInput.style.borderColor = '#10A37F'; tokenInput.placeholder = '已配置（不显示已保存的 Token）'; }
    if (status) { status.textContent = '✅ Token 已保存，同步已就绪'; status.style.color = '#10A37F'; }
}

function toggleGithubToken() {
    var input = document.getElementById('github-token');
    if (input) input.type = input.type === 'password' ? 'text' : 'password';
}

async function syncToGitHub(changes) {
    var config = getGithubConfig();
    if (!config.token) { console.log('[GitHub] 未配置 Token，跳过同步'); return false; }

    var status = document.getElementById('github-status');
    if (status) { status.textContent = '同步中...'; status.style.color = ''; }

    try {
        // 将 data.json 转为 data.js 格式
        var dataJsContent = 'window.__RAW_DATA = ' + JSON.stringify(editingData, null, 2) + ';';
        var contentBase64 = utf8ToBase64(dataJsContent);

        var apiUrl = 'https://api.github.com/repos/' + config.owner + '/' + config.repo + '/contents/data.js';
        var headers = {
            'Authorization': 'Bearer ' + config.token,
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
        };

        // 1. 获取当前 data.js 的 SHA
        var getResp = await fetch(apiUrl, { headers: headers });
        var sha = null;
        if (getResp.ok) {
            var fileInfo = await getResp.json();
            sha = fileInfo.sha;
        }

        // 2. 构建 commit message（含操作人和变更摘要）
        var op = window._operator || {};
        var opName = op.name || '未知';
        var changeSummary = (changes && changes.length > 0) ? changes.slice(0, 5).join('; ') : '无实质性变更';
        if (changes && changes.length > 5) changeSummary += ' 等' + changes.length + '处';
        var commitMsg = 'admin: ' + opName + ' 编辑 (' + editingData.date + ')\n\n' + changeSummary;

        var body = {
            message: commitMsg,
            content: contentBase64,
            branch: 'main'
        };
        if (sha) body.sha = sha;

        var putResp = await fetch(apiUrl, {
            method: 'PUT',
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
            body: JSON.stringify(body)
        });

        if (!putResp.ok) {
            var err = await putResp.json();
            throw new Error(err.message || '未知错误');
        }

        // 3. 同步审计日志到 audit-log.json
        var auditLog = JSON.parse(localStorage.getItem('ai-news-audit-log') || '[]');
        try {
            var auditUrl = 'https://api.github.com/repos/' + config.owner + '/' + config.repo + '/contents/audit-log.json';
            var auditGetResp = await fetch(auditUrl, { headers: headers });
            if (auditGetResp.ok) {
                var auditFileInfo = await auditGetResp.json();
                var remoteAudit = JSON.parse(base64ToUtf8(auditFileInfo.content));
                var remoteSha = auditFileInfo.sha;
                var existingTimes = new Set(remoteAudit.map(function(e) { return e.time; }));
                auditLog.forEach(function(e) {
                    if (!existingTimes.has(e.time)) remoteAudit.unshift(e);
                });
                auditLog = remoteAudit.slice(0, 100);
                var auditContent = utf8ToBase64(JSON.stringify(auditLog, null, 2));
                await fetch(auditUrl, {
                    method: 'PUT',
                    headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                    body: JSON.stringify({ message: 'audit: ' + opName + ' 操作记录', content: auditContent, branch: 'main', sha: remoteSha })
                });
            } else {
                var auditContent = utf8ToBase64(JSON.stringify(auditLog, null, 2));
                await fetch(auditUrl, {
                    method: 'PUT',
                    headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                    body: JSON.stringify({ message: 'audit: 初始化审计日志', content: auditContent, branch: 'main' })
                });
            }
            localStorage.setItem('ai-news-audit-log', JSON.stringify(auditLog));
        } catch (auditErr) {
            console.warn('[GitHub] 审计日志同步失败（数据已同步）:', auditErr.message);
        }

        if (status) { status.textContent = '已同步到云端 ✅（1-2 分钟后生效）'; status.style.color = '#10A37F'; }
        console.log('[GitHub] 同步成功（数据 + 审计日志）');
        return true;
    } catch (e) {
        console.error('[GitHub] 同步失败:', e);
        if (status) { status.textContent = '同步失败 ⚠️ ' + e.message; status.style.color = '#CF0A2C'; }
        return false;
    }
}

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
