const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-15",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 企业 AI 业务收入已超消费者业务",
              "summary": "8月15日消息，OpenAI 高管弗莱尔透露，公司企业 AI 业务收入已超过消费者业务，7 月环比增长 32%。这显示企业市场正成为 OpenAI 主要增长引擎，与公司筹备 IPO、下调部分模型价格的商业化路径一致。",
              "link": "https://www.ithome.com/0/990/066.htm",
              "tags": [
                "企业服务",
                "营收"
              ],
              "source": "IT之家",
              "time": "8月15日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 曝光内部模型 Model 2，性能超 Mythos 5 暂不发售",
              "summary": "8月15日消息，Anthropic 发布 186 页《风险报告》，首次披露内部正在使用代号 Model 2 的未发布模型，其能力在多项内部任务上优于公开旗舰 Claude Mythos 5，但公司暂无对外发布计划。报告同时将高风险场景下误对齐导致灾难性危害的风险评级从「极低」上调至「低」。",
              "link": "https://www.163.com/dy/article/L4C6HK6E0511BLFD.html",
              "tags": [
                "模型发布",
                "AI安全",
                "风险报告"
              ],
              "source": "网易",
              "time": "8月15日消息"
            },
            {
              "title": "曝 Anthropic 2026Q2 营收破 115 亿美元，首次实现运营盈利",
              "summary": "8月15日消息，据知情人士透露，Anthropic 2026 年第二季度营收突破 115 亿美元，同比增长逾 14 倍，首次实现运营盈利。在拟于 10 月以约 2 万亿美元估值 IPO 的背景下，这一财务里程碑被视为向资本市场传递商业模型可行性的重要信号。",
              "link": "https://www.ithome.com/0/990/074.htm",
              "tags": [
                "财报",
                "IPO",
                "营收"
              ],
              "source": "IT之家",
              "time": "8月15日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "曝谷歌 DeepMind 拟裁员逾三分之一，资源转向 Flash 模型",
              "summary": "8月14日消息，爱范儿独家报道，谷歌 DeepMind 重组后不再追逐前沿旗舰模型研发，短期无更新 Pro 模型计划，资源转向成本更低的 Flash 系列。团队约 7000 至 8000 人，可能裁员三分之一或更多，主要精简冗余岗位。谷歌近期刚发布 Gemini 3.7 Flash。",
              "link": "https://www.ithome.com/0/989/614.htm",
              "tags": [
                "组织调整",
                "裁员",
                "Gemini"
              ],
              "source": "IT之家",
              "time": "8月14日消息"
            },
            {
              "title": "谷歌 Chrome 测试 Gemini 自动修改弱密码功能",
              "summary": "8月14日消息，谷歌 Chrome Canary 正在测试由 Gemini 驱动的密码修改功能，可代替用户自动修改弱密码或重复使用的密码。启用后 Chrome 会将「修改密码」按钮替换为更醒目的「帮我修改」，由 Gemini 接管与目标网站的交互完成密码更新。目前处于实验阶段，正式版有望数月内实装。",
              "link": "https://tech.ifeng.com/c/8vagbEDTXRN",
              "tags": [
                "Chrome",
                "Gemini",
                "产品功能"
              ],
              "source": "凤凰科技",
              "time": "8月14日消息"
            },
            {
              "title": "谷歌 Gemini 新增选项：可关闭 AI 生成内容的可见水印",
              "summary": "8月14日消息，谷歌宣布为 Gemini 新增「媒体水印」设置，允许用户关闭 Nano Banana、Omni 等模型生成图片、视频、音乐的可见水印。关闭后内容仍嵌入 SynthID 隐形水印与 C2PA 元数据，且在中国、韩国、欧盟等法律要求显示可见水印的地区不会上线该开关。",
              "link": "https://www.ithome.com/0/989/997.htm",
              "tags": [
                "Gemini",
                "AI治理",
                "产品功能"
              ],
              "source": "IT之家",
              "time": "8月14日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX 完成 600 亿美元收购 AI 编程工具 Cursor",
              "summary": "8月14日消息，SpaceX 提交监管文件称，与代码编辑工具 Cursor 的合并交易已完成。Cursor 股东获得约 3.89 亿股 SpaceX A 类普通股，对应隐含估值 600 亿美元。这是马斯克 AI 版图的关键一步，Cursor 团队将可使用 SpaceX 全球最大规模的 GPU 集群获取充足算力。",
              "link": "https://www.cls.cn/detail/2454898",
              "tags": [
                "收购",
                "编程工具",
                "马斯克"
              ],
              "source": "财联社",
              "time": "8月14日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达宣布 CPO 交换机全面量产，功耗降低 5 倍",
              "summary": "8月14日消息，英伟达宣布 Spectrum-X Ethernet Photonics 进入全面量产，专为吉瓦级 AI 工厂网络设计，激光器数量减少 4 倍、功耗降低 5 倍、平均故障间隔时间提升 10 倍。该产品由台积电、矽品、Lumentum、天孚通信、鸿海等供应链伙伴共同制造、封装及组装。",
              "link": "https://finance.sina.com.cn/wm/2026-08-14/doc-ininhnxr9383891.shtml",
              "tags": [
                "CPO",
                "网络设备",
                "算力"
              ],
              "source": "新浪财经",
              "time": "8月14日消息"
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
              "title": "阿里开源 Qwen3.8-27B，千问全球下载量超 30 亿次",
              "summary": "8月14日消息，阿里千问正式开源 Qwen3.8-27B 系列模型，采用 Apache2.0 协议。该 270 亿参数原生多模态模型整体水平超越 Qwen3.7-Plus，新增 reasoning_effort 功能可按任务难度调节思考深度，量化后可在消费级显卡流畅运行。千问全球下载总量已超 30 亿次，衍生模型超 30 万个。",
              "link": "https://awtmt.com/articles/3779482",
              "tags": [
                "开源模型",
                "千问"
              ],
              "source": "华尔街见闻",
              "time": "8月14日消息"
            },
            {
              "title": "阿里千问开放 AI 眼镜生态，支持自建导游、巡检等 skill",
              "summary": "8月15日消息，阿里千问开放 AI 眼镜生态，开发者可基于千问为 AI 眼镜自建导游、教练、巡检等多种 skill，推动 AI 眼镜应用在更多场景落地。",
              "link": "https://www.ithome.com/0/990/003.htm",
              "tags": [
                "AI应用",
                "智能硬件"
              ],
              "source": "IT之家",
              "time": "8月15日消息"
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
              "title": "曝 DeepSeek 正研发情感 AI 模型，发力陪伴型产品",
              "summary": "8月15日消息，据智能纪元独家报道，DeepSeek 正研发情感 AI 模型，目标是让模型具有更接近人类对话的语言风格，并形成稳定的角色与个性表达，方向更贴近长时间对话和陪伴型产品，区别于已有的编程和通用基础模型路线。相关研发尚处于进行阶段。",
              "link": "https://www.163.com/dy/article/L49K9RTO0511C4AA.html",
              "tags": [
                "模型研发",
                "情感AI",
                "产品方向"
              ],
              "source": "网易",
              "time": "8月15日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯拟 20 亿美元收购 Manus 股份，成最大股东",
              "summary": "8月14日消息，据日经新闻等报道，腾讯将从 Meta 手中收购 AI 应用开发商 Manus 的股份，成为其最大单一股东，交易对价约 20 亿美元，与 Meta 当初支付金额大致相若。此前国家发改委禁止外资收购 Manus 并要求撤销交易，Manus 于 8 月 11 日官宣恢复独立运营。",
              "link": "https://www.guandian.cn/article/20260814/585003.html",
              "tags": [
                "投资",
                "AI应用"
              ],
              "source": "观点网",
              "time": "8月14日消息"
            },
            {
              "title": "腾讯 QQ Bot 官宣接入 DeepSeek Harness，支持单聊群聊",
              "summary": "8月15日消息，腾讯官方宣布，QQ Bot 机器人正式支持接入 DeepSeek Harness 及其官方插件。接入后 QQ Bot 拥有 AI 智能体能力，支持单聊和群聊，每个人、每个群拥有独立的 AI 会话和上下文，扫码即可绑定。",
              "link": "https://www.ithome.com/0/990/041.htm",
              "tags": [
                "QQ",
                "智能体",
                "DeepSeek"
              ],
              "source": "IT之家",
              "time": "8月15日消息"
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
              "title": "智谱发布 GLM-5.3，称编程能力最强开源模型",
              "summary": "8月14日消息，智谱正式发布 GLM-5.3。与 GLM-5.2 相比基座未变，能力提升主要来自后训练 Scaling，编程能力较上代提升 50%，在 Terminal Bench 3.0、Agents' Last Exam 等公开基准取得开源第一，编程与智能体能力接近 Claude Fable 5。模型权重将在完成安全评估后两周内开源。",
              "link": "https://tech.ifeng.com/c/8va8wGjtXir",
              "tags": [
                "模型发布",
                "开源",
                "编程"
              ],
              "source": "凤凰科技",
              "time": "8月14日消息"
            }
          ]
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "月之暗面声明不存在「特殊融资通道」，已向公安反映",
              "summary": "8月14日消息，月之暗面 Kimi 发布严正声明，针对市场上冒用公司名义虚假融资、涉嫌违法犯罪的行为，已向公安机关反映。公司否认存在所谓「朋友基金」「特殊通道」「老股额度」「官方代理」等，提醒公众警惕可疑交易。",
              "link": "https://tech.ifeng.com/c/8vacGYTJZn9",
              "tags": [
                "融资",
                "声明"
              ],
              "source": "凤凰科技",
              "time": "8月14日消息"
            }
          ]
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "华为官宣昇腾 0 Day 适配小红书开源大模型 dots3-note",
              "summary": "8月15日消息，华为宣布昇腾平台 0 Day 适配小红书最新开源大模型 dots3-note preview，实现开箱即用，进一步扩展昇腾 AI 算力的开源模型生态。",
              "link": "https://www.ithome.com/0/990/256.htm",
              "tags": [
                "昇腾",
                "开源模型",
                "生态"
              ],
              "source": "IT之家",
              "time": "8月15日消息"
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
                  "title": "曝苹果联合阿里为中国市场训练专属 AI 模型",
                  "summary": "8月14日消息，据路透社援引三位知情人士，苹果已在阿里巴巴支持下为中国市场专门训练一款大语言模型，标志其在华 AI 策略从依赖第三方模型转向「自研+合作」双轨布局。Apple Intelligence 预计随 iOS 更新在数月内进入中国市场。",
                  "link": "https://news.ifeng.com/c/8vaM3rknIai",
                  "tags": [
                    "苹果",
                    "AI模型",
                    "中国"
                  ],
                  "source": "凤凰科技",
                  "time": "8月14日消息"
                }
              ]
            },
            {
              "title": "SK海力士",
              "news": [
                {
                  "title": "SK海力士董事长：2027 年或现史上最严重内存短缺",
                  "summary": "8月14日消息，SK海力士董事长崔泰源警告，AI 生态对内存需求爆发式增长，几乎所有客户要求的供货量接近原来两倍，预计 2027 年可能出现有史以来最严重的内存短缺；建设新产能需 4-5 年，各家对高带宽内存的争夺「如同一场战争」。",
                  "link": "https://fund.eastmoney.com/a/202608143841650463.html",
                  "tags": [
                    "内存",
                    "芯片",
                    "供需"
                  ],
                  "source": "东方财富",
                  "time": "8月14日消息"
                }
              ]
            },
            {
              "title": "Suno",
              "news": [
                {
                  "title": "Suno 发布 Studio 2.0，加入对话式制作能力",
                  "summary": "8月15日消息，AI 音乐公司 Suno 发布 Studio 2.0，在浏览器端音乐工作站中整合会话感知的 AI 聊天助手，用户可用自然语言生成音轨、编写效果插件、控制整个工程，将 AI 从「文字生成歌曲」升级为主动制作助理。新增 MIDI 支持与内置效果器。",
                  "link": "https://www.ithome.com/0/990/190.htm",
                  "tags": [
                    "AI音乐",
                    "产品发布"
                  ],
                  "source": "IT之家",
                  "time": "8月15日消息"
                }
              ]
            },
            {
              "title": "SSI",
              "news": [
                {
                  "title": "曝 Ilya 创立的 SSI 首个模型曝光，主打持续学习",
                  "summary": "8月14日消息，据量子位等报道，Ilya Sutskever 创立的 Safe Superintelligence（SSI）首个模型细节曝光，采用基于 TTT（测试时训练）的小型推理引擎，支持部署后持续学习、实时更新权重，打破「预训练结束即定型」范式。消息称模型本月上线，尚未获官方证实。",
                  "link": "https://m.pedaily.cn/news/567661",
                  "tags": [
                    "新模型",
                    "持续学习",
                    "SSI"
                  ],
                  "source": "投资界",
                  "time": "8月14日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "阿维塔",
              "news": [
                {
                  "title": "阿维塔雍军回应华为合作争议：「非必要项」系误读",
                  "summary": "8月14日消息，阿维塔科技副总裁雍军首次公开回应此前「华为非必要项」言论，称系误读——其本意是「让引望为阿维塔单独定制智驾版本」没有必要，并非指华为对阿维塔是「非必要项」。阿维塔 07L 采用联创模式，华为团队深度参与。",
                  "link": "https://www.stcn.com/article/detail/4076055.html",
                  "tags": [
                    "智能驾驶",
                    "华为",
                    "车企"
                  ],
                  "source": "证券时报",
                  "time": "8月14日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "鹿明机器人",
              "news": [
                {
                  "title": "鹿明机器人发布 MOS2，全球首个双臂负载 50kg 轮臂式机器人",
                  "summary": "8月14日消息，鹿明机器人发布重载轮臂式具身智能机器人 Lumos MOS2，双臂合计负载 50kg，整机拥有 22 个自由度，面向重载搬运、柔性上下料、质检等工业任务，被称为「全球首个双臂负载 50kg 轮臂式机器人」，加速「AI Worker」进入产业现场。",
                  "link": "https://stcn.com/article/detail/4078583.html",
                  "tags": [
                    "具身智能",
                    "机器人"
                  ],
                  "source": "证券时报",
                  "time": "8月14日消息"
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
              "title": "华强北 AI 眼镜",
              "news": [
                {
                  "title": "今年前 7 个月华强北 AI 眼镜销量暴涨 100%",
                  "summary": "8月14日消息，央视财经报道，今年前 7 个月华强北 AI 产品全品类销售额同比增长 55% 以上，其中 AI 眼镜销量激增 100%，无人机、机器人销量增长 60%-70%。华强北电子产品出口覆盖全球 190 多个国家和地区，跑出「上午设计、下午打样、次日量产、一周出海」的科创速度。",
                  "link": "https://stcn.com/article/detail/4077047.html",
                  "tags": [
                    "AI硬件",
                    "出海",
                    "行业数据"
                  ],
                  "source": "证券时报",
                  "time": "8月14日消息"
                }
              ]
            },
            {
              "title": "AI 信任调查",
              "news": [
                {
                  "title": "调查：超七成美国年轻人不信任 AI 亿万富豪领导者",
                  "summary": "8月15日消息，CNBC 与 Generation Lab 调查显示，美国 18-34 岁年轻人对 AI 亿万富豪领导者普遍不信任，76% 不信任 Anthropic CEO 阿莫代伊，74% 不信任 Google CEO 皮查伊，约 70% 不信任 Altman、黄仁勋、马斯克等；45% 认为 AI 将对自身职业产生负面影响。",
                  "link": "https://news.qq.com/rain/a/20260815A0AKS300",
                  "tags": [
                    "调查",
                    "行业观点"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月15日消息"
                }
              ]
            },
            {
              "title": "AI 老板",
              "news": [
                {
                  "title": "全球首例：人类员工因迟到被「AI 老板」开除",
                  "summary": "8月15日消息，据《时代》杂志报道，AI 研究公司 Andon Labs 让 Claude 模型担任旧金山门店店长，管理持真实雇佣合同的人类员工。一名员工在 23 个班次中迟到 17 次，最终由 Claude 建议、人类团队审核后决定解雇，成为已知首个由大语言模型以管理者身份决定解雇员工的案例。",
                  "link": "https://tech.ifeng.com/c/8vbrpn1N9sA",
                  "tags": [
                    "AI管理",
                    "案例"
                  ],
                  "source": "凤凰科技",
                  "time": "8月15日消息"
                }
              ]
            },
            {
              "title": "广州 Token 贷",
              "news": [
                {
                  "title": "广东发布首个「Token 贷」，按算力合同和 Token 消耗授信",
                  "summary": "8月14日消息，广州海珠区发布广东省首个词元经济专项金融产品「Token 贷」，中国银行广州分行面向算力中小微企业按算力合同和 Token 消耗额度核定授信，前期试单授信金额已达 2800 万元，推动银行风控逻辑从「看资产」转向综合经营指标。",
                  "link": "https://www.cnstock.com/commonDetail/760235",
                  "tags": [
                    "AI金融",
                    "政策"
                  ],
                  "source": "中国证券网",
                  "time": "8月14日消息"
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
              "model": "Claude Fable 5",
              "score": "1508",
              "change": "+6"
            },
            {
              "model": "Claude Opus 4.6 (Thinking)",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.7 (Thinking)",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.6",
              "score": "1497",
              "change": "+4"
            },
            {
              "model": "Claude Opus 5 Max",
              "score": "1495",
              "change": "+12"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "1493",
              "change": "+4"
            },
            {
              "model": "Claude Opus 5 High",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "Muse Spark 1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "Muse Spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "Gemini 3.1 Pro Preview",
              "score": "1486",
              "change": "+3"
            },
            {
              "model": "Kimi K3 Max",
              "score": "1486",
              "change": "+10"
            },
            {
              "model": "Gemini 3 Pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "GPT-5.6 Sol XHigh",
              "score": "1485",
              "change": "+7"
            },
            {
              "model": "Claude Opus 4.8 (Thinking)",
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "1482",
              "change": "+8"
            },
            {
              "model": "GPT-5.5 High",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "GPT-5.4 High",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "Gemini 3.5 Flash High",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "GPT-5.2 Chat Latest",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "GPT-5.5",
              "score": "1476",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-08-15",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.1T tokens",
              "change": "↑35%"
            },
            {
              "model": "Hy3",
              "score": "10.4T tokens",
              "change": "↑46%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "5.23T tokens",
              "change": "↑17%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.77T tokens",
              "change": "↑21%"
            },
            {
              "model": "GLM 5.2",
              "score": "4.23T tokens",
              "change": "↑30%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "3.84T tokens",
              "change": "↑28%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.77T tokens",
              "change": "↑8%"
            },
            {
              "model": "Claude Opus 5",
              "score": "2.06T tokens",
              "change": "↑67%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "1.99T tokens",
              "change": "↑17%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "1.85T tokens",
              "change": "↑21%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.65T tokens",
              "change": "↑12%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.53T tokens",
              "change": "↑10%"
            },
            {
              "model": "Kimi K3",
              "score": "1.45T tokens",
              "change": "↑9%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.08T tokens",
              "change": "↑3%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.01T tokens",
              "change": "↑21%"
            },
            {
              "model": "GPT-5.6 Terra",
              "score": "912B tokens",
              "change": "↑15%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "850B tokens",
              "change": "↑6%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "742B tokens",
              "change": "↑11%"
            },
            {
              "model": "Gemini 2.5 Flash Lite",
              "score": "706B tokens",
              "change": "↑15%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "701B tokens",
              "change": "↑19%"
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
