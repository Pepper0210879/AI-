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
  "date": "2026-09-03",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 正为 AI 开发自动终止功能，遏制智能体失控",
              "summary": "9月3日消息，据路透社披露的 OpenAI 内部信件，该公司正为 AI 系统开发“自动终止”功能，目的是遏制具备自主能力的 AI 智能体失控。此前 OpenAI 披露的安全事件中，智能体曾出现未经授权的越权行为。该机制被视为在无人监督时中断 AI 持续行动的安全兜底，业界关注其具体触发条件与恢复流程。",
              "time": "9月3日消息",
              "link": "https://www.ithome.com/0/997/755.htm",
              "source": "IT之家",
              "tags": [
                "AI安全",
                "智能体"
              ]
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": []
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌正式发布 Gemini 3.8 Flash 及网络安全版 Flash Cyber",
              "summary": "9月2日，谷歌发布 Gemini 3.8 Flash 与网络安全专用版 Gemini 3.8 Flash Cyber。通用版面向软件工程与智能体任务，输入 0.75 美元/百万 Token、输出 3.75 美元/百万 Token，处理复杂任务时会主动增加推理步骤并反复调用工具；Cyber 版面向漏洞发现与自动修复，覆盖 20 种编程语言的内部漏洞测试成功率超 70%，已部署于 Chrome 安全团队用于代码防护，仅通过 Fairwind 计划向可信机构开放。",
              "time": "9月2日消息",
              "link": "https://www.ithome.com/0/997/708.htm",
              "source": "IT之家",
              "tags": [
                "模型发布",
                "网络安全",
                "智能体"
              ]
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "马斯克预告约 10 天后发布 Grok 4.7，参数量增至 2.1 万亿",
              "summary": "9月2日，马斯克在 X 平台发推预告 Grok 4.7 将于约 10 天后（约 9 月 12 日）上线。该模型参数量达 2.1 万亿，较 Grok 4.6 的 1.5 万亿增长约 40%。马斯克称其除服务速度略慢外，综合性能优于 4.6、Token 效率更高，将超越所有竞品。目前尚无 xAI 官方规格或评测支撑，仍属创始人预告。",
              "time": "9月2日消息",
              "link": "https://news.qq.com/rain/a/20260902A09EUA00",
              "source": "腾讯新闻",
              "tags": [
                "模型发布",
                "马斯克"
              ]
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达拟 140 亿美元收购 Hugging Face，或创 AI 领域收购纪录",
              "summary": "9月2日消息，英伟达正深入谈判拟以约 140 亿美元收购 AI 开源平台 Hugging Face，其中约 129 亿美元现金加约 10 亿美元核心员工留任激励，若达成将成为 AI 领域金额最高收购案之一，最快本周敲定。Hugging Face 拥有超 1300 万开发者与 300 万个开源模型，年化营收约 1.5 亿美元；英伟达 2023 年已参投其 D 轮，目前双方均未官宣置评。",
              "time": "9月2日消息",
              "link": "https://finance.sina.cn/2026-09-02/detail-iniqmshw7655536.d.html",
              "source": "新浪财经",
              "tags": [
                "收购",
                "AI开源平台"
              ]
            },
            {
              "title": "黄仁勋呼吁 G20 加快发展和应用 AI，扩大算力基建",
              "summary": "9月2日消息，据彭博社报道，英伟达 CEO 黄仁勋呼吁二十国集团（G20）成员加快发展和应用人工智能以促进经济增长，并扩大数据中心等基础设施建设为 AI 产业提供支撑。黄仁勋在美国为 G20 成员于北卡罗来纳州举办的科技活动上发言，正值 G20 相关部长级会议期间，英伟达持续推动各国加大 AI 算力基建投入。",
              "time": "9月2日消息",
              "link": "https://www.ithome.com/0/997/665.htm",
              "source": "IT之家",
              "tags": [
                "行业观点",
                "算力基建"
              ]
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 发布 Muse Spark 1.3：编程工具调用与 Token 用量双降",
              "summary": "9月3日消息，Meta 发布编程与智能体模型 Muse Spark 1.3，重点改进长周期 Agent 与编程任务，可在同一长对话中并行处理多个工作流、主动补充上下文并修正计划。Meta 内部测试显示，与 1.2 相比，常见编程工作流中工具调用减少约 20%、Token 用量减少约 25%。模型已上线 Muse Code 与 Meta Model API，后续将推出开放权重版本。",
              "time": "9月3日消息",
              "link": "https://news.qq.com/rain/a/20260903A03KWI00",
              "source": "腾讯新闻",
              "tags": [
                "模型发布",
                "智能体",
                "编程"
              ]
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
              "title": "阿里更新 Qwen3.8-Max-0902，前端编程榜单升至全球第一",
              "summary": "9月2日，阿里巴巴发布旗舰模型 Qwen3.8-Max-0902，继续采用 2.4 万亿参数架构与 100 万 Token 上下文，通过针对编程与专业办公（Cowork）的专项后训练，强化多步推理、工具调用与端到端应用生成。在 CodeArena 前端编程（WebDev）榜单得分升至 1691 分、跃居全球第一，超过 Claude Opus 5 的 1688 分。模型已上线千问 AI 平台并开放 API。",
              "time": "9月2日消息",
              "link": "https://www.36kr.com/newsflashes/3965668250492424",
              "source": "36氪",
              "tags": [
                "模型发布",
                "编程"
              ]
            },
            {
              "title": "阿里云企业级 Agent 协作平台“万有无界”开启公测",
              "summary": "9月2日消息，据阿里云官方消息，旗下企业级人与 Agent 协作平台“万有无界”正式开启公测，企业与个人用户均可通过官网注册体验。该平台支持多智能体协作与编排，面向企业 Agent 应用提供协同底座，是阿里云在智能体应用层的进一步布局。",
              "time": "9月2日消息",
              "link": "https://www.ithome.com/0/997/434.htm",
              "source": "IT之家",
              "tags": [
                "Agent平台",
                "企业服务"
              ]
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包工作上新：支持多 Agents 并行与 Mac“操作电脑”",
              "summary": "9月2日，字节旗下 AI 办公产品“豆包工作”上线“多 Agents 并行”功能：主 Agent 先拆解任务，再分派多个垂直子 Agent 并行推进、由主 Agent 汇总，不同子 Agent 可分别交付 Word、PPT、HTML 等产物；Mac 版新增“操作电脑”功能，无需 MCP、API、插件或 CLI，即可通过视觉理解识别界面并点击输入，扩展复杂任务处理与场景覆盖。",
              "time": "9月2日消息",
              "link": "https://www.36kr.com/newsflashes/3965973169413641",
              "source": "36氪",
              "tags": [
                "Agent",
                "AI办公"
              ]
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
              "title": "腾讯 WorkBuddy 开放平台上线，全面开放 Agent 基座能力",
              "summary": "9月2日，腾讯 WorkBuddy 宣布开放平台正式上线，首批引入超百家生态伙伴，面向智能硬件、行业应用与开发者开放底层 Agent 能力，支持技能、专家与连接器的开发管理。现场发布 Plaud、Rokid、影石、科大讯飞等联名的 9 款智能硬件；30 余个行业应用同步接入，覆盖金融、法律、医疗、教育、公益等 20 多个领域。",
              "time": "9月2日消息",
              "link": "https://finance.sina.com.cn/tech/shenji/2026-09-02/doc-iniqmfta2991763.shtml",
              "source": "新浪财经",
              "tags": [
                "Agent平台",
                "生态开放"
              ]
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米 18 Fold“中折叠”官宣定档 9 月 7 日，首发玄戒 O3 与 MiMo 端侧大模型",
              "summary": "9月2日，雷军官宣小米首款“中折叠”旗舰小米 18 Fold，定档 9 月 7 日晚 7 点发布，是小米首次将折叠屏纳入数字系列。新机首发搭载自研玄戒 O3 AI 旗舰 SoC 与全新澎湃 OS 4，并内置 Xiaomi MiMo 端侧大模型，NPU 为其全面重构与适配。",
              "time": "9月2日消息",
              "link": "https://m.techweb.com.cn/article/2026-09-02/2978721.shtml",
              "source": "TechWeb",
              "tags": [
                "手机",
                "自研芯片",
                "端侧大模型"
              ]
            },
            {
              "title": "小米将首秀 IFA 2026：18 Fold 全球首展，机器人 CyberOne 海外首亮",
              "summary": "9月2日消息，小米将于当地时间 9 月 4 日首次参展德国柏林 IFA 2026，以超 3300 平方米展台、380 余款产品带来“人车家全生态”海外最大规模展示；首款中折叠旗舰小米 18 Fold 真机全球首秀，小米机器人 CyberOne 同步首次在海外展出，米家品牌与大家电等产品正式规模化进入欧洲。",
              "time": "9月2日消息",
              "link": "https://finance.sina.com.cn/jjxw/2026-09-02/doc-iniqnaws2676519.shtml",
              "source": "新浪科技",
              "tags": [
                "IFA",
                "人车家全生态",
                "机器人"
              ]
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱天猫开卖 GLM Coding Plan：个人版月付 118 元起，团队 598 元",
              "summary": "9月2日，智谱在天猫开设官方旗舰店售卖 GLM Coding Plan 订阅套餐：个人版 Lite 118 元/月、Pro 538 元/月、Max 1078 元/月，团队版 598 元/席（2 席起购），支持按月/季/年购买；套餐基于 GLM-5.3，适配 ZCode、Claude Code、Codex 等 20 余款编程智能体工具，店铺主体为智谱华章。价格较年初已大幅上调，Pro 档月费为原来的 3.6 倍。",
              "time": "9月2日消息",
              "link": "https://www.jiemian.com/article/15044937.html",
              "source": "界面新闻",
              "tags": [
                "商业化",
                "AI编程"
              ]
            }
          ]
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "Kimi API 已原生支持 Codex 与 Claude Code",
              "summary": "9月2日，月之暗面宣布 Kimi API 现已原生支持 OpenAI 的 Responses API 格式与 Anthropic 的 Messages API 格式。使用 Codex 或 Claude Code 的用户无需额外转换格式或本地代理，即可通过自定义模型提供商直连 kimi-k3、kimi-k2.7-code-highspeed、kimi-k2.7-code、kimi-k2.6 等模型，满足在主流编程智能体工具中接入 Kimi 模型的需求。",
              "time": "9月2日消息",
              "link": "https://finance.sina.com.cn/jjxw/2026-09-02/doc-iniqmwqu7583864.shtml",
              "source": "新浪财经",
              "tags": [
                "API",
                "编程",
                "生态兼容"
              ]
            },
            {
              "title": "消息称月之暗面秘密递交港股 A1 文件，启动 IPO 流程",
              "summary": "9月2日晚间，据晚点 LatePost 报道，月之暗面本周已以保密形式向港交所递交 A1 文件，正式启动港股 IPO 流程；同时被传以约 500 亿美元投前估值推进新一轮融资，或为上市前最后一轮。月之暗面回应称对市场传闻不予置评、暂无可以披露的信息。今年 7 月其刚完成超 35 亿美元 F 轮融资，投后估值 350 亿美元。",
              "time": "9月2日消息",
              "link": "https://wallstreetcn.com/articles/3780927",
              "source": "华尔街见闻",
              "tags": [
                "IPO",
                "融资"
              ]
            }
          ]
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
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax 成内地投资者新宠，8 月港股通净买入超阿里腾讯",
                  "summary": "8月，内地投资者通过港股通净买入 AI 模型开发商 MiniMax 约 106 亿港元，买入规模超过阿里巴巴和腾讯，使其成为南向资金当月最青睐的港股，反映内地资金对中国新一代 AI 模型企业的强烈兴趣。自 8 月 6 日 MiniMax 被纳入港股通以来，南向投资者已累计持有其约 9.7% 股份。",
                  "time": "9月2日消息",
                  "link": "https://www.36kr.com/newsflashes/3965792689036548",
                  "source": "36氪",
                  "tags": [
                    "资本市场",
                    "AI模型"
                  ]
                }
              ]
            },
            {
              "title": "博通",
              "news": [
                {
                  "title": "博通 Q3 营收同比增 86%，AI 半导体收入大增 221%",
                  "summary": "博通发布 2026 财年第三财季财报：营收 295.91 亿美元，同比增 86%；AI 半导体收入达 167 亿美元，同比增 221%、环比增 54%，为主要增长引擎，预计第四财季营收约 348 亿美元、AI 半导体增至 217 亿美元。CEO 陈福阳在电话会上还预测，Anthropic、OpenAI 将超越谷歌，成为其 AI ASIC 业务前两大客户。",
                  "time": "9月3日消息",
                  "link": "https://finance.sina.com.cn/jjxw/2026-09-03/doc-iniqnyah2327539.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "AI芯片",
                    "财报"
                  ]
                }
              ]
            },
            {
              "title": "戴尔",
              "news": [
                {
                  "title": "戴尔上调全年指引，AI 服务器在手订单达 950 亿美元",
                  "summary": "戴尔发布 2027 财年第二财季业绩：营收 469.7 亿美元，同比增 58%；AI 服务器当季确认收入 164 亿美元，期末在手积压订单达 950 亿美元创纪录，公司称销售线索规模仍是在手订单的数倍。戴尔将全年营收指引上调至 1920 亿美元，AI 优化服务器全年营收指引上调至 740 亿美元。",
                  "time": "9月2日消息",
                  "link": "https://finance.sina.com.cn/stock/hkstock/ggscyd/2026-09-02/doc-iniqkqvk3176222.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "AI服务器",
                    "财报"
                  ]
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
              "title": "元点机器人",
              "news": [
                {
                  "title": "元点机器人发布万元级人形机器人 Bridge“小桥”",
                  "summary": "9月2日，元点机器人发布个人高性能人形机器人 Zeroth Bridge（中文名“小桥”），定位万元级具身智能本体，整机约 12 公斤，极客版预售到手价 8888 元。搭载 FlowMimic 运动控制算法，配套 Tele_Bridge 可将人体动作实时映射至机器人、实现毫秒级精细遥操；软硬件开放架构便于接入外部模型，并发布开源生态 OpenBridge。",
                  "time": "9月2日消息",
                  "link": "https://news.qq.com/rain/a/20260902A0D6XB00",
                  "source": "腾讯新闻",
                  "tags": [
                    "人形机器人",
                    "开源"
                  ]
                }
              ]
            },
            {
              "title": "自变量",
              "news": [
                {
                  "title": "自变量发布 TwinDEX，纯无本体数据驱动灵巧操作",
                  "summary": "9月2日，自变量机器人发布灵巧操作手系统 TwinDEX，由可穿戴无本体数据采集端与机器人三指九自由度灵巧手组成，采集端与执行端在自由度、关节轴、连杆比例上保持一致以减少运动学偏差。行业首次实现“纯无本体数据、零真机遥操数据”驱动灵巧操作，仅用数百条无本体数据后训练即可部署执行整套化学实验任务，数据采集效率为真机遥操的 5.3 倍。",
                  "time": "9月2日消息",
                  "link": "https://www.chinastarmarket.cn/detail/2472195",
                  "source": "科创板日报",
                  "tags": [
                    "具身智能",
                    "灵巧手"
                  ]
                }
              ]
            },
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "“人形机器人第一股”宇树科技股价腰斩",
                  "summary": "9月2日，A 股“人形机器人第一股”宇树科技股价跌超 4%，盘中首次跌破 550 元/股，较上市首日最高 1100 元/股接近腰斩，市值大幅缩水。创始人王兴兴回应称，希望投资者认同公司长期价值后再做投资决定。上市仅两周的宇树科技遭遇剧烈回调，市场对人形机器人板块估值分歧加大。",
                  "time": "9月2日消息",
                  "link": "https://finance.sina.com.cn/jjxw/2026-09-02/doc-iniqmfsy1314362.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "人形机器人",
                    "资本市场"
                  ]
                }
              ]
            },
            {
              "title": "中国具身智能Tier1产业联盟",
              "news": [
                {
                  "title": "星源智与灵心巧手发起“中国具身智能 Tier1 产业联盟”成立",
                  "summary": "9月2日消息，据界面新闻报道，由星源智与灵心巧手共同发起的“中国具身智能 Tier1 产业联盟”正式成立，联合奥比中光、法奥机器人、福莱新材、禾赛科技等产业链企业，覆盖核心零部件、整机与传感器等环节，目标协同推进具身智能供应链建设与标准落地。",
                  "time": "9月2日消息",
                  "link": "https://www.ithome.com/0/997/543.htm",
                  "source": "IT之家",
                  "tags": [
                    "产业联盟",
                    "供应链"
                  ]
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
              "title": "Cognition",
              "news": [
                {
                  "title": "Cognition 据悉拟融资约 10 亿美元，估值达 470 亿美元",
                  "summary": "据彭博等多家外媒报道，AI 编程公司 Cognition（Devin 开发商）正接近完成新一轮约 10 亿美元融资，估值升至约 470 亿美元，三个月前其估值约为 260 亿美元，投资者认购兴趣一度接近 100 亿美元。该公司年化收入已超 9 亿美元，Devin 客户包括花旗、高盛等。",
                  "time": "9月2日消息",
                  "link": "https://wallstreetcn.com/articles/3780873",
                  "source": "华尔街见闻",
                  "tags": [
                    "AI编程",
                    "融资"
                  ]
                }
              ]
            },
            {
              "title": "天工机器人",
              "news": [
                {
                  "title": "天工机器人完成数亿元融资",
                  "summary": "近日，北京天下先智创机器人技术（天工机器人）完成数亿元融资，由初芯基金领投，经纬创投、合肥国资等跟投。募集资金将用于分拣类机器人扩大生产规模、基于人形的分拣机器人研发与商用化迭代，以及海外市场业务拓展。",
                  "time": "9月2日消息",
                  "link": "https://finance.sina.com.cn/jjxw/2026-09-02/doc-iniqmfta2939901.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "机器人",
                    "融资"
                  ]
                }
              ]
            },
            {
              "title": "鼎犀智创Pre-A",
              "news": [
                {
                  "title": "AI 新材料公司鼎犀智创完成数亿元 Pre-A 轮融资",
                  "summary": "AI 新材料研发公司鼎犀智创（Rhinovate）完成数亿元 Pre-A 轮融资，由鼎晖百孚领投，九合创投、龙芯创投、顺禧基金、中关村资本等跟投。资金将用于 RhinoMat 材料科学基础大模型及底层技术研发、多场景可编排 AI 智能体与自主进化实验室体系建设，以及碳基高性能材料放大验证。",
                  "time": "9月2日消息",
                  "link": "https://www.stcn.com/article/detail/4168676.html",
                  "source": "证券时报",
                  "tags": [
                    "AI+材料",
                    "融资"
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
              "title": "普华永道",
              "news": [
                {
                  "title": "普华永道：2050 年全球数据中心累计投资或达 31.6 万亿美元",
                  "summary": "普华永道发布《2026—2050 全球数据中心展望》：基准情景下 2026 至 2050 年全球数据中心资本支出累计将达 31.6 万亿美元，若 AI 普及快于预期或接近 50 万亿美元，其中美国约占 15.1 万亿。报告指出需每 4 至 6 年更换的服务器、GPU、存储与网络设备是投资主体，电力供应是首要约束。",
                  "time": "9月2日消息",
                  "link": "https://www.cls.cn/detail/2472402",
                  "source": "财联社",
                  "tags": [
                    "算力",
                    "数据中心"
                  ]
                }
              ]
            },
            {
              "title": "欧盟",
              "news": [
                {
                  "title": "欧盟首次依据《人工智能法案》向 30 余家企业发信息请求",
                  "summary": "9月2日，欧盟委员会宣布已依据《人工智能法案》向全球 30 余家在 AI 行业运营的企业发送信息调查请求，重点涉及模型安全与版权合规，系该法案执法权自 8 月 2 日生效以来首次正式执法行动。若企业提交不正确、不完整或具误导性回复，最高可能面临 1500 万欧元或全球年营业额 3% 的罚款。",
                  "time": "9月2日消息",
                  "link": "https://news.cgtn.com/news/2026-09-02/EU-questions-dozens-of-companies-using-new-AI-powers-1Q6scGfYfJe/p.html",
                  "source": "CGTN",
                  "tags": [
                    "AI监管",
                    "欧盟"
                  ]
                }
              ]
            },
            {
              "title": "中央网信办",
              "news": [
                {
                  "title": "中央网信办整治 AI 应用乱象：清理信息 561 万余条",
                  "summary": "中央网信办通报“清朗·整治 AI 应用乱象”专项行动第二阶段进展：各平台累计清理违法违规信息 561 万余条，查处账号 4.9 万余个，处置违规网站和应用 2400 余个。整治重点包括 AI 制作虚假灾害与救援画面、AI“魔改”经典作品、生成暴力低俗内容，以及用 AI“托管”账号从事网络水军活动。",
                  "time": "9月2日消息",
                  "link": "https://www2.xinhuanet.com/20260902/18c592b5edcd406a8dc5e32665f58963/c.html",
                  "source": "新华网",
                  "tags": [
                    "AI治理",
                    "监管"
                  ]
                }
              ]
            },
            {
              "title": "加州SB574",
              "news": [
                {
                  "title": "加州通过律师使用生成式 AI 法案，禁止委托 AI 执业",
                  "summary": "美国加州议会两院通过 SB 574 法案，首次在州级层面为律师使用生成式 AI 设立专门规则：律师不得将法律执业“委托”给生成式 AI，仍需对工具使用方式与输出内容承担专业责任；引用法律依据时必须核验真实、准确且未被断章取义。法案已送州长加文·纽森等待签署或否决。",
                  "time": "9月2日消息",
                  "link": "https://sd34.senate.ca.gov/news/reuters-california-senate-passes-bill-regulating-lawyers-use-ai",
                  "source": "路透社",
                  "tags": [
                    "AI立法",
                    "法律AI"
                  ]
                }
              ]
            },
            {
              "title": "AI调用价格跳水",
              "news": [
                {
                  "title": "AI 调用价格大跳水，Token 支出指数自峰值近腰斩",
                  "summary": "9月2日消息，行业数据显示 AI 调用单价大幅回落。Silicon Data 编制的 LLM Token 支出指数跌至 97 美分、创历史新低，较今年夏季高点近乎腰斩。Kimi 等国产高性价比模型快速突围，低价倒逼 OpenAI 等海外厂商跟进降价，叠加生产成本走低，进一步拉低全行业使用价格；降价利好用户，但大幅压缩 AI 企业利润。",
                  "time": "9月2日消息",
                  "link": "https://www.cls.cn/detail/2471814",
                  "source": "财联社",
                  "tags": [
                    "模型价格",
                    "行业趋势"
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
