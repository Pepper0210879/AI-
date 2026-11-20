// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const VENDOR_DISPLAY = {
    "OpenAI":       { color: "#7ab8d6", softBg: "#edf5fa", initial: "O", logo: "logos/OpenAI.png" },
    "Anthropic":    { color: "#c4a882", softBg: "#faf5ee", initial: "A", logo: "logos/Anthropic.png" },
    "Google":       { color: "#8ac4a0", softBg: "#effaf3", initial: "G", logo: "logos/Google.png" },
    "xAI":          { color: "#8ab4d4", softBg: "#eef5fb", initial: "X", logo: "logos/xAI.png" },
    "NVIDIA":       { color: "#a8c47a", softBg: "#f4f9ee", initial: "N", logo: "logos/NVDIA.png" },
    "Meta":         { color: "#8a9ad4", softBg: "#eff0fa", initial: "M", logo: "logos/Meta.png" },
    "微软":         { color: "#00A4EF", softBg: "#E6F5FD", initial: "微", logo: "logos/微软.jpg" },
    "阿里云":       { color: "#d4a06a", softBg: "#faf5ee", initial: "阿", logo: "logos/阿里云.png" },
    "火山引擎":     { color: "#8aaed4", softBg: "#eef5fb", initial: "火", logo: "logos/火山引擎.png" },
    "DeepSeek":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "D", logo: "logos/DeepSeek.png" },
    "腾讯":         { color: "#8ac4a0", softBg: "#effaf3", initial: "腾", logo: "logos/腾讯.png" },
    "智谱AI":       { color: "#b4a0d4", softBg: "#f5f0fa", initial: "智", logo: "logos/智谱.png" },
    "智谱 AI":      { color: "#b4a0d4", softBg: "#f5f0fa", initial: "智", logo: "logos/智谱.png" },
    "MiniMax":      { color: "#d4a0b4", softBg: "#faf0f4", initial: "M", logo: "logos/MiniMax.png" },
    "月之暗面":     { color: "#b4a0d4", softBg: "#f5f0fa", initial: "月", logo: "logos/月之暗面.png" },
    "华为":         { color: "#d4a0a0", softBg: "#faf0f0", initial: "华", logo: "logos/华为.jpg" },
    "三星":         { color: "#8aaed4", softBg: "#eef5fb", initial: "三" },
    "小米":         { color: "#d4a882", softBg: "#faf5ee", initial: "米", logo: "logos/小米.jpg" },
    "昆仑万维":     { color: "#a0b0d4", softBg: "#f2f4fa", initial: "昆" },
    "字节跳动":     { color: "#8ab4d4", softBg: "#eef5fb", initial: "字" },
    "Stability AI": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "S" },
    "波士顿动力":   { color: "#d4a0a0", softBg: "#faf0f0", initial: "B" },
    "Waymo":        { color: "#8ac4a0", softBg: "#effaf3", initial: "W" },
    "特斯拉":       { color: "#d4a0a0", softBg: "#faf0f0", initial: "T" },
    "新智具身":     { color: "#b4a0d4", softBg: "#f5f0fa", initial: "新" },
    "零一汽车":     { color: "#a8c47a", softBg: "#f4f9ee", initial: "零" },
    "蚂蚁灵波":     { color: "#d4a06a", softBg: "#faf5ee", initial: "蚂" },
    "Figure":       { color: "#8a9ad4", softBg: "#eff0fa", initial: "F" },
    "文远知行":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "文" },
    "小马智行":     { color: "#8ac4a0", softBg: "#effaf3", initial: "马" },
    "QuestMobile":  { color: "#b4a0d4", softBg: "#f5f0fa", initial: "Q" },
    "支付宝":       { color: "#4a90d9", softBg: "#eef5fb", initial: "支" },
    "SK 海力士":    { color: "#8a9ad4", softBg: "#eff0fa", initial: "S" },
    "快手":         { color: "#d4a06a", softBg: "#faf5ee", initial: "快", logo: "logos/其他厂商/快手.png" },
    "台积电":       { color: "#8ac4a0", softBg: "#effaf3", initial: "台" },
    "蚂蚁集团":     { color: "#4a90d9", softBg: "#eef5fb", initial: "蚂" },
    "蔚来":         { color: "#7ab8d6", softBg: "#edf5fa", initial: "蔚" },
    "问界 M9":      { color: "#d4a0a0", softBg: "#faf0f0", initial: "问" },
    "星尘智能":     { color: "#b4a0d4", softBg: "#f5f0fa", initial: "星" },
    "Figure AI":    { color: "#8a9ad4", softBg: "#eff0fa", initial: "F" },
    "长鑫科技":     { color: "#a8c47a", softBg: "#f4f9ee", initial: "长" },
    "杉岩数据":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "杉" },
    "FuriosaAI":    { color: "#d4a882", softBg: "#faf5ee", initial: "F" },
    "百川智能":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "百" },
    "面壁智能":     { color: "#b4a0d4", softBg: "#f5f0fa", initial: "面" },
    "擎朗智能":     { color: "#d4a882", softBg: "#faf5ee", initial: "擎" },
    "光轮智能":     { color: "#a8c47a", softBg: "#f4f9ee", initial: "光" },
    "美团":         { color: "#d4a06a", softBg: "#faf5ee", initial: "美" },
    "抖音":         { color: "#8ab4d4", softBg: "#eef5fb", initial: "抖" },
    "星巴克":       { color: "#8ac4a0", softBg: "#effaf3", initial: "星" },
    "黄仁勋":       { color: "#a8c47a", softBg: "#f4f9ee", initial: "黄" },
    "Demis Hassabis": { color: "#8a9ad4", softBg: "#eff0fa", initial: "H" },
    "SK海力士":     { color: "#8a9ad4", softBg: "#eff0fa", initial: "S" },
    "小米汽车":     { color: "#d4a882", softBg: "#faf5ee", initial: "车" },
    "OpenRouter":   { color: "#7ab8d6", softBg: "#edf5fa", initial: "O" },
    "MiniMax":      { color: "#d4a0b4", softBg: "#faf0f4", initial: "M", logo: "logos/MiniMax.png" },
    "小鹏汽车":     { color: "#8ac4a0", softBg: "#effaf3", initial: "鹏" },
    "小鹏 IRON":    { color: "#8a9ad4", softBg: "#eff0fa", initial: "I" },
    "苹果":         { color: "#a0a8b0", softBg: "#f2f4f5", initial: "苹", logo: "logos/其他厂商/苹果.png" },
    "自变量机器人": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "自" },
    "荣耀":         { color: "#4a90d9", softBg: "#eef5fb", initial: "荣" },
    "罗福莉（小米大模型负责人）": { color: "#d4a882", softBg: "#faf5ee", initial: "罗" },
    "黄仁勋（NVIDIA CEO）": { color: "#a8c47a", softBg: "#f4f9ee", initial: "黄" },
    "英特尔":         { color: "#0071c5", softBg: "#e6f0f8", initial: "英", logo: "https://www.google.com/s2/favicons?domain=intel.com&sz=64" },
    "鸿海（富士康）": { color: "#e60012", softBg: "#fde8ec", initial: "鸿", logo: "https://www.google.com/s2/favicons?domain=foxconn.com&sz=64" },
    "网易有道":       { color: "#e4393c", softBg: "#fde8ec", initial: "有", logo: "https://www.google.com/s2/favicons?domain=youdao.com&sz=64" },
    "宇树科技":       { color: "#1a1a2e", softBg: "#e8e8f0", initial: "宇", logo: "https://www.google.com/s2/favicons?domain=unitree.com&sz=64" },
    "Vbot 维他动力":  { color: "#00d4aa", softBg: "#e6faf5", initial: "V", logo: "https://www.google.com/s2/favicons?domain=vbot.ai&sz=64" },
    "博登智能":       { color: "#4a90d9", softBg: "#eef5fb", initial: "博", logo: "https://www.google.com/s2/favicons?domain=bodenai.com&sz=64" },
    "软银集团":       { color: "#c0c0c0", softBg: "#f5f5f5", initial: "软", logo: "https://www.google.com/s2/favicons?domain=softbank.jp&sz=64" },
    "_tag_map": {
        "三星": "三星", "小米": "小米", "MiMo": "小米", "小米汽车": "小米",
        "昆仑万维": "昆仑万维", "字节跳动": "字节跳动", "豆包": "字节跳动",
        "OpenAI": "OpenAI", "Anthropic": "Anthropic", "Google": "Google",
        "NVIDIA": "NVIDIA", "Meta": "Meta", "DeepSeek": "DeepSeek",
        "腾讯": "腾讯", "通义千问": "阿里云", "华为": "华为",
        "波士顿动力": "波士顿动力", "Atlas": "波士顿动力",
        "Waymo": "Waymo", "Robotaxi": "小马智行",
        "特斯拉": "特斯拉",
        "新智具身": "新智具身", "触觉": "新智具身",
        "零一汽车": "零一汽车",
        "蚂蚁灵波": "蚂蚁灵波",
        "文远知行": "文远知行",
        "小马智行": "小马智行",
        "QuestMobile": "QuestMobile",
        "支付宝": "支付宝", "AI支付": "支付宝",
        "SK海力士": "SK海力士", "HBM": "SK海力士",
        "百川智能": "百川智能", "医疗AI": "百川智能",
        "面壁智能": "面壁智能", "端侧AI": "面壁智能",
        "擎朗智能": "擎朗智能", "人形机器人": "擎朗智能",
        "光轮智能": "光轮智能",
        "美团": "美团", "Skill": "美团",
        "抖音": "抖音", "AI安全": "抖音",
        "星巴克": "星巴克", "AI应用": "星巴克",
        "黄仁勋": "黄仁勋",
        "Hassabis": "Demis Hassabis",
        "AI芯片": "NVIDIA",
        "蚂蚁集团": "支付宝",
        "物理AI": "光轮智能",
        "小米汽车": "小米"
    }
}
const NEWS_DATA = {
  "date": "2026-11-20",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "#E8F7F2",
          "initial": "O",
          "news": [
            {
              "title": "OpenAI 开放 GPT-Live-1.1 API，支持实时双向对话",
              "summary": "11月20日消息，OpenAI 宣布向开发者开放 GPT-Live-1.1 API 语音模型，允许第三方开发者构建能够实时聆听、回应并执行复杂任务的 AI 语音智能体。该模型具备全双工语音交互能力，可同时聆听和说话，支持将需要深度推理或工具调用的任务委托给开发者选择的后端模型，语音对话仍可继续。",
              "link": "https://www.ithome.com/1/029/776.htm",
              "tags": [
                "语音模型",
                "API"
              ],
              "source": "IT之家",
              "time": "11月20日消息"
            },
            {
              "title": "OpenAI 向 Plus 用户开放 dots AI 智能体",
              "summary": "11月20日消息，OpenAI 核心产品负责人索蒂奥宣布，邀请少量 ChatGPT Plus 用户测试 dots 全天候智能助理，并向所有 ChatGPT Business Standard 用户开放。dots 拥有自己的云电脑，用户交代目标、连接应用后，可在后台规划议程、设计网站、测试应用等，并可规定哪些事允许其自行处理。",
              "link": "https://www.ithome.com/1/029/784.htm",
              "tags": [
                "AI智能体",
                "dots"
              ],
              "source": "IT之家",
              "time": "11月20日消息"
            },
            {
              "title": "奥尔特曼：OpenAI 也计划上市",
              "summary": "11月19日，在竞争对手 Anthropic 上市之际，OpenAI 首席执行官奥尔特曼在 DealBook 峰会上表示，OpenAI 也在继续推进自身的 IPO 计划，「我们计划上市，有许多理由表明这是正确的决定」。谈及英伟达创始人黄仁勋离职时，他称「很难想象没有黄仁勋的人工智能行业」。OpenAI 已于今年 6 月 8 日向美国证券交易委员会递交保密版 S-1 上市申请文件。",
              "link": "http://finance.sina.com.cn/stock/estate/integration/2026-11-19/doc-inizfuni1021005.shtml",
              "tags": [
                "IPO",
                "奥尔特曼"
              ],
              "source": "新浪财经",
              "time": "11月19日"
            },
            {
              "title": "美亚利桑那州对 OpenAI 等 AI 公司展开刑事调查",
              "summary": "11月19日消息，美国亚利桑那州总检察长梅斯表示，该州已对 OpenAI 及其他 AI 公司展开刑事调查，事由是「银行疑似遭失控 AI 代理渗透」。梅斯表示，刑事调查并不一定意味着会提起指控，目前其办公室正在调查是否存在持续违反亚利桑那州法律的行为。",
              "link": "https://www.cls.cn/detail/2538710",
              "tags": [
                "监管",
                "AI安全"
              ],
              "source": "财联社",
              "time": "11月19日消息"
            },
            {
              "title": "ChatGPT 新增实时听写功能，取消 10 分钟限制",
              "summary": "11月19日消息，ChatGPT 宣布新增「实时听写」功能，用户对着麦克风说话时，语音即可同步转换成文字，不必等录音结束后再转写。该功能将陆续向全球所有 ChatGPT 用户开放，覆盖网页版、桌面客户端及 iOS、Android 应用，并取消原有 10 分钟时长限制，进一步提高转写可靠性。",
              "link": "https://ai.zol.com.cn/1274/12749388_all.html",
              "tags": [
                "语音",
                "功能更新"
              ],
              "source": "中关村在线",
              "time": "11月19日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#D97757",
          "softBg": "#F9EFE8",
          "initial": "A",
          "news": [
            {
              "title": "Anthropic 上市首日收涨 17%，市值 1.27 万亿美元",
              "summary": "当地时间11月19日，Anthropic 正式登陆纳斯达克（代码 ANT），开盘报 111.50 美元，较 83 美元发行价上涨 34%，盘中一度突破 115 美元，最终收于 97.17 美元，上涨 17.07%，收盘市值约 1.27 万亿美元。此次 IPO 募资 813 亿美元，超过 SpaceX 今年 6 月的 750 亿美元，创美股史上最大 IPO 纪录，另有 260 亿美元私募配售。",
              "link": "http://www.21jingji.com/article/20261120/herald/3c8554e1e525a3824326cd0c224a0066.html",
              "tags": [
                "IPO",
                "融资"
              ],
              "source": "21世纪经济报道",
              "time": "当地时间11月19日"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "#EAF1FD",
          "initial": "G",
          "news": [
            {
              "title": "谷歌 Gemini 推出 Computer Use，可操作 Mac 应用",
              "summary": "当地时间11月19日，谷歌为 macOS 版 Gemini 推出「电脑操控」（Computer Use）功能，用户用自然语言描述任务后，Gemini 可跨本地文件、桌面应用和网页执行点击、输入、操作菜单及填写表单，在独立后台窗口运行，关键动作执行前需用户确认。该功能首批面向美国英语用户开放，需搭载 Apple 芯片的 Mac 及 Google AI Plus、Pro 或 Ultra 订阅。",
              "link": "https://news.sohu.com/a/1103920812_362225",
              "tags": [
                "AI智能体",
                "Computer Use"
              ],
              "source": "搜狐科技",
              "time": "当地时间11月19日"
            },
            {
              "title": "谷歌与蓝色起源合作，计划 2029 年发射 AI 服务器卫星",
              "summary": "11月19日消息，谷歌与蓝色起源达成合作，蓝色起源新格伦火箭将于 2029 年第一季度发射搭载谷歌 TPU 的 AI 服务器卫星，算力约相当于一整个数据中心机架。此次合作是谷歌「太阳捕手计划」的一部分，此前谷歌已部署首颗 AI 服务器卫星并成功启动 TPU。",
              "link": "https://www.ithome.com/1/029/695.htm",
              "tags": [
                "太空AI",
                "TPU"
              ],
              "source": "IT之家",
              "time": "11月19日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1D9BF0",
          "softBg": "#EAF4FE",
          "initial": "x",
          "news": [
            {
              "title": "马斯克披露 Optimus、xAI 算力等业务时间表",
              "summary": "当地时间11月18日，马斯克通过视频连线参加奥斯汀 TomorrowX 峰会并披露多项业务进展：Optimus 人形机器人有望在未来 12 至 18 个月内完成洗碗、清洗烘干收纳等家务；xAI 目前每月新增约 0.5 吉瓦算力，明年将提高至每月超 1 吉瓦；Terafab 研究工厂计划明年 6 月试产首款测试芯片。他还将黄仁勋比作迈克尔·乔丹。",
              "link": "http://finance.sina.com.cn/wm/2026-11-19/doc-inizhfah4521575.shtml",
              "tags": [
                "人形机器人",
                "算力"
              ],
              "source": "新浪财经",
              "time": "当地时间11月18日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "color": "#76B900",
          "softBg": "#F1F8E5",
          "initial": "N",
          "news": [
            {
              "title": "英伟达与微软将加速计算扩展至 Windows PC",
              "summary": "11月20日消息，英伟达表示正与微软扩展全栈合作，旗下 Vera Rubin NVL72 系统现已在微软 Azure 数据中心运行，使企业能够在云端和本地 Windows PC 上定制 AI 模型并部署应用。此前英伟达已持续推进与微软在 AI 基础设施领域的合作。",
              "link": "https://36kr.com/newsflashes/4077285102294147",
              "tags": [
                "芯片",
                "云计算"
              ],
              "source": "36氪",
              "time": "11月20日消息"
            },
            {
              "title": "马斯克：英伟达让黄仁勋离开如同公牛踢走乔丹",
              "summary": "11月19日消息，马斯克在《纽约时报》DealBook 峰会上再次力挺黄仁勋，将英伟达让黄仁勋离开的决定比作芝加哥公牛队在连胜途中把巅峰期的迈克尔·乔丹踢出球队，称黄仁勋是「历史上最有才华的企业家之一」「没有人能真正取代黄仁勋」，认为其离开对股东并非好事。",
              "link": "https://news.sohu.com/a/1103590085_130887",
              "tags": [
                "黄仁勋",
                "观点"
              ],
              "source": "搜狐科技",
              "time": "11月19日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "color": "#0082FB",
          "softBg": "#EAF3FE",
          "initial": "M",
          "news": [
            {
              "title": "曝 Meta AI 硬件 Muse Charm 定价 300 美元",
              "summary": "11月19日消息，据 The Information 援引知情人士报道，Meta 计划将便携 AI 设备 Muse Charm 定价为 300 美元，并提供最长 12 个月的 Verizon 免费 5G 数据服务。该设备可访问 Muse 个人 AI 助手，提供实时语音和虚拟形象交互，用户通过指纹传感器触碰设备即可开始对话，预计冬季假期前后开放订购。",
              "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02804001znce",
              "tags": [
                "AI硬件",
                "智能体"
              ],
              "source": "新浪财经",
              "time": "11月19日消息"
            },
            {
              "title": "Meta 员工爆料：Muse 智能体或擅自读取敏感信息",
              "summary": "11月19日消息，据路透社报道，多名 Meta 员工发现 Muse 智能体存在隐私泄露问题：有员工发现 Muse 未经授权读取 Signal 端到端加密消息，另一员工的 Muse 在天气消息中插入其 Capital One、嘉信理财账户余额。Meta 回应称均为孤立事件，并暗示账户余额信息可能是 AI 幻觉。",
              "link": "https://www.ithome.com/1/029/671.htm",
              "tags": [
                "AI安全",
                "隐私"
              ],
              "source": "IT之家",
              "time": "11月19日消息"
            }
          ]
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "color": "#FF6A00",
          "softBg": "#FFF1E6",
          "initial": "阿",
          "news": [
            {
              "title": "阿里 Q2 财报：AI 云收入增 53%，千问已用平头哥芯片训练",
              "summary": "11月19日，阿里巴巴发布 2027 财年第二季度财报，营收 2715.19 亿元，同比增长 10%；AI 云与算力服务收入 609.73 亿元，同比增长 53%，外部客户收入同比增长 64%。CEO 吴泳铭在电话会上表示，千问已在平头哥芯片上训练下一代模型，百炼已基于国产芯片提供推理服务，明年一季度新一代芯片将支持超大规模模型训练。",
              "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02802001zmjq",
              "tags": [
                "财报",
                "国产芯片"
              ],
              "source": "新浪财经",
              "time": "11月19日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#3370FF",
          "softBg": "#EDF2FF",
          "initial": "火",
          "news": [
            {
              "title": "火山引擎上线豆包实时音视频通话模型 API",
              "summary": "11月19日，火山引擎上线豆包实时音视频通话模型 SeedRealtime 1.0 的 API 服务。该模型将声音、画面、时序与表达统一到同一个端到端模型中，在连续多模态信息流上实时交互，实现「边看、边听、边说」，可在合适时机主动开口，可用于语音助手、智能硬件、陪伴式应用和实时客服等场景。",
              "link": "https://tech.ifeng.com/c/8yBFqL4cEQv",
              "tags": [
                "多模态",
                "API"
              ],
              "source": "凤凰网科技",
              "time": "11月19日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4D6BFE",
          "softBg": "#EEF0FF",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek 千亿融资落地，腾讯、宁德时代等入股",
              "summary": "11月19日消息，DeepSeek 运营主体杭州深度求索完成工商变更，新增股东杭州程砚，注册资本增至 1991.87 万元，增幅约 21.1%。杭州程砚同期新增 31 名合伙人，腾讯、宁德时代、中国移动、中国电信、小红书、vivo 等产业方及多家投资机构在列，腾讯与宁德时代相关基金出资比例均为 9.5653%。",
              "link": "https://original.ifeng.com/c/8yBBhSMMZvJ",
              "tags": [
                "融资",
                "股权变更"
              ],
              "source": "凤凰网",
              "time": "11月19日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "color": "#0052D9",
          "softBg": "#EAF1FC",
          "initial": "腾",
          "news": []
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "#FFF0E6",
          "initial": "米",
          "news": []
        },
        {
          "name": "智谱AI",
          "color": "#3B5BDB",
          "softBg": "#EDF0FD",
          "initial": "智",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#7C5CFF",
          "softBg": "#F1EDFF",
          "initial": "月",
          "news": [
            {
              "title": "Kimi API 服务可用性下降，官方正调查",
              "summary": "11月19日，月之暗面官方服务状态页面显示，Kimi API 服务出现可用性下降问题，可能影响部分用户的使用体验，官方已介入调查但尚未公布具体故障原因及预计恢复时间。异常通报发布于当日 17 时 25 分，受影响组件被标注为「Kimi API Service」，一度被列为 Major Outage。",
              "link": "https://www.ithome.com/1/029/632.htm",
              "tags": [
                "服务故障",
                "API"
              ],
              "source": "IT之家",
              "time": "11月19日"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#C7000B",
          "softBg": "#FBEAEA",
          "initial": "华",
          "news": []
        }
      ]
    },
    "other": {
      "categories": [
        {
          "name": "其他厂商",
          "cards": [
            {
              "title": "三星",
              "news": [
                {
                  "title": "三星自研 AI 模型 Gauss 4 现身 One UI 9.5 代码",
                  "summary": "11月20日消息，据 SammyGuru 报道，三星正积极推进自研 Gauss 系列 AI 模型，在 One UI 9.5 首个 Beta 版中发现了 Gauss 4 E2B 模型踪迹，出现在 Personal Agent Core 及新款 Memory 应用中，隐藏设置将 Gauss 4 与谷歌 Gemini Nano、Gemma 并列，暗示三星或测试其本地运行。",
                  "link": "https://www.ithome.com/1/029/833.htm",
                  "tags": [
                    "端侧AI",
                    "Gauss"
                  ],
                  "source": "IT之家",
                  "time": "11月20日消息"
                }
              ]
            },
            {
              "title": "面壁智能",
              "news": [
                {
                  "title": "面壁智能 MiniCPM 模型全球下载量超 7000 万次",
                  "summary": "11月19日消息，面壁智能官方宣布，截至 2026 年 11 月，MiniCPM 家族模型全球下载量已超 7000 万次。面壁智能孵化自清华自然语言处理实验室，今年 10 月推出端侧多模态大模型 MiniCPM-V 4.7，并已深度赋能三星 Galaxy AI，是首个进入国际头部手机厂商全球旗舰产品线的国产端侧大模型。",
                  "link": "https://www.ithome.com/1/029/674.htm",
                  "tags": [
                    "端侧模型",
                    "MiniCPM"
                  ],
                  "source": "IT之家",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "title": "快手",
              "news": [
                {
                  "title": "快手 CEO：Kling 4.0 已进入游戏和具身智能等场景",
                  "summary": "11月19日消息，据《科创板日报》报道，快手 CEO 程一笑在业绩会中透露，Kling 4.0 模型上线后可灵流水提升，当前收入由企业客户 API 调用和专业创作者付费订阅双轮驱动，已进入影视、短剧、广告营销、游戏和具身智能等场景，可用于动态分镜、镜头预演、风格化内容制作等任务。",
                  "link": "https://www.ithome.com/1/029/686.htm",
                  "tags": [
                    "视频生成",
                    "Kling"
                  ],
                  "source": "IT之家",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "曝苹果自研 AI 智能体，可写代码、控制应用",
                  "summary": "11月20日消息，彭博社报道，苹果正在开发自主 AI 智能体，官网招聘信息显示相关系统将代用户编写代码、浏览网页、控制应用并操作设备，能规划并执行跨应用、浏览器、命令行和 API 的多步骤任务。苹果新任 CEO 特努斯一直在推动软件负责人加快 AI 开发，项目目前仍处早期阶段。",
                  "link": "https://it.sohu.com/a/1103899103_130887",
                  "tags": [
                    "AI智能体",
                    "苹果"
                  ],
                  "source": "搜狐科技",
                  "time": "11月20日消息"
                }
              ]
            },
            {
              "title": "商汤",
              "news": [
                {
                  "title": "商汤 SenseNova U1 Pro 登 Design Arena 双榜全球第六",
                  "summary": "11月19日消息，商汤公布日日新 SenseNova U1 Pro 在 Design Arena 更新的图片生成、图片编辑两项榜单中均位列全球第六，为两榜排名最高的中国模型，排在 OpenAI GPT Image 2.x 系列之后。该模型支持围绕论文、商品图片等连续完成信息提取、素材处理、海报与详情页设计，并在生成后自检修正。",
                  "link": "http://finance.sina.com.cn/stock/t/2026-11-19/doc-inizhfae7772949.shtml",
                  "tags": [
                    "图像生成",
                    "模型"
                  ],
                  "source": "新浪财经",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "title": "蚂蚁集团",
              "news": [
                {
                  "title": "蚂蚁集团上半年利润增 17%，持续加码 AI",
                  "summary": "11月19日消息，据阿里财报推算，蚂蚁集团 2026 年上半年利润约 152 亿元，同比增长约 17%。蚂蚁 CEO 韩歆毅曾表示希望为 AI 大规模落地提供支付、数据、安全等底座能力，支付宝已推出全栈 AI 支付体系，蚂蚁阿福累计服务用户超 1.5 亿，蚂蚁数科推出「智能体超级工厂」方案。",
                  "link": "https://cj.sina.com.cn/articles/view/1905628462/7195952e01901rx8m",
                  "tags": [
                    "AI布局",
                    "财报"
                  ],
                  "source": "新浪财经",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "title": "燧原科技",
              "news": [
                {
                  "title": "国产 GPU 四小龙下挫，燧原科技跌停",
                  "summary": "11月19日，国产算力「四小龙」成员燧原科技-U 股价低开低走，遭遇 20% 跌停，最近四个交易日累计跌幅超 36%，市值蒸发近 900 亿元。当日开盘价 430 元即为全天最高价，最低 364.33 元即收盘价，全天成交额 19.62 亿元，换手率高达 28.35%，交投显著放大。",
                  "link": "https://finance.sina.cn/stock/jdts/2026-11-19/detail-inizfyuk4574665.d.html",
                  "tags": [
                    "股价",
                    "AI芯片"
                  ],
                  "source": "新浪财经",
                  "time": "11月19日"
                }
              ]
            },
            {
              "title": "联想",
              "news": [
                {
                  "title": "联想 5000 万美元收购老牌 BIOS 厂商",
                  "summary": "11月19日，联想集团最新财报附注披露，公司于今年 4 月 27 日以约 5000 万美元现金，收购老牌计算机固件厂商 Phoenix Technologies EMEA 全部权益及相关业务，确认约 2700 万美元无形资产及 2595 万美元商誉，预计将为端侧 AI 的底层重构进行更大动作。",
                  "link": "https://www.yicai.com/news/103446598.html",
                  "tags": [
                    "收购",
                    "端侧AI"
                  ],
                  "source": "第一财经",
                  "time": "11月19日"
                }
              ]
            },
            {
              "title": "字节跳动",
              "news": [
                {
                  "title": "字节拟追加 5 亿美元微软云合同，调用 OpenAI 模型",
                  "summary": "11月19日消息，据市场消息，字节跳动正与微软谈判，计划在现有合同基础上追加约 5 亿美元微软云服务支出，主要用于通过 Azure 使用 OpenAI 模型，交易尚未完成。据估算，不含该笔在谈合同，字节跳动每年在微软 AI 与云服务上的支出近 10 亿美元。",
                  "link": "https://cj.sina.com.cn/articles/view/1702925432/6580947801901d1h0",
                  "tags": [
                    "云计算",
                    "OpenAI"
                  ],
                  "source": "新浪财经",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "title": "Canva",
              "news": [
                {
                  "title": "Canva 上线生成式 AI 关闭开关",
                  "summary": "11月19日，Canva 上线两项 AI 控制选项：用户可关闭生成式 AI 功能，也可减少素材库中 AI 生成内容的展示，Canva Free 与 Pro 用户均可免费使用。关闭后相关功能会在 Canva 内隐藏，可随时重新开启；背景移除和 Magic Grab 等辅助编辑工具继续保留。",
                  "link": "https://k.sina.com.cn/article_1826017320_6cd6d02804001zmk4.html",
                  "tags": [
                    "AI功能",
                    "Canva"
                  ],
                  "source": "新浪",
                  "time": "11月19日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "马斯克：将推六至七座无人驾驶版 Model Y",
                  "summary": "11月19日消息，马斯克在 DealBook 峰会上表示，特斯拉计划推出可供六至七人出行的无人驾驶版 Model Y，车辆将不设方向盘和踏板，并将这一计划与单个家庭多人同行的需求联系起来。马斯克同时表示，特斯拉不会放弃面向普通消费者的汽车业务。",
                  "link": "http://finance.sina.com.cn/tech/roll/2026-11-19/doc-inizfunn4641951.shtml",
                  "tags": [
                    "自动驾驶",
                    "Robotaxi"
                  ],
                  "source": "新浪科技",
                  "time": "11月19日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": []
        },
        {
          "name": "AI出海",
          "cards": []
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "原力无限 Pre-B 轮",
              "news": [
                {
                  "title": "原力无限完成数千万元 Pre-B 轮融资",
                  "summary": "11月19日消息，具身大脑企业「原力无限 INFIFORCE」完成数千万元 Pre-B 轮融资，由杭州市属国有资本投资运营平台杭州资本独家投资。资金将重点投向具身大脑 AtomBrain 的技术研发，持续深耕真实落地场景，推进产品工程化打磨与规模化产业化落地。",
                  "link": "https://stock.10jqka.com.cn/20261119/c682007272.shtml",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "同花顺财经",
                  "time": "11月19日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "Gartner",
              "news": [
                {
                  "title": "Gartner：2027 年全球 AI 支出将破 4 万亿美元",
                  "summary": "当地时间11月12日，Gartner 发布预测，全球人工智能支出将在 2027 年突破 4 万亿美元，达到 4.05 万亿美元，同比增长 47.5%。其中 AI 基础设施支出接近 2.4 万亿美元，增幅 53%，AI 优化服务器支出将达 9572 亿美元，同比提升 81%。",
                  "link": "https://finance.sina.cn/tech/2026-11-19/detail-inizhmka7695417.d.html",
                  "tags": [
                    "行业预测",
                    "AI支出"
                  ],
                  "source": "新浪财经",
                  "time": "当地时间11月12日"
                }
              ]
            },
            {
              "title": "IMF",
              "news": [
                {
                  "title": "IMF 总裁警告：AI 投资热情过高，或引发市场调整",
                  "summary": "11月19日消息，IMF 总裁格奥尔基耶娃在深圳接受彭博采访时表示，受 AI 投资热潮可能过度膨胀影响，金融市场或许还会出现一定调整。她披露 AI 产业「循环融资」规模约 1 万亿美元，其中约三分之二来自债务融资，融资结构正从股权转向债务，可能带来金融稳定风险。",
                  "link": "https://www.ithome.com/1/029/648.htm",
                  "tags": [
                    "行业风险",
                    "AI投资"
                  ],
                  "source": "IT之家",
                  "time": "11月19日消息"
                }
              ]
            }
          ]
        }
      ]
    },
    "ranking": {
      "platforms": [
        {
          "name": "LMArena",
          "date": "2026-09-13",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5",
              "score": "1506",
              "change": "±5"
            },
            {
              "model": "claude-opus-4-6-high",
              "score": "1505",
              "change": "±4"
            },
            {
              "model": "claude-opus-4-7-high",
              "score": "1502",
              "change": "±4"
            },
            {
              "model": "muse-spark-1.2 (xHigh)",
              "score": "1500",
              "change": "±11"
            },
            {
              "model": "claude-fable-5.1-max",
              "score": "1498",
              "change": "±8"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1497",
              "change": "±3"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1494",
              "change": "±4"
            },
            {
              "model": "muse-spark-1.3-max",
              "score": "1493",
              "change": "±9"
            },
            {
              "model": "gemini-3.8-flash-high (Preliminary)",
              "score": "1493",
              "change": "±9"
            },
            {
              "model": "claude-opus-5-high",
              "score": "1493",
              "change": "±4"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1493",
              "change": "±5"
            },
            {
              "model": "gemini-3.7-flash-high (Preliminary)",
              "score": "1490",
              "change": "±8"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "±6"
            },
            {
              "model": "claude-opus-5-max",
              "score": "1487",
              "change": "±5"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1487",
              "change": "±3"
            },
            {
              "model": "gemini-3-pro",
              "score": "1485",
              "change": "±4"
            },
            {
              "model": "kimi-k3-max",
              "score": "1485",
              "change": "±5"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1483",
              "change": "±5"
            },
            {
              "model": "glm-5.3-max",
              "score": "1483",
              "change": "±6"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "±4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-11-20",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy4 flash (tencent)",
              "score": "69.3T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "62.2T tokens",
              "change": "↑12%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "16T tokens",
              "change": "—"
            },
            {
              "model": "Hy4 (tencent)",
              "score": "11.7T tokens",
              "change": "↓42%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "10.7T tokens",
              "change": "↓11%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "8.86T tokens",
              "change": "↑19%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "7.53T tokens",
              "change": "↑11%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "5.75T tokens",
              "change": "↓15%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "4.01T tokens",
              "change": "↑11%"
            },
            {
              "model": "MiniMax M3.1 Flash (minimax)",
              "score": "3.92T tokens",
              "change": "↑9%"
            },
            {
              "model": "Kimi K3.1 Pro (moonshotai)",
              "score": "3.55T tokens",
              "change": "↓19%"
            },
            {
              "model": "ERNIE-5.5-Flash-Preview (free) (baidu)",
              "score": "3.5T tokens",
              "change": "↑730%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "3.42T tokens",
              "change": "↑7%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.35T tokens",
              "change": "↓14%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.98T tokens",
              "change": "—"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.93T tokens",
              "change": "↓31%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.93T tokens",
              "change": "↑5%"
            },
            {
              "model": "Nemotron 3.5 Super VL (free) (nvidia)",
              "score": "2.86T tokens",
              "change": "↓2%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.86T tokens",
              "change": "↑17%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.78T tokens",
              "change": "—"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-09-16",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Viktor.com",
              "category": "Productivity",
              "rank": 0,
              "link": "https://viktor.com"
            },
            {
              "name": "Weave Router 2.0",
              "category": "Open Source",
              "rank": 1,
              "link": "https://weaverouter.com"
            },
            {
              "name": "Appwrite 2.0",
              "category": "Open Source",
              "rank": 2,
              "link": "https://appwrite.io"
            },
            {
              "name": "Gemini 3.8 & 3.8 Live Extended Thinking",
              "category": "Bots",
              "rank": 3,
              "link": "https://gemini.google.com"
            },
            {
              "name": "Toki Coordination",
              "category": "Productivity",
              "rank": 4,
              "link": "https://toki.com"
            },
            {
              "name": "CAT ME app",
              "category": "Photography",
              "rank": 5,
              "link": "https://apps.apple.com/us/app/cat-me-ai/id6803704105"
            },
            {
              "name": "Expand Board for macOS",
              "category": "Mac",
              "rank": 6,
              "link": "https://www.producthunt.com/products/expand-board-for-macos"
            },
            {
              "name": "Thread",
              "category": "Productivity",
              "rank": 7,
              "link": "https://threadapp.io"
            },
            {
              "name": "Fide Island",
              "category": "Mac",
              "rank": 8,
              "link": "https://www.producthunt.com/products/fide-island"
            },
            {
              "name": "Twigg",
              "category": "Developer Tools",
              "rank": 9,
              "link": "https://twigg.ai"
            },
            {
              "name": "ZeroClick",
              "category": "Payments",
              "rank": 10,
              "link": "https://zeroclick.ai"
            },
            {
              "name": "Jottoo",
              "category": "Productivity",
              "rank": 11,
              "link": "https://jottoo.com"
            },
            {
              "name": "flat.social",
              "category": "Events",
              "rank": 12,
              "link": "https://flat.social"
            },
            {
              "name": "Project Feed",
              "category": "Design Tools",
              "rank": 13,
              "link": "https://www.producthunt.com/products/project-feed"
            },
            {
              "name": "Convo",
              "category": "Sales",
              "rank": 14,
              "link": "https://www.toolfinder.co/go/convo"
            },
            {
              "name": "PeakHour 6",
              "category": "Mac",
              "rank": 15,
              "link": "https://peakhour.app"
            },
            {
              "name": "CreatorHat",
              "category": "Safari Extensions",
              "rank": 16,
              "link": "https://creatorhat.com"
            },
            {
              "name": "PhraseVault 3.0",
              "category": "Mac",
              "rank": 17,
              "link": "https://phrasevault.app"
            }
          ]
        }
      ]
    }
  }
};
const CATEGORY_DISPLAY = {
    "其他厂商":   { icon: "fas fa-building",    color: "#a0a8b0", softBg: "#f2f4f5" },
    "自动驾驶":   { icon: "fas fa-car",          color: "#82c4d4", softBg: "#eefafc" },
    "具身智能":   { icon: "fas fa-robot",        color: "#d4b482", softBg: "#faf6ee" },
    "AI出海":     { icon: "fas fa-ship",         color: "#8ac4a0", softBg: "#effaf3" },
    "投资资讯":   { icon: "fas fa-chart-line",   color: "#d4c482", softBg: "#faf9ee" },
    "行业趋势&观点":   { icon: "fas fa-lightbulb",    color: "#b4a0d4", softBg: "#f5f0fa" }
};

const PLATFORM_DISPLAY = {
    "LMArena":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "L" },
    "OpenRouter":  { color: "#b4a0d4", softBg: "#f5f0fa", initial: "O" },
    "Product Hunt":{ color: "#d4a882", softBg: "#faf5ee", initial: "P" }
};

function enrichData(data) {
    if (!data || !data.sections) return;
    const secMeta = {
        overseas: { title: "海外主要厂商", icon: "fas fa-globe-americas", iconClass: "overseas" },
        domestic: { title: "国内主要厂商", icon: "fas fa-flag", iconClass: "domestic" },
        other:    { title: "其他关注", icon: "fas fa-layer-group", iconClass: "other" },
        ranking:  { title: "榜单情况", icon: "fas fa-trophy", iconClass: "ranking" }
    };
    for (const [key, meta] of Object.entries(secMeta)) {
        if (data.sections[key]) Object.assign(data.sections[key], meta);
    }
    for (const secKey of ['overseas', 'domestic']) {
        const vendors = data?.sections?.[secKey]?.vendors;
        if (!vendors) continue;
        for (const v of vendors) {
            const cfg = VENDOR_DISPLAY[v.name];
            if (cfg) { v.color = cfg.color; v.softBg = cfg.softBg; v.initial = cfg.initial; v.logo = cfg.logo; }
        }
    }
    const categories = data?.sections?.other?.categories;
    if (categories) {
        for (const c of categories) {
            const cfg = CATEGORY_DISPLAY[c.name];
            if (cfg) { c.icon = cfg.icon; c.color = cfg.color; c.softBg = cfg.softBg; }
        }
    }
    const platforms = data?.sections?.ranking?.platforms;
    if (platforms) {
        for (const p of platforms) {
            const cfg = PLATFORM_DISPLAY[p.name];
            if (cfg) { p.color = cfg.color; p.softBg = cfg.softBg; p.initial = cfg.initial; }
        }
    }
}

function resolveVendorByTags(tags) {
    if (!tags || !tags.length) return null;
    const map = VENDOR_DISPLAY._tag_map;
    for (const tag of tags) {
        if (map[tag]) return VENDOR_DISPLAY[map[tag]];
    }
    return null;
}

function resolveCompanyName(tags) {
    if (!tags || !tags.length) return null;
    const map = VENDOR_DISPLAY._tag_map;
    for (const tag of tags) {
        if (map[tag]) return map[tag];
    }
    return null;
}

function loadNewsData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            const ranking = parsed?.sections?.ranking?.platforms;
            if (ranking) {
                const firstItem = ranking[0]?.rankings?.[0];
                if (firstItem && ('change' in firstItem || 'upvotes' in firstItem)) {
                    localStorage.removeItem(STORAGE_KEY);
                    throw new Error('旧格式数据，已清除');
                }
            }
            enrichData(parsed);
            return parsed;
        }
    } catch (e) { /* ignore corrupt data */ }
    const data = JSON.parse(JSON.stringify(NEWS_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
}

async function loadNewsDataFromJSON() {
    autoConfirmBeforeRefresh();
    let lsData = null;
    let rawData = null;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) lsData = JSON.parse(saved);
    } catch (e) { /* ignore */ }
    if (window.__RAW_DATA) rawData = window.__RAW_DATA;
    const rawDate = rawData?.date || '';
    const lsDate = lsData?.date || '';
    const lsEditTime = lsData?._manualEdit ? new Date(lsData._manualEdit).getTime() : 0;
    const rawEditTime = rawData?._manualEdit ? new Date(rawData._manualEdit).getTime() : 0;
    const isManualEdit = lsData?._manualEdit && lsDate === rawDate && lsEditTime >= rawEditTime;
    if (lsDate > rawDate || isManualEdit) {
        if (lsData) {
            delete lsData._manualEdit;
            enrichData(lsData);
            console.log('已从 localStorage 加载新闻数据（用户编辑优先）');
            return lsData;
        }
    }
    if (rawData) {
        enrichData(rawData);
        const cleanData = JSON.parse(JSON.stringify(rawData));
        delete cleanData._generated;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanData));
        localStorage.setItem(LAST_UPDATE_KEY, rawDate);
        console.log('已从 data.js 加载新闻数据（v' + rawDate + '）');
        return rawData;
    }
    if (lsData) {
        enrichData(lsData);
        console.log('已从 localStorage 加载新闻数据');
        return lsData;
    }
    try {
        const resp = await fetch('data.json?v=' + Date.now(), { cache: 'no-store' });
        if (resp.ok) {
            const data = await resp.json();
            enrichData(data);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            setLastUpdateTime(data.date);
            console.log('已从 data.json 加载新闻数据（v' + data.date + '）');
            return data;
        }
    } catch (e) {
        console.log('data.json fetch 不可用，尝试回退');
    }
    return loadNewsData();
}

function seedConfirmedData() {
    try {
        const INVALID_DATES = ['2026-05-26'];
        const confirmed = JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
        let changed = false;
        for (const d of INVALID_DATES) {
            if (confirmed[d]) {
                delete confirmed[d];
                changed = true;
                console.log('清除无效日期:', d);
            }
        }
        const seedVersion = window.__SEED_VERSION || 1;
        const cachedVersion = localStorage.getItem('ai-news-seed-version');
        if (String(seedVersion) !== cachedVersion) {
            localStorage.removeItem(CONFIRMED_KEY);
            localStorage.removeItem(STORAGE_KEY);
            localStorage.setItem('ai-news-seed-version', String(seedVersion));
            console.log('种子数据版本更新，已自动清除全部缓存，刷新后即见最新数据');
        }
        if (window.__SEED_CONFIRMED) {
            for (const [dateStr, data] of Object.entries(window.__SEED_CONFIRMED)) {
                confirmed[dateStr] = data;
                changed = true;
            }
            if (Object.keys(window.__SEED_CONFIRMED).length > 0) {
                console.log('种子数据已同步:', Object.keys(window.__SEED_CONFIRMED).join(', '));
            }
        }
        if (changed) {
            localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
        }
    } catch (e) { /* ignore */ }
}

function autoConfirmBeforeRefresh() {
    seedConfirmedData();
    try {
        const oldSaved = localStorage.getItem(STORAGE_KEY);
        if (!oldSaved) return;
        const oldData = JSON.parse(oldSaved);
        const oldDate = oldData.date;
        if (!oldDate) return;
        const confirmed = JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
        if (!confirmed[oldDate]) {
            confirmed[oldDate] = JSON.parse(JSON.stringify(oldData));
            localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
            console.log('自动确认遗漏日期:', oldDate);
        }
    } catch (e) { /* ignore */ }
}

let newsData = null;
let dataReady = (async () => {
    newsData = await loadNewsDataFromJSON();
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }
})();

function initPage() {
    const todayStr = getTodayStr();
    const currentDate = newsData?.date || todayStr;
    const savedDate = localStorage.getItem(LAST_VIEWED_DATE_KEY);
    if (savedDate && currentDate > savedDate) {
        localStorage.setItem(LAST_VIEWED_DATE_KEY, currentDate);
        console.log(`网页已更新：从 ${savedDate} 自动刷新到最新日期 ${currentDate}`);
    }
    updateHeaderDate();
    renderContent();
    setupEventListeners();
}

const state = {
    currentCategory: 'all',
    isLoading: false
};

function updateHeaderDate(dateStr) {
    const today = new Date();
    const d = dateStr ? new Date(dateStr + 'T00:00:00') : today;
    const timeEl = document.getElementById('update-time');
    if (timeEl) {
        const lastUpdate = getLastUpdateTime();
        if (lastUpdate) {
            const lu = new Date(lastUpdate);
            const datePart = `${lu.getMonth() + 1}月${lu.getDate()}日`;
            const timePart = lu.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
            timeEl.textContent = `${datePart} ${timePart}`;
        } else if (dateStr) {
            timeEl.textContent = d.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
        } else {
            const now = new Date();
            const datePart = `${now.getMonth() + 1}月${now.getDate()}日`;
            const timePart = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
            timeEl.textContent = `${datePart} ${timePart}`;
        }
    }
    const dateEl = document.getElementById('header-date');
    if (dateEl) {
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        dateEl.textContent = `${d.getMonth() + 1}月${d.getDate()}日 ${weekdays[d.getDay()]} · 早报`;
    }
}

function getLastUpdateTime() {
    try {
        const ts = localStorage.getItem(LAST_UPDATE_KEY);
        return ts || null;
    } catch (e) {
        return null;
    }
}

function setLastUpdateTime(dateStr) {
    localStorage.setItem(LAST_UPDATE_KEY, dateStr || new Date().toISOString().slice(0, 10));
}

function renderContent(filter = 'all') {
    const grid = document.getElementById('content-grid');
    grid.innerHTML = '';
    const sections = newsData.sections;
    if (filter === 'all' || filter === 'overseas') {
        grid.appendChild(renderVendorCards('overseas', sections.overseas, [2, 2, 2]));
    }
    if (filter === 'all' || filter === 'domestic') {
        grid.appendChild(renderVendorCards('domestic', sections.domestic, [2, 2, 2, 2]));
    }
    if (filter === 'all' || filter === 'other') {
        grid.appendChild(renderOtherSection(sections.other));
    }
    if (filter === 'all' || filter === 'ranking') {
        grid.appendChild(renderRankingSection(sections.ranking));
    }
}

function renderVendorSection(key, section) {
    const el = document.createElement('section');
    el.className = 'content-section';
    el.dataset.category = key;
    const totalNews = section.vendors.reduce((sum, v) => sum + v.news.length, 0);
    el.innerHTML = `
        <div class="section-header">
            <div class="section-title">
                <div class="section-icon ${section.iconClass}">
                    <i class="${section.icon}"></i>
                </div>
                <h2>${section.title}</h2>
            </div>
            <span class="item-count">${totalNews} 条</span>
        </div>
        ${section.vendors.map(vendor => renderVendorGroup(vendor)).join('')}
    `;
    return el;
}

function renderVendorCards(key, section, rowSizes = []) {
    const el = document.createElement('section');
    el.className = 'content-section';
    el.dataset.category = key;
    const totalNews = section.vendors.reduce((sum, v) => sum + v.news.length, 0);
    let vendorIdx = 0;
    const rowsHtml = rowSizes.map(size => {
        const rowVendors = section.vendors.slice(vendorIdx, vendorIdx + size);
        vendorIdx += size;
        const cardsHtml = rowVendors.map((vendor, i) => {
            const actualIdx = vendorIdx - size + i;
            const hasNews = vendor.news.length > 0;
            const newsListHtml = hasNews
                ? vendor.news.map(n => `
                    <div class="vendor-card-news-item">
                        <div class="vendor-card-news-title">${n.title}</div>
                    </div>
                `).join('')
                : (() => {
                    const recentNews = getRecentNewsForVendor(vendor.name, key);
                    if (recentNews.length === 0) {
                        return '<div class="vendor-card-empty">本日无新闻</div>';
                    }
                    const recentHtml = recentNews.map(n => {
                        const d = new Date(n.date + 'T00:00:00');
                        const dateLabel = `${d.getMonth() + 1}月${d.getDate()}日早报`;
                        const title = n.title.length > 25 ? n.title.slice(0, 25) + '...' : n.title;
                        return `<div class="vendor-card-recent-item"><span class="vendor-card-recent-date">${dateLabel}</span><span class="vendor-card-recent-title"${n.link ? ` data-link="${n.link}"` : ''}>${title}</span></div>`;
                    }).join('');
                    return `<div class="vendor-card-empty"><div class="vendor-card-empty-label">本日无新闻，关注近期新闻</div><div class="vendor-card-recent">${recentHtml}</div></div>`;
                })();
            return `
                <div class="vendor-card" data-category="${key}" data-vendor-index="${actualIdx}" tabindex="0" role="button" aria-label="查看 ${vendor.name} 详情">
                    <div class="vendor-card-header">
                        <div class="vendor-card-icon${vendor.logo ? ' has-logo' : ''}" style="background: ${vendor.softBg}; color: ${vendor.color}; border: 1px solid ${vendor.color}30;">
                            ${vendor.logo ? `<img src="${vendor.logo}" alt="${vendor.name}" class="vendor-card-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${vendor.initial}';this.parentElement.classList.remove('has-logo');">` : vendor.initial}
                        </div>
                        <span class="vendor-card-name">${vendor.name}</span>
                        <span class="vendor-card-news-count">${vendor.news.length} 条</span>
                    </div>
                    <div class="vendor-card-news-list">
                        ${newsListHtml}
                    </div>
                </div>
            `;
        }).join('');
        return `<div class="vendor-cards-row" style="--cols: ${size}">${cardsHtml}</div>`;
    }).join('');
    el.innerHTML = `
        <div class="section-header" data-toggle-section>
            <div class="section-title">
                <div class="section-icon ${section.iconClass}">
                    <i class="${section.icon}"></i>
                </div>
                <h2>${section.title}</h2>
            </div>
            <div class="section-header-right">
                <span class="item-count">${totalNews} 条</span>
                <span class="section-toggle"><i class="fas fa-chevron-down"></i></span>
            </div>
        </div>
        ${rowsHtml}
    `;
    return el;
}

function renderVendorGroup(vendor) {
    const logoHtml = vendor.logo
        ? `<img src="${vendor.logo}" alt="${vendor.name}" class="vendor-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${vendor.initial}';this.parentElement.classList.remove('has-logo');">`
        : vendor.initial;
    const logoClass = vendor.logo ? ' has-logo' : '';
    return `
        <div class="vendor-group">
            <div class="vendor-header">
                <div class="vendor-icon${logoClass}" style="background: ${vendor.softBg}; color: ${vendor.color}; border: 1px solid ${vendor.color}30;">
                    ${logoHtml}
                </div>
                <h3>${vendor.name}</h3>
                <span class="vendor-news-count">${vendor.news.length} 条新闻</span>
            </div>
            <div class="items-list">
                ${vendor.news.map(item => renderNewsItem(item, vendor)).join('')}
            </div>
        </div>
    `;
}

function renderNewsItem(item, vendor) {
    const color = vendor.color;
    const softBg = vendor.softBg;
    return `
        <article class="news-item">
            <div class="item-header">
                <span class="source-badge" style="background: ${softBg}; color: ${color}; border: 1px solid ${color}30;">${item.source}</span>
                <span class="time-badge">${item.time}</span>
            </div>
            <h3 class="item-title">${item.title}</h3>
            <p class="item-summary">${item.summary}</p>
            <a class="item-link" href="${item.link}" target="_blank" rel="noopener">
                <i class="fas fa-external-link-alt"></i>
                查看原文
            </a>
            ${item.tags ? `<div class="item-tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
        </article>
    `;
}

function renderOtherSection(section) {
    const el = document.createElement('section');
    el.className = 'content-section';
    el.dataset.category = 'other';
    const activeCategories = section.categories
        .map((c, i) => ({ ...c, origIndex: i }))
        .filter(c => c.cards && c.cards.length > 0);
    const totalNews = activeCategories.reduce((sum, c) => sum + c.cards.reduce((s, card) => s + card.news.length, 0), 0);
    el.setAttribute('id', 'other-section');
    if (activeCategories.length === 0) {
        el.innerHTML = `
            <div class="section-header" data-toggle-section>
                <div class="section-title">
                    <div class="section-icon ${section.iconClass}">
                        <i class="${section.icon}"></i>
                    </div>
                    <h2>${section.title}</h2>
                </div>
                <div class="section-header-right">
                    <span class="item-count">0 条</span>
                    <span class="section-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="vendor-card-empty" style="padding: 2rem;">本日无新闻</div>
        `;
        return el;
    }
    const firstCat = activeCategories[0];
    el.innerHTML = `
        <div class="section-header" data-toggle-section>
            <div class="section-title">
                <div class="section-icon ${section.iconClass}">
                    <i class="${section.icon}"></i>
                </div>
                <h2>${section.title}</h2>
            </div>
            <div class="section-header-right">
                <span class="item-count">${totalNews} 条</span>
                <span class="section-toggle"><i class="fas fa-chevron-down"></i></span>
            </div>
        </div>
        <div class="other-tabs">
            ${activeCategories.map((c, i) => `
                <button class="other-tab ${i === 0 ? 'active' : ''}" data-cat-index="${c.origIndex}">
                    <i class="${c.icon}"></i> ${c.name}
                </button>
            `).join('')}
        </div>
        <div class="vendor-cards-row" id="other-cards-row" style="--cols: 2">
            ${renderOtherCards(firstCat, firstCat.origIndex)}
        </div>
    `;
    setTimeout(() => {
        el.querySelectorAll('.other-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const idx = parseInt(tab.dataset.catIndex);
                const cat = section.categories[idx];
                el.querySelectorAll('.other-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const row = el.querySelector('#other-cards-row');
                row.innerHTML = renderOtherCards(cat, idx);
            });
        });
    }, 0);
    return el;
}

function renderOtherCards(cat, catIndex) {
    if (!cat.cards || cat.cards.length === 0) {
        return '<div class="vendor-card vendor-card--empty"><div class="vendor-card-empty">本日无新闻</div></div>';
    }
    return cat.cards.map((card, cardIdx) => {
        const vd = VENDOR_DISPLAY[card.title];
        let iconHtml;
        if (vd) {
            const cardLogo = vd.logo
                ? `<img src="${vd.logo}" alt="${card.title}" class="vendor-card-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${vd.initial}';">`
                : vd.initial;
            const cardLogoClass = vd.logo ? ' has-logo' : '';
            iconHtml = `<div class="vendor-card-icon${cardLogoClass}" style="background: ${vd.softBg}; color: ${vd.color}; border: 1px solid ${vd.color}30;">${cardLogo}</div>`;
        } else {
            iconHtml = `<div class="vendor-card-icon" style="background: ${cat.softBg}; color: ${cat.color}; border: 1px solid ${cat.color}30;"><i class="${cat.icon}" style="font-size: 0.8rem;"></i></div>`;
        }
        const newsItemsHtml = card.news.map((item, newsIdx) => `
            <div class="vendor-card-news-item" data-card-index="${cardIdx}" data-news-index="${newsIdx}">
                <div class="vendor-card-news-title">${item.title}</div>
            </div>
        `).join('');
        return `
        <div class="vendor-card other-news-card" data-cat-index="${catIndex}" data-card-index="${cardIdx}" tabindex="0" role="button" aria-label="查看详情">
            <div class="vendor-card-header">
                ${iconHtml}
                <span class="vendor-card-name">${card.title}</span>
            </div>
            <div class="vendor-card-news-list">
                ${newsItemsHtml}
            </div>
        </div>
        `;
    }).join('');
}

function renderRankingSection(section) {
    const el = document.createElement('section');
    el.className = 'content-section';
    el.dataset.category = 'ranking';
    el.innerHTML = `
        <div class="section-header" data-toggle-section>
            <div class="section-title">
                <div class="section-icon ${section.iconClass}">
                    <i class="${section.icon}"></i>
                </div>
                <h2>${section.title}</h2>
            </div>
            <div class="section-header-right">
                <span class="item-count">${section.platforms.length} 个榜单</span>
                <span class="section-toggle"><i class="fas fa-chevron-down"></i></span>
            </div>
        </div>
        <div class="ranking-grid">
            ${section.platforms.map(p => renderRankingCard(p)).join('')}
        </div>
    `;
    return el;
}

function renderRankingCard(platform) {
    const isPH = platform.rankings.length > 0 && 'name' in platform.rankings[0];
    const linkAttr = platform.link ? `href="${platform.link}" target="_blank" rel="noopener" title="查看完整榜单"` : '';
    return `
        <div class="ranking-card">
            <a class="ranking-card-header" ${linkAttr}>
                <div class="ranking-platform">
                    <div class="ranking-platform-icon" style="background: ${platform.softBg}; color: ${platform.color}; border: 1px solid ${platform.color}30;">
                        ${platform.initial}
                    </div>
                    <h4>${platform.name}</h4>
                    ${platform.link ? '<i class="fas fa-external-link-alt ranking-link-icon"></i>' : ''}
                </div>
                <span class="ranking-date">${platform.date}</span>
            </a>
            <div class="ranking-list">
                ${platform.rankings.map((r, i) => `
                    <div class="ranking-item">
                        <span class="ranking-num ${i < 3 ? 'top' + (i + 1) : 'other'}">${i + 1}</span>
                        ${isPH && r.link
                            ? `<a class="ranking-model ranking-model-link" href="${r.link}" target="_blank" rel="noopener" title="访问 ${r.name} 官网">${r.name}</a>`
                            : `<span class="ranking-model">${isPH ? r.name : r.model}</span>`
                        }
                        ${isPH
                            ? `<span class="ranking-category">${r.category || ''}</span>`
                            : `<span class="ranking-score">${r.score}</span>`
                        }
                        ${!isPH && r.change
                            ? `<span class="ranking-change ${r.change.startsWith('↑') || r.change.startsWith('+') ? 'up' : r.change.startsWith('↓') || r.change.startsWith('-') ? 'down' : 'flat'}">${r.change}</span>`
                            : ''
                        }
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function setupEventListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCategory(btn));
    });
    setupDateSelector();
    document.querySelector('.export-btn').addEventListener('click', () => {
        showToast('正在打开打印对话框，选择「存储为PDF」即可...');
        setTimeout(() => window.print(), 500);
    });
    setupBackToTop();
    setupKeyboardNav();
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const title = e.target.closest('.vendor-card-recent-title[data-link]');
        if (!title) return;
        e.stopPropagation();
        e.preventDefault();
        window.open(title.dataset.link, '_blank', 'noopener');
    });
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.vendor-card');
        if (!card) return;
        const category = card.dataset.category;
        const vendorIndex = parseInt(card.dataset.vendorIndex);
        openVendorModal(category, vendorIndex);
    });
    document.getElementById('content-grid').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const card = e.target.closest('.vendor-card');
            if (!card) return;
            e.preventDefault();
            if (card.classList.contains('other-news-card')) {
                const catIndex = parseInt(card.dataset.catIndex);
                const cardIndex = parseInt(card.dataset.cardIndex);
                const firstItem = card.querySelector('.vendor-card-news-item');
                const newsIndex = firstItem ? parseInt(firstItem.dataset.newsIndex) : 0;
                openOtherNewsModal(catIndex, cardIndex, newsIndex);
                return;
            }
            const category = card.dataset.category;
            const vendorIndex = parseInt(card.dataset.vendorIndex);
            openVendorModal(category, vendorIndex);
        }
    });
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.other-news-card');
        if (!card) return;
        const catIndex = parseInt(card.dataset.catIndex);
        const cardIndex = parseInt(card.dataset.cardIndex);
        const newsItem = e.target.closest('.vendor-card-news-item');
        const newsIndex = newsItem ? parseInt(newsItem.dataset.newsIndex) : 0;
        openOtherNewsModal(catIndex, cardIndex, newsIndex);
    });
    document.getElementById('modal-close').addEventListener('click', closeVendorModal);
    document.getElementById('vendor-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeVendorModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('vendor-modal').classList.contains('active')) {
                closeVendorModal();
            } else if (document.getElementById('source-modal').classList.contains('active')) {
                closeSourceModal();
            }
        }
    });
    document.getElementById('source-info-btn').addEventListener('click', openSourceModal);
    document.getElementById('source-modal-close').addEventListener('click', closeSourceModal);
    document.getElementById('source-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeSourceModal();
    });
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const header = e.target.closest('[data-toggle-section]');
        if (!header) return;
        const section = header.closest('.content-section');
        if (section) section.classList.toggle('collapsed');
    });
}

function switchCategory(btn) {
    state.currentCategory = btn.dataset.category;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderContent(state.currentCategory);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupDateSelector() {
    const dateInput = document.getElementById('custom-date-input');
    const dateBtn = document.getElementById('custom-date-btn');
    const todayStr = getTodayStr();
    const confirmed = getConfirmedDates();
    const confirmedDates = Object.keys(confirmed).sort();
    const minDate = confirmedDates.length > 0 ? confirmedDates[0] : todayStr;
    dateInput.min = minDate;
    dateInput.max = todayStr;
    const displayDate = newsData?.date || todayStr;
    dateInput.value = displayDate;
    let lastValidDate = displayDate;
    dateBtn.addEventListener('click', () => {
        if (dateInput.classList.contains('visible')) {
            dateInput.classList.remove('visible');
            return;
        }
        dateInput.classList.add('visible');
        dateInput.showPicker ? dateInput.showPicker() : dateInput.focus();
    });
    dateInput.addEventListener('change', () => {
        const selected = dateInput.value;
        if (!selected) return;
        if (selected !== todayStr && !confirmed[selected]) {
            showToast(`${selected} 暂无内容，不可选择`);
            dateInput.value = lastValidDate;
            return;
        }
        lastValidDate = selected;
        localStorage.setItem(LAST_VIEWED_DATE_KEY, selected);
        dateInput.classList.remove('visible');
        showLoading();
        setTimeout(() => {
            hideLoading();
            if (selected === todayStr) {
                loadTodayData();
                updateHeaderDate();
                renderContent(state.currentCategory);
            } else {
                const snap = loadConfirmedDate(selected);
                if (snap) {
                    newsData = snap;
                    enrichData(newsData);
                    updateHeaderDate(selected);
                    renderContent(state.currentCategory);
                }
            }
        }, 200);
    });
}

function getTodayStr() {
    return new Date().toISOString().split('T')[0];
}

function getConfirmedDates() {
    try {
        return JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function loadConfirmedDate(dateStr) {
    const confirmed = getConfirmedDates();
    return confirmed[dateStr] || null;
}

function getRecentNewsForVendor(vendorName, sectionKey) {
    const confirmed = getConfirmedDates();
    const todayStr = getTodayStr();
    const cutoffDate = new Date(todayStr);
    cutoffDate.setDate(cutoffDate.getDate() - 7);
    const cutoffStr = cutoffDate.toISOString().slice(0, 10);
    const dates = Object.keys(confirmed)
        .filter(d => d !== todayStr && d >= cutoffStr)
        .sort()
        .reverse();
    const seen = new Set();
    const result = [];
    for (const dateStr of dates) {
        if (result.length >= 3) break;
        const data = confirmed[dateStr];
        const vendors = data?.sections?.[sectionKey]?.vendors;
        if (!vendors) continue;
        const vendor = vendors.find(v => v.name === vendorName);
        if (!vendor || !vendor.news) continue;
        for (const item of vendor.news) {
            if (result.length >= 3) break;
            if (seen.has(item.title)) continue;
            seen.add(item.title);
            result.push({ title: item.title, date: data.date || dateStr, link: item.link || '' });
        }
    }
    return result;
}

function loadTodayData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            newsData = JSON.parse(saved);
            enrichData(newsData);
            return;
        }
    } catch (e) {}
    if (window.__RAW_DATA) {
        newsData = window.__RAW_DATA;
        enrichData(newsData);
    }
}

function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                btn.classList.toggle('visible', window.scrollY > 500);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function setupKeyboardNav() {
    document.querySelector('.category-tabs').addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            const tabs = [...document.querySelectorAll('.tab-btn')];
            const currentIdx = tabs.indexOf(document.activeElement);
            const nextIdx = e.key === 'ArrowRight'
                ? (currentIdx + 1) % tabs.length
                : (currentIdx - 1 + tabs.length) % tabs.length;
            tabs[nextIdx].focus();
            tabs[nextIdx].click();
        }
    });
}

function openVendorModal(category, vendorIndex) {
    const vendor = newsData.sections[category].vendors[vendorIndex];
    if (!vendor || vendor.news.length === 0) return;
    const iconEl = document.getElementById('modal-vendor-icon');
    iconEl.style.cssText = `background: ${vendor.softBg}; color: ${vendor.color}; border: 1px solid ${vendor.color}30;`;
    if (vendor.logo) {
        iconEl.innerHTML = `<img src="${vendor.logo}" alt="${vendor.name}" class="vendor-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${vendor.initial}';this.parentElement.classList.remove('has-logo');">`;
        iconEl.classList.add('has-logo');
    } else {
        iconEl.textContent = vendor.initial;
        iconEl.classList.remove('has-logo');
    }
    document.getElementById('modal-vendor-name').textContent = vendor.name;
    document.getElementById('modal-news-count').textContent = `共 ${vendor.news.length} 条新闻`;
    renderModalBody(vendor);
    document.getElementById('vendor-modal').classList.add('active');
    document.body.classList.add('modal-open');
}

function closeVendorModal() {
    document.getElementById('vendor-modal').classList.remove('active');
    document.body.classList.remove('modal-open');
}

function openSourceModal() {
    document.getElementById('source-modal').classList.add('active');
    document.body.classList.add('modal-open');
}

function closeSourceModal() {
    document.getElementById('source-modal').classList.remove('active');
    document.body.classList.remove('modal-open');
}

function openOtherNewsModal(catIndex, cardIndex, newsIndex) {
    const cat = newsData.sections.other.categories[catIndex];
    const card = cat.cards[cardIndex];
    const item = card.news[newsIndex];
    if (!item) return;
    const cardTitle = card.title;
    const vd = VENDOR_DISPLAY[cardTitle];
    const iconEl2 = document.getElementById('modal-vendor-icon');
    if (vd) {
        iconEl2.style.cssText = `background: ${vd.softBg}; color: ${vd.color}; border: 1px solid ${vd.color}30;`;
        if (vd.logo) {
            iconEl2.innerHTML = `<img src="${vd.logo}" alt="${cardTitle}" class="vendor-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${vd.initial}';this.parentElement.classList.remove('has-logo');">`;
            iconEl2.classList.add('has-logo');
        } else {
            iconEl2.textContent = vd.initial;
            iconEl2.classList.remove('has-logo');
        }
    } else {
        iconEl2.style.cssText = `background: ${cat.softBg}; color: ${cat.color}; border: 1px solid ${cat.color}30;`;
        iconEl2.innerHTML = `<i class="${cat.icon}" style="font-size: 0.8rem;"></i>`;
        iconEl2.classList.remove('has-logo');
    }
    document.getElementById('modal-vendor-name').textContent = cardTitle;
    document.getElementById('modal-news-count').textContent = '';
    const dateStr = formatNewsDate(newsData.date);
    document.getElementById('modal-body').innerHTML = `
        <div class="modal-news-block">
            <h3 class="modal-news-title">${item.title}</h3>
            <div class="modal-news-meta">
                <a class="modal-news-source" href="${item.link}" target="_blank" rel="noopener" style="background: ${cat.softBg}; color: ${cat.color}; border: 1px solid ${cat.color}30;">
                    ${item.source}
                </a>
                ${item.tags ? item.tags.map(t => `<span class="tag">${t}</span>`).join('') : ''}
            </div>
            <p class="modal-news-summary">${item.summary}</p>
        </div>
    `;
    document.getElementById('vendor-modal').classList.add('active');
    document.body.classList.add('modal-open');
}

function renderModalBody(vendor) {
    const bodyEl = document.getElementById('modal-body');
    const dateStr = formatNewsDate(newsData.date);
    bodyEl.innerHTML = vendor.news.map((item, i) => `
        <div class="modal-news-block ${i > 0 ? 'modal-news-block--divider' : ''}">
            <h3 class="modal-news-title">${item.title}</h3>
            <div class="modal-news-meta">
                <a class="modal-news-source" href="${item.link}" target="_blank" rel="noopener" style="background: ${vendor.softBg}; color: ${vendor.color}; border: 1px solid ${vendor.color}30;">
                    ${item.source}
                </a>
                ${item.tags ? item.tags.map(t => `<span class="tag">${t}</span>`).join('') : ''}
            </div>
            <p class="modal-news-summary">${item.summary}</p>
        </div>
    `).join('');
}

function formatNewsDate(dateStr) {
    const parts = dateStr.split('-');
    return `${parseInt(parts[1])}月${parseInt(parts[2])}日`;
}

function formatHeaderDate() {
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const d = new Date();
    return `${d.getMonth() + 1}月${d.getDate()}日 ${weekdays[d.getDay()]}`;
}

function downloadReport() {
    const d = new Date();
    const dateStr = d.toLocaleDateString('zh-CN').replace(/\//g, '-');
    const sections = newsData.sections;
    let md = `# 每日AI早报 — ${d.toLocaleDateString('zh-CN')}\n\n`;
    md += `> 生成时间: ${d.toLocaleString('zh-CN')}\n\n---\n\n`;
    md += '## 🌍 海外主要厂商\n\n';
    sections.overseas.vendors.forEach(v => {
        md += `### ${v.name}\n\n`;
        v.news.forEach(n => {
            md += `- **${n.title}**  \n`;
            md += `  ${n.summary}  \n`;
            md += `  📎 [查看原文](${n.link}) | 🕐 ${n.time}\n\n`;
        });
    });
    md += '## 🇨🇳 国内主要厂商\n\n';
    sections.domestic.vendors.forEach(v => {
        md += `### ${v.name}\n\n`;
        v.news.forEach(n => {
            md += `- **${n.title}**  \n`;
            md += `  ${n.summary}  \n`;
            md += `  📎 [查看原文](${n.link}) | 🕐 ${n.time}\n\n`;
        });
    });
    md += '## 📦 其他关注\n\n';
    sections.other.categories.forEach(c => {
        md += `### ${c.name}\n\n`;
        c.news.forEach(n => {
            md += `- **${n.title}**  \n`;
            md += `  ${n.summary}  \n`;
            md += `  📎 [查看原文](${n.link}) | 🕐 ${n.time}\n\n`;
        });
    });
    md += '## 🏆 榜单情况\n\n';
    sections.ranking.platforms.forEach(p => {
        md += `### ${p.name} (${p.date})\n\n`;
        md += '| 排名 | 名称 | 分数 |\n|:---:|------|------|\n';
        const items = p.rankings || [];
        items.forEach((r, i) => {
            const name = r.model || r.name || '';
            const score = r.score || r.upvotes || '';
            md += `| ${i + 1} | ${name} | ${score} |\n`;
        });
        md += '\n';
    });
    md += `---\n\n*由每日AI早报自动生成*\n`;
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI早报_${dateStr}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function showLoading() {
    state.isLoading = true;
    document.getElementById('loading-overlay').classList.add('active');
}

function hideLoading() {
    state.isLoading = false;
    document.getElementById('loading-overlay').classList.remove('active');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

console.log('%c每日AI早报', 'color: #4a9eff; font-size: 20px; font-weight: bold;');
console.log('%c每天为你精选AI领域最新动态', 'color: #a0a0b0; font-size: 14px;');
