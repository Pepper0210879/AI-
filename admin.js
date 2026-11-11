const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-11-10",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 突发大规模封号，200 美元 Pro 用户集体失联",
              "summary": "11月8日，OpenAI 突发大规模账号封禁事件，大量 ChatGPT 账号无预警停用，其中包括每月订阅 200 美元的 Pro 用户。OpenAI Support 回应称无法在社区处理申诉，用户需通过邮件链接申诉，但未解释封号具体原因。业内推测与其限制单设备账号上限、防止薅羊毛有关。",
              "link": "https://www.thepaper.cn/newsDetail_forward_34436792",
              "tags": [
                "账号封禁",
                "账号治理"
              ],
              "source": "澎湃新闻",
              "time": "11月8日"
            },
            {
              "title": "ChatGPT 占全球 AI 聊天机器人流量超 81%，断层领跑",
              "summary": "研究与增长营销公司 Graphite 的研究显示，目前 ChatGPT 占全球主要 AI 聊天机器人工具总流量的比例已超过 81%，没有任何一家竞争对手的市场份额达到 10%。谷歌 Gemini 和 Anthropic Claude 虽被视为越来越强的竞争威胁，但 ChatGPT 的领先优势仍在扩大。",
              "link": "https://news.qq.com/rain/a/20261109A0E5N500",
              "tags": [
                "市场份额",
                "聊天机器人"
              ],
              "source": "腾讯新闻",
              "time": "11月9日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 发布 Claude Fable 5.2 与 Mythos 5.2，API 降价 20%",
              "summary": "当地时间11月9日，Anthropic 发布 Claude Fable 5.2 和 Claude Mythos 5.2，两款模型共用同一底层模型。Fable 5.2 面向普通用户并内置网络安全与生物安全防护，Mythos 5.2 面向通过审核的网络安全和生命科学机构。相比 5.1 版，API 价格下调 20%，生成速度最高提升 30%。",
              "link": "https://original.ifeng.com/c/8xviqDaxyxj",
              "tags": [
                "大模型",
                "API降价"
              ],
              "source": "凤凰网",
              "time": "当地时间11月9日"
            },
            {
              "title": "Anthropic 上市估值预期骤降 40%，至 1.2 万亿至 1.3 万亿美元",
              "summary": "据彭博社报道，部分潜在投资者准备给予 Anthropic 1.2 万亿至 1.3 万亿美元的 IPO 估值，较此前预期的 2 万亿美元下降至多 40%。英国《金融时报》最新报道则预计其估值可能接近 1.5 万亿美元。美股科技股遭抛售、AI 投资回报受审视是其估值承压的背景。",
              "link": "https://www.cls.cn/detail/2527867",
              "tags": [
                "IPO",
                "估值下调"
              ],
              "source": "财联社",
              "time": "11月9日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌发布 TPU 8tx 与 TPU 8i Max，扩充第八代 TPU 阵容",
              "summary": "11月9日，谷歌公布 TPU 8i Max 和 TPU 8tx 两套第八代 TPU 系统。TPU 8i Max 把两枚 TPU 8i 芯片封装在一起，算力、片上 SRAM 和高带宽内存带宽均翻倍，面向长上下文任务；TPU 8tx 搭配定制 AMD 主机处理器，支持硬件级机密计算与保密推理。",
              "link": "https://www.ithome.com/1/024/525.htm",
              "tags": [
                "AI芯片",
                "TPU"
              ],
              "source": "IT之家",
              "time": "11月9日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX 拟在得州建 240 亿美元 AI 超算设施，自建天然气发电厂",
              "summary": "SpaceX 计划在得克萨斯州建设一座配备独立天然气发电厂的 AI 超级计算设施，项目总投资达 240 亿美元，约为其比特币持仓价值的 17 倍。此前 SpaceX 已于今年 6 月完成史上规模最大的 IPO，并持有比特币。",
              "link": "https://original.ifeng.com/c/8xvhNgGBc0R",
              "tags": [
                "AI基础设施",
                "超算"
              ],
              "source": "凤凰网",
              "time": "11月10日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "外媒：黄仁勋承认婚外情或遭免职，英伟达尚未指定接班人",
              "summary": "当地时间11月8日，英伟达创始人兼CEO黄仁勋向员工发道歉信承认婚外情，董事会宣布由独立董事和外部律师启动独立调查。彭博社等外媒报道称其或被免去CEO职务，公司尚未指定接班人。11月9日英伟达股价开盘一度跌近9%、收跌4.27%，单日市值蒸发约1921亿美元。",
              "link": "https://feng.ifeng.com/c/8xvaRXi6DA1",
              "tags": [
                "公司治理",
                "股价波动"
              ],
              "source": "凤凰网",
              "time": "当地时间11月8日"
            },
            {
              "title": "英伟达发布 GR00T 2 机器人模型，可从人类示范中学习",
              "summary": "11月9日，英伟达在机器人学习大会 CoRL 上公布 GR00T 2、训练框架 Isaac Lab 3.0 及两套工业操作开放评测。新模型基于 NVIDIA Cosmos，能从人类示范中学习精细操作并跨本体迁移技能，五次示范后平均成功率 95%。",
              "link": "https://news.qq.com/rain/a/20261109A0ELJM00",
              "tags": [
                "具身智能",
                "机器人模型"
              ],
              "source": "腾讯新闻",
              "time": "11月9日"
            },
            {
              "title": "英伟达宣布投资多家韩国 AI 创企，加码互连与物理 AI",
              "summary": "11月9日，英伟达发布声明称，公司高管与韩国科学技术信息通信部副部长共同会见超 20 家韩国初创企业，涵盖基础模型、物理 AI、AI 基础设施及 AI 半导体等领域。英伟达宣布投资韩国 AI 互连技术创企 Point2，并计划进一步投资 Motif Technologies、RLWRLD 和 Upstage。",
              "link": "https://www.tmtpost.com/nictation/8198440.html",
              "tags": [
                "投资",
                "AI创企"
              ],
              "source": "钛媒体",
              "time": "11月9日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 推出轻量级模型 Muse Ember，跑分媲美 Claude Haiku",
              "summary": "Meta 发布多模态小模型 Muse Ember，面向编程小步骤、工具调用、文档摘要和字段提取等重复任务。它支持 100 万 token 上下文，提示不超过 20 万 token 时输入 0.10 美元/百万 token，成本约为竞品三分之一，已在 Muse Code 和 Meta Model API 上线。",
              "link": "https://www.ithome.com/1/024/604.htm",
              "tags": [
                "小模型",
                "多模态"
              ],
              "source": "IT之家",
              "time": "11月10日消息"
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
              "title": "千问办公 2.0 发布，推出首个支持多人与 Agent 协作的 Team Agent",
              "summary": "11月9日，千问办公发布 2.0 版本，推出行业首个支持多人与 Agent 协作的「协作」功能，并上线「人机共创」「资料空间」「自动任务」「三端互联」等核心能力，让 Agent 从服务个人走向服务团队和组织，已在客户端全量上线。",
              "link": "https://www.qbitai.com/2026/11/508694.html",
              "tags": [
                "AI Agent",
                "办公协作"
              ],
              "source": "量子位",
              "time": "11月9日"
            },
            {
              "title": "阿里云 Token Plan 个人版额度上调 74% 至 78%",
              "summary": "11月9日，阿里云上调 Token Plan 个人版订阅额度，Lite、Essential、Standard 三档套餐月费不变，月度额度提升约 74% 至 78%，进一步降低个人开发者使用大模型的成本。",
              "link": "https://news.qq.com/rain/a/20261109A0A4DE00",
              "tags": [
                "API额度",
                "订阅优惠"
              ],
              "source": "腾讯新闻",
              "time": "11月9日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "字节跳动发布 Seedream 5.5 图像模型，可直接生成透明背景",
              "summary": "11月9日，字节跳动 Seed 团队发布图像模型 Seedream 5.5。新模型可直接生成带 Alpha 通道的图片，透明与半透明部分可保留，生成元素可直接用作独立设计素材。新版针对局部编辑专项训练，减少反复生成中的偏色，已在即梦、豆包、火山方舟上线。",
              "link": "https://seed.bytedance.com/zh/seedream5_5",
              "tags": [
                "图像生成",
                "模型发布"
              ],
              "source": "字节跳动",
              "time": "11月9日"
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
              "title": "WorkBuddy 就折扣调整致歉，将返还 50% 积分差额",
              "summary": "11月8日晚，腾讯旗下 AI 工具 WorkBuddy 就 DeepSeek-V4.1 Flash 折扣活动调整未及时公告致歉，并公布补偿方案：11月5日至8日使用过该模型的账号，积分消耗按原价 5 折结算，差额部分（总额的 50%）系统自动返还，预计 7 个工作日内到账。",
              "link": "https://news.qq.com/rain/a/20261109A058IP00",
              "tags": [
                "补偿方案",
                "折扣"
              ],
              "source": "腾讯新闻",
              "time": "11月8日"
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
                  "title": "苹果 iOS 27.3 代码曝光 Siri「个人记忆系统」",
                  "summary": "代码研究人员在 iOS 27.3 测试版发现，苹果正开发一套 Siri「个人记忆系统」，包含「记忆图谱」和「记忆原子」组件，可整理用户人际关系、常去地点、日常习惯、健康状况等，并借助设备端 AI 模型或私有云计算提取信息。",
                  "link": "https://cj.sina.com.cn/articles/view/1826017320/6cd6d02804001yzso",
                  "tags": [
                    "Siri",
                    "个人记忆"
                  ],
                  "source": "新浪财经",
                  "time": "11月9日消息"
                },
                {
                  "title": "Apple 智能备案新增 iPad 和笔记本，国行覆盖范围扩大",
                  "summary": "11月9日，网信上海发布公告，Apple 智能生成式人工智能服务新增苹果平板和笔记本电脑两类适用场景并完成备案，变更后适用范围包括苹果手机、平板和笔记本电脑。备案主体为苹果技术开发（上海）有限公司。",
                  "link": "https://original.ifeng.com/c/8xviqDaxz11",
                  "tags": [
                    "AI备案",
                    "生成式AI"
                  ],
                  "source": "凤凰网",
                  "time": "11月9日"
                }
              ]
            },
            {
              "title": "LG",
              "news": [
                {
                  "title": "LG 免费开放 K-EXAONE 2.5 模型 API，支持 512K 上下文",
                  "summary": "11月9日，LG AI 研究院在 EXAONE API Platform 开放 K-EXAONE 2.5，开发者、初创公司、企业及研究机构可申请 API 密钥免费调用。该模型面向代码编写、网页检索和工作流自动化，SWE-Bench Pro 得分 59.2。",
                  "link": "https://www.ithome.com/1/024/069.htm",
                  "tags": [
                    "开源模型",
                    "免费API"
                  ],
                  "source": "IT之家",
                  "time": "11月9日"
                }
              ]
            },
            {
              "title": "软银",
              "news": [
                {
                  "title": "美国 AI 数据中心反对声浪高涨，软银考虑转向其他国家",
                  "summary": "11月9日，据彭博社报道，面对美国 AI 数据中心需求放缓及民主党中期选举大胜、反对声浪高涨，软银公司 CEO 宫川润一考虑转向其他国家寻找增长机会，重新评估其美国 NeoCloud 业务前景。",
                  "link": "https://www.163.com/dy/article/LBAHBSJI0511B8LM.html",
                  "tags": [
                    "数据中心",
                    "AI出海"
                  ],
                  "source": "网易",
                  "time": "11月9日消息"
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果开源 HALO 人形机器人控制系统",
                  "summary": "苹果研究团队在 arXiv 披露人形机器人自主控制系统 HALO 并开源代码，通过大规模仿真环境训练实现语义层零样本迁移，实机测试成功率 91%。该成果被视为补齐触觉感知短板、推进具身智能的重要开源工作。",
                  "link": "https://www.airobotnews.com/posts/apple-halo-humanoid-autonomy/",
                  "tags": [
                    "具身智能",
                    "开源"
                  ],
                  "source": "人工智能机器人技术网",
                  "time": "11月9日消息"
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
              "title": "Sakana AI",
              "news": [
                {
                  "title": "Sakana AI 计划最早 2027 年秋季 IPO，已聘请高盛",
                  "summary": "据报道，日本 AI 公司 Sakana AI 准备进行首次公开募股，最早可能于 2027 年秋季在日本或美国上市，已聘请高盛担任 IPO 顾问，有望成为日本首家 GenAI 上市实验室。",
                  "link": "https://www.cls.cn/detail/2529049",
                  "tags": [
                    "IPO",
                    "日本AI"
                  ],
                  "source": "财联社",
                  "time": "11月9日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "瑞银CEO",
              "news": [
                {
                  "title": "瑞银 CEO：AI 股回调是市场修正过高预期",
                  "summary": "11月9日，瑞银首席执行官埃尔莫蒂在悉尼表示，过去数周 AI 股票的明显回调，反映出投资者此前对行业的预期过高。他仍看好 AI 带来的经济收益，但认为市场高估了这些收益兑现的速度，美国中期选举结果等可能拖慢行业进展。",
                  "link": "https://www.cls.cn/detail/2529033",
                  "tags": [
                    "行业观点",
                    "AI股"
                  ],
                  "source": "财联社",
                  "time": "11月9日"
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
