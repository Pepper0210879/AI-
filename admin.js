const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-31",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 重构模型规范，「忠于人类意图」列为首项准则",
              "summary": "当地时间10月30日，据路透社消息，OpenAI 发布更新后的《模型规范》（Model Spec），将「忠于人类意图」放在模型行为准则的核心位置，重构大模型安全对齐框架，回应高阶 AI 智能体带来的新安全挑战。新版规范确立五项核心原则：忠于人类意图、降低伤害、诚实透明、保障人类自主选择权、审慎尽责，要求 AI 理解用户真实诉求而非机械照抄指令。OpenAI 坦言现有 GPT 系列模型尚不能完全满足新规范，正在研究新训练方法推动模型内化这套准则。",
              "link": "https://news.qq.com/rain/a/20261030A0B6HN00",
              "tags": [
                "大模型",
                "安全对齐"
              ],
              "source": "路透社",
              "time": "当地时间10月30日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Claude 移动应用升级，iPhone 版支持 CarPlay 语音交互",
              "summary": "当地时间10月29日，Anthropic 旗下 @claudeai 官方账号在 X 平台宣布升级 Claude 移动应用，覆盖 iPhone、iPad、Android、Chromebook 以及网页与桌面端。iPhone 版 Claude 语音模式现已支持 Apple CarPlay，用户在驾驶途中无需双手离开方向盘即可向 Claude 提问。Anthropic 同时预告 iPhone 与 iPad 端将支持下拉搜索，在 iPad 与 iPhone Duo 上生成内容改为并排展示。",
              "link": "https://news.qq.com/rain/a/20261030A09DV300",
              "tags": [
                "AI应用",
                "语音交互"
              ],
              "source": "驱动中国",
              "time": "当地时间10月29日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌将关闭 AI 编程智能体 Jules，经验融入 Antigravity",
              "summary": "当地时间10月30日，谷歌宣布将逐步关闭其 AI 编程智能体 Jules，把从该工具中获得的经验引入 AI 编程平台 Antigravity。Jules 于 2024 年 12 月推出，定位为能完成「你不想亲自做」的编程任务的工具，上线不到两年即停止服务。谷歌在官方声明中表示，Jules 作为了解异步编程智能体的实验，其经验已直接影响谷歌多个产品，未来将把重点转向 Antigravity 统一体验。",
              "link": "https://news.qq.com/rain/a/20261030A06O9700",
              "tags": [
                "AI编程",
                "智能体"
              ],
              "source": "IT时代网",
              "time": "当地时间10月30日"
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
          "news": []
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "火山引擎重心转向商业化，MaaS 上半年收入 48 亿元",
              "summary": "10月30日，据《晚点 LatePost》报道，字节跳动旗下火山引擎的 MaaS（模型即服务）业务收入达到 48 亿元，毛利率超过 55%，是字节跳动当前收入规模最大的 AI 业务。火山引擎既提供 Seed、Seedance 等自研模型，也引入 DeepSeek、智谱等第三方模型。知情人士称，火山引擎从年中开始将商业化定为最重要业务指标，并上调原定 150 亿元的年度收入目标，此前业务更重视 Token 调用量。",
              "link": "https://news.qq.com/rain/a/20261030A0DVY400",
              "tags": [
                "MaaS",
                "商业化"
              ],
              "source": "晚点LatePost",
              "time": "10月30日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek 完成 1055 亿元第二轮融资，估值达 6155 亿元",
              "summary": "据 The Information 10月30日报道，DeepSeek 已完成约 1055 亿元人民币（约 158 亿美元）的第二轮融资，吸引近 30 家投资方，投后估值达 6155 亿元人民币。腾讯在两轮融资中各出资 100 亿元、累计 200 亿元，宁德时代本轮出资 100 亿元；本轮新增长鑫存储及董事长朱一明、中芯国际，vivo、美团、美的、立讯精密、吉利、携程、小红书等也参与其中，单家出资 10 亿至 30 亿元。截至报道时 DeepSeek 尚未发布官方公告。",
              "link": "https://news.qq.com/rain/a/20261031A07LXI00",
              "tags": [
                "融资",
                "估值"
              ],
              "source": "钱途沿习社",
              "time": "10月30日"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯 Marvis 上线 Coding 管家，手机遥控电脑 AI 编程",
              "summary": "10月29日，腾讯旗下 AI 管家 Marvis 正式上线「Coding 管家」，在手机遥控电脑能力上增加调用其他桌面 AI 工具编程和做任务的能力，首批支持 CodeBuddy IDE（编程模式）和 Kimi Code Desktop 两款 AI 工具。用户离开电脑后，可在手机上查看项目和聊天记录、跟进任务进度，继续向电脑端 AI 工具发送信息或发起新任务。Marvis 定位为「24 小时 AI 管家」，该功能是其向 AI 编程场景的延伸。",
              "link": "https://news.qq.com/rain/a/20261029A0CH4A00",
              "tags": [
                "AI编程",
                "Agent"
              ],
              "source": "北京商报",
              "time": "10月29日"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米开源 8 亿参数文档理解模型 Xiaomi-OCR-0",
              "summary": "10月30日，小米发布并开源轻量级文档理解模型 Xiaomi-OCR-0，仅 0.8B 参数，将文档解析、关键信息抽取与 OCR 视觉问答三类能力合为一体。模型在真实拍摄干扰场景的 Real5-OmniDocBench 上取得 95.24 分、位列对比模型第一，在 OmniDocBench v1.6 上取得 96.83 分，以 0.8B 参数夺得总榜第二。模型权重、推理代码、浏览器 Demo 及 MCP 服务已开放，相关技术正用于超级小爱的取餐码识别、账单记账等场景。",
              "link": "https://news.qq.com/rain/a/20261031A061R100",
              "tags": [
                "OCR",
                "开源"
              ],
              "source": "凤凰网",
              "time": "10月30日"
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
                  "title": "苹果官宣 Apple 智能入华，接入阿里千问",
                  "summary": "10月31日，苹果发布公告宣布，将面向中国 iPhone 18 Pro 等机型用户，于 11 月 4 日开放测试，并于 12 月随 iOS 27.3 更新在国内上线首批 Apple 智能（Apple Intelligence）核心功能。苹果明确在 Siri、写作工具及视觉智能三类体验中使用阿里巴巴的千问，覆盖文本与图像理解；用户登录千问账户或使用「通过 Apple 登录」后即可在 Apple 智能中调用千问。首批功能包括实时翻译、写作工具改写校对、照片消除等。",
                  "link": "https://news.qq.com/rain/a/20261031A02UST00",
                  "tags": [
                    "AI应用",
                    "端侧AI"
                  ],
                  "source": "IT之家",
                  "time": "10月31日"
                }
              ]
            },
            {
              "title": "英特尔",
              "news": [
                {
                  "title": "英特尔 Q3 财报不及预期，股价盘中暴跌超 30%",
                  "summary": "当地时间10月30日，英特尔股价开盘后大幅下挫，盘中跌幅一度超过 30%，公司市值蒸发超 1370 亿美元，超过 2024 年最大单日跌幅（约 26%），逼近 1974 年的历史纪录。暴跌主要源于英特尔发布的第四季度业绩指引低于市场预期，同时警告个人电脑市场疲软、内存价格上涨等问题可能持续至 2027 年上半年。英特尔三季度营收同比增长 21% 至 165.1 亿美元，但指引令投资者对其复苏前景产生担忧。",
                  "link": "https://news.qq.com/rain/a/20261031A040KC00",
                  "tags": [
                    "财报",
                    "股价"
                  ],
                  "source": "美港探案",
                  "time": "当地时间10月30日"
                }
              ]
            },
            {
              "title": "长鑫存储",
              "news": [
                {
                  "title": "长鑫科技三季度营收 1187 亿元，第六代 DRAM 完成样片验证",
                  "summary": "10月30日，长鑫科技发布 2026 年三季报，第三季度（7-9月）实现营业收入约 1187.14 亿元，环比增长约 19.30%；净利润约 889.83 亿元，环比增长约 19.38%。三季报同时披露，基于第六代技术平台开发的 DRAM 产品已完成工程样片验证，下一步在重点客户完成客户验证后即可进入批量生产与出货。前三季度研发投入达 110.71 亿元，同比增长 73.03%。",
                  "link": "https://news.qq.com/rain/a/20261031A078S800",
                  "tags": [
                    "存储芯片",
                    "财报"
                  ],
                  "source": "手机中国",
                  "time": "10月30日"
                }
              ]
            },
            {
              "title": "Reddit",
              "news": [
                {
                  "title": "Reddit 将逐步转向登录浏览，防范 AI 爬虫",
                  "summary": "10月30日消息，Reddit 首席执行官史蒂夫·赫夫曼宣布，平台将逐步转向以登录浏览为主的模式，用户对这项调整普遍感到不满。这个 2005 年上线的社区平台长期支持游客无需登录浏览，如今将改掉这一规则。赫夫曼表示，转向登录优先可优化个性化推荐、提升互动、方便投放广告，最重要的是阻止 AI 模型爬取站内内容。据三季度股东信，Reddit 上一季度 59% 的活跃用户以游客身份访问，此次改动将影响大部分日活用户。",
                  "link": "https://news.qq.com/rain/a/20261030A06ABN00",
                  "tags": [
                    "AI爬虫",
                    "内容平台"
                  ],
                  "source": "IT之家",
                  "time": "10月30日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "地平线",
              "news": [
                {
                  "title": "地平线余凯吐槽智驾芯片「算力虚标」：560 能标到 1960",
                  "summary": "10月31日消息，地平线创始人余凯在微博回应网友时，用自家产品开了个玩笑，把智驾芯片行业的算力宣传问题摆上台面。他提到征程 6P 按「NV 算力」口径是 560 TOPS，若换成「等效算力」口径就可标成 1960 TOPS。余凯用「PPT 算力狂飙」形容当下现象，并将「等效算力」讽刺为「吹牛算力」，质疑一些算力数字已被放大到稠密算力的六至七倍，超出行业常用标注框架。",
                  "link": "https://news.qq.com/rain/a/20261031A03DTD00",
                  "tags": [
                    "智驾芯片",
                    "行业观点"
                  ],
                  "source": "经济观察报",
                  "time": "10月31日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "清华大学",
              "news": [
                {
                  "title": "清华联合无问芯穹、智元提出 CEL 范式，96 台机器人验证",
                  "summary": "10月30日消息，清华大学联合无问芯穹、智元提出群体经验学习（Collective Experience Learning，CEL）范式，并在 96 台真实机器人组成的集群中完成规模化验证。CEL 让机器人不仅依靠人类示范学习，还能借鉴群体中其他机器人的成功经验，通过共享和积累经验在持续实践中共同提升能力，为机器人的自主进化和规模化应用提供新的技术路径。",
                  "link": "https://news.qq.com/rain/a/20261030A0898Z00",
                  "tags": [
                    "具身智能",
                    "群体学习"
                  ],
                  "source": "观点网",
                  "time": "10月30日消息"
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
              "title": "Stack Overflow",
              "news": [
                {
                  "title": "Stack Overflow 月度提问跌破千条，AI 冲击编程问答社区",
                  "summary": "10月30日消息，据 Hacker News 报道，全球规模最大的编程问答网站 Stack Overflow 在 AI 工具面世后访问量持续下跌，现在每月新增提问不足 1000 条，2026 年 9 月仅有 969 条新增提问可查询。作为对比，2020 年 10 月可查提问约 14.2 万条，2014 年 3 月曾超 20 万条。开发者通过 Stack Exchange 公开 API 核对了这一数据，反映 AI 编程助手对传统问答社区的持续冲击。",
                  "link": "https://news.qq.com/rain/a/20261030A08MTD00",
                  "tags": [
                    "AI编程",
                    "行业趋势"
                  ],
                  "source": "IT之家",
                  "time": "10月30日消息"
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
