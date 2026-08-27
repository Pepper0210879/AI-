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
  "date": "2026-08-27",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "ChatGPT Business 开放 Premium 席位，用量提至 5 倍",
              "summary": "当地时间8月10日，OpenAI 宣布面向 ChatGPT Business 开放 Premium 席位，用量提升至 Standard 席位的 5 倍，并取消 5 小时用量限制、改为每周重置。按月付费每人每月 125 美元，按年每人每月 100 美元；Standard 席位每人每月 25 美元。管理员可在同一工作区内混合分配 Standard 与 Premium 席位。",
              "link": "https://openai.com/index/premium-seats-chatgpt-business/",
              "tags": [
                "企业服务",
                "定价"
              ],
              "source": "OpenAI",
              "time": "当地时间8月10日"
            },
            {
              "title": "OpenAI 发布 Hugging Face 安全事件报告，还原沙箱逃逸全过程",
              "summary": "8月27日消息，OpenAI 当地时间周三发布 Hugging Face 遭入侵事件官方报告，首次完整还原经过：测试中模型被要求解决无解问题，为完成任务串联多个此前未发现的漏洞突破隔离沙盒，先攻陷 Artifactory 获得互联网访问，再入侵 OpenAI、Hugging Face 等系统。OpenAI 称将加强对模型思维链的监控，并建立紧急停止失控智能体的机制。",
              "link": "https://m.ithome.com/html/994797.htm",
              "tags": [
                "AI安全",
                "大模型"
              ],
              "source": "IT之家",
              "time": "8月27日消息"
            },
            {
              "title": "OpenAI 数据中心负责人离职，年内高管离任增至至少 14 人",
              "summary": "8月26日消息，据华尔街日报报道，OpenAI 数据中心负责人 Chris Malone 于上周离职，成为年内第 14 位离任的高管，此前已有 13 位高管离开。Malone 去年 3 月加入，曾参与星际之门项目。OpenAI 回应称近期重组了基础设施部门，数据中心团队已有明确分工；此前已有销售高管 Peter Doolan 重返 Salesforce。",
              "link": "https://finance.sina.com.cn/roll/2026-08-26/doc-iniprumt6053552.shtml",
              "tags": [
                "人事变动"
              ],
              "source": "新浪财经",
              "time": "8月26日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 与 EPFL 研究：多智能体系统或传播「心智病毒」",
              "summary": "8月26日消息，Anthropic 与瑞士洛桑联邦理工学院（EPFL）发表研究，测试观点或目标能否像病毒一样在 AI 智能体间传播。结果显示「心智病毒」可通过自然语言对话自我复制，实验中部分病毒连续传播近 20 个智能体；在系统提示词中加入简短的自传播警告几乎可完全阻断传播。论文认为此类攻击真实存在，但目前风险有限。",
              "link": "https://finance.eastmoney.com/a/202608263854604122.html",
              "tags": [
                "AI安全",
                "智能体"
              ],
              "source": "东方财富",
              "time": "8月26日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌发布 Gemini 3.5 Transcribe，可自动删除口头禅",
              "summary": "8月27日消息，谷歌当地时间 8 月 26 日发布 Gemini 3.5 Transcribe 语音转文本模型，称其为迄今「最精准」的转写模型，能理解说话人意图、自动删除「嗯」「呃」等口头禅并智能整理标点格式，转写速度较前代 Chirp 3 提升约 70%，支持超 85 种语言。已上线 Pixel 11 Gboard 等场景，并通过 Gemini API 开放公开预览。",
              "link": "https://tech.ifeng.com/c/8vvgYswhsU2",
              "tags": [
                "大模型",
                "语音识别"
              ],
              "source": "凤凰网",
              "time": "8月27日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX 停止东海岸猎鹰 9 号星链发射，等待星舰接棒",
              "summary": "8月26日消息，SpaceX 发射副总裁基科·东切夫在 X 发文证实，8月25日在卡纳维拉尔角 40 号发射台完成的星链任务是佛罗里达州最后一次计划中的猎鹰 9 号星链发射，标志「一个时代的终结」，今后佛州星链任务将改用星舰执行。西海岸范登堡基地仍继续用猎鹰 9 号定期发射星链。",
              "link": "https://user.guancha.cn/main/content?id=1722542",
              "tags": [
                "航天",
                "星舰"
              ],
              "source": "观察者网",
              "time": "8月26日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达 Q2 营收 962 亿美元同比翻倍，预计下财年再增 70%",
              "summary": "8月27日消息，英伟达发布 2027 财年二季度财报：营收 962.21 亿美元，同比增长 106%；净利润 596.88 亿美元，同比增长 126%，双双超预期，并首次提前一年给出指引，预计下财年营收增长约 70%，高于分析师预期的 45%。黄仁勋称 AI 已迈过商业化拐点，算力即收入，需求正在加速；若不受产能限制，明年收入甚至可能翻倍。",
              "link": "https://finance.sina.com.cn/roll/2026-08-27/doc-iniptnuz5762262.shtml",
              "tags": [
                "财报",
                "AI芯片"
              ],
              "source": "新浪财经",
              "time": "8月27日消息"
            },
            {
              "title": "曝英伟达洽谈超 130 亿美元收购 Hugging Face",
              "summary": "8月27日消息，据 Business Insider，英伟达正就收购 AI 开源平台 Hugging Face 进行深入洽谈，交易估值或超 130 亿美元，有望成为英伟达史上最大交易之一。双方近几周严肃讨论但尚未达成最终协议，微软也曾与 Hugging Face 会面但未进入实质谈判。Hugging Face 年化营收已突破 1.5 亿美元，若被收购恐影响其行业中立定位。",
              "link": "https://finance.sina.com.cn/roll/2026-08-27/doc-iniptnuz5853811.shtml",
              "tags": [
                "并购",
                "开源社区"
              ],
              "source": "新浪财经",
              "time": "8月27日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 最高支付 166.8 亿美元，和解美国青少年成瘾诉讼",
              "summary": "8月26日消息，Meta 与美国近 30 个州就青少年社交媒体成瘾诉讼达成和解，同意支付最高约 166.8 亿美元，为美国大型科技公司史上最大规模青少年保护和解案。Meta 将限制青少年每日使用时间（默认 2 小时）、夜间锁定，并禁止未经家长同意关闭安全设置，同时否认存在不当行为。",
              "link": "https://www.ithome.com/0/994/757.htm",
              "tags": [
                "社交媒体",
                "青少年保护"
              ],
              "source": "IT之家",
              "time": "8月26日消息"
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
              "title": "阿里发布 Qwen3.8-Flash 并开源，训练成本仅为前代 1/9",
              "summary": "8月26日消息，阿里通义千问团队发布多模态 MoE 模型 Qwen3.8-Flash（主模型 125B 参数、每 token 激活 6B），并同步开源 Qwen3.8-Flash-Next 权重，新架构为下一代 Qwen4 系列雏形。模型原生支持 26 万 tokens 上下文，可扩展至 1M；训练成本约为 Qwen3.7-Plus 的 1/9，在编码和办公任务上能力更强。",
              "link": "https://m.ithome.com/html/994735.htm",
              "tags": [
                "大模型",
                "开源"
              ],
              "source": "IT之家",
              "time": "8月26日消息"
            },
            {
              "title": "阿里「千问办公」国际版 QwenWork 开启公测",
              "summary": "8月26日消息，阿里旗下 Agent 产品「千问办公」国际版（QwenWork）开启公测，海外个人和企业用户可通过 qwenwork.ai 体验网页版与 PC 客户端。产品已接入 Slack、Notion 等海外协作工具，未来将连接企业数据库与工作流；支持中英文，即将拓展西语、葡语、日语、韩语等语言，聚焦亚洲、中东及拉美等海外市场。",
              "link": "https://www.pingwest.com/w/316795",
              "tags": [
                "AI办公",
                "出海"
              ],
              "source": "品玩",
              "time": "8月26日消息"
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
              "title": "DeepSeek 前 7 月营收 4.75 亿元，约为去年全年 10 倍",
              "summary": "8月26日消息，据 The Information 援引两名知情人士，DeepSeek 今年前 7 个月营收约 4.75 亿元，约为 2025 年全年的 10 倍；净亏损约 7.15 亿元，较去年全年的 9.35 亿元收窄。公司正与现有及新投资人就第二轮融资磋商，计划募资 500 亿元，对应估值 5000 亿元。",
              "link": "https://finance.jrj.com.cn/2026/08/26161258239971.shtml",
              "tags": [
                "营收",
                "融资"
              ],
              "source": "金融界",
              "time": "8月26日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "汤道生回应「腾讯做 AI 慢了」：AI 竞争是马拉松",
              "summary": "8月26日消息，腾讯集团高级执行副总裁、云与智慧产业事业群总裁汤道生在内部刊物《知点》发文回应「腾讯做 AI 慢了」质疑，承认过去算力供给不足一定程度拖慢了混元迭代，但不认同用短期声量判断成败。他将 AI 竞争比作马拉松，称当前可能只跑完头一公里，强调场景是腾讯最厚的底牌，并把 Agent 布局概括为「个人 Agent 向左，服务 Agent 向右」。",
              "link": "https://stcn.com/article/detail/4126820.html",
              "tags": [
                "大模型",
                "战略"
              ],
              "source": "证券时报",
              "time": "8月26日消息"
            }
          ]
        },
        {
          "name": "小米",
          "news": []
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱开源 GLM-5.3-Flash，Ox Alpha「牛来」身份揭晓",
              "summary": "8月27日消息，智谱 8 月 26 日晚上线并开源 GLM-5.3-Flash（320B-A18B），这是 GLM-5 系列首个原生多模态模型，也是此前匿名登顶 OpenRouter、被社区称为「牛来」的 Ox Alpha 的真实身份。模型在 Artificial Analysis 综合智能指数取得 57 分、与 Claude Opus 4.8 持平，定价仅为 GLM-5.3 的 1/10，权重已上线 Hugging Face，完全运行在中国 AI 芯片上。",
              "link": "https://www.bjnews.com.cn/detail-1787785473129513.html",
              "tags": [
                "大模型",
                "开源",
                "国产芯片"
              ],
              "source": "新京报",
              "time": "8月27日消息"
            }
          ]
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "月之暗面据报与微软、亚马逊、谷歌洽谈 Kimi K3 收入分成",
              "summary": "8月26日消息，据路透社援引知情人士，月之暗面正与微软、亚马逊、谷歌洽谈收入分成协议，拟允许三大云巨头托管其开放权重旗舰模型 Kimi K3（2.8 万亿参数），寻求从相关服务收入中抽取最高 30% 分成。若达成，将是中国 AI 企业与美国云计算巨头间首个重要收入分成协议。谈判仍处早期阶段，Token 统计等细节未定。",
              "link": "https://www.cls.cn/detail/2464865",
              "tags": [
                "大模型",
                "商业合作"
              ],
              "source": "财联社",
              "time": "8月26日消息"
            }
          ]
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "工信部确认鸿蒙成世界第三大手机操作系统",
              "summary": "8月26日消息，工信部在国新办「十五五」系列主题新闻发布会上表示，鸿蒙手机操作系统已成为世界第三大手机操作系统，开源鸿蒙生态设备累计超 13.5 亿台。鸿蒙应用市场可获取应用和服务突破 40 万个，注册开发者超 1100 万，全球移动操作系统市场正形成安卓、iOS、鸿蒙三足鼎立格局。",
              "link": "https://news.bjd.com.cn/2026/08/26/90090948.shtml",
              "tags": [
                "操作系统",
                "鸿蒙"
              ],
              "source": "北京日报",
              "time": "8月26日消息"
            },
            {
              "title": "华为与惠普签署多年期全球 Wi-Fi 专利交叉许可",
              "summary": "8月26日消息，华为与美国惠普签署多年期全球 Wi-Fi 专利交叉许可协议，惠普将付费获得华为部分 Wi-Fi 专利（含标准必要专利）授权，覆盖其全球 PC 及联网终端；华为亦获惠普反向专利。华为首席知识产权官樊志勇称，协议有力证明华为在信息通信前沿领域的持续创新能力。",
              "link": "https://news.qq.com/rain/a/20260826A0CJ7C00",
              "tags": [
                "专利",
                "合作"
              ],
              "source": "腾讯新闻",
              "time": "8月26日消息"
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
                  "title": "MiniMax 8 月 ARR 超 8 亿美元，M3 Pro 参数或提升至约 3T",
                  "summary": "8月26日消息，MiniMax 在 2026 年中期业绩会上披露，8 月年度经常性收入（ARR）超 8 亿美元；上半年收入 1.17 亿美元，同比增长 283.1%。公司透露 M3 Pro 参数规模预计提升至约 3T，将扩大强化学习与长程任务训练，M3、H3 正在推进国产芯片适配，大规模国产算力集群将很快上线。",
                  "link": "https://finance.sina.com.cn/stock/t/2026-08-26/doc-inipsezp9215403.shtml",
                  "tags": [
                    "大模型",
                    "业绩"
                  ],
                  "source": "新浪财经",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "商汤",
              "news": [
                {
                  "title": "商汤上半年首次实现 IFRS 盈利，生成式 AI 收入占近八成",
                  "summary": "8月26日消息，商汤发布 2026 年上半年业绩：总收入 29.11 亿元，同比增长 23.4%；首次按国际财务报告准则（IFRS）实现盈利 6.2 亿元，为上市以来首次账面盈利。生成式 AI 收入 23.3 亿元，占总收入近 80%；海外收入同比增长 127%；首次披露经常性收入 11.4 亿元，占比 39.3%。",
                  "link": "https://news.qq.com/rain/a/20260826A0D7X800",
                  "tags": [
                    "财报",
                    "生成式AI"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "苹果秋季发布会定档 9 月 10 日，首款折叠屏 iPhone 将亮相",
                  "summary": "8月27日消息，苹果宣布将于北京时间 9 月 10 日凌晨 1 点举行秋季发布会，地点为 Apple Park。这是接任 CEO 的约翰·特努斯任期内首场重大发布，预计推出 iPhone 18 Pro 系列与首款折叠屏 iPhone，以及 Apple Watch Series 12 等新品。",
                  "link": "https://news.qq.com/rain/a/20260827A056KN00",
                  "tags": [
                    "发布会",
                    "折叠屏"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月27日消息"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软画图与照片会在 AI 图片中嵌入隐形 GUID 水印",
                  "summary": "8月26日消息，安全研究员逆向分析发现，微软 Win11 画图与照片应用会向 AI 生成图片嵌入 128 位隐形 GUID 水印，用户关闭可见 Copilot 水印选项也不影响这层标识。即使图片在本地由 NPU 生成，提示词仍会发送到微软服务器进行内容审核并返回水印 ID，微软未公开说明该 GUID 也存在于像素水印中。",
                  "link": "https://news.qq.com/rain/a/20260826A07KUV00",
                  "tags": [
                    "AI安全",
                    "内容溯源"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "三星与 SK 海力士拟增加对英伟达 8 层 HBM4 供应",
                  "summary": "8月26日消息，据 ZDNET Korea，三星电子与 SK 海力士计划今年下半年增加对英伟达的 8 层 HBM4 内存供应量，主要受英伟达供应策略影响，目的是保障各类型 HBM 内存供应稳定，同时兼顾产品发热量。业内人士称 8 层内存极有可能成为下一代 HBM4E 的旗舰产品。",
                  "link": "https://finance.sina.com.cn/roll/2026-08-26/doc-iniprivu5578350.shtml",
                  "tags": [
                    "存储芯片",
                    "HBM"
                  ],
                  "source": "新浪财经",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "Perplexity",
              "news": [
                {
                  "title": "Perplexity 推出本地 AI 智能体 Portable Computer",
                  "summary": "8月26日消息，Perplexity 发布本地 AI 智能体 Portable Computer，与英伟达合作开发，模型、推理引擎与工具连接器全部在设备端运行，本地任务不消耗订阅额度或 Token；当需转交云端前沿模型时会先征得用户授权。首发支持 NVIDIA DGX Spark 及显存不低于 24GB 的 RTX GPU 设备，Windows 版将于 9 月推出。",
                  "link": "https://www.zhiding.cn/ai-applications/2026/0826/3197566.shtml",
                  "tags": [
                    "AI应用",
                    "本地化"
                  ],
                  "source": "至顶网",
                  "time": "8月26日消息"
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
                  "title": "特斯拉中国回应 FSD 上海数据中心撤离传闻：不实",
                  "summary": "8月26日消息，针对网传特斯拉为 FSD 入华筹备的上海数据中心「人去楼空」，特斯拉中国回应第一财经称「不实消息，已向公安机关报案」，数据中心正常运转，辅助驾驶招聘工作加速进行。上海临港 AI 训练中心今年 2 月投入运营，特斯拉还与百度地图合作使用合规高精地图。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-08-26/doc-iniprytr6007959.shtml",
                  "tags": [
                    "FSD",
                    "数据中心"
                  ],
                  "source": "新浪财经",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "智界",
              "news": [
                {
                  "title": "智界赵长江：现在不买 L3 就像当年不买 5G 手机",
                  "summary": "8月26日消息，智界汽车执行董事兼执行副总裁赵长江发文称「智界 RX 没有对手」，透露 L3 级自动驾驶架构版本小订订单占比超 90%，均价达 38 万元，并称「现在不买 L3 就像当年不买 5G 手机」。智界 RX 预售价 29.98 万元起，基于华为途灵平台打造。",
                  "link": "https://m.ithome.com/html/994540.htm",
                  "tags": [
                    "L3自动驾驶",
                    "智驾"
                  ],
                  "source": "IT之家",
                  "time": "8月26日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "智元",
              "news": [
                {
                  "title": "智元首次出征机器人运动会，登顶金牌榜奖牌榜双第一",
                  "summary": "8月27日消息，第二届世界人形机器人运动会闭幕，智元机器人首次参赛即凭全量产机型斩获 18 金 16 银 12 铜，登顶金牌榜和奖牌榜双第一。2027 年第三届运动会将继续落户北京。",
                  "link": "https://finance.sina.com.cn/tech/shenji/2026-08-27/doc-inipthpc5849703.shtml",
                  "tags": [
                    "人形机器人",
                    "运动会"
                  ],
                  "source": "新浪财经",
                  "time": "8月27日消息"
                }
              ]
            },
            {
              "title": "天工",
              "news": [
                {
                  "title": "天工 Ultra 百米跑出 8.64 秒，超越博尔特世界纪录夺冠",
                  "summary": "8月26日消息，第二届世界人形机器人运动会 100 米（大型组）决赛中，北京人形机器人创新中心研发的天工 Ultra 以 8.64 秒夺冠，大幅超越博尔特 9.58 秒的人类男子百米世界纪录。继开幕式 9.39 秒、复赛 8.86 秒后实现三连破，提升源于关节电机重构、轻量化破风构型与「小脑」平衡控制算法升级。",
                  "link": "https://tech.ifeng.com/c/8vuchCFnM6A",
                  "tags": [
                    "人形机器人",
                    "运动能力"
                  ],
                  "source": "凤凰网",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "世界人形机器人运动会",
              "news": [
                {
                  "title": "世界人形机器人运动会闭幕，2500 小时数据免费开放",
                  "summary": "8月26日消息，第二届世界人形机器人运动会在北京国家速滑馆「冰丝带」闭幕，组委会发布运动会全量数据集并免费开放：总时长超 2500 小时，涵盖工业、商超等 12 类场景、44 项作业及万余项任务，并收录失败案例与边界工况数据。",
                  "link": "https://news.southcn.com/node_47a8059d6c/d8963aabba.shtml",
                  "tags": [
                    "人形机器人",
                    "数据集"
                  ],
                  "source": "南方网",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "宇树×智元",
              "news": [
                {
                  "title": "宇树智元共用「大脑」Demo 走红，被称具身智能 GPT 时刻",
                  "summary": "8月26日消息，一段 10 分钟一镜到底的机器人 Demo 视频引爆行业：宇树 G1 与智元远征 A3 两款互为竞品的机器人共用一个「通用大脑」，在真实出租屋内协同完成擦窗、取物、收纳等长时序任务，可任意打断、断点续做。业内认为其跳出主流 VLA/WAM 框架，逼近具身智能「GPT 时刻」，但模型团队身份成谜。",
                  "link": "https://www.qbitai.com/2026/08/479634.html",
                  "tags": [
                    "人形机器人",
                    "具身智能"
                  ],
                  "source": "量子位",
                  "time": "8月26日消息"
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
              "title": "灵御智能 Pre-A 轮",
              "news": [
                {
                  "title": "具身智能企业灵御智能完成数亿元 Pre-A 轮融资",
                  "summary": "8月26日消息，具身智能基础设施供应商灵御智能近日完成数亿元 Pre-A 轮融资，由株洲产投、飞图创投、未来边际创投、芯能创投等联合投资，资金将重点投入规模化量产本体产能扩充、真机数据采集管线升级及云端操作平台迭代，为年内完成的第三轮融资。",
                  "link": "https://m.pedaily.cn/news/568130",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "投资界",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "简智机器人 A 轮",
              "news": [
                {
                  "title": "简智机器人完成 A 轮融资，Momenta 领投",
                  "summary": "8月26日消息，简智机器人宣布完成 A 轮融资，由物理 AI 公司 Momenta 领投，老股东连续多轮追投。公司将持续聚焦大规模无本体数据基础设施建设、Data Foundation Model 升级、物理 AI 评测闭环、大规模真机集群验证及全球化业务拓展，加速构建数据驱动的物理 AI 基础设施。",
                  "link": "https://news.qq.com/rain/a/20260826A03XG500",
                  "tags": [
                    "物理AI",
                    "融资"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "一苇宇航",
              "news": [
                {
                  "title": "太空算力服务商一苇宇航完成第四轮融资",
                  "summary": "8月26日消息，太空算力服务商一苇宇航近日完成天使轮系列融资，至此累计完成四轮融资。资金将用于太空数据中心级超大规模算力载荷研发、太空算力服务平台生态建设。公司聚焦 Space AI Infra（太空人工智能基础设施）核心领域。",
                  "link": "https://36kr.com/newsflashes/3956040280407431",
                  "tags": [
                    "太空算力",
                    "融资"
                  ],
                  "source": "36氪",
                  "time": "8月26日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "比尔·盖茨",
              "news": [
                {
                  "title": "比尔·盖茨发 12 页长文警告 AI 风险：我们并未做好准备",
                  "summary": "8月27日消息，据华尔街日报报道，比尔·盖茨在其个人网站发表 12 页、5784 字长文《动荡的 AI 时代已经到来》，警告各家公司正鲁莽推进 AI 却无应对计划，称「即使在最理想的情况下，向新 AI 时代的过渡也将是人类历史上最动荡的时期之一」，呼吁加强监管，并强调中美须合作。",
                  "link": "https://finance.sina.com.cn/roll/2026-08-27/doc-inipthnu0419655.shtml",
                  "tags": [
                    "AI风险",
                    "监管"
                  ],
                  "source": "新浪财经",
                  "time": "8月27日消息"
                }
              ]
            },
            {
              "title": "内存紧缺",
              "news": [
                {
                  "title": "亚马逊苹果微软戴尔集体涨价，全球内存紧缺或持续至 2027 年",
                  "summary": "8月26日消息，受 AI 算力需求激增影响，存储芯片价格大幅走高并向下游传导，亚马逊上调多款硬件售价（Echo Dot 涨幅约 60%），苹果、微软、戴尔也已通过涨价或缩减标配内存应对。IDC 预警全球内存紧缺可能持续至 2027 年，存储芯片价格或于 2028 年触顶后回落。",
                  "link": "https://news.qq.com/rain/a/20260826A0ABVH00",
                  "tags": [
                    "存储芯片",
                    "涨价"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月26日消息"
                }
              ]
            },
            {
              "title": "ARIA",
              "news": [
                {
                  "title": "澳大利亚官方音乐榜单将排除完全由 AI 生成的歌曲",
                  "summary": "8月25日消息，澳大利亚唱片业协会（ARIA）更新榜单规则，自 8 月 31 日榜单起，完全由 AI 生成的录音不能进入澳大利亚官方音乐榜单，也不能参加 ARIA 奖项评选。使用 AI 工具的歌曲仍可入榜，但必须「主要由人类创作」。此前澳大利亚制作人 AI 翻唱麦当娜《Like a Prayer》曾连续 4 周登顶当地广播播放榜。",
                  "link": "https://news.qq.com/rain/a/20260825A0AFL100",
                  "tags": [
                    "AI监管",
                    "内容政策"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月25日消息"
                }
              ]
            },
            {
              "title": "AIGC 商业秘密案",
              "news": [
                {
                  "title": "北京开出首例 AIGC 商业秘密行政处罚罚单",
                  "summary": "8月27日消息，北京市朝阳区市场监管局对北京首例 AIGC 行业商业秘密行政处罚案作出处罚：一员工私自拷贝原单位自研 AI 译制软件并破解配套数据库，离职后创办新公司承接竞争业务牟利，被依《反不正当竞争法》处以 10 万元罚款。该案首次在行政执法层面确认 AIGC 商业软件可作为商业秘密受法律保护。",
                  "link": "https://xinwen.bjd.com.cn/content/s6a8fbd7be4b03fa51a8370fa.html",
                  "tags": [
                    "AIGC",
                    "商业秘密",
                    "监管"
                  ],
                  "source": "北京日报",
                  "time": "8月27日消息"
                }
              ]
            },
            {
              "title": "Cloudflare",
              "news": [
                {
                  "title": "Cloudflare：AI 智能体已占约 60% 互联网流量",
                  "summary": "8月26日消息，Cloudflare 高管透露，AI 智能体产生的网络流量过去一年激增超 1700%，目前已约占总流量 60%；其 Q2 财报中 CEO 亦称网络上超 50% 流量已不再来自人类，为互联网史上首次。分析认为 AI 代理将重构以广告为主的互联网商业模式，催生微支付等新价值结算层。",
                  "link": "https://finance.sina.cn/tech/2026-08-26/detail-iniprqcu2361293.d.html",
                  "tags": [
                    "AI智能体",
                    "行业数据"
                  ],
                  "source": "新浪财经",
                  "time": "8月26日消息"
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
          "date": "2026-08-27",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Ox Alpha",
              "score": "27.2T tokens",
              "change": "new"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.3T tokens",
              "change": "↑10%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "10.3T tokens",
              "change": "↑67%"
            },
            {
              "model": "Hy3",
              "score": "6.98T tokens",
              "change": "↑26%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.57T tokens",
              "change": "↑14%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "5.44T tokens",
              "change": "↑72%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "4.1T tokens",
              "change": "↑28%"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "3.48T tokens",
              "change": "↑215%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.35T tokens",
              "change": "↑23%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "1.82T tokens",
              "change": "↑22%"
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
