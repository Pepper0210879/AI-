const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-06-20",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "#E6F7F4",
          "initial": "O",
          "news": [
            {
              "title": "OpenAI GPT-5.6 系列有望下周登场",
              "summary": "当地时间6月19日消息，OpenAI有望下周推出GPT-5.6系列模型，涵盖mini、标准版及Pro版。新模型上下文窗口从100万tokens扩展至150万tokens，编码能力和智能体性能据称已优于Claude Mythos/Fable 5系列。部分Pro用户已可提前体验，API定价据称仅为Claude Fable 5的三分之一，OpenAI可能发动新一轮价格战。",
              "link": "https://tech.ifeng.com/c/8u6vLpjeWsc",
              "tags": [
                "大模型",
                "GPT-5.6"
              ],
              "source": "凤凰科技",
              "time": "1天前"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#D4A574",
          "softBg": "#FBF5EF",
          "initial": "A",
          "news": [
            {
              "title": "AlphaFold之父Jumper从谷歌跳槽Anthropic",
              "summary": "当地时间6月18日，2024年诺贝尔化学奖得主、AlphaFold核心缔造者John Jumper宣布离开谷歌DeepMind，加入Anthropic。Jumper在DeepMind工作近九年，主导开发的AlphaFold被诺奖委员会认为是AI迄今最具影响力的应用之一。此前两天，谷歌Gemini联合负责人Noam Shazeer已宣布转投OpenAI，谷歌48小时内连失两位AI核心人物。",
              "link": "https://www.36kr.com/p/3860814933660674",
              "tags": [
                "人才争夺",
                "AlphaFold"
              ],
              "source": "36氪",
              "time": "2天前"
            },
            {
              "title": "Anthropic高管称有信心数日内重新开放Mythos与Fable 5",
              "summary": "当地时间6月19日，Anthropic国际董事总经理恰乌里在首尔新闻发布会上表示，公司有信心在未来几天内向美国以外地区重新开放Claude Mythos及Fable 5模型。此前白宫以国家安全为由下令限制非美国用户访问这两个前沿模型，恰乌里将此归因于一个安全漏洞场景，并宣布将深化对韩投资、开设首尔办事处。",
              "link": "https://wallstreetcn.com/articles/3775040",
              "tags": [
                "出口管制",
                "Claude"
              ],
              "source": "华尔街见闻",
              "time": "2天前"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "#EBF1FD",
          "initial": "G",
          "news": [
            {
              "title": "谷歌AI搜索强推AI概览，意外为DuckDuckGo引流",
              "summary": "6月19日消息，谷歌在搜索引擎中强推AI概览功能引发用户反弹。当用户搜索no AI等短语时，谷歌AI竟主动建议前往DuckDuckGo的无AI搜索页面。DuckDuckGo随后晒出截图证实此事，其应用安装量周环比增长达30%。谷歌至今不允许用户永久关闭AI概览，与DuckDuckGo可随时开关AI功能形成鲜明对比。",
              "link": "https://news.qq.com/rain/a/20260620A04JOA00",
              "tags": [
                "AI搜索",
                "用户体验"
              ],
              "source": "腾讯新闻",
              "time": "1天前"
            },
            {
              "title": "谷歌协力打造全球首个AI艺术博物馆Dataland",
              "summary": "当地时间6月18日，谷歌宣布携手艺术家Refik Anadol在洛杉矶打造全球首个AI艺术博物馆Dataland，于6月20日开馆。博物馆面积约2500平方米，使用Gemini及扩散模型等AI技术实时生成12亿像素超现实画面，并配合动态声景和算法气味，形成多感官沉浸式体验。系统运行在87%无碳可再生能源上。",
              "link": "https://www.donews.com/news/detail/4/6602588.html",
              "tags": [
                "AI艺术",
                "Gemini"
              ],
              "source": "DoNews",
              "time": "2天前"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#000000",
          "softBg": "#F2F2F2",
          "initial": "x",
          "news": [
            {
              "title": "杨立昆锐评马斯克：xAI已经失败，SpaceX出色",
              "summary": "当地时间6月18日，图灵奖得主杨立昆接受CNBC采访时表示，马斯克创办的xAI某种程度上已经失败，创始团队全部出走导致难以招到顶尖AI人才，被迫将数据中心出租给Anthropic等对手以回收成本。杨立昆认为xAI无法参与最前沿AI竞争，但对SpaceX和特斯拉FSD给予正面评价。同时他警告AI行业若不降本恐面临泡沫破裂。",
              "link": "https://m.techweb.com.cn/marticle/2026-06-19/2976708.shtml",
              "tags": [
                "xAI",
                "行业观点"
              ],
              "source": "TechWeb",
              "time": "2天前"
            },
            {
              "title": "xAI为微软Office推出Grok扩展",
              "summary": "6月19日，马斯克旗下SpaceXAI面向微软Word、Excel和PowerPoint推出Grok Office扩展。用户安装后在Office右侧出现对话侧边栏，可通过自然语言指令自动生成文档、分析数据、制作幻灯片。扩展需订阅SuperGrok或Heavy等付费计划，标志着Grok从独立聊天机器人向嵌入式办公助手转型。",
              "link": "https://tech.ifeng.com/c/8u704LDXfHT",
              "tags": [
                "Grok",
                "Office"
              ],
              "source": "凤凰科技",
              "time": "1天前"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "color": "#76B900",
          "softBg": "#F3F9E8",
          "initial": "N",
          "news": []
        },
        {
          "name": "Meta",
          "color": "#1877F2",
          "softBg": "#E8F0FD",
          "initial": "M",
          "news": [
            {
              "title": "扎克伯格承诺Meta今年不再裁员，员工士气仍跌至谷底",
              "summary": "当地时间6月11日，扎克伯格向员工发内部备忘录，承诺Meta今年余下时间不再裁员，但坦言未来可能更艰难。此前Meta在AI转型重组中裁撤8000人（占10%），约7000人被强制调岗至AI项目从事基础数据工作。扎克伯格宣布7月办AI黑客松试图提振士气，却遭员工冷淡回绝，CTO承认士气或为20年来最糟。",
              "link": "https://finance.sina.cn/stock/jdts/2026-06-20/detail-iniczanc0927721.d.html",
              "tags": [
                "裁员",
                "AI转型"
              ],
              "source": "新浪财经",
              "time": "6月11日"
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
          "softBg": "#FFF0E5",
          "initial": "阿",
          "news": [
            {
              "title": "蔡崇信：阿里全面投入AI，开源推动力来自中国企业",
              "summary": "当地时间6月18日，阿里主席蔡崇信在VivaTech 2026欧洲科技峰会上表示，AI总潜在市场规模对标全球人类生产力达50万亿美元，阿里凭借能源、基础设施、模型和应用层全栈优势全面投入AI。他强调全球AI开源的主要推动力量如今来自中国企业，千问（Qwen）已成为全球最受欢迎的开源模型之一。",
              "link": "https://tech.huanqiu.com/article/4S2dClJDEt0",
              "tags": [
                "开源",
                "全栈AI"
              ],
              "source": "环球网",
              "time": "2天前"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#3370FF",
          "softBg": "#EBF1FF",
          "initial": "火",
          "news": []
        },
        {
          "name": "DeepSeek",
          "color": "#4D4DFF",
          "softBg": "#EDEDFF",
          "initial": "D",
          "news": []
        },
        {
          "name": "腾讯",
          "color": "#0052D9",
          "softBg": "#E5EDFB",
          "initial": "腾",
          "news": []
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "#FFF0E5",
          "initial": "米",
          "news": []
        },
        {
          "name": "智谱AI",
          "color": "#5B4CBF",
          "softBg": "#EEEDF9",
          "initial": "智",
          "news": [
            {
              "title": "智谱GLM 5.2登顶Design Arena网页设计AI榜单",
              "summary": "6月20日，Design Arena宣布智谱GLM-5.2模型在网页设计盲测中超越Claude Fable 5和Opus 4.7，首次登顶总分第一。GLM 5.2在TailwindCSS使用率达91%（Fable 5仅57%），擅长排版和动画，且每百万tokens仅1.40/4.40美元，约为Fable 5的十分之一。模型以MIT协议开源，支持国产算力平台。",
              "link": "https://www.ithome.com/0/966/458.htm",
              "tags": [
                "GLM-5.2",
                "开源",
                "设计评测"
              ],
              "source": "IT之家",
              "time": "6月20日"
            },
            {
              "title": "智谱创始人唐杰回应马斯克：中国大模型追上Fable用不了那么久",
              "summary": "6月18日，马斯克在X平台预测中国大模型需到2027年Q1才能追上Anthropic Fable级别。智谱AI创始人唐杰随即回应称用不了那么久。此前智谱刚发布GLM-5.2，在FrontierSWE编程基准仅落后Claude Opus 4.8约1个百分点，智谱港股当日大涨26%创历史新高。",
              "link": "https://m.thepaper.cn/newsDetail_forward_33418162",
              "tags": [
                "大模型追赶",
                "开源"
              ],
              "source": "澎湃新闻",
              "time": "2天前"
            }
          ]
        },
        {
          "name": "月之暗面",
          "color": "#6C5CE7",
          "softBg": "#F0EEFD",
          "initial": "月",
          "news": [
            {
              "title": "四台Mac Studio成功本地运行万亿参数Kimi K2.6模型",
              "summary": "6月20日消息，在WWDC 2026期间，LM Studio与苹果合作，成功在四台Mac Studio（M3 Ultra/每台512GB内存）集群上本地运行月之暗面的万亿参数Kimi K2.6模型，总内存池约1.5TB，推理速度约28 tokens/s。硬件成本约4.2万美元，远低于传统H100集群的30万美元，被视为本地私有AI部署的标志性突破。",
              "link": "https://m.ithome.com/html/966539.htm",
              "tags": [
                "本地部署",
                "Mac Studio"
              ],
              "source": "IT之家",
              "time": "6月20日"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#CF0A2C",
          "softBg": "#FDE8EC",
          "initial": "华",
          "news": []
        }
      ]
    },
    "other": {
      "categories": [
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "人形机器人Pemba登顶6200米火山，基于宇树G1改装",
                  "summary": "6月20日消息，一台由宇树G1改装、名为Pemba的人形机器人成功登顶厄瓜多尔钦博拉索火山海拔6200米顶峰，成为全球首台登顶6000米以上高峰的人形机器人。Pemba在坡度低于30度路段可独立行走，全程耗时16小时。项目由Geologic Dome主导，系三冠探险计划首站，未来目标挑战珠穆朗玛峰。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-06-20/doc-iniczxru1920708.shtml",
                  "tags": [
                    "人形机器人",
                    "登山"
                  ],
                  "source": "新浪财经",
                  "time": "6月20日"
                }
              ]
            },
            {
              "title": "银河通用",
              "news": [
                {
                  "title": "银河通用发布全球首个人形机器人通用小脑GPT模型",
                  "summary": "6月19日，银河通用机器人发布AstraBrain-WBC 0.5，全球首个达到GPT-1量级（8040万参数）的人形机器人全身实时运控大模型。模型使用2万小时人类动作数据训练，首次验证运动控制领域的Scaling Law：数据从200万帧扩展至20亿帧后成功率从83%提升至93%。论文已被CVPR 2026接收，代码全面开源。",
                  "link": "https://www.qbitai.com/2026/06/436813.html",
                  "tags": [
                    "运动控制",
                    "基础模型"
                  ],
                  "source": "量子位",
                  "time": "2天前"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "Rivian",
              "news": [
                {
                  "title": "Rivian因夸大初代车型自动驾驶能力遭车主集体起诉",
                  "summary": "6月19日消息，美国造车新势力Rivian因涉嫌在五年间系统性夸大初代R1T皮卡和R1S SUV的自动驾驶能力，在加州中区联邦法院遭消费者集体起诉。原告指控Rivian承诺的脱手脱眼驾驶功能因硬件不足永远无法实现，CEO Scaringe 2022年的公开表态被引为证据。Rivian以诉讼审理中为由不予置评。",
                  "link": "https://m.ithome.com/html/966437.htm",
                  "tags": [
                    "虚假宣传",
                    "集体诉讼"
                  ],
                  "source": "IT之家",
                  "time": "1天前"
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
          "name": "其他厂商",
          "cards": [
            {
              "title": "金山办公",
              "news": [
                {
                  "title": "金山办公将推组织级AI产品企业大脑WPS Comate",
                  "summary": "6月20日消息，金山办公副总裁王少康透露，公司将推出面向中大型组织的AI办公产品企业大脑WPS Comate，旨在整合组织内分散数据，理解团队协作关系，生成数字员工融入业务决策。该产品后续将实现规模化交付，帮助企业打造AI统一入口。",
                  "link": "https://tech.ifeng.com/c/8u6vphIFC5w",
                  "tags": [
                    "AI办公",
                    "企业服务"
                  ],
                  "source": "凤凰科技",
                  "time": "6月20日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "挪威政府",
              "news": [
                {
                  "title": "挪威将在小学阶段全面禁止使用生成式AI",
                  "summary": "当地时间6月19日，挪威首相斯特勒宣布从8月底新学年起，小学1-7年级原则上全面禁止使用生成式AI工具，初中生须在教师监管下谨慎使用，高中生则学习恰当使用AI。此前挪威已禁止学生在校使用智能手机，并计划立法增加纸质教材使用，以扭转基础教育过度依赖电子设备的趋势。",
                  "link": "https://k.sina.com.cn/article_1371701597_m51c2815d03301g0pw.html",
                  "tags": [
                    "AI监管",
                    "教育"
                  ],
                  "source": "新浪新闻",
                  "time": "6月19日"
                }
              ]
            },
            {
              "title": "印度首富安巴尼",
              "news": [
                {
                  "title": "安巴尼：印度必须成为AI的创造者和全球领导者",
                  "summary": "当地时间6月19日，印度首富安巴尼在信实工业年度股东大会上宣布成立Reliance Intelligence，提出印度不能只是AI消费者，必须成为创造者和全球领导者。信实发布Jio Call Agent通话助手等多款AI产品，计划年底前在贾姆讷格尔投用120兆瓦AI基础设施，采用NVIDIA GB300系统，覆盖超5亿用户。",
                  "link": "https://tech.ifeng.com/c/8u5tOzAsrdq",
                  "tags": [
                    "印度AI",
                    "信实工业"
                  ],
                  "source": "凤凰科技",
                  "time": "6月19日"
                }
              ]
            },
            {
              "title": "中国八部门",
              "news": [
                {
                  "title": "八部门联合发文加快人工智能+消费发展",
                  "summary": "6月18日，商务部等八部门联合印发《关于加快人工智能+消费发展的实施意见》，提出5方面17条举措，包括促进AI手机、电脑、人形机器人等产品消费，扩大AI在居家、养老、文旅等服务场景应用，推动智慧商圈与无人配送，优化AI消费环境。政策旨在打通供需堵点，培育消费新增长点。",
                  "link": "https://www.gov.cn/zhengce/zhengceku/202606/content_7072672.htm",
                  "tags": [
                    "政策",
                    "AI消费"
                  ],
                  "source": "中国政府网",
                  "time": "6月18日"
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
          "date": "2026-06-20",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash",
              "score": "4.89T tokens",
              "change": "↑8%"
            },
            {
              "model": "MiniMax M3",
              "score": "3.96T tokens",
              "change": "↑4%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "3.84T tokens",
              "change": "↑12%"
            },
            {
              "model": "Hy3 preview",
              "score": "3.53T tokens",
              "change": "↑17%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.71T tokens",
              "change": "↑23%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.55T tokens",
              "change": "↑28%"
            },
            {
              "model": "Owl Alpha",
              "score": "2.47T tokens",
              "change": "↑2%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1.57T tokens",
              "change": "↑19%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "1.55T tokens",
              "change": "↑30%"
            },
            {
              "model": "GLM 5.2",
              "score": "1.07T tokens",
              "change": "new"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-06-20",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "WorkClaw",
              "category": "Productivity",
              "rank": 1,
              "link": "https://www.producthunt.com/search?q=WorkClaw"
            },
            {
              "name": "Reframe",
              "category": "Open Source",
              "rank": 2,
              "link": "https://www.producthunt.com/search?q=Reframe"
            },
            {
              "name": "Slackbot's MCP Client",
              "category": "Slack",
              "rank": 3,
              "link": "https://www.producthunt.com/search?q=Slackbot's+MCP+Client"
            },
            {
              "name": "Mellum by JetBrains",
              "category": "Developer Tools",
              "rank": 4,
              "link": "https://www.producthunt.com/search?q=Mellum+by+JetBrains"
            },
            {
              "name": "Arbor",
              "category": "Sustainability",
              "rank": 5,
              "link": "https://www.producthunt.com/search?q=Arbor"
            },
            {
              "name": "Lottielab",
              "category": "Design",
              "rank": 6,
              "link": "https://www.producthunt.com/search?q=Lottielab"
            },
            {
              "name": "Routine 5.0",
              "category": "Productivity",
              "rank": 7,
              "link": "https://www.producthunt.com/search?q=Routine+5.0"
            },
            {
              "name": "Windsurf by Codeium",
              "category": "Developer Tools",
              "rank": 8,
              "link": "https://www.producthunt.com/search?q=Windsurf+by+Codeium"
            },
            {
              "name": "Glowtify",
              "category": "Marketing",
              "rank": 9,
              "link": "https://www.producthunt.com/search?q=Glowtify"
            },
            {
              "name": "EverArt 5.0",
              "category": "Design",
              "rank": 10,
              "link": "https://www.producthunt.com/search?q=EverArt+5.0"
            },
            {
              "name": "Potis AI",
              "category": "Artificial Intelligence",
              "rank": 11,
              "link": "https://www.producthunt.com/search?q=Potis+AI"
            },
            {
              "name": "Make It Snappy",
              "category": "User Experience",
              "rank": 12,
              "link": "https://www.producthunt.com/search?q=Make+It+Snappy"
            },
            {
              "name": "Flutter Flow 6.0",
              "category": "Developer Tools",
              "rank": 13,
              "link": "https://www.producthunt.com/search?q=Flutter+Flow+6.0"
            },
            {
              "name": "Zendo Edit",
              "category": "Video",
              "rank": 14,
              "link": "https://www.producthunt.com/search?q=Zendo+Edit"
            },
            {
              "name": "Rally",
              "category": "Productivity",
              "rank": 15,
              "link": "https://www.producthunt.com/search?q=Rally"
            },
            {
              "name": "Sune",
              "category": "Productivity",
              "rank": 16,
              "link": "https://www.producthunt.com/search?q=Sune"
            },
            {
              "name": "Pulsetic",
              "category": "Developer Tools",
              "rank": 17,
              "link": "https://www.producthunt.com/search?q=Pulsetic"
            },
            {
              "name": "Loom 4.0",
              "category": "Productivity",
              "rank": 18,
              "link": "https://www.producthunt.com/search?q=Loom+4.0"
            },
            {
              "name": "Sheetify",
              "category": "Data & Analytics",
              "rank": 19,
              "link": "https://www.producthunt.com/search?q=Sheetify"
            },
            {
              "name": "Bezel 3.0",
              "category": "Design",
              "rank": 20,
              "link": "https://www.producthunt.com/search?q=Bezel+3.0"
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
        // 从服务端拉取合并远程日志
        try {
            var auditUrl = 'https://api.github.com/repos/' + config.owner + '/' + config.repo + '/contents/audit-log.json';
            var auditGetResp = await fetch(auditUrl, { headers: headers });
            if (auditGetResp.ok) {
                var auditFileInfo = await auditGetResp.json();
                var remoteAudit = JSON.parse(base64ToUtf8(auditFileInfo.content));
                var remoteSha = auditFileInfo.sha;
                // 合并去重
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
                // 首次创建
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
