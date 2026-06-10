const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-06-08",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10a37f",
          "softBg": "#e6f7f2",
          "initial": "O",
          "news": [
            {
              "title": "ChatGPT启动史上最大改版，整合Codex打造超级应用",
              "summary": "6月7日消息，OpenAI正准备对ChatGPT进行自2022年上线以来最大规模改版，计划将其从聊天机器人转型为集成编程工具Codex和AI智能体的超级应用。OpenAI核心产品负责人表示聊天已死，公司目标是为每个用户提供能在生活各方面提供帮助的个人代理。改版后ChatGPT将成为统一入口，将免费用户引导至Codex等付费服务。此次调整是OpenAI整体重组计划的一部分，旨在IPO前争夺高利润企业客户，与Anthropic展开更激烈竞争。目前ChatGPT周活用户超9亿，Codex周活已破500万。",
              "link": "https://news.qq.com/rain/a/20260607A048E000",
              "tags": [
                "超级应用",
                "Codex",
                "Agent"
              ],
              "source": "腾讯新闻",
              "time": "6月7日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#d4a574",
          "softBg": "#faf5f0",
          "initial": "A",
          "news": [
            {
              "title": "OpenAI芯片元老Clive Chan跳槽Anthropic",
              "summary": "6月7日消息，OpenAI自研芯片项目002号员工Clive Chan在X平台宣布离开OpenAI，正式加入Anthropic。Chan于2024年1月加入OpenAI，是硬件团队的第二位招聘员工，深度参与了与博通合作的10GW定制AI加速器项目。他在离职声明中高度评价OpenAI芯片团队，但表示始终无法摆脱再次从山脚下攀登新高峰的冲动。Chan此前曾在特斯拉Autopilot、谷歌、SpaceX等工作，长期深耕AI基础设施。此番跳槽被视为AI人才竞争从模型层面向芯片和算力基础设施层延伸的信号。",
              "link": "https://www.ithome.com/0/961/081.htm",
              "tags": [
                "人才流动",
                "芯片",
                "AI基础设施"
              ],
              "source": "IT之家",
              "time": "6月7日消息"
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
              "title": "Google向SpaceX租用每月9.2亿美元AI算力",
              "summary": "6月6日消息，据SpaceX在IPO前披露的SEC文件，Google已签署协议，从2026年10月至2029年6月每月向SpaceX支付9.2亿美元，租用约11万颗英伟达GPU及相关算力资源，合同总价值约300亿美元。Google云发言人表示，这是一项短期过渡协议，用于满足Gemini Enterprise和智能体平台超出预期的客户需求。若SpaceX未能在2026年9月30日前交付承诺GPU数量，Google可终止协议或按比例降低月费。此前SpaceX已与Anthropic签署类似协议，月费12.5亿美元、规模约为此协议两倍。",
              "link": "https://tech.ifeng.com/c/8tjFSqd0ErX",
              "tags": [
                "算力租赁",
                "Gemini",
                "云计算"
              ],
              "source": "凤凰科技",
              "time": "6月6日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1da1f2",
          "softBg": "#e8f5fd",
          "initial": "x",
          "news": [
            {
              "title": "SpaceX IPO已获约1500亿美元认购资金，达募资目标两倍",
              "summary": "6月7日消息，据路透社援引知情人士报道，SpaceX本次IPO已吸引约1500亿美元投资者认购资金，认购额度达募资计划750亿美元的两倍。SpaceX在路演中重点推介火箭发射、星链卫星互联网以及太空AI和数据中心业务，宣称AI相关商机高达23万亿美元。此次IPO估值约1.75万亿美元，若顺利完成将成为史上最大规模IPO。知情人士提示，大型机构资金往往在IPO申购末期才递交订单，当前数据仅为意向申购，并非最终配售额度。",
              "link": "https://tech.ifeng.com/c/8tjC5YajHpy",
              "tags": [
                "IPO",
                "SpaceX",
                "融资"
              ],
              "source": "凤凰科技",
              "time": "6月7日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "color": "#76b900",
          "softBg": "#f2f7e6",
          "initial": "N",
          "news": [
            {
              "title": "英伟达与SK海力士达成多年期合作，共同开发下一代AI内存",
              "summary": "当地时间6月8日，英伟达与SK海力士正式宣布建立多年期技术合作伙伴关系，围绕全球AI工厂建设所需的下一代内存展开联合研发，并将AI技术应用于半导体芯片设计与制造。根据协议，SK海力士将为英伟达Vera Rubin AI超级计算机、Vera CPU、RTX Spark PC及Jetson Thor机器人计算平台协同开发专用内存。在制造领域，SK海力士将采用英伟达CUDA-X库与PhysicsNeMo框架加速芯片仿真和光刻计算，并借助Omniverse和cuOpt构建晶圆厂数字孪生，推动工厂自主化运营。",
              "link": "https://news.qq.com/rain/a/20260608A022FR00",
              "tags": [
                "AI芯片",
                "HBM",
                "Vera Rubin"
              ],
              "source": "腾讯新闻",
              "time": "当地时间6月8日"
            },
            {
              "title": "黄仁勋会见韩国两大游戏商，共商游戏与物理AI合作",
              "summary": "6月7日，英伟达CEO黄仁勋在首尔江南区网吧先后会见KRAFTON创始人蒋柄圭和NCSOFT代表金泽辰。双方就物理AI、人形机器人以及基于RTX Spark的游戏领域合作进行讨论。KRAFTON长期与英伟达合作研发AI功能并融入游戏，今年还在美国设立机器人子公司Ludo Robotics。黄仁勋还与金泽辰共同参与网络直播，就游戏产业与AI技术发展方向交换意见。此次会面是黄仁勋时隔7个月再次访韩行程的一部分。",
              "link": "https://www.ithome.com/0/961/100.htm",
              "tags": [
                "游戏AI",
                "物理AI",
                "RTX Spark"
              ],
              "source": "IT之家",
              "time": "6月7日"
            }
          ]
        },
        {
          "name": "Meta",
          "color": "#0668e1",
          "softBg": "#e6f0fc",
          "initial": "M",
          "news": []
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "color": "#ff6a00",
          "softBg": "#fff0e6",
          "initial": "阿",
          "news": []
        },
        {
          "name": "火山引擎",
          "color": "#3370ff",
          "softBg": "#e8edff",
          "initial": "火",
          "news": [
            {
              "title": "字节跳动声明没有造车计划，豆包仅提供大模型技术服务",
              "summary": "6月6日，字节跳动官方发布声明，否认造车或推出汽车品牌的计划。声明指出，近期部分报道将赛豆解读为豆包汽车品牌或字节跳动造车的说法不准确；赛豆不是字节跳动或豆包推出的汽车品牌，字节与赛豆没有股权合作。豆包、火山引擎与汽车行业伙伴的合作，主要是提供豆包大模型、智能座舱等技术服务，帮助提升车载智能交互体验。此前赛力斯集团参股的赛豆科技计划6月9日发布全新汽车品牌，引发市场联想。",
              "link": "https://finance.sina.com.cn/jjxw/2026-06-06/doc-iniancxp8696828.shtml",
              "tags": [
                "造车",
                "智能座舱",
                "大模型"
              ],
              "source": "新浪财经",
              "time": "6月6日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4b7bf5",
          "softBg": "#edf1ff",
          "initial": "D",
          "news": []
        },
        {
          "name": "腾讯",
          "color": "#0052d9",
          "softBg": "#e6edf9",
          "initial": "腾",
          "news": [
            {
              "title": "京东与腾讯联手，围绕AI Agent展开深度合作",
              "summary": "6月7日消息，据钛媒体报道，京东与腾讯已联手围绕AI Agent展开深度合作。京东的商品供应链与履约服务体系，将与腾讯的生态入口资源进行对接，共同打造跨场景智能化服务新范式。京东AI Agent已与华为、OPPO、荣耀等主流终端厂商对接，通过A2A合作，用户可直接在终端原生智能体内提出购物需求，再由京东履约体系承接，形成从意图识别到服务保障的完整体验闭环。此次合作推动AI Agent从单点应用走向生态协同。",
              "link": "https://www.tmtpost.com/8018104.html",
              "tags": [
                "Agent",
                "电商",
                "生态协同"
              ],
              "source": "钛媒体",
              "time": "6月7日消息"
            },
            {
              "title": "微信AI智能体进入原型测试，最快本月启动合规审批",
              "summary": "6月7日消息，据多家媒体报道，腾讯正测试一款内嵌于微信的AI智能体，用户可在微信主界面向右滑动调出对话窗口，通过自然语言指令调用小程序完成任务。腾讯计划最快6月启动上线前合规审批流程。腾讯人士回应称，目前无法确定微信AI智能体何时推出，上线时间很大程度上取决于监管审批进度，微信14亿用户体量意味着合规流程可能比其他产品更加严格。此前消息推动腾讯港股单日上涨约10.46%。",
              "link": "https://www.cls.cn/detail/2389189",
              "tags": [
                "微信",
                "智能体",
                "超级应用"
              ],
              "source": "财联社",
              "time": "6月7日消息"
            }
          ]
        },
        {
          "name": "小米",
          "color": "#ff6900",
          "softBg": "#fff0e6",
          "initial": "小",
          "news": [
            {
              "title": "小米机器人有望亮相17T系列手机发布会",
              "summary": "6月7日消息，小米集团总裁卢伟冰发布探班17T发布会彩排视频，视频中三次出现机器人手臂，拎纸袋送礼品、与卢伟冰击拳，引发外界对小米机器人将在发布会正式亮相的猜测。该机器人延续CyberOne铁大的具身人形设计，外观科技感十足。小米机器人团队近期在CVPR 2026和ICRA 2026两大国际顶级赛事中均以大幅优势夺冠。小米自研MiMo大模型为机器人提供任务理解与精细操作能力。",
              "link": "https://m.ithome.com/html/961057.htm",
              "tags": [
                "人形机器人",
                "CyberOne",
                "具身智能"
              ],
              "source": "IT之家",
              "time": "6月7日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#5b47fb",
          "softBg": "#eeebff",
          "initial": "智",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#6c3ec7",
          "softBg": "#f0ebfa",
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果AI战略大转弯：Gurman披露从AIMLess到WWDC全面重建Siri",
                  "summary": "当地时间6月7日，彭博社记者Mark Gurman披露苹果AI战略转折内幕。2025年初，苹果高管召开紧急会议启动整改，此前Apple Intelligence 1.0失利叠加竞争对手快速推进，迫使苹果AI战略大转弯。Vision Pro创始人Mike Rockwell接管Siri，软件主管Craig Federighi全面主导AI战略，前谷歌工程高管Amar Subramanya加入负责模型研究。苹果已与谷歌达成合作，以Gemini模型替换Siri原有技术方案，每年支付约10亿美元。WWDC 2026将于北京时间6月9日凌晨召开，将是库克CEO任内最后一次重大产品亮相，核心看点是全面升级的AI Siri及独立AI助手应用。",
                  "link": "https://www.ithome.com/0/961/190.htm",
                  "tags": [
                    "Siri",
                    "WWDC",
                    "Gemini"
                  ],
                  "source": "IT之家",
                  "time": "当地时间6月7日"
                }
              ]
            },
            {
              "title": "AMD",
              "news": [
                {
                  "title": "AMD押注统一内存架构，新一代锐龙可本地运行300B大模型",
                  "summary": "6月7日消息，AMD高级副总裁David McAfee在媒体圆桌采访中表示，统一内存架构（UMA）正迅速崛起，公司未来几年将大力投入。新一代锐龙AI MAX 400系列芯片最高支持192GB统一内存，GPU可分配内存达160GB，可本地运行300B以上参数大语言模型。McAfee称赞英伟达RTX Spark同样采用UMA架构是对AMD理念的认可，并暗示桌面CPU未来也有望采用统一内存设计。不过评测指出，AMD UMA方案内存带宽约256GB/s，与RTX 5090的1792GB/s仍有差距。",
                  "link": "https://www.ithome.com/0/961/102.htm",
                  "tags": [
                    "AI PC",
                    "统一内存",
                    "大模型"
                  ],
                  "source": "IT之家",
                  "time": "6月7日消息"
                }
              ]
            },
            {
              "title": "高通",
              "news": [
                {
                  "title": "高通汽车业务单季营收13亿美元，同比增长38%",
                  "summary": "6月7日消息，高通在无锡举办的第四届汽车技术与合作峰会上披露，其汽车业务2026财年第二季度单季营收达13亿美元，同比增长38%。按年化口径计算，高通汽车业务收入已超过50亿美元，CEO安蒙预计到2026财年结束时突破60亿美元。峰会上高通发布三款骁龙汽车芯片覆盖10万至30万元以上车型，AI算力最高达1280 TOPS，支持端到端Transformer算法和VLA模型。高通还与卓驭科技联合发布下一代舱驾融合域控制器，并启动车端AI Claw生态计划。",
                  "link": "https://www.ifanr.com/1668242",
                  "tags": [
                    "汽车芯片",
                    "舱驾融合",
                    "智能座舱"
                  ],
                  "source": "爱范儿",
                  "time": "6月7日消息"
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
              "title": "优必选",
              "news": [
                {
                  "title": "优必选超仿生人形机器人首发预订单6天突破2110台",
                  "summary": "6月7日，优必选科技宣布，旗下消费级人形机器人品牌优世界超仿生人形机器人自6月2日登陆京东开启预售以来，6天累计预订单量突破2110台。该机器人分男女两款，身高分别为183cm和168cm，均具备88个自由度，搭载养成系情感大模型，支持本地加密存储记忆和多维度外观定制。用户需支付3000元定金锁定首批名额，预售截止至7月15日。前3天预定量已超1200件，北京地区浏览量超15万人次。",
                  "link": "https://www.stcn.com/article/detail/3947504.html",
                  "tags": [
                    "人形机器人",
                    "消费级",
                    "情感陪伴"
                  ],
                  "source": "证券时报",
                  "time": "6月7日"
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
              "title": "本源量子 Pre-IPO",
              "news": [
                {
                  "title": "本源量子完成近30亿元Pre-IPO轮融资，投前估值210亿元",
                  "summary": "6月7日消息，本源量子历时30天完成近30亿元Pre-IPO轮融资，投前估值达210亿元，成为国内估值最高的量子计算公司。本轮由中国兵器集团旗下南方工业领投5亿元，中科创星联合领投4.5亿元，老股东中科育成投资跟投3亿多元。资金将用于建设千比特、万比特量子芯片中试线和新一代超导量子计算机研发。本源量子成立于2017年，拥有量子计算公开专利1326件，全球第二、国内第一。公司已于2025年9月完成IPO辅导备案，拟冲刺国内量子计算第一股。",
                  "link": "https://www.cnstock.com/commonDetail/725979",
                  "tags": [
                    "量子计算",
                    "Pre-IPO",
                    "融资"
                  ],
                  "source": "上海证券报",
                  "time": "6月7日消息"
                }
              ]
            },
            {
              "title": "韩国资本布局中国AI",
              "news": [
                {
                  "title": "韩国投资者持续买入中国硬科技，寒武纪单月吸金近2000万美元",
                  "summary": "6月7日消息，据韩国证券存托结算院数据，过去一个月韩国投资者持续加码中国硬科技资产。AI芯片龙头寒武纪获得近2000万美元净买入，成为韩国投资者在A股市场月度最大加仓标的。此外，麦格米特、机器人ETF华夏、宁德时代等也进入净买入前五。高盛、瑞士百达等外资机构持续看好中国AI赛道，认为中国AI估值相对美国更具吸引力。IDC数据显示，2025年中国本土GPU和AI芯片厂商向国内AI服务器交付165万张加速卡，占总量41%以上。",
                  "link": "https://finance.sina.com.cn/roll/2026-06-07/doc-iniapwht7887172.shtml",
                  "tags": [
                    "外资流入",
                    "半导体",
                    "AI芯片"
                  ],
                  "source": "新浪财经",
                  "time": "6月7日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "AI机器流量首超人类",
              "news": [
                {
                  "title": "互联网史上首次：AI机器网络请求量超越人类，占比57.5%",
                  "summary": "6月7日消息，Cloudflare CEO马修·普林斯披露，在其托管网站收到的网络访问请求中，约57.4%来自AI和自动化程序，42.6%来自人类用户。这是互联网历史上机器请求量首次超越人类，比普林斯此前预期的2027年更早到来。核心驱动因素是AI智能体的快速崛起，包括AI聊天、购物比价Agent、旅行预订Agent等。在美国市场，机器人流量占比更高达71.5%。不过Cloudflare也提醒，该数据统计的是请求次数而非用户参与度，真人用户仍主导应用使用时长和视频观看。",
                  "link": "https://www.ithome.com/0/960/248.htm",
                  "tags": [
                    "AI Agent",
                    "流量",
                    "里程碑"
                  ],
                  "source": "IT之家",
                  "time": "6月7日消息"
                }
              ]
            },
            {
              "title": "孙正义",
              "news": [
                {
                  "title": "孙正义预判超级智能两年内到来，AI已能自主设计下一代模型",
                  "summary": "6月7日消息，软银CEO孙正义在近日接受CNBC专访时抛出重磅预判：超级人工智能（ASI）有望在两年内正式到来。孙正义透露，他与OpenAI团队深度交流后获悉，AI自主迭代的闭环已初步形成，现有模型已能独立设计下一代全新模型。OpenAI证实其GPT-5.3-Codex已实现自我迭代，可自主完成训练诊断、部署监管等研发工作；Anthropic数据也显示平台超80%代码由Claude AI编写。孙正义认为AI规模至少是互联网时代的10倍，下一个万亿赛道是物理AI与人形机器人。",
                  "link": "https://www.donews.com/news/detail/4/6586020.html",
                  "tags": [
                    "超级智能",
                    "自主迭代",
                    "ASI"
                  ],
                  "source": "DoNews",
                  "time": "6月7日消息"
                }
              ]
            },
            {
              "title": "Hinton：AI已有意识",
              "news": [
                {
                  "title": "AI教父Hinton宣称AI已有意识，姜峯楠万字长文反驳",
                  "summary": "6月7日消息，AI教父、诺贝尔物理学奖得主Geoffrey Hinton在最新访谈中宣称AI已经有意识了。他提出神经元替换思想实验论证非生物系统同样可以拥有意识，并警告自然界中找不到更聪明的存在长期受更愚笨存在控制的例子。华裔科幻作家姜峯楠随即在《大西洋月刊》发表万字长文全面反驳，指出LLM本质是句子续写机器，生成逼真对话远比创造有意识实体容易。DeepMind CEO哈萨比斯则提出两条卢比孔河概念，主张智能与意识应在技术上分离，第二条河需社会共同决定是否跨越。",
                  "link": "https://www.ithome.com/0/960/876.htm",
                  "tags": [
                    "AI意识",
                    "AI安全",
                    "伦理"
                  ],
                  "source": "IT之家",
                  "time": "6月7日消息"
                }
              ]
            },
            {
              "title": "算力普惠",
              "news": [
                {
                  "title": "全球首个预制算力中心底座在青岛投用，Token用电成本降30%",
                  "summary": "6月7日消息，全球首个预制算力中心底座算电岛6月6日在山东青岛正式启用。该设备占地约2200平方米，最快5个月完成施工，相比传统方案节约近70%施工周期、整体成本下降约20%、土建成本节约近80%。通过绿电直连和储能调控，可实现100%绿电消纳，Token用电成本降低约30%，供电可靠率接近100%。随着算力基建规模化提速，多家模型厂商已宣布永久下调算力价格，其中DeepSeek与小米MiMo降价尤为显著，最高降幅接近99%。",
                  "link": "https://news.qq.com/rain/a/20260607A03VFO00",
                  "tags": [
                    "算力基建",
                    "绿电",
                    "降本"
                  ],
                  "source": "腾讯新闻",
                  "time": "6月7日消息"
                }
              ]
            },
            {
              "title": "AI与认知外包",
              "news": [
                {
                  "title": "心理学家警告：把认知工作外包给AI会失去对大脑的控制",
                  "summary": "6月7日消息，加州大学欧文分校心理学家Gloria Mark在接受MIT Technology Review采访时警告，长期将写作、总结、评估等认知任务外包给AI，会导致大脑深度加工能力下降。她的长期实验显示，人类平均注意力已从2003年的约2.5分钟降至47秒。她比喻称就像肌肉不锻炼会萎缩，不思考的大脑也会萎缩。MIT团队研究发现，长期依赖AI辅助的人突然脱离AI后，大脑神经连通性衰减55%。她建议在向AI提问前先形成自己的初步观点，保留认知摩擦。",
                  "link": "https://www.technologyreview.com/2026/06/05/1138427/are-ai-chatbots-making-us-lose-control-of-our-brains/",
                  "tags": [
                    "认知外包",
                    "注意力",
                    "心理学"
                  ],
                  "source": "MIT Technology Review",
                  "time": "6月7日消息"
                }
              ]
            },
            {
              "title": "OpenCV 5",
              "news": [
                {
                  "title": "OpenCV 5正式发布，原生支持Transformer与视觉语言模型",
                  "summary": "6月6日，OpenCV团队正式发布OpenCV 5.0，对这个已有二十多年历史的计算机视觉库进行了里程碑式的架构现代化升级。新版本重写DNN引擎为基于图的架构，ONNX算子覆盖率从4.x时代的不到23%提升至超80%，首次内置分词器与KV-Cache，原生支持LLaMA、Qwen、CLIP、LLaVA等大语言模型和视觉语言模型。YOLOv8推理速度比PyTorch快2.3倍。新版本支持INT4和INT8量化，8GB运存边缘设备即可流畅运行，标志着OpenCV从传统CV库向统一AI推理平台的转型。",
                  "link": "https://m.ithome.com/html/960969.htm",
                  "tags": [
                    "开源",
                    "计算机视觉",
                    "推理引擎"
                  ],
                  "source": "IT之家",
                  "time": "6月6日"
                }
              ]
            },
            {
              "title": "高考AI监考",
              "news": [
                {
                  "title": "2026年高考首次大规模启用AI智能巡查系统防作弊",
                  "summary": "6月7日，2026年全国高考开考，多地首次大规模启用AI智能巡查系统严防考试作弊。AI系统通过视觉分析算法实时监控考场画面，能自动识别交头接耳、翻阅资料等异常行为，一旦识别出考生或监考员有可疑动作，监控系统会自动截取异常行为前后的录像片段供审核员确认。同时智能眼镜被明确禁止携带入场，广东广州等地考点还增强了安检门对智能眼镜等隐蔽穿戴设备的识别能力。全国共设34.8万个考场，报名人数1290万人。",
                  "link": "https://news.qq.com/rain/a/20260607A03D9D00",
                  "tags": [
                    "AI应用",
                    "高考",
                    "安防"
                  ],
                  "source": "腾讯新闻",
                  "time": "6月7日"
                }
              ]
            },
            {
              "title": "韩国AI利润分配",
              "news": [
                {
                  "title": "韩国劳动部长呼吁三星等科技巨头分享AI超额利润",
                  "summary": "6月5日，韩国雇佣劳动部长官金荣训接受路透社采访，公开呼吁三星电子、SK海力士等科技巨头将AI热潮带来的超额利润与供应商、分包商及员工分享。他指出2026年第一季度韩国收入最高20%与最低20%家庭收入差距创六年最大增幅，若不干预，芯片行业的空前收益将进一步加剧贫富差距。他提议通过社会对话建立新的收益分配规则，包括调整供应商价格、投资小型供应商人才培养。保守派反对党批评这是危险的国家干预，破坏自由市场经济。",
                  "link": "https://www.ithome.com/0/961/019.htm",
                  "tags": [
                    "AI经济",
                    "贫富差距",
                    "政策"
                  ],
                  "source": "IT之家",
                  "time": "6月5日"
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
          "date": "2026-06-05",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1504",
              "change": "+1"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1501",
              "change": "+1"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1498",
              "change": "—"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1493",
              "change": "—"
            },
            {
              "model": "muse-spark（Meta）",
              "score": "1489",
              "change": "—"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1488",
              "change": "—"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "—"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1482",
              "change": "—"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "—"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1479",
              "change": "—"
            },
            {
              "model": "claude-opus-4-8",
              "score": "1479",
              "change": "—"
            },
            {
              "model": "gemini-3.5-flash",
              "score": "1477",
              "change": "—"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "—"
            },
            {
              "model": "glm-5.1（智谱AI）",
              "score": "1475",
              "change": "—"
            },
            {
              "model": "grok-4.20-beta1",
              "score": "1474",
              "change": "—"
            },
            {
              "model": "gpt-5.5",
              "score": "1474",
              "change": "—"
            },
            {
              "model": "qwen3.7-max-preview（阿里）",
              "score": "1474",
              "change": "—"
            },
            {
              "model": "gemini-3-flash",
              "score": "1473",
              "change": "—"
            },
            {
              "model": "grok-4.20-beta-0309-reasoning",
              "score": "1473",
              "change": "—"
            },
            {
              "model": "claude-opus-4-5-20251101-thinking-32k",
              "score": "1473",
              "change": "—"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-06-08",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash",
              "score": "3.69T tokens",
              "change": "↑19%"
            },
            {
              "model": "Hy3 preview（腾讯）",
              "score": "2.94T tokens",
              "change": "↑3%"
            },
            {
              "model": "MiniMax M3",
              "score": "2.5T tokens",
              "change": "new"
            },
            {
              "model": "MiMo-V2.5（小米）",
              "score": "2.19T tokens",
              "change": "↑50%"
            },
            {
              "model": "Owl Alpha",
              "score": "1.95T tokens",
              "change": "↑17%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "1.76T tokens",
              "change": "↑9%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "1.7T tokens",
              "change": "↑35%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "1.44T tokens",
              "change": "↑38%"
            },
            {
              "model": "DeepSeek V3.2",
              "score": "1.17T tokens",
              "change": "↑12%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1.16T tokens",
              "change": "↑300%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-06-06",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Google Search Profiles",
              "category": "News",
              "rank": 1,
              "link": "https://search.google.com/search-console"
            },
            {
              "name": "Manus Shopify Connector",
              "category": "User Experience",
              "rank": 2,
              "link": "https://manus.im"
            },
            {
              "name": "MAI-Image-2.5",
              "category": "Design Tools",
              "rank": 3,
              "link": "https://mai-image.ai"
            },
            {
              "name": "QWERTYS",
              "category": "Custom Keyboards",
              "rank": 4,
              "link": "https://www.producthunt.com/products/qwertys"
            },
            {
              "name": "Gaming services by IFTTT",
              "category": "Android",
              "rank": 5,
              "link": "https://ifttt.com"
            },
            {
              "name": "Navi+ Menu Builder",
              "category": "Menu Bar Apps",
              "rank": 6,
              "link": "https://www.producthunt.com/products/navi-menu-builder"
            },
            {
              "name": "Fox Issue Tracker 4",
              "category": "Productivity",
              "rank": 7,
              "link": "https://www.producthunt.com/products/fox-issue-tracker"
            }
          ]
        }
      ]
    }
  }
}

// ==================== 登录（白名单制） ====================
const OPERATOR_WHITELIST = ['秦洁瑶', '巩玉', '刘峰毅', '徐梓茗', '蒋雪', '王笛', '李婧文'];

function checkLogin() {
    const overlay = document.getElementById('login-overlay');
    const input = document.getElementById('login-name');
    const error = document.getElementById('login-error');
    const btn = document.getElementById('login-btn');

    // 已有有效身份 → 直接进
    const saved = localStorage.getItem('ai-news-operator');
    if (saved) {
        try {
            const op = JSON.parse(saved);
            if (OPERATOR_WHITELIST.includes(op.name)) {
                window._operator = op;
                overlay.style.display = 'none';
                updateOperatorBadge();
                return;
            }
        } catch (e) {}
    }

    function attemptLogin() {
        const name = input.value.trim();
        if (!name) {
            error.textContent = '请输入您的大名儿';
            return;
        }
        if (!OPERATOR_WHITELIST.includes(name)) {
            error.textContent = '您不在后台白名单中，请联系管理员';
            input.value = '';
            input.focus();
            return;
        }
        const op = { name: name, since: new Date().toISOString() };
        localStorage.setItem('ai-news-operator', JSON.stringify(op));
        window._operator = op;
        overlay.style.display = 'none';
        updateOperatorBadge();
    }

    btn.addEventListener('click', attemptLogin);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') attemptLogin();
    });
}

function updateOperatorBadge() {
    const badge = document.getElementById('operator-badge');
    if (badge && window._operator) {
        badge.textContent = window._operator.name;
        badge.style.display = 'inline';
    }
}

// ==================== 状态 ====================
let editingData = null;
let currentSection = 'overseas';

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
    loadData();
    renderEditor();

    document.querySelectorAll('#section-tabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentSection = btn.dataset.section;
            document.querySelectorAll('#section-tabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderEditor();
        });
    });

    document.getElementById('save-btn').addEventListener('click', saveData);
    setupConfirmToday();
    updateSaveStatus();
    // 初始化审计日志面板
    const panelBody = document.getElementById('audit-panel-body');
    if (panelBody) panelBody.innerHTML = renderAuditLog();
});

let originalData = null;

function loadData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            editingData = JSON.parse(saved);
            originalData = JSON.parse(saved);
            return;
        }
    } catch (e) {}
    editingData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    originalData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(editingData));
}

