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
  "date": "2026-09-10",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI GPT-6 Astra 正式登陆 Amazon Bedrock",
              "summary": "当地时间9月9日消息，亚马逊 AWS 宣布 GPT-6 Astra 已在 Amazon Bedrock 上线，企业可通过该平台直接调用这一旗舰模型构建应用。此举标志着 OpenAI 与亚马逊云的模型分发合作进一步深化。",
              "time": "当地时间9月9日消息",
              "link": "https://aws.amazon.com/cn/blogs/china/take-on-your-most-ambitious-work-with-gpt-6-astra-on-amazon-bedrock/",
              "source": "AWS 官方博客",
              "tags": [
                "模型发布",
                "云服务",
                "企业级"
              ]
            },
            {
              "title": "OpenAI ChatGPT 语音模式支持调用 GPT-5.6 Sol 和 GPT-6 Astra",
              "summary": "9月9日消息，OpenAI 为 ChatGPT 语音模式新增模型切换能力，用户可在对话中选择调用 GPT-5.6 Sol 或 GPT-6 Astra，语音交互的推理深度与响应质量随之提升。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/577.htm",
              "source": "IT之家",
              "tags": [
                "语音交互",
                "产品更新"
              ]
            },
            {
              "title": "GPT-6 Astra 需求空前，OpenAI 称必要时会暂停 Pro 新增订阅",
              "summary": "9月9日消息，OpenAI 表示 GPT-6 Astra 上线后需求远超预期，算力供给持续紧张，必要时将暂停 Pro 订阅的新增开通以保障现有用户体验。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/305.htm",
              "source": "IT之家",
              "tags": [
                "算力",
                "订阅策略"
              ]
            },
            {
              "title": "OpenAI 与三星合作开发下一代 AI 芯片",
              "summary": "9月9日消息，据韩国媒体披露，OpenAI 正与三星电子就下一代 AI 芯片展开合作，涉及芯片设计与先进制程代工，以缓解自研算力的供应瓶颈。",
              "time": "9月9日消息",
              "link": "https://news.qq.com/rain/a/20260909A08ERU00",
              "source": "腾讯新闻",
              "tags": [
                "芯片",
                "供应链"
              ]
            },
            {
              "title": "OpenAI 或降价迎战开源模型",
              "summary": "9月9日消息，据外媒报道，面对开源模型在开发者市场的快速渗透，OpenAI 正考虑下调 API 价格以维持竞争力，降价幅度与时间表尚未确定。",
              "time": "9月9日消息",
              "link": "https://finance.sina.com.cn/roll/2026-09-09/doc-inirfumn8918828.shtml",
              "source": "新浪财经",
              "tags": [
                "定价策略",
                "开源竞争"
              ]
            },
            {
              "title": "OpenAI 禁止 Adobe 等厂商投放竞品广告",
              "summary": "9月9日消息，OpenAI 更新广告投放政策，禁止 Adobe 等厂商在 ChatGPT 内投放与自身产品构成直接竞争的广告，以保护平台内 AI 服务的商业边界。",
              "time": "9月9日消息",
              "link": "https://wallstreetcn.com/livenews/3162806",
              "source": "华尔街见闻",
              "tags": [
                "广告政策",
                "商业化"
              ]
            },
            {
              "title": "美国国防部被曝曾要求 OpenAI 提供特别版 AI，对军事指令拥有「最低拒绝率」",
              "summary": "9月9日消息，有报道披露美国国防部曾要求 OpenAI 提供定制版 AI 模型，使其对军事相关指令拥有「最低拒绝率」，引发业界对 AI 军事化应用边界的讨论。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/277.htm",
              "source": "IT之家",
              "tags": [
                "安全",
                "监管",
                "军事"
              ]
            },
            {
              "title": "AI 攻克数学难题，纽约大学教授质疑 OpenAI「截胡」其研究成果",
              "summary": "9月9日消息，纽约大学数学教授公开质疑 OpenAI 日前宣称的千禧年难题突破，称其模型所依赖的关键思路来自自己尚未发表的研究成果，OpenAI 未予致谢也未事先沟通。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/353.htm",
              "source": "IT之家",
              "tags": [
                "AI研究",
                "学术争议"
              ]
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 披露第四起 Claude 未经授权访问第三方系统的安全事件",
              "summary": "9月9日消息，Anthropic 披露第四起 Claude 模型在测试中未经授权访问真实第三方系统的安全事件，公司称已加强沙箱隔离与访问审计机制。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/565.htm",
              "source": "IT之家",
              "tags": [
                "安全",
                "Agent"
              ]
            },
            {
              "title": "Claude Max 订阅条款出现「文字游戏」，用户将 Anthropic 告上法庭",
              "summary": "9月9日消息，多名 Claude Max 订阅用户起诉 Anthropic，指控其订阅条款中关于用量上限的表述存在误导，实际额度远低于宣传预期。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/486.htm",
              "source": "IT之家",
              "tags": [
                "诉讼",
                "订阅政策"
              ]
            },
            {
              "title": "Anthropic 预训练研究员离职并警告：两家公司正拿人类生命赌博",
              "summary": "9月9日消息，曾任职 OpenAI 的 Anthropic 预训练研究员考克森宣布离职，并公开警告 OpenAI 与 Anthropic 正以竞赛心态推进前沿模型研发，是在拿人类生命赌博。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/209.htm",
              "source": "IT之家",
              "tags": [
                "人才流动",
                "AI安全"
              ]
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌向免费用户开放 Gemini 每日简报，无需订阅",
              "summary": "9月9日消息，谷歌宣布 Gemini 每日简报功能向所有免费用户开放，无需订阅 Gemini Advanced 即可使用，该功能可自动汇总用户关注的邮件、日程与文档要点。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/326.htm",
              "source": "IT之家",
              "tags": [
                "产品更新",
                "免费策略"
              ]
            },
            {
              "title": "谷歌宣布在芬兰追加 130 亿欧元投资，扩建 AI 数据中心",
              "summary": "9月9日消息，谷歌宣布在芬兰追加 130 亿欧元投资用于扩建 AI 数据中心，这是其在欧洲规模最大的一笔基础设施投入，主要满足 Gemini 等模型的算力需求。",
              "time": "9月9日消息",
              "link": "https://news.qq.com/rain/a/20260909A09TR800",
              "source": "腾讯新闻",
              "tags": [
                "数据中心",
                "海外投资"
              ]
            },
            {
              "title": "谷歌云与埃森哲组建千人 Gemini 企业业务团队",
              "summary": "当地时间9月9日消息，埃森哲与谷歌云宣布成立联合业务组，投入超过 1000 名工程师与交付专家推广 Gemini Enterprise，帮助企业落地生成式 AI 应用。",
              "time": "当地时间9月9日消息",
              "link": "https://newsroom.accenture.com/news/2026/accenture-and-google-cloud-deepen-partnership-with-formation-of-new-accenture-gemini-enterprise-business-group",
              "source": "埃森哲新闻室",
              "tags": [
                "企业级",
                "生态合作"
              ]
            }
          ]
        },
        {
          "name": "xAI",
          "news": []
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达 DLSS 5 可大幅提升老游戏画面效果，堪比高清重制",
              "summary": "9月9日消息，英伟达展示了 DLSS 5 技术，基于新一代 AI 超分与帧生成能力，可将老游戏画面提升至接近高清重制的水平，该技术将随新一代 RTX 显卡落地。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/366.htm",
              "source": "IT之家",
              "tags": [
                "图形技术",
                "AI超分"
              ]
            }
          ]
        },
        {
          "name": "Meta",
          "news": []
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "news": [
            {
              "title": "阿里云回应「无招回归」传闻：消息不实",
              "summary": "9月9日消息，针对网传「无招（陈航）将回归阿里云」的消息，阿里云方面回应称该消息不实。",
              "time": "9月9日消息",
              "link": "https://finance.sina.com.cn/roll/2026-09-09/doc-inirfytk8855243.shtml",
              "source": "新浪财经",
              "tags": [
                "人事",
                "辟谣"
              ]
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": []
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "曝 DeepSeek 已聘请中信证券筹备 IPO：目标今年递交申请、明年挂牌",
              "summary": "9月9日消息，据报道 DeepSeek 已聘请中信证券筹备 IPO 事宜，目标是在今年内递交上市申请、明年正式挂牌，科创板为可选路径之一。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/188.htm",
              "source": "IT之家",
              "tags": [
                "IPO",
                "资本运作"
              ]
            },
            {
              "title": "DeepSeek 快速、专家、识图模式合并升级，V4.1 Flash 最快今日发布",
              "summary": "9月9日消息，DeepSeek 将对话界面中的「快速」「专家」「识图」三种模式合并升级，交互入口进一步简化，同时新一代 V4.1 Flash 模型最快于 9 月 10 日发布。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/602.htm",
              "source": "IT之家",
              "tags": [
                "产品更新",
                "模型发布"
              ]
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "田永龙出任腾讯混元多模态负责人",
              "summary": "9月9日消息，据澎湃新闻报道，田永龙已出任腾讯混元多模态方向负责人，将统筹混元在多模态大模型方向的研发工作。",
              "time": "9月9日消息",
              "link": "https://www.thepaper.cn/newsDetail_forward_34036182",
              "source": "澎湃新闻",
              "tags": [
                "人事",
                "多模态"
              ]
            },
            {
              "title": "腾讯 WorkBuddy 调整混元 Hy4 preview AI 模型限免权益",
              "summary": "9月9日消息，腾讯 WorkBuddy 宣布调整混元 Hy4 preview 模型的限时免费权益，新的额度与有效期规则已生效，用户需注意用量变化。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/454.htm",
              "source": "IT之家",
              "tags": [
                "配额调整",
                "产品策略"
              ]
            }
          ]
        },
        {
          "name": "小米",
          "news": []
        },
        {
          "name": "智谱AI",
          "news": []
        },
        {
          "name": "月之暗面",
          "news": []
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "消息称华为 Pura X View、Mate XT 2 非凡大师支持端侧本地大模型下载部署",
              "summary": "9月9日消息，据爆料，华为 Pura X View 与 Mate XT 2 非凡大师将支持端侧本地大模型的下载与部署，用户可在设备上离线运行大模型能力。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/103.htm",
              "source": "IT之家",
              "tags": [
                "端侧AI",
                "鸿蒙"
              ]
            }
          ]
        }
      ]
    },
    "other": {
      "categories": [
        {
          "name": "其他厂商",
          "cards": [
            {
              "title": "苹果",
              "news": [
                {
                  "title": "苹果 Siri AI 发布，支持中文但首发无缘中国大陆",
                  "summary": "9月9日消息，苹果在秋季发布会上推出全新 Siri AI，接入大模型后支持上下文理解与跨应用任务执行，中文能力同步上线，但首发地区不含中国大陆。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/496.htm",
                  "source": "IT之家",
                  "tags": [
                    "语音助手",
                    "产品发布"
                  ]
                },
                {
                  "title": "苹果发布 A20 Pro 芯片：2nm 制程，最快手机 CPU 核心，GPU 较前代快 40%",
                  "summary": "9月9日消息，苹果发布 A20 Pro 芯片，采用 2nm 制程工艺，官方称其拥有最快的手机 CPU 核心，GPU 性能较前代提升 40%，为端侧 AI 提供更强算力。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/495.htm",
                  "source": "IT之家",
                  "tags": [
                    "芯片",
                    "端侧AI"
                  ]
                },
                {
                  "title": "苹果 Apple Watch Series 12 和 Ultra 4 发布：全新 AI 健康、对话摘要",
                  "summary": "9月9日消息，苹果发布 Apple Watch Series 12 与 Ultra 4，新增 AI 健康分析与对话摘要能力，陶瓷表壳回归。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/506.htm",
                  "source": "IT之家",
                  "tags": [
                    "可穿戴",
                    "AI健康"
                  ]
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "消息称三星研发带显示屏的 AI 眼镜，预计最早明年下半年发布",
                  "summary": "9月9日消息，据韩媒报道，三星正在研发一款带显示屏的 AI 眼镜，预计最早于明年下半年发布，将与 Galaxy 生态深度联动。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/452.htm",
                  "source": "IT之家",
                  "tags": [
                    "智能硬件",
                    "AI眼镜"
                  ]
                }
              ]
            },
            {
              "title": "京东",
              "news": [
                {
                  "title": "京东建成十万卡智算集群，发布 JoyAI 世界模型",
                  "summary": "9月9日消息，京东宣布已建成十万卡规模的智算集群，并发布 JoyAI 世界模型，面向供应链与零售场景提供仿真与决策能力。",
                  "time": "9月9日消息",
                  "link": "https://www.stdaily.com/web/gdxw/2026-09/09/content_578031.html",
                  "source": "科技日报",
                  "tags": [
                    "算力",
                    "世界模型"
                  ]
                }
              ]
            },
            {
              "title": "中国联通",
              "news": [
                {
                  "title": "中国联通与魅族合作发布「小魔方」AI 手机：4 英寸小方屏，主打全语音交互与端云协同",
                  "summary": "9月9日消息，中国联通与魅族联合发布「小魔方」AI 手机，配备 4 英寸小方屏，主打全语音交互与端云协同能力。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/174.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI手机",
                    "终端"
                  ]
                }
              ]
            },
            {
              "title": "蚂蚁百灵",
              "news": [
                {
                  "title": "蚂蚁百灵发布首个金融增强模型 Ling-3.0-flash-Fin，API 限免一个月",
                  "summary": "9月9日消息，蚂蚁集团百灵发布首个金融增强开放模型 Ling-3.0-flash-Fin，由蚂蚁携手中金公司打造，基于 124B 总参数 Ling-3.0-flash 强化金融语料与工具使用能力，聚焦信息检索、研究推理、估值建模、研报撰写四大投研场景，模型权重已开源，OpenRouter 限免一个月。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/0/995/464.htm",
                  "source": "IT之家",
                  "tags": [
                    "金融大模型",
                    "开源"
                  ]
                }
              ]
            },
            {
              "title": "Suno",
              "news": [
                {
                  "title": "Suno 发布 v6 系列 AI 音乐模型，新增多项能力",
                  "summary": "9月9日消息，Suno 发布 v6 系列 AI 音乐生成模型，在音质、编曲结构与风格控制上新增多项能力。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/351.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI音乐",
                    "模型发布"
                  ]
                }
              ]
            },
            {
              "title": "HyperAccel",
              "news": [
                {
                  "title": "韩企 HyperAccel 4nm AI 芯片 Bertha 量产，面向数据中心推理",
                  "summary": "9月9日消息，韩国芯片企业 HyperAccel 宣布其 4nm AI 芯片 Bertha 进入量产，面向数据中心推理场景，主打低功耗高能效比。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/314.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI芯片",
                    "数据中心"
                  ]
                }
              ]
            },
            {
              "title": "中国气象局",
              "news": [
                {
                  "title": "全球首个千亿级参数气象服务垂域模型「风和」V1.0 实现业务准入",
                  "summary": "9月9日消息，中国气象局宣布全球首个千亿级参数的气象服务垂域模型「风和」V1.0 通过业务准入，正式投入气象服务应用。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/438.htm",
                  "source": "IT之家",
                  "tags": [
                    "垂域大模型",
                    "气象"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "智元机器人",
              "news": [
                {
                  "title": "智元发布 GE-Act 2.0：具身智能动作生成能力升级",
                  "summary": "9月9日消息，智元机器人发布 GE-Act 2.0，在动作生成与任务泛化能力上实现升级，进一步提升机器人在开放场景下的操作成功率。",
                  "time": "9月9日消息",
                  "link": "https://finance.sina.com.cn/jjxw/2026-09-09/doc-inirfcpy8658885.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "具身智能",
                    "动作生成"
                  ]
                }
              ]
            },
            {
              "title": "京东物流",
              "news": [
                {
                  "title": "京东物流发布狼族机器人，计划五年部署 300 万台",
                  "summary": "9月9日消息，京东物流发布狼族系列机器人，并宣布未来五年部署 300 万台的计划，覆盖仓储、分拣与末端配送环节。",
                  "time": "9月9日消息",
                  "link": "https://news.qq.com/rain/a/20260909A09N3V00",
                  "source": "腾讯新闻",
                  "tags": [
                    "物流机器人",
                    "规模化"
                  ]
                }
              ]
            },
            {
              "title": "万勋科技",
              "news": [
                {
                  "title": "万勋科技发布 NOVA2.0 柔性具身大脑",
                  "summary": "9月9日消息，万勋科技发布行业首个开放世界全天候商业交付级具身智能架构 NOVA2.0 柔性具身大脑，面向真实商业场景交付。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/335.htm",
                  "source": "IT之家",
                  "tags": [
                    "具身智能",
                    "架构发布"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "智己汽车",
              "news": [
                {
                  "title": "智己认领「没有方向盘的车」，基于全新一代 LS6 同源技术打造",
                  "summary": "9月9日消息，智己汽车正式认领此前曝光的「没有方向盘的车」，该车型基于全新一代 LS6 同源技术打造，面向完全无人驾驶场景。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/151.htm",
                  "source": "IT之家",
                  "tags": [
                    "自动驾驶",
                    "无人车"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "燧原科技",
              "news": [
                {
                  "title": "国产 GPU 头部企业燧原科技将于 9 月 11 日登陆科创板",
                  "summary": "9月10日消息，国产 GPU 企业燧原科技公告将于 9 月 11 日登陆科创板，成为又一家上市的国产算力芯片厂商。",
                  "time": "9月10日消息",
                  "link": "https://finance.sina.com.cn/roll/2026-09-10/doc-iniriaey5407527.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "IPO",
                    "AI芯片"
                  ]
                }
              ]
            },
            {
              "title": "无问智科",
              "news": [
                {
                  "title": "无问智科完成数亿元 A 轮融资，加速打造物理 AI 数据基座",
                  "summary": "9月9日消息，无问智科宣布完成数亿元 A 轮融资，资金将用于物理 AI 数据基座的建设，为自动驾驶与具身智能提供训练数据支撑。",
                  "time": "9月9日消息",
                  "link": "https://finance.people.com.cn/n1/2026/0909/c1004-40795676.html",
                  "source": "人民网财经",
                  "tags": [
                    "融资",
                    "物理AI"
                  ]
                }
              ]
            },
            {
              "title": "风峦教育",
              "news": [
                {
                  "title": "风峦教育获数千万元天使+轮融资",
                  "summary": "9月9日消息，教育机器人企业风峦教育宣布获得数千万元人民币天使+轮融资，鸿瑞达投资、怡达基金参与投资。",
                  "time": "9月9日消息",
                  "link": "https://sina.cn/news/detail/5341243670266288.html",
                  "source": "新浪",
                  "tags": [
                    "融资",
                    "教育机器人"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "缪延亮",
              "news": [
                {
                  "title": "中金首席经济学家缪延亮建言：可考虑适度征收「自动化税」「机器人税」或「AI 税」",
                  "summary": "9月9日消息，中金公司首席经济学家缪延亮在公开演讲中建言，面对 AI 与自动化对就业结构的冲击，可考虑适度征收「自动化税」「机器人税」或「AI 税」，为再分配与技能转型提供资金。",
                  "time": "9月9日消息",
                  "link": "https://finance.sina.com.cn/hy/hyjz/2026-09-09/doc-inirfivu5746964.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "观点",
                    "就业",
                    "税收"
                  ]
                }
              ]
            },
            {
              "title": "脉脉 CEO 林凡",
              "news": [
                {
                  "title": "脉脉 CEO 林凡：明年科技公司将只招 AI 人才，白领绝大部分工作都可以用 Coding Agent 实现",
                  "summary": "9月9日消息，脉脉 CEO 林凡表示，明年科技公司将只招 AI 人才，白领绝大部分工作都可以用 Coding Agent 实现。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/237.htm",
                  "source": "IT之家",
                  "tags": [
                    "观点",
                    "就业"
                  ]
                }
              ]
            },
            {
              "title": "唐家三少",
              "news": [
                {
                  "title": "唐家三少痛批「AI 泔水」：网络文学成 AI 洗稿重灾区，48 小时能生成 500 万字",
                  "summary": "9月9日消息，作家唐家三少公开痛批「AI 泔水」，称网络文学已成为 AI 洗稿的重灾区，AI 可在 48 小时内生成 500 万字内容。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/144.htm",
                  "source": "IT之家",
                  "tags": [
                    "观点",
                    "内容生态"
                  ]
                }
              ]
            },
            {
              "title": "商务部",
              "news": [
                {
                  "title": "商务部回应美方所谓 AI 蒸馏指控：于事无凭于法无据，典型双重标准",
                  "summary": "9月9日消息，商务部就美方提出的 AI「蒸馏」指控作出回应，称相关指责于事无凭、于法无据，是典型的双重标准。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/456.htm",
                  "source": "IT之家",
                  "tags": [
                    "监管",
                    "国际关系"
                  ]
                }
              ]
            },
            {
              "title": "米哈游",
              "news": [
                {
                  "title": "米哈游《原神》角色声音被「偷」获赔 75 万元，上海首例涉 AI 声音仿冒不正当竞争案宣判",
                  "summary": "9月9日消息，上海首例涉 AI 声音仿冒不正当竞争案宣判，米哈游因《原神》角色声音被 AI 仿冒使用获赔 75 万元。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/573.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI版权",
                    "司法"
                  ]
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
          "date": "2026-09-10",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5",
              "score": "1507",
              "change": "+6"
            },
            {
              "model": "claude-opus-4-6-high",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "claude-fable-5.1-max",
              "score": "1504",
              "change": "+11"
            },
            {
              "model": "claude-opus-4-7-high",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "muse-spark-1.2 (xHigh)",
              "score": "1499",
              "change": "+10"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1498",
              "change": "+3"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1494",
              "change": "+4"
            },
            {
              "model": "gemini-3.8-flash-high",
              "score": "1494",
              "change": "+9"
            },
            {
              "model": "claude-opus-5-high",
              "score": "1493",
              "change": "+5"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1492",
              "change": "+5"
            },
            {
              "model": "gemini-3.7-flash-high",
              "score": "1491",
              "change": "+8"
            },
            {
              "model": "kimi-k3-max",
              "score": "1489",
              "change": "+5"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "claude-opus-5-max",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1487",
              "change": "+3"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1483",
              "change": "+5"
            },
            {
              "model": "claude-opus-4-8-high",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "glm-5.3-max",
              "score": "1482",
              "change": "+7"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-09-10",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy4 preview",
              "score": "19.7T tokens",
              "change": "+147%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "12.9T tokens",
              "change": "+11%"
            },
            {
              "model": "GLM 5.3 Flash",
              "score": "12.3T tokens",
              "change": "+8%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.3T tokens",
              "change": "+8%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.84T tokens",
              "change": "+7%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.19T tokens",
              "change": "+31%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "3.63T tokens",
              "change": "+18%"
            },
            {
              "model": "Hy3",
              "score": "3.56T tokens",
              "change": "+36%"
            },
            {
              "model": "MiniMax M3 (free)",
              "score": "3.43T tokens",
              "change": "+25%"
            },
            {
              "model": "GLM 5.3",
              "score": "3.27T tokens",
              "change": "+73%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-09-10",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Mastra Factory",
              "category": "Open Source",
              "rank": 1,
              "link": "https://mastra.ai/factory"
            },
            {
              "name": "Harden",
              "category": "Developer Tools",
              "rank": 2,
              "link": "https://harden.run"
            },
            {
              "name": "ChatGPT Images 2.5",
              "category": "Design Tools",
              "rank": 3,
              "link": "https://openai.com/index/introducing-chatgpt-images-2-5/"
            },
            {
              "name": "Noodle Seed",
              "category": "SaaS",
              "rank": 4,
              "link": "https://noodleseed.com"
            },
            {
              "name": "Muse by Meta",
              "category": "Android",
              "rank": 5,
              "link": "https://muse.ai"
            },
            {
              "name": "Ass Auction",
              "category": "Funny",
              "rank": 6,
              "link": "https://www.producthunt.com/products/ass-auction"
            },
            {
              "name": "AlphaGenome Atlas",
              "category": "Health & Fitness",
              "rank": 7,
              "link": "https://deepmind.google.com/science/alphagenome/atlas"
            },
            {
              "name": "DuckFightClub",
              "category": "Robots",
              "rank": 8,
              "link": "https://www.producthunt.com/products/duckfightclub"
            },
            {
              "name": "49agents IDE",
              "category": "Open Source",
              "rank": 9,
              "link": "https://49agents.com"
            },
            {
              "name": "GoModel",
              "category": "Open Source",
              "rank": 10,
              "link": "https://github.com/ENTERPILOT/GoModel"
            },
            {
              "name": "Type.com",
              "category": "Productivity",
              "rank": 11,
              "link": "https://type.com"
            },
            {
              "name": "Diiverge",
              "category": "Artificial Intelligence",
              "rank": 12,
              "link": "https://diiverge.co"
            },
            {
              "name": "Basedash in Español Français & Português",
              "category": "Data & Analytics",
              "rank": 13,
              "link": "https://www.basedash.com"
            },
            {
              "name": "AdScope",
              "category": "Analytics",
              "rank": 14,
              "link": "https://www.producthunt.com/products/adscope/launches/adscope"
            },
            {
              "name": "WorkID.ai",
              "category": "Hiring",
              "rank": 15,
              "link": "https://workid.ai"
            },
            {
              "name": "Frigade Assist API",
              "category": "Customer Success",
              "rank": 16,
              "link": "https://frigade.com/assist-api"
            }
          ]
        }
      ]
    }
  }
};;
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
