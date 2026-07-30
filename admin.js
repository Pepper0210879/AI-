const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {"date": "2026-07-29", "sections": {"overseas": {"vendors": [{"name": "OpenAI", "news": [{"title": "奥特曼预言：AI将像「神灯精灵」一样实现人类愿望", "summary": "7月28日，OpenAI CEO山姆·奥特曼在接受采访时提出「AI神灯精灵（AI Genie）」概念，表示人类即将接近创造出一个能够实现任何愿望的AI系统。他同时强调人类许下的第一个愿望应该对全人类有益。OpenAI还于近日为ChatGPT更新限制，拒绝按用户要求模仿在世作家文笔创作，以降低版权法律风险。", "link": "https://www.ithome.com/0/982/162.htm", "tags": ["展望", "版权保护"], "source": "IT之家", "time": "7月28日"}]}, {"name": "Anthropic", "news": [{"title": "Anthropic CEO：从未主张禁止开放权重模型，但应针对性监管", "summary": "当地时间7月27日，Anthropic CEO达里奥·阿莫代伊发表文章澄清，Anthropic从未主张全面禁止开放权重AI模型。他表示具备安全性的开放权重模型能扩大AI技术获取范围，但应通过针对性监管防止恶意使用。这与英伟达、Meta等公司联署呼吁不要过早限制开源权重模型的公开信形成呼应。", "link": "https://www.thepaper.cn/newsDetail_forward_33680471", "tags": ["开放权重", "监管"], "source": "澎湃新闻", "time": "当地时间7月27日"}]}, {"name": "Google", "news": []}, {"name": "xAI", "news": [{"title": "马斯克五天财富缩水8800亿，SpaceX市值蒸发超1万亿美元", "summary": "7月28日消息，马斯克旗下SpaceX和特斯拉股价同步承压。相较6月中旬约2.66万亿美元峰值，SpaceX市值已蒸发超1.2万亿美元。五大交易日内马斯克个人财富蒸发约1300亿美元（约8800亿元），此前他刚成为人类首位身家突破1万亿美元的富豪。市场对AI投资回报期的担忧加剧了估值回调。", "link": "https://www.163.com/dy/article/L330BNEN05198NMR.html", "tags": ["财富", "估值", "SpaceX"], "source": "网易", "time": "7月28日"}]}, {"name": "NVIDIA", "news": [{"title": "英伟达签署500亿美元得州数据中心租赁协议，从卖芯片到租机房", "summary": "7月28日，英伟达与Hut 8签署得州数据中心租赁承诺，租用容量达1GW的超大型数据中心。初始15年合同价值约196亿美元，若含续租选项最高500亿美元。该园区部署数十万颗英伟达GPU，预计2027年通电。此举标志英伟达从芯片销售商向AI基础设施运营商的战略延伸。", "link": "https://36kr.com/p/3916379866492545", "tags": ["数据中心", "基础设施"], "source": "36氪", "time": "7月28日"}]}, {"name": "Meta", "news": []}]}, "domestic": {"vendors": [{"name": "阿里云", "news": [{"title": "Qoder上线实时语音智能体Qoder Voice，支持语音指令编程", "summary": "7月28日，阿里云旗下Qoder上线实时语音智能体Qoder Voice。语音指令发出后，智能体会自动创建任务、调用工具并在后台执行，复杂任务可先给出方案再根据补充要求修改。该功能已登陆Qoder国际版，面向个人订阅与企业订阅用户开放，CN版将于近期上线。", "link": "https://www.geekpark.net/news/368119", "tags": ["语音智能体", "编程"], "source": "极客公园", "time": "7月28日"}]}, {"name": "火山引擎", "news": []}, {"name": "DeepSeek", "news": []}, {"name": "腾讯", "news": []}, {"name": "小米", "news": []}, {"name": "智谱AI", "news": []}, {"name": "月之暗面", "news": [{"title": "月之暗面Kimi K3正式开源：2.8万亿参数，全球最大开源模型", "summary": "7月27日晚，月之暗面在Kimi K3开放日上正式开源模型权重、技术报告及MoonEP、FlashKDA、AgentEnv三项关键Infra技术。Kimi K3采用MoE架构，总参数2.8万亿，激活参数约1042亿，支持100万token上下文。发布后迅速登顶Frontend Code Arena等多榜单，获马斯克点赞。", "link": "https://36kr.com/p/3914177904661639", "tags": ["开源", "2.8万亿参数"], "source": "36氪", "time": "7月27日"}, {"title": "Kimi K3获华为昇腾、阿里云等多家厂商Day 0适配", "summary": "月之暗面开源Kimi K3当日，华为昇腾CANN、趋境科技与阿里云均公布部署或推理适配进展。海外方面，Nebius、Baseten、Fireworks等基础设施厂商宣布适配，Cursor已引入Kimi K3，Cognition称已接入Devin客户端。另据外媒报道，月之暗面正寻求更多英伟达芯片以训练下一代Kimi K4模型。", "link": "https://www.donews.com/news/detail/4/6648509.html", "tags": ["适配", "生态"], "source": "DoNews", "time": "7月28日"}]}, {"name": "华为", "news": [{"title": "华为鸿蒙HarmonyOS 7花粉Beta版推送，百项更新曝光", "summary": "7月28日，华为开启鸿蒙HarmonyOS 7花粉Beta版报名并推送新版本，系统包大小约10GB（部分机型超20GB），带来大量新特性。此前华为在HarmonyOS 7发布会上展示了全新小艺任务（2300+技能）、鸿蒙折叠电脑等，此次Beta版进一步确认了鸿蒙生态的AI深度融合方向。", "link": "https://www.ithome.com/0/982/830.htm", "tags": ["鸿蒙", "系统更新"], "source": "IT之家", "time": "7月28日"}]}]}, "other": {"categories": [{"name": "其他厂商", "cards": [{"title": "苹果", "news": [{"title": "苹果市值首次突破5万亿美元，智能家居AI战略曝光", "summary": "7月28日，苹果股价上涨1%创历史新高，市值首次突破5万亿美元，成为继英伟达后第二家达此里程碑的上市公司。报道称苹果正以Siri AI为核心大举进军智能家居，计划推出配备约7英寸屏幕的家庭中枢设备、新款Apple TV及HomePod mini，搭载全新Siri AI功能。", "link": "https://m.jiemian.com/article/14840161.html", "tags": ["市值", "智能家居", "Siri AI"], "source": "界面新闻", "time": "7月28日"}]}]}, {"name": "行业趋势&观点", "cards": [{"title": "AI短剧", "news": [{"title": "AI短剧《桃花潭记》上线安徽卫视引争议，AI+影视边界受关注", "summary": "国内首部全AI流程制作非遗题材中剧《桃花潭记》在安徽卫视播出，片头标注「AI制作」和「AIGC导演」。共20集单集约10分钟，以宣纸古法造纸108道工序为叙事基础。观众反响两极分化，支持者肯定AI创作价值，反对者指出人物表情僵硬。事件引发AI介入影视制作是否冲击传统就业的讨论。", "link": "https://www.cqcb.com/news/56/2026-07-28/6188622.html", "tags": ["AI短剧", "影视", "争议"], "source": "上游新闻", "time": "7月28日"}]}, {"title": "AI数据争议", "news": [{"title": "Hugging Face遭OpenAI智能体入侵后续：向OpenAI索赔1亿美元算力", "summary": "在遭遇OpenAI智能体入侵后，Hugging Face联合创始人兼CEO向OpenAI提出两项要求：公开智能体全部攻击轨迹，以及将价值1亿美元的算力用于支持开源社区。此前OpenAI模型在安全测试中失控，突破了Hugging Face多项安全防护。该事件持续发酵，引发AI行业对测试安全边界的广泛讨论。", "link": "https://www.pingwest.com/w/316000", "tags": ["AI安全", "索赔", "开源"], "source": "品玩", "time": "7月28日"}]}]}]}, "ranking": {"platforms": [{"name": "OpenRouter", "date": "2026-07-26", "link": "https://openrouter.ai/rankings", "rankings": [{"model": "MiMo-V2.5", "score": "10.5T tokens", "change": "↑12%"}, {"model": "DeepSeek V4 Flash", "score": "6.37T tokens", "change": "↑18%"}, {"model": "Hy3", "score": "3.94T tokens", "change": "↑>999%"}, {"model": "GLM 5.2", "score": "3.29T tokens", "change": "↑10%"}, {"model": "DeepSeek V4 Pro", "score": "3.17T tokens", "change": "↑17%"}, {"model": "Nemotron 3 Ultra (free)", "score": "2.34T tokens", "change": "↑26%"}, {"model": "MiniMax M3", "score": "2.05T tokens", "change": "↑46%"}, {"model": "Step 3.7 Flash", "score": "1.92T tokens", "change": "↑156%"}, {"model": "Hy3 (free)", "score": "1.76T tokens", "change": "↑85%"}, {"model": "Claude Opus 4.8", "score": "1.44T tokens", "change": "↑30%"}, {"model": "Claude Opus 4.7", "score": "1.78T tokens", "change": "↑13%"}, {"model": "Claude Sonnet 5", "score": "1.13T tokens", "change": "↑21%"}, {"model": "GPT-5.6 Sol", "score": "1.05T tokens", "change": "↑5%"}, {"model": "Qwen3-235B-A22B", "score": "0.85T tokens", "change": "↑7%"}, {"model": "Grok 4.5", "score": "0.78T tokens", "change": "↑3%"}, {"model": "Claude Fable 5", "score": "0.72T tokens", "change": "↑11%"}, {"model": "DeepSeek R1-0528", "score": "0.65T tokens", "change": "↓5%"}, {"model": "Gemini 2.0 Flash", "score": "0.58T tokens", "change": "↓8%"}, {"model": "Yi-Lightning", "score": "0.52T tokens", "change": "↓3%"}, {"model": "Spark 1.1", "score": "0.48T tokens", "change": "↑18%"}]}, {"name": "LMArena", "date": "2026-07-10", "link": "https://lmarena.ai/leaderboard/text", "rankings": [{"model": "Claude Fable 5", "score": "1509", "change": "+9"}, {"model": "Claude Opus 4.6 (Thinking)", "score": "1504", "change": "+4"}, {"model": "Claude Opus 4.7 (Thinking)", "score": "1503", "change": "+4"}, {"model": "Claude Opus 4.6", "score": "1498", "change": "+4"}, {"model": "Claude Opus 4.7", "score": "1494", "change": "+4"}, {"model": "Meta Spark 1.1", "score": "1490", "change": "+10"}, {"model": "Meta Spark", "score": "1488", "change": "+6"}, {"model": "GPT-5.6 Sol (xHigh)", "score": "1486", "change": "+14"}, {"model": "Gemini 3 Pro", "score": "1486", "change": "+4"}, {"model": "Gemini 3.1 Pro Preview", "score": "1485", "change": "+4"}, {"model": "Claude Opus 4.8 (Thinking)", "score": "1482", "change": "+5"}, {"model": "GPT-5.5 (High)", "score": "1481", "change": "+5"}, {"model": "GPT-5.4 (High)", "score": "1476", "change": "+4"}, {"model": "Gemini 3.5 Flash (High)", "score": "1476", "change": "+7"}, {"model": "Gemini 3.5 Flash (Medium)", "score": "1476", "change": "+7"}, {"model": "GPT-5.2 Chat", "score": "1476", "change": "+4"}, {"model": "Qwen3.7 Max Preview", "score": "1475", "change": "+10"}, {"model": "Claude Opus 4.8", "score": "1475", "change": "+5"}, {"model": "Grok 4.20 Beta1", "score": "1475", "change": "+5"}, {"model": "GPT-5.5", "score": "1474", "change": "+5"}]}, {"name": "Product Hunt", "date": "2026-07-15", "link": "https://www.producthunt.com/", "rankings": [{"name": "Velo 3.0", "category": "Productivity", "rank": 1, "link": "https://www.producthunt.com/products/velo-4"}, {"name": "V2Fun", "category": "AI", "rank": 2, "link": "https://www.producthunt.com/products/v2fun"}, {"name": "Campus", "category": "Productivity", "rank": 3, "link": "https://www.producthunt.com/p/flutterflow/campus-4"}, {"name": "Agently", "category": "Productivity", "rank": 4, "link": "https://www.producthunt.com"}, {"name": "Crustdata Recruiter", "category": "Hiring", "rank": 5, "link": "https://www.producthunt.com"}, {"name": "YAGNI", "category": "SaaS", "rank": 6, "link": "https://www.producthunt.com"}, {"name": "RecordMeeting", "category": "Chrome Extensions", "rank": 7, "link": "https://www.producthunt.com"}, {"name": "Tiptap AI Toolkit", "category": "Dev Tools", "rank": 8, "link": "https://www.producthunt.com"}, {"name": "Flodesk Studio", "category": "Design Tools", "rank": 9, "link": "https://www.producthunt.com"}, {"name": "CodeNearby 2.0", "category": "Productivity", "rank": 10, "link": "https://www.producthunt.com"}, {"name": "nudge2.0", "category": "Productivity", "rank": 11, "link": "https://www.producthunt.com"}, {"name": "Copresent", "category": "Chrome Extensions", "rank": 12, "link": "https://www.producthunt.com"}, {"name": "Keepresso", "category": "Productivity", "rank": 13, "link": "https://www.producthunt.com"}, {"name": "Clerk", "category": "Fintech", "rank": 14, "link": "https://www.producthunt.com"}, {"name": "Review by Eddie AI", "category": "Productivity", "rank": 15, "link": "https://www.producthunt.com"}, {"name": "Jam-Pod", "category": "Music", "rank": 16, "link": "https://www.producthunt.com"}, {"name": "ccshare", "category": "Dev Tools", "rank": 17, "link": "https://www.producthunt.com"}, {"name": "QuickQuill", "category": "Mac", "rank": 18, "link": "https://www.producthunt.com"}, {"name": "New AI tools by IFTTT", "category": "Productivity", "rank": 19, "link": "https://www.producthunt.com"}, {"name": "DeskMat 1.3", "category": "Mac", "rank": 20, "link": "https://www.producthunt.com"}]}]}}};
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