function saveData() {
    const changes = diffData(originalData, editingData);
    console.log('[审计] diff结果:', changes.length, '条变动', changes);

    // 标记为手动编辑，让首页优先读取 localStorage 而非 data.js
    editingData._manualEdit = new Date().toISOString();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(editingData));
    localStorage.setItem('ai-news-last-update', new Date().toISOString());
    originalData = JSON.parse(JSON.stringify(editingData));
    updateSaveStatus();

    addAuditEntry(changes.length > 0 ? changes : ['无实质性变更']);
    showToast(`已保存，共 ${changes.length} 处变更`);
    refreshAuditPanel();

    // 自动同步到 GitHub
    var config = getGithubConfig();
    if (config.token) syncToGitHub(changes);
}

function diffData(oldData, newData) {
    const changes = [];
    if (!oldData || !newData) return changes;

    function compareSection(sectionKey, oldSec, newSec) {
        const oldVendors = oldSec?.vendors || [];
        const newVendors = newSec?.vendors || [];
        const maxLen = Math.max(oldVendors.length, newVendors.length);
        for (let vi = 0; vi < maxLen; vi++) {
            const ov = oldVendors[vi] || { news: [] };
            const nv = newVendors[vi] || { news: [] };
            const name = nv.name || ov.name;
            const oldCount = ov.news?.length || 0;
            const newCount = nv.news?.length || 0;
            if (oldCount !== newCount) {
                if (newCount > oldCount) {
                    // 找出新增的
                    const oldTitles = new Set((ov.news || []).map(n => n.title));
                    const added = (nv.news || []).filter(n => !oldTitles.has(n.title));
                    added.forEach(n => changes.push(`[${name}] 新增：${n.title}`));
                } else {
                    const newTitles = new Set((nv.news || []).map(n => n.title));
                    const removed = (ov.news || []).filter(n => !newTitles.has(n.title));
                    removed.forEach(n => changes.push(`[${name}] 删除：${n.title}`));
                }
            }
            // 按位置比对每条新闻（处理标题也可能被修改的情况）
            const maxNews = Math.max(oldCount, newCount);
            for (let ni = 0; ni < maxNews; ni++) {
                const on = (ov.news || [])[ni];
                const nn = (nv.news || [])[ni];
                if (!on && nn) {
                    changes.push(`[${name}] 新增：${nn.title}`);
                } else if (on && !nn) {
                    changes.push(`[${name}] 删除：${on.title}`);
                } else if (on && nn) {
                    const diffs = [];
                    if (on.title !== nn.title) diffs.push(`标题「${on.title}」→「${nn.title}」`);
                    if (on.summary !== nn.summary) diffs.push('摘要');
                    if (on.link !== nn.link) diffs.push('链接');
                    if (on.time !== nn.time) diffs.push('时间');
                    if (JSON.stringify(on.tags) !== JSON.stringify(nn.tags)) diffs.push('标签');
                    if (diffs.length > 0) changes.push(`[${name}] 修改：${diffs.join('、')}`);
                }
            }
        }
    }

    compareSection('overseas', oldData.sections?.overseas, newData.sections?.overseas);
    compareSection('domestic', oldData.sections?.domestic, newData.sections?.domestic);

    // Other categories
    const oldCats = oldData.sections?.other?.categories || [];
    const newCats = newData.sections?.other?.categories || [];
    for (let ci = 0; ci < Math.max(oldCats.length, newCats.length); ci++) {
        const oc = oldCats[ci] || { cards: [] };
        const nc = newCats[ci] || { cards: [] };
        const oldCards = oc.cards || [];
        const newCards = nc.cards || [];
        for (let cj = 0; cj < Math.max(oldCards.length, newCards.length); cj++) {
            const ocard = oldCards[cj] || { news: [] };
            const ncard = newCards[cj] || { news: [] };
            const cardTitle = ncard.title || ocard.title;
            const oldCount = ocard.news?.length || 0;
            const newCount = ncard.news?.length || 0;
            if (oldCount !== newCount) {
                const diff = newCount - oldCount;
                changes.push(`[${cardTitle}] 新闻 ${diff > 0 ? '+' + diff : diff} 条`);
            }
        }
    }

    return changes;
}

