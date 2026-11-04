const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-29",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 据悉拟采购谷歌 TPU 芯片",
              "summary": "当地时间10月27日，据 The Information 引述知情人士报道，OpenAI 正计划采购谷歌自研的 TPU 人工智能芯片，以扩大算力规模并实现芯片供应来源多元化，双方尚未确定最终协议条款。OpenAI 已发布招聘岗位，寻找能牵头优化前沿模型在 TPU 上运行的工程师。随着 AI 训练和推理需求增长，OpenAI 正在寻求英伟达 GPU 之外的算力来源，同时与博通合作开发自研芯片。",
              "link": "https://news.qq.com/rain/a/20261028A073J800",
              "tags": [
                "AI芯片",
                "算力"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月27日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 拟将至多 20% IPO 股份售予散户",
              "summary": "当地时间10月28日，据新浪财经报道，Anthropic 正考虑将首次公开募股（IPO）发行股份的 15% 至 20% 分配给个人投资者，并已选定摩根大通负责美国市场的散户认购业务。按照此前投资者提出的估值预期，Anthropic 上市估值可能达到 1.4 万亿至 1.5 万亿美元，最高甚至达到 1.75 万亿美元，有望成为全球规模最大的科技企业 IPO 之一。",
              "link": "https://news.qq.com/rain/a/20261028A0CFRO00",
              "tags": [
                "IPO",
                "融资"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月28日"
            },
            {
              "title": "Anthropic 团队宣布取消编程面试",
              "summary": "当地时间10月28日，Anthropic 招聘经理、Claude 相关产品工程负责人 Felix Rieseberg 在社交平台发文宣布，其团队已正式将传统编程面试从招聘流程中移除，本月起不再作为考察候选人的环节。他表示传统编程面试考核已过时且失去意义，无法真实反映现代开发者的能力；对初级工程师而言，取消此类面试反而是机会，新人无需再因机械的算法背诵或白板编程被拒之门外。",
              "link": "https://news.qq.com/rain/a/20261028A07Z1800",
              "tags": [
                "招聘",
                "AI影响"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月28日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌发布 Gemini 4 Carbon，超越 Opus 5.5",
              "summary": "当地时间10月28日，Google DeepMind 发布新一代旗舰模型 Gemini 4 Carbon，距 Gemini 4 Argon 推出约两周。在独立评测机构 Artificial Analysis 最新 Intelligence Index v5.0 中，Carbon（High）以 59 分位居榜首，高于 Claude Opus 5.5（Max）的 58 分。此次升级重点是长程编程与网络安全，在发现真实软件漏洞的 SEC-bench Pro 上获得 88.2%。",
              "link": "https://news.qq.com/rain/a/20261029A01AMS00",
              "tags": [
                "大模型",
                "编程"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月28日"
            },
            {
              "title": "谷歌云三季度营收翻倍，盘后股价大跌 10%",
              "summary": "当地时间10月28日，Alphabet 发布 2026 年第三季度财报，营收 1275.77 亿美元，同比增长 25%；Google Cloud 当季营收达 307.09 亿美元，同比增长 103%，营业利润 111.21 亿美元。企业 AI 基础设施和解决方案需求，以及 TPU 系统销售，共同推动云业务增长。但整体业绩不及预期，盘后股价大跌 10%。皮查伊披露，Gemini 应用用户已达 10 亿。",
              "link": "https://news.qq.com/rain/a/20261029A02WYZ00",
              "tags": [
                "财报",
                "云计算"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月28日"
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
              "title": "美司法部就英伟达收购 Hugging Face 展开问询",
              "summary": "当地时间10月28日，据路透社报道，美国司法部已就英伟达收购开源平台 Hugging Face 的交易将如何影响人工智能领域竞争展开问询，同时反垄断执法部门仍在推进对这家芯片设计公司行为的多年调查。司法部官员询问，这笔收购是否会让英伟达掌控 AI 领域一个基础性的分发渠道。",
              "link": "https://news.qq.com/rain/a/20261029A0389B00",
              "tags": [
                "反垄断",
                "开源"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月28日"
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
              "title": "豆包工作升级电脑操作，Mac 锁屏后可继续执行",
              "summary": "10月28日，豆包工作升级电脑操作能力，支持将「录制电脑操作」保存为技能，Mac 锁屏后任务也能继续执行。用户演示一遍桌面操作并口头说明要求，豆包工作就能将流程与讲解整理成个人技能，下次直接调用。开启「允许豆包在锁屏时工作」后，需要操作电脑的任务可在锁屏后继续，用户还能从手机向锁屏的 Mac 下达任务并查看结果。",
              "link": "https://news.qq.com/rain/a/20261028A08IBY00",
              "tags": [
                "AI应用",
                "电脑操作"
              ],
              "source": "腾讯新闻",
              "time": "10月28日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek V5 占位符现身官方代码库",
              "summary": "10月28日，有网友发现 DeepSeek Harness 官方代码库中出现 DeepSeek-V5、V5-open、V5-next 等占位符，纷纷猜测可能有新模型即将发布。这套设计意味着 DeepSeek 可在服务端改 /models 直接发布 V5，客户端无需发版即可支持，视作官方已为 V5 系列大模型发布提前做了准备。",
              "link": "https://news.qq.com/rain/a/20261028A0AM1M00",
              "tags": [
                "大模型",
                "开源"
              ],
              "source": "腾讯新闻",
              "time": "10月28日"
            },
            {
              "title": "DeepSeek V4.1 Flash 登顶 FrontierCode 2.0 开源模型",
              "summary": "10月28日，评测机构 Artificial Analysis 重构并发布 Intelligence Index v5 基准，60% 评测权重采用私有测试集以减少跑分注水。新增的 FrontierCode 2.0 包含真实开源代码库中的 132 项任务，DeepSeek V4.1 Flash 在该单项得分 28%，为已发布开源模型最高成绩。综合评分中 Claude Opus 5.5 为 58 分居首。",
              "link": "https://news.qq.com/rain/a/20261029A00QWX00",
              "tags": [
                "大模型",
                "评测"
              ],
              "source": "腾讯新闻",
              "time": "10月28日"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯 WorkBuddy 上线手机远程控制电脑功能",
              "summary": "10月28日，腾讯 WorkBuddy 正式上线「远程控制」功能，由腾讯 Edge One 团队提供技术支持。用户在手机上打开 App 一键连上电脑，即可实时查看 Agent 的桌面操作，并切换全屏直接用手机点击、拖拽或滚动电脑界面，处理账号登录、连接器授权等中断任务。腾讯称远程画面与操作走加密通道，不记录用户输入，且不消耗 Token。",
              "link": "https://news.qq.com/rain/a/20261028A06W4900",
              "tags": [
                "Agent",
                "远程控制"
              ],
              "source": "腾讯新闻",
              "time": "10月28日"
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果发布首款触控屏 MacBook Pro",
                  "summary": "当地时间10月28日，苹果发布全新 MacBook Pro，首次为 Mac 引入屏幕触控和灵动岛，采用双层串联 OLED 技术的 PROLED XDR 显示屏。新机提供 14 英寸和 16 英寸版本，搭载 M5 Pro 或 M5 Max 芯片，起售价 22999 元。触控传感器内嵌于显示面板，用户可直接触摸屏幕滚动、缩放、拖放，并操作 3D 模型。顶配 16.3 寸机型标价达 11.26 万元。",
                  "link": "https://news.qq.com/rain/a/20261029A05CIA00",
                  "tags": [
                    "硬件",
                    "芯片"
                  ],
                  "source": "腾讯新闻",
                  "time": "当地时间10月28日"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软 Azure 营收增长 48%，Windows 设备业务下滑",
                  "summary": "当地时间10月28日，微软公布 2027 财年第一季度业绩，营收 922.79 亿美元，同比增长 19%；Microsoft Cloud 营收 639 亿美元，同比增长 30%；Azure 营收 331.65 亿美元，增长 48%。新设「Agents and Infra」分部营收 767.95 亿美元，同比增长 25%。Windows OEM 与设备收入下降 22%，云与设备业务走势分化。",
                  "link": "https://news.qq.com/rain/a/20261029A02WG900",
                  "tags": [
                    "财报",
                    "云计算"
                  ],
                  "source": "腾讯新闻",
                  "time": "当地时间10月28日"
                }
              ]
            },
            {
              "title": "SK海力士",
              "news": [
                {
                  "title": "SK 海力士单季营收首破 100 万亿韩元",
                  "summary": "10月28日，SK 海力士公布第三季度业绩，营收达 104.6155 万亿韩元，营业利润 83.3338 万亿韩元，两项均创季度新高。AI 服务器内存是增长重要来源，服务器 DDR5 销售显著增加，HBM4 开始扩大出货。公司已与包括大型云服务商在内的 14 家主要客户签署长期协议，锁定量超过 2027 年和 2028 年总产能的 50%，并判断存储市场供不应求可能持续到 2030 年。",
                  "link": "https://news.qq.com/rain/a/20261028A099EV00",
                  "tags": [
                    "财报",
                    "存储芯片"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月28日"
                }
              ]
            },
            {
              "title": "摩尔线程",
              "news": [
                {
                  "title": "摩尔线程前三季度营收 32.89 亿元，同比增 319%",
                  "summary": "10月28日，摩尔线程披露三季报，第三季度营收 15.52 亿元，同比增长 1773.92%；归母净利润 4926.04 万元，单季实现扭亏为盈。前三季度累计营收 32.89 亿元，同比增长 319.15%；扣非归母净利润仍亏损 1.31 亿元。公司将收入增长归因于 AI 产业算力需求，以及 MTT S5000 等智算产品在云服务商、AI 企业和智算中心的落地。",
                  "link": "https://news.qq.com/rain/a/20261028A0DYOJ00",
                  "tags": [
                    "财报",
                    "GPU"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月28日"
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
                  "title": "宇树科技上市首份财报：前三季净利增 270%",
                  "summary": "10月28日，宇树科技发布上市后首份三季报，前三季度营收 18.17 亿元，同比增长 55.71%；归母净利润 3.87 亿元，同比增长 270.54%。前三季度研发投入 2.63 亿元，同比增长 191.48%，占营收 14.47%，主要来自具身大模型研发与算力投入大幅增长，以及研发团队扩充。单看第三季度，归母净利润 1.13 亿元，同比下降 17.37%。",
                  "link": "https://news.qq.com/rain/a/20261028A0CTT100",
                  "tags": [
                    "财报",
                    "人形机器人"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月28日"
                }
              ]
            },
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉拟让 Optimus 为 Robotaxi 插拔充电枪",
                  "summary": "当地时间10月28日，特斯拉车辆工程副总裁拉尔斯·莫拉维和 Cybercab 项目负责人埃里克·厄利透露，特斯拉计划利用 Optimus 人形机器人为 Robotaxi 插拔充电枪，同时继续研发自动化程度更高的无线充电系统。目前特斯拉仍依靠工作人员为无人驾驶 Robotaxi 手动充电，Optimus 在计划中更多扮演过渡方案，无线充电技术可能无法在明年落地。",
                  "link": "https://news.qq.com/rain/a/20261028A0662200",
                  "tags": [
                    "人形机器人",
                    "Robotaxi"
                  ],
                  "source": "腾讯新闻",
                  "time": "当地时间10月28日"
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
              "title": "特朗普（美国总统）",
              "news": [
                {
                  "title": "特朗普称将「正式禁用」AI 一词，改称超级智能",
                  "summary": "当地时间10月27日，美国总统特朗普在社交媒体「真实社交」发文，表示将很快在「所有相关文件」及其他场合「正式禁止」使用「人工智能（AI）」一词，理由是这一表述「不准确」，但未说明禁令将如何落实。特朗普此前于 9 月 29 日签署行政令，将「人工智能」改称为「超级智能」，并于 10 月 4 日宣布组建「超级智能工作组」。",
                  "link": "https://news.qq.com/rain/a/20261028A05MI900",
                  "tags": [
                    "AI政策",
                    "监管"
                  ],
                  "source": "腾讯新闻",
                  "time": "当地时间10月27日"
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
          "date": "2026-10-26",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "33.6T tokens",
              "change": "↑801%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "18T tokens",
              "change": "↓45%"
            },
            {
              "model": "MiniMax M3.1 Flash (free) (minimax)",
              "score": "13.7T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "13.2T tokens",
              "change": "↑8%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "8.97T tokens",
              "change": "↑19%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "8.35T tokens",
              "change": "↑35%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "8.27T tokens",
              "change": "↑34%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "6.07T tokens",
              "change": "↓39%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.85T tokens",
              "change": "↑18%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "5.05T tokens",
              "change": "↓3%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "3.99T tokens",
              "change": "↓15%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "3.63T tokens",
              "change": "↓68%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.05T tokens",
              "change": "↓2%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.98T tokens",
              "change": "↓2%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.81T tokens",
              "change": "↑45%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "2.81T tokens",
              "change": "↓7%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.77T tokens",
              "change": "↓16%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.68T tokens",
              "change": "↑29%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.46T tokens",
              "change": "—"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.99T tokens",
              "change": "↓10%"
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

    // 自动填充（元素已删除则跳过）
    if (endpoint && model && (!endpoint.value || !model.value)) {
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

    // GitHub 同步配置初始化
    var ghConfig = getGithubConfig();
    var ghTokenEl = document.getElementById('github-token');
    var ghOwnerEl = document.getElementById('github-owner');
    var ghRepoEl = document.getElementById('github-repo');
    var ghStatus = document.getElementById('github-status');
    if (ghTokenEl) {
        if (ghConfig.token) {
            ghTokenEl.placeholder = '已配置（不显示已保存的 Token）';
            ghTokenEl.style.borderColor = '#10A37F';
            if (ghStatus) { ghStatus.textContent = '✅ 已配置，保存数据时将自动同步到云端'; ghStatus.style.color = '#10A37F'; }
        } else {
            ghTokenEl.placeholder = '请输入 github_pat_...';
            ghTokenEl.style.borderColor = '#CF0A2C';
            if (ghStatus) { ghStatus.textContent = '⚠️ 未配置，请粘贴 Token 后点击「保存 Token」'; ghStatus.style.color = '#CF0A2C'; }
        }
    }
    if (ghOwnerEl) ghOwnerEl.value = ghConfig.owner;
    if (ghRepoEl) ghRepoEl.value = ghConfig.repo;

    var clearCacheBtn = document.getElementById('clear-cache-btn');
    if (clearCacheBtn) clearCacheBtn.addEventListener('click', function() {
        localStorage.removeItem('ai-news-data');
        localStorage.removeItem('ai-news-last-update');
        showToast('本地缓存已清除，即将刷新加载最新云端数据');
        setTimeout(function() { location.reload(); }, 500);
    });

    var ghSaveBtn = document.getElementById('github-save-btn');
    if (ghSaveBtn) ghSaveBtn.addEventListener('click', saveGithubConfig);

    var ghTestBtn = document.getElementById('github-test-btn');
    if (ghTestBtn) ghTestBtn.addEventListener('click', async function() {
        var statusEl = document.getElementById('github-status');
        var config = getGithubConfig();
        if (!config.token) {
            if (statusEl) { statusEl.textContent = '请先输入 Token'; statusEl.style.color = '#CF0A2C'; }
            return;
        }
        if (statusEl) { statusEl.textContent = '测试中...'; statusEl.style.color = ''; }
        try {
            var resp = await fetch('https://api.github.com/repos/' + config.owner + '/' + config.repo, {
                headers: { 'Authorization': 'Bearer ' + config.token, 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }
            });
            if (resp.ok) {
                if (statusEl) { statusEl.textContent = '连接成功 ✅'; statusEl.style.color = '#10A37F'; }
            } else {
                var e = await resp.json();
                if (statusEl) { statusEl.textContent = '连接失败: ' + e.message; statusEl.style.color = '#CF0A2C'; }
            }
        } catch(e) {
            if (statusEl) { statusEl.textContent = '网络错误: ' + e.message; statusEl.style.color = '#CF0A2C'; }
        }
    });
});

// ==================== GitHub 同步 ====================
const GITHUB_TOKEN_KEY = 'ai-news-github-token';
const GITHUB_OWNER_KEY = 'ai-news-github-owner';
const GITHUB_REPO_KEY = 'ai-news-github-repo';

// UTF-8 编解码：GitHub API 的 base64 content 是 UTF-8 字节，不能直接用 atob/btoa
function utf8ToBase64(str) {
    var bytes = new TextEncoder().encode(str);
    var binary = '';
    for (var i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
}

function base64ToUtf8(b64) {
    var binary = atob(b64);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder('utf-8').decode(bytes);
}

function getGithubConfig() {
    return {
        token: localStorage.getItem(GITHUB_TOKEN_KEY) || '',
        owner: localStorage.getItem(GITHUB_OWNER_KEY) || 'Pepper0210879',
        repo: localStorage.getItem(GITHUB_REPO_KEY) || 'AI-'
    };
}

function saveGithubConfig() {
    var tokenInput = document.getElementById('github-token');
    var ownerInput = document.getElementById('github-owner');
    var repoInput = document.getElementById('github-repo');
    var token = tokenInput ? tokenInput.value.trim() : '';
    if (token) localStorage.setItem(GITHUB_TOKEN_KEY, token);
    if (ownerInput) localStorage.setItem(GITHUB_OWNER_KEY, ownerInput.value.trim());
    if (repoInput) localStorage.setItem(GITHUB_REPO_KEY, repoInput.value.trim());
    var status = document.getElementById('github-status');
    if (tokenInput) { tokenInput.style.borderColor = '#10A37F'; tokenInput.placeholder = '已配置（不显示已保存的 Token）'; }
    if (status) { status.textContent = '✅ Token 已保存，同步已就绪'; status.style.color = '#10A37F'; }
}

function toggleGithubToken() {
    var input = document.getElementById('github-token');
    if (input) input.type = input.type === 'password' ? 'text' : 'password';
}

async function syncToGitHub(changes) {
    var config = getGithubConfig();
    if (!config.token) { console.log('[GitHub] 未配置 Token，跳过同步'); return false; }

    var status = document.getElementById('github-status');
    if (status) { status.textContent = '同步中...'; status.style.color = ''; }

    try {
        // 将 data.json 转为 data.js 格式
        var dataJsContent = 'window.__RAW_DATA = ' + JSON.stringify(editingData, null, 2) + ';';
        var contentBase64 = utf8ToBase64(dataJsContent);

        var apiUrl = 'https://api.github.com/repos/' + config.owner + '/' + config.repo + '/contents/data.js';
        var headers = {
            'Authorization': 'Bearer ' + config.token,
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28'
        };

        // 1. 获取当前 data.js 的 SHA
        var getResp = await fetch(apiUrl, { headers: headers });
        var sha = null;
        if (getResp.ok) {
            var fileInfo = await getResp.json();
            sha = fileInfo.sha;
        }

        // 2. 构建 commit message（含操作人和变更摘要）
        var op = window._operator || {};
        var opName = op.name || '未知';
        var changeSummary = (changes && changes.length > 0) ? changes.slice(0, 5).join('; ') : '无实质性变更';
        if (changes && changes.length > 5) changeSummary += ' 等' + changes.length + '处';
        var commitMsg = 'admin: ' + opName + ' 编辑 (' + editingData.date + ')\n\n' + changeSummary;

        var body = {
            message: commitMsg,
            content: contentBase64,
            branch: 'main'
        };
        if (sha) body.sha = sha;

        var putResp = await fetch(apiUrl, {
            method: 'PUT',
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
            body: JSON.stringify(body)
        });

        if (!putResp.ok) {
            var err = await putResp.json();
            throw new Error(err.message || '未知错误');
        }

        // 3. 同步审计日志到 audit-log.json
        var auditLog = JSON.parse(localStorage.getItem('ai-news-audit-log') || '[]');
        try {
            var auditUrl = 'https://api.github.com/repos/' + config.owner + '/' + config.repo + '/contents/audit-log.json';
            var auditGetResp = await fetch(auditUrl, { headers: headers });
            if (auditGetResp.ok) {
                var auditFileInfo = await auditGetResp.json();
                var remoteAudit = JSON.parse(base64ToUtf8(auditFileInfo.content));
                var remoteSha = auditFileInfo.sha;
                var existingTimes = new Set(remoteAudit.map(function(e) { return e.time; }));
                auditLog.forEach(function(e) {
                    if (!existingTimes.has(e.time)) remoteAudit.unshift(e);
                });
                auditLog = remoteAudit.slice(0, 100);
                var auditContent = utf8ToBase64(JSON.stringify(auditLog, null, 2));
                await fetch(auditUrl, {
                    method: 'PUT',
                    headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                    body: JSON.stringify({ message: 'audit: ' + opName + ' 操作记录', content: auditContent, branch: 'main', sha: remoteSha })
                });
            } else {
                var auditContent = utf8ToBase64(JSON.stringify(auditLog, null, 2));
                await fetch(auditUrl, {
                    method: 'PUT',
                    headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                    body: JSON.stringify({ message: 'audit: 初始化审计日志', content: auditContent, branch: 'main' })
                });
            }
            localStorage.setItem('ai-news-audit-log', JSON.stringify(auditLog));
        } catch (auditErr) {
            console.warn('[GitHub] 审计日志同步失败（数据已同步）:', auditErr.message);
        }

        if (status) { status.textContent = '已同步到云端 ✅（1-2 分钟后生效）'; status.style.color = '#10A37F'; }
        console.log('[GitHub] 同步成功（数据 + 审计日志）');
        return true;
    } catch (e) {
        console.error('[GitHub] 同步失败:', e);
        if (status) { status.textContent = '同步失败 ⚠️ ' + e.message; status.style.color = '#CF0A2C'; }
        return false;
    }
}

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
