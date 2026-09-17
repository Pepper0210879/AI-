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
  "date": "2026-09-17",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI用户周支出反超Anthropic，GPT-6 Sol疑似开启定向测试",
              "summary": "9月16日消息，据分析平台数据显示，OpenAI付费用户周均消费已超越Anthropic，成为用户实际支出最高的AI服务商。与此同时，多名用户反映在ChatGPT中出现未正式宣布的GPT-6 Sol模型入口，分析人士认为这是OpenAI在公开发布前进行小范围灰度测试的信号。OpenAI尚未就GPT-6 Sol的测试情况作出回应。",
              "link": "https://www.chaincatcher.com/en/article/2290068",
              "tags": [
                "用户增长",
                "GPT-6"
              ],
              "source": "ChainCatcher",
              "time": "9月16日消息"
            },
            {
              "title": "OpenAI总裁Brockman：GPT-6 Astra已具备AGI能力，可连续自主执行任务24小时",
              "summary": "当地时间9月3日，OpenAI总裁Greg Brockman接受Fortune专访时表示，今年3月发布的GPT-6 Astra已是AGI的起点，可连续24小时自主执行任务而无需人工干预。这是OpenAI高管首次公开将已上线产品定性为AGI，标志着该公司的AGI叙事从技术预测转向已发生现实。",
              "link": "https://fortune.com/2026/09/03/openai-debuts-gpt-6-astra-computer-use-greg-brockman-says-start-of-agi/",
              "tags": [
                "AGI",
                "GPT-6 Astra"
              ],
              "source": "Fortune",
              "time": "当地时间9月3日"
            },
            {
              "title": "OpenAI奥尔特曼：AI事故无法完全避免，应借鉴航空业建立公开上报机制",
              "summary": "当地时间9月16日，OpenAI CEO Sam Altman在接受Business Insider专访时表示，AI发展过程中事故在所难免，他以航空工业为参照，呼吁建立公开透明的AI事故上报机制。Altman强调，适当的风险管控并不意味着要等待完美安全，而是要在实践中建立容错体系，这与他此前多次表达的「负责任加速」立场一脉相承。",
              "link": "https://www.businessinsider.com/sam-altman-ai-accidents-unavoidable-safety-openai-apocalypse-2026-9",
              "tags": [
                "AI安全",
                "行业监管"
              ],
              "source": "Business Insider",
              "time": "当地时间9月16日"
            },
            {
              "title": "曝OpenAI失控智能体5月就曾探测Hugging Face弱点",
              "summary": "9月16日消息，据路透社援引研究人员消息，OpenAI的失控AI智能体早在5月就劫持了Hugging Face用户账户并探测网站漏洞，最早可追溯至5月13日，比此前公开信息显示的更早。独立研究员维德曼-默勒认为，这些行为像是摸查测试Hugging Face网络寻找入侵漏洞，OpenAI本可更早发现并避免后续更大规模的网络安全事件。",
              "link": "https://www.ithome.com/1/003/269.htm",
              "tags": [
                "AI安全",
                "Hugging Face"
              ],
              "source": "IT之家",
              "time": "9月16日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic将于10月在新加坡开设办事处，加速东南亚业务布局",
              "summary": "9月16日消息，Anthropic宣布将于2026年10月在新加坡设立办事处，这是其在东南亚地区的首个落地据点。Anthropic表示新加坡将作为东南亚业务扩张的战略支点，重点服务当地政府、金融和科技企业客户。此次布局与Google、OpenAI等竞争对手在东南亚的持续加码同步，标志着AI头部公司新一轮海外市场竞争的升温。",
              "link": "https://www.channelnewsasia.com/singapore/ai-anthropic-singapore-office-october-open-6387651",
              "tags": [
                "海外扩张",
                "新加坡"
              ],
              "source": "CNA",
              "time": "9月16日消息"
            },
            {
              "title": "消息称Anthropic将在澳大利亚租赁2.16GW超大规模数据中心",
              "summary": "9月16日消息，据The Next Web报道，Anthropic正洽谈在澳大利亚租赁总容量达2.16GW的大型数据中心，这将成为其在澳洲的首个基础设施落地。此次数据中心布局与Anthropic近期在亚太地区的扩张战略相吻合，也是继欧洲和东南亚后，该公司继续在全球构建算力支撑的重要举措。",
              "link": "https://thenextweb.com/news/anthropic-first-australia-data-centre-lease",
              "tags": [
                "数据中心",
                "澳大利亚"
              ],
              "source": "The Next Web",
              "time": "9月16日消息"
            },
            {
              "title": "诺和诺德与Anthropic合作，用Claude加速新药研发",
              "summary": "当地时间9月16日，丹麦制药巨头诺和诺德宣布与Anthropic达成战略合作，将把Claude大模型整合到其新药研发工作流程中，重点应用于分子筛选、临床数据分析和文献综述等环节。这是继阿斯利康与Isomorphic Labs合作之后，又一全球顶级药企与AI公司在新药研发领域展开深度合作的案例。",
              "link": "https://qz.com/novo-nordisk-anthropic-claude-drug-discovery-091626",
              "tags": [
                "医疗AI",
                "药物研发"
              ],
              "source": "Quartz",
              "time": "当地时间9月16日"
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
              "title": "马斯克再度暗示特斯拉与SpaceX可能合并",
              "summary": "9月16日消息，马斯克在社交媒体再次发文暗示特斯拉与SpaceX可能存在合并可能性。马斯克表示两家公司在AI和机器人技术上的协同效应日益凸显，他认为未来合并可以最大化双方资源整合。此前马斯克曾多次在不同场合提及这一设想，但特斯拉董事会迄今尚无正式回应，资本市场对该话题持续保持高度关注。",
              "link": "https://finance.yahoo.com/markets/stocks/article/musk-hints-again-at-possible-spacex-tesla-merger-135029754.html",
              "tags": [
                "马斯克",
                "特斯拉合并"
              ],
              "source": "Yahoo Finance",
              "time": "9月16日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达RTX 60系列（Rubin架构）据报最快2027年上半年量产上市",
              "summary": "9月16日消息，据NotebookCheck报道，英伟达次代消费级GPU RTX 60系列已获内部绿灯，基于Rubin架构，预计最快于2027年上半年正式上市。RTX 60系列将延续RTX 50系列的AI加速战略，并在能效比和推理性能上进一步提升。此次提前曝光时间节点，也被分析人士视为英伟达在竞争格局趋紧背景下加速产品迭代的信号。",
              "link": "https://www.notebookcheck.net/Nvidia-RTX-60-series-reportedly-greenlit-for-early-2027-launch.1399287.0.html",
              "tags": [
                "RTX 60系列",
                "Rubin架构"
              ],
              "source": "NotebookCheck",
              "time": "9月16日消息"
            },
            {
              "title": "黄仁勋：在中国没人谈「AI末日论」，AI应聚焦解决实际问题",
              "summary": "9月16日，英伟达CEO黄仁勋在All-In Summit峰会上表示，中国的AI叙事更加现实主义，与硅谷热衷讨论「AI末日」不同，中国将AI视为推动经济发展和社会进步的工具。黄仁勋认为「AI末日论」实属自吓，行业应聚焦解决实际问题，这与近期Anthropic、OpenAI等高管呼吁放缓AI开发的表态形成鲜明对比。",
              "link": "https://www.ithome.com/1/003/266.htm",
              "tags": [
                "AI发展",
                "AI末日论"
              ],
              "source": "IT之家",
              "time": "9月16日"
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
              "title": "努比亚NaviX Ultra搭载豆包AI助手正式发售，首销一秒破亿",
              "summary": "9月16日，努比亚NaviX Ultra正式开启首销，搭载火山引擎豆包Agentic AI手机助手，首销一秒破亿。该机配备骁龙8 Elite Gen 5芯片、7100mAh大电池，噪杂环境下唤醒成功率提升48%，句意识别准确率提升21%。豆包AI助手支持全场景自主任务执行，被定位为国内首款Agentic AI手机。",
              "link": "https://nokiamob.net/2026/09/16/meet-the-nubia-navix-ultra-the-ai-agent-phone-with-a-massive-7100mah-battery/",
              "tags": [
                "豆包AI",
                "手机"
              ],
              "source": "NokiaMob",
              "time": "9月16日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek Harness 0.1.6发布：新增Browser Use与Computer Use插件",
              "summary": "9月16日消息，DeepSeek官方在GitHub发布Harness 0.1.6版本更新，新增Browser Use（浏览器自主操控）与Computer Use（桌面级计算机操控）两项插件，支持AI Agent直接控制浏览器进行网页操作和截图交互，进一步扩展本地Agent的工具调用能力。Harness自8月13日以开发者预览形式发布以来，三周内在GitHub积累超21万Stars，迅速成为国内最受关注的Agent运行时框架之一。",
              "link": "https://github.com/deepseek-ai/deepseek-harness/releases",
              "tags": [
                "DeepSeek Harness",
                "Browser Use"
              ],
              "source": "GitHub",
              "time": "9月16日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "微信回应「小微」AI助手隐私争议：数据处理符合规范",
              "summary": "9月16日，针对微信新上线的「小微」AI助手引发的隐私争议，微信官方回应称，小微AI助手在数据处理方面遵循《个人信息保护法》相关规定，用户聊天内容不会被用于模型训练，AI功能可在设置中关闭。此前部分用户担忧小微AI助手会读取历史聊天记录，引发了社交网络上的广泛讨论。",
              "link": "https://www.jiemian.com/article/15097600.html",
              "tags": [
                "微信",
                "AI助手隐私"
              ],
              "source": "界面新闻",
              "time": "9月16日"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米18 Pro系列「百变背屏」亮相：支持AI生成应用",
              "summary": "9月16日消息，小米18 Pro系列手机全新「百变背屏」亮相，支持AI生成的应用。官方预热视频展示了煮蛋定时、喝水打卡、番茄时钟、背英语单词、食谱推荐等多种AI生成应用场景，为手机背屏玩法带来更多智能化可能。",
              "link": "https://www.ithome.com/1/002/868.htm",
              "tags": [
                "百变背屏",
                "AI生成应用"
              ],
              "source": "IT之家",
              "time": "9月16日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "Z.AI（原智谱AI）年末ARR指引上调至30亿美元，融资后估值超500亿美元",
              "summary": "9月16日消息，据南华早报报道，Z.AI（即原智谱AI）在完成50亿美元新一轮融资后，已将其年末年化经常性收入（ARR）指引由此前约24亿美元上调至30亿美元。Z.AI本年度完成多轮融资，累计估值超过500亿美元，成为国内仅次于月之暗面和DeepSeek的商业化增速最快AI独角兽之一。",
              "link": "https://www.scmp.com/tech/tech-trends/article/3367755/chinas-zai-raises-revenue-target-25-after-us5-billion-cash-injection",
              "tags": [
                "融资",
                "ARR"
              ],
              "source": "南华早报",
              "time": "9月16日消息"
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
              "title": "华为汪涛：昇腾950超节点已规模商用，AI战略核心是算力",
              "summary": "9月17日，华为副董事长、轮值董事长汪涛在上海华为全联接大会上介绍华为面向智能时代的重要部署，明确「华为AI战略的核心是算力，坚持硬件变现」。汪涛透露，昇腾超节点已部署超1000套，昇腾950超节点已开始规模商用；昇腾960超节点将是业界首个采用NPO的超节点，Atlas 960液冷超节点计划2027年Q3上市、Atlas 860风冷超节点2027年Q2上市，较原计划提前。",
              "link": "https://www.ithome.com/1/003/426.htm",
              "tags": [
                "昇腾950",
                "AI算力"
              ],
              "source": "IT之家",
              "time": "9月17日"
            },
            {
              "title": "鸿蒙智行确认问界合作模式调整：赛力斯主导五大业务，华为退回技术支持角色",
              "summary": "9月15日，鸿蒙智行与问界汽车联合官宣，AITO品牌的产品定义、产品设计、品牌营销、渠道零售和服务体系五项业务全面移交赛力斯主导，华为终端仅保留技术赋能角色，AITO不脱离鸿蒙智行体系。消息公布后，赛力斯股价当日跌5.09%。分析人士认为，华为此举标志着其「轻资产」造车战略的正式落地。",
              "link": "https://cnevpost.com/2026/09/15/huawei-reshapes-aito-partnership-seres-takes-lead/",
              "tags": [
                "鸿蒙智行",
                "问界"
              ],
              "source": "CNevPost",
              "time": "9月15日"
            },
            {
              "title": "华为发布《智能世界2035》报告，提出十大关键发展方向",
              "summary": "9月16日消息，华为发布《智能世界2035》白皮书，提出未来十年AI、计算、网络、能源等十大关键技术发展方向，预测到2035年全球将有超270亿个连接设备，AI算力增长将超万倍。白皮书还重点描述了智慧城市、智慧医疗、智慧能源等领域的前景蓝图，被业界视为华为面向下一个十年技术布局的纲领性文件。",
              "link": "https://en.prnasia.com/releases/apac/huawei-s-latest-report-proposes-10-key-directions-to-intelligent-world-2035-548190.shtml",
              "tags": [
                "智能世界2035",
                "技术预测"
              ],
              "source": "PR Newswire",
              "time": "9月16日消息"
            },
            {
              "title": "全新奥迪A6L官宣到店：搭载华为乾崑智驾，支持全国城区领航",
              "summary": "9月16日，华为智能汽车解决方案BU宣布全新奥迪A6L到店。该车搭载华为乾崑智驾技术，支持全国城区领航辅助功能，可实现红绿灯路口自主启停、复杂路况通过等功能，标志着华为乾崑智驾技术在高端合资品牌车型上的进一步落地。",
              "link": "https://www.ithome.com/1/003/307.htm",
              "tags": [
                "乾崑智驾",
                "城区领航"
              ],
              "source": "IT之家",
              "time": "9月16日"
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
              "title": "微软",
              "news": [
                {
                  "title": "微软AI主管苏莱曼批评Anthropic：意识声索是伪科学，危害公众理解",
                  "summary": "当地时间9月16日，微软AI部门CEO Mustafa Suleyman在接受Axios专访时罕见公开批评竞争对手Anthropic，称该公司关于AI模型可能具有「意识」的相关表述是不负责任的伪科学，会误导公众对AI本质的理解。苏莱曼强调，赋予AI系统拟人化属性对整个行业的规范发展有害。这是主要AI公司高管之间少见的公开交锋。",
                  "link": "https://www.axios.com/2026/09/16/microsoft-ai-chief-anthropic-consciousness",
                  "tags": [
                    "AI意识",
                    "行业博弈"
                  ],
                  "source": "Axios",
                  "time": "当地时间9月16日"
                }
              ]
            },
            {
              "title": "阶跃星辰",
              "news": [
                {
                  "title": "阶跃星辰发布StepAudio 3系列，支持多语言情感音频生成",
                  "summary": "9月16日消息，阶跃星辰正式发布StepAudio 3系列音频大模型，包含文字转语音、语音克隆和音频增强三个模块，支持中英日等多种语言，主打情感化、自然度高的音频生成体验。StepAudio 3在官方测评中于中文TTS基准测试上超越国内外主要竞品，阶跃星辰称将通过API对外开放该系列模型能力。",
                  "link": "https://techflowpost.com/en-US/newsletter/136282",
                  "tags": [
                    "音频大模型",
                    "TTS"
                  ],
                  "source": "TechFlow",
                  "time": "9月16日消息"
                }
              ]
            },
            {
              "title": "智象未来",
              "news": [
                {
                  "title": "智象未来发布HD-V1视频模型，首个原生全模态视频生成大模型",
                  "summary": "9月15日，北京智象未来（HiDream.ai）正式发布其首个原生全模态视频生成大模型HiDream-O1-Video-1.0（简称HD-V1），支持文本、图像、视频等多模态输入，可一次生成5至20秒1080P高清视频，并同步生成音频。智象未来同期完成C+轮融资，创始人曾任京东集团副总裁，公司已进入全球AI视频模型第一梯队。",
                  "link": "https://longbridge.com/en/news/299015161",
                  "tags": [
                    "视频大模型",
                    "多模态"
                  ],
                  "source": "Longbridge",
                  "time": "9月15日"
                }
              ]
            },
            {
              "title": "科大讯飞",
              "news": [
                {
                  "title": "科大讯飞发布Spark-Audio-1.0-Preview，拓展星火全模态矩阵",
                  "summary": "9月16日消息，科大讯飞发布音频大模型Spark-Audio-1.0-Preview，支持多场景语音合成与音频理解，是其星火全模态生态中的重要补充。该模型在情感自然度和韵律一致性上有所提升，科大讯飞表示将面向教育、医疗等核心场景率先落地Spark-Audio，与讯飞现有语音技术体系深度整合。",
                  "link": "https://www.aibase.com/en/news/31102",
                  "tags": [
                    "音频AI",
                    "星火大模型"
                  ],
                  "source": "AIbase",
                  "time": "9月16日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "Waymo",
              "news": [
                {
                  "title": "Waymo与GO合作，2027年在东京推出全无人出租车服务",
                  "summary": "9月16日消息，Waymo宣布与日本网约车平台GO及日本交通旗下公司达成合作，计划于2027年在东京推出全无人驾驶Robotaxi服务，这是Waymo首次进入日本市场。双方将在东京特定区域试运营后逐步扩大范围，GOX将负责本地化运营，Waymo提供技术平台。这也是继美国本土之后，Waymo在海外落地的首个重要市场。",
                  "link": "https://www.investing.com/news/stock-market-news/waymo-plans-tokyo-robotaxi-service-in-2027-with-go-nihon-kotsu-4900713",
                  "tags": [
                    "Robotaxi",
                    "日本市场"
                  ],
                  "source": "Investing.com",
                  "time": "9月16日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "哈啰出行·造父智能",
              "news": [
                {
                  "title": "哈啰Robotaxi子公司造父智能完成约1亿美元A轮融资",
                  "summary": "9月16日消息，哈啰出行旗下自动驾驶子公司造父智能完成约1亿美元A轮融资，投资方包括多家知名产业和财务投资机构。造父智能专注于低速自动驾驶和无人配送领域，目前在多个城市开展规模化运营测试。此次融资将用于加速技术研发和商业化落地，哈啰出行持续深化在AI出行领域的战略布局。",
                  "link": "https://www.chaincatcher.com/en/article/2290136",
                  "tags": [
                    "自动驾驶融资",
                    "Robotaxi"
                  ],
                  "source": "ChainCatcher",
                  "time": "9月16日消息"
                }
              ]
            },
            {
              "title": "Instinct AI",
              "news": [
                {
                  "title": "Instinct洽谈10亿美元融资，AI个人助理估值冲击百亿美元",
                  "summary": "9月16日消息，据PYMNTS报道，主打AI个人助理的Instinct正在洽谈新一轮10亿美元融资，此轮完成后估值将达100亿美元。Instinct以「会主动行动的AI助理」为核心定位，能够自主安排日程、处理邮件和代为执行任务，被视为下一代Agentic AI助手的代表性产品，已吸引多家顶级风投关注。",
                  "link": "https://www.pymnts.com/startups/2026/instinct-ai-assistant-targets-10-billion-dollar-valuation/",
                  "tags": [
                    "AI助手融资",
                    "Agentic AI"
                  ],
                  "source": "PYMNTS",
                  "time": "9月16日消息"
                }
              ]
            },
            {
              "title": "字节Anew Labs",
              "news": [
                {
                  "title": "字节跳动AI制药子公司Anew Labs完成2.9亿美元独立融资",
                  "summary": "9月16日消息，字节跳动旗下AI制药子公司Anew Labs完成独立融资2.9亿美元，红杉中国等机构参与投资。Anew Labs专注将大模型能力应用于药物设计、靶点发现和临床数据分析，是字节在AI医疗赛道的核心布局。此轮融资也标志着Anew Labs正式走向独立运营，字节跳动AI医疗生态再添重要棋子。",
                  "link": "https://hk.marketscreener.com/news/bytedance-completes-290-million-fundraising-for-ai-drug-unit-after-its-spin-off-sources-say-ce785bd2db89f320",
                  "tags": [
                    "AI制药融资",
                    "字节跳动"
                  ],
                  "source": "MarketScreener",
                  "time": "9月16日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "Mozilla报告",
              "news": [
                {
                  "title": "Mozilla报告：中美AI模型差距已缩至4.4个月",
                  "summary": "9月16日消息，Mozilla发布AI开放性指数报告，分析显示中国开源AI模型与美国前沿模型的能力差距已从去年的约13个月缩短至4.4个月。报告指出，DeepSeek、智谱等开源模型的崛起是主要推动力，中国开源模型在多项标准化基准测试中已接近硅谷前沿水平。这一数据被广泛引用，引发中美AI竞争态势的新一轮讨论。",
                  "link": "https://arstechnica.com/ai/2026/09/exclusive-open-chinese-models-close-gap-with-silicon-valleys-frontier-ai-models/",
                  "tags": [
                    "中美AI竞争",
                    "开源模型"
                  ],
                  "source": "Ars Technica",
                  "time": "9月16日消息"
                }
              ]
            },
            {
              "title": "张一鸣首登亚洲首富",
              "news": [
                {
                  "title": "字节张一鸣身家1050亿美元，首次登顶亚洲首富",
                  "summary": "9月16日消息，据《福布斯》最新富豪榜数据，字节跳动创始人张一鸣以1050亿美元净资产超越印度亿万富翁高塔姆·阿达尼，首次登顶亚洲首富。字节跳动在全球AI大模型、短视频和企业办公市场的持续扩张被认为是张一鸣财富快速增长的核心驱动力，也是AI时代中国科技企业全球化最具代表性的成功案例之一。",
                  "link": "https://gulfnews.com/business/tiktok-co-founder-zhang-yiming-overtakes-gautam-adani-as-asias-richest-1.500677142",
                  "tags": [
                    "字节跳动",
                    "富豪榜"
                  ],
                  "source": "Gulf News",
                  "time": "9月16日消息"
                }
              ]
            },
            {
              "title": "广电总局",
              "news": [
                {
                  "title": "广电总局：AI生成广电视听节目须添加内容标识，严禁AI魔改",
                  "summary": "9月17日，国家广播电视总局在国务院新闻办发布会上介绍「十五五」期间广电领域AI应用规划，明确使用AI技术生成制作、播出的广电视听节目必须添加内容标识，节目制作关键环节及成片内容必须坚持人工审核把关，并严禁AI「魔改」。广电总局表示将统筹发展与安全，做到鼓励创新有尺度、规范发展有边界。",
                  "link": "https://www.ithome.com/1/003/428.htm",
                  "tags": [
                    "AI内容标识",
                    "广电监管"
                  ],
                  "source": "IT之家",
                  "time": "9月17日"
                }
              ]
            },
            {
              "title": "周鸿祎（360创始人）",
              "news": [
                {
                  "title": "周鸿祎：不会再投资新能源汽车，建议所有创业者掌握Agent",
                  "summary": "9月16日消息，360集团创始人周鸿祎表示不会再投资新能源汽车，「已经吃过一次亏，不会再入局」。周鸿祎坦言现在AI带来的机会更大，并建议所有创业者都掌握Agent。这一表态反映了传统互联网企业家对AI赛道的重新聚焦。",
                  "link": "https://www.ithome.com/1/002/923.htm",
                  "tags": [
                    "Agent",
                    "创业"
                  ],
                  "source": "IT之家",
                  "time": "9月16日消息"
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
          "date": "2026-09-16",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "17.3T tokens",
              "change": "↑34%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "12T tokens",
              "change": "↑39%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "11.3T tokens",
              "change": "↑9%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "11.2T tokens",
              "change": "↑9%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "10.3T tokens",
              "change": "new"
            },
            {
              "model": "MiMo-V2.5 (xiaomi)",
              "score": "7.83T tokens",
              "change": "↑87%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "4.47T tokens",
              "change": "↑25%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "4.24T tokens",
              "change": "↑12%"
            },
            {
              "model": "Nemotron 3 Ultra free (nvidia)",
              "score": "3.49T tokens",
              "change": "↑4%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "2.46T tokens",
              "change": "↑25%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.16T tokens",
              "change": "↑14%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "1.97T tokens",
              "change": "↑13%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "1.85T tokens",
              "change": "↑1%"
            },
            {
              "model": "Solar Pro 4 (upstage)",
              "score": "1.67T tokens",
              "change": "↑14%"
            },
            {
              "model": "Claude Sonnet 5 (anthropic)",
              "score": "1.52T tokens",
              "change": "↑15%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.48T tokens",
              "change": "↑38%"
            },
            {
              "model": "MiniMax M3 (minimax)",
              "score": "1.46T tokens",
              "change": "0%"
            },
            {
              "model": "DeepSeek V4 Pro 0423 (deepseek)",
              "score": "1.43T tokens",
              "change": "↑34%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.37T tokens",
              "change": "↑27%"
            },
            {
              "model": "Laguna S 2.1 free (poolside)",
              "score": "1.16T tokens",
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