async function refreshAuditPanel() {
    const panel = document.getElementById('audit-panel-body');
    if (!panel) return;
    panel.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:2rem;">加载中...</p>';

    // 尝试从 GitHub 拉取远程审计日志合并
    var config = getGithubConfig();
    if (config.token) {
        try {
            var url = 'https://api.github.com/repos/' + config.owner + '/' + config.repo + '/contents/audit-log.json';
            var resp = await fetch(url, {
                headers: { 'Authorization': 'Bearer ' + config.token, 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }
            });
            if (resp.ok) {
                var remoteLog = JSON.parse(atob((await resp.json()).content));
                // 合并到本地
                var localLog = JSON.parse(localStorage.getItem('ai-news-audit-log') || '[]');
                var existingTimes = new Set(localLog.map(function(e) { return e.time; }));
                remoteLog.forEach(function(e) {
                    if (!existingTimes.has(e.time)) localLog.push(e);
                });
                localLog.sort(function(a, b) { return new Date(b.time) - new Date(a.time); });
                if (localLog.length > 100) localLog.length = 100;
                localStorage.setItem('ai-news-audit-log', JSON.stringify(localLog));
            }
        } catch(e) { /* 网络不通则用本地缓存 */ }
    }

    panel.innerHTML = renderAuditLog();
}

