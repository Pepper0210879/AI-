// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
  "date": "2026-07-21",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10a37f",
          "softBg": "#e6f7f1",
          "initial": "O",
          "news": [
            {
              "title": "OpenAI 战略未来主管批 Kimi K3 开源称「减速主义」，硅谷多方驳斥",
              "summary": "7月20日消息，月之暗面Kimi K3登顶全球榜单并开放权重后，OpenAI新任战略未来主管Dean W. Ball批评称开放权重模型「本质上是减速主义」，会阻碍进一步AI资本支出，还建议美国政府制造「中国模型可能存在后门」的监管恐慌打压对手。David Sacks、Chamath Palihapitiya等硅谷知名人士在社交平台公开驳斥Ball的观点，开源与闭源路线之争再度激化。",
              "link": "https://www.163.com/dy/article/L29L0C5A0511B8LM.html",
              "tags": [
                "Kimi K3",
                "开源",
                "中美AI竞争"
              ],
              "source": "网易",
              "time": "7月20日"
            },
            {
              "title": "OpenAI 董事会主席预测：一年后企业将不再担心 Token 成本",
              "summary": "7月21日消息，OpenAI董事会主席布雷特·泰勒接受CNBC采访时预测，约12个月后企业将不必再操心Token成本。他认为当前AI市场类似互联网早期，随着第三方服务商接管Token管理、收费模式转向按结果付费以及模型运行效率持续提升，Token成本问题将自然消解。IT部门届时能熟练部署不同场景的AI工具。",
              "link": "https://www.ithome.com/0/979/279.htm",
              "tags": [
                "预测",
                "Token",
                "AI成本"
              ],
              "source": "IT之家",
              "time": "7月21日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#d4a574",
          "softBg": "#fdf6ee",
          "initial": "A",
          "news": []
        },
        {
          "name": "Google",
          "color": "#4285f4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": [
            {
              "title": "Google DeepMind CEO 哈萨比斯：AI 不会让 STEM 学位失去价值",
              "summary": "7月18日消息，Google DeepMind CEO德米斯·哈萨比斯在伦敦商业会议上表示，AI正在重塑科技行业职业路径，但STEM和计算机科学基础不会因此失去价值。真正深入理解技术的人使用AI工具的效率可达缺乏基础者的10倍。他还强调AI时代同样需要伦理学、哲学等人文学科以应对技术发展带来的新问题。",
              "link": "https://tech.ifeng.com/c/8uqtk00RBd6",
              "tags": [
                "STEM",
                "AI教育"
              ],
              "source": "凤凰网科技",
              "time": "7月18日"
            },
            {
              "title": "谷歌正研发 Frozen v2 芯片，将 Gemini 架构固化进硬件",
              "summary": "7月20日消息，据The Information报道，谷歌正在研发代号Frozen v2的全新服务器芯片，将Gemini大模型底层运算架构直接固化进硬件层面。单位功耗可处理的Token数量预计达现有自研AI芯片的6至10倍。不同于初代方案直接固化模型权重导致无法迭代，Frozen v2采用弹性固化思路只固化底层架构逻辑，保留通过更新权重进行模型升级的可能性。",
              "link": "https://wallstreetcn.com/articles/3777467",
              "tags": [
                "AI芯片",
                "硬件创新",
                "Gemini"
              ],
              "source": "华尔街见闻",
              "time": "7月20日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1d1d1f",
          "softBg": "#f2f2f2",
          "initial": "X",
          "news": []
        },
        {
          "name": "NVIDIA",
          "color": "#76b900",
          "softBg": "#f0fae6",
          "initial": "N",
          "news": []
        },
        {
          "name": "Meta",
          "color": "#0668e1",
          "softBg": "#e8f0fe",
          "initial": "M",
          "news": []
        },
        {
          "name": "Apple",
          "color": "#555555",
          "softBg": "#f0f0f0",
          "initial": "A",
          "news": [
            {
              "title": "苹果 iOS/iPadOS 27.0 Beta 4 发布：增强 Siri AI",
              "summary": "7月21日，苹果向iPhone和iPad用户推送iOS/iPadOS 27.0开发者预览版Beta 4更新，增强Siri AI能力，包括全新启动画面、增强语音选项、屏幕内容感知和跨应用操作等。但国行iPhone的Apple Intelligence和完整Siri AI仍未上线。",
              "link": "https://www.chinaz.com/2026/0721/1766078.shtml",
              "tags": [
                "iOS",
                "Siri",
                "系统更新"
              ],
              "source": "站长之家",
              "time": "7月21日"
            }
          ]
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "color": "#ff6a00",
          "softBg": "#fff3e6",
          "initial": "A",
          "news": [
            {
              "title": "阿里云发布轻量应用服务器智能体专用型实例，2亿Token包月262.5元",
              "summary": "7月20日，阿里云推出轻量应用服务器智能体专用型实例，将vCPU、内存、云盘、200Mbps峰值带宽与大模型Tokens打包为预付费套餐，提供一站式AI Agent运行环境。搭载ANOLISA专用操作系统可降低约30%的Token浪费。入门套餐2核2G+2亿Token/月活动价262.5元，相比分开购买可节省约18%-68%。",
              "link": "https://www.ithome.com/0/979/212.htm",
              "tags": [
                "云服务",
                "AI智能体"
              ],
              "source": "IT之家",
              "time": "7月20日"
            },
            {
              "title": "阿里千问发布语音合成大模型 Qwen-Audio-3.0-TTS，登顶榜单",
              "summary": "7月20日，阿里千问发布Qwen-Audio-3.0-TTS语音合成大模型，推出Flash（首包延迟300ms）和Plus两个版本，Plus登顶Artificial Analysis榜单。模型支持细粒度标签控制语气情绪、20种中文方言、16种语言，音频采样率提升至48KHz，单次合成最长3分钟。已在阿里云百炼平台全面开放调用。",
              "link": "https://m.ithome.com/html/979128.htm",
              "tags": [
                "语音合成",
                "多模态"
              ],
              "source": "IT之家",
              "time": "7月20日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#1e7aff",
          "softBg": "#e8f2ff",
          "initial": "火",
          "news": [
            {
              "title": "字节跳动发布 Seed Audio 1.0 音频创作模型",
              "summary": "7月20日，字节跳动Seed团队发布Seed Audio 1.0音频创作模型，在统一框架下联合建模人声、音效和环境声，支持文本或参考音频输入，单次可生成约2分钟音频并可持续延长，覆盖20多种语言。模型支持100ms间隔精度的时间控制，角色音色与表达方式保持连贯。在影视、播客等十余类场景评测中多数可用率达90%以上，已在火山方舟体验中心上线。",
              "link": "https://www.cnstock.com/commonDetail/747694",
              "tags": [
                "音频",
                "多模态",
                "AIGC"
              ],
              "source": "证券时报",
              "time": "7月20日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4f6ef7",
          "softBg": "#edf0fe",
          "initial": "D",
          "news": []
        },
        {
          "name": "腾讯",
          "color": "#07c160",
          "softBg": "#e6f9ed",
          "initial": "腾",
          "news": [
            {
              "title": "腾讯 WorkBuddy PC端AI办公智能体月访问量破2000万",
              "summary": "7月20日，《2026年Q2中国办公智能体平台市场洞察报告》显示，腾讯WorkBuddy在PC端AI原生办公智能体市场6月单月访问量突破2000万次，居市场第一，超过第二、第三位总和。DAU超1300万，已接入混元、DeepSeek、智谱GLM、Kimi等主流大模型。",
              "link": "https://www.cnstock.com/commonDetail/747775",
              "tags": [
                "AI办公",
                "智能体",
                "市场份额"
              ],
              "source": "证券时报",
              "time": "7月20日"
            }
          ]
        },
        {
          "name": "小米",
          "color": "#ff6900",
          "softBg": "#fff0e6",
          "initial": "米",
          "news": []
        },
        {
          "name": "智谱AI",
          "color": "#7c3aed",
          "softBg": "#f3edff",
          "initial": "智",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#8b5cf6",
          "softBg": "#f3edfe",
          "initial": "月",
          "news": [
            {
              "title": "Kimi K3 登顶 LMArena 前端开发榜，中信建投称另一个DeepSeek时刻",
              "summary": "7月20日消息，中信建投研报指出，Kimi K3（2.8万亿参数、100万上下文）本周在LMArena前端开发榜以1679分超越Claude Fable 5排名第一，综合榜进入第9名。研报认为K3发布是分水岭事件，证明国产模型已在Agentic Coding主战场与美国前沿模型正面交锋，应用层使用Tier1模型的成本预计将降低。",
              "link": "https://36kr.com/newsflashes/3903585520371588",
              "tags": [
                "Kimi K3",
                "LMArena",
                "大模型排名"
              ],
              "source": "36氪",
              "time": "7月20日消息"
            },
            {
              "title": "月之暗面回应马斯克：欢迎加入2万亿+俱乐部",
              "summary": "7月20日，马斯克在X平台称其2万亿参数新模型可能超越Kimi，月之暗面官方微博直接@马斯克回应「欢迎加入2万亿+俱乐部」。此前马斯克曾在Kimi K3报道下留言Impressive表达赞赏。Kimi K3实际参数规模为2.8万亿。",
              "link": "https://finance.sina.com.cn/jjxw/2026-07-20/doc-iniinmvw9662329.shtml",
              "tags": [
                "Kimi K3",
                "马斯克"
              ],
              "source": "新浪财经",
              "time": "7月20日"
            },
            {
              "title": "中软国际与月之暗面签署登月计划合作协议，Token分成模式",
              "summary": "7月20日，中软国际与月之暗面签署登月计划合作协议，双方基于Kimi K3大模型在能源电力、金融等行业联合开发企业级智能体，并共建FDE创新实验室。合作采用创新的Token消耗收益分成模式，构建可持续的AI商业化合作范式。受消息影响，中软国际股价当天一度拉升超37%。",
              "link": "https://tech.ifeng.com/c/8uuoXhoI6D4",
              "tags": [
                "企业合作",
                "商业化"
              ],
              "source": "凤凰网科技",
              "time": "7月20日"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#cf0a2c",
          "softBg": "#fde8eb",
          "initial": "华",
          "news": [
            {
              "title": "靳玉志：华为乾崑继续做汽车行业电子螺丝钉，累计投入超千亿",
              "summary": "7月20日消息，华为高级副总裁、引望CEO靳玉志接受采访时重申，华为乾崑不会做成独立汽车品牌，继续做汽车行业电子螺丝钉。乾崑智驾搭载量突破190万台，华为在汽车智能化领域累计投入超1000亿元，2026年研发预算约180亿元。首次明确界系列覆盖30万以上市场、境系列瞄准30万以下市场。",
              "link": "https://36kr.com/p/3902068392658566",
              "tags": [
                "智能汽车",
                "乾崑",
                "智驾"
              ],
              "source": "36氪",
              "time": "7月20日"
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
              "title": "无问芯穹",
              "news": [
                {
                  "title": "无问芯穹发布 Agentic Infra 前店后厂一中心战略",
                  "summary": "7月20日，无问芯穹在WAIC 2026发布Agentic Infra前店后厂一中心战略，涵盖算力集散中心（跨域训练覆盖超37,000P算力、16种芯片）、Agentic MaaS Token工厂（单日Token调用量较去年12月增长40倍）和AI生产力商店。同时发布PDD架构可将首Token延迟降低51.5%、单Token成本降低37.5%。",
                  "link": "https://finance.sina.cn/2026-07-20/detail-iniimzha9775491.d.html",
                  "tags": [
                    "AI基础设施",
                    "WAIC"
                  ],
                  "source": "新浪财经",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "百度昆仑芯",
              "news": [
                {
                  "title": "百度昆仑芯 M100 实物首次展出，面向大模型推理优化",
                  "summary": "7月20日，百度旗下昆仑芯科技在WAIC 2026首次展出第四代AI芯片M100实物。该芯片基于全国产供应链打造，延续自研XPU架构，面向大模型推理场景优化，主要对标NVIDIA H20。同时展出的32/64卡超节点及256卡超节点集群是国内率先实现量产交付的超节点产品。",
                  "link": "https://www.ithome.com/0/978/920.htm",
                  "tags": [
                    "AI芯片",
                    "WAIC",
                    "国产芯片"
                  ],
                  "source": "IT之家",
                  "time": "7月20日"
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
              "title": "人形机器人产业",
              "news": [
                {
                  "title": "工信部：我国人形机器人整机产品达400余款，超全球半数",
                  "summary": "7月20日，工信部在国新办发布会上介绍，我国人形机器人整机产品已达400余款，占全球总数半数以上；四足机器人占全球销量份额接近70%。这是工信部列举的具有国际竞争优势的产业加快壮大的例证，显示我国在智能机器人领域的全球领先地位。",
                  "link": "https://www.cnstock.com/commonDetail/747647",
                  "tags": [
                    "人形机器人",
                    "工信部"
                  ],
                  "source": "证券时报",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树发布 UnifoLM-OminiA-0.3 模型，支持全模态交互理解",
                  "summary": "7月20日，宇树科技发布UnifoLM-OminiA-0.3具身大模型，单模型可统筹家居康养多任务，支持语音、视觉等全模态交互理解。搭载该模型的G1人形机器人展示了物品搬运、视觉感知问答、精细操作、智能设备联动等能力，全程自主抗干扰。该模型实现了机器人从感知到行动的完整闭环。",
                  "link": "https://36kr.com/newsflashes/3903657704277633",
                  "tags": [
                    "人形机器人",
                    "具身大模型"
                  ],
                  "source": "36氪",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "润科具能",
              "news": [
                {
                  "title": "润科具能发布轮足复合半人马机器人，面向特种场景",
                  "summary": "7月20日，润科具能在WAIC 2026发布全球首款半人马轮足复合机器人，采用人形上体+四轮底盘设计，面向炼钢、矿山、核工业、消防应急等特种场景。平均负载100-120kg，极限静态负载210kg，具备防爆等级。已获真实订单，计划2026年Q4实现小规模量产，国产化率达95%以上。",
                  "link": "https://m.ithome.com/html/978833.htm",
                  "tags": [
                    "具身智能",
                    "特种机器人",
                    "WAIC"
                  ],
                  "source": "IT之家",
                  "time": "7月20日"
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
              "title": "Meshy",
              "news": [
                {
                  "title": "Meshy 完成近4亿美元B轮融资，刷新AI 3D领域纪录",
                  "summary": "7月20日，AI 3D内容平台Meshy宣布完成近4亿美元B轮融资，投后估值超100亿元人民币，刷新AI 3D赛道单轮融资规模与估值两项纪录。由IDG资本、经纬中国、Monolith砺思资本联合投资。注册用户突破1200万，年收入增长12倍，全球前十科技公司半数已成为其客户。",
                  "link": "https://36kr.com/newsflashes/3903365138270088",
                  "tags": [
                    "AI 3D",
                    "融资"
                  ],
                  "source": "36氪",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "Emergent",
              "news": [
                {
                  "title": "AI 平台 Emergent 以15亿美元估值完成1.3亿美元C轮融资",
                  "summary": "7月20日，AI软件开发平台Emergent宣布完成1.3亿美元C轮融资，估值达15亿美元，由Creaegis领投，Khosla Ventures、软银愿景基金2等跟投。公司成立一年便跻身独角兽，年化收入约1.2亿美元，平台用户已建立超1200万个应用，70%用户无编程经验。",
                  "link": "https://news.qq.com/rain/a/20260720A02PJA00",
                  "tags": [
                    "AI开发",
                    "融资"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "飞书",
              "news": [
                {
                  "title": "飞书 Q2 ARR 同比增长超100%，超九成新客户采购AI产品",
                  "summary": "7月20日消息，截至2026年二季度末，飞书ARR同比增长超100%，增速达商业化以来最高。新增客户中超九成同步采购飞书AI产品，客户范围从互联网、新能源汽车延伸至零售、制造、能源等传统行业。AI已成为飞书获客的关键变量。",
                  "link": "https://m.21jingji.com/article/20260720/herald/3e3eed8898e6e508bdba8d4e8faf5a86.html",
                  "tags": [
                    "企业服务",
                    "AI商业化"
                  ],
                  "source": "第一财经",
                  "time": "7月20日消息"
                }
              ]
            },
            {
              "title": "零一万物",
              "news": [
                {
                  "title": "李开复旗下零一万物计划2027年赴港上市",
                  "summary": "7月20日消息，据彭博社报道，李开复在WAIC 2026期间透露，零一万物正推进IPO前融资，目标最早2027年在香港上市。公司正在解除离岸控股结构以适应港交所规程。目前约一半收入来自海外市场，已从早期大模型研发转向企业AI基础设施。",
                  "link": "https://www.ithome.com/0/979/051.htm",
                  "tags": [
                    "IPO",
                    "AI创业"
                  ],
                  "source": "IT之家",
                  "time": "7月20日消息"
                }
              ]
            },
            {
              "title": "Etched",
              "news": [
                {
                  "title": "AI芯片初创 Etched 洽谈200亿美元估值融资",
                  "summary": "7月20日消息，据华尔街日报报道，开发低电压AI推理芯片的Etched正洽谈以200亿美元估值融资，由简街资本领投。公司2025年12月以50亿美元估值完成5亿美元融资，不到一年估值翻四倍。由三名哈佛辍学生创立，芯片电压比多数竞品低50%以上，客户端需求意向约10亿美元。",
                  "link": "https://tech.ifeng.com/c/8uuk5Ogt8Pf",
                  "tags": [
                    "AI芯片",
                    "融资"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月20日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "WAIC 2026",
              "news": [
                {
                  "title": "2026世界人工智能大会闭幕，意向采购金额超203亿元",
                  "summary": "7月20日，WAIC 2026在上海闭幕。展品4486项，351款全球首发。预计达成意向采购约203.6亿元，同比增长约25%。29个国家签署《关于成立世界人工智能合作组织的协定》，总部设在上海。现场观众超40万人次，177个采购团组发布212项采购需求。",
                  "link": "https://www.ithome.com/0/979/174.htm",
                  "tags": [
                    "WAIC",
                    "行业大会"
                  ],
                  "source": "IT之家",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "光电融合",
              "news": [
                {
                  "title": "光电融合芯片有望让Token成本降50%",
                  "summary": "7月20日消息，业内人士在WAIC 2026上指出，光电融合芯片相比传统电芯片延迟更低、功耗更低，每单位Token成本有望下降50%甚至更多。光子替代电子进行数据传输和矩阵运算，能从根源削减电费和散热两大成本大头。预计未来3到5年内落地，率先在云端算力机房、自动驾驶等场景铺开。",
                  "link": "https://finance.sina.com.cn/wm/2026-07-20/doc-iniimeaq8139268.shtml",
                  "tags": [
                    "AI芯片",
                    "降本"
                  ],
                  "source": "新浪财经",
                  "time": "7月20日消息"
                }
              ]
            },
            {
              "title": "摩根士丹利",
              "news": [
                {
                  "title": "摩根士丹利成为华尔街AI债务交易头号银行",
                  "summary": "7月20日消息，摩根士丹利为AI数据中心建设设计创新债务和股权融资模式，输送数百亿美元资金，成为主导AI基建融资的头号银行。上半年债务和股权资本市场费用收入达23亿美元，同比增长约64%，超越高盛升至全球第二。代表性交易包括为TeraWulf发行32亿美元债券等。",
                  "link": "https://36kr.com/newsflashes/3903632074770050",
                  "tags": [
                    "AI基建",
                    "融资"
                  ],
                  "source": "36氪",
                  "time": "7月20日消息"
                }
              ]
            },
            {
              "title": "特斯拉FSD",
              "news": [
                {
                  "title": "马斯克：特斯拉FSD将记住个人驾驶风格，实现个性化自动驾驶",
                  "summary": "7月20日，马斯克在X平台回应车主抱怨时表示，特斯拉FSD端到端神经网络将学习驾驶员的人工干预行为，根据个人偏好调整驾驶策略，从通用型变为真正的个性化驾驶系统。系统将学习用户停车习惯等偏好，预计FSD v15将进一步提升个性化驾驶能力。",
                  "link": "https://www.ithome.com/0/978/642.htm",
                  "tags": [
                    "特斯拉",
                    "FSD",
                    "自动驾驶"
                  ],
                  "source": "IT之家",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "王祖贤",
              "news": [
                {
                  "title": "王祖贤息影22年后授权AI形象，网易《天下》首个AI短片上线",
                  "summary": "7月20日，王祖贤息影22年后授权AI形象，与网易《天下》合作的首个AI短片《倩影》正式上线。这是国内游戏行业首支获得明星授权、全程AIGC技术制作的广告片，无真人实拍。由网易互娱DM Monet画布与火山引擎技术支持，王祖贤AI形象还被制成游戏内数字NPC和专属时装。",
                  "link": "https://m.ithome.com/html/979089.htm",
                  "tags": [
                    "AIGC",
                    "游戏",
                    "数字人"
                  ],
                  "source": "IT之家",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "小鹏汽车",
              "news": [
                {
                  "title": "小鹏汽车AI Infra负责人陆思渊将离职，下一站OpenAI",
                  "summary": "7月20日消息，据雷峰网报道，小鹏汽车AI基础架构部负责人陆思渊即将离职，将前往OpenAI参与具身智能机器人方向研发。陆思渊直管约200人团队，负责模型训练框架、GPU集群管理、自研芯片编译器、车端推理部署等完整链路。离职后其团队预计拆分为三个以上独立团队降低影响。",
                  "link": "https://m.ithome.com/html/979250.htm",
                  "tags": [
                    "人才流动",
                    "具身智能"
                  ],
                  "source": "IT之家",
                  "time": "7月20日消息"
                }
              ]
            },
            {
              "title": "美国AI测试机构",
              "news": [
                {
                  "title": "上任仅3个月，美国AI测试机构负责人克里斯·福尔辞职",
                  "summary": "当地时间7月20日，美国商务部证实，下属AI测试机构——美国人工智能标准与创新中心主任克里斯·福尔在上任仅3个月后辞职。该机构负责与Anthropic、谷歌DeepMind、OpenAI等合作，在模型发布前测试安全漏洞。此次离职正值特朗普政府AI监管政策持续转向之际，联邦关键AI机构将暂时缺少正式负责人。",
                  "link": "https://www.ithome.com/0/979/288.htm",
                  "tags": [
                    "AI监管",
                    "美国政策"
                  ],
                  "source": "IT之家",
                  "time": "当地时间7月20日"
                }
              ]
            },
            {
              "title": "工信部",
              "news": [
                {
                  "title": "工信部：我国智能算力达2185 EFLOPS，AI开源模型下载突破100亿次",
                  "summary": "7月20日，工信部在国新办发布会上披露多项数据：截至6月底我国智能算力规模达2185 EFLOPS，算力设施上架率71.4%；AI开源大模型全球累计下载量突破100亿次，开源鸿蒙生态设备超13.5亿台；AI产业规模达1.2万亿元。",
                  "link": "https://news.qq.com/rain/a/20260720A03WUJ00",
                  "tags": [
                    "算力",
                    "开源",
                    "产业数据"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "AI批判性思维研究",
              "news": [
                {
                  "title": "研究：AI会削弱人类批判性思维，降低说我不知道的意愿",
                  "summary": "7月20日消息，最新研究发现使用AI建议显著削弱人的批判性思维能力。有AI辅助时参与者准确率从27%降至9%，但自信心从30%飙升至76%；说不知道的比例从44%骤降至3%。MIT的另一项研究发现过度依赖AI聊天机器人使人的独立判断能力下降15.3%。",
                  "link": "https://www.ithome.com/0/979/222.htm",
                  "tags": [
                    "AI影响",
                    "批判性思维"
                  ],
                  "source": "IT之家",
                  "time": "7月20日消息"
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
          "date": "2026-07-10",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5",
              "score": "1509",
              "change": "±9"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1504",
              "change": "±4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1503",
              "change": "±4"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1498",
              "change": "±4"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1494",
              "change": "±4"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1490",
              "change": "±10"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "±6"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1486",
              "change": "±14"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "±4"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1485",
              "change": "±4"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1482",
              "change": "±5"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1481",
              "change": "±5"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1476",
              "change": "±4"
            },
            {
              "model": "gemini-3.5-flash-high",
              "score": "1476",
              "change": "±7"
            },
            {
              "model": "gemini-3.5-flash-medium",
              "score": "1476",
              "change": "±7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "±4"
            },
            {
              "model": "qwen3.7-max-preview",
              "score": "1475",
              "change": "±10"
            },
            {
              "model": "claude-opus-4-8",
              "score": "1475",
              "change": "±5"
            },
            {
              "model": "grok-4.20-beta1",
              "score": "1475",
              "change": "±5"
            },
            {
              "model": "gpt-5.5",
              "score": "1474",
              "change": "±5"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-07-21",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy3 (free) (by tencent)",
              "score": "11.5T tokens",
              "change": "87%"
            },
            {
              "model": "MiMo-V2.5 (by xiaomi)",
              "score": "9.19T tokens",
              "change": "55%"
            },
            {
              "model": "DeepSeek V4 Flash (by deepseek)",
              "score": "5.35T tokens",
              "change": "2%"
            },
            {
              "model": "MiniMax M3 (by minimax)",
              "score": "3.75T tokens",
              "change": "12%"
            },
            {
              "model": "GLM 5.2 (by z-ai)",
              "score": "3.65T tokens",
              "change": "14%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (by nvidia)",
              "score": "3.06T tokens",
              "change": "50%"
            },
            {
              "model": "DeepSeek V4 Pro (by deepseek)",
              "score": "2.67T tokens",
              "change": "5%"
            },
            {
              "model": "Claude Opus 4.7 (by anthropic)",
              "score": "2.16T tokens",
              "change": "4%"
            },
            {
              "model": "Claude Opus 4.8 (by anthropic)",
              "score": "2.06T tokens",
              "change": "2%"
            },
            {
              "model": "Claude Sonnet 5 (by anthropic)",
              "score": "1.06T tokens",
              "change": "14%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-15",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Velo 3.0",
              "category": "Productivity",
              "rank": 1,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "V2Fun",
              "category": "AI",
              "rank": 2,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "Campus",
              "category": "Productivity",
              "rank": 3,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "Agently",
              "category": "Productivity",
              "rank": 4,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "Crustdata Recruiter",
              "category": "Hiring",
              "rank": 5,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "YAGNI",
              "category": "SaaS",
              "rank": 6,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "RecordMeeting",
              "category": "Chrome Extensions",
              "rank": 7,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "Tiptap AI Toolkit",
              "category": "Text Editors",
              "rank": 8,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "Flodesk Studio",
              "category": "Email",
              "rank": 9,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "CodeNearby 2.0",
              "category": "Productivity",
              "rank": 10,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "nudge2.0",
              "category": "Productivity",
              "rank": 11,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "Copresent",
              "category": "Chrome Extensions",
              "rank": 12,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "Keepresso",
              "category": "Productivity",
              "rank": 13,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "Clerk",
              "category": "Fintech",
              "rank": 14,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "Review by Eddie AI",
              "category": "Productivity",
              "rank": 15,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "Jam-Pod",
              "category": "Music",
              "rank": 16,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "ccshare",
              "category": "Dev Tools",
              "rank": 17,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "QuickQuill",
              "category": "Mac",
              "rank": 18,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "New AI tools by IFTTT",
              "category": "Productivity",
              "rank": 19,
              "link": "https://www.producthunt.com/"
            },
            {
              "name": "DeskMat 1.3",
              "category": "Mac",
              "rank": 20,
              "link": "https://www.producthunt.com/"
            }
          ]
        }
      ]
    }
  }
}

const VENDOR_DISPLAY = {
    "OpenAI":       { color: "#7ab8d6", softBg: "#edf5fa", initial: "O", logo: "logos/OpenAI.png" },
    "Anthropic":    { color: "#c4a882", softBg: "#faf5ee", initial: "A", logo: "logos/Anthropic.png" },
    "Google":       { color: "#8ac4a0", softBg: "#effaf3", initial: "G", logo: "logos/Google.png" },
    "xAI":          { color: "#8ab4d4", softBg: "#eef5fb", initial: "X", logo: "logos/xAI.png" },
    "NVIDIA":       { color: "#a8c47a", softBg: "#f4f9ee", initial: "N", logo: "logos/NVDIA.png" },
    "Meta":         { color: "#8a9ad4", softBg: "#eff0fa", initial: "M", logo: "logos/Meta.png" },
    "微软":         { color: "#00A4EF", softBg: "#E6F5FD", initial: "微", logo: "logos/微软.jpg" },
    "阿里云":       { color: "#d4a06a", softBg: "#faf5ee", initial: "阿", logo: "logos/阿里云.png" },
    "火山引擎":     { color: "#8aaed4", softBg: "#eef5fb", initial: "火", logo: "logos/火山引擎.png" },
    "DeepSeek":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "D", logo: "logos/DeepSeek.png" },
    "腾讯":         { color: "#8ac4a0", softBg: "#effaf3", initial: "腾", logo: "logos/腾讯.png" },
    "智谱AI":       { color: "#b4a0d4", softBg: "#f5f0fa", initial: "智", logo: "logos/智谱.png" },
    "智谱 AI":      { color: "#b4a0d4", softBg: "#f5f0fa", initial: "智", logo: "logos/智谱.png" },
    "MiniMax":      { color: "#d4a0b4", softBg: "#faf0f4", initial: "M", logo: "logos/MiniMax.png" },
    "月之暗面":     { color: "#b4a0d4", softBg: "#f5f0fa", initial: "月", logo: "logos/月之暗面.png" },
    "华为":         { color: "#d4a0a0", softBg: "#faf0f0", initial: "华", logo: "logos/华为.jpg" },
    "三星":         { color: "#8aaed4", softBg: "#eef5fb", initial: "三" },
    "小米":         { color: "#d4a882", softBg: "#faf5ee", initial: "米", logo: "logos/小米.jpg" },
    "昆仑万维":     { color: "#a0b0d4", softBg: "#f2f4fa", initial: "昆" },
    "字节跳动":     { color: "#8ab4d4", softBg: "#eef5fb", initial: "字" },
    "Stability AI": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "S" },
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
    "快手":         { color: "#d4a06a", softBg: "#faf5ee", initial: "快", logo: "logos/其他厂商/快手.png" },
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
    "MiniMax":      { color: "#d4a0b4", softBg: "#faf0f4", initial: "M", logo: "logos/MiniMax.png" },
    "小鹏汽车":     { color: "#8ac4a0", softBg: "#effaf3", initial: "鹏" },
    "小鹏 IRON":    { color: "#8a9ad4", softBg: "#eff0fa", initial: "I" },
    "苹果":         { color: "#a0a8b0", softBg: "#f2f4f5", initial: "苹", logo: "logos/其他厂商/苹果.png" },
    "自变量机器人": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "自" },
    "荣耀":         { color: "#4a90d9", softBg: "#eef5fb", initial: "荣" },
    "罗福莉（小米大模型负责人）": { color: "#d4a882", softBg: "#faf5ee", initial: "罗" },
    "黄仁勋（NVIDIA CEO）": { color: "#a8c47a", softBg: "#f4f9ee", initial: "黄" },
    "英特尔":         { color: "#0071c5", softBg: "#e6f0f8", initial: "英", logo: "https://www.google.com/s2/favicons?domain=intel.com&sz=64" },
    "鸿海（富士康）": { color: "#e60012", softBg: "#fde8ec", initial: "鸿", logo: "https://www.google.com/s2/favicons?domain=foxconn.com&sz=64" },
    "网易有道":       { color: "#e4393c", softBg: "#fde8ec", initial: "有", logo: "https://www.google.com/s2/favicons?domain=youdao.com&sz=64" },
    "宇树科技":       { color: "#1a1a2e", softBg: "#e8e8f0", initial: "宇", logo: "https://www.google.com/s2/favicons?domain=unitree.com&sz=64" },
    "Vbot 维他动力":  { color: "#00d4aa", softBg: "#e6faf5", initial: "V", logo: "https://www.google.com/s2/favicons?domain=vbot.ai&sz=64" },
    "博登智能":       { color: "#4a90d9", softBg: "#eef5fb", initial: "博", logo: "https://www.google.com/s2/favicons?domain=bodenai.com&sz=64" },
    "软银集团":       { color: "#c0c0c0", softBg: "#f5f5f5", initial: "软", logo: "https://www.google.com/s2/favicons?domain=softbank.jp&sz=64" },
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
    const secMeta = {
        overseas: { title: "海外主要厂商", icon: "fas fa-globe-americas", iconClass: "overseas" },
        domestic: { title: "国内主要厂商", icon: "fas fa-flag", iconClass: "domestic" },
        other:    { title: "其他关注", icon: "fas fa-layer-group", iconClass: "other" },
        ranking:  { title: "榜单情况", icon: "fas fa-trophy", iconClass: "ranking" }
    };
    for (const [key, meta] of Object.entries(secMeta)) {
        if (data.sections[key]) Object.assign(data.sections[key], meta);
    }
    for (const secKey of ['overseas', 'domestic']) {
        const vendors = data?.sections?.[secKey]?.vendors;
        if (!vendors) continue;
        for (const v of vendors) {
            const cfg = VENDOR_DISPLAY[v.name];
            if (cfg) { v.color = cfg.color; v.softBg = cfg.softBg; v.initial = cfg.initial; v.logo = cfg.logo; }
        }
    }
    const categories = data?.sections?.other?.categories;
    if (categories) {
        for (const c of categories) {
            const cfg = CATEGORY_DISPLAY[c.name];
            if (cfg) { c.icon = cfg.icon; c.color = cfg.color; c.softBg = cfg.softBg; }
        }
    }
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
        if (map[tag]) return map[tag];
    }
    return null;
}

function loadNewsData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
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
    autoConfirmBeforeRefresh();
    let lsData = null;
    let rawData = null;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) lsData = JSON.parse(saved);
    } catch (e) { /* ignore */ }
    if (window.__RAW_DATA) rawData = window.__RAW_DATA;
    const rawDate = rawData?.date || '';
    const lsDate = lsData?.date || '';
    const lsEditTime = lsData?._manualEdit ? new Date(lsData._manualEdit).getTime() : 0;
    const rawEditTime = rawData?._manualEdit ? new Date(rawData._manualEdit).getTime() : 0;
    const isManualEdit = lsData?._manualEdit && lsDate === rawDate && lsEditTime >= rawEditTime;
    if (lsDate > rawDate || isManualEdit) {
        if (lsData) {
            delete lsData._manualEdit;
            enrichData(lsData);
            console.log('已从 localStorage 加载新闻数据（用户编辑优先）');
            return lsData;
        }
    }
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
    try {
        const INVALID_DATES = ['2026-05-26'];
        const confirmed = JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
        let changed = false;
        for (const d of INVALID_DATES) {
            if (confirmed[d]) {
                delete confirmed[d];
                changed = true;
                console.log('清除无效日期:', d);
            }
        }
        const seedVersion = window.__SEED_VERSION || 1;
        const cachedVersion = localStorage.getItem('ai-news-seed-version');
        if (String(seedVersion) !== cachedVersion) {
            localStorage.removeItem(CONFIRMED_KEY);
            localStorage.removeItem(STORAGE_KEY);
            localStorage.setItem('ai-news-seed-version', String(seedVersion));
            console.log('种子数据版本更新，已自动清除全部缓存，刷新后即见最新数据');
        }
        if (window.__SEED_CONFIRMED) {
            for (const [dateStr, data] of Object.entries(window.__SEED_CONFIRMED)) {
                confirmed[dateStr] = data;
                changed = true;
            }
            if (Object.keys(window.__SEED_CONFIRMED).length > 0) {
                console.log('种子数据已同步:', Object.keys(window.__SEED_CONFIRMED).join(', '));
            }
        }
        if (changed) {
            localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
        }
    } catch (e) { /* ignore */ }
}

function autoConfirmBeforeRefresh() {
    seedConfirmedData();
    try {
        const oldSaved = localStorage.getItem(STORAGE_KEY);
        if (!oldSaved) return;
        const oldData = JSON.parse(oldSaved);
        const oldDate = oldData.date;
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
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }
})();

function initPage() {
    const todayStr = getTodayStr();
    const currentDate = newsData?.date || todayStr;
    const savedDate = localStorage.getItem(LAST_VIEWED_DATE_KEY);
    if (savedDate && currentDate > savedDate) {
        localStorage.setItem(LAST_VIEWED_DATE_KEY, currentDate);
        console.log(`网页已更新：从 ${savedDate} 自动刷新到最新日期 ${currentDate}`);
    }
    updateHeaderDate();
    renderContent();
    setupEventListeners();
}

const state = {
    currentCategory: 'all',
    isLoading: false
};

function updateHeaderDate(dateStr) {
    const today = new Date();
    const d = dateStr ? new Date(dateStr + 'T00:00:00') : today;
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
                        const dateLabel = `${d.getMonth() + 1}月${d.getDate()}日早报`;
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

function setupEventListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCategory(btn));
    });
    setupDateSelector();
    document.querySelector('.export-btn').addEventListener('click', () => {
        showToast('正在打开打印对话框，选择「存储为PDF」即可...');
        setTimeout(() => window.print(), 500);
    });
    setupBackToTop();
    setupKeyboardNav();
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const title = e.target.closest('.vendor-card-recent-title[data-link]');
        if (!title) return;
        e.stopPropagation();
        e.preventDefault();
        window.open(title.dataset.link, '_blank', 'noopener');
    });
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.vendor-card');
        if (!card) return;
        const category = card.dataset.category;
        const vendorIndex = parseInt(card.dataset.vendorIndex);
        openVendorModal(category, vendorIndex);
    });
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
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.other-news-card');
        if (!card) return;
        const catIndex = parseInt(card.dataset.catIndex);
        const cardIndex = parseInt(card.dataset.cardIndex);
        const newsItem = e.target.closest('.vendor-card-news-item');
        const newsIndex = newsItem ? parseInt(newsItem.dataset.newsIndex) : 0;
        openOtherNewsModal(catIndex, cardIndex, newsIndex);
    });
    document.getElementById('modal-close').addEventListener('click', closeVendorModal);
    document.getElementById('vendor-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeVendorModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('vendor-modal').classList.contains('active')) {
                closeVendorModal();
            } else if (document.getElementById('source-modal').classList.contains('active')) {
                closeSourceModal();
            }
        }
    });
    document.getElementById('source-info-btn').addEventListener('click', openSourceModal);
    document.getElementById('source-modal-close').addEventListener('click', closeSourceModal);
    document.getElementById('source-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeSourceModal();
    });
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
    const confirmed = getConfirmedDates();
    const confirmedDates = Object.keys(confirmed).sort();
    const minDate = confirmedDates.length > 0 ? confirmedDates[0] : todayStr;
    dateInput.min = minDate;
    dateInput.max = todayStr;
    const displayDate = newsData?.date || todayStr;
    dateInput.value = displayDate;
    let lastValidDate = displayDate;
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
        if (selected !== todayStr && !confirmed[selected]) {
            showToast(`${selected} 暂无内容，不可选择`);
            dateInput.value = lastValidDate;
            return;
        }
        lastValidDate = selected;
        localStorage.setItem(LAST_VIEWED_DATE_KEY, selected);
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
    const confirmed = getConfirmedDates();
    const todayStr = getTodayStr();
    const cutoffDate = new Date(todayStr);
    cutoffDate.setDate(cutoffDate.getDate() - 7);
    const cutoffStr = cutoffDate.toISOString().slice(0, 10);
    const dates = Object.keys(confirmed)
        .filter(d => d !== todayStr && d >= cutoffStr)
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

function openVendorModal(category, vendorIndex) {
    const vendor = newsData.sections[category].vendors[vendorIndex];
    if (!vendor || vendor.news.length === 0) return;
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
    renderModalBody(vendor);
    document.getElementById('vendor-modal').classList.add('active');
    document.body.classList.add('modal-open');
}

function closeVendorModal() {
    document.getElementById('vendor-modal').classList.remove('active');
    document.body.classList.remove('modal-open');
}

function openSourceModal() {
    document.getElementById('source-modal').classList.add('active');
    document.body.classList.add('modal-open');
}

function closeSourceModal() {
    document.getElementById('source-modal').classList.remove('active');
    document.body.classList.remove('modal-open');
}

function openOtherNewsModal(catIndex, cardIndex, newsIndex) {
    const cat = newsData.sections.other.categories[catIndex];
    const card = cat.cards[cardIndex];
    const item = card.news[newsIndex];
    if (!item) return;
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

function downloadReport() {
    const d = new Date();
    const dateStr = d.toLocaleDateString('zh-CN').replace(/\//g, '-');
    const sections = newsData.sections;
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

console.log('%c每日AI早报', 'color: #4a9eff; font-size: 20px; font-weight: bold;');
console.log('%c每天为你精选AI领域最新动态', 'color: #a0a0b0; font-size: 14px;');
