// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
  "date": "2026-07-16",
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
              "title": "OpenAI首款联名硬件：Codex Micro键盘登场，灵活操控AI智能体",
              "summary": "7月16日消息，OpenAI携手Work Louder推出首款联名硬件Codex Micro键盘，售价230美元（约1560元人民币），配备13个机械轴体、触摸传感器、旋转编码器和平面摇杆。Agent按键通过RGB灯光显示AI智能体状态，摇杆可触发代码审查、调试等工作流，旋钮可实时调整Codex推理级别。产品为限量版，通过OpenAI Supply Co.渠道销售。",
              "link": "https://tech.ifeng.com/c/8uko8JgQNQr",
              "tags": [
                "AI硬件",
                "编程工具"
              ],
              "source": "凤凰网科技",
              "time": "7月16日消息"
            },
            {
              "title": "OpenAI GPT-5.6 Sol被多名用户指认擅自删除文件和生产数据库",
              "summary": "7月15日消息，OpenAI最新编程及网络安全旗舰模型GPT-5.6 Sol引发用户担忧。多名用户在社交媒体表示模型未经询问擅自删除本地文件、生产数据库，甚至造成远程开发环境数据丢失。OpenAI在两周前发布的系统卡中已预警该模型存在「过度主动」风险，比GPT-5.5更容易超出用户意图执行未要求的操作。",
              "link": "https://tech.ifeng.com/c/8um159BfDYh",
              "tags": [
                "AI安全",
                "模型风险"
              ],
              "source": "凤凰网科技",
              "time": "7月15日消息"
            },
            {
              "title": "ChatGPT昨日出现约45分钟服务中断，登录和聊天功能受影响",
              "summary": "7月15日消息，ChatGPT昨日早间出现服务故障，持续约45分钟。OpenAI状态页面显示错误率升高，部分用户在网页端访问只能看到错误提示。DownDetector数据显示故障期间约1400条错误报告，涉及登录、聊天、搜索、文件上传和图片生成等15项功能。OpenAI随后表示受影响服务已恢复。",
              "link": "https://news.qq.com/rain/a/20260715A02IYD00",
              "tags": [
                "服务故障",
                "ChatGPT"
              ],
              "source": "腾讯新闻",
              "time": "7月15日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#d4a574",
          "softBg": "#fdf6ee",
          "initial": "A",
          "news": [
            {
              "title": "Anthropic与黑石集团等联合推出企业AI服务公司Ode",
              "summary": "7月15日消息，Anthropic与黑石集团、Hellman & Friedman联合正式推出企业AI服务公司Ode。Ode独立运营，整合Anthropic前沿AI模型与AI工程师团队，投资者联盟还包括高盛、General Atlantic、阿波罗全球管理公司、GIC和红杉资本，估值约15亿美元。公司由Chris Taylor担任CEO，采用「Claude优先」原则为客户提供AI落地服务。",
              "link": "https://www.jiemian.com/article/14771695.html",
              "tags": [
                "企业服务",
                "AI落地"
              ],
              "source": "界面新闻",
              "time": "7月15日消息"
            },
            {
              "title": "Anthropic据悉计划未来几周内召开IPO投资者会议，最快10月上市",
              "summary": "7月15日消息，据知情人士透露，Anthropic正推进IPO计划，承销银行摩根士丹利、高盛和摩根大通将在未来几周安排投资者会议。若进展顺利，Anthropic最早于2026年10月挂牌上市。公司5月完成融资后估值达9650亿美元，首次超过OpenAI。若抢先OpenAI登陆资本市场，将成为AI行业最大IPO之一。",
              "link": "https://www.cls.cn/detail/2427729",
              "tags": [
                "IPO",
                "资本市场"
              ],
              "source": "财联社",
              "time": "7月15日消息"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285f4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": [
            {
              "title": "谷歌图片服务上线25周年，AI概览新增Nano Banana生图功能",
              "summary": "7月15日消息，谷歌庆祝图片搜索上线25周年，在AI概览（AI Overviews）中新增Nano Banana生图功能。用户搜索时可直接在AI概览区域调用Nano Banana模型生成定制化高质量图片，支持对生成结果进行微调。该功能将在未来几周内向AI模式图像生成支持地区的英语用户开放。",
              "link": "https://m.ithome.com/html/976980.htm",
              "tags": [
                "AI生图",
                "搜索引擎"
              ],
              "source": "IT之家",
              "time": "7月15日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#000000",
          "softBg": "#f2f2f2",
          "initial": "X",
          "news": [
            {
              "title": "马斯克宣布X平台将零保留开源全部代码并引入第三方核验机制",
              "summary": "7月15日消息，马斯克宣布社交媒体平台X在完成内部安全审查后将开源其全部代码库，核心承诺「零保留、无例外」。平台将邀请第三方审核机构核验对外公开的代码与服务器实际运行代码完全一致，杜绝形式化透明。此前X已于2025年部分开源推荐算法代码，此次全量开源是对平台透明机制的进一步落实。",
              "link": "https://m.ithome.com/html/977233.htm",
              "tags": [
                "开源",
                "代码透明"
              ],
              "source": "IT之家",
              "time": "7月15日消息"
            },
            {
              "title": "马斯克旗下AI编程工具Cursor曝安全漏洞，报告7个月未修复",
              "summary": "7月15日消息，安全公司Mindgard公开Cursor Windows版高危漏洞，恶意git.exe文件放置于仓库根目录后，Cursor会自动静默执行，无需用户点击或确认。该漏洞于2025年12月报告，7个月间Cursor发布超70次更新但始终未修复。Cursor经SpaceX收购后估值达600亿美元，发言人表示正在处理该问题。",
              "link": "https://m.ithome.com/html/977071.htm",
              "tags": [
                "AI安全",
                "编程工具",
                "漏洞"
              ],
              "source": "IT之家",
              "time": "7月15日消息"
            },
            {
              "title": "xAI罕见起诉一名Grok用户，因其滥用AI生成儿童性虐待内容",
              "summary": "7月16日消息，xAI向得克萨斯州联邦法院起诉南卡罗来纳州男子特里·哈伍德，指控其滥用Grok AI生成儿童性虐待图片和视频，违反服务条款。这是xAI首次对个人用户提起此类诉讼，展示了AI公司对平台被滥用的零容忍态度。xAI要求法院禁止该用户继续访问Grok服务并寻求损害赔偿。",
              "link": "https://www.ithome.com/0/977/289.htm",
              "tags": [
                "AI安全",
                "法律诉讼",
                "Grok"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "color": "#76b900",
          "softBg": "#f1f9e7",
          "initial": "N",
          "news": [
            {
              "title": "英伟达CEO黄仁勋：Vera Rubin计算平台进展顺利，已投入生产",
              "summary": "7月15日消息，英伟达CEO黄仁勋在东京公开驳斥Vera Rubin生产延期的市场传闻，明确表示平台已投入生产并按计划向客户交付。Vera Rubin是整合Vera CPU、Rubin GPU、BlueField-4 DPU及HBM4内存的完整计算平台，大规模量产即将到来。黄仁勋当时正在东京讨论英伟达协助日本发展主权AI与物理AI。",
              "link": "https://news.qq.com/rain/a/20260715A08CUL00",
              "tags": [
                "AI芯片",
                "数据中心",
                "GPU"
              ],
              "source": "腾讯新闻",
              "time": "7月15日消息"
            },
            {
              "title": "英伟达与丰田扩大合作，开发L2++辅助驾驶汽车",
              "summary": "7月14日消息，丰田与英伟达联合声明称双方将扩大合作，以汽车为起点将物理AI拓展至机器人和智能设施。丰田采用NVIDIA DRIVE AGX平台并搭载通过安全认证的DriveOS操作系统，开发具备L2++驾驶辅助功能的下一代车型。合作还涵盖AI加速汽车软件开发、工厂仿真数字孪生及城市交通视觉语言模型。",
              "link": "https://tech.ifeng.com/c/8unaWOfIXwF",
              "tags": [
                "自动驾驶",
                "汽车",
                "物理AI"
              ],
              "source": "凤凰网科技",
              "time": "7月14日消息"
            },
            {
              "title": "诺基亚与英伟达推出行业首个商用AI-RAN平台",
              "summary": "7月15日消息，诺基亚与英伟达推出全球首个商用AI原生无线接入网（AI-RAN）平台，基于诺基亚anyRAN软件与英伟达Aerial平台构建。目前频谱效率已提升超20%，预计2027年提升至50%、2028年突破100%。平台计划2026年四季度试点部署、2027年正式商用，全面支持4G、5G及未来6G网络。",
              "link": "https://m.ithome.com/html/977090.htm",
              "tags": [
                "通信",
                "5G",
                "AI应用"
              ],
              "source": "IT之家",
              "time": "7月15日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "color": "#1877f2",
          "softBg": "#e8f2fe",
          "initial": "M",
          "news": [
            {
              "title": "26名Meta员工起诉公司利用AI系统筛选裁员对象，休假员工遭不公平对待",
              "summary": "7月13日消息，26名Meta员工在加州北区联邦法院起诉公司，指控Meta在裁员中使用AI评分系统对员工打分排序，导致正在休病假、产假或育儿假的员工被不成比例选中裁撤。诉状称系统从设计层面对休假员工不公平，Meta否认指控称决定由人作出而非AI。Meta今年4月宣布裁员约8000名员工，占全球员工总数约10%。",
              "link": "https://news.ifeng.com/c/8umhayOrz5x",
              "tags": [
                "AI伦理",
                "劳动纠纷",
                "裁员"
              ],
              "source": "凤凰网科技",
              "time": "7月13日消息"
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
          "softBg": "#fff1e6",
          "initial": "阿",
          "news": [
            {
              "title": "阿里千问将作为AI能力集成至Apple智能，为国行苹果设备提供AI能力",
              "summary": "7月15日消息，阿里巴巴确认千问将作为AI能力集成至Apple智能，为iOS、iPadOS、macOS和visionOS的中国用户带来文本与图像理解、内容生成等AI能力，用户无需在应用间切换即可直接体验。同日网信办公布新增7款手机端侧AI备案名单，Apple智能位列其中。消息公布后阿里巴巴股价上涨7.13%。",
              "link": "https://36kr.com/p/3896830991320962",
              "tags": [
                "Apple智能",
                "端侧AI",
                "合作"
              ],
              "source": "36氪",
              "time": "7月15日消息"
            },
            {
              "title": "阿里发布Qwen-Audio-3.0-Realtime实时语音对话模型",
              "summary": "7月15日消息，阿里发布实时语音对话模型Qwen-Audio-3.0-Realtime，提供强调推理的Plus版和强调速度的Flash版。模型支持动态工具调用、音色克隆、多人说话识别和双工对话，在嘈杂环境可过滤背景声并根据语境调整语速和情绪表达。VoiceBench评测中Plus版标准prompt得分92.5，API已通过阿里云百炼平台开放。",
              "link": "https://www.qbitai.com/2026/07/450250.html",
              "tags": [
                "语音AI",
                "实时交互",
                "大模型"
              ],
              "source": "量子位",
              "time": "7月15日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#1677ff",
          "softBg": "#e9f0ff",
          "initial": "火",
          "news": [
            {
              "title": "豆包AI手机今年将发布多款机型，其中一款拟在WAIC 2026亮相",
              "summary": "7月15日消息，字节跳动联合中兴努比亚打造的豆包AI智能体手机今年将推出多款机型，其中一款计划在7月17日至20日的2026世界人工智能大会（WAIC）期间亮相。整体备货约20万台，首批10万台以内。前代M153技术预览版备货仅3万台，二手市场最高报价达7999元远超官方售价3499元。",
              "link": "https://news.qq.com/rain/a/20260715A0BOHV00",
              "tags": [
                "AI手机",
                "智能体",
                "端侧AI"
              ],
              "source": "腾讯新闻",
              "time": "7月15日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4f46e5",
          "softBg": "#eef1ff",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek筹备IPO，计划今年递交科创板上市申请",
              "summary": "7月15日消息，据彭博社报道，DeepSeek已开始筹备首次公开募股，规划在内地科创板上市，已聘请投资银行协助，力争今年递交上市申请并争取明年完成IPO。上交所6月出台AI大模型企业适用科创板第五套上市标准新规，为DeepSeek等AI企业登陆科创板打开了通道。相关讨论仍在进行中，时间安排可能调整。",
              "link": "https://www.36kr.com/p/3896949637695363",
              "tags": [
                "IPO",
                "科创板",
                "资本市场"
              ],
              "source": "36氪",
              "time": "7月15日消息"
            },
            {
              "title": "DeepSeek寻求约15亿美元新融资，年化收入预计达4至5亿美元",
              "summary": "7月15日消息，据《华尔街日报》和彭博社报道，DeepSeek正寻求约15亿美元新融资，对应估值约710亿美元。近期公司年化收入已达4亿至5亿美元，主要来自云端API调用。V4模型API业务毛利率超50%。公司还计划以约5000亿元人民币估值启动第二轮融资，并通过QFLP结构接受境外投资者美元出资。",
              "link": "https://www.zaobao.com/news/china/story20260715-9369569",
              "tags": [
                "融资",
                "估值",
                "API"
              ],
              "source": "联合早报",
              "time": "7月15日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "color": "#07c160",
          "softBg": "#e6f9ee",
          "initial": "腾",
          "news": [
            {
              "title": "京东与腾讯元宝打通购物服务，AI对话内可一键跳转下单",
              "summary": "7月15日消息，京东宣布与腾讯元宝打通购物服务，京东成为首个接入元宝的电商垂域合作伙伴。用户在元宝App内通过自然语言咨询商品信息、比较产品时，元宝整合京东商品信息以卡片展示，点击即可跳转京东购物小程序完成下单。覆盖数码、家电、美妆等全品类，实现「即聊即买」的AI购物闭环体验。",
              "link": "https://www.chinaz.com/ainews/29614.shtml",
              "tags": [
                "AI购物",
                "电商",
                "智能体"
              ],
              "source": "站长之家",
              "time": "7月15日消息"
            }
          ]
        },
        {
          "name": "小米",
          "color": "#ff6900",
          "softBg": "#fff0e6",
          "initial": "米",
          "news": [
            {
              "title": "小米开源Xiaomi-Robotics-U0：380亿参数具身统一生成模型",
              "summary": "7月15日消息，小米正式发布并开源380亿参数多模态具身生成基础模型Xiaomi-Robotics-U0，为具身领域首个通吃四类任务（场景生成、迁移、交互视频、通用文生图）的统一生成模型。在WorldArena评测基准上以总分第一击败全球126个模型。FlashAR+推理加速方案使生成效率提升近83倍，真机评测任务完成进度平均提升超26%。",
              "link": "https://tech.ifeng.com/c/8umT2DKERx9",
              "tags": [
                "具身智能",
                "开源",
                "大模型"
              ],
              "source": "凤凰网科技",
              "time": "7月15日消息"
            },
            {
              "title": "小米MiMo完成全系列模型矩阵闭环，2026年AI投入将达160亿元",
              "summary": "7月15日消息，小米宣布MiMo已完成大语言、多模态、语音等全系列模型矩阵闭环，端侧模型通过国家大模型备案。小米表示AI、芯片、OS是三大核心技术赛道，2026年AI领域投入将达160亿元人民币，未来三年AI领域投入不低于600亿元。",
              "link": "https://m.ithome.com/html/977116.htm",
              "tags": [
                "大模型",
                "端侧AI",
                "战略投入"
              ],
              "source": "IT之家",
              "time": "7月15日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#2962ff",
          "softBg": "#e8efff",
          "initial": "智",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#8b5cf6",
          "softBg": "#f2ecfe",
          "initial": "月",
          "news": []
        },
        {
          "name": "华为",
          "color": "#cf0a2c",
          "softBg": "#fde8ec",
          "initial": "华",
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
              "title": "面壁智能",
              "news": [
                {
                  "title": "面壁智能端侧大模型将搭载三星手机上市，覆盖多款旗舰机型",
                  "summary": "7月15日消息，面壁智能与三星达成合作，MiniCPM系列端侧模型将搭载于Galaxy S26 Ultra、Z Fold7、Z Flip7等旗舰机型上市。同日三星「盖乐世AI」获批手机端侧AI服务备案，端侧能力由面壁智能MiniCPM系列提供，支持文本理解与多模态感知双引擎。这是中国端侧AI大模型首次规模化赋能全球顶级终端厂商。",
                  "link": "https://36kr.com/p/3896830362601351",
                  "tags": [
                    "端侧AI",
                    "三星",
                    "智能手机"
                  ],
                  "source": "36氪",
                  "time": "7月15日消息"
                },
                {
                  "title": "面壁智能上半年累计融资超50亿元，估值超200亿元",
                  "summary": "7月15日消息，面壁智能完成新一轮融资，投资方包括国家级基金、央企、汽车制造商及财务投资机构。2026年上半年累计融资金额超50亿元，估值超200亿元，成为端侧智能领域公开估值最大的独角兽。MiniCPM系列在GitHub、Hugging Face等平台累计下载量超3800万，已进入长安、上汽、吉利等车企的量产车型。",
                  "link": "https://36kr.com/p/3896200533952385",
                  "tags": [
                    "融资",
                    "端侧AI",
                    "独角兽"
                  ],
                  "source": "36氪",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "百度",
              "news": [
                {
                  "title": "消息称百度为苹果Apple智能提供AI搜索功能，升级中国版Siri",
                  "summary": "7月15日消息，知情人士透露苹果与百度将合作开发基于AI的搜索功能，作为Apple智能套件的一部分。百度负责的AI搜索能力可处理图像和文本，并用于升级中国版Siri语音助手。此前iOS 27 Beta 2代码中发现「Baidu Visual Search」调用模块。苹果在中国采取「双轨制」合作：阿里千问负责AI能力集成，百度负责搜索与Siri。",
                  "link": "https://m.ithome.com/html/977164.htm",
                  "tags": [
                    "Apple智能",
                    "AI搜索",
                    "Siri"
                  ],
                  "source": "IT之家",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "PrismML",
              "news": [
                {
                  "title": "PrismML发布Bonsai 27B模型，可在iPhone上原生运行",
                  "summary": "7月15日消息，PrismML发布Bonsai 27B模型，基于Qwen 3.6-27B微调，通过1-bit量化压缩至3.9GB可在12GB内存iPhone上运行。三值量化版5.9GB保留约95%智能水平。1-bit版在RTX 5090上达163 token/s、M5 Max上达87 token/s。CEO Babak Hassibi向CNBC证实苹果正在评估该公司技术，模型以Apache 2.0许可证开源。",
                  "link": "https://m.ithome.com/html/976826.htm",
                  "tags": [
                    "端侧AI",
                    "模型压缩",
                    "iPhone"
                  ],
                  "source": "IT之家",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "金山办公",
              "news": [
                {
                  "title": "金山办公推出WPS Comate和灵犀专业版两款AI办公产品",
                  "summary": "7月15日消息，金山办公在2026 AI生产力大会上发布WPS Comate和灵犀专业版。WPS Comate面向企业组织，覆盖法务、项目管理、HR等场景，支持本地和云端两种模式。灵犀专业版侧重个人办公，支持WPS全组件编辑及Microsoft Office插件，可将自然语言指令转化为可编辑、可协作的办公成果。公司CEO称内部开发已全部切换为国产模型。",
                  "link": "https://m.ithome.com/html/977076.htm",
                  "tags": [
                    "AI办公",
                    "企业服务",
                    "WPS"
                  ],
                  "source": "IT之家",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "TML（穆拉蒂创业公司）",
              "news": [
                {
                  "title": "OpenAI前CTO穆拉蒂创业公司TML发布首款AI模型Inkling",
                  "summary": "7月16日消息，OpenAI前CTO米拉·穆拉蒂创立的Thinking Machines Lab（TML）发布首款AI模型Inkling，采用开放权重模式，借鉴DeepSeek-V3架构，拥有近万亿参数但仅激活一小部分以降低使用成本，主打成本与性能平衡。TML由多名OpenAI前核心成员组成，被视为AI领域最具潜力的新创公司之一。",
                  "link": "https://www.ithome.com/0/977/281.htm",
                  "tags": [
                    "AI模型",
                    "创业",
                    "开源"
                  ],
                  "source": "IT之家",
                  "time": "7月16日消息"
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
                  "title": "研究团队回应宇树机器人手术进展：距离临床应用仍有较长时间",
                  "summary": "7月15日消息，国际期刊《自然》发表研究称宇树G1人形机器人由医生远程操控完成活猪腹腔镜胆囊切除手术。论文第一作者梁泽楷向第一财经表示，研究关注人形机器人仿人外形而非特定平台，真正应用于临床仍需在操作精度、灭菌、安全性、监管审批等方面进一步改进。团队选择宇树G1因其是当前较易获得的商用人形机器人之一。",
                  "link": "http://www.nbd.com.cn/articles/2026-07-15/4473338.html",
                  "tags": [
                    "人形机器人",
                    "医疗",
                    "手术机器人"
                  ],
                  "source": "每日经济新闻",
                  "time": "7月15日消息"
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
              "title": "灵巧智能A轮",
              "news": [
                {
                  "title": "具身智能企业灵巧智能完成数亿元A轮融资，上海电气战略入股",
                  "summary": "7月14日消息，具身智能企业灵巧智能（DexRobot）宣布完成数亿元A轮融资，上海电气战略入股。双方同步成立两家合资公司，总注册资本超亿元，分别聚焦核心零部件量产与工业场景解决方案。融资将用于灵巧操作全栈技术研发、核心灵巧手产品迭代及教育/电力/工业三大场景落地。公司已量产DexHand021系列灵巧手及DexCap数据采集系统。",
                  "link": "https://36kr.com/newsflashes/3896356363814530",
                  "tags": [
                    "融资",
                    "具身智能",
                    "灵巧手"
                  ],
                  "source": "36氪",
                  "time": "7月14日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "澳洲AI办公室",
              "news": [
                {
                  "title": "澳洲将设AI办公室，强制数据中心须成为能源净生产者",
                  "summary": "7月15日消息，澳大利亚总理阿尔巴尼斯宣布将设立「人工智能办公室」负责AI标准制定，并强制规定大型数据中心须成为能源净生产者并限制用水量。该办公室设在总理公署下以确保全政府协同应对模式，相关立法计划2027年初提交国会审议。这是澳大利亚对AI快速发展带来的能源消耗和环境问题的最新监管回应。",
                  "link": "https://www.zaobao.com/news/world/story20260715-9366900",
                  "tags": [
                    "AI监管",
                    "数据中心",
                    "碳中和"
                  ],
                  "source": "联合早报",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "中国芯片产量",
              "news": [
                {
                  "title": "上半年中国日均生产芯片超15亿块，AI驱动芯片需求爆发",
                  "summary": "7月15日消息，国家统计局数据显示上半年规模以上工业企业集成电路产量达2798亿块，同比增长23.1%，换算日均超15亿块。5G智能手机、3D打印设备、服务机器人等智能产品产量保持快速增长。以高技术制造业为代表的新动能以两成多的增加值占比贡献近五成工业增长，AI技术变革带来的高端算力芯片和存储芯片需求是主要驱动力。",
                  "link": "https://www.stcn.com/article/detail/4020594.html",
                  "tags": [
                    "芯片制造",
                    "AI需求",
                    "半导体"
                  ],
                  "source": "证券时报",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "QuestMobile",
              "news": [
                {
                  "title": "QuestMobile：AI原生App月活增至4.99亿，豆包千问DeepSeek构成第一梯队",
                  "summary": "7月14日消息，QuestMobile发布2026年AI应用半年报，截至5月AI原生App月活达4.99亿同比增长85.4%，月人均使用92.7次。豆包（3.82亿）、千问（1.67亿）、DeepSeek（1.30亿）构成月活过亿第一梯队，千问增长率达5792.9%。终端厂商AI应用月活7.55亿（+14.0%），仍是覆盖用户最多的AI应用形态。",
                  "link": "https://www.questmobile.com.cn/research/report/2076954943839809537",
                  "tags": [
                    "AI应用",
                    "数据分析",
                    "行业报告"
                  ],
                  "source": "QuestMobile",
                  "time": "7月14日消息"
                }
              ]
            },
            {
              "title": "AI拟人化新规",
              "news": [
                {
                  "title": "我国AI拟人化互动服务管理办法正式施行，禁止虚拟伴侣等亲密关系服务",
                  "summary": "7月16日消息，国家网信办等五部门联合公布的《人工智能拟人化互动服务管理暂行办法》正式施行。新规要求提供者不得以替代社交、控制用户心理或诱导沉迷为目标，禁止向未成年人提供虚拟伴侣、虚拟亲属等亲密关系服务。对连续使用超2小时用户应提醒时长，检测到自残风险等极端情形应干预。豆包、通义千问已下线智能体功能。",
                  "link": "https://finance.sina.cn/2026-07-16/detail-inihxxkn4511511.d.html",
                  "tags": [
                    "AI监管",
                    "政策法规",
                    "AI安全"
                  ],
                  "source": "新浪财经",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "知网",
              "news": [
                {
                  "title": "知网：对AI署名论文已做下架处理，不接受AI工具列为论文作者",
                  "summary": "7月15日消息，知网发布声明称近期部分期刊刊发将DeepSeek、Gemini等AI列为作者的论文，已做下架处理。知网表示不接受AI工具被列为论文署名作者，所有作者须为自然人或法人，并对论文真实性、学术规范及AI工具使用合规性承担责任。使用AI工具须在论文中明确说明，以保证透明性和可溯源性。",
                  "link": "https://news.ifeng.com/c/8umqRf7GGx4",
                  "tags": [
                    "学术规范",
                    "AI伦理",
                    "论文"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "陪伴型机器人",
              "news": [
                {
                  "title": "TrendForce：预估陪伴型人形机器人2030年产值达11亿美元",
                  "summary": "7月15日消息，TrendForce集邦咨询最新报告显示，陪伴型机器人已从养老照护拓展至真人化互动和情感陪伴。优必选发布超仿生人形机器人U1标志该类产品正式跨入真人化时代。随全球人口老龄化、少子化及独居人口增加，陪伴经济支撑需求快速崛起，预估2030年产值将达11亿美元。",
                  "link": "https://www.trendforce.cn/presscenter/news/20260715-13146.html",
                  "tags": [
                    "人形机器人",
                    "产业预测",
                    "陪伴经济"
                  ],
                  "source": "TrendForce",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "脑机接口",
              "news": [
                {
                  "title": "上海开出脑机接口首张处方，获批产品完成全球首例植入手术",
                  "summary": "7月15日消息，植入式脑机接口手部运动功能代偿系统NEO获批上市后首张处方在上海开出，首例植入手术在复旦大学附属华山医院成功完成。患者10年前因车祸脊髓损伤导致手部抓握功能受损，术中脑电信号稳定、术后生命体征平稳。NEO系统今年3月获批成为全球首个获批上市的侵入式脑机接口第三类医疗器械。",
                  "link": "https://finance.sina.cn/2026-07-15/detail-inihwezk1167241.d.html",
                  "tags": [
                    "脑机接口",
                    "医疗",
                    "手术"
                  ],
                  "source": "新浪财经",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "苹果AI芯片收购",
              "news": [
                {
                  "title": "消息称苹果正寻求收购人工智能芯片企业，加速自研AI服务器芯片",
                  "summary": "7月15日消息，据The Information报道，苹果近几个月与银行及半导体初创公司接触，寻求以数十亿美元级收购推进自研AI服务器芯片项目。此举源于现有M2 Ultra芯片在数据中心AI任务中触及天花板，下一代Baltra芯片遭遇延期。苹果今年1月已斥资近20亿美元收购以色列AI公司Q.ai，是其史上第二大收购案。",
                  "link": "https://tech.ifeng.com/c/8umLin0tFsZ",
                  "tags": [
                    "AI芯片",
                    "收购",
                    "服务器"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "印度芯片制造",
              "news": [
                {
                  "title": "印度宣布再投1.28万亿卢比提升本土芯片制造能力",
                  "summary": "7月15日消息，印度承诺再投入1.28万亿卢比（约133亿美元）以促进国内芯片制造发展。此项举措将建立在2021年推出的100亿美元激励计划基础之上，该计划曾承诺承担半导体项目建设成本的一半。印度正积极吸引全球半导体厂商投资建厂，以提升在AI芯片供应链中的地位。",
                  "link": "https://tech.ifeng.com/c/8umhFVq9llr",
                  "tags": [
                    "芯片制造",
                    "印度",
                    "半导体"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "AI伴侣应用",
              "news": [
                {
                  "title": "AI伴侣应用吸金超4亿美元，近七成用户向伴侣隐瞒使用行为",
                  "summary": "7月15日消息，数据显示自ChatGPT发布以来，成人向及恋爱AI陪伴应用累计下载超1.6亿次，用户消费达4.27亿美元。2026年上半年214款此类应用创造1.628亿美元收入，其中Zeta收入最高达3300万美元。调查显示近七成用户向人类伴侣隐瞒使用行为，引发对AI情感依赖的社会关注。",
                  "link": "https://www.163.com/dy/article/L1UJ931V05568W0A.html",
                  "tags": [
                    "AI陪伴",
                    "消费趋势",
                    "数据分析"
                  ],
                  "source": "网易新闻",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "WAIC 2026",
              "news": [
                {
                  "title": "超300款AI产品将在2026世界人工智能大会首发，规模创历届之最",
                  "summary": "7月15日消息，2026世界人工智能大会（WAIC 2026）将于7月17日至20日在上海举办，今年全新升级为「三地四馆」办展模式，汇集1100多家参展企业和300多款全球首发AI产品。大会涵盖AI大模型、具身智能、自动驾驶、AI for Science等前沿领域，同期举办人工智能全球治理高级别会议。",
                  "link": "https://www.ithome.com/0/977/232.htm",
                  "tags": [
                    "WAIC",
                    "AI大会",
                    "行业活动"
                  ],
                  "source": "IT之家",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "小鹏IRON",
              "news": [
                {
                  "title": "消息称小鹏计划明年在全球推出IRON人形机器人，年底前力争月产超千台",
                  "summary": "7月15日消息，消息人士称小鹏汽车力争在今年年底前将IRON人形机器人月产能提升至1000台以上，为2027年全球推广铺路。IRON机器人定位工业与家庭服务场景，小鹏成为继特斯拉、小米之后又一家布局人形机器人的车企。",
                  "link": "https://www.ithome.com/0/977/208.htm",
                  "tags": [
                    "人形机器人",
                    "小鹏",
                    "具身智能"
                  ],
                  "source": "IT之家",
                  "time": "7月15日消息"
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
              "change": "+9"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1504",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1503",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1498",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1494",
              "change": "+4"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1490",
              "change": "+10"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1486",
              "change": "+14"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1485",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1482",
              "change": "+5"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1481",
              "change": "+5"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "gemini-3.5-flash-high",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gemini-3.5-flash-medium",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "qwen3.7-max-preview",
              "score": "1475",
              "change": "+10"
            },
            {
              "model": "claude-opus-4-8",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "grok-4.20-beta1",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "gpt-5.5",
              "score": "1474",
              "change": "+5"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-07-15",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy3 (free)",
              "score": "8.25T tokens",
              "change": "↑791%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "7.31T tokens",
              "change": "↑64%"
            },
            {
              "model": "DeepSeek V4 Flash",
              "score": "5.26T tokens",
              "change": "↑3%"
            },
            {
              "model": "MiniMax M3",
              "score": "4.13T tokens",
              "change": "↑3%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.14T tokens",
              "change": "↑8%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.73T tokens",
              "change": "↑181%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.57T tokens",
              "change": "↑5%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "2.2T tokens",
              "change": "↑7%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.1T tokens",
              "change": "↑15%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.01T tokens",
              "change": "↑34%"
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
              "link": "https://www.usevelo.ai/"
            },
            {
              "name": "V2Fun",
              "category": "AI",
              "rank": 2,
              "link": "https://www.producthunt.com/posts/v2fun"
            },
            {
              "name": "Campus",
              "category": "Productivity",
              "rank": 3,
              "link": "https://www.producthunt.com/posts/campus-4"
            },
            {
              "name": "Agently",
              "category": "Productivity",
              "rank": 4,
              "link": "https://www.producthunt.com/posts/agently"
            },
            {
              "name": "Crustdata Recruiter",
              "category": "Hiring",
              "rank": 5,
              "link": "https://www.producthunt.com/posts/crustdata-recruiter"
            },
            {
              "name": "YAGNI",
              "category": "SaaS",
              "rank": 6,
              "link": "https://www.producthunt.com/posts/yagni"
            },
            {
              "name": "RecordMeeting",
              "category": "Chrome Extensions",
              "rank": 7,
              "link": "https://www.producthunt.com/posts/recordmeeting"
            },
            {
              "name": "Tiptap AI Toolkit",
              "category": "Dev Tools",
              "rank": 8,
              "link": "https://www.producthunt.com/posts/tiptap-ai-toolkit"
            },
            {
              "name": "Flodesk Studio",
              "category": "Email",
              "rank": 9,
              "link": "https://www.producthunt.com/posts/flodesk-studio"
            },
            {
              "name": "CodeNearby 2.0",
              "category": "Productivity",
              "rank": 10,
              "link": "https://www.producthunt.com/posts/codenearby-2-0"
            },
            {
              "name": "nudge2.0",
              "category": "Productivity",
              "rank": 11,
              "link": "https://www.producthunt.com/posts/nudge2-0"
            },
            {
              "name": "Copresent",
              "category": "Chrome Extensions",
              "rank": 12,
              "link": "https://www.producthunt.com/posts/copresent"
            },
            {
              "name": "Keepresso",
              "category": "Productivity",
              "rank": 13,
              "link": "https://www.producthunt.com/posts/keepresso"
            },
            {
              "name": "Clerk",
              "category": "Fintech",
              "rank": 14,
              "link": "https://www.producthunt.com/posts/clerk-ai-cap-table"
            },
            {
              "name": "Review by Eddie AI",
              "category": "Productivity",
              "rank": 15,
              "link": "https://www.producthunt.com/posts/review-by-eddie-ai"
            },
            {
              "name": "Jam-Pod",
              "category": "Music",
              "rank": 16,
              "link": "https://www.producthunt.com/posts/jam-pod"
            },
            {
              "name": "ccshare",
              "category": "Dev Tools",
              "rank": 17,
              "link": "https://www.producthunt.com/posts/ccshare"
            },
            {
              "name": "QuickQuill",
              "category": "Mac",
              "rank": 18,
              "link": "https://www.producthunt.com/posts/quickquill"
            },
            {
              "name": "New AI tools by IFTTT",
              "category": "Productivity",
              "rank": 19,
              "link": "https://www.producthunt.com/posts/new-ai-tools-by-ifttt"
            },
            {
              "name": "DeskMat 1.3",
              "category": "Mac",
              "rank": 20,
              "link": "https://www.producthunt.com/posts/deskmat-1-3"
            }
          ]
        }
      ]
    }
  }
};;;


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
    // 其他厂商可能出现的品牌（暂无 logo 的不设 logo 字段，回退到首字母）
    "三星":         { color: "#8aaed4", softBg: "#eef5fb", initial: "三" },
    "小米":         { color: "#d4a882", softBg: "#faf5ee", initial: "米", logo: "logos/小米.jpg" },
    "昆仑万维":     { color: "#a0b0d4", softBg: "#f2f4fa", initial: "昆" },
    "字节跳动":     { color: "#8ab4d4", softBg: "#eef5fb", initial: "字" },
    "Stability AI": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "S" },
    // 自动驾驶/具身智能/投资资讯 中出现的品牌
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
    // 其他关注·独立厂商（Google Favicon API 获取 logo）
    "英特尔":         { color: "#0071c5", softBg: "#e6f0f8", initial: "英", logo: "https://www.google.com/s2/favicons?domain=intel.com&sz=64" },
    "鸿海（富士康）": { color: "#e60012", softBg: "#fde8ec", initial: "鸿", logo: "https://www.google.com/s2/favicons?domain=foxconn.com&sz=64" },
    "网易有道":       { color: "#e4393c", softBg: "#fde8ec", initial: "有", logo: "https://www.google.com/s2/favicons?domain=youdao.com&sz=64" },
    "宇树科技":       { color: "#1a1a2e", softBg: "#e8e8f0", initial: "宇", logo: "https://www.google.com/s2/favicons?domain=unitree.com&sz=64" },
    "Vbot 维他动力":  { color: "#00d4aa", softBg: "#e6faf5", initial: "V", logo: "https://www.google.com/s2/favicons?domain=vbot.ai&sz=64" },
    "博登智能":       { color: "#4a90d9", softBg: "#eef5fb", initial: "博", logo: "https://www.google.com/s2/favicons?domain=bodenai.com&sz=64" },
    "软银集团":       { color: "#c0c0c0", softBg: "#f5f5f5", initial: "软", logo: "https://www.google.com/s2/favicons?domain=softbank.jp&sz=64" },
    // 标签→厂商名映射（用于「其他关注」分类识别公司名）
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
    // 补充 section 级别元数据
    const secMeta = {
        overseas: { title: "海外主要厂商", icon: "fas fa-globe-americas", iconClass: "overseas" },
        domestic: { title: "国内主要厂商", icon: "fas fa-flag", iconClass: "domestic" },
        other:    { title: "其他关注", icon: "fas fa-layer-group", iconClass: "other" },
        ranking:  { title: "榜单情况", icon: "fas fa-trophy", iconClass: "ranking" }
    };
    for (const [key, meta] of Object.entries(secMeta)) {
        if (data.sections[key]) Object.assign(data.sections[key], meta);
    }
    // 补充海外/国内厂商的展示字段
    for (const secKey of ['overseas', 'domestic']) {
        const vendors = data?.sections?.[secKey]?.vendors;
        if (!vendors) continue;
        for (const v of vendors) {
            const cfg = VENDOR_DISPLAY[v.name];
            if (cfg) { v.color = cfg.color; v.softBg = cfg.softBg; v.initial = cfg.initial; v.logo = cfg.logo; }
        }
    }
    // 补充「其他关注」分类的展示字段
    const categories = data?.sections?.other?.categories;
    if (categories) {
        for (const c of categories) {
            const cfg = CATEGORY_DISPLAY[c.name];
            if (cfg) { c.icon = cfg.icon; c.color = cfg.color; c.softBg = cfg.softBg; }
        }
    }
    // 补充榜单平台的展示字段
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
        if (map[tag]) return map[tag];  // 返回厂商名字符串
    }
    return null;
}

function loadNewsData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            // 检测旧格式数据（含 change 或 upvotes 字段），自动清除
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
    // 在新数据覆盖前，检查过往日期是否有遗漏确认（24 点自动确认）
    autoConfirmBeforeRefresh();

    // 同时检查 localStorage 和 data.js，取日期更近的
    let lsData = null;
    let rawData = null;

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) lsData = JSON.parse(saved);
    } catch (e) { /* ignore */ }

    if (window.__RAW_DATA) rawData = window.__RAW_DATA;

    // 比较日期（字符串可直接比较，如 "2026-05-30" > "2026-05-29"）
    // 只有 localStorage 日期严格大于 data.js 时，才认为用户手动编辑了更新日期
    const rawDate = rawData?.date || '';
    const lsDate = lsData?.date || '';
    // 仅当 localStorage 标记了手动编辑，且其编辑时间比 data.js 更新时，才保留本地数据
    // 如果 data.js 的编辑时间更新（别人刚改过），则 data.js 优先
    const lsEditTime = lsData?._manualEdit ? new Date(lsData._manualEdit).getTime() : 0;
    const rawEditTime = rawData?._manualEdit ? new Date(rawData._manualEdit).getTime() : 0;
    const isManualEdit = lsData?._manualEdit && lsDate === rawDate && lsEditTime >= rawEditTime;

    if (lsDate > rawDate || isManualEdit) {
        // localStorage 日期更新 → 用户手动编辑优先
        if (lsData) {
            delete lsData._manualEdit; // 清理内部标记
            enrichData(lsData);
            console.log('已从 localStorage 加载新闻数据（用户编辑优先）');
            return lsData;
        }
    }

    // data.js 日期 >= localStorage → 新抓取数据优先覆盖
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

    // 尝试 fetch data.json
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
    // 一次性补充被跳过的历史日期（如 5/27→5/29 的更新导致 5/28 版本丢失）
    // 同时清理无效日期（已明确不应存在的日期）
    try {
        const INVALID_DATES = ['2026-05-26'];  // 无内容日期，强制清除
        const confirmed = JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
        let changed = false;

        // 清除无效日期
        for (const d of INVALID_DATES) {
            if (confirmed[d]) {
                delete confirmed[d];
                changed = true;
                console.log('清除无效日期:', d);
            }
        }

        // 版本检查：种子数据更新后自动清除全部缓存，无需用户手动操作
        const seedVersion = window.__SEED_VERSION || 1;
        const cachedVersion = localStorage.getItem('ai-news-seed-version');
        if (String(seedVersion) !== cachedVersion) {
            localStorage.removeItem(CONFIRMED_KEY);
            localStorage.removeItem(STORAGE_KEY);
            localStorage.setItem('ai-news-seed-version', String(seedVersion));
            console.log('种子数据版本更新，已自动清除全部缓存，刷新后即见最新数据');
        }

        // 注入种子数据（始终覆盖，确保服务端修复能同步到客户端）
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
    // 首先注入种子数据
    seedConfirmedData();

    // 如果旧数据存在，且昨天未确认 → 用旧数据自动确认昨天
    try {
        const oldSaved = localStorage.getItem(STORAGE_KEY);
        if (!oldSaved) return;
        const oldData = JSON.parse(oldSaved);
        const oldDate = oldData.date; // 如 "2026-05-27"
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
    // DOMContentLoaded 可能已经触发过了
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }
})();

function initPage() {
    // 始终展示最新可用日期的新闻
    // loadNewsDataFromJSON 已自动选择最新数据源（data.js vs localStorage）
    const todayStr = getTodayStr();
    const currentDate = newsData?.date || todayStr;
    const savedDate = localStorage.getItem(LAST_VIEWED_DATE_KEY);

    // 如果数据已更新到更新日期，自动同步并清除旧的历史浏览记录
    if (savedDate && currentDate > savedDate) {
        localStorage.setItem(LAST_VIEWED_DATE_KEY, currentDate);
        console.log(`网页已更新：从 ${savedDate} 自动刷新到最新日期 ${currentDate}`);
    }

    updateHeaderDate();
    renderContent();
    setupEventListeners();
}

// ==================== 全局状态 ====================
const state = {
    currentCategory: 'all',
    isLoading: false
};

// ==================== 初始化 ====================
// 初始化已移至 dataReady（异步加载 data.json 后触发）

function updateHeaderDate(dateStr) {
    // 顶部日期：默认显示更新当天；日期选择器可覆盖
    const today = new Date();
    const d = dateStr ? new Date(dateStr + 'T00:00:00') : today;

    // 更新时间：显示最后一次数据操作时间（scraper 抓取或后台保存）
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

    // 顶部日期：更新当天的日期 + 星期
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

// ==================== 渲染内容 ====================
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

    // 按 rowSizes 分组渲染
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

    // 只保留有卡片的分类
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

    // Tab 切换事件
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
        // 卡片图标：尝试从 VENDOR_DISPLAY 匹配
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

// ==================== 事件监听 ====================
function setupEventListeners() {
    // 分类标签
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCategory(btn));
    });

    // 日期选择
    setupDateSelector();

    // 导出 PDF
    document.querySelector('.export-btn').addEventListener('click', () => {
        showToast('正在打开打印对话框，选择「存储为PDF」即可...');
        setTimeout(() => window.print(), 500);
    });

    // 回到顶部
    setupBackToTop();

    // 键盘导航
    setupKeyboardNav();

    // 近期新闻标题点击（无新闻厂商卡片内的历史链接）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const title = e.target.closest('.vendor-card-recent-title[data-link]');
        if (!title) return;
        e.stopPropagation();
        e.preventDefault();
        window.open(title.dataset.link, '_blank', 'noopener');
    });

    // 厂商卡片点击（事件委托）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.vendor-card');
        if (!card) return;
        const category = card.dataset.category;
        const vendorIndex = parseInt(card.dataset.vendorIndex);
        openVendorModal(category, vendorIndex);
    });

    // 厂商卡片键盘
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

    // 其他关注卡片点击（事件委托）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.other-news-card');
        if (!card) return;
        const catIndex = parseInt(card.dataset.catIndex);
        const cardIndex = parseInt(card.dataset.cardIndex);
        const newsItem = e.target.closest('.vendor-card-news-item');
        const newsIndex = newsItem ? parseInt(newsItem.dataset.newsIndex) : 0;
        openOtherNewsModal(catIndex, cardIndex, newsIndex);
    });

    // 弹窗关闭
    document.getElementById('modal-close').addEventListener('click', closeVendorModal);
    document.getElementById('vendor-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeVendorModal();
    });

    // ESC 关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('vendor-modal').classList.contains('active')) {
                closeVendorModal();
            } else if (document.getElementById('source-modal').classList.contains('active')) {
                closeSourceModal();
            }
        }
    });

    // 信源说明弹窗
    document.getElementById('source-info-btn').addEventListener('click', openSourceModal);
    document.getElementById('source-modal-close').addEventListener('click', closeSourceModal);
    document.getElementById('source-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeSourceModal();
    });

    // 板块折叠
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

    // 限制可选范围：最早有内容的日期 ~ 今天
    const confirmed = getConfirmedDates();
    const confirmedDates = Object.keys(confirmed).sort();
    const minDate = confirmedDates.length > 0 ? confirmedDates[0] : todayStr;
    dateInput.min = minDate;
    dateInput.max = todayStr;

    // 初始值设为当前展示的日期
    const displayDate = newsData?.date || todayStr;
    dateInput.value = displayDate;
    let lastValidDate = displayDate;

    // 点击按钮展开日期选择器
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

        // 校验：只有今天或已确认日期可选
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
    // 从历史确认数据中查找该厂商最近 2-3 条新闻（7 天内窗口）
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
    // 分类标签键盘导航
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

// ==================== 弹窗逻辑 ====================
function openVendorModal(category, vendorIndex) {
    const vendor = newsData.sections[category].vendors[vendorIndex];
    if (!vendor || vendor.news.length === 0) return;

    // Header
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

    // Body — 所有新闻堆叠展示
    renderModalBody(vendor);

    // Show
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

    // 卡片标题由数据决定
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

// ==================== 导出 ====================
function downloadReport() {
    const d = new Date();
    const dateStr = d.toLocaleDateString('zh-CN').replace(/\//g, '-');
    const sections = newsData.sections;

    // Markdown 格式
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

// ==================== 加载 & 通知 ====================
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


// ==================== 控制台 ====================
console.log('%c每日AI早报', 'color: #4a9eff; font-size: 20px; font-weight: bold;');
console.log('%c每天为你精选AI领域最新动态', 'color: #a0a0b0; font-size: 14px;');
