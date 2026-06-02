const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
    date: "2026-05-29",
    sections: {
        overseas: {
            title: "海外主要厂商",
            icon: "fas fa-globe-americas",
            iconClass: "overseas",
            vendors: [
                { name: "OpenAI", color: "#7ab8d6", softBg: "#edf5fa", initial: "O", news: [{ title: "OpenAI 基金会设立 2.5 亿美元基金，研究 AI 对劳动力市场影响", summary: "OpenAI Foundation 投入首期 2.5 亿美元，用于应对 AI 带来的岗位与收入结构变化，研究劳动力市场影响，支持受冲击的劳动者和社区，探索 AI 经济收益的分配方式。", link: "https://www.c114.net.cn/ainews/85309.html", tags: ["OpenAI", "AI基金", "劳动力"], source: "极客公园", time: "5小时前" }] },
                { name: "Anthropic", color: "#c4a882", softBg: "#faf5ee", initial: "A", news: [{ title: "Claude Opus 4.8 发布：编码能力与诚实度双升级，成本降至三分之一", summary: "Anthropic 发布旗舰模型 Opus 4.8，SWE-Bench Pro 得分 69.2%，多项 Agentic 测试超过 GPT-5.5。快速模式推理速度提升 2.5 倍、成本降至前代三分之一。新增投入控制与动态工作流功能，可在 Claude Code 中并行调度数百个子智能体。", link: "https://www.anthropic.com/news/claude-opus-4-8", tags: ["Claude", "Opus 4.8", "Agent"], source: "爱范儿", time: "3小时前" }, { title: "Anthropic 完成 650 亿美元 H 轮融资，估值 9650 亿美元超越 OpenAI", summary: "Anthropic PBC 宣布完成 650 亿美元 H 轮融资，投后估值达 9650 亿美元，由 Altimeter Capital、Dragoneer、Greenoaks 和红杉资本领投，估值首次超越 OpenAI。", link: "https://finance.sina.com.cn/jjxw/2026-05-29/doc-inhzpfxw8096943.shtml", tags: ["Anthropic", "融资", "估值"], source: "极客公园", time: "5小时前" }] },
                { name: "Google", color: "#8ac4a0", softBg: "#effaf3", initial: "G", news: [{ title: "YouTube 将上线自动 AI 检测，拟真视频将被自动标注", summary: "YouTube 宣布从 2026 年 5 月起，主动对显著拟真的 AI 生成视频进行自动识别与标注，标签将固定在播放器下方或叠加在画面上，不影响推荐算法和广告收益。", link: "https://www.chinaz.com/ainews/28402.shtml", tags: ["YouTube", "AI检测", "内容标注"], source: "极客公园", time: "5小时前" }] },
                { name: "xAI", color: "#8ab4d4", softBg: "#eef5fb", initial: "X", news: [] },
                { name: "NVIDIA", color: "#a8c47a", softBg: "#f4f9ee", initial: "N", news: [{ title: "英伟达推出开源 AI 框架 Polar，Codex 跑分暴涨 594%", summary: "英伟达研究团队发布开源框架 Polar，让 Codex、Claude Code 等智能体框架接入 GRPO 强化学习训练。基于 Qwen3.5-4B，Codex 在 SWE-Bench Verified 的 pass@1 从 3.8% 跃升至 26.4%。", link: "https://www.ithome.com/0/956/293.htm", tags: ["NVIDIA", "Polar", "GRPO"], source: "IT之家", time: "6小时前" }, { title: "黄仁勋加入清华大学经管学院顾问委员会", summary: "英伟达 CEO 黄仁勋将加入清华大学经济管理学院顾问委员会，与苹果 CEO 库克、特斯拉 CEO 马斯克、微软 CEO 纳德拉等同列。此举被视为英伟达深化与中国学术界联系的重要信号。", link: "https://www.sohu.com/a/1028810366_115479", tags: ["黄仁勋", "清华大学", "NVIDIA"], source: "爱范儿", time: "1小时前" }] },
                { name: "Meta", color: "#8a9ad4", softBg: "#eff0fa", initial: "M", news: [{ title: "扎克伯格称 Meta 考虑进军云计算市场", summary: "扎克伯格表示如果数据中心算力出现过剩，Meta 绝对在考虑进军云计算领域，将与亚马逊 AWS 和微软 Azure 展开竞争。", link: "https://www.c114.net.cn/cloudnews/85132.html", tags: ["Meta", "云计算", "扎克伯格"], source: "极客公园", time: "5小时前" }] }
            ]
        },
        domestic: {
            title: "国内主要厂商",
            icon: "fas fa-flag",
            iconClass: "domestic",
            vendors: [
                { name: "阿里云", color: "#d4a06a", softBg: "#faf5ee", initial: "\u963f", news: [{ title: "阿里达摩院发布 GPU 版 MindOpt 求解器，处理亿级变量线性规划", summary: "达摩院「敏迭」MindOpt 求解器发布 GPU 版本，利用并行加速处理亿级变量的线性规划问题，服务电力调度、航班编排、高端制造等场景。", link: "https://www.c114.net.cn/chipnews/85308.html", tags: ["达摩院", "MindOpt", "GPU"], source: "爱范儿", time: "1小时前" }, { title: "阿里 Qoder 推出 Cloud Agents，全托管 AI Agent 运行平台上线", summary: "阿里云 Qoder 上线全托管 AI Agent 运行平台 Cloud Agents，提供 Agent 底座、模型服务和运行环境，企业可通过 API 调用让 Agent 在云端执行任务，上线周期从约 1 个月缩短至 1 天。", link: "https://tech.ifeng.com/c/8tUmH41u6pc", tags: ["阿里云", "Agent", "Qoder"], source: "爱范儿", time: "1小时前" }] },
                { name: "火山引擎", color: "#8aaed4", softBg: "#eef5fb", initial: "\u706b", news: [{ title: "字节跳动正开发定制 CPU 以支持 AI 需求", summary: "字节跳动自研 CPU 以满足 AI 基础设施需求，应对英特尔和 AMD 连续涨价（季度环比涨 10%-35%），计划部署于自有服务器和数据中心。", link: "https://www.c114.net.cn/chipnews/85301.html", tags: ["字节跳动", "自研CPU", "AI基础设施"], source: "极客公园", time: "5小时前" }, { title: "豆包接入抖音生活服务闭环，支持团购推荐与支付核销", summary: "字节跳动旗下 AI 助手豆包与抖音生活服务整合，用户可在豆包内获得团购推荐、查看商家页面、完成支付和线下核销流程。", link: "https://www.donews.com/news/detail/4/6492091.html", tags: ["豆包", "抖音", "生活服务"], source: "爱范儿", time: "1小时前" }] },
                { name: "DeepSeek", color: "#7ab8d6", softBg: "#edf5fa", initial: "D", news: [{ title: "国家大基金领投 DeepSeek 首轮融资，投前估值 450 亿美元", summary: "DeepSeek 成立三年首次对外开放融资，由国家集成电路产业投资基金领投，投前估值达 450 亿美元，融资规模约 100 亿美元。这是国家大基金成立 12 年来首次跨界投资纯大模型公司。", link: "https://www.163.com/dy/article/KU17TE7D05198UNI.html", tags: ["DeepSeek", "融资", "国家大基金"], source: "极客公园", time: "5小时前" }, { title: "DeepSeek 服务出现短暂中断，约 22 分钟后恢复", summary: "大量用户反馈 DeepSeek 服务异常，网页对话和 API 出现部分中断，持续约 22 分钟后恢复。DeepSeek 未披露故障具体原因。", link: "https://news.ifeng.com/c/8tUWnm6KPZY", tags: ["DeepSeek", "服务故障"], source: "爱范儿", time: "1小时前" }] },
                { name: "腾讯", color: "#8ac4a0", softBg: "#effaf3", initial: "\u817e", news: [{ title: "腾讯混元发布 Hy-Memory 记忆插件，打造 Agent 的「第二大脑」", summary: "腾讯混元发布 Hy-Memory 记忆插件，采用 6 层记忆框架（L1 原始痕迹→L6 前瞻意图）、System1/System2 双系统与演化链机制设计。LongMemEval 评测得分 85.2，记忆数量降低 70%+，Token 消耗降低 35%，5 分钟即可完成部署，专为 Openclaw 等长期协作 Agent 解决记忆碎片化问题。", link: "https://www.chinaz.com/ainews/28443.shtml", tags: ["腾讯", "混元", "Hy-Memory", "Agent"], source: "站长之家", time: "昨天" }, { title: "腾讯 Miora 国际版开启邀测：一句话生成多模态视觉方案的创意 AI 智能体", summary: "腾讯在香港 Cloud Day 上正式宣布 Miora 国际版开启邀测。Miora 是全场景创意智能体工作室，支持 AI 生成图片、视频、UI/UX、3D 四种模态内容，具备记忆审美偏好、自由画布编辑、Skills 开放平台等功能。由 CodeBuddy/WorkBuddy 团队打造，需邀请码体验，国内上线时间未定。", link: "https://36kr.com/newsflashes/3828499301651336", tags: ["腾讯", "Miora", "创意AI", "AIGC"], source: "36氪", time: "昨天" }, { title: "腾讯发布 AIGC 创作平台「代号 Craft」，自然语言生成游戏素材", summary: "腾讯发布 AIGC 创作平台「代号 Craft」，内置完整 AIGC 工具链，用户通过自然语言可生成 2D/3D 游戏素材，自动生成场景、角色和基础玩法框架，适配 Unity 等引擎。", link: "https://www.chinaz.com/ainews/28395.html", tags: ["腾讯", "AIGC", "游戏"], source: "极客公园", time: "5小时前" }] },
                { name: "小米", color: "#d4a882", softBg: "#faf5ee", initial: "\u7c73", news: [{ title: "小米 MiMo-V2.5 系列 API 永久降价，罗福莉称推理成本远低于行业", summary: "小米宣布 MiMo-V2.5 系列 API 永久降价，最高降幅达 99%。大模型负责人罗福莉表示，降价源于架构设计的推理效率压缩与工程优化，成本远低于行业平均水平，建议同行不要盲目降价。", link: "https://www.jiemian.com/article/14488381.html", tags: ["小米", "MiMo", "API降价"], source: "爱范儿", time: "1小时前" }, { title: "小米招聘 Agent 上线，依托 MiMo 大模型提供智能求职服务", summary: "小米招聘官网上线「小米招聘 Agent」，依托 MiMo 大模型为求职者提供政策解答、职位智能推荐、招聘进展查询等服务。", link: "https://www.chinaz.com/ainews/28421.shtml", tags: ["小米", "Agent", "招聘"], source: "爱范儿", time: "1小时前" }] },
                { name: "智谱AI", color: "#b4a0d4", softBg: "#f5f0fa", initial: "\u667a", news: [] },
                { name: "月之暗面", color: "#b4a0d4", softBg: "#f5f0fa", initial: "\u6708", news: [] },
                { name: "华为", color: "#d4a0a0", softBg: "#faf0f0", initial: "\u534e", news: [] }
            ]
        },
        other: {
            title: "其他关注",
            icon: "fas fa-layer-group",
            iconClass: "other",
            categories: [
                { name: "其他厂商", icon: "fas fa-building", color: "#a0a8b0", softBg: "#f2f4f5", cards: [{ title: "MiniMax", news: [{ title: "MiniMax 年化收入两个月翻番，全球用户约 3 亿", summary: "MiniMax 披露全球用户约 3 亿，企业客户超 100 万（半年增 5 倍），ARR 翻番周期压缩至约 60 天。M2 模型日均 token 消耗两月增长 6 倍。", link: "https://www.c114.net.cn/ainews/85314.html", tags: ["MiniMax", "营收", "增长"], source: "爱范儿", time: "1小时前" }] }, { title: "美团", news: [{ title: "美团发布即时零售商家 AI 方案「牵牛花 Claw」", summary: "美团推出「牵牛花 Claw」AI 解决方案，覆盖经营分析、商品管理、营销活动和运营建议，将平台数据能力转化为商家可执行的运营动作。", link: "https://www.c114.net.cn/ainews/85281.html", tags: ["美团", "AI方案", "零售"], source: "爱范儿", time: "1小时前" }] }, { title: "苹果", news: [{ title: "iOS 27 AI Siri 界面曝光：灵动岛动画与独立 Siri App", summary: "彭博社曝光 iOS 27 新版 Siri 界面，支持灵动岛动画、独立 Siri App（含对话记录与多模态附件）、相机整合 Siri 物体识别，相册新增 AI 构图与扩图功能。", link: "https://news.qq.com/rain/a/20260529A033QF00", tags: ["苹果", "Siri", "iOS 27"], source: "爱范儿", time: "1小时前" }] }, { title: "OpenRouter", news: [{ title: "OpenRouter 完成 1.13 亿美元 B 轮融资，周 token 处理量达 25 万亿", summary: "AI 模型 API 平台 OpenRouter 获 CapitalG 领投的 1.13 亿美元 B 轮融资，a16z、Menlo Ventures 等参投。6 个月周 token 处理量从 5 万亿增至 25 万亿，服务 800 多万开发者、覆盖 400 多个模型。", link: "https://finance.eastmoney.com/a/202605273751059421.html", tags: ["OpenRouter", "融资", "API平台"], source: "爱范儿", time: "1小时前" }] }] },
                { name: "自动驾驶", icon: "fas fa-car", color: "#82c4d4", softBg: "#eefafc", cards: [{ title: "小鹏汽车", news: [{ title: "小鹏 2026 Q1 营收 130 亿元，今年将推四款新车型", summary: "小鹏汽车发布 2026 年一季度财报，营收 130 亿元，净亏损 17.8 亿元。何小鹏表示今年将推出四款新车型，并致力于实现自动驾驶出租车和人形机器人的量产。", link: "https://auto.gasgoo.com/news/202605/28I70459651C109.shtml", tags: ["小鹏", "财报", "自动驾驶"], source: "极客公园", time: "5小时前" }] }] },
                { name: "具身智能", icon: "fas fa-robot", color: "#d4b482", softBg: "#faf6ee", cards: [{ title: "自变量机器人", news: [{ title: "自变量机器人开源 Wall-OSS-0.5 具身大模型，17 个零样本任务 4 个超 80%", summary: "自变量机器人（X-Square Robot）发布并开源具身大模型 Wall-OSS-0.5，核心卖点是预训练一次随处部署，无需任务微调即可直接上机。在 17 个真机零样本任务中，4 个任务自主完成率超 80%。", link: "https://www.chinaz.com/ainews/28418.shtml", tags: ["具身智能", "开源", "VLA"], source: "爱范儿", time: "1小时前" }] }, { title: "小鹏 IRON", news: [{ title: "小鹏人形机器人 IRON 预计三季度亮相，年底实现高阶量产", summary: "何小鹏在财报电话会上表示，新一代小鹏 IRON 人形机器人即将进入 ET2 软硬件合围阶段，计划今年第三季度正式亮相，今年底实现高阶量产为目标。", link: "https://finance.sina.com.cn/tech/digi/2026-05-28/doc-inhznenk0062315.shtml", tags: ["小鹏", "人形机器人", "IRON"], source: "爱范儿", time: "1小时前" }] }] },
                { name: "AI出海", icon: "fas fa-ship", color: "#8ac4a0", softBg: "#effaf3", cards: [] },
                { name: "投资资讯", icon: "fas fa-chart-line", color: "#d4c482", softBg: "#faf9ee", cards: [{ title: "Anthropic", news: [{ title: "Anthropic 完成 650 亿美元 H 轮融资，估值达 9650 亿美元", summary: "Anthropic 宣布完成 650 亿美元 H 轮融资，投后估值 9650 亿美元，由 Altimeter Capital、Dragoneer、Greenoaks 和红杉资本领投，估值首次超越 OpenAI。", link: "https://finance.sina.com.cn/jjxw/2026-05-29/doc-inhzpfxw8096943.shtml", tags: ["Anthropic", "融资", "估值"], source: "极客公园", time: "5小时前" }] }, { title: "DeepSeek", news: [{ title: "国家大基金领投 DeepSeek 首轮融资，投前估值 450 亿美元", summary: "DeepSeek 首轮融资由国家集成电路产业投资基金领投，投前估值 450 亿美元，融资规模约 100 亿美元，是 DeepSeek 成立三年首次对外开放融资。", link: "https://www.163.com/dy/article/KU17TE7D05198UNI.html", tags: ["DeepSeek", "融资", "国家大基金"], source: "极客公园", time: "5小时前" }] }] },
                { name: "行业趋势&观点", icon: "fas fa-lightbulb", color: "#b4a0d4", softBg: "#f5f0fa", cards: [{ title: "黄仁勋（NVIDIA CEO）", news: [{ title: "黄仁勋：AI 时代学什么专业不重要，会不会用 AI 才重要", summary: "英伟达 CEO 黄仁勋在公开场合表示，AI 时代孩子学什么专业没那么重要，真正要紧的是会不会用 AI。他同时批评部分 CEO 以 AI 为由裁员只是为了显得自己很聪明，强调 AI 应赋能而非替代员工。", link: "https://www.ithome.com/0/956/177.htm", tags: ["黄仁勋", "AI时代", "教育"], source: "IT之家", time: "1天前" }] }, { title: "罗福莉（小米大模型负责人）", news: [{ title: "罗福莉：MiMo API 降价源于推理效率优化，建议同行不要盲目降价", summary: "小米大模型负责人罗福莉解释 MiMo-V2.5 API 降价源于架构设计的推理效率压缩与工程优化，原始推理成本远低于行业平均水平。她建议同行不要盲目降价，应首先提升模型效率。", link: "https://news.qq.com/rain/a/20260528A03CTW00", tags: ["罗福莉", "MiMo", "API降价"], source: "爱范儿", time: "1小时前" }] }] }
            ]
        },
        ranking: {
            title: "榜单情况",
            icon: "fas fa-trophy",
            iconClass: "ranking",
            platforms: [{"name": "LMArena", "date": "2026-05-31", "rankings": [{"model": "claude-opus-4-6-thinking", "score": "1502", "change": "+4"}, {"model": "claude-opus-4-7-thinking", "score": "1500", "change": "+5"}, {"model": "claude-opus-4-6", "score": "1498", "change": "+4"}, {"model": "claude-opus-4-7", "score": "1494", "change": "+5"}, {"model": "muse-spark", "score": "1489", "change": "+6"}, {"model": "gemini-3.1-pro-preview", "score": "1487", "change": "+4"}, {"model": "gemini-3-pro", "score": "1486", "change": "+4"}, {"model": "gpt-5.5-high", "score": "1482", "change": "+6"}, {"model": "gemini-3.5-flash", "score": "1479", "change": "+7"}, {"model": "gpt-5.5", "score": "1476", "change": "+6"}, {"model": "gpt-5.2-chat-latest-20260210", "score": "1476", "change": "+4"}, {"model": "grok-4.20-beta1", "score": "1476", "change": "+5"}, {"model": "grok-4.20-beta-0309-reasoning", "score": "1475", "change": "+5"}, {"model": "qwen3.7-max-preview", "score": "1475", "change": "+10"}, {"model": "glm-5.1", "score": "1474", "change": "+6"}, {"model": "gpt-5.5-instant", "score": "1474", "change": "+5"}, {"model": "gemini-3-flash", "score": "1473", "change": "+4"}, {"model": "claude-opus-4-5-20251101-thinking-32k", "score": "1473", "change": "+4"}, {"model": "grok-4.20-multi-agent-beta-0309", "score": "1472", "change": "+5"}, {"model": "ernie-5.1", "score": "1470", "change": "+6"}], "link": "https://arena.ai/leaderboard/text"}, {"name": "OpenRouter", "date": "2026-05-31", "rankings": [{"model": "DeepSeek V4 Flash", "score": "3.28T tokens", "change": "—"}, {"model": "Hy3 preview (腾讯)", "score": "3.09T tokens", "change": "↑3%"}, {"model": "Claude Opus 4.7", "score": "2.45T tokens", "change": "↑44%"}, {"model": "Claude Sonnet 4.6", "score": "1.96T tokens", "change": "↑11%"}, {"model": "Owl Alpha", "score": "1.52T tokens", "change": "↑36%"}, {"model": "DeepSeek V4 Pro", "score": "1.23T tokens", "change": "↑21%"}, {"model": "DeepSeek V3.2", "score": "1T tokens", "change": "↑5%"}, {"model": "MiMo-V2.5-Pro", "score": "986B tokens", "change": "↑564%"}, {"model": "Gemini 3 Flash Preview", "score": "972B tokens", "change": "↑15%"}, {"model": "MiMo-V2.5", "score": "755B tokens", "change": "↑623%"}], "link": "https://openrouter.ai/rankings"}, {"name": "Product Hunt", "date": "2026-05-31", "rankings": [{"name": "Ava 2.0", "category": "Productivity", "rank": 1, "link": "https://artisan.co"}, {"name": "/monitor by Firecrawl", "category": "Developer Tools", "rank": 2, "link": "https://www.firecrawl.dev"}, {"name": "Ava Studio", "category": "Marketing", "rank": 3, "link": "https://www.avastudio.com"}, {"name": "Agent A by Ahrefs", "category": "Marketing", "rank": 4, "link": "https://ahrefs.com/agent-a"}, {"name": "Firecoach AI", "category": "Sales", "rank": 5, "link": "https://www.firecoach.ai"}, {"name": "MCP Bridge by Appfactor", "category": "API", "rank": 6, "link": "https://github.com/Appfactor/MCP-Bridge"}, {"name": "Integuru", "category": "API", "rank": 7, "link": "https://integuru.ai"}, {"name": "Linear Diffs", "category": "Productivity", "rank": 8, "link": "https://linear.app"}, {"name": "Sinalytica", "category": "Retro Games", "rank": 9, "link": "https://www.producthunt.com/products/sinalytica"}, {"name": "Screen Ruler", "category": "Chrome Extensions", "rank": 10, "link": "https://chromewebstore.google.com/detail/screenruler/dgakjgljnohljammncfknppdkinadklf"}, {"name": "Basedash: Embedded Analytics", "category": "Artificial Intelligence", "rank": 11, "link": "https://www.basedash.com"}, {"name": "Hyper: Self-driving Company Brain", "category": "Productivity", "rank": 12, "link": "https://www.producthunt.com/products/hyper-11"}, {"name": "Coffee Piano", "category": "Music", "rank": 13, "link": "https://www.producthunt.com/products/coffee-piano-harmony-lab"}, {"name": "Notchy", "category": "Productivity", "rank": 14, "link": "https://notchy.dev"}, {"name": "MoDev", "category": "Developer Tools", "rank": 15, "link": "https://modev.app"}, {"name": "TrackNotch", "category": "Mac", "rank": 16, "link": "https://www.producthunt.com/products/tracknotch"}, {"name": "Clipline", "category": "Productivity", "rank": 17, "link": "https://t.me/clipline_bot"}, {"name": "Drafted", "category": "Design Tools", "rank": 20, "link": "https://drafted.ai"}], "link": "https://www.producthunt.com/"}]
        }
    }
};

