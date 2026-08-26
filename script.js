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
  "date": "2026-08-26",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 首款自研推理芯片 Jalapeño 性能首秀：每瓦吞吐达 GB300 的 1.7 倍",
              "summary": "8月25日，OpenAI 公布首款自研推理芯片 Jalapeño 的首批实测成绩：在 GPT-OSS、DeepSeek R1、Kimi K2.5 1T 三款模型推理基准中，每瓦 AI 工作量较英伟达 GB200/GB300 提升 1.5–1.9 倍、端到端延迟降低 1.7–3.6 倍，高交互场景性能达对方 2.1–4.1 倍。芯片由 OpenAI 与博通联合开发、台积电 3nm 代工，从设计到流片仅用 9 个月，计划年底前部署进自有算力，第二代已在深入研发中。",
              "link": "https://www.ithome.com/0/994/306.htm",
              "tags": [
                "自研芯片",
                "推理"
              ],
              "source": "IT之家",
              "time": "8月25日消息"
            },
            {
              "title": "曝 OpenAI 已预训练 Bel 模型：超 10T 参数，冲击通用人工智能",
              "summary": "8月26日消息，据 X 平台消息源爆料，OpenAI 已完成下一代预训练模型「Bel」，总参数量超 10T，是 Doug 模型的直接继任者，经强化学习后将成为 Astra 系列及 GPT-6 的基础模型，甚至可能是全球首个 AGI 门槛级基座模型。爆料称该进展令 Anthropic 感到算力压力，但消息尚未获 OpenAI 官方证实。",
              "link": "https://tech.ifeng.com/c/8vtcXUwmOUr",
              "tags": [
                "模型",
                "预训练"
              ],
              "source": "凤凰科技",
              "time": "8月26日消息"
            },
            {
              "title": "奥尔特曼承认高估 AI 普及速度：用户习惯是最大阻力",
              "summary": "8月25日消息，OpenAI CEO 萨姆·奥尔特曼在播客节目中承认，自己和其他 AI 支持者可能高估了 AI 普及速度，AI 要达到谷歌搜索或 iPhone 那样深入大众日常的程度仍需更长时间。他认为最大阻力来自用户习惯和经济惯性，人们很难迅速改用 Codex 等 AI 原生平台，并坦言「自己对时间表的判断太激进了」。",
              "link": "http://www.c114.net.cn/industry/115263.html",
              "tags": [
                "行业观点"
              ],
              "source": "C114",
              "time": "8月25日消息"
            },
            {
              "title": "OpenAI 恢复 ChatGPT Plus 的 Codex 和 Work 5 小时用量窗口",
              "summary": "8月25日，OpenAI 宣布自 8 月 26 日起恢复 ChatGPT Plus 订阅用户在 ChatGPT Work 与 Codex 上的 5 小时滚动用量窗口限制。Codex 与 ChatGPT 产品负责人 Tibo Sottiaux 表示，窗口限制可平滑计算负载、维持宽松的周额度，也能减少低频用户误耗整周配额。未来数月 Pro 两档订阅暂不启用该限制。",
              "link": "https://www.163.com/dy/article/L5621GTV0511BLFD.html",
              "tags": [
                "产品策略",
                "订阅"
              ],
              "source": "网易",
              "time": "8月25日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 冲击全球最大 IPO：AI 潜在市场超 30 万亿美元",
              "summary": "8月26日消息，Anthropic 拟向投资者披露 AI 潜在市场收入规模超 30 万亿美元（TAM），IPO 估值目标约 2 万亿美元，最高募资 1000 亿美元，将超越 SpaceX 成为史上最大 IPO，最快 9-10 月挂牌。此举凸显资本市场对 AI 巨头商业前景的重磅押注。",
              "link": "https://www.jiemian.com/article/14991015.html",
              "tags": [
                "IPO",
                "融资"
              ],
              "source": "界面新闻",
              "time": "8月26日消息"
            },
            {
              "title": "Anthropic 更新 Claude 记忆机制，打通 Cowork 与聊天记忆",
              "summary": "8月26日消息，Anthropic 宣布更新 Claude Cowork 与聊天功能之间的记忆机制，将两个系统的记忆功能打通、统一管理。Cowork 在云端执行任务时可访问 Claude 从聊天记录中记住的信息，Cowork 中产生的记忆也能在聊天中使用，无需反复解释背景。涉及敏感话题的记忆默认关闭，可手动开启。",
              "link": "https://www.ithome.com/0/994/295.htm",
              "tags": [
                "模型功能",
                "记忆"
              ],
              "source": "IT之家",
              "time": "8月26日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌推出法律行业版 Gemini Enterprise for Legal",
              "summary": "8月25日，谷歌扩展 Gemini Enterprise 平台，为律师和律所推出 Gemini Enterprise for Legal，提供合同审阅与修订、法律研究、监管扫描等预置能力，可通过 MCP 连接 iManage、Docusign 等系统。预览版首批律所包括 Cleary Gottlieb、Freshfields、Weil 等。谷歌强调客户数据不会用于训练其基础模型，此举将加剧科技巨头对法律行业 AI 市场的争夺。",
              "link": "https://www.jiemian.com/article/14993476.html",
              "tags": [
                "企业AI",
                "法律"
              ],
              "source": "界面新闻",
              "time": "8月25日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX AI 为 Grok Build 新增 Browser-Use 浏览器插件",
              "summary": "8月25日，SpaceX AI 为 Grok Build 新增 Browser-Use 浏览器插件，让 Grok 可调用真实浏览器（本机 Chrome 或隔离的 Browser Use 云端浏览器），实现浏览网页、抓取数据、填写表单、截屏及整套网页自动化工作流，并支持通过 uvx 在本地运行、调用本地 Chrome 时无需 API 密钥。",
              "link": "https://36kr.com/newsflashes/3954192334404741",
              "tags": [
                "产品功能",
                "浏览器"
              ],
              "source": "36氪",
              "time": "8月25日"
            },
            {
              "title": "马斯克：Grok 在 AI 竞赛中落后，称赞 Anthropic 领先",
              "summary": "8月25日消息，据知情人士透露，SpaceX 完成对 Cursor 600 亿美元收购当天，马斯克召开全员视频会议，承认 SpaceXAI 的 Grok 已落后于竞争对手、亟需追赶，称 AI 终将发展到人类无法掌控的程度，并要求团队抢在对手之前研发技术。马斯克同时称赞 Anthropic 领跑 AI 竞赛，并表示 SpaceX 会继续囤积算力。",
              "link": "https://tech.ifeng.com/c/8vslUTHXEys",
              "tags": [
                "行业竞争",
                "高管表态"
              ],
              "source": "凤凰科技",
              "time": "8月25日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达发布机器人计算机 Jetson Orin Nano 2，推理性能翻倍",
              "summary": "8月25日，英伟达推出 Jetson Orin Nano 2 机器人计算机，每秒 78 万亿次 AI 运算、8GB 内存、8 核 Arm CPU，推理性能为 Orin Nano Super 的 2 倍，15 瓦模式下功耗降低 40%。模块及开发者套件预计 2027 年上半年上市，将重新定义入门级边缘 AI。",
              "link": "https://awtmt.com/articles/3780277",
              "tags": [
                "边缘AI",
                "机器人"
              ],
              "source": "华尔街见闻",
              "time": "8月25日"
            },
            {
              "title": "SpaceXAI 大规模采用 NVIDIA Vera CPU，2027 年发射在轨 AI 系统",
              "summary": "当地时间8月24日，英伟达在 Hot Chips 大会宣布 SpaceXAI 将大规模采用其专为 AI 智能体打造的 Vera CPU，加速 Grok 及智能体工作流，并基于 Vera Rubin NVL72 部署在轨 AI 系统 Starmind，预计 2027 年四季度首次发射、2028 年大规模部署。马斯克表示未来 SpaceX 将完全基于英伟达系统构建 AI 服务。",
              "link": "https://nvidianews.nvidia.com/news/spacexai-adopts-nvidia-vera-cpu-to-accelerate-agentic-ai-at-massive-scale",
              "tags": [
                "算力",
                "太空计算"
              ],
              "source": "英伟达",
              "time": "当地时间8月24日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 计划数周内推出消费级 AI 智能体平台 Hatch",
              "summary": "8月25日消息，据 The Information 获得的内部文件，Meta 计划未来数周内推出面向消费者的 AI 智能体平台 Hatch，基于 OpenClaw 虚拟助理构建，预计 8 月底至 9 月初发布，采用分级订阅制、高级版月费最高 199.99 美元，可访问 DoorDash、Reddit、Outlook 等网站。Meta 还计划 10 月推出代号 Watermelon 的新一代 AI 大模型。",
              "link": "https://www.pingwest.com/w/316748",
              "tags": [
                "智能体",
                "产品发布"
              ],
              "source": "品玩",
              "time": "8月25日消息"
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
              "title": "阿里千问预告开源 Qwen3.8-Flash-Next，基于 Qwen4 架构",
              "summary": "8月25日消息，阿里千问预告基于下一代 Qwen4 架构构建的多模态 MoE 模型 Qwen3.8-Flash-Next 将于 8 月 26 日 23:00 在魔搭开源，并提供 FP8 版本。作为开源旗舰，该模型将为开发者带来新的多模态与推理能力。",
              "link": "https://tech.ifeng.com/c/8vt3hnzJKGO",
              "tags": [
                "开源",
                "多模态"
              ],
              "source": "凤凰科技",
              "time": "8月25日消息"
            },
            {
              "title": "阿里云 Token Plan 接入千问 App 及 PC 端，支持 Qwen3.8-Max",
              "summary": "8月25日，千问 App 与 PC 端上线阿里云 Token Plan 接入功能，用户绑定 API Key 后即可在「工作助理」中使用 Token Plan 订阅额度执行复杂任务，支持 Qwen3.8-Max 等模型，Token 实时从百炼账户扣除。该功能目前处于内测阶段。",
              "link": "https://www.stcn.com/article/detail/4115426.html",
              "tags": [
                "商业化",
                "API"
              ],
              "source": "证券时报",
              "time": "8月25日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "字节跳动正式发布 AI 办公产品「豆包工作」，与飞书深度打通",
              "summary": "8月25日，字节跳动正式发布面向生产力场景的全新 Agent 产品与品牌「豆包工作」。产品可围绕用户目标自主拆解任务、调用工具，支持文档、表格、PPT、图片、视频等生成与编辑，可操作虚拟桌面与浏览器，与飞书深度打通后可读取企业文档、会议纪要等上下文。电脑版已开放下载，即日起可免费领取 30 天订阅权益。",
              "link": "https://m.thepaper.cn/newsDetail_forward_33845235",
              "tags": [
                "Agent",
                "办公"
              ],
              "source": "澎湃新闻",
              "time": "8月25日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "英伟达 Vera Rubin 测试 DeepSeek-V4-PRO：每兆瓦吞吐达 GB300 的 30 倍",
              "summary": "当地时间8月24日，英伟达在 Hot Chips 2026 公布 Vera Rubin NVL72 系统测试数据：运行 DeepSeek-V4-PRO 1.6T 模型时，每兆瓦吞吐量为 GB300 的 30 倍，Token 成本降至 1/35。Vera Rubin 面向智能体 AI 设计，CPU、GPU、网络与推理加速器协同工作，进一步压低 AI 推理成本。",
              "link": "https://tech.ifeng.com/c/8vsAMMOHqNA",
              "tags": [
                "算力",
                "推理"
              ],
              "source": "凤凰科技",
              "time": "当地时间8月24日"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": []
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "雷军详解玄戒原型机：O100 高速 AI 演示终端与个人 AI 超级计算终端",
              "summary": "8月25日，小米创始人雷军发文详解搭载新一代玄戒芯片的两款原型机：专为端侧大模型打造的玄戒 O100 高速 AI 演示终端（实测推理 295 tokens/秒）与个人 AI 超级计算终端 AI Cube（整合 O3、O100、D100 三芯、80GB 统一内存）。按规划，玄戒 O3 将首发搭载小米 18 Fold，O100 与 D100 预计 2027 年商用。",
              "link": "https://news.qq.com/rain/a/20260825A07UD500",
              "tags": [
                "自研芯片",
                "端侧AI"
              ],
              "source": "腾讯新闻",
              "time": "8月25日"
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
          "news": [
            {
              "title": "余承东官宣华为三折叠 Mate XT2 定档 9 月 7 日，首发鸿蒙 7",
              "summary": "8月25日，华为终端 BG 董事长余承东官宣「HarmonyOS 7 | HUAWEI Mate XT 2 及全场景新品发布会」将于 9 月 7 日 14:30 举行，Mate XT 2 将首发搭载 HarmonyOS 7 正式版，华为首款阔直板手机 Pura X View 等新品同步亮相。华为三折叠手机全球累计发货量已突破 100 万台，IDC 数据显示华为以 60% 份额位居中国折叠屏市场第一。",
              "link": "https://news.qq.com/rain/a/20260825A06CTV00",
              "tags": [
                "产品发布",
                "折叠屏"
              ],
              "source": "腾讯新闻",
              "time": "8月25日"
            },
            {
              "title": "华为鸿蒙智家技术沟通会 8 月 26 日举行：人车家跨域互联",
              "summary": "8月25日消息，华为鸿蒙智家技术沟通会定于 8 月 26 日举行，聚焦人车家跨域互联。作为华为全场景智慧生活战略的一部分，鸿蒙智家整合 AI 大模型与鸿蒙生态设备，此次沟通会将进一步披露智能家居与 AI 协同的最新进展。",
              "link": "https://www.ithome.com/0/993/849.htm",
              "tags": [
                "智能家居",
                "鸿蒙"
              ],
              "source": "IT之家",
              "time": "8月25日消息"
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
                  "title": "苹果发布 M6 与 M5 Ultra 芯片及新 Mac mini/Mac Studio，国行 6999 元起",
                  "summary": "8月25日，苹果未开发布会直接上架首颗 2nm 芯片 M6 与四晶粒架构 M5 Ultra，以及新款 Mac mini 与 Mac Studio。M6 版 Mac mini 国行 6999 元起，AI 性能最高提升 4 倍；M5 Ultra 最高 36 核 CPU、80 核 GPU、512GB 统一内存，AI 峰值性能较 M3 Ultra 提升 4.3 倍。两款新品均主打端侧本地 AI，8 月 27 日国行开启预购，9 月 22 日发售。",
                  "link": "https://www.thepaper.cn/newsDetail_forward_33847475",
                  "tags": [
                    "芯片",
                    "端侧AI"
                  ],
                  "source": "澎湃新闻",
                  "time": "8月25日"
                },
                {
                  "title": "苹果 iOS 27 将加入 Siri AI，正式版发布后采用候补名单机制",
                  "summary": "8月25日消息，据 MacRumors 报道，苹果 iOS 27、iPadOS 27、macOS 27 都将加入 Siri AI 智能助理，正式版发布后预计采用候补名单机制、限制初期使用权限，并根据服务器负载动态调整等候时间。iOS 27 Beta 7 已加入等候名单相关机制，测试期间有用户等了一周左右才获资格。",
                  "link": "https://m.163.com/dy/article/KUURT8EK0511BLFD.html",
                  "tags": [
                    "Siri",
                    "智能助理"
                  ],
                  "source": "网易",
                  "time": "8月25日消息"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软 CEO 纳德拉：企业不能把 AI 思考能力外包给单一模型",
                  "summary": "8月25日，微软 CEO 萨提亚·纳德拉在 CNN 对话中表示，企业使用 AI 时不仅拥有「人力资本」，还会积累由提示词上下文、交互记录组成的「Token 资本」，这些知识应留在企业内部。他主张保留使用模型的元数据、把应用层与模型分开，避免被绑定单一模型或服务商，否则等于把自身思考外包，可能失去独立生存基础。",
                  "link": "https://www.163.com/dy/article/L5621JI80511BLFD.html",
                  "tags": [
                    "行业观点",
                    "企业AI"
                  ],
                  "source": "网易",
                  "time": "8月25日"
                }
              ]
            },
            {
              "title": "LinkedIn",
              "news": [
                {
                  "title": "LinkedIn「看起来像 AI 垃圾」按钮收效显著，相关内容浏览量下降四成",
                  "summary": "8月25日消息，LinkedIn 首席产品官 Hari Srinivasan 在社交媒体表示，「看起来像 AI 垃圾」反馈按钮上线不到一个月已有超 100 万用户使用。结合自动检测系统，被识别为低质 AI 内容的帖子浏览量较数周前下降约 40%。单次标记不会直接删帖，平台还会通过 Post Analytics 通知向发布者反馈。",
                  "link": "https://www.ithome.com/0/993/873.htm",
                  "tags": [
                    "内容治理",
                    "AI垃圾"
                  ],
                  "source": "IT之家",
                  "time": "8月25日消息"
                }
              ]
            },
            {
              "title": "Arm",
              "news": [
                {
                  "title": "Arm 披露 36 年来首颗自研芯片 AGI CPU：136 核、1000 亿晶体管",
                  "summary": "8月25日，Arm 在 Hot Chips 2026 上披露面向智能体 AI 的 AGI CPU 细节，这是其成立 36 年来首颗自研量产芯片。芯片基于第三代 Neoverse V3 核心、台积电 3nm 工艺，最多 136 核、1000 亿晶体管，支持 6TB 内存与 96 条 PCIe Gen6，TDP 300W，主攻词元调度、编排等通用计算任务，直接对标英伟达 Vera CPU。",
                  "link": "https://news.qq.com/rain/a/20260825A057MO00",
                  "tags": [
                    "自研芯片",
                    "数据中心"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月25日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "道路交通安全法",
              "news": [
                {
                  "title": "道交法修订草案：自动驾驶激活状态违法由车企担责",
                  "summary": "8月25日，道路交通安全法修订草案提请十四届全国人大常委会初次审议，首次设「自动驾驶汽车特别规定」专章：车辆在自动驾驶功能激活状态下发生道路交通安全违法行为的，由生产企业或进口企业接受处理；未激活或仅具辅助驾驶功能时，仍按普通汽车规则管理。草案还涉及「盲驾」、电动自行车限速等治理问题。",
                  "link": "https://m.thepaper.cn/newsDetail_forward_33846773",
                  "tags": [
                    "政策",
                    "自动驾驶"
                  ],
                  "source": "澎湃新闻",
                  "time": "8月25日"
                }
              ]
            },
            {
              "title": "小鹏",
              "news": [
                {
                  "title": "小鹏第二代 VLA 630 版完成首次重大升级，G9L 全球首发搭载",
                  "summary": "8月25日，小鹏汽车宣布第二代 VLA 630 版完成首次模型重大升级：端侧模型参数量提高 3.5 倍、达行业主流 VLA 模型的 15 倍，端到端响应速度提升 300%，主要改善辅助驾驶的安全博弈和减速操作，由 G9L 全球首发搭载。小鹏将于 8 月 27 日举行「物理 AI 分享暨第二代 VLA 全新版本体验日」。",
                  "link": "https://finance.sina.com.cn/stock/relnews/hk/2026-08-25/doc-inippewq9732022.shtml",
                  "tags": [
                    "VLA",
                    "智能驾驶"
                  ],
                  "source": "新浪财经",
                  "time": "8月25日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "天工",
              "news": [
                {
                  "title": "天工机器人百米竞速跑出 8.86 秒，再刷新人形机器人纪录",
                  "summary": "8月25日，第二届世界人形机器人运动会大型组 100 米复赛，北京人形机器人创新中心的天工机器人跑出 8.86 秒，刷新其开幕式上创下的 9.39 秒纪录，再次创造人形机器人百米竞速历史最好成绩。",
                  "link": "https://news.sina.com.cn/s/2026-08-25/doc-inippvuq2252825.shtml",
                  "tags": [
                    "人形机器人",
                    "运动会"
                  ],
                  "source": "新浪新闻",
                  "time": "8月25日"
                }
              ]
            },
            {
              "title": "智元",
              "news": [
                {
                  "title": "智元 OmniHand 灵巧手获人形机器人运动会 7 金 4 银 3 铜",
                  "summary": "8月26日消息，智元子公司临界点宣布其 OmniHand 灵巧手在 2026 世界人形机器人运动会 8 个灵巧手专项中全部进入决赛，最终斩获 7 金、4 银、3 铜，其中 3 个项目采用全自主操作完成。OmniHand 整机重 510 克、16 个自由度，累计出货超 2 万台，沉淀超 5 万小时真实世界数据。",
                  "link": "https://www.jfdaily.com.cn/staticsg/res/html/web/newsDetail.html?id=1165881&sid=11",
                  "tags": [
                    "灵巧手",
                    "人形机器人"
                  ],
                  "source": "上观新闻",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "原力灵机",
              "news": [
                {
                  "title": "原力灵机 DM0.5 登顶 RoboDojo 榜首，全面开源具身 VLA",
                  "summary": "8月25日消息，原力灵机通用具身基础模型 DM0.5 以综合得分 24.90 登顶具身智能评测基准 RoboDojo 仿真榜第一，记忆维度领先第二名超 3 倍，并已在 LIBERO 等多个评测中取得第一。DM0.5 全面开源，参数量 4B，单张 RTX 4090 即可微调，被称为当前可部署的最强开源具身 VLA。",
                  "link": "https://www.qbitai.com/2026/08/478791.html",
                  "tags": [
                    "具身大模型",
                    "开源"
                  ],
                  "source": "量子位",
                  "time": "8月25日消息"
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
              "title": "阿里巴巴",
              "news": [
                {
                  "title": "马云与管理层合计增持阿里巴巴超 8 亿港元",
                  "summary": "8月25日，随着阿里发起 800 亿港元新股配售融资，创始人马云连日增持阿里港股总额超 6 亿港元；集团主席蔡崇信两日累计增持约 1.6 亿港元，CEO 吴泳铭增持 4000 万港元，马云与管理层合计增持超 8 亿港元。市场认为管理层在配售次日增持是对阿里 AI 战略投下信心票，阿里港股当日收涨 1.51%。",
                  "link": "https://finance.sina.com.cn/roll/2026-08-25/doc-inipprns2295734.shtml",
                  "tags": [
                    "增持",
                    "阿里巴巴"
                  ],
                  "source": "新浪财经",
                  "time": "8月25日"
                }
              ]
            },
            {
              "title": "未来不远",
              "news": [
                {
                  "title": "未来不远半年三轮融资近 10 亿元，家庭机器人已进入 500 个家庭",
                  "summary": "8月25日消息，家庭通用机器人公司未来不远完成近 10 亿元 Pre-A 轮融资，刷新家庭机器人赛道纪录。公司在半年内完成三轮融资、累计近 10 亿元，投资方包括汇川产投、纳爱斯、字节跳动及真格、博裕等。其 F1/F2 机器人已进入上海超 500 个家庭，累计服务时长突破 5 万小时、满意度 96.8%。",
                  "link": "https://www.qbitai.com/2026/08/479132.html",
                  "tags": [
                    "融资",
                    "家庭机器人"
                  ],
                  "source": "量子位",
                  "time": "8月25日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "CBRE",
              "news": [
                {
                  "title": "纽约科技人才数量首超旧金山，华尔街大举招揽 AI 人才",
                  "summary": "8月25日消息，CBRE《2026 科技人才评估报告》显示，2022-2025 年间纽约科技人才增加 30,640 人、总量达 394,300 人，首次超越旧金山湾区（375,730 人）成为北美最大科技人才中心。华尔街金融业对 AI 人才需求激增是主因，美国和加拿大 AI 相关人才同比增长 45% 至 75.1 万人。",
                  "link": "http://app.myzaker.com/news/article.php?pk=6a8ceaa5b15ec046f85ef228",
                  "tags": [
                    "人才",
                    "报告"
                  ],
                  "source": "ZAKER",
                  "time": "8月25日消息"
                }
              ]
            },
            {
              "title": "高盛",
              "news": [
                {
                  "title": "高盛合伙人警告：华尔街普及 AI 或削弱金融从业者思考能力",
                  "summary": "8月25日消息，高盛合伙人警告，华尔街广泛普及 AI 或削弱金融从业者的独立思考能力。随着 AI 工具深度嵌入交易、研究和投行业务，从业者可能过度依赖模型输出、影响专业判断力与风险意识，金融机构需在效率与人才培养之间寻求平衡。",
                  "link": "https://www.ithome.com/0/993/816.htm",
                  "tags": [
                    "金融",
                    "AI影响"
                  ],
                  "source": "IT之家",
                  "time": "8月25日消息"
                }
              ]
            },
            {
              "title": "美光",
              "news": [
                {
                  "title": "美光：AI 算力增速已跑在 HBM 带宽前面，内存墙正在加剧",
                  "summary": "8月23日，美光 HBM 设计架构研究员在 Hot Chips 2026 半导体大会上表示，「内存墙」不仅没有消失还可能恶化：AI 加速器计算性能约每两年增长 3 倍，而 HBM 带宽同期增长不到 2 倍。他援引 Meta 数据称 HBM 故障约占训练中断的 17%，并提出打破计算与存储边界的架构设计将是翻越内存墙的方向。",
                  "link": "https://www.icsmart.cn/141045/",
                  "tags": [
                    "HBM",
                    "内存墙"
                  ],
                  "source": "芯智讯",
                  "time": "8月24日消息"
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
          "date": "2026-08-26",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Ox Alpha",
              "score": "23.2T tokens",
              "change": "new"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.6T tokens",
              "change": "↑3%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "9.92T tokens",
              "change": "↑82%"
            },
            {
              "model": "Hy3",
              "score": "7.16T tokens",
              "change": "↑27%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.58T tokens",
              "change": "↑17%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "5.4T tokens",
              "change": "↑100%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "4.16T tokens",
              "change": "↑28%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.22T tokens",
              "change": "↑26%"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "2.58T tokens",
              "change": "↑210%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "1.84T tokens",
              "change": "↑29%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.57T tokens",
              "change": "↑6%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.53T tokens",
              "change": "↑8%"
            },
            {
              "model": "Claude Opus 5",
              "score": "1.52T tokens",
              "change": "↑43%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.51T tokens",
              "change": "↑84%"
            },
            {
              "model": "Kimi K3",
              "score": "1.42T tokens",
              "change": "↑8%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.12T tokens",
              "change": "↑3%"
            },
            {
              "model": "Nemotron 3.5 Lightning (free)",
              "score": "1.07T tokens",
              "change": "↑28%"
            },
            {
              "model": "DeepSeek V4 Pro 0813",
              "score": "1.01T tokens",
              "change": "↑7%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "830B tokens",
              "change": "↑1%"
            },
            {
              "model": "GLM 5.3",
              "score": "803B tokens",
              "change": "new"
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
