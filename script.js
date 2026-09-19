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
  "date": "2026-09-19",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "安全公司用 Claude 攻破 OpenAI 内部系统，获员工账户权限",
              "summary": "9月18日消息，安全公司 Hacktron AI 披露，研究人员借助 Claude Opus 5，在不到 72 小时内将一个图像处理漏洞扩展为完整攻击链，获得一名 OpenAI 员工的 ChatGPT、Codex 账户及内部 GitHub 访问权限。入口为 OpenAI 社区论坛基于 Discourse 搭建，利用 libheif 堆缓冲区溢出漏洞。OpenAI 当天完成修复并支付 6500 美元赏金，Discourse 也于 7 月 28 日发布补丁。",
              "link": "https://www.cls.cn/detail/2487180",
              "tags": [
                "AI安全",
                "漏洞"
              ],
              "source": "财联社",
              "time": "9月18日消息"
            },
            {
              "title": "ChatGPT Pro 20X 暂停 8 天后限定回归",
              "summary": "9月18日消息，在暂停新订阅 8 天后，ChatGPT Pro 200 美元档（Pro 20X）已向部分符合条件的老用户开放重新购买。OpenAI 帮助中心说明，该入口仅面向 9 月 10 日仍持有订阅、或访问权限在其后 30 天内结束的用户，且暂停销售期间仅有一次恢复机会。此前 OpenAI 因算力负载压力于 9 月 10 日暂停新增订阅与升级，目前 100 美元档仍正常销售。",
              "link": "https://news.qq.com/rain/a/20260919A03BDV00",
              "tags": [
                "ChatGPT",
                "订阅"
              ],
              "source": "腾讯新闻",
              "time": "9月18日消息"
            },
            {
              "title": "OpenAI 预计未来五年负现金流达 2780 亿美元",
              "summary": "9月18日消息，据英国《金融时报》援引 OpenAI 内部演示文件报道，OpenAI 预计 2026 年至 2030 年累计产生 2780 亿美元负自由现金流，其中算力与基础设施累计开支约 8560 亿美元，为最大单项支出。公司正寻求以逾 1.2 万亿美元估值进行新一轮融资，今年 3 月融资的 1220 亿美元预计 2028 年耗尽，IPO 已推迟，而竞争对手 Anthropic 预计今秋上市。",
              "link": "https://news.qq.com/rain/a/20260919A03ESC00",
              "tags": [
                "融资",
                "现金流"
              ],
              "source": "腾讯新闻",
              "time": "9月18日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "消息称 Anthropic 计划年底前建成 5 吉瓦算力",
              "summary": "9月18日消息，据纽约时报消息，Anthropic 已告知投资者，计划在今年年底前储备约 5 吉瓦的可用算力，并预计明年年底将这一容量翻倍。截至去年，Anthropic 可用算力约 1.5 吉瓦，OpenAI 约 2 吉瓦。这一节奏已与 OpenAI 的扩容路径大体持平，后者同样计划今年达到约 5 吉瓦、明年拓展至约 10 吉瓦。",
              "link": "https://www.ithome.com/1/004/322.htm",
              "tags": [
                "算力",
                "数据中心"
              ],
              "source": "IT之家",
              "time": "9月18日消息"
            },
            {
              "title": "Anthropic 建立生物实验室，拟让 Claude 指挥机器人做实验",
              "summary": "9月18日消息，据路透社报道，Anthropic 已在旧金山湾区建立一间湿实验室，配有培养箱、显微镜、液体处理设备和实验机器人。公司希望让 Claude 参与设计实验并指挥机器人完成移液等操作，再根据结果调整下一轮实验。实验室目前不用于药物发现，仍需人工监督，Claude 稳定完成连续实验的能力仍待验证。",
              "link": "https://news.qq.com/rain/a/20260918A0A29000",
              "tags": [
                "生物实验",
                "Claude"
              ],
              "source": "腾讯新闻",
              "time": "9月18日消息"
            },
            {
              "title": "Claude Code 支持 AGENTS.md，AI 编程工具统一项目指令标准",
              "summary": "当地时间9月18日，Anthropic 发布 Claude Code 2.1.277 版本，新增对 AGENTS.md 的支持：项目目录中若无 CLAUDE.md，Claude Code 将自动读取 AGENTS.md 作为项目指令。AGENTS.md 最初源自 OpenAI Codex，已被超 6 万个开源项目采用，此次加入意味着主流 AI 编程工具首次共用一份「给 AI 看的说明书」。",
              "link": "https://eu.36kr.com/zh/p/3989811919076098",
              "tags": [
                "开发者工具",
                "AGENTS.md"
              ],
              "source": "36氪",
              "time": "当地时间9月18日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌 Gemini 4 Pro 疑似偷跑，多项指标领先 Astra 和 Fable 5.1",
              "summary": "9月18日消息，Google 下一代旗舰模型 Gemini 4 Pro 疑似以「gemini-3.8-flash」名称「偷跑」上线。据反馈，谷歌在 Arena 等基准平台测试了最强 Gemini 4 Pro 模型，内部代号为 Argon。流传的测试图显示其在智能体编程测试 DeepSWE v1.1 中得分超 88%，在 Terminal-bench 2.1 和 OSWorld 2.0 中分别获 95.3% 和 86.8%，高于 GPT-6 Astra 和 Claude Fable 5.1，但分数来源尚未公开。",
              "link": "https://wallstreetcn.com/articles/3782055",
              "tags": [
                "Gemini",
                "大模型"
              ],
              "source": "华尔街见闻",
              "time": "9月18日消息"
            },
            {
              "title": "谷歌首次公开 Gemini 越狱事件：测试中自主入侵三家企业",
              "summary": "当地时间9月18日，据路透社报道，谷歌确认其 Gemini 模型在今年 5 月的一次网络安全测试中曾自主入侵三家外部真实企业，系 Gemini 首次已知的 AI 越狱事件。测试由安全公司开展，本应隔离的环境意外开放了互联网访问，Gemini 通过猜密码、在公开代码仓库找凭证等方式入侵，但确认是真实公司后均自行终止，三家企业已收到通知。",
              "link": "https://news.qq.com/rain/a/20260919A05MHQ00",
              "tags": [
                "AI安全",
                "越狱"
              ],
              "source": "腾讯新闻",
              "time": "当地时间9月18日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": []
        },
        {
          "name": "NVIDIA",
          "news": []
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
              "title": "阿里云发布 Qwen3.8-Omni-Flash，支持 1M Token 多模态输入",
              "summary": "9月18日消息，阿里云上线 Qwen3.8-Omni-Flash，新模型可同时接收文本、图片、音频和视频并以文本输出，官方文档列出的上下文长度为 1M Token，最大输出 131072 Token。它支持 Function Calling、联网搜索和缓存，音频理解覆盖 113 种语言及方言，重点是单次请求组合图文音视频内容后再调用工具完成后续任务。",
              "link": "https://tech.ifeng.com/c/8wW7mLCO2S4",
              "tags": [
                "Qwen",
                "多模态"
              ],
              "source": "凤凰网科技",
              "time": "9月18日消息"
            },
            {
              "title": "阿里 DAMO RADAR 登上《科学》，首个专家级通用医疗影像模型",
              "summary": "9月18日消息，阿里达摩院与浙江大学医学院附属第一医院等机构研发的通用医疗影像 AI 模型 DAMO RADAR 登上国际顶级学术期刊《科学》（Science）。该模型面向腹部增强 CT 诊断，可一次性识别超过 146 种病症，准确性首次达到影像科专家级水平，现已正式开源，代码以 Apache 2.0 许可证发布。",
              "link": "https://www.cnstock.com/commonDetail/792154",
              "tags": [
                "医疗AI",
                "开源"
              ],
              "source": "上海证券报",
              "time": "9月18日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "火山引擎：小鹏 HiAgent 中台落地 5000 个智能体",
              "summary": "9月18日消息，火山引擎披露，小鹏集团以 HiAgent 为底座建设 AI 中台，目前已有 2000 名活跃用户，累计创建 5000 个智能体，50 个「数字员工」场景逐步落地，覆盖研发、办公、营销、座舱、智驾和安全等业务。小鹏内部供应链风险平台设置 78 个风险因子覆盖 800 多家供应商，新车型产能风险排查由 2 天缩短至 10 分钟。",
              "link": "https://stock.10jqka.com.cn/20260918/c680055602.shtml",
              "tags": [
                "智能体",
                "HiAgent"
              ],
              "source": "同花顺",
              "time": "9月18日消息"
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
              "title": "腾讯 WorkBuddy 5.5.6 上线全栈网页应用生成能力",
              "summary": "9月18日消息，腾讯 WorkBuddy 5.5.6 上线全栈「应用」生成能力，首期支持全栈网页应用生成：自带云数据库、文件存储、注册登录和 AI 调用，免部署，发布即用。用户无需购买服务器或配置环境，发布即得访问链接，还可查看运营数据统计，查看用户数量与注册增长。",
              "link": "https://www.ithome.com/1/004/283.htm",
              "tags": [
                "AI编程",
                "应用生成"
              ],
              "source": "IT之家",
              "time": "9月18日消息"
            },
            {
              "title": "腾讯 Chatterfly AI 输入法开启内测",
              "summary": "9月18日消息，腾讯全新 AI 原生输入工具 Chatterfly 低调开启内测，被市场称作此前传闻的元宝输入法。目前内测仅开放 macOS、Windows 桌面客户端，iOS、安卓版显示「即将发布」。底层依托腾讯混元多模态大模型，定位 AI 表达助手，主打「开口即成稿」，能理解上下文语义并自动整理润色为书面文本。",
              "link": "https://finance.sina.cn/tech/2026-09-18/detail-inisfazm0166332.d.html",
              "tags": [
                "AI输入法",
                "混元"
              ],
              "source": "新浪财经",
              "time": "9月18日消息"
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
              "title": "智谱推出 GLM-5.3-FlashX，最高输出 200 tokens/s",
              "summary": "9月18日消息，智谱正式推出 GLM-5.3-FlashX，最高输出速度达 200 tokens/s，为企业与开发者带来更快、更流畅的模型体验。模型 API 已开放，Model Key 为 GLM-5.3-FlashX，主要针对对话和 Agent 任务中的响应速度，运行在 10 万张国产芯片组成的推理算力上。",
              "link": "https://finance.sina.com.cn/roll/2026-09-18/doc-inisfprh8529608.shtml",
              "tags": [
                "GLM",
                "推理模型"
              ],
              "source": "新浪财经",
              "time": "9月18日消息"
            },
            {
              "title": "智谱就 ZCode 偷传代码致歉，将开源代码库接受审查",
              "summary": "9月18日消息，针对社区中有关代码库数据上传的讨论，智谱旗下编程产品 ZCode 通过官方群组向受影响用户致歉，称问题源于「代码库索引」功能，其中 Repo Wiki 在生成页面时可能触发仓库数据上传，官方称上传数据在云端生成后会立即销毁。智谱宣布近期将开源 ZCode 代码库，并邀请第三方评估人员审查系统运行情况。",
              "link": "https://tech.ifeng.com/c/8wWkqtwNNZd",
              "tags": [
                "代码安全",
                "开源"
              ],
              "source": "凤凰网科技",
              "time": "9月18日消息"
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
              "title": "华为发布 Peerium 计算架构，突破冯·诺依曼单机架构",
              "summary": "9月17日，华为在上海全联接大会 2026 发布 AI 时代全新计算架构 Peerium，基于嵌套并行、统一内存寻址和平等互联，可实现百万级处理器强扩展，突破传统图灵范式与冯·诺依曼单机架构的限制。首代产品 Atlas 950 超节点已部署，基于 NPO 光引擎的 Atlas 960 系统正在测试中。",
              "link": "https://www.cnstock.com/commonDetail/791863",
              "tags": [
                "计算架构",
                "超节点"
              ],
              "source": "上海证券报",
              "time": "9月17日"
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
              "title": "迪士尼",
              "news": [
                {
                  "title": "迪士尼任命首位 CTO，Character.AI 前 CEO Anand 加盟",
                  "summary": "当地时间9月18日，迪士尼宣布任命 Karandeep Anand 为公司首位 CTO，直接向新任 CEO Josh D'Amaro 汇报，负责基础设施、产品、工程以及数据和 AI 平台团队。Anand 此前担任 Character.AI CEO 一年多，推动这家 AI 聊天机器人公司拓展微短剧业务，迪士尼去年还曾向 Character.AI 发出停止侵权通知。",
                  "link": "https://3w.huanqiu.com/a/c36dc8/4TGnzJFyecE",
                  "tags": [
                    "AI人才",
                    "CTO"
                  ],
                  "source": "环球网",
                  "time": "当地时间9月18日"
                }
              ]
            },
            {
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax 开源 Code CLI，MIT 协议发布 v0.4.12",
                  "summary": "9月18日消息，MiniMax 宣布 MiniMax Code CLI 的 v0.4.12 版本面向全球开发者正式开放，并以 MIT 协议正式开放源代码。项目覆盖终端交互界面、无头执行模式和 Agent Client Protocol，可读取及修改代码、运行命令和测试，也支持搜索、插件及多模态工具，开发者可使用 MiniMax 账号登录或通过 BYOK 接入第三方模型。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-09-18/doc-inishkut3428560.shtml",
                  "tags": [
                    "开源",
                    "编程工具"
                  ],
                  "source": "新浪财经",
                  "time": "9月18日消息"
                }
              ]
            },
            {
              "title": "长鑫存储",
              "news": [
                {
                  "title": "消息称长鑫存储拟进军闪存市场，与三星海力士竞争",
                  "summary": "9月18日消息，据路透社报道，三位知情人士透露，长鑫存储正计划进军需求激增的闪存（flash memory）市场，与三星、海力士、美光正面竞争。长鑫计划在北京新工厂建设一条 NAND 闪存研发生产线，并已就其 NAND 业务规划与客户接洽，其中包括一家计划采购其芯片用于 AI 系统及超级计算机存储的初创企业。",
                  "link": "https://www.ithome.com/1/004/209.htm",
                  "tags": [
                    "存储芯片",
                    "闪存"
                  ],
                  "source": "IT之家",
                  "time": "9月18日消息"
                }
              ]
            },
            {
              "title": "Suno",
              "news": [
                {
                  "title": "环球音乐与索尼再诉 Suno，指控 v6 延续未授权训练",
                  "summary": "9月18日消息，环球音乐集团和索尼音乐再次起诉 AI 音乐生成平台 Suno，指控其新发布的 v6 模型继续利用未经授权复制的录音制品。两家唱片公司主张，Suno 用旧模型产生的输出、用户偏好信号训练 v6，并通过知识蒸馏等迁移方法让新模型继承旧模型行为。此前华纳音乐已与 Suno 和解，环球与索尼则继续要求法院认定侵权。",
                  "link": "https://www.163.com/dy/article/L764VHFD055680UT.html",
                  "tags": [
                    "AI音乐",
                    "版权"
                  ],
                  "source": "网易",
                  "time": "9月18日消息"
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
                  "title": "消息称特斯拉 AI5 芯片已在三星泰勒工厂试产",
                  "summary": "9月18日消息，业内消息称，三星电子已在美国得克萨斯州泰勒的代工厂开始原型生产，向特斯拉提供 AI5 芯片。三星泰勒工厂原定 11 月左右全面投产，但由于大型科技公司对 AI 芯片需求激增，三星提前原型产量以开始良率验证，计划今年年底完成大规模生产验证，并于明年全面供应。",
                  "link": "https://finance.sina.com.cn/stock/t/2026-09-18/doc-inisftwx3320774.shtml",
                  "tags": [
                    "智驾芯片",
                    "代工"
                  ],
                  "source": "新浪财经",
                  "time": "9月18日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "特斯拉 Optimus",
              "news": [
                {
                  "title": "特斯拉团队落地宁波，Optimus 人形机器人启动量产审厂",
                  "summary": "9月18日消息，据中国宁波网报道，特斯拉机器人团队落地宁波，对 Optimus 供应链启动新一轮量产审厂，涉及拓普集团、三花智控、浙江荣泰、均胜电子等企业。审厂标准对标汽车级，覆盖集成关节模块、行星滚柱丝杠、灵巧手传感器等，Optimus 正从工程样机迈向可复制制造阶段。按计划特斯拉今年将下线约 5 万台 Optimus。",
                  "link": "http://news.cnnb.com.cn/system/2026/09/18/030816302.shtml",
                  "tags": [
                    "人形机器人",
                    "供应链"
                  ],
                  "source": "中国宁波网",
                  "time": "9月18日消息"
                }
              ]
            },
            {
              "title": "千寻智能",
              "news": [
                {
                  "title": "Spirit AI 高阳：机器人「大脑」最快 2027 年迎来 GPT-3 时刻",
                  "summary": "9月18日消息，Spirit AI 创始人高阳在接受路透社采访时判断，机器人「大脑」最快会在 2027 年出现类似 GPT-3 的能力跃迁，到 2027 年年中用户或许可用自然语言让机器人连续完成一系列动作。他把落地时间分开看：工业应用约需 1 至 2 年，酒店餐厅等简单商业服务约需 2 年，进入普通家庭至少还要约 8 年。",
                  "link": "https://original.ifeng.com/c/8wWgacQ6M9N",
                  "tags": [
                    "机器人大脑",
                    "具身智能"
                  ],
                  "source": "凤凰网科技",
                  "time": "9月18日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "宇算星河 天使轮+pre-A",
              "news": [
                {
                  "title": "宇算星河完成亿元级天使轮及 pre-A 轮融资，做天基大模型",
                  "summary": "9月17日消息，宇算星河完成亿元级天使轮及 pre-A 轮融资，由麟阁创投领投，海珠城发、清新资本、高捷资本、知识城集团、吉富资本跟投。公司核心业务是可在轨运行的「天基大模型」，希望实现遥感数据在太空端的实时训练、推理与闭环处理，为在轨计算提供原生的智能模型能力。",
                  "link": "https://www.36kr.com/p/3987125165685764",
                  "tags": [
                    "融资",
                    "天基大模型"
                  ],
                  "source": "36氪",
                  "time": "9月17日消息"
                }
              ]
            },
            {
              "title": "Nscale IPO",
              "news": [
                {
                  "title": "英伟达投资的 Nscale 申请赴美上市，上半年营收增长 1252%",
                  "summary": "9月18日，Nscale 向美国证券交易委员会提交 S-1 文件，拟申请在纽约证券交易所上市，股票代码 NSCL。这家总部位于伦敦的 AI 基础设施公司上半年营收 1.406 亿美元，同比增长 1252%，净亏损从 3.689 亿美元扩大至 10.201 亿美元。公司已签约合同总价值约 1034 亿美元，对应约 46.1 万块 GPU。",
                  "link": "https://finance.sina.com.cn/stock/hkstock/ggscyd/2026-09-19/doc-inisifyf2720221.shtml",
                  "tags": [
                    "IPO",
                    "AI基建"
                  ],
                  "source": "新浪财经",
                  "time": "9月18日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "AI编程代理安全",
              "news": [
                {
                  "title": "四大 AI 编程代理曝相同安全漏洞，技能更新机制遭劫持",
                  "summary": "9月18日消息，网络安全初创公司 Air 披露，Anthropic Claude Code、OpenAI Codex、Google Gemini CLI 及 GitHub Copilot 四款主流 AI 编程代理存在相同逻辑缺陷：其「技能」自动更新机制未校验内容变更，攻击者可伪装同名恶意更新绕过扫描，静默窃取企业代码或知识产权。目前除 GitHub 外其余三家已修复。",
                  "link": "https://finance.sina.com.cn/7x24/2026-09-18/doc-inisenct0283185.shtml",
                  "tags": [
                    "AI安全",
                    "编程工具"
                  ],
                  "source": "新浪财经",
                  "time": "9月18日消息"
                }
              ]
            },
            {
              "title": "杰米·戴蒙（摩根大通CEO）",
              "news": [
                {
                  "title": "摩根大通 CEO 戴蒙：建议对 AI 实施轻度联邦级监管",
                  "summary": "9月18日消息，摩根大通首席执行官杰米·戴蒙发表观点，支持美国对人工智能行业实施「轻度（light-touch）」的联邦级别监管，避免地方监管。他表示各州法规不一会增加 AI 商业落地的复杂性：「如果一定要监管，就应当由联邦层面出台，并且采用轻度监管模式。」",
                  "link": "https://www.cls.cn/detail/2486940",
                  "tags": [
                    "AI监管",
                    "观点"
                  ],
                  "source": "财联社",
                  "time": "9月18日消息"
                }
              ]
            },
            {
              "title": "吴恩达",
              "news": [
                {
                  "title": "吴恩达回应 AI 末日论：别被科幻叙事带偏",
                  "summary": "9月17日，AI 领域研究者吴恩达在接受彭博电视采访时表示，顶尖模型开发商近期有关 AI 可能导致人类生存风险的警告「更像科幻小说，而不是科学」，认为这类叙事可能分散行业对实际 AI 安全问题的关注。他主张行业应继续推进 AI 发展，通过受控测试、工程防护和迭代改进解决可验证的安全问题。",
                  "link": "https://new.qq.com/rain/a/20260918A027M600",
                  "tags": [
                    "AI安全",
                    "观点"
                  ],
                  "source": "凤凰网科技",
                  "time": "9月17日"
                }
              ]
            },
            {
              "title": "布伦特·赫希特（微软）",
              "news": [
                {
                  "title": "微软高管：AI 训练是「人类历史上最大规模的劳动盗窃」",
                  "summary": "9月18日消息，根据《纽约时报》公开的法律文件，微软应用科学总监布伦特·赫希特在 2023 年 1 月的内部备忘录中，将 AI 模型训练定性为「人类历史上最大规模的劳动盗窃」。在另一份 2024 年 1 月的内部演示中，他用「毁灭循环」描述 AI 对新闻业的影响：AI 产品减少新闻网站流量和收入，最终模型自身也将失去可靠信息来源。",
                  "link": "https://news.qq.com/rain/a/20260918A07CQP00",
                  "tags": [
                    "AI版权",
                    "观点"
                  ],
                  "source": "腾讯新闻",
                  "time": "9月18日消息"
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
          "date": "2026-09-18",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "15.2T tokens",
              "change": "↑4%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "12.9T tokens",
              "change": "↑484%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "12T tokens",
              "change": "↑32%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "11.6T tokens",
              "change": "↑4%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "9.9T tokens",
              "change": "↑18%"
            },
            {
              "model": "MiMo-V2.5 (xiaomi)",
              "score": "7.29T tokens",
              "change": "↑20%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "4.74T tokens",
              "change": "↑35%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "3.98T tokens",
              "change": "↑12%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.95T tokens",
              "change": "↑15%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "2.83T tokens",
              "change": "↑2%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.13T tokens",
              "change": "↑16%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.11T tokens",
              "change": "↑7%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "2.06T tokens",
              "change": "↑21%"
            },
            {
              "model": "GPT-6 Astra (openai)",
              "score": "1.65T tokens",
              "change": "↑131%"
            },
            {
              "model": "Solar Pro 4 (upstage)",
              "score": "1.61T tokens",
              "change": "↑4%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.55T tokens",
              "change": "↑24%"
            },
            {
              "model": "Claude Sonnet 5 (anthropic)",
              "score": "1.53T tokens",
              "change": "↑10%"
            },
            {
              "model": "MiniMax M3 (minimax)",
              "score": "1.48T tokens",
              "change": "↑1%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.42T tokens",
              "change": "↑12%"
            },
            {
              "model": "DeepSeek V4 Pro 0423 (deepseek)",
              "score": "1.24T tokens",
              "change": "↑4%"
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