// ==================== 登录（白名单制） ====================
const OPERATOR_WHITELIST = ['秦洁瑶', '巩玉', '刘峰毅', '徐梓茗', '蒋雪', '王笛'];

function checkLogin() {
    const overlay = document.getElementById('login-overlay');
    const input = document.getElementById('login-name');
    const error = document.getElementById('login-error');
    const btn = document.getElementById('login-btn');

    // 已有有效身份 → 直接进
    const saved = localStorage.getItem('ai-news-operator');
    if (saved) {
        try {
            const op = JSON.parse(saved);
            if (OPERATOR_WHITELIST.includes(op.name)) {
                window._operator = op;
                overlay.style.display = 'none';
                updateOperatorBadge();
                return;
            }
        } catch (e) {}
    }

    function attemptLogin() {
        const name = input.value.trim();
        if (!name) {
            error.textContent = '请输入您的大名儿';
            return;
        }
        if (!OPERATOR_WHITELIST.includes(name)) {
            error.textContent = '您不在后台白名单中，请联系管理员';
            input.value = '';
            input.focus();
            return;
        }
        const op = { name: name, since: new Date().toISOString() };
        localStorage.setItem('ai-news-operator', JSON.stringify(op));
        window._operator = op;
        overlay.style.display = 'none';
        updateOperatorBadge();
    }

    btn.addEventListener('click', attemptLogin);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') attemptLogin();
    });
}

