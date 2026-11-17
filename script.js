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
    "date": "2026-11-17",
    "sections": {
      "overseas": {
        "vendors": [
          {
            "name": "OpenAI",
            "news": [
              {
                "title": "奥特曼：没有黄仁勋，AI 行业仍能继续发展",
                "summary": "11月16日，OpenAI CEO 奥特曼在 Semafor 举办的「Silicon Valley & The World」活动上首次公开谈及黄仁勋辞任英伟达 CEO 一事。他认为，尽管黄仁勋对 AI 行业至关重要，但 AI 市场需求和收入仍在快速增长，即便没有其领导，行业仍能继续发展。奥特曼同时称黄仁勋一直是自己心目中的英雄，但「英雄也有缺点」，并对其处境表示同情。",
                "link": "https://original.ifeng.com/c/8y7FJSNWZKK",
                "tags": [
                  "AI行业",
                  "观点"
                ],
                "source": "凤凰网",
                "time": "11月16日"
              },
              {
                "title": "OpenAI 推出儿童性虐待内容检测工具",
                "summary": "11月17日消息，OpenAI 发布 CSAM 检测工具，通过 API 向审核机构免费开放，结合新图像分类器与 ChatGPT 警告机制打击有害内容，并与 Anthropic、谷歌等合作制定应对指南，加强儿童网络安全防护。",
                "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02804001zf5a",
                "tags": [
                  "内容安全",
                  "儿童保护"
                ],
                "source": "新浪财经",
                "time": "11月17日消息"
              }
            ]
          },
          {
            "name": "Anthropic",
            "news": [
              {
                "title": "Anthropic 拟 IPO 后要求员工按计划卖股",
                "summary": "11月17日消息，据 Business Insider 报道，Anthropic 为降低内幕交易风险，计划在 IPO 后要求出售公司股票的员工使用预设交易计划（10b5-1），提前 30 天书面安排卖出，把「高管紧箍咒」套在普通员工头上。",
                "link": "https://www.aibase.com/zh/news/32352",
                "tags": [
                  "IPO",
                  "内幕交易"
                ],
                "source": "AIBase",
                "time": "11月17日消息"
              }
            ]
          },
          {
            "name": "Google",
            "news": [
              {
                "title": "谷歌 Ironwood TPU 刷新 MLPerf 训练纪录",
                "summary": "11月16日，谷歌云公布第七代自研 Ironwood TPU 在 MLPerf Training v6.1 基准测试第一轮的 10 项结果，覆盖模型预训练与智能体强化学习测试，其中 8192 颗 Ironwood TPU 集群约 102 秒完成 DeepSeek-V3 预训练。",
                "link": "https://www.cls.cn/detail/2535989",
                "tags": [
                  "TPU",
                  "AI芯片",
                  "MLPerf"
                ],
                "source": "财联社",
                "time": "11月16日"
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
                "title": "英伟达董事会不考虑让黄仁勋重任 CEO",
                "summary": "11月17日消息，据 CNBC 援引知情人士报道，英伟达董事会目前没有考虑让黄仁勋重新担任 CEO，也未就其回归展开讨论，工作重心仍聚焦对黄仁勋相关行为的调查。此前已有约 18 万人联署支持黄仁勋复职，马斯克等科技界人士也公开表达支持。",
                "link": "https://baijiahao.baidu.com/s?id=1882071799748745603",
                "tags": [
                  "CEO",
                  "人事",
                  "调查"
                ],
                "source": "财联社",
                "time": "11月17日消息"
              },
              {
                "title": "英伟达发布 Vera CPU 与 Rubin HPC GPU",
                "summary": "11月16日，英伟达在 SC26 大会发布面向高性能计算的 Vera CPU 机架级平台与 Rubin HPC GPU。Vera 为智能体科学带来更高性能，能效比 x86 CPU 提升一倍；Rubin HPC GPU 单卡超 5 万 CUDA 核心创纪录，支持第七代 NVLink，预计 2028 年上市。",
                "link": "https://baijiahao.baidu.com/s?id=1882037622081021302",
                "tags": [
                  "HPC",
                  "GPU",
                  "CPU"
                ],
                "source": "IT之家",
                "time": "11月16日"
              },
              {
                "title": "摩根大通：英伟达 AI 算力份额降至 39%",
                "summary": "11月16日消息，摩根大通资产管理市场与投资策略主席切巴莱斯特在报告中称，OpenAI、Anthropic 等前沿 AI 实验室已敲定未来采购的算力中，英伟达 GPU 占比仅 39%，而 2023 至 2025 年其份额曾达 83%，预示英伟达在下一代算力基础设施中的占比可能大幅萎缩。",
                "link": "https://caifuhao.eastmoney.com/news/20261116164907429869160",
                "tags": [
                  "GPU",
                  "市场份额",
                  "AI算力"
                ],
                "source": "财联社",
                "time": "11月16日消息"
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
                "title": "阿里发布 Qwen4-Max，单任务成本降六成",
                "summary": "11月16日，阿里巴巴发布新一代旗舰基座模型 Qwen4-Max，总参数 2.4 万亿，具备原生视觉能力，支持百万 Token 上下文。基于创新架构与训练优化，Qwen4-Max 以更少 Token 消耗实现更高性能，单任务平均成本较上代下降约六成，缓存命中输入低至每百万 Token 0.5 元。",
                "link": "https://baijiahao.baidu.com/s?id=1881991547859291568",
                "tags": [
                  "大模型",
                  "MoE",
                  "开源"
                ],
                "source": "财联社",
                "time": "11月16日"
              }
            ]
          },
          {
            "name": "火山引擎",
            "news": [
              {
                "title": "豆包工作上线「工作台」，覆盖 21 个场景",
                "summary": "11月16日，豆包工作在电脑端上线「工作台」功能，首批覆盖金融、医疗、教育、创意设计等 21 个专业场景，预先放入对应任务常用的技能与工具，支持连接万得、同花顺等数据服务，并可自建个性化工作台，是业内首个面向多专业场景定制的 AI 工作台。",
                "link": "https://baijiahao.baidu.com/s?id=1882000476420570842",
                "tags": [
                  "AI办公",
                  "工作台"
                ],
                "source": "36氪",
                "time": "11月16日"
              },
              {
                "title": "火山引擎全面开放 Seedance 2.5 4K 视频 API",
                "summary": "11月16日，火山引擎宣布 Seedance 2.5 的 4K 视频生成 API 在火山方舟全面开放，个人和企业用户均可调用，采用 10bit 位深与 H.265 编码，支持先生成 480p 样片再生成 4K 成片，适配大荧幕制作需求。",
                "link": "https://post.smzdm.com/p/aggwodzd/",
                "tags": [
                  "视频生成",
                  "4K",
                  "API"
                ],
                "source": "火山引擎",
                "time": "11月16日"
              }
            ]
          },
          {
            "name": "DeepSeek",
            "news": [
              {
                "title": "DeepSeek 因算力不足限额 App 与网页版",
                "summary": "11月16日，DeepSeek 对 App/网页版长对话实施限额，多名用户反馈收到「算力不足，不再支持超过 7 天不活跃的长对话」提示，单次输入上限缩至约 4 万字，并限制每日对话额度。这是 DeepSeek 近期算力紧张状态的延续，10 月以来平台已发生多起服务中断。",
                "link": "https://www.cqrb.cn/caijingzonghe/2026-11-16/2822542_pc.html",
                "tags": [
                  "算力",
                  "限额",
                  "API"
                ],
                "source": "重庆日报",
                "time": "11月16日"
              }
            ]
          },
          {
            "name": "腾讯",
            "news": [
              {
                "title": "腾讯混元发布 Hy4 flash，成本大幅降低",
                "summary": "11月16日，腾讯混元发布最新语言模型 Hy4 flash，总参数 224B、激活参数 12B，支持多模态与百万 Token 上下文，解码速度超 150tps。该模型已接入 WorkBuddy、元宝、企业微信等产品，单任务成本约为 Hy4 的二十分之一，计划后续开源。",
                "link": "https://cloud.tencent.com/developer/article/2785919",
                "tags": [
                  "大模型",
                  "MoE",
                  "多模态"
                ],
                "source": "腾讯云",
                "time": "11月16日"
              },
              {
                "title": "腾讯总办号召面向 AI 时代再创业",
                "summary": "11月16日，腾讯文化公开 28 周年 LinkTime 现场笔记，总办号召「心态归零，所有核心业务每一个团队都要面向 AI 时代再创业」，认为「现在的智能革命如果不投入拥抱，就是被颠覆」，要求组织扁平化、以小团队为作战单元，用 AI 重新设计管理流程与做事方式。",
                "link": "https://original.ifeng.com/c/8y7bb5Z7XiT",
                "tags": [
                  "组织变革",
                  "AI战略"
                ],
                "source": "凤凰网",
                "time": "11月16日"
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
                "title": "AMD",
                "news": [
                  {
                    "title": "AMD 完成收购 World Labs，李飞飞加盟",
                    "summary": "11月16日，AMD 宣布完成对 AI 研究公司 World Labs 的收购，以增强其在 AI 模型领域的研发能力。World Labs 专注于创建和模拟交互式 3D 环境的 AI 模型，以及机器人学习与仿真技术。创始人李飞飞加入 AMD，担任执行副总裁兼首席科学家，直接向苏姿丰汇报。",
                    "link": "https://c.m.163.com/news/a/LBT3RLQE0519D45U.html",
                    "tags": [
                      "收购",
                      "AI模型",
                      "3D"
                    ],
                    "source": "网易",
                    "time": "11月16日"
                  }
                ]
              },
              {
                "title": "苹果",
                "news": [
                  {
                    "title": "苹果启动健康 AI 研究，拟招募 20 万人",
                    "summary": "11月16日，苹果与医疗 AI 公司 OpenEvidence 在美国启动 Apple Health AI Usage Study，参与者通过研究 App 提交睡眠、心脏健康等问题，团队分析参与者如何理解并信任 AI 回答。项目最多招募 20 万名美国用户，数据不会用于训练 AI 模型。",
                    "link": "https://baijiahao.baidu.com/s?id=1881995660026034852",
                    "tags": [
                      "医疗AI",
                      "健康"
                    ],
                    "source": "钛媒体",
                    "time": "11月16日"
                  }
                ]
              },
              {
                "title": "台积电",
                "news": [
                  {
                    "title": "台积电拟按信用额度供应 AI 产能",
                    "summary": "11月16日消息，AI 循环融资疑虑升温背景下，台积电拟收紧客户付款政策，按客户财务状况评估信用额度，超额下单需现金支付，部分客户需预付产能保留款。ASIC 厂商也加紧筹资以应对行业变局。",
                    "link": "https://baijiahao.baidu.com/s?id=1881996843107047816",
                    "tags": [
                      "AI芯片",
                      "供应链",
                      "循环融资"
                    ],
                    "source": "财联社",
                    "time": "11月16日消息"
                  }
                ]
              }
            ]
          },
          {
            "name": "自动驾驶",
            "cards": [
              {
                "title": "小马智行",
                "news": [
                  {
                    "title": "小马智行与丰田 Robotaxi 广州示范运营",
                    "summary": "11月16日，小马智行与丰田合作研发并量产的第七代铂智 4X Robotaxi 在广州正式投入示范运营，面向公众开放 L4 级自动驾驶服务。该车搭载小马智行第七代车规级自动驾驶系统，采用丰田面向 L4 的车辆平台与冗余控制系统，可应对暴雨、夜间、拥堵等复杂场景。",
                    "link": "https://baijiahao.baidu.com/s?id=1882006867757997869",
                    "tags": [
                      "Robotaxi",
                      "L4自动驾驶"
                    ],
                    "source": "汽车之家",
                    "time": "11月16日"
                  }
                ]
              },
              {
                "title": "特斯拉",
                "news": [
                  {
                    "title": "特斯拉投 30 亿欧元扩建德国厂产 Cybercab",
                    "summary": "11月16日消息，特斯拉宣布将向德国柏林郊外的超级工厂投资 30 亿欧元，新建生产设施，目标实现每年最多生产 100 万辆 Cybercab。新设施计划今年底前提交建筑许可申请，预计 2027 年上半年开工、2029 年投产。",
                    "link": "https://baijiahao.baidu.com/s?id=1882063410084826960",
                    "tags": [
                      "Cybercab",
                      "Robotaxi",
                      "扩产"
                    ],
                    "source": "新浪财经",
                    "time": "11月16日消息"
                  }
                ]
              }
            ]
          },
          {
            "name": "具身智能",
            "cards": [
              {
                "title": "蚂蚁灵波",
                "news": [
                  {
                    "title": "首届蚂蚁灵波具身大模型挑战赛在沪揭晓",
                    "summary": "11月16日，首届蚂蚁灵波具身大模型挑战赛在上海揭晓结果，由福田实验室、西北工业大学、普渡机器人等选手组成的 TARS 战队以 82.5 分获一等奖。15 支决赛队伍在 48 小时内使用同一套硬件与 LingBot-VLA 2.0 模型完成抓取、整理、清扫等真机任务。",
                    "link": "https://www.jfdaily.com/staticsg/res/html/web/newsDetail.html?id=1215019",
                    "tags": [
                      "具身智能",
                      "机器人",
                      "VLA"
                    ],
                    "source": "上观新闻",
                    "time": "11月16日"
                  }
                ]
              },
              {
                "title": "小鹏",
                "news": [
                  {
                    "title": "何小鹏：小鹏 IRON 机器人明年二季度发布",
                    "summary": "11月16日，何小鹏在小鹏 Q3 财报电话会上透露，小鹏自研人形机器人 IRON 将在科技日和广州车展亮相，明年一季度进入门店试用，二季度面向外部商业客户正式发布。IRON 主打高阶智能交互能力。",
                    "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02804001ze9w",
                    "tags": [
                      "人形机器人",
                      "具身智能"
                    ],
                    "source": "新浪财经",
                    "time": "11月16日"
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
                "title": "英伟芯",
                "news": [
                  {
                    "title": "光互连厂商英伟芯完成数亿元融资",
                    "summary": "11月16日消息，下一代高速光互连解决方案提供商英伟芯宣布分阶段完成 Pre-A、Pre-A+ 系列融资，累计金额数亿元。Pre-A 轮由上海科创集团等领投，Pre-A+ 轮由经纬创投和中金资本旗下基金领投，资金将用于硅光芯片、光引擎研发迭代与量产交付。",
                    "link": "https://caifuhao.eastmoney.com/news/20261116112253485621120",
                    "tags": [
                      "光互连",
                      "硅光芯片",
                      "融资"
                    ],
                    "source": "东方财富网",
                    "time": "11月16日消息"
                  }
                ]
              },
              {
                "title": "无界进化",
                "news": [
                  {
                    "title": "无界进化完成超亿元 Pre-A 轮融资",
                    "summary": "11月16日，AI4S 企业无界进化（INFevo）宣布完成超亿元 Pre-A 轮融资，由星连资本、Prosperity7、华盖资本等联合投资，顺为资本、红杉中国追加投资。公司由晶泰科技孵化，以虚拟细胞与递归科学发现为核心，资金将用于基础模型研发与扩大自动化实验设施。",
                    "link": "https://caifuhao.eastmoney.com/news/20261116153319727340870",
                    "tags": [
                      "AI4S",
                      "虚拟细胞",
                      "融资"
                    ],
                    "source": "东方财富网",
                    "time": "11月16日"
                  }
                ]
              },
              {
                "title": "通芯智能",
                "news": [
                  {
                    "title": "AGI 芯片厂商通芯智能连获数亿元融资",
                    "summary": "11月16日消息，由通研院孵化、龙芯与海光老兵集结创立的 AGI 芯片公司通芯智能，半年内连续完成数亿元种子轮及天使轮融资，研发原生 AGI 架构芯片，首款芯片计划 12 月开展原型验证。",
                    "link": "https://news.pedaily.cn/202611/571748.shtml",
                    "tags": [
                      "AGI芯片",
                      "融资"
                    ],
                    "source": "投资界",
                    "time": "11月16日消息"
                  }
                ]
              }
            ]
          },
          {
            "name": "行业趋势&观点",
            "cards": [
              {
                "title": "AI演员方桃子",
                "news": [
                  {
                    "title": "AI 演员方桃子代言美瞳广告被罚",
                    "summary": "11月16日消息，因在未取得医疗审查证明的情况下发布美瞳广告且虚构产品使用效果，AI 短剧《被裁掉的女孩》虚拟女主「方桃子」的运营方广州我的影视文化传媒有限公司被广州市番禺区市场监管局罚款 6.82 万余元。该 AI 演员出道 30 天吸粉超 40 万。",
                    "link": "https://baijiahao.baidu.com/s?id=1882074646130257953",
                    "tags": [
                      "AI演员",
                      "虚假广告",
                      "监管"
                    ],
                    "source": "IT之家",
                    "time": "11月16日消息"
                  }
                ]
              },
              {
                "title": "辛顿",
                "news": [
                  {
                    "title": "辛顿：相比奥特曼等人更信任黄仁勋",
                    "summary": "11月16日消息，被誉为「AI 教父」的杰弗里·辛顿在最新采访中对英伟达前 CEO 黄仁勋给出评价，称印象中他是个正派的人，不会将其与奥特曼、扎克伯格、马斯克归为同一类人，「我信任黄仁勋得多」，同时坦言「我认为他犯了一个重大错误，但猜想英伟达能扛过去」。",
                    "link": "https://baijiahao.baidu.com/s?id=1881997930328874651",
                    "tags": [
                      "AI行业",
                      "观点"
                    ],
                    "source": "IT之家",
                    "time": "11月16日消息"
                  }
                ]
              },
              {
                "title": "IMF",
                "news": [
                  {
                    "title": "IMF 警告 AI 循环融资规模超万亿美元",
                    "summary": "11月16日，国际货币基金组织（IMF）总裁格奥尔基耶娃警告，全球经济当前高度依赖 AI 投资驱动，AI 领域循环融资规模已超 1 万亿美元，若相关信心骤降可能引发全球金融稳定风险。",
                    "link": "https://k.sina.com.cn/article_5953740931_v162dee083067045qie.html",
                    "tags": [
                      "AI投资",
                      "循环融资",
                      "风险"
                    ],
                    "source": "新浪财经",
                    "time": "11月16日"
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
            "date": "2026-11-16",
            "link": "https://openrouter.ai/rankings",
            "rankings": [
              {
                "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
                "score": "61.2T tokens",
                "change": "↑10%"
              },
              {
                "model": "Hy4 (tencent)",
                "score": "16T tokens",
                "change": "—"
              },
              {
                "model": "DeepSeek V4.1 Flash (deepseek)",
                "score": "15.5T tokens",
                "change": "↓12%"
              },
              {
                "model": "GLM 5.3 Flash (z-ai)",
                "score": "11.8T tokens",
                "change": "↓3%"
              },
              {
                "model": "GPT-6 Luna (openai)",
                "score": "8.08T tokens",
                "change": "↑14%"
              },
              {
                "model": "Claude Opus 5.5 (anthropic)",
                "score": "7.37T tokens",
                "change": "↑9%"
              },
              {
                "model": "Step 5 Preview (stepfun)",
                "score": "6.36T tokens",
                "change": "↓11%"
              },
              {
                "model": "MiMo-V2.6-Flash (xiaomi)",
                "score": "4.16T tokens",
                "change": "↑63%"
              },
              {
                "model": "GLM 5.3 (z-ai)",
                "score": "3.74T tokens",
                "change": "↑5%"
              },
              {
                "model": "GPT-6.1 Sol (openai)",
                "score": "3.71T tokens",
                "change": "↓5%"
              },
              {
                "model": "MiniMax M3.1 Flash (minimax)",
                "score": "3.35T tokens",
                "change": "↓28%"
              },
              {
                "model": "Kimi K3.1 Pro (moonshotai)",
                "score": "3.24T tokens",
                "change": "↓26%"
              },
              {
                "model": "Nemotron 3 Ultra (free) (nvidia)",
                "score": "3.2T tokens",
                "change": "↑1%"
              },
              {
                "model": "DeepSeek V4 Flash 0731 (deepseek)",
                "score": "3.2T tokens",
                "change": "—"
              },
              {
                "model": "Nemotron 3.5 Super VL (free) (nvidia)",
                "score": "2.97T tokens",
                "change": "↑4%"
              },
              {
                "model": "Muse Spark 1.3 Contributor (meta)",
                "score": "2.96T tokens",
                "change": "↑3%"
              },
              {
                "model": "Jev 1.13 (typesafe)",
                "score": "2.87T tokens",
                "change": "↓5%"
              },
              {
                "model": "Claude Haiku 5.5 (anthropic)",
                "score": "2.78T tokens",
                "change": "↑4%"
              },
              {
                "model": "Claude Sonnet 5.5 (anthropic)",
                "score": "2.67T tokens",
                "change": "↑12%"
              },
              {
                "model": "ERNIE-5.5-Flash-Preview (free) (baidu)",
                "score": "2.47T tokens",
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
