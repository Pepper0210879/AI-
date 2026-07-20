// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
  "date": "2026-07-20",
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
              "title": "OpenAI 高管盛赞 Kimi K3：性能接近 2026 Q1 最佳公开模型",
              "summary": "7月19日，OpenAI 战略未来负责人 Dean Ball 公开表示，Kimi K3 是一款「非常好的模型」，在智能体编程场景中基本达到 2026 年第一季度最佳公开模型水平。Ball 还表示 K3 表现不能简单归因于蒸馏，同时指出 K3 对 Token 消耗较高，实际运行成本未必很低。他对中国仍开放此类高能力模型感到意外。",
              "link": "https://www.163.com/dy/article/L26O0HU00511D6RL.html",
              "tags": [
                "Kimi",
                "开源模型",
                "评价"
              ],
              "source": "网易",
              "time": "7月19日"
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
              "title": "Claude Fable 5 官宣永久可用，纳入 Max 和 Team Premium 套餐",
              "summary": "7月19日消息，Anthropic 宣布从 7 月 20 日起，Claude Fable 5 将永久保留在 Max 和 Team Premium 订阅计划中，使用限额为标准限额的 50%。Pro 和 Team Standard 用户可通过积分访问，并获赠 100 美元一次性积分。此前 Anthropic 因算力不足和出口管制多次调整 Fable 5 可用期限，在 GPT-5.6 竞争压力下改为永久保留。",
              "link": "https://36kr.com/p/3900918550546308",
              "tags": [
                "Claude",
                "订阅"
              ],
              "source": "36氪",
              "time": "7月19日消息"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285f4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": []
        },
        {
          "name": "xAI",
          "color": "#000000",
          "softBg": "#f2f2f2",
          "initial": "X",
          "news": [
            {
              "title": "马斯克：xAI 正训练 2 万亿参数模型，下周完成初始训练",
              "summary": "7月18日，马斯克在 X 平台透露，xAI 正在训练的下一代模型参数规模达 2 万亿，预计下周完成初始训练。马斯克表示 2 万亿参数版本在各方面优于当前 1.5 万亿参数的 Grok 4.5，综合能力可能超越月之暗面 Kimi K3，同时推理速度和 Token 效率接近 Grok 4.5 水平。Kimi 官方在 X 上回应：「欢迎加入 2万亿+ 俱乐部。」",
              "link": "https://tech.ifeng.com/c/8usXhWt3BmF",
              "tags": [
                "Grok",
                "xAI",
                "大模型"
              ],
              "source": "凤凰网科技",
              "time": "7月18日"
            }
          ]
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
          "news": [
            {
              "title": "Meta 与 Anthropic 商谈两年最高 100 亿美元算力租赁",
              "summary": "7月18日消息，据《纽约时报》报道，Meta 正与 Anthropic 商谈出租数据中心算力，潜在合同两年最高价值 100 亿美元。Anthropic 于 6 月提出合作方案，Meta 仍在评估，双方尚未签署最终协议。若达成，将是 Meta 首次大规模对外算力收入。Meta 今年资本开支最高达 1450 亿美元，Anthropic 已与 SpaceXAI 签署 450 亿美元长期算力协议。",
              "link": "https://www.sohu.com/a/1052126204_122014422",
              "tags": [
                "算力",
                "数据中心"
              ],
              "source": "搜狐",
              "time": "7月18日消息"
            }
          ]
        },
        {
          "name": "苹果",
          "color": "#555555",
          "softBg": "#f0f0f0",
          "initial": "苹",
          "news": [
            {
              "title": "苹果天才吧测试 AI「Live Notes」系统，可转录顾客对话",
              "summary": "7月20日消息，据彭博社记者古尔曼爆料，苹果正在部分直营店天才吧测试「Live Notes」AI 系统，可利用 AI 工具记录、转录和总结员工与顾客的服务对话，让员工免于手动记笔记。需要双方同意才能启用，录音文件不保存，管理人员无法查看。部分员工担忧未来被用于绩效考核，苹果称非强制使用。",
              "link": "https://tech.ifeng.com/c/8uuDi6vPSF8",
              "tags": [
                "AI应用",
                "苹果"
              ],
              "source": "凤凰网科技",
              "time": "7月20日消息"
            }
          ]
        },
        {
          "name": "微软",
          "color": "#00a4ef",
          "softBg": "#e6f4fc",
          "initial": "微",
          "news": []
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
              "title": "阿里千问 Qwen3.8 预览版上线：2.4T 参数，宣称仅次于 Fable 5",
              "summary": "7月19日，阿里千问宣布 Qwen3.8 即将发布并开源，预览版 Qwen3.8-Max-Preview 已上线 Token Plan、Qoder 等平台。新模型参数 2.4T，支持思考模式与快速模式双推理机制切换，官方称在内部真实任务测评中展现匹敌世界前沿模型水平，「可能是除了 Fable 5 外最强大的模型」。Token Plan 个人版同步发布，限时优惠每月 39 元起。",
              "link": "https://www.ithome.com/0/978/730.htm",
              "tags": [
                "Qwen",
                "开源",
                "大模型"
              ],
              "source": "IT之家",
              "time": "7月19日"
            },
            {
              "title": "阿里云百炼灰测 HappyOyster 1.0 世界模型，一句话生成可交互数字世界",
              "summary": "7月19日，阿里云百炼上线开放式世界模型 HappyOyster 1.0（快乐生蚝），面向企业和开发者开启灰测。支持世界探索（Adventure）和实时导演（Directing）两大模式，用户输入一句话或一张图即可生成可实时控制和探索的数字世界，支持 1 分钟以上连续互动。提供 Android/iOS/Web 三端 SDK。",
              "link": "https://www.ithome.com/0/978/729.htm",
              "tags": [
                "世界模型",
                "阿里云",
                "百炼"
              ],
              "source": "IT之家",
              "time": "7月19日"
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
          "news": []
        },
        {
          "name": "腾讯",
          "color": "#07c160",
          "softBg": "#e6f9ee",
          "initial": "腾",
          "news": [
            {
              "title": "首款接入腾讯 WorkBuddy 的 AI 记忆眼镜发布，李未可合作",
              "summary": "7月18日，腾讯云 WorkBuddy 与李未可科技在 WAIC 发布 X-AI 记忆眼镜，为首款接入 WorkBuddy 的智能眼镜硬件。眼镜搭载 WakeeMemory OS，可全天候自动记录会议、差旅行程等信息，提炼决议和待办事项并同步至 WorkBuddy 执行。眼镜重 26g，支持 10 小时以上录音，预售 499 元起。",
              "link": "https://www.cnr.cn/bj/sijh/20260719/t20260719_527717741.shtml",
              "tags": [
                "WorkBuddy",
                "AI眼镜",
                "腾讯云"
              ],
              "source": "央广网",
              "time": "7月18日"
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
          "news": [
            {
              "title": "月之暗面已向投资人发送上市议案，最快 6 个月内赴港 IPO",
              "summary": "7月20日消息，月之暗面已通知投资者调整公司架构并筹备赴港 IPO，已向投资人发送股东决议文件寻求支持，最快 6 个月内完成上市。公司 ARR 在 6 月达 3 亿美元（3 个月翻 3 倍），最新估值超 300 亿美元。Kimi K3 模型的发布进一步增强了资本市场信心。",
              "link": "https://www.cls.cn/detail/2430468",
              "tags": [
                "IPO",
                "月之暗面"
              ],
              "source": "财联社",
              "time": "7月20日消息"
            },
            {
              "title": "Kimi 因 K3 发布后暴增的请求量暂停 C 端新用户订阅",
              "summary": "7月19日，月之暗面 Kimi 发布公告称，因 K3 发布后过去 48 小时用户请求量大幅超出预估，逼近现有集群承载极限，即日起暂停 C 端新用户订阅，将全部算力优先保障已订阅用户权益。团队正全速推进算力扩容，后续将逐步恢复订阅并拆分 Kimi 主权益与 Kimi Code 权益以精准匹配算力。",
              "link": "https://news.qq.com/rain/a/20260719A09F2300",
              "tags": [
                "Kimi",
                "算力",
                "订阅"
              ],
              "source": "腾讯新闻",
              "time": "7月19日"
            },
            {
              "title": "Kimi K3 登顶 Frontend Code Arena 榜单，彭博社称美 AI 领先中国认知被打破",
              "summary": "7月19日消息，月之暗面 Kimi K3 大模型在 Frontend Code Arena 榜单以 1679 分超越 Claude Fable 5（1631 分）登顶。彭博社报道称该模型正在打破「美国 AI 领先中国」的固有认知。伯克利教授 Ion Stoica 表示差距已从 6-9 个月缩短至 2-3 个月。Kimi 总裁张予彤透露，K3 发布次日公司 ARR 创下历史最大单日增幅，计划于 7 月 27 日开放模型权重。",
              "link": "https://tech.ifeng.com/c/8usuPwlhPtE",
              "tags": [
                "K3",
                "登顶",
                "开源"
              ],
              "source": "凤凰网科技",
              "time": "7月19日消息"
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
              "title": "华为 Pura X Max 等产品获国标人工智能 L3 等级首证",
              "summary": "7月19日消息，华为终端官方宣布，HUAWEI Pura X Max 手机、MateBook Pro 电脑、智慧屏 S7 Pro 分别获国标人工智能 L3 等级手机、电脑、电视首证。L3 为当前行业可达到的最高智能化评级，标志着华为在终端 AI 能力认证方面取得新突破。该标准将终端智能化划分为 L1-L4 四个等级。",
              "link": "https://www.ithome.com/0/978/615.htm",
              "tags": [
                "AI认证",
                "华为",
                "L3"
              ],
              "source": "IT之家",
              "time": "7月19日消息"
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
              "title": "面壁智能",
              "news": [
                {
                  "title": "面壁智能发布端侧模型 MiniCPM5-2B，AA-Index 4B 以下性能第一",
                  "summary": "7月19日，面壁智能在 WAIC 联合 OpenBMB 发布最新端侧模型 MiniCPM5-2B，在 AA-Index 榜单以 17 分获全球 4B 以下模型最高得分。模型仅 20 亿参数，原生支持混合思考，提供 512K 超长上下文窗口。已完成 AMD、英特尔、联发科、高通等主流芯片及华为昇腾等 9 款国产芯片适配。",
                  "link": "https://www.ithome.com/0/978/796.htm",
                  "tags": [
                    "端侧模型",
                    "面壁",
                    "WAIC"
                  ],
                  "source": "IT之家",
                  "time": "7月19日"
                },
                {
                  "title": "面壁开源 MiniCPM-Robot 系列，进军具身智能 VLA 模型",
                  "summary": "7月19日，面壁智能在 WAIC 发布并开源面向机器人操作的 MiniCPM-RobotManip（1.5B）和面向跟踪导航的 MiniCPM-RobotTrack（0.9B）。Manip 模型支持 1 分钟上下文记忆，单步延迟仅 120ms；Track 模型原生适配宇树 Go2 Edu，纯本地无网运行，帧率稳定 5Hz 以上。",
                  "link": "https://www.d1ev.com/news/shichang/307495",
                  "tags": [
                    "具身智能",
                    "VLA",
                    "开源"
                  ],
                  "source": "第一电动",
                  "time": "7月19日"
                }
              ]
            },
            {
              "title": "商汤",
              "news": [
                {
                  "title": "商汤发起「银河计划」，联合近 20 家伙伴共建 5 个万卡级国产智算集群",
                  "summary": "7月18日，商汤大装置在 WAIC 联合近 20 家生态伙伴发起「银河计划」，将建设 1 个 Token 运营中心和 5 个万卡级国产智算集群。商汤与国星宇航共建「商汤算力星座」，今年发射首批 4 颗算力卫星，2030 年建成千颗级卫星网络覆盖全球。商汤日均 Token 服务量已达 2.42 万亿，预计 Q4 达 10 万亿。",
                  "link": "https://wap.eastmoney.com/a/202607183811797068.html",
                  "tags": [
                    "商汤",
                    "智算集群",
                    "算力卫星"
                  ],
                  "source": "东方财富",
                  "time": "7月18日"
                }
              ]
            },
            {
              "title": "小红书",
              "news": [
                {
                  "title": "小红书亮相 WAIC：全量上线 RED Skill，内测 Vibe Coding 小工具",
                  "summary": "7月19日消息，小红书在 WAIC 宣布全量上线 RED Skill、内测 Vibe Coding 小工具。RED Skill 内测一月产生超 7300 个原创 AI Skill，覆盖提效工具、职场辅导等领域。2 月以来每月发布 4 万至 5 万个 Vibe Coding 作品。过去一年超 16 万名 AI 开发者活跃于小红书。",
                  "link": "https://finance.sina.cn/2026-07-19/detail-iniikaqz0148006.d.html",
                  "tags": [
                    "小红书",
                    "Vibe Coding",
                    "WAIC"
                  ],
                  "source": "新浪财经",
                  "time": "7月19日消息"
                }
              ]
            },
            {
              "title": "阶跃星辰",
              "news": [
                {
                  "title": "阶跃星辰与上海期智研究院共建智能体前沿研究院",
                  "summary": "7月18日，阶跃星辰与上海期智研究院宣布共建「智能体前沿研究院」，围绕智能体网络及经济原理、AI Safety 等方向开展联合研究。上海期智研究院院长姚期智与阶跃董事长印奇共同揭牌，提出「智能体时代五大全球新命题」。阶跃同步推出 StepStar 顶尖人才计划，面向全球招募智能体领域人才。",
                  "link": "https://finance.sina.com.cn/roll/2026-07-19/doc-iniihuvr0426843.shtml",
                  "tags": [
                    "智能体",
                    "阶跃星辰",
                    "研究院"
                  ],
                  "source": "新浪财经",
                  "time": "7月18日"
                },
                {
                  "title": "千里科技在 WAIC 公布进展：阶跃 Step AOS 将应用于汽车，年底推 ASD 5.0",
                  "summary": "7月19日消息，千里科技（阶跃星辰母公司）在 WAIC 公布多项汽车智能化进展，宣布将阶跃星辰 Step AOS 智能体原生操作系统应用于汽车领域，打通硬件与系统能力，并发布 ASD 4.1 技术预览，计划年底推出 ASD 5.0。联合吉利研发的汽车超级智能体「超级Eva」已搭载于极氪 8X 车型。",
                  "link": "https://tech.ifeng.com/c/8utc52Khk0Q",
                  "tags": [
                    "自动驾驶",
                    "Step AOS"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月19日消息"
                }
              ]
            },
            {
              "title": "百度",
              "news": [
                {
                  "title": "百度一镜 WAIC 首发数字人视频播客，突破微表情技术",
                  "summary": "7月19日，百度一镜在 WAIC 首发数字人视频播客解决方案，突破数字人微表情技术，实现自然插话和专业视听语音能力。该方案依托文心大模型将表情控制粒度压缩至 1 秒内，使制作成本下降 74%，内容表现力提升 785%，平均播放时长上涨 29%，人物自然度全面超越市面主流模型。",
                  "link": "https://36kr.com/newsflashes/3901954083030918",
                  "tags": [
                    "百度",
                    "数字人",
                    "WAIC"
                  ],
                  "source": "36氪",
                  "time": "7月19日"
                }
              ]
            },
            {
              "title": "努比亚",
              "news": [
                {
                  "title": "全球首款 AI 智能体手机努比亚 NaviX Ultra 亮相 WAIC，搭载豆包助手",
                  "summary": "7月19日，搭载豆包手机助手的全球首款 AI 智能体手机努比亚 NaviX Ultra 在 WAIC 亮相。采用系统级 GUI Agent 架构，可直接看懂屏幕并模拟点击滑动，实现跨应用多步骤任务。配备独立橙色 AI 按键、7000mAh 电池，是国内首款搭载备案端侧智能体大模型的手机。",
                  "link": "https://tech.ifeng.com/c/8ut3YdvrT9P",
                  "tags": [
                    "AI手机",
                    "努比亚",
                    "豆包"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月19日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "小鹏",
              "news": [
                {
                  "title": "小鹏 MONA L03 上市后带动全系试驾量创历史新高",
                  "summary": "7月19日，小鹏 MONA L03 上市后首个周末迎来客流高峰，自身单日试驾量创小鹏历史上市同期新高，并带动全系试驾量创历史最高水平。新车 12.38 万元起，搭载自研图灵 AI 芯片（Max 版 750TOPS）与第二代 VLA 智驾系统，提供纯电/增程双动力。",
                  "link": "https://tech.ifeng.com/c/8utJ6skwMQj",
                  "tags": [
                    "小鹏",
                    "VLA",
                    "智驾"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月19日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "大晓机器人",
              "news": [
                {
                  "title": "大晓机器人发布开悟世界模型 Kairos 3.1，面向全行业开源",
                  "summary": "7月19日，大晓机器人在 WAIC 发布原生行动一体化开悟世界模型 Kairos 3.1 并面向全行业开源。采用混合 Transformer 统一架构，融合世界理解、物理生成、动作预测三大能力。自研推理引擎 KairosRT 在 Jetson Thor 平台 8B 模型延迟仅 125ms，效率较 Cosmos 3 Nano 提升 52 倍。同步发布三大行业解决方案及具身物理智能评测基准平台。",
                  "link": "https://www.jiemian.com/article/14790910.html",
                  "tags": [
                    "世界模型",
                    "具身智能",
                    "开源"
                  ],
                  "source": "界面新闻",
                  "time": "7月19日"
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
              "title": "一目科技",
              "news": [
                {
                  "title": "具身智能触觉传感器厂商一目科技完成超 10 亿元 E 轮融资，估值破百亿",
                  "summary": "7月19日消息，一目科技完成超 10 亿元 E 轮融资，投后估值突破 100 亿元，跻身百亿级具身智能独角兽。公司核心产品为仿生视触觉传感器，厚度小于 3mm，分辨率与力精度达类人水准，商业版图覆盖人形机器人、汽车、制药等领域。资金将用于触觉感知材料与芯片研发及规模化量产。",
                  "link": "https://www.cls.cn/detail/2430385",
                  "tags": [
                    "融资",
                    "具身智能",
                    "传感器"
                  ],
                  "source": "财联社",
                  "time": "7月19日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "IDC",
              "news": [
                {
                  "title": "IDC 预发布 DAA 报告：2030 年全球活跃智能体将超 22 亿个",
                  "summary": "7月19日消息，IDC 在 WAIC 预发布行业首份《DAA 研究报告》，用日活智能体数（Daily Active Agents）衡量智能体实际使用。报告预计全球活跃 Agent 数量从 2025 年的 2860 万个增至 2026 年的 7940 万个，2030 年达到 22.16 亿个。该指标由百度李彦宏在 Create 2026 大会上提出。",
                  "link": "https://www.iheima.com/article-399700.html",
                  "tags": [
                    "DAA",
                    "研究报告",
                    "智能体"
                  ],
                  "source": "i黑马",
                  "time": "7月19日消息"
                }
              ]
            },
            {
              "title": "Dave Eggers",
              "news": [
                {
                  "title": "作家 Dave Eggers 受邀为 OpenAI 员工演讲，痛批 ChatGPT 让学生失去写作能力",
                  "summary": "7月19日消息，美国作家 Dave Eggers 去年受 Sam Altman 邀请在 OpenAI 总部向约 200 名员工发表演讲。Eggers 严厉批评 ChatGPT 对教育的影响是「灾难性的」：如果学生用它来写作，将永远学不会写作，被夺走自己的声音，让一两代人都陷入沉默。他质疑未来是否真的有人愿意阅读 AI 创作的小说。",
                  "link": "https://www.ithome.com/0/978/607.htm",
                  "tags": [
                    "AI教育",
                    "ChatGPT",
                    "争议"
                  ],
                  "source": "IT之家",
                  "time": "7月19日消息"
                }
              ]
            },
            {
              "title": "世界人工智能合作组织",
              "news": [
                {
                  "title": "世界人工智能合作组织（WAICO）正式成立，29 国创始成员国签署协定",
                  "summary": "7月16日，29 个国家在上海签署《成立世界人工智能合作组织协定》，成为创始成员国，总部设在上海。该组织将重点开展 AI 能力建设国际合作、供需对接推动 AI+行动、以及全球治理体系建设三方面工作，将鼓励共建开源生态，确保发展中国家平等受益。",
                  "link": "https://app.xinhuanet.com/news/article.html?articleId=202607167b558fa84ac8488bb938c4edbc30f2ed",
                  "tags": [
                    "国际合作",
                    "AI治理",
                    "WAICO"
                  ],
                  "source": "新华社",
                  "time": "7月16日"
                }
              ]
            },
            {
              "title": "SK崔泰源",
              "news": [
                {
                  "title": "SK 集团会长崔泰源：明年全球半导体需求至少增五成，AI 驱动增长",
                  "summary": "7月19日，SK 集团会长崔泰源在济州论坛媒体座谈会上表示，明年全球半导体需求至少增长 50%-60%，其中 AI 领域需求预计增加 60%-100%。但明年新增供应量几乎为零，供需缺口恐扩大。他预测继电力设备后，材料供应和设施建设将成为新瓶颈，电线、海底电缆已出现短缺。",
                  "link": "https://cb.yna.co.kr/gate/big5/cn.yna.co.kr/view/ACK20260719000700881",
                  "tags": [
                    "半导体",
                    "AI供需",
                    "SK"
                  ],
                  "source": "韩联社",
                  "time": "7月19日"
                }
              ]
            },
            {
              "title": "《大众摄影》",
              "news": [
                {
                  "title": "《大众摄影》刊发 AI 生成「五腿牛」照片引发争议，官方回应已撤下",
                  "summary": "7月18日消息，网友发现《大众摄影》杂志刊发照片《龙川晨韵》中黄牛有五条腿，质疑为 AI 生成。杂志社回应称作者承认使用 AI 后期调整时失误，照片已撤下。该事件再次引发关于 AI 生成内容标识与审核的讨论。杂志社表示已修订征稿规范，要求 AI 生成影像需主动声明并展示 AI 标识。",
                  "link": "https://m.gmw.cn/2026-07/18/content_1304534599.htm",
                  "tags": [
                    "AI争议",
                    "摄影",
                    "审核"
                  ],
                  "source": "光明网",
                  "time": "7月18日消息"
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
              "model": "gpt-5.2-chat-latest",
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
          "date": "2026-07-20",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy3 (free)",
              "score": "11.5T tokens",
              "change": "↑87%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "9.19T tokens",
              "change": "↑55%"
            },
            {
              "model": "DeepSeek V4 Flash",
              "score": "5.35T tokens",
              "change": "↑2%"
            },
            {
              "model": "MiniMax M3",
              "score": "3.75T tokens",
              "change": "↑12%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.65T tokens",
              "change": "↑14%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "3.06T tokens",
              "change": "↑50%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.67T tokens",
              "change": "↑5%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.16T tokens",
              "change": "↑4%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "2.06T tokens",
              "change": "↑2%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.06T tokens",
              "change": "↑14%"
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
              "link": "https://www.velo.com"
            },
            {
              "name": "V2Fun",
              "category": "AI",
              "rank": 2,
              "link": "https://v2fun.xyz"
            },
            {
              "name": "Campus",
              "category": "Productivity",
              "rank": 3,
              "link": "https://www.campus.io"
            },
            {
              "name": "Agently",
              "category": "Productivity",
              "rank": 4,
              "link": "https://agently.com"
            },
            {
              "name": "Crustdata Recruiter",
              "category": "Hiring",
              "rank": 5,
              "link": "https://crustdata.com"
            },
            {
              "name": "YAGNI",
              "category": "SaaS",
              "rank": 6,
              "link": "https://yagni.com"
            },
            {
              "name": "RecordMeeting",
              "category": "Chrome Extensions",
              "rank": 7,
              "link": "https://recordmeeting.com"
            },
            {
              "name": "Tiptap AI Toolkit",
              "category": "Text Editors",
              "rank": 8,
              "link": "https://tiptap.dev"
            },
            {
              "name": "Flodesk Studio",
              "category": "Email",
              "rank": 9,
              "link": "https://flodesk.com"
            },
            {
              "name": "CodeNearby 2.0",
              "category": "Productivity",
              "rank": 10,
              "link": "https://codenearby.com"
            },
            {
              "name": "nudge2.0",
              "category": "Productivity",
              "rank": 11,
              "link": "https://nudge2.com"
            },
            {
              "name": "Copresent",
              "category": "Chrome Extensions",
              "rank": 12,
              "link": "https://copresent.com"
            },
            {
              "name": "Keepresso",
              "category": "Productivity",
              "rank": 13,
              "link": "https://keepresso.app"
            },
            {
              "name": "Clerk",
              "category": "Fintech",
              "rank": 14,
              "link": "https://clerk.com"
            },
            {
              "name": "Review by Eddie AI",
              "category": "Productivity",
              "rank": 15,
              "link": "https://eddie.ai"
            },
            {
              "name": "Jam-Pod",
              "category": "Music",
              "rank": 16,
              "link": "https://jampod.app"
            },
            {
              "name": "ccshare",
              "category": "Dev Tools",
              "rank": 17,
              "link": "https://ccshare.dev"
            },
            {
              "name": "QuickQuill",
              "category": "Mac",
              "rank": 18,
              "link": "https://quickquill.app"
            },
            {
              "name": "New AI tools by IFTTT",
              "category": "Productivity",
              "rank": 19,
              "link": "https://ifttt.com"
            },
            {
              "name": "DeskMat 1.3",
              "category": "Mac",
              "rank": 20,
              "link": "https://deskmat.app"
            }
          ]
        }
      ]
    }
  }
}

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