function renderAuditLog() {
    var log = JSON.parse(localStorage.getItem('ai-news-audit-log') || '[]');
    if (log.length === 0) return '<p style="color:var(--text-muted);text-align:center;padding:2rem;">暂无记录</p>';
    return log.map(function(entry) {
        var d = new Date(entry.time);
        var timeStr = d.toLocaleString('zh-CN');
        var operator = entry.operator || '未知';
        return '<div class="audit-entry">' +
            '<div class="audit-entry-header">' +
                '<span class="audit-entry-time">' + timeStr + '</span>' +
                '<span class="audit-entry-operator">' + operator + '</span>' +
            '</div>' +
            '<ul class="audit-entry-changes">' +
                entry.changes.map(function(c) { return '<li>' + c + '</li>'; }).join('') +
            '</ul>' +
        '</div>';
    }).join('');
}

function toggleAuditPanel() {
    const panel = document.getElementById('audit-panel');
    if (panel) panel.classList.toggle('open');
}

function updateSaveStatus() {
    const d = new Date();
    document.getElementById('save-status').textContent =
        `上次保存: ${d.toLocaleString('zh-CN')}`;
}

// ==================== 确认当日新闻 ====================
function setupConfirmToday() {
    const confirmBtn = document.getElementById('confirm-btn');
    const unconfirmBtn = document.getElementById('unconfirm-btn');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmCancelBtn = document.getElementById('confirm-cancel-btn');
    const confirmOkBtn = document.getElementById('confirm-ok-btn');
    const unconfirmModal = document.getElementById('unconfirm-modal');
    const unconfirmCancelBtn = document.getElementById('unconfirm-cancel-btn');
    const unconfirmOkBtn = document.getElementById('unconfirm-ok-btn');

    updateConfirmButtons();

    // 「确认当日新闻」按钮
    confirmBtn.addEventListener('click', () => {
        document.getElementById('confirm-date-text').textContent = getTodayStr();
        confirmModal.classList.add('active');
    });

    confirmCancelBtn.addEventListener('click', () => {
        confirmModal.classList.remove('active');
    });

    confirmOkBtn.addEventListener('click', () => {
        confirmTodayNews();
        confirmModal.classList.remove('active');
        updateConfirmButtons();
        showToast('今日新闻已确认发布');
    });

    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) confirmModal.classList.remove('active');
    });

    // 「取消确认内容」按钮
    unconfirmBtn.addEventListener('click', () => {
        unconfirmModal.classList.add('active');
    });

    unconfirmCancelBtn.addEventListener('click', () => {
        unconfirmModal.classList.remove('active');
    });

    unconfirmOkBtn.addEventListener('click', () => {
        unconfirmTodayNews();
        unconfirmModal.classList.remove('active');
        updateConfirmButtons();
        showToast('已取消今日确认，可重新编辑并确认');
    });

    unconfirmModal.addEventListener('click', (e) => {
        if (e.target === unconfirmModal) unconfirmModal.classList.remove('active');
    });

    // 页面加载时，检查过往日期是否有遗漏确认
    autoConfirmMissedDays();
}

