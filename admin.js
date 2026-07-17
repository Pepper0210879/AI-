const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-17",
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
              "title": "OpenAI的160亿美元AI数据中心项目遇阻，当地居民担忧水污染和电费上涨",
              "summary": "7月17日消息，据路透社报道，OpenAI计划投资160亿美元的AI数据中心项目遭遇当地居民强烈反对，居民担忧项目将导致水污染和电费大幅上涨。该项目目前面临审批障碍，OpenAI正与当地政府和社区协商解决方案。",
              "link": "https://www.ithome.com/0/977/885.htm",
              "tags": [
                "AI数据中心",
                "监管",
                "基础设施"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#d4a574",
          "softBg": "#fdf6ee",
          "initial": "A",
          "news": []
        },
        {
          "name": "Google",
          "color": "#4285f4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": [
            {
              "title": "Google宣布NotebookLM更名为Gemini Notebook，接入Gemini和Google搜索",
              "summary": "7月16日消息，Google宣布NotebookLM正式更名为Gemini Notebook，已服务超3000万用户和60万个组织。更名后仍作为独立研究工具运营，将接入Gemini应用和Google搜索，并为每个笔记本提供安全的云端计算环境。",
              "link": "https://www.ithome.com/0/977/833.htm",
              "tags": [
                "AI工具",
                "产品更名",
                "搜索引擎"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
            },
            {
              "title": "消息称谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达目标",
              "summary": "7月17日消息，据彭博社报道，谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达内部目标。该模型原计划今年上半年发布，但在开发过程中遇到技术瓶颈，发布时间被推迟。",
              "link": "https://www.ithome.com/0/977/847.htm",
              "tags": [
                "AI模型",
                "大模型",
                "延期"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
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
              "title": "SpaceXAI宣布开源Grok Build，重置所有用户使用限制",
              "summary": "当地时间7月15日，马斯克旗下SpaceXAI宣布开源Grok Build的CLI、终端界面和AI智能体运行时源码，重置所有用户使用额度。项目主体代码用Rust编写，自上线以来完全尊重零数据保留原则，正在删除之前保留的所有编码数据。",
              "link": "https://36kr.com/newsflashes/3897517050250889",
              "tags": [
                "开源",
                "AI编程",
                "AI智能体"
              ],
              "source": "36氪",
              "time": "当地时间7月15日"
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
              "title": "黄仁勋东京面谢世嘉前社长30年前雪中送炭，英伟达与世嘉合作30周年",
              "summary": "当地时间7月15日，英伟达CEO黄仁勋在东京出席世嘉与英伟达合作30周年活动时，公开感谢世嘉前社长在30年前英伟达陷入困境时提供约500万美元援助。活动现场展示了合作新作《虚幻斗士 命运交锋》。",
              "link": "https://www.ithome.com/0/977/227.htm",
              "tags": [
                "英伟达",
                "世嘉",
                "合作"
              ],
              "source": "IT之家",
              "time": "当地时间7月15日"
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
              "title": "Meta AI上线新功能：青少年讨论自杀或自残话题将自动通报家长",
              "summary": "7月16日消息，Meta宣布其AI系统上线新功能，当检测到青少年在平台上讨论自杀或自残相关话题时，将自动通报家长或监护人。该功能旨在加强青少年保护，防止极端事件发生。",
              "link": "https://www.ithome.com/0/977/841.htm",
              "tags": [
                "AI安全",
                "青少年保护",
                "社交媒体"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
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
              "title": "阿里千问首款AI智能体耳机将在WAIC 2026亮相",
              "summary": "7月16日消息，阿里巴巴旗下千问首款AI智能体耳机将于WAIC 2026期间亮相。此前千问已在MWC展示AI眼镜，并计划年内推出AI指环等穿戴设备，打造覆盖多终端、软硬一体的个人AI助手生态。",
              "link": "https://www.cls.cn/detail/2428404",
              "tags": [
                "AI硬件",
                "耳机",
                "智能体"
              ],
              "source": "财联社",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#1677ff",
          "softBg": "#e9f0ff",
          "initial": "火",
          "news": []
        },
        {
          "name": "DeepSeek",
          "color": "#4f46e5",
          "softBg": "#eef1ff",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek估值超3500亿元，启动第二轮融资",
              "summary": "7月16日消息，开润股份公告显示，按投资金额和持股比例推算，DeepSeek本轮融资后估值约3510亿元。接近DeepSeek的人士称公司已启动第二轮融资，年底是否冲刺科创板尚未确定。",
              "link": "https://36kr.com/p/3895568122447237",
              "tags": [
                "融资",
                "估值",
                "科创板"
              ],
              "source": "36氪",
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
          "news": [
            {
              "title": "小米发布具身基座模型Xiaomi-Robotics-1，10万小时真实操作数据预训练",
              "summary": "7月16日消息，小米发布具身基座模型Xiaomi-Robotics-1，以10万小时真实世界操作轨迹预训练，覆盖1700个场景、240万段轨迹与260多类任务。后训练阶段加入约1万小时跨本体数据，采用预训练+后训练技术路线，首次系统验证机器人Scaling Law。",
              "link": "https://tech.ifeng.com/c/8unvCD8utZR",
              "tags": [
                "具身智能",
                "大模型",
                "机器人"
              ],
              "source": "凤凰科技",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#2962ff",
          "softBg": "#e8efff",
          "initial": "智",
          "news": [
            {
              "title": "消息称智谱AI年度经常性收入已达10亿美元，半年增长15倍",
              "summary": "7月17日消息，消息称智谱AI年度经常性收入（ARR）已达10亿美元，半年增长15倍。智谱AI近期在资本市场表现强劲，H股配售持续获得大额融资，公司正在加速商业化进程。",
              "link": "https://36kr.com/p/3898662052693894",
              "tags": [
                "ARR",
                "营收",
                "商业化"
              ],
              "source": "36氪",
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
              "title": "月之暗面发布Kimi K3：2.8万亿参数开源模型，支持100万token上下文",
              "summary": "7月16日晚，月之暗面正式上线迄今最强旗舰模型Kimi K3，采用2.8万亿参数MoE架构（896专家激活16个），最大支持100万token上下文窗口。在编程、游戏/3D及知识类任务上表现突出，整体扩展效率较K2提升约2.5倍。API价格为每百万token输入2元（缓存命中）或20元，输出100元。",
              "link": "https://www.cnstock.com/commonDetail/746430",
              "tags": [
                "大模型",
                "开源",
                "MoE"
              ],
              "source": "证券时报",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#cf0a2c",
          "softBg": "#fde8ec",
          "initial": "华",
          "news": [
            {
              "title": "华为引望CEO靳玉志：L3 2027年规模商用，城区L4分阶段试点",
              "summary": "7月16日消息，华为引望CEO靳玉志公布自动驾驶时间表：今年在部分城市开展城区低速L4试点；2027年推动L3规模商用并试点Robotaxi；2028年扩大Robotaxi城市商用，推动城区全速L4和无人干线物流试点。",
              "link": "https://tech.ifeng.com/c/8uoF7XEDhhr",
              "tags": [
                "自动驾驶",
                "L3",
                "Robotaxi"
              ],
              "source": "36氪",
              "time": "7月16日消息"
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
              "title": "努比亚",
              "news": [
                {
                  "title": "努比亚全球首款AI智能体手机NaviX Ultra官宣，内置豆包手机助手",
                  "summary": "7月16日消息，努比亚正式发布全球首款AI智能体手机NaviX Ultra，搭载豆包手机助手，配备橙色AI键。该机提供蓝境、幻梦、黑色和白色四款配色，获2026世界人工智能大会SAIL卓越奖。",
                  "link": "https://tech.ifeng.com/c/8unqhPsBu7j",
                  "tags": [
                    "AI手机",
                    "智能体",
                    "豆包"
                  ],
                  "source": "凤凰科技",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax携M3、H3全模态模型及产品亮相WAIC 2026",
                  "summary": "7月16日消息，MiniMax在WAIC 2026展示旗舰模型M3（4280亿总参数、230亿激活参数），并预热多模态生成模型H3。现场还展示了本地创作工作台MiniMax Hub、机器狗、AI眼镜等合作案例，其中Vbot机器狗首销预售累计6540台。",
                  "link": "https://www.yicai.com/news/103278346.html",
                  "tags": [
                    "大模型",
                    "多模态",
                    "WAIC"
                  ],
                  "source": "第一财经",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "荣耀",
              "news": [
                {
                  "title": "荣耀Robot Phone展示双配色与四自由度云台，全球首台机器人手机",
                  "summary": "7月16日消息，荣耀CEO李健公布Robot Phone双配色，产品已准备就绪。机身顶部集成四自由度钛合金机械云台，约0.8秒弹出，支持360度追踪。搭载第五代骁龙8至尊版、1.5K直屏，支持120W快充。",
                  "link": "https://m.ithome.com/html/977463.htm",
                  "tags": [
                    "机器人手机",
                    "AI硬件",
                    "云台"
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
          "cards": [
            {
              "title": "Waymo",
              "news": [
                {
                  "title": "美国旧金山市长回应Waymo自动驾驶出租车事故，敦促加强监管",
                  "summary": "7月16日消息，美国旧金山市长就近期Waymo自动驾驶出租车连续发生事故作出回应，敦促交通部门加强自动驾驶出租车监管。市长表示需要在创新与公共安全之间找到平衡，要求完善事故报告和应急响应机制。",
                  "link": "https://www.ithome.com/0/977/850.htm",
                  "tags": [
                    "Waymo",
                    "自动驾驶",
                    "监管",
                    "事故"
                  ],
                  "source": "IT之家",
                  "time": "7月16日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "波士顿动力",
              "news": [
                {
                  "title": "现代汽车将波士顿动力转为全资子公司，加速布局机器人业务",
                  "summary": "7月16日消息，现代汽车集团宣布收购软银持有的波士顿动力近10%股份（约3.25亿美元），将其转变为全资子公司。波士顿动力人形机器人Atlas已制定明确时间表：2028年部署超25000台至工厂，2030年扩展至零部件组装。",
                  "link": "https://www.cls.cn/detail/2428164",
                  "tags": [
                    "收购",
                    "人形机器人",
                    "现代汽车"
                  ],
                  "source": "财联社",
                  "time": "7月16日消息"
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
              "title": "日本机器人AI",
              "news": [
                {
                  "title": "日本拟采购2.75万颗英伟达Rubin芯片，打造本土机器人AI基础模型",
                  "summary": "7月16日消息，日本计划采购2.75万颗英伟达下一代Rubin AI芯片，新成立的Noetra将负责建设大型数据中心，计划2027年3月发布首个AI模型。该项目由软银、丰田旗下Preferred Networks、日本电气等参与运营，获政府3873亿日元支持。",
                  "link": "https://www.jiemian.com/article/14776964.html",
                  "tags": [
                    "英伟达",
                    "日本",
                    "机器人",
                    "AI芯片"
                  ],
                  "source": "界面新闻",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "孙正义",
              "news": [
                {
                  "title": "孙正义预计AI机器人市场规模将超290万亿元，称质疑AI如同拒绝汽车",
                  "summary": "7月14日消息，软银创始人孙正义在东京出席活动时表示，对AI泡沫的担忧毫无依据。预计2040年前后将约有10亿台搭载AI的人形机器人投入运行，AI机器人市场规模将扩大到约7000万亿日元（约292.7万亿元人民币）。",
                  "link": "https://news.qq.com/rain/a/20260716A07GYO00",
                  "tags": [
                    "孙正义",
                    "AI机器人",
                    "市场规模"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月14日消息"
                }
              ]
            },
            {
              "title": "AI编造谣言",
              "news": [
                {
                  "title": "网民用AI编造“高考估分715查分299”虚假谣言被警方依法行政拘留",
                  "summary": "7月16日消息，四川绵阳警方通报，一福建网民利用AI工具编造“高考估分715查分299，试卷被调包”的虚假网文博取流量。经核查，帖中考生、成绩及流程均属捏造。造谣者已被警方依据新修订《治安管理处罚法》行政拘留。",
                  "link": "https://news.sina.com.cn/s/2026-07-16/doc-inihyuqf8052297.shtml",
                  "tags": [
                    "AI安全",
                    "谣言",
                    "法律",
                    "高考"
                  ],
                  "source": "新浪新闻",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "机器人老师",
              "news": [
                {
                  "title": "纽约州试点引入人形机器人担任“助教”，课程内容可控且不说谎",
                  "summary": "7月16日消息，据外媒报道，今年秋季由Realbotix提供的人形机器人Sally将进入纽约州西部公立学校担任“助教”。Sally拥有硅胶皮肤和逼真外形，培训材料仅限学区课程，运行在封闭网络中不连接公共互联网。在无法回答时明确说“我不知道”，检测到自残风险会自动向管理人员发出警报。",
                  "link": "https://m.ithome.com/html/977321.htm",
                  "tags": [
                    "AI教育",
                    "人形机器人"
                  ],
                  "source": "IT之家",
                  "time": "7月16日消息"
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
          "date": "2026-07-17",
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
          "date": "2026-07-17",
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
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-17",
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
};st STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-17",
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
              "title": "OpenAI的160亿美元AI数据中心项目遇阻，当地居民担忧水污染和电费上涨",
              "summary": "7月17日消息，据路透社报道，OpenAI计划投资160亿美元的AI数据中心项目遭遇当地居民强烈反对，居民担忧项目将导致水污染和电费大幅上涨。该项目目前面临审批障碍，OpenAI正与当地政府和社区协商解决方案。",
              "link": "https://www.ithome.com/0/977/885.htm",
              "tags": [
                "AI数据中心",
                "监管",
                "基础设施"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#d4a574",
          "softBg": "#fdf6ee",
          "initial": "A",
          "news": []
        },
        {
          "name": "Google",
          "color": "#4285f4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": [
            {
              "title": "Google宣布NotebookLM更名为Gemini Notebook，接入Gemini和Google搜索",
              "summary": "7月16日消息，Google宣布NotebookLM正式更名为Gemini Notebook，已服务超3000万用户和60万个组织。更名后仍作为独立研究工具运营，将接入Gemini应用和Google搜索，并为每个笔记本提供安全的云端计算环境。",
              "link": "https://www.ithome.com/0/977/833.htm",
              "tags": [
                "AI工具",
                "产品更名",
                "搜索引擎"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
            },
            {
              "title": "消息称谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达目标",
              "summary": "7月17日消息，据彭博社报道，谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达内部目标。该模型原计划今年上半年发布，但在开发过程中遇到技术瓶颈，发布时间被推迟。",
              "link": "https://www.ithome.com/0/977/847.htm",
              "tags": [
                "AI模型",
                "大模型",
                "延期"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
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
              "title": "SpaceXAI宣布开源Grok Build，重置所有用户使用限制",
              "summary": "当地时间7月15日，马斯克旗下SpaceXAI宣布开源Grok Build的CLI、终端界面和AI智能体运行时源码，重置所有用户使用额度。项目主体代码用Rust编写，自上线以来完全尊重零数据保留原则，正在删除之前保留的所有编码数据。",
              "link": "https://36kr.com/newsflashes/3897517050250889",
              "tags": [
                "开源",
                "AI编程",
                "AI智能体"
              ],
              "source": "36氪",
              "time": "当地时间7月15日"
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
              "title": "黄仁勋东京面谢世嘉前社长30年前雪中送炭，英伟达与世嘉合作30周年",
              "summary": "当地时间7月15日，英伟达CEO黄仁勋在东京出席世嘉与英伟达合作30周年活动时，公开感谢世嘉前社长在30年前英伟达陷入困境时提供约500万美元援助。活动现场展示了合作新作《虚幻斗士 命运交锋》。",
              "link": "https://www.ithome.com/0/977/227.htm",
              "tags": [
                "英伟达",
                "世嘉",
                "合作"
              ],
              "source": "IT之家",
              "time": "当地时间7月15日"
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
              "title": "Meta AI上线新功能：青少年讨论自杀或自残话题将自动通报家长",
              "summary": "7月16日消息，Meta宣布其AI系统上线新功能，当检测到青少年在平台上讨论自杀或自残相关话题时，将自动通报家长或监护人。该功能旨在加强青少年保护，防止极端事件发生。",
              "link": "https://www.ithome.com/0/977/841.htm",
              "tags": [
                "AI安全",
                "青少年保护",
                "社交媒体"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
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
              "title": "阿里千问首款AI智能体耳机将在WAIC 2026亮相",
              "summary": "7月16日消息，阿里巴巴旗下千问首款AI智能体耳机将于WAIC 2026期间亮相。此前千问已在MWC展示AI眼镜，并计划年内推出AI指环等穿戴设备，打造覆盖多终端、软硬一体的个人AI助手生态。",
              "link": "https://www.cls.cn/detail/2428404",
              "tags": [
                "AI硬件",
                "耳机",
                "智能体"
              ],
              "source": "财联社",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#1677ff",
          "softBg": "#e9f0ff",
          "initial": "火",
          "news": []
        },
        {
          "name": "DeepSeek",
          "color": "#4f46e5",
          "softBg": "#eef1ff",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek估值超3500亿元，启动第二轮融资",
              "summary": "7月16日消息，开润股份公告显示，按投资金额和持股比例推算，DeepSeek本轮融资后估值约3510亿元。接近DeepSeek的人士称公司已启动第二轮融资，年底是否冲刺科创板尚未确定。",
              "link": "https://36kr.com/p/3895568122447237",
              "tags": [
                "融资",
                "估值",
                "科创板"
              ],
              "source": "36氪",
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
          "news": [
            {
              "title": "小米发布具身基座模型Xiaomi-Robotics-1，10万小时真实操作数据预训练",
              "summary": "7月16日消息，小米发布具身基座模型Xiaomi-Robotics-1，以10万小时真实世界操作轨迹预训练，覆盖1700个场景、240万段轨迹与260多类任务。后训练阶段加入约1万小时跨本体数据，采用预训练+后训练技术路线，首次系统验证机器人Scaling Law。",
              "link": "https://tech.ifeng.com/c/8unvCD8utZR",
              "tags": [
                "具身智能",
                "大模型",
                "机器人"
              ],
              "source": "凤凰科技",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#2962ff",
          "softBg": "#e8efff",
          "initial": "智",
          "news": [
            {
              "title": "消息称智谱AI年度经常性收入已达10亿美元，半年增长15倍",
              "summary": "7月17日消息，消息称智谱AI年度经常性收入（ARR）已达10亿美元，半年增长15倍。智谱AI近期在资本市场表现强劲，H股配售持续获得大额融资，公司正在加速商业化进程。",
              "link": "https://36kr.com/p/3898662052693894",
              "tags": [
                "ARR",
                "营收",
                "商业化"
              ],
              "source": "36氪",
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
              "title": "月之暗面发布Kimi K3：2.8万亿参数开源模型，支持100万token上下文",
              "summary": "7月16日晚，月之暗面正式上线迄今最强旗舰模型Kimi K3，采用2.8万亿参数MoE架构（896专家激活16个），最大支持100万token上下文窗口。在编程、游戏/3D及知识类任务上表现突出，整体扩展效率较K2提升约2.5倍。API价格为每百万token输入2元（缓存命中）或20元，输出100元。",
              "link": "https://www.cnstock.com/commonDetail/746430",
              "tags": [
                "大模型",
                "开源",
                "MoE"
              ],
              "source": "证券时报",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#cf0a2c",
          "softBg": "#fde8ec",
          "initial": "华",
          "news": [
            {
              "title": "华为引望公布自动驾驶时间表：L3 2027年规模商用，城区L4分阶段试点",
              "summary": "7月16日消息，华为引望CEO靳玉志公布自动驾驶时间表：今年在部分城市开展城区低速L4试点；2027年推动L3规模商用并试点Robotaxi；2028年扩大Robotaxi城市商用，推动城区全速L4和无人干线物流试点。",
              "link": "https://tech.ifeng.com/c/8uoF7XEDhhr",
              "tags": [
                "自动驾驶",
                "L3",
                "Robotaxi"
              ],
              "source": "36氪",
              "time": "7月16日消息"
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
              "title": "努比亚",
              "news": [
                {
                  "title": "努比亚全球首款AI智能体手机NaviX Ultra官宣，内置豆包手机助手",
                  "summary": "7月16日消息，努比亚正式发布全球首款AI智能体手机NaviX Ultra，搭载豆包手机助手，配备橙色AI键。该机提供蓝境、幻梦、黑色和白色四款配色，获2026世界人工智能大会SAIL卓越奖。",
                  "link": "https://tech.ifeng.com/c/8unqhPsBu7j",
                  "tags": [
                    "AI手机",
                    "智能体",
                    "豆包"
                  ],
                  "source": "凤凰科技",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax携M3、H3全模态模型及产品亮相WAIC 2026",
                  "summary": "7月16日消息，MiniMax在WAIC 2026展示旗舰模型M3（4280亿总参数、230亿激活参数），并预热多模态生成模型H3。现场还展示了本地创作工作台MiniMax Hub、机器狗、AI眼镜等合作案例，其中Vbot机器狗首销预售累计6540台。",
                  "link": "https://www.yicai.com/news/103278346.html",
                  "tags": [
                    "大模型",
                    "多模态",
                    "WAIC"
                  ],
                  "source": "第一财经",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "荣耀",
              "news": [
                {
                  "title": "荣耀Robot Phone展示双配色与四自由度云台，全球首台机器人手机",
                  "summary": "7月16日消息，荣耀CEO李健公布Robot Phone双配色，产品已准备就绪。机身顶部集成四自由度钛合金机械云台，约0.8秒弹出，支持360度追踪。搭载第五代骁龙8至尊版、1.5K直屏，支持120W快充。",
                  "link": "https://m.ithome.com/html/977463.htm",
                  "tags": [
                    "机器人手机",
                    "AI硬件",
                    "云台"
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
          "cards": [
            {
              "title": "Waymo",
              "news": [
                {
                  "title": "美国旧金山市长回应Waymo自动驾驶出租车事故，敦促加强监管",
                  "summary": "7月16日消息，美国旧金山市长就近期Waymo自动驾驶出租车连续发生事故作出回应，敦促交通部门加强自动驾驶出租车监管。市长表示需要在创新与公共安全之间找到平衡，要求完善事故报告和应急响应机制。",
                  "link": "https://www.ithome.com/0/977/850.htm",
                  "tags": [
                    "Waymo",
                    "自动驾驶",
                    "监管",
                    "事故"
                  ],
                  "source": "IT之家",
                  "time": "7月16日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "波士顿动力",
              "news": [
                {
                  "title": "现代汽车将波士顿动力转为全资子公司，加速布局机器人业务",
                  "summary": "7月16日消息，现代汽车集团宣布收购软银持有的波士顿动力近10%股份（约3.25亿美元），将其转变为全资子公司。波士顿动力人形机器人Atlas已制定明确时间表：2028年部署超25000台至工厂，2030年扩展至零部件组装。",
                  "link": "https://www.cls.cn/detail/2428164",
                  "tags": [
                    "收购",
                    "人形机器人",
                    "现代汽车"
                  ],
                  "source": "财联社",
                  "time": "7月16日消息"
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
              "title": "日本机器人AI",
              "news": [
                {
                  "title": "日本拟采购2.75万颗英伟达Rubin芯片，打造本土机器人AI基础模型",
                  "summary": "7月16日消息，日本计划采购2.75万颗英伟达下一代Rubin AI芯片，新成立的Noetra将负责建设大型数据中心，计划2027年3月发布首个AI模型。该项目由软银、丰田旗下Preferred Networks、日本电气等参与运营，获政府3873亿日元支持。",
                  "link": "https://www.jiemian.com/article/14776964.html",
                  "tags": [
                    "英伟达",
                    "日本",
                    "机器人",
                    "AI芯片"
                  ],
                  "source": "界面新闻",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "孙正义",
              "news": [
                {
                  "title": "孙正义预计AI机器人市场规模将超290万亿元，称质疑AI如同拒绝汽车",
                  "summary": "7月14日消息，软银创始人孙正义在东京出席活动时表示，对AI泡沫的担忧毫无依据。预计2040年前后将约有10亿台搭载AI的人形机器人投入运行，AI机器人市场规模将扩大到约7000万亿日元（约292.7万亿元人民币）。",
                  "link": "https://news.qq.com/rain/a/20260716A07GYO00",
                  "tags": [
                    "孙正义",
                    "AI机器人",
                    "市场规模"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月14日消息"
                }
              ]
            },
            {
              "title": "AI编造谣言",
              "news": [
                {
                  "title": "网民用AI编造“高考估分715查分299”虚假谣言被警方依法行政拘留",
                  "summary": "7月16日消息，四川绵阳警方通报，一福建网民利用AI工具编造“高考估分715查分299，试卷被调包”的虚假网文博取流量。经核查，帖中考生、成绩及流程均属捏造。造谣者已被警方依据新修订《治安管理处罚法》行政拘留。",
                  "link": "https://news.sina.com.cn/s/2026-07-16/doc-inihyuqf8052297.shtml",
                  "tags": [
                    "AI安全",
                    "谣言",
                    "法律",
                    "高考"
                  ],
                  "source": "新浪新闻",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "机器人老师",
              "news": [
                {
                  "title": "纽约州试点引入人形机器人担任“助教”，课程内容可控且不说谎",
                  "summary": "7月16日消息，据外媒报道，今年秋季由Realbotix提供的人形机器人Sally将进入纽约州西部公立学校担任“助教”。Sally拥有硅胶皮肤和逼真外形，培训材料仅限学区课程，运行在封闭网络中不连接公共互联网。在无法回答时明确说“我不知道”，检测到自残风险会自动向管理人员发出警报。",
                  "link": "https://m.ithome.com/html/977321.htm",
                  "tags": [
                    "AI教育",
                    "人形机器人"
                  ],
                  "source": "IT之家",
                  "time": "7月16日消息"
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
          "date": "2026-07-17",
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
          "date": "2026-07-17",
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
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-17",
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
};st STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-17",
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
              "title": "OpenAI的160亿美元AI数据中心项目遇阻，当地居民担忧水污染和电费上涨",
              "summary": "7月17日消息，据路透社报道，OpenAI计划投资160亿美元的AI数据中心项目遭遇当地居民强烈反对，居民担忧项目将导致水污染和电费大幅上涨。该项目目前面临审批障碍，OpenAI正与当地政府和社区协商解决方案。",
              "link": "https://www.ithome.com/0/977/885.htm",
              "tags": [
                "AI数据中心",
                "监管",
                "基础设施"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#d4a574",
          "softBg": "#fdf6ee",
          "initial": "A",
          "news": []
        },
        {
          "name": "Google",
          "color": "#4285f4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": [
            {
              "title": "Google宣布NotebookLM更名为Gemini Notebook，接入Gemini和Google搜索",
              "summary": "7月16日消息，Google宣布NotebookLM正式更名为Gemini Notebook，已服务超3000万用户和60万个组织。更名后仍作为独立研究工具运营，将接入Gemini应用和Google搜索，并为每个笔记本提供安全的云端计算环境。",
              "link": "https://www.ithome.com/0/977/833.htm",
              "tags": [
                "AI工具",
                "产品更名",
                "搜索引擎"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
            },
            {
              "title": "消息称谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达目标",
              "summary": "7月17日消息，据彭博社报道，谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达内部目标。该模型原计划今年上半年发布，但在开发过程中遇到技术瓶颈，发布时间被推迟。",
              "link": "https://www.ithome.com/0/977/847.htm",
              "tags": [
                "AI模型",
                "大模型",
                "延期"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
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
              "title": "SpaceXAI宣布开源Grok Build，重置所有用户使用限制",
              "summary": "当地时间7月15日，马斯克旗下SpaceXAI宣布开源Grok Build的CLI、终端界面和AI智能体运行时源码，重置所有用户使用额度。项目主体代码用Rust编写，自上线以来完全尊重零数据保留原则，正在删除之前保留的所有编码数据。",
              "link": "https://36kr.com/newsflashes/3897517050250889",
              "tags": [
                "开源",
                "AI编程",
                "AI智能体"
              ],
              "source": "36氪",
              "time": "当地时间7月15日"
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
              "title": "黄仁勋东京面谢世嘉前社长30年前雪中送炭，英伟达与世嘉合作30周年",
              "summary": "当地时间7月15日，英伟达CEO黄仁勋在东京出席世嘉与英伟达合作30周年活动时，公开感谢世嘉前社长在30年前英伟达陷入困境时提供约500万美元援助。活动现场展示了合作新作《虚幻斗士 命运交锋》。",
              "link": "https://www.ithome.com/0/977/227.htm",
              "tags": [
                "英伟达",
                "世嘉",
                "合作"
              ],
              "source": "IT之家",
              "time": "当地时间7月15日"
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
              "title": "Meta AI上线新功能：青少年讨论自杀或自残话题将自动通报家长",
              "summary": "7月16日消息，Meta宣布其AI系统上线新功能，当检测到青少年在平台上讨论自杀或自残相关话题时，将自动通报家长或监护人。该功能旨在加强青少年保护，防止极端事件发生。",
              "link": "https://www.ithome.com/0/977/841.htm",
              "tags": [
                "AI安全",
                "青少年保护",
                "社交媒体"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
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
              "title": "阿里千问首款AI智能体耳机将在WAIC 2026亮相",
              "summary": "7月16日消息，阿里巴巴旗下千问首款AI智能体耳机将于WAIC 2026期间亮相。此前千问已在MWC展示AI眼镜，并计划年内推出AI指环等穿戴设备，打造覆盖多终端、软硬一体的个人AI助手生态。",
              "link": "https://www.cls.cn/detail/2428404",
              "tags": [
                "AI硬件",
                "耳机",
                "智能体"
              ],
              "source": "财联社",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#1677ff",
          "softBg": "#e9f0ff",
          "initial": "火",
          "news": []
        },
        {
          "name": "DeepSeek",
          "color": "#4f46e5",
          "softBg": "#eef1ff",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek估值超3500亿元，启动第二轮融资",
              "summary": "7月16日消息，开润股份公告显示，按投资金额和持股比例推算，DeepSeek本轮融资后估值约3510亿元。接近DeepSeek的人士称公司已启动第二轮融资，年底是否冲刺科创板尚未确定。",
              "link": "https://36kr.com/p/3895568122447237",
              "tags": [
                "融资",
                "估值",
                "科创板"
              ],
              "source": "36氪",
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
          "news": [
            {
              "title": "小米发布具身基座模型Xiaomi-Robotics-1，10万小时真实操作数据预训练",
              "summary": "7月16日消息，小米发布具身基座模型Xiaomi-Robotics-1，以10万小时真实世界操作轨迹预训练，覆盖1700个场景、240万段轨迹与260多类任务。后训练阶段加入约1万小时跨本体数据，采用预训练+后训练技术路线，首次系统验证机器人Scaling Law。",
              "link": "https://tech.ifeng.com/c/8unvCD8utZR",
              "tags": [
                "具身智能",
                "大模型",
                "机器人"
              ],
              "source": "凤凰科技",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#2962ff",
          "softBg": "#e8efff",
          "initial": "智",
          "news": [
            {
              "title": "消息称智谱AI年度经常性收入已达10亿美元，半年增长15倍",
              "summary": "7月17日消息，消息称智谱AI年度经常性收入（ARR）已达10亿美元，半年增长15倍。智谱AI近期在资本市场表现强劲，H股配售持续获得大额融资，公司正在加速商业化进程。",
              "link": "https://36kr.com/p/3898662052693894",
              "tags": [
                "ARR",
                "营收",
                "商业化"
              ],
              "source": "36氪",
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
              "title": "月之暗面发布Kimi K3：2.8万亿参数开源模型，支持100万token上下文",
              "summary": "7月16日晚，月之暗面正式上线迄今最强旗舰模型Kimi K3，采用2.8万亿参数MoE架构（896专家激活16个），最大支持100万token上下文窗口。在编程、游戏/3D及知识类任务上表现突出，整体扩展效率较K2提升约2.5倍。API价格为每百万token输入2元（缓存命中）或20元，输出100元。",
              "link": "https://www.cnstock.com/commonDetail/746430",
              "tags": [
                "大模型",
                "开源",
                "MoE"
              ],
              "source": "证券时报",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#cf0a2c",
          "softBg": "#fde8ec",
          "initial": "华",
          "news": [
            {
              "title": "华为引望公布自动驾驶时间表：L3 2027年规模商用，城区L4分阶段试点",
              "summary": "7月16日消息，华为引望CEO靳玉志公布自动驾驶时间表：今年在部分城市开展城区低速L4试点；2027年推动L3规模商用并试点Robotaxi；2028年扩大Robotaxi城市商用，推动城区全速L4和无人干线物流试点。",
              "link": "https://36kr.com/p/3898693587624324",
              "tags": [
                "自动驾驶",
                "L3",
                "Robotaxi"
              ],
              "source": "36氪",
              "time": "7月16日消息"
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
              "title": "努比亚",
              "news": [
                {
                  "title": "努比亚全球首款AI智能体手机NaviX Ultra官宣，内置豆包手机助手",
                  "summary": "7月16日消息，努比亚正式发布全球首款AI智能体手机NaviX Ultra，搭载豆包手机助手，配备橙色AI键。该机提供蓝境、幻梦、黑色和白色四款配色，获2026世界人工智能大会SAIL卓越奖。",
                  "link": "https://tech.ifeng.com/c/8unqhPsBu7j",
                  "tags": [
                    "AI手机",
                    "智能体",
                    "豆包"
                  ],
                  "source": "凤凰科技",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax携M3、H3全模态模型及产品亮相WAIC 2026",
                  "summary": "7月16日消息，MiniMax在WAIC 2026展示旗舰模型M3（4280亿总参数、230亿激活参数），并预热多模态生成模型H3。现场还展示了本地创作工作台MiniMax Hub、机器狗、AI眼镜等合作案例，其中Vbot机器狗首销预售累计6540台。",
                  "link": "https://www.yicai.com/news/103278346.html",
                  "tags": [
                    "大模型",
                    "多模态",
                    "WAIC"
                  ],
                  "source": "第一财经",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "荣耀",
              "news": [
                {
                  "title": "荣耀Robot Phone展示双配色与四自由度云台，全球首台机器人手机",
                  "summary": "7月16日消息，荣耀CEO李健公布Robot Phone双配色，产品已准备就绪。机身顶部集成四自由度钛合金机械云台，约0.8秒弹出，支持360度追踪。搭载第五代骁龙8至尊版、1.5K直屏，支持120W快充。",
                  "link": "https://m.ithome.com/html/977463.htm",
                  "tags": [
                    "机器人手机",
                    "AI硬件",
                    "云台"
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
          "cards": [
            {
              "title": "Waymo",
              "news": [
                {
                  "title": "美国旧金山市长回应Waymo自动驾驶出租车事故，敦促加强监管",
                  "summary": "7月16日消息，美国旧金山市长就近期Waymo自动驾驶出租车连续发生事故作出回应，敦促交通部门加强自动驾驶出租车监管。市长表示需要在创新与公共安全之间找到平衡，要求完善事故报告和应急响应机制。",
                  "link": "https://www.ithome.com/0/977/850.htm",
                  "tags": [
                    "Waymo",
                    "自动驾驶",
                    "监管",
                    "事故"
                  ],
                  "source": "IT之家",
                  "time": "7月16日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "波士顿动力",
              "news": [
                {
                  "title": "现代汽车将波士顿动力转为全资子公司，加速布局机器人业务",
                  "summary": "7月16日消息，现代汽车集团宣布收购软银持有的波士顿动力近10%股份（约3.25亿美元），将其转变为全资子公司。波士顿动力人形机器人Atlas已制定明确时间表：2028年部署超25000台至工厂，2030年扩展至零部件组装。",
                  "link": "https://www.cls.cn/detail/2428164",
                  "tags": [
                    "收购",
                    "人形机器人",
                    "现代汽车"
                  ],
                  "source": "财联社",
                  "time": "7月16日消息"
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
              "title": "日本机器人AI",
              "news": [
                {
                  "title": "日本拟采购2.75万颗英伟达Rubin芯片，打造本土机器人AI基础模型",
                  "summary": "7月16日消息，日本计划采购2.75万颗英伟达下一代Rubin AI芯片，新成立的Noetra将负责建设大型数据中心，计划2027年3月发布首个AI模型。该项目由软银、丰田旗下Preferred Networks、日本电气等参与运营，获政府3873亿日元支持。",
                  "link": "https://www.jiemian.com/article/14776964.html",
                  "tags": [
                    "英伟达",
                    "日本",
                    "机器人",
                    "AI芯片"
                  ],
                  "source": "界面新闻",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "孙正义",
              "news": [
                {
                  "title": "孙正义预计AI机器人市场规模将超290万亿元，称质疑AI如同拒绝汽车",
                  "summary": "7月14日消息，软银创始人孙正义在东京出席活动时表示，对AI泡沫的担忧毫无依据。预计2040年前后将约有10亿台搭载AI的人形机器人投入运行，AI机器人市场规模将扩大到约7000万亿日元（约292.7万亿元人民币）。",
                  "link": "https://news.qq.com/rain/a/20260716A07GYO00",
                  "tags": [
                    "孙正义",
                    "AI机器人",
                    "市场规模"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月14日消息"
                }
              ]
            },
            {
              "title": "AI编造谣言",
              "news": [
                {
                  "title": "网民用AI编造“高考估分715查分299”虚假谣言被警方依法行政拘留",
                  "summary": "7月16日消息，四川绵阳警方通报，一福建网民利用AI工具编造“高考估分715查分299，试卷被调包”的虚假网文博取流量。经核查，帖中考生、成绩及流程均属捏造。造谣者已被警方依据新修订《治安管理处罚法》行政拘留。",
                  "link": "https://news.sina.com.cn/s/2026-07-16/doc-inihyuqf8052297.shtml",
                  "tags": [
                    "AI安全",
                    "谣言",
                    "法律",
                    "高考"
                  ],
                  "source": "新浪新闻",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "机器人老师",
              "news": [
                {
                  "title": "纽约州试点引入人形机器人担任“助教”，课程内容可控且不说谎",
                  "summary": "7月16日消息，据外媒报道，今年秋季由Realbotix提供的人形机器人Sally将进入纽约州西部公立学校担任“助教”。Sally拥有硅胶皮肤和逼真外形，培训材料仅限学区课程，运行在封闭网络中不连接公共互联网。在无法回答时明确说“我不知道”，检测到自残风险会自动向管理人员发出警报。",
                  "link": "https://m.ithome.com/html/977679.htm",
                  "tags": [
                    "AI教育",
                    "人形机器人"
                  ],
                  "source": "IT之家",
                  "time": "7月16日消息"
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
          "date": "2026-07-17",
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
          "date": "2026-07-17",
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
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-17",
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
};st STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-17",
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
              "title": "OpenAI的160亿美元AI数据中心项目遇阻，当地居民担忧水污染和电费上涨",
              "summary": "7月17日消息，据路透社报道，OpenAI计划投资160亿美元的AI数据中心项目遭遇当地居民强烈反对，居民担忧项目将导致水污染和电费大幅上涨。该项目目前面临审批障碍，OpenAI正与当地政府和社区协商解决方案。",
              "link": "https://www.ithome.com/0/977/885.htm",
              "tags": [
                "AI数据中心",
                "监管",
                "基础设施"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#d4a574",
          "softBg": "#fdf6ee",
          "initial": "A",
          "news": []
        },
        {
          "name": "Google",
          "color": "#4285f4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": [
            {
              "title": "Google宣布NotebookLM更名为Gemini Notebook，接入Gemini和Google搜索",
              "summary": "7月16日消息，Google宣布NotebookLM正式更名为Gemini Notebook，已服务超3000万用户和60万个组织。更名后仍作为独立研究工具运营，将接入Gemini应用和Google搜索，并为每个笔记本提供安全的云端计算环境。",
              "link": "https://www.ithome.com/0/977/833.htm",
              "tags": [
                "AI工具",
                "产品更名",
                "搜索引擎"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
            },
            {
              "title": "消息称谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达目标",
              "summary": "7月17日消息，据彭博社报道，谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达内部目标。该模型原计划今年上半年发布，但在开发过程中遇到技术瓶颈，发布时间被推迟。",
              "link": "https://www.ithome.com/0/977/847.htm",
              "tags": [
                "AI模型",
                "大模型",
                "延期"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
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
              "title": "SpaceXAI宣布开源Grok Build，重置所有用户使用限制",
              "summary": "当地时间7月15日，马斯克旗下SpaceXAI宣布开源Grok Build的CLI、终端界面和AI智能体运行时源码，重置所有用户使用额度。项目主体代码用Rust编写，自上线以来完全尊重零数据保留原则，正在删除之前保留的所有编码数据。",
              "link": "https://36kr.com/newsflashes/3897517050250889",
              "tags": [
                "开源",
                "AI编程",
                "AI智能体"
              ],
              "source": "36氪",
              "time": "当地时间7月15日"
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
              "title": "黄仁勋东京面谢世嘉前社长30年前雪中送炭，英伟达与世嘉合作30周年",
              "summary": "当地时间7月15日，英伟达CEO黄仁勋在东京出席世嘉与英伟达合作30周年活动时，公开感谢世嘉前社长在30年前英伟达陷入困境时提供约500万美元援助。活动现场展示了合作新作《虚幻斗士 命运交锋》。",
              "link": "https://www.ithome.com/0/977/227.htm",
              "tags": [
                "英伟达",
                "世嘉",
                "合作"
              ],
              "source": "IT之家",
              "time": "当地时间7月15日"
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
              "title": "Meta AI上线新功能：青少年讨论自杀或自残话题将自动通报家长",
              "summary": "7月16日消息，Meta宣布其AI系统上线新功能，当检测到青少年在平台上讨论自杀或自残相关话题时，将自动通报家长或监护人。该功能旨在加强青少年保护，防止极端事件发生。",
              "link": "https://www.ithome.com/0/977/841.htm",
              "tags": [
                "AI安全",
                "青少年保护",
                "社交媒体"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
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
              "title": "阿里千问首款AI智能体耳机将在WAIC 2026亮相",
              "summary": "7月16日消息，阿里巴巴旗下千问首款AI智能体耳机将于WAIC 2026期间亮相。此前千问已在MWC展示AI眼镜，并计划年内推出AI指环等穿戴设备，打造覆盖多终端、软硬一体的个人AI助手生态。",
              "link": "https://www.cls.cn/detail/2428404",
              "tags": [
                "AI硬件",
                "耳机",
                "智能体"
              ],
              "source": "财联社",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#1677ff",
          "softBg": "#e9f0ff",
          "initial": "火",
          "news": []
        },
        {
          "name": "DeepSeek",
          "color": "#4f46e5",
          "softBg": "#eef1ff",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek估值超3500亿元，启动第二轮融资",
              "summary": "7月16日消息，开润股份公告显示，按投资金额和持股比例推算，DeepSeek本轮融资后估值约3510亿元。接近DeepSeek的人士称公司已启动第二轮融资，年底是否冲刺科创板尚未确定。",
              "link": "https://36kr.com/p/3895568122447237",
              "tags": [
                "融资",
                "估值",
                "科创板"
              ],
              "source": "36氪",
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
          "news": [
            {
              "title": "小米发布具身基座模型Xiaomi-Robotics-1，10万小时真实操作数据预训练",
              "summary": "7月16日消息，小米发布具身基座模型Xiaomi-Robotics-1，以10万小时真实世界操作轨迹预训练，覆盖1700个场景、240万段轨迹与260多类任务。后训练阶段加入约1万小时跨本体数据，采用预训练+后训练技术路线，首次系统验证机器人Scaling Law。",
              "link": "https://tech.ifeng.com/c/8unvCD8utZR",
              "tags": [
                "具身智能",
                "大模型",
                "机器人"
              ],
              "source": "凤凰科技",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#2962ff",
          "softBg": "#e8efff",
          "initial": "智",
          "news": [
            {
              "title": "消息称智谱AI年度经常性收入已达10亿美元，半年增长15倍",
              "summary": "7月17日消息，消息称智谱AI年度经常性收入（ARR）已达10亿美元，半年增长15倍。智谱AI近期在资本市场表现强劲，H股配售持续获得大额融资，公司正在加速商业化进程。",
              "link": "https://36kr.com/p/3898662052693894",
              "tags": [
                "ARR",
                "营收",
                "商业化"
              ],
              "source": "36氪",
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
              "title": "月之暗面发布Kimi K3：2.8万亿参数开源模型，支持100万token上下文",
              "summary": "7月16日晚，月之暗面正式上线迄今最强旗舰模型Kimi K3，采用2.8万亿参数MoE架构（896专家激活16个），最大支持100万token上下文窗口。在编程、游戏/3D及知识类任务上表现突出，整体扩展效率较K2提升约2.5倍。API价格为每百万token输入2元（缓存命中）或20元，输出100元。",
              "link": "https://www.cnstock.com/commonDetail/746430",
              "tags": [
                "大模型",
                "开源",
                "MoE"
              ],
              "source": "证券时报",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#cf0a2c",
          "softBg": "#fde8ec",
          "initial": "华",
          "news": [
            {
              "title": "华为引望公布自动驾驶时间表：L3 2027年规模商用，城区L4分阶段试点",
              "summary": "7月16日消息，华为引望CEO靳玉志公布自动驾驶时间表：今年在部分城市开展城区低速L4试点；2027年推动L3规模商用并试点Robotaxi；2028年扩大Robotaxi城市商用，推动城区全速L4和无人干线物流试点。",
              "link": "https://36kr.com/newsflashes/3898071474210439",
              "tags": [
                "自动驾驶",
                "L3",
                "Robotaxi"
              ],
              "source": "36氪",
              "time": "7月16日消息"
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
              "title": "努比亚",
              "news": [
                {
                  "title": "努比亚全球首款AI智能体手机NaviX Ultra官宣，内置豆包手机助手",
                  "summary": "7月16日消息，努比亚正式发布全球首款AI智能体手机NaviX Ultra，搭载豆包手机助手，配备橙色AI键。该机提供蓝境、幻梦、黑色和白色四款配色，获2026世界人工智能大会SAIL卓越奖。",
                  "link": "https://tech.ifeng.com/c/8unqhPsBu7j",
                  "tags": [
                    "AI手机",
                    "智能体",
                    "豆包"
                  ],
                  "source": "凤凰科技",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax携M3、H3全模态模型及产品亮相WAIC 2026",
                  "summary": "7月16日消息，MiniMax在WAIC 2026展示旗舰模型M3（4280亿总参数、230亿激活参数），并预热多模态生成模型H3。现场还展示了本地创作工作台MiniMax Hub、机器狗、AI眼镜等合作案例，其中Vbot机器狗首销预售累计6540台。",
                  "link": "https://www.yicai.com/news/103278346.html",
                  "tags": [
                    "大模型",
                    "多模态",
                    "WAIC"
                  ],
                  "source": "第一财经",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "荣耀",
              "news": [
                {
                  "title": "荣耀Robot Phone展示双配色与四自由度云台，全球首台机器人手机",
                  "summary": "7月16日消息，荣耀CEO李健公布Robot Phone双配色，产品已准备就绪。机身顶部集成四自由度钛合金机械云台，约0.8秒弹出，支持360度追踪。搭载第五代骁龙8至尊版、1.5K直屏，支持120W快充。",
                  "link": "https://m.ithome.com/html/977463.htm",
                  "tags": [
                    "机器人手机",
                    "AI硬件",
                    "云台"
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
          "cards": [
            {
              "title": "Waymo",
              "news": [
                {
                  "title": "美国旧金山市长回应Waymo自动驾驶出租车事故，敦促加强监管",
                  "summary": "7月16日消息，美国旧金山市长就近期Waymo自动驾驶出租车连续发生事故作出回应，敦促交通部门加强自动驾驶出租车监管。市长表示需要在创新与公共安全之间找到平衡，要求完善事故报告和应急响应机制。",
                  "link": "https://www.ithome.com/0/977/850.htm",
                  "tags": [
                    "Waymo",
                    "自动驾驶",
                    "监管",
                    "事故"
                  ],
                  "source": "IT之家",
                  "time": "7月16日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "波士顿动力",
              "news": [
                {
                  "title": "现代汽车将波士顿动力转为全资子公司，加速布局机器人业务",
                  "summary": "7月16日消息，现代汽车集团宣布收购软银持有的波士顿动力近10%股份（约3.25亿美元），将其转变为全资子公司。波士顿动力人形机器人Atlas已制定明确时间表：2028年部署超25000台至工厂，2030年扩展至零部件组装。",
                  "link": "https://www.cls.cn/detail/2428164",
                  "tags": [
                    "收购",
                    "人形机器人",
                    "现代汽车"
                  ],
                  "source": "财联社",
                  "time": "7月16日消息"
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
              "title": "日本机器人AI",
              "news": [
                {
                  "title": "日本拟采购2.75万颗英伟达Rubin芯片，打造本土机器人AI基础模型",
                  "summary": "7月16日消息，日本计划采购2.75万颗英伟达下一代Rubin AI芯片，新成立的Noetra将负责建设大型数据中心，计划2027年3月发布首个AI模型。该项目由软银、丰田旗下Preferred Networks、日本电气等参与运营，获政府3873亿日元支持。",
                  "link": "https://www.jiemian.com/article/14776964.html",
                  "tags": [
                    "英伟达",
                    "日本",
                    "机器人",
                    "AI芯片"
                  ],
                  "source": "界面新闻",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "孙正义",
              "news": [
                {
                  "title": "孙正义预计AI机器人市场规模将超290万亿元，称质疑AI如同拒绝汽车",
                  "summary": "7月14日消息，软银创始人孙正义在东京出席活动时表示，对AI泡沫的担忧毫无依据。预计2040年前后将约有10亿台搭载AI的人形机器人投入运行，AI机器人市场规模将扩大到约7000万亿日元（约292.7万亿元人民币）。",
                  "link": "https://news.qq.com/rain/a/20260716A07GYO00",
                  "tags": [
                    "孙正义",
                    "AI机器人",
                    "市场规模"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月14日消息"
                }
              ]
            },
            {
              "title": "AI编造谣言",
              "news": [
                {
                  "title": "网民用AI编造“高考估分715查分299”虚假谣言被警方依法行政拘留",
                  "summary": "7月16日消息，四川绵阳警方通报，一福建网民利用AI工具编造“高考估分715查分299，试卷被调包”的虚假网文博取流量。经核查，帖中考生、成绩及流程均属捏造。造谣者已被警方依据新修订《治安管理处罚法》行政拘留。",
                  "link": "https://news.sina.com.cn/s/2026-07-16/doc-inihyuqf8052297.shtml",
                  "tags": [
                    "AI安全",
                    "谣言",
                    "法律",
                    "高考"
                  ],
                  "source": "新浪新闻",
                  "time": "7月16日消息"
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
          "date": "2026-07-17",
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
          "date": "2026-07-17",
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
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-17",
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
};st STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-17",
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
              "title": "OpenAI的160亿美元AI数据中心项目遇阻，当地居民担忧水污染和电费上涨",
              "summary": "7月17日消息，据路透社报道，OpenAI计划投资160亿美元的AI数据中心项目遭遇当地居民强烈反对，居民担忧项目将导致水污染和电费大幅上涨。该项目目前面临审批障碍，OpenAI正与当地政府和社区协商解决方案。",
              "link": "https://www.ithome.com/0/977/885.htm",
              "tags": [
                "AI数据中心",
                "监管",
                "基础设施"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#d4a574",
          "softBg": "#fdf6ee",
          "initial": "A",
          "news": []
        },
        {
          "name": "Google",
          "color": "#4285f4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": [
            {
              "title": "Google宣布NotebookLM更名为Gemini Notebook，接入Gemini和Google搜索",
              "summary": "7月16日消息，Google宣布NotebookLM正式更名为Gemini Notebook，已服务超3000万用户和60万个组织。更名后仍作为独立研究工具运营，将接入Gemini应用和Google搜索，并为每个笔记本提供安全的云端计算环境。",
              "link": "https://www.ithome.com/0/977/833.htm",
              "tags": [
                "AI工具",
                "产品更名",
                "搜索引擎"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
            },
            {
              "title": "消息称谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达目标",
              "summary": "7月17日消息，据彭博社报道，谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达内部目标。该模型原计划今年上半年发布，但在开发过程中遇到技术瓶颈，发布时间被推迟。",
              "link": "https://www.ithome.com/0/977/847.htm",
              "tags": [
                "AI模型",
                "大模型",
                "延期"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
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
              "title": "SpaceXAI宣布开源Grok Build，重置所有用户使用限制",
              "summary": "当地时间7月15日，马斯克旗下SpaceXAI宣布开源Grok Build的CLI、终端界面和AI智能体运行时源码，重置所有用户使用额度。项目主体代码用Rust编写，自上线以来完全尊重零数据保留原则，正在删除之前保留的所有编码数据。",
              "link": "https://36kr.com/newsflashes/3897517050250889",
              "tags": [
                "开源",
                "AI编程",
                "AI智能体"
              ],
              "source": "36氪",
              "time": "当地时间7月15日"
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
              "title": "黄仁勋东京面谢世嘉前社长30年前雪中送炭，英伟达与世嘉合作30周年",
              "summary": "当地时间7月15日，英伟达CEO黄仁勋在东京出席世嘉与英伟达合作30周年活动时，公开感谢世嘉前社长在30年前英伟达陷入困境时提供约500万美元援助。活动现场展示了合作新作《虚幻斗士 命运交锋》。",
              "link": "https://www.ithome.com/0/977/227.htm",
              "tags": [
                "英伟达",
                "世嘉",
                "合作"
              ],
              "source": "IT之家",
              "time": "当地时间7月15日"
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
              "title": "Meta AI上线新功能：青少年讨论自杀或自残话题将自动通报家长",
              "summary": "7月16日消息，Meta宣布其AI系统上线新功能，当检测到青少年在平台上讨论自杀或自残相关话题时，将自动通报家长或监护人。该功能旨在加强青少年保护，防止极端事件发生。",
              "link": "https://www.ithome.com/0/977/841.htm",
              "tags": [
                "AI安全",
                "青少年保护",
                "社交媒体"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
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
              "title": "阿里千问首款AI智能体耳机将在WAIC 2026亮相",
              "summary": "7月16日消息，阿里巴巴旗下千问首款AI智能体耳机将于WAIC 2026期间亮相。此前千问已在MWC展示AI眼镜，并计划年内推出AI指环等穿戴设备，打造覆盖多终端、软硬一体的个人AI助手生态。",
              "link": "https://www.cls.cn/detail/2428404",
              "tags": [
                "AI硬件",
                "耳机",
                "智能体"
              ],
              "source": "财联社",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#1677ff",
          "softBg": "#e9f0ff",
          "initial": "火",
          "news": []
        },
        {
          "name": "DeepSeek",
          "color": "#4f46e5",
          "softBg": "#eef1ff",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek估值超3500亿元，启动第二轮融资",
              "summary": "7月16日消息，开润股份公告显示，按投资金额和持股比例推算，DeepSeek本轮融资后估值约3510亿元。接近DeepSeek的人士称公司已启动第二轮融资，年底是否冲刺科创板尚未确定。",
              "link": "https://36kr.com/p/3895568122447237",
              "tags": [
                "融资",
                "估值",
                "科创板"
              ],
              "source": "36氪",
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
          "news": [
            {
              "title": "小米发布具身基座模型Xiaomi-Robotics-1，10万小时真实操作数据预训练",
              "summary": "7月16日消息，小米发布具身基座模型Xiaomi-Robotics-1，以10万小时真实世界操作轨迹预训练，覆盖1700个场景、240万段轨迹与260多类任务。后训练阶段加入约1万小时跨本体数据，采用预训练+后训练技术路线，首次系统验证机器人Scaling Law。",
              "link": "https://tech.ifeng.com/c/8unvCD8utZR",
              "tags": [
                "具身智能",
                "大模型",
                "机器人"
              ],
              "source": "凤凰科技",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#2962ff",
          "softBg": "#e8efff",
          "initial": "智",
          "news": [
            {
              "title": "消息称智谱AI年度经常性收入已达10亿美元，半年增长15倍",
              "summary": "7月17日消息，消息称智谱AI年度经常性收入（ARR）已达10亿美元，半年增长15倍。智谱AI近期在资本市场表现强劲，H股配售持续获得大额融资，公司正在加速商业化进程。",
              "link": "https://36kr.com/p/3898662052693894",
              "tags": [
                "ARR",
                "营收",
                "商业化"
              ],
              "source": "36氪",
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
              "title": "月之暗面发布Kimi K3：2.8万亿参数开源模型，支持100万token上下文",
              "summary": "7月16日晚，月之暗面正式上线迄今最强旗舰模型Kimi K3，采用2.8万亿参数MoE架构（896专家激活16个），最大支持100万token上下文窗口。在编程、游戏/3D及知识类任务上表现突出，整体扩展效率较K2提升约2.5倍。API价格为每百万token输入2元（缓存命中）或20元，输出100元。",
              "link": "https://www.cnstock.com/commonDetail/746430",
              "tags": [
                "大模型",
                "开源",
                "MoE"
              ],
              "source": "证券时报",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#cf0a2c",
          "softBg": "#fde8ec",
          "initial": "华",
          "news": [
            {
              "title": "华为引望公布自动驾驶时间表：L3 2027年规模商用，城区L4分阶段试点",
              "summary": "7月16日消息，华为引望CEO靳玉志公布自动驾驶时间表：今年在部分城市开展城区低速L4试点；2027年推动L3规模商用并试点Robotaxi；2028年扩大Robotaxi城市商用，推动城区全速L4和无人干线物流试点。",
              "link": "https://tech.ifeng.com/c/8uoF7XEDhhr",
              "tags": [
                "自动驾驶",
                "L3",
                "Robotaxi"
              ],
              "source": "凤凰科技",
              "time": "7月16日消息"
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
              "title": "努比亚",
              "news": [
                {
                  "title": "努比亚全球首款AI智能体手机NaviX Ultra官宣，内置豆包手机助手",
                  "summary": "7月16日消息，努比亚正式发布全球首款AI智能体手机NaviX Ultra，搭载豆包手机助手，配备橙色AI键。该机提供蓝境、幻梦、黑色和白色四款配色，获2026世界人工智能大会SAIL卓越奖。",
                  "link": "https://tech.ifeng.com/c/8unqhPsBu7j",
                  "tags": [
                    "AI手机",
                    "智能体",
                    "豆包"
                  ],
                  "source": "凤凰科技",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax携M3、H3全模态模型及产品亮相WAIC 2026",
                  "summary": "7月16日消息，MiniMax在WAIC 2026展示旗舰模型M3（4280亿总参数、230亿激活参数），并预热多模态生成模型H3。现场还展示了本地创作工作台MiniMax Hub、机器狗、AI眼镜等合作案例，其中Vbot机器狗首销预售累计6540台。",
                  "link": "https://www.yicai.com/news/103278346.html",
                  "tags": [
                    "大模型",
                    "多模态",
                    "WAIC"
                  ],
                  "source": "第一财经",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "荣耀",
              "news": [
                {
                  "title": "荣耀Robot Phone展示双配色与四自由度云台，全球首台机器人手机",
                  "summary": "7月16日消息，荣耀CEO李健公布Robot Phone双配色，产品已准备就绪。机身顶部集成四自由度钛合金机械云台，约0.8秒弹出，支持360度追踪。搭载第五代骁龙8至尊版、1.5K直屏，支持120W快充。",
                  "link": "https://m.ithome.com/html/977463.htm",
                  "tags": [
                    "机器人手机",
                    "AI硬件",
                    "云台"
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
          "cards": [
            {
              "title": "Waymo",
              "news": [
                {
                  "title": "美国旧金山市长回应Waymo自动驾驶出租车事故，敦促加强监管",
                  "summary": "7月16日消息，美国旧金山市长就近期Waymo自动驾驶出租车连续发生事故作出回应，敦促交通部门加强自动驾驶出租车监管。市长表示需要在创新与公共安全之间找到平衡，要求完善事故报告和应急响应机制。",
                  "link": "https://www.ithome.com/0/977/850.htm",
                  "tags": [
                    "Waymo",
                    "自动驾驶",
                    "监管",
                    "事故"
                  ],
                  "source": "IT之家",
                  "time": "7月16日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "波士顿动力",
              "news": [
                {
                  "title": "现代汽车将波士顿动力转为全资子公司，加速布局机器人业务",
                  "summary": "7月16日消息，现代汽车集团宣布收购软银持有的波士顿动力近10%股份（约3.25亿美元），将其转变为全资子公司。波士顿动力人形机器人Atlas已制定明确时间表：2028年部署超25000台至工厂，2030年扩展至零部件组装。",
                  "link": "https://www.cls.cn/detail/2428164",
                  "tags": [
                    "收购",
                    "人形机器人",
                    "现代汽车"
                  ],
                  "source": "财联社",
                  "time": "7月16日消息"
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
              "title": "日本机器人AI",
              "news": [
                {
                  "title": "日本拟采购2.75万颗英伟达Rubin芯片，打造本土机器人AI基础模型",
                  "summary": "7月16日消息，日本计划采购2.75万颗英伟达下一代Rubin AI芯片，新成立的Noetra将负责建设大型数据中心，计划2027年3月发布首个AI模型。该项目由软银、丰田旗下Preferred Networks、日本电气等参与运营，获政府3873亿日元支持。",
                  "link": "https://www.jiemian.com/article/14776964.html",
                  "tags": [
                    "英伟达",
                    "日本",
                    "机器人",
                    "AI芯片"
                  ],
                  "source": "界面新闻",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "孙正义",
              "news": [
                {
                  "title": "孙正义预计AI机器人市场规模将超290万亿元，称质疑AI如同拒绝汽车",
                  "summary": "7月14日消息，软银创始人孙正义在东京出席活动时表示，对AI泡沫的担忧毫无依据。预计2040年前后将约有10亿台搭载AI的人形机器人投入运行，AI机器人市场规模将扩大到约7000万亿日元（约292.7万亿元人民币）。",
                  "link": "https://news.qq.com/rain/a/20260716A07GYO00",
                  "tags": [
                    "孙正义",
                    "AI机器人",
                    "市场规模"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月14日消息"
                }
              ]
            },
            {
              "title": "AI编造谣言",
              "news": [
                {
                  "title": "网民用AI编造“高考估分715查分299”虚假谣言被警方依法行政拘留",
                  "summary": "7月16日消息，四川绵阳警方通报，一福建网民利用AI工具编造“高考估分715查分299，试卷被调包”的虚假网文博取流量。经核查，帖中考生、成绩及流程均属捏造。造谣者已被警方依据新修订《治安管理处罚法》行政拘留。",
                  "link": "https://news.sina.com.cn/s/2026-07-16/doc-inihyuqf8052297.shtml",
                  "tags": [
                    "AI安全",
                    "谣言",
                    "法律",
                    "高考"
                  ],
                  "source": "新浪新闻",
                  "time": "7月16日消息"
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
          "date": "2026-07-17",
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
          "date": "2026-07-17",
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
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-17",
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
};st STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-17",
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
              "title": "OpenAI的160亿美元AI数据中心项目遇阻，当地居民担忧水污染和电费上涨",
              "summary": "7月17日消息，据路透社报道，OpenAI计划投资160亿美元的AI数据中心项目遭遇当地居民强烈反对，居民担忧项目将导致水污染和电费大幅上涨。该项目目前面临审批障碍，OpenAI正与当地政府和社区协商解决方案。",
              "link": "https://www.ithome.com/0/977/885.htm",
              "tags": [
                "AI数据中心",
                "监管",
                "基础设施"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#d4a574",
          "softBg": "#fdf6ee",
          "initial": "A",
          "news": []
        },
        {
          "name": "Google",
          "color": "#4285f4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": [
            {
              "title": "Google宣布NotebookLM更名为Gemini Notebook，接入Gemini和Google搜索",
              "summary": "7月16日消息，Google宣布NotebookLM正式更名为Gemini Notebook，已服务超3000万用户和60万个组织。更名后仍作为独立研究工具运营，将接入Gemini应用和Google搜索，并为每个笔记本提供安全的云端计算环境。",
              "link": "https://www.ithome.com/0/977/833.htm",
              "tags": [
                "AI工具",
                "产品更名",
                "搜索引擎"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
            },
            {
              "title": "消息称谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达目标",
              "summary": "7月17日消息，据彭博社报道，谷歌旗舰AI模型Gemini 3.5 Pro已延期数月，技术表现未达内部目标。该模型原计划今年上半年发布，但在开发过程中遇到技术瓶颈，发布时间被推迟。",
              "link": "https://www.ithome.com/0/977/847.htm",
              "tags": [
                "AI模型",
                "大模型",
                "延期"
              ],
              "source": "IT之家",
              "time": "7月17日消息"
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
              "title": "SpaceXAI宣布开源Grok Build，重置所有用户使用限制",
              "summary": "当地时间7月15日，马斯克旗下SpaceXAI宣布开源Grok Build的CLI、终端界面和AI智能体运行时源码，重置所有用户使用额度。项目主体代码用Rust编写，自上线以来完全尊重零数据保留原则，正在删除之前保留的所有编码数据。",
              "link": "https://36kr.com/newsflashes/3897517050250889",
              "tags": [
                "开源",
                "AI编程",
                "AI智能体"
              ],
              "source": "36氪",
              "time": "当地时间7月15日"
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
              "title": "黄仁勋东京面谢世嘉前社长30年前雪中送炭，英伟达与世嘉合作30周年",
              "summary": "当地时间7月15日，英伟达CEO黄仁勋在东京出席世嘉与英伟达合作30周年活动时，公开感谢世嘉前社长在30年前英伟达陷入困境时提供约500万美元援助。活动现场展示了合作新作《虚幻斗士 命运交锋》。",
              "link": "https://www.ithome.com/0/977/227.htm",
              "tags": [
                "英伟达",
                "世嘉",
                "合作"
              ],
              "source": "IT之家",
              "time": "当地时间7月15日"
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
              "title": "Meta AI上线新功能：青少年讨论自杀或自残话题将自动通报家长",
              "summary": "7月16日消息，Meta宣布其AI系统上线新功能，当检测到青少年在平台上讨论自杀或自残相关话题时，将自动通报家长或监护人。该功能旨在加强青少年保护，防止极端事件发生。",
              "link": "https://www.ithome.com/0/977/841.htm",
              "tags": [
                "AI安全",
                "青少年保护",
                "社交媒体"
              ],
              "source": "IT之家",
              "time": "7月16日消息"
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
              "title": "阿里千问首款AI智能体耳机将在WAIC 2026亮相",
              "summary": "7月16日消息，阿里巴巴旗下千问首款AI智能体耳机将于WAIC 2026期间亮相。此前千问已在MWC展示AI眼镜，并计划年内推出AI指环等穿戴设备，打造覆盖多终端、软硬一体的个人AI助手生态。",
              "link": "https://www.cls.cn/detail/2428404",
              "tags": [
                "AI硬件",
                "耳机",
                "智能体"
              ],
              "source": "财联社",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#1677ff",
          "softBg": "#e9f0ff",
          "initial": "火",
          "news": []
        },
        {
          "name": "DeepSeek",
          "color": "#4f46e5",
          "softBg": "#eef1ff",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek估值超3500亿元，启动第二轮融资",
              "summary": "7月16日消息，开润股份公告显示，按投资金额和持股比例推算，DeepSeek本轮融资后估值约3510亿元。接近DeepSeek的人士称公司已启动第二轮融资，年底是否冲刺科创板尚未确定。",
              "link": "https://36kr.com/p/3895568122447237",
              "tags": [
                "融资",
                "估值",
                "科创板"
              ],
              "source": "36氪",
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
          "news": [
            {
              "title": "小米发布具身基座模型Xiaomi-Robotics-1，10万小时真实操作数据预训练",
              "summary": "7月16日消息，小米发布具身基座模型Xiaomi-Robotics-1，以10万小时真实世界操作轨迹预训练，覆盖1700个场景、240万段轨迹与260多类任务。后训练阶段加入约1万小时跨本体数据，采用预训练+后训练技术路线，首次系统验证机器人Scaling Law。",
              "link": "https://wallstreetcn.com/articles/3777111",
              "tags": [
                "具身智能",
                "大模型",
                "机器人"
              ],
              "source": "华尔街见闻",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#2962ff",
          "softBg": "#e8efff",
          "initial": "智",
          "news": [
            {
              "title": "消息称智谱AI年度经常性收入已达10亿美元，半年增长15倍",
              "summary": "7月17日消息，消息称智谱AI年度经常性收入（ARR）已达10亿美元，半年增长15倍。智谱AI近期在资本市场表现强劲，H股配售持续获得大额融资，公司正在加速商业化进程。",
              "link": "https://36kr.com/p/3898662052693894",
              "tags": [
                "ARR",
                "营收",
                "商业化"
              ],
              "source": "36氪",
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
              "title": "月之暗面发布Kimi K3：2.8万亿参数开源模型，支持100万token上下文",
              "summary": "7月16日晚，月之暗面正式上线迄今最强旗舰模型Kimi K3，采用2.8万亿参数MoE架构（896专家激活16个），最大支持100万token上下文窗口。在编程、游戏/3D及知识类任务上表现突出，整体扩展效率较K2提升约2.5倍。API价格为每百万token输入2元（缓存命中）或20元，输出100元。",
              "link": "https://www.cnstock.com/commonDetail/746430",
              "tags": [
                "大模型",
                "开源",
                "MoE"
              ],
              "source": "证券时报",
              "time": "7月16日消息"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#cf0a2c",
          "softBg": "#fde8ec",
          "initial": "华",
          "news": [
            {
              "title": "华为引望公布自动驾驶时间表：L3 2027年规模商用，城区L4分阶段试点",
              "summary": "7月16日消息，华为引望CEO靳玉志公布自动驾驶时间表：今年在部分城市开展城区低速L4试点；2027年推动L3规模商用并试点Robotaxi；2028年扩大Robotaxi城市商用，推动城区全速L4和无人干线物流试点。",
              "link": "https://news.qq.com/rain/a/20260716A08EE300",
              "tags": [
                "自动驾驶",
                "L3",
                "Robotaxi"
              ],
              "source": "腾讯新闻",
              "time": "7月16日消息"
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
              "title": "努比亚",
              "news": [
                {
                  "title": "努比亚全球首款AI智能体手机NaviX Ultra官宣，内置豆包手机助手",
                  "summary": "7月16日消息，努比亚正式发布全球首款AI智能体手机NaviX Ultra，搭载豆包手机助手，配备橙色AI键。该机提供蓝境、幻梦、黑色和白色四款配色，获2026世界人工智能大会SAIL卓越奖。",
                  "link": "https://tech.ifeng.com/c/8unqhPsBu7j",
                  "tags": [
                    "AI手机",
                    "智能体",
                    "豆包"
                  ],
                  "source": "凤凰科技",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax携M3、H3全模态模型及产品亮相WAIC 2026",
                  "summary": "7月16日消息，MiniMax在WAIC 2026展示旗舰模型M3（4280亿总参数、230亿激活参数），并预热多模态生成模型H3。现场还展示了本地创作工作台MiniMax Hub、机器狗、AI眼镜等合作案例，其中Vbot机器狗首销预售累计6540台。",
                  "link": "https://www.yicai.com/news/103278346.html",
                  "tags": [
                    "大模型",
                    "多模态",
                    "WAIC"
                  ],
                  "source": "第一财经",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "荣耀",
              "news": [
                {
                  "title": "荣耀Robot Phone展示双配色与四自由度云台，全球首台机器人手机",
                  "summary": "7月16日消息，荣耀CEO李健公布Robot Phone双配色，产品已准备就绪。机身顶部集成四自由度钛合金机械云台，约0.8秒弹出，支持360度追踪。搭载第五代骁龙8至尊版、1.5K直屏，支持120W快充。",
                  "link": "https://m.ithome.com/html/977463.htm",
                  "tags": [
                    "机器人手机",
                    "AI硬件",
                    "云台"
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
          "cards": [
            {
              "title": "Waymo",
              "news": [
                {
                  "title": "美国旧金山市长回应Waymo自动驾驶出租车事故，敦促加强监管",
                  "summary": "7月16日消息，美国旧金山市长就近期Waymo自动驾驶出租车连续发生事故作出回应，敦促交通部门加强自动驾驶出租车监管。市长表示需要在创新与公共安全之间找到平衡，要求完善事故报告和应急响应机制。",
                  "link": "https://www.ithome.com/0/977/850.htm",
                  "tags": [
                    "Waymo",
                    "自动驾驶",
                    "监管",
                    "事故"
                  ],
                  "source": "IT之家",
                  "time": "7月16日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "波士顿动力",
              "news": [
                {
                  "title": "现代汽车将波士顿动力转为全资子公司，加速布局机器人业务",
                  "summary": "7月16日消息，现代汽车集团宣布收购软银持有的波士顿动力近10%股份（约3.25亿美元），将其转变为全资子公司。波士顿动力人形机器人Atlas已制定明确时间表：2028年部署超25000台至工厂，2030年扩展至零部件组装。",
                  "link": "https://www.cls.cn/detail/2428164",
                  "tags": [
                    "收购",
                    "人形机器人",
                    "现代汽车"
                  ],
                  "source": "财联社",
                  "time": "7月16日消息"
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
              "title": "日本机器人AI",
              "news": [
                {
                  "title": "日本拟采购2.75万颗英伟达Rubin芯片，打造本土机器人AI基础模型",
                  "summary": "7月16日消息，日本计划采购2.75万颗英伟达下一代Rubin AI芯片，新成立的Noetra将负责建设大型数据中心，计划2027年3月发布首个AI模型。该项目由软银、丰田旗下Preferred Networks、日本电气等参与运营，获政府3873亿日元支持。",
                  "link": "https://www.jiemian.com/article/14776964.html",
                  "tags": [
                    "英伟达",
                    "日本",
                    "机器人",
                    "AI芯片"
                  ],
                  "source": "界面新闻",
                  "time": "7月16日消息"
                }
              ]
            },
            {
              "title": "孙正义",
              "news": [
                {
                  "title": "孙正义预计AI机器人市场规模将超290万亿元，称质疑AI如同拒绝汽车",
                  "summary": "7月14日消息，软银创始人孙正义在东京出席活动时表示，对AI泡沫的担忧毫无依据。预计2040年前后将约有10亿台搭载AI的人形机器人投入运行，AI机器人市场规模将扩大到约7000万亿日元（约292.7万亿元人民币）。",
                  "link": "https://news.qq.com/rain/a/20260716A07GYO00",
                  "tags": [
                    "孙正义",
                    "AI机器人",
                    "市场规模"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月14日消息"
                }
              ]
            },
            {
              "title": "AI编造谣言",
              "news": [
                {
                  "title": "网民用AI编造“高考估分715查分299”虚假谣言被警方依法行政拘留",
                  "summary": "7月16日消息，四川绵阳警方通报，一福建网民利用AI工具编造“高考估分715查分299，试卷被调包”的虚假网文博取流量。经核查，帖中考生、成绩及流程均属捏造。造谣者已被警方依据新修订《治安管理处罚法》行政拘留。",
                  "link": "https://news.sina.com.cn/s/2026-07-16/doc-inihyuqf8052297.shtml",
                  "tags": [
                    "AI安全",
                    "谣言",
                    "法律",
                    "高考"
                  ],
                  "source": "新浪新闻",
                  "time": "7月16日消息"
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
          "date": "2026-07-17",
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
          "date": "2026-07-17",
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
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-17",
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
