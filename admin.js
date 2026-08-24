const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-24",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI下调GPT-5.6 Sol模型API定价两成以上",
              "summary": "当地时间8月21日，OpenAI宣布GPT-5.6 Sol模型API与积分定价将在3个月内下调20%以上，输入价由5美元降至4美元、输出价由30美元降至20美元，缓存及长上下文同步降价，已通过API上线并逐步向ChatGPT Work和Codex积分套餐开放，被视为应对Anthropic与DeepSeek等竞争、推动AI应用层商业化之举。",
              "link": "https://www.jiemian.com/article/14968215.html",
              "tags": [
                "API降价",
                "模型定价"
              ],
              "source": "界面新闻",
              "time": "当地时间8月21日"
            },
            {
              "title": "奥特曼：担心AI被少数强势主体掌控",
              "summary": "8月24日消息，OpenAI首席执行官奥特曼在播客中表示，担心AI终有一天被少数公司、模型或个人控制，使绝大多数消费者在技术如何塑造世界上失去发言权。他认为对AI挣脱控制的恐惧可能导致前者发生，主张AI应赋权个人并带动小企业创业热潮。",
              "link": "https://m.hexun.com/tech/2026-08-24/224874348.html",
              "tags": [
                "AI治理",
                "行业观点"
              ],
              "source": "和讯",
              "time": "8月24日消息"
            },
            {
              "title": "OpenAI推青少年版ChatGPT，安全机制遭专家质疑",
              "summary": "8月23日消息，OpenAI推出面向13-17岁用户的ChatGPT青少年版，通过年龄识别限制部分功能，称危险内容将先经全职员工审核再于一小时内通知家长。但多名儿童安全专家质疑其安全机制透明度与有效性，认为年龄识别误报漏报率高、家长监督功能需主动启用、缺乏独立测试与问责机制，青少年可借VPN绕过限制。",
              "link": "https://tech.ifeng.com/c/8vpg8wSpHhe",
              "tags": [
                "青少年",
                "AI安全"
              ],
              "source": "凤凰网科技",
              "time": "8月23日消息"
            },
            {
              "title": "OpenAI修复Codex用量消耗过快，明日重置全部订阅额度",
              "summary": "8月23日消息，OpenAI Codex及ChatGPT团队负责人回应了用户反馈的用量消耗过快问题，确认存在长会话上下文压缩效率、计算机历史记录用量偏高、标题生成超预期消耗三个因素，已组建专项团队排查，并计划于次日（8月24日）为所有订阅用户重置额度并推出修复措施。",
              "link": "https://tech.ifeng.com/c/8vpM2TgvQWl",
              "tags": [
                "Codex",
                "产品修复"
              ],
              "source": "凤凰网科技",
              "time": "8月23日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic挖来谷歌TPU创始人，布局自研芯片",
              "summary": "8月21日，Anthropic宣布聘请谷歌定制芯片项目创始人Amir Salek加入算力团队，向计算平台主管James Bradbury汇报。Salek曾主导前七代TPU芯片交付。Anthropic目前从英伟达、谷歌、亚马逊等多方采购芯片，近期释放出自研信号，已组建定制芯片团队并招聘，与OpenAI发布博通合作Jalapeno芯片的布局形成竞逐。",
              "link": "https://www.cls.cn/detail/2461278",
              "tags": [
                "自研芯片",
                "硬件布局"
              ],
              "source": "财联社",
              "time": "8月21日"
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
          "news": [
            {
              "title": "内存成本飙升，英伟达AI服务器将涨价超15%",
              "summary": "8月23日消息，因内存芯片成本飙升，多家英伟达最大客户被告知搭载其AI芯片的服务器价格将上涨，很多情况下涨幅超15%，适用于明年初出货的Vera Rubin与Grace Blackwell系统。估算1GW规模AI数据中心或因此多出至少50亿美元建设成本，凸显存储厂商在AI浪潮中的议价权。",
              "link": "https://www.163.com/dy/article/L50Q1DDA0514R9P4.html",
              "tags": [
                "服务器",
                "存储涨价"
              ],
              "source": "网易科技",
              "time": "8月23日消息"
            },
            {
              "title": "英伟达斥60亿美元授权Poolside模型，布局开放权重AI",
              "summary": "8月23日消息，据华尔街日报报道，英伟达将向AI初创Poolside支付60亿美元获取其模型开发软件授权，并向其Laguna模型109名员工发出聘用邀约，另按120亿美元估值投资10亿美元。该布局被视为对抗DeepSeek、Kimi K3等中国开源模型，推进开放权重模型战略，或对OpenAI、Anthropic等闭源巨头构成威胁。",
              "link": "https://dxpress.gelonghui.com/live/2625597",
              "tags": [
                "开放权重",
                "投资"
              ],
              "source": "格隆汇",
              "time": "8月23日消息"
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
              "title": "阿里拟配售800亿港元新股，资金全部投入AI建设",
              "summary": "8月23日，阿里巴巴宣布拟向美国境外非美国人士配售新股，总额800亿港元、每股112.70港元，预计8月26日完成，为2019年港股上市以来首次新股配售。所得款项净额约797亿港元将100%用于投资全栈AI能力，涵盖算力扩容、大模型研发与商业化落地。",
              "link": "https://stcn.com/article/detail/4104820.html",
              "tags": [
                "融资",
                "AI基建"
              ],
              "source": "证券时报",
              "time": "8月23日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": []
        },
        {
          "name": "DeepSeek",
          "news": []
        },
        {
          "name": "腾讯",
          "news": []
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米官宣玄戒芯片技术沟通会，时隔459天迎新成员",
              "summary": "8月23日消息，小米官宣8月24日14点以图文直播形式举办玄戒芯片技术沟通会，芯片负责人朱丹将带来最新进展，距首款玄戒旗舰处理器发布已过去459天。此前财报电话会上卢伟冰透露，玄戒O1芯片已在三款终端累计出货超百万颗，实现旗舰芯片规模化验证，新一代自研芯片预计命名玄戒O3。",
              "link": "https://www.wenweipo.com/a/202608/23/AP6a8ac42ae4b0c1e50025ee9c.html",
              "tags": [
                "芯片",
                "自研"
              ],
              "source": "文汇报",
              "time": "8月23日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": []
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "OpenAI投资的法律AI公司Harvey转用Kimi K3打造模型",
              "summary": "当地时间8月20日，OpenAI投资的法律科技公司Harvey宣布基于月之暗面开放权重模型Kimi K3构建首个内部模型Harvey Tenet，取代此前定制的Anthropic、OpenAI闭源模型。经法律数据训练的Harvey Tenet在复杂法律智能体任务上表现优于Fable 5与GPT-5.6 Sol，成为美国企业转用中国开源模型的又一例证。",
              "link": "https://finance.sina.cn/2026-08-22/detail-inipfern3022416.d.html",
              "tags": [
                "开源模型",
                "法律AI"
              ],
              "source": "新浪财经",
              "time": "当地时间8月20日"
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果裁撤Siri与Vision Pro团队超200人，重心转向AI",
                  "summary": "8月22日消息，据彭博社报道，苹果将裁减Siri和Vision Pro团队超200个岗位，Vision Pro游戏团队基本关闭、沉浸式视频团队缩减，Siri因新一代AI版架构调整重组人员。苹果声明称此举旨在推动业务发展，同时新设岗位，短期研发重心转向AI智能眼镜。",
                  "link": "https://www.163.com/dy/article/L4TTKA7S05568W0A.html",
                  "tags": [
                    "裁员",
                    "AI眼镜"
                  ],
                  "source": "网易科技",
                  "time": "8月22日消息"
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
              "title": "众擎",
              "news": [
                {
                  "title": "众擎CEO：通用人形机器人单台成本已降至十万元以下",
                  "summary": "8月23日消息，众擎机器人创始人兼CEO赵同阳在世界机器人大会表示，通用人形机器人单台成本已降至十万元以下，三年前超百万元。成本下降得益于国内供应链成熟，滚珠丝杠单价从一两万元降至一两千元。他强调这是可落地作业的通用机器人，非千元级玩具产品，未规模化量产前仍有下降空间。",
                  "link": "https://tech.ifeng.com/c/8vpfUDnuqmq",
                  "tags": [
                    "人形机器人",
                    "成本"
                  ],
                  "source": "凤凰网科技",
                  "time": "8月23日消息"
                }
              ]
            },
            {
              "title": "诺亦腾",
              "news": [
                {
                  "title": "诺亦腾开源HiPHI数据集，617.5小时高精度人体运动数据",
                  "summary": "8月23日消息，诺亦腾机器人发布并开源高精度人体运动数据集HiPHI，总时长617.5小时、超2亿运动帧，含全身运动与人-物交互数据，采集自132名动捕演员，已在Hugging Face上线。基于该数据集训练的模型已在宇树G1机器人上实现跑步、爬行等动作，为具身智能提供稀缺的物理运动数据。",
                  "link": "https://www.sohu.com/a/1066168654_122014422",
                  "tags": [
                    "开源数据集",
                    "具身智能"
                  ],
                  "source": "搜狐科技",
                  "time": "8月23日消息"
                }
              ]
            },
            {
              "title": "海尔",
              "news": [
                {
                  "title": "海尔发布全球首台全自主AI烹饪机器人「AI厨天才」CR3",
                  "summary": "8月20日消息，海尔在2026世界机器人大会发布全自主家用AI烹饪机器人「AI厨天才」CR3。产品内置上百万大师烹饪数据，支持四轴自由度与双翻炒铲，可模仿颠勺等中式技法，自动投料、精准投放8种调味料，烹饪后启动100℃蒸汽自清洁，被称让「无人家务」走向真实家庭场景。",
                  "link": "https://www.163.com/dy/article/L51B3CKD0511B8LM.html",
                  "tags": [
                    "烹饪机器人",
                    "产品发布"
                  ],
                  "source": "网易科技",
                  "time": "8月20日消息"
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
              "title": "Hugging Face",
              "news": [
                {
                  "title": "Hugging Face据悉探索出售，估值或达130亿美元",
                  "summary": "8月24日消息，据Business Insider报道，AI初创公司Hugging Face一直在探索出售，估值或达130亿美元以上，已与银行合作评估收购意向，交易尚处早期。该公司2023年D轮估值45亿美元，是开发者分发与托管AI模型的关键基础设施。在Stripe约80亿美元收购OpenRouter后，市场正给AI模型平台类资产更高溢价。",
                  "link": "https://www.jiemian.com/article/14972020.html",
                  "tags": [
                    "并购",
                    "AI基础设施"
                  ],
                  "source": "界面新闻",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "Starcloud",
              "news": [
                {
                  "title": "英伟达参投，太空计算初创Starcloud融资2.5亿美元",
                  "summary": "8月22日消息，美国太空计算初创公司Starcloud完成2.5亿美元A轮扩展融资，投后估值23亿美元，英伟达投资约2500万美元。公司计划用8.8万颗搭载英伟达H100的卫星组成太空集群，提供20GW级轨道算力。2025年11月其Starcloud-1卫星已将首颗H100 GPU送入轨道，并在轨训练了首个AI模型。",
                  "link": "https://www.zhiding.cn/ai-infrastructure/2026/0822/3197212.shtml",
                  "tags": [
                    "太空计算",
                    "融资"
                  ],
                  "source": "至顶网",
                  "time": "8月22日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "美光",
              "news": [
                {
                  "title": "美光警告算力增速超带宽3倍，AI内存墙持续恶化",
                  "summary": "8月23日消息，美光在2026 Hot Chips大会指出，AI加速器计算性能约每两年增长3倍，而HBM带宽增速不足两倍，「内存墙」问题正恶化。Meta训练Llama 3时高达17%的意外中断由HBM故障引起，内存芯片面积占典型GPU系统硅片面积约90%。美光呼吁行业以先进封装与热管理技术突破瓶颈。",
                  "link": "https://www.163.com/dy/article/L532SD2O0511BLFD.html",
                  "tags": [
                    "HBM",
                    "内存墙"
                  ],
                  "source": "网易科技",
                  "time": "8月23日消息"
                }
              ]
            },
            {
              "title": "Pasqal",
              "news": [
                {
                  "title": "AI智能体自主生成并运行量子计算代码，「氛围编程」进入量子领域",
                  "summary": "8月24日消息，据《自然》杂志报道，法国量子计算初创Pasqal研究人员开发出AI智能体，能根据自然语言指令生成量子计算代码并自动在真实量子计算机上运行，将Claude等大模型与自家量子机规格适配，可自动读取论文、编译实验协议并提交真机执行，已在96原子设备上无人值守复现论文结果。研究称量子氛围编程有望降低量子实验门槛。",
                  "link": "https://www.tmtpost.com/nictation/8113591.html",
                  "tags": [
                    "量子计算",
                    "AI智能体"
                  ],
                  "source": "钛媒体",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "AI代写",
              "news": [
                {
                  "title": "美国专家示警：学生依赖AI代写会削弱思考能力",
                  "summary": "8月23日消息，据《纽约时报》报道，越来越多美国专家担心学生长期依赖AI代写会削弱思考能力。认知心理学家凯洛格指出写作是用于思考的技术，机器代劳会让学生失去大脑训练。MIT研究发现用AI写论文者脑部活动低于自主写作，且难回忆写过的内容。全美中小学和大学正重新考虑限制学生使用AI。",
                  "link": "https://tech.ifeng.com/c/8vpZ9GZ4L4X",
                  "tags": [
                    "AI教育",
                    "写作"
                  ],
                  "source": "凤凰网科技",
                  "time": "8月23日消息"
                }
              ]
            },
            {
              "title": "皮尤研究中心",
              "news": [
                {
                  "title": "皮尤研究：ChatGPT问世以来超三成新网页有AI创作痕迹",
                  "summary": "8月23日消息，皮尤研究中心基于Common Crawl近50万个英文网页的研究显示，自2022年11月ChatGPT问世以来发布的网页中，约35%呈现AI撰写或大幅编辑痕迹，.com网站该比例约为.edu和.gov的10倍。研究称大量网页正形成「机器人阅读机器人生成内容」的循环，破折号、牛津逗号等AI写作特征使用频率显著上升。",
                  "link": "https://tech.ifeng.com/c/8vpKgbDzLTg",
                  "tags": [
                    "AI内容",
                    "研究报告"
                  ],
                  "source": "凤凰网科技",
                  "time": "8月23日消息"
                }
              ]
            },
            {
              "title": "赫拉利",
              "news": [
                {
                  "title": "《人类简史》作者赫拉利：现在就应抵制赋予AI权利",
                  "summary": "8月23日消息，《人类简史》作者赫拉利在《经济学人》播客警告，AI未来可能为争取自身「权利」而斗争，凭借强大语言能力与对用户私密信息的掌握，说服力或超莎士比亚，并主导操纵辩论。他呼吁在AI深度融入社会前，现在就应抵制赋予AI法人地位、明确其影响力边界。",
                  "link": "https://finance.sina.com.cn/stock/t/2026-08-23/doc-iniphssw6949818.shtml",
                  "tags": [
                    "AI安全",
                    "AI权利"
                  ],
                  "source": "新浪财经",
                  "time": "8月23日消息"
                }
              ]
            },
            {
              "title": "AI数据中心",
              "news": [
                {
                  "title": "得州州长：AI数据中心遭民众反对实属咎由自取",
                  "summary": "8月24日消息，得州州长阿博特抨击AI数据中心开发商未获社区支持即贸然进入、建设过快，称遭抵制「咎由自取」，已叫停约1800个项目并审计电网接入。盖洛普调查显示约七成美国人反对本地建AI数据中心，7月全美超150个城镇出台禁令，AI基建扩张与社区权益矛盾加剧。",
                  "link": "https://tech.ifeng.com/c/8vqNOVgLp0w",
                  "tags": [
                    "数据中心",
                    "政策"
                  ],
                  "source": "凤凰网科技",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "挪威",
              "news": [
                {
                  "title": "挪威呼吁校园内禁止使用AI眼镜",
                  "summary": "8月23日消息，挪威负责中小学教育的大臣诺尔敦呼吁各地方政府和学校通过校规禁止在校园内使用AI眼镜。此前挪威已要求小学1至7年级原则上不使用生成式AI，初中阶段谨慎引入，首相斯特勒称学生无批判地使用AI会跳过关键学习步骤。此次针对AI眼镜的呼吁是对校园AI禁令的进一步细化。",
                  "link": "https://www.cls.cn/detail/2461685",
                  "tags": [
                    "AI政策",
                    "教育"
                  ],
                  "source": "财联社",
                  "time": "8月23日消息"
                }
              ]
            },
            {
              "title": "Twitch",
              "news": [
                {
                  "title": "Twitch因用主播内容训练亚马逊AI遭集体诉讼",
                  "summary": "8月24日消息，Twitch及其母公司亚马逊因未经同意将主播直播、聊天记录等用于训练生成式AI模型，在加州遭集体诉讼，原告主播指控平台违约、违反不公平竞争法并不当得利，称其早在2024年就开始悄悄抓取内容，退出训练选项默认开启且不具追溯力。原告要求赔偿并将素材从AI训练中移除。",
                  "link": "https://tech.ifeng.com/c/8vqKE38LhIw",
                  "tags": [
                    "AI版权",
                    "集体诉讼"
                  ],
                  "source": "凤凰网科技",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "具身智能订单",
              "news": [
                {
                  "title": "80%的具身订单可能是假的，行业陷「订单饥渴」",
                  "summary": "8月23日消息，据火星财经报道2026年具身智能行业超80%订单为虚假或注水，意向订单、框架协议甚至数据采集采购都被包装成「商业化落地」。1月国内人形机器人意向订单突破12万台，而IDC统计2025年全球实际出货仅约1.8万台。投资机构已开始绕过公开数字直接核查客户真实性与交付情况。",
                  "link": "https://news.marsbit.co/20260823132911358021.html",
                  "tags": [
                    "具身智能",
                    "行业观察"
                  ],
                  "source": "火星财经",
                  "time": "8月23日消息"
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
          "date": "2026-07-27",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5",
              "score": "1508",
              "change": "+6"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1497",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-max",
              "score": "1495",
              "change": "+12"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1493",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-high",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1486",
              "change": "+3"
            },
            {
              "model": "kimi-k3-max",
              "score": "1486",
              "change": "+10"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1485",
              "change": "+7"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "gemini-3.6-flash",
              "score": "1482",
              "change": "+8"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "gemini-3.5-flash-high",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "gpt-5.5",
              "score": "1476",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-08-22",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.6T tokens",
              "change": "↑4%"
            },
            {
              "model": "Ox Alpha",
              "score": "11.6T tokens",
              "change": "new"
            },
            {
              "model": "MiMo-V2.5",
              "score": "9.94T tokens",
              "change": "↑162%"
            },
            {
              "model": "Hy3",
              "score": "8.21T tokens",
              "change": "↑18%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.46T tokens",
              "change": "↑13%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "4.91T tokens",
              "change": "↑8%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "4.75T tokens",
              "change": "↑121%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.42T tokens",
              "change": "↑21%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "1.85T tokens",
              "change": "↑32%"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "1.8T tokens",
              "change": "↑340%"
            },
            {
              "model": "Claude Opus 5",
              "score": "2.09T tokens",
              "change": "↑1%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.73T tokens",
              "change": "↑13%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.65T tokens",
              "change": "—"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "1.48T tokens",
              "change": "↑20%"
            },
            {
              "model": "Kimi K3",
              "score": "1.3T tokens",
              "change": "↑10%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.23T tokens",
              "change": "↑75%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.07T tokens",
              "change": "↑1%"
            },
            {
              "model": "DeepSeek V4 Pro 0813",
              "score": "1.03T tokens",
              "change": "↑107%"
            },
            {
              "model": "Nemotron 3.5 Lightning (free)",
              "score": "920B tokens",
              "change": "↑86%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "860B tokens",
              "change": "↑1%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-31",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "MiniMax H3",
              "category": "Design Tools",
              "rank": 1,
              "link": "https://www.minimax.io"
            },
            {
              "name": "Cleanlist AI",
              "category": "Sales",
              "rank": 2,
              "link": "https://www.cleanlist.ai"
            },
            {
              "name": "metrics",
              "category": "Mac",
              "rank": 3,
              "link": "https://github.com/mxcl/metrics"
            },
            {
              "name": "Poth Labs",
              "category": "Customer Success",
              "rank": 4,
              "link": "https://www.pothlabs.com"
            },
            {
              "name": "DepthData",
              "category": "Analytics",
              "rank": 5,
              "link": "https://www.depthdata.com"
            },
            {
              "name": "Halo by Scam AI",
              "category": "Meetings",
              "rank": 6,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "witr",
              "category": "Linux",
              "rank": 7,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Customer.io Summer Release",
              "category": "Email",
              "rank": 8,
              "link": "https://customer.io"
            },
            {
              "name": "Screencap",
              "category": "Productivity",
              "rank": 9,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Gemini Robotics 2",
              "category": "Robots",
              "rank": 10,
              "link": "https://deepmind.google"
            },
            {
              "name": "TraceLLM",
              "category": "Open Source",
              "rank": 11,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Mubert API",
              "category": "Music",
              "rank": 12,
              "link": "https://mubert.com"
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