function updateOperatorBadge() {
    const badge = document.getElementById('operator-badge');
    if (badge && window._operator) {
        badge.textContent = window._operator.name;
        badge.style.display = 'inline';
    }
}

// ==================== 状态 ====================
let editingData = null;
let currentSection = 'overseas';

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
    loadData();
    renderEditor();

    document.querySelectorAll('#section-tabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSection = btn.dataset.section;
            document.querySelectorAll('#section-tabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderEditor();
        });
    });

    document.getElementById('save-btn').addEventListener('click', saveData);
    setupConfirmToday();
    updateSaveStatus();
    // 初始化审计日志面板
    const panelBody = document.getElementById('audit-panel-body');
    if (panelBody) panelBody.innerHTML = renderAuditLog();
});

let originalData = null;

function loadData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            editingData = JSON.parse(saved);
            originalData = JSON.parse(saved);
            return;
        }
    } catch (e) {}
    editingData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    originalData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(editingData));
}

function saveData() {
    const changes = diffData(originalData, editingData);
    console.log('[审计] diff结果:', changes.length, '条变动', changes);

    // 标记为手动编辑，让首页优先读取 localStorage 而非 data.js
    editingData._manualEdit = new Date().toISOString();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(editingData));
    localStorage.setItem('ai-news-last-update', new Date().toISOString());
    originalData = JSON.parse(JSON.stringify(editingData));
    updateSaveStatus();

    // 审计日志
    const op = window._operator || {};
    const entry = {
        time: new Date().toISOString(),
        operator: op.name || '未知',
        changes: changes.length > 0 ? changes : ['无实质性变更']
    };
    const log = JSON.parse(localStorage.getItem('ai-news-audit-log') || '[]');
    log.unshift(entry);
    if (log.length > 50) log.length = 50;
    localStorage.setItem('ai-news-audit-log', JSON.stringify(log));

    showToast(`已保存，共 ${changes.length} 处变更`);
    refreshAuditPanel();
}

