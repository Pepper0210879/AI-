// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const NEWS_DATA = {
    date: "2026-05-29",
    sections: {
        overseas: {
            title: "海外主要厂商",
            icon: "fas fa-globe-americas",
            iconClass: "overseas",
            vendors: [
                {
                    name: "OpenAI",
                    color: "#7ab8d6",
                    softBg: "#edf5fa",
                    initial: "O",
                    news: [
                        {
                            title: "OpenAI 基金会设立 2.5 亿美元基金，研究 AI 对劳动力市场影响",
                            summary: "OpenAI Foundation 投入首期 2.5 亿美元，用于应对 AI 带来的岗位与收入结构变化，研究劳动力市场影响，支持受冲击的劳动者和社区，探索 AI 经济收益的分配方式。",
                            link: "https://www.c114.net.cn/ainews/85309.html",
                            tags: ["OpenAI", "AI基金", "劳动力"],
                            source: "极客公园",
                            time: "5小时前"
                        }
                    ]
                },
                {
                    name: "Anthropic",
                    color: "#c4a882",
                    softBg: "#faf5ee",
                    initial: "A",
                    news: [
                        {
                            title: "Claude Opus 4.8 发布：编码能力与诚实度双升级，成本降至三分之一",
                            summary: "Anthropic 发布旗舰模型 Opus 4.8，SWE-Bench Pro 得分 69.2%，多项 Agentic 测试超过 GPT-5.5。快速模式推理速度提升 2.5 倍、成本降至前代三分之一。新增投入控制与动态工作流功能，可在 Claude Code 中并行调度数百个子智能体。",
                            link: "https://www.anthropic.com/news/claude-opus-4-8",
                            tags: ["Claude", "Opus 4.8", "Agent"],
                            source: "爱范儿",
                            time: "3小时前"
                        },
                        {
                            title: "Anthropic 完成 650 亿美元 H 轮融资，估值 9650 亿美元超越 OpenAI",
                            summary: "Anthropic PBC 宣布完成 650 亿美元 H 轮融资，投后估值达 9650 亿美元，由 Altimeter Capital、Dragoneer、Greenoaks 和红杉资本领投，估值首次超越 OpenAI。",
                            link: "https://finance.sina.com.cn/jjxw/2026-05-29/doc-inhzpfxw8096943.shtml",
                            tags: ["Anthropic", "融资", "估值"],
                            source: "极客公园",
                            time: "5小时前"
                        }
                    ]
                },
                {
                    name: "Google",
                    color: "#8ac4a0",
                    softBg: "#effaf3",
                    initial: "G",
                    news: [
                        {
                            title: "YouTube 将上线自动 AI 检测，拟真视频将被自动标注",
                            summary: "YouTube 宣布从 2026 年 5 月起，主动对显著拟真的 AI 生成视频进行自动识别与标注，标签将固定在播放器下方或叠加在画面上，不影响推荐算法和广告收益。",
                            link: "https://www.chinaz.com/ainews/28402.shtml",
                            tags: ["YouTube", "AI检测", "内容标注"],
                            source: "极客公园",
                            time: "5小时前"
                        }
                    ]
                },
                {
                    name: "xAI",
                    color: "#8ab4d4",
                    softBg: "#eef5fb",
                    initial: "X",
                    news: []
                },
                {
                    name: "NVIDIA",
                    color: "#a8c47a",
                    softBg: "#f4f9ee",
                    initial: "N",
                    news: [
                        {
                            title: "英伟达推出开源 AI 框架 Polar，Codex 跑分暴涨 594%",
                            summary: "英伟达研究团队发布开源框架 Polar，让 Codex、Claude Code 等智能体框架接入 GRPO 强化学习训练。基于 Qwen3.5-4B，Codex 在 SWE-Bench Verified 的 pass@1 从 3.8% 跃升至 26.4%。",
                            link: "https://www.ithome.com/0/956/293.htm",
                            tags: ["NVIDIA", "Polar", "GRPO"],
                            source: "IT之家",
                            time: "6小时前"
                        },
                        {
                            title: "黄仁勋加入清华大学经管学院顾问委员会",
                            summary: "英伟达 CEO 黄仁勋将加入清华大学经济管理学院顾问委员会，与苹果 CEO 库克、特斯拉 CEO 马斯克、微软 CEO 纳德拉等同列。此举被视为英伟达深化与中国学术界联系的重要信号。",
                            link: "https://www.sohu.com/a/1028810366_115479",
                            tags: ["黄仁勋", "清华大学", "NVIDIA"],
                            source: "爱范儿",
                            time: "1小时前"
                        }
                    ]
                },
                {
                    name: "Meta",
                    color: "#8a9ad4",
                    softBg: "#eff0fa",
                    initial: "M",
                    news: [
                        {
                            title: "扎克伯格称 Meta 考虑进军云计算市场",
                            summary: "扎克伯格表示如果数据中心算力出现过剩，Meta 绝对在考虑进军云计算领域，将与亚马逊 AWS 和微软 Azure 展开竞争。",
                            link: "https://www.c114.net.cn/cloudnews/85132.html",
                            tags: ["Meta", "云计算", "扎克伯格"],
                            source: "极客公园",
                            time: "5小时前"
                        }
                    ]
                }
            ]
        },
        domestic: {
            title: "国内主要厂商",
            icon: "fas fa-flag",
            iconClass: "domestic",
            vendors: [
                {
                    name: "阿里云",
                    color: "#d4a06a",
                    softBg: "#faf5ee",
                    initial: "\u963f",
                    news: [
                        {
                            title: "阿里达摩院发布 GPU 版 MindOpt 求解器，处理亿级变量线性规划",
                            summary: "达摩院「敏迭」MindOpt 求解器发布 GPU 版本，利用并行加速处理亿级变量的线性规划问题，服务电力调度、航班编排、高端制造等场景。",
                            link: "https://www.c114.net.cn/chipnews/85308.html",
                            tags: ["达摩院", "MindOpt", "GPU"],
                            source: "爱范儿",
                            time: "1小时前"
                        },
                        {
                            title: "阿里 Qoder 推出 Cloud Agents，全托管 AI Agent 运行平台上线",
                            summary: "阿里云 Qoder 上线全托管 AI Agent 运行平台 Cloud Agents，提供 Agent 底座、模型服务和运行环境，企业可通过 API 调用让 Agent 在云端执行任务，上线周期从约 1 个月缩短至 1 天。",
                            link: "https://tech.ifeng.com/c/8tUmH41u6pc",
                            tags: ["阿里云", "Agent", "Qoder"],
                            source: "爱范儿",
                            time: "1小时前"
                        }
                    ]
                },
                {
                    name: "火山引擎",
                    color: "#8aaed4",
                    softBg: "#eef5fb",
                    initial: "\u706b",
                    news: [
                        {
                            title: "字节跳动正开发定制 CPU 以支持 AI 需求",
                            summary: "字节跳动自研 CPU 以满足 AI 基础设施需求，应对英特尔和 AMD 连续涨价（季度环比涨 10%-35%），计划部署于自有服务器和数据中心。",
                            link: "https://www.c114.net.cn/chipnews/85301.html",
                            tags: ["字节跳动", "自研CPU", "AI基础设施"],
                            source: "极客公园",
                            time: "5小时前"
                        },
                        {
                            title: "豆包接入抖音生活服务闭环，支持团购推荐与支付核销",
                            summary: "字节跳动旗下 AI 助手豆包与抖音生活服务整合，用户可在豆包内获得团购推荐、查看商家页面、完成支付和线下核销流程。",
                            link: "https://www.donews.com/news/detail/4/6492091.html",
                            tags: ["豆包", "抖音", "生活服务"],
                            source: "爱范儿",
                            time: "1小时前"
                        }
                    ]
                },
                {
                    name: "DeepSeek",
                    color: "#7ab8d6",
                    softBg: "#edf5fa",
                    initial: "D",
                    news: [
                        {
                            title: "国家大基金领投 DeepSeek 首轮融资，投前估值 450 亿美元",
                            summary: "DeepSeek 成立三年首次对外开放融资，由国家集成电路产业投资基金领投，投前估值达 450 亿美元，融资规模约 100 亿美元。这是国家大基金成立 12 年来首次跨界投资纯大模型公司。",
                            link: "https://www.163.com/dy/article/KU17TE7D05198UNI.html",
                            tags: ["DeepSeek", "融资", "国家大基金"],
                            source: "极客公园",
                            time: "5小时前"
                        },
                        {
                            title: "DeepSeek 服务出现短暂中断，约 22 分钟后恢复",
                            summary: "大量用户反馈 DeepSeek 服务异常，网页对话和 API 出现部分中断，持续约 22 分钟后恢复。DeepSeek 未披露故障具体原因。",
                            link: "https://news.ifeng.com/c/8tUWnm6KPZY",
                            tags: ["DeepSeek", "服务故障"],
                            source: "爱范儿",
                            time: "1小时前"
                        }
                    ]
                },
                {
                    name: "腾讯",
                    color: "#8ac4a0",
                    softBg: "#effaf3",
                    initial: "\u817e",
                    news: [
                        {
                            title: "腾讯混元发布 Hy-Memory 记忆插件，打造 Agent 的「第二大脑」",
                            summary: "腾讯混元发布 Hy-Memory 记忆插件，采用 6 层记忆框架（L1 原始痕迹→L6 前瞻意图）、System1/System2 双系统与演化链机制设计。LongMemEval 评测得分 85.2，记忆数量降低 70%+，Token 消耗降低 35%，5 分钟即可完成部署，专为 Openclaw 等长期协作 Agent 解决记忆碎片化问题。",
                            link: "https://www.chinaz.com/ainews/28443.shtml",
                            tags: ["腾讯", "混元", "Hy-Memory", "Agent"],
                            source: "站长之家",
                            time: "昨天"
                        },
                        {
                            title: "腾讯 Miora 国际版开启邀测：一句话生成多模态视觉方案的创意 AI 智能体",
                            summary: "腾讯在香港 Cloud Day 上正式宣布 Miora 国际版开启邀测。Miora 是全场景创意智能体工作室，支持 AI 生成图片、视频、UI/UX、3D 四种模态内容，具备记忆审美偏好、自由画布编辑、Skills 开放平台等功能。由 CodeBuddy/WorkBuddy 团队打造，需邀请码体验，国内上线时间未定。",
                            link: "https://36kr.com/newsflashes/3828499301651336",
                            tags: ["腾讯", "Miora", "创意AI", "AIGC"],
                            source: "36氪",
                            time: "昨天"
                        },
                        {
                            title: "腾讯发布 AIGC 创作平台「代号 Craft」，自然语言生成游戏素材",
                            summary: "腾讯发布 AIGC 创作平台「代号 Craft」，内置完整 AIGC 工具链，用户通过自然语言可生成 2D/3D 游戏素材，自动生成场景、角色和基础玩法框架，适配 Unity 等引擎。",
                            link: "https://www.chinaz.com/ainews/28395.html",
                            tags: ["腾讯", "AIGC", "游戏"],
                            source: "极客公园",
                            time: "5小时前"
                        }
                    ]
                },
                {
                    name: "小米",
                    color: "#d4a882",
                    softBg: "#faf5ee",
                    initial: "\u7c73",
                    news: [
                        {
                            title: "小米 MiMo-V2.5 系列 API 永久降价，罗福莉称推理成本远低于行业",
                            summary: "小米宣布 MiMo-V2.5 系列 API 永久降价，最高降幅达 99%。大模型负责人罗福莉表示，降价源于架构设计的推理效率压缩与工程优化，成本远低于行业平均水平，建议同行不要盲目降价。",
                            link: "https://www.jiemian.com/article/14488381.html",
                            tags: ["小米", "MiMo", "API降价"],
                            source: "爱范儿",
                            time: "1小时前"
                        },
                        {
                            title: "小米招聘 Agent 上线，依托 MiMo 大模型提供智能求职服务",
                            summary: "小米招聘官网上线「小米招聘 Agent」，依托 MiMo 大模型为求职者提供政策解答、职位智能推荐、招聘进展查询等服务。",
                            link: "https://www.chinaz.com/ainews/28421.shtml",
                            tags: ["小米", "Agent", "招聘"],
                            source: "爱范儿",
                            time: "1小时前"
                        }
                    ]
                },
                {
                    name: "智谱AI",
                    color: "#b4a0d4",
                    softBg: "#f5f0fa",
                    initial: "\u667a",
                    news: []
                },
                {
                    name: "月之暗面",
                    color: "#b4a0d4",
                    softBg: "#f5f0fa",
                    initial: "\u6708",
                    news: []
                },
                {
                    name: "华为",
                    color: "#d4a0a0",
                    softBg: "#faf0f0",
                    initial: "\u534e",
                    news: []
                }
            ]
        },
        other: {
            title: "其他关注",
            icon: "fas fa-layer-group",
            iconClass: "other",
            categories: [
                {
                    name: "其他厂商",
                    icon: "fas fa-building",
                    color: "#a0a8b0",
                    softBg: "#f2f4f5",
                    cards: [
                        {
                            title: "MiniMax",
                            news: [
                                {
                                    title: "MiniMax 年化收入两个月翻番，全球用户约 3 亿",
                                    summary: "MiniMax 披露全球用户约 3 亿，企业客户超 100 万（半年增 5 倍），ARR 翻番周期压缩至约 60 天。M2 模型日均 token 消耗两月增长 6 倍。",
                                    link: "https://www.c114.net.cn/ainews/85314.html",
                                    tags: ["MiniMax", "营收", "增长"],
                                    source: "爱范儿",
                                    time: "1小时前"
                                }
                            ]
                        },
                        {
                            title: "美团",
                            news: [
                                {
                                    title: "美团发布即时零售商家 AI 方案「牵牛花 Claw」",
                                    summary: "美团推出「牵牛花 Claw」AI 解决方案，覆盖经营分析、商品管理、营销活动和运营建议，将平台数据能力转化为商家可执行的运营动作。",
                                    link: "https://www.c114.net.cn/ainews/85281.html",
                                    tags: ["美团", "AI方案", "零售"],
                                    source: "爱范儿",
                                    time: "1小时前"
                                }
                            ]
                        },
                        {
                            title: "苹果",
                            news: [
                                {
                                    title: "iOS 27 AI Siri 界面曝光：灵动岛动画与独立 Siri App",
                                    summary: "彭博社曝光 iOS 27 新版 Siri 界面，支持灵动岛动画、独立 Siri App（含对话记录与多模态附件）、相机整合 Siri 物体识别，相册新增 AI 构图与扩图功能。",
                                    link: "https://news.qq.com/rain/a/20260529A033QF00",
                                    tags: ["苹果", "Siri", "iOS 27"],
                                    source: "爱范儿",
                                    time: "1小时前"
                                }
                            ]
                        },
                        {
                            title: "OpenRouter",
                            news: [
                                {
                                    title: "OpenRouter 完成 1.13 亿美元 B 轮融资，周 token 处理量达 25 万亿",
                                    summary: "AI 模型 API 平台 OpenRouter 获 CapitalG 领投的 1.13 亿美元 B 轮融资，a16z、Menlo Ventures 等参投。6 个月周 token 处理量从 5 万亿增至 25 万亿，服务 800 多万开发者、覆盖 400 多个模型。",
                                    link: "https://finance.eastmoney.com/a/202605273751059421.html",
                                    tags: ["OpenRouter", "融资", "API平台"],
                                    source: "爱范儿",
                                    time: "1小时前"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "自动驾驶",
                    icon: "fas fa-car",
                    color: "#82c4d4",
                    softBg: "#eefafc",
                    cards: [
                        {
                            title: "小鹏汽车",
                            news: [
                                {
                                    title: "小鹏 2026 Q1 营收 130 亿元，今年将推四款新车型",
                                    summary: "小鹏汽车发布 2026 年一季度财报，营收 130 亿元，净亏损 17.8 亿元。何小鹏表示今年将推出四款新车型，并致力于实现自动驾驶出租车和人形机器人的量产。",
                                    link: "https://auto.gasgoo.com/news/202605/28I70459651C109.shtml",
                                    tags: ["小鹏", "财报", "自动驾驶"],
                                    source: "极客公园",
                                    time: "5小时前"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "具身智能",
                    icon: "fas fa-robot",
                    color: "#d4b482",
                    softBg: "#faf6ee",
                    cards: [
                        {
                            title: "自变量机器人",
                            news: [
                                {
                                    title: "自变量机器人开源 Wall-OSS-0.5 具身大模型，17 个零样本任务 4 个超 80%",
                                    summary: "自变量机器人（X-Square Robot）发布并开源具身大模型 Wall-OSS-0.5，核心卖点是预训练一次随处部署，无需任务微调即可直接上机。在 17 个真机零样本任务中，4 个任务自主完成率超 80%。",
                                    link: "https://www.chinaz.com/ainews/28418.shtml",
                                    tags: ["具身智能", "开源", "VLA"],
                                    source: "爱范儿",
                                    time: "1小时前"
                                }
                            ]
                        },
                        {
                            title: "小鹏 IRON",
                            news: [
                                {
                                    title: "小鹏人形机器人 IRON 预计三季度亮相，年底实现高阶量产",
                                    summary: "何小鹏在财报电话会上表示，新一代小鹏 IRON 人形机器人即将进入 ET2 软硬件合围阶段，计划今年第三季度正式亮相，今年底实现高阶量产为目标。",
                                    link: "https://finance.sina.com.cn/tech/digi/2026-05-28/doc-inhznenk0062315.shtml",
                                    tags: ["小鹏", "人形机器人", "IRON"],
                                    source: "爱范儿",
                                    time: "1小时前"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "AI出海",
                    icon: "fas fa-ship",
                    color: "#8ac4a0",
                    softBg: "#effaf3",
                    cards: []
                },
                {
                    name: "投资资讯",
                    icon: "fas fa-chart-line",
                    color: "#d4c482",
                    softBg: "#faf9ee",
                    cards: [
                        {
                            title: "Anthropic",
                            news: [
                                {
                                    title: "Anthropic 完成 650 亿美元 H 轮融资，估值达 9650 亿美元",
                                    summary: "Anthropic 宣布完成 650 亿美元 H 轮融资，投后估值 9650 亿美元，由 Altimeter Capital、Dragoneer、Greenoaks 和红杉资本领投，估值首次超越 OpenAI。",
                                    link: "https://finance.sina.com.cn/jjxw/2026-05-29/doc-inhzpfxw8096943.shtml",
                                    tags: ["Anthropic", "融资", "估值"],
                                    source: "极客公园",
                                    time: "5小时前"
                                }
                            ]
                        },
                        {
                            title: "DeepSeek",
                            news: [
                                {
                                    title: "国家大基金领投 DeepSeek 首轮融资，投前估值 450 亿美元",
                                    summary: "DeepSeek 首轮融资由国家集成电路产业投资基金领投，投前估值 450 亿美元，融资规模约 100 亿美元，是 DeepSeek 成立三年首次对外开放融资。",
                                    link: "https://www.163.com/dy/article/KU17TE7D05198UNI.html",
                                    tags: ["DeepSeek", "融资", "国家大基金"],
                                    source: "极客公园",
                                    time: "5小时前"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "行业趋势&观点",
                    icon: "fas fa-lightbulb",
                    color: "#b4a0d4",
                    softBg: "#f5f0fa",
                    cards: [
                        {
                            title: "黄仁勋（NVIDIA CEO）",
                            news: [
                                {
                                    title: "黄仁勋：AI 时代学什么专业不重要，会不会用 AI 才重要",
                                    summary: "英伟达 CEO 黄仁勋在公开场合表示，AI 时代孩子学什么专业没那么重要，真正要紧的是会不会用 AI。他同时批评部分 CEO 以 AI 为由裁员只是为了显得自己很聪明，强调 AI 应赋能而非替代员工。",
                                    link: "https://www.ithome.com/0/956/177.htm",
                                    tags: ["黄仁勋", "AI时代", "教育"],
                                    source: "IT之家",
                                    time: "1天前"
                                }
                            ]
                        },
                        {
                            title: "罗福莉（小米大模型负责人）",
                            news: [
                                {
                                    title: "罗福莉：MiMo API 降价源于推理效率优化，建议同行不要盲目降价",
                                    summary: "小米大模型负责人罗福莉解释 MiMo-V2.5 API 降价源于架构设计的推理效率压缩与工程优化，原始推理成本远低于行业平均水平。她建议同行不要盲目降价，应首先提升模型效率。",
                                    link: "https://news.qq.com/rain/a/20260528A03CTW00",
                                    tags: ["罗福莉", "MiMo", "API降价"],
                                    source: "爱范儿",
                                    time: "1小时前"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        ranking: {
            title: "榜单情况",
            icon: "fas fa-trophy",
            iconClass: "ranking",
            platforms: [
                { name: "LMArena", date: "2026-05-28", rankings: [ { model: "claude-opus-4-6-thinking", score: "1502", change: "+4" }, { model: "claude-opus-4-7-thinking", score: "1500", change: "+5" }, { model: "claude-opus-4-6", score: "1498", change: "+4" }, { model: "claude-opus-4-7", score: "1494", change: "+5" }, { model: "muse-spark", score: "1489", change: "+6" }, { model: "gemini-3.1-pro-preview", score: "1487", change: "+4" }, { model: "gemini-3-pro", score: "1486", change: "+4" }, { model: "gpt-5.5-high", score: "1482", change: "+6" }, { model: "gemini-3.5-flash", score: "1479", change: "+7" }, { model: "gpt-5.5", score: "1476", change: "+6" }, { model: "gpt-5.2-chat-latest-20260210", score: "1476", change: "+4" }, { model: "grok-4.20-beta1", score: "1476", change: "+5" }, { model: "grok-4.20-beta-0309-reasoning", score: "1475", change: "+5" }, { model: "qwen3.7-max-preview", score: "1475", change: "+10" }, { model: "glm-5.1", score: "1474", change: "+6" }, { model: "gpt-5.5-instant", score: "1474", change: "+5" }, { model: "gemini-3-flash", score: "1473", change: "+4" }, { model: "claude-opus-4-5-20251101-thinking-32k", score: "1473", change: "+4" }, { model: "grok-4.20-multi-agent-beta-0309", score: "1472", change: "+5" }, { model: "ernie-5.1", score: "1470", change: "+6" } ], link: "https://arena.ai/leaderboard/text"
},
                { name: "OpenRouter", date: "2026-05-30", rankings: [ { model: "DeepSeek V4 Flash", score: "3.28T tokens", change: "—" }, { model: "Hy3 preview (腾讯)", score: "3.09T tokens", change: "↑3%" }, { model: "Claude Opus 4.7", score: "2.45T tokens", change: "↑44%" }, { model: "Claude Sonnet 4.6", score: "1.96T tokens", change: "↑11%" }, { model: "Owl Alpha", score: "1.52T tokens", change: "↑36%" }, { model: "DeepSeek V4 Pro", score: "1.23T tokens", change: "↑21%" }, { model: "DeepSeek V3.2", score: "1T tokens", change: "↑5%" }, { model: "MiMo-V2.5-Pro", score: "986B tokens", change: "↑564%" }, { model: "Gemini 3 Flash Preview", score: "972B tokens", change: "↑15%" }, { model: "MiMo-V2.5", score: "755B tokens", change: "↑623%" } ], link: "https://openrouter.ai/rankings"
},
                { name: "Product Hunt", date: "2026-05-29", rankings: [ { name: "Ava 2.0", category: "Productivity", rank: 1, link: "https://artisan.co" }, { name: "/monitor by Firecrawl", category: "Developer Tools", rank: 2, link: "https://www.firecrawl.dev" }, { name: "Ava Studio", category: "Marketing", rank: 3, link: "https://www.avastudio.com" }, { name: "Agent A by Ahrefs", category: "Marketing", rank: 4, link: "https://ahrefs.com/agent-a" }, { name: "Firecoach AI", category: "Sales", rank: 5, link: "https://www.firecoach.ai" }, { name: "MCP Bridge by Appfactor", category: "API", rank: 6, link: "https://github.com/Appfactor/MCP-Bridge" }, { name: "Integuru", category: "API", rank: 7, link: "https://integuru.ai" }, { name: "Linear Diffs", category: "Productivity", rank: 8, link: "https://linear.app" }, { name: "Sinalytica", category: "Retro Games", rank: 9, link: "https://www.producthunt.com/products/sinalytica" }, { name: "Screen Ruler", category: "Chrome Extensions", rank: 10, link: "https://chromewebstore.google.com/detail/screenruler/dgakjgljnohljammncfknppdkinadklf" }, { name: "Basedash: Embedded Analytics", category: "Artificial Intelligence", rank: 11, link: "https://www.basedash.com" }, { name: "Hyper: Self-driving Company Brain", category: "Productivity", rank: 12, link: "https://www.producthunt.com/products/hyper-11" }, { name: "Coffee Piano", category: "Music", rank: 13, link: "https://www.producthunt.com/products/coffee-piano-harmony-lab" }, { name: "Notchy", category: "Productivity", rank: 14, link: "https://notchy.dev" }, { name: "MoDev", category: "Developer Tools", rank: 15, link: "https://modev.app" }, { name: "TrackNotch", category: "Mac", rank: 16, link: "https://www.producthunt.com/products/tracknotch" }, { name: "Clipline", category: "Productivity", rank: 17, link: "https://t.me/clipline_bot" }, { name: "Drafted", category: "Design Tools", rank: 20, link: "https://drafted.ai" } ], link: "https://www.producthunt.com/"
}
            ]
        }
    }
};

// ==================== 厂商/分类/平台 展示配置 ====================
// data.json 只有 name+news，渲染所需的 color/softBg/initial/icon 由此补充
const VENDOR_DISPLAY = {
    "OpenAI":       { color: "#7ab8d6", softBg: "#edf5fa", initial: "O", logo: "logos/OpenAI.png" },
    "Anthropic":    { color: "#c4a882", softBg: "#faf5ee", initial: "A", logo: "logos/Anthropic.png" },
    "Google":       { color: "#8ac4a0", softBg: "#effaf3", initial: "G", logo: "logos/Google.png" },
    "xAI":          { color: "#8ab4d4", softBg: "#eef5fb", initial: "X", logo: "logos/xAI.png" },
    "NVIDIA":       { color: "#a8c47a", softBg: "#f4f9ee", initial: "N", logo: "logos/NVDIA.png" },
    "Meta":         { color: "#8a9ad4", softBg: "#eff0fa", initial: "M", logo: "logos/Meta.png" },
    "阿里云":       { color: "#d4a06a", softBg: "#faf5ee", initial: "阿", logo: "logos/阿里云.png" },
    "火山引擎":     { color: "#8aaed4", softBg: "#eef5fb", initial: "火", logo: "logos/火山引擎.png" },
    "DeepSeek":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "D", logo: "logos/DeepSeek.png" },
    "腾讯":         { color: "#8ac4a0", softBg: "#effaf3", initial: "腾", logo: "logos/腾讯.png" },
    "智谱AI":       { color: "#b4a0d4", softBg: "#f5f0fa", initial: "智", logo: "logos/智谱.png" },
    "智谱 AI":      { color: "#b4a0d4", softBg: "#f5f0fa", initial: "智", logo: "logos/智谱.png" },
    "MiniMax":      { color: "#d4a0b4", softBg: "#faf0f4", initial: "M", logo: "logos/MiniMax.png" },
    "月之暗面":     { color: "#b4a0d4", softBg: "#f5f0fa", initial: "月", logo: "logos/月之暗面.png" },
    "华为":         { color: "#d4a0a0", softBg: "#faf0f0", initial: "华", logo: "logos/华为.jpg" },
    // 其他厂商可能出现的品牌（暂无 logo 的不设 logo 字段，回退到首字母）
    "三星":         { color: "#8aaed4", softBg: "#eef5fb", initial: "三" },
    "小米":         { color: "#d4a882", softBg: "#faf5ee", initial: "米", logo: "logos/小米.jpg" },
    "昆仑万维":     { color: "#a0b0d4", softBg: "#f2f4fa", initial: "昆" },
    "字节跳动":     { color: "#8ab4d4", softBg: "#eef5fb", initial: "字" },
    "Stability AI": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "S" },
    // 自动驾驶/具身智能/投资资讯 中出现的品牌
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
    "快手":         { color: "#d4a06a", softBg: "#faf5ee", initial: "快" },
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
    "MiniMax":      { color: "#d4a0b4", softBg: "#faf0f4", initial: "M" },
    "小鹏汽车":     { color: "#8ac4a0", softBg: "#effaf3", initial: "鹏" },
    "小鹏 IRON":    { color: "#8a9ad4", softBg: "#eff0fa", initial: "I" },
    "苹果":         { color: "#a0a8b0", softBg: "#f2f4f5", initial: "苹" },
    "自变量机器人": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "自" },
    "罗福莉（小米大模型负责人）": { color: "#d4a882", softBg: "#faf5ee", initial: "罗" },
    "黄仁勋（NVIDIA CEO）": { color: "#a8c47a", softBg: "#f4f9ee", initial: "黄" },
    // 标签→厂商名映射（用于「其他关注」分类识别公司名）
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
    // 补充 section 级别元数据
    const secMeta = {
        overseas: { title: "海外主要厂商", icon: "fas fa-globe-americas", iconClass: "overseas" },
        domestic: { title: "国内主要厂商", icon: "fas fa-flag", iconClass: "domestic" },
        other:    { title: "其他关注", icon: "fas fa-layer-group", iconClass: "other" },
        ranking:  { title: "榜单情况", icon: "fas fa-trophy", iconClass: "ranking" }
    };
    for (const [key, meta] of Object.entries(secMeta)) {
        if (data.sections[key]) Object.assign(data.sections[key], meta);
    }
    // 补充海外/国内厂商的展示字段
    for (const secKey of ['overseas', 'domestic']) {
        const vendors = data?.sections?.[secKey]?.vendors;
        if (!vendors) continue;
        for (const v of vendors) {
            const cfg = VENDOR_DISPLAY[v.name];
            if (cfg) { v.color = cfg.color; v.softBg = cfg.softBg; v.initial = cfg.initial; v.logo = cfg.logo; }
        }
    }
    // 补充「其他关注」分类的展示字段
    const categories = data?.sections?.other?.categories;
    if (categories) {
        for (const c of categories) {
            const cfg = CATEGORY_DISPLAY[c.name];
            if (cfg) { c.icon = cfg.icon; c.color = cfg.color; c.softBg = cfg.softBg; }
        }
    }
    // 补充榜单平台的展示字段
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
        if (map[tag]) return map[tag];  // 返回厂商名字符串
    }
    return null;
}

function loadNewsData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            // 检测旧格式数据（含 change 或 upvotes 字段），自动清除
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
    // 在新数据覆盖前，检查过往日期是否有遗漏确认（24 点自动确认）
    autoConfirmBeforeRefresh();

    // 同时检查 localStorage 和 data.js，取日期更近的
    let lsData = null;
    let rawData = null;

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) lsData = JSON.parse(saved);
    } catch (e) { /* ignore */ }

    if (window.__RAW_DATA) rawData = window.__RAW_DATA;

    // 比较日期（字符串可直接比较，如 "2026-05-30" > "2026-05-29"）
    // 只有 localStorage 日期严格大于 data.js 时，才认为用户手动编辑了更新日期
    const rawDate = rawData?.date || '';
    const lsDate = lsData?.date || '';

    if (lsDate > rawDate) {
        // localStorage 日期更新 → 用户手动编辑优先
        if (lsData) {
            enrichData(lsData);
            console.log('已从 localStorage 加载新闻数据（用户编辑优先）');
            return lsData;
        }
    }

    // data.js 日期 >= localStorage → 新抓取数据优先覆盖
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

    // 尝试 fetch data.json
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
    // 一次性补充被跳过的历史日期（如 5/27→5/29 的更新导致 5/28 版本丢失）
    // 同时清理无效日期（已明确不应存在的日期）
    try {
        const INVALID_DATES = ['2026-05-26'];  // 无内容日期，强制清除
        const confirmed = JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
        let changed = false;

        // 清除无效日期
        for (const d of INVALID_DATES) {
            if (confirmed[d]) {
                delete confirmed[d];
                changed = true;
                console.log('清除无效日期:', d);
            }
        }

        // 注入种子数据（始终覆盖，确保服务端修复能同步到客户端）
        if (window.__SEED_CONFIRMED) {
            for (const [dateStr, data] of Object.entries(window.__SEED_CONFIRMED)) {
                const oldJson = JSON.stringify(confirmed[dateStr] || {});
                const newJson = JSON.stringify(data);
                if (oldJson !== newJson) {
                    confirmed[dateStr] = data;
                    changed = true;
                    console.log('种子数据更新:', dateStr);
                }
            }
        }

        if (changed) {
            localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
        }
    } catch (e) { /* ignore */ }
}

function autoConfirmBeforeRefresh() {
    // 首先注入种子数据
    seedConfirmedData();

    // 如果旧数据存在，且昨天未确认 → 用旧数据自动确认昨天
    try {
        const oldSaved = localStorage.getItem(STORAGE_KEY);
        if (!oldSaved) return;
        const oldData = JSON.parse(oldSaved);
        const oldDate = oldData.date; // 如 "2026-05-27"
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
    // DOMContentLoaded 可能已经触发过了
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }
})();

function initPage() {
    updateHeaderDate();
    renderContent();
    setupEventListeners();
}

// ==================== 全局状态 ====================
const state = {
    currentCategory: 'all',
    isLoading: false
};

// ==================== 初始化 ====================
// 初始化已移至 dataReady（异步加载 data.json 后触发）

function updateHeaderDate(dateStr) {
    // 顶部日期：默认显示更新当天；日期选择器可覆盖
    const today = new Date();
    const d = dateStr ? new Date(dateStr + 'T00:00:00') : today;

    // 更新时间：显示最后一次数据操作时间（scraper 抓取或后台保存）
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

    // 顶部日期：更新当天的日期 + 星期
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

// ==================== 渲染内容 ====================
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

    // 按 rowSizes 分组渲染
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
                        const dateLabel = `${d.getMonth() + 1}月${d.getDate()}日新闻`;
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

    // 只保留有卡片的分类
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

    // Tab 切换事件
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
        // 卡片图标：尝试从 VENDOR_DISPLAY 匹配
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

// ==================== 事件监听 ====================
function setupEventListeners() {
    // 分类标签
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCategory(btn));
    });

    // 日期选择
    setupDateSelector();

    // 导出 PDF
    document.querySelector('.export-btn').addEventListener('click', () => {
        showToast('正在打开打印对话框，选择「存储为PDF」即可...');
        setTimeout(() => window.print(), 500);
    });

    // 回到顶部
    setupBackToTop();

    // 键盘导航
    setupKeyboardNav();

    // 近期新闻标题点击（无新闻厂商卡片内的历史链接）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const title = e.target.closest('.vendor-card-recent-title[data-link]');
        if (!title) return;
        e.stopPropagation();
        e.preventDefault();
        window.open(title.dataset.link, '_blank', 'noopener');
    });

    // 厂商卡片点击（事件委托）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.vendor-card');
        if (!card) return;
        const category = card.dataset.category;
        const vendorIndex = parseInt(card.dataset.vendorIndex);
        openVendorModal(category, vendorIndex);
    });

    // 厂商卡片键盘
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

    // 其他关注卡片点击（事件委托）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.other-news-card');
        if (!card) return;
        const catIndex = parseInt(card.dataset.catIndex);
        const cardIndex = parseInt(card.dataset.cardIndex);
        const newsItem = e.target.closest('.vendor-card-news-item');
        const newsIndex = newsItem ? parseInt(newsItem.dataset.newsIndex) : 0;
        openOtherNewsModal(catIndex, cardIndex, newsIndex);
    });

    // 弹窗关闭
    document.getElementById('modal-close').addEventListener('click', closeVendorModal);
    document.getElementById('vendor-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeVendorModal();
    });

    // ESC 关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeVendorModal();
    });

    // 板块折叠
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

    // 限制可选范围：最早有内容的日期 ~ 今天
    const confirmed = getConfirmedDates();
    const confirmedDates = Object.keys(confirmed).sort();
    const minDate = confirmedDates.length > 0 ? confirmedDates[0] : todayStr;
    dateInput.min = minDate;
    dateInput.max = todayStr;

    let lastValidDate = todayStr;

    // 点击按钮展开日期选择器
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

        // 校验：只有今天或已确认日期可选
        if (selected !== todayStr && !confirmed[selected]) {
            showToast(`${selected} 暂无内容，不可选择`);
            dateInput.value = lastValidDate;
            return;
        }

        lastValidDate = selected;
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
    // 从历史确认数据中查找该厂商最近 2-3 条新闻
    const confirmed = getConfirmedDates();
    const todayStr = getTodayStr();
    const dates = Object.keys(confirmed)
        .filter(d => d !== todayStr)
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
    // 分类标签键盘导航
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

// ==================== 弹窗逻辑 ====================
function openVendorModal(category, vendorIndex) {
    const vendor = newsData.sections[category].vendors[vendorIndex];
    if (!vendor || vendor.news.length === 0) return;

    // Header
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

    // Body — 所有新闻堆叠展示
    renderModalBody(vendor);

    // Show
    document.getElementById('vendor-modal').classList.add('active');
    document.body.classList.add('modal-open');
}

function closeVendorModal() {
    document.getElementById('vendor-modal').classList.remove('active');
    document.body.classList.remove('modal-open');
}

function openOtherNewsModal(catIndex, cardIndex, newsIndex) {
    const cat = newsData.sections.other.categories[catIndex];
    const card = cat.cards[cardIndex];
    const item = card.news[newsIndex];
    if (!item) return;

    // 卡片标题由数据决定
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

// ==================== 导出 ====================
function downloadReport() {
    const d = new Date();
    const dateStr = d.toLocaleDateString('zh-CN').replace(/\//g, '-');
    const sections = newsData.sections;

    // Markdown 格式
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

// ==================== 加载 & 通知 ====================
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


// ==================== 控制台 ====================
console.log('%c每日AI早报', 'color: #4a9eff; font-size: 20px; font-weight: bold;');
console.log('%c每天为你精选AI领域最新动态', 'color: #a0a0b0; font-size: 14px;');
