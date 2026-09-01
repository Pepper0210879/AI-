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
  "date": "2026-09-01",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 广告业务年化营收达 10 亿美元，开放更多海外市场",
              "summary": "8 月 31 日消息，OpenAI 宣布 ChatGPT Ads 年化营收已达 10 亿美元，并从 8 月 31 日起向印度、欧洲、中东和北非广告主开放 OpenAI Ads Manager 自助投放。约 4 个月前披露的试点年化营收仅为当前规模的十分之一，广告业务成为订阅和 API 之外的收入来源，也让 OpenAI 直接进入 Google 与 Meta 主导的数字广告市场。",
              "link": "https://www.jiemian.com/article/15037090.html",
              "tags": [
                "广告",
                "商业化"
              ],
              "source": "界面新闻",
              "time": "8月31日消息"
            },
            {
              "title": "OpenAI 购入数万台苹果 Mac，训练操作计算机的 AI 智能体",
              "summary": "8 月 31 日消息，据 The Information 报道，OpenAI 近几个月购入数万台苹果 Mac mini 和 Mac Studio（配备大容量统一内存），用于训练能够操作计算机的 AI 系统。Anthropic 也从亚马逊 AWS 租用 Mac mini，一些初创公司甚至开始构建仅限 Mac 的云服务。",
              "link": "https://www.21jingji.com/article/20260831/herald/e23e9f5c23a2b32398b6153627b908d9.html",
              "tags": [
                "智能体",
                "算力"
              ],
              "source": "21经济网",
              "time": "8月31日消息"
            },
            {
              "title": "Codex 活跃用户增至 2500 万，OpenAI 再次重置付费用户额度",
              "summary": "8 月 31 日消息，OpenAI Codex 活跃用户已突破 2500 万（约 10 天前刚突破 2000 万），OpenAI 再次重置付费用户额度。",
              "link": "https://finance.sina.com.cn/stock/t/2026-08-31/doc-iniqepev4740520.shtml",
              "tags": [
                "Codex",
                "AI编程"
              ],
              "source": "新浪财经",
              "time": "8月31日消息"
            },
            {
              "title": "苹果诉 OpenAI：员工曾查看电源转换器电路图，申请加快取证",
              "summary": "8 月 31 日消息，苹果在对 OpenAI 的诉讼中称，OpenAI 员工曾查看其电源转换器电路图，已申请加快取证。本案争点从员工离职前后资料流转，延伸到其在新公司设备上的访问和模型训练行为。",
              "link": "https://awtmt.com/articles/3780770",
              "tags": [
                "诉讼",
                "苹果"
              ],
              "source": "华尔街见闻",
              "time": "8月31日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 与英伟达支持的 Lambda 签 350 亿美元云协议",
              "summary": "8 月 31 日消息，据华尔街日报援引知情人士，Anthropic 已与英伟达支持的云计算商 Lambda 签署价值 350 亿美元的云计算协议。英伟达持有 Hut 8 得州数据中心租约并作为 Lambda 投资方，再次凸显其在帮助 Anthropic 等非投资级企业获取算力资源方面的关键作用。",
              "link": "https://www.jiemian.com/article/15037569.html",
              "tags": [
                "算力",
                "云服务"
              ],
              "source": "界面新闻",
              "time": "8月31日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": []
        },
        {
          "name": "xAI",
          "news": []
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达向联发科投资 35 亿美元，合作扩展 NVLink Fusion 生态",
              "summary": "8 月 31 日消息，英伟达宣布向联发科投资 35 亿美元，为联发科 39 亿美元海外可转债发行的一部分，Alphabet 亦参与认购。双方扩大技术合作：联发科将允许客户用英伟达 NVLink Fusion 技术设计定制 AI 芯片，并直连英伟达大型计算系统。",
              "link": "https://www.jiemian.com/article/15036981.html",
              "tags": [
                "芯片",
                "投资"
              ],
              "source": "界面新闻",
              "time": "8月31日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Instagram 推出全新 AI 个人资料标签，整治 AI 虚假账号",
              "summary": "8 月 31 日消息，Instagram 推出全新 AI 个人资料标签，用于整治 AI 虚假账号。创作者若不主动披露 AI 虚构身份，平台算法将不再将其内容推荐给非粉丝用户；平台自动标记算法出现偏差时，用户可以联系客服申诉。",
              "link": "https://tech.ifeng.com/c/8w32cmzTeWE",
              "tags": [
                "平台治理",
                "Instagram"
              ],
              "source": "凤凰科技",
              "time": "8月31日消息"
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
              "title": "千问创作上线 Agent Teams，覆盖专业视频制作场景",
              "summary": "8 月 31 日消息，千问创作推出 Agent Teams 功能，接入 Wan3.0，已面向全部用户开放。该功能将多 Agent 协同机制引入专业视频创作全流程，用户提出创作想法即可召集不同分工的专家 Agent 协作完成视频创作。",
              "link": "https://tech.ifeng.com/c/8w2SZ5SPVbw",
              "tags": [
                "Agent",
                "视频生成"
              ],
              "source": "凤凰科技",
              "time": "8月31日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "消息称字节上调豆包股价格至 17.02 美元，涨幅约 14.6%",
              "summary": "8 月 31 日消息，据新浪科技，字节跳动将豆包股价格从 6 月的 14.85 美元/股调整至 17.02 美元/股，涨幅约 14.6%，并增加豆包股发放，部分员工可达总包的 5% 左右；员工可选择把总包现金换成豆包股，满配比例因职级而异。",
              "link": "https://finance.sina.com.cn/tech/shenji/2026-08-31/doc-iniqetnx9062589.shtml",
              "tags": [
                "字节",
                "股权激励"
              ],
              "source": "新浪财经",
              "time": "8月31日消息"
            },
            {
              "title": "豆包辟谣「开水煮拖鞋」传闻：博主故意引导摆拍",
              "summary": "8 月 31 日消息，针对多平台出现的「豆包建议煮拖鞋」视频，豆包公关负责人辟谣称系博主故意引导模型按错误内容回复并摆拍制作玩梗视频，官方已联系首发博主核实。豆包实际会提醒用户不要用开水烫、蒸煮等偏方修复拖鞋。",
              "link": "https://tech.ifeng.com/c/8w2Wqb5SARQ",
              "tags": [
                "豆包",
                "辟谣"
              ],
              "source": "凤凰科技",
              "time": "8月31日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek 开源 V4 家族首个多模态模型，权重与最小推理代码同步放出",
              "summary": "8 月 31 日消息，DeepSeek 在 Hugging Face 开源 DeepSeek-V4-Flash-Vision-Exp，为 V4 家族首个实验性多模态模型，基于 V4-Flash 加入视觉模块继续训练。仓库采用 MIT 许可证，含 48 个权重分片与最小 PyTorch 推理实现，官方称纯文本 Agent 任务表现与 V4-Flash-0731 大致相当。",
              "link": "https://www.zhidx.com/p/589405.html",
              "tags": [
                "多模态",
                "开源"
              ],
              "source": "机器之心",
              "time": "8月31日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯混元 Hy4 preview 调用激增，WorkBuddy 已紧急扩容",
              "summary": "8 月 31 日消息，腾讯混元称，Hy4 preview 自 8 月 28 日在 WorkBuddy 首发接入以来，凭借 Agent 能力显著提升，上线首日任务队列即出现排队。公司已针对 Hy4 preview 推理集群紧急扩容并动态调配资源，但高端算力总量有限，高峰时段仍不排除排队。",
              "link": "https://www.stcn.com/article/detail/4165032.html",
              "tags": [
                "混元",
                "Agent"
              ],
              "source": "证券时报",
              "time": "8月31日消息"
            },
            {
              "title": "微信支付 AI 专属卡接入 DeepSeek Harness 和 OpenClaw",
              "summary": "8 月 31 日消息，微信支付宣布 AI 专属卡已支持 DeepSeek Harness 和 OpenClaw，用户可在两个 Agent 内完成从对话推荐、下单到支付的全流程，并付费调用 Skillhub 上 700 余个 Pay Skill。支付仍需用户在手机端二次确认，AI 专属卡与微信支付主账户隔离。",
              "link": "https://finance.sina.cn/tech/2026-08-31/detail-iniqfqsq4919410.d.html",
              "tags": [
                "支付",
                "Agent"
              ],
              "source": "新浪财经",
              "time": "8月31日消息"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米平板 9 Pro Max 玄戒 O3 跑分曝光：单核 3474，多核 13229",
              "summary": "8 月 31 日消息，搭载小米自研玄戒 O3 处理器的小米平板 9 Pro Max 现身 GeekBench，单核 3474、多核 13229，配备 16GB 内存与 Android 17，预计 9 月发布。玄戒 O3 采用 10 核全大核架构，首发 16 核 Mali-G2-Ultra-NX GPU。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-08-31/doc-iniqfkkp7204851.shtml",
              "tags": [
                "芯片",
                "玄戒"
              ],
              "source": "新浪财经",
              "time": "8月31日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱上半年营收 9.54 亿元，同比增长 399.7%",
              "summary": "8 月 31 日消息，智谱发布 2026 年半年报，上半年营收 9.54 亿元，同比增长 399.7%；经调整期内净亏损 19.64 亿元。开放平台及 API 业务收入约 8.25 亿元，同比增长 2735.7%；截至 8 月 31 日 MaaS 平台年化收入 ARR 达 16 亿美元（周度口径 20 亿美元）。",
              "link": "https://finance.sina.com.cn/roll/2026-08-31/doc-iniqfkkm4642139.shtml",
              "tags": [
                "财报",
                "MaaS"
              ],
              "source": "新浪财经",
              "time": "8月31日消息"
            }
          ]
        },
        {
          "name": "月之暗面",
          "news": []
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "华为上半年营收 4678.19 亿元，研发费用创历史新高",
              "summary": "8 月 31 日消息，华为投资控股披露 2026 年半年报，上半年营收 4678.19 亿元，营收保持同比增长；归母净利润 234.28 亿元，较上年同期明显下降。研发费用 1213.82 亿元创历史新高，同比增幅超四分之一，研发支出增长与存储等元器件成本上升共同压低了利润。",
              "link": "https://www.jiemian.com/article/15036100.html",
              "tags": [
                "财报",
                "华为"
              ],
              "source": "界面新闻",
              "time": "8月31日消息"
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
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax H3 Max 上线开放平台，观众开始「导演」24 小时 AI 直播",
                  "summary": "8 月 31 日消息，MiniMax 宣布将 H3 Max 768P/480P 版本接入开放平台和 MiniMax Design，开发者正把模型接入 Twitch 直播流，由聊天室观众输入 Prompt 持续生成新画面和声音。H3 开源三周多以来下载量超 2400 万次，社区产生超 300 个公开衍生模型。",
                  "link": "https://finance.jrj.com.cn/2026/08/31143758298879.shtml",
                  "tags": [
                    "视频生成",
                    "开源"
                  ],
                  "source": "金融界",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "快手",
              "news": [
                {
                  "title": "国家人工智能基金向北京可灵注入现金资本 14 亿元",
                  "summary": "8 月 31 日消息，快手公告称，北京可灵分别与国家人工智能基金及正大机器人订立增资加入协议，国家人工智能基金向北京可灵注入现金资本 14 亿元，正大机器人注资约 1314.5 万美元，分别占扩大后注册资本约 1.14% 和 0.11%。",
                  "link": "https://finance.sina.com.cn/wm/2026-08-31/doc-iniqfqsm7161463.shtml",
                  "tags": [
                    "可灵",
                    "融资"
                  ],
                  "source": "新浪财经",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "海信",
              "news": [
                {
                  "title": "海信发布 AI 操作系统 JUOS，9 月起覆盖电视与投影终端",
                  "summary": "8 月 31 日消息，海信发布面向家庭场景的 AI 操作系统 JUOS，以「超级小聚」作为 AI 入口，支持以台词、人物等碎片线索搜片，也可在观看时询问角色、剧情和体育规则。升级将从 9 月起推送给海信 U、E、A 系列电视、激光电视及 Vidda 电视和投影首批机型。",
                  "link": "https://m.ithome.com/html/996499.htm",
                  "tags": [
                    "智能家居",
                    "海信"
                  ],
                  "source": "IT之家",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "长鑫",
              "news": [
                {
                  "title": "消息称长鑫存储开始试产 HBM3E 内存，有望数周内大规模量产",
                  "summary": "8 月 31 日消息，据 The Information 报道，长鑫存储已启动 HBM3E 内存风险试产，有望数周内实现大规模量产。",
                  "link": "https://finance.sina.com.cn/stock/t/2026-08-31/doc-iniqfqsq4997077.shtml",
                  "tags": [
                    "存储",
                    "HBM"
                  ],
                  "source": "新浪财经",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "SK海力士",
              "news": [
                {
                  "title": "SK 海力士考虑将部分 HBM 基础裸片交由英特尔生产",
                  "summary": "8 月 31 日消息，据财联社，SK 海力士正考虑将部分 HBM 基础裸片交由英特尔生产，借此减少对台积电晶圆代工的依赖，计划从第七代 HBM 芯片 HBM4E 开始。分析指出，HBM4 时代台积电基础裸片价格比 SK 海力士自产高出 3 到 4 倍。",
                  "link": "https://www.cls.cn/detail/2469243",
                  "tags": [
                    "HBM",
                    "代工"
                  ],
                  "source": "财联社",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "OpenClaw",
              "news": [
                {
                  "title": "OpenClaw 2.0 发布：重做浏览器端，加入多人共享会话",
                  "summary": "8 月 31 日消息，OpenClaw 2.0 正式发布，重做浏览器端并加入多人共享会话，允许团队成员加入进行中的任务或带上下文完成交接，还新增可固定到仪表盘的交互结果、凭据请求与一次性授权等。升级涉及 OpenProse 插件移除与模型路由迁移两项破坏性变更。",
                  "link": "https://www.pingwest.com/w/316931",
                  "tags": [
                    "开源",
                    "Agent"
                  ],
                  "source": "品玩",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "范式",
              "news": [
                {
                  "title": "范式与华为达成昇腾 950 算力战略合作，成首批拥抱国产最高端算力的 AI 企业",
                  "summary": "8 月 31 日消息，范式创始人戴文渊与华为常务董事杨超斌举行高层战略座谈，双方达成基于昇腾 950 芯片的算力战略合作，范式将成为首批拥抱国产最高端算力的 AI 企业，增强其面向金融、政务等重点行业的端到端交付能力。",
                  "link": "https://www.qbitai.com/2026/08/481919.html",
                  "tags": [
                    "算力",
                    "华为"
                  ],
                  "source": "量子位",
                  "time": "8月31日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "L3/L4国标",
              "news": [
                {
                  "title": "我国 L3/L4 自动驾驶强制国标正式发布，2027 年 7 月 1 日实施",
                  "summary": "8 月 31 日消息，全国标准信息公共服务平台显示，国家标准《智能网联汽车自动驾驶系统安全要求》（GB 44721-2026）正式文件出炉，为国内首部 L3/L4 智能网联汽车自动驾驶系统安全要求强制性国标，将于 2027 年 7 月 1 日实施。",
                  "link": "https://tech.ifeng.com/c/8w2Ws6pL4hx",
                  "tags": [
                    "自动驾驶",
                    "政策"
                  ],
                  "source": "凤凰科技",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "滴滴",
              "news": [
                {
                  "title": "滴滴自动驾驶新一代 Robotaxi R2 开启载客测试，性能座舱全面升级",
                  "summary": "8 月 31 日消息，滴滴自动驾驶新一代 Robotaxi R2 正式开启无人载客测试服务，北京、广州部分示范区域内用户可呼单体验。R2 为滴滴与广汽埃安联合打造的专属车型，采用滴滴 L4 全栈软硬件方案，搭载 33 个传感器，具备全球化适配能力。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-08-31/doc-iniqexup7815957.shtml",
                  "tags": [
                    "Robotaxi",
                    "滴滴"
                  ],
                  "source": "新浪财经",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "Momenta",
              "news": [
                {
                  "title": "Momenta 上半年营收 16 亿元，同比增长 76%",
                  "summary": "8 月 31 日消息，Momenta 发布 2026 年上半年财报，营收 16.0 亿元，同比增长 76%；经调整净亏损同比大幅收窄约 97%。搭载 Momenta 系统的量产车辆规模已超 110 万台，交付超 110 款量产车型，累计定点车型超 230 款。",
                  "link": "https://www.cls.cn/detail/2469682",
                  "tags": [
                    "财报",
                    "智驾"
                  ],
                  "source": "财联社",
                  "time": "8月31日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "宇树",
              "news": [
                {
                  "title": "宇树科技股价接近腰斩：较上市首日开盘价跌近一半",
                  "summary": "8 月 31 日消息，宇树科技收报 564.90 元/股，跌幅 3.44%，相较于上市首日开盘价 1100 元/股，股价接近「腰斩」。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-08-31/doc-iniqexut7376378.shtml",
                  "tags": [
                    "股价",
                    "宇树"
                  ],
                  "source": "新浪财经",
                  "time": "8月31日消息"
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
              "title": "燧原科技",
              "news": [
                {
                  "title": "燧原科技科创板 IPO 发行价定为 142.18 元/股，9 月 2 日申购",
                  "summary": "8 月 31 日消息，燧原科技披露科创板 IPO 发行价格为 142.18 元/股，发行数量 4303.5173 万股，预计募集资金总额 61.19 亿元，网上网下申购日为 9 月 2 日。（注：昨日已报道其获证监会注册，今日为发行价与申购进展更新）",
                  "link": "https://www.cnstock.com/commonDetail/783678",
                  "tags": [
                    "IPO",
                    "芯片"
                  ],
                  "source": "证券时报网",
                  "time": "8月31日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "AI客服新国标",
              "news": [
                {
                  "title": "AI 客服「转人工」难？新国标今日起实施",
                  "summary": "9 月 1 日消息，中国首个聚焦人工客服与智能客服协同机制的国家标准《顾客联络服务人工与智能客户服务协同要求》9 月 1 日正式实施。标准要求智能客服与人工切换需提供便捷入口并保障衔接顺畅，涉及价格、折扣、退款、赔偿等事项的最终确认应由人工客服或规范化流程完成。",
                  "link": "http://sc.people.com.cn/n2/2026/0831/c345167-41682246.html",
                  "tags": [
                    "政策",
                    "客服"
                  ],
                  "source": "人民网",
                  "time": "9月1日消息"
                }
              ]
            },
            {
              "title": "巴克莱",
              "news": [
                {
                  "title": "巴克莱：AI 公司每赚 100 美元，近 40 美元流向云巨头",
                  "summary": "8 月 31 日消息，巴克莱分析师测算，AI 公司每赚 100 美元收入，近 40 美元流向亚马逊、微软、谷歌等云巨头。分析师认为实际利润率或高于报告估算，但随着前沿模型竞争加剧与算力供给增加，利润率预计将逐步回落。",
                  "link": "https://m.jrj.com.cn/madapter/stock/2026/08/30132858291575.shtml",
                  "tags": [
                    "行业趋势",
                    "云计算"
                  ],
                  "source": "金融界",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "抖音AI标识",
              "news": [
                {
                  "title": "抖音公布 AI 内容标识进展，主动声明入口前置到投稿页",
                  "summary": "8 月 31 日消息，抖音黑板报公布《人工智能生成合成内容标识办法》实施一年以来的治理进展。平台已上线 AI 内容显式标识、元数据标识读写能力和检测模型，并将「自主声明」前置到投稿一级页面，对未声明内容弹窗提醒并新增「未进行 AI 标识」投诉分类。",
                  "link": "https://finance.sina.com.cn/wm/2026-08-31/doc-iniqfqsp8758781.shtml",
                  "tags": [
                    "AI治理",
                    "抖音"
                  ],
                  "source": "新浪财经",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "陈沁",
              "news": [
                {
                  "title": "陈沁：AI 正在拆散岗位分工，经验者接手更多年轻人原有任务",
                  "summary": "7月30日消息，据中新社，上海科技大学 CEISD 发布中国版 C-O*NET 数据库与 AI 就业报告，项目首席数据科学家陈沁指出，AI 冲击的对象是任务而非职业：信息录入、标准问答等可被大模型独立完成的任务被拆解重组，客服等岗位招聘规模下降但职责未同步消失；复合型闭环岗位成为就业市场最大新增量（约 2100 万个岗位，占总招聘岗位 18.6%），26.6% 的高暴露岗位面临替代压力，Java 工程师等现场判断型岗位技术含金量反而上升。",
                  "link": "https://www.sh.chinanews.com.cn/kjjy/2026-07-30/148114.shtml",
                  "tags": [
                    "AI就业",
                    "观点"
                  ],
                  "source": "中新社上海",
                  "time": "7月30日消息"
                }
              ]
            },
            {
              "title": "美国法官AI",
              "news": [
                {
                  "title": "美国法官用 AI 起草裁决现虚构内容，上诉法院考虑更换承办法官",
                  "summary": "8 月 31 日消息，据路透社，美国密西西比州总检察长请求第五巡回上诉法院推翻一项涉 DEI 裁决，并在案件发回地区法院时更换承办法官。地区法官 Henry Wingate 承认其助理曾用 Perplexity 协助起草命令，文件中出现不存在的人名、权威依据和陈述，他归因于「人工监督失误」。",
                  "link": "https://www.courthousenews.com/ai-hallucinations-derail-debate-over-mississippis-dei-ban-in-schools/",
                  "tags": [
                    "AI治理",
                    "司法"
                  ],
                  "source": "Courthouse News",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "AIGC后西游记",
              "news": [
                {
                  "title": "国内首部 AIGC 长剧《后西游记》开播，首部「边审边播」剧集",
                  "summary": "8 月 31 日消息，国内首部 AIGC 长剧《后西游记》8 月 31 日 18:00 在芒果 TV 开播，20:00 登陆湖南卫视，采取「边审边播」模式，首播「花果山篇」共 5 集、每集 40 分钟，讲述「西游二代」补取真经的新冒险。",
                  "link": "https://m.jiemian.com/article/15035500.html",
                  "tags": [
                    "AIGC",
                    "内容创作"
                  ],
                  "source": "界面新闻",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "华为小米荣耀调价",
              "news": [
                {
                  "title": "华为、小米、荣耀手机 9 月 1 日集体调价，多家旗舰机下调计划量",
                  "summary": "9 月 1 日消息，华为、小米、荣耀手机今日集体调价。消息称由于涨价情况「非常离谱」，多家手机厂商旗舰机下调 30%-50% 计划量，上游元器件成本压力传导至终端市场。",
                  "link": "https://k.sina.com.cn/article_1826017320_6cd6d02802001wbl8.html",
                  "tags": [
                    "手机",
                    "市场"
                  ],
                  "source": "新浪科技",
                  "time": "9月1日消息"
                }
              ]
            },
            {
              "title": "晚点",
              "news": [
                {
                  "title": "晚点：有用户、有收入，AI 应用却不是好生意",
                  "summary": "9 月 1 日消息，晚点 LatePost 发文指出，独立 AI 应用同时面对三个问题：产品多久会被模型吞掉、增长能否带来利润、用户入口在谁手里。找到需求、获得用户、做出收入都不足以让独立 AI 公司长期成立，独立应用正试图逃离「模型吞噬」。",
                  "link": "https://news.qq.com/rain/a/20260901A006XY00",
                  "tags": [
                    "行业观察",
                    "AI应用"
                  ],
                  "source": "晚点LatePost",
                  "time": "9月1日消息"
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
          "date": "2026-08-31",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Ox Alpha",
              "score": "15.7T tokens",
              "change": "+36%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.3T tokens",
              "change": "+6%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "9.14T tokens",
              "change": "+8%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "7.79T tokens",
              "change": "+59%"
            },
            {
              "model": "Hy3",
              "score": "6.66T tokens",
              "change": "+19%"
            },
            {
              "model": "GLM 5.3 Flash",
              "score": "6.16T tokens",
              "change": "—"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "5.33T tokens",
              "change": "+12%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.2T tokens",
              "change": "+5%"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "3.95T tokens",
              "change": "+120%"
            },
            {
              "model": "Hy4 preview",
              "score": "3.07T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.2",
              "score": "2.99T tokens",
              "change": "+12%"
            },
            {
              "model": "MiniMax M3 (free)",
              "score": "2.57T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "1.77T tokens",
              "change": "+4%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.7T tokens",
              "change": "+29%"
            },
            {
              "model": "Kimi K3",
              "score": "1.57T tokens",
              "change": "+19%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.52T tokens",
              "change": "+11%"
            },
            {
              "model": "Claude Opus 5",
              "score": "1.46T tokens",
              "change": "—"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.35T tokens",
              "change": "+16%"
            },
            {
              "model": "GLM 5.3",
              "score": "1.33T tokens",
              "change": "+171%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.2T tokens",
              "change": "+11%"
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