function diffData(oldData, newData) {
    const changes = [];
    if (!oldData || !newData) return changes;

    function compareSection(sectionKey, oldSec, newSec) {
        const oldVendors = oldSec?.vendors || [];
        const newVendors = newSec?.vendors || [];
        const maxLen = Math.max(oldVendors.length, newVendors.length);
        for (let vi = 0; vi < maxLen; vi++) {
            const ov = oldVendors[vi] || { news: [] };
            const nv = newVendors[vi] || { news: [] };
            const name = nv.name || ov.name;
            const oldCount = ov.news?.length || 0;
            const newCount = nv.news?.length || 0;
            if (oldCount !== newCount) {
                if (newCount > oldCount) {
                    // 找出新增的
                    const oldTitles = new Set((ov.news || []).map(n => n.title));
                    const added = (nv.news || []).filter(n => !oldTitles.has(n.title));
                    added.forEach(n => changes.push(`[${name}] 新增：${n.title}`));
                } else {
                    const newTitles = new Set((nv.news || []).map(n => n.title));
                    const removed = (ov.news || []).filter(n => !newTitles.has(n.title));
                    removed.forEach(n => changes.push(`[${name}] 删除：${n.title}`));
                }
            }
            // 按位置比对每条新闻（处理标题也可能被修改的情况）
            const maxNews = Math.max(oldCount, newCount);
            for (let ni = 0; ni < maxNews; ni++) {
                const on = (ov.news || [])[ni];
                const nn = (nv.news || [])[ni];
                if (!on && nn) {
                    changes.push(`[${name}] 新增：${nn.title}`);
                } else if (on && !nn) {
                    changes.push(`[${name}] 删除：${on.title}`);
                } else if (on && nn) {
                    const diffs = [];
                    if (on.title !== nn.title) diffs.push(`标题「${on.title}」→「${nn.title}」`);
                    if (on.summary !== nn.summary) diffs.push('摘要');
                    if (on.link !== nn.link) diffs.push('链接');
                    if (on.time !== nn.time) diffs.push('时间');
                    if (JSON.stringify(on.tags) !== JSON.stringify(nn.tags)) diffs.push('标签');
                    if (diffs.length > 0) changes.push(`[${name}] 修改：${diffs.join('、')}`);
                }
            }
        }
    }

    compareSection('overseas', oldData.sections?.overseas, newData.sections?.overseas);
    compareSection('domestic', oldData.sections?.domestic, newData.sections?.domestic);

    // Other categories
    const oldCats = oldData.sections?.other?.categories || [];
    const newCats = newData.sections?.other?.categories || [];
    for (let ci = 0; ci < Math.max(oldCats.length, newCats.length); ci++) {
        const oc = oldCats[ci] || { cards: [] };
        const nc = newCats[ci] || { cards: [] };
        const oldCards = oc.cards || [];
        const newCards = nc.cards || [];
        for (let cj = 0; cj < Math.max(oldCards.length, newCards.length); cj++) {
            const ocard = oldCards[cj] || { news: [] };
            const ncard = newCards[cj] || { news: [] };
            const cardTitle = ncard.title || ocard.title;
            const oldCount = ocard.news?.length || 0;
            const newCount = ncard.news?.length || 0;
            if (oldCount !== newCount) {
                const diff = newCount - oldCount;
                changes.push(`[${cardTitle}] 新闻 ${diff > 0 ? '+' + diff : diff} 条`);
            }
        }
    }

    return changes;
}

function refreshAuditPanel() {
    const panel = document.getElementById('audit-panel-body');
    if (!panel) return;
    panel.innerHTML = renderAuditLog();
}

function renderAuditLog() {
    const log = JSON.parse(localStorage.getItem('ai-news-audit-log') || '[]');
    if (log.length === 0) return '<p style="color:var(--text-muted);text-align:center;padding:2rem;">暂无记录</p>';
    return log.map((entry, i) => {
        const d = new Date(entry.time);
        const timeStr = d.toLocaleString('zh-CN');
        const operator = entry.operator || '未知';
        return `<div class="audit-entry">
            <div class="audit-entry-header">
                <span class="audit-entry-time">${timeStr}</span>
                <span class="audit-entry-operator">${operator}</span>
            </div>
            <ul class="audit-entry-changes">
                ${entry.changes.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>`;
    }).join('');
}

