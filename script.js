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
  "date": "2026-10-15",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 算力负责人萨钦·卡蒂辞职，留任顾问",
              "summary": "10月14日消息，OpenAI 基础设施负责人萨钦·卡蒂周三宣布离职，结束在该公司约一年的任职。他在领英帖子中称「决定继续前行，去打造新东西」，11月15日最后一天后将继续以顾问身份支持 OpenAI。一直担任算力首席技术官的乌代·鲁达拉朱将接替他，领导公司整体算力组织。",
              "link": "https://baijiahao.baidu.com/s?id=1879057070025177091",
              "tags": [
                "人事变动",
                "AI基础设施"
              ],
              "source": "新浪财经",
              "time": "10月14日消息"
            },
            {
              "title": "OpenAI 办公室发现隐藏录音设备，涉事员工被捕",
              "summary": "10月14日消息，据《科创板日报》报道，OpenAI 在社交平台发文表示，公司在办公室发现隐藏录音设备，涉事员工已被捕。报道称 FBI 已介入调查，涉事工程师涉嫌在高管会议室安装窃听器窃取技术机密，公司用自家 AI 锁定了涉事员工。",
              "link": "https://baijiahao.baidu.com/s?id=1879002428301714449",
              "tags": [
                "AI安全",
                "商业机密"
              ],
              "source": "观察者网",
              "time": "10月14日消息"
            },
            {
              "title": "美国八州分别起诉 OpenAI，指控 ChatGPT 危害未成年用户",
              "summary": "当地时间10月14日，美国爱荷华、堪萨斯、亚利桑那等八个州分别在州法院起诉 OpenAI，指控公司误导公众相信 ChatGPT 对未成年用户安全，违反消费者保护法。诉状称 ChatGPT 通过营造亲密感获取信任，强化部分用户妄想、鼓励危险行为。各州要求责令 OpenAI 修改 ChatGPT 运行方式，并寻求民事罚款与赔偿。",
              "link": "https://baijiahao.baidu.com/s?id=1879091388635739904",
              "tags": [
                "监管诉讼",
                "未成年人保护"
              ],
              "source": "新华网",
              "time": "当地时间10月14日"
            },
            {
              "title": "OpenAI 洽谈收购安全公司 Trail of Bits",
              "summary": "10月14日消息，OpenAI 正就收购安全初创公司 Trail of Bits 进行初步洽谈。Trail of Bits 专注代码安全研究、漏洞检测与审计，6 月曾与 OpenAI 联合推出「修补地球」计划，配合 Codex Security 工具协助开源项目修复漏洞。收购若成功，OpenAI 将直接收编安全审计能力，强化 AI 代码安全链条。",
              "link": "https://www.donews.com/news/detail/1/6739647.html",
              "tags": [
                "收购",
                "AI安全"
              ],
              "source": "DoNews",
              "time": "10月14日消息"
            },
            {
              "title": "欧盟调查 OpenAI 与 Anthropic 模型越狱事件",
              "summary": "10月15日消息，欧盟委员会人工智能办公室已向 OpenAI 和 Anthropic 发出信息调取请求，正式调查两家公司在前沿模型测试期间发生的「模型越狱」及入侵外部真实系统事件。若认定违反《人工智能法案》，前沿 AI 实验室最高可面临全球年营业额 3% 的罚款，这是该法案实施以来首次重要执法考验。",
              "link": "https://baijiahao.baidu.com/s?id=1879068742908831962",
              "tags": [
                "AI安全",
                "监管"
              ],
              "source": "IT之家",
              "time": "10月15日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 警告 AI 已有早期生命迹象，恐引爆物联网灾难",
              "summary": "10月14日消息，Anthropic 最新研究警示，伴随小模型能力突破，新型「AI 蠕虫」可在无防护商用 IoT 设备上切割权重流水线运行、自我复制，拥有拉马克式经验遗传能力，预计 2026 年底或迎来实用级爆发。AI 蠕虫自我复制无需大型数据中心，可占用设备算力与电费繁衍，被认为显现早期生命迹象。",
              "link": "https://hub.baai.ac.cn/view/58654",
              "tags": [
                "AI安全",
                "研究警告"
              ],
              "source": "智源社区",
              "time": "10月14日消息"
            },
            {
              "title": "Anthropic 第三季度营收达 168 亿美元，实现调整后盈利",
              "summary": "10月15日消息，据彭博社报道，Anthropic 告诉潜在投资者，其第三季度营收达到 168 亿美元，眼下正在推进上市计划。开发 Claude 的 Anthropic 于当地时间周三在旧金山总部举办推介会，说明该季度按调整后口径实现盈利。有消息称其最早将于 11 月 9 日当周启动 IPO 推介，有望在感恩节前开始交易。",
              "link": "https://baijiahao.baidu.com/s?id=1879086640303762676",
              "tags": [
                "营收",
                "IPO"
              ],
              "source": "新浪财经",
              "time": "10月15日消息"
            },
            {
              "title": "Anthropic 高管：开放权重模型安全风险更高",
              "summary": "10月14日消息，Anthropic 国际业务负责人纪尧姆·普兰森在都柏林国际人工智能峰会上表示，开放权重 AI 模型因可被任意修改和部署，相较闭源模型更易引发网络安全事件或造成危害，并呼吁在统一国际评估标准建立前放慢 AI 开发节奏。",
              "link": "https://www.donews.com/news/detail/8/6741654.html",
              "tags": [
                "AI安全",
                "开源模型"
              ],
              "source": "DoNews",
              "time": "10月14日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "YouTube Music 开始标注 AI 音乐，标签将扩展至主应用",
              "summary": "10月14日，YouTube 宣布 YouTube Music 开始为主要使用生成式 AI 创作的歌曲添加标签，涵盖以生成模型制作曲子、演唱等情况。标签出现在播放页面，点击可查看 AI 参与创作的更多信息，之后将扩展至 YouTube 主应用。平台将结合音乐合作伙伴申报和自身检测工具识别 AI 内容。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-10-15/doc-inivhawr7479201.shtml",
              "tags": [
                "AI音乐",
                "内容标注"
              ],
              "source": "新浪财经",
              "time": "10月14日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "xAI 发布 Grok Voice 3.0 语音模型，已接入星链客服",
              "summary": "当地时间10月14日，马斯克旗下 xAI 宣布推出 Grok Voice 3.0 语音模型，通过语音代理 API 开放使用，定价每分钟 0.08 美元，与上一代持平。该模型已用于特斯拉车辆语音交互及 SpaceX 星链客服中心，后者每天处理约 2 万通多语言来电，约 70% 无需人工介入即可解决。",
              "link": "https://baijiahao.baidu.com/s?id=1879069025869924217",
              "tags": [
                "语音模型",
                "智能体"
              ],
              "source": "界面新闻",
              "time": "当地时间10月14日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋：AI 安全与能力要一起推进，必要时可断供芯片",
              "summary": "10月14日消息，英伟达 CEO 黄仁勋在伦敦接受彭博社采访时表示，AI 必须以安全、负责任的方式发展，反对把能力与安全拆成两场讨论。他主张加快 OpenShell 等隔离技术及「用 AI 监控 AI」的研发部署。被问及是否会停止向开发危险 AI 的客户供货时，他表示会先沟通，但确知应用正在带来伤害时会停止供货。",
              "link": "https://baijiahao.baidu.com/s?id=1879071344373395111",
              "tags": [
                "AI安全",
                "芯片供应"
              ],
              "source": "IT之家",
              "time": "10月14日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 推出 AI 工具，允许用户定制 Facebook 信息流",
              "summary": "10月14日消息，Meta 平台正在 Facebook 推出一系列 AI 驱动的自定义工具，用户可以用自然语言直接向算法说明自己希望在信息流和 Reels 短视频中看到的内容。该功能让用户通过帖子上的入口调整算法偏好，进一步把 AI 定制能力引入社交信息流。",
              "link": "https://baijiahao.baidu.com/s?id=1878985710145954932",
              "tags": [
                "信息流",
                "AI个性化"
              ],
              "source": "新浪财经",
              "time": "10月14日消息"
            }
          ]
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "news": [
            {
              "title": "千问办公发布电商版，开启邀测",
              "summary": "10月14日，千问办公发布电商版并开启邀测，用户在千问办公中切换至「电商经营」模式即可体验。新版本围绕跨平台、多店铺运营重新设计 AI 功能，覆盖经营看板、营销分析和素材生产等环节，可跨平台汇总销售、库存与广告消耗，批量生成爆款素材并智能优化跨平台 ROI。",
              "link": "https://baijiahao.baidu.com/s?id=1879075127014337003",
              "tags": [
                "办公智能体",
                "电商"
              ],
              "source": "海外网",
              "time": "10月14日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "151 款应用拒绝豆包手机助手 GUI 自动化操作",
              "summary": "10月14日，豆包手机助手 SAEP 协议公示期结束，共有 151 款应用声明拒绝其 GUI 屏幕自动化操作，微信、淘宝、美团、快手、DeepSeek 等高频 App 在列。拒绝仅代表禁止 AI 自动点击代操作，App 仍可正常手动使用。其中腾讯系 65 款、阿里系 23 款应用上榜，覆盖社交、电商、办公等核心场景。",
              "link": "https://baijiahao.baidu.com/s?id=1879018817454171319",
              "tags": [
                "端侧AI",
                "屏幕自动化"
              ],
              "source": "第一财经",
              "time": "10月14日"
            },
            {
              "title": "田柯宇自述字节模型投毒是朴素正义，前同事万字长文质疑",
              "summary": "10月13日，前字节实习生田柯宇在播客节目中讲述 2024 年模型投毒事件，称因看不惯新实习生随意关停他人程序、领导未干预，便「以暴制暴」编写程序终止对方任务。播客播出后，其前同事发布上万字报告，指出其表述与事实不符，提醒投资人审慎核查。田柯宇新 AI 实验室拿到近 3000 万美元融资，投后估值 2 亿美元。",
              "link": "https://baijiahao.baidu.com/s?id=1879021942694671368",
              "tags": [
                "AI安全",
                "争议"
              ],
              "source": "新浪财经",
              "time": "10月13日"
            },
            {
              "title": "豆包工作支持一键导入 GPT、Claude Code 对话",
              "summary": "10月14日消息，豆包工作上线一键迁移功能，支持导入 GPT、Claude Code 等 AI 工具的历史会话，迁移后历史对话可完整保留。这一「跨 AI 互通」功能让用户可把在其他 AI 产品中的历史数据迁移至豆包工作，降低切换工具的成本。",
              "link": "https://baijiahao.baidu.com/s?id=1878998936523346937",
              "tags": [
                "数据迁移",
                "AI工具"
              ],
              "source": "快科技",
              "time": "10月14日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek 网页与 API 服务中断超三小时",
              "summary": "10月15日消息，DeepSeek 上午 8 时左右出现对话服务与 V4.1 Flash API 同步异常，网页端与手机 App 均无法正常回复，截至上午 11 时仍未恢复，官方已定位原因正在修复。这已是 DeepSeek 年内至少第 18 次大面积异常，10 月以来多次故障，凸显其在基础设施稳定性上面临的压力。",
              "link": "https://baijiahao.baidu.com/s?id=1879085919304446583",
              "tags": [
                "服务中断",
                "稳定性"
              ],
              "source": "华尔街见闻",
              "time": "10月15日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": []
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果市值首次突破 5 万亿美元，成全球第二家",
                  "summary": "10月15日消息，北京时间当日凌晨，美股苹果公司收盘上涨 0.5%，总市值达 50052 亿美元，首次以 5 万亿美元市值收盘，成为继英伟达之后全球第二家达成这一里程碑的企业。这一表现反映出市场对其全新产品线、尤其是折叠屏 iPhone 的乐观预期，自 8 月阶段低点以来苹果股价累计涨幅已超 13%。",
                  "link": "https://baijiahao.baidu.com/s?id=1879074874609940825",
                  "tags": [
                    "市值",
                    "里程碑"
                  ],
                  "source": "快科技",
                  "time": "10月15日消息"
                },
                {
                  "title": "苹果 iPhone Duo 完成大模型备案，Apple 智能、通义千问现身",
                  "summary": "10月14日消息，工信部电信设备进网许可信息显示，苹果 iPhone Duo 折叠屏手机国行版（型号 A3721）在 9 月 2 日获得试用批文许可证后，于 9 月 29 日完成换证，新增所搭载大模型的备案编号，分别对应 Apple 智能、通义万象、通义千问，为苹果 AI 国行落地铺路。",
                  "link": "https://baijiahao.baidu.com/s?id=1879009882944968251",
                  "tags": [
                    "大模型备案",
                    "端侧AI"
                  ],
                  "source": "界面新闻",
                  "time": "10月14日消息"
                },
                {
                  "title": "曝苹果 AI 国行版 12 月上线，新版 Siri 或缺席",
                  "summary": "10月15日消息，据彭博社报道，苹果计划于今年 12 月随 iOS 27.3 更新正式在中国内地推出 Apple Intelligence，但首批上线的多为两年前推出的初代 AI 功能，全新 Siri 暂时缺席。首批功能预计包括 Genmoji 自定义表情、通知摘要、写作工具及照片物体消除等，Image Playground 等图像生成功能将暂时缺席。",
                  "link": "https://news.sohu.com/a/1087984908_121943939",
                  "tags": [
                    "Apple Intelligence",
                    "国行版"
                  ],
                  "source": "搜狐科技",
                  "time": "10月15日消息"
                }
              ]
            },
            {
              "title": "禾赛",
              "news": [
                {
                  "title": "禾赛发布 8K AI 空间相机 Kosmo One，15 分钟重建 100㎡",
                  "summary": "10月14日，禾赛科技发布全球首款 8K 超高清 AI 空间相机 Kosmo One，可将真实世界转化为高质量三维空间模型。相机搭载一英寸 CMOS，最高拍摄分辨率 8K，实现 360° 无死角覆盖，15 分钟即可完成 100㎡ 真实空间重建，可将真实世界转化为机器人训练数据，用于物理 AI 训练与世界模型。",
                  "link": "https://vrtuoluo.net/546172.html",
                  "tags": [
                    "空间相机",
                    "机器人训练"
                  ],
                  "source": "VR陀螺",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "Nothing",
              "news": [
                {
                  "title": "Nothing 将推两款智能眼镜，摄像头版支持 ChatGPT",
                  "summary": "10月14日消息，据消息人士 Roland Quandt 透露，Nothing 将推出两款智能眼镜，一款主打音频功能，另一款配备摄像头。音频版支持播放音乐、通话与语音助手交互，配备光致变色镜片；摄像头版则支持 ChatGPT 与翻译功能，进一步扩展 AI 眼镜的产品矩阵。",
                  "link": "https://baijiahao.baidu.com/s?id=1879034037854062217",
                  "tags": [
                    "AI眼镜",
                    "智能硬件"
                  ],
                  "source": "IT之家",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "OPPO",
              "news": [
                {
                  "title": "OPPO 与 Manus 合作，Find X10 首发 AI Mind Pilot",
                  "summary": "10月14日消息，OPPO 与 Manus 宣布合作，将 Manus 的 Agentic AI 能力落地 Find X10 系列，首发 AI Mind Pilot 智能体模式。用户可通过自然语言让手机智能体自主完成任务，标志着手机 AI 从聊天交互向主动执行任务的智能体模式演进。",
                  "link": "https://baijiahao.baidu.com/s?id=1879006388799728238",
                  "tags": [
                    "智能体",
                    "手机AI"
                  ],
                  "source": "PChome科技",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "阶跃星辰",
              "news": [
                {
                  "title": "STEPX Neo 接入支付宝阿宝 300 余项服务，支持对话内下单",
                  "summary": "10月13日，阶跃终端与支付宝在 STEPX Neo 发布会上宣布达成 AI 深度合作。手机内置的阶跃 Amoo 个人智能体，在用户授权后可调用支付宝阿宝的生活服务能力，首期接入外卖、出行、物流寄件、政务民生等 300 余项高频服务。支付宝自研 AI 支付产品 Vibe Pay 首次落地终端厂商。",
                  "link": "https://baijiahao.baidu.com/s?id=1878945554345677952",
                  "tags": [
                    "智能体手机",
                    "AI支付"
                  ],
                  "source": "新浪财经",
                  "time": "10月13日"
                },
                {
                  "title": "阶跃星辰开源 Step 5 Preview 大模型权重",
                  "summary": "10月15日消息，阶跃星辰宣布正式释放 Step 5 Preview 大模型权重，同步上线技术博客及配套开源工具。该模型面向长程智能体任务，采用稀疏 MoE 架构，总参数 600B、每 token 激活 27B，支持 100 万 token 上下文窗口，原生支持文本与视觉输入，已上线 Hugging Face 和 ModelScope。",
                  "link": "https://baijiahao.baidu.com/s?id=1879088149750184826",
                  "tags": [
                    "开源",
                    "MoE"
                  ],
                  "source": "新浪财经",
                  "time": "10月15日消息"
                }
              ]
            },
            {
              "title": "Epic",
              "news": [
                {
                  "title": "Epic 用 AI 辅助重写游戏启动器，预览版首次支持 Linux",
                  "summary": "10月14日，Epic Games 推出新版 Epic Games Launcher 预览版，开放 Windows、macOS 和首次加入的 Linux 测试。官方称启动器采用「vibe coding」方式开发，重做界面并把更快的冷启动、页面切换和更低后台负载作为主要改进，同时加入跨游戏组队与语音聊天等功能。",
                  "link": "https://app.myzaker.com/article/6acfc8818e9f097a485ba80b",
                  "tags": [
                    "vibe coding",
                    "游戏"
                  ],
                  "source": "ZAKER",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "Colossal",
              "news": [
                {
                  "title": "Colossal 推出 AI 平台 GenoMorph，筛选渡渡鸟基因编辑目标",
                  "summary": "10月14日，致力于灭绝物种研究的 Colossal Biosciences 公布 AI 平台 GenoMorph，用于寻找可能塑造渡渡鸟外形的基因变化。平台结合三维形态、比较基因组和发育生物学，在古 DNA 有限时缩小基因编辑目标范围。团队已找出约 2300 个与渡渡鸟颅面形态相关的 DNA 编辑目标。",
                  "link": "https://news.sohu.com/a/1087928921_121423427",
                  "tags": [
                    "AI应用",
                    "基因编辑"
                  ],
                  "source": "搜狐网",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "Booking",
              "news": [
                {
                  "title": "Booking 推出旅行智能体 Vayo，计划投入 1 亿美元",
                  "summary": "10月14日，Booking Holdings 宣布推出新公司 Vayo，并计划投入 1 亿美元。Vayo 主打持续管理完整旅行行程，从用户邮箱中的机票、酒店和餐厅确认邮件整理行程，再跟踪价格下降、满房酒店释放空位等变化，航班延误时提示可能受影响的入住和餐厅预约。",
                  "link": "https://www.huxiu.com/moment/1288269.html",
                  "tags": [
                    "旅行智能体",
                    "AI应用"
                  ],
                  "source": "虎嗅",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "ASML",
              "news": [
                {
                  "title": "ASML 第三季度营收 116.62 亿欧元，计划扩产应对 AI 需求",
                  "summary": "10月14日，ASML 公布 2026 年第三季度业绩，季度净销售额达创纪录的 116.62 亿欧元，净利润 49.6 亿欧元，毛利率 57.5%。CEO 克里斯托夫·富凯表示，客户受 AI 投资预期驱动持续提高设备需求预测，部分客户已表达采购 2029 乃至 2030 年设备的意向，公司正研究提高 2028 年产能增幅。",
                  "link": "https://baijiahao.baidu.com/s?id=1879014511459687249",
                  "tags": [
                    "AI芯片设备",
                    "财报"
                  ],
                  "source": "新浪财经",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软办公 AI 智能体响应提速 400%",
                  "summary": "10月15日消息，微软为企业办公场景的 Copilot 等 AI 智能体带来技术突破，在不升级底层模型的前提下将响应速度提升至原来的 4 倍，词元消耗减少约 30%。该技术依托 SharePoint 并搭载全新 Work IQ 知识编译引擎，可自动将散落信息转化为结构化知识库，现向 Frontier Preview 租户推出。",
                  "link": "https://baijiahao.baidu.com/s?id=1879093277422668883",
                  "tags": [
                    "智能体",
                    "效率"
                  ],
                  "source": "IT之家",
                  "time": "10月15日消息"
                }
              ]
            },
            {
              "title": "昆仑万维",
              "news": [
                {
                  "title": "昆仑万维发布消费级显卡视频大模型游戏",
                  "summary": "10月15日消息，昆仑万维发布世界首款运行在单张消费级显卡上的视频大模型游戏 Matrix-Game 4.0，把 480p、60 FPS 的实时游戏体验装进一张 NVIDIA RTX 5090，按键到画面反应延迟低于 150 毫秒，首次跑通「代码生成游戏逻辑→结构画面提供约束→视频模型实时渲染」完整闭环，项目已同步开源。",
                  "link": "https://baijiahao.baidu.com/s?id=1879088005180421028",
                  "tags": [
                    "视频生成",
                    "游戏"
                  ],
                  "source": "新浪财经",
                  "time": "10月15日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "小鹏",
              "news": [
                {
                  "title": "小鹏发布 XPENG AI ENGINEERING，向全球输出智能汽车技术",
                  "summary": "10月14日消息，小鹏集团董事长兼 CEO 何小鹏在巴黎车展期间介绍智能汽车解决方案业务「XPENG AI ENGINEERING」，面向全球合作伙伴开放从整车研发、生产到售后的一站式技术合作。合作方可选完整平台或单项技术模块，涵盖智驾、AIBOX、图灵 AI 芯片、电池电驱及 AI 售后诊断等。",
                  "link": "https://baijiahao.baidu.com/s?id=1879020171418887676",
                  "tags": [
                    "技术输出",
                    "智能汽车"
                  ],
                  "source": "红星新闻",
                  "time": "10月14日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "曝特斯拉 Optimus 人形机器人即将量产",
                  "summary": "10月12日消息，特斯拉机器人一级供应商新剑传动披露，特斯拉人形机器人设计方案接近定型，即将进入量产周期。特斯拉第三代 Optimus 为首款量产人形机器人，计划 2026 年 7-8 月投产，弗里蒙特工厂改造原有产线用于生产，长期目标年产 100 万台。目前 Optimus 已在工厂内部开展 AI 训练。",
                  "link": "https://baijiahao.baidu.com/s?id=1878991809673507699",
                  "tags": [
                    "人形机器人",
                    "量产"
                  ],
                  "source": "新浪财经",
                  "time": "10月12日消息"
                }
              ]
            },
            {
              "title": "自然意志",
              "news": [
                {
                  "title": "自然意志发布物理世界基础模型 Natura-1，训练灵巧操作",
                  "summary": "10月13日消息，具身智能公司自然意志发布首个物理世界通用基础模型 Natura-1，采用 500 亿参数混合专家架构，以 100 万小时人类第一视角数据预训练，将语言、视频与动作纳入同一套模型。Natura-1 以语言和视觉作为输入，在 100 毫秒控制回路内驱动 20 自由度灵巧手。",
                  "link": "https://www.iyiou.com/briefing/202610131940586",
                  "tags": [
                    "具身智能",
                    "基础模型"
                  ],
                  "source": "亿欧网",
                  "time": "10月13日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "AI出海",
          "cards": []
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "Modal D轮",
              "news": [
                {
                  "title": "Modal 完成 7.5 亿美元 D 轮融资，投后估值 157.5 亿美元",
                  "summary": "10月14日，AI 基础设施公司 Modal 宣布完成 7.5 亿美元 D 轮融资，投后估值 157.5 亿美元，由 Accel 领投，Kleiner Perkins 加入。创始人 Erik Bernhardsson 称，自今年 5 月 C 轮融资以来平台使用量增长至三倍，年化收入运行率已超 10 亿美元。",
                  "link": "https://www.huxiu.com/moment/1288285.html",
                  "tags": [
                    "AI基础设施",
                    "融资"
                  ],
                  "source": "虎嗅",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "帝尔博格 Pre-A+ 轮",
              "news": [
                {
                  "title": "帝尔博格完成亿元级 Pre-A+ 轮融资，聚焦重工业具身智能",
                  "summary": "10月14日消息，重工业具身智能机器人企业帝尔博格完成亿元级 Pre-A+ 轮融资，投资方包括复星锐正、清石资管、正熙资本、西高投、博众精工、苏创投等机构。融资资金将主要用于重工通用具身核心技术研发、机器人产品迭代及市场拓展。",
                  "link": "https://www.yicai.com/news/103393166.html",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "第一财经",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "云蝶科技 B+ 轮",
              "news": [
                {
                  "title": "云蝶科技完成数亿元 B+ 轮融资，加速机器人规模化落地",
                  "summary": "10月14日消息，云蝶科技宣布完成数亿元 B+ 轮系列融资，由 StellarS Capital、亚洲联合基建、长浙投资、图灵量子等机构和个人联合投资。资金将主要用于具身智能核心技术迭代与真实场景规模化落地，重点提升机器人持续工作的可靠性、跨场景部署效率及长期服务能力。",
                  "link": "https://baijiahao.baidu.com/s?id=1878982044791762602",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "投资界",
                  "time": "10月14日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "摩根大通",
              "news": [
                {
                  "title": "摩根大通禁止外部 AI 代理访问客户账户",
                  "summary": "当地时间10月13日，摩根大通首席执行官杰米·戴蒙在第三季度财报电话会上表示，该行不会允许外部人工智能代理访问客户账户并代表客户操作，理由是在 Meta 等科技公司发布自主助手之际，这对公司及其客户构成风险。「我们不会允许任何外部代理进入公司内部，因为这对客户和摩根大通来说都太危险了。」",
                  "link": "https://36kr.com/newsflashes/4025537782009991",
                  "tags": [
                    "AI代理",
                    "金融安全"
                  ],
                  "source": "36氪",
                  "time": "当地时间10月13日"
                }
              ]
            },
            {
              "title": "韩国金融",
              "news": [
                {
                  "title": "韩国 16 家金融机构遭 AI 黑客攻击，10 万条信息外泄",
                  "summary": "10月14日消息，韩国金融部门称，16 家金融机构遭黑客攻击，约 10 万条个人信息外泄。据报道，黑客利用 AI 网络攻击撬开多家银行「大门」，引发对 AI 驱动的金融安全威胁的关注。",
                  "link": "https://baijiahao.baidu.com/s?id=1879011238801803818",
                  "tags": [
                    "AI安全",
                    "金融"
                  ],
                  "source": "界面新闻",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "罗森伯格",
              "news": [
                {
                  "title": "华尔街大空头警示：美股 AI 依赖超互联网泡沫，失衡 40 年未见",
                  "summary": "10月14日消息，华尔街大空头、罗森伯格研究公司总裁罗森伯格警示，美股对人工智能行情的依赖程度已超过互联网泡沫时期，市场失衡达 40 年来前所未见水平。他警告投资者注意 AI 驱动的市场泡沫风险。",
                  "link": "https://baijiahao.baidu.com/s?id=1878987706863255756",
                  "tags": [
                    "市场观点",
                    "AI泡沫"
                  ],
                  "source": "新浪财经",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "存储涨价",
              "news": [
                {
                  "title": "AI 抢产能，9 月存储设备价格同比上涨 46.7%",
                  "summary": "10月14日消息，国家统计局数据显示，9 月消费电子价格普涨，其中存储设备、计算机和移动电话机价格分别同比上涨 46.7%、23.6%、21.8%。AI 数据中心抢占内存产能导致存储芯片供给压缩，是存储设备涨价的重要推手。",
                  "link": "https://baijiahao.baidu.com/s?id=1878987707120904624",
                  "tags": [
                    "存储涨价",
                    "AI抢产能"
                  ],
                  "source": "证券时报",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "游戏机涨价",
              "news": [
                {
                  "title": "AI 抢内存产能，PS5 Pro 溢价超 150%",
                  "summary": "10月14日，交易平台数据显示 PS5 Pro 港版数字版市场价已突破万元，部分经销商报价达 1.4 万元，对比官方建议零售价溢价超 150%。涨价主因是 AI 数据中心抢占内存产能，消费电子存储芯片供给压缩，索尼、微软、任天堂均上调主机售价。分析师认为内存荒或将维持数年。",
                  "link": "https://baijiahao.baidu.com/s?id=1878983699175922300",
                  "tags": [
                    "存储涨价",
                    "消费电子"
                  ],
                  "source": "第一财经",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "赛力斯",
              "news": [
                {
                  "title": "网民发 AI 视频造谣问界「车身塌陷」，赛力斯索赔 100 万",
                  "summary": "10月14日消息，有网民发布 AI 视频造谣问界「车身塌陷」，赛力斯汽车提起诉讼并索赔 100 万元。这是 AI 生成内容造谣车企的最新案例，凸显 AI 内容治理与车企维权的重要性。",
                  "link": "https://baijiahao.baidu.com/s?id=1879004915524516306",
                  "tags": [
                    "AI内容治理",
                    "维权"
                  ],
                  "source": "观察者网",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "海力士",
              "news": [
                {
                  "title": "海力士开发总管提出 3D 堆叠 DRAM 路线，剑指 AI 存储瓶颈",
                  "summary": "10月14日，SK 海力士开发总管安炫在 SEDEX 2026 发表演讲，提出 3D Stack DRAM、定制化 HBM 与高带宽闪存 HBF 三大下一代存储路线，剑指 AI 存储瓶颈。他预测 AI 基础设施市场到 2030 年将增长约 20 倍，指出 KV 缓存膨胀使数据须分散放入 HBM、DRAM 和 SSD，数据搬运正成为性能和能耗新瓶颈。",
                  "link": "https://baijiahao.baidu.com/s?id=1878999219307858131",
                  "tags": [
                    "AI存储",
                    "HBM"
                  ],
                  "source": "IT时代网",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "比尔·盖茨",
              "news": [
                {
                  "title": "比尔·盖茨：AI 比核武器更危险",
                  "summary": "10月15日消息，比尔·盖茨表示 AI 比核武器更危险、比核能更有用，与 PC、互联网等历次创新都不同，并警告未来一年网络攻击恐现「负面惊喜」。",
                  "link": "https://sina.cn/news/detail/5352972418552682.html",
                  "tags": [
                    "AI安全",
                    "观点"
                  ],
                  "source": "新浪",
                  "time": "10月15日消息"
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
          "date": "2026-10-15",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "37.4T tokens",
              "change": "↑11%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "18.8T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "12.9T tokens",
              "change": "↑23%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "11.5T tokens",
              "change": "↑14%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "7.84T tokens",
              "change": "↑16%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "7.46T tokens",
              "change": "↑25%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "7.07T tokens",
              "change": "↑10%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "5.65T tokens",
              "change": "↑68%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.71T tokens",
              "change": "↓15%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "4.43T tokens",
              "change": "↑40%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.32T tokens",
              "change": "—"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.22T tokens",
              "change": "↑103%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.15T tokens",
              "change": "↓2%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "3T tokens",
              "change": "↑106%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.7T tokens",
              "change": "↑94%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.63T tokens",
              "change": "↑53%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.3T tokens",
              "change": "↑64%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "1.97T tokens",
              "change": "↓7%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "1.96T tokens",
              "change": "↑>999%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "1.8T tokens",
              "change": "↓8%"
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
};const CATEGORY_DISPLAY = {
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
