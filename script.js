// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
