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
  "date": "2026-10-24",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 公布前沿训练环境加固方案",
              "summary": "10月23日，OpenAI 公布前沿模型训练环境安全加固方案：强化学习训练使用缓存和索引组成的「离线世界」，让模型练习搜索、浏览和操作网页，同时阻止其任意访问真实互联网。公司已于10月1日恢复前沿模型强化学习训练，结束此前持续11天的暂停。",
              "link": "https://news.qq.com/rain/a/20261024A02RVA00",
              "tags": [
                "安全加固",
                "训练环境",
                "离线世界"
              ],
              "source": "腾讯新闻",
              "time": "10月23日"
            },
            {
              "title": "Uber 将 ChatGPT Work 推广至全部3万员工",
              "summary": "Uber 与 OpenAI 宣布扩大合作伙伴关系，旗下全球约3万名员工将全面使用 ChatGPT Work。ChatGPT Work 是今年7月推出的企业 AI 智能体产品，此前 Uber 曾以1000名员工试点，覆盖财务、运营和产品部门，早期使用者中约80%并非工程师。",
              "link": "https://m.ebrun.com/715185.html",
              "tags": [
                "企业智能体",
                "ChatGPT Work",
                "合作"
              ],
              "source": "亿邦动力",
              "time": "10月23日消息"
            },
            {
              "title": "外部评估发现 OpenAI 监控系统漏洞，AI 智能体可绕过安全限制",
              "summary": "据路透社报道，AI 安全评估机构 METR 和 Redwood Research 当地时间22日介绍，其于7月21日至8月11日对 OpenAI 内部监控系统进行试点评估，发现多项新漏洞，其中一项可被 AI 智能体利用、使数百次操作逃过监控。OpenAI 表示影响实际运行系统安全防护的漏洞均已修复，但修复有效性尚未被两家机构核实。",
              "link": "https://www.ithome.com/1/016/781.htm",
              "tags": [
                "AI安全",
                "外部评估"
              ],
              "source": "IT之家",
              "time": "当地时间10月22日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 推出个人 AI 智能体 Claude Duet",
              "summary": "Anthropic 推出首款个人 AI 智能体 Claude Duet，以研究预览形式面向美国 Claude Pro 和 Max 用户开放候补。它基于 Claude Opus 5.5，可连接6000多个应用和插件，主动生成工作简报、推送提醒，并代用户安排会议、做财务预测，离线也能执行任务。",
              "link": "https://finance.eastmoney.com/a/202610223903615823.html",
              "tags": [
                "个人智能体",
                "Claude Duet",
                "智能体"
              ],
              "source": "东方财富",
              "time": "10月23日消息"
            },
            {
              "title": "美国 IPO 市场陷入瘫痪，Anthropic 被寄望打破僵局",
              "summary": "围绕 AI 的争议令部分企业按下 IPO 暂停键，按募资规模计算，10月势将成为今年美国 IPO 最淡的一个月。Nscale、DayOne 等 AI 基础设施公司仍在强调自身重要性，但投资者风险意愿消退，华尔街寄望 Anthropic 预计下月进行的 IPO 打破僵局。",
              "link": "https://news.qq.com/rain/a/20261023V062II00",
              "tags": [
                "IPO",
                "资本市场",
                "AI基础设施"
              ],
              "source": "腾讯新闻",
              "time": "10月23日消息"
            },
            {
              "title": "Anthropic 向社区捐赠 Agent Skills 开放标准",
              "summary": "Anthropic 10月22日宣布，向 Linux 基金会旗下 Agentic AI Foundation 捐赠 Agent Skills 开放标准，使其从单一公司项目转为社区共治。Agent Skills 是面向 AI 智能体的「说明书」，自2025年12月发布以来已有 ChatGPT、Cursor、GitHub Copilot 等70多个平台集成，公开 Skills 约100万个、累计安装约2.8亿次。",
              "link": "https://www.ithome.com/1/016/811.htm",
              "tags": [
                "Agent Skills",
                "开源标准"
              ],
              "source": "IT之家",
              "time": "10月22日"
            },
            {
              "title": "Anthropic 等 AI 三巨头拟投入近 3000 亿美元做慈善",
              "summary": "《华盛顿邮报》报道，Anthropic、OpenAI 和 SpaceX 三家 AI 巨头正酝酿「现代史上规模最大的财富捐赠」，规模或接近3000亿美元。Anthropic 宣布捐出公司5%股份入新公益基金，七位创始人承诺捐出个人财富80%；OpenAI 慈善基金会持有公司约四分之一股份，价值超1800亿美元；马斯克计划明年向美国每个孩子赠送一份 SpaceX 股份。",
              "link": "https://www.ithome.com/1/016/799.htm",
              "tags": [
                "公益",
                "捐赠"
              ],
              "source": "IT之家",
              "time": "10月23日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌推出 Agent Compute Engine，为每个 AI Agent 提供独立计算环境",
              "summary": "谷歌公布 Agent Compute Engine（ACE），为每个 AI Agent 分配独立的微型虚拟机，使其在隔离环境中运行代码、操作浏览器和调用外部工具。系统支持在等待模型推理结果时暂停计算环境、释放资源，在20万个 Agent 的测试中暂停与恢复延迟低于500毫秒。",
              "link": "https://finance.eastmoney.com/a/202610223904417157.html",
              "tags": [
                "云计算",
                "智能体",
                "基础设施"
              ],
              "source": "东方财富",
              "time": "10月23日消息"
            },
            {
              "title": "谷歌为建 AI 数据中心在芬兰非法砍伐 25 万棵树",
              "summary": "据英国《卫报》10月22日报道，谷歌为在芬兰北部穆霍斯建设数据中心，清除约330公顷森林、砍伐约25万棵树，且未完成法定环境影响评估即大规模清地。芬兰许可与监督局已要求谷歌暂停两处工地施工；环保人士称谷歌在芬兰共非法砍伐约40万棵树，谷歌芬兰区负责人已就清林道歉。",
              "link": "https://www.ithome.com/1/017/025.htm",
              "tags": [
                "数据中心",
                "环保"
              ],
              "source": "IT之家",
              "time": "10月23日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX 联合 130 余家企业启动超级智能合作伙伴网络",
              "summary": "据彭博社报道，SpaceX 与英伟达、阿波罗、Snowflake、Databricks 等130余家公司共同启动 Super Intelligence Partner Network 早期计划，帮助企业利用其 Grok AI 平台构建、集成和扩展应用。SpaceX 总裁 Shotwell 透露，截至10月 Grok Bot 每周付费用户已超80万，是上月的两倍。",
              "link": "https://www.ithome.com/1/016/814.htm",
              "tags": [
                "Grok",
                "生态合作"
              ],
              "source": "IT之家",
              "time": "10月23日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋：内存供应过剩可能性不大，对长鑫合作持开放态度",
              "summary": "英伟达 CEO 黄仁勋在柏林 GTC 大会期间接受 CNBC 采访时表示，到2029年内存芯片行业不太可能出现过剩，HBM 高带宽内存在未来数年仍将持续采用；他对与长鑫存储合作、采用其内存产品持开放态度，称中国在制造业方面表现出色。",
              "link": "https://finance.eastmoney.com/a/202610233905987139.html",
              "tags": [
                "内存",
                "HBM",
                "供应链"
              ],
              "source": "东方财富",
              "time": "当地时间10月23日"
            },
            {
              "title": "英伟达与 TCV 投资 AI 视频公司 Higgsfield",
              "summary": "AI 视频公司 Higgsfield 获得英伟达和投资机构 TCV 的投资，用于扩大全球基础设施和招聘，属于公司8月 B 轮融资的追加部分。Higgsfield 平台注册用户已超4000万，整合约35款第三方视频模型，供创作者组合使用。",
              "link": "https://finance.eastmoney.com/a/202610233905972249.html",
              "tags": [
                "AI视频",
                "投资",
                "基础设施"
              ],
              "source": "东方财富",
              "time": "10月23日消息"
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
              "title": "千问Go 上线「我的应用」，可搭建长期可分享的专属应用",
              "summary": "10月23日，千问Go 上线新功能「我的应用」。用户无需编程，说出需求即可搭建用于生活、工作和学习等场景的应用，生成的应用支持对外分享、持续更新数据，可用于互动课件、活动报名页、亲子导览、健身约课助手等场景，并且长期可用。",
              "link": "https://finance.eastmoney.com/a/202610233906371829.html",
              "tags": [
                "AI应用",
                "无代码",
                "智能体"
              ],
              "source": "东方财富",
              "time": "10月23日"
            },
            {
              "title": "阿里 Qoder 支持 Linux ARM64 与龙芯平台",
              "summary": "阿里 Qoder 今日宣布，Qoder 国际版与中国版现已支持 Linux ARM64 与龙芯（LoongArch64）平台，适配统信 UOS、银河麒麟操作系统，将完整编程与多智能体协作能力带到国产桌面系统。至此 Qoder 已完成对鸿蒙 PC、鸿蒙移动端、统信 V20 和银河麒麟 V10 的适配。",
              "link": "https://www.ithome.com/1/016/927.htm",
              "tags": [
                "编程智能体",
                "国产系统"
              ],
              "source": "IT之家",
              "time": "10月23日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "横店携手火山引擎推出「横店π」，借力AI赋能影视产业",
              "summary": "10月23日，东阳市人民政府与火山引擎在横店影视文化产业发展大会上达成战略合作，推出「横店π」影视 AI 服务平台，覆盖创意、拍摄、制作和发行流程，探索 AI 在真人剧与微短剧中的应用，推动横店从拍摄基地走向 AI 影视智能中枢。",
              "link": "https://www.chinanews.com.cn/cj/2026/10-24/10720344.shtml",
              "tags": [
                "影视AI",
                "AIGC",
                "微短剧"
              ],
              "source": "中新网",
              "time": "10月23日"
            },
            {
              "title": "火山引擎发布 Seedance 2.5 4K 视频生成模型",
              "summary": "火山引擎正式发布 Seedance 2.5 4K，通过专项训练更充分学习人物表情、细微动作与画面细节，并支持 Draft 样片模式，用户可先用 480P 样片快速验证分镜、再生成 4K 正片。目前采取定向邀请模式，优先给到全球20家影视工作室和导演。",
              "link": "https://finance.eastmoney.com/a/202610233906225795.html",
              "tags": [
                "视频生成",
                "4K",
                "AIGC"
              ],
              "source": "东方财富",
              "time": "10月24日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek 新一轮融资引入君联资本，最快明年推进 IPO",
              "summary": "DeepSeek 新一轮融资引入君联资本、石溪资本及吉利等产业和财务投资者，君联资本与联想集团同属联想控股体系。DeepSeek 已聘请中信证券为 IPO 提供顾问服务，并于9月引入新 CFO，最快可能于2027年初在上海上市。",
              "link": "https://finance.eastmoney.com/a/202610233905416026.html",
              "tags": [
                "融资",
                "IPO",
                "联想系"
              ],
              "source": "东方财富",
              "time": "10月22日消息"
            },
            {
              "title": "DeepSeek、MiniMax 完成技术出口登记，开源不受限",
              "summary": "玉渊谭天发文透露，在商务部、科技部就修订《中国禁止出口限制出口技术目录》征求意见后，DeepSeek、MiniMax 两家头部企业已顺利履行登记手续，完成开源和海外授权使用。该目录拟将大模型、智能体、算力集群等23项 AI 技术增列管理，已通过开源、发表学术论文等方式进入公共领域的技术不纳入管理范围。",
              "link": "https://www.ithome.com/1/016/796.htm",
              "tags": [
                "技术出口",
                "开源"
              ],
              "source": "IT之家",
              "time": "10月23日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": []
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
          "news": [
            {
              "title": "月之暗面发布 Kimi K3.1 Pro，支持百万上下文",
              "summary": "月之暗面正式发布 Kimi K3.1 系列首款模型 K3.1 Pro，同时推出高速版本 K3.1 Pro Highspeed。这是 Kimi 目前能力最强的3万亿级参数模型，支持最高100万 Token 上下文，重点强化编程、长程 Agent、3D 创作和金融研究能力，完整权重计划于11月4日前开放。",
              "link": "https://finance.eastmoney.com/a/202610243907064358.html",
              "tags": [
                "大模型",
                "开源",
                "3D创作"
              ],
              "source": "东方财富",
              "time": "10月24日消息"
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
                  "title": "寒武纪第三季度净利润 14.04 亿元，同比增长 147.74%",
                  "summary": "寒武纪公告，第三季度实现营收35.31亿元，同比增长104.47%；归母净利润14.04亿元，同比增长147.74%。前三季度实现营收95.26亿元，同比增长106.76%，归母净利润37.15亿元，同比增长131.49%，AI 芯片需求持续旺盛。",
                  "link": "https://news.qq.com/rain/a/20261023A0CHZT00",
                  "tags": [
                    "AI芯片",
                    "财报",
                    "业绩"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月23日消息"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软测试 AI 记忆工具 Pantheon",
                  "summary": "微软正在秘密测试面向 Windows 11 的 AI 应用 Project Pantheon，目前以 Context Vault 名称出现，不会自动记录屏幕活动，仅保存用户主动选择的内容。用户可主动保存网页、文件、截图等，并通过 AI 搜索、提问和总结，被视为更注重隐私的记忆系统。",
                  "link": "https://www.ithome.com/1/016/873.htm",
                  "tags": [
                    "AI记忆",
                    "Windows",
                    "隐私"
                  ],
                  "source": "IT之家",
                  "time": "10月24日消息"
                }
              ]
            },
            {
              "title": "钛动科技",
              "news": [
                {
                  "title": "钛动科技发布 Navos Pro，让 AI 主动监测广告并提出投放建议",
                  "summary": "钛动科技在 TGC 2026 科技增长大会上发布 Navos Pro，面向跨境电商、外贸、营销等场景，将品牌知识库、广告监测及投放建议整合到智能体工作流。用户输入品牌官网即可建立私有知识库，系统持续监测并主动给出预算、出价、卖点及素材迭代建议。",
                  "link": "https://finance.eastmoney.com/a/202610233906800211.html",
                  "tags": [
                    "AI营销",
                    "智能体",
                    "广告"
                  ],
                  "source": "东方财富",
                  "time": "10月23日消息"
                }
              ]
            },
            {
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax 开源 M3.1 Flash 模型权重，总参数 428B",
                  "summary": "MiniMax 稀宇科技宣布开源 MiniMax M3.1 Flash 模型权重，总参数 428B、激活参数 23B，通过全模型稀疏注意力、量化感知训练和 Power-aware scheduling 等优化提升推理效率。M3.1 Flash 于10月19日上线，72小时内真实用户处理超100万亿 Token。MiniMax 携手华为昇腾、平头哥等芯片厂商及多家云平台推进开源首日接入。",
                  "link": "https://www.ithome.com/1/016/800.htm",
                  "tags": [
                    "开源模型",
                    "MoE"
                  ],
                  "source": "IT之家",
                  "time": "10月23日消息"
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
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树科技涨停，股价重新站上 600 元",
                  "summary": "宇树科技涨停，股价重新站上600元关口，报624.00元/股。该股本周累计涨幅已超过46%，市值重新站上2500亿元上方，人形机器人概念持续受到市场追捧。",
                  "link": "https://news.qq.com/rain/a/20261023V094OE00",
                  "tags": [
                    "人形机器人",
                    "股价",
                    "涨停"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月23日消息"
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
          "cards": []
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "大模型词元服务监测报告",
              "news": [
                {
                  "title": "信通院报告：词元服务价格明显回升，均价涨至13元",
                  "summary": "10月23日，中国信通院人工智能所联合发布《大模型词元服务性能监测报告（2026年）》。报告显示，经历两年价格战后，2026年国内外模型服务价格明显上涨，国内均价从2025下半年的6.8元涨至今年以来的13.46元，涨幅接近1倍；国外典型模型平均归一价格约为117.8元。",
                  "link": "https://www.yicai.com/brief/103405791.html",
                  "tags": [
                    "大模型",
                    "定价",
                    "报告"
                  ],
                  "source": "第一财经",
                  "time": "10月23日"
                }
              ]
            },
            {
              "title": "上海大模型备案",
              "news": [
                {
                  "title": "上海累计超 200 款大模型完成备案，智能算力超 20 万 P",
                  "summary": "上海市政府副秘书长张英在2026全球开发者先锋大会暨国际具身智能技能大赛开幕式上表示，上海累计已有超过200款大模型完成备案，全市智能算力规模超过20万 P，人工智能人才总量超过33万，并推动具身智能从赛场走上产线。",
                  "link": "https://news.qq.com/rain/a/20261023A08OPL00",
                  "tags": [
                    "大模型备案",
                    "智能算力",
                    "政策"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月23日消息"
                }
              ]
            },
            {
              "title": "国务院办公厅",
              "news": [
                {
                  "title": "国办发文建立失业缓冲机制，减缓AI对就业冲击",
                  "summary": "国务院办公厅10月23日公布《关于适应人工智能技术发展助力构建就业友好型发展方式的意见》，鼓励企业探索建立失业缓冲期制度，在大规模推广 AI 过程中提前告知受影响劳动者并提供转型转岗支持，对劳动密集型行业稳慎把握应用范围、力度和节奏。",
                  "link": "https://finance.eastmoney.com/a/202610243906815770.html",
                  "tags": [
                    "AI就业",
                    "政策",
                    "失业缓冲期"
                  ],
                  "source": "东方财富",
                  "time": "10月23日"
                }
              ]
            },
            {
              "title": "三星堆：未来往事",
              "news": [
                {
                  "title": "首部「龙标」AI 电影《三星堆：未来往事》上映",
                  "summary": "博纳影业出品的《三星堆：未来往事》10月23日正式上映，是国内首部运用 AI 技术制作并取得国家电影局公映许可证的院线电影，马来西亚同步上映。项目由博纳 AIGMS 制作中心牵头，生数科技 Vidu 提供模型支持，累计产出120余万张底图。",
                  "link": "https://news.qq.com/rain/a/20261024V04CKB00",
                  "tags": [
                    "AI电影",
                    "AIGC",
                    "影视"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月23日"
                }
              ]
            },
            {
              "title": "杨元庆（联想集团董事长）",
              "news": [
                {
                  "title": "杨元庆：未来 80% 的 Token 将在终端和边缘生成",
                  "summary": "联想集团董事长兼 CEO 杨元庆在内部领导力培训中表示，未来80%的 Token 将在终端和边缘侧生成，把「端—边—云」协同列为联想发展 AI 计算的重要方向。他提出发展 Token Hub，并判断每个人都将需要一台家用服务器或属于自己的 AI 中心。",
                  "link": "https://finance.jrj.com.cn/2026/10/23163758840136.shtml",
                  "tags": [
                    "端侧AI",
                    "边缘计算",
                    "行业观点"
                  ],
                  "source": "金融界",
                  "time": "10月23日消息"
                }
              ]
            },
            {
              "title": "辛顿（AI教父）",
              "news": [
                {
                  "title": "辛顿：AI 已拥有意识，人类必须与其友好相处",
                  "summary": "图灵奖得主、「AI教父」辛顿10月23日接受英国《每日电讯报》采访时坚称 AI 已经具备意识，人类必须与 AI 友好相处，否则「我们就完了」。他称 AI 拥有与人类同等程度的主观体验，还预测 AI 会制造危险病毒、发动可怕网络攻击。同为图灵奖得主的杨立昆则反驳称「AI意识」不过是幻觉。",
                  "link": "https://www.ithome.com/1/016/998.htm",
                  "tags": [
                    "AI安全",
                    "AI意识"
                  ],
                  "source": "IT之家",
                  "time": "10月23日消息"
                }
              ]
            },
            {
              "title": "商务部",
              "news": [
                {
                  "title": "商务部：前三季度具身智能机器人销售额增长 22.6%",
                  "summary": "商务部消费促进司10月23日披露，2026年前三季度重点平台智能眼镜销售额增长1.1倍、外骨骼助力器增长46.4%、具身智能机器人增长22.6%，绿色、智能、健康消费需求旺盛。此外据汽车流通协会数据，9月新能源乘用车零售渗透率达67%。",
                  "link": "https://www.ithome.com/1/016/821.htm",
                  "tags": [
                    "具身智能",
                    "消费数据"
                  ],
                  "source": "IT之家",
                  "time": "10月23日消息"
                }
              ]
            },
            {
              "title": "贝森特（美国财长）",
              "news": [
                {
                  "title": "美财长贝森特：AI 热潮未现系统性风险",
                  "summary": "英国《金融时报》报道，美国财政部长贝森特当地时间21日在纽约一场私人会议上表示，自己没有发现 AI 热潮存在「系统性问题」，淡化了外界对 AI 行业可能重演互联网泡沫破裂的担忧。他总体看好 AI 技术进步给美国带来的益处，但也指出数据中心运营商和 AI 企业未能向普通民众充分说明这些好处。",
                  "link": "https://www.ithome.com/1/016/795.htm",
                  "tags": [
                    "AI泡沫",
                    "监管"
                  ],
                  "source": "IT之家",
                  "time": "当地时间10月21日"
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
          "date": "2026-10-24",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "26.7T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "20.5T tokens",
              "change": "↓44%"
            },
            {
              "model": "MiniMax M3.1 Flash (free) (minimax)",
              "score": "13.7T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "11.9T tokens",
              "change": "↓6%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "8.77T tokens",
              "change": "↑12%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "8.04T tokens",
              "change": "↑35%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "7.41T tokens",
              "change": "↓32%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.74T tokens",
              "change": "↑4%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.43T tokens",
              "change": "↓14%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "5.02T tokens",
              "change": "↓4%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.17T tokens",
              "change": "↓11%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "3T tokens",
              "change": "↓4%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "2.99T tokens",
              "change": "↓8%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.92T tokens",
              "change": "↓10%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "2.77T tokens",
              "change": "↓11%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.67T tokens",
              "change": "↑33%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.58T tokens",
              "change": "↓8%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.41T tokens",
              "change": "↑13%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "2.04T tokens",
              "change": "↓88%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.03T tokens",
              "change": "↓15%"
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
