const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-29",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI终止向Cursor提供模型 指控其被SpaceX收购后违规",
              "summary": "当地时间8月28日，OpenAI宣布终止与AI编程工具Cursor的合作，将于11月12日停止向其提供模型访问，下一代最强模型Astra也不会提供给Cursor。OpenAI称Cursor被马斯克旗下SpaceX收购后违反服务条款。马斯克回应称“我根本不在乎”。",
              "link": "https://news.qq.com/rain/a/20260829A08ZNS00",
              "tags": [
                "AI编程",
                "合作终止"
              ],
              "source": "腾讯新闻",
              "time": "当地时间8月28日"
            },
            {
              "title": "OpenAI为Codex开发持久模式智能体",
              "summary": "8月28日消息，据《连线》杂志报道，OpenAI正为AI编程助手Codex开发“持久模式”智能体，启用后可持续工作直至被手动休眠，测试中曾连续运行25小时，还能主动创建后续任务、跨会话执行，目前处于内部测试阶段。",
              "link": "https://news.qq.com/rain/a/20260828A03HUX00",
              "tags": [
                "智能体",
                "AI编程"
              ],
              "source": "腾讯新闻",
              "time": "8月28日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic官宣Claude Code打通桌面端与终端",
              "summary": "8月29日消息，Anthropic官宣Claude Code桌面端与终端会话实现双向打通，用户在命令行中开启的会话可在桌面端通过/resume命令无缝恢复，完整对话记录与上下文同步迁移。",
              "link": "https://m.163.com/dy/article/L5GPV7GV0511ABV6.html",
              "tags": [
                "AI编程",
                "Claude Code"
              ],
              "source": "网易",
              "time": "8月29日消息"
            },
            {
              "title": "美法院裁定国防部将Anthropic列入黑名单非法",
              "summary": "当地时间8月27日，美国加州北区联邦法院裁定国防部将Anthropic列入“供应链风险”黑名单的行为非法，认定其违反宪法第一、第五修正案。此前国防部长赫格塞思以Anthropic拒绝军方将Claude用于大规模监控为由将其列入黑名单。",
              "link": "https://tech.ifeng.com/c/8vxXGc2OfEn",
              "tags": [
                "法律",
                "美政府"
              ],
              "source": "凤凰科技",
              "time": "当地时间8月27日"
            },
            {
              "title": "Anthropic被曝曾拟70亿美元收购AI芯片公司MatX",
              "summary": "8月29日消息，据机器之心报道，Anthropic被曝曾想以70亿美元收购AI芯片公司MatX，双方谈判现已转向合作模式。MatX专注研发用于训练大模型的AI芯片。",
              "link": "https://www.ithome.com/0/995/591.htm",
              "tags": [
                "AI芯片",
                "收购"
              ],
              "source": "IT之家",
              "time": "8月29日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌内部测试Gemini 3.8 Flash模型",
              "summary": "8月28日消息，据Business Insider报道，谷歌员工已在内部编程平台Jetski上测试Gemini 3.8 Flash Preview，体验明显优于3.7版本。谷歌正以数周为间隔快速迭代Flash系列模型，目标几乎每月发布一次新模型。",
              "link": "https://www.163.com/dy/article/L5DSNE830511BLFD.html",
              "tags": [
                "Gemini",
                "大模型"
              ],
              "source": "网易",
              "time": "8月28日消息"
            },
            {
              "title": "谷歌要求AI核心员工搬回硅谷办公",
              "summary": "8月29日消息，据The Information报道，谷歌为加速AI研发，将分散在伦敦与硅谷的AI核心人员召回加州总部集中办公，以消除跨时区协作障碍。哈萨比斯卸任DeepMind CEO转任董事长，布林复出深度介入AI决策。",
              "link": "https://app.myzaker.com/news/article.php?pk=6a76d5e48e9f0933ca441fde",
              "tags": [
                "组织调整",
                "人才"
              ],
              "source": "量子位",
              "time": "8月29日消息"
            },
            {
              "title": "Alphabet市值较峰值蒸发超7000亿美元",
              "summary": "8月28日消息，谷歌母公司Alphabet股价较5月历史高点下跌约15%，市值蒸发超7000亿美元。市场担忧其AI优势受质疑、核心AI人才流失，以及旗舰模型Gemini 3.5 Pro延期，尽管其二季度财报数据超预期。",
              "link": "https://www.jiemian.com/article/15016376.html",
              "tags": [
                "股价",
                "市值"
              ],
              "source": "界面新闻",
              "time": "8月28日消息"
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
              "title": "英伟达被曝以129亿美元收购Hugging Face",
              "summary": "8月27日消息，据外媒报道，英伟达已同意以129亿美元收购开源AI平台Hugging Face，估值超130亿美元，约为此前45亿美元估值的近三倍。若交易落地将成为英伟达最大收购之一，助其掌控开源模型分发渠道。",
              "link": "https://m.21jingji.com/article/20260827/herald/ee525cad25ec97f69846ba44622c6e9d.html",
              "tags": [
                "收购",
                "开源生态"
              ],
              "source": "21世纪经济报道",
              "time": "8月27日消息"
            },
            {
              "title": "Hark与英伟达达成多年战略合作 部署吉瓦级算力",
              "summary": "8月27日，美国AI初创公司Hark宣布与英伟达达成多年战略合作，围绕个性化智能体AI展开技术合作，并基于英伟达下一代Vera Rubin平台部署吉瓦级计算能力，支撑大规模AI训练与推理。",
              "link": "https://www.jiemian.com/article/15011284.html",
              "tags": [
                "智能体",
                "算力合作"
              ],
              "source": "界面新闻",
              "time": "8月27日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta内测个人AI智能体Hatch",
              "summary": "8月29日消息，据《商业内幕》报道，Meta已把代号Project Hatch的个人AI智能体开放给更多员工测试。Hatch拥有独立计算机环境，能填表单、购物、做深度研究，连接邮箱、日历等应用，应用关闭后仍在后台运行，敏感操作需用户确认。",
              "link": "https://www.pingwest.com/w/313501",
              "tags": [
                "智能体",
                "内测"
              ],
              "source": "品玩",
              "time": "8月29日消息"
            },
            {
              "title": "Meta预计每年在Anthropic的AI支出最高达100亿美元",
              "summary": "8月27日消息，据《纽约时报》报道，Meta内部今年一度预测每年在Anthropic AI模型上的支出最高可达100亿美元，约占Anthropic预计年收入的15%。尽管两家互为竞争对手，Meta已是Anthropic最大客户之一。",
              "link": "https://www.cls.cn/detail/2466791",
              "tags": [
                "算力支出",
                "竞争"
              ],
              "source": "财联社",
              "time": "8月27日消息"
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
              "title": "高德发布万帧级3D重建模型ABot-Recon",
              "summary": "8月28日，阿里旗下高德发布首个无长程依赖的万帧级流式3D重建模型ABot-Recon，仅凭连续12帧局部画面即可实时重建上万帧3D场景，平均轨迹误差较行业代表方法降低40.6%，已在GitHub开源，可应用于测绘、具身智能、自动驾驶等场景。",
              "link": "https://www.qbitai.com/2026/08/480208.html",
              "tags": [
                "3D重建",
                "开源模型"
              ],
              "source": "量子位",
              "time": "8月28日"
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
          "news": [
            {
              "title": "腾讯发布并开源新一代大模型混元Hy4",
              "summary": "8月28日，腾讯发布并开源新一代大模型混元Hy4 preview。总参数770B、激活参数49B，上下文长度达1M，重点优化软件工程、办公、游戏开发等生产力任务，已同步进入WorkBuddy、元宝等产品。",
              "link": "https://www.news.cn/tech/20260828/b12d8417291b4193ba9e5d435a1a40db/c.html",
              "tags": [
                "大模型",
                "开源"
              ],
              "source": "新华网",
              "time": "8月28日"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米玄戒芯片获人民日报点赞 雷军回应",
              "summary": "8月28日，《人民日报》“人民时评”栏目刊文，将小米玄戒芯片作为体系化攻关案例，称其“为业界探索出一条新路”。雷军当日转发回应“感谢大家，我们继续努力”。玄戒O3为3nm AI旗舰SoC，O100为端侧AI加速芯片，D100为智驾芯片。",
              "link": "https://tech.ifeng.com/c/8vxX7ch0lWs",
              "tags": [
                "芯片",
                "媒体评论"
              ],
              "source": "凤凰科技",
              "time": "8月28日"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱开源GLM-5.3 商用设百亿美元审查门槛",
              "summary": "8月29日，智谱在Hugging Face开放GLM-5.3权重，744B参数MoE架构，能力提升全部来自后训练，重点强化复杂编程、长时任务与网络安全能力。新许可规定年收入超100亿美元的MaaS服务商商业使用前须通过安全审查。",
              "link": "https://www.ithome.com/0/995/896.htm",
              "tags": [
                "大模型",
                "开源"
              ],
              "source": "IT之家",
              "time": "8月29日"
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
              "title": "鸿蒙生态设备突破8000万台",
              "summary": "8月28日，鸿蒙生态大会2026在深圳举行，华为轮值董事长徐直军表示，截至8月20日搭载HarmonyOS 6的终端设备已突破8000万台，预计第四季度突破1亿台，鸿蒙原生应用超10万个。大会发布“鸿图计划”做强生态底座。",
              "link": "https://stcn.com/article/detail/4150680.html",
              "tags": [
                "鸿蒙",
                "操作系统"
              ],
              "source": "证券时报",
              "time": "8月28日"
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
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax半年ARR突破8亿美元 token消耗涨20倍",
                  "summary": "8月28日消息，MiniMax披露半年报显示ARR已突破8亿美元，较2月的1.5亿美元暴涨超5倍；7月token消耗量为1月的20倍。B端收入爆发式增长，开放平台及企业服务收入同比暴增703%，被视为“Agent红利”驱动的增长。",
                  "link": "https://finance.sina.com.cn/roll/2026-08-28/doc-inipwhrt5717220.shtml",
                  "tags": [
                    "财报",
                    "Agent"
                  ],
                  "source": "新浪财经",
                  "time": "8月28日消息"
                }
              ]
            },
            {
              "title": "美团",
              "news": [
                {
                  "title": "王兴：美团不会成为Token工厂",
                  "summary": "8月28日，美团发布二季度财报，收入1046亿元，同比增长14.4%，环比扭亏为盈。CEO王兴在业绩会上称不会成为“Token工厂”，AI模型和产品将用于支持主业，提升用户、商户体验与经营效率。",
                  "link": "https://m.21jingji.com/article/20260828/herald/4d174b9a27ea29a88a494996c4240824.html",
                  "tags": [
                    "财报",
                    "AI战略"
                  ],
                  "source": "21世纪经济报道",
                  "time": "8月28日"
                }
              ]
            },
            {
              "title": "蚂蚁",
              "news": [
                {
                  "title": "蚂蚁百灵发布金融增强模型Ling-Fin",
                  "summary": "8月28日，蚂蚁百灵发布首个金融增强模型Ling-3.0-flash-Fin，124B总参数MoE架构，可处理含5000余个公式的Excel财务模型，将投资研究拆为信息检索、推理、估值建模、研报撰写四类能力，权重计划下周开源。",
                  "link": "https://www.pingwest.com/w/316872",
                  "tags": [
                    "金融模型",
                    "开源"
                  ],
                  "source": "品玩",
                  "time": "8月28日"
                }
              ]
            },
            {
              "title": "优必选",
              "news": [
                {
                  "title": "优必选上半年营收12.7亿元 人形机器人销量翻倍",
                  "summary": "8月28日，优必选发布2026年中期业绩，总营收12.7亿元，同比增长104.2%；人形机器人销量16123台，同比增长268.3%。全尺寸具身智能人形机器人收入5.9亿元，同比大增1445%，经调整EBITDA亏损收窄45.9%。",
                  "link": "https://www.jiemian.com/article/15022191.html",
                  "tags": [
                    "财报",
                    "人形机器人"
                  ],
                  "source": "界面新闻",
                  "time": "8月28日"
                }
              ]
            },
            {
              "title": "长鑫科技",
              "news": [
                {
                  "title": "长鑫科技上半年营收1503亿元 扭亏为盈",
                  "summary": "8月28日晚，长鑫科技披露上市后首份半年报，上半年营收1503.1亿元，同比增长873.64%；净利润776.05亿元，上年同期亏损23.32亿元，同比扭亏为盈。业绩爆发主要受益于DRAM涨价红利。",
                  "link": "https://m.21jingji.com/article/20260828/herald/66d38720dd7422a0b9177d2d17ffdc9b.html",
                  "tags": [
                    "财报",
                    "存储芯片"
                  ],
                  "source": "21世纪经济报道",
                  "time": "8月28日"
                }
              ]
            },
            {
              "title": "商汤",
              "news": [
                {
                  "title": "商汤助力智象未来跑通视频生成国产算力",
                  "summary": "8月28日消息，商汤大装置与多模态生成式AI企业智象未来合作，跑通视频生成业务向国产算力无感迁移的完整链路，多卡并行视频生成加速比达93%，已支持10余种异构芯片上的模型零成本迁移。",
                  "link": "https://www.qbitai.com/2026/08/480227.html",
                  "tags": [
                    "国产算力",
                    "视频生成"
                  ],
                  "source": "量子位",
                  "time": "8月28日消息"
                }
              ]
            },
            {
              "title": "华硕",
              "news": [
                {
                  "title": "华硕成立物理AI解决方案事业群",
                  "summary": "8月28日，华硕宣布成立物理AI解决方案事业群（PAS BG），下设AI解决方案、自主平台、人形机器人三大事业部，人形机器人业务计划9月上路。华硕预判物理AI市场规模2035年将达1.1万亿美元。",
                  "link": "https://tech.ifeng.com/c/8vxjR46GZhA",
                  "tags": [
                    "人形机器人",
                    "组织调整"
                  ],
                  "source": "凤凰科技",
                  "time": "8月28日"
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
              "title": "国家发改委",
              "news": [
                {
                  "title": "发改委：机器人产业须防盲目跟风一哄而上",
                  "summary": "8月28日，国家发改委新闻发言人李超表示，机器人产业必须因地制宜，防止盲目跟风、一哄而上。2025年中国机器人产业规上企业营收突破3000亿元，今年上半年营收1655亿元，同比增长24.5%。发改委将以具身智能实训场和中试基地为抓手推动落地。",
                  "link": "https://www.jiemian.com/article/15015353.html",
                  "tags": [
                    "机器人",
                    "政策"
                  ],
                  "source": "界面新闻",
                  "time": "8月28日"
                }
              ]
            },
            {
              "title": "智元机器人",
              "news": [
                {
                  "title": "智元机器人首征世界人形机器人运动会双榜第一",
                  "summary": "8月26日，第二届世界人形机器人运动会落幕，智元机器人首次出征便以18金16银12铜共46枚奖牌登顶金牌榜、奖牌榜双第一。参赛产品全部为量产机型，涵盖灵巧手OmniHand、精灵G2等，被视为人形机器人规模化落地的压力测试。",
                  "link": "https://www.shobserver.com/staticsg/res/html/web/sgh/sghNewsDetail.html?id=4045731",
                  "tags": [
                    "人形机器人",
                    "运动会"
                  ],
                  "source": "上观新闻",
                  "time": "8月26日"
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
              "title": "a16z Machine Age",
              "news": [
                {
                  "title": "a16z推出11亿美元“机器时代”基金",
                  "summary": "当地时间8月28日，知名风投a16z推出首只硬件基础设施基金“Machine Age”，规模11亿美元，重点投资AI处理器、存储芯片、网络设备、数据存储、数据中心和机器人等领域。管理合伙人称“数据中心四堵墙之内的一切都会投”。",
                  "link": "https://www.a16z.news/p/the-machine-age-fund",
                  "tags": [
                    "基金",
                    "AI硬件"
                  ],
                  "source": "a16z",
                  "time": "当地时间8月28日"
                }
              ]
            },
            {
              "title": "Sharpa",
              "news": [
                {
                  "title": "AI机器人公司Sharpa完成超45亿元融资",
                  "summary": "8月28日，专注灵巧操作的AI机器人公司Sharpa宣布完成超45亿元融资，阿里巴巴、美团、腾讯、京东、传音及红杉中国、启明创投等参投，投后估值超220亿元。资金将用于核心技术与人才投入，推动通用机器人走向真实场景。",
                  "link": "https://www.tmtpost.com/nictation/8121278.html",
                  "tags": [
                    "融资",
                    "灵巧操作"
                  ],
                  "source": "钛媒体",
                  "time": "8月28日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "G20技术会议",
              "news": [
                {
                  "title": "黄仁勋、奥特曼、马斯克将出席G20技术会议",
                  "summary": "8月28日消息，下周美国将举行G20科技部长级会议，英伟达CEO黄仁勋、OpenAI CEO奥特曼、SpaceX CEO马斯克等将出席。美国拟推动成员国签署不具约束力的“卡罗来纳原则”，主张对AI采取轻监管路径。",
                  "link": "https://www.jiemian.com/article/15010920.html",
                  "tags": [
                    "AI监管",
                    "G20"
                  ],
                  "source": "界面新闻",
                  "time": "8月28日消息"
                }
              ]
            },
            {
              "title": "比尔·盖茨",
              "news": [
                {
                  "title": "比尔·盖茨：中美必须合作应对AI风险",
                  "summary": "8月26日，比尔·盖茨发表约6000字长文，警告AI正带人类进入“历史上最动荡的时期之一”，世界准备不足。他认为AI首次能替代甚至超越人类认知能力，美国和中国必须合作应对风险，并称中国在AI儿童保护方面“走得最远”。",
                  "link": "http://kjy4.china.com/shehui/13002708/20260828/49704595.html",
                  "tags": [
                    "AI风险",
                    "全球合作"
                  ],
                  "source": "中国网",
                  "time": "8月26日"
                }
              ]
            },
            {
              "title": "抖音STEPS",
              "news": [
                {
                  "title": "抖音与北大提出自触发式Agentic推送系统STEPS",
                  "summary": "8月29日消息，抖音与北大提出自触发式Agentic推送系统STEPS，入选RecSys 2026 Oral。系统由规划、执行、过滤三个智能体协作，自主决定推送时机，已在超10亿用户的抖音全量部署，计算开销降低79%。",
                  "link": "https://www.jiqizhixin.com/articles/2026-08-29-2",
                  "tags": [
                    "推荐系统",
                    "Agent"
                  ],
                  "source": "机器之心",
                  "time": "8月29日消息"
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
          "date": "2026-08-29",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Ox Alpha",
              "score": "25.2T tokens",
              "change": "↑>999%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.3T tokens",
              "change": "↑5%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "10.8T tokens",
              "change": "↑33%"
            },
            {
              "model": "Hy3",
              "score": "6.67T tokens",
              "change": "↑25%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "6.04T tokens",
              "change": "↑12%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "5.59T tokens",
              "change": "↑37%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.42T tokens",
              "change": "↑4%"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "3.93T tokens",
              "change": "↑164%"
            },
            {
              "model": "GLM 5.3 Flash",
              "score": "3.3T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.2",
              "score": "3.15T tokens",
              "change": "↑17%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "1.87T tokens",
              "change": "↑5%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.73T tokens",
              "change": "↑48%"
            },
            {
              "model": "Claude Opus 5",
              "score": "1.51T tokens",
              "change": "↑39%"
            },
            {
              "model": "Kimi K3",
              "score": "1.51T tokens",
              "change": "↑18%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.49T tokens",
              "change": "↑15%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.37T tokens",
              "change": "↑19%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.18T tokens",
              "change": "↑11%"
            },
            {
              "model": "GLM 5.3",
              "score": "1.16T tokens",
              "change": "↑306%"
            },
            {
              "model": "MiniMax M3 (free)",
              "score": "1.12T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4 Pro 0813",
              "score": "1.03T tokens",
              "change": "↑3%"
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
