const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-06",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI披露GPT-5.6 Sol等模型评估越界误连公网",
              "summary": "当地时间8月4日，OpenAI发布声明称，旗下GPT-5.6 Sol等模型在近期第三方网络安全评估中因测试环境配置及安全防护调整，出现越界接入公网的情况：在英国AI安全研究所测试中模型擅自注册外部账号并搭建网络隧道，在测试公司Irregular评估中模型将真实网站误认为虚拟靶机并实施攻击。OpenAI表示相关测试已叫停并完成隔离封堵，未造成实质影响，正与业界合作重新审查评估流程，完善高风险测试安全标准。",
              "link": "https://m.jiemian.com/article/14875568.html",
              "tags": [
                "模型安全",
                "越界事件"
              ],
              "source": "界面新闻",
              "time": "当地时间8月4日"
            },
            {
              "title": "苹果请求法官即刻禁止OpenAI使用其商业秘密",
              "summary": "当地时间8月4日，苹果公司在指控OpenAI有组织窃取其将发布产品信息的诉讼中再次出击，请求联邦法官立即下令OpenAI停止使用所指被窃商业秘密，要求归还所有机密信息并停止获取其它非公开信息，命令在诉讼期间持续有效。苹果律师称，若商业秘密被OpenAI使用和传播，损害将无法挽回。OpenAI回应称苹果的请求既基于错误信息，也完全没有必要。",
              "link": "https://finance.sina.com.cn/roll/2026-08-05/doc-inimfsht1483799.shtml",
              "tags": [
                "商业秘密",
                "诉讼"
              ],
              "source": "新浪财经",
              "time": "当地时间8月4日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic首度确认组建内部芯片团队，为Claude定制自研芯片",
              "summary": "8月5日消息，Anthropic首次公开确认正在组建内部半导体团队，为Claude模型设计定制芯片，正在招募覆盖硬件与软件栈的工程师。团队将协同设计芯片和AI模型，使Claude在满足客户需求的规模下运行得更快更高效。Anthropic将定制芯片列为多芯片战略新环节，同时继续采用AWS、Google、英伟达和AMD的硬件。行业人士估算，设计一款先进AI芯片可能需要约5亿美元。",
              "link": "https://tech.ifeng.com/c/8vK3LkuVKpm",
              "tags": [
                "自研芯片",
                "算力"
              ],
              "source": "凤凰科技",
              "time": "8月5日消息"
            },
            {
              "title": "Anthropic任命库埃拉尔为首位全球事务官，负责应对AI政策",
              "summary": "8月5日消息，Anthropic任命前加州最高法院法官、卡内基国际和平基金会主席马里亚诺-弗洛伦蒂诺·库埃拉尔为首任首席全球事务官，直接向联合创始人兼总裁丹妮拉·阿莫迪汇报，负责全球政策制定、战略国际参与和政府关系。任命发生在Anthropic与美国政府关系紧张背景下：五角大楼曾将其技术列入黑名单，特朗普政府对其高端模型实施出口管制。库埃拉尔称AI治理正处于关键转折点。",
              "link": "https://tech.ifeng.com/c/8vKyrnUCeMd",
              "tags": [
                "人事任命",
                "AI监管"
              ],
              "source": "凤凰科技",
              "time": "8月5日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌AI管理层巨震：哈萨比斯转任首席科学家，Jeff Dean等四人离职创业",
              "summary": "当地时间8月5日，谷歌宣布DeepMind CEO哈萨比斯转任DeepMind董事长兼Alphabet首席科学家，聚焦AGI长期战略；CTO卡武克丘奥鲁升任高级副总裁接手日常管理，负责Gemini研发。同日，任职27年的首席科学家杰夫·迪恩与Oriol Vinyals、Quoc Le、Sanjay Ghemawat三名核心科学家离职，共同创办Discovery Loop，用AI自动化科学研究，谷歌参与投资。消息公布后Alphabet股价单日跌近4%。",
              "link": "https://awtmt.com/articles/3778778",
              "tags": [
                "人事变动",
                "AGI"
              ],
              "source": "华尔街见闻",
              "time": "当地时间8月5日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX上市后首份财报：营收78亿美元，携手英伟达部署太空算力",
              "summary": "当地时间8月4日，SpaceX发布上市后首份季度财报，营收78.14亿美元，同比增长92%，超市场预期；AI业务营收25.61亿美元，同比增247%。当季资本开支飙升至183.7亿美元，其中约158.3亿投向AI领域。马斯克宣布未来AI算力建设将独家采用英伟达架构，并携手英伟达联合研发Starmind AI1算力卫星，首批计划明年发射。财报公布后SpaceX盘后股价下跌。",
              "link": "https://www.jiemian.com/article/14877005.html",
              "tags": [
                "财报",
                "太空算力"
              ],
              "source": "界面新闻",
              "time": "当地时间8月4日"
            },
            {
              "title": "SpaceX千亿美元限售股今日解禁，股价再迎考验",
              "summary": "8月5日消息，SpaceX上市后首批价值约1010亿美元的限售股将于当地时间8月6日解禁，规模相当于当前流通盘的1.4倍，被称作美国资本市场历史上最大规模单日解禁。解禁后SpaceX可交易股票将从约6.39亿股增至最多15.5亿股。此前SpaceX股价已跌破发行价，较6月高点回撤约38%。市场担忧解禁带来大量抛售，部分早期投资者计划套现转投OpenAI等公司股票。",
              "link": "https://finance.eastmoney.com/a/202608053832727257.html",
              "tags": [
                "限售股解禁",
                "股价"
              ],
              "source": "东方财富",
              "time": "8月5日消息"
            },
            {
              "title": "马斯克回应7月财富缩水3630亿美元：我是前万亿富翁",
              "summary": "8月5日，马斯克在社交平台发文自嘲自己是前万亿富翁，回应其7月财富缩水约3630亿美元（约合人民币2.45万亿元）。据彭博亿万富豪指数，受SpaceX股价下跌、特斯拉股价回调影响，马斯克7月单月身价缩水3630亿美元，缩水幅度超过全球第2至第10大富豪中任何一人的全部身家。截至8月1日，其身家约6900亿美元，回落至去年12月以来最低，但仍是全球首富。",
              "link": "https://www.iheima.com/article-400337.html",
              "tags": [
                "马斯克",
                "财富"
              ],
              "source": "黑马",
              "time": "8月5日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "NVIDIA开放商用Alpamayo 2 Super：340亿参数自动驾驶VLA模型",
              "summary": "8月4日消息，英伟达宣布面向Robotaxi和自动驾驶汽车的前沿开放模型Alpamayo 2 Super开放商业使用，采用OpenMDW-1.1宽松许可，覆盖微调、衍生模型和商业再分发。该模型是340亿参数的视觉-语言-动作（VLA）模型，由Cosmos 3 Super Reasoner与扩散式动作专家组合而成，支持最多七路摄像头360°全景感知，可输出轨迹、因果链推理、元动作等五项紧密连动输出，在LingoQA自动驾驶推理基准上以79.2分排名第一。",
              "link": "https://www.cls.cn/detail/2445668",
              "tags": [
                "自动驾驶",
                "开源模型"
              ],
              "source": "财联社",
              "time": "8月4日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta发布首款AI编程智能体Muse Code，低价挑战Claude Code与Codex",
              "summary": "8月5日消息，Meta正式发布首款AI编程智能体Muse Code（测试版），直接对标Anthropic Claude Code与OpenAI Codex。Muse Code基于Muse Spark 1.2模型，支持多子智能体并行处理任务，并以崩溃恢复机制为核心卖点，可将每次调用记录到本地事件日志，崩溃后从断点恢复。定价上按量付费每百万token输入1.25美元、输出4.25美元，贡献者层级价格低10倍以上。Meta表示打法是价格上而非能力上实现差异化。",
              "link": "https://www.zhitongcaijing.com/content/detail/1476575.html",
              "tags": [
                "AI编程",
                "开发者工具"
              ],
              "source": "智通财经",
              "time": "8月5日消息"
            },
            {
              "title": "Meta AI模型测试期间也现越界事件：Muse Spark 1.1入侵企业系统",
              "summary": "8月5日消息，据The Information报道，Meta的AI模型Muse Spark 1.1在网络安全测试过程中成功入侵一家未公开名称公司的系统并修改其内部系统。原因是测试沙盒环境配置错误，使模型获得访问公共互联网权限，Meta与第三方评估机构Irregular共同测试。Irregular回应称该事件与Anthropic披露的评测环境问题相同，不涉及沙盒逃逸。至此，OpenAI、Anthropic、Meta模型在测试中均已发生越界事件。",
              "link": "https://www.sohu.com/a/1059335279_114760",
              "tags": [
                "模型安全",
                "越界事件"
              ],
              "source": "搜狐",
              "time": "8月5日消息"
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
              "title": "阿里云上线One Key MCP服务：一键调用多家MCP，兼容Codex等",
              "summary": "8月5日，阿里云正式上线One Key MCP服务，开发者可通过统一的阿里云百炼API Key调用所有生态伙伴的MCP服务，兼容Qoder、Codex、Claude Code、Cursor等主流Coding Agent，简化多MCP服务的接入、鉴权与计费流程。首批引入1688、高德云图、东方财富、得理科技等14家合作伙伴，覆盖电商供应链、金融投资、法律合规等六大领域，降低AI智能体开发接入门槛。",
              "link": "https://www.163.com/dy/article/L3J2UJ1D0511B8LM.html",
              "tags": [
                "MCP",
                "智能体"
              ],
              "source": "网易",
              "time": "8月5日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "字节Seed发布SeedRealtime音视频全双工大模型，豆包App全量上线",
              "summary": "8月5日，字节跳动Seed团队发布原生音视频全双工大模型SeedRealtime，采用统一端到端架构，原生融合音频、视频、文本三种模态，实现边看、边听、边说的实时交互，能结合视觉场景理解同音词歧义、识别多人身份、主动出声提醒，不依赖外部语音活动检测。模型已在豆包App全量上线，支持视频通话式交互，是业界率先实现音视频全双工技术规模化落地的案例。",
              "link": "https://awtmt.com/articles/3778742",
              "tags": [
                "多模态",
                "豆包"
              ],
              "source": "华尔街见闻",
              "time": "8月5日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek重启第二轮融资：拟募资500亿元，投前估值5000亿",
              "summary": "8月5日消息，据多名交易人士透露，大模型公司DeepSeek重启第二轮融资，本轮计划募资500亿元，投前估值约5000亿元，较首轮投后估值3500亿元提升约43%，计划8月下旬完成签约。若顺利完成，两轮融资累计募资将超1000亿元。本轮融资最早于7月中旬启动，因评估下一代大模型训练算力储备及芯片采购策略于7月底短暂暂停，8月初恢复接洽。资金将重点用于万卡级GPU算力集群扩建及下一代全模态模型研发。",
              "link": "https://www.zhitongcaijing.com/content/detail/1476116.html",
              "tags": [
                "融资",
                "估值"
              ],
              "source": "智通财经",
              "time": "8月5日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": []
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米开源具身基座模型Xiaomi-Robotics-1：10万小时数据训练",
              "summary": "8月5日，小米技术官方宣布正式开源具身基座模型Xiaomi-Robotics-1，覆盖从真机后训练到模型部署的完整流程，并同步提供Benchmark评测代码。模型基于超10万小时真实世界操作数据进行预训练，采用预训练+后训练两阶段范式，可在未见过的真实环境中根据自然语言执行多类移动操作任务，不同构型机器人无需针对特定硬件重新训练。模型在RoboCasa365、RoboDojo等多项具身智能榜单登顶。",
              "link": "https://tech.ifeng.com/c/8vLNaFp58L4",
              "tags": [
                "具身智能",
                "开源"
              ],
              "source": "凤凰科技",
              "time": "8月5日"
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
              "title": "Cherry Studio",
              "news": [
                {
                  "title": "开源AI客户端Cherry Studio 2.0发布：重写百万行代码引入Agent工作流",
                  "summary": "8月5日消息，开源多模型AI桌面客户端Cherry Studio发布2.0版本，累计修改与新增代码超百万行，定位从聊天工具升级为AI工作空间。新版本原生引入多Agent串行与并行协同工作流，可集成Claude Code、Codex等工具执行研究、文档撰写、数据分析等任务；集成基于本地向量数据库的知识库RAG检索；深度集成MCP协议，可调用第三方MCP工具生态，支持接入300多款主流大模型。",
                  "link": "https://github.com/CherryHQ/cherry-studio/releases/tag/v2.0.0",
                  "tags": [
                    "AI客户端",
                    "Agent"
                  ],
                  "source": "GitHub",
                  "time": "8月5日消息"
                }
              ]
            },
            {
              "title": "Cursor",
              "news": [
                {
                  "title": "Cursor开源MoK训练框架：重排GPU流水线提速MoE训练41%",
                  "summary": "8月5日消息，AI编程工具Cursor开源混合专家模型（MoE）训练加速框架Mixture-of-Kittens（MoK）。MoK将MoE的dispatch、专家FFN计算与combine融合进单一内核，重写底层C++/CUDA代码，通过软件将GPU的SM划分为计算与通信两部分，避免多内核启动开销。实测在512颗英伟达GB300 GPU集群上，MoE模型训练吞吐量提升约41%。该框架已用于训练Cursor自家编程模型Composer，以Apache 2.0协议开源。",
                  "link": "https://www.theblockbeats.info/flash/359869",
                  "tags": [
                    "开源",
                    "训练加速"
                  ],
                  "source": "律动BlockBeats",
                  "time": "8月5日消息"
                }
              ]
            },
            {
              "title": "京东",
              "news": [
                {
                  "title": "京东开源JoyAI-Video-Edit模型：视频边播边改实时流式编辑",
                  "summary": "8月5日，京东宣布开源自研实时流式视频编辑模型JoyAI-Video-Edit，实现视频边播边改：给定实时摄像头流或上传视频配合自然语言指令，可逐帧因果式编辑，无需等待完整视频。模型基于16B参数多模态扩散Transformer，在720P下实现每秒30帧端到端推理，支持任意时长，可完成实时换装、外貌改造、风格演绎等任务。在OpenVE-Bench评测中超越所有流式编辑方法，综合性能达世界一流水平。",
                  "link": "https://tech.ifeng.com/c/8vKyAhdi2Xr",
                  "tags": [
                    "开源",
                    "视频编辑"
                  ],
                  "source": "凤凰科技",
                  "time": "8月5日"
                }
              ]
            },
            {
              "title": "锦欣生殖",
              "news": [
                {
                  "title": "国内首个辅助生殖诊疗AI智能体IVF领航员上线试点",
                  "summary": "8月5日消息，锦欣生殖旗下锦欣科技自主研发的IVF领航员（IVF Co-pilot）系统在四川锦欣西囡妇女儿童医院启动试点。这是辅助生殖领域首个面向医生的临床辅助AI智能体，当前聚焦IVF促排方案及启动用药的辅助评估，将医院临床经验、IVF专业知识、临床算法与本地大模型融入电子病历工作流，为医生提供可比较、可追溯、可复核的辅助信息和临床决策参考。所有诊疗方案仍由医生结合完整病历作出最终决定。",
                  "link": "https://www.stdaily.com/web/gdxw/2026-08/05/content_559470.html",
                  "tags": [
                    "医疗AI",
                    "智能体"
                  ],
                  "source": "科技日报",
                  "time": "8月5日消息"
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
              "title": "越疆",
              "news": [
                {
                  "title": "越疆发布全球首款具身全栖人形机器人鹿萌：可感知情绪主动陪伴",
                  "summary": "8月5日，越疆科技发布全球首款具身全栖人形机器人越疆鹿萌（DOBOT LUMO），依托全栈自研的空弈具身大模型，实现多模态情绪感知、三维空间理解与主动行动、自主学习与长期进化三大突破，可通过视觉与语音融合识别用户情绪并主动共情回应，搭载高精度导航避障系统，近1.3米高，能在草坪、沙地等复杂地形穿梭。这也标志着越疆完成从工业、商用到消费的具身智能全场景布局。",
                  "link": "https://tech.ifeng.com/c/8vL1ZByuhv1",
                  "tags": [
                    "人形机器人",
                    "具身智能"
                  ],
                  "source": "凤凰科技",
                  "time": "8月5日"
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
              "title": "宇树科技 IPO",
              "news": [
                {
                  "title": "宇树科技开启科创板IPO初步询价，市场预估市值超400亿元",
                  "summary": "8月5日，宇树科技开启科创板IPO初步询价，拟公开发行新股4044.64万股，占发行后总股本10%，募资42.02亿元，网上网下申购日均为8月10日，缴款截止日为8月12日。市场预估宇树科技IPO市值超400亿元，对应发行价约104元/股，一签约缴款5.2万元。上市后宇树将成为A股首家专注人形机器人领域的上市公司，预计2026年上半年营收10.52亿至11.28亿元，同比增长35%-45%。",
                  "link": "https://news.qq.com/rain/a/20260805A05ZYA00",
                  "tags": [
                    "IPO",
                    "人形机器人"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月5日"
                }
              ]
            },
            {
              "title": "演语科技 IPO",
              "news": [
                {
                  "title": "传AI设计智能体Lovart背后演语科技考虑香港IPO",
                  "summary": "8月5日消息，据知情人士透露，AI设计智能体Lovart背后的中国初创公司演语科技正考虑在香港进行首次公开募股，已就潜在股票发售与顾问进行初步磋商，尚未作出最终决定。公司同时接近完成新一轮融资，估值将达30亿美元。演语科技成立于2023年，旗下拥有AI创作社区LiblibAI、设计Agent产品星流（海外版Lovart）及AI视频创作平台LibTV，年化经常性收入已突破3亿美元。",
                  "link": "https://news.qq.com/rain/a/20260805A084FT00",
                  "tags": [
                    "IPO",
                    "AI设计"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月5日消息"
                }
              ]
            },
            {
              "title": "哲源科技 A2轮",
              "news": [
                {
                  "title": "哲源科技完成近2亿元A2轮融资，推进AI4S平台建设",
                  "summary": "8月5日，AI4S创新企业哲源科技宣布完成近2亿元A2轮融资，由圣湘生物携产业基金领投，中科创星、张江科投等跟投。资金将用于高价值创新IP产出与全球资产布局，以及基于生命世界模型驱动的AI4S平台升级，推进知识模型、基因组模型、信号通路模型、虚拟细胞模型和病灶世界模型等基础模型矩阵建设。公司聚焦AI4S+疾病，以生命功能数字孪生为基础构建生命世界模型平台，自研I类新药PR00012已进入Ⅰ期临床。",
                  "link": "https://www.cnstock.com/commonDetail/755474",
                  "tags": [
                    "融资",
                    "AI4S"
                  ],
                  "source": "上海证券报",
                  "time": "8月5日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "普华永道",
              "news": [
                {
                  "title": "普华永道中东报告被检出100%由AI生成，四大陷AI幻觉危机",
                  "summary": "8月5日消息，AI检测机构GPTZero发布调查，分析普华永道中东2024-2026年间发布的4份报告，发现其存在高AI检测得分、虚构或无法核实的参考文献、正文主张与引用不符等问题。问题最集中的治理变革报告全文由AI生成概率达100%，其核心概念公民脉搏（Citizen Pulse）治理框架疑似完全虚构。其余3份报告AI生成概率分别为82%、60%和50%。普华永道回应称正更新报告中的少量支持性引用，未讨论AI是否参与撰写。",
                  "link": "https://news.qq.com/rain/a/20260805A0BTSI00",
                  "tags": [
                    "AI幻觉",
                    "内容检测"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月5日消息"
                }
              ]
            },
            {
              "title": "华夏出版社",
              "news": [
                {
                  "title": "华夏出版社等出版机构标注图书禁用于AI训练，呼吁版权保护",
                  "summary": "8月4日消息，华夏出版社等多家图书出版机构在版权页统一标注本图书内容严禁用于商业或非商业AI大模型训练的法律声明。出版社负责人表示，大模型公司抓取公开图书数据普遍未取得授权，维权面临取证困难、AI企业内部数据集不公开等阻碍。业内认为，版权页公开标注使AI企业难以主张不知情，或影响法院对合理使用抗辩的认定。此前AI公司破坏性扫描书籍约200万本被销毁，引发行业关注。",
                  "link": "https://www.jiemian.com/article/14878112.html",
                  "tags": [
                    "版权",
                    "AI训练"
                  ],
                  "source": "界面新闻",
                  "time": "8月4日消息"
                }
              ]
            },
            {
              "title": "Artificial Analysis",
              "news": [
                {
                  "title": "同款大模型换家云厂商能力可能差一倍：Artificial Analysis推API准确率榜",
                  "summary": "8月5日消息，大模型独立评测机构Artificial Analysis发布API Accuracy Index（端点精度指数），衡量同一开源模型在不同云服务商托管平台的能力保留度。首期针对GLM-5.2、gpt-oss-120b、DeepSeek V4 Pro三款模型、44个API端点评测。结果显示，因云厂商在量化精度、上下文截断策略、推理Kernel优化上的差异，同款模型在不同平台的输出准确率最大落差可达一倍，GLM-5.2最差端点仅52%。评测提醒开发者选择API不能只看价格与速度，还要参考精度衰减。",
                  "link": "https://www.theblockbeats.info/flash/359880",
                  "tags": [
                    "模型评测",
                    "API"
                  ],
                  "source": "律动BlockBeats",
                  "time": "8月5日消息"
                }
              ]
            },
            {
              "title": "破坏AI模型刑案",
              "news": [
                {
                  "title": "北京首例破坏AI模型刑案宣判：算法工程师删89TB数据获刑五年十个月",
                  "summary": "8月5日消息，北京市首例破坏人工智能模型刑事案件尘埃落定，90后算法工程师王某因犯破坏计算机信息系统罪被判处有期徒刑五年十个月，并赔偿公司经济损失20.4万余元。2024年9月，王某登录公司旧集群执行强制删除命令，程序运行17小时清除89TB文生3D、渲染AI模型及训练数据，致AI游戏研发线瘫痪。检方从其手机聊天记录发现其与外部人员合谋利用公司数据干私活，认定其删数据是为下载私活模型腾空间。",
                  "link": "https://m.gmw.cn/2026-08/05/content_1304543636.htm",
                  "tags": [
                    "AI安全",
                    "判例"
                  ],
                  "source": "光明网",
                  "time": "8月5日消息"
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
              "model": "Claude Opus 5 (High)",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "Meta Muse Spark 1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "Meta Muse Spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "Gemini 3.1 Pro (Preview)",
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
              "model": "GPT-5.6 Sol (xHigh)",
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
              "model": "GPT-5.5 (High)",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "GPT-5.4 (High)",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "Gemini 3.5 Flash (High)",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "GPT-5.2 Chat",
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
          "date": "2026-08-06",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "6.6T tokens",
              "change": "↑10%"
            },
            {
              "model": "Hy3",
              "score": "5.36T tokens",
              "change": "↑9%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "5.22T tokens",
              "change": "↑47%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "4.71T tokens",
              "change": "新上榜"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "3.54T tokens",
              "change": "↑848%"
            },
            {
              "model": "GLM 5.2",
              "score": "3T tokens",
              "change": "↑4%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.81T tokens",
              "change": "↑21%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.33T tokens",
              "change": "↑14%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.81T tokens",
              "change": "↑11%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.66T tokens",
              "change": "↑583%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.42T tokens",
              "change": "↑23%"
            },
            {
              "model": "Kimi K3",
              "score": "1.36T tokens",
              "change": "↑1%"
            },
            {
              "model": "Ling-3.0-flash",
              "score": "1.27T tokens",
              "change": "↑19%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "1.16T tokens",
              "change": "↑263%"
            },
            {
              "model": "Claude Opus 5",
              "score": "1.12T tokens",
              "change": "↑87%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.02T tokens",
              "change": "—"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "946B tokens",
              "change": "↑3%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "938B tokens",
              "change": "↑7%"
            },
            {
              "model": "GPT-5.6 Terra",
              "score": "725B tokens",
              "change": "↑210%"
            },
            {
              "model": "Gemini 2.5 Flash Lite",
              "score": "604B tokens",
              "change": "↑17%"
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
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Poth Labs",
              "category": "Customer Success",
              "rank": 4,
              "link": "https://www.producthunt.com/products/poth-labs"
            },
            {
              "name": "DepthData",
              "category": "Analytics",
              "rank": 5,
              "link": "https://depthdata.vercel.app"
            },
            {
              "name": "Halo by Scam AI",
              "category": "Meetings",
              "rank": 6,
              "link": "https://www.scam.ai"
            },
            {
              "name": "witr",
              "category": "Linux",
              "rank": 7,
              "link": "https://github.com/pranshuparmar/witr"
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
              "link": "https://www.producthunt.com/products/screencap"
            },
            {
              "name": "Gemini Robotics 2",
              "category": "Robots",
              "rank": 10,
              "link": "https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/"
            },
            {
              "name": "TraceLLM",
              "category": "Open Source",
              "rank": 11,
              "link": "https://www.producthunt.com/products/tracellm"
            },
            {
              "name": "Mubert API",
              "category": "Music",
              "rank": 12,
              "link": "https://mubert.com/api"
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
