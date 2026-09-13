const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
    "date": "2026-09-13",
    "sections": {
      "overseas": {
        "vendors": [
          {
            "name": "OpenAI",
            "news": [
              {
                "title": "奥尔特曼确认：OpenAI今年不会上市",
                "summary": "9月13日，OpenAI CEO山姆·奥尔特曼在接受采访时表示，公司今年不会进行IPO，时机不合适，并强调不能冒哪怕10%概率在本十年末危害全人类的风险。他表示OpenAI需要先解决AI安全问题，确保技术真正造福全人类，上市计划将推迟到明年。",
                "link": "https://www.ithome.com/1/001/669.htm",
                "tags": [
                  "IPO",
                  "AI安全"
                ],
                "source": "IT之家",
                "time": "9月13日"
              }
            ]
          },
          {
            "name": "Anthropic",
            "news": [
              {
                "title": "英伟达考虑为Anthropic IPO投资至多100亿美元，估值或达2万亿",
                "summary": "9月12日，路透社报道，英伟达正与Anthropic洽谈，考虑以基石投资者身份参与其IPO，拟投资最多100亿美元。Anthropic计划通过上市融资至多1000亿美元，估值或达约2万亿美元，有望刷新全球最大IPO纪录。目前谈判仍在进行，具体条件可能变化。",
                "link": "https://www.ithome.com/1/001/488.htm",
                "tags": [
                  "IPO",
                  "英伟达",
                  "融资"
                ],
                "source": "IT之家",
                "time": "9月12日"
              },
              {
                "title": "Anthropic CEO：AI行业应放缓发展，承诺让第三方获员工级访问权",
                "summary": "9月12日，Anthropic CEO达里奥·阿莫迪发文指出，AI正接近递归自我改进临界点，6至12个月内若不加节制将超越人类掌控能力。他呼吁AI行业主动降速，并承诺Anthropic将向第三方评估机构提供永久员工级访问权限，实时监控训练过程，以透明化应对安全担忧。",
                "link": "https://www.ithome.com/1/001/651.htm",
                "tags": [
                  "AI安全",
                  "监管"
                ],
                "source": "IT之家",
                "time": "9月12日"
              },
              {
                "title": "阿莫迪呼吁放缓AI开发后，马斯克奥尔特曼等业界大佬相继赞同",
                "summary": "9月13日，Anthropic CEO阿莫迪发出AI放缓呼吁后，AI圈罕见放下竞争，马斯克、奥尔特曼、哈萨比斯、卡帕西等业界大佬纷纷表示支持。这是2023年Future of Life Institute暂停信之后，业界同类声量最大的一次联合响应，引发广泛关注。",
                "link": "https://www.ithome.com/1/001/709.htm",
                "tags": [
                  "AI安全",
                  "业界反应"
                ],
                "source": "IT之家",
                "time": "9月13日"
              },
              {
                "title": "Anthropic研究员警告AI灭绝人类，美两党议员呼吁政府采取更多行动",
                "summary": "9月12日，Anthropic前研究员雅各布·考克森辞职并公开警告AI可能在本十年末毁灭所有人，同事埃文·胡宾格随后支持称十年内概率超10%。此事迅速引发美国政界反应，两党议员纷纷呼吁出台更严格的AI监管规则，成为近年AI安全议题的标志性事件。",
                "link": "https://www.ithome.com/1/001/587.htm",
                "tags": [
                  "AI安全",
                  "监管",
                  "灭绝风险"
                ],
                "source": "IT之家",
                "time": "9月12日"
              }
            ]
          },
          {
            "name": "Google",
            "news": [
              {
                "title": "谷歌完成对AI编程初创Mechanize的人才收购，补齐AI编程短板",
                "summary": "9月12日，据报道，谷歌完成了对旧金山AI编程初创企业Mechanize的人才收购。Mechanize联合创始人贝西罗格鲁自8月起加入谷歌DeepMind，另有十多名工程师同步转投DeepMind。此前谷歌曾洽谈价值15亿美元的收购方案，最终以人才引进方式完成交易。",
                "link": "https://www.ithome.com/1/001/653.htm",
                "tags": [
                  "人才收购",
                  "AI编程"
                ],
                "source": "IT之家",
                "time": "9月12日"
              }
            ]
          },
          {
            "name": "xAI",
            "news": []
          },
          {
            "name": "NVIDIA",
            "news": []
          },
          {
            "name": "Meta",
            "news": [
              {
                "title": "育儿博主曝光Meta AI可自动汇总隐私家庭信息，官方紧急修复",
                "summary": "9月13日，一名育儿博主曝光Meta AI助手可通过抓取用户日常数据，自动生成包含家庭隐私信息的详细报告，涵盖家庭成员特征和育儿习惯等细节。该事件在网络引发强烈反响，Meta官方随后紧急修复了相关安全漏洞，引发业界对AI隐私边界的讨论。",
                "link": "https://www.ithome.com/1/001/685.htm",
                "tags": [
                  "隐私安全",
                  "AI助手"
                ],
                "source": "IT之家",
                "time": "9月13日"
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
                "title": "阿里Qoder CLI个人版v1.1.50新增开放自定义模型接入",
                "summary": "9月12日，阿里发布Qoder CLI个人版v1.1.50更新，新增开放自定义模型接入能力，用户可在个人版中灵活接入第三方或自有AI模型。此前Qoder CLI已支持多种编程场景，本次更新进一步提升开发者灵活性，扩大了可用模型的选择范围。",
                "link": "https://www.ithome.com/1/001/597.htm",
                "tags": [
                  "编程工具",
                  "模型接入"
                ],
                "source": "IT之家",
                "time": "9月12日"
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
                "title": "微信AI功能密集灰度测试，图片发送界面新增AI处理选项",
                "summary": "9月12日，有用户发现微信正密集灰度测试AI功能，图片发送界面新增了AI处理选项，支持图片美化、修改与信息提取等能力。此外微信还在同步测试其他多项AI辅助功能，显示腾讯正在加速将AI能力深度融入微信核心产品体验。",
                "link": "https://www.ithome.com/1/001/514.htm",
                "tags": [
                  "微信",
                  "AI功能"
                ],
                "source": "IT之家",
                "time": "9月12日"
              }
            ]
          },
          {
            "name": "小米",
            "news": []
          },
          {
            "name": "智谱AI",
            "news": []
          },
          {
            "name": "月之暗面",
            "news": [
              {
                "title": "月之暗面官方辟谣：网传创始人和员工信息纯属虚构",
                "summary": "9月12日，月之暗面官方发布声明，对网络上流传的关于公司创始人及员工的相关信息进行辟谣，明确表示相关内容纯属虚构，并声明将追究散布不实信息人员的法律责任，呼吁用户勿轻信和传播未经证实的信息。",
                "link": "https://www.ithome.com/1/001/537.htm",
                "tags": [
                  "辟谣",
                  "舆情"
                ],
                "source": "IT之家",
                "time": "9月12日"
              }
            ]
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
                "title": "苹果",
                "news": [
                  {
                    "title": "苹果公布SimpleDesign蛋白质设计模型，可联合生成序列与三维结构",
                    "summary": "9月12日，苹果公布了其AI研究成果SimpleDesign蛋白质设计模型，该模型可联合生成蛋白质序列与三维结构，是苹果在生物科学领域应用AI的重要进展。SimpleDesign在蛋白质设计基准测试中表现优异，展示了苹果在基础科学AI研究方面的探索。",
                    "link": "https://www.ithome.com/1/001/521.htm",
                    "tags": [
                      "生物AI",
                      "蛋白质设计"
                    ],
                    "source": "IT之家",
                    "time": "9月12日"
                  }
                ]
              },
              {
                "title": "中国移动",
                "news": [
                  {
                    "title": "国内首个国产GPU+类脑芯片大模型异构混合推理系统发布",
                    "summary": "9月13日，国内首个国产GPU与类脑芯片联合大模型异构混合推理系统正式发布，较同类国产GPU算力集群性价比提升一倍以上。该系统由中国移动研究院与灵汐科技联合研发，融合类脑计算架构优势，在保持推理精度的同时大幅降低能耗，为大模型推理提供更经济高效的国产算力解决方案。",
                    "link": "https://www.ithome.com/1/001/793.htm",
                    "tags": [
                      "国产芯片",
                      "大模型推理"
                    ],
                    "source": "IT之家",
                    "time": "9月13日"
                  },
                  {
                    "title": "中国移动发布AI可信计算（AITC），提供机密算力和机密Token",
                    "summary": "9月12日，在2026中国算力大会上，中国移动正式发布AI可信计算（AITC），启动生态共建战略合作。AITC基于移动云全栈国产化算力底座，融合机密计算、国产密码等核心技术，为AI训练推理全生命周期构建一体化安全方案，面向金融、政务、医疗等数据敏感行业。",
                    "link": "https://www.ithome.com/1/001/650.htm",
                    "tags": [
                      "可信计算",
                      "数据安全"
                    ],
                    "source": "IT之家",
                    "time": "9月12日"
                  }
                ]
              },
              {
                "title": "创维数字",
                "news": [
                  {
                    "title": "创维数字与谷歌签智能家居合作协议，首批产品覆盖欧洲14国",
                    "summary": "9月12日，创维数字在业绩说明会上披露，公司近日与Google Asia Pacific签署智能家居合作协议，首批产品将覆盖欧洲14个国家。双方合作聚焦AI智能家居领域，创维数字将借助谷歌生态系统在欧洲市场推广AI家居产品，加速出海布局。",
                    "link": "https://www.ithome.com/1/001/636.htm",
                    "tags": [
                      "智能家居",
                      "AI出海"
                    ],
                    "source": "IT之家",
                    "time": "9月12日"
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
                    "title": "欧洲首例全无人Robotaxi启动载客测试：小马智行参与，车内不设安全员",
                    "summary": "9月12日，获Rimac支持的自动驾驶网约车初创Verne，在克罗地亚萨格勒布正式开放完全无人驾驶载客测试，成为欧洲首个实现该形式商业运营的企业。此次测试由Verne与小马智行合作推出，使用极狐汽车，连接总部、市中心商业区及机场，车内完全取消驾驶员，用户可通过Uber应用体验。",
                    "link": "https://www.geekpark.net/news/370228",
                    "tags": [
                      "无人驾驶",
                      "海外市场",
                      "Robotaxi"
                    ],
                    "source": "极客公园",
                    "time": "9月12日"
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
                    "title": "全球首个万台级工业人形机器人工厂投产：柳州优必选",
                    "summary": "9月12日，柳州优必选万台级工业人形机器人超级智慧工厂投产仪式举行。该工厂是全球首个适配万台级产能的工业人形机器人智能制造标杆工厂，按设计节拍每10分钟可下线1台机器人，年规划产能超万台。优必选联合西门子打造数字化底座，落地用机器人造机器人的新质生产力模式。",
                    "link": "https://www.ithome.com/1/001/635.htm",
                    "tags": [
                      "工业机器人",
                      "量产"
                    ],
                    "source": "IT之家",
                    "time": "9月12日"
                  }
                ]
              }
            ]
          },
          {
            "name": "行业趋势&观点",
            "cards": [
              {
                "title": "行业趋势",
                "news": [
                  {
                    "title": "我国词元需求爆发式增长，预计今年消耗量将达10亿亿",
                    "summary": "9月12日，在2026中国算力大会上，相关数据显示，我国词元（Token）需求呈现爆发式增长，预计今年消耗量将达10亿亿。这一数字反映了随着大模型和AI应用快速普及，中国市场对AI算力的旺盛需求正在强力推动整个AI基础设施的加速建设。",
                    "link": "https://www.ithome.com/1/001/596.htm",
                    "tags": [
                      "算力需求",
                      "Token消耗"
                    ],
                    "source": "IT之家",
                    "time": "9月12日"
                  },
                  {
                    "title": "邬贺铨：2030年中国算力有望占到全球30%",
                    "summary": "9月12日，在2026中国算力大会主论坛上，中国工程院院士邬贺铨指出，当前中国算力在全球占21%，美国占46%，按照国家算力网规划，2030年中国算力有望达到全球30%。他强调Token消耗不以多为荣而以效率为荣，中国应用成本持续下降推动了算力利用率的提升。",
                    "link": "https://www.ithome.com/1/001/634.htm",
                    "tags": [
                      "算力",
                      "中国战略"
                    ],
                    "source": "IT之家",
                    "time": "9月12日"
                  },
                  {
                    "title": "俞敏洪：人工智能可能加剧社会贫富悬殊",
                    "summary": "9月12日，俞敏洪在公开场合表示，人工智能技术的快速发展可能进一步加剧社会贫富差距。他认为AI掌握在少数人和公司手中可能使资本收益更加集中，普通劳动者面临更大就业压力，呼吁社会各界关注AI带来的分配公平问题。",
                    "link": "https://www.ithome.com/1/001/522.htm",
                    "tags": [
                      "贫富差距",
                      "就业"
                    ],
                    "source": "IT之家",
                    "time": "9月12日"
                  },
                  {
                    "title": "Claude Code之父切尔尼：开发者核心职责是守住代码质量",
                    "summary": "9月12日，Anthropic Claude Code创作者鲍里斯·切尔尼表示，AI改变了编程工作分工，工程师正从亲自写代码转向审查AI生成的代码。他认为开发者真正需要守住的不是亲手写下每一行代码，而是代码质量本身，在AI编程时代开发者要成为最终的质量把关者。",
                    "link": "https://www.ithome.com/1/001/633.htm",
                    "tags": [
                      "AI编程",
                      "开发者角色"
                    ],
                    "source": "IT之家",
                    "time": "9月12日"
                  },
                  {
                    "title": "Hugging Face CEO：讨论AI灭绝风险如同让空调维修工谈气候变化",
                    "summary": "9月12日，Hugging Face CEO克莱门特·德朗格在X上对前Anthropic研究员考克森AI灭绝言论的讨论提出质疑，写道让其讨论AI灭绝风险，就像让空调维修工讨论气候变化一样，认为AI安全议题需要整个生态系统各专业领域的声音，而非某一类从业者独占话语权。",
                    "link": "https://www.ithome.com/1/001/582.htm",
                    "tags": [
                      "AI安全",
                      "行业观点"
                    ],
                    "source": "IT之家",
                    "time": "9月12日"
                  },
                  {
                    "title": "我国实现一体化算力统筹监测，推动全国31省区市对接入网",
                    "summary": "9月13日，中国算力平台已实现全国一体化算力统筹监测，一张网一盘棋一体化发展格局基本形成。平台汇聚超万家注册企业用户，上架2000多项算力产品，接入各类大模型超300个，有序推动全国31个省区市对接入网，算力底数可摸清、态势可感知。",
                    "link": "https://www.ithome.com/1/001/786.htm",
                    "tags": [
                      "算力基础设施",
                      "一体化监测"
                    ],
                    "source": "IT之家",
                    "time": "9月13日"
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
            "date": "2026-09-03",
            "link": "https://lmarena.ai/leaderboard/text",
            "rankings": [
              {
                "model": "claude-fable-5\nAnthropic",
                "score": "1507",
                "change": "+5"
              },
              {
                "model": "claude-opus-4-6-high\nAnthropic",
                "score": "1505",
                "change": "+4"
              },
              {
                "model": "claude-fable-5.1-max\nAnthropic",
                "score": "1504",
                "change": "+11"
              },
              {
                "model": "claude-opus-4-7-high\nAnthropic",
                "score": "1502",
                "change": "+4"
              },
              {
                "model": "muse-spark-1.2 (xHigh)\nMeta",
                "score": "1499",
                "change": "+10"
              },
              {
                "model": "claude-opus-4-6\nAnthropic",
                "score": "1498",
                "change": "+3"
              },
              {
                "model": "claude-opus-4-7\nAnthropic",
                "score": "1494",
                "change": "+4"
              },
              {
                "model": "gemini-3.8-flash-high\nGoogle",
                "score": "1494",
                "change": "+9"
              },
              {
                "model": "claude-opus-5-high\nAnthropic",
                "score": "1493",
                "change": "+5"
              },
              {
                "model": "muse-spark-1.1\nMeta",
                "score": "1492",
                "change": "+5"
              },
              {
                "model": "gemini-3.7-flash-high\nGoogle",
                "score": "1491",
                "change": "+8"
              },
              {
                "model": "kimi-k3-max\nMoonshot",
                "score": "1489",
                "change": "+5"
              },
              {
                "model": "muse-spark\nMeta",
                "score": "1488",
                "change": "+6"
              },
              {
                "model": "claude-opus-5-max\nAnthropic",
                "score": "1488",
                "change": "+6"
              },
              {
                "model": "gemini-3.1-pro-preview\nGoogle",
                "score": "1487",
                "change": "+3"
              },
              {
                "model": "gemini-3-pro\nGoogle",
                "score": "1486",
                "change": "+4"
              },
              {
                "model": "gpt-5.6-sol-xhigh\nOpenAI",
                "score": "1483",
                "change": "+5"
              },
              {
                "model": "claude-opus-4-8-high\nAnthropic",
                "score": "1482",
                "change": "+4"
              },
              {
                "model": "gpt-5.5-high\nOpenAI",
                "score": "1482",
                "change": "+4"
              },
              {
                "model": "glm-5.3-max\nZ.ai",
                "score": "1482",
                "change": "+7"
              }
            ]
          },
          {
            "name": "OpenRouter",
            "date": "2026-09-12",
            "link": "https://openrouter.ai/rankings",
            "rankings": [
              {
                "model": "Hy4 preview",
                "score": "17.2T tokens",
                "change": "↑22%"
              },
              {
                "model": "GPT-5.6 Luna",
                "score": "16.4T tokens",
                "change": "↑35%"
              },
              {
                "model": "GLM 5.3 Flash",
                "score": "12T tokens",
                "change": "↑4%"
              },
              {
                "model": "DeepSeek V4 Flash 0731",
                "score": "11.6T tokens",
                "change": "↑5%"
              },
              {
                "model": "MiMo-V2.5",
                "score": "6.91T tokens",
                "change": "↑150%"
              },
              {
                "model": "DeepSeek V4 Flash 0423",
                "score": "4.47T tokens",
                "change": "↑15%"
              },
              {
                "model": "DeepSeek V4.1 Flash",
                "score": "3.64T tokens",
                "change": "—"
              },
              {
                "model": "Hy3",
                "score": "3.64T tokens",
                "change": "↑18%"
              },
              {
                "model": "Nemotron 3 Ultra (free)",
                "score": "3.61T tokens",
                "change": "↑1%"
              },
              {
                "model": "GLM 5.3",
                "score": "2.65T tokens",
                "change": "↑6%"
              },
              {
                "model": "Gemini 3.8 Flash",
                "score": "2.56T tokens",
                "change": "↑197%"
              },
              {
                "model": "Muse Spark 1.3 Contributor",
                "score": "2T tokens",
                "change": "↑255%"
              },
              {
                "model": "GLM 5.2",
                "score": "1.89T tokens",
                "change": "↑18%"
              },
              {
                "model": "Solar Pro 4",
                "score": "1.72T tokens",
                "change": "↑58%"
              },
              {
                "model": "GPT-5.6 Sol",
                "score": "1.64T tokens",
                "change": "↑12%"
              },
              {
                "model": "Kimi K3",
                "score": "1.48T tokens",
                "change": "↑27%"
              },
              {
                "model": "MiniMax M3",
                "score": "1.46T tokens",
                "change": "↑0%"
              },
              {
                "model": "Claude Opus 5",
                "score": "1.4T tokens",
                "change": "↑16%"
              },
              {
                "model": "Claude Sonnet 5",
                "score": "1.38T tokens",
                "change": "↑5%"
              },
              {
                "model": "DeepSeek V4 Pro 0423",
                "score": "1.25T tokens",
                "change": "↑6%"
              }
            ]
          },
          {
            "name": "Product Hunt",
            "date": "2026-09-10",
            "link": "https://www.producthunt.com/",
            "rankings": [
              {
                "name": "Typewise Nova",
                "category": "Customer Communication",
                "rank": 1,
                "link": "https://typewise.app"
              },
              {
                "name": "AI Observability by OpenObserve",
                "category": "Developer Tools",
                "rank": 2,
                "link": "https://openobserve.ai"
              },
              {
                "name": "iPhone Duo",
                "category": "iOS",
                "rank": 3,
                "link": "https://www.apple.com"
              },
              {
                "name": "AirPods 5",
                "category": "Wearables",
                "rank": 4,
                "link": "https://www.apple.com/airpods"
              },
              {
                "name": "Suno v6",
                "category": "Music",
                "rank": 5,
                "link": "https://suno.com"
              },
              {
                "name": "Live Captions by Subanana",
                "category": "Productivity",
                "rank": 6,
                "link": "https://subanana.com"
              },
              {
                "name": "Desert Ant Labs",
                "category": "Artificial Intelligence",
                "rank": 7,
                "link": "https://desertant.ai"
              },
              {
                "name": "FreeScan.app",
                "category": "User Experience",
                "rank": 8,
                "link": "https://freescan.app"
              },
              {
                "name": "Modeinspect",
                "category": "Design Tools",
                "rank": 9,
                "link": "https://modeinspect.com"
              },
              {
                "name": "Thousand",
                "category": "Productivity",
                "rank": 10,
                "link": "https://thousand.dev"
              },
              {
                "name": "Viso Now",
                "category": "Artificial Intelligence",
                "rank": 11,
                "link": "https://viso.ai"
              },
              {
                "name": "Athenic AI",
                "category": "Investing",
                "rank": 12,
                "link": "https://athenic.com"
              },
              {
                "name": "Speechmark",
                "category": "Mac",
                "rank": 13,
                "link": "https://speechmark.app"
              },
              {
                "name": "Whip",
                "category": "Social Media",
                "rank": 14,
                "link": "https://whip.social"
              },
              {
                "name": "Wealthfolio",
                "category": "Open Source",
                "rank": 15,
                "link": "https://wealthfolio.app"
              },
              {
                "name": "Mock Magic: Video Presets",
                "category": "Branding",
                "rank": 16,
                "link": "https://mockmagic.io"
              },
              {
                "name": "Vibe Eyes",
                "category": "Mac",
                "rank": 17,
                "link": "https://vibeeyes.app"
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
