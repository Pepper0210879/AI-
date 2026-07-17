// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
};==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
};==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
};==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
};==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
};==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
