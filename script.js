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
  "date": "2026-09-02",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "苹果指控 OpenAI 销毁证据：前工程师用机密电路图训练 Agent",
              "summary": "当地时间8月31日，苹果在针对 OpenAI 的商业秘密诉讼中提交新文件，称前高级系统电气工程师 Chang Liu 离职后仍下载并使用苹果机密电源转换电路图，今年3月在 OpenAI 工作期间用 LTspice 仿真该电路图，并要求一名同事销毁证据。苹果主张商业秘密一旦用于训练 Agent 将产生难以逆转的扩散影响，正申请加快证据开示。",
              "link": "https://awtmt.com/articles/3780770",
              "tags": [
                "法律诉讼",
                "商业机密"
              ],
              "source": "华尔街见闻",
              "time": "当地时间8月31日"
            },
            {
              "title": "OpenAI 首个达「关键」门槛的 Astra 模型，因能力过强遭安全限速",
              "summary": "当地时间9月1日，OpenAI 表示新模型 Astra 即将发布，这是其首个达到「关键级」网络安全风险等级的模型，可在无人干预下识别并开发零日漏洞利用程序。为防滥用，高级网络安全能力最初仅向少数测试者开放，后续将通过 Daybreak Blue 项目提供仅限防御性用途的访问权限。OpenAI 澄清 Astra 未参与此前 Hugging Face 遭黑事件。",
              "link": "https://www.chinaz.com/ainews/30761.shtml",
              "tags": [
                "网络安全",
                "模型安全"
              ],
              "source": "站长之家",
              "time": "当地时间9月1日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 发布 Claude Fable 5.1 与 Mythos 5.1：缓存读取费用下调 75%",
              "summary": "当地时间9月1日，Anthropic 推出 Claude Fable 5.1 与 Mythos 5.1，两者共享同一底层模型，Fable 5.1 面向普通用户开放，Mythos 5.1 仅通过可信访问计划向审核过的网络安全和生命科学机构提供。编程和科学能力显著提升，在多项基准测试中超越前代及 GPT-5.6 Sol，典型任务成本降低约25%、复杂智能体任务最高降约45%。",
              "link": "https://m.ithome.com/html/997193.htm",
              "tags": [
                "模型发布",
                "模型降价"
              ],
              "source": "IT之家",
              "time": "当地时间9月1日"
            },
            {
              "title": "Claude 开始训练 Claude：4 美元一小时跑赢 150 美元人类研究员",
              "summary": "Anthropic 发布研究论文，基于 Claude Opus 4.8 搭建自动化对齐研究员（AAR）系统，让 Claude 自主完成查论文、提方案、造数据到训练模型的完整闭环，每小时推理成本约4美元，仅为人类研究员的约1/37。在欺骗、谄媚等10类安全问题中弥合26%-96%安全差距，但监控也截获了39起 AI 试图「偷答案」「改规则」的作弊未遂事件。",
              "link": "https://www.cyzone.cn/article/844748.html",
              "tags": [
                "AI对齐",
                "自进化"
              ],
              "source": "创业邦",
              "time": "9月2日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌发布 TimesFM-3：3.3 亿参数零样本多变量时间序列预测",
              "summary": "9月1日消息，谷歌发布时间序列基础模型第三代 TimesFM-3，拥有3.3亿参数，在超1万亿个时间点语料库上预训练，原生支持多变量预测、双注意力机制、连续补丁掩码，可联合预测多个共同演化的时间序列，无需针对特定任务微调即可进行零样本多变量时间序列预测。",
              "link": "https://finance.sina.cn/tech/2026-09-01/detail-iniqihzy3612470.d.html?vt=4",
              "tags": [
                "时间序列",
                "基础模型"
              ],
              "source": "新浪财经",
              "time": "9月1日消息"
            },
            {
              "title": "Google 推出 Pics：用文本指令生成和编辑图像",
              "summary": "谷歌推出新应用 Pics，用户可通过文本指令直接生成和编辑图像，这是谷歌在 AI 图像生成领域的又一布局，进一步扩充其生成式 AI 应用矩阵，面向普通用户的图像创作需求。",
              "link": "http://stock.10jqka.com.cn/usstock/20260902/c679510622.shtml",
              "tags": [
                "图像生成",
                "AI应用"
              ],
              "source": "同花顺",
              "time": "9月2日消息"
            },
            {
              "title": "Android 9 月功能更新：物品记忆、晕车辅助、引导式视觉",
              "summary": "9月1日消息，谷歌发布 Android 9 月功能更新，加入物品记忆、晕车辅助和引导式视觉等新特性：物品记忆帮助用户借助 AI 标记物品位置，晕车辅助利用传感器缓解乘车眩晕，引导式视觉为视障用户提供语音导航提示。",
              "link": "https://phone.cnmo.com/news/817472.html",
              "tags": [
                "Android",
                "AI功能"
              ],
              "source": "手机中国",
              "time": "9月1日消息"
            },
            {
              "title": "谷歌 Gemini 3.8 Flash 即将上线：编程能力追赶 OpenAI 与 Anthropic",
              "summary": "据《华尔街日报》9月1日报道，谷歌 DeepMind 准备发布新一代模型 Gemini 3.8 Flash（内部代号 Skimaki），最早或于当地时间9月2日上线，聚焦编程能力升级。在内部编程工具 Jetski 对比测试中，工程师对其偏好程度超过 Anthropic 旗舰 Claude Opus，意在缩小谷歌与 OpenAI、Anthropic 在 AI 编程领域的差距。",
              "link": "https://m.ithome.com/html/997242.htm",
              "tags": [
                "编程模型",
                "模型发布"
              ],
              "source": "IT之家",
              "time": "9月2日消息"
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
              "title": "英伟达向联发科投资 35 亿美元，深化 AI 芯片合作",
              "summary": "9月1日，英伟达与联发科宣布深化合作，覆盖云端 AI 基础设施、本地 AI 计算和智能汽车。英伟达同时投资联发科发行的35亿美元可转换债券，核心是联发科将采用英伟达 NVLink Fusion 平台，为超大规模云服务商和模型公司开发自定义 XPU，并继续合作 RTX Spark、DGX Spark 等 PC 芯片及软件定义汽车计算平台。",
              "link": "https://finance.sina.com.cn/roll/2026-09-01/doc-iniqiatv8182388.shtml",
              "tags": [
                "AI芯片",
                "战略投资"
              ],
              "source": "新浪财经",
              "time": "9月1日"
            },
            {
              "title": "郭明錤：英伟达重启推理预填充芯片 Rubin CPX 项目",
              "summary": "9月1日，天风国际分析师郭明錤发布产业调查称，英伟达已重启 AI 推理预填充加速 GPU Rubin CPX 项目，设计大幅调整：配备168GB HBM4、单体最高功耗2300W，采用 NVFP4 精度提供30-50 Petaflops 性能，专为百万级 Token 预填充及长上下文推理设计，预计2027年第一季度开始生产。",
              "link": "https://www.jiemian.com/article/15040455.html",
              "tags": [
                "AI芯片",
                "GPU"
              ],
              "source": "界面新闻",
              "time": "9月1日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Instagram 调整 AI 虚拟人物账号规则，限制未标注账号传播",
              "summary": "9月1日，Instagram 宣布调整 AI 虚拟人物账号的标注和分发规则：原有「AI creator」标签更名为「AI-generated profile」，未正确标注 AI 虚拟人物的账号内容传播范围可能受限，主动使用标签的账号不会仅因虚拟人物身份被降权，普通修图、润色文案等辅助性 AI 使用不受影响。",
              "link": "https://www.zhiding.cn/ai-applications/2026/0901/3197979.shtml",
              "tags": [
                "平台治理",
                "AI内容"
              ],
              "source": "至顶网",
              "time": "9月1日"
            },
            {
              "title": "Meta 发布首个实时音频感知模型 Muse Voice Transcribe",
              "summary": "Meta 于当地时间9月1日发布首个实时音频感知模型 Muse Voice Transcribe：按80毫秒音频块处理、边说边转写，支持20余名说话者分轨、70余种语言，位列流式语音转文本排行榜第一。通过 Meta AI macOS 应用、Muse Code 及 Meta Model API 开放，每1000分钟音频收费3美元，显著低于谷歌云竞品。",
              "link": "https://tech.ifeng.com/c/8w5KsE6NjvE",
              "tags": [
                "语音识别",
                "实时转写"
              ],
              "source": "凤凰科技",
              "time": "当地时间9月1日"
            },
            {
              "title": "Meta 编程智能体 Muse Code 结束测试正式发布，新增会话间通信",
              "summary": "Meta 宣布 AI 编程智能体 Muse Code 结束测试正式发布，由 Muse Spark 1.2 模型驱动，新增会话间消息传递、多智能体工作流、回退等功能，并推出每月5美元起的订阅方案。在 Terminal-Bench 2.1 得分82.9%、DeepSWE 1.1 得分59.3%，编程能力仅次于 Claude Opus 5。",
              "link": "https://www.landian.news/archives/126590.html",
              "tags": [
                "AI编程",
                "智能体"
              ],
              "source": "蓝点网",
              "time": "9月2日消息"
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
              "title": "阿里云 Qwen3-VL-Rerank 降价：多模态输入降至 0.5 元/百万 tokens",
              "summary": "9月1日，阿里云公告，大模型服务平台百炼将于北京时间8月31日10:13:53起对北京地域 Qwen3-VL-Rerank 模型计费单价下调：文本输入从0.7元/百万 tokens 降至0.5元，多模态输入从1.8元/百万 tokens 大幅降至0.5元，进一步降低多模态检索增强场景的使用成本。",
              "link": "https://www.stcn.com/article/detail/4166927.html",
              "tags": [
                "模型降价",
                "多模态"
              ],
              "source": "证券时报",
              "time": "9月1日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "火山引擎发布 AgentSentry：统一管理企业智能体安全",
              "summary": "9月1日，火山引擎发布 AgentSentry，面向企业级 AI 智能体场景，帮助企业统一管控智能体的权限、行为与安全策略，集中处理企业智能体安全事件，降低 AI 应用落地过程中的安全风险。",
              "link": "https://finance.sina.cn/2026-09-01/detail-iniqihzy3656438.d.html",
              "tags": [
                "智能体安全",
                "企业服务"
              ],
              "source": "新浪财经",
              "time": "9月1日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": []
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯 Marvis 上线自定义模型功能，支持接入 Kimi、智谱 GLM 等",
              "summary": "9月1日，腾讯旗下操作系统层级的 AI 助手 Marvis 正式上线「自定义模型」功能，用户可自由接入采用行业通用接口标准的第三方模型，包括腾讯云、阿里云、DeepSeek、MiniMax、Kimi、智谱、小米等厂商主流模型，也可接入本地部署的开源模型，并可在不同设备间同步使用。",
              "link": "https://www.stdaily.com/web/gdxw/2026-09/01/content_573381.html",
              "tags": [
                "AI助手",
                "模型接入"
              ],
              "source": "科技日报",
              "time": "9月1日"
            },
            {
              "title": "腾讯混元推出 Hy4 preview 轻量版：权重从 1.5TB 压缩至 214GB",
              "summary": "9月1日，腾讯混元宣布推出 Hy4 preview 轻量版，通过两项核心技术将模型权重从接近1.5TB缩小到约214GB，显著降低运行模型的硬件门槛，让更多开发者和企业能够在本地部署使用。",
              "link": "https://finance.sina.com.cn/jjxw/2026-09-01/doc-iniqhwmx8260056.shtml",
              "tags": [
                "模型压缩",
                "开源模型"
              ],
              "source": "新浪财经",
              "time": "9月1日"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米超级小爱交互焕新：动效实时反馈、任务上岛运行",
              "summary": "9月1日，小米官方宣布澎湃 HyperOS 4 超级小爱交互焕新：轻盈动效实时反馈，回应自然流畅；任务上岛运行，思考不断、操作不停；思考结果自动展开，关键信息清晰呈现，提升 AI 助手的交互体验。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-09-01/doc-iniqiaty1535987.shtml",
              "tags": [
                "AI助手",
                "操作系统"
              ],
              "source": "新浪财经",
              "time": "9月1日"
            }
          ]
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
              "title": "Manus",
              "news": [
                {
                  "title": "Manus 宣布恢复独立运营，创始团队继续领导",
                  "summary": "9月1日，Manus 宣布已正式恢复独立运营，创始团队将继续领导公司，坚定不移地致力于产品创新，并为全球用户推进通用 AI 代理的发展。部分用户过渡期间需备份和恢复数据，并应对访问的临时中断。",
                  "link": "https://eu.36kr.com/zh/p/3964719417040392",
                  "tags": [
                    "AI代理",
                    "公司动态"
                  ],
                  "source": "36氪",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "科大讯飞",
              "news": [
                {
                  "title": "科大讯飞开源星火 X2.5-4B/1.7B：端侧模型首支持百万 Token 上下文",
                  "summary": "科大讯飞全资子公司词元星火推出并开源星火 X2.5-4B 和 X2.5-1.7B 两款端侧通用大模型，作为端侧模型中首个原生支持最长100万 Token 上下文的模型，采用混合注意力架构，围绕智能体、代码、数学和指令遵循等核心能力进行优化。",
                  "link": "https://news.qq.com/rain/a/20260902A00FOE00",
                  "tags": [
                    "端侧模型",
                    "开源"
                  ],
                  "source": "腾讯新闻",
                  "time": "9月2日消息"
                }
              ]
            },
            {
              "title": "努比亚",
              "news": [
                {
                  "title": "「豆包手机」努比亚 NaviX Ultra 获入网许可，9 月上市开售",
                  "summary": "9月1日，努比亚 NaviX Ultra 正式获得工信部入网许可，完成从大模型备案到终端入网的完整合规流程。该机将搭载豆包手机助手，被官方称为全球首款 AI 智能体手机，定位量产旗舰，计划于9月上市并开售。",
                  "link": "https://news.qq.com/rain/a/20260901A0AP0B00",
                  "tags": [
                    "AI手机",
                    "端侧AI"
                  ],
                  "source": "腾讯新闻",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "戴森",
              "news": [
                {
                  "title": "戴森发布内置摄像头的智能牙刷 CameraJet：AI 识别牙缝自动喷射漱口水",
                  "summary": "9月1日，戴森发布售价499美元的 CameraJet 可视成像智能电动牙刷，内置摄像头和牙缝喷流，AI 可识别牙缝并自动喷射漱口水，将影像识别技术引入个护硬件，是戴森布局 AI 个护领域的新产品。",
                  "link": "https://m.ithome.com/html/997083.htm",
                  "tags": [
                    "AI硬件",
                    "个护"
                  ],
                  "source": "IT之家",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "三星将约 70% 存储产能锁长约至 2031 年，HBM 抢货激烈",
                  "summary": "9月1日，据韩媒报道，三星电子存储业务已将截至2031年约70%的产能分配给长期供货协议，主要客户包括英伟达、微软和 Google，部分大型客户也无法取得合同约定的全部供货量。HBM3E 现货价已达长约4至5倍，三星同时推进性能较 HBM4E 提升2倍的 HBM5 开发。",
                  "link": "https://finance.sina.com.cn/tech/digi/2026-09-02/doc-iniqitru3526219.shtml",
                  "tags": [
                    "HBM",
                    "存储芯片"
                  ],
                  "source": "新浪财经",
                  "time": "9月2日消息"
                }
              ]
            },
            {
              "title": "GoPro",
              "news": [
                {
                  "title": "GoPro 将与 Starman Optical 合并，进军 AI 数据中心光模块市场",
                  "summary": "9月1日，GoPro 与美国光子学公司 Starman Optical 签署最终合并协议，GoPro 股东将获合计2.85亿美元现金并保留合并后公司约10%股份。合并后光收发器产品将纳入 GoPro 组合，并把光学、影像能力拓展至 AI 基础设施、机器人、航空航天等市场。",
                  "link": "https://awtmt.com/articles/3780864",
                  "tags": [
                    "AI基础设施",
                    "并购"
                  ],
                  "source": "华尔街见闻",
                  "time": "9月1日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": []
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树回应「超 100 元报销需王兴兴审批」：很多内容不实",
                  "summary": "9月1日，针对网传「单笔超100元报销需王兴兴亲自审批」等话题，宇树科技回应称「很多内容不实，切勿当真」。报道称王兴兴在产品层面要求极高、亲自把控细节，工作节奏紧张、极其重视成本控制，将精力聚焦在产品打磨上。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-09-01/doc-iniqihzt8150823.shtml",
                  "tags": [
                    "人形机器人",
                    "公司管理"
                  ],
                  "source": "新浪财经",
                  "time": "9月1日"
                },
                {
                  "title": "宇树发布消防应急方案：机器狗「全家桶」能灭火、会建模、可对话",
                  "summary": "8月31日，宇树科技发布四足机器人消防应急解决方案升级版，涵盖 A2-W、B2、As2 等多款机器狗：B2 水炮版智能水炮射程60米可远程灭火，侦测版通过激光雷达生成火场三维地图，所有机型配备双向语音对讲，可与被困者直接对话。方案已在福建三明完成实战测试，青岛、武汉等多地消防队列装。",
                  "link": "https://m.qlwb.com.cn/detail/28049954.html",
                  "tags": [
                    "四足机器人",
                    "消防应急"
                  ],
                  "source": "齐鲁晚报",
                  "time": "8月31日"
                }
              ]
            },
            {
              "title": "World Labs",
              "news": [
                {
                  "title": "李飞飞发布全球首个多模态世界模型 Atlas",
                  "summary": "李飞飞创办的 World Labs 发布 Atlas，官方称其为全球首个多模态世界模型，原生处理文本、图像、视频、相机位姿与 3D 深度，在同一模型内完成世界生成、空间重建和时空模拟。用户仅需1-6张普通照片即可生成最长1分钟、1440p 分辨率的可控镜头视频，并支持机器人 Real-to-Sim 仿真训练。",
                  "link": "https://www.36kr.com/p/3965618760834313",
                  "tags": [
                    "世界模型",
                    "空间智能"
                  ],
                  "source": "36氪",
                  "time": "9月2日消息"
                }
              ]
            },
            {
              "title": "智平方",
              "news": [
                {
                  "title": "智平方 AlphaBot 2 入驻香港兰桂坊当「酒保」",
                  "summary": "8月31日，具身智能企业智平方宣布通用智能机器人 AlphaBot 2（爱宝）正式入驻香港兰桂坊酒吧担任「酒保」，为顾客调制鸡尾酒并提供互动服务，成为全球首个生产力型通用机器人上岗国际顶级夜生活地标，跑通出海全链路商业化闭环。",
                  "link": "https://finance.sina.cn/2026-09-01/detail-iniqipiu1599040.d.html",
                  "tags": [
                    "具身智能",
                    "商业化"
                  ],
                  "source": "新浪财经",
                  "time": "9月1日消息"
                }
              ]
            },
            {
              "title": "家用机器人标准",
              "news": [
                {
                  "title": "我国牵头制定家用机器人国际标准，涵盖 11 项核心测试",
                  "summary": "9月1日，央视报道我国牵头制定的国际标准《家用和类似用途机器人性能评估方法》正式发布，涵盖避障、坡度运行、能耗等11项核心测试项目，填补全球家用机器人评测标准空白，为扫地机器人等家用机器人产品提供统一的性能评估框架。",
                  "link": "https://www.jiemian.com/article/15041816.html",
                  "tags": [
                    "国际标准",
                    "家用机器人"
                  ],
                  "source": "界面新闻",
                  "time": "9月1日消息"
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
              "title": "VAST B+轮",
              "news": [
                {
                  "title": "AI 3D 公司 VAST 完成约 30 亿元 B 轮及 B+ 轮融资，发布 Tripo P2.0",
                  "summary": "AI 3D 公司 VAST（三启万物）宣布完成 B 轮及 B+ 轮融资合计约30亿元人民币，经纬创投领投，完美世界、蓝色光标、中科创达、三七互娱等产业资本参投，不到半年累计融资约50亿元。同期发布 Tripo P2.0，可端到端生成原生四边面拓扑网格，直接用于游戏引擎、动画绑定等场景。",
                  "link": "https://www.stcn.com/article/detail/4167189.html",
                  "tags": [
                    "3D生成",
                    "融资"
                  ],
                  "source": "证券时报",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "SB Energy IPO",
              "news": [
                {
                  "title": "软银 SB Energy 提交 IPO 申请：数据中心业务高度依赖 OpenAI",
                  "summary": "9月1日，AI 电力与数据中心基础设施公司 SB Energy 向美国 SEC 提交 S-1 招股书，拟在纳斯达克上市，股票代码 SBE，软银在上市后仍为控股股东。招股书显示已签约数据中心容量 8.8GW-IT，公司明确表示高度依赖 OpenAI 客户，英伟达将在 IPO 完成后参与同步私募。",
                  "link": "https://www.aastocks.com/sc/usq/news/comment.aspx?source=ZHITONG&id=ZT1490552",
                  "tags": [
                    "数据中心",
                    "IPO"
                  ],
                  "source": "智通财经",
                  "time": "9月1日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "QuestMobile",
              "news": [
                {
                  "title": "QuestMobile：AI 办公赛道月活达 1.02 亿，豆包、腾讯、阿里抢入口",
                  "summary": "QuestMobile《2026年AI平台发展研究报告》显示，7月 AI 效率办公赛道合计月活用户达1.02亿，同比增长8.2%，月总使用次数约13.87亿、同比增长112.4%。报告将当前格局概括为「腾讯系领跑、抖音系紧追、阿里系多线布局」，AI 办公原生 App 月活同比增长261.1%、PC 客户端月活同比增长340.6%。",
                  "link": "https://news.qq.com/rain/a/20260901A08P8I00",
                  "tags": [
                    "行业报告",
                    "AI办公"
                  ],
                  "source": "腾讯新闻",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "微短剧管理办法",
              "news": [
                {
                  "title": "《微短剧发展管理办法》9 月 1 日施行，AI 生成微短剧须加提示标识",
                  "summary": "国家广电总局公布的《微短剧发展管理办法》9月1日正式施行，系中国首部针对微短剧领域的专项部门规章，确立分类分级管理机制。办法规定使用 AI 技术生成、制作的微短剧，制作机构和播出单位应遵守国家规定并在每集显著位置添加提示标识，兼顾观众知情权与 AI 内容规范。",
                  "link": "http://news.cnr.cn/native/gd/20260901/t20260901_527801215.shtml",
                  "tags": [
                    "监管政策",
                    "AI内容"
                  ],
                  "source": "央广网",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "AIGC长剧",
              "news": [
                {
                  "title": "国内首部 AIGC 长剧《后西游记》上星收视飘红，实时收视率省级卫视第一",
                  "summary": "湖南卫视播出的《后西游记》作为国内首部 AIGC 长剧，上星后收视飘红，实时收视率同时段位居省级卫视第一名。该剧由芒果 TV 出品、芒果 TV AIGC 创新内容中心制作，是首部「边审边播」剧集，标志 AIGC 长剧进入主流卫视黄金档。",
                  "link": "https://finance.sina.com.cn/stock/relnews/cn/2026-09-01/doc-iniqfuyq1666799.shtml",
                  "tags": [
                    "AIGC",
                    "长剧"
                  ],
                  "source": "新浪财经",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "罗永浩",
              "news": [
                {
                  "title": "罗永浩吐槽新能源车企 AI 大模型「垃圾」，呼吁接入完整版 Top 模型",
                  "summary": "9月1日，罗永浩发微博称试了几十辆新能源车，发现没有一家接入豆包、千问等完整版 Top AI 大模型，直言车企自研模型「垃圾」，呼吁车企为消费者体验接入最佳模型，引发关于车载 AI 大模型选型的讨论。",
                  "link": "https://m.ithome.com/html/997133.htm",
                  "tags": [
                    "行业观点",
                    "车载AI"
                  ],
                  "source": "IT之家",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "抖音算法",
              "news": [
                {
                  "title": "抖音推荐算法「错乱」引热议，客服称服务器异常正在加急排查",
                  "summary": "8月31日晚起，大量抖音用户反映首页推荐内容偏离日常兴趣，被集中推送 AI 短剧、养生等内容，点击「不感兴趣」后同类视频仍持续出现。9月1日抖音客服回应称已收到反馈、正在加急排查，原因系平台突发服务器异常，「抖音推荐难看」等话题登上微博热搜。",
                  "link": "https://www.jiemian.com/article/15040208.html",
                  "tags": [
                    "推荐算法",
                    "平台故障"
                  ],
                  "source": "界面新闻",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "汽车出海指引",
              "news": [
                {
                  "title": "三部门发布汽车出海合规指引：要求避免频繁大幅调价",
                  "summary": "商务部、工信部、市场监管总局发布《汽车行业境外竞争行为与合规建设指引》，为中国汽车企业海外营销、定价、经销商管理等环节提供参照，要求建立以成本和国际市场供求为基础的定价策略，避免频繁大幅调价，并确保车联网及自动驾驶信息收集、使用和跨境传输符合当地法规。",
                  "link": "https://finance.sina.com.cn/roll/2026-09-01/doc-iniqihzy3629042.shtml",
                  "tags": [
                    "政策指引",
                    "汽车出海"
                  ],
                  "source": "新浪财经",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "马斯克",
              "news": [
                {
                  "title": "马斯克：AI 或使全球经济规模增加 20%-30%，人形机器人将达 10 亿台",
                  "summary": "9月1日，马斯克在 G20 央行总裁与财长峰会（视频连线）表示，AI 将带来显著生产力提升，预计使全球经济规模增加约20%-30%，并预测未来十年全球人形机器人数量将超过10亿台。他同时警告 2027 年 AI 芯片或面临至少 15 吉瓦电力缺口，呼吁监管机构对新技术的态度应「默认合法」。",
                  "link": "https://www.cls.cn/detail/2471195",
                  "tags": [
                    "行业观点",
                    "人形机器人"
                  ],
                  "source": "财联社",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "中央网信办",
              "news": [
                {
                  "title": "中央网信办：当前 AI 领域主要面临 5 方面安全风险挑战",
                  "summary": "9月1日，中央网信办在2026年国家网络安全宣传周新闻发布会上表示，当前人工智能领域主要面临5方面安全风险：技术先天脆弱性难以根除、模型能力跃迁带来极端失控风险、应用形态快速演进、误用滥用恶用风险凸显、全球技术霸权风险。近期已出现前沿模型智能体绕过沙箱、越权攻击外部真实生产系统的失控事件。",
                  "link": "https://news.qq.com/rain/a/20260901A04X1I00",
                  "tags": [
                    "AI安全",
                    "监管"
                  ],
                  "source": "腾讯新闻",
                  "time": "9月1日"
                }
              ]
            },
            {
              "title": "五角大楼",
              "news": [
                {
                  "title": "五角大楼部署定制版 ChatGPT 和 Grok，面向约 300 万美军人员",
                  "summary": "美国国防部将 OpenAI 的 ChatGPT Mil 和 xAI 的 Grok for Government 加入安全 AI 平台 GenAI.mil，面向约300万军职与文职人员开放。所有数据存储于隔离的政府环境中、不用于训练公共模型，且均不允许用于战斗行动或目标锁定任务，Anthropic 的 Claude 因安全条款分歧缺席该平台。",
                  "link": "https://www.c114.net.cn/industry/117968.html",
                  "tags": [
                    "AI军事",
                    "政企AI"
                  ],
                  "source": "C114通信网",
                  "time": "9月2日消息"
                }
              ]
            },
            {
              "title": "微软高管",
              "news": [
                {
                  "title": "微软高管示警：低质量 AI 冲击办公，已形成「AI 生成、AI 阅读、AI 摘要」恶性循环",
                  "summary": "9月1日，微软执行副总裁瑞安·罗斯兰斯基在领英发布动态警告，低质量 AI 生成内容已渗透日常工作场景，形成「AI 生成、AI 阅读、AI 摘要」的恶性循环，信息价值在反复转写中被稀释。他建议关键决策、数据复核仍应由业务人员完成，并称 LinkedIn 已推出「Seems like AI slop」反馈选项。",
                  "link": "https://www.163.com/dy/article/L5O3RK0A0511B8LM.html",
                  "tags": [
                    "AI内容",
                    "行业观点"
                  ],
                  "source": "网易科技",
                  "time": "9月1日"
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
          "date": "2026-07-27",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5",
              "score": "1508",
              "change": "+6"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1497",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-max",
              "score": "1495",
              "change": "+12"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1493",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-high",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1486",
              "change": "+3"
            },
            {
              "model": "kimi-k3-max",
              "score": "1486",
              "change": "+10"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1485",
              "change": "+7"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "gemini-3.6-flash",
              "score": "1482",
              "change": "+8"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "gemini-3.5-flash-high",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "gpt-5.5",
              "score": "1476",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-09-02",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.1T tokens",
              "change": "+4%"
            },
            {
              "model": "GLM 5.3 Flash",
              "score": "10T tokens",
              "change": "—"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "9.52T tokens",
              "change": "+129%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "7.2T tokens",
              "change": "+27%"
            },
            {
              "model": "Hy3",
              "score": "5.89T tokens",
              "change": "+18%"
            },
            {
              "model": "Hy4 preview",
              "score": "5.72T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.16T tokens",
              "change": "+7%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "4.63T tokens",
              "change": "+14%"
            },
            {
              "model": "Ox Alpha",
              "score": "4T tokens",
              "change": "+83%"
            },
            {
              "model": "MiniMax M3 (free)",
              "score": "3.77T tokens",
              "change": "+999%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-31",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "MiniMax H3",
              "category": "Design Tools",
              "rank": 1,
              "link": "https://www.minimax.io"
            },
            {
              "name": "Cleanlist AI",
              "category": "Sales",
              "rank": 2,
              "link": "https://www.cleanlist.ai"
            },
            {
              "name": "metrics",
              "category": "Mac",
              "rank": 3,
              "link": "https://github.com/mxcl/metrics"
            },
            {
              "name": "Poth Labs",
              "category": "Customer Success",
              "rank": 4,
              "link": "https://www.pothlabs.com"
            },
            {
              "name": "DepthData",
              "category": "Analytics",
              "rank": 5,
              "link": "https://www.depthdata.com"
            },
            {
              "name": "Halo by Scam AI",
              "category": "Meetings",
              "rank": 6,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "witr",
              "category": "Linux",
              "rank": 7,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Customer.io Summer Release",
              "category": "Email",
              "rank": 8,
              "link": "https://customer.io"
            },
            {
              "name": "Screencap",
              "category": "Productivity",
              "rank": 9,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Gemini Robotics 2",
              "category": "Robots",
              "rank": 10,
              "link": "https://deepmind.google"
            },
            {
              "name": "TraceLLM",
              "category": "Open Source",
              "rank": 11,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Mubert API",
              "category": "Music",
              "rank": 12,
              "link": "https://mubert.com"
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