function toggleAuditPanel() {
    const panel = document.getElementById('audit-panel');
    if (panel) panel.classList.toggle('open');
}

function updateSaveStatus() {
    const d = new Date();
    document.getElementById('save-status').textContent =
        `上次保存: ${d.toLocaleString('zh-CN')}`;
}

// ==================== 确认当日新闻 ====================
function setupConfirmToday() {
    const confirmBtn = document.getElementById('confirm-btn');
    const unconfirmBtn = document.getElementById('unconfirm-btn');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmCancelBtn = document.getElementById('confirm-cancel-btn');
    const confirmOkBtn = document.getElementById('confirm-ok-btn');
    const unconfirmModal = document.getElementById('unconfirm-modal');
    const unconfirmCancelBtn = document.getElementById('unconfirm-cancel-btn');
    const unconfirmOkBtn = document.getElementById('unconfirm-ok-btn');

    updateConfirmButtons();

    // 「确认当日新闻」按钮
    confirmBtn.addEventListener('click', () => {
        document.getElementById('confirm-date-text').textContent = getTodayStr();
        confirmModal.classList.add('active');
    });

    confirmCancelBtn.addEventListener('click', () => {
        confirmModal.classList.remove('active');
    });

    confirmOkBtn.addEventListener('click', () => {
        confirmTodayNews();
        confirmModal.classList.remove('active');
        updateConfirmButtons();
        showToast('今日新闻已确认发布');
    });

    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) confirmModal.classList.remove('active');
    });

    // 「取消确认内容」按钮
    unconfirmBtn.addEventListener('click', () => {
        unconfirmModal.classList.add('active');
    });

    unconfirmCancelBtn.addEventListener('click', () => {
        unconfirmModal.classList.remove('active');
    });

    unconfirmOkBtn.addEventListener('click', () => {
        unconfirmTodayNews();
        unconfirmModal.classList.remove('active');
        updateConfirmButtons();
        showToast('已取消今日确认，可重新编辑并确认');
    });

    unconfirmModal.addEventListener('click', (e) => {
        if (e.target === unconfirmModal) unconfirmModal.classList.remove('active');
    });

    // 页面加载时，检查过往日期是否有遗漏确认
    autoConfirmMissedDays();
}

function updateConfirmButtons() {
    const confirmBtn = document.getElementById('confirm-btn');
    const unconfirmBtn = document.getElementById('unconfirm-btn');
    if (isTodayConfirmed()) {
        confirmBtn.style.display = 'none';
        unconfirmBtn.style.display = '';
    } else {
        confirmBtn.style.display = '';
        unconfirmBtn.style.display = 'none';
    }
}

function getTodayStr() {
    return new Date().toISOString().split('T')[0];
}

function getYesterdayStr() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
}

function getConfirmedData() {
    try {
        return JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function isTodayConfirmed() {
    return !!getConfirmedData()[getTodayStr()];
}

function confirmTodayNews() {
    const todayStr = getTodayStr();
    const confirmed = getConfirmedData();
    confirmed[todayStr] = JSON.parse(JSON.stringify(editingData));
    localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
}

function unconfirmTodayNews() {
    const confirmed = getConfirmedData();
    delete confirmed[getTodayStr()];
    localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
}

function autoConfirmMissedDays() {
    const confirmed = getConfirmedData();
    const todayStr = getTodayStr();
    const yesterdayStr = getYesterdayStr();

    // 检查昨天是否遗漏确认（昨天 24 点已过但未确认）
    if (!confirmed[yesterdayStr]) {
        // 用当前 editingData 自动确认昨天
        // editingData 此时可能已是今天的数据，但如果没有被更新过就是昨天的
        confirmed[yesterdayStr] = JSON.parse(JSON.stringify(editingData));
        localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
    }
}

// ==================== 渲染 ====================
function renderEditor() {
    const el = document.getElementById('admin-editor');
    const sec = editingData.sections[currentSection];

    if (currentSection === 'overseas' || currentSection === 'domestic') {
        el.innerHTML = renderVendorSection(sec);
    } else if (currentSection === 'other') {
        el.innerHTML = renderOtherSection(sec);
    } else if (currentSection === 'ranking') {
        el.innerHTML = renderRankingSection(sec);
    }

    bindPanelToggles(el);
    bindTagInputs(el);
    bindFieldChanges(el);
}

// ==================== Vendor 板块 ====================
function renderVendorSection(sec) {
    const panels = sec.vendors.map((v, vi) => `
        <div class="admin-panel open" data-vendor-index="${vi}">
            <div class="panel-header" data-toggle="panel">
                <div class="panel-header-info">
                    <div class="panel-icon" style="background:${v.softBg};color:${v.color};">
                        ${v.logo ? `<img src="${esc(v.logo)}" alt="${esc(v.name)}" class="admin-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${esc(v.initial)}';">` : esc(v.initial)}
                    </div>
                    <span class="panel-name">${esc(v.name)}</span>
                    <span class="panel-count">${v.news.length} 条新闻</span>
                </div>
                <div class="panel-header-actions" style="display:flex;align-items:center;gap:0.5rem;">
                    <button class="btn-sm danger" data-delete-vendor="${vi}" onclick="event.stopPropagation()">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                    <span class="panel-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="panel-body">
                <div class="panel-meta">
                    <div class="news-field">
                        <label>厂商名称</label>
                        <input type="text" data-field="vendor-name" data-vi="${vi}" value="${esc(v.name)}">
                    </div>
                    <div class="news-field">
                        <label>首字母（logo 加载失败时回退）</label>
                        <input type="text" data-field="vendor-initial" data-vi="${vi}" value="${esc(v.initial)}" maxlength="2" style="width:60px;">
                    </div>
                    <div class="news-field">
                        <label>Logo 路径</label>
                        <input type="text" data-field="vendor-logo" data-vi="${vi}" value="${esc(v.logo || '')}" placeholder="logos/xxx.svg">
                    </div>
                    <div class="news-field">
                        <label>颜色</label>
                        <input type="color" data-field="vendor-color" data-vi="${vi}" value="${v.color}" style="width:40px;height:32px;padding:2px;">
                    </div>
                </div>
                ${v.news.map((n, ni) => renderNewsEditor(n, vi, ni)).join('')}
                <div class="add-btn-row">
                    <button class="btn-sm primary" data-add-news="${vi}">
                        <i class="fas fa-plus"></i> 添加新闻
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    return panels + `
        <div class="add-btn-row">
            <button class="btn-sm primary" id="add-vendor-btn">
                <i class="fas fa-plus"></i> 添加厂商
            </button>
        </div>
    `;
}

function renderNewsEditor(n, vi, ni, cardIdx) {
    const tags = n.tags || [];
    const cardAttr = cardIdx !== undefined ? ` data-card-idx="${cardIdx}"` : '';
    return `
        <div class="admin-news-item" data-news-index="${ni}" data-vi="${vi}"${cardAttr}>
            <div class="news-field-row">
                <div class="news-field">
                    <label>标题</label>
                    <input type="text" data-field="title" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.title)}">
                </div>
            </div>
            <div class="news-field-row single">
                <div class="news-field">
                    <label>摘要</label>
                    <textarea data-field="summary" data-vi="${vi}" data-ni="${ni}"${cardAttr}>${esc(n.summary)}</textarea>
                </div>
            </div>
            <div class="news-field-row">
                <div class="news-field">
                    <label>来源</label>
                    <input type="text" data-field="source" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.source)}">
                </div>
                <div class="news-field">
                    <label>链接</label>
                    <input type="text" data-field="link" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.link)}">
                </div>
            </div>
            <div class="news-field-row">
                <div class="news-field">
                    <label>时间标注</label>
                    <input type="text" data-field="time" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.time)}">
                </div>
                <div class="news-field">
                    <label>标签</label>
                    <div class="tags-row" data-tags-vi="${vi}" data-tags-ni="${ni}"${cardAttr}>
                        ${tags.map((t, ti) => `
                            <span class="tag-item">
                                ${esc(t)}
                                <span class="tag-remove" data-remove-tag="${ti}">&times;</span>
                            </span>
                        `).join('')}
                        <input type="text" class="tag-input" data-tag-input placeholder="+标签" size="6">
                    </div>
                </div>
            </div>
            <div class="admin-actions">
                <button class="btn-sm danger" data-delete-news="${vi}" data-ni="${ni}"${cardAttr}>
                    <i class="fas fa-trash"></i> 删除此新闻
                </button>
            </div>
        </div>
    `;
}

// ==================== Other 板块 ====================
function renderOtherSection(sec) {
    const panels = sec.categories.map((c, ci) => {
        const cards = c.cards || [];
        const totalNews = cards.reduce((s, card) => s + card.news.length, 0);
        return `
        <div class="admin-panel open" data-cat-index="${ci}">
            <div class="panel-header" data-toggle="panel">
                <div class="panel-header-info">
                    <div class="panel-icon" style="background:${c.softBg};color:${c.color};">
                        <i class="${c.icon}"></i>
                    </div>
                    <span class="panel-name">${esc(c.name)}</span>
                    <span class="panel-count">${cards.length} 卡片 / ${totalNews} 条新闻</span>
                </div>
                <div class="panel-header-actions" style="display:flex;align-items:center;gap:0.5rem;">
                    <button class="btn-sm danger" data-delete-cat="${ci}" onclick="event.stopPropagation()">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                    <span class="panel-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="panel-body">
                <div class="panel-meta">
                    <div class="news-field">
                        <label>分类名称</label>
                        <input type="text" data-field="cat-name" data-ci="${ci}" value="${esc(c.name)}">
                    </div>
                    <div class="news-field">
                        <label>图标 class</label>
                        <input type="text" data-field="cat-icon" data-ci="${ci}" value="${esc(c.icon)}">
                    </div>
                    <div class="news-field">
                        <label>颜色</label>
                        <input type="color" data-field="cat-color" data-ci="${ci}" value="${c.color}" style="width:40px;height:32px;padding:2px;">
                    </div>
                </div>
                ${cards.map((card, cardIdx) => `
                    <div class="admin-card-panel" style="margin: 0.5rem 0; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
                        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
                            <span style="font-weight:600;font-size:0.85rem;">卡片标题</span>
                            <input type="text" data-field="card-title" data-ci="${ci}" data-card-idx="${cardIdx}" value="${esc(card.title)}" style="flex:1;">
                            <button class="btn-sm danger" data-delete-card="${ci}" data-card-idx="${cardIdx}" style="white-space:nowrap;">
                                <i class="fas fa-trash"></i> 删除卡片
                            </button>
                        </div>
                        ${card.news.map((n, ni) => renderNewsEditor(n, ci, ni, cardIdx)).join('')}
                        <div class="add-btn-row">
                            <button class="btn-sm primary" data-add-card-news="${ci}" data-card-idx="${cardIdx}">
                                <i class="fas fa-plus"></i> 添加新闻
                            </button>
                        </div>
                    </div>
                `).join('')}
                <div class="add-btn-row" style="margin-top:0.75rem;">
                    <button class="btn-sm primary" data-add-card="${ci}">
                        <i class="fas fa-plus"></i> 添加卡片
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    return panels + `
        <div class="add-btn-row">
            <button class="btn-sm primary" id="add-cat-btn">
                <i class="fas fa-plus"></i> 添加分类
            </button>
        </div>
    `;
}