function updateConfirmButtons() {
    const confirmBtn = document.getElementById('confirm-btn');
    const unconfirmBtn = document.getElementById('unconfirm-btn');
    if (isTodayConfirmed()) {
        confirmBtn.style.display = 'none';
        unconfirmBtn.style.display = '';
    } else {
        confirmBtn.style.display = '';
        unconfirmBtn.style.display = 'none';
    }
}

function getTodayStr() {
    return new Date().toISOString().split('T')[0];
}

function getYesterdayStr() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
}

function getConfirmedData() {
    try {
        return JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function isTodayConfirmed() {
    return !!getConfirmedData()[getTodayStr()];
}

function confirmTodayNews() {
    const todayStr = getTodayStr();
    const confirmed = getConfirmedData();
    confirmed[todayStr] = JSON.parse(JSON.stringify(editingData));
    localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
    addAuditEntry(['确认当日新闻']);
}

function unconfirmTodayNews() {
    const confirmed = getConfirmedData();
    delete confirmed[getTodayStr()];
    localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
    addAuditEntry(['取消确认当日新闻']);
}

function addAuditEntry(changes) {
    const op = window._operator || {};
    const entry = {
        time: new Date().toISOString(),
        operator: op.name || '未知',
        changes: changes
    };
    const log = JSON.parse(localStorage.getItem('ai-news-audit-log') || '[]');
    log.unshift(entry);
    if (log.length > 50) log.length = 50;
    localStorage.setItem('ai-news-audit-log', JSON.stringify(log));
    refreshAuditPanel();
}

function autoConfirmMissedDays() {
    const confirmed = getConfirmedData();
    const todayStr = getTodayStr();
    const yesterdayStr = getYesterdayStr();

    // 检查昨天是否遗漏确认（昨天 24 点已过但未确认）
    if (!confirmed[yesterdayStr]) {
        // 用当前 editingData 自动确认昨天
        // editingData 此时可能已是今天的数据，但如果没有被更新过就是昨天的
        confirmed[yesterdayStr] = JSON.parse(JSON.stringify(editingData));
        localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
    }
}

// ==================== 渲染 ====================
function renderEditor() {
    const el = document.getElementById('admin-editor');
    const sec = editingData.sections[currentSection];

    if (currentSection === 'overseas' || currentSection === 'domestic') {
        el.innerHTML = renderVendorSection(sec);
    } else if (currentSection === 'other') {
        el.innerHTML = renderOtherSection(sec);
    } else if (currentSection === 'ranking') {
        el.innerHTML = renderRankingSection(sec);
    }

    bindPanelToggles(el);
    bindTagInputs(el);
    bindFieldChanges(el);
}

// ==================== Vendor 板块 ====================
function renderVendorSection(sec) {
    const panels = sec.vendors.map((v, vi) => `
        <div class="admin-panel open" data-vendor-index="${vi}">
            <div class="panel-header" data-toggle="panel">
                <div class="panel-header-info">
                    <div class="panel-icon" style="background:${v.softBg};color:${v.color};">
                        ${v.logo ? `<img src="${esc(v.logo)}" alt="${esc(v.name)}" class="admin-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${esc(v.initial)}';">` : esc(v.initial)}
                    </div>
                    <span class="panel-name">${esc(v.name)}</span>
                    <span class="panel-count">${v.news.length} 条新闻</span>
                </div>
                <div class="panel-header-actions" style="display:flex;align-items:center;gap:0.5rem;">
                    <button class="btn-sm danger" data-delete-vendor="${vi}" onclick="event.stopPropagation()">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                    <span class="panel-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="panel-body">
                <div class="panel-meta">
                    <div class="news-field">
                        <label>厂商名称</label>
                        <input type="text" data-field="vendor-name" data-vi="${vi}" value="${esc(v.name)}">
                    </div>
                    <div class="news-field">
                        <label>首字母（logo 加载失败时回退）</label>
                        <input type="text" data-field="vendor-initial" data-vi="${vi}" value="${esc(v.initial)}" maxlength="2" style="width:60px;">
                    </div>
                    <div class="news-field">
                        <label>Logo 路径</label>
                        <input type="text" data-field="vendor-logo" data-vi="${vi}" value="${esc(v.logo || '')}" placeholder="logos/xxx.svg">
                    </div>
                    <div class="news-field">
                        <label>颜色</label>
                        <input type="color" data-field="vendor-color" data-vi="${vi}" value="${v.color}" style="width:40px;height:32px;padding:2px;">
                    </div>
                </div>
                ${v.news.map((n, ni) => renderNewsEditor(n, vi, ni)).join('')}
                <div class="add-btn-row">
                    <button class="btn-sm primary" data-add-news="${vi}">
                        <i class="fas fa-plus"></i> 添加新闻
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    return panels + `
        <div class="add-btn-row">
            <button class="btn-sm primary" id="add-vendor-btn">
                <i class="fas fa-plus"></i> 添加厂商
            </button>
        </div>
    `;
}

function renderNewsEditor(n, vi, ni, cardIdx) {
    const tags = n.tags || [];
    const cardAttr = cardIdx !== undefined ? ` data-card-idx="${cardIdx}"` : '';
    return `
        <div class="admin-news-item" data-news-index="${ni}" data-vi="${vi}"${cardAttr}>
            <div class="news-field-row">
                <div class="news-field">
                    <label>标题</label>
                    <input type="text" data-field="title" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.title)}">
                </div>
            </div>
            <div class="news-field-row single">
                <div class="news-field">
                    <label>摘要</label>
                    <textarea data-field="summary" data-vi="${vi}" data-ni="${ni}"${cardAttr}>${esc(n.summary)}</textarea>
                </div>
            </div>
            <div class="news-field-row">
                <div class="news-field">
                    <label>来源</label>
                    <input type="text" data-field="source" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.source)}">
                </div>
                <div class="news-field">
                    <label>链接</label>
                    <input type="text" data-field="link" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.link)}">
                </div>
            </div>
            <div class="news-field-row">
                <div class="news-field">
                    <label>时间标注</label>
                    <input type="text" data-field="time" data-vi="${vi}" data-ni="${ni}"${cardAttr} value="${esc(n.time)}">
                </div>
                <div class="news-field">
                    <label>标签</label>
                    <div class="tags-row" data-tags-vi="${vi}" data-tags-ni="${ni}"${cardAttr}>
                        ${tags.map((t, ti) => `
                            <span class="tag-item">
                                ${esc(t)}
                                <span class="tag-remove" data-remove-tag="${ti}">&times;</span>
                            </span>
                        `).join('')}
                        <input type="text" class="tag-input" data-tag-input placeholder="+标签" size="6">
                    </div>
                </div>
            </div>
            <div class="admin-actions">
                <button class="btn-sm danger" data-delete-news="${vi}" data-ni="${ni}"${cardAttr}>
                    <i class="fas fa-trash"></i> 删除此新闻
                </button>
            </div>
        </div>
    `;
}

// ==================== Other 板块 ====================
function renderOtherSection(sec) {
    const panels = sec.categories.map((c, ci) => {
        const cards = c.cards || [];
        const totalNews = cards.reduce((s, card) => s + card.news.length, 0);
        return `
        <div class="admin-panel open" data-cat-index="${ci}">
            <div class="panel-header" data-toggle="panel">
                <div class="panel-header-info">
                    <div class="panel-icon" style="background:${c.softBg};color:${c.color};">
                        <i class="${c.icon}"></i>
                    </div>
                    <span class="panel-name">${esc(c.name)}</span>
                    <span class="panel-count">${cards.length} 卡片 / ${totalNews} 条新闻</span>
                </div>
                <div class="panel-header-actions" style="display:flex;align-items:center;gap:0.5rem;">
                    <button class="btn-sm danger" data-delete-cat="${ci}" onclick="event.stopPropagation()">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                    <span class="panel-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="panel-body">
                <div class="panel-meta">
                    <div class="news-field">
                        <label>分类名称</label>
                        <input type="text" data-field="cat-name" data-ci="${ci}" value="${esc(c.name)}">
                    </div>
                    <div class="news-field">
                        <label>图标 class</label>
                        <input type="text" data-field="cat-icon" data-ci="${ci}" value="${esc(c.icon)}">
                    </div>
                    <div class="news-field">
                        <label>颜色</label>
                        <input type="color" data-field="cat-color" data-ci="${ci}" value="${c.color}" style="width:40px;height:32px;padding:2px;">
                    </div>
                </div>
                ${cards.map((card, cardIdx) => `
                    <div class="admin-card-panel" style="margin: 0.5rem 0; padding: 0.75rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
                        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
                            <span style="font-weight:600;font-size:0.85rem;">卡片标题</span>
                            <input type="text" data-field="card-title" data-ci="${ci}" data-card-idx="${cardIdx}" value="${esc(card.title)}" style="flex:1;">
                            <button class="btn-sm danger" data-delete-card="${ci}" data-card-idx="${cardIdx}" style="white-space:nowrap;">
                                <i class="fas fa-trash"></i> 删除卡片
                            </button>
                        </div>
                        ${card.news.map((n, ni) => renderNewsEditor(n, ci, ni, cardIdx)).join('')}
                        <div class="add-btn-row">
                            <button class="btn-sm primary" data-add-card-news="${ci}" data-card-idx="${cardIdx}">
                                <i class="fas fa-plus"></i> 添加新闻
                            </button>
                        </div>
                    </div>
                `).join('')}
                <div class="add-btn-row" style="margin-top:0.75rem;">
                    <button class="btn-sm primary" data-add-card="${ci}">
                        <i class="fas fa-plus"></i> 添加卡片
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    return panels + `
        <div class="add-btn-row">
            <button class="btn-sm primary" id="add-cat-btn">
                <i class="fas fa-plus"></i> 添加分类
            </button>
        </div>
    `;
}

