const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {"date":"2026-08-03","sections":{"overseas":{"vendors":[{"name":"OpenAI","news":[{"title":"OpenAI或将IPO推迟到明年","summary":"8月1日消息，据《华尔街日报》报道，因投资者担忧现金消耗过快、巨额亏损及市场环境不佳，OpenAI可能将IPO推迟至明年，原定最快2026年秋季上市的计划生变。与此同时，Anthropic正加速推进秋季IPO计划，其营收增长与估值近期均超过OpenAI，部分投资者通过向Anthropic注资对冲对OpenAI的押注。","link":"https://finance.eastmoney.com/a/202608013828990123.html","tags":["IPO","资本市场"],"source":"东方财富","time":"8月1日消息"},{"title":"奥特曼建议放缓AI发展速度，重检模型安全边界","summary":"8月3日消息，OpenAI CEO奥特曼近日表示，或许是时候控制人工智能发展速度，让社会有时间围绕新能力水平做好准备。他此前在播客中承认已与白宫官员讨论放缓AI发展的必要性，OpenAI与Anthropic均支持1200余名AI员工联署的减速请愿。这一表态出现在OpenAI模型卷入Hugging Face安全事件之后。","link":"https://wt.cfi.cn/p20260803000020.html","tags":["AI安全","行业观点"],"source":"中财网","time":"8月3日消息"}]},{"name":"Anthropic","news":[]},{"name":"Google","news":[]},{"name":"xAI","news":[{"title":"SpaceX首份财报即将发布，空头持仓创纪录","summary":"8月2日消息，SpaceX将于8月4日美股盘后发布上市以来首份财报，8月6日面临最多9.115亿股解禁（价值超1000亿美元）。截至7月29日空头持仓达2.193亿股，约占可交易流通股34%，名义价值约246亿美元，为美国被做空最严重的大型公司之一。股价已较上市高点跌超52%至108美元附近。","link":"https://finance.eastmoney.com/a/202608023829093485.html","tags":["SpaceX","财报"],"source":"东方财富","time":"8月2日消息"},{"title":"SpaceXAI将拆除数据中心69台移动涡轮发电机","summary":"8月2日消息，马斯克旗下SpaceXAI宣布，因环境污染争议，将逐步拆除Colossus数据中心69台临时移动天然气涡轮发电机，2027年7月前全部清退。这批发电机曾是其19天部署10万块英伟达H200的关键，但因缺运营许可遭投诉和诉讼。作为替代，一座1.2GW永久发电厂正在建设。","link":"https://tech.ifeng.com/c/8vGjazOpCWo?ch=ttsearch","tags":["数据中心","能源"],"source":"凤凰科技","time":"8月2日消息"}]},{"name":"NVIDIA","news":[]},{"name":"Meta","news":[]}]},"domestic":{"vendors":[{"name":"阿里云","news":[]},{"name":"火山引擎","news":[]},{"name":"DeepSeek","news":[]},{"name":"腾讯","news":[]},{"name":"小米","news":[]},{"name":"智谱AI","news":[]},{"name":"月之暗面","news":[]},{"name":"华为","news":[]}]},"other":{"categories":[{"name":"其他厂商","cards":[{"title":"苹果","news":[{"title":"苹果限制AI批量低质漏洞报告","summary":"8月2日消息，苹果安全研究团队更新漏洞赏金计划规则，限制每位安全研究人员同时提交的漏洞数量并设30天冷却期。原因是大量自动化脚本与AI大模型被用于生成虚假漏洞报告，多数属模型幻觉产物，挤占审核精力。意大利公司Bynario用ChatGPT三周发现macOS 50多个漏洞却因限额无法上报。","link":"https://m.ithome.com/html/984722.htm","tags":["AI安全","漏洞赏金"],"source":"IT之家","time":"8月2日消息"},{"title":"AI内存短缺致MacBook Air缺货","summary":"8月3日消息，据彭博社记者古尔曼报道，AI产业快速扩张引发的内存芯片短缺正影响苹果Mac供应，畅销的MacBook Air面临库存压力，部分型号需等到8月下旬甚至9月发货。苹果返校季宣传也明显减少对MacBook Air的强调，转而突出基础款MacBook Pro。","link":"https://tech.ifeng.com/c/8vHPJI0FDGs?ch=ttsearch","tags":["内存短缺","供应链"],"source":"凤凰科技","time":"8月3日消息"}]},{"title":"三星","news":[{"title":"三星预计内存短缺2027年加剧","summary":"8月1日消息，三星在Q2财报电话会上预测，全球内存芯片短缺将在2027年进一步加剧，供应紧张至少持续至2028年。前沿AI实验室正直接向三星提交中长期需求预测以提前锁定产能，存储厂商将60%-70%产能签入面向数据中心和AI实验室的长期合同，消费电子产能被持续压缩。","link":"https://m.ithome.com/html/984435.htm","tags":["内存短缺","AI需求"],"source":"IT之家","time":"8月1日消息"}]},{"title":"哔哩哔哩","news":[{"title":"曾爱玲加入B站负责AI视频生成","summary":"7月31日消息，据36氪独家报道，曾爱玲入职哔哩哔哩担任AI视频生成业务负责人，向CEO陈睿汇报。她曾在腾讯混元与AI Lab工作三年，后在米哈游创始人蔡浩宇旗下Anuttacon负责交互式多模态视频生成系统。B站AI投入覆盖视频理解、推荐和辅助创作，曾爱玲入职将推动AI视频生成升至更高层级。","link":"https://www.36kr.com/p/3910776673064073","tags":["AI视频","人事变动"],"source":"36氪","time":"7月31日消息"}]},{"title":"Snap","news":[{"title":"Snap将于9月全面展示消费级AR眼镜Specs","summary":"8月2日消息，Snap宣布将于9月16日在洛杉矶举办专场活动，全面展示旗下首款面向普通消费者的AR眼镜Specs，CEO埃文·斯皮格尔将首次深入介绍其功能。该眼镜售价2195美元，内置浏览器并接入OpenAI和Google双平台AI能力，已开启预购，预计秋季率先在美国、英国、法国发货。","link":"https://m.ithome.com/html/984792.htm","tags":["AR眼镜","AI助手"],"source":"IT之家","time":"8月2日消息"}]}]},{"name":"自动驾驶","cards":[]},{"name":"具身智能","cards":[{"title":"启元机器人","news":[{"title":"上纬启元与《魔兽世界》合作推限定机器人","summary":"8月2日消息，上纬新材旗下消费级具身智能品牌启元机器人在ChinaJoy期间官宣与暴雪《魔兽世界》合作，推出活动限定「鱼人定制款」启元Q1机器人。该产品依托启元Q1探索版模块化设计、软硬件开源能力打造，身高约80-88厘米，22个自由度，支持轮足、人形、四足三态切换，搭载AI跟拍等功能。","link":"https://www.ithome.com/0/984/758.htm","tags":["具身智能","IP联动"],"source":"IT之家","time":"8月2日消息"}]},{"title":"法拉第未来","news":[{"title":"贾跃亭FF EAI机器人7月出货152台创新高","summary":"8月3日消息，法拉第未来创始人贾跃亭透露，FF EAI机器人7月实现销售及出货152台，创单月新高，截至7月底累计出货394台，正朝着全年2000台目标推进。公司今年5月宣布转型为物理AI生态企业，确立人形仿生机器人与汽车机器人两大主线，整车业务退居次要位置。","link":"https://tech.ifeng.com/c/8vHSpzNcSa9?ch=ttsearch","tags":["具身智能","人形机器人"],"source":"凤凰科技","time":"8月3日消息"}]}]},{"name":"AI出海","cards":[]},{"name":"投资资讯","cards":[]},{"name":"行业趋势&观点","cards":[{"title":"AI成本论","news":[{"title":"经济学家汉克：AI成本极高难大规模取代人力","summary":"8月3日消息，约翰斯·霍普金斯大学教授汉克批评「AI将免费」的观点脱离现实，指出AI运行需消耗大量水电和GPU，成本极高，很多情况下使用AI成本反而比雇佣员工更高，企业不会把所有员工裁掉换成AI。他认为决定AI革命走向的是稀缺资源成本，而非市场热情。","link":"https://m.ithome.com/html/984835.htm","tags":["行业观点","AI成本"],"source":"IT之家","time":"8月3日消息"}]},{"title":"大模型评测","news":[{"title":"Arena推出AutoEval用奖励模型快速预估排名","summary":"8月2日消息，大模型评测平台Arena推出AutoEval，用数百万组真实用户偏好训练奖励模型模拟用户投票，新模型发布后最快1小时即可获得预估排行榜分数，后续再由真人投票校正。回测显示其与真人排名相关性超0.98，但模型实力接近（分差小于5分）时区分度有限。","link":"https://www.theblockbeats.info/flash/359235","tags":["模型评测","奖励模型"],"source":"The Block Beats","time":"8月2日消息"}]}]}]},"ranking":{"platforms":[{"name":"LMArena","date":"2026-07-27","link":"https://lmarena.ai/leaderboard/text","rankings":[{"model":"Claude Fable 5","score":"1508","change":"+6"},{"model":"Claude Opus 4.6 (Thinking)","score":"1505","change":"+4"},{"model":"Claude Opus 4.7 (Thinking)","score":"1502","change":"+4"},{"model":"Claude Opus 4.6","score":"1497","change":"+4"},{"model":"Claude Opus 5 Max","score":"1495","change":"+12"},{"model":"Claude Opus 4.7","score":"1493","change":"+4"},{"model":"Claude Opus 5 (High)","score":"1493","change":"+8"},{"model":"Meta Muse Spark 1.1","score":"1491","change":"+7"},{"model":"Meta Muse Spark","score":"1488","change":"+6"},{"model":"Gemini 3.1 Pro (Preview)","score":"1486","change":"+3"},{"model":"Kimi K3 Max","score":"1486","change":"+10"},{"model":"Gemini 3 Pro","score":"1486","change":"+4"},{"model":"GPT-5.6 Sol (xHigh)","score":"1485","change":"+7"},{"model":"Claude Opus 4.8 (Thinking)","score":"1484","change":"+5"},{"model":"Gemini 3.6 Flash","score":"1482","change":"+8"},{"model":"GPT-5.5 (High)","score":"1482","change":"+4"},{"model":"GPT-5.4 (High)","score":"1477","change":"+4"},{"model":"Gemini 3.5 Flash (High)","score":"1476","change":"+7"},{"model":"GPT-5.2 Chat","score":"1476","change":"+4"},{"model":"GPT-5.5","score":"1476","change":"+4"}]},{"name":"OpenRouter","date":"2026-08-03","link":"https://openrouter.ai/rankings","rankings":[{"model":"DeepSeek V4 Flash","score":"7.22T tokens","change":"↑13%"},{"model":"MiMo-V2.5","score":"6.3T tokens","change":"↑40%"},{"model":"Hy3","score":"4.82T tokens","change":"↑22%"},{"model":"DeepSeek V4 Pro","score":"3.28T tokens","change":"↑3%"},{"model":"GLM 5.2","score":"2.89T tokens","change":"↑12%"},{"model":"Nemotron 3 Ultra (free)","score":"2.43T tokens","change":"↑4%"},{"model":"MiniMax M3","score":"1.96T tokens","change":"↑4%"},{"model":"GPT-5.6 Luna","score":"1.95T tokens","change":"↑465%"},{"model":"Step 3.7 Flash","score":"1.66T tokens","change":"↑14%"},{"model":"Kimi K3","score":"1.42T tokens","change":"↑16%"},{"model":"Ling-3.0-flash (free)","score":"1.39T tokens","change":"↑423%"},{"model":"Claude Sonnet 5","score":"1.02T tokens","change":"↑7%"},{"model":"Gemini 3 Flash Preview","score":"982B tokens","change":"↑1%"},{"model":"Claude Sonnet 4.6","score":"976B tokens","change":"↑23%"},{"model":"Claude Opus 5","score":"927B tokens","change":"↑>999%"},{"model":"Gemini 2.5 Flash Lite","score":"668B tokens","change":"↑3%"},{"model":"MiMo-V2.5-Pro","score":"635B tokens","change":"↑11%"},{"model":"Claude Opus 4.8","score":"594B tokens","change":"↑63%"},{"model":"Gemini 2.5 Flash","score":"575B tokens","change":"↑5%"},{"model":"Gemini 3.1 Flash Lite","score":"573B tokens","change":"↑2%"}]},{"name":"Product Hunt","date":"2026-07-31","link":"https://www.producthunt.com/","rankings":[{"name":"MiniMax H3","category":"Design Tools","rank":1,"link":"https://www.minimax.io"},{"name":"Cleanlist AI","category":"Sales","rank":2,"link":"https://www.cleanlist.ai"},{"name":"metrics","category":"Mac","rank":3,"link":"https://www.producthunt.com"},{"name":"Poth Labs","category":"Customer Success","rank":4,"link":"https://www.producthunt.com/products/poth-labs"},{"name":"DepthData","category":"Analytics","rank":5,"link":"https://depthdata.vercel.app"},{"name":"Halo by Scam AI","category":"Meetings","rank":6,"link":"https://www.scam.ai"},{"name":"witr","category":"Linux","rank":7,"link":"https://github.com/pranshuparmar/witr"},{"name":"Customer.io Summer Release","category":"Email","rank":8,"link":"https://customer.io"},{"name":"Screencap","category":"Productivity","rank":9,"link":"https://www.producthunt.com/products/screencap"},{"name":"Gemini Robotics 2","category":"Robots","rank":10,"link":"https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/"},{"name":"TraceLLM","category":"Open Source","rank":11,"link":"https://www.producthunt.com/products/tracellm"},{"name":"Mubert API","category":"Music","rank":12,"link":"https://mubert.com/api"}]}]}}};
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
