// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
  "date": "2026-06-23",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "#e8f8f4",
          "initial": "O",
          "news": []
        },
        {
          "name": "Anthropic",
          "color": "#D4A574",
          "softBg": "#fdf6ee",
          "initial": "A",
          "news": []
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": [
            {
              "title": "诺奖得主John Jumper离职加入Anthropic，谷歌股价跌超5%",
              "summary": "当地时间6月22日，谷歌母公司Alphabet股价收跌约5%，盘中一度跌超7%，创近一年最大单日跌幅，市值蒸发约2200亿美元。此前，2024年诺贝尔化学奖得主、Google DeepMind副总裁John Jumper于6月19日宣布离职并加入Anthropic，这是继Transformer联合作者Noam Shazeer离职加入OpenAI后，谷歌一周内失去的第二位AI核心人物。至此，Transformer论文全部8位原作者均已离开谷歌，AlphaFold也失去核心负责人。分析指出，OpenAI和Anthropic正日益成为美国AI领域的主导公司，对顶级AI研究人才的争夺已白热化。",
              "link": "https://www.163.com/dy/article/L02T9E9305198NMR.html",
              "tags": [
                "人才流动",
                "股价异动",
                "AI人才争夺"
              ],
              "source": "网易科技",
              "time": "6月22日"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1DA1F2",
          "softBg": "#e8f4fd",
          "initial": "x",
          "news": [
            {
              "title": "SpaceX股价大跌近17%，跌破IPO首日收盘价",
              "summary": "当地时间6月22日，SpaceX股价连续第三个交易日下挫，单日大跌近17%收报154.60美元，已跌破上市首日收盘价160.95美元。自6月16日高点211.39美元算起，累计跌幅达27%，市值蒸发超4000亿美元。此前SpaceX估值一度逼近3万亿美元，跻身全球市值第四。分析认为，全股票收购AI编程工具Cursor带来的稀释担忧、流通盘稀薄（仅约4%）、做空工具到位、以及持续亏损（Q1净亏损43亿美元）等因素叠加导致回调。尽管如此，SpaceX当前股价较发行价135美元仍上涨约30%。",
              "link": "https://tech.ifeng.com/c/8uBP3E9hvuS",
              "tags": [
                "股价异动",
                "SpaceX",
                "IPO"
              ],
              "source": "凤凰网科技",
              "time": "6月22日"
            },
            {
              "title": "SpaceX启动首次发债，预计筹资至少200亿美元",
              "summary": "当地时间6月22日消息，SpaceX宣布进行有史以来的首次债券发行，预计将发行至少200亿美元的债券，用于偿还今年早些时候从银行业获得的过渡性贷款，超额资金将用于一般公司用途。此前SpaceX刚通过IPO筹集逾850亿美元资金。同日，SpaceX获得穆迪、惠誉和标普全球三大评级机构授予投资级信用评级，展望均为稳定，表明市场对SpaceX财务稳定性的广泛信心。",
              "link": "https://www.pedaily.cn/first/161345.shtml",
              "tags": [
                "债券发行",
                "信用评级",
                "SpaceX"
              ],
              "source": "投资界",
              "time": "6月22日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "color": "#76B900",
          "softBg": "#f2f8e8",
          "initial": "N",
          "news": [
            {
              "title": "英伟达详解Rubin平台100%液冷技术，今秋量产",
              "summary": "当地时间6月21日，英伟达官方博客发文详解即将量产的Rubin平台全面液冷技术。Rubin是全球首个实现100%液冷的AI计算平台，彻底摒弃风扇，每个芯片和网络组件均由闭环液体冷却。该方案支持45℃入口冷却液温度（比热水浴缸还热），几乎完全消除用水需求，冷却能耗从传统数据中心的40%大幅压缩。英伟达表示，所有为Rubin建设系统的云服务商和数据中心运营商都必须完成向液冷转型，Vera Rubin平台将于2026年秋季正式量产出货。",
              "link": "https://finance.eastmoney.com/a/202606223778018545.html",
              "tags": [
                "液冷技术",
                "Rubin",
                "数据中心"
              ],
              "source": "东方财富",
              "time": "当地时间6月21日"
            }
          ]
        },
        {
          "name": "Meta",
          "color": "#0668E1",
          "softBg": "#e6f0fc",
          "initial": "M",
          "news": [
            {
              "title": "因数据泄露，Meta暂停监控员工键鼠操作的AI训练项目",
              "summary": "6月22日消息，据Business Insider和WIRED报道，Meta已无限期暂停名为MCI（模型能力计划）的内部AI训练项目。该项目自2026年4月启动，记录员工工作电脑上的键盘输入、鼠标操作和屏幕内容用于训练AI智能体。暂停原因是访问控制列表配置错误，导致约4.5万张数据表（包含员工私聊记录、绩效数据、语音转文字记录等敏感信息）一度对Meta全体员工开放。此前已有超1600名员工签署请愿书抗议该项目。Meta发言人表示将开展全面调查。",
              "link": "https://tech.ifeng.com/c/8uBOuQv7250",
              "tags": [
                "数据泄露",
                "员工监控",
                "AI训练"
              ],
              "source": "凤凰网科技",
              "time": "6月22日"
            }
          ]
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "color": "#FF6A00",
          "softBg": "#fff0e6",
          "initial": "阿",
          "news": [
            {
              "title": "阿里发布HappyHorse 1.1视频生成模型，五大维度升级",
              "summary": "6月22日，阿里巴巴发布视频生成模型HappyHorse 1.1，相较1.0版本在动态表现力、主体一致性、指令遵循、视觉质感和音频能力五大维度全面升级。新版本单次生成时长3到15秒，支持720p/1080p分辨率和自由宽高比，支持最多9张角色参考图同时输入减少多镜头角色漂移，1080p定价较1.0降价25%。阿里同时联合虎鲸文娱启动AI影像大赛，优胜者可获百万商单合作。",
              "link": "https://www.ithome.com/0/966/934.htm",
              "tags": [
                "视频生成",
                "HappyHorse",
                "多模态"
              ],
              "source": "IT之家",
              "time": "6月22日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#3370FF",
          "softBg": "#e6ecff",
          "initial": "火",
          "news": [
            {
              "title": "豆包App灰测一键打车功能，字节加码本地出行",
              "summary": "6月22日消息，豆包App正式灰度上线一键打车功能，由曹操出行提供运力服务。获得灰测资格的北京、杭州用户可直接在豆包对话框口述出行需求，AI自动识别起止点、出行人数和用车偏好，匹配曹操出行运力并完成派单。司机端完成豆包订单可获2元平台服务费。这是字节继电商、团购后在本地生活领域的又一布局，直接对标阿里通义千问依托高德打车的AI出行服务。",
              "link": "https://news.qq.com/rain/a/20260622A0AATI00",
              "tags": [
                "AI打车",
                "本地生活",
                "豆包"
              ],
              "source": "腾讯新闻",
              "time": "6月22日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4D6BFE",
          "softBg": "#e8ebfe",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek Harness组急招三类人才，打造Agent驾驭层",
              "summary": "6月22日消息，DeepSeek Harness团队负责人崔添翼在社交平台公开发帖，急招Harness研究员、工程师和产品经理三类岗位，工作地点杭州和北京。崔添翼提出Model+Harness=Agent的理念，Harness负责模型之外的上下文管理、长期记忆、Subagent与Multi-Agent、工具调用等能力。崔添翼拥有6次ACM亚洲区域赛金牌，曾任职Jane Street 9年，于2026年3月加入DeepSeek，亲自担任终面面试官。",
              "link": "https://www.cls.cn/detail/2406302",
              "tags": [
                "Agent",
                "招聘",
                "Harness"
              ],
              "source": "财联社",
              "time": "6月22日"
            }
          ]
        },
        {
          "name": "腾讯",
          "color": "#0052D9",
          "softBg": "#e6eefa",
          "initial": "腾",
          "news": []
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "#fff0e6",
          "initial": "小",
          "news": [
            {
              "title": "小米YU7 GT创全球首个纽北自动驾驶圈速纪录：10分29秒",
              "summary": "6月22日，小米汽车宣布YU7 GT在德国纽博格林北环赛道以10分29秒483的成绩，达成全球首个自动驾驶官方认证圈速纪录，全程无人干预完成20.832公里、73个弯道。雷军表示，希望通过极端工况验证提升智能驾驶能力上限，训练系统具备专业车手级驾控能力。纽北官方圈速榜为此新增自动驾驶分类，小米成为与AMG、M Power并列的三大官方汽车顶级合作伙伴之一。央视新闻点评称这是中国新能源汽车从追赶到领跑的缩影。",
              "link": "https://www.163.com/dy/article/L01QCMDV0511DG68.html",
              "tags": [
                "自动驾驶",
                "纽北",
                "YU7"
              ],
              "source": "网易科技",
              "time": "6月22日"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#6C5CE7",
          "softBg": "#f0edfc",
          "initial": "智",
          "news": [
            {
              "title": "智谱港股市值盘中突破1万亿港元，半年涨超18倍",
              "summary": "6月22日，港股智谱盘中一度涨超42%，股价最高触及2980港元，总市值突破1万亿港元关口，成为中国首个万亿港元市值AI公司。截至收盘涨幅收窄至15%，总市值仍维持在1万亿港元以上。自1月8日上市以来，智谱市值涨幅超过18倍。三重催化因素叠加：GLM-5.2在Code Arena盲测中获全球可用模型第一、Anthropic旗舰模型被禁后智谱24小时火速接棒、创始人与马斯克隔空对话引发市场情绪。",
              "link": "https://www.stcn.com/article/detail/3971526.html",
              "tags": [
                "市值破万亿",
                "港股",
                "大模型"
              ],
              "source": "证券时报",
              "time": "6月22日"
            },
            {
              "title": "摩根大通预测：智谱GLM-5.5将于8月发布，升级万亿参数",
              "summary": "6月22日消息，摩根大通最新研报预测智谱将于8月发布GLM-5.5大模型，参数量突破1万亿以上。当前GLM-5.2参数约7440亿，提升至万亿意味着约50%的规模跃升，参数级别将接近DeepSeek V4 Pro的1.6万亿。智谱创始人唐杰此前回应马斯克称中国大模型不需要等到明年Q1才能追上Fable 5，暗示今年就有希望，GLM-5.5或为兑现这一承诺的关键产品。",
              "link": "https://www.chinaz.com/ainews/29069.shtml",
              "tags": [
                "GLM-5.5",
                "万亿参数",
                "大模型竞赛"
              ],
              "source": "站长之家",
              "time": "6月22日"
            }
          ]
        },
        {
          "name": "月之暗面",
          "color": "#8B5CF6",
          "softBg": "#f3edfc",
          "initial": "月",
          "news": []
        },
        {
          "name": "华为",
          "color": "#CF0A2C",
          "softBg": "#fce8eb",
          "initial": "华",
          "news": [
            {
              "title": "华为乾崑智驾ADS Max高阶包7月起恢复原价3.6万元",
              "summary": "6月22日，华为乾崑智能汽车解决方案宣布，ADS Max高阶功能包将从7月1日起取消限时优惠，一次性购买价格由32000元恢复至标准价36000元。同步新增最高3年智驾保障与服务权益，包括ADS辅助驾驶无忧保障和双地图数据服务。ADS Pro和ADS SE版本价格保持不变。此前已订车未提车用户不受调价影响。",
              "link": "https://news.qq.com/rain/a/20260622A0BMWP00",
              "tags": [
                "智驾调价",
                "ADS",
                "乾崑"
              ],
              "source": "腾讯新闻",
              "time": "6月22日"
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
              "title": "三星",
              "news": [
                {
                  "title": "三星向全球超12万员工部署ChatGPT Enterprise和Codex",
                  "summary": "6月22日消息，OpenAI宣布三星电子正在向全球员工部署ChatGPT Enterprise和Codex，覆盖韩国全部员工及全球设备体验部门员工，总计超12万人，这是OpenAI迄今为止最大规模的企业级部署之一。三星将在研发、制造、营销、企业职能等全业务领域使用这两款AI工具。Codex在韩国的周活跃用户自2月以来增长近800%。这是三星自2023年禁止使用生成式AI工具后的重大政策转向。",
                  "link": "https://tech.ifeng.com/c/8uA5RHflCbP",
                  "tags": [
                    "ChatGPT",
                    "企业部署",
                    "Codex"
                  ],
                  "source": "凤凰网科技",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "亚马逊",
              "news": [
                {
                  "title": "亚马逊在ChatGPT投广告引流，却严防AI抓取自营商品数据",
                  "summary": "6月22日消息，电商分析师披露亚马逊已开始在ChatGPT投放广告，成为入驻OpenAI广告业务最知名的零售企业之一。广告引导用户跳转至亚马逊店铺页面，所有交易由亚马逊全权把控。然而亚马逊同时通过robots.txt封禁AI爬虫、申请法院禁令阻断Perplexity抓取数据，拒绝向AI平台开放商品目录和定价数据。此举暴露出亚马逊AI战略的矛盾：愿意花钱触达ChatGPT用户，却严防AI系统获取其核心商业数据。",
                  "link": "https://www.ithome.com/0/967/251.htm",
                  "tags": [
                    "ChatGPT广告",
                    "数据保护",
                    "电商AI"
                  ],
                  "source": "IT之家",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软再度强制推送Copilot自动安装，距上次撤回仅3个月",
                  "summary": "6月22日消息，微软确认将恢复向符合条件的Windows设备自动安装Microsoft 365 Copilot应用，通过Office更新机制静默部署，用户无需干预即完成安装。这是微软自2026年3月宣布不再默认安装后再次推翻此前决定。企业管理员需主动选择退出，欧盟地区因法规要求不受影响。用户对此举表示不满，认为微软在未经明确同意的情况下强制安装AI功能，且卸载流程复杂。",
                  "link": "https://www.ithome.com/0/966/741.htm",
                  "tags": [
                    "Copilot",
                    "强制安装",
                    "Windows"
                  ],
                  "source": "IT之家",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "英矽智能",
              "news": [
                {
                  "title": "英矽智能与SK生物制药达成最高25亿美元AI药物研发合作",
                  "summary": "6月22日，英矽智能在BIO 2026大会上宣布与SK生物制药达成AI驱动研发合作，聚焦中枢神经系统神经免疫疾病。英矽智能提供Pharma.AI平台的靶点发现和分子设计能力，SK生物制药主导后期开发与商业化。首付款及近期里程碑付款最高1800万美元，潜在交易总金额超25亿美元。消息公布当日英矽智能港股一度涨近16%，这是其上市半年来与亚太地区达成的最大规模合作。",
                  "link": "https://stcn.com/article/detail/3971520.html",
                  "tags": [
                    "AI制药",
                    "CNS",
                    "BD合作"
                  ],
                  "source": "证券时报",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "上海超硅",
              "news": [
                {
                  "title": "上海超硅12英寸方形硅片量产交付，面向AI芯片CoPoS封装",
                  "summary": "6月22日，超硅股份宣布上海超硅已于5月向大客户量产交付12英寸方形硅片产品，应用于AI HPC芯片的下一代CoPoS先进封装工艺。随着AI芯片尺寸持续扩大，传统300mm圆形晶圆面临利用率不足和边缘废料多的问题，方形硅片在可利用面积、高平坦度和低翘曲等方面更适配CoPoS封装要求，行业预计2-3年后快速放量。",
                  "link": "https://www.ithome.com/0/966/920.htm",
                  "tags": [
                    "方形硅片",
                    "CoPoS",
                    "先进封装"
                  ],
                  "source": "IT之家",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "京东",
              "news": [
                {
                  "title": "京东全栈开源实时视频交互模型JoyAI-VL-Interaction",
                  "summary": "6月22日，京东宣布开源全球首个全栈实时视频视觉语言交互模型JoyAI-VL-Interaction（8B参数），让AI从一问一答走向持续边看边说。模型可主动识别视频流中的关键事件并提醒，支持摄像头、直播流等多路输入。在58组真人盲评中，对比豆包视频通话助手胜率77.6%，对比Gemini视频通话助手胜率87.9%。模型获得vLLM-Omni day-0原生支持，面向安防监控、老人看护、直播解说等场景。",
                  "link": "https://tech.ifeng.com/c/8uAOeRQSdEj",
                  "tags": [
                    "视频理解",
                    "开源",
                    "全栈"
                  ],
                  "source": "凤凰网科技",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "Sakana AI",
              "news": [
                {
                  "title": "Sakana AI发布多智能体编排模型Fugu Ultra，性能对标Fable 5",
                  "summary": "6月22日，日本AI独角兽Sakana AI发布Fugu系列编排器模型。Fugu将多Agent编排系统封装为单一API，自动选择合适模型并决定是否验证结果和递归调用。旗舰版Fugu Ultra在SWE Bench Pro上得分73.7（Fable 5为69.2），在HLE上得分50.0（与Fable 5持平），多项基准接近或超越Fable 5。Sakana AI强调其模型池完全可替换，不受单一供应商出口管制风险，被称为AI主权的现实蓝图。定价方面，订阅20-200美元/月。",
                  "link": "https://www.36kr.com/p/3864887584986368",
                  "tags": [
                    "多Agent",
                    "编排模型",
                    "日本AI"
                  ],
                  "source": "36氪",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "百川智能",
              "news": [
                {
                  "title": "百川智能发布医疗大模型M4，HealthBench三项世界第一",
                  "summary": "6月22日，百川智能与清华大学联合发布新一代医疗增强大模型Baichuan-M4，在HealthBench及其Hard、Professional三个子榜上同时位列世界第一，综合得分68.6领先GPT-5.5超10分。M4核心突破包括：主动追问式深度问诊、全病程记忆打通历史病历、每句结论精确对应论文段落的循证引用（精度90.0），以及自主决定何时追问和检索证据的Agent架构。事实性幻觉率仅3.3%，为行业最低。",
                  "link": "https://tech.ifeng.com/c/8uARrSI5kes",
                  "tags": [
                    "医疗AI",
                    "HealthBench",
                    "百川"
                  ],
                  "source": "凤凰网科技",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "生数科技",
              "news": [
                {
                  "title": "生数科技Vidu Q3视频大模型上线华为云，主打为剧而生",
                  "summary": "6月22日，华为云宣布生数科技新一代多模态视频生成大模型Vidu Q3上线华为云MaaS平台。Vidu Q3定位为全球首个为剧而生的视频大模型，支持16秒声画同出、1080P画质和多镜头叙事。分为Turbo极速版（侧重速度和成本）和Pro专业版（最高4K分辨率，影视级光影），面向企业营销、短剧、品牌宣传片等场景，目标降低视频拍摄和制作成本。",
                  "link": "https://tech.ifeng.com/c/8uAizxAAGqO",
                  "tags": [
                    "视频生成",
                    "Vidu",
                    "华为云"
                  ],
                  "source": "凤凰网科技",
                  "time": "6月22日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "小马智行",
              "news": [
                {
                  "title": "小马智行自动驾驶服务接入新加坡Zig App，面向公众开放",
                  "summary": "6月22日，小马智行宣布其与康福德高集团合作运营的新加坡自动驾驶出行服务，已正式接入康福德高旗下叫车平台Zig App，面向公众开放预约。服务覆盖新加坡榜鹅片区，运营两条路线分别约20分钟和50分钟，后者计划7月1日开启。这是小马智行中国+海外双引擎战略的最新进展，公司目标2026年底前Robotaxi车队超3500辆，落地全球超20个城市。",
                  "link": "https://finance.cnr.cn/cjgs/20260622/t20260622_527672184.shtml",
                  "tags": [
                    "Robotaxi",
                    "新加坡",
                    "出海"
                  ],
                  "source": "央广网",
                  "time": "6月22日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "优必选",
              "news": [
                {
                  "title": "优必选发布人形机器人Walker C1，面向商用服务场景",
                  "summary": "6月22日，优必选在第四届链博会上发布新一代具身智能人形机器人Walker C1。身高1.64米，重55公斤，全身53个自由度，搭载2070 TOPS端侧算力和自研Thinker大模型，可完成芭蕾、华尔兹等复杂舞蹈动作。Walker C1面向接待导览、商业服务、娱乐互动、教育科研等商用服务场景，开放底层API接口和约60%-70%算力给开发者。这是优必选继工业线Walker S后补全商用服务产品线的重要一步。",
                  "link": "https://www.stdaily.com/web/gdxw/2026-06/22/content_535691.html",
                  "tags": [
                    "人形机器人",
                    "商用服务",
                    "链博会"
                  ],
                  "source": "科技日报",
                  "time": "6月22日"
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
              "title": "Sand.ai",
              "news": [
                {
                  "title": "AI视频生成公司Sand.ai完成两轮超亿美元融资",
                  "summary": "6月22日消息，AI视频生成公司Sand.ai（北京三呆科技）宣布近三个月内连续完成两轮合计超亿美元融资，投资方包括快手创始人宿华、王慧文家族办公室Lollapalooza Capital，以及经纬创投、IDG、百度风投、源码资本等一线机构。创始人曹越曾参与光年之外担任算法联合创始人，公司Q3计划开源新一代MoE架构视频生成模型。",
                  "link": "https://36kr.com/newsflashes/3863910647714821",
                  "tags": [
                    "视频生成",
                    "融资",
                    "MoE"
                  ],
                  "source": "36氪",
                  "time": "6月22日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "英国MHRA",
              "news": [
                {
                  "title": "英国药监局启动AI药物审批沙盒，探索减少动物试验",
                  "summary": "据Drug Discovery News报道，英国药品和医疗产品监管署将启动首个AI监管沙盒计划，首阶段选择最多10家AI医疗设备制造商参与，重点测试AI驱动的药物安全评估和诊断工具。英国每年约25万人因药物不良反应入院，相关成本超20亿英镑；约90%药物在开发阶段失败。MHRA希望借助监管沙盒让企业在监管机构参与下更早明确合规路径，减少对动物试验的依赖。",
                  "link": "https://www.gov.uk/government/news/mhra-launches-ai-sandbox-to-accelerate-medicines-development-and-improve-safety",
                  "tags": [
                    "AI监管",
                    "药物审批",
                    "沙盒"
                  ],
                  "source": "UK Gov",
                  "time": "6月9日"
                }
              ]
            },
            {
              "title": "CDPR CEO",
              "news": [
                {
                  "title": "CDPR联合CEO：纯AI生成游戏即将出现，但非行业正道",
                  "summary": "6月22日消息，CD Projekt Red联合CEO诺瓦科夫斯基近日接受采访时透露，已有AI游戏工作室实现一周产出40个原型、三周上线一款完整游戏的开发模式。但他质疑这并非行业正道，认为人工开发虽耗时但能创造AI无法企及的独特感染力。当前每年数千款游戏涌入市场，争夺注意力的竞争空前激烈，他坚持有灵魂的创意才能突围。",
                  "link": "https://www.ithome.com/0/966/755.htm",
                  "tags": [
                    "AI游戏",
                    "行业观点",
                    "CDPR"
                  ],
                  "source": "IT之家",
                  "time": "6月22日"
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
          "date": "2026-06-16",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5",
              "score": "1508",
              "change": "+9"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1504",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1502",
              "change": "+5"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1499",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1493",
              "change": "+5"
            },
            {
              "model": "muse-spark",
              "score": "1487",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1483",
              "change": "+6"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1481",
              "change": "+5"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1478",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-8",
              "score": "1478",
              "change": "+6"
            },
            {
              "model": "gemini-3.5-flash",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1475",
              "change": "+4"
            },
            {
              "model": "glm-5.1",
              "score": "1475",
              "change": "+6"
            },
            {
              "model": "gpt-5.5",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "qwen3.7-max-preview",
              "score": "1475",
              "change": "+10"
            },
            {
              "model": "grok-4.20-beta-0309-reasoning",
              "score": "1474",
              "change": "+4"
            },
            {
              "model": "grok-4.20-beta1",
              "score": "1474",
              "change": "+5"
            },
            {
              "model": "gemini-3-flash",
              "score": "1473",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-06-23",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash",
              "score": "4.96T tokens",
              "change": "↑16%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.1T tokens",
              "change": "↑12%"
            },
            {
              "model": "MiniMax M3",
              "score": "3.77T tokens",
              "change": "↑17%"
            },
            {
              "model": "Hy3 preview",
              "score": "3.68T tokens",
              "change": "↑5%"
            },
            {
              "model": "Owl Alpha",
              "score": "2.7T tokens",
              "change": "↑10%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.5T tokens",
              "change": "↑32%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.45T tokens",
              "change": "↑3%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1.73T tokens",
              "change": "↑39%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "1.53T tokens",
              "change": "↑24%"
            },
            {
              "model": "GLM 5.2",
              "score": "1.51T tokens",
              "change": "new"
            },
            {
              "model": "GPT-5.5",
              "score": "1.07T tokens",
              "change": "↑131%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1T tokens",
              "change": "↑32%"
            },
            {
              "model": "GLM 5.1",
              "score": "973B tokens",
              "change": "↑78%"
            },
            {
              "model": "DeepSeek V3.2",
              "score": "961B tokens",
              "change": "↑15%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "937B tokens",
              "change": "↑3%"
            },
            {
              "model": "Gemini 2.5 Flash Lite",
              "score": "678B tokens",
              "change": "↑3%"
            },
            {
              "model": "Gemini 2.5 Flash",
              "score": "620B tokens",
              "change": "↑2%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "581B tokens",
              "change": "↑26%"
            },
            {
              "model": "Kimi K2.6",
              "score": "573B tokens",
              "change": "↑29%"
            },
            {
              "model": "Laguna M.1 (free)",
              "score": "548B tokens",
              "change": "↑9%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-06-22",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Skybridge",
              "category": "Open Source",
              "rank": 1,
              "link": "https://www.producthunt.com/products/skybridge"
            },
            {
              "name": "AgentX",
              "category": "Analytics",
              "rank": 2,
              "link": "https://www.producthunt.com/products/agentx"
            },
            {
              "name": "Alai 2.0",
              "category": "Design Tools",
              "rank": 3,
              "link": "https://www.producthunt.com/products/alai-2-0"
            },
            {
              "name": "readywhen",
              "category": "Productivity",
              "rank": 4,
              "link": "https://www.producthunt.com/products/readywhen"
            },
            {
              "name": "HAQQ Legal AI on Mobile",
              "category": "Legal",
              "rank": 5,
              "link": "https://www.producthunt.com/products/haqq-legal-ai-on-mobile"
            },
            {
              "name": "Cloudflare Temporary Accounts",
              "category": "Developer Tools",
              "rank": 6,
              "link": "https://www.producthunt.com/products/cloudflare-temporary-accounts"
            },
            {
              "name": "uwait",
              "category": "Advertising",
              "rank": 7,
              "link": "https://www.producthunt.com/products/uwait"
            },
            {
              "name": "AirJelly",
              "category": "Productivity",
              "rank": 8,
              "link": "https://www.producthunt.com/products/airjelly"
            },
            {
              "name": "MediaSeg",
              "category": "Mac",
              "rank": 9,
              "link": "https://www.producthunt.com/products/mediaseg"
            },
            {
              "name": "Clawd",
              "category": "Chrome Extensions",
              "rank": 10,
              "link": "https://www.producthunt.com/products/clawd"
            },
            {
              "name": "Selector Forge",
              "category": "Chrome Extensions",
              "rank": 11,
              "link": "https://www.producthunt.com/products/selector-forge"
            },
            {
              "name": "MD+HTML Reader",
              "category": "Productivity",
              "rank": 12,
              "link": "https://www.producthunt.com/products/md-html-reader"
            },
            {
              "name": "OnBrand by SlideSpeak",
              "category": "Design Tools",
              "rank": 13,
              "link": "https://www.producthunt.com/products/onbrand-by-slidespeak"
            },
            {
              "name": "Agentic Document Extraction",
              "category": "API",
              "rank": 14,
              "link": "https://www.producthunt.com/products/agentic-document-extraction"
            },
            {
              "name": "AlgoFly AI",
              "category": "Software Engineering",
              "rank": 15,
              "link": "https://www.producthunt.com/products/algofly-ai"
            },
            {
              "name": "Photoroom API",
              "category": "Photography",
              "rank": 16,
              "link": "https://www.producthunt.com/products/photoroom-api"
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
