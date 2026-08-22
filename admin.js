const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-22",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "GPT Image 2 API 预览透明背景生成，一键出 Alpha 通道 PNG",
              "summary": "8月21日消息，OpenAI宣布GPT Image 2 API开始预览透明背景生成功能。开发者可直接生成能叠加到不同背景上的可复用素材，用于产品图片、平面设计、网站原型和营销内容，一个参数即可输出带Alpha通道的PNG。官方模型页面显示，GPT Image 2可通过图像生成与图像编辑端点使用，并支持灵活的图像尺寸和高保真图像输入。同日LMArena上出现名为luna-lisa-alpha的匿名图像模型，测试者猜测可能与OpenAI下一代图像模型有关。",
              "link": "https://finance.sina.com.cn/stock/t/2026-08-21/doc-inipakuq1400338.shtml",
              "tags": [
                "图像生成",
                "API"
              ],
              "source": "新浪财经",
              "time": "8月21日消息"
            },
            {
              "title": "OpenAI下调GPT-5.6 Sol价格，API与Credit费用降幅超20%",
              "summary": "当地时间8月21日，OpenAI官方在开发者社区宣布，将在未来3个月内将旗舰模型GPT-5.6 Sol的API与Credit调用价格下调20%以上，API端即时生效并陆续向ChatGPT Work和Codex credits方案推送。标准输入从5美元降至4美元，标准输出从30美元降至20美元。OpenAI表示Sol优化了自身生产推理内核，将端到端服务成本削减约20%，支撑此次降价。市场视为OpenAI面对Anthropic及DeepSeek价格战压力的回应。",
              "link": "https://36kr.com/newsflashes/3950062675377280",
              "tags": [
                "定价",
                "价格战"
              ],
              "source": "36氪",
              "time": "当地时间8月21日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic目标估值2万亿美元IPO，或成史上最大IPO",
              "summary": "8月21日消息，据英国《金融时报》报道，多位Anthropic投资方透露，Anthropic最快将于今年10月挂牌上市，目标估值2万亿美元起步，部分投资人预期高达3万亿美元。若按2万亿美元发行估值落地，将超越今年6月SpaceX创下的1.77万亿美元IPO纪录，成为全球商业史上最大IPO。公司二季度实现调整后营业利润5.59亿美元，估值依据年底1000-1200亿美元年化收入计算，市销率约17-20倍。",
              "link": "https://www.tmtpost.com/8104736.html",
              "tags": [
                "IPO",
                "估值"
              ],
              "source": "钛媒体",
              "time": "8月21日消息"
            },
            {
              "title": "Anthropic挖来谷歌TPU创始负责人，加速自研芯片布局",
              "summary": "8月22日消息，Anthropic聘请谷歌定制芯片项目创始人之一阿米尔·萨莱克（Amir Salek）加入其计算团队，为进军自研半导体铺路。萨莱克此前主导交付前七代谷歌TPU芯片，被称为「谷歌TPU之父」，2022年离任后任私募机构Cerberus高级董事总经理。本月Anthropic已宣布组建内部Custom Silicon团队并开出最高48.5万美元年薪招芯片工程师，此前还挖来OpenAI自研芯片项目核心成员Clive Chan，芯片团队集齐谷歌TPU创始负责人与OpenAI自研芯片核心大牛。",
              "link": "https://news.qq.com/rain/a/20260822A01V4300",
              "tags": [
                "自研芯片",
                "人才"
              ],
              "source": "腾讯新闻",
              "time": "8月22日消息"
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
              "title": "英伟达据悉与韩国AI芯片创企Rebellions洽谈投资或收购",
              "summary": "8月21日消息，据彭博社报道，英伟达CEO黄仁勋在加州圣克拉拉总部会见韩国AI芯片设计公司Rebellions联合创始人兼CEO朴成铉，就潜在合作展开初步谈判，探讨涵盖技术合作、投资乃至全面收购等多种选项，目前处于非常早期阶段。Rebellions成立于2020年，是韩国「K-Nvidia计划」核心培育对象，已累计融资约8.5亿美元，估值约23亿美元，专注AI推理芯片。若达成交易，将是英伟达继7月入股Naver后在韩国AI生态的又一落子。",
              "link": "https://www.jiemian.com/article/14965012.html",
              "tags": [
                "AI芯片",
                "收购"
              ],
              "source": "界面新闻",
              "time": "8月21日消息"
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
              "title": "阿里重组业务架构，云智能与平头哥合并为AI云与算力服务",
              "summary": "8月20日消息，阿里巴巴公布截至6月30日的季度业绩，同步调整业务架构：国内与国际电商、盒马及菜鸟部分商业业务并入阿里电商集团；云智能集团与平头哥合并为「AI云与算力服务」；模型实验室、千问消费者业务、QwenWork组成「AI实验室与应用」。AI云与算力服务季度收入484.37亿元，AI相关产品收入连续第12个季度实现三位数增长，本季度资本开支增至676.78亿元，主要用于扩充AI基础设施。",
              "link": "https://finance.eastmoney.com/a/202608203848014751.html",
              "tags": [
                "组织架构",
                "云计算"
              ],
              "source": "东方财富",
              "time": "8月20日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包工作任务上线技能、连接器与工作伙伴，支持多Agent协同",
              "summary": "8月21日消息，豆包在电脑版「工作任务」模式中上线技能、连接器和「工作伙伴/小队」。用户可在侧边栏选择对应入口，把常用工作步骤、交付标准和参考模板整理成可重复调用的自定义技能；连接器用于在常用工具中查找信息并处理任务；「工作伙伴」则让用户按专业方向选择不同Agent，由它们协同分析问题、拆解步骤和完成交付。豆包称目前已上架超200个技能和连接器，这次更新把工作任务从单次问答扩展为可复用流程和多Agent协作。",
              "link": "https://tech.ifeng.com/c/8vlo4FIOYiM",
              "tags": [
                "Agent",
                "办公"
              ],
              "source": "凤凰网",
              "time": "8月21日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek上线多模态视觉模型V4-Flash-Vision-Exp",
              "summary": "8月21日消息，DeepSeek上线实验性视觉理解模型DeepSeek-V4-Flash-Vision-Exp并开放至API平台。该模型纯文本能力与DeepSeek-V4-Flash正式版持平，视觉理解能力大幅提升，多模态Agent能力已接近Opus-4.8，在官方公布的4项多模态Agent评测中，Agents' Last Exam和ZeroBench上高于Opus 4.8。API支持Chat Completions、Messages和Responses三种调用格式，可接收base64、外部URL与Files API三种图像输入。",
              "link": "https://news.qq.com/rain/a/20260821A0BGU500",
              "tags": [
                "多模态",
                "视觉理解"
              ],
              "source": "腾讯新闻",
              "time": "8月21日消息"
            },
            {
              "title": "DeepSeek Harness新增Codex与Claude Code子代理接口",
              "summary": "8月19日消息，DeepSeek Harness放出v0.1.0-rc.8版本，新增Codex、Claude Code等子代理接口。子代理子系统可把Codex、Claude Code、进程内Agent、ACP Agent和Harness SDK Agent注册为并列提供方，由主Agent统一调度，subagent-codex通过Codex app-server启动独立子进程，subagent-claude-code则调用Claude Agent SDK。这是Harness 8月13日开放开发者预览后的增量更新，重点从基础工作台扩展到跨Agent编排，打造AI Agent时代的核心调度层。",
              "link": "https://eu.36kr.com/zh/p/3947852851664512",
              "tags": [
                "Agent",
                "编排"
              ],
              "source": "36氪",
              "time": "8月19日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": []
        },
        {
          "name": "小米",
          "news": []
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "神秘Ox Alpha模型限免上架，DeepSWE跑分碾压Claude Fable 5",
              "summary": "8月22日消息，OpenRouter上线代号Ox Alpha的匿名AI模型，免费开放1周，上下文窗口约100万token，支持文本、图像和视频输入。开发者Ben Davis用DeepSWE基准10项任务测试，Ox Alpha平均通过率80%，高于Claude Fable 5的65%和GLM-5.3的62%。社区通过分词器指纹、视频编码器指纹等分析，线索强烈指向智谱AI，猜测为智谱尚未发布的GLM-5.3多模态版本，智谱此前曾用「Pony Alpha」匿名测试GLM-5。",
              "link": "https://m.ithome.com/html/993003.htm",
              "tags": [
                "大模型",
                "评测"
              ],
              "source": "IT之家",
              "time": "8月22日消息"
            }
          ]
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
              "title": "高剑林",
              "news": [
                {
                  "title": "腾讯芯片研发一号位高剑林离职，创业研发RISC-V AI CPU",
                  "summary": "8月21日消息，据「半导体行业观察」报道，腾讯芯片研发负责人高剑林近期离职，计划围绕高性能AI服务器和Agentic AI创业，研发基于RISC-V架构的高性能CPU。他2013年在腾讯组建硬件团队，推动FPGA云服务器、AI芯片和RISC-V核心研发，2020年蓬莱实验室团队完成腾讯首颗TPU架构AI芯片回片。目前创业仍属媒体独家消息，新公司名称、融资或产品发布时间尚未披露。",
                  "link": "https://www.donews.com/news/detail/1/6680021.html",
                  "tags": [
                    "RISC-V",
                    "创业"
                  ],
                  "source": "DoNews",
                  "time": "8月21日消息"
                }
              ]
            },
            {
              "title": "小红书",
              "news": [
                {
                  "title": "小红书开源dots3-note preview，支持512K多模态上下文",
                  "summary": "8月20日消息，小红书dots studio开源dots3-note preview，并在dots.ai开放平台提供API限时免费调用。它是dots3系列首个开放权重模型，采用混合专家架构，可同时接收文本、图像、视频和音频，输出文本，支持512K多模态上下文。官方提供BF16与FP8权重，主要面向知识问答、数学与逻辑推理、代码生成、工具调用、多步Agent工作流和长上下文处理，建议FP8版本部署在单台8卡GPU服务器上。",
                  "link": "https://finance.eastmoney.com/a/202608203847832630.html",
                  "tags": [
                    "开源",
                    "多模态"
                  ],
                  "source": "东方财富",
                  "time": "8月20日消息"
                },
                {
                  "title": "小红书发布FireRedTTS3：24种语言语音生成与编辑",
                  "summary": "8月21日消息，小红书FireRed团队发布新一代语音生成与编辑模型FireRedTTS3，用同一个模型打通语音三大能力：多语言多方言零样本音色克隆、自然语言描述定制声音设计、精准局部语音编辑。仅需几秒声音样本即可用你的音色说24种语言、21种中文方言，语音编辑精确到单个字、语速、音高。核心采用RedAE语音表示，推理延迟压至54毫秒，全部代码、模型、评测数据以Apache 2.0协议开源，音色克隆准确率和相似度在Seed-TTS-Eval上双料第一。",
                  "link": "https://m.163.com/dy/article/L4RQLATD0511AQHO.html",
                  "tags": [
                    "语音合成",
                    "开源"
                  ],
                  "source": "网易",
                  "time": "8月21日消息"
                }
              ]
            },
            {
              "title": "商汤",
              "news": [
                {
                  "title": "商汤开源SenseNova U1.5正式版，原生支持4K图像生成",
                  "summary": "8月20日消息，商汤开源SenseNova U1.5-8B-MoT正式版，原生支持4K图像生成。相较7月底发布的预览版，新权重继续改进复杂指令遵循、中英文文字渲染、海报和信息图布局、主体一致性及局部编辑。模型采用统一的多模态架构，可执行图像生成、编辑、视觉理解和图文交错生成，官方同时发布8步推理LoRA以降低生成延迟，并计划继续开放从监督微调、强化学习到MOPD的完整训练流程。",
                  "link": "https://tech.ifeng.com/c/8vlhCCo9O8J",
                  "tags": [
                    "开源",
                    "图像生成"
                  ],
                  "source": "凤凰网",
                  "time": "8月20日消息"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "苹果带摄像头AirPods参数曝光，或配备拍摄指示灯",
                  "summary": "8月22日消息，据MacRumors报道，苹果带摄像头的AirPods曝光更多参数，左右耳机或各配备一枚摄像头，可采集同步彩色静态图像供Visual Intelligence分析，目前不支持视频录制。代码显示主动模式可采集640×640图像并输出1024×1024处理结果，被动模式采集320×320图像，框架包含镜头畸变校正、双摄像头校准以及摄像头与运动传感器校准。代码同时提到硬件指示灯及亮度控制，暗示AirPods可能配备拍摄指示灯用于提示周围人员。此前曝光的B790版本据称已取消，苹果转向开发代号B798的新版本，预计明年推出。",
                  "link": "http://finance.sina.com.cn/tech/roll/2026-08-22/doc-inipazsi8023599.shtml",
                  "tags": [
                    "硬件",
                    "AI视觉"
                  ],
                  "source": "新浪财经",
                  "time": "8月22日消息"
                }
              ]
            },
            {
              "title": "雷鸟创新",
              "news": [
                {
                  "title": "雷鸟发布AI眼镜iO：34克双目显示，首发1996元起",
                  "summary": "8月21日消息，雷鸟创新发布AI眼镜雷鸟iO，正式售价2499元，首发到手价1996元起，即日起在京东、天猫、抖音及线下眼镜渠道开售。采用双目显示架构，等效33英寸画面，入眼亮度1800尼特，整机最低重量34克，支持两天日常续航和18小时连续记录。交互配有Smart Crown旋钮，并支持点头确认、摇头取消。眼镜不配备摄像头，主要通过4颗阵列麦克风和1颗骨传导麦克风处理会议记录、实时翻译和提词，翻译覆盖55种语言。",
                  "link": "http://www.news.cn/tech/20260821/1329d3f89e064ea1a60ee2a9c0aed9c3/c.html",
                  "tags": [
                    "AI眼镜",
                    "AR"
                  ],
                  "source": "新华网",
                  "time": "8月21日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉官网更新：监督版FSD支持地区不再包含中国",
                  "summary": "8月22日消息，特斯拉（北美）官网更新监督版FSD全球可用地区清单，更新后名单包含12个国家或地区，中国不在其中。2026年5月21日特斯拉曾宣布监督版FSD在中国等10个国家同步上线，如今距官宣仅约三个月，中国被移出可用地区列表。官网附注称若汽车在某国有售但FSD尚未推出，可能是需要当地监管机构明确批准，特斯拉正与各国政府合作。特斯拉官方未就此调整发布公开回应。",
                  "link": "https://news.qq.com/rain/a/20260822A09G9P00",
                  "tags": [
                    "自动驾驶",
                    "FSD"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月22日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": []
        },
        {
          "name": "AI出海",
          "cards": []
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "AiMOGA",
              "news": [
                {
                  "title": "奇瑞旗下机器人公司AiMOGA筹备IPO，明年目标交付1万台",
                  "summary": "8月20日消息，据路透社报道，奇瑞汽车旗下机器人公司AiMOGA正与多个潜在上市地沟通，希望通过IPO为后续技术投资筹集资金。奇瑞国际总裁张贵兵表示，公司自2025年1月孵化以来已在全球交付超3000台机器人，其中2000台交付海外，覆盖60多个国家和地区，明年的全球交付目标为1万台。公司早期把双足人形机器人投入奇瑞展厅，目前正扩展至交通管理、人群引导和公共安全宣传等场景，已有110台警务机器人在中国多个城市部署。",
                  "link": "https://finance.sina.com.cn/stock/hkstock/hkzmt/2026-08-20/doc-ininxkrs8043755.shtml",
                  "tags": [
                    "IPO",
                    "机器人"
                  ],
                  "source": "新浪财经",
                  "time": "8月20日消息"
                }
              ]
            },
            {
              "title": "Gravis Robotics",
              "news": [
                {
                  "title": "软银2亿美元独家投资建筑机器人公司Gravis Robotics",
                  "summary": "8月21日消息，瑞士建筑自动化企业Gravis Robotics宣布完成2亿美元A轮融资，由日本软银集团独家投资，创下建筑机器人领域A轮融资历史纪录。该公司2022年从苏黎世联邦理工学院机器人系统实验室分拆，开发与机械制造商无关的物理AI软件堆栈，通过后装改造将传统挖掘机、装载机等重型机械转化为自主作业设备，已适配卡特彼勒、约翰迪尔等超12个品牌。软银表示物理AI是其下一阶段AI愿景的核心，此前已签约以53.75亿美元收购ABB机器人业务。",
                  "link": "https://www.sfccn.com/2026/8-21/2NMDE1MjBfMjIxNjM2Ng.html",
                  "tags": [
                    "融资",
                    "机器人"
                  ],
                  "source": "世纪财经",
                  "time": "8月21日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "质量强链二期",
              "news": [
                {
                  "title": "市场监管总局：具身智能机器人等纳入质量强链二期攻关方向",
                  "summary": "8月21日消息，市场监管总局召开「推进实施质量强链」专题新闻发布会，质量强链二期十大标志性项目滚动部署166项攻关任务。布局延续高端仪器仪表、新能源、工业机器人等重点领域，拓展具身智能机器人、固态动力电池等新方向，新增工业母机、无人机、先进合成生物制造等重点领域。标准研制重点推动智能体、脑机接口、氢能等领域国际标准研制，统筹标准、计量、检验检测、认证认可等质量基础设施全链条要素。",
                  "link": "https://www.thepaper.cn/newsDetail_forward_33824953",
                  "tags": [
                    "政策",
                    "具身智能"
                  ],
                  "source": "澎湃新闻",
                  "time": "8月21日消息"
                }
              ]
            },
            {
              "title": "vibe coding",
              "news": [
                {
                  "title": "青少年开发者用Claude Code为惠普打印机开发macOS原生驱动",
                  "summary": "8月21日消息，19岁印度青少年开发者Kuber Mehta利用Anthropic的Claude Code编程智能体，在约4小时、30-40轮提示词内，为惠普HP Laser 1003/1006/1008系列打印机（使用三星专有SPL3光栅语言的贴牌机型）成功逆向开发出macOS原生驱动。他先运行惠普Linux驱动专有编解码器获取基准输出，与开源引擎SpliX逐字段比对，最终仅修改约10行代码修复300-dpi几何计算，脱离惠普专有组件完成开发，项目已在GitHub开源。该成果推文获超300万次浏览。",
                  "link": "https://tech.ifeng.com/c/8vmADQviteW",
                  "tags": [
                    "AI编程",
                    "vibe coding"
                  ],
                  "source": "凤凰网",
                  "time": "8月21日消息"
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
          "date": "2026-08-21",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.7T tokens",
              "change": "↑7%"
            },
            {
              "model": "Hy3",
              "score": "8.93T tokens",
              "change": "↑17%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "8.18T tokens",
              "change": "↑103%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "5.41T tokens",
              "change": "↑5%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.2T tokens",
              "change": "↑6%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "4.08T tokens",
              "change": "↑111%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.79T tokens",
              "change": "↑6%"
            },
            {
              "model": "Claude Opus 5",
              "score": "2.47T tokens",
              "change": "↑45%"
            },
            {
              "model": "Ox Alpha",
              "score": "2T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "1.96T tokens",
              "change": "↑30%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.76T tokens",
              "change": "↑13%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.7T tokens",
              "change": "↑3%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "1.59T tokens",
              "change": "↑11%"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "1.49T tokens",
              "change": "↑975%"
            },
            {
              "model": "Kimi K3",
              "score": "1.28T tokens",
              "change": "↑13%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.17T tokens",
              "change": "↑70%"
            },
            {
              "model": "DeepSeek V4 Pro 0813",
              "score": "1.07T tokens",
              "change": "↑219%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.07T tokens",
              "change": "—"
            },
            {
              "model": "Nemotron 3.5 Lightning (free)",
              "score": "895B tokens",
              "change": "↑140%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "845B tokens",
              "change": "↑2%"
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
