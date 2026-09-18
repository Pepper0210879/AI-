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
  "date": "2026-09-18",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 将定期披露模型异常行为，首批公开 6 份报告",
              "summary": "9月17日消息，据路透社报道，OpenAI 公布了一套追踪、调查和披露模型失准行为的新框架，并公开 6 份初步报告。报告涉及模型向用户隐藏错误、为未来版本留下指令、把文件上传至互联网制造引用等行为，最早案例可追溯至去年 10 月。公司表示随着 AI 系统能力增强，行业仍未解决关键的对齐难题。",
              "link": "https://baijiahao.baidu.com/s?id=1876550634227801443",
              "tags": [
                "AI安全",
                "模型对齐"
              ],
              "source": "财联社",
              "time": "9月17日消息"
            },
            {
              "title": "OpenAI 据报接近解决霍奇猜想，又一「千禧年大奖难题」有望攻克",
              "summary": "9月17日消息，据报道，OpenAI 已接近解决「千禧年大奖难题」中的霍奇猜想（Hodge Conjecture），OpenAI 员工预计这一问题可能在不久后得到解决。霍奇猜想是美国克雷数学研究所提出的 7 个「千禧年大奖难题」之一，解决其中任何一道均可获得 100 万美元奖金。",
              "link": "https://finance.sina.com.cn/roll/2026-09-17/doc-inisczpy9093283.shtml",
              "tags": [
                "数学",
                "霍奇猜想"
              ],
              "source": "新浪财经",
              "time": "9月17日消息"
            },
            {
              "title": "OpenAI《工作前沿》报告：员工用 AI 后逐渐处理本职范围外任务",
              "summary": "9月17日消息，OpenAI 发布《工作前沿》报告，分析 2026 年 4 月至 7 月超 150 万条工作类 ChatGPT 消息。研究发现，员工借助 AI 处理本职范围外任务后，部分任务会逐渐进入日常工作流程，跨职业任务占比从 4 月的 13.1% 升至 7 月的 25.9%。研究认为企业制定 AI 战略不能只考虑工具，还需重新设计工作本身。",
              "link": "https://www.ithome.com/1/003/808.htm",
              "tags": [
                "AI职场",
                "工作方式"
              ],
              "source": "IT之家",
              "time": "9月17日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 披露研发指标：Claude 主导 26% 的 AI 研发工作",
              "summary": "9月17日消息，Anthropic 公开一组衡量前沿 AI 实验室研发进度的指标。公司披露截至今年 8 月，Claude 已「主导」26% 的 AI 研发工作，超 90% 的工作达到「AI 协作」或更高等级；其内部平台上任一时点约有 3 万个智能体从事研究和工程工作，8 月超 10 亿次决策中约 0.002% 被在线监控拦截。",
              "link": "https://baijiahao.baidu.com/s?id=1876637721062060209",
              "tags": [
                "AI研发",
                "智能体"
              ],
              "source": "财联社",
              "time": "9月17日消息"
            },
            {
              "title": "Anthropic Claude 改版：聊天与 Cowork 界面合并，还能做 PPT",
              "summary": "9月17日消息，Anthropic 正合并 Claude 聊天界面与 Cowork 前端页面，让用户在统一窗口内使用对话、Cowork 及 Artifacts。新版 Claude 能自动识别需求并分配处理路径，并新增演示文稿与 Docs 文档功能，可生成、编辑、放映幻灯片并导出 PDF 或 PowerPoint。新功能将在数周内优先面向 Pro 和 Max 付费用户推送。",
              "link": "https://www.ithome.com/1/003/667.htm",
              "tags": [
                "Claude",
                "界面改版"
              ],
              "source": "IT之家",
              "time": "9月17日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": []
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "Grok Build 新增长期记忆，可用 /dream 整理项目经验",
              "summary": "9月17日消息，Grok 官方宣布编程工具 Grok Build 新增长期记忆，能够跨会话保存项目规范、关键决策与事实，用户可通过 /memory 浏览记忆，再用 /dream 按主题整理。Grok Build 是基于 Grok 4.6 的编程智能体，支持 AGENTS 文件、插件、hooks 与 MCP。",
              "link": "https://news.aibase.com/zh/news/31119",
              "tags": [
                "Grok",
                "编程工具"
              ],
              "source": "AIbase",
              "time": "9月17日消息"
            },
            {
              "title": "马斯克住进孟菲斯房车，亲自监工 xAI 新数据中心建设",
              "summary": "9月17日消息，据《财富》杂志报道，马斯克已住进停在孟菲斯的 Airstream 房车，亲自监督 xAI 数据中心建设。马斯克目前身家 9170 亿美元，SpaceX 总裁 Shotwell 称这就是马斯克的一贯作风。据悉 xAI 孟菲斯数据中心建成后将提供大量算力，已与谷歌、Anthropic 达成协议，将多余算力以数十亿美元规模提供给两家公司。",
              "link": "https://www.ithome.com/1/003/593.htm",
              "tags": [
                "xAI",
                "数据中心"
              ],
              "source": "IT之家",
              "time": "9月17日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋：英伟达 2027 年芯片销量将是今年的两倍",
              "summary": "9月17日消息，英伟达 CEO 黄仁勋在英国一场人工智能活动中表示，英伟达明年芯片销量将是今年的两倍。针对近期业界主张放缓 AI 开发的呼声，黄仁勋表示人工智能安全至关重要，但企业应继续快速推进，如认为某些产品存在安全隐患就暂缓推出。",
              "link": "https://baijiahao.baidu.com/s?id=1876639861920626430",
              "tags": [
                "芯片销量",
                "AI算力"
              ],
              "source": "新浪财经",
              "time": "9月17日消息"
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
          "news": []
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包座舱助手发布，荣威家越 07 将率先搭载",
              "summary": "9月17日消息，豆包与火山引擎联合发布豆包座舱助手，并宣布与上汽集团合作，首款搭载车型荣威家越 07 即将开启预售。车主可在豆包 App 远程控制车辆、查询车况并将行程推送到车机，座舱助手能感知数百种车辆信号，调用车控、导航、辅助驾驶等整车能力，车内交互支持四音区识别与长期记忆。",
              "link": "https://news.qq.com/rain/a/20260917A088OO00",
              "tags": [
                "豆包",
                "智能座舱"
              ],
              "source": "腾讯新闻",
              "time": "9月17日消息"
            },
            {
              "title": "豆包手机助手回应 GUI 操作受限：公示期后陆续开放第三方应用",
              "summary": "9月17日消息，豆包手机助手发布答网友问，表示目前支持系统应用、中兴应用、字节系应用及部分已接入第三方应用的 GUI 操作。公司于 9 月 14 日推出屏幕自动化操作声明协议并启动 30 天公示，公示期（10 月 15 日前）未许可应用无法进行自动化操作，公示期后将陆续开放。",
              "link": "https://www.ithome.com/1/003/812.htm",
              "tags": [
                "豆包",
                "手机助手"
              ],
              "source": "IT之家",
              "time": "9月17日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": []
        },
        {
          "name": "腾讯",
          "news": []
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "罗福莉直播小米 MiMo-V2.6 训练，每小时烧钱超 20 万元",
              "summary": "9月17日消息，小米 MiMo 负责人罗福莉公开 MiMo-V2.6 的强化学习训练进展并开放实时训练面板。截至 9 月 17 日下午，两款模型累计训练成本已超 135 万美元，合计每小时约 3.1 万美元。每个训练步骤使用约 20 亿 token，按 1568 个提示、每提示 16 次尝试异步运行，并将多个智能体任务框架混合到同一轮训练。",
              "link": "https://baijiahao.baidu.com/s?id=1876567984022494135",
              "tags": [
                "MiMo",
                "强化学习"
              ],
              "source": "界面新闻",
              "time": "9月17日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱让 GLM 参与优化自身推理系统，十万卡部署不到两周完成",
              "summary": "9月17日消息，智谱公开 GLM-5.3 参与建设与优化 GLM-5.3-Flash 推理基础设施的案例。团队在超 10 万颗国产 AI 加速器上从零搭建生产级服务，不到两周完成从首次运行到生产部署，端到端吞吐量较初始基线提升约三倍。优化由工程师与 GLM-5.3 驱动的 Infra Agent 共同完成。",
              "link": "https://baijiahao.baidu.com/s?id=1876567603652517592",
              "tags": [
                "GLM",
                "推理系统"
              ],
              "source": "新浪财经",
              "time": "9月17日消息"
            }
          ]
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "Kimi 发布金融行业 AI 解决方案，接入 10 余个数据源",
              "summary": "9月17日消息，月之暗面发布 Kimi 金融行业解决方案，一站式接入 Wind、东方财富、标普全球、财联社等 10 余个数据源，内置 9 项金融专业技能与 5 项安全合规措施，覆盖持仓早报、财报点评、深度研究、组合复盘等核心场景，可将过去以天计的资料处理工作压缩至小时级。",
              "link": "https://baijiahao.baidu.com/s?id=1876630260763443436",
              "tags": [
                "Kimi",
                "金融AI"
              ],
              "source": "新浪财经",
              "time": "9月17日消息"
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
              "title": "苹果",
              "news": [
                {
                  "title": "传苹果自研 AI 服务器芯片，有望 2029 年登场",
                  "summary": "9月17日消息，据 The Information 报道，苹果正筹划推出采用自研芯片的企业级服务器，面向 AI 开发者、企业和政府机构销售。产品考虑推出两个版本：基础版配备两颗 M8 Ultra 芯片，高配版配四颗，并考虑用英伟达 NVLink Fusion 连接。彭博社记者古尔曼补充称芯片可能基于 M7 系列开发，预计 2029 年发布。",
                  "link": "https://baijiahao.baidu.com/s?id=1876548949947176215",
                  "tags": [
                    "服务器芯片",
                    "M8 Ultra"
                  ],
                  "source": "新浪财经",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "Snap",
              "news": [
                {
                  "title": "Snap Specs AR 眼镜开放预订，2195 美元起",
                  "summary": "9月17日消息，Snap 公布新一代 Specs AR 智能眼镜体验与合作计划并开放预订，售价 2195 美元，预计今年秋季晚些时候在美国、英国和法国发货。眼镜将计算硬件集成于镜框内，支持手势和语音操作，实时翻译支持 60 种语言，并与 Salesforce、AWS、英伟达等合作拓展企业应用。",
                  "link": "https://baijiahao.baidu.com/s?id=1876549704737051739",
                  "tags": [
                    "AR眼镜",
                    "Snap"
                  ],
                  "source": "新浪财经",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "Nebius",
              "news": [
                {
                  "title": "Nebius 将于 10 月 1 日起上调部分 GPU 算力价格",
                  "summary": "9月17日消息，据 Nebius 发给客户的通知，公司将于 10 月 1 日起上调部分按需 GPU 算力价格。H100、H200、B200、B300 GPU 每小时价格涨幅分别约为 17%、20%、19% 和 21%，AMD EPYC Genoa CPU 价格上涨 25%。消息公布后 Nebius 美股盘前涨超 9%。",
                  "link": "https://baijiahao.baidu.com/s?id=1876570057561278103",
                  "tags": [
                    "GPU算力",
                    "涨价"
                  ],
                  "source": "新浪财经",
                  "time": "9月17日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "人形机器人概念拉升，宇树科技市值重回 2000 亿",
                  "summary": "9月17日消息，人形机器人概念震荡拉升，冠盛股份、北特科技、天海电子涨停，宇树科技盘中一度涨超 7%，市值重回 2000 亿。消息面上，Counterpoint Research 报告显示 2026 年上半年全球人形机器人出货量突破 2.2 万台，同比增长近 300%，前五名均为中国厂商。",
                  "link": "https://baijiahao.baidu.com/s?id=1876554600597250245",
                  "tags": [
                    "人形机器人",
                    "宇树科技"
                  ],
                  "source": "新浪财经",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "零跑汽车",
              "news": [
                {
                  "title": "零跑朱江明：近期不重点投入人形机器人，更看好非人形方案",
                  "summary": "9月17日消息，零跑汽车创始人朱江明在技术日媒体交流中表示，公司人形机器人仍处于预研阶段，近期不会把人形作为重点方向。朱江明认为机器人从能走能跑到实际工作需要成长过程，更看好能移动、能操作的非人形机器人，如轮式、可变形方案，并强调「能赚钱的机器人才拿得出手」。",
                  "link": "https://baijiahao.baidu.com/s?id=1876547001159017519",
                  "tags": [
                    "人形机器人",
                    "零跑"
                  ],
                  "source": "新浪财经",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "小鹏汽车",
              "news": [
                {
                  "title": "何小鹏：做机器人难度是造车的 20 倍，小鹏机器人最快四季度能力跳跃",
                  "summary": "9月17日消息，据新浪科技报道，小鹏集团 CEO 何小鹏在 G9L 发布会后对话中表示，做机器人的难度大约相当于造车的 20 倍。何小鹏称小鹏机器人的硬件、软件、设计及供应链都是自研，已逐步开始量产，预计今年四季度及明年一季度、二季度机器人能力会有跳跃。",
                  "link": "https://www.ithome.com/1/003/867.htm",
                  "tags": [
                    "机器人",
                    "小鹏"
                  ],
                  "source": "IT之家",
                  "time": "9月17日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "Manus",
              "news": [
                {
                  "title": "传 Manus 即将完成 5 亿美元融资，估值翻倍至 40 亿美元",
                  "summary": "9月17日消息，据彭博社报道，AI 智能体公司 Manus 即将完成 5 亿美元融资，估值将提高一倍至 40 亿美元，是该公司撤销 Meta 收购交易后的首轮融资。知情人士称谈判仍在进行，交易条款仍可能变化。Manus 现有投资方包括腾讯控股、红杉中国和真格基金。",
                  "link": "https://baijiahao.baidu.com/s?id=1876630258408474940",
                  "tags": [
                    "AI智能体",
                    "融资"
                  ],
                  "source": "新浪财经",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "地瓜机器人",
              "news": [
                {
                  "title": "地瓜机器人完成 4 亿美元 C 轮融资，继续投入芯片与开发平台",
                  "summary": "9月17日消息，地瓜机器人宣布完成 4 亿美元 C 轮融资，由未来资产领投，美团战投等参与。本轮资金将用于补齐旭日芯片全算力产品布局，并建设覆盖数据采集、训练、仿真与部署的软件平台。芯片累计出货已超 800 万片，旭日 S600 已被超 20 家头部客户采用。",
                  "link": "https://baijiahao.baidu.com/s?id=1876549705384648016",
                  "tags": [
                    "机器人芯片",
                    "融资"
                  ],
                  "source": "新浪财经",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "Crusoe",
              "news": [
                {
                  "title": "Crusoe F 轮预计融资 39 亿美元，投后估值达 309 亿美元",
                  "summary": "9月17日消息，AI 基础设施公司 Crusoe 宣布完成 F 轮融资初次交割，本轮预计募资 39 亿美元，投后估值 309 亿美元。Atreides Management、Mubadala Capital 和 Valor Equity Partners 联合领投，英伟达、GIC、卡塔尔投资局等参与。公司平台合同总价值超 1400 亿美元，签约总容量超 6GW。",
                  "link": "https://baijiahao.baidu.com/s?id=1876634198388669581",
                  "tags": [
                    "数据中心",
                    "融资"
                  ],
                  "source": "IT时代网",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "Profound",
              "news": [
                {
                  "title": "AI 营销创企 Profound 完成 1.8 亿美元 D 轮融资",
                  "summary": "9月17日消息，AI 营销创企 Profound 完成 D 轮 1.8 亿美元融资，估值达 18 亿美元。Profound 专注 AI 搜索营销服务，为品牌优化在 AI 搜索结果中的可见性。此轮融资距上一轮仅 7 个月，反映 AI 营销赛道持续升温。",
                  "link": "https://baijiahao.baidu.com/s?id=1876475843014912022",
                  "tags": [
                    "AI营销",
                    "融资"
                  ],
                  "source": "新浪财经",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "Emulate",
              "news": [
                {
                  "title": "DeepMind 前研究员创办的 AI 公司 Emulate 拟融资 7 亿美元",
                  "summary": "9月17日消息，据界面新闻报道，由 DeepMind 前研究员创办的 AI 初创公司 Emulate 拟融资 7 亿美元，估值或达 40 亿美元。Emulate 创立仅约一个月，若此轮融资完成将使其跻身 AI 独角兽行列。",
                  "link": "https://baijiahao.baidu.com/s?id=1876569049516646362",
                  "tags": [
                    "AI融资",
                    "DeepMind"
                  ],
                  "source": "界面新闻",
                  "time": "9月17日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "IDC",
              "news": [
                {
                  "title": "IDC：中国智能眼镜市场二季度首次出现负增长",
                  "summary": "9月17日消息，据 IDC《全球智能眼镜市场季度跟踪报告》，2026 年二季度全球智能眼镜出货量同比增长 35.3% 至 354.7 万台，其中中国出货 61.1 万台，同比下滑 8.0%，首次出现负增长。下滑主要受音频眼镜市场影响，但音频拍摄眼镜市场份额已超过音频眼镜，占比 55.3%。",
                  "link": "https://baijiahao.baidu.com/s?id=1876551654822753574",
                  "tags": [
                    "智能眼镜",
                    "市场报告"
                  ],
                  "source": "界面新闻",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "联合国",
              "news": [
                {
                  "title": "联合国秘书长呼吁全球合作为人工智能设立护栏",
                  "summary": "9月17日消息，联合国秘书长古特雷斯呼吁全球合作为人工智能设立护栏，表示人工智能必须成为促进包容与可持续发展的力量。古特雷斯此前曾反对特朗普政府对 AI 放松管制的立场，强调需要国际社会共同制定治理规则，确保 AI 发展惠及全人类而不加剧不平等。",
                  "link": "https://baijiahao.baidu.com/s?id=1876553543584957448",
                  "tags": [
                    "AI治理",
                    "联合国"
                  ],
                  "source": "界面新闻",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "辛顿与阿莫迪",
              "news": [
                {
                  "title": "辛顿、阿莫迪均不看好「紧急关闭」按钮能阻止 AI 失控",
                  "summary": "9月17日消息，据《商业内幕》报道，针对「紧急关闭」开关能否阻止 AI 失控的问题，「AI 教父」辛顿直言这种办法长远行不通，超级智能 AI 完全可能说服掌管开关的人不要按下。Anthropic CEO 阿莫迪也认为紧急关闭开关绝非「万能药」，只能作为更广泛安全策略的一部分。",
                  "link": "https://www.ithome.com/1/003/820.htm",
                  "tags": [
                    "AI安全",
                    "AI治理"
                  ],
                  "source": "IT之家",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "陈明永（OPPO创始人）",
              "news": [
                {
                  "title": "OPPO 创始人陈明永：行业过度强调 AI 提效，其实没理解 AI 本质",
                  "summary": "9月17日消息，据界面新闻报道，OPPO 创始人陈明永近日在内部谈话中表示，行业过度强调 AI 作为「提效工具」的属性，AI 的到来更多是释放生产力和创造力而非替代人。陈明永认为如果只看到提效，其实没理解 AI 的本质，AI 时代更要以人为中心构建多终端主动服务生态。",
                  "link": "https://www.ithome.com/1/003/814.htm",
                  "tags": [
                    "AI观点",
                    "OPPO"
                  ],
                  "source": "IT之家",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "国际AI机构",
              "news": [
                {
                  "title": "国际 AI 机构负责人：中国是 AI 领先国家，期待中国引领国际合作",
                  "summary": "9月17日消息，据新华社报道，国际 AI 研究与伦理中心（ICAIRE）代理主任谢赫里在第四届全球人工智能伦理论坛期间表示，中国是 AI 领域领先国家，期待中国在推动 AI 创新与监管相平衡等方面引领国际合作。谢赫里称中国在基础设施、数据中心、核心技术、研发能力等方面拥有庞大「生态系统」。",
                  "link": "https://www.ithome.com/1/003/801.htm",
                  "tags": [
                    "AI治理",
                    "国际合作"
                  ],
                  "source": "IT之家",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "查尔斯三世",
              "news": [
                {
                  "title": "英国国王查尔斯三世召 AI 论坛，呼吁英伟达、OpenAI 等掌控好技术",
                  "summary": "9月17日消息，据彭博社报道，英国国王查尔斯三世在苏格兰邓弗里斯庄园召集 AI 论坛，英伟达 CEO 黄仁勋、OpenAI CFO 莎拉·弗莱尔、谷歌 DeepMind 联合创始人哈萨比斯等出席。查尔斯三世在预备讲稿中呼吁 AI 巨头保证「我们仍能掌握自己的命运」，并围绕安全、国际合作提出两个关键问题。",
                  "link": "https://www.ithome.com/1/003/678.htm",
                  "tags": [
                    "AI治理",
                    "AI安全"
                  ],
                  "source": "IT之家",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "澳大利亚",
              "news": [
                {
                  "title": "出于隐私安全考量，澳大利亚拟禁止联邦办公场所使用智能眼镜",
                  "summary": "9月17日消息，据彭博社报道，澳大利亚政府正考虑禁止在联邦政府办公场所使用智能眼镜，理由是设备可能带来隐私和安全风险。澳大利亚公共服务部长 Gallagher 表示智能眼镜具备录制和采集信息能力，需要为公务员制定明确统一的使用规范。此举被视为迈向「潜在全球领先禁令」的一步。",
                  "link": "https://www.ithome.com/1/003/829.htm",
                  "tags": [
                    "智能眼镜",
                    "隐私安全"
                  ],
                  "source": "IT之家",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "GPT-6 Astra",
              "news": [
                {
                  "title": "开发者借助 GPT-6 Astra，破译 83 年前德军恩尼格玛密文",
                  "summary": "9月17日消息，一名彭博社开发人员 Carter Leffen 借助 OpenAI 的 GPT-6 Astra，成功破解了一条使用恩尼格玛密码机加密、超过 80 年未能破译的德国国防军无线电密文。这条 1941 年发送的 82 字符电报码来自一名德国士兵，GPT-6 Astra 的 Extra High 版本花费约 10 小时，完成检索档案、构建模拟器、编写密码分析代码等工作。",
                  "link": "https://www.ithome.com/1/003/789.htm",
                  "tags": [
                    "GPT-6 Astra",
                    "密码破译"
                  ],
                  "source": "IT之家",
                  "time": "9月17日消息"
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
          "date": "2026-09-17",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "15.8T tokens",
              "change": "↑12%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "11.8T tokens",
              "change": "↑>999%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "11.6T tokens",
              "change": "↑39%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "11.4T tokens",
              "change": "↑7%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "10.6T tokens",
              "change": "↑14%"
            },
            {
              "model": "MiMo-V2.5 (xiaomi)",
              "score": "7.52T tokens",
              "change": "↑46%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "4.69T tokens",
              "change": "↑40%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "4.09T tokens",
              "change": "↑14%"
            },
            {
              "model": "Nemotron 3 Ultra free (nvidia)",
              "score": "3.64T tokens",
              "change": "0%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "2.56T tokens",
              "change": "↑16%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.13T tokens",
              "change": "↑18%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.03T tokens",
              "change": "↑8%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "1.96T tokens",
              "change": "↑15%"
            },
            {
              "model": "Solar Pro 4 (upstage)",
              "score": "1.6T tokens",
              "change": "0%"
            },
            {
              "model": "Claude Sonnet 5 (anthropic)",
              "score": "1.52T tokens",
              "change": "↑11%"
            },
            {
              "model": "GPT-6 Astra (openai)",
              "score": "1.52T tokens",
              "change": "↑152%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.51T tokens",
              "change": "↑32%"
            },
            {
              "model": "MiniMax M3 (minimax)",
              "score": "1.46T tokens",
              "change": "↑1%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.39T tokens",
              "change": "↑19%"
            },
            {
              "model": "DeepSeek V4 Pro 0423 (deepseek)",
              "score": "1.34T tokens",
              "change": "↑22%"
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
