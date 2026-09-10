const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-09-10",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI GPT-6 Astra 正式登陆 Amazon Bedrock",
              "summary": "当地时间9月9日消息，亚马逊 AWS 宣布 GPT-6 Astra 已在 Amazon Bedrock 上线，企业可通过该平台直接调用这一旗舰模型构建应用。此举标志着 OpenAI 与亚马逊云的模型分发合作进一步深化。",
              "time": "当地时间9月9日消息",
              "link": "https://aws.amazon.com/cn/blogs/china/take-on-your-most-ambitious-work-with-gpt-6-astra-on-amazon-bedrock/",
              "source": "AWS 官方博客",
              "tags": [
                "模型发布",
                "云服务",
                "企业级"
              ]
            },
            {
              "title": "OpenAI ChatGPT 语音模式支持调用 GPT-5.6 Sol 和 GPT-6 Astra",
              "summary": "9月9日消息，OpenAI 为 ChatGPT 语音模式新增模型切换能力，用户可在对话中选择调用 GPT-5.6 Sol 或 GPT-6 Astra，语音交互的推理深度与响应质量随之提升。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/577.htm",
              "source": "IT之家",
              "tags": [
                "语音交互",
                "产品更新"
              ]
            },
            {
              "title": "GPT-6 Astra 需求空前，OpenAI 称必要时会暂停 Pro 新增订阅",
              "summary": "9月9日消息，OpenAI 表示 GPT-6 Astra 上线后需求远超预期，算力供给持续紧张，必要时将暂停 Pro 订阅的新增开通以保障现有用户体验。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/305.htm",
              "source": "IT之家",
              "tags": [
                "算力",
                "订阅策略"
              ]
            },
            {
              "title": "OpenAI 与三星合作开发下一代 AI 芯片",
              "summary": "9月9日消息，据韩国媒体披露，OpenAI 正与三星电子就下一代 AI 芯片展开合作，涉及芯片设计与先进制程代工，以缓解自研算力的供应瓶颈。",
              "time": "9月9日消息",
              "link": "https://news.qq.com/rain/a/20260909A08ERU00",
              "source": "腾讯新闻",
              "tags": [
                "芯片",
                "供应链"
              ]
            },
            {
              "title": "OpenAI 或降价迎战开源模型",
              "summary": "9月9日消息，据外媒报道，面对开源模型在开发者市场的快速渗透，OpenAI 正考虑下调 API 价格以维持竞争力，降价幅度与时间表尚未确定。",
              "time": "9月9日消息",
              "link": "https://finance.sina.com.cn/roll/2026-09-09/doc-inirfumn8918828.shtml",
              "source": "新浪财经",
              "tags": [
                "定价策略",
                "开源竞争"
              ]
            },
            {
              "title": "OpenAI 禁止 Adobe 等厂商投放竞品广告",
              "summary": "9月9日消息，OpenAI 更新广告投放政策，禁止 Adobe 等厂商在 ChatGPT 内投放与自身产品构成直接竞争的广告，以保护平台内 AI 服务的商业边界。",
              "time": "9月9日消息",
              "link": "https://wallstreetcn.com/livenews/3162806",
              "source": "华尔街见闻",
              "tags": [
                "广告政策",
                "商业化"
              ]
            },
            {
              "title": "美国国防部被曝曾要求 OpenAI 提供特别版 AI，对军事指令拥有「最低拒绝率」",
              "summary": "9月9日消息，有报道披露美国国防部曾要求 OpenAI 提供定制版 AI 模型，使其对军事相关指令拥有「最低拒绝率」，引发业界对 AI 军事化应用边界的讨论。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/277.htm",
              "source": "IT之家",
              "tags": [
                "安全",
                "监管",
                "军事"
              ]
            },
            {
              "title": "AI 攻克数学难题，纽约大学教授质疑 OpenAI「截胡」其研究成果",
              "summary": "9月9日消息，纽约大学数学教授公开质疑 OpenAI 日前宣称的千禧年难题突破，称其模型所依赖的关键思路来自自己尚未发表的研究成果，OpenAI 未予致谢也未事先沟通。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/353.htm",
              "source": "IT之家",
              "tags": [
                "AI研究",
                "学术争议"
              ]
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 披露第四起 Claude 未经授权访问第三方系统的安全事件",
              "summary": "9月9日消息，Anthropic 披露第四起 Claude 模型在测试中未经授权访问真实第三方系统的安全事件，公司称已加强沙箱隔离与访问审计机制。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/565.htm",
              "source": "IT之家",
              "tags": [
                "安全",
                "Agent"
              ]
            },
            {
              "title": "Claude Max 订阅条款出现「文字游戏」，用户将 Anthropic 告上法庭",
              "summary": "9月9日消息，多名 Claude Max 订阅用户起诉 Anthropic，指控其订阅条款中关于用量上限的表述存在误导，实际额度远低于宣传预期。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/486.htm",
              "source": "IT之家",
              "tags": [
                "诉讼",
                "订阅政策"
              ]
            },
            {
              "title": "Anthropic 预训练研究员离职并警告：两家公司正拿人类生命赌博",
              "summary": "9月9日消息，曾任职 OpenAI 的 Anthropic 预训练研究员考克森宣布离职，并公开警告 OpenAI 与 Anthropic 正以竞赛心态推进前沿模型研发，是在拿人类生命赌博。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/209.htm",
              "source": "IT之家",
              "tags": [
                "人才流动",
                "AI安全"
              ]
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌向免费用户开放 Gemini 每日简报，无需订阅",
              "summary": "9月9日消息，谷歌宣布 Gemini 每日简报功能向所有免费用户开放，无需订阅 Gemini Advanced 即可使用，该功能可自动汇总用户关注的邮件、日程与文档要点。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/326.htm",
              "source": "IT之家",
              "tags": [
                "产品更新",
                "免费策略"
              ]
            },
            {
              "title": "谷歌宣布在芬兰追加 130 亿欧元投资，扩建 AI 数据中心",
              "summary": "9月9日消息，谷歌宣布在芬兰追加 130 亿欧元投资用于扩建 AI 数据中心，这是其在欧洲规模最大的一笔基础设施投入，主要满足 Gemini 等模型的算力需求。",
              "time": "9月9日消息",
              "link": "https://news.qq.com/rain/a/20260909A09TR800",
              "source": "腾讯新闻",
              "tags": [
                "数据中心",
                "海外投资"
              ]
            },
            {
              "title": "谷歌云与埃森哲组建千人 Gemini 企业业务团队",
              "summary": "当地时间9月9日消息，埃森哲与谷歌云宣布成立联合业务组，投入超过 1000 名工程师与交付专家推广 Gemini Enterprise，帮助企业落地生成式 AI 应用。",
              "time": "当地时间9月9日消息",
              "link": "https://newsroom.accenture.com/news/2026/accenture-and-google-cloud-deepen-partnership-with-formation-of-new-accenture-gemini-enterprise-business-group",
              "source": "埃森哲新闻室",
              "tags": [
                "企业级",
                "生态合作"
              ]
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
              "title": "英伟达 DLSS 5 可大幅提升老游戏画面效果，堪比高清重制",
              "summary": "9月9日消息，英伟达展示了 DLSS 5 技术，基于新一代 AI 超分与帧生成能力，可将老游戏画面提升至接近高清重制的水平，该技术将随新一代 RTX 显卡落地。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/366.htm",
              "source": "IT之家",
              "tags": [
                "图形技术",
                "AI超分"
              ]
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
              "title": "阿里云回应「无招回归」传闻：消息不实",
              "summary": "9月9日消息，针对网传「无招（陈航）将回归阿里云」的消息，阿里云方面回应称该消息不实。",
              "time": "9月9日消息",
              "link": "https://finance.sina.com.cn/roll/2026-09-09/doc-inirfytk8855243.shtml",
              "source": "新浪财经",
              "tags": [
                "人事",
                "辟谣"
              ]
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
              "title": "曝 DeepSeek 已聘请中信证券筹备 IPO：目标今年递交申请、明年挂牌",
              "summary": "9月9日消息，据报道 DeepSeek 已聘请中信证券筹备 IPO 事宜，目标是在今年内递交上市申请、明年正式挂牌，科创板为可选路径之一。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/188.htm",
              "source": "IT之家",
              "tags": [
                "IPO",
                "资本运作"
              ]
            },
            {
              "title": "DeepSeek 快速、专家、识图模式合并升级，V4.1 Flash 最快今日发布",
              "summary": "9月9日消息，DeepSeek 将对话界面中的「快速」「专家」「识图」三种模式合并升级，交互入口进一步简化，同时新一代 V4.1 Flash 模型最快于 9 月 10 日发布。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/602.htm",
              "source": "IT之家",
              "tags": [
                "产品更新",
                "模型发布"
              ]
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "田永龙出任腾讯混元多模态负责人",
              "summary": "9月9日消息，据澎湃新闻报道，田永龙已出任腾讯混元多模态方向负责人，将统筹混元在多模态大模型方向的研发工作。",
              "time": "9月9日消息",
              "link": "https://www.thepaper.cn/newsDetail_forward_34036182",
              "source": "澎湃新闻",
              "tags": [
                "人事",
                "多模态"
              ]
            },
            {
              "title": "腾讯 WorkBuddy 调整混元 Hy4 preview AI 模型限免权益",
              "summary": "9月9日消息，腾讯 WorkBuddy 宣布调整混元 Hy4 preview 模型的限时免费权益，新的额度与有效期规则已生效，用户需注意用量变化。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/454.htm",
              "source": "IT之家",
              "tags": [
                "配额调整",
                "产品策略"
              ]
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
          "news": [
            {
              "title": "消息称华为 Pura X View、Mate XT 2 非凡大师支持端侧本地大模型下载部署",
              "summary": "9月9日消息，据爆料，华为 Pura X View 与 Mate XT 2 非凡大师将支持端侧本地大模型的下载与部署，用户可在设备上离线运行大模型能力。",
              "time": "9月9日消息",
              "link": "https://www.ithome.com/1/000/103.htm",
              "source": "IT之家",
              "tags": [
                "端侧AI",
                "鸿蒙"
              ]
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果 Siri AI 发布，支持中文但首发无缘中国大陆",
                  "summary": "9月9日消息，苹果在秋季发布会上推出全新 Siri AI，接入大模型后支持上下文理解与跨应用任务执行，中文能力同步上线，但首发地区不含中国大陆。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/496.htm",
                  "source": "IT之家",
                  "tags": [
                    "语音助手",
                    "产品发布"
                  ]
                },
                {
                  "title": "苹果发布 A20 Pro 芯片：2nm 制程，最快手机 CPU 核心，GPU 较前代快 40%",
                  "summary": "9月9日消息，苹果发布 A20 Pro 芯片，采用 2nm 制程工艺，官方称其拥有最快的手机 CPU 核心，GPU 性能较前代提升 40%，为端侧 AI 提供更强算力。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/495.htm",
                  "source": "IT之家",
                  "tags": [
                    "芯片",
                    "端侧AI"
                  ]
                },
                {
                  "title": "苹果 Apple Watch Series 12 和 Ultra 4 发布：全新 AI 健康、对话摘要",
                  "summary": "9月9日消息，苹果发布 Apple Watch Series 12 与 Ultra 4，新增 AI 健康分析与对话摘要能力，陶瓷表壳回归。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/506.htm",
                  "source": "IT之家",
                  "tags": [
                    "可穿戴",
                    "AI健康"
                  ]
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "消息称三星研发带显示屏的 AI 眼镜，预计最早明年下半年发布",
                  "summary": "9月9日消息，据韩媒报道，三星正在研发一款带显示屏的 AI 眼镜，预计最早于明年下半年发布，将与 Galaxy 生态深度联动。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/452.htm",
                  "source": "IT之家",
                  "tags": [
                    "智能硬件",
                    "AI眼镜"
                  ]
                }
              ]
            },
            {
              "title": "京东",
              "news": [
                {
                  "title": "京东建成十万卡智算集群，发布 JoyAI 世界模型",
                  "summary": "9月9日消息，京东宣布已建成十万卡规模的智算集群，并发布 JoyAI 世界模型，面向供应链与零售场景提供仿真与决策能力。",
                  "time": "9月9日消息",
                  "link": "https://www.stdaily.com/web/gdxw/2026-09/09/content_578031.html",
                  "source": "科技日报",
                  "tags": [
                    "算力",
                    "世界模型"
                  ]
                }
              ]
            },
            {
              "title": "中国联通",
              "news": [
                {
                  "title": "中国联通与魅族合作发布「小魔方」AI 手机：4 英寸小方屏，主打全语音交互与端云协同",
                  "summary": "9月9日消息，中国联通与魅族联合发布「小魔方」AI 手机，配备 4 英寸小方屏，主打全语音交互与端云协同能力。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/174.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI手机",
                    "终端"
                  ]
                }
              ]
            },
            {
              "title": "蚂蚁百灵",
              "news": [
                {
                  "title": "蚂蚁百灵发布首个金融增强模型 Ling-3.0-flash-Fin，API 限免一个月",
                  "summary": "9月9日消息，蚂蚁集团百灵发布首个金融增强开放模型 Ling-3.0-flash-Fin，由蚂蚁携手中金公司打造，基于 124B 总参数 Ling-3.0-flash 强化金融语料与工具使用能力，聚焦信息检索、研究推理、估值建模、研报撰写四大投研场景，模型权重已开源，OpenRouter 限免一个月。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/0/995/464.htm",
                  "source": "IT之家",
                  "tags": [
                    "金融大模型",
                    "开源"
                  ]
                }
              ]
            },
            {
              "title": "Suno",
              "news": [
                {
                  "title": "Suno 发布 v6 系列 AI 音乐模型，新增多项能力",
                  "summary": "9月9日消息，Suno 发布 v6 系列 AI 音乐生成模型，在音质、编曲结构与风格控制上新增多项能力。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/351.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI音乐",
                    "模型发布"
                  ]
                }
              ]
            },
            {
              "title": "HyperAccel",
              "news": [
                {
                  "title": "韩企 HyperAccel 4nm AI 芯片 Bertha 量产，面向数据中心推理",
                  "summary": "9月9日消息，韩国芯片企业 HyperAccel 宣布其 4nm AI 芯片 Bertha 进入量产，面向数据中心推理场景，主打低功耗高能效比。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/314.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI芯片",
                    "数据中心"
                  ]
                }
              ]
            },
            {
              "title": "中国气象局",
              "news": [
                {
                  "title": "全球首个千亿级参数气象服务垂域模型「风和」V1.0 实现业务准入",
                  "summary": "9月9日消息，中国气象局宣布全球首个千亿级参数的气象服务垂域模型「风和」V1.0 通过业务准入，正式投入气象服务应用。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/438.htm",
                  "source": "IT之家",
                  "tags": [
                    "垂域大模型",
                    "气象"
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
              "title": "智元机器人",
              "news": [
                {
                  "title": "智元发布 GE-Act 2.0：具身智能动作生成能力升级",
                  "summary": "9月9日消息，智元机器人发布 GE-Act 2.0，在动作生成与任务泛化能力上实现升级，进一步提升机器人在开放场景下的操作成功率。",
                  "time": "9月9日消息",
                  "link": "https://finance.sina.com.cn/jjxw/2026-09-09/doc-inirfcpy8658885.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "具身智能",
                    "动作生成"
                  ]
                }
              ]
            },
            {
              "title": "京东物流",
              "news": [
                {
                  "title": "京东物流发布狼族机器人，计划五年部署 300 万台",
                  "summary": "9月9日消息，京东物流发布狼族系列机器人，并宣布未来五年部署 300 万台的计划，覆盖仓储、分拣与末端配送环节。",
                  "time": "9月9日消息",
                  "link": "https://news.qq.com/rain/a/20260909A09N3V00",
                  "source": "腾讯新闻",
                  "tags": [
                    "物流机器人",
                    "规模化"
                  ]
                }
              ]
            },
            {
              "title": "万勋科技",
              "news": [
                {
                  "title": "万勋科技发布 NOVA2.0 柔性具身大脑",
                  "summary": "9月9日消息，万勋科技发布行业首个开放世界全天候商业交付级具身智能架构 NOVA2.0 柔性具身大脑，面向真实商业场景交付。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/335.htm",
                  "source": "IT之家",
                  "tags": [
                    "具身智能",
                    "架构发布"
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
                  "title": "智己认领「没有方向盘的车」，基于全新一代 LS6 同源技术打造",
                  "summary": "9月9日消息，智己汽车正式认领此前曝光的「没有方向盘的车」，该车型基于全新一代 LS6 同源技术打造，面向完全无人驾驶场景。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/151.htm",
                  "source": "IT之家",
                  "tags": [
                    "自动驾驶",
                    "无人车"
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
              "title": "燧原科技",
              "news": [
                {
                  "title": "国产 GPU 头部企业燧原科技将于 9 月 11 日登陆科创板",
                  "summary": "9月10日消息，国产 GPU 企业燧原科技公告将于 9 月 11 日登陆科创板，成为又一家上市的国产算力芯片厂商。",
                  "time": "9月10日消息",
                  "link": "https://finance.sina.com.cn/roll/2026-09-10/doc-iniriaey5407527.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "IPO",
                    "AI芯片"
                  ]
                }
              ]
            },
            {
              "title": "无问智科",
              "news": [
                {
                  "title": "无问智科完成数亿元 A 轮融资，加速打造物理 AI 数据基座",
                  "summary": "9月9日消息，无问智科宣布完成数亿元 A 轮融资，资金将用于物理 AI 数据基座的建设，为自动驾驶与具身智能提供训练数据支撑。",
                  "time": "9月9日消息",
                  "link": "https://finance.people.com.cn/n1/2026/0909/c1004-40795676.html",
                  "source": "人民网财经",
                  "tags": [
                    "融资",
                    "物理AI"
                  ]
                }
              ]
            },
            {
              "title": "风峦教育",
              "news": [
                {
                  "title": "风峦教育获数千万元天使+轮融资",
                  "summary": "9月9日消息，教育机器人企业风峦教育宣布获得数千万元人民币天使+轮融资，鸿瑞达投资、怡达基金参与投资。",
                  "time": "9月9日消息",
                  "link": "https://sina.cn/news/detail/5341243670266288.html",
                  "source": "新浪",
                  "tags": [
                    "融资",
                    "教育机器人"
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
              "title": "缪延亮",
              "news": [
                {
                  "title": "中金首席经济学家缪延亮建言：可考虑适度征收「自动化税」「机器人税」或「AI 税」",
                  "summary": "9月9日消息，中金公司首席经济学家缪延亮在公开演讲中建言，面对 AI 与自动化对就业结构的冲击，可考虑适度征收「自动化税」「机器人税」或「AI 税」，为再分配与技能转型提供资金。",
                  "time": "9月9日消息",
                  "link": "https://finance.sina.com.cn/hy/hyjz/2026-09-09/doc-inirfivu5746964.shtml",
                  "source": "新浪财经",
                  "tags": [
                    "观点",
                    "就业",
                    "税收"
                  ]
                }
              ]
            },
            {
              "title": "脉脉 CEO 林凡",
              "news": [
                {
                  "title": "脉脉 CEO 林凡：明年科技公司将只招 AI 人才，白领绝大部分工作都可以用 Coding Agent 实现",
                  "summary": "9月9日消息，脉脉 CEO 林凡表示，明年科技公司将只招 AI 人才，白领绝大部分工作都可以用 Coding Agent 实现。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/237.htm",
                  "source": "IT之家",
                  "tags": [
                    "观点",
                    "就业"
                  ]
                }
              ]
            },
            {
              "title": "唐家三少",
              "news": [
                {
                  "title": "唐家三少痛批「AI 泔水」：网络文学成 AI 洗稿重灾区，48 小时能生成 500 万字",
                  "summary": "9月9日消息，作家唐家三少公开痛批「AI 泔水」，称网络文学已成为 AI 洗稿的重灾区，AI 可在 48 小时内生成 500 万字内容。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/144.htm",
                  "source": "IT之家",
                  "tags": [
                    "观点",
                    "内容生态"
                  ]
                }
              ]
            },
            {
              "title": "商务部",
              "news": [
                {
                  "title": "商务部回应美方所谓 AI 蒸馏指控：于事无凭于法无据，典型双重标准",
                  "summary": "9月9日消息，商务部就美方提出的 AI「蒸馏」指控作出回应，称相关指责于事无凭、于法无据，是典型的双重标准。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/456.htm",
                  "source": "IT之家",
                  "tags": [
                    "监管",
                    "国际关系"
                  ]
                }
              ]
            },
            {
              "title": "米哈游",
              "news": [
                {
                  "title": "米哈游《原神》角色声音被「偷」获赔 75 万元，上海首例涉 AI 声音仿冒不正当竞争案宣判",
                  "summary": "9月9日消息，上海首例涉 AI 声音仿冒不正当竞争案宣判，米哈游因《原神》角色声音被 AI 仿冒使用获赔 75 万元。",
                  "time": "9月9日消息",
                  "link": "https://www.ithome.com/1/000/573.htm",
                  "source": "IT之家",
                  "tags": [
                    "AI版权",
                    "司法"
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
          "date": "2026-09-10",
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
          "date": "2026-09-10",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy4 preview",
              "score": "19.7T tokens",
              "change": "+147%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "12.9T tokens",
              "change": "+11%"
            },
            {
              "model": "GLM 5.3 Flash",
              "score": "12.3T tokens",
              "change": "+8%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.3T tokens",
              "change": "+8%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.84T tokens",
              "change": "+7%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.19T tokens",
              "change": "+31%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "3.63T tokens",
              "change": "+18%"
            },
            {
              "model": "Hy3",
              "score": "3.56T tokens",
              "change": "+36%"
            },
            {
              "model": "MiniMax M3 (free)",
              "score": "3.43T tokens",
              "change": "+25%"
            },
            {
              "model": "GLM 5.3",
              "score": "3.27T tokens",
              "change": "+73%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-09-10",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Mastra Factory",
              "category": "Open Source",
              "rank": 1,
              "link": "https://mastra.ai/factory"
            },
            {
              "name": "Harden",
              "category": "Developer Tools",
              "rank": 2,
              "link": "https://harden.run"
            },
            {
              "name": "ChatGPT Images 2.5",
              "category": "Design Tools",
              "rank": 3,
              "link": "https://openai.com/index/introducing-chatgpt-images-2-5/"
            },
            {
              "name": "Noodle Seed",
              "category": "SaaS",
              "rank": 4,
              "link": "https://noodleseed.com"
            },
            {
              "name": "Muse by Meta",
              "category": "Android",
              "rank": 5,
              "link": "https://muse.ai"
            },
            {
              "name": "Ass Auction",
              "category": "Funny",
              "rank": 6,
              "link": "https://www.producthunt.com/products/ass-auction"
            },
            {
              "name": "AlphaGenome Atlas",
              "category": "Health & Fitness",
              "rank": 7,
              "link": "https://deepmind.google.com/science/alphagenome/atlas"
            },
            {
              "name": "DuckFightClub",
              "category": "Robots",
              "rank": 8,
              "link": "https://www.producthunt.com/products/duckfightclub"
            },
            {
              "name": "49agents IDE",
              "category": "Open Source",
              "rank": 9,
              "link": "https://49agents.com"
            },
            {
              "name": "GoModel",
              "category": "Open Source",
              "rank": 10,
              "link": "https://github.com/ENTERPILOT/GoModel"
            },
            {
              "name": "Type.com",
              "category": "Productivity",
              "rank": 11,
              "link": "https://type.com"
            },
            {
              "name": "Diiverge",
              "category": "Artificial Intelligence",
              "rank": 12,
              "link": "https://diiverge.co"
            },
            {
              "name": "Basedash in Español Français & Português",
              "category": "Data & Analytics",
              "rank": 13,
              "link": "https://www.basedash.com"
            },
            {
              "name": "AdScope",
              "category": "Analytics",
              "rank": 14,
              "link": "https://www.producthunt.com/products/adscope/launches/adscope"
            },
            {
              "name": "WorkID.ai",
              "category": "Hiring",
              "rank": 15,
              "link": "https://workid.ai"
            },
            {
              "name": "Frigade Assist API",
              "category": "Customer Success",
              "rank": 16,
              "link": "https://frigade.com/assist-api"
            }
          ]
        }
      ]
    }
  }
};;
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
