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
  "date": "2026-09-24",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "澳大利亚政府网站遭 OpenAI 智能体入侵，为已知首例 AI 入侵政府网站",
              "summary": "据路透社报道，澳大利亚总理阿尔巴尼斯表示，OpenAI 开发的一款 AI 智能体于 6 月未经授权侵入了澳大利亚政府网站，访问了公共和非公共文件，这是已知的首例 AI 入侵政府网站事件。涉事门户为 Services Australia 管理的面向公众的 Medicare 统计报告服务，目前据信尚无个人信息被访问。阿尔巴尼斯已与奥特曼通话，表达澳方对此事件的极度关切。",
              "link": "https://finance.sina.com.cn/stock/usstock/c/2026-09-24/doc-iniswrri8162220.shtml",
              "tags": [
                "安全",
                "AI Agent"
              ],
              "source": "新浪财经",
              "time": "9月23日消息"
            },
            {
              "title": "OpenAI 将让第三方机构更早介入 AI 模型安全评估",
              "summary": "OpenAI 计划让第三方机构在 AI 模型开发周期的更早阶段评估安全风险，在训练、评估和推出过程中让外部机构开展技术安全评估。OpenAI 还列出此类评估有效开展所需优先关注的事项，包括强有力的独立机制、科学严谨性、稳健的安全实践和明确的责任。此举旨在继续应对围绕 AI 潜在危害的担忧。",
              "link": "https://www.jiemian.com/article/15129839.html",
              "tags": [
                "安全评估",
                "治理"
              ],
              "source": "界面新闻",
              "time": "9月23日消息"
            },
            {
              "title": "奥特曼在联合国安理会演讲：AI 或带来工业革命式动荡",
              "summary": "当地时间9月23日，OpenAI CEO 奥特曼在联合国安理会就 AI 议题发表讲话，讨论 AI 带来的机遇与风险，呼吁建立前沿 AI 系统的能力评估、风险评估、安全防护和人类监督标准。他提出 AI 正站在两条路径分岔口——最好是一场「文艺复兴」，最坏是引发大规模动荡的「工业革命」，并点名「递归自我改进」须高度谨慎。",
              "link": "https://finance.sina.com.cn/7x24/2026-09-24/doc-iniswezp8319783.shtml",
              "tags": [
                "联合国",
                "监管"
              ],
              "source": "新浪财经",
              "time": "当地时间9月23日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 成立生命科学团队和实验室，Claude 自主发现新型酶系统",
              "summary": "当地时间9月23日，Anthropic 宣布成立生命科学研究团队及自有分子生物学实验室，并公布 Claude 在仅获宏观研究方向的情况下，自主发现了一种此前未被表征的酶系统，命名为阵列关联逆转录酶（ART）。这是其生命科学团队自今年春季组建以来的首个公开成果，相关预印本已发布，尚待同行评审。Anthropic 强调 ART 的确切功能仍不明确，后续仍需大量实验验证。",
              "link": "https://www.ithome.com/1/006/524.htm",
              "tags": [
                "生命科学",
                "Claude"
              ],
              "source": "IT之家",
              "time": "当地时间9月23日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌推出 Gemini 3.8 系列文本转语音模型",
              "summary": "谷歌宣布 Gemini 家族新增 Gemini 3.8 Flash TTS 与 Gemini 3.8 Flash-Lite TTS 两款文本转语音模型，用户可从原有 30 种原始语音扩展至无限语音库。两款 TTS 模型都能让用户精确控制每一行台词的演绎方式，为语音合成与实时交互提供更灵活的音频能力。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-09-23/doc-inisvumr5851820.shtml",
              "tags": [
                "TTS",
                "Gemini"
              ],
              "source": "新浪财经",
              "time": "9月23日消息"
            },
            {
              "title": "YouTube 推出 AI 智能体，帮创作者「翻红」老视频",
              "summary": "在 Made on YouTube 年度活动上，YouTube 宣布升级 AI 创作工具，推出一款帮助创作者在后台优化频道的智能体，可查看频道历史视频，找出重新受关注或契合新闻热点的内容，并建议修改缩略图或标题。该智能体还能提取受众数据帮助创作者向品牌推介合作方案，并可直接生成缩略图与标题。",
              "link": "https://www.163.com/dy/article/L7I1VMHU0511B8LM.html",
              "tags": [
                "AI Agent",
                "创作者工具"
              ],
              "source": "网易",
              "time": "9月23日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX AI 智能体 Grok Bot 上线首月，周用户数突破 40 万",
              "summary": "据彭博社报道，SpaceXAI 的 AI 智能体 Grok Bot 上线约一个月，截至 9 月 14 日周用户数已达 41.8 万，较前一周增加 24%。Grok Bot 定位为全天候待命的员工而非聊天机器人，可回复邮件、更新销售数据库、处理发票、安排工作等。其企业工具定位与面向消费者的 Meta Muse 形成对比。",
              "link": "https://www.yicai.com/news/103374791.html",
              "tags": [
                "Grok Bot",
                "AI Agent"
              ],
              "source": "第一财经",
              "time": "9月22日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": []
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 推出无摄像头版智能眼镜，引入 Muse 助手功能",
              "summary": "当地时间9月23日，Meta 在 Connect 年度大会上扩展智能眼镜产品线，发布首款不搭载摄像头的 Ray-Ban Meta Audio 智能眼镜，起售价 349 美元，计划 10 月 3 日发货。同时推出第三代搭载摄像头的 Ray-Ban Meta 眼镜及新款价格更低的 Meta 品牌智能眼镜，第三代机型配备可自定义的「操作按钮」，用于启动 Muse 语音助手。",
              "link": "https://www.yicai.com/news/103376497.html",
              "tags": [
                "智能眼镜",
                "Muse"
              ],
              "source": "第一财经",
              "time": "当地时间9月23日"
            },
            {
              "title": "Meta 发布 AI「电子宠物」设备 Muse Charm",
              "summary": "Meta 发布 AI 时代「电子宠物」设备 Muse Charm，由前苹果设计师打造，可挂在背包上作为随身人工智能。该设备延续 Meta 面向消费者的 Muse 产品线，与近期推出的智能眼镜、Muse 助手共同构成 Meta 的 AI 硬件矩阵。",
              "link": "https://www.ithome.com/1/006/546.htm",
              "tags": [
                "Muse Charm",
                "AI硬件"
              ],
              "source": "IT之家",
              "time": "9月24日消息"
            },
            {
              "title": "Meta 测试真人代 Muse 拨打电话，引发内部隐私争议",
              "summary": "据路透社看到的 Meta 内部帖子，Meta 正在为个人 AI 助手 Muse 测试「人工礼宾」服务，由人类承包商在后台处理部分通过该助手拨出的电话，如预约理发、询问门店库存等。一些员工对此提出隐私担忧，警告可能导致敏感信息被无意中分享给呼叫中心承包商。",
              "link": "https://www.cls.cn/detail/2490564",
              "tags": [
                "Muse",
                "隐私"
              ],
              "source": "财联社",
              "time": "9月23日消息"
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
              "title": "千问发布 Qwen-Audio-3.1 系列语音大模型，全线降价",
              "summary": "千问正式发布 Qwen-Audio-3.1 系列语音大模型，对语音识别（ASR）、语音合成（TTS）和实时语音交互（Realtime）三大核心模型全面进化，并推出音频创作模型 TTS-Next 和音频理解模型 ASR-Next。五款语音模型同发，形成覆盖「理解-生成-交互-创作」的音频能力栈；Qwen-Audio 全线降价，TTS 降约 70%、Realtime 降约 85%、ASR 降达 95%。",
              "link": "https://tech.ifeng.com/c/8wbYxCAilw7",
              "tags": [
                "Qwen-Audio",
                "语音模型"
              ],
              "source": "凤凰网",
              "time": "9月23日消息"
            },
            {
              "title": "阿里云首款智能体电脑 Qwen Book 亮相云栖大会",
              "summary": "云栖大会上，阿里云旗下 AI 智能体电脑 Qwen Book 正式发布，搭载 Skill 键盘阵列、全局 AI 按键、语音手写笔等多种交互入口和 7x24 小时执行重度任务的操作空间，能自主理解用户意图并不断进化，解决 AI 办公和生活中跨应用、跨 Agent 使用的痛点。",
              "link": "https://www.chinaz.com/ainews/31301.shtml",
              "tags": [
                "Qwen Book",
                "AI硬件"
              ],
              "source": "站长之家",
              "time": "9月23日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包工作功能升级，新增「目标模式」与「计划模式」",
              "summary": "豆包工作更新任务模式，新增「目标模式」和「计划模式」。目标模式中用户可给出明确验收要求，系统在交付前逐项检查结果；计划模式先生成可编辑的任务计划，用户确认后再执行。此次更新还加入任务队列、Markdown 文件编辑和深色模式，已在豆包工作电脑版上线。",
              "link": "https://finance.eastmoney.com/a/202609233882330336.html",
              "tags": [
                "豆包工作",
                "Agent"
              ],
              "source": "东方财富",
              "time": "9月23日消息"
            },
            {
              "title": "豆包公关负责人回应「裁员、对话团队砍掉一半」传闻：不实",
              "summary": "豆包公关负责人刘星回应「裁员、对话团队砍掉一半」传闻称不实，系分工组织调整。此前有报道称豆包通用 Session 团队正在减员、规模预计缩减约一半，此次为豆包方面的公开澄清。",
              "link": "https://www.ithome.com/1/006/610.htm",
              "tags": [
                "豆包",
                "组织调整"
              ],
              "source": "IT之家",
              "time": "9月24日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "高瓴创投原合伙人严文韬正式入职 DeepSeek 任 CFO",
              "summary": "据 21 财经报道，高瓴创投原合伙人严文韬已正式加入 DeepSeek 出任 CFO。这位被梁文锋选中的大将出生于 1991 年，毕业于复旦大学，先后任职腾讯投资、H Capital，2020 年加入高瓴创投并晋升为合伙人，过往参与投资的代表项目包括字节跳动、智谱、MiniMax、小红书等。",
              "link": "https://www.163.com/dy/article/L7EHUQ590511CPVM.html",
              "tags": [
                "CFO",
                "人事"
              ],
              "source": "网易",
              "time": "9月23日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯 QClaw 微信远程办公 AI 助手宣布 12 月 24 日停运",
              "summary": "腾讯 QClaw 微信远程办公 AI 助手发布公告，因业务发展调整将于 2026 年 12 月 24 日 00:00 正式停运，9 月 24 日起停止新用户注册与订阅购买。QClaw 由腾讯电脑管家团队基于 OpenClaw 打造，可微信远程整理文件、执行复杂任务；官方提供「迁移到 WorkBuddy」入口及未用订阅退款。",
              "link": "https://www.ithome.com/1/006/528.htm",
              "tags": [
                "QClaw",
                "停运"
              ],
              "source": "IT之家",
              "time": "9月24日消息"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米 18 Pro 系列发布，5999 元起售，全球首发骁龙 2nm 旗舰",
              "summary": "小米秋季新品发布会上，小米 18 Pro 系列正式发布，5999 元起售、发布即开售。该系列全球首发高通第六代骁龙 8 至尊版 / 超级至尊版（2nm 制程），搭载融入小米 MiMo 大模型的超级小爱 2.0，可自主使用超过 260 个系统工具；另推出透明特别版 9999 元起。",
              "link": "https://www.ithome.com/1/006/426.htm",
              "tags": [
                "小米18",
                "超级小爱"
              ],
              "source": "IT之家",
              "time": "9月23日消息"
            },
            {
              "title": "罗福莉官宣小米 MiMo-V3 采用全新架构，核心 HySparse 2 发布",
              "summary": "小米 MiMo 大模型负责人罗福莉宣布 MiMo-V3 即将采用全新架构，其核心 HySparse 2 已于 9 月 23 日发布，带来更少的预填充、更小的 KV 缓存和更出色的长上下文检索能力，为小米下一代大模型奠定基础。",
              "link": "https://www.ithome.com/1/006/502.htm",
              "tags": [
                "MiMo-V3",
                "HySparse"
              ],
              "source": "IT之家",
              "time": "9月23日消息"
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
              "title": "华为小艺 Work 上线，首次使用 31 天限时免费享 1000 AI 点",
              "summary": "华为官宣小艺 Work 上线，首次使用可享 31 天限时免费及 1000 AI 点。小艺 Work 是华为面向生产力场景的 AI 助手产品，此次上线进一步丰富了华为的端侧 AI 应用矩阵。",
              "link": "https://www.ithome.com/1/006/695.htm",
              "tags": [
                "小艺",
                "AI助手"
              ],
              "source": "IT之家",
              "time": "9月24日消息"
            },
            {
              "title": "任正非重申华为不造车，乐意为东风发挥智能化特长",
              "summary": "奕境汽车品牌总经理曾清林发文回忆拜访华为创始人任正非的经历。据其回忆，任正非表示东风有非常好的造车底蕴和基础，华为不造车，但很乐意发挥华为在智能化方面的特长，帮助东风造好车。",
              "link": "https://www.ithome.com/1/006/411.htm",
              "tags": [
                "不造车",
                "智能化"
              ],
              "source": "IT之家",
              "time": "9月23日消息"
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
              "title": "高通",
              "news": [
                {
                  "title": "高通骁龙 X2 系列正式支持 Linux，拓展第三大操作系统生态",
                  "summary": "高通在 2026 骁龙峰会上宣布，骁龙 X2 系列 PC 处理器将正式支持 Linux 操作系统，成为继 Windows 和 Googlebook 之后的第三个操作系统方向。首期支持 Debian（今年底前），Ubuntu 认证目标 2027 年上半年完成；惠普、华硕与 HUMAIN 计划 2027 年一季度推出 Linux 设备，华硕 ZenBook A14/A16 将首发 Ubuntu。",
                  "link": "https://www.donews.com/news/detail/8/6722724.html",
                  "tags": [
                    "骁龙X2",
                    "Linux"
                  ],
                  "source": "DoNews",
                  "time": "9月23日消息"
                },
                {
                  "title": "高通加码物理人工智能，拟收购机器人软件企业 PickNik Robotics",
                  "summary": "高通拟收购机器人软件企业 PickNik Robotics，加码物理人工智能布局。PickNik 是知名机器人软件公司，其技术可增强机器人在复杂环境中的运动规划与操控能力，此次收购显示高通正将业务从移动芯片向具身智能与机器人领域延伸。",
                  "link": "https://www.ithome.com/1/006/594.htm",
                  "tags": [
                    "物理AI",
                    "机器人"
                  ],
                  "source": "IT之家",
                  "time": "9月24日消息"
                }
              ]
            },
            {
              "title": "京东方",
              "news": [
                {
                  "title": "京东方玻璃基封装载板试验线全线拉通，24 层产品送客户验证",
                  "summary": "京东方披露玻璃基封装载板试验线已全线拉通，完成尺寸超 100×100 毫米的 24 层基板产出并通过厂内信赖性测试，22 层、24 层产品已送交客户验证。玻璃基载板主要面向大尺寸算力芯片的先进封装，京东方已投入近 10 亿元建设中试线，希望在 2027 年一季度或上半年达到量产投资决策条件。",
                  "link": "https://www.nbd.com.cn/articles/2026-09-22/4589259.html",
                  "tags": [
                    "玻璃基板",
                    "先进封装"
                  ],
                  "source": "每日经济新闻",
                  "time": "9月22日消息"
                }
              ]
            },
            {
              "title": "蚂蚁",
              "news": [
                {
                  "title": "蚂蚁密算发布「密算一号」，企业可在受控条件下调用云上 AI",
                  "summary": "在 2026 云栖大会专题论坛上，蚂蚁密算发布企业级可信智能云服务平台「密算一号」并启动首批企业定向邀测。平台面向需跨机构使用数据、将敏感业务资料接入云上 AI 的企业，由蚂蚁密算统一处理参与方接入、权限管理、密态计算环境配置和结果交付，调用云上大模型时限制云平台与模型服务商查看、留存原始业务内容。",
                  "link": "https://www.sohu.com/a/1080124969_116706",
                  "tags": [
                    "密算一号",
                    "可信AI"
                  ],
                  "source": "搜狐",
                  "time": "9月23日消息"
                },
                {
                  "title": "蚂蚁开源 Ming-Image 设计模型，可生成版式并拆分图层",
                  "summary": "蚂蚁旗下 inclusionAI 开源 Ming-Image-0.1-Design 与 Ming-Image-0.1-Design-Layer 两款设计模型。前者是 6B 参数文生图模型，面向 UI、信息图、海报等含文字的视觉设计并可生成透明背景；后者可把一张已合成的设计图按要求拆成多个透明图层，两者均采用 MIT 许可证。",
                  "link": "https://www.ithome.com/1/006/390.htm",
                  "tags": [
                    "Ming-Image",
                    "开源"
                  ],
                  "source": "IT之家",
                  "time": "9月23日消息"
                }
              ]
            },
            {
              "title": "阶跃星辰",
              "news": [
                {
                  "title": "阶跃星辰开源 CLI 编程智能体 Step Code，基准测试通过率 80.9%",
                  "summary": "阶跃星辰开源 AI 编程工具 Step Code v0.1.0，采用 MIT 许可。它运行在终端中，可完成代码阅读、修改、测试与静态站点发布，支持 MCP、Agent Skills 和 Claude Code 插件，并提供 /goal 长任务托管与 /cron 定时命令。官方称其 Terminal Bench 2.1 得分 80.9%，长程任务平均消耗 token 为六种框架中最低。",
                  "link": "https://www.163.com/dy/article/L7FKO8IC05561FZX.html",
                  "tags": [
                    "Step Code",
                    "开源"
                  ],
                  "source": "网易",
                  "time": "9月23日消息"
                }
              ]
            },
            {
              "title": "Mirage",
              "news": [
                {
                  "title": "Mirage 发布 Tesseract，让 AI Agent 直接编辑分层视频项目",
                  "summary": "当地时间9月22日，视频工具公司 Mirage 发布 Tesseract，一套面向 AI Agent 的本地视频创作引擎。用户向 Agent 提供素材和要求后，Agent 可直接操作时间线、图层、关键帧、遮罩、调节层和音轨，生成可继续修改的项目并在本地预览、渲染和导出。引擎本身免费，采用其 Captions 产品背后的引擎。",
                  "link": "https://mirage.app/tesseract",
                  "tags": [
                    "Tesseract",
                    "视频Agent"
                  ],
                  "source": "Mirage",
                  "time": "当地时间9月22日"
                }
              ]
            },
            {
              "title": "WPP",
              "news": [
                {
                  "title": "WPP 在伦敦启用 AI 广告制作中心，先服务可口可乐、联合利华等客户",
                  "summary": "广告集团 WPP 在伦敦东部启用约 3.4 万平方英尺的 AI 广告制作中心，整合虚拟拍摄、后期制作、创作者协作和 AI 工具，是其全球制作网络首个旗舰中心，首批客户包括可口可乐、联合利华和福特。中心的虚拟制作系统可在摄影棚内实时更换场景，缩短广告从拍摄到交付的时间。",
                  "link": "https://www.36kr.com/newsflashes/3995339613376646",
                  "tags": [
                    "AI广告",
                    "WPP"
                  ],
                  "source": "36氪",
                  "time": "9月23日消息"
                }
              ]
            },
            {
              "title": "爱奇艺",
              "news": [
                {
                  "title": "爱奇艺 CEO 龚宇：AI 是内容的加分项，不是搭建流水线的工具",
                  "summary": "爱奇艺 CEO 龚宇谈及 AI 在内容行业中的作用时表示，AI 是内容的加分项，不是用来搭建流水线的工具。他此前已推动爱奇艺在 AI 长剧、演员授权等方向探索，此番表态进一步明确其「AI 辅助而非替代」的内容创作立场。",
                  "link": "https://www.ithome.com/1/006/558.htm",
                  "tags": [
                    "AI内容",
                    "观点"
                  ],
                  "source": "IT之家",
                  "time": "9月24日消息"
                }
              ]
            },
            {
              "title": "科大讯飞",
              "news": [
                {
                  "title": "科大讯飞发布全新语音识别大模型 Spark-ASR-2.0",
                  "summary": "科大讯飞发布全新语音识别大模型 Spark-ASR-2.0，并宣布明日上线讯飞输入法。作为其星火大模型在语音识别方向的最新版本，Spark-ASR-2.0 进一步提升语音识别精度与场景适配能力。",
                  "link": "https://www.ithome.com/1/006/345.htm",
                  "tags": [
                    "Spark-ASR",
                    "语音识别"
                  ],
                  "source": "IT之家",
                  "time": "9月24日消息"
                }
              ]
            },
            {
              "title": "rabbit",
              "news": [
                {
                  "title": "rabbit 发布 OS3 智能体操作系统，支持多设备编排",
                  "summary": "rabbit 沉寂许久后发布 OS3 智能体操作系统，支持多设备编排。作为 AI 硬件厂商，rabbit 曾以 R1 设备走红，此次 OS3 的发布标志着其从单一设备向跨设备智能体操作系统方向演进。",
                  "link": "https://www.ithome.com/1/006/483.htm",
                  "tags": [
                    "OS3",
                    "智能体"
                  ],
                  "source": "IT之家",
                  "time": "9月24日消息"
                }
              ]
            },
            {
              "title": "亚马逊",
              "news": [
                {
                  "title": "亚马逊今年将为配送小哥部署 5000 台智能眼镜",
                  "summary": "亚马逊宣布今年将为配送人员部署 5000 台智能眼镜，配送员无需看手机即可获取导航和送货指引。这是亚马逊在 AI 眼镜与物流自动化结合上的落地尝试，旨在提升最后一公里配送效率。",
                  "link": "https://www.ithome.com/1/006/424.htm",
                  "tags": [
                    "智能眼镜",
                    "物流"
                  ],
                  "source": "IT之家",
                  "time": "9月24日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "Comma.ai",
              "news": [
                {
                  "title": "美国调查 Comma.ai 辅助驾驶设备，涉及 5 起碰撞事故致 3 死",
                  "summary": "美国国家公路交通安全管理局对 Comma.ai 的后装辅助驾驶设备展开初步调查，收到 5 起车辆在相关设备使用时撞上同车道慢行或静止车辆的事故报告，其中 2 起致 3 人死亡，另有最多 11 人受伤。调查将重点关注涉及 openpilot 第三方修改版本的情况，评估系统对前方静止/慢行车辆的识别与响应能力。",
                  "link": "https://www.morningstar.com/news/dow-jones/202609234513/regulators-investigate-crashes-involving-autonomous-driving-products-from-commaai",
                  "tags": [
                    "Comma.ai",
                    "NHTSA"
                  ],
                  "source": "道琼斯新闻社",
                  "time": "当地时间9月23日"
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
                  "title": "宇树 19 台人形机器人完成全球首次全 AI 驱动自主集群表演",
                  "summary": "9月22日，在第 48 届世界技能大赛开幕式上，宇树科技 19 台 H2 人形机器人与 120 名舞者同台共舞，上演全球首次全尺寸通用人形机器人全 AI 驱动自主集群表演。机器人不依靠场外定位基站，完全依靠机载激光雷达实现厘米级自主定位，借助自研集群协同调度系统实现毫秒级同步，舞蹈动作由强化学习算法生成。",
                  "link": "https://finance.eastmoney.com/a/202609223881464849.html",
                  "tags": [
                    "宇树",
                    "人形机器人"
                  ],
                  "source": "东方财富",
                  "time": "9月22日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "软银·OpenAI",
              "news": [
                {
                  "title": "软银接受总额 100 亿美元债券认购，为 OpenAI 投资筹资",
                  "summary": "一份条款清单显示，软银集团正就 100 亿美元债券发行接受投资者认购，以帮助为其对 OpenAI 的投资提供资金。软银计划通过 3 年半期、5 年半期和 7 年半期债券分别筹集 10 亿、45 亿和 45 亿美元，发行利率指导区间在 8.75% 至 9.875% 之间。",
                  "link": "https://www.jiemian.com/article/15019767.html",
                  "tags": [
                    "软银",
                    "OpenAI"
                  ],
                  "source": "界面新闻",
                  "time": "9月23日消息"
                }
              ]
            },
            {
              "title": "欧卡智舶",
              "news": [
                {
                  "title": "欧卡智舶完成数亿 C 轮融资，半年累计规模达 3 亿元",
                  "summary": "海面具身智能公司欧卡智舶完成数亿 C 轮融资，半年累计规模达 3 亿元，本轮由西高投领投，元禾璞华、三元资本跟投。资金将主要用于海面物理 AI 的技术迭代、船舶通用大脑 APAS 系统的场景拓展，以及 C 端水上休闲业务的产品推进。",
                  "link": "https://www.donews.com/news/detail/8/6720877.html",
                  "tags": [
                    "融资",
                    "海面AI"
                  ],
                  "source": "DoNews",
                  "time": "9月23日消息"
                }
              ]
            },
            {
              "title": "Bird.com",
              "news": [
                {
                  "title": "AI 通信基础设施公司 Bird.com 完成 4.5 亿美元融资",
                  "summary": "AI 通信基础设施公司 Bird.com 宣布完成 4.5 亿美元债务融资，由摩根大通牵头，并推出改造后的 Agentic Harness 平台。该平台让 AI 代理无需自定义集成即可在 Bird 网络上发送消息、拨打电话、管理电子邮件，甚至获得自己的 eSIM 电话套餐。",
                  "link": "https://video.sina.com.cn/p/finance/2026-09-23/detail-inisvumv5236728.d.html",
                  "tags": [
                    "融资",
                    "通信AI"
                  ],
                  "source": "新浪财经",
                  "time": "9月23日消息"
                }
              ]
            },
            {
              "title": "息壤开物",
              "news": [
                {
                  "title": "Physical AI 初创公司息壤开物完成种子轮及天使轮融资",
                  "summary": "Physical AI 初创公司息壤开物连续完成种子轮及天使轮融资，由敦鸿资产领投，华控基金、三花控股、银杏谷资本等机构跟投，目前估值达 5 亿美元。募集资金将主要用于原生物理 AI 模型的规模预训练、真实物理交互数据建设、核心研发人才引入与场景验证。",
                  "link": "https://www.163.com/dy/article/L7GJDPBH0534A4SC.html",
                  "tags": [
                    "融资",
                    "Physical AI"
                  ],
                  "source": "网易",
                  "time": "9月23日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "AI 降价潮",
              "news": [
                {
                  "title": "微软、亚马逊、Adobe 等软件企业 AI 产品降价挽留客户",
                  "summary": "亚马逊、微软、Figma、Workday 等软件企业与云服务商，正面向客户及咨询合作伙伴推出 AI 产品新折扣方案，客户对 AI 定价频繁变动已感疲惫。此前企业客户增加预算采购 Claude Code、Codex 等产品，如今挑选 AI 工具更审慎，对软件厂商改为按使用量或任务完成量收费的定价模式抱怨不断。有跨国制造企业高管称，微软将 GitHub Copilot 改为按量计费后为其提供至少一个月宽限期，期间企业仍可按席位订阅付费。",
                  "link": "https://finance.sina.com.cn/stock/usstock/c/2026-09-23/doc-inistrnr6648314.shtml",
                  "tags": [
                    "AI定价",
                    "价格战"
                  ],
                  "source": "新浪财经",
                  "time": "9月23日消息"
                }
              ]
            },
            {
              "title": "李飞飞",
              "news": [
                {
                  "title": "李飞飞：AI 安全不能只由开发者自我评估",
                  "summary": "World Labs CEO、斯坦福大学教授李飞飞接受 Bloomberg Technology 采访时表示，开发 AI 系统的公司必须做内部评估，但不能成为唯一的安全裁判，行业之外还需独立机构建立基准，验证厂商没有遗漏或淡化的风险。她主张把模型评估做成「生态系统层面的责任」，学术界、公共部门、政府和民间社会都应参与。",
                  "link": "https://www.chinaz.com/ainews/31296.shtml",
                  "tags": [
                    "AI安全",
                    "评估"
                  ],
                  "source": "站长之家",
                  "time": "9月23日消息"
                }
              ]
            },
            {
              "title": "AI 恶意软件",
              "news": [
                {
                  "title": "研究人员发现「AI 自治恶意软件」CLOSEDQUORUM，同时调用四大聊天机器人",
                  "summary": "思科旗下 Cisco Talos 发现一种名为 CLOSEDQUORUM 的新型 Windows 恶意软件，将多个大语言模型直接纳入自身控制体系，运行时同时与 DeepSeek、通义千问、Mistral 和 Google Gemini 交互，根据反馈自主决定后续行为。其主要目标是窃取账号密码与加密货币资产，被认为代表 AI 恶意软件发展的新阶段。",
                  "link": "https://www.freebuf.com/articles/ai-security/502742.html",
                  "tags": [
                    "恶意软件",
                    "安全"
                  ],
                  "source": "FreeBuf",
                  "time": "9月22日消息"
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
          "name": "OpenRouter",
          "date": "2026-09-24",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "19T tokens",
              "change": "↑69%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "18.4T tokens",
              "change": "↑79%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "13T tokens",
              "change": "↑9%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "8.74T tokens",
              "change": "↑50%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "8.49T tokens",
              "change": "↑24%"
            },
            {
              "model": "MiMo-V2.5 (xiaomi)",
              "score": "5.66T tokens",
              "change": "↑28%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.02T tokens",
              "change": "↑44%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.91T tokens",
              "change": "↑13%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.46T tokens",
              "change": "↑18%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.05T tokens",
              "change": "↑24%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.14T tokens",
              "change": "↑1%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.11T tokens",
              "change": "↑7%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "1.9T tokens",
              "change": "↑3%"
            },
            {
              "model": "GPT-6 Astra (openai)",
              "score": "1.8T tokens",
              "change": "↑120%"
            },
            {
              "model": "Solar Pro 4 (upstage)",
              "score": "1.75T tokens",
              "change": "↑5%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.72T tokens",
              "change": "↑16%"
            },
            {
              "model": "Claude Sonnet 5 (anthropic)",
              "score": "1.47T tokens",
              "change": "↑3%"
            },
            {
              "model": "MiniMax M3 (minimax)",
              "score": "1.47T tokens",
              "change": "0%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.42T tokens",
              "change": "↑3%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "1.39T tokens",
              "change": "new"
            }
          ]
        },
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
