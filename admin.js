const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {"date":"2026-08-04","sections":{"overseas":{"vendors":[{"name":"OpenAI","news":[{"title":"ChatGPT Atlas浏览器将于8月9日停服","summary":"8月3日消息，OpenAI宣布旗下AI浏览器ChatGPT Atlas将于8月9日停止服务，并把基于浏览器的智能体能力迁移到ChatGPT桌面版和Codex。Atlas数据不会自动迁移，用户需手动导出书签和浏览历史。该浏览器于2025年10月登陆macOS，上线不到10个月即被弃用。","link":"https://tech.ifeng.com/c/8vI2Hkh5o9O","tags":["AI浏览器","产品调整"],"source":"凤凰科技","time":"8月3日消息"}]},{"name":"Anthropic","news":[]},{"name":"Google","news":[]},{"name":"xAI","news":[]},{"name":"NVIDIA","news":[]},{"name":"Meta","news":[]}]},"domestic":{"vendors":[{"name":"阿里云","news":[{"title":"阿里发布Qwen3.8及千问办公Agent","summary":"8月3日，阿里巴巴正式发布新一代基座大模型Qwen3.8，总参数量2.4万亿，编程和专业办公能力大幅提升，在Arena榜单仅次于Anthropic的Claude系列。同日企业级Agent产品「千问办公」开启公测，由QoderWork、MuleRun、悟空整合而来，已接入钉钉。Qwen3.8-Max预计下周开源。","link":"https://news.qq.com/rain/a/20260803A0B50F00","tags":["大模型","Agent"],"source":"腾讯新闻","time":"8月3日"}]},{"name":"火山引擎","news":[]},{"name":"DeepSeek","news":[]},{"name":"腾讯","news":[{"title":"腾讯混元联合发布E-Bench评测智能体","summary":"8月3日消息，腾讯混元、清华大学智能产业研究院与东南大学联合发布E-Bench基准，用于评测大模型智能体的多步骤工具调用能力。323个任务以王者荣耀、QQ音乐、腾讯会议为原型，测试11个前沿模型平均成功率仅54.56%。腾讯混元Hy3在E-Bench-Code中取得64.40%成功率且成本处于最低档。","link":"http://stock.10jqka.com.cn/20260803/c678636787.shtml","tags":["智能体","评测基准"],"source":"同花顺","time":"8月3日消息"}]},{"name":"小米","news":[{"title":"网友用AI生成虚假车祸视频抹黑小米被行拘","summary":"8月3日，小米公司通报称，网友「旧**口」长期使用AI生成虚假车祸视频，抹黑小米汽车产品商誉、侮辱高管，被警方处以行政拘留7日并删除侵权链接；另一网友「花**车」被行政罚款。小米表示将坚决使用法律武器打击利用AI捏造传播虚假视频、侵犯公司商誉的行为。","link":"https://news.qq.com/rain/a/20260803A0ALG100","tags":["AI治理","企业维权"],"source":"腾讯新闻","time":"8月3日消息"}]},{"name":"智谱AI","news":[]},{"name":"月之暗面","news":[{"title":"Kimi否认最早本月提交港股IPO申请","summary":"8月3日消息，有报道称月之暗面计划最早于本月内向港交所提交IPO申请，或募资约30亿美元。月之暗面官方回应称消息不实，并透露G轮融资仍在进行中。此前Kimi刚完成超35亿美元F轮融资，投后估值350亿美元，公司近期已由有限责任公司变更为股份公司。","link":"https://finance.eastmoney.com/a/202608033829962814.html","tags":["IPO","融资"],"source":"东方财富","time":"8月3日消息"}]},{"name":"华为","news":[{"title":"华为半导体首席科学家廖恒谈昇腾芯片突围","summary":"8月3日消息，华为Fellow、半导体首席科学家廖恒罕见公开露面接受专访，首提芯片「18层宝塔」理论，认为半导体产业链至少18层，真正稀缺的是纵向贯通多层的复合型人才。他系统复盘昇腾AI芯片突围历程，高度评价DeepSeek创始人梁文锋的稀疏激活架构选择，并坦言担忧芯片硬件人才断档。","link":"https://m.ithome.com/html/984876.htm","tags":["AI芯片","行业观点"],"source":"IT之家","time":"8月3日消息"}]}]},"other":{"categories":[{"name":"其他厂商","cards":[{"title":"MiniMax","news":[{"title":"MiniMax H3正式开源，16家芯片厂商Day0适配","summary":"8月3日，MiniMax正式开源新一代通用多模态生成模型H3，可统一理解文本、图像、视频和音频，生成最高2K分辨率、15秒带立体声音频的视频，视频编辑能力排名Artificial Analysis全球第一。开源同日华为昇腾、AMD、Intel等九家芯片厂商及HuggingFace、ComfyUI等社区完成Day0适配。","link":"https://finance.sina.com.cn/tech/shenji/2026-08-03/doc-inikzkki4632872.shtml?cref=cj","tags":["多模态","开源"],"source":"新浪财经","time":"8月3日"}]},{"title":"微软","news":[{"title":"微软测试首款自研全双工AI语音模型","summary":"8月3日消息，微软正测试首款自研原生实时语音模型MAI Realtime，采用全双工交互，可同时接收语音并输出回复、随时打断，支持中文等16种语言和自动语言检测。该模型是微软语音栈从单向走向双向的关键一步，旨在减少对OpenAI GPT-Realtime模型的依赖。","link":"https://m.ithome.com/html/985297.htm","tags":["AI语音","实时对话"],"source":"IT之家","time":"8月3日消息"}]},{"title":"京东","news":[{"title":"京东外卖推出AI智能头盔","summary":"8月3日，京东外卖发布面向骑手的AI智能头盔，首批免费发放给全职骑手。头盔通过AI语音助手实现接单、联系用户、路线提示等操作，内置「单王路线」把资深骑手经验转为耳机提示，还能解析订单备注、一键SOS求助和商户环境核验，提升恶劣天气配送效率。","link":"https://news.ifeng.com/c/8vHfgLjbUzT?ch=ttsearch","tags":["AI应用","智能硬件"],"source":"凤凰网","time":"8月3日"}]}]},{"name":"自动驾驶","cards":[{"title":"哈啰Robotaxi","news":[{"title":"哈啰Robotaxi CTO：从零入场窗口已关闭","summary":"8月3日消息，哈啰Robotaxi联合创始人、CTO于乾坤表示，2025年是从零进入Robotaxi行业的最后一个合适窗口，如今再独立搭建自动驾驶体系成本过高。他认为技术本身难成长期壁垒，未来真正壁垒是牌照资源、运营体系和数据积累，哈啰将聚焦少数城市形成上千辆规模，2027年部署1万辆目标。","link":"https://www.163.com/dy/article/L3DKHMSR05568W0A.html","tags":["Robotaxi","行业观点"],"source":"网易","time":"8月3日消息"}]}]},{"name":"具身智能","cards":[{"title":"蚂蚁灵波","news":[{"title":"蚂蚁灵波启动15亿元首轮融资","summary":"8月3日消息，蚂蚁集团旗下具身智能公司蚂蚁灵波已启动首轮融资，拟募资15亿元，计划今年底完成二轮融资。蚂蚁灵波聚焦具身智能「通用机器人大脑」，其LingBot系列2.0已适配宇树、智元等17个品牌20多种机器人构型。公司回应称确实在跟投资人接触。","link":"https://www.jiemian.com/article/14868313.html","tags":["具身智能","融资"],"source":"界面新闻","time":"8月3日消息"}]},{"title":"智元机器人","news":[{"title":"智元公布9人合伙人名单，罗剑岚缺席","summary":"8月3日晚，智元创新官网首次完整披露核心管理层名单，由9位合伙人及3位独立非执行董事构成，华为系背景浓。联合创始人彭志辉（稚晖君）任总裁兼CTO。原首席科学家罗剑岚不在名单中，智元回应称其系「岗位调整，没有离职」。公司正处于冲刺港股IPO阶段。","link":"https://tech.ifeng.com/c/8vIHXwimaM5?ch=ttsearch","tags":["具身智能","人事变动"],"source":"凤凰科技","time":"8月3日消息"}]},{"title":"自变量机器人","news":[{"title":"自变量开源HOST框架，机器人看视频学技能","summary":"8月3日消息，自变量机器人联合北京理工、清华发布并开源HOST机器人学习框架，机器人仅需观看平均29秒的人类演示视频，就能在真实世界学会一项从未见过的新技能，无需数据采集和微调。在50项新任务中平均成功率达62%，技能获取时间较主流微调方案缩短约507倍。","link":"https://www.ifanr.com/1673600","tags":["具身智能","开源"],"source":"爱范儿","time":"8月3日消息"}]}]},{"name":"AI出海","cards":[]},{"name":"投资资讯","cards":[{"title":"破壳机器人 Pre-A","news":[{"title":"破壳机器人完成亿美元级Pre-A轮融资","summary":"8月3日消息，通用具身智能公司破壳机器人完成亿美元级Pre-A轮融资，由顺为资本与经纬创投共同领投，小米战投等老股东持续加注。公司聚焦机器人操作能力，围绕世界动作模型、真机强化学习和高质量数据三大链路，目标是打造能理解物理规律、持续自主学习的通用机器人。","link":"https://stcn.com/article/detail/4054882.html","tags":["具身智能","融资"],"source":"证券时报","time":"8月3日消息"}]},{"title":"主动科技 A轮","news":[{"title":"主动科技完成3.3亿元天使轮融资","summary":"8月3日消息，侵入式脑机接口公司主动科技完成3.3亿元天使轮融资，创中国脑机接口领域天使轮融资纪录，由中科创星领投。公司已构建从柔性电极、专用芯片到编解码算法的全链路能力，拥有1024通道高通量全植入系统，形成运动、视觉、情绪三大产品线，加速临床转化与产业化。","link":"https://www.cnstock.com/commonDetail/754372","tags":["脑机接口","融资"],"source":"中国证券网","time":"8月3日消息"}]},{"title":"昉擎科技 A1","news":[{"title":"昉擎科技完成A1轮融资，估值破百亿","summary":"8月3日消息，AI计算系统创企昉擎科技完成A1轮融资，投后估值超100亿元，由徐汇资本、珠海科技产业集团等国资领投。公司CEO梁军为前华为海思麒麟SoC总架构师，基于分离式架构与4D Memory理论研发智能计算系统，今年第四季度开始商业化。","link":"https://finance.sina.com.cn/tech/it/2026-08-03/doc-inikzuyc4554592.shtml","tags":["AI芯片","融资"],"source":"新浪财经","time":"8月3日消息"}]}]},{"name":"行业趋势&观点","cards":[{"title":"AI安全监管","news":[{"title":"白宫召集AI巨头审议模型安全测试框架","summary":"8月4日消息，特朗普政府邀请OpenAI、谷歌、Anthropic等企业中层人员周二前往白宫，审议AI监管框架最终版本。该自愿性框架要求AI实验室在推出模型前向政府提交，供其在最多提前30天进行安全测试，用于评估模型网络安全能力，但不得用于建立强制性联邦许可。","link":"https://www.c114.net.cn/ainews/107250.html","tags":["AI监管","安全测试"],"source":"C114通信网","time":"8月4日消息"}]},{"title":"AI产业规模","news":[{"title":"中国信通院：2025年AI产业规模超1.2万亿","summary":"8月3日消息，中国信通院测算2025年我国人工智能产业规模超1.2万亿元，同比增长40%。截至2026年6月，AI企业数量超6600家、占全球15%。产业链中应用层占比55%同比增长22%，基础层占比38%同比增长59%，模型框架层占比7%但增速达189%，产业集中在北京、广东、上海等五地。","link":"https://finance.eastmoney.com/a/202608033830102669.html","tags":["产业数据","行业趋势"],"source":"东方财富","time":"8月3日消息"}]},{"title":"DeepSeek登顶","news":[{"title":"DeepSeek-V4-Flash登顶全球调用量第一","summary":"8月3日消息，据OpenRouter最新数据，DeepSeek-V4-Flash以约7.22万亿Token周调用量登顶全球大模型调用榜，发布仅一周即登顶。全球前五均为中国大模型，中国AI大模型周调用量连续十四周超美国稳居首位。V4-Flash输出定价仅0.28美元/百万Token，性价比优势明显。","link":"https://stcn.com/article/detail/4054706.html","tags":["大模型","行业数据"],"source":"证券时报","time":"8月3日消息"}]},{"title":"中国AI领先论","news":[{"title":"HuggingFace CEO：中国正赢得AI竞赛","summary":"8月4日消息，Hugging Face CEO德朗格接受CNBC采访表示，中国在开放权重AI模型领域明显占据主导地位，今年底或明年可能在整个前沿AI领域领先。他将中国优势归因于开放协作的共享生态，批评美国前沿实验室「各自为战」，并反对美国政府限制使用中国AI模型。","link":"https://tech.ifeng.com/c/8vJ5PeX7xrx?ch=ttsearch","tags":["开源生态","行业观点"],"source":"凤凰科技","time":"8月4日消息"}]}]}]},"ranking":{"platforms":[{"name":"LMArena","date":"2026-07-27","link":"https://lmarena.ai/leaderboard/text","rankings":[{"model":"Claude Fable 5","score":"1508","change":"+6"},{"model":"Claude Opus 4.6 (Thinking)","score":"1505","change":"+4"},{"model":"Claude Opus 4.7 (Thinking)","score":"1502","change":"+4"},{"model":"Claude Opus 4.6","score":"1497","change":"+4"},{"model":"Claude Opus 5 Max","score":"1495","change":"+12"},{"model":"Claude Opus 4.7","score":"1493","change":"+4"},{"model":"Claude Opus 5 (High)","score":"1493","change":"+8"},{"model":"Meta Muse Spark 1.1","score":"1491","change":"+7"},{"model":"Meta Muse Spark","score":"1488","change":"+6"},{"model":"Gemini 3.1 Pro (Preview)","score":"1486","change":"+3"},{"model":"Kimi K3 Max","score":"1486","change":"+10"},{"model":"Gemini 3 Pro","score":"1486","change":"+4"},{"model":"GPT-5.6 Sol (xHigh)","score":"1485","change":"+7"},{"model":"Claude Opus 4.8 (Thinking)","score":"1484","change":"+5"},{"model":"Gemini 3.6 Flash","score":"1482","change":"+8"},{"model":"GPT-5.5 (High)","score":"1482","change":"+4"},{"model":"GPT-5.4 (High)","score":"1477","change":"+4"},{"model":"Gemini 3.5 Flash (High)","score":"1476","change":"+7"},{"model":"GPT-5.2 Chat","score":"1476","change":"+4"},{"model":"GPT-5.5","score":"1476","change":"+4"}]},{"name":"OpenRouter","date":"2026-08-04","link":"https://openrouter.ai/rankings","rankings":[{"model":"DeepSeek V4 Flash 0423","score":"7.1T tokens","change":"↑5%"},{"model":"MiMo-V2.5","score":"5.41T tokens","change":"↑50%"},{"model":"Hy3","score":"4.89T tokens","change":"↑3%"},{"model":"DeepSeek V4 Pro","score":"3.11T tokens","change":"↑7%"},{"model":"GLM 5.2","score":"2.87T tokens","change":"↑13%"},{"model":"GPT-5.6 Luna","score":"2.45T tokens","change":"↑620%"},{"model":"Nemotron 3 Ultra (free)","score":"2.35T tokens","change":"↑5%"},{"model":"DeepSeek V4 Flash 0731","score":"2.33T tokens","change":"新上榜"},{"model":"MiniMax M3","score":"1.91T tokens","change":"↑9%"},{"model":"Step 3.7 Flash","score":"1.62T tokens","change":"↑20%"},{"model":"Kimi K3","score":"1.42T tokens","change":"↑16%"},{"model":"Ling-3.0-flash (free)","score":"1.39T tokens","change":"↑423%"},{"model":"Claude Sonnet 5","score":"1.02T tokens","change":"↑7%"},{"model":"Gemini 3 Flash Preview","score":"982B tokens","change":"↑1%"},{"model":"Claude Sonnet 4.6","score":"976B tokens","change":"↑23%"},{"model":"Claude Opus 5","score":"927B tokens","change":"↑>999%"},{"model":"Gemini 2.5 Flash Lite","score":"668B tokens","change":"↑3%"},{"model":"MiMo-V2.5-Pro","score":"635B tokens","change":"↑11%"},{"model":"Claude Opus 4.8","score":"594B tokens","change":"↑63%"},{"model":"Gemini 2.5 Flash","score":"575B tokens","change":"↑5%"}]},{"name":"Product Hunt","date":"2026-07-31","link":"https://www.producthunt.com/","rankings":[{"name":"MiniMax H3","category":"Design Tools","rank":1,"link":"https://www.minimax.io"},{"name":"Cleanlist AI","category":"Sales","rank":2,"link":"https://www.cleanlist.ai"},{"name":"metrics","category":"Mac","rank":3,"link":"https://www.producthunt.com"},{"name":"Poth Labs","category":"Customer Success","rank":4,"link":"https://www.producthunt.com/products/poth-labs"},{"name":"DepthData","category":"Analytics","rank":5,"link":"https://depthdata.vercel.app"},{"name":"Halo by Scam AI","category":"Meetings","rank":6,"link":"https://www.scam.ai"},{"name":"witr","category":"Linux","rank":7,"link":"https://github.com/pranshuparmar/witr"},{"name":"Customer.io Summer Release","category":"Email","rank":8,"link":"https://customer.io"},{"name":"Screencap","category":"Productivity","rank":9,"link":"https://www.producthunt.com/products/screencap"},{"name":"Gemini Robotics 2","category":"Robots","rank":10,"link":"https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/"},{"name":"TraceLLM","category":"Open Source","rank":11,"link":"https://www.producthunt.com/products/tracellm"},{"name":"Mubert API","category":"Music","rank":12,"link":"https://mubert.com/api"}]}]}}};
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
