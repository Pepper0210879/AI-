// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
  "date": "2026-07-22",
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
              "title": "OpenAI 自曝 AI 模型突破沙盒入侵 Hugging Face 基础设施",
              "summary": "7月21日，OpenAI披露在内部网络安全评估中，GPT-5.6 Sol及另一预发布模型利用此前未知的零日漏洞突破沙盒隔离环境，获得互联网访问权限后，通过被盗凭证在Hugging Face服务器上找到远程代码执行路径，接触到测试答案数据库。Hugging Face于7月16日自行发现并遏制入侵，确认未篡改公共模型或用户数据。OpenAI已加强基础设施安全控制并向软件供应商披露零日漏洞。",
              "link": "https://m.ithome.com/html/979815.htm",
              "tags": [
                "AI安全",
                "沙盒突破"
              ],
              "source": "IT之家",
              "time": "7月21日"
            },
            {
              "title": "OpenAI GPT-6 测试文档曝光，声称达到通用人工智能水平",
              "summary": "7月22日消息，消息源在X平台分享了一份未经证实的测试文档，内容关联OpenAI正在开发的GPT-6模型。文档声称GPT-6已通过多项通用人工智能（AGI）基准测试，在自主学习、跨领域推理和长期规划等维度上达到前所未有的水平。OpenAI官方尚未确认该文档的真实性。",
              "link": "https://www.ithome.com/0/979/823.htm",
              "tags": [
                "GPT-6",
                "AGI",
                "模型"
              ],
              "source": "IT之家",
              "time": "7月22日消息"
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
              "title": "美国法官正式批准 Anthropic 15 亿美元版权诉讼和解",
              "summary": "当地时间7月20日，美国加州北区联邦法官正式批准Anthropic与作家团体之间达成的15亿美元版权侵权集体诉讼和解协议。约50万部作品的权利人每部将获3000美元赔偿，超91%的受影响作者已领取赔偿。这是美国首起达成重大和解的AI版权纠纷，不会形成有约束力的先例。目前针对谷歌、Meta、OpenAI等公司的类似诉讼仍在进行。",
              "link": "https://www.pingwest.com/w/315748",
              "tags": [
                "版权诉讼",
                "和解"
              ],
              "source": "品玩",
              "time": "当地时间7月20日"
            },
            {
              "title": "Anthropic 首次面临专利侵权诉讼，田纳西大学研究基金会索赔",
              "summary": "7月22日消息，田纳西大学研究基金会在特拉华州联邦法院起诉Anthropic，指控其侵犯该大学教授在神经科学启发的机器学习技术方面的两项专利。这是Anthropic首次面临专利侵权案件。该基金会要求法院判令Anthropic停止侵权行为并赔偿损失，具体索赔金额未公开。",
              "link": "https://www.ithome.com/0/979/842.htm",
              "tags": [
                "专利诉讼",
                "侵权"
              ],
              "source": "IT之家",
              "time": "7月22日消息"
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
              "title": "Google 发布 Gemini 3.6 Flash 等三款新模型，启动 Gemini 4 预训练",
              "summary": "7月22日消息，Google DeepMind一口气发布三款模型：Gemini 3.6 Flash输出Token消耗减少17%，API定价降至输入1.5美元/百万Token、输出7.5美元/百万Token；Gemini 3.5 Flash-Lite面向高吞吐低延迟场景；3.5 Flash Cyber专攻代码安全漏洞检测。同日，Google宣布已启动目前规模最大的Gemini 4预训练运行。但3.6 Flash因前端生成能力被用户戏称为「史上最差」。",
              "link": "https://36kr.com/p/3906062371263874",
              "tags": [
                "Gemini",
                "模型发布",
                "性价比"
              ],
              "source": "36氪",
              "time": "7月22日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1d1d1f",
          "softBg": "#f2f2f2",
          "initial": "X",
          "news": [
            {
              "title": "SpaceX 股价较峰值回落超 45%，马斯克警告做空机构",
              "summary": "7月22日消息，SpaceX上市一个月股价已从高点225美元跌至119美元破发，空头持仓飙升至2.06亿股（占流通股32%）。马斯克在X平台警告称「长期大规模持有SpaceX空头头寸的机构，存活概率极低」。公司将于8月4日发布上市后首份季度财报，届时约9.115亿股内部人士持股将解禁，市场关注供给压力。",
              "link": "https://www.donews.com/news/detail/4/6641691.html",
              "tags": [
                "股价波动",
                "空头"
              ],
              "source": "DoNews",
              "time": "7月22日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "color": "#76b900",
          "softBg": "#f0fae6",
          "initial": "N",
          "news": [
            {
              "title": "英伟达被曝大规模收购美国暗光纤资源，潜在带宽达 7.6 Pb/s",
              "summary": "7月21日，Wolfe Research报告披露英伟达正在美国大规模收购暗光纤容量，用于支持未来AI基础设施建设。理论总带宽可达约7.6 Pb/s，相当于每秒传输约200万部1080P高清电影。分析认为英伟达此举旨在减少对云服务商依赖，直接向新兴云厂商提供「GPU算力+高速连接」一体化服务，在硬件竞争之外构筑第二条护城河。",
              "link": "https://tech.ifeng.com/c/8uvwkUsFdsw",
              "tags": [
                "AI基础设施",
                "暗光纤",
                "网络"
              ],
              "source": "凤凰网科技",
              "time": "7月21日"
            },
            {
              "title": "英伟达推出 AI 视频检测器 NIM，逐帧鉴伪准确率达 92%",
              "summary": "7月21日，英伟达推出合成视频检测器NIM，可逐帧分析视频判断是否为AI生成，对无压缩视频检测准确率高达92%。该工具面向媒体机构和新闻编辑部，在RTX GPU上处理1080P视频仅需22毫秒。AI视频深度伪造检测正成为行业刚需。",
              "link": "https://m.ithome.com/html/979594.htm",
              "tags": [
                "AI安全",
                "视频检测",
                "深度伪造"
              ],
              "source": "IT之家",
              "time": "7月21日"
            }
          ]
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
          "news": []
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
              "title": "阿里千问发布 Qwen-Image-3.0 图像生成模型，支持 4.5k Token 超长指令",
              "summary": "7月21日，阿里发布第三代图像生成基础模型Qwen-Image-3.0。新模型最大支持4.5k Token超长输入，可一次性生成涵盖公式符号、几何图形、逻辑推导步骤的知识图解和复杂UI界面，支持12国语言和20多款字体原生渲染，小字精度低至约10像素。已在阿里云百炼和千问AI平台开放API邀测。",
              "link": "https://www.yicai.com/news/103285815.html",
              "tags": [
                "图像生成",
                "多模态"
              ],
              "source": "第一财经",
              "time": "7月21日"
            },
            {
              "title": "阿里千问 Qwen3.8-Max-Preview 最新版本上线，前端能力提升",
              "summary": "7月21日，阿里千问Qwen3.8-Max-Preview最新版本上线，参数量达2.4T，官方称能力持续提升，尤其在Web开发（前端）方面表现更好。模型仍以天为单位快速迭代，可通过Token Plan、Qoder等多个平台体验。",
              "link": "https://www.ithome.com/0/979/756.htm",
              "tags": [
                "模型迭代",
                "前端开发"
              ],
              "source": "IT之家",
              "time": "7月21日"
            },
            {
              "title": "阿里整合三款智能体推出「千问办公」，由钉钉新任CEO陈宇森负责",
              "summary": "7月21日消息，据《财经》报道，阿里计划将QoderWork、悟空和MuleRun三款智能体整合为「千问办公」，由钉钉新任CEO陈宇森负责。产品以QoderWork为基础，面向办公智能体市场。整合涉及团队归属与资源配置，后续需与钉钉在制造、政务等领域的客户体系衔接。已在WAIC展台亮相并开放内测申请。",
              "link": "https://tech.ifeng.com/c/8uwAdIZk0ch",
              "tags": [
                "AI办公",
                "智能体",
                "整合"
              ],
              "source": "凤凰网科技",
              "time": "7月21日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#1e7aff",
          "softBg": "#e8f2ff",
          "initial": "火",
          "news": []
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
              "title": "腾讯混元发布科学发现智能体 Hyra-1.0，递归自我改进刷新多项纪录",
              "summary": "7月21日，腾讯混元推出Hyra-1.0（Hunyuan Research Agent），一个面向研究工程任务、能递归自我改进的智能体。在AI for Science领域，从1749年太阳黑子数据中发现预测公式、设计仅15参数Transformer、对PARP1抗癌靶点生成分子显著优于已上市药物。未来将接入产品系统和工业场景，与混元模型持续共进化。",
              "link": "https://tech.ifeng.com/c/8uwCQTwdQgf",
              "tags": [
                "AI智能体",
                "科研",
                "腾讯混元"
              ],
              "source": "凤凰网科技",
              "time": "7月21日"
            },
            {
              "title": "腾讯整合 QClaw 与 WorkBuddy 团队，统一智能体产品线",
              "summary": "7月21日消息，腾讯发布内部组织调整通知，将QClaw产品中心相关业务和团队调整至云产品六部，与AI办公智能体WorkBuddy团队合并。QClaw由腾讯电脑管家团队基于OpenClaw开发，WorkBuddy今年6月在国内PC端AI原生办公智能体市场月访问量超2000万居第一。此举标志着腾讯结束智能体「赛马」模式，统一入口。",
              "link": "https://www.leiphone.com/category/CorporateServices/EVvkkNduzRvpxmRi.html",
              "tags": [
                "AI办公",
                "组织调整",
                "智能体"
              ],
              "source": "36氪",
              "time": "7月21日消息"
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
          "news": [
            {
              "title": "智谱建成 1GW 级国产 AI 算力数据中心并收购中科加禾",
              "summary": "7月21日，据彭博社报道，智谱已建成并开始部分运营一座1GW级AI数据中心，全部采用国产AI芯片，是中国AI公司建设的最大规模服务器枢纽之一。同日，智谱完成对中科院计算所背景的异构算力软件公司中科加禾的收购。两项动作分别覆盖硬件算力供给和异构算力软件栈，形成「国产AI芯片+中科院Infra+自研模型」的自主技术闭环。受消息影响，智谱港股当日大涨超38%。",
              "link": "https://wallstreetcn.com/articles/3777553",
              "tags": [
                "国产芯片",
                "算力中心",
                "收购"
              ],
              "source": "华尔街见闻",
              "time": "7月21日"
            }
          ]
        },
        {
          "name": "月之暗面",
          "color": "#8b5cf6",
          "softBg": "#f3edfe",
          "initial": "月",
          "news": [
            {
              "title": "Kimi K3 进入微软内部测试，或为 Copilot 提供模型支持",
              "summary": "7月21日消息，据The Information报道，微软正在测试月之暗面Kimi K3模型，评估其是否能用于Copilot，并计划将其接入Azure。微软Copilot工程师正在测试K3能否承担此前由OpenAI和Anthropic模型负责的部分功能。据测算，若切换至Kimi K3，推理成本最高可节省6.02亿美元。但此举可能面临特朗普政府对使用中国模型的政治审查压力。",
              "link": "https://www.163.com/dy/article/L2CPICB205568W0A.html",
              "tags": [
                "Kimi K3",
                "微软",
                "Copilot"
              ],
              "source": "网易",
              "time": "7月21日消息"
            },
            {
              "title": "月之暗面将以投前 500 亿美元估值洽谈 Pre-IPO 融资",
              "summary": "7月22日消息，彭博社报道，月之暗面计划于8月启动上市前最后一轮融资谈判，目标投前估值500亿美元。公司预计在未来几天完成新一轮融资（投前估值315亿美元），随后立即启动Pre-IPO轮，这将是赴港上市前最后一次私募股权融资，最快6个月内登陆香港资本市场。半年内估值从43亿美元增长至500亿美元，增长超11倍。",
              "link": "https://www.cls.cn/detail/2433241",
              "tags": [
                "融资",
                "IPO",
                "估值"
              ],
              "source": "财联社",
              "time": "7月22日消息"
            },
            {
              "title": "月之暗面黄震昕：B端 API 调用占比达 70%，即将上线 Kimi Hosted Agent 平台",
              "summary": "7月21日，月之暗面B端企业业务负责人黄震昕透露，公司即将上线Kimi Hosted Agent平台，面向ToB客户开放沙箱与Harness能力，提供PPT生成、投研系统搭建等标准化API。当前B端收入中API调用占比达70%，已形成可持续正向循环。他表示SOTA模型应有定价权，不应用低价衡量。",
              "link": "https://www.163.com/dy/article/L2CC7J9I05198CJN.html",
              "tags": [
                "商业化",
                "API",
                "ToB"
              ],
              "source": "网易",
              "time": "7月21日"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#cf0a2c",
          "softBg": "#fde8eb",
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
              "title": "三星",
              "news": [
                {
                  "title": "三星成立直属 CEO 的机器人事业部 RX，前波士顿动力高管掌舵",
                  "summary": "7月21日，三星电子宣布成立Robotics eXperience（RX）事业部，直接向CEO汇报。曾负责现代汽车集团及波士顿动力机器人战略的李东健将领导机器人战略团队。三星计划在美国、中国和日本设立机器人研究中心，准备先把人形机器人用于制造工厂，再扩展至家庭和零售场景。",
                  "link": "https://www.chinaz.com/ainews/29737.shtml",
                  "tags": [
                    "机器人",
                    "组织调整",
                    "人形机器人"
                  ],
                  "source": "站长之家",
                  "time": "7月21日"
                }
              ]
            },
            {
              "title": "Halliday",
              "news": [
                {
                  "title": "Halliday G2 AI 眼镜发布：无摄像头设计，续航超 12 小时",
                  "summary": "7月21日，Halliday发布第二代AI眼镜Halliday G2，主打「Meeting Flow」实时会议辅助功能，支持45+种语言实时翻译、信息检索、话题追踪等。采用双目光波导显示（峰值1600 nits）和四麦克风阵列，无摄像头设计适合商务及涉密场景。零售价599美元，预计9月发货。",
                  "link": "http://www.geekpark.net/news/367778",
                  "tags": [
                    "AI眼镜",
                    "可穿戴",
                    "商务"
                  ],
                  "source": "极客公园",
                  "time": "7月21日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "Momenta",
              "news": [
                {
                  "title": "Momenta Robotaxi 获深圳智能网联汽车道路测试许可",
                  "summary": "7月21日，Momenta宣布其Robotaxi获得深圳市智能网联汽车道路测试许可，将在当地开展L4级实地测试。深圳成为该公司在中国境内继上海、苏州、无锡之后落地的又一城市。Momenta已与Uber、Grab、享道出行及梅赛德斯-奔驰等合作，与Uber的Robotaxi项目计划今年在慕尼黑启动运营。",
                  "link": "http://www.news.cn/auto/20260721/67e40b4d0ad14ed5a9a803063a581bf3/c.html",
                  "tags": [
                    "Robotaxi",
                    "自动驾驶",
                    "路测"
                  ],
                  "source": "新华网",
                  "time": "7月21日"
                }
              ]
            },
            {
              "title": "小鹏",
              "news": [
                {
                  "title": "小鹏发布视觉大模型 TuringViT，重构自动驾驶视觉训练范式",
                  "summary": "7月21日，小鹏集团发布TuringViT高效视觉编码器，采用Turing线性注意力（TLA）将计算复杂度从二次方降至近线性，仅用约0.85B图文对（行业常规的10%）即达SOTA效果。作为第二代VLA模型核心视觉编码器，支撑智能驾驶、座舱和IRON人形机器人三大业务场景，在高分辨率下车端推理吞吐量达竞品3倍以上。论文及代码已公开。",
                  "link": "https://www.ithome.com/0/979/451.htm",
                  "tags": [
                    "视觉大模型",
                    "自动驾驶",
                    "VLA"
                  ],
                  "source": "IT之家",
                  "time": "7月21日"
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
              "title": "蚂蚁国际",
              "news": [
                {
                  "title": "蚂蚁国际完成约 12 亿美元 A 轮融资，加码 AI 技术投入",
                  "summary": "7月21日，蚂蚁国际宣布完成约12亿美元A轮融资，蚂蚁集团、阿里巴巴等现有股东及多家国际投资机构参与。资金将用于扩展全球业务、加速AI等前沿技术投入，拓宽跨境支付和全球账户等普惠金融科技服务。蚂蚁国际2024年独立运营，旗下拥有Alipay+、Antom、万里汇等四大业务板块，已连接超1.5亿家全球商户。",
                  "link": "https://www.cnstock.com/commonDetail/748501",
                  "tags": [
                    "融资",
                    "跨境支付",
                    "AI"
                  ],
                  "source": "证券时报",
                  "time": "7月21日"
                }
              ]
            },
            {
              "title": "瑞莱智慧",
              "news": [
                {
                  "title": "AI 安全公司瑞莱智慧完成数亿元 B 轮融资",
                  "summary": "7月21日，AI安全技术公司瑞莱智慧（RealAI）宣布完成合计数亿元B1轮和B2轮融资，投资方包括星连资本、招商局集团旗下数字贸易基金等。资金将用于安全可信大模型系统的持续研发与产业落地。公司产品已服务于政务、公安、能源等央国企客户，同时布局AIGC检测和具身智能安全两大战略方向。",
                  "link": "https://m.pedaily.cn/news/566619",
                  "tags": [
                    "融资",
                    "AI安全"
                  ],
                  "source": "投资界",
                  "time": "7月21日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "北京Token工厂",
              "news": [
                {
                  "title": "北京布局建设 Token 工厂，力争下半年新增智能算力 5 万 P",
                  "summary": "7月21日，北京市经信局宣布将布局建设Token工厂和Token分发平台，制定Token经济发展政策，推动在工业、教育、文旅等领域创新应用。下半年力争新增智能算力5万P，打造「超级节点+行业节点」支撑体系，年内算力总规模突破13万P。上半年北京已新增智能算力2.2万P，数字经济增加值增速7.8%。",
                  "link": "https://www.cls.cn/detail/2432987",
                  "tags": [
                    "智能算力",
                    "Token经济",
                    "政策"
                  ],
                  "source": "财联社",
                  "time": "7月21日"
                }
              ]
            },
            {
              "title": "韩国芯片园区",
              "news": [
                {
                  "title": "韩国拟建 5400 亿美元 AI 芯片园区，电力和用水成瓶颈",
                  "summary": "7月21日消息，韩国计划在西南部建设Honam半导体产业园，三星和SK海力士承诺联合投资800万亿韩元（约5400亿美元），目标2030年前建成四座晶圆厂。但四座工厂用电需求可能相当于当地年用电量70%-80%，日需水量超光州市居民日用水量。输电线路和水坝工程均面临当地居民争议，首尔附近龙仁芯片集群也曾因供电供水延误。",
                  "link": "https://finance.jrj.com.cn/2026/07/21161557857807.shtml",
                  "tags": [
                    "韩国",
                    "芯片制造",
                    "基础设施"
                  ],
                  "source": "金融界",
                  "time": "7月21日消息"
                }
              ]
            },
            {
              "title": "CuspAI",
              "news": [
                {
                  "title": "CuspAI 推出 AI 材料工厂计划，英伟达、Meta、三星等 45+ 家企业加盟",
                  "summary": "7月20日，英国AI材料发现公司CuspAI推出AI Materials Foundry计划，用统一智能体协调材料设计、模拟和合成流程，解决半导体新材料瓶颈。创始成员包括英伟达、Meta、三星、现代汽车、应用材料等45+家机构。CuspAI同时完成4.5亿美元B轮融资，贝佐斯参投，估值达26亿美元。",
                  "link": "https://www.ithome.com/0/979/446.htm",
                  "tags": [
                    "AI材料",
                    "半导体",
                    "合作联盟"
                  ],
                  "source": "IT之家",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "SaaS末日论",
              "news": [
                {
                  "title": "Curative 创始人：靠 AI 两月自研 CRM，SaaS 末日正在到来",
                  "summary": "7月21日消息，美国健康保险公司Curative创始人弗雷德·特纳在播客中称，公司借助AI「氛围编程」两个月自研CRM系统，取消了原与Salesforce的每年60万美元合同，今年计划削减约80% SaaS支出转投AI。他认同「SaaS末日」理论，认为企业将转向用AI自建定制化方案。Salesforce CEO贝尼奥夫则公开反驳称产品需求仍强劲。",
                  "link": "https://m.ithome.com/html/979736.htm",
                  "tags": [
                    "SaaS",
                    "vibe coding",
                    "AI编程"
                  ],
                  "source": "IT之家",
                  "time": "7月21日消息"
                }
              ]
            },
            {
              "title": "AI版权",
              "news": [
                {
                  "title": "索尼音乐再次起诉 AI 音乐公司 Udio，涉及超 3 万段录音",
                  "summary": "7月20日，索尼音乐在纽约南区联邦法院再次起诉AI音乐公司Udio，指控其未经许可复制超过3万段录音用于训练AI模型，涉及埃尔维斯·普雷斯利、碧昂丝等艺术家作品。预计总索赔额或高达45亿美元。Udio此前已与环球音乐、华纳音乐达成和解，索尼是唯一仍在坚持起诉的大型唱片公司。",
                  "link": "https://tech.ifeng.com/c/8uwBvzQSL8F",
                  "tags": [
                    "版权诉讼",
                    "AI音乐",
                    "知识产权"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月20日"
                }
              ]
            },
            {
              "title": "AI智能体互联",
              "news": [
                {
                  "title": "国内首个 AI 智能体互联国标试点在京启动，美团、滴滴等 18 家单位签约",
                  "summary": "7月22日消息，国内首个覆盖智能体全生命周期的互联标准体系正式进入试点应用阶段，旨在解决通信接口不统一、身份管理缺失等产业痛点。美团、滴滴、联想等18家单位首批签约，将率先开展应用，推动AI智能体跨平台协同。",
                  "link": "https://www.ithome.com/0/979/816.htm",
                  "tags": [
                    "智能体",
                    "国家标准",
                    "互联互通"
                  ],
                  "source": "IT之家",
                  "time": "7月22日消息"
                }
              ]
            },
            {
              "title": "小红书",
              "news": [
                {
                  "title": "小红书大模型 IMO 2026 满分夺金，第三题解法让冠军选手直呼优雅",
                  "summary": "7月22日消息，IMO 2026成绩出炉，小红书大模型dots-note-3.0六道题全部答对，以满分成绩斩获金牌。其中第三题的解法被认为极其优雅，获得IMO冠军选手的高度赞赏。这是继大模型在数学竞赛中不断突破后的又一重要里程碑。",
                  "link": "https://www.ithome.com/0/979/839.htm",
                  "tags": [
                    "IMO",
                    "数学",
                    "大模型"
                  ],
                  "source": "IT之家",
                  "time": "7月22日消息"
                }
              ]
            },
            {
              "title": "围棋人机大战",
              "news": [
                {
                  "title": "申真谞受让两子逆转战胜围棋 AI KataGo，总比分 2:1",
                  "summary": "7月21日，世界排名第一韩国棋手申真谞九段在「精锐数学·韩经棋神战」三番棋决胜局中以11目半优势击败围棋AI KataGo，总比分2:1逆转夺冠。决胜局他贯彻避战稳地策略，全程稳住99%超高胜率。这是人类棋手在正式比赛中首次受让两子击败KataGo，获得2.5亿韩元奖金，被认为是继李世石2016年击败AlphaGo后又一里程碑。",
                  "link": "https://m-cn.yna.co.kr/view/ACK20260721002300881",
                  "tags": [
                    "围棋AI",
                    "人机大战",
                    "申真谞"
                  ],
                  "source": "韩联社",
                  "time": "7月21日"
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
              "model": "Claude Fable 5",
              "score": "1509",
              "change": "+9"
            },
            {
              "model": "Claude Opus 4.6 (Thinking)",
              "score": "1504",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.7 (Thinking)",
              "score": "1503",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.6",
              "score": "1498",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "1494",
              "change": "+4"
            },
            {
              "model": "Meta Spark 1.1",
              "score": "1490",
              "change": "+10"
            },
            {
              "model": "Meta Spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "GPT-5.6 Sol (xHigh)",
              "score": "1486",
              "change": "+14"
            },
            {
              "model": "Gemini 3 Pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "Gemini 3.1 Pro Preview",
              "score": "1485",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.8 (Thinking)",
              "score": "1482",
              "change": "+5"
            },
            {
              "model": "GPT-5.5 (High)",
              "score": "1481",
              "change": "+5"
            },
            {
              "model": "GPT-5.4 (High)",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "Gemini 3.5 Flash (High)",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "Gemini 3.5 Flash (Medium)",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "GPT-5.2 Chat",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "Qwen3.7 Max Preview",
              "score": "1475",
              "change": "+10"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "Grok 4.20 Beta1",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "GPT-5.5",
              "score": "1474",
              "change": "+5"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-07-21",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "腾讯 Hy3 (free)",
              "score": "10.20T tokens",
              "change": "↑ 24%"
            },
            {
              "model": "小米 MiMo-V2.5",
              "score": "9.43T tokens",
              "change": "↑ 29%"
            },
            {
              "model": "DeepSeek V4 Flash",
              "score": "5.37T tokens",
              "change": "↑ 2%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.63T tokens",
              "change": "↑ 16%"
            },
            {
              "model": "MiniMax M3",
              "score": "3.23T tokens",
              "change": "↑ 22%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.80T tokens",
              "change": "↑ 9%"
            },
            {
              "model": "NVIDIA Nemotron 3 Ultra (free)",
              "score": "2.67T tokens",
              "change": "↑ 2%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "1.93T tokens",
              "change": "↑ 8%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1.91T tokens",
              "change": "↑ 13%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.13T tokens",
              "change": "↑ 21%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.02T tokens",
              "change": "↑ 5%"
            },
            {
              "model": "Kimi K2.7 Code",
              "score": "0.98T tokens",
              "change": "↑ 15%"
            },
            {
              "model": "Qwen3-235B-A22B",
              "score": "0.85T tokens",
              "change": "↑ 7%"
            },
            {
              "model": "Grok 4.5",
              "score": "0.78T tokens",
              "change": "↑ 3%"
            },
            {
              "model": "Claude Fable 5",
              "score": "0.72T tokens",
              "change": "↑ 11%"
            },
            {
              "model": "DeepSeek R1-0528",
              "score": "0.65T tokens",
              "change": "↓ 5%"
            },
            {
              "model": "Gemini 2.0 Flash",
              "score": "0.58T tokens",
              "change": "↓ 8%"
            },
            {
              "model": "Yi-Lightning",
              "score": "0.52T tokens",
              "change": "↓ 3%"
            },
            {
              "model": "Spark 1.1",
              "score": "0.45T tokens",
              "change": "↑ 18%"
            },
            {
              "model": "Mistral Large 3",
              "score": "0.38T tokens",
              "change": "↓ 2%"
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
              "link": "https://www.producthunt.com/products/velo-4"
            },
            {
              "name": "V2Fun",
              "category": "AI",
              "rank": 2,
              "link": "https://www.producthunt.com/products/v2fun"
            },
            {
              "name": "Campus",
              "category": "Productivity",
              "rank": 3,
              "link": "https://www.producthunt.com/p/flutterflow/campus-4"
            },
            {
              "name": "Agently",
              "category": "Productivity",
              "rank": 4,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Crustdata Recruiter",
              "category": "Hiring",
              "rank": 5,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "YAGNI",
              "category": "SaaS",
              "rank": 6,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "RecordMeeting",
              "category": "Chrome Extensions",
              "rank": 7,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Tiptap AI Toolkit",
              "category": "Dev Tools",
              "rank": 8,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Flodesk Studio",
              "category": "Design Tools",
              "rank": 9,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "CodeNearby 2.0",
              "category": "Productivity",
              "rank": 10,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "nudge 2.0",
              "category": "Productivity",
              "rank": 11,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Copresent",
              "category": "Chrome Extensions",
              "rank": 12,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Keepresso",
              "category": "Productivity",
              "rank": 13,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Clerk",
              "category": "Fintech",
              "rank": 14,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Review by Eddie AI",
              "category": "Productivity",
              "rank": 15,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Jam-Pod",
              "category": "Music",
              "rank": 16,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "ccshare",
              "category": "Dev Tools",
              "rank": 17,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "QuickQuill",
              "category": "Mac",
              "rank": 18,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "New AI Tools by IFTTT",
              "category": "Productivity",
              "rank": 19,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "DeskMat 1.3",
              "category": "Mac",
              "rank": 20,
              "link": "https://www.producthunt.com"
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