// ==================== Ranking 板块 ====================
function renderRankingSection(sec) {
    const panels = sec.platforms.map((p, pi) => {
        const isPH = p.rankings.length > 0 && 'name' in p.rankings[0];
        return `
        <div class="admin-panel open" data-platform-index="${pi}">
            <div class="panel-header" data-toggle="panel">
                <div class="panel-header-info">
                    <div class="panel-icon" style="background:${p.softBg};color:${p.color};">
                        ${p.initial}
                    </div>
                    <span class="panel-name">${esc(p.name)}</span>
                    <span class="panel-count">${p.rankings.length} 条排名</span>
                </div>
                <div class="panel-header-actions" style="display:flex;align-items:center;gap:0.5rem;">
                    <button class="btn-sm danger" data-delete-platform="${pi}" onclick="event.stopPropagation()">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                    <span class="panel-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="panel-body">
                <div class="panel-meta">
                    <div class="news-field">
                        <label>平台名称</label>
                        <input type="text" data-field="platform-name" data-pi="${pi}" value="${esc(p.name)}">
                    </div>
                    <div class="news-field">
                        <label>日期</label>
                        <input type="date" data-field="platform-date" data-pi="${pi}" value="${p.date}">
                    </div>
                    <div class="news-field">
                        <label>颜色</label>
                        <input type="color" data-field="platform-color" data-pi="${pi}" value="${p.color}" style="width:40px;height:32px;padding:2px;">
                    </div>
                </div>
                ${p.rankings.map((r, ri) => renderRankingEditor(r, pi, ri, isPH)).join('')}
                <div class="add-btn-row">
                    <button class="btn-sm primary" data-add-ranking="${pi}">
                        <i class="fas fa-plus"></i> 添加排名
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    return panels + `
        <div class="add-btn-row">
            <button class="btn-sm primary" id="add-platform-btn">
                <i class="fas fa-plus"></i> 添加榜单平台
            </button>
        </div>
    `;
}

function renderRankingEditor(r, pi, ri, isPH) {
    if (isPH) {
        return `
            <div class="admin-news-item" data-ranking-index="${ri}" data-pi="${pi}">
                <div class="news-field-row">
                    <div class="news-field">
                        <label>产品名称</label>
                        <input type="text" data-field="ph-name" data-pi="${pi}" data-ri="${ri}" value="${esc(r.name)}">
                    </div>
                    <div class="news-field">
                        <label>Upvotes</label>
                        <input type="text" data-field="ph-upvotes" data-pi="${pi}" data-ri="${ri}" value="${esc(r.upvotes)}">
                    </div>
                </div>
                <div class="admin-actions">
                    <button class="btn-sm danger" data-delete-ranking="${pi}" data-ri="${ri}">
                        <i class="fas fa-trash"></i> 删除此排名
                    </button>
                </div>
            </div>
        `;
    }
    return `
        <div class="admin-news-item" data-ranking-index="${ri}" data-pi="${pi}">
            <div class="news-field-row">
                <div class="news-field">
                    <label>模型名称</label>
                    <input type="text" data-field="rk-model" data-pi="${pi}" data-ri="${ri}" value="${esc(r.model)}">
                </div>
                <div class="news-field">
                    <label>分数</label>
                    <input type="text" data-field="rk-score" data-pi="${pi}" data-ri="${ri}" value="${esc(r.score)}">
                </div>
            </div>
            <div class="news-field-row">
                <div class="news-field">
                    <label>变化</label>
                    <select data-field="rk-change" data-pi="${pi}" data-ri="${ri}" style="padding:0.5rem;border:1px solid var(--border);border-radius:var(--radius-xs);font-family:inherit;">
                        <option value="up" ${r.change === 'up' ? 'selected' : ''}>上升</option>
                        <option value="same" ${r.change === 'same' ? 'selected' : ''}>持平</option>
                        <option value="down" ${r.change === 'down' ? 'selected' : ''}>下降</option>
                    </select>
                </div>
            </div>
            <div class="admin-actions">
                <button class="btn-sm danger" data-delete-ranking="${pi}" data-ri="${ri}">
                    <i class="fas fa-trash"></i> 删除此排名
                </button>
            </div>
        </div>
    `;
}

// ==================== 事件绑定 ====================
function bindPanelToggles(el) {
    el.querySelectorAll('[data-toggle="panel"]').forEach(header => {
        header.addEventListener('click', () => {
            header.closest('.admin-panel').classList.toggle('open');
        });
    });
}

function bindTagInputs(el) {
    el.querySelectorAll('.tag-input').forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const val = input.value.trim();
                if (!val) return;
                const row = input.closest('[data-tags-vi]');
                const vi = parseInt(row.dataset.tagsVi);
                const ni = parseInt(row.dataset.tagsNi);
                const cardIdx = row.dataset.cardIdx !== undefined ? parseInt(row.dataset.cardIdx) : undefined;
                const vendor = getVendor(vi, ni, cardIdx);
                if (!vendor) return;
                const news = vendor.news[ni];
                if (!news.tags) news.tags = [];
                if (!news.tags.includes(val)) {
                    news.tags.push(val);
                    renderEditor();
                }
            }
        });

        input.closest('.tags-row').addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.tag-remove');
            if (!removeBtn) return;
            const ti = parseInt(removeBtn.dataset.removeTag);
            const row = removeBtn.closest('[data-tags-vi]');
            const vi = parseInt(row.dataset.tagsVi);
            const ni = parseInt(row.dataset.tagsNi);
            const cardIdx = row.dataset.cardIdx !== undefined ? parseInt(row.dataset.cardIdx) : undefined;
            const vendor = getVendor(vi, ni, cardIdx);
            if (!vendor) return;
            vendor.news[ni].tags.splice(ti, 1);
            renderEditor();
        });
    });
}

function bindFieldChanges(el) {
    // 使用事件委托监听所有输入变化（change 保证失焦时一定触发，input 保证实时同步）
    el.addEventListener('change', (e) => {
        const target = e.target;
        if (!target.dataset.field) return;
        applyFieldChange(target);
    });
    el.addEventListener('input', (e) => {
        const target = e.target;
        if (!target.dataset.field) return;
        applyFieldChange(target);
    });

    // 删除厂商
    el.querySelectorAll('[data-delete-vendor]').forEach(btn => {
        btn.addEventListener('click', () => {
            const vi = parseInt(btn.dataset.deleteVendor);
            const sec = editingData.sections[currentSection];
            if (!confirm(`确认删除「${sec.vendors[vi].name}」及其所有新闻？`)) return;
            sec.vendors.splice(vi, 1);
            renderEditor();
        });
    });

    // 删除新闻
    el.querySelectorAll('[data-delete-news]').forEach(btn => {
        btn.addEventListener('click', () => {
            const vi = parseInt(btn.dataset.deleteNews);
            const ni = parseInt(btn.dataset.ni);
            const cardIdx = btn.dataset.cardIdx !== undefined ? parseInt(btn.dataset.cardIdx) : undefined;
            const vendor = getVendor(vi, ni, cardIdx);
            if (!vendor) return;
            if (!confirm('确认删除此新闻？')) return;
            vendor.news.splice(ni, 1);
            renderEditor();
        });
    });

    // 添加新闻
    el.querySelectorAll('[data-add-news]').forEach(btn => {
        btn.addEventListener('click', () => {
            const vi = parseInt(btn.dataset.addNews);
            const sec = editingData.sections[currentSection];
            sec.vendors[vi].news.push({
                title: '', summary: '', link: '#', tags: [], source: '', time: ''
            });
            renderEditor();
        });
    });

    // 添加厂商
    const addVendorBtn = el.querySelector('#add-vendor-btn');
    if (addVendorBtn) {
        addVendorBtn.addEventListener('click', () => {
            const sec = editingData.sections[currentSection];
            sec.vendors.push({
                name: '新厂商', color: '#8ab4d4', softBg: '#eef5fb', initial: '新', news: []
            });
            renderEditor();
        });
    }

    // Other: 删除分类
    el.querySelectorAll('[data-delete-cat]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.deleteCat);
            const sec = editingData.sections.other;
            if (!confirm(`确认删除「${sec.categories[ci].name}」？`)) return;
            sec.categories.splice(ci, 1);
            renderEditor();
        });
    });

    // Other: 添加分类
    const addCatBtn = el.querySelector('#add-cat-btn');
    if (addCatBtn) {
        addCatBtn.addEventListener('click', () => {
            editingData.sections.other.categories.push({
                name: '新分类', icon: 'fas fa-star', color: '#a0a8b0', softBg: '#f2f4f5', cards: []
            });
            renderEditor();
        });
    }

    // Other: 添加卡片
    el.querySelectorAll('[data-add-card]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.addCard);
            editingData.sections.other.categories[ci].cards.push({
                title: '新卡片', news: []
            });
            renderEditor();
        });
    });

    // Other: 删除卡片
    el.querySelectorAll('[data-delete-card]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.deleteCard);
            const cardIdx = parseInt(btn.dataset.cardIdx);
            const cat = editingData.sections.other.categories[ci];
            if (!confirm(`确认删除卡片「${cat.cards[cardIdx].title}」及其所有新闻？`)) return;
            cat.cards.splice(cardIdx, 1);
            renderEditor();
        });
    });

    // Other: 添加新闻（在卡片内）
    el.querySelectorAll('[data-add-card-news]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.addCardNews);
            const cardIdx = parseInt(btn.dataset.cardIdx);
            editingData.sections.other.categories[ci].cards[cardIdx].news.push({
                title: '', summary: '', link: '#', tags: [], source: '', time: ''
            });
            renderEditor();
        });
    });

    // Ranking: 删除平台
    el.querySelectorAll('[data-delete-platform]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pi = parseInt(btn.dataset.deletePlatform);
            const sec = editingData.sections.ranking;
            if (!confirm(`确认删除「${sec.platforms[pi].name}」？`)) return;
            sec.platforms.splice(pi, 1);
            renderEditor();
        });
    });

    // Ranking: 添加平台
    const addPlatformBtn = el.querySelector('#add-platform-btn');
    if (addPlatformBtn) {
        addPlatformBtn.addEventListener('click', () => {
            editingData.sections.ranking.platforms.push({
                name: '新榜单', color: '#8ab4d4', softBg: '#eef5fb', initial: '新',
                date: editingData.date, rankings: []
            });
            renderEditor();
        });
    }

    // Ranking: 添加排名
    el.querySelectorAll('[data-add-ranking]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pi = parseInt(btn.dataset.addRanking);
            const platform = editingData.sections.ranking.platforms[pi];
            const isPH = platform.rankings.length > 0 && 'name' in platform.rankings[0];
            if (isPH) {
                platform.rankings.push({ name: '', upvotes: '', rank: platform.rankings.length + 1 });
            } else {
                platform.rankings.push({ model: '', score: '', change: 'same' });
            }
            renderEditor();
        });
    });

    // Ranking: 删除排名
    el.querySelectorAll('[data-delete-ranking]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pi = parseInt(btn.dataset.deleteRanking);
            const ri = parseInt(btn.dataset.ri);
            editingData.sections.ranking.platforms[pi].rankings.splice(ri, 1);
            renderEditor();
        });
    });
}

function applyFieldChange(input) {
    const field = input.dataset.field;
    const value = input.type === 'color' ? input.value : input.value;

    if (field === 'vendor-name') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].name = value;
    } else if (field === 'vendor-initial') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].initial = value;
    } else if (field === 'vendor-logo') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].logo = value;
    } else if (field === 'vendor-color') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].color = value;
    } else if (field === 'title' || field === 'summary' || field === 'source' || field === 'link' || field === 'time') {
        const vi = parseInt(input.dataset.vi);
        const ni = parseInt(input.dataset.ni);
        const cardIdx = input.dataset.cardIdx !== undefined ? parseInt(input.dataset.cardIdx) : undefined;
        const vendor = getVendor(vi, ni, cardIdx);
        if (vendor) vendor.news[ni][field] = value;
    } else if (field === 'card-title') {
        const ci = parseInt(input.dataset.ci);
        const cardIdx = parseInt(input.dataset.cardIdx);
        editingData.sections.other.categories[ci].cards[cardIdx].title = value;
    } else if (field === 'cat-name') {
        const ci = parseInt(input.dataset.ci);
        editingData.sections.other.categories[ci].name = value;
    } else if (field === 'cat-icon') {
        const ci = parseInt(input.dataset.ci);
        editingData.sections.other.categories[ci].icon = value;
    } else if (field === 'cat-color') {
        const ci = parseInt(input.dataset.ci);
        editingData.sections.other.categories[ci].color = value;
    } else if (field === 'platform-name') {
        const pi = parseInt(input.dataset.pi);
        editingData.sections.ranking.platforms[pi].name = value;
    } else if (field === 'platform-date') {
        const pi = parseInt(input.dataset.pi);
        editingData.sections.ranking.platforms[pi].date = value;
    } else if (field === 'platform-color') {
        const pi = parseInt(input.dataset.pi);
        editingData.sections.ranking.platforms[pi].color = value;
    } else if (field === 'ph-name') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].name = value;
    } else if (field === 'ph-upvotes') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].upvotes = value;
    } else if (field === 'rk-model') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].model = value;
    } else if (field === 'rk-score') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].score = value;
    } else if (field === 'rk-change') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].change = value;
    }
}

function getVendor(vi, ni, cardIdx) {
    if (ni !== undefined && currentSection === 'other') {
        const cat = editingData.sections.other.categories[vi];
        if (cardIdx !== undefined && cat.cards && cat.cards[cardIdx]) {
            return { news: cat.cards[cardIdx].news };
        }
        // 兼容旧逻辑：返回第一个卡片的 news
        if (cat.cards && cat.cards.length > 0) {
            return { news: cat.cards[0].news };
        }
        return { news: [] };
    }
    const sec = editingData.sections[currentSection];
    if (sec && sec.vendors && sec.vendors[vi]) {
        return sec.vendors[vi];
    }
    return null;
}

// ==================== 蘑菇助手 API 配置 ====================
const API_PROVIDER_STORAGE = 'chatbot-api-provider';
const API_KEY_STORAGE = 'chatbot-api-key';
const API_ENDPOINT_STORAGE = 'chatbot-api-endpoint';
const API_MODEL_STORAGE = 'chatbot-api-model';
const API_PROXY_STORAGE = 'chatbot-api-proxy';

const PROVIDERS = {
    openai:    { endpoint: 'https://api.openai.com/v1/chat/completions', model: 'gpt-4o', format: 'openai' },
    deepseek:  { endpoint: 'https://api.deepseek.com/v1/chat/completions', model: 'deepseek-chat', format: 'openai' },
    moonshot:  { endpoint: 'https://api.moonshot.cn/v1/chat/completions', model: 'moonshot-v1-8k', format: 'openai' },
    zhipu:     { endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions', model: 'glm-4-flash', format: 'openai' },
    qwen:      { endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', model: 'qwen-plus', format: 'openai' },
    anthropic: { endpoint: 'https://api.anthropic.com/v1/messages', model: 'claude-sonnet-4-20250514', format: 'anthropic' },
    custom:    { endpoint: '', model: '', format: 'openai' }
};

function loadAPIConfig() {
    var provider = document.getElementById('admin-api-provider');
    var endpoint = document.getElementById('admin-api-endpoint');
    var model = document.getElementById('admin-api-model');
    var key = document.getElementById('admin-api-key');
    var proxy = document.getElementById('admin-api-proxy');

    var savedProvider = localStorage.getItem(API_PROVIDER_STORAGE) || 'openai';
    if (provider) provider.value = savedProvider;
    if (endpoint) endpoint.value = localStorage.getItem(API_ENDPOINT_STORAGE) || '';
    if (model) model.value = localStorage.getItem(API_MODEL_STORAGE) || '';
    if (key) key.value = localStorage.getItem(API_KEY_STORAGE) || '';
    if (proxy) proxy.value = localStorage.getItem(API_PROXY_STORAGE) || '';

    // 自动填充
    if (!endpoint.value || !model.value) {
        fillProviderDefaults(savedProvider);
    }
    updateAPIStatus();
}

function fillProviderDefaults(provider) {
    var cfg = PROVIDERS[provider];
    if (!cfg) return;
    var endpoint = document.getElementById('admin-api-endpoint');
    var model = document.getElementById('admin-api-model');
    if (endpoint && !endpoint.value) endpoint.value = cfg.endpoint;
    if (model && !model.value) model.value = cfg.model;
}

function saveAPIConfig() {
    var provider = document.getElementById('admin-api-provider').value;
    var endpoint = document.getElementById('admin-api-endpoint').value.trim();
    var model = document.getElementById('admin-api-model').value.trim();
    var key = document.getElementById('admin-api-key').value.trim();
    var proxy = document.getElementById('admin-api-proxy').value.trim();

    localStorage.setItem(API_PROVIDER_STORAGE, provider);
    localStorage.setItem(API_ENDPOINT_STORAGE, endpoint);
    localStorage.setItem(API_MODEL_STORAGE, model);
    localStorage.setItem(API_KEY_STORAGE, key);
    localStorage.setItem(API_PROXY_STORAGE, proxy);

    updateAPIStatus();
    showToast('蘑菇助手 API 配置已保存 🍄');
}

function clearAPIConfig() {
    localStorage.removeItem(API_PROVIDER_STORAGE);
    localStorage.removeItem(API_ENDPOINT_STORAGE);
    localStorage.removeItem(API_MODEL_STORAGE);
    localStorage.removeItem(API_KEY_STORAGE);
    localStorage.removeItem(API_PROXY_STORAGE);

    document.getElementById('admin-api-key').value = '';
    document.getElementById('admin-api-endpoint').value = '';
    document.getElementById('admin-api-model').value = '';
    document.getElementById('admin-api-provider').value = 'openai';
    document.getElementById('admin-api-proxy').value = '';

    updateAPIStatus();
    showToast('API 配置已清除，蘑菇助手将使用本地搜索');
}

function updateAPIStatus() {
    var status = document.getElementById('admin-api-status');
    if (!status) return;
    var key = localStorage.getItem(API_KEY_STORAGE);
    if (key) {
        status.textContent = '✅ 已配置，蘑菇助手使用 AI 问答模式';
        status.style.color = '#4a9a6a';
    } else {
        status.textContent = '⚠️ 未配置 API Key，使用本地搜索模式';
        status.style.color = '#c09060';
    }
}

// 在 DOMContentLoaded 中初始化 API 配置
document.addEventListener('DOMContentLoaded', function() {
    loadAPIConfig();

    var providerEl = document.getElementById('admin-api-provider');
    if (providerEl) {
        providerEl.addEventListener('change', function() {
            fillProviderDefaults(this.value);
        });
    }

    var saveBtn = document.getElementById('admin-api-save-btn');
    if (saveBtn) saveBtn.addEventListener('click', saveAPIConfig);

    var clearBtn = document.getElementById('admin-api-clear-btn');
    if (clearBtn) clearBtn.addEventListener('click', clearAPIConfig);
});

// ==================== 工具 ====================
function esc(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
