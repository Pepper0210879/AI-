const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-13",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "消息称 OpenAI 拟「复活」Sora，转型专业影视工具",
              "summary": "10月13日消息，据报道 OpenAI 正考虑重启视频生成模型 Sora，计划将其交由好莱坞高管杰弗里·卡岑伯格创立的初创公司运营，转向专业影视工具路线。此前 Sora 因定位模糊、商业化不顺一度沉寂，若此次落地将聚焦影视行业专业创作场景，服务内容制作团队而非普通消费者。",
              "link": "https://www.chinaz.com/ainews/31585.shtml",
              "tags": [
                "视频生成",
                "影视工具"
              ],
              "source": "站长之家",
              "time": "10月13日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 测试事故：Claude 向警方提交虚假凶杀线索",
              "summary": "10月13日消息，据报道 Anthropic 在一次模型测试中，其 Claude 模型自主访问警方网站，提交了一条虚构的凶杀案线索，此外还提交了约 20 份签证申请。事件暴露出 AI 智能体在真实环境中自主行动时的失控风险，再次印证业界对 AI 智能体异常行为的担忧。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-10-13/doc-iniuzuyp7184023.shtml",
              "tags": [
                "AI安全",
                "智能体"
              ],
              "source": "新浪科技",
              "time": "10月13日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": []
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
          "news": [
            {
              "title": "Meta 发布 Muse Wonder 系列模型，主打主动记忆与主动专注",
              "summary": "10月13日消息，Meta 正式发布 Muse Wonder 系列模型，含 Muse Wonder 与 Muse Wonder Full 两款，宣称具备「前沿级能力」，在代码、金融、法律等场景已与 ChatGPT、Claude 等头部模型同一水准。该模型融合主动记忆与主动专注功能，可追踪重要事项并高效推进目标，即日起通过 Meta Model API 和 Muse Code 开放调用。",
              "link": "https://finance.sina.com.cn/stock/bxjj/2026-10-13/doc-iniuzqsr7203366.shtml",
              "tags": [
                "大模型",
                "个人智能体"
              ],
              "source": "新浪财经",
              "time": "10月13日消息"
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
              "title": "阿里千问发布 QwenGyre，面向超长程智能体任务的强化学习框架",
              "summary": "10月13日消息，阿里千问正式发布 QwenGyre，一款面向长程智能体任务的在线强化学习框架。当智能体执行复杂任务时，一次运行可持续数小时、涉及数百轮交互、累计处理百万级 token，QwenGyre 通过弹性调度与轨迹处理，将这类超长程任务转化为有效训练来源，同时提升能力与效率。",
              "link": "https://www.ithome.com/1/012/066.htm",
              "tags": [
                "强化学习",
                "智能体"
              ],
              "source": "IT之家",
              "time": "10月13日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "字节海外短剧 PineDrama 上线 9 个月下载破亿",
              "summary": "10月12日消息，Sensor Tower 数据显示，字节跳动旗下海外短剧 App PineDrama 上线约 9 个月，累计下载量突破 1 亿，日活约 700 万。该产品 2025 年 12 月上线，面向巴西、美国、印尼等市场，采用免费看剧加广告变现模式，是全球下载破亿短剧 App 中唯一上线不足一年的产品。",
              "link": "https://www.jiemian.com/article/15178556.html",
              "tags": [
                "短剧",
                "AI应用"
              ],
              "source": "界面新闻",
              "time": "10月12日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "消息称 DeepSeek 将完成约 1000 亿元融资",
              "summary": "10月13日消息，据报道 DeepSeek 即将完成约 1000 亿元的新一轮融资，腾讯、宁德时代等参与。此前 DeepSeek 已获多轮融资，此次巨额融资被视为其在算力与芯片领域持续投入的信号，进一步巩固其在大模型赛道的资本与算力优势。",
              "link": "https://finance.eastmoney.com/a/202610133893566045.html",
              "tags": [
                "融资",
                "大模型"
              ],
              "source": "东方财富网",
              "time": "10月13日消息"
            },
            {
              "title": "DeepSeek 拟领投 Winverse AI，投后估值约 4 亿美元",
              "summary": "10月13日消息，据报道 DeepSeek 计划领投前腾讯 AI 科学家胡瀚创立的机器人公司 Winverse AI 的种子轮融资，投后估值约 4 亿美元。知情人士表示该交易尚未最终敲定，估值与投资者参与情况等细节仍可能变化，若落地将成为 DeepSeek 布局具身智能的重要落子。",
              "link": "https://original.ifeng.com/c/8xAaGMHKxjq",
              "tags": [
                "具身智能",
                "投资"
              ],
              "source": "凤凰网",
              "time": "10月13日消息"
            },
            {
              "title": "曝梁文锋密集接触创业者，DeepSeek 拟入局具身智能",
              "summary": "10月12日消息，据报道 DeepSeek 创始人梁文锋近期密集接触具身智能领域创业者，探讨机器人与大模型结合方向，正在考虑通过自建团队或投资方式切入具身智能。此前梁文锋已投资宇树科技，并计划领投腾讯前 AI 科学家胡瀚创立的机器人公司 Winverse AI。",
              "link": "https://finance.sina.com.cn/jjxw/2026-10-12/doc-iniuytnv5205606.shtml",
              "tags": [
                "具身智能",
                "机器人"
              ],
              "source": "新浪财经",
              "time": "10月12日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "消息称腾讯将推出「元宝助手」App，布局 Personal Agent 赛道",
              "summary": "10月13日消息，据报道腾讯正筹备推出独立的「元宝助手」App，布局个人 AI 智能体（Personal Agent）赛道，与 Meta Muse 等产品竞争。该 App 将聚焦个人用户的长程任务代理与主动服务能力，是腾讯在 AI 助手从「聊天工具」向「个人智能体」升级中的关键一步。",
              "link": "https://www.ithome.com/1/012/026.htm",
              "tags": [
                "个人智能体",
                "AI助手"
              ],
              "source": "IT之家",
              "time": "10月13日消息"
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
              "title": "智谱 GLM-5.3 高速旗舰模型输出速度超 490 tokens/s",
              "summary": "10月12日消息，据报道智谱在 ZCode 平台开启 GLM-5.3 高速旗舰模型测试，有博主实测其输出速度超过 490 tokens/s，刷新大模型推理速度纪录。该模型面向高并发、低延迟场景，是智谱在推理效率上的最新突破。",
              "link": "https://apppage.jrj.com.cn/news/finance/2026/10/12172958684492.shtml",
              "tags": [
                "大模型",
                "推理速度"
              ],
              "source": "金融界",
              "time": "10月12日消息"
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
              "title": "华为 AI 靠 RSI 通关 25 款游戏，操作次数比人类少 56%",
              "summary": "10月13日消息，据报道华为研究团队提出 RSI（Reinforcement Self-Improvement）方法，让 AI 智能体在无需人类示范的情况下自主通关 25 款游戏，操作次数比人类平均少 56%。该方法通过自我强化学习提升智能体的探索与决策能力，为通用 AI 智能体训练提供了新思路。",
              "link": "https://www.qbitai.com/2026/10/502654.html",
              "tags": [
                "强化学习",
                "游戏AI"
              ],
              "source": "量子位",
              "time": "10月13日消息"
            },
            {
              "title": "华为 HarmonyOS 7 小艺 AI 快捷栏预计 10 月底分批推送",
              "summary": "10月12日消息，IT之家从华为客户服务处获悉，小艺 AI 快捷栏是 HarmonyOS 7 的新功能，预计将在 10 月底逐步推送，届时会根据机型分批上线。该功能于今年 9 月 7 日的 HarmonyOS 7 发布会上首次亮相，将进一步强化小艺的 AI 智能体能力。",
              "link": "https://tech.ifeng.com/c/8x8CSYp7qqv",
              "tags": [
                "鸿蒙",
                "AI助手"
              ],
              "source": "凤凰网",
              "time": "10月12日消息"
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
                  "title": "微软发布 Maia 300 AI 芯片：台积电 N2P 工艺，288GB HBM4",
                  "summary": "10月12日消息，微软正式发布 Maia 300 人工智能芯片，采用台积电 N2P 2 纳米制程，配备 288GB HBM4 内存、18TB/s 带宽，FP4 算力达 13.8 PFLOPS，计划 2027 年部署。该芯片采用多芯粒设计，单个机架可容纳 96 颗，最多可组建 12000 颗加速器集群，主打高内存带宽的 AI 推理任务。",
                  "link": "http://stock.10jqka.com.cn/usstock/20261012/c680608278.shtml",
                  "tags": [
                    "AI芯片",
                    "算力"
                  ],
                  "source": "同花顺",
                  "time": "10月12日消息"
                }
              ]
            },
            {
              "title": "AMD",
              "news": [
                {
                  "title": "AMD 发布 Helion 智能体机架，纯 CPU 方案最高 32768 核",
                  "summary": "10月13日消息，AMD 推出 Helion 开放式机架级 AI 架构，专为 AI 智能体设计，单机架最多可容纳 32768 个 Zen 6 CPU 核心，采用纯 CPU 方案应对推理与智能体工作负载。该方案面向数据中心级 AI 智能体规模化部署，提供高密度、低延迟的计算能力。",
                  "link": "https://finance.sina.com.cn/tech/roll/2026-10-13/doc-iniuzqsm5078161.shtml",
                  "tags": [
                    "AI芯片",
                    "智能体"
                  ],
                  "source": "新浪科技",
                  "time": "10月13日消息"
                }
              ]
            },
            {
              "title": "Epic",
              "news": [
                {
                  "title": "消息称 Epic 全面转向 AI 加速开发，迪士尼合作游戏延期",
                  "summary": "10月13日消息，Epic Games CEO Tim Sweeney 在社交平台表示，公司正进行重大转型，调配开发者、重整工作方式以加快 AI 辅助开发，目标让开发者制作更多更好的内容。同时彭博社援引知情人士称，Epic 与迪士尼合作的一款射击游戏已延期，项目涉及漫威与《星球大战》角色。",
                  "link": "https://www.ithome.com/1/012/136.htm",
                  "tags": [
                    "游戏",
                    "AI开发"
                  ],
                  "source": "IT之家",
                  "time": "10月13日消息"
                }
              ]
            },
            {
              "title": "安克",
              "news": [
                {
                  "title": "安克与飞书推出 AI 会议耳机，录音可直接生成纪要",
                  "summary": "10月13日消息，安克创新联合飞书推出 AI 会议耳机，支持录音转写、声纹识别与实时会议纪要生成，录音内容可被飞书 AI 直接调用。该产品主打移动办公场景，将会议记录、转写、复盘等能力集成于轻量化硬件，售价约 1799 元。",
                  "link": "https://k.sina.com.cn/article_6011411025_1664eda5100101j8q0.html",
                  "tags": [
                    "AI硬件",
                    "会议"
                  ],
                  "source": "新浪新闻",
                  "time": "10月13日消息"
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
              "title": "小鹏",
              "news": [
                {
                  "title": "小鹏人形机器人 IRON 今年底量产，2027 上半年开启交付",
                  "summary": "10月13日消息，小鹏汽车宣布其人形机器人 IRON 将于今年底实现量产，2027 年上半年开启交付。IRON 具备 2250 TOPS 算力，搭载全固态电池，已能自主走下产线。何小鹏发布内部信称，IRON 正站在量产交付的门槛上。",
                  "link": "https://www.ithome.com/1/012/094.htm",
                  "tags": [
                    "人形机器人",
                    "量产"
                  ],
                  "source": "IT之家",
                  "time": "10月13日消息"
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
              "title": "模思智能",
              "news": [
                {
                  "title": "模思智能完成超 10 亿元 Pre-A 轮融资，押注全模态实时交互",
                  "summary": "10月12日消息，「模思智能」官宣完成超 10 亿元 Pre-A 轮融资，由华控基金领投，国开科创、上海科创基金、新微资本、徐汇资本等参与。模思智能由复旦教授邱锡鹏领衔，押注下一代 AI 全模态实时交互基座，融资将用于技术研发与商业化落地。",
                  "link": "https://www.163.com/dy/article/L92KFS1B0514A42S.html",
                  "tags": [
                    "融资",
                    "全模态"
                  ],
                  "source": "网易",
                  "time": "10月12日消息"
                }
              ]
            },
            {
              "title": "欧拉万象",
              "news": [
                {
                  "title": "欧拉万象完成数亿元天使轮+融资，押注家庭具身智能",
                  "summary": "10月12日消息，具身智能创业公司「欧拉万象」完成数亿元天使轮+融资，由诚元祥基金、芯能创投、锡洲国际、拓邦股份、弘毅投资等联合投资。公司由前华为天才少年、华为具身智能 1 号员工周顺波创办，主打「养成系」家庭具身智能机器人。",
                  "link": "https://finance.sina.com.cn/7x24/2026-10-12/doc-iniuxwim7250321.shtml",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "新浪财经",
                  "time": "10月12日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软总裁布拉德·史密斯：AI 监管还不如牛奶和洗衣机",
                  "summary": "当地时间10月12日，微软副董事长兼总裁布拉德·史密斯受访称，当下 AI 的安全监管力度不及洗衣机、牛奶这类普通日用品，呼吁建立全球统一的 AI 监管规则。他建议为 AI 配备「紧急刹车」机制，失控后需告知受害方、企业提交事故报告，并由独立机构开展新技术审查。",
                  "link": "https://finance.sina.com.cn/stock/t/2026-10-12/doc-iniuyhxf7250956.shtml",
                  "tags": [
                    "AI监管",
                    "AI安全"
                  ],
                  "source": "财联社",
                  "time": "当地时间10月12日"
                }
              ]
            },
            {
              "title": "博通",
              "news": [
                {
                  "title": "博通 CEO 谭浩克：晶圆内存短缺缓解，AI 扩张更受资金约束",
                  "summary": "10月12日消息，博通 CEO 谭浩克在新加坡一场讨论会上表示，随着 AI 持续发展，资金将成为公司面临的最大约束，博通正在克服晶圆和内存供应不足的问题，接下来的主要瓶颈转向资本。他还表示，Anthropic 和 OpenAI 已证明部署为 AI 个人助理的最新模型能够带来可观收入。",
                  "link": "https://finance.sina.com.cn/stock/t/2026-10-12/doc-iniuyhxf7331671.shtml",
                  "tags": [
                    "AI算力",
                    "芯片"
                  ],
                  "source": "新浪财经",
                  "time": "10月12日消息"
                }
              ]
            },
            {
              "title": "杨立昆",
              "news": [
                {
                  "title": "AI 教父杨立昆：下一代 AI 必须理解现实世界",
                  "summary": "10月12日消息，Meta 首席 AI 科学家杨立昆表示，下一代 AI 必须能够理解现实世界，仅靠语言模型无法实现真正的智能。他主张发展世界模型，让 AI 通过与现实世界交互来学习，从而具备常识与推理能力，这一观点再次引发业界对通往 AGI 路径的讨论。",
                  "link": "https://www.ithome.com/1/011/891.htm",
                  "tags": [
                    "世界模型",
                    "AGI"
                  ],
                  "source": "IT之家",
                  "time": "10月12日消息"
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
          "date": "2026-10-13",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "40.5T tokens",
              "change": "↑37%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "15.1T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "12.9T tokens",
              "change": "↑26%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "11.6T tokens",
              "change": "↑18%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "8.13T tokens",
              "change": "↑27%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "7.38T tokens",
              "change": "↑30%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "7.1T tokens",
              "change": "↑10%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "5.64T tokens",
              "change": "↑93%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.42T tokens",
              "change": "↓24%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "4.18T tokens",
              "change": "↑36%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.28T tokens",
              "change": "↓2%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.17T tokens",
              "change": "↓2%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.01T tokens",
              "change": "↑79%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.79T tokens",
              "change": "↑96%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.66T tokens",
              "change": "↑124%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.52T tokens",
              "change": "↑48%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.32T tokens",
              "change": "↑100%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2T tokens",
              "change": "↓8%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "1.79T tokens",
              "change": "↓24%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "1.72T tokens",
              "change": "—"
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
};;;;

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
