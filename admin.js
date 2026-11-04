const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-11-03",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "奥特曼预告下一代 GPT，1 万个 Agent 攻克千禧难题",
              "summary": "11月3日消息，据路透社报道，OpenAI CEO 奥特曼在阿布扎比 ADIPEC 2026 能源大会上透露，OpenAI 准备发布的下一代 GPT 可能正是此前用于研究纳维-斯托克斯方程的内部模型。约 1 万个由该模型驱动的 AI 智能体连续协作约 4 天，期间交换约 270 万条消息、生成约 1300 亿 Token，此后 GPT-6 Astra 通过 Lean 完成形式化验证。纳维-斯托克斯方程属于克雷数学研究所七大千禧年难题之一。",
              "link": "https://news.qq.com/rain/a/20261103A04U3P00",
              "tags": [
                "GPT",
                "Agent"
              ],
              "source": "36氪",
              "time": "11月3日消息"
            },
            {
              "title": "奥特曼称个人电脑浪费内存，遭全网声讨",
              "summary": "11月2日消息，OpenAI CEO 奥特曼近日在播客访谈中称，把全球有限的 DRAM 内存装在个人电脑里、利用率仅约 5%，是「相当糟糕」的资源浪费，主张内存应集中在云端数据中心以最大化利用。这番言论引发玩家群体强烈不满，社交媒体充斥批评帖与表情包，马斯克也在 X 平台发文声讨：「民众也理应拥有属于自己的内存！」",
              "link": "https://news.qq.com/rain/a/20261102A0D11S00",
              "tags": [
                "内存",
                "观点"
              ],
              "source": "IT之家",
              "time": "11月2日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 第三季度营收 170 亿美元，同比暴增 1127%",
              "summary": "11月3日消息，Anthropic 向美国证券交易委员会提交更新后的 S-1 招股文件，首次披露截至 9 月底的第三季度财务数据：营收近 170 亿美元，同比大增 1127%，但季度净亏损 233 亿美元，较上年同期扩大。公司同时披露约 8954 亿美元的 AI 基础设施支出承诺，涉及亚马逊、谷歌等合作伙伴，并警告部分算力供应依赖第三方融资。",
              "link": "https://news.qq.com/rain/a/20261103A04W0900",
              "tags": [
                "财报",
                "IPO"
              ],
              "source": "财联社",
              "time": "11月3日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "土耳其对谷歌 AI 搜索功能启动反垄断调查",
              "summary": "11月2日消息，土耳其竞争管理局宣布对谷歌 AI 概览和 AI 模式功能启动反垄断调查，重点审查相关服务是否损害新闻出版商及其他内容创作者利益，包括导致其网站流量下降、设置不公平内容使用条款等。该机构同时要求谷歌确保新闻内容使用条款不构成歧视、反映内容经济价值，并允许出版商自主决定是否授权 AI 服务使用其内容。",
              "link": "https://www.donews.com/news/detail/8/6762213.html",
              "tags": [
                "反垄断",
                "AI搜索"
              ],
              "source": "DoNews",
              "time": "11月2日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "马斯克回应 Grok Bot 额度消耗过快：服务成本难以为继",
              "summary": "11月2日消息，针对用户反馈 Grok Bot 每周额度消耗远超往常，马斯克在 X 平台回应称，这款 AI 智能体的服务成本「相对于收入而言高到难以为继」。Grok Bot 是 SpaceX 8 月推出的 AI 智能体，依托虚拟计算机替人完成购物等任务，从免费版到每月 200 美元套餐不等，所有档位均设每周重置限额。SpaceX 上月披露其付费周活用户已达 80 万。",
              "link": "https://news.qq.com/rain/a/20261102A0CVH600",
              "tags": [
                "Grok",
                "Agent"
              ],
              "source": "IT之家",
              "time": "11月2日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": []
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 降低消费级 VR 硬件优先级，资源转向 AI 与可穿戴",
              "summary": "11月2日消息，Meta 首席财务官苏珊·李在三季度财报电话会上表示，Reality Labs 部门三季度营收 4.43 亿美元、同比下降 6%，主因 Quest 头显销量减少，但 AI 智能眼镜业务持续强劲增长。Meta 正调整硬件优先级，将更多资源转向可穿戴设备和 AI 业务，降低消费级 VR 硬件及元宇宙优先级，但扎克伯格称「并未完全放弃 VR」。",
              "link": "https://news.qq.com/rain/a/20261102A0C35W00",
              "tags": [
                "VR",
                "AI眼镜"
              ],
              "source": "IT之家",
              "time": "11月2日消息"
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
              "title": "千问办公 Token 登陆李佳琦直播间，半小时卖出 2 万亿",
              "summary": "11月2日消息，双十一期间，千问办公 Token 登陆李佳琦直播间，开卖半小时即售出 10 万份千问办公个人会员月卡，累计约 2 万亿 Token。千问办公 CEO 陈宇森做客直播间介绍 AI 办公场景。今年 Token 充值与订阅套餐已进入电商货架，天猫 9 月起上线 Token 充值中心，接入 DeepSeek、阿里云、智谱、Kimi 等厂商。",
              "link": "https://finance.eastmoney.com/a/202611023919101133.html",
              "tags": [
                "Token",
                "AI消费"
              ],
              "source": "东方财富",
              "time": "11月2日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": []
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek Harness 加入创作者模式，可用对话制作插件",
              "summary": "11月3日消息，DeepSeek 为其开源智能体 Harness 推出「创作者模式」，让用户通过自然语言对话制作插件，扩展工具、技能和应用界面。官方演示展示了设计工作台、沙盒游戏和 3D 可视化等用法，并公开七组演示提示词，涵盖地标 3D 展厅、Transformer 计算过程可视化、视频剪辑、论文阅读等场景。",
              "link": "https://news.qq.com/rain/a/20261103A0DHRZ00",
              "tags": [
                "Agent",
                "插件"
              ],
              "source": "IT之家",
              "time": "11月3日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯发布科研 Agent Hyra 2.0，从解题走向造工具",
              "summary": "11月2日消息，腾讯混元发布科研 Agent Hyra 2.0，将目标扩展到研发可反复使用的科学模型、算法与验证工具。Hyra 2.0 接入企业微信、计算平台和代码仓库，由 Overall 协调目标、Mission 管理路线、Worker 执行实验。初步成果包括蛋白质逆折叠模型 HyInv、蛋白质语言模型 HyPLM-Flash、分子模拟模型 HyFF 及量子纠错工具 HyQEC，其中 HyInv 生成速度相比 ProteinMPNN 提高 57 倍。",
              "link": "https://news.qq.com/rain/a/20261102A0CKD000",
              "tags": [
                "科研Agent",
                "大模型"
              ],
              "source": "凤凰网科技",
              "time": "11月2日消息"
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
          "news": [
            {
              "title": "Kimi 发布游戏开发方案，可操作 Unity 与虚幻引擎",
              "summary": "11月3日消息，月之暗面 Kimi 发布「游戏开发与创意工作解决方案」，基于 Kimi K3.1 Pro、Kimi Code、Kimi Work 和专业软件插件，串联玩法验证、美术制作、工程开发及发行运营。Kimi 可用 Godot 搭建可试玩原型，通过 Blender 插件操作现有工程，并与 Unity 中国 Tuanjie Codely Agent 协同生成代码、搭建场景。官方称一次演示中系统无人工干预连续工作 20 小时。",
              "link": "https://news.qq.com/rain/a/20261103A0962L00",
              "tags": [
                "游戏开发",
                "Agent"
              ],
              "source": "IT之家",
              "time": "11月3日消息"
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
              "title": "美团",
              "news": [
                {
                  "title": "美团发布 LongCat-2.5，支持视觉编程与长程工程任务",
                  "summary": "11月2日消息，美团 LongCat API 平台更新日志显示，LongCat-2.5 正式上线。新版重点概括为原生多模态、长程 Agent 和跨工具接入：模型结合视觉理解与智能体编程，用于视觉编码、创意设计和 3D 任务，并通过多步推理、工具调用和端到端执行处理复杂代码库与完整项目构建。开发者可将 LongCat-2.5 接入 Claude Code、Codex、Hermes 等 Agent 工具。",
                  "link": "https://news.qq.com/rain/a/20261102A0BHTP00",
                  "tags": [
                    "大模型",
                    "Agent"
                  ],
                  "source": "腾讯新闻",
                  "time": "11月2日消息"
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
                  "title": "宇树 A2 机器狗登泰山夺冠，斩获 1 金 2 银",
                  "summary": "11月2日消息，首届 CMG 世界机器人登泰山大赛在山东泰安举行，赛道全程 3.9 公里、3100 余级台阶。宇树科技旗下北京灵翌队携 A2 机器狗以全程全自主模式夺得足式机器人竞速冠军，实际用时 41 分 41 秒，上海高羿队再添两银。此前备受关注的宇树 G1 人形机器人因过热中途退赛。宇树官方仅派出 A2、B2 两款四足机器人参赛。",
                  "link": "https://news.qq.com/rain/a/20261102A0CEDB00",
                  "tags": [
                    "具身智能",
                    "机器人"
                  ],
                  "source": "观点网",
                  "time": "11月2日消息"
                }
              ]
            },
            {
              "title": "优必选",
              "news": [
                {
                  "title": "优必选发布具身智能仿真平台 Thinker-Sim",
                  "summary": "11月2日消息，优必选发布具身智能仿真平台 Thinker-Sim，以 Real2Sim2Real 为核心，覆盖真实场景数字化、规模化仿真数据合成和机器人能力评测。平台采用自研 Thinker-GS 场景重建算法和 SimReady 资产自动生成技术，可将工厂产线、商业展厅重建为数字孪生环境，支持多节点并行仿真，并可随机调整光照、纹理等条件测试算法鲁棒性。",
                  "link": "https://news.qq.com/rain/a/20261102A06LJI00",
                  "tags": [
                    "具身智能",
                    "仿真"
                  ],
                  "source": "北京商报",
                  "time": "11月2日消息"
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
              "title": "Marvell",
              "news": [
                {
                  "title": "Marvell 1150 亿美元收购 Lumentum，押注 AI 光互连",
                  "summary": "11月3日消息，美国芯片公司 Marvell 正式宣布以全股票交易收购光通信器件厂商 Lumentum，交易隐含企业价值约 1150 亿美元、股权价值约 1025 亿美元。Lumentum 股东每股获 4.5 股 Marvell 股票，交易预计 2028 年上半年完成。Marvell 在定制 AI 芯片、网络交换和高速互连领域有积累，Lumentum 掌握高性能激光器、光收发器技术，双方希望整合电信号与光信号技术服务下一代 AI 计算集群。",
                  "link": "https://news.qq.com/rain/a/20261103A0537R00",
                  "tags": [
                    "并购",
                    "光互连"
                  ],
                  "source": "IT时代网",
                  "time": "11月3日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "苏莱曼（微软AI CEO）",
              "news": [
                {
                  "title": "微软 AI CEO 苏莱曼：研发有意识 AI 是鲁莽之举",
                  "summary": "11月2日消息，微软 AI CEO 穆斯塔法·苏莱曼发文表示，AI 目前没有意识且应当如此，即便技术上可实现，他也不赞成研发有意识的人工智能。他称「认定机器拥有意识，将是堪比哥白尼、达尔文的历史性时刻」，一旦造出有意识的机器就创造了全新的数字物种，会颠覆道德体系与政治秩序。他主张只设计不具备意识、不配享有权利、以增进人类福祉为唯一目标的 AI。",
                  "link": "https://news.qq.com/rain/a/20261102A04DZK00",
                  "tags": [
                    "AI安全",
                    "观点"
                  ],
                  "source": "观点网",
                  "time": "11月2日消息"
                }
              ]
            },
            {
              "title": "香港金管局",
              "news": [
                {
                  "title": "香港金管局公布金融科技措施，SAGE 项目探索 AI 代理支付",
                  "summary": "11月2日消息，香港金融管理局宣布推出 SAGE 项目，支持代理式金融的应用探索并同步建立管治框架。潜在场景包括面向消费者的代理购物和日常支付、企业采购与财资管理，以及机器之间按用量支付数字服务费用。项目聚焦验证应用场景、核实代理身份与授权、讨论互通标准及梳理法律监管框架，并成立代理式金融专家小组提供支持。",
                  "link": "https://news.qq.com/rain/a/20261102A07CWX00",
                  "tags": [
                    "AI Agent",
                    "金融"
                  ],
                  "source": "财联社",
                  "time": "11月2日消息"
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
