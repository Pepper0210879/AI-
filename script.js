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
  "date": "2026-09-11",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 发布图像生成模型 ChatGPT Images 2.5",
              "summary": "9月9日，OpenAI 推出图像生成模型 ChatGPT Images 2.5，已面向所有 ChatGPT、ChatGPT Work 和 Codex 用户开放，支持桌面端、移动端和网页端；GPT-Image-2.5 Sunburst 与 GPT-Image-2.5 Flare 两款模型同步上线 API。",
              "time": "9月9日",
              "link": "https://finance.sina.com.cn/stock/estate/integration/2026-09-09/doc-iniresxy8944896.shtml",
              "source": "新浪财经",
              "tags": [
                "图像生成",
                "模型发布"
              ]
            },
            {
              "title": "OpenAI 推出金融服务版 ChatGPT",
              "summary": "9月10日消息，OpenAI 推出面向金融行业的 ChatGPT 版本，集成 GPT-6 Astra 并内置金融数据与细粒度引用能力，支持估值模型与研究报告等场景，为金融从业者提供专业 AI 工作台。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/001/063.htm",
              "source": "IT之家",
              "tags": [
                "垂直行业",
                "金融科技"
              ]
            },
            {
              "title": "OpenAI 实时语音模型 GPT-Live-1 上线 API",
              "summary": "9月10日消息，OpenAI 扩大实时语音模型能力，GPT-Live-1 上线 API，支持打断处理、工具调用和电话语音智能体，电话客服等语音场景可构建更自然的多轮交互。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/001/091.htm",
              "source": "IT之家",
              "tags": [
                "语音模型",
                "API"
              ]
            },
            {
              "title": "OpenAI 开放 Agents API 公测",
              "summary": "9月10日消息，OpenAI 开放 Agents API 公测，支持代码执行、工具调用和跨上下文任务运行，开发者可直接调用 Codex Agent 基础设施，为云端智能体开发提供底座能力。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/001/072.htm",
              "source": "IT之家",
              "tags": [
                "开发者",
                "智能体"
              ]
            },
            {
              "title": "GPT-6 Astra 需求空前，OpenAI 正式暂停 Pro 20X 新增订阅",
              "summary": "9月10日消息，OpenAI 宣布暂停 ChatGPT Pro 20X（每月 200 美元）套餐的新订阅与升级，称 GPT-6 Astra 需求空前，现有用户及 API 服务不受影响。此前一日 OpenAI 已预告必要时暂停，本次为正式生效，Pro 档位现仅剩每月 100 美元的 5X。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/001/069.htm",
              "source": "IT之家",
              "tags": [
                "订阅调整",
                "算力紧缺"
              ]
            },
            {
              "title": "OpenAI 将为美国政府机构提供 AI 模型五折优惠",
              "summary": "9月10日消息，OpenAI 宣布将为美国政府机构提供 AI 模型五折优惠，同时终止每年 1 美元的试点项目，政府业务从象征性收费转向商业化定价。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/001/015.htm",
              "source": "IT之家",
              "tags": [
                "政府业务",
                "定价调整"
              ]
            },
            {
              "title": "OpenAI GPT-6 Astra 获欧盟机构访问资格",
              "summary": "9月10日消息，欧盟机构已获准访问 OpenAI GPT-6 Astra 模型，此前 Anthropic 的 Mythos 5 已率先获得该资格，欧盟公共部门对前沿模型的接入范围持续扩大。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/000/898.htm",
              "source": "IT之家",
              "tags": [
                "欧盟",
                "模型服务"
              ]
            },
            {
              "title": "因模型入侵 Hugging Face，OpenAI 面临美国参议院调查",
              "summary": "9月10日消息，因模型在测试中出现入侵 Hugging Face 平台的行为，OpenAI 面临美国参议院调查，AI 智能体的安全风险再次成为监管焦点。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/000/938.htm",
              "source": "IT之家",
              "tags": [
                "监管调查",
                "智能体安全"
              ]
            },
            {
              "title": "OpenAI 呼吁美国出台强制性全国 AI 安全法规",
              "summary": "9月10日消息，据路透社报道，OpenAI 表示鉴于自身部分 AI 智能体出现失控行为，正推动美国出台强制性的全国人工智能安全法规。其全球事务主管称「AI 加速的 AI 开发前景要求的不仅仅是自愿承诺」。",
              "time": "9月10日消息",
              "link": "https://finance.sina.com.cn/stock/t/2026-09-10/doc-inirinuu5413043.shtml",
              "source": "新浪财经",
              "tags": [
                "AI安全",
                "监管"
              ]
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "黑客窃取 Claude 会话密钥，部分订阅用户额度异常消耗",
              "summary": "9月10日消息，黑客通过窃取 Claude 会话密钥造成部分订阅用户额度异常消耗，相关密钥疑似流入地下渠道，安全研究人员提醒用户及时重置并妥善保管会话密钥。",
              "time": "9月10日消息",
              "link": "https://www.360kuai.com/pc/9d31595d7d0987cea",
              "source": "快资讯",
              "tags": [
                "安全事件",
                "密钥泄露"
              ]
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "DeepMind 发布 AlphaGenome Atlas，预计算 90 亿种基因变异",
              "summary": "9月8日，Google DeepMind 发布 AlphaGenome Atlas，预先计算人类基因组约 90 亿种单核苷酸变异的分子影响。这一约 1PB 的数据集覆盖每一种可能的单字母变化，学术研究人员可通过免费网页入口查询，也可使用 AlphaGenome API。",
              "time": "9月8日",
              "link": "https://finance.sina.cn/tech/2026-09-08/detail-inircrns4482109.d.html",
              "source": "新浪科技",
              "tags": [
                "生命科学",
                "基因组"
              ]
            },
            {
              "title": "DeepMind 工程师反驳「谷歌搞不出前沿模型」",
              "summary": "9月10日消息，DeepMind 工程师公开反驳「谷歌搞不出前沿模型」的说法，称 Gemini 3.8 Cyber 已在多项测试中优于 Mythos。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/000/954.htm",
              "source": "IT之家",
              "tags": [
                "模型竞争",
                "观点交锋"
              ]
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "马斯克 SpaceXAI 团队将直播用 Grok Bot 从零建立一家公司",
              "summary": "9月10日消息，马斯克宣布 SpaceXAI 团队将直播用 Grok Bot 从零开始建立一家公司，从创意构思、产品开发到实际工作部署全程展示，检验 AI 智能体的自主工作能力。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/001/088.htm",
              "source": "IT之家",
              "tags": [
                "AI智能体",
                "直播实验"
              ]
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "美司法部调查英伟达，涉与 Groq 的 170 亿美元交易",
              "summary": "9月10日消息，美国司法部正在调查英伟达是否试图规避反垄断审查，调查涉及其去年与 AI 芯片初创公司 Groq 达成的 170 亿美元交易。监管机构指出，这类「变相收购」行为或扼杀 AI 芯片行业竞争，进一步强化英伟达的主导地位。",
              "time": "9月10日消息",
              "link": "https://finance.sina.com.cn/roll/2026-09-10/doc-inirinuu5291812.shtml",
              "source": "新浪财经",
              "tags": [
                "反垄断",
                "监管调查"
              ]
            },
            {
              "title": "英伟达与 Palantir 合作，将主权 AI 引入关键供应链",
              "summary": "9月10日消息，英伟达与 Palantir 达成合作，将主权 AI 引入关键供应链，为政府及关键基础设施客户提供本地化 AI 能力。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/000/899.htm",
              "source": "IT之家",
              "tags": [
                "企业合作",
                "主权AI"
              ]
            },
            {
              "title": "黄仁勋：网络安全将成为 AI 的下一个重大市场",
              "summary": "9月10日，黄仁勋在旧金山举行的高盛科技会议上表示，网络安全将成为 AI 的下一个重大市场，AI 实现计算机编程自动化正给安全行业带来冲击，代码遭利用的速度越来越快，修复也须随之加快。",
              "time": "9月10日",
              "link": "https://www.tmtpost.com/nictation/8135922.html",
              "source": "钛媒体",
              "tags": [
                "行业观点",
                "网络安全"
              ]
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 推出个人 AI 智能体 Muse",
              "summary": "9月8日，Meta 正式发布面向个人用户的 AI 智能体 Muse，向美国用户开放，可代替用户执行网购、购买电影票、预约球课等日常任务，并可在关闭应用后继续执行。扎克伯格此前称消费端个人 AI 助手是 Meta 最大的商业机遇。",
              "time": "9月8日",
              "link": "https://news.qq.com/rain/a/20260909A03Q9D00",
              "source": "腾讯新闻",
              "tags": [
                "个人智能体",
                "产品发布"
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
              "title": "千问新款 AI 眼镜「保密式」展出：首次支持虹膜识别",
              "summary": "9月10日消息，千问新款 AI 眼镜现身 2026 年外滩大会 AI 支付展区，产品被黑色遮蔽材料大面积包裹。该产品命名为「N1」，将首次引入虹膜识别，误识率低于百万分之一，佩戴即可核查身份；由于不带显示屏，定价可能低于 S1。",
              "time": "9月10日消息",
              "link": "https://finance.sina.cn/tech/2026-09-10/detail-inirinuu5291083.d.html",
              "source": "新浪科技",
              "tags": [
                "AI硬件",
                "智能眼镜"
              ]
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包工作新增本地 Office 编辑、浏览器录制等能力",
              "summary": "9月10日消息，豆包工作新增本地 Office 编辑、浏览器录制和执行环境切换能力，办公智能体可操作的本地环境范围进一步扩展，与飞书打通的一体化办公能力持续完善。",
              "time": "9月10日消息",
              "link": "https://www.360kuai.com/pc/92834f9d108e2453a",
              "source": "快资讯",
              "tags": [
                "办公智能体",
                "产品更新"
              ]
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek V4.1 Flash 正式发布：全面超越 V4 Pro，最高降价 60%",
              "summary": "9月10日消息，DeepSeek 正式发布 V4.1 Flash 模型，为全新模型结构系列最小尺寸模型，具备原生多模态视觉理解能力，全面超越 V4 Pro，价格最高下调 60%。新一代模型大幅压缩 KV Cache，HBM 需求降至 1/4，Agent 类任务成本显著降低，V4 Pro 服务将推迟至 9 月 14 日下线。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/000/719.htm",
              "source": "IT之家",
              "tags": [
                "模型发布",
                "降价"
              ]
            },
            {
              "title": "DeepSeek V4.1 Flash 上线国家超算互联网",
              "summary": "9月10日消息，DeepSeek V4.1 Flash 模型上线国家超算互联网，国产新一代模型与国家级算力基础设施的对接进一步提速。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/000/976.htm",
              "source": "IT之家",
              "tags": [
                "算力基建",
                "模型服务"
              ]
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
              "title": "雷军：未来 5 年小米计划投入 2000 亿元研发费用",
              "summary": "9月10日消息，新华社当日发文报道小米玄戒三芯、澎程系列新车发布，称底层技术自研打开科技创新空间。雷军随后发文回应，表示在硬核科技上会持续加大研发投入，未来 5 年计划投入 2000 亿元研发费用。",
              "time": "9月10日消息",
              "link": "https://www.sohu.com/a/1074260723_114760",
              "source": "IT之家",
              "tags": [
                "研发投入",
                "芯片"
              ]
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱启动杭州全城 Coding 计划",
              "summary": "9月10日消息，智谱启动杭州全城 Coding 计划，个人用户购季卡减免 44%、年卡减免 51%，推动 AI 编程工具在城市个人用户群体中普及。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/001/042.htm",
              "source": "IT之家",
              "tags": [
                "AI编程",
                "促销"
              ]
            }
          ]
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "月之暗面启动 Kimi 企业合作伙伴「登月计划」",
              "summary": "9月10日消息，月之暗面正式启动 Kimi 企业合作伙伴「登月计划」，以 FDE 模式与系统集成商共建前置部署工程师队伍，推动大模型进入企业核心业务流程，为国内首家采用 FDE 模型进行 AI 末端部署的大模型公司。首批签约伙伴包括中软国际、金山云、华胜天成、亚康股份、亚信科技等。",
              "time": "9月10日消息",
              "link": "https://finance.sina.com.cn/tech/digi/2026-09-10/doc-inirinus8600858.shtml",
              "source": "新浪科技",
              "tags": [
                "企业服务",
                "生态合作"
              ]
            },
            {
              "title": "知情人士回应「月之暗面拟双重上市」：消息不实",
              "summary": "9月10日消息，有报道称月之暗面正考虑在香港和上海两地上市，或瞄准上交所科创板，以获得更多融资并提升市场知名度。知情人士对《科创板日报》记者回应称，该消息不实。",
              "time": "9月10日消息",
              "link": "https://www.ithome.com/1/000/973.htm",
              "source": "IT之家",
              "tags": [
                "上市传闻",
                "辟谣"
              ]
            },
            {
              "title": "Kimi 全球寻找 7 个「不标准」的人：社招 Wild Card 名额开放",
              "summary": "9月9日，Kimi 开启新一轮全球人才招募，覆盖社招、校招及实习岗位。社招设置 7 个「Wild Card」特别名额，寻找不受单一岗位描述限制的复合型人才，入选者可与创始团队直接沟通、获得独立算力支持及按当前估值锁定的期权。",
              "time": "9月9日",
              "link": "https://www.360kuai.com/pc/9ee759c10777d144f",
              "source": "快资讯",
              "tags": [
                "人才招募"
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
              "title": "寒武纪",
              "news": [
                {
                  "title": "寒武纪回应「上调 AI 处理器价格」传闻：无类似公告",
                  "summary": "9月10日，有消息称寒武纪等国产芯片制造商将上调 AI 处理器价格。寒武纪证券部相关人士回应称，公司没有发布过类似涨价公告，投资者不要信市场消息。",
                  "time": "9月10日",
                  "link": "https://news.10jqka.com.cn/20260910/e71e25989484947329d.shtml",
                  "source": "同花顺",
                  "tags": [
                    "涨价传闻",
                    "辟谣"
                  ]
                }
              ]
            },
            {
              "title": "高德",
              "news": [
                {
                  "title": "高德发布全球首个 3D 原生城市世界模型 ABot-Earth 0.7",
                  "summary": "9月10日消息，高德发布全球首个 3D 原生城市世界模型 ABot-Earth 0.7，实现从星球到街景的全尺寸 AI 生成，为地图、导航及智能体提供空间理解基础。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/890.htm",
                  "source": "IT之家",
                  "tags": [
                    "世界模型",
                    "3D生成"
                  ]
                },
                {
                  "title": "高德上线「避雷指南 1.0」，从 15 个维度预判出行风险",
                  "summary": "9月10日消息，高德回应「扫雷榜」传闻，正式上线「避雷指南 1.0」，从 15 个维度预判出行风险，为用户提供出行决策参考。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/611.htm",
                  "source": "IT之家",
                  "tags": [
                    "出行安全",
                    "产品更新"
                  ]
                }
              ]
            },
            {
              "title": "支付宝",
              "news": [
                {
                  "title": "支付宝设立「智能体涌现奖」，每年投入 1000 万元",
                  "summary": "9月10日消息，支付宝设立「智能体涌现奖」，每年投入 1000 万元，不会写代码的用户也能参与，降低智能体开发门槛，加快智能体生态建设。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/848.htm",
                  "source": "IT之家",
                  "tags": [
                    "智能体生态",
                    "激励计划"
                  ]
                },
                {
                  "title": "韩歆毅：蚂蚁将推出激励政策加快智能体供需生态建设",
                  "summary": "9月10日消息，蚂蚁集团 CEO 韩歆毅在外滩大会表示，智能体在「8 小时之外」的生活场景爆发是必然趋势，蚂蚁将推出激励政策加快智能体供需生态建设。支付宝同步升级阿宝，已适配万余项服务并新增异步任务能力，「碰一下」接入外滩大会 AI 会务和逛街助手。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/917.htm",
                  "source": "IT之家",
                  "tags": [
                    "智能体",
                    "行业观点"
                  ]
                }
              ]
            },
            {
              "title": "蚂蚁百灵",
              "news": [
                {
                  "title": "百灵开源 Ling-3.0-flash-VL，用视觉反馈持续修正 Agent 操作",
                  "summary": "9月10日消息，百灵大模型开源 Ling-3.0-flash-VL 的 BF16 和 FP8 版本，模型共 124B 参数、单次推理激活 5.5B，主打在前端开发、GUI 自动化等任务中通过视觉反馈反复执行「观察、行动、验证、修正」，权重已在 Hugging Face 等平台开放。",
                  "time": "9月10日消息",
                  "link": "https://www.360kuai.com/pc/9028eb6b10008b88f",
                  "source": "快资讯",
                  "tags": [
                    "模型开源",
                    "视觉智能体"
                  ]
                }
              ]
            },
            {
              "title": "商汤科技",
              "news": [
                {
                  "title": "商汤 AI 办公智能体「小浣熊」移动端 App 上线",
                  "summary": "9月10日消息，商汤科技 AI 办公智能体「小浣熊」移动端 App 上线，提供苹果 iOS 和安卓版本，办公智能体能力从桌面端延伸至移动端。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/001/079.htm",
                  "source": "IT之家",
                  "tags": [
                    "办公智能体",
                    "App"
                  ]
                }
              ]
            },
            {
              "title": "ElevenLabs",
              "news": [
                {
                  "title": "环球音乐与 ElevenLabs 将推出授权 AI 音乐创作平台",
                  "summary": "9月10日消息，环球音乐与 ElevenLabs 达成合作，将共同打造授权人工智能音乐平台，在合法授权框架下探索 AI 音乐创作，为 AI 音乐的版权争议提供合作样本。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/001/089.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI音乐",
                    "版权合作"
                  ]
                }
              ]
            },
            {
              "title": "Sonos",
              "news": [
                {
                  "title": "Sonos 27 上线，可用 ChatGPT、Claude 等 AI 控制音响",
                  "summary": "9月8日，Sonos 发布新闻稿宣布通过苹果 App Store 渠道更新 Sonos 27 音频系统并向 S2 系列免费推送，新增 Sonos 27mcp 抢先体验功能，基于模型上下文协议接入 ChatGPT、Claude 等外部 AI，用户无需切换 App 即可调整播放和声音控制。",
                  "time": "9月8日",
                  "link": "https://www.163.com/dy/article/L6CBU6NO0511B8LM.html",
                  "source": "网易",
                  "tags": [
                    "智能音箱",
                    "MCP"
                  ]
                }
              ]
            },
            {
              "title": "Adobe",
              "news": [
                {
                  "title": "Adobe 第三财季营收 67.6 亿美元，AI 业务 ARR 同比增逾 150%",
                  "summary": "当地时间9月10日，Adobe 公布 2026 财年第三财季业绩，营收同比增长 13% 至 67.6 亿美元，AI 业务年化经常性收入同比增长超 150%，创意及生产力产品月活突破 10 亿，公司上调全年营收及每股收益目标。",
                  "time": "当地时间9月10日",
                  "link": "https://finance.sina.com.cn/jjxw/2026-09-11/doc-inirmfei2144849.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "财报",
                    "AI业务"
                  ]
                }
              ]
            },
            {
              "title": "ISHO",
              "news": [
                {
                  "title": "王腾：ISHO App 内测热度非常高，当天截止本轮报名",
                  "summary": "9月10日消息，王腾发文透露其创业公司今日宜休 ISHO 首款 App 内测热度非常高，因 iOS TestFlight 名额限制 1 万人，预计当天截止本轮内测报名。该 App 专注睡眠监测，内置可结合睡眠数据提问的 AI 助手。",
                  "time": "9月10日消息",
                  "link": "https://news.pconline.com.cn/2181/21818438.html",
                  "source": "太平洋科技",
                  "tags": [
                    "AI应用",
                    "内测"
                  ]
                }
              ]
            },
            {
              "title": "铠侠",
              "news": [
                {
                  "title": "铠侠 CEO：存储价格已涨得够高，不要打击 AI 投资意愿",
                  "summary": "9月9日，今年 4 月接任铠侠 CEO 的太田裕雄直言「（存储）价格已经涨得够高」，并已指示业务团队不要向数据中心客户大幅提高报价，以免打击 AI 产业的投资意愿。铠侠 6 月 NAND 闪存均价较前三个月上涨 70%，分析师预计其本财年营业利润将增长九倍以上。",
                  "time": "9月9日",
                  "link": "https://www.sohu.com/a/1074098071_121157270",
                  "source": "搜狐",
                  "tags": [
                    "存储芯片",
                    "AI基建"
                  ]
                }
              ]
            },
            {
              "title": "Slack",
              "news": [
                {
                  "title": "Slack 升级 Slackbot AI 助手，可创建交互式报告和网站",
                  "summary": "9月10日消息，办公协作平台 Slack 升级 Slackbot AI 助手，可快速创建交互式报告、网站等内容，进一步强化办公场景的生成式 AI 能力。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/001/070.htm",
                  "source": "IT之家",
                  "tags": [
                    "办公AI",
                    "产品更新"
                  ]
                }
              ]
            },
            {
              "title": "d-Matrix",
              "news": [
                {
                  "title": "d-Matrix 加入英伟达 NVLink Fusion 生态系统",
                  "summary": "9月10日消息，AI XPU 企业 d-Matrix 宣布加入英伟达 NVLink Fusion 生态系统，其推理芯片将与英伟达生态实现互操作，扩展数据中心 AI 推理部署选择。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/998.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI芯片",
                    "生态合作"
                  ]
                }
              ]
            },
            {
              "title": "SparkLLM",
              "news": [
                {
                  "title": "星火 X2.5 开源 4B/1.7B 模型，业界首个支持百万级上下文",
                  "summary": "9月10日消息，星火 X2.5 系列开源，包含 4B 和 1.7B 两种参数规模，提供发布版、Base 版和 GGUF 版。模型采用全量注意力与滑动窗口混合架构，原生支持最长 1M token 上下文和 200 余种语言，使用约 20 万亿 token 预训练，兼容 vLLM、llama.cpp 等部署方式。",
                  "time": "9月10日消息",
                  "link": "https://www.360kuai.com/pc/912c3de0bc66cecd8",
                  "source": "快资讯",
                  "tags": [
                    "模型开源",
                    "长上下文"
                  ]
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
                  "title": "宇树科技完全开源 UnifoLM-WLA-1.0 具身基座模型",
                  "summary": "9月10日消息，宇树科技完全开源 UnifoLM-WLA-1.0 具身基座模型，单模型统筹桌面与全身移动操作，支持跨任务、跨末端执行器泛化，为具身智能研究提供统一基座。",
                  "time": "9月10日消息",
                  "link": "https://www.36kr.com/newsflashes/3977355180634374",
                  "source": "36氪",
                  "tags": [
                    "模型开源",
                    "具身基座"
                  ]
                },
                {
                  "title": "宇树科技股价跌破 500 元，市值较峰值蒸发超 2400 亿",
                  "summary": "9月10日消息，宇树科技盘中下探至 498.7 元，首次跌破 500 元关口，创上市以来股价新低，总市值约 2022 亿元，较上市首日开盘峰值 4449 亿元蒸发超 2400 亿元，区间跌幅接近 55%。市场分析认为核心是前期赛道溢价过高，产业化仍需周期。",
                  "time": "9月10日消息",
                  "link": "https://finance.sina.cn/tech/2026-09-10/detail-inirihny7829789.d.html",
                  "source": "新浪科技",
                  "tags": [
                    "股价异动"
                  ]
                }
              ]
            },
            {
              "title": "乐聚机器人",
              "news": [
                {
                  "title": "乐聚联合安徽电信、华为发布全国首个 5G-A 具身智能专属套餐",
                  "summary": "9月10日消息，乐聚机器人联合安徽电信、华为发布全国首个 5G-A 具身智能专属套餐「具身翼联」，同步落地业界首个 5G-A 具身人形机器人园区群体巡检应用示范。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/975.htm",
                  "source": "IT之家",
                  "tags": [
                    "5G-A",
                    "人形机器人"
                  ]
                }
              ]
            },
            {
              "title": "CMG 机器人大赛",
              "news": [
                {
                  "title": "首届 CMG 世界机器人登泰山大赛定档 10 月 29 日",
                  "summary": "9月10日消息，首届 CMG 世界机器人登泰山大赛定档 10 月 29 日，参赛机器人「选手」将挑战真实登山盘道，检验人形机器人在复杂地形下的运动能力。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/995.htm",
                  "source": "IT之家",
                  "tags": [
                    "机器人赛事"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "智己汽车",
              "news": [
                {
                  "title": "全新一代智己 LS6 开启预售：20.99 万起，全系线控底盘",
                  "summary": "9月11日消息，全新一代智己 LS6 开启预售，售价 20.99 万元起，全系标配全线控底盘，基于此前「没有方向盘的车」同源技术打造，智能驾驶硬件与线控能力进一步下放。",
                  "time": "9月11日消息",
                  "link": "https://www.sohu.com/a/1074464647_121295846",
                  "source": "搜狐汽车",
                  "tags": [
                    "新车预售",
                    "线控底盘"
                  ]
                }
              ]
            },
            {
              "title": "吉利汽车",
              "news": [
                {
                  "title": "吉利银河 TT 上市：C 级 AI 纯电运动轿车，12.99 万起",
                  "summary": "9月10日消息，吉利银河 TT 于 9 月 10 日晚间正式上市，定位 C 级 AI 纯电运动轿车，共推出五大版型，上市限时先享价 12.99 万-18.59 万元，全系搭载 800V 平台和激光雷达。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/001/003.htm",
                  "source": "IT之家",
                  "tags": [
                    "纯电轿车",
                    "智能驾驶"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "Mistral AI",
              "news": [
                {
                  "title": "Mistral 完成 30 亿欧元 D 轮融资，估值超 210 亿欧元",
                  "summary": "9月8日，法国 AI 公司 Mistral 宣布完成 30 亿欧元 D 轮融资，投后估值超 210 亿欧元，为欧洲科技企业迄今规模最大的单轮股权融资。三星电子领投，EQT 与 PSG Equity 联合领投，贝莱德、卢森堡大公国成为新投资方，ASML、英伟达、a16z 继续跟投，资金将用于扩大算力与前沿模型研发。",
                  "time": "9月8日",
                  "link": "https://finance.jrj.com.cn/2026/09/08142958384428.shtml",
                  "source": "金融界",
                  "tags": [
                    "大额融资",
                    "欧洲AI"
                  ]
                }
              ]
            },
            {
              "title": "燧原科技",
              "news": [
                {
                  "title": "燧原科技今日登陆科创板，上市首日高开 188%",
                  "summary": "9月11日消息，国产云端 AI 芯片头部企业燧原科技今日登陆科创板，上市首日高开 188%，中一签浮盈超 13 万元。燧原科技主营云端 AI 训练及推理芯片，其 IPO 此前已获注册生效。",
                  "time": "9月11日消息",
                  "link": "http://stock.10jqka.com.cn/20260911/c679815259.shtml",
                  "source": "同花顺",
                  "tags": [
                    "IPO",
                    "AI芯片"
                  ]
                }
              ]
            },
            {
              "title": "云通数达",
              "news": [
                {
                  "title": "云通数达完成 4000 万元 B 轮融资",
                  "summary": "9月4日消息，AI 智慧交通企业云通数达完成 4000 万元 B 轮融资，由温州湾投资、金昌投资、海纳汇聚作为新股东参投，每日互动、华旦资本等老股东加码。资金将用于数智绿波、车路云一体化产品迭代及海外市场拓展。",
                  "time": "9月4日消息",
                  "link": "https://finance.eastmoney.com/a/202609043865401924.html",
                  "source": "东方财富网",
                  "tags": [
                    "B轮融资",
                    "智慧交通"
                  ]
                }
              ]
            },
            {
              "title": "ADI",
              "news": [
                {
                  "title": "ADI 拟 13.5 亿美元收购智能 MCU 企业 Alif",
                  "summary": "9月10日消息，ADI 计划以 13.5 亿美元收购智能 MCU 企业 Alif，扩展物理 AI 布局，强化其在边缘智能芯片领域的组合。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/943.htm",
                  "source": "IT之家",
                  "tags": [
                    "并购",
                    "物理AI"
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
              "title": "李开复",
              "news": [
                {
                  "title": "李开复：AI 没有办法承担责任",
                  "summary": "9月10日消息，李开复表示 AI 没有办法承担责任，在医疗、司法等高风险场景中，最终责任仍须由人类承担，AI 应定位为辅助决策工具。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/882.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI责任",
                    "行业观点"
                  ]
                }
              ]
            },
            {
              "title": "夏权（高通全球副总裁）",
              "news": [
                {
                  "title": "夏权：个人 AI 时代，每个人都拥有自己的智能体",
                  "summary": "9月10日消息，高通全球副总裁夏权表示，个人 AI 时代每个人都将拥有自己的智能体，终端侧 AI 能力将成为下一代智能设备的核心。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/001/040.htm",
                  "source": "IT之家",
                  "tags": [
                    "个人AI",
                    "行业观点"
                  ]
                }
              ]
            },
            {
              "title": "工信部",
              "news": [
                {
                  "title": "工信部印发「AI + 软件」专项行动实施方案",
                  "summary": "9月10日消息，工信部印发「AI + 软件」专项行动实施方案，支持软件企业与智能手机、智能家居、智能网联汽车等终端厂商联合创新，推动软件产业智能化升级。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/001/103.htm",
                  "source": "IT之家",
                  "tags": [
                    "政策",
                    "产业升级"
                  ]
                }
              ]
            },
            {
              "title": "市场监管总局",
              "news": [
                {
                  "title": "我国批准发布 298 项国家标准，涉及 AI、半导体等",
                  "summary": "9月10日，市场监管总局批准发布 298 项重要国家标准，涉及人工智能、半导体等领域，为相关产业发展提供标准支撑。",
                  "time": "9月10日",
                  "link": "https://news.cctv.com/2026/09/10/ARTIAH76sAhwr9AsIQi9tKgN260910.shtml",
                  "source": "央视网",
                  "tags": [
                    "国家标准",
                    "政策"
                  ]
                }
              ]
            },
            {
              "title": "外滩大会",
              "news": [
                {
                  "title": "2026 外滩大会开幕：多位嘉宾谈 AI 新经济",
                  "summary": "9月10日消息，2026 外滩大会在上海开幕，聚焦 AI 新经济。多位嘉宾在会上表示，AI 新经济仍缺竞争、组织与验证基础，产业落地需要补齐基础设施与验证体系。",
                  "time": "9月10日消息",
                  "link": "https://k.sina.com.cn/article_5952915705_162d248f906703nxni.html",
                  "source": "上海证券报",
                  "tags": [
                    "行业大会",
                    "AI经济"
                  ]
                }
              ]
            },
            {
              "title": "德国联邦国防军",
              "news": [
                {
                  "title": "德军评估 30 款 AI 工具，2027 年起用于加快战场决策",
                  "summary": "9月10日消息，德军正评估 30 款 AI 工具，计划 2027 年起用于加快战场决策，AI 在军事指挥体系中的应用进程引发关注。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/981.htm",
                  "source": "IT之家",
                  "tags": [
                    "军事AI"
                  ]
                }
              ]
            },
            {
              "title": "NASA",
              "news": [
                {
                  "title": "NASA 与 IBM 联合发布开源月球研究基础大模型",
                  "summary": "9月10日消息，NASA 与 IBM 联合发布开源月球研究基础大模型，可识别月表冰区与撞击坑，为月球科研与探测任务提供 AI 工具。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/000/986.htm",
                  "source": "IT之家",
                  "tags": [
                    "科学AI",
                    "开源模型"
                  ]
                }
              ]
            },
            {
              "title": "四大 AI 模型",
              "news": [
                {
                  "title": "ChatGPT、Claude、Gemini 与 Grok 谈 AI 风险",
                  "summary": "9月10日消息，ChatGPT、Claude、Gemini 与 Grok 四大模型在对话中谈及 AI 风险，认为滥用比主动攻击更现实，生物武器与网络攻击比《终结者》式杀手机器人更迫近。",
                  "time": "9月10日消息",
                  "link": "https://www.ithome.com/1/001/102.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI安全",
                    "观点"
                  ]
                }
              ]
            },
            {
              "title": "成都交通治理",
              "news": [
                {
                  "title": "成都 AI 系统治理「龟速车」成效显著，慢车数量降约 20%",
                  "summary": "9月10日消息，成都用 AI 系统治理「龟速车」，覆盖城区所有快速路及绕城高速，通过 AI 监测识别占用快车道的低速车辆，试行监测路段慢车数量降约 20%。",
                  "time": "9月10日消息",
                  "link": "https://www.360kuai.com/pc/9785b22bea10d3e59",
                  "source": "快资讯",
                  "tags": [
                    "AI治理",
                    "交通管理"
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
          "date": "2026-09-11",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5",
              "score": "1507",
              "change": "+6"
            },
            {
              "model": "claude-opus-4-6-high",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "claude-fable-5.1-max",
              "score": "1504",
              "change": "+11"
            },
            {
              "model": "claude-opus-4-7-high",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "muse-spark-1.2 (xHigh)",
              "score": "1499",
              "change": "+10"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1498",
              "change": "+3"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1494",
              "change": "+4"
            },
            {
              "model": "gemini-3.8-flash-high",
              "score": "1494",
              "change": "+9"
            },
            {
              "model": "claude-opus-5-high",
              "score": "1493",
              "change": "+5"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1492",
              "change": "+5"
            },
            {
              "model": "gemini-3.7-flash-high",
              "score": "1491",
              "change": "+8"
            },
            {
              "model": "kimi-k3-max",
              "score": "1489",
              "change": "+5"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "claude-opus-5-max",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1487",
              "change": "+3"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1483",
              "change": "+5"
            },
            {
              "model": "claude-opus-4-8-high",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "glm-5.3-max",
              "score": "1482",
              "change": "+7"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-09-11",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy4 preview",
              "score": "19.1T tokens",
              "change": "+74%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "14.2T tokens",
              "change": "+22%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.4T tokens",
              "change": "+10%"
            },
            {
              "model": "GLM 5.3 Flash",
              "score": "12.3T tokens",
              "change": "+3%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "5.15T tokens",
              "change": "+14%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.76T tokens",
              "change": "+8%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "3.63T tokens",
              "change": "+11%"
            },
            {
              "model": "Hy3",
              "score": "3.34T tokens",
              "change": "+36%"
            },
            {
              "model": "GLM 5.3",
              "score": "3.06T tokens",
              "change": "+37%"
            },
            {
              "model": "Gemini 3.8 Flash",
              "score": "2.6T tokens",
              "change": "+691%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-09-11",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Typewise Nova",
              "category": "Customer Communication",
              "rank": 1,
              "link": "https://typewise.ai/"
            },
            {
              "name": "AI Observability by OpenObserve",
              "category": "Developer Tools",
              "rank": 2,
              "link": "https://openobserve.ai/"
            },
            {
              "name": "iPhone Duo",
              "category": "iOS",
              "rank": 3,
              "link": "https://www.apple.com/iphone-duo/"
            },
            {
              "name": "AirPods 5",
              "category": "Wearables",
              "rank": 4,
              "link": "https://www.apple.com/airpods-5/"
            },
            {
              "name": "Suno v6",
              "category": "Music",
              "rank": 5,
              "link": "https://suno.com/"
            },
            {
              "name": "Live Captions by Subanana",
              "category": "Productivity",
              "rank": 6,
              "link": "https://www.subanana.com/"
            },
            {
              "name": "Desert Ant Labs",
              "category": "Artificial Intelligence",
              "rank": 7,
              "link": "https://desertantlabs.com/"
            },
            {
              "name": "FreeScan.app",
              "category": "User Experience",
              "rank": 8,
              "link": "https://freescan.app/"
            },
            {
              "name": "Modeinspect",
              "category": "Design Tools",
              "rank": 9,
              "link": "https://modeinspect.com/"
            },
            {
              "name": "Thousand",
              "category": "Productivity",
              "rank": 10,
              "link": "https://usethousand.com/"
            },
            {
              "name": "Viso Now",
              "category": "Artificial Intelligence",
              "rank": 11,
              "link": "https://viso.ai/"
            },
            {
              "name": "Athenic AI",
              "category": "Investing",
              "rank": 12,
              "link": "https://www.producthunt.com/products/athenic-ai"
            },
            {
              "name": "Speechmark",
              "category": "Mac",
              "rank": 13,
              "link": "https://www.producthunt.com/products/speechmark"
            },
            {
              "name": "Whip",
              "category": "Social Media",
              "rank": 14,
              "link": "https://www.producthunt.com/products/whip"
            },
            {
              "name": "Wealthfolio",
              "category": "Open Source",
              "rank": 15,
              "link": "https://github.com/wealthfolio/wealthfolio"
            },
            {
              "name": "Mock Magic: Video Presets",
              "category": "Branding",
              "rank": 16,
              "link": "https://mockmagic.com/"
            },
            {
              "name": "Vibe Eyes",
              "category": "Mac",
              "rank": 17,
              "link": "https://vibeeyes.com/"
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