// ==================== Ranking 板块 ====================
function renderRankingSection(sec) {
    const panels = sec.platforms.map((p, pi) => {
        const isPH = p.rankings.length > 0 && 'name' in p.rankings[0];
        return `
        <div class="admin-panel open" data-platform-index="${pi}">
            <div class="panel-header" data-toggle="panel">
                <div class="panel-header-info">
                    <div class="panel-icon" style="background:${p.softBg};color:${p.color};">
                        ${p.initial}
                    </div>
                    <span class="panel-name">${esc(p.name)}</span>
                    <span class="panel-count">${p.rankings.length} 条排名</span>
                </div>
                <div class="panel-header-actions" style="display:flex;align-items:center;gap:0.5rem;">
                    <button class="btn-sm danger" data-delete-platform="${pi}" onclick="event.stopPropagation()">
                        <i class="fas fa-trash"></i> 删除
                    </button>
                    <span class="panel-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="panel-body">
                <div class="panel-meta">
                    <div class="news-field">
                        <label>平台名称</label>
                        <input type="text" data-field="platform-name" data-pi="${pi}" value="${esc(p.name)}">
                    </div>
                    <div class="news-field">
                        <label>日期</label>
                        <input type="date" data-field="platform-date" data-pi="${pi}" value="${p.date}">
                    </div>
                    <div class="news-field">
                        <label>颜色</label>
                        <input type="color" data-field="platform-color" data-pi="${pi}" value="${p.color}" style="width:40px;height:32px;padding:2px;">
                    </div>
                </div>
                ${p.rankings.map((r, ri) => renderRankingEditor(r, pi, ri, isPH)).join('')}
                <div class="add-btn-row">
                    <button class="btn-sm primary" data-add-ranking="${pi}">
                        <i class="fas fa-plus"></i> 添加排名
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');

    return panels + `
        <div class="add-btn-row">
            <button class="btn-sm primary" id="add-platform-btn">
                <i class="fas fa-plus"></i> 添加榜单平台
            </button>
        </div>
    `;
}

function renderRankingEditor(r, pi, ri, isPH) {
    if (isPH) {
        return `
            <div class="admin-news-item" data-ranking-index="${ri}" data-pi="${pi}">
                <div class="news-field-row">
                    <div class="news-field">
                        <label>产品名称</label>
                        <input type="text" data-field="ph-name" data-pi="${pi}" data-ri="${ri}" value="${esc(r.name)}">
                    </div>
                    <div class="news-field">
                        <label>Upvotes</label>
                        <input type="text" data-field="ph-upvotes" data-pi="${pi}" data-ri="${ri}" value="${esc(r.upvotes)}">
                    </div>
                </div>
                <div class="admin-actions">
                    <button class="btn-sm danger" data-delete-ranking="${pi}" data-ri="${ri}">
                        <i class="fas fa-trash"></i> 删除此排名
                    </button>
                </div>
            </div>
        `;
    }
    return `
        <div class="admin-news-item" data-ranking-index="${ri}" data-pi="${pi}">
            <div class="news-field-row">
                <div class="news-field">
                    <label>模型名称</label>
                    <input type="text" data-field="rk-model" data-pi="${pi}" data-ri="${ri}" value="${esc(r.model)}">
                </div>
                <div class="news-field">
                    <label>分数</label>
                    <input type="text" data-field="rk-score" data-pi="${pi}" data-ri="${ri}" value="${esc(r.score)}">
                </div>
            </div>
            <div class="news-field-row">
                <div class="news-field">
                    <label>变化</label>
                    <select data-field="rk-change" data-pi="${pi}" data-ri="${ri}" style="padding:0.5rem;border:1px solid var(--border);border-radius:var(--radius-xs);font-family:inherit;">
                        <option value="up" ${r.change === 'up' ? 'selected' : ''}>上升</option>
                        <option value="same" ${r.change === 'same' ? 'selected' : ''}>持平</option>
                        <option value="down" ${r.change === 'down' ? 'selected' : ''}>下降</option>
                    </select>
                </div>
            </div>
            <div class="admin-actions">
                <button class="btn-sm danger" data-delete-ranking="${pi}" data-ri="${ri}">
                    <i class="fas fa-trash"></i> 删除此排名
                </button>
            </div>
        </div>
    `;
}

// ==================== 事件绑定 ====================
function bindPanelToggles(el) {
    el.querySelectorAll('[data-toggle="panel"]').forEach(header => {
        header.addEventListener('click', () => {
            header.closest('.admin-panel').classList.toggle('open');
        });
    });
}

function bindTagInputs(el) {
    el.querySelectorAll('.tag-input').forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const val = input.value.trim();
                if (!val) return;
                const row = input.closest('[data-tags-vi]');
                const vi = parseInt(row.dataset.tagsVi);
                const ni = parseInt(row.dataset.tagsNi);
                const cardIdx = row.dataset.cardIdx !== undefined ? parseInt(row.dataset.cardIdx) : undefined;
                const vendor = getVendor(vi, ni, cardIdx);
                if (!vendor) return;
                const news = vendor.news[ni];
                if (!news.tags) news.tags = [];
                if (!news.tags.includes(val)) {
                    news.tags.push(val);
                    renderEditor();
                }
            }
        });

        input.closest('.tags-row').addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.tag-remove');
            if (!removeBtn) return;
            const ti = parseInt(removeBtn.dataset.removeTag);
            const row = removeBtn.closest('[data-tags-vi]');
            const vi = parseInt(row.dataset.tagsVi);
            const ni = parseInt(row.dataset.tagsNi);
            const cardIdx = row.dataset.cardIdx !== undefined ? parseInt(row.dataset.cardIdx) : undefined;
            const vendor = getVendor(vi, ni, cardIdx);
            if (!vendor) return;
            vendor.news[ni].tags.splice(ti, 1);
            renderEditor();
        });
    });
}

function bindFieldChanges(el) {
    // 使用事件委托监听所有输入变化（change 保证失焦时一定触发，input 保证实时同步）
    el.addEventListener('change', (e) => {
        const target = e.target;
        if (!target.dataset.field) return;
        applyFieldChange(target);
    });
    el.addEventListener('input', (e) => {
        const target = e.target;
        if (!target.dataset.field) return;
        applyFieldChange(target);
    });

    // 删除厂商
    el.querySelectorAll('[data-delete-vendor]').forEach(btn => {
        btn.addEventListener('click', () => {
            const vi = parseInt(btn.dataset.deleteVendor);
            const sec = editingData.sections[currentSection];
            if (!confirm(`确认删除「${sec.vendors[vi].name}」及其所有新闻？`)) return;
            sec.vendors.splice(vi, 1);
            renderEditor();
        });
    });

    // 删除新闻
    el.querySelectorAll('[data-delete-news]').forEach(btn => {
        btn.addEventListener('click', () => {
            const vi = parseInt(btn.dataset.deleteNews);
            const ni = parseInt(btn.dataset.ni);
            const cardIdx = btn.dataset.cardIdx !== undefined ? parseInt(btn.dataset.cardIdx) : undefined;
            const vendor = getVendor(vi, ni, cardIdx);
            if (!vendor) return;
            if (!confirm('确认删除此新闻？')) return;
            vendor.news.splice(ni, 1);
            renderEditor();
        });
    });

    // 添加新闻
    el.querySelectorAll('[data-add-news]').forEach(btn => {
        btn.addEventListener('click', () => {
            const vi = parseInt(btn.dataset.addNews);
            const sec = editingData.sections[currentSection];
            sec.vendors[vi].news.push({
                title: '', summary: '', link: '#', tags: [], source: '', time: ''
            });
            renderEditor();
        });
    });

    // 添加厂商
    const addVendorBtn = el.querySelector('#add-vendor-btn');
    if (addVendorBtn) {
        addVendorBtn.addEventListener('click', () => {
            const sec = editingData.sections[currentSection];
            sec.vendors.push({
                name: '新厂商', color: '#8ab4d4', softBg: '#eef5fb', initial: '新', news: []
            });
            renderEditor();
        });
    }

    // Other: 删除分类
    el.querySelectorAll('[data-delete-cat]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.deleteCat);
            const sec = editingData.sections.other;
            if (!confirm(`确认删除「${sec.categories[ci].name}」？`)) return;
            sec.categories.splice(ci, 1);
            renderEditor();
        });
    });

    // Other: 添加分类
    const addCatBtn = el.querySelector('#add-cat-btn');
    if (addCatBtn) {
        addCatBtn.addEventListener('click', () => {
            editingData.sections.other.categories.push({
                name: '新分类', icon: 'fas fa-star', color: '#a0a8b0', softBg: '#f2f4f5', cards: []
            });
            renderEditor();
        });
    }

    // Other: 添加卡片
    el.querySelectorAll('[data-add-card]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.addCard);
            editingData.sections.other.categories[ci].cards.push({
                title: '新卡片', news: []
            });
            renderEditor();
        });
    });

    // Other: 删除卡片
    el.querySelectorAll('[data-delete-card]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.deleteCard);
            const cardIdx = parseInt(btn.dataset.cardIdx);
            const cat = editingData.sections.other.categories[ci];
            if (!confirm(`确认删除卡片「${cat.cards[cardIdx].title}」及其所有新闻？`)) return;
            cat.cards.splice(cardIdx, 1);
            renderEditor();
        });
    });

    // Other: 添加新闻（在卡片内）
    el.querySelectorAll('[data-add-card-news]').forEach(btn => {
        btn.addEventListener('click', () => {
            const ci = parseInt(btn.dataset.addCardNews);
            const cardIdx = parseInt(btn.dataset.cardIdx);
            editingData.sections.other.categories[ci].cards[cardIdx].news.push({
                title: '', summary: '', link: '#', tags: [], source: '', time: ''
            });
            renderEditor();
        });
    });

    // Ranking: 删除平台
    el.querySelectorAll('[data-delete-platform]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pi = parseInt(btn.dataset.deletePlatform);
            const sec = editingData.sections.ranking;
            if (!confirm(`确认删除「${sec.platforms[pi].name}」？`)) return;
            sec.platforms.splice(pi, 1);
            renderEditor();
        });
    });

    // Ranking: 添加平台
    const addPlatformBtn = el.querySelector('#add-platform-btn');
    if (addPlatformBtn) {
        addPlatformBtn.addEventListener('click', () => {
            editingData.sections.ranking.platforms.push({
                name: '新榜单', color: '#8ab4d4', softBg: '#eef5fb', initial: '新',
                date: editingData.date, rankings: []
            });
            renderEditor();
        });
    }

    // Ranking: 添加排名
    el.querySelectorAll('[data-add-ranking]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pi = parseInt(btn.dataset.addRanking);
            const platform = editingData.sections.ranking.platforms[pi];
            const isPH = platform.rankings.length > 0 && 'name' in platform.rankings[0];
            if (isPH) {
                platform.rankings.push({ name: '', upvotes: '', rank: platform.rankings.length + 1 });
            } else {
                platform.rankings.push({ model: '', score: '', change: 'same' });
            }
            renderEditor();
        });
    });

    // Ranking: 删除排名
    el.querySelectorAll('[data-delete-ranking]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pi = parseInt(btn.dataset.deleteRanking);
            const ri = parseInt(btn.dataset.ri);
            editingData.sections.ranking.platforms[pi].rankings.splice(ri, 1);
            renderEditor();
        });
    });
}

function applyFieldChange(input) {
    const field = input.dataset.field;
    const value = input.type === 'color' ? input.value : input.value;

    if (field === 'vendor-name') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].name = value;
    } else if (field === 'vendor-initial') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].initial = value;
    } else if (field === 'vendor-logo') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].logo = value;
    } else if (field === 'vendor-color') {
        const vi = parseInt(input.dataset.vi);
        editingData.sections[currentSection].vendors[vi].color = value;
    } else if (field === 'title' || field === 'summary' || field === 'source' || field === 'link' || field === 'time') {
        const vi = parseInt(input.dataset.vi);
        const ni = parseInt(input.dataset.ni);
        const cardIdx = input.dataset.cardIdx !== undefined ? parseInt(input.dataset.cardIdx) : undefined;
        const vendor = getVendor(vi, ni, cardIdx);
        if (vendor) vendor.news[ni][field] = value;
    } else if (field === 'card-title') {
        const ci = parseInt(input.dataset.ci);
        const cardIdx = parseInt(input.dataset.cardIdx);
        editingData.sections.other.categories[ci].cards[cardIdx].title = value;
    } else if (field === 'cat-name') {
        const ci = parseInt(input.dataset.ci);
        editingData.sections.other.categories[ci].name = value;
    } else if (field === 'cat-icon') {
        const ci = parseInt(input.dataset.ci);
        editingData.sections.other.categories[ci].icon = value;
    } else if (field === 'cat-color') {
        const ci = parseInt(input.dataset.ci);
        editingData.sections.other.categories[ci].color = value;
    } else if (field === 'platform-name') {
        const pi = parseInt(input.dataset.pi);
        editingData.sections.ranking.platforms[pi].name = value;
    } else if (field === 'platform-date') {
        const pi = parseInt(input.dataset.pi);
        editingData.sections.ranking.platforms[pi].date = value;
    } else if (field === 'platform-color') {
        const pi = parseInt(input.dataset.pi);
        editingData.sections.ranking.platforms[pi].color = value;
    } else if (field === 'ph-name') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].name = value;
    } else if (field === 'ph-upvotes') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].upvotes = value;
    } else if (field === 'rk-model') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].model = value;
    } else if (field === 'rk-score') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].score = value;
    } else if (field === 'rk-change') {
        const pi = parseInt(input.dataset.pi);
        const ri = parseInt(input.dataset.ri);
        editingData.sections.ranking.platforms[pi].rankings[ri].change = value;
    }
}

function getVendor(vi, ni, cardIdx) {
    if (ni !== undefined && currentSection === 'other') {
        const cat = editingData.sections.other.categories[vi];
        if (cardIdx !== undefined && cat.cards && cat.cards[cardIdx]) {
            return { news: cat.cards[cardIdx].news };
        }
        // 兼容旧逻辑：返回第一个卡片的 news
        if (cat.cards && cat.cards.length > 0) {
            return { news: cat.cards[0].news };
        }
        return { news: [] };
    }
    const sec = editingData.sections[currentSection];
    if (sec && sec.vendors && sec.vendors[vi]) {
        return sec.vendors[vi];
    }
    return null;
}

// ==================== 蘑菇助手 API 配置 ====================
const API_PROVIDER_STORAGE = 'chatbot-api-provider';
const API_KEY_STORAGE = 'chatbot-api-key';
const API_ENDPOINT_STORAGE = 'chatbot-api-endpoint';
const API_MODEL_STORAGE = 'chatbot-api-model';
const API_PROXY_STORAGE = 'chatbot-api-proxy';

const PROVIDERS = {
    openai:    { endpoint: 'https://api.openai.com/v1/chat/completions', model: 'gpt-4o', format: 'openai' },
    deepseek:  { endpoint: 'https://api.deepseek.com/v1/chat/completions', model: 'deepseek-chat', format: 'openai' },
    moonshot:  { endpoint: 'https://api.moonshot.cn/v1/chat/completions', model: 'moonshot-v1-8k', format: 'openai' },
    zhipu:     { endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions', model: 'glm-4-flash', format: 'openai' },
    qwen:      { endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', model: 'qwen-plus', format: 'openai' },
    anthropic: { endpoint: 'https://api.anthropic.com/v1/messages', model: 'claude-sonnet-4-20250514', format: 'anthropic' },
    custom:    { endpoint: '', model: '', format: 'openai' }
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

    // 自动填充
    if (!endpoint.value || !model.value) {
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
    if (ghTokenEl) ghTokenEl.value = ghConfig.token;
    if (ghOwnerEl) ghOwnerEl.value = ghConfig.owner;
    if (ghRepoEl) ghRepoEl.value = ghConfig.repo;

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
    if (status) { status.textContent = 'Token 已保存 ✅'; status.style.color = '#10A37F'; }
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
        var contentBase64 = btoa(unescape(encodeURIComponent(dataJsContent)));

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
        // 从服务端拉取合并远程日志
        try {
            var auditUrl = 'https://api.github.com/repos/' + config.owner + '/' + config.repo + '/contents/audit-log.json';
            var auditGetResp = await fetch(auditUrl, { headers: headers });
            if (auditGetResp.ok) {
                var remoteAudit = JSON.parse(atob((await auditGetResp.json()).content));
                var remoteSha = (await auditGetResp.json()).sha;
                // 合并去重
                var existingTimes = new Set(remoteAudit.map(function(e) { return e.time; }));
                auditLog.forEach(function(e) {
                    if (!existingTimes.has(e.time)) remoteAudit.unshift(e);
                });
                auditLog = remoteAudit.slice(0, 100);
                var auditContent = btoa(unescape(encodeURIComponent(JSON.stringify(auditLog, null, 2))));
                await fetch(auditUrl, {
                    method: 'PUT',
                    headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                    body: JSON.stringify({ message: 'audit: ' + opName + ' 操作记录', content: auditContent, branch: 'main', sha: remoteSha })
                });
            } else {
                // 首次创建
                var auditContent = btoa(unescape(encodeURIComponent(JSON.stringify(auditLog, null, 2))));
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
