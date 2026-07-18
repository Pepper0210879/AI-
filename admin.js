const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-18",
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
              "title": "奥尔特曼调侃Anthropic新广告：以为是讽刺短片",
              "summary": "7月18日消息，OpenAI CEO山姆·奥尔特曼在社交平台发文调侃Anthropic最新发布的宣传片，称起初以为这是一部讽刺短片，甚至特意确认发布账号是否为仿冒账号。Anthropic该广告通过燃烧房屋、面部识别监控等画面探讨AI社会影响，整体风格偏悲观警示，引发广泛争议。",
              "link": "https://finance.sina.com.cn/tech/roll/2026-07-18/doc-iniikuft2480441.shtml",
              "tags": [
                "Anthropic",
                "广告",
                "争议"
              ],
              "source": "极客公园",
              "time": "7月18日消息"
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
              "title": "Anthropic加速推进IPO，最快10月挂牌上市",
              "summary": "7月16日消息，消息称Anthropic正在安排与投资者会面，负责IPO的承销银行摩根士丹利、高盛和摩根大通将在未来几周安排投资者与公司管理层会谈。Anthropic已于6月1日向SEC秘密提交S-1注册声明草案，若进展顺利最快10月上市。公司在5月完成H轮融资后估值达9650亿美元，首次超过OpenAI成为全球估值最高的未上市AI公司之一。",
              "link": "https://wallstreetcn.com/articles/3777045",
              "tags": [
                "IPO",
                "融资",
                "估值"
              ],
              "source": "华尔街见闻",
              "time": "7月16日消息"
            },
            {
              "title": "纳德拉吐槽Anthropic Fable模型：内容管控过于严苛",
              "summary": "当地时间7月16日，微软CEO萨提亚·纳德拉在面向Copilot AI工程师的内部会议上批评Anthropic旗下Fable模型的内容管控政策，称其设置各类限制「毫无道理」。据Anthropic支持页面，当用户向Fable询问大规模AI模型搭建等敏感话题时，系统有时会调用旧版本模型生成回复。纳德拉认为不应让全世界只有少数两家公司拥有AI的「令牌资本」。",
              "link": "https://tech.ifeng.com/c/8upZNThoGf6",
              "tags": [
                "AI安全",
                "内容管控",
                "微软"
              ],
              "source": "凤凰科技",
              "time": "当地时间7月16日"
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
              "title": "英特尔与Google Cloud深化战略合作，部署Gemini加速数字化转型",
              "summary": "7月17日消息，英特尔与Google Cloud宣布深化多年战略合作，通过部署Gemini Enterprise和Google Cloud基础设施加速英特尔全公司范围数字化转型。Google Cloud的C4和N4计算实例将作为英特尔本地算力补充，借助Gemini高级推理能力引入智能体编码辅助和工程自动化，缩短芯片设计周期，提升跨部门协同效率。",
              "link": "https://tech.ifeng.com/c/8upkOWbBDMM",
              "tags": [
                "AI合作",
                "芯片设计",
                "云服务"
              ],
              "source": "凤凰科技",
              "time": "7月17日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#000000",
          "softBg": "#f2f2f2",
          "initial": "X",
          "news": []
        },
        {
          "name": "NVIDIA",
          "color": "#76b900",
          "softBg": "#f1f9e7",
          "initial": "N",
          "news": []
        },
        {
          "name": "Meta",
          "color": "#1877f2",
          "softBg": "#e8f2fe",
          "initial": "M",
          "news": []
        },
        {
          "name": "苹果",
          "color": "#555555",
          "softBg": "#f0f0f0",
          "initial": "苹",
          "news": [
            {
              "title": "苹果市值重返全球第一，时隔3个月超越英伟达",
              "summary": "7月17日，苹果股价上涨，市值上升至约4.90万亿美元，时隔3个月超越英伟达重返全球市值第一。英伟达下跌3.2%，市值缩水至约4.86万亿美元。自6月底以来苹果股价累计上涨约20%，新版Siri获积极评价、苹果AI有望进入中国市场以及折叠屏iPhone预期均提振了市场信心。汇丰将苹果评级上调至买入，认为其拥有25亿台存量设备，有望以较低基础设施投入获得AI红利。",
              "link": "https://www.jiemian.com/article/14786763.html",
              "tags": [
                "市值",
                "苹果",
                "英伟达"
              ],
              "source": "界面新闻",
              "time": "7月17日"
            },
            {
              "title": "苹果与OpenAI法律战升级，约40名前苹果员工收到律师函",
              "summary": "7月18日消息，据《金融时报》报道，苹果已向约40名目前就职于OpenAI的前苹果员工发出法律通知，要求保存与案件相关的文件和通信记录。此前苹果起诉OpenAI及两名前员工，指控其通过系统性招募苹果员工获取未发布产品、零部件及供应商关系等商业机密。目前已有超过400名前苹果员工加入OpenAI。",
              "link": "https://www.cqcb.com/news/56/2026-07-18/6182779.html",
              "tags": [
                "法律",
                "商业机密",
                "诉讼"
              ],
              "source": "上游新闻",
              "time": "7月18日消息"
            }
          ]
        },
        {
          "name": "微软",
          "color": "#00a4ef",
          "softBg": "#e6f4fc",
          "initial": "微",
          "news": [
            {
              "title": "微软正研发类Mythos AI漏洞检测工具「感知计划」，最快本月发布",
              "summary": "7月17日消息，微软正推出一款内部代号「感知计划」的AI安全产品，融合Anthropic、OpenAI及微软自研多套大模型，采用与Mythos模型相近的思路排查软件漏洞，并能自动修复安全缺陷。产品搭载模型路由调度系统，可根据任务类型自动切换调用不同模型，以此将使用成本控制在较低水平。该产品由微软新任安全业务负责人推动，最快本月正式面世。",
              "link": "https://www.ithome.com/0/978/292.htm",
              "tags": [
                "AI安全",
                "漏洞检测",
                "网络安全"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
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
              "title": "阿里Qoder AI编程市场份额47.6%断层第一，IDC报告发布",
              "summary": "7月17日消息，IDC发布《中国AI编程市场份额，2025》报告，阿里旗下Qoder以47.6%营收市场份额位居第一，超过第二名至第五名总和。阿里AI编程产品Qoder于2025年8月发布，已发展出智能体工作台、插件、命令行工具等完整产品形态，全球用户超500万，服务中国一汽、中信证券等数十万家企业。",
              "link": "https://www.cnstock.com/commonDetail/745896",
              "tags": [
                "AI编程",
                "市场份额",
                "IDC"
              ],
              "source": "证券时报",
              "time": "7月17日消息"
            },
            {
              "title": "阿里千问输入法移动版上线：无广告无弹窗，支持AI自动润色",
              "summary": "7月17日消息，阿里千问输入法正式登陆iPhone。基于自研语音大模型，支持9种方言及中英混合识别，最快每分钟300字。核心在于大模型驱动的语义理解和自动润色，能过滤语气词、纠正口误、格式化排版，将口语转为结构化文本。主打纯净无广告无需注册。",
              "link": "https://www.ithome.com/0/978/194.htm",
              "tags": [
                "AI输入法",
                "语音识别",
                "大模型"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
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
              "title": "字节新一代豆包手机备货数十万台，AI转向MCP接入模式",
              "summary": "7月17日消息，据晚点LatePost报道，字节新一代豆包手机备货量从此前3万台大幅提升至数十万台。AI操作方式从GUI模拟点击转向MCP服务接入模式，只有应用自行提供MCP服务开放接口，豆包手机才能接入调用。目前豆包手机助手团队正与各头部应用厂商谈判，争取对方开放可被AI调用的接口或服务能力。",
              "link": "https://tech.ifeng.com/c/8uqpohJXHm7",
              "tags": [
                "AI手机",
                "豆包",
                "MCP"
              ],
              "source": "凤凰科技",
              "time": "7月17日消息"
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
              "title": "DeepSeek估值超3500亿元，开润股份间接入股披露",
              "summary": "7月16日晚，开润股份公告通过砺思星灵间接投资DeepSeek 4000万元，穿透持股0.0114%，据此推算DeepSeek本轮投后估值约3510亿元。据接近DeepSeek人士确认，首轮融资完成后公司已启动第二轮融资，计划在私募市场至少再融资100亿元，并开始筹备A股IPO。宁德时代、网易、京东、腾讯等已通过持股平台入股。",
              "link": "https://wallstreetcn.com/articles/3777125",
              "tags": [
                "融资",
                "估值",
                "IPO"
              ],
              "source": "华尔街见闻",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "color": "#07c160",
          "softBg": "#e6f9ee",
          "initial": "腾",
          "news": []
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
          "color": "#2962ff",
          "softBg": "#e8efff",
          "initial": "智",
          "news": [
            {
              "title": "智谱ARR达到10亿美元，半年增长15倍",
              "summary": "7月17日消息，据多个独立信源，截至2026年7月智谱年度经常性收入（ARR）已达10亿美元。从1亿美元增长至10亿美元仅用约5个月。智谱是国内最早押注Coding路线的模型厂商之一，今年Q1 GLM API价格累计上调约83%，海外订阅价格接近Claude Code，但调用量仍逆势增长约400%。",
              "link": "https://wallstreetcn.com/articles/3777177",
              "tags": [
                "ARR",
                "商业化",
                "AI编程"
              ],
              "source": "华尔街见闻",
              "time": "7月17日消息"
            }
          ]
        },
        {
          "name": "月之暗面",
          "color": "#8b5cf6",
          "softBg": "#f2ecfe",
          "initial": "月",
          "news": [
            {
              "title": "月之暗面联合创始人：Kimi暂不开发视频生成模型",
              "summary": "7月17日消息，月之暗面联合创始人周昕宇在X发文表示，Kimi目前没有开发视频生成模型的计划，团队将资源集中在提升模型智能上限。他认为视频生成虽然有明确用途，但从理论和实际效果看对提升模型智能帮助不大。K3的能力延续这一选择，重点放在软件工程、知识工作、深度推理和图像理解。",
              "link": "https://www.theblockbeats.info/flash/356603",
              "tags": [
                "战略",
                "视频生成",
                "大模型"
              ],
              "source": "爱范儿",
              "time": "7月17日消息"
            }
          ]
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
              "title": "阶跃星辰",
              "news": [
                {
                  "title": "阶跃星辰STEPX Neo智能体手机亮相WAIC，获「镇馆之宝」",
                  "summary": "7月17日，阶跃星辰在WAIC 2026展示首款大模型原生智能体手机STEPX Neo，搭载全球首个智能体原生操作系统Step AOS和个人智能体「阶跃Amoo」。该手机获WAIC 2026「镇馆之宝」荣誉，首批通过AI终端智能化分级L3级测试。Amoo具备记忆、决策与执行、安全三大核心能力，可自主完成差旅规划、外卖下单、PPT制作等复杂任务。",
                  "link": "https://www.nbd.com.cn/articles/2026-07-17/4476076.html",
                  "tags": [
                    "AI手机",
                    "智能体",
                    "WAIC"
                  ],
                  "source": "每日经济新闻",
                  "time": "7月17日"
                }
              ]
            },
            {
              "title": "蚂蚁集团",
              "news": [
                {
                  "title": "蚂蚁集团WAIC展示面向智能体商业的三层AI布局",
                  "summary": "7月17日，蚂蚁集团在WAIC 2026展示面向智能体商业时代的三层AI布局：AI应用层（健康AI「阿福」用户数突破1亿，日均处理超1000万次健康咨询；AI版支付宝「阿宝」已上架公测）、智能体商业生态层（AI支付已支持3亿笔智能体支付，适配95%通用智能体框架）和技术基座层（百灵大模型、LingBot 2.0具身模型、OceanBase AI数据库等）。",
                  "link": "https://cj.sina.com.cn/articles/view/2311077472/89c03e6002002lq8k",
                  "tags": [
                    "AI应用",
                    "智能体",
                    "WAIC"
                  ],
                  "source": "爱范儿",
                  "time": "7月17日"
                }
              ]
            },
            {
              "title": "商汤科技",
              "news": [
                {
                  "title": "商汤在WAIC展示日日新U1 Pro与具身智能方案",
                  "summary": "7月17日，商汤科技在WAIC 2026以「未来实验室」为主题展示日日新SenseNova U1 Pro，该模型实现理解、生成和行动原生统一，支持原生8K输出。具身智能方面，搭载Kairos开悟世界模型的机器人可在消费级终端近实时推理，完成早餐制作、家务整理等长程任务。商汤还在展馆周边设置SenseMart Go机器人智能便利店，机器人自主完成取放商品、整理货架和盘点库存。",
                  "link": "https://www.ifanr.com/digest/1672322",
                  "tags": [
                    "多模态",
                    "具身智能",
                    "WAIC"
                  ],
                  "source": "爱范儿",
                  "time": "7月17日"
                }
              ]
            },
            {
              "title": "联想",
              "news": [
                {
                  "title": "联想在WAIC展示企业智能体乐享4.0与具身智能机器人",
                  "summary": "7月17日，联想在WAIC 2026展示从智算基础设施到企业智能体再到AI终端的全链路方案。企业智能体「联想乐享」4.0月活跃用户达700万、累计销售额超50亿元；门店人形机器人「乐享壹号」助力进店量环比增长109%。联想42款产品通过AI终端智能化分级L3级测试，数量居行业首位。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-07-17/doc-iniiccvc8232848.shtml",
                  "tags": [
                    "企业智能体",
                    "人形机器人",
                    "WAIC"
                  ],
                  "source": "极客公园",
                  "time": "7月17日"
                }
              ]
            },
            {
              "title": "曙光",
              "news": [
                {
                  "title": "曙光8000超智融合架构真机亮相WAIC，算力密度提升20倍",
                  "summary": "7月17日，曙光8000（登峰）在WAIC 2026以真机形态首次公开亮相，入选大会「镇馆之宝」。该系统采用超智融合架构，支持FP64至INT8全精度计算，单个计算单元算力密度提升20倍；自研scaleFabric互连技术可支撑十万卡规模稳定互连。系统已完成300余项重点应用适配，覆盖20余个科研与产业领域。",
                  "link": "https://tech.ifeng.com/c/8upkXtedgpk",
                  "tags": [
                    "超算",
                    "AI芯片",
                    "WAIC"
                  ],
                  "source": "36氪",
                  "time": "7月17日"
                }
              ]
            },
            {
              "title": "面壁智能",
              "news": [
                {
                  "title": "面壁智能开源StaffDeck数字员工管理平台，给AI发工号定岗位",
                  "summary": "7月17日消息，面壁智能在WAIC 2026期间开源StaffDeck，一个面向企业级AI应用的全生命周期数字员工管理平台。StaffDeck可为AI智能体发工号、定岗位、做绩效，实现数字员工从入职到退出的全流程管理，帮助企业在真实业务场景中落地AI智能体。",
                  "link": "https://www.qbitai.com/2026/07/453245.html",
                  "tags": [
                    "数字员工",
                    "开源",
                    "智能体"
                  ],
                  "source": "量子位",
                  "time": "7月17日消息"
                }
              ]
            },
            {
              "title": "网易",
              "news": [
                {
                  "title": "网易灵动WAIC展示「人机混编」具身智能，远程操控工程机器人",
                  "summary": "7月17日，网易旗下专注工程机械领域的具身智能品牌网易灵动在WAIC展示「灵载」装载机器人和「灵掘」挖掘机器人。现场工作人员通过智能座舱跨越千里远程操控真实电厂、港口设备。两类工程机器人已在全国十余个省份超100个项目中常态运行，累计完成超70万次安全作业，「黑灯工地」方案综合效率达熟练人工的120%。",
                  "link": "https://www.cnstock.com/commonDetail/746593",
                  "tags": [
                    "具身智能",
                    "工程机械",
                    "WAIC"
                  ],
                  "source": "36氪",
                  "time": "7月17日"
                }
              ]
            },
            {
              "title": "光羽芯辰",
              "news": [
                {
                  "title": "光羽芯辰发布端侧3D堆叠近存算推理芯片TC1000系列",
                  "summary": "7月17日，光羽芯辰在WAIC 2026全球首发端侧大算力3D堆叠近存算推理芯片TC1000系列。依托自研3D堆叠近存算与存算融合架构突破「内存墙」瓶颈，实现等效带宽10倍跃升、功耗仅传统方案1/3，支持3B模型300token/s超高速推理及35B模型高性能运行。已与联想达成深度合作，推进下一代AI PC等端侧推理产品落地。",
                  "link": "https://www.c114.net.cn/chipnews/100940.html",
                  "tags": [
                    "AI芯片",
                    "端侧推理",
                    "近存计算"
                  ],
                  "source": "36氪",
                  "time": "7月17日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "文远知行",
              "news": [
                {
                  "title": "文远知行发布物理AI大模型WITT，引入「最小物理事实单元」概念",
                  "summary": "7月17日，文远知行在WAIC 2026发布物理AI认知基础大模型WITT，首次引入「最小物理事实单元」概念，将三维场景拆解为可识别、量化、验证的标准化事实单元。WITT具备事实提取、推理、验证和编排四大核心能力，数据处理效率提升200倍，Token消耗最高降低98%，单卡单日可处理1万分钟车辆运行视频，适配车端和机器人端边缘硬件。",
                  "link": "https://news.qq.com/rain/a/20260717A06XS600",
                  "tags": [
                    "物理AI",
                    "大模型",
                    "自动驾驶"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月17日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "星尘智能",
              "news": [
                {
                  "title": "星尘智能甩出20+超难家务自主，具身模型能力再突破",
                  "summary": "7月17日，星尘智能（Astribot）在WAIC 2026展示了其具身模型Lumo-2的最新进展，甩出20多项超难家务自主操作，涵盖厨房烹饪、衣物折叠、精细抓取等长程复杂任务。展区现场演示了机器人自主完成多步骤家务流程，展现了具身模型在家政服务场景中的商业化潜力。",
                  "link": "https://www.sznews.com/news/content/2026-07/17/content_32123871.htm",
                  "tags": [
                    "具身智能",
                    "家政机器人",
                    "WAIC"
                  ],
                  "source": "机器之心",
                  "time": "7月17日消息"
                }
              ]
            },
            {
              "title": "宇泛智能",
              "news": [
                {
                  "title": "全球首款720°连续后空翻机器狗亮相WAIC，宇泛智能携「灵猫」首秀",
                  "summary": "7月17日，宇泛智能在WAIC 2026发布全球首款720°连续后空翻机器狗「灵猫」（Cyberling）。该四足机器人具备高动态运动能力，可完成连续后空翻、越障、奔跑等复杂动作。产品面向巡检、安防及家庭陪伴等场景，展现了国产四足机器人在运动控制领域的突破性进展。",
                  "link": "https://www.qbitai.com/2026/07/453506.html",
                  "tags": [
                    "四足机器人",
                    "机器狗",
                    "WAIC"
                  ],
                  "source": "量子位",
                  "time": "7月17日"
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
          "cards": []
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "影视飓风",
              "news": [
                {
                  "title": "影视飓风49元AI课一夜售出10万份，单日营收近500万",
                  "summary": "7月17日消息，全平台粉丝超4000万的科技影视博主「影视飓风」7月15日在直播间开卖AI实战课程，券后价49元。上线首日销量突破10万份，单日营收超490万元。课程共16节课，覆盖AI生图、视频生成、提示词撰写等入门实操及模拟机械臂运镜等进阶玩法，由影视飓风与AI视觉创作平台TapNow联合打造。",
                  "link": "https://www.jiemian.com/article/14782599.html",
                  "tags": [
                    "AI教育",
                    "知识付费",
                    "AI视频"
                  ],
                  "source": "界面新闻",
                  "time": "7月15日消息"
                }
              ]
            },
            {
              "title": "华强北",
              "news": [
                {
                  "title": "华强北内存价格暴涨超320%，AI算力「吞噬」存储产能",
                  "summary": "7月17日消息，华强北电子市场正经历近15年来最剧烈的存储芯片价格震荡。32GB DDR5内存套装价格从去年约900元飙升至近3800元，涨幅超320%；1TB固态硬盘从410元涨至950元。三星、SK海力士、美光三大原厂将70%至80%先进产能转向AI专用HBM内存，导致消费级存储供需缺口持续扩大。存储芯片在整机物料成本中的占比已从15%飙升至35%以上。",
                  "link": "https://m.techweb.com.cn/article/2026-07-17/2977490.shtml",
                  "tags": [
                    "存储芯片",
                    "AI算力",
                    "DDR5"
                  ],
                  "source": "极客公园",
                  "time": "7月17日消息"
                }
              ]
            },
            {
              "title": "复旦量子闪存",
              "news": [
                {
                  "title": "复旦「量子闪存」登上《Science》，室温单电子非易失存储突破",
                  "summary": "北京时间7月17日凌晨，复旦大学周鹏-刘春森研究团队在《Science》发表「量子闪存」技术。利用二维半导体与共面漏极-沟道-源极结构，在27℃室温下观测到单电子非易失存储，每注入一个电子对应一个比特，存储窗口达0.5伏特，把此前55mV、仅维持5秒的硅基单电子存储推进到室温稳定保存。团队计划1至3年内对接AI客户实现产品落地。",
                  "link": "https://news.pconline.com.cn/2178/21787670.html",
                  "tags": [
                    "存储技术",
                    "量子闪存",
                    "Science"
                  ],
                  "source": "复旦大学",
                  "time": "7月17日"
                }
              ]
            },
            {
              "title": "Shopify CEO",
              "news": [
                {
                  "title": "Shopify CEO：反AI编程的人严重高估了人类代码质量",
                  "summary": "7月17日消息，Shopify联合创始人兼CEO Tobi Lütke在社交平台发帖称，反对AI编程的人严重高估了人类代码的质量。他表示除少数优秀开源项目和高质量企业代码库外，大量「人类垃圾代码」普遍存在，任何达到Opus级别的模型都能轻松改进这类代码。马斯克随后回复「True」表示认同。有用户指出AI生成的代码仍需人工审查和调试。",
                  "link": "https://www.theblockbeats.info/flash/356648",
                  "tags": [
                    "AI编程",
                    "代码质量",
                    "争议"
                  ],
                  "source": "爱范儿",
                  "time": "7月17日消息"
                }
              ]
            },
            {
              "title": "Netflix",
              "news": [
                {
                  "title": "Netflix联席CEO：生成式AI已进入约300部作品制作流程",
                  "summary": "7月17日消息，Netflix联席CEO Ted Sarandos在二季度财报电话会上表示，2026年已有约300部Netflix作品使用生成式AI，集中在前期预演、视觉特效、场景参考和后期制作。其中《The American Experiment》有17分钟画面经过AI增强。Sarandos称AI增强了创作者的能力而非取代创作者，叙事、表演和审美选择仍由导演和后期人员决定。",
                  "link": "https://news.qq.com/rain/a/20260717A070JX00",
                  "tags": [
                    "生成式AI",
                    "影视制作",
                    "AIGC"
                  ],
                  "source": "爱范儿",
                  "time": "7月17日消息"
                }
              ]
            },
            {
              "title": "德国Soofi S",
              "news": [
                {
                  "title": "德国Soofi S开放300亿参数双语开源模型与训练配方",
                  "summary": "7月17日消息，德国Soofi联盟发布Soofi S 30B-A3B，采用MoE与Mamba-Transformer混合架构，总参数300亿，每个token激活约30亿参数。训练使用约27万亿token，在德国电信慕尼黑Industrial AI Cloud上完成。团队承诺开放模型权重、中间检查点、训练和评测代码及超参数，在德语、英语和代码综合评测中超过多款欧洲开放模型。",
                  "link": "https://ai.cnmo.com/news/813500.html",
                  "tags": [
                    "开源模型",
                    "MoE",
                    "欧洲AI"
                  ],
                  "source": "爱范儿",
                  "time": "7月17日消息"
                }
              ]
            },
            {
              "title": "国家超算",
              "news": [
                {
                  "title": "国家超算互联网推出科学智能体共创计划",
                  "summary": "7月17日，国家超算互联网在WAIC 2026上推出「科学计算智能体生态共创与开发者招募合作计划」。该计划为期半年，面向高校科研院所、个人开发者及企业研发团队，广泛征集智能体、科研模型、MCP工具等创新成果，以构建开放协同的科学智能生态体系，推动超算资源与AI技术的深度融合。",
                  "link": "https://m.ithome.com/html/978307.htm",
                  "tags": [
                    "科学计算",
                    "智能体",
                    "超算"
                  ],
                  "source": "36氪",
                  "time": "7月17日"
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
          "date": "2026-07-18",
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
          "date": "2026-07-18",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy3 (free)",
              "score": "9.76T tokens",
              "change": "↑241%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "8.68T tokens",
              "change": "↑86%"
            },
            {
              "model": "DeepSeek V4 Flash",
              "score": "5.24T tokens",
              "change": "↑1%"
            },
            {
              "model": "MiniMax M3",
              "score": "3.95T tokens",
              "change": "↑9%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.52T tokens",
              "change": "↑13%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "3.28T tokens",
              "change": "↑218%"
            },
            {
              "model": "Kimi K3",
              "score": "2.97T tokens",
              "change": "NEW"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.47T tokens",
              "change": "↑14%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "2.2T tokens",
              "change": "↑10%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.11T tokens",
              "change": "↑18%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "947B tokens",
              "change": "↑2%"
            },
            {
              "model": "gpt-5.6-sol",
              "score": "812B tokens",
              "change": "↓5%"
            },
            {
              "model": "Grok 4.5",
              "score": "743B tokens",
              "change": "↓8%"
            },
            {
              "model": "Qwen3.7-Max",
              "score": "712B tokens",
              "change": "↑3%"
            },
            {
              "model": "Nemotron 3 Ultra",
              "score": "621B tokens",
              "change": "↑12%"
            },
            {
              "model": "Gemma 4 12B",
              "score": "584B tokens",
              "change": "↑7%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "536B tokens",
              "change": "↑5%"
            },
            {
              "model": "Muse Spark 1.1",
              "score": "492B tokens",
              "change": "↑15%"
            },
            {
              "model": "Llama 5.5",
              "score": "468B tokens",
              "change": "↓3%"
            },
            {
              "model": "GPT-5.5",
              "score": "435B tokens",
              "change": "↓2%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-18",
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
};

};

};

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
