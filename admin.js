const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {"date":"2026-08-02","sections":{"overseas":{"vendors":[{"name":"OpenAI","news":[{"title":"OpenAI公布Astra十项数学突破，成本仅2000美元","summary":"8月1日消息，OpenAI公布下一代核心模型Astra（内部版）在数学与理论计算机科学领域取得十项重大进展，涵盖球体堆积、非sofic群、Connes刚性猜想等多年未解难题，按Sol API费率计算Token总成本约2000美元。人类研究员将论证整理成249页论文并转为Lean 4形式化证明。","link":"https://tech.ifeng.com/c/8vEn0UHsJD4","tags":["数学推理","大模型"],"source":"凤凰科技","time":"8月1日消息"},{"title":"OpenAI封禁柬埔寨ChatGPT诈骗网络","summary":"8月1日消息，OpenAI发布报告披露成功打击位于柬埔寨的诈骗网络，该团伙利用ChatGPT进行投资、婚恋、赌博诈骗并冒充执法机关，用AI批量制造虚假身份、翻译对话、伪造证件。OpenAI已封禁相关账号并向行业分享威胁指标，案件最初由WhatsApp提供线索。","link":"https://tech.ifeng.com/c/8vECwSCaoOp","tags":["AI安全","反诈"],"source":"凤凰科技","time":"8月1日消息"}]},{"name":"Anthropic","news":[]},{"name":"Google","news":[{"title":"谷歌Gemini Spark智能体面向全球开放","summary":"当地时间7月31日，谷歌宣布个人AI智能体Gemini Spark向全球大部分用户开放，可在用户指示下整理收件箱、总结邮件、取消订阅，与Chrome深度整合后能搜索航班、预订机票，手机锁屏或电脑关机时也能在后台持续工作。美国用户需订阅Google AI Pro/Ultra。","link":"https://m.ithome.com/html/984674.htm","tags":["智能体","AI助手"],"source":"IT之家","time":"当地时间7月31日"},{"title":"前DeepMind研究员爆料谷歌雪藏聊天机器人","summary":"8月2日消息，OpenAI Codex工程负责人、前DeepMind研究员蒂博爆料，谷歌曾在ChatGPT发布一年前就做出功能类似的聊天机器人LMChat，但因担心与搜索业务形成竞争最终被雪藏。谷歌内部规定DeepMind不能发布可能颠覆现有业务的产品，杰夫·迪恩也证实曾研发过聊天机器人。","link":"https://tech.ifeng.com/c/8vGDMUDuwbm","tags":["竞争格局","行业爆料"],"source":"凤凰科技","time":"8月2日消息"}]},{"name":"xAI","news":[{"title":"马斯克关注DeepSeek官方X账号","summary":"8月1日消息，马斯克在X平台悄悄关注了中国AI公司DeepSeek的官方账号，此时正值DeepSeek-V4-Flash正式版API上线公测引发关注。马斯克曾多次质疑DeepSeek，此次关注被解读为其态度从质疑转向重点观察，DeepSeek已进入xAI与特斯拉的核心观察清单。","link":"https://tech.ifeng.com/c/8vF7E4cF0Px","tags":["AI竞争","关注"],"source":"凤凰科技","time":"8月1日消息"},{"title":"明尼苏达法官驳回xAI阻止脱衣应用禁令","summary":"当地时间7月31日，明尼苏达州联邦地区法院驳回xAI提出的临时限制令申请，允许全美首个AI「脱衣」应用禁令按计划8月1日生效。法官指xAI拖延起诉、损害非紧迫。xAI辩称法律过宽违反第一修正案，违规每次最高罚50万美元，法院将于8月19日举行初步禁令听证。","link":"https://www.163.com/dy/article/L3AJ6C1I0511BLFD.html","tags":["AI监管","合规"],"source":"网易","time":"当地时间7月31日"}]},{"name":"NVIDIA","news":[]},{"name":"Meta","news":[]}]},"domestic":{"vendors":[{"name":"阿里云","news":[]},{"name":"火山引擎","news":[]},{"name":"DeepSeek","news":[{"title":"国家超算互联网上线DeepSeek V4-Flash API","summary":"8月2日消息，国家超算互联网正式上线DeepSeek-V4-Flash-0731正式版模型API调用服务和模型文件，智能体与指令遵循能力大幅增强，性能媲美最强闭源模型，企业和开发者一键接入即可快速调用，无需繁琐环境配置。该平台已成为全国首个十万卡级超智融合算力资源池。","link":"https://tech.ifeng.com/c/8vGOBhOTSm8","tags":["算力平台","大模型"],"source":"凤凰科技","time":"8月2日消息"}]},{"name":"腾讯","news":[]},{"name":"小米","news":[]},{"name":"智谱AI","news":[]},{"name":"月之暗面","news":[{"title":"美众议院调查DoorDash使用月之暗面模型","summary":"8月2日消息，美国众议院两个委员会联名致函DoorDash，要求其8月14日前提交使用的所有中国AI模型清单及安全测试记录。DoorDash联合创始人称Kimi K2.6与Anthropic Fable 5组合在成本更低情况下性能优于此前方案，议员担忧依赖中国模型的国安风险。","link":"https://tech.ifeng.com/c/8vFp7C3qDUw","tags":["中美AI","监管"],"source":"凤凰科技","time":"8月2日消息"}]},{"name":"华为","news":[]}]},"other":{"categories":[{"name":"其他厂商","cards":[{"title":"高通","news":[{"title":"高通完成收购Modular加速AI计算布局","summary":"8月2日消息，高通宣布完成对AI原生软件基础设施初创企业Modular的收购，双方将打造领先AI计算平台。Modular平台可帮助开发者在异构计算系统中部署生成式AI和智能体，收购将加速高通在数据中心、边缘、工业AI等领域布局，Modular CEO Chris Lattner将出任高通高级AI软件与平台执行副总裁。","link":"https://tech.ifeng.com/c/8vFw1L7qotc","tags":["收购","AI计算"],"source":"凤凰科技","time":"8月2日消息"}]},{"title":"苹果","news":[{"title":"苹果警告AI算力短缺或致产品延迟发布","summary":"8月1日消息，苹果在提交给美国证券交易委员会的最新10-Q财报文件中警告，公司在AI和机器学习领域的计算资源可能面临短缺风险。文件指出存储芯片持续短缺、AI基础设施需求爆发使公司难以获得足够产能，若无法以商业合理条件获取资源，产品与服务的功能性和可用性将受限，甚至导致新品部署推迟。","link":"http://www.c114.net.cn/ainews/106691.html","tags":["AI算力","供应链"],"source":"C114通信网","time":"8月1日消息"}]},{"title":"长鑫科技","news":[{"title":"消息称长鑫LPDDR6接近研发验证尾声","summary":"8月1日消息，据第一财经，行业人士透露长鑫存储LPDDR6已接近量产前的研发验证尾声，这是量产前的重要一步。首款产品速率达12800Mbps，在低功耗设计、RAS功能上较LPDDR5X明显优化，预计下半年量产导入。长鑫有望成为全球最早量产LPDDR6的存储厂商之一。","link":"https://www.stcn.com/article/detail/4053680.html","tags":["存储芯片","LPDDR6"],"source":"证券时报","time":"8月1日消息"}]}]},{"name":"自动驾驶","cards":[]},{"name":"具身智能","cards":[{"title":"IDC","news":[{"title":"IDC：中国工业具身智能机器人市场达57.4亿元","summary":"8月1日消息，IDC报告显示2025年中国工业具身智能机器人市场规模约57.4亿元，其中以工业机器人为载体约36.2亿元、以人形机器人为代表约21.1亿元。市场已进入商业化加速阶段，竞争正从机器人本体性能转向模型、数据、工程化和场景落地能力的综合竞争。","link":"https://tech.ifeng.com/c/8vFB0kOdRnc","tags":["具身智能","市场数据"],"source":"凤凰科技","time":"8月1日消息"}]},{"title":"Tau Robotics","news":[{"title":"Tau Robotics推人形机器人家政清洁服务","summary":"8月1日消息，美国旧金山初创公司Tau Robotics推出人形机器人家政清洁服务，每小时30美元。目前机器人由真人在中央控制室实时操控、AI仅起辅助作用，公司员工随机器人上门监督。每次服务全程录像用于训练未来自主清洁AI，引发隐私和数据收集争议。","link":"https://www.ithome.com/0/984/573.htm","tags":["人形机器人","家政"],"source":"IT之家","time":"8月1日消息"}]}]},{"name":"AI出海","cards":[]},{"name":"投资资讯","cards":[]},{"name":"行业趋势&观点","cards":[{"title":"马斯克、奥特曼","news":[{"title":"马斯克和奥特曼共识：人类已迈入AI奇点时代","summary":"8月1日消息，科技媒体thenews报道马斯克和奥特曼在AI奇点议题上达成共识。奥特曼7月25日作客播客时称「已身处奇点时代」，AI已能自动化约30-40%的人类工作；马斯克7月31日在X发推称「AI在很多方面已超越人类，正处于奇点之中」。","link":"https://finance.sina.com.cn/tech/digi/2026-08-01/doc-inikvanf3779938.shtml","tags":["AI奇点","行业观点"],"source":"新浪财经","time":"8月1日消息"}]},{"title":"四大科技巨头","news":[{"title":"四大科技巨头承诺2.4万亿美元投入AI基建","summary":"8月1日消息，据彭博社报道，谷歌母公司Alphabet、Meta、微软和亚马逊已为未来数年数据中心建设承诺投入近2.4万亿美元。过去一年四家公司支出承诺急剧膨胀，尽管Alphabet和亚马逊自由现金流已转负，但各公司仍相继上调支出计划，理由是AI算力需求极为庞大。","link":"https://tech.ifeng.com/c/8vEmODESuU5","tags":["AI基建","资本开支"],"source":"凤凰科技","time":"8月1日消息"}]},{"title":"唱片公司","news":[{"title":"唱片公司提议将低质AI音乐剔除排行榜","summary":"8月1日消息，据The Verge报道，环球音乐、索尼音乐、华纳音乐等多家唱片公司提议将低质量AI音乐从排行榜中剔除。提案要求歌曲满足「实质上由人类创作」等标准才能进入国际排行榜，AI仅起辅助作用的歌曲仍有资格，但需符合AI服务条款、训练数据合法使用权等要求。","link":"https://m.ithome.com/html/984621.htm","tags":["AI音乐","版权"],"source":"IT之家","time":"8月1日消息"}]},{"title":"中国AI大模型","news":[{"title":"央视：中国AI大模型领跑全球调用量榜单","summary":"8月2日消息，据央视报道，OpenRouter全球大模型调用量榜单前五名全为中国企业，小米MiMo-V2.5以单周10.5万亿Tokens居首；Hugging Face上中国开源模型累计下载量突破100亿次、全球第一，千问系列以超10亿次居首。中国开源模型下载量已占全球41%，超越美国。","link":"https://www.ithome.com/0/984/725.htm","tags":["开源模型","行业趋势"],"source":"IT之家","time":"8月2日消息"}]},{"title":"AI训练数据争议","news":[{"title":"珍稀图书遭粉碎用于AI训练引众怒","summary":"8月2日消息，多家图书供应商突然收到数量异常庞大的图书采购订单，外界猜测AI公司为获取高质量训练数据大量采购实体书并拆脊扫描后销毁。图书数据库ISBNdb被指牵线搭桥，已删除相关宣传页面并否认从事AI训练。此前Anthropic「巴拿马计划」已与作者达成15亿美元和解。","link":"https://tech.ifeng.com/c/8vFjKy8K2MZ","tags":["训练数据","版权"],"source":"凤凰科技","time":"8月2日消息"}]}]}]},"ranking":{"platforms":[{"name":"LMArena","date":"2026-07-27","link":"https://lmarena.ai/leaderboard/text","rankings":[{"model":"Claude Fable 5","score":"1508","change":"+6"},{"model":"Claude Opus 4.6 (Thinking)","score":"1505","change":"+4"},{"model":"Claude Opus 4.7 (Thinking)","score":"1502","change":"+4"},{"model":"Claude Opus 4.6","score":"1497","change":"+4"},{"model":"Claude Opus 5 Max","score":"1495","change":"+12"},{"model":"Claude Opus 4.7","score":"1493","change":"+4"},{"model":"Claude Opus 5 (High)","score":"1493","change":"+8"},{"model":"Meta Muse Spark 1.1","score":"1491","change":"+7"},{"model":"Meta Muse Spark","score":"1488","change":"+6"},{"model":"Gemini 3.1 Pro (Preview)","score":"1486","change":"+3"},{"model":"Kimi K3 Max","score":"1486","change":"+10"},{"model":"Gemini 3 Pro","score":"1486","change":"+4"},{"model":"GPT-5.6 Sol (xHigh)","score":"1485","change":"+7"},{"model":"Claude Opus 4.8 (Thinking)","score":"1484","change":"+5"},{"model":"Gemini 3.6 Flash","score":"1482","change":"+8"},{"model":"GPT-5.5 (High)","score":"1482","change":"+4"},{"model":"GPT-5.4 (High)","score":"1477","change":"+4"},{"model":"Gemini 3.5 Flash (High)","score":"1476","change":"+7"},{"model":"GPT-5.2 Chat","score":"1476","change":"+4"},{"model":"GPT-5.5","score":"1476","change":"+4"}]},{"name":"OpenRouter","date":"2026-08-02","link":"https://openrouter.ai/rankings","rankings":[{"model":"DeepSeek V4 Flash","score":"7.43T tokens","change":"↑24%"},{"model":"MiMo-V2.5","score":"7.23T tokens","change":"↑29%"},{"model":"Hy3","score":"4.79T tokens","change":"↑43%"},{"model":"DeepSeek V4 Pro","score":"3.5T tokens","change":"↑14%"},{"model":"GLM 5.2","score":"2.99T tokens","change":"↑14%"},{"model":"Nemotron 3 Ultra (free)","score":"2.5T tokens","change":"↑5%"},{"model":"MiniMax M3","score":"2T tokens","change":"↑9%"},{"model":"Step 3.7 Flash","score":"1.67T tokens","change":"↑9%"},{"model":"Kimi K3","score":"1.41T tokens","change":"↑15%"},{"model":"Ling-3.0-flash (free)","score":"1.39T tokens","change":"↑423%"},{"model":"Claude Sonnet 5","score":"1.02T tokens","change":"↑7%"},{"model":"Gemini 3 Flash Preview","score":"982B tokens","change":"↑1%"},{"model":"Claude Sonnet 4.6","score":"976B tokens","change":"↑23%"},{"model":"Claude Opus 5","score":"927B tokens","change":"↑>999%"},{"model":"GPT-5.6 Luna","score":"835B tokens","change":"↑151%"},{"model":"Gemini 2.5 Flash Lite","score":"668B tokens","change":"↑3%"},{"model":"MiMo-V2.5-Pro","score":"635B tokens","change":"↑11%"},{"model":"Claude Opus 4.8","score":"594B tokens","change":"↑63%"},{"model":"Gemini 2.5 Flash","score":"575B tokens","change":"↑5%"},{"model":"Gemini 3.1 Flash Lite","score":"573B tokens","change":"↑2%"}]},{"name":"Product Hunt","date":"2026-07-31","link":"https://www.producthunt.com/","rankings":[{"name":"MiniMax H3","category":"Design Tools","rank":1,"link":"https://www.minimax.io"},{"name":"Cleanlist AI","category":"Sales","rank":2,"link":"https://www.cleanlist.ai"},{"name":"metrics","category":"Mac","rank":3,"link":"https://www.producthunt.com"},{"name":"Poth Labs","category":"Customer Success","rank":4,"link":"https://www.producthunt.com/products/poth-labs"},{"name":"DepthData","category":"Analytics","rank":5,"link":"https://depthdata.vercel.app"},{"name":"Halo by Scam AI","category":"Meetings","rank":6,"link":"https://www.scam.ai"},{"name":"witr","category":"Linux","rank":7,"link":"https://github.com/pranshuparmar/witr"},{"name":"Customer.io Summer Release","category":"Email","rank":8,"link":"https://customer.io"},{"name":"Screencap","category":"Productivity","rank":9,"link":"https://www.producthunt.com/products/screencap"},{"name":"Gemini Robotics 2","category":"Robots","rank":10,"link":"https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/"},{"name":"TraceLLM","category":"Open Source","rank":11,"link":"https://www.producthunt.com/products/tracellm"},{"name":"Mubert API","category":"Music","rank":12,"link":"https://mubert.com/api"}]}]}}};
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
