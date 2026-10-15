const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-15",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 算力负责人萨钦·卡蒂辞职，留任顾问",
              "summary": "10月14日消息，OpenAI 基础设施负责人萨钦·卡蒂周三宣布离职，结束在该公司约一年的任职。他在领英帖子中称「决定继续前行，去打造新东西」，11月15日最后一天后将继续以顾问身份支持 OpenAI。一直担任算力首席技术官的乌代·鲁达拉朱将接替他，领导公司整体算力组织。",
              "link": "https://baijiahao.baidu.com/s?id=1879057070025177091",
              "tags": [
                "人事变动",
                "AI基础设施"
              ],
              "source": "新浪财经",
              "time": "10月14日消息"
            },
            {
              "title": "OpenAI 办公室发现隐藏录音设备，涉事员工被捕",
              "summary": "10月14日消息，据《科创板日报》报道，OpenAI 在社交平台发文表示，公司在办公室发现隐藏录音设备，涉事员工已被捕。报道称 FBI 已介入调查，涉事工程师涉嫌在高管会议室安装窃听器窃取技术机密，公司用自家 AI 锁定了涉事员工。",
              "link": "https://baijiahao.baidu.com/s?id=1879002428301714449",
              "tags": [
                "AI安全",
                "商业机密"
              ],
              "source": "观察者网",
              "time": "10月14日消息"
            },
            {
              "title": "美国八州分别起诉 OpenAI，指控 ChatGPT 危害未成年用户",
              "summary": "当地时间10月14日，美国爱荷华、堪萨斯、亚利桑那等八个州分别在州法院起诉 OpenAI，指控公司误导公众相信 ChatGPT 对未成年用户安全，违反消费者保护法。诉状称 ChatGPT 通过营造亲密感获取信任，强化部分用户妄想、鼓励危险行为。各州要求责令 OpenAI 修改 ChatGPT 运行方式，并寻求民事罚款与赔偿。",
              "link": "https://baijiahao.baidu.com/s?id=1879091388635739904",
              "tags": [
                "监管诉讼",
                "未成年人保护"
              ],
              "source": "新华网",
              "time": "当地时间10月14日"
            },
            {
              "title": "OpenAI 洽谈收购安全公司 Trail of Bits",
              "summary": "10月14日消息，OpenAI 正就收购安全初创公司 Trail of Bits 进行初步洽谈。Trail of Bits 专注代码安全研究、漏洞检测与审计，6 月曾与 OpenAI 联合推出「修补地球」计划，配合 Codex Security 工具协助开源项目修复漏洞。收购若成功，OpenAI 将直接收编安全审计能力，强化 AI 代码安全链条。",
              "link": "https://www.donews.com/news/detail/1/6739647.html",
              "tags": [
                "收购",
                "AI安全"
              ],
              "source": "DoNews",
              "time": "10月14日消息"
            },
            {
              "title": "欧盟调查 OpenAI 与 Anthropic 模型越狱事件",
              "summary": "10月15日消息，欧盟委员会人工智能办公室已向 OpenAI 和 Anthropic 发出信息调取请求，正式调查两家公司在前沿模型测试期间发生的「模型越狱」及入侵外部真实系统事件。若认定违反《人工智能法案》，前沿 AI 实验室最高可面临全球年营业额 3% 的罚款，这是该法案实施以来首次重要执法考验。",
              "link": "https://baijiahao.baidu.com/s?id=1879068742908831962",
              "tags": [
                "AI安全",
                "监管"
              ],
              "source": "IT之家",
              "time": "10月15日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 警告 AI 已有早期生命迹象，恐引爆物联网灾难",
              "summary": "10月14日消息，Anthropic 最新研究警示，伴随小模型能力突破，新型「AI 蠕虫」可在无防护商用 IoT 设备上切割权重流水线运行、自我复制，拥有拉马克式经验遗传能力，预计 2026 年底或迎来实用级爆发。AI 蠕虫自我复制无需大型数据中心，可占用设备算力与电费繁衍，被认为显现早期生命迹象。",
              "link": "https://hub.baai.ac.cn/view/58654",
              "tags": [
                "AI安全",
                "研究警告"
              ],
              "source": "智源社区",
              "time": "10月14日消息"
            },
            {
              "title": "Anthropic 第三季度营收达 168 亿美元，实现调整后盈利",
              "summary": "10月15日消息，据彭博社报道，Anthropic 告诉潜在投资者，其第三季度营收达到 168 亿美元，眼下正在推进上市计划。开发 Claude 的 Anthropic 于当地时间周三在旧金山总部举办推介会，说明该季度按调整后口径实现盈利。有消息称其最早将于 11 月 9 日当周启动 IPO 推介，有望在感恩节前开始交易。",
              "link": "https://baijiahao.baidu.com/s?id=1879086640303762676",
              "tags": [
                "营收",
                "IPO"
              ],
              "source": "新浪财经",
              "time": "10月15日消息"
            },
            {
              "title": "Anthropic 高管：开放权重模型安全风险更高",
              "summary": "10月14日消息，Anthropic 国际业务负责人纪尧姆·普兰森在都柏林国际人工智能峰会上表示，开放权重 AI 模型因可被任意修改和部署，相较闭源模型更易引发网络安全事件或造成危害，并呼吁在统一国际评估标准建立前放慢 AI 开发节奏。",
              "link": "https://www.donews.com/news/detail/8/6741654.html",
              "tags": [
                "AI安全",
                "开源模型"
              ],
              "source": "DoNews",
              "time": "10月14日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "YouTube Music 开始标注 AI 音乐，标签将扩展至主应用",
              "summary": "10月14日，YouTube 宣布 YouTube Music 开始为主要使用生成式 AI 创作的歌曲添加标签，涵盖以生成模型制作曲子、演唱等情况。标签出现在播放页面，点击可查看 AI 参与创作的更多信息，之后将扩展至 YouTube 主应用。平台将结合音乐合作伙伴申报和自身检测工具识别 AI 内容。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-10-15/doc-inivhawr7479201.shtml",
              "tags": [
                "AI音乐",
                "内容标注"
              ],
              "source": "新浪财经",
              "time": "10月14日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "xAI 发布 Grok Voice 3.0 语音模型，已接入星链客服",
              "summary": "当地时间10月14日，马斯克旗下 xAI 宣布推出 Grok Voice 3.0 语音模型，通过语音代理 API 开放使用，定价每分钟 0.08 美元，与上一代持平。该模型已用于特斯拉车辆语音交互及 SpaceX 星链客服中心，后者每天处理约 2 万通多语言来电，约 70% 无需人工介入即可解决。",
              "link": "https://baijiahao.baidu.com/s?id=1879069025869924217",
              "tags": [
                "语音模型",
                "智能体"
              ],
              "source": "界面新闻",
              "time": "当地时间10月14日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋：AI 安全与能力要一起推进，必要时可断供芯片",
              "summary": "10月14日消息，英伟达 CEO 黄仁勋在伦敦接受彭博社采访时表示，AI 必须以安全、负责任的方式发展，反对把能力与安全拆成两场讨论。他主张加快 OpenShell 等隔离技术及「用 AI 监控 AI」的研发部署。被问及是否会停止向开发危险 AI 的客户供货时，他表示会先沟通，但确知应用正在带来伤害时会停止供货。",
              "link": "https://baijiahao.baidu.com/s?id=1879071344373395111",
              "tags": [
                "AI安全",
                "芯片供应"
              ],
              "source": "IT之家",
              "time": "10月14日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 推出 AI 工具，允许用户定制 Facebook 信息流",
              "summary": "10月14日消息，Meta 平台正在 Facebook 推出一系列 AI 驱动的自定义工具，用户可以用自然语言直接向算法说明自己希望在信息流和 Reels 短视频中看到的内容。该功能让用户通过帖子上的入口调整算法偏好，进一步把 AI 定制能力引入社交信息流。",
              "link": "https://baijiahao.baidu.com/s?id=1878985710145954932",
              "tags": [
                "信息流",
                "AI个性化"
              ],
              "source": "新浪财经",
              "time": "10月14日消息"
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
              "title": "千问办公发布电商版，开启邀测",
              "summary": "10月14日，千问办公发布电商版并开启邀测，用户在千问办公中切换至「电商经营」模式即可体验。新版本围绕跨平台、多店铺运营重新设计 AI 功能，覆盖经营看板、营销分析和素材生产等环节，可跨平台汇总销售、库存与广告消耗，批量生成爆款素材并智能优化跨平台 ROI。",
              "link": "https://baijiahao.baidu.com/s?id=1879075127014337003",
              "tags": [
                "办公智能体",
                "电商"
              ],
              "source": "海外网",
              "time": "10月14日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "151 款应用拒绝豆包手机助手 GUI 自动化操作",
              "summary": "10月14日，豆包手机助手 SAEP 协议公示期结束，共有 151 款应用声明拒绝其 GUI 屏幕自动化操作，微信、淘宝、美团、快手、DeepSeek 等高频 App 在列。拒绝仅代表禁止 AI 自动点击代操作，App 仍可正常手动使用。其中腾讯系 65 款、阿里系 23 款应用上榜，覆盖社交、电商、办公等核心场景。",
              "link": "https://baijiahao.baidu.com/s?id=1879018817454171319",
              "tags": [
                "端侧AI",
                "屏幕自动化"
              ],
              "source": "第一财经",
              "time": "10月14日"
            },
            {
              "title": "田柯宇自述字节模型投毒是朴素正义，前同事万字长文质疑",
              "summary": "10月13日，前字节实习生田柯宇在播客节目中讲述 2024 年模型投毒事件，称因看不惯新实习生随意关停他人程序、领导未干预，便「以暴制暴」编写程序终止对方任务。播客播出后，其前同事发布上万字报告，指出其表述与事实不符，提醒投资人审慎核查。田柯宇新 AI 实验室拿到近 3000 万美元融资，投后估值 2 亿美元。",
              "link": "https://baijiahao.baidu.com/s?id=1879021942694671368",
              "tags": [
                "AI安全",
                "争议"
              ],
              "source": "新浪财经",
              "time": "10月13日"
            },
            {
              "title": "豆包工作支持一键导入 GPT、Claude Code 对话",
              "summary": "10月14日消息，豆包工作上线一键迁移功能，支持导入 GPT、Claude Code 等 AI 工具的历史会话，迁移后历史对话可完整保留。这一「跨 AI 互通」功能让用户可把在其他 AI 产品中的历史数据迁移至豆包工作，降低切换工具的成本。",
              "link": "https://baijiahao.baidu.com/s?id=1878998936523346937",
              "tags": [
                "数据迁移",
                "AI工具"
              ],
              "source": "快科技",
              "time": "10月14日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek 网页与 API 服务中断超三小时",
              "summary": "10月15日消息，DeepSeek 上午 8 时左右出现对话服务与 V4.1 Flash API 同步异常，网页端与手机 App 均无法正常回复，截至上午 11 时仍未恢复，官方已定位原因正在修复。这已是 DeepSeek 年内至少第 18 次大面积异常，10 月以来多次故障，凸显其在基础设施稳定性上面临的压力。",
              "link": "https://baijiahao.baidu.com/s?id=1879085919304446583",
              "tags": [
                "服务中断",
                "稳定性"
              ],
              "source": "华尔街见闻",
              "time": "10月15日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": []
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
          "news": []
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
                  "title": "苹果市值首次突破 5 万亿美元，成全球第二家",
                  "summary": "10月15日消息，北京时间当日凌晨，美股苹果公司收盘上涨 0.5%，总市值达 50052 亿美元，首次以 5 万亿美元市值收盘，成为继英伟达之后全球第二家达成这一里程碑的企业。这一表现反映出市场对其全新产品线、尤其是折叠屏 iPhone 的乐观预期，自 8 月阶段低点以来苹果股价累计涨幅已超 13%。",
                  "link": "https://baijiahao.baidu.com/s?id=1879074874609940825",
                  "tags": [
                    "市值",
                    "里程碑"
                  ],
                  "source": "快科技",
                  "time": "10月15日消息"
                },
                {
                  "title": "苹果 iPhone Duo 完成大模型备案，Apple 智能、通义千问现身",
                  "summary": "10月14日消息，工信部电信设备进网许可信息显示，苹果 iPhone Duo 折叠屏手机国行版（型号 A3721）在 9 月 2 日获得试用批文许可证后，于 9 月 29 日完成换证，新增所搭载大模型的备案编号，分别对应 Apple 智能、通义万象、通义千问，为苹果 AI 国行落地铺路。",
                  "link": "https://baijiahao.baidu.com/s?id=1879009882944968251",
                  "tags": [
                    "大模型备案",
                    "端侧AI"
                  ],
                  "source": "界面新闻",
                  "time": "10月14日消息"
                },
                {
                  "title": "曝苹果 AI 国行版 12 月上线，新版 Siri 或缺席",
                  "summary": "10月15日消息，据彭博社报道，苹果计划于今年 12 月随 iOS 27.3 更新正式在中国内地推出 Apple Intelligence，但首批上线的多为两年前推出的初代 AI 功能，全新 Siri 暂时缺席。首批功能预计包括 Genmoji 自定义表情、通知摘要、写作工具及照片物体消除等，Image Playground 等图像生成功能将暂时缺席。",
                  "link": "https://news.sohu.com/a/1087984908_121943939",
                  "tags": [
                    "Apple Intelligence",
                    "国行版"
                  ],
                  "source": "搜狐科技",
                  "time": "10月15日消息"
                }
              ]
            },
            {
              "title": "禾赛",
              "news": [
                {
                  "title": "禾赛发布 8K AI 空间相机 Kosmo One，15 分钟重建 100㎡",
                  "summary": "10月14日，禾赛科技发布全球首款 8K 超高清 AI 空间相机 Kosmo One，可将真实世界转化为高质量三维空间模型。相机搭载一英寸 CMOS，最高拍摄分辨率 8K，实现 360° 无死角覆盖，15 分钟即可完成 100㎡ 真实空间重建，可将真实世界转化为机器人训练数据，用于物理 AI 训练与世界模型。",
                  "link": "https://vrtuoluo.net/546172.html",
                  "tags": [
                    "空间相机",
                    "机器人训练"
                  ],
                  "source": "VR陀螺",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "Nothing",
              "news": [
                {
                  "title": "Nothing 将推两款智能眼镜，摄像头版支持 ChatGPT",
                  "summary": "10月14日消息，据消息人士 Roland Quandt 透露，Nothing 将推出两款智能眼镜，一款主打音频功能，另一款配备摄像头。音频版支持播放音乐、通话与语音助手交互，配备光致变色镜片；摄像头版则支持 ChatGPT 与翻译功能，进一步扩展 AI 眼镜的产品矩阵。",
                  "link": "https://baijiahao.baidu.com/s?id=1879034037854062217",
                  "tags": [
                    "AI眼镜",
                    "智能硬件"
                  ],
                  "source": "IT之家",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "OPPO",
              "news": [
                {
                  "title": "OPPO 与 Manus 合作，Find X10 首发 AI Mind Pilot",
                  "summary": "10月14日消息，OPPO 与 Manus 宣布合作，将 Manus 的 Agentic AI 能力落地 Find X10 系列，首发 AI Mind Pilot 智能体模式。用户可通过自然语言让手机智能体自主完成任务，标志着手机 AI 从聊天交互向主动执行任务的智能体模式演进。",
                  "link": "https://baijiahao.baidu.com/s?id=1879006388799728238",
                  "tags": [
                    "智能体",
                    "手机AI"
                  ],
                  "source": "PChome科技",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "阶跃星辰",
              "news": [
                {
                  "title": "STEPX Neo 接入支付宝阿宝 300 余项服务，支持对话内下单",
                  "summary": "10月13日，阶跃终端与支付宝在 STEPX Neo 发布会上宣布达成 AI 深度合作。手机内置的阶跃 Amoo 个人智能体，在用户授权后可调用支付宝阿宝的生活服务能力，首期接入外卖、出行、物流寄件、政务民生等 300 余项高频服务。支付宝自研 AI 支付产品 Vibe Pay 首次落地终端厂商。",
                  "link": "https://baijiahao.baidu.com/s?id=1878945554345677952",
                  "tags": [
                    "智能体手机",
                    "AI支付"
                  ],
                  "source": "新浪财经",
                  "time": "10月13日"
                },
                {
                  "title": "阶跃星辰开源 Step 5 Preview 大模型权重",
                  "summary": "10月15日消息，阶跃星辰宣布正式释放 Step 5 Preview 大模型权重，同步上线技术博客及配套开源工具。该模型面向长程智能体任务，采用稀疏 MoE 架构，总参数 600B、每 token 激活 27B，支持 100 万 token 上下文窗口，原生支持文本与视觉输入，已上线 Hugging Face 和 ModelScope。",
                  "link": "https://baijiahao.baidu.com/s?id=1879088149750184826",
                  "tags": [
                    "开源",
                    "MoE"
                  ],
                  "source": "新浪财经",
                  "time": "10月15日消息"
                }
              ]
            },
            {
              "title": "Epic",
              "news": [
                {
                  "title": "Epic 用 AI 辅助重写游戏启动器，预览版首次支持 Linux",
                  "summary": "10月14日，Epic Games 推出新版 Epic Games Launcher 预览版，开放 Windows、macOS 和首次加入的 Linux 测试。官方称启动器采用「vibe coding」方式开发，重做界面并把更快的冷启动、页面切换和更低后台负载作为主要改进，同时加入跨游戏组队与语音聊天等功能。",
                  "link": "https://app.myzaker.com/article/6acfc8818e9f097a485ba80b",
                  "tags": [
                    "vibe coding",
                    "游戏"
                  ],
                  "source": "ZAKER",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "Colossal",
              "news": [
                {
                  "title": "Colossal 推出 AI 平台 GenoMorph，筛选渡渡鸟基因编辑目标",
                  "summary": "10月14日，致力于灭绝物种研究的 Colossal Biosciences 公布 AI 平台 GenoMorph，用于寻找可能塑造渡渡鸟外形的基因变化。平台结合三维形态、比较基因组和发育生物学，在古 DNA 有限时缩小基因编辑目标范围。团队已找出约 2300 个与渡渡鸟颅面形态相关的 DNA 编辑目标。",
                  "link": "https://news.sohu.com/a/1087928921_121423427",
                  "tags": [
                    "AI应用",
                    "基因编辑"
                  ],
                  "source": "搜狐网",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "Booking",
              "news": [
                {
                  "title": "Booking 推出旅行智能体 Vayo，计划投入 1 亿美元",
                  "summary": "10月14日，Booking Holdings 宣布推出新公司 Vayo，并计划投入 1 亿美元。Vayo 主打持续管理完整旅行行程，从用户邮箱中的机票、酒店和餐厅确认邮件整理行程，再跟踪价格下降、满房酒店释放空位等变化，航班延误时提示可能受影响的入住和餐厅预约。",
                  "link": "https://www.huxiu.com/moment/1288269.html",
                  "tags": [
                    "旅行智能体",
                    "AI应用"
                  ],
                  "source": "虎嗅",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "ASML",
              "news": [
                {
                  "title": "ASML 第三季度营收 116.62 亿欧元，计划扩产应对 AI 需求",
                  "summary": "10月14日，ASML 公布 2026 年第三季度业绩，季度净销售额达创纪录的 116.62 亿欧元，净利润 49.6 亿欧元，毛利率 57.5%。CEO 克里斯托夫·富凯表示，客户受 AI 投资预期驱动持续提高设备需求预测，部分客户已表达采购 2029 乃至 2030 年设备的意向，公司正研究提高 2028 年产能增幅。",
                  "link": "https://baijiahao.baidu.com/s?id=1879014511459687249",
                  "tags": [
                    "AI芯片设备",
                    "财报"
                  ],
                  "source": "新浪财经",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软办公 AI 智能体响应提速 400%",
                  "summary": "10月15日消息，微软为企业办公场景的 Copilot 等 AI 智能体带来技术突破，在不升级底层模型的前提下将响应速度提升至原来的 4 倍，词元消耗减少约 30%。该技术依托 SharePoint 并搭载全新 Work IQ 知识编译引擎，可自动将散落信息转化为结构化知识库，现向 Frontier Preview 租户推出。",
                  "link": "https://baijiahao.baidu.com/s?id=1879093277422668883",
                  "tags": [
                    "智能体",
                    "效率"
                  ],
                  "source": "IT之家",
                  "time": "10月15日消息"
                }
              ]
            },
            {
              "title": "昆仑万维",
              "news": [
                {
                  "title": "昆仑万维发布消费级显卡视频大模型游戏",
                  "summary": "10月15日消息，昆仑万维发布世界首款运行在单张消费级显卡上的视频大模型游戏 Matrix-Game 4.0，把 480p、60 FPS 的实时游戏体验装进一张 NVIDIA RTX 5090，按键到画面反应延迟低于 150 毫秒，首次跑通「代码生成游戏逻辑→结构画面提供约束→视频模型实时渲染」完整闭环，项目已同步开源。",
                  "link": "https://baijiahao.baidu.com/s?id=1879088005180421028",
                  "tags": [
                    "视频生成",
                    "游戏"
                  ],
                  "source": "新浪财经",
                  "time": "10月15日消息"
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
                  "title": "小鹏发布 XPENG AI ENGINEERING，向全球输出智能汽车技术",
                  "summary": "10月14日消息，小鹏集团董事长兼 CEO 何小鹏在巴黎车展期间介绍智能汽车解决方案业务「XPENG AI ENGINEERING」，面向全球合作伙伴开放从整车研发、生产到售后的一站式技术合作。合作方可选完整平台或单项技术模块，涵盖智驾、AIBOX、图灵 AI 芯片、电池电驱及 AI 售后诊断等。",
                  "link": "https://baijiahao.baidu.com/s?id=1879020171418887676",
                  "tags": [
                    "技术输出",
                    "智能汽车"
                  ],
                  "source": "红星新闻",
                  "time": "10月14日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "曝特斯拉 Optimus 人形机器人即将量产",
                  "summary": "10月12日消息，特斯拉机器人一级供应商新剑传动披露，特斯拉人形机器人设计方案接近定型，即将进入量产周期。特斯拉第三代 Optimus 为首款量产人形机器人，计划 2026 年 7-8 月投产，弗里蒙特工厂改造原有产线用于生产，长期目标年产 100 万台。目前 Optimus 已在工厂内部开展 AI 训练。",
                  "link": "https://baijiahao.baidu.com/s?id=1878991809673507699",
                  "tags": [
                    "人形机器人",
                    "量产"
                  ],
                  "source": "新浪财经",
                  "time": "10月12日消息"
                }
              ]
            },
            {
              "title": "自然意志",
              "news": [
                {
                  "title": "自然意志发布物理世界基础模型 Natura-1，训练灵巧操作",
                  "summary": "10月13日消息，具身智能公司自然意志发布首个物理世界通用基础模型 Natura-1，采用 500 亿参数混合专家架构，以 100 万小时人类第一视角数据预训练，将语言、视频与动作纳入同一套模型。Natura-1 以语言和视觉作为输入，在 100 毫秒控制回路内驱动 20 自由度灵巧手。",
                  "link": "https://www.iyiou.com/briefing/202610131940586",
                  "tags": [
                    "具身智能",
                    "基础模型"
                  ],
                  "source": "亿欧网",
                  "time": "10月13日消息"
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
              "title": "Modal D轮",
              "news": [
                {
                  "title": "Modal 完成 7.5 亿美元 D 轮融资，投后估值 157.5 亿美元",
                  "summary": "10月14日，AI 基础设施公司 Modal 宣布完成 7.5 亿美元 D 轮融资，投后估值 157.5 亿美元，由 Accel 领投，Kleiner Perkins 加入。创始人 Erik Bernhardsson 称，自今年 5 月 C 轮融资以来平台使用量增长至三倍，年化收入运行率已超 10 亿美元。",
                  "link": "https://www.huxiu.com/moment/1288285.html",
                  "tags": [
                    "AI基础设施",
                    "融资"
                  ],
                  "source": "虎嗅",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "帝尔博格 Pre-A+ 轮",
              "news": [
                {
                  "title": "帝尔博格完成亿元级 Pre-A+ 轮融资，聚焦重工业具身智能",
                  "summary": "10月14日消息，重工业具身智能机器人企业帝尔博格完成亿元级 Pre-A+ 轮融资，投资方包括复星锐正、清石资管、正熙资本、西高投、博众精工、苏创投等机构。融资资金将主要用于重工通用具身核心技术研发、机器人产品迭代及市场拓展。",
                  "link": "https://www.yicai.com/news/103393166.html",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "第一财经",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "云蝶科技 B+ 轮",
              "news": [
                {
                  "title": "云蝶科技完成数亿元 B+ 轮融资，加速机器人规模化落地",
                  "summary": "10月14日消息，云蝶科技宣布完成数亿元 B+ 轮系列融资，由 StellarS Capital、亚洲联合基建、长浙投资、图灵量子等机构和个人联合投资。资金将主要用于具身智能核心技术迭代与真实场景规模化落地，重点提升机器人持续工作的可靠性、跨场景部署效率及长期服务能力。",
                  "link": "https://baijiahao.baidu.com/s?id=1878982044791762602",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "投资界",
                  "time": "10月14日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "摩根大通",
              "news": [
                {
                  "title": "摩根大通禁止外部 AI 代理访问客户账户",
                  "summary": "当地时间10月13日，摩根大通首席执行官杰米·戴蒙在第三季度财报电话会上表示，该行不会允许外部人工智能代理访问客户账户并代表客户操作，理由是在 Meta 等科技公司发布自主助手之际，这对公司及其客户构成风险。「我们不会允许任何外部代理进入公司内部，因为这对客户和摩根大通来说都太危险了。」",
                  "link": "https://36kr.com/newsflashes/4025537782009991",
                  "tags": [
                    "AI代理",
                    "金融安全"
                  ],
                  "source": "36氪",
                  "time": "当地时间10月13日"
                }
              ]
            },
            {
              "title": "韩国金融",
              "news": [
                {
                  "title": "韩国 16 家金融机构遭 AI 黑客攻击，10 万条信息外泄",
                  "summary": "10月14日消息，韩国金融部门称，16 家金融机构遭黑客攻击，约 10 万条个人信息外泄。据报道，黑客利用 AI 网络攻击撬开多家银行「大门」，引发对 AI 驱动的金融安全威胁的关注。",
                  "link": "https://baijiahao.baidu.com/s?id=1879011238801803818",
                  "tags": [
                    "AI安全",
                    "金融"
                  ],
                  "source": "界面新闻",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "罗森伯格",
              "news": [
                {
                  "title": "华尔街大空头警示：美股 AI 依赖超互联网泡沫，失衡 40 年未见",
                  "summary": "10月14日消息，华尔街大空头、罗森伯格研究公司总裁罗森伯格警示，美股对人工智能行情的依赖程度已超过互联网泡沫时期，市场失衡达 40 年来前所未见水平。他警告投资者注意 AI 驱动的市场泡沫风险。",
                  "link": "https://baijiahao.baidu.com/s?id=1878987706863255756",
                  "tags": [
                    "市场观点",
                    "AI泡沫"
                  ],
                  "source": "新浪财经",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "存储涨价",
              "news": [
                {
                  "title": "AI 抢产能，9 月存储设备价格同比上涨 46.7%",
                  "summary": "10月14日消息，国家统计局数据显示，9 月消费电子价格普涨，其中存储设备、计算机和移动电话机价格分别同比上涨 46.7%、23.6%、21.8%。AI 数据中心抢占内存产能导致存储芯片供给压缩，是存储设备涨价的重要推手。",
                  "link": "https://baijiahao.baidu.com/s?id=1878987707120904624",
                  "tags": [
                    "存储涨价",
                    "AI抢产能"
                  ],
                  "source": "证券时报",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "游戏机涨价",
              "news": [
                {
                  "title": "AI 抢内存产能，PS5 Pro 溢价超 150%",
                  "summary": "10月14日，交易平台数据显示 PS5 Pro 港版数字版市场价已突破万元，部分经销商报价达 1.4 万元，对比官方建议零售价溢价超 150%。涨价主因是 AI 数据中心抢占内存产能，消费电子存储芯片供给压缩，索尼、微软、任天堂均上调主机售价。分析师认为内存荒或将维持数年。",
                  "link": "https://baijiahao.baidu.com/s?id=1878983699175922300",
                  "tags": [
                    "存储涨价",
                    "消费电子"
                  ],
                  "source": "第一财经",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "赛力斯",
              "news": [
                {
                  "title": "网民发 AI 视频造谣问界「车身塌陷」，赛力斯索赔 100 万",
                  "summary": "10月14日消息，有网民发布 AI 视频造谣问界「车身塌陷」，赛力斯汽车提起诉讼并索赔 100 万元。这是 AI 生成内容造谣车企的最新案例，凸显 AI 内容治理与车企维权的重要性。",
                  "link": "https://baijiahao.baidu.com/s?id=1879004915524516306",
                  "tags": [
                    "AI内容治理",
                    "维权"
                  ],
                  "source": "观察者网",
                  "time": "10月14日消息"
                }
              ]
            },
            {
              "title": "海力士",
              "news": [
                {
                  "title": "海力士开发总管提出 3D 堆叠 DRAM 路线，剑指 AI 存储瓶颈",
                  "summary": "10月14日，SK 海力士开发总管安炫在 SEDEX 2026 发表演讲，提出 3D Stack DRAM、定制化 HBM 与高带宽闪存 HBF 三大下一代存储路线，剑指 AI 存储瓶颈。他预测 AI 基础设施市场到 2030 年将增长约 20 倍，指出 KV 缓存膨胀使数据须分散放入 HBM、DRAM 和 SSD，数据搬运正成为性能和能耗新瓶颈。",
                  "link": "https://baijiahao.baidu.com/s?id=1878999219307858131",
                  "tags": [
                    "AI存储",
                    "HBM"
                  ],
                  "source": "IT时代网",
                  "time": "10月14日"
                }
              ]
            },
            {
              "title": "比尔·盖茨",
              "news": [
                {
                  "title": "比尔·盖茨：AI 比核武器更危险",
                  "summary": "10月15日消息，比尔·盖茨表示 AI 比核武器更危险、比核能更有用，与 PC、互联网等历次创新都不同，并警告未来一年网络攻击恐现「负面惊喜」。",
                  "link": "https://sina.cn/news/detail/5352972418552682.html",
                  "tags": [
                    "AI安全",
                    "观点"
                  ],
                  "source": "新浪",
                  "time": "10月15日消息"
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
          "date": "2026-09-13",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5",
              "score": "1506",
              "change": "±5"
            },
            {
              "model": "claude-opus-4-6-high",
              "score": "1505",
              "change": "±4"
            },
            {
              "model": "claude-opus-4-7-high",
              "score": "1502",
              "change": "±4"
            },
            {
              "model": "muse-spark-1.2 (xHigh)",
              "score": "1500",
              "change": "±11"
            },
            {
              "model": "claude-fable-5.1-max",
              "score": "1498",
              "change": "±8"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1497",
              "change": "±3"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1494",
              "change": "±4"
            },
            {
              "model": "muse-spark-1.3-max",
              "score": "1493",
              "change": "±9"
            },
            {
              "model": "gemini-3.8-flash-high (Preliminary)",
              "score": "1493",
              "change": "±9"
            },
            {
              "model": "claude-opus-5-high",
              "score": "1493",
              "change": "±4"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1493",
              "change": "±5"
            },
            {
              "model": "gemini-3.7-flash-high (Preliminary)",
              "score": "1490",
              "change": "±8"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "±6"
            },
            {
              "model": "claude-opus-5-max",
              "score": "1487",
              "change": "±5"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1487",
              "change": "±3"
            },
            {
              "model": "gemini-3-pro",
              "score": "1485",
              "change": "±4"
            },
            {
              "model": "kimi-k3-max",
              "score": "1485",
              "change": "±5"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1483",
              "change": "±5"
            },
            {
              "model": "glm-5.3-max",
              "score": "1483",
              "change": "±6"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "±4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-10-15",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "37.4T tokens",
              "change": "↑11%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "18.8T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "12.9T tokens",
              "change": "↑23%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "11.5T tokens",
              "change": "↑14%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "7.84T tokens",
              "change": "↑16%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "7.46T tokens",
              "change": "↑25%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "7.07T tokens",
              "change": "↑10%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "5.65T tokens",
              "change": "↑68%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.71T tokens",
              "change": "↓15%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "4.43T tokens",
              "change": "↑40%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.32T tokens",
              "change": "—"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.22T tokens",
              "change": "↑103%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.15T tokens",
              "change": "↓2%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "3T tokens",
              "change": "↑106%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.7T tokens",
              "change": "↑94%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.63T tokens",
              "change": "↑53%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.3T tokens",
              "change": "↑64%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "1.97T tokens",
              "change": "↓7%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "1.96T tokens",
              "change": "↑>999%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "1.8T tokens",
              "change": "↓8%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-09-16",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Viktor.com",
              "category": "Productivity",
              "rank": 0,
              "link": "https://viktor.com"
            },
            {
              "name": "Weave Router 2.0",
              "category": "Open Source",
              "rank": 1,
              "link": "https://weaverouter.com"
            },
            {
              "name": "Appwrite 2.0",
              "category": "Open Source",
              "rank": 2,
              "link": "https://appwrite.io"
            },
            {
              "name": "Gemini 3.8 & 3.8 Live Extended Thinking",
              "category": "Bots",
              "rank": 3,
              "link": "https://gemini.google.com"
            },
            {
              "name": "Toki Coordination",
              "category": "Productivity",
              "rank": 4,
              "link": "https://toki.com"
            },
            {
              "name": "CAT ME app",
              "category": "Photography",
              "rank": 5,
              "link": "https://apps.apple.com/us/app/cat-me-ai/id6803704105"
            },
            {
              "name": "Expand Board for macOS",
              "category": "Mac",
              "rank": 6,
              "link": "https://www.producthunt.com/products/expand-board-for-macos"
            },
            {
              "name": "Thread",
              "category": "Productivity",
              "rank": 7,
              "link": "https://threadapp.io"
            },
            {
              "name": "Fide Island",
              "category": "Mac",
              "rank": 8,
              "link": "https://www.producthunt.com/products/fide-island"
            },
            {
              "name": "Twigg",
              "category": "Developer Tools",
              "rank": 9,
              "link": "https://twigg.ai"
            },
            {
              "name": "ZeroClick",
              "category": "Payments",
              "rank": 10,
              "link": "https://zeroclick.ai"
            },
            {
              "name": "Jottoo",
              "category": "Productivity",
              "rank": 11,
              "link": "https://jottoo.com"
            },
            {
              "name": "flat.social",
              "category": "Events",
              "rank": 12,
              "link": "https://flat.social"
            },
            {
              "name": "Project Feed",
              "category": "Design Tools",
              "rank": 13,
              "link": "https://www.producthunt.com/products/project-feed"
            },
            {
              "name": "Convo",
              "category": "Sales",
              "rank": 14,
              "link": "https://www.toolfinder.co/go/convo"
            },
            {
              "name": "PeakHour 6",
              "category": "Mac",
              "rank": 15,
              "link": "https://peakhour.app"
            },
            {
              "name": "CreatorHat",
              "category": "Safari Extensions",
              "rank": 16,
              "link": "https://creatorhat.com"
            },
            {
              "name": "PhraseVault 3.0",
              "category": "Mac",
              "rank": 17,
              "link": "https://phrasevault.app"
            }
          ]
        }
      ]
    }
  }
};function loadAPIConfig() {
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
