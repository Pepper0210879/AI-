// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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

// ==================== 厂商/分类/平台 展示配置 ====================
// data.json 只有 name+news，渲染所需的 color/softBg/initial/icon 由此补充
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
    const isManualEdit = lsData?._manualEdit && lsDate === rawDate;

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
    // 恢复上次浏览的日期，避免刷新后自动跳回今天
    const savedDate = localStorage.getItem(LAST_VIEWED_DATE_KEY);
    const todayStr = getTodayStr();
    if (savedDate && savedDate !== todayStr) {
        const confirmed = getConfirmedDates();
        const snap = confirmed[savedDate];
        if (snap) {
            newsData = snap;
            enrichData(newsData);
            updateHeaderDate(savedDate);
            renderContent();
            setupEventListeners();
            // 同步日期选择器的显示值
            const dateInput = document.getElementById('custom-date-input');
            if (dateInput) dateInput.value = savedDate;
            return;
        }
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

    let lastValidDate = todayStr;

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
