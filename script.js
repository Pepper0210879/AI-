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
  "date": "2026-11-21",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 强化 GPT-6.2 思考链防护，蒸馏提取率大降",
              "summary": "11月21日消息，OpenAI 公布 GPT-6.2 Astra 与 Sol 的反蒸馏防护进展，经黑盒红队测试，旧请求的推理思考链提取成功率已从 54% 降至 0.2%，新请求从 22.9% 降至 0.9%。OpenAI 还采取多层防护，每周封禁数千至数万个涉未经授权蒸馏的账号，以保护模型推理能力不被竞争对手窃取。",
              "link": "https://www.ithome.com/1/030/319.htm",
              "tags": [
                "模型安全",
                "蒸馏"
              ],
              "source": "IT之家",
              "time": "11月21日消息"
            },
            {
              "title": "OpenAI 推出 MedChemBench 基准评估 AI 药物研发",
              "summary": "11月21日消息，OpenAI 推出 MedChemBench 基准，用于评估 AI 辅助药物研发能力，含 99 道题、涉及 761 个分子结构，从结构组装到性质预测多维度测评。GPT-6.2 Astra 以 84.5% 可用分领先，但化合物筛选与数值预测仍是短板。",
              "link": "https://www.ithome.com/1/030/301.htm",
              "tags": [
                "AI制药",
                "基准评测"
              ],
              "source": "IT之家",
              "time": "11月21日消息"
            },
            {
              "title": "OpenAI 向 ChatGPT Plus 用户开放 Spaces 协作空间",
              "summary": "11月21日消息，OpenAI 宣布向 ChatGPT Plus 用户开放 Spaces 协作空间，支持多人共同编辑。该功能此前仅面向高阶付费用户，Plus 用户每月支付 20 美元即可创建协作空间、邀请他人共享资料并编辑文档，目前正分批向全球成年用户开放。",
              "link": "https://www.ithome.com/1/030/288.htm",
              "tags": [
                "协作",
                "ChatGPT"
              ],
              "source": "IT之家",
              "time": "11月21日消息"
            }
          ],
          "color": "#10A37F",
          "softBg": "#E8F7F2",
          "initial": "O"
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 数学家称与 Claude 合作证明黎曼猜想",
              "summary": "当地时间11月20日，Anthropic 员工、数学家 Levent Alpöge 表示，在大模型 Claude 协助下完成黎曼猜想的证明，并称已证明范围更广的广义黎曼猜想。该证明已通过 Lean 工具做形式化编码校验，但整体论证正确性仍有待全球数学界核验。菲尔兹奖得主陶哲轩回应称理解和消化这份成果仍需时间。",
              "link": "https://36kr.com/p/4078708897092744",
              "tags": [
                "数学",
                "Claude"
              ],
              "source": "36氪",
              "time": "当地时间11月20日"
            },
            {
              "title": "台积电子公司斥资 5 亿美元认购 Anthropic 股票",
              "summary": "11月19日，台积电公告称，旗下子公司 TSMC Partners, Ltd. 投资 Anthropic，认购其 602.41 万股 N 类普通股，每股价格 83 美元，交易总金额约 5 亿美元，价格与 IPO 发行价相同，显示晶圆代工龙头对 Anthropic 的看好。",
              "link": "https://k.sina.com.cn/article_5952915720_162d24908067056olu.html",
              "tags": [
                "投资",
                "IPO"
              ],
              "source": "新浪财经",
              "time": "11月19日"
            },
            {
              "title": "Anthropic 创始人以 50.1% 投票权建立反夺权机制",
              "summary": "当地时间11月20日，据 Business Insider 报道，Anthropic 在上市后通过特殊股权设计，让包括 CEO 达里奥·阿莫代伊在内的 7 位联合创始人共同掌握 50.1% 的股东投票权，建立“反夺权”机制，确保公司控制权不因外部资本进入而旁落。",
              "link": "https://www.ithome.com/1/030/348.htm",
              "tags": [
                "公司治理",
                "股权"
              ],
              "source": "IT之家",
              "time": "当地时间11月20日"
            },
            {
              "title": "Anthropic 研究员预测 2027 年底 AI 超越顶尖专家",
              "summary": "当地时间11月15日，Anthropic 技术团队成员 Tao Lin 在接受 Palisade Research 采访时预测，到 2027 年年底，人工智能在编程、电影制作等几乎所有领域，经过约 1.3 年的发展后，可以媲美或超过世界顶尖人类专家的水平，引发“几乎所有人将永久失业”的讨论。",
              "link": "https://www.ithome.com/1/030/308.htm",
              "tags": [
                "AI预测",
                "AGI"
              ],
              "source": "IT之家",
              "time": "当地时间11月15日"
            }
          ],
          "color": "#D97757",
          "softBg": "#F9EFE8",
          "initial": "A"
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "DeepMind 研究员提出通往超级智能的多条路径",
              "summary": "11月20日消息，Google DeepMind 研究员 Tim Genewein 在署名文章中提出，人类水平的通用人工智能（AGI）只是能力谱系上的一个节点。他列出四条继续提高能力的路径：扩大模型和数据规模、改变技术范式、改善智能体协作、让系统迭代改进自身。",
              "link": "https://cloud.tencent.com/developer/article/2698463",
              "tags": [
                "超级智能",
                "AGI"
              ],
              "source": "腾讯云",
              "time": "11月20日消息"
            },
            {
              "title": "谷歌智能音箱与屏幕明年 8 月起停用 Assistant",
              "summary": "11月20日消息，谷歌公布智能家居设备语音助手切换安排，Google Assistant 将在 2027 年 8 月起从智能音箱和智能屏幕分批停用，用户可升级至 Gemini for Home。基础语音助理可免费使用，Gemini Live 和搜索摄像头录像等功能需订阅 Google Home Premium。",
              "link": "https://www.ithome.com/0/986/174.htm",
              "tags": [
                "语音助手",
                "Gemini"
              ],
              "source": "IT之家",
              "time": "11月20日消息"
            }
          ],
          "color": "#4285F4",
          "softBg": "#EAF1FD",
          "initial": "G"
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "贷款方试图禁止 SpaceX 将 400 亿美元芯片发射太空",
              "summary": "11月20日消息，知情人士透露，为 SpaceX 最新一笔 430 亿美元债务融资提供支持的贷款方，正试图限制马斯克不允许把抵押品——高端 AI 芯片发射到太空，用于其轨道数据中心计划。贷款方担忧芯片送入太空后一旦违约将无法收回处置。",
              "link": "https://www.cls.cn/detail/2540279",
              "tags": [
                "AI芯片",
                "数据中心"
              ],
              "source": "财联社",
              "time": "11月20日消息"
            }
          ],
          "color": "#1D9BF0",
          "softBg": "#EAF4FE",
          "initial": "x"
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋被曝或创办新半导体公司并筹资 500 亿美元",
              "summary": "11月20日消息，前英伟达 CEO 黄仁勋的去向成为硅谷热议话题。科技媒体 Semafor 记者预测，黄仁勋休整后或重返 AI 行业，可能创办一家新半导体公司，或向业内盟友筹集 500 亿美元创业资金，但该内容仅为预测，目前并无信息证实。",
              "link": "https://www.cls.cn/detail/2540050",
              "tags": [
                "半导体",
                "黄仁勋"
              ],
              "source": "财联社",
              "time": "11月20日消息"
            },
            {
              "title": "英伟达市值跌至 3.36 万亿美元被谷歌反超",
              "summary": "当地时间11月20日，英伟达股价跌幅一度扩大至 4.5%，报 139.43 美元，创 2025 年 6 月以来新低，总市值回落至 3.36 万亿美元，被谷歌反超，位列美股第四。该股收盘跌 14.01%，报 125.53 美元。",
              "link": "https://www.cls.cn/detail/2540588",
              "tags": [
                "股价",
                "市值"
              ],
              "source": "财联社",
              "time": "当地时间11月20日"
            },
            {
              "title": "英伟达拟逾 5 亿美元收购 AI 初创公司 Inception",
              "summary": "11月20日消息，据 The Information 报道，英伟达计划收购扩散式 AI 初创公司 Inception，目前双方已深入谈判，交易估值至少超过 5 亿美元，并可能附加与业绩挂钩的额外奖励。",
              "link": "https://www.ithome.com/1/029/886.htm",
              "tags": [
                "收购",
                "AI初创"
              ],
              "source": "IT之家",
              "time": "11月20日消息"
            }
          ],
          "color": "#76B900",
          "softBg": "#F1F8E5",
          "initial": "N"
        },
        {
          "name": "Meta",
          "news": [],
          "color": "#0082FB",
          "softBg": "#EAF3FE",
          "initial": "M"
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "news": [
            {
              "title": "阿里真武 V900 AI 芯片明年一季度量产售卖",
              "summary": "11月21日消息，阿里云官方宣布，新一代 AI 芯片真武 V900 将在明年一季度量产售卖，是目前算力性能最强的中国自研 AI 芯片。真武 V900 由平头哥研发，是面向超大规模模型训练与推理的训推一体芯片。",
              "link": "https://www.163.com/dy/article/LC6K0LMA0511B8LM.html",
              "tags": [
                "国产芯片",
                "AI芯片"
              ],
              "source": "网易",
              "time": "11月21日消息"
            }
          ],
          "color": "#FF6A00",
          "softBg": "#FFF1E6",
          "initial": "阿"
        },
        {
          "name": "火山引擎",
          "news": [],
          "color": "#3370FF",
          "softBg": "#EDF2FF",
          "initial": "火"
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "腾讯云宣布 DeepSeek 原厂服务端联网搜索免费",
              "summary": "11月18日，腾讯云公告，自北京时间 2026 年 11 月 18 日 12 时起，调用 DeepSeek 原厂直供模型时触发的服务端搜索、网页抓取不再计费，仅按模型 Token 用量计费。对之后产生的服务端联网搜索费用将启动退费并统一退还。",
              "link": "https://www.yicai.com/brief/103448032.html",
              "tags": [
                "API",
                "计费调整"
              ],
              "source": "第一财经",
              "time": "11月18日"
            }
          ],
          "color": "#4D6BFE",
          "softBg": "#EEF0FF",
          "initial": "D"
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯混元 Hy4 正式开源，混元 LLM 全量开放",
              "summary": "11月20日，腾讯混元宣布 Hy4 正式开源，可在 GitHub、Hugging Face、ModelScope 和 GitCode 社区下载部署。Hy4 采用 MoE 架构，总参数量 7700 亿，每个 token 激活 490 亿参数，支持百万 Token 上下文，同步开放轻量版 Hy4 flash，均采用 Apache 2.0 协议可商用。",
              "link": "https://www.ithome.com/1/029/841.htm",
              "tags": [
                "开源",
                "大模型"
              ],
              "source": "IT之家",
              "time": "11月20日"
            },
            {
              "title": "腾讯 WorkBuddy 开放电脑操控公测",
              "summary": "11月20日，腾讯 WorkBuddy 开放电脑操控能力公测，用户可在对话框描述任务，WorkBuddy 识别屏幕上的软件界面后执行点击、输入或滚动等操作。公测支持 macOS 和 Windows，需将桌面客户端更新至 5.11.0 或以上版本。",
              "link": "https://www.ithome.com/1/030/222.htm",
              "tags": [
                "AI智能体",
                "电脑操控"
              ],
              "source": "IT之家",
              "time": "11月20日"
            }
          ],
          "color": "#0052D9",
          "softBg": "#EAF1FC",
          "initial": "腾"
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米 MiMo Token Plan 限时支持 UltraSpeed 推理",
              "summary": "11月20日，小米 MiMo 官方文档显示，Token Plan 的 Pro / Max 套餐限时支持 UltraSpeed 超高速旗舰推理模型，将超高速推理能力下放至更多套餐，便于开发者和用户以更低门槛调用。",
              "link": "https://www.ithome.com/1/030/193.htm",
              "tags": [
                "推理模型",
                "API"
              ],
              "source": "IT之家",
              "time": "11月20日"
            }
          ],
          "color": "#FF6900",
          "softBg": "#FFF0E6",
          "initial": "米"
        },
        {
          "name": "智谱AI",
          "news": [],
          "color": "#3B5BDB",
          "softBg": "#EDF0FD",
          "initial": "智"
        },
        {
          "name": "月之暗面",
          "news": [],
          "color": "#7C5CFF",
          "softBg": "#F1EDFF",
          "initial": "月"
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "华为星芒发布首款鸿蒙 AI 手机 OSTA O1 Pro",
              "summary": "11月20日，华为子品牌 OSTA 星芒发布首款手机 O1 Pro，定位“首款为 AI 而生的鸿蒙手机”。新机采用 6.39 英寸阔直板屏，搭载麒麟 9030S 处理器与 7000mAh 电池，首发 HarmonyOS 7 AI 先锋版，起售价 5499 元。",
              "link": "https://www.ithome.com/1/030/120.htm",
              "tags": [
                "AI手机",
                "鸿蒙"
              ],
              "source": "IT之家",
              "time": "11月20日"
            },
            {
              "title": "余承东更正：享界 V8 当前为 L2，开车不能睡觉",
              "summary": "11月20日，华为终端 BG 董事长余承东在发布会后发文更正，享界 V8 目前向用户提供的是 L2 级辅助驾驶，车辆具备 L3 所需硬件能力但相关功能尚未开放。他提醒用户使用辅助驾驶时仍需专心驾驶、握好方向盘，开车不能睡觉。",
              "link": "https://www.ithome.com/1/030/132.htm",
              "tags": [
                "辅助驾驶",
                "L3"
              ],
              "source": "IT之家",
              "time": "11月20日"
            }
          ],
          "color": "#C7000B",
          "softBg": "#FBEAEA",
          "initial": "华"
        }
      ]
    },
    "other": {
      "categories": [
        {
          "name": "其他厂商",
          "cards": [
            {
              "title": "蚂蚁集团",
              "news": [
                {
                  "title": "蚂蚁灵光接入企业微信、腾讯文档等 7 项能力",
                  "summary": "11月20日，蚂蚁集团旗下 AI 助手灵光新增 7 项连接能力，支持的外部服务与系统功能从 47 项增至 54 项，此次接入企业微信、腾讯文档和腾讯会议，覆盖企业沟通、文档协作和会议场景，用户还可通过飞常准连接查询航班动态。",
                  "link": "https://www.163.com/dy/article/LC6HL9RU05532TJY.html",
                  "tags": [
                    "AI助手",
                    "生态连接"
                  ],
                  "source": "网易",
                  "time": "11月20日"
                }
              ]
            },
            {
              "title": "Thinking Machines Lab",
              "news": [
                {
                  "title": "Thinking Machines 开放 Inkling 2 Mini 权重",
                  "summary": "11月21日消息，前 OpenAI CTO 穆拉蒂创办的 Thinking Machines Lab 发布 Inkling 2 Mini，并以 Apache 2.0 许可开放权重。该模型可接收文字和图片，总参数量 264 亿，可在 48GB 内存的 MacBook Pro 上离线运行。",
                  "link": "https://www.sohu.com/a/1104453608_115978",
                  "tags": [
                    "开源模型",
                    "端侧"
                  ],
                  "source": "搜狐",
                  "time": "11月21日消息"
                }
              ]
            },
            {
              "title": "AMD",
              "news": [
                {
                  "title": "苏姿丰首谈黄仁勋离任：这是 AMD 的巨大机遇",
                  "summary": "当地时间11月19日，AMD CEO 苏姿丰在奥斯汀 TomorrowX 峰会上首次公开谈及表舅、英伟达前 CEO 黄仁勋离任一事，称黄仁勋是杰出领袖，其离任对 AMD 而言是巨大的行业机遇。",
                  "link": "https://www.sohu.com/a/1104084679_114760",
                  "tags": [
                    "芯片竞争",
                    "AMD"
                  ],
                  "source": "搜狐",
                  "time": "当地时间11月19日"
                }
              ]
            },
            {
              "title": "爱奇艺",
              "news": [
                {
                  "title": "爱奇艺将实拍+AI 混制模式扩展至长剧",
                  "summary": "11月17日，爱奇艺首席内容官王晓晖在业绩电话会上介绍，平台在微短剧、动画等品类用 AI 生成内容扩大供给，在长剧上正把实拍和 AI 结合，已有约 20 个项目采用这一方式。",
                  "link": "https://m.jrj.com.cn/madapter/24h/2026/11/16204659160761.shtml",
                  "tags": [
                    "AIGC",
                    "影视"
                  ],
                  "source": "金融界",
                  "time": "11月17日"
                }
              ]
            },
            {
              "title": "Linger",
              "news": [
                {
                  "title": "前 DeepSeek V1 作者创业开源个人 Agent Linger",
                  "summary": "11月21日消息，前 DeepSeek V1 作者、DeepSeek-VL 项目负责人 Tony Zhang 公布新创业项目 Linger，方向为个人 Personal Agent。Linger 支持接入第三方模型并针对本地 LLM 优化，12GB 显存的 RTX 3060 即可运行 125B 参数模型，系统已开源。",
                  "link": "https://www.qbitai.com/2026/11/511570.html",
                  "tags": [
                    "开源",
                    "AI Agent"
                  ],
                  "source": "量子位",
                  "time": "11月21日消息"
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
                  "title": "韩国驳回特斯拉 FSD 车辆安全标准豁免申请",
                  "summary": "11月20日消息，韩国国土交通部表示，由于申请材料不全，无法受理特斯拉提出的豁免当地车辆安全标准的请求，该请求旨在获准在韩提供“全自动驾驶”（FSD）功能。韩国交通安全公团已通知特斯拉韩国公司补充相关材料。",
                  "link": "https://video.sina.cn/finance/2026-11-20/detail-inizkizh4008040.d.html",
                  "tags": [
                    "FSD",
                    "自动驾驶"
                  ],
                  "source": "新浪",
                  "time": "11月20日消息"
                }
              ]
            },
            {
              "title": "文远知行",
              "news": [
                {
                  "title": "文远知行 Q3 收入增 88%，Robotaxi 收入首破亿",
                  "summary": "11月20日，文远知行公布 2026 年第三季度业绩，期内实现收入 3.215 亿元，同比增长 88%；毛利 1.381 亿元，同比增长约 145%。其中 Robotaxi 业务收入首次突破 1 亿元，同比增长 204%，海外收入占比超过 90%。",
                  "link": "https://finance.eastmoney.com/a/202611203936360665.html",
                  "tags": [
                    "Robotaxi",
                    "财报"
                  ],
                  "source": "东方财富",
                  "time": "11月20日"
                }
              ]
            },
            {
              "title": "比亚迪",
              "news": [
                {
                  "title": "比亚迪发布 10 秒折叠方向盘，面向高阶自动驾驶",
                  "summary": "11月19日，比亚迪发布折叠智舱，推出可 10 秒收纳的折叠方向盘，将搭载于方程豹钛 9，面向 L3、L4 高阶自动驾驶场景。该方向盘具备双状态气囊保护、防夹功能，启停寿命可达 8 万次。",
                  "link": "https://k.sina.com.cn/article_2013320812_m7800d66c03301jylq.html",
                  "tags": [
                    "智能座舱",
                    "自动驾驶"
                  ],
                  "source": "新浪",
                  "time": "11月19日"
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
                  "title": "智元与蓝思科技合作部署精灵 G2 机器人",
                  "summary": "11月21日消息，智元创新（AGIBOT）与蓝思科技达成战略合作，于手机测试产线部署智元精灵 G2 机器人，数十台机器人同时进行测试工位自动上下料、测试设备交互等工作，具身机器人进入真机落地阶段。",
                  "link": "https://www.ithome.com/1/030/364.htm",
                  "tags": [
                    "具身智能",
                    "工业机器人"
                  ],
                  "source": "IT之家",
                  "time": "11月21日消息"
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
              "title": "语用科技",
              "news": [
                {
                  "title": "前通义千问负责人林俊旸公司融资估值 50 亿美元",
                  "summary": "11月20日消息，据彭博社援引知情人士报道，前阿里通义千问负责人林俊旸创办的语用科技（Pragmatik Labs）已完成新一轮融资，估值达 50 亿美元，较 8 月首轮融资时的 20 亿美元翻倍有余。本轮新投资者包括鼎晖投资、吉利汽车等。",
                  "link": "https://www.sohu.com/a/1104213124_114760",
                  "tags": [
                    "融资",
                    "AI创业"
                  ],
                  "source": "搜狐",
                  "time": "11月20日消息"
                }
              ]
            },
            {
              "title": "Anther Capital",
              "news": [
                {
                  "title": "香港家族办公室清仓 39 亿美元 AI 相关股票",
                  "summary": "11月20日消息，据 13F 文件显示，对冲基金老将 Larry Chen 创立的香港家族办公室 Anther Capital 上季度已不再持有此前价值约 39 亿美元的 AI 相关股票，包括西部数据和美光科技等，正值投资者更广泛撤离 AI 资产之际。",
                  "link": "https://video.sina.cn/finance/2026-11-20/detail-iniziafw4347229.d.html",
                  "tags": [
                    "投资撤资",
                    "AI股"
                  ],
                  "source": "新浪",
                  "time": "11月20日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "迈克尔·伯里",
              "news": [
                {
                  "title": "大空头伯里谈 AI 股暴跌：我早就提醒过",
                  "summary": "11月21日消息，“大空头”迈克尔·伯里在 X 平台发文称，对 CoreWeave、Nebius、英伟达及半导体股，他都曾提醒过投资者，虽未让做空，但提供的信息足以让人决定卖出。当日美股 AI 相关个股延续跌势。",
                  "link": "https://www.ithome.com/1/030/378.htm",
                  "tags": [
                    "AI股",
                    "投资观点"
                  ],
                  "source": "IT之家",
                  "time": "11月21日消息"
                }
              ]
            },
            {
              "title": "Dragos",
              "news": [
                {
                  "title": "研究：近 200 万条请求揭示 AI 服务链隐私漏洞",
                  "summary": "11月21日消息，安全公司 Dragos 首席研究官 HD Moore 向多家 AI 服务商发送近 200 万条带可追踪“诱饵”的请求，发现 AI 服务链存在黑客窃取提示词、转售商泄露数据及未遵守隐私设置等问题，即便“零数据保留”也会泄密。",
                  "link": "https://www.ithome.com/1/030/322.htm",
                  "tags": [
                    "AI安全",
                    "隐私"
                  ],
                  "source": "IT之家",
                  "time": "11月21日消息"
                }
              ]
            },
            {
              "title": "微信短剧",
              "news": [
                {
                  "title": "微信短剧新规：AI 制作证明视频 12 月起必填",
                  "summary": "11月20日，微信短剧内容中心宣布审核调整，单集最低时长从 45 秒上调至 1 分钟，含 AI 生成内容的剧集需提交 AI 制作证明视频，新规自 12 月起执行，加强对 AI 生成内容的监管。",
                  "link": "https://www.ithome.com/1/029/883.htm",
                  "tags": [
                    "AI监管",
                    "短剧"
                  ],
                  "source": "IT之家",
                  "time": "11月20日"
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
          "date": "2026-11-21",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "62.4T tokens",
              "change": "↑15%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "15.6T tokens",
              "change": "↓1%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "10.8T tokens",
              "change": "↓9%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "8.74T tokens",
              "change": "↑41%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "7.25T tokens",
              "change": "↑54%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "4.8T tokens",
              "change": "↑999%+"
            },
            {
              "model": "MiniMax M3.1 Flash (minimax)",
              "score": "4.11T tokens",
              "change": "↑404%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "3.91T tokens",
              "change": "↑363%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "3.56T tokens",
              "change": "↑11%"
            },
            {
              "model": "Kimi K3.1 Pro (moonshotai)",
              "score": "3.54T tokens",
              "change": "↓18%"
            },
            {
              "model": "ERNIE-5.5-Flash-Preview (free) (baidu)",
              "score": "3.5T tokens",
              "change": "↑280%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.39T tokens",
              "change": "↓10%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "3.05T tokens",
              "change": "↑1%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.93T tokens",
              "change": "↑3%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.88T tokens",
              "change": "↑19%"
            },
            {
              "model": "Nemotron 3.5 Super VL (free) (nvidia)",
              "score": "2.87T tokens",
              "change": "↓2%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.77T tokens",
              "change": "↓2%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.72T tokens",
              "change": "↓34%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "2.68T tokens",
              "change": "↓18%"
            },
            {
              "model": "Jev 1.14 (typesafe)",
              "score": "2.23T tokens",
              "change": "↑8%"
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
