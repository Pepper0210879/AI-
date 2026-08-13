const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
    "date": "2026-08-13",
    "sections": {
      "overseas": {
        "vendors": [
          {
            "name": "OpenAI",
            "news": [
              {
                "title": "OpenAI 测试付费重置额度，ChatGPT Plus 可用 8 美元续额",
                "time": "8月12日消息",
                "summary": "8月12日消息，OpenAI 正在灰度测试 ChatGPT Plus 的付费重置额度功能。当用户每周使用额度耗尽时，界面会出现支付 8 美元（约 54 元人民币）的按钮，付款后可立即将额度恢复至 100%，无需等待约 5 小时自动恢复。OpenAI 发言人证实正在探索让达到上限的用户购买额外使用额度的方式，目前仅为早期实验，尚无大规模推出计划。",
                "link": "https://www.chinaz.com/ainews/30281.shtml",
                "tags": [
                  "产品功能",
                  "订阅"
                ],
                "source": "站长之家"
              }
            ]
          },
          {
            "name": "Anthropic",
            "news": [
              {
                "title": "Claude 打破平台壁垒，Chrome 侧边栏对话互通全平台历史",
                "time": "8月13日消息",
                "summary": "8月13日消息，Claude 推出 Chrome 侧边栏扩展，用户可在浏览器侧边栏与 Claude 对话，并互通全平台的历史记录，无需跳转网页或客户端。此举打破产品平台壁垒，让 Claude 的对话上下文在不同界面间保持一致，被解读为 Anthropic 加码 Agent 和日常 AI 助手入口的布局。",
                "link": "https://www.ithome.com/0/989/006.htm",
                "tags": [
                  "产品功能",
                  "AI应用"
                ],
                "source": "IT之家"
              }
            ]
          },
          {
            "name": "Google",
            "news": [
              {
                "title": "谷歌发布 Pixel 11 系列，Tensor G6 深度整合 Gemini",
                "time": "8月12日消息",
                "summary": "8月12日消息，谷歌在 Made by Google 活动发布 Pixel 11、Pixel 11 Pro、Pro XL 及 Pro Fold 四款新机，搭载自研 Tensor G6 芯片，TPU 增大约 50%，端侧 AI 速度提升 3.5 倍。Gemini 深度集成至 40 多款应用，可代用户订餐厅、叫车、点咖啡，Pro 版变焦升至 120 倍。全系 256GB 起步，售价 899 美元起，8 月 20 日开售。",
                "link": "https://m.ithome.com/html/988985.htm",
                "tags": [
                  "新品发布",
                  "手机",
                  "Gemini"
                ],
                "source": "IT之家"
              },
              {
                "title": "Pixel Watch 5 支持离线 Gemini，新增血压与胰岛素抵抗趋势",
                "time": "8月12日消息",
                "summary": "8月12日消息，谷歌发布 Pixel Watch 5，起售价 399 美元。新表支持完全离线的 Gemini 助手，可离线管理定时器、闹钟和健身活动，并新增主动建议功能。健康方面加入血压趋势与胰岛素抵抗追踪，基于超 50 万人数据训练的高级波形模型，按月提供趋势总结，定位从健身追踪转向健康守护与生活助理。",
                "link": "https://api3.cls.cn/share/article/2452850?os=web&sv=698",
                "tags": [
                  "新品发布",
                  "智能手表",
                  "Gemini"
                ],
                "source": "财联社"
              }
            ]
          },
          {
            "name": "xAI",
            "news": [
              {
                "title": "xAI 发布 Grok 4.6，综合评分追平 GPT-5.6 Sol",
                "time": "8月12日消息",
                "summary": "8月12日消息，马斯克旗下 xAI 发布新一代旗舰模型 Grok 4.6，重点强化长程智能体、复杂编程与知识工作能力。在综合 9 项基准的 Artificial Analysis Intelligence Index 上取得 61 分，与 OpenAI GPT-5.6 Sol Max 持平、落后 Fable 5 一分，在 GDPVal、Harvey LAB 等长时程任务上反超对手。API 输入 2 美元/输出 6 美元每百万 Token，约为竞品一半。",
                "link": "https://awtmt.com/articles/3779307",
                "tags": [
                  "模型发布",
                  "基准测试"
                ],
                "source": "华尔街见闻"
              },
              {
                "title": "马斯克：AI 收入下月将超 SpaceX 其他业务总和",
                "time": "8月12日消息",
                "summary": "8月12日消息，马斯克在 SpaceX 内部全员会议上表示，AI 营收 9 月将确定超过 SpaceX 其他所有业务营收总和，四季度将大幅超越；未来四五年内 AI 将占 SpaceX 价值 99%，目标明年底建成 10 吉瓦算力。他称 AI 已成为 SpaceX 未来极其重要的一部分，必须赢得 AI 竞争，未来将用 SpaceX 全部信息训练 Grok。",
                "link": "https://finance.eastmoney.com/a/202608123839098988.html",
                "tags": [
                  "行业观点",
                  "算力"
                ],
                "source": "东方财富"
              }
            ]
          },
          {
            "name": "NVIDIA",
            "news": [
              {
                "title": "英伟达开源 Nemotron 3.5 Lightning，智能体执行提速 30%",
                "time": "当地时间8月11日",
                "summary": "当地时间8月11日，英伟达开源 30B 参数（MoE，激活约 3B）模型 Nemotron 3.5 Lightning，专为大型多智能体系统的高频执行任务打造，支持 100 万 token 上下文，输出速度最高提升 4 倍、智能体任务完成加快 30%，采用 OpenMDW-1.1 许可允许商业使用。同期发布开源智能路由库 NeMo Switchyard，可将多模型任务成本降至 Opus 4.8 的三分之一。",
                "link": "https://www.ithome.com/0/988/609.htm",
                "tags": [
                  "开源模型",
                  "智能体"
                ],
                "source": "IT之家"
              }
            ]
          },
          {
            "name": "Meta",
            "news": []
          }
        ]
      },
      "domestic": {
        "vendors": [
          {
            "name": "阿里云",
            "news": [
              {
                "title": "阿里云灵骏真武 M890 超节点上线，可承载十万亿参数模型",
                "time": "8月12日消息",
                "summary": "8月12日消息，阿里云宣布灵骏真武 M890 超节点实例正式上线，首批在乌兰察布开售，是国内首个成功运行超 2 万亿参数大模型的超节点形态算力，单实例最高承载十万亿参数级 MoE 推理。依托平头哥真武 M890 芯片与 ICN Switch 互联，卡间达 800GB/s，Kimi K3 与 Qwen3.8-Max 均已通过该实例对外服务。",
                "link": "https://www.stcn.com/article/detail/4071213.html",
                "tags": [
                  "算力",
                  "云计算"
                ],
                "source": "证券时报"
              },
              {
                "title": "阿里首次开放千问 Max 级权重：Qwen3.8-2.4T-A95B",
                "time": "8月13日消息",
                "summary": "8月13日消息，阿里千问首次将 Max 级旗舰模型开源，正式开放 Qwen3.8-2.4T-A95B 权重。模型总参数 2.4 万亿、每个 Token 仅激活 95B 参数，原生支持 256K 上下文，可扩展至 1M，思考模式默认开启。官方评测显示其在 PaperBench 达 93 分超越 GPT-5.6 Sol、OSworld-Verified 位列第一，性能多项接近 Fable 5，仓库体积约 4.89TB。",
                "link": "https://tech.ifeng.com/c/8vXydmUWHsI",
                "tags": [
                  "开源模型",
                  "千问"
                ],
                "source": "凤凰科技"
              }
            ]
          },
          {
            "name": "火山引擎",
            "news": [
              {
                "title": "豆包推出学生优惠：2.5 倍免费额度，专业版降至 38 元",
                "time": "8月12日消息",
                "summary": "8月12日消息，字节跳动豆包正式上线面向在校大学生的学生优惠。完成学生身份认证后可获得普通用户 2.5 倍免费额度，豆包专业版标准套餐连续包月价格从 68 元降至 38 元。学生可通过豆包电脑端工作任务模式发送指令或从订阅页进入学生权益，身份认证通过抖音账号完成，权益入口目前位于电脑端。",
                "link": "https://m.ithome.com/html/988891.htm",
                "tags": [
                  "定价",
                  "学生优惠"
                ],
                "source": "IT之家"
              }
            ]
          },
          {
            "name": "DeepSeek",
            "news": [
              {
                "title": "DeepSeek V4 Pro 正式版 API 上线，多项测试接近 Fable 5",
                "time": "8月13日消息",
                "summary": "8月13日消息，DeepSeek V4 Pro 正式版发布并更新至 API，调用模型名不变，模型版本为 DeepSeek-V4-Pro-0813。新版本大幅增强 Agent 能力，支持 Responses API 与 Codex 接入，1M 上下文、384K 最大输出。定价为百万 Token 缓存命中 0.025 元、输入 3 元、输出 6 元，相比预览版能力大幅提升，Terminal Bench 达 87.9 分逼近 Fable 5 的 88 分。",
                "link": "https://finance.sina.cn/2026-08-13/detail-ininchpa3517586.d.html",
                "tags": [
                  "模型发布",
                  "API"
                ],
                "source": "新浪财经"
              }
            ]
          },
          {
            "name": "腾讯",
            "news": [
              {
                "title": "腾讯 Q2 资本开支翻倍至 528 亿，混元 Hy4 计划近期发布",
                "time": "8月12日消息",
                "summary": "8月12日消息，腾讯发布 2026 年二季度财报，营收 2047.9 亿元同比增长 11%，资本开支 527.8 亿元同比大增 176%，主要投向 AI 基础设施，若剔除算力采购预付款自由现金流为 376 亿元。混元 Hy3 正式版上线一周调用量较上代增长超 68 倍，更大参数规模的 Hy4 计划近期发布；微信 AI 助手小微灰度测试中，WorkBuddy PC 端 6 月访问量破 2000 万。",
                "link": "https://finance.eastmoney.com/a/202608123839456973.html",
                "tags": [
                  "财报",
                  "大模型"
                ],
                "source": "东方财富"
              },
              {
                "title": "腾讯微信公布 WeLM 模型：80B 已用于小微，617B 开发中",
                "time": "8月13日消息",
                "summary": "8月13日消息，腾讯微信团队公布自研大模型 WeLM 系列，其中 WeLM-80B 总参数 800 亿、激活 30 亿，已应用于微信原生 AI 助手小微，支持对话搜索、操作微信原生功能与调用小程序服务；WeLM-617B 采用 MoE 架构、总参数 6170 亿，正面向智能小程序开发与小微工具生成等复杂任务开发。",
                "link": "https://finance.sina.cn/tech/2026-08-13/detail-ininchpa3516286.d.html",
                "tags": [
                  "大模型",
                  "微信"
                ],
                "source": "新浪财经"
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
            "news": []
          },
          {
            "name": "华为",
            "news": [
              {
                "title": "华为 Haco 发布会定档 9 月 23 日，Mate 90 或首发韬定律芯片",
                "time": "8月12日消息",
                "summary": "8月12日消息，文旅部全国涉外营业性演出活动审批信息显示，华为终端 Haco 发布会助兴演出定于 9 月 23 日在深圳国际会展中心举行，外界普遍认为对应 Mate 90 系列年度旗舰发布会。该机有望首发基于韬定律逻辑折叠技术的麒麟 2026 芯片，晶体管密度提升约 53.5%，等效 3nm 制程水准，是华为绕开先进制程限制的关键一步。",
                "link": "https://www.21jingji.com/article/20260812/herald/ff01259a562993884694f5066625bef6.html",
                "tags": [
                  "芯片",
                  "新品发布"
                ],
                "source": "21世纪经济报道"
              },
              {
                "title": "奕境曾清林：华为智驾依然是行业顶级存在",
                "time": "8月12日消息",
                "summary": "8月12日消息，奕境汽车品牌总经理曾清林发文谈与华为的合作，称无论外界如何拿华为开玩笑，其智驾水平依然是行业顶级存在。他列举华为 896 线激光雷达、ADS 5 系统与 130 亿公里智驾数据积累，强调这些硬技术绝不是随便一个供应商能平替的，并称奕境与华为从全栈原生共创第一天起就没有备胎思维。",
                "link": "https://www.c114.net.cn/industry/110136.html",
                "tags": [
                  "智能驾驶",
                  "华为智驾"
                ],
                "source": "C114通信网"
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
                "title": "小红书",
                "news": [
                  {
                    "title": "小红书打造 AI 导购，对话中直接推送商品卡片",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，据新浪科技报道，小红书正在打造全新 AI 导购功能，依托对话交互模式，在问答场景中直接推送商品卡片并挂载下单跳转链接，由产品负责人道玄主导推进。此举将 AI 能力延伸至交易链路，此前小红书已于 4 月成立 AI 一级部门 Dots 和企业智能部，加速布局 AI 社交产品与社区互动工具。",
                    "link": "https://finance.sina.cn/tech/2026-08-12/detail-ininaezk5222851.d.html",
                    "tags": [
                      "电商",
                      "AI应用"
                    ],
                    "source": "新浪财经"
                  }
                ]
              },
              {
                "title": "三星",
                "news": [
                  {
                    "title": "三星半导体引入 Claude，芯片设计验证从一月缩至两天",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，据韩媒报道，三星电子确认引入 Anthropic 的 Claude 模型与 Claude Code 工具。在一项定制 SoC 功能验证项目中，原本预计耗时一个月以上的工作仅用两天完成，内部评估效率提升约 15 倍；一名入职两年工程师借助 Claude Code 在一天内完成通常需一个月的 USB 设备开发验证。三星正以 AI 压缩重复性开发，缓解与高通约 9 倍的设计人力差距。",
                    "link": "https://wallstreetcn.com/articles/3779271",
                    "tags": [
                      "芯片",
                      "AI应用"
                    ],
                    "source": "华尔街见闻"
                  }
                ]
              },
              {
                "title": "荣耀",
                "news": [
                  {
                    "title": "全球首款机器人手机荣耀 Robot Phone 发布，9999 元起",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，荣耀正式发布全球首款机器人手机 Robot Phone，12GB+512GB 版 9999 元、16GB+1TB 版 12999 元，8 月 18 日首销，预订量已超 40 万台。新机将 4 自由度钛合金机械臂装入机身，搭载 Agentic OS 与首发 YOYO Pro 模式，由阿里千问大模型深度加持，支持跨应用长任务与多模态具身感知，被视为荣耀进军机器人赛道的敲门砖。",
                    "link": "https://news.sina.cn/2026-08-12/detail-ininarqz6646628.d.html",
                    "tags": [
                      "新品发布",
                      "机器人",
                      "AI手机"
                    ],
                    "source": "新浪科技"
                  }
                ]
              },
              {
                "title": "影石",
                "news": [
                  {
                    "title": "影石发布全景相机 X6：AI 三芯架构，3999 元起",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，影石 Insta360 发布新一代超旗舰全景相机 X6，大陆售价 3999 元起。新机采用高通 4nm AI 芯片加两颗专用影像芯片的三芯架构，算力提升 5 倍，支持 8K 50 帧全景视频与 1.2 亿像素全景照片，并首次支持机内原生杜比视界。搭载自研 PanoMind AI 模型，AI 导演功能可自动识别高光片段、生成剪辑，覆盖 71% 全球全景相机市场份额。",
                    "link": "https://www.pingwest.com/w/316390",
                    "tags": [
                      "新品发布",
                      "AI影像"
                    ],
                    "source": "品玩"
                  }
                ]
              },
              {
                "title": "亚马逊",
                "news": [
                  {
                    "title": "Twitch 默认用直播内容训练亚马逊 AI，主播强烈不满",
                    "time": "8月13日消息",
                    "summary": "8月13日消息，Twitch 确认亚马逊一直使用其平台直播内容训练生成式 AI 模型，并新增退出设置但默认处于开启状态，主播需手动关闭。该决定引发社区强烈不满，要求所有 AI 功能默认关闭的帖子获超 1.3 万票支持，近 3000 名用户在官方直播中刷屏抗议。分析指出主播面临接受数据被训练或离开平台的伪选择。",
                    "link": "https://www.ithome.com/0/989/032.htm",
                    "tags": [
                      "AI训练",
                      "数据隐私"
                    ],
                    "source": "IT之家"
                  }
                ]
              },
              {
                "title": "Mistral AI",
                "news": [
                  {
                    "title": "Mistral 平台首次接入第三方模型，首款为智谱 GLM-5.2",
                    "time": "当地时间8月11日",
                    "summary": "当地时间8月11日，Mistral AI 宣布其平台正式支持第三方开放模型，首款接入的是智谱 AI 旗下 GLM-5.2，这是该平台历史上首次接入第三方模型。第三方模型将与第一方模型运行在相同基础设施与区域控制下，同时新增美国或欧洲区域推理负载选择，并启动 Mistral 优先层级公开预览，被业界视为对欧洲主权 AI 定义的重新诠释。",
                    "link": "https://m.ithome.com/html/989031.htm",
                    "tags": [
                      "模型生态",
                      "欧洲AI"
                    ],
                    "source": "IT之家"
                  }
                ]
              },
              {
                "title": "微软",
                "news": [
                  {
                    "title": "微软发布 MAI-Code-1.1-Flash，编程模型价格降至四分之一",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，微软正式将 MAI-Code-1.1-Flash 投入生产，已在 GitHub Copilot 上线。该模型在 Terminal-Bench 2.1 得分提升 22%，.NET 任务提升 15%，推理成本降至 1.0 版本的四分之一（输出每百万 Token 1.2 美元），Token 流式输出提速 25%，并新增原生视觉能力。1380 亿参数稀疏 MoE、每请求激活约 50 亿参数，针对代理式编码与仓库问答调优。",
                    "link": "https://www.pingwest.com/w/316375",
                    "tags": [
                      "编程模型",
                      "Copilot"
                    ],
                    "source": "品玩"
                  }
                ]
              }
            ]
          },
          {
            "name": "自动驾驶",
            "cards": [
              {
                "title": "比亚迪",
                "news": [
                  {
                    "title": "比亚迪 AI 团队首秀 HyWorldVLA，刷新自动驾驶基准纪录",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，比亚迪汽车新技术研究院 AI 团队发布混合世界模型 HyWorldVLA，在自动驾驶基准 NAVSIM v1 上取得 90.59 PDMS 刷新历史最佳，NAVSIM v2 也以 89.71 领先第二名近 1 分。该模型结合像素级与潜在空间世界建模，自研 4nm 车规智驾芯片璇玑 A3 实现算法与芯片闭环，被视为比亚迪 L3 智驾的关键技术储备。",
                    "link": "https://www.c114.net.cn/industry/110372.html",
                    "tags": [
                      "自动驾驶",
                      "世界模型"
                    ],
                    "source": "C114通信网"
                  }
                ]
              }
            ]
          },
          {
            "name": "具身智能",
            "cards": [
              {
                "title": "自变量",
                "news": [
                  {
                    "title": "自变量机器人物流分拣 1816 件/小时，反超 Figure AI",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，深圳具身智能企业自变量机器人完成 1 小时全自主物流分拣直播，以 1816 件/小时效率、98% 准确率超越美国 Figure AI 此前 1248 件/小时的纪录约 45%，且采用双机械臂加标准夹爪方案，成本仅为 Figure AI 约 30%。核心依托自研端到端世界统一模型 WALL-B，验证了不堆硬件、靠具身大脑实现规模化产业落地的路径。",
                    "link": "https://www.qbitai.com/2026/08/471049.html",
                    "tags": [
                      "具身智能",
                      "机器人"
                    ],
                    "source": "量子位"
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
                "title": "面壁智能",
                "news": [
                  {
                    "title": "面壁智能启动 IPO 辅导，估值突破 200 亿元",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，证监会公示显示，北京面壁智能于 8 月 11 日向北京证监局提交 IPO 上市辅导备案，辅导机构为中信证券。面壁智能主打端侧大模型 MiniCPM，全球下载量超 4300 万次，已获 8 轮融资，2026 年上半年累计融资超 50 亿元、估值突破 200 亿元，股东含华为哈勃、智谱、中国电信等，是国内端侧智能领域公开估值最大的独角兽。",
                    "link": "https://finance.eastmoney.com/a/202608123838936567.html",
                    "tags": [
                      "IPO",
                      "端侧大模型"
                    ],
                    "source": "东方财富"
                  }
                ]
              },
              {
                "title": "River AI",
                "news": [
                  {
                    "title": "xAI 联合创始人创办 River AI，获 11 亿美元融资",
                    "time": "8月11日消息",
                    "summary": "8月11日消息，由 xAI 联合创始人伊戈尔·巴布什金创办的初创公司 River AI 宣布完成 11 亿美元融资，覆盖种子轮和 A 轮，General Catalyst 与 AMP PBC 领投，英伟达与 AMD Ventures 跟投，YC 与淡马锡参投。该公司成立仅约两个月、团队约 20 人，主打让企业用自有数据训练专属 AI，其 River API 已上线并投入实际应用，押注个人 AI 与开放模型路线。",
                    "link": "https://www.jiemian.com/article/14909244.html",
                    "tags": [
                      "融资",
                      "开放模型"
                    ],
                    "source": "界面新闻"
                  }
                ]
              },
              {
                "title": "凯文·韦尔",
                "news": [
                  {
                    "title": "前 OpenAI 产品官创业，新 AI 科学公司寻求 7.5 亿美元估值",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，据 Business Insider 报道，前 OpenAI 首席产品官凯文·韦尔正在为新成立的 AI 科学初创公司寻求至少 7.5 亿美元估值，并计划本轮募集 1.5 亿美元。该公司定位为为 AI 模型收集科学数据、将前沿大模型嵌入科学家工作流。消息人士称细节尚未敲定，韦尔未回应置评请求，反映出 AI 前沿正从聊天转向科学发现的趋势。",
                    "link": "https://flash.jin10.com/detail/20260812035315552800",
                    "tags": [
                      "融资",
                      "AI4Science"
                    ],
                    "source": "金十数据"
                  }
                ]
              },
              {
                "title": "中际旭创",
                "news": [
                  {
                    "title": "传英伟达拟 20 亿美元入股中际旭创，两公司紧急回应",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，市场传闻英伟达计划斥 20 亿美元战略入股光模块龙头中际旭创，用于新一代光模块研发与泰国新工厂建设，同时有意任新易盛港股 IPO 基石投资者。对此中际旭创回应表示并不了解，以公告为准；新易盛称不便评论，相关事项以披露公告为准。中际旭创是英伟达 1.6T 光模块核心供应商，当日两股均上涨逾 3%。",
                    "link": "https://finance.eastmoney.com/news/1345,202608123838992246.html",
                    "tags": [
                      "投资传闻",
                      "光模块"
                    ],
                    "source": "东方财富"
                  }
                ]
              },
              {
                "title": "慧仑科技",
                "news": [
                  {
                    "title": "广汽孵化人形机器人公司慧仑科技完成超亿元融资",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，广汽集团孵化的人形机器人公司广东慧仑科技宣布完成超亿元融资，由中车国创基金、招银国际、四川科创等联合投资。资金将投向垂类模型优化、汽车产线与综合服务场景拓展及核心硬件迭代。公司已推出 GoMate、GoMate Mini 等四款产品，GoMate Mini 已落地 7 大项目、部署近 50 台，规划支撑万台级产能。",
                    "link": "https://m.21jingji.com/article/20260812/herald/5def8c1527a1e2412641633b06622d75.html",
                    "tags": [
                      "融资",
                      "人形机器人"
                    ],
                    "source": "21世纪经济报道"
                  }
                ]
              },
              {
                "title": "艾欧智能",
                "news": [
                  {
                    "title": "具身数据基础设施企业艾欧智能完成数亿元融资",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，机器人与具身智能数据基础设施企业艾欧智能宣布完成数亿元融资，由顺为资本、松禾资本、深创投联合投资，并获得头部机器人本体企业战略投资。公司成立腾讯、百度等背景团队，自研遥操作数据采集、人类数据采集与数据管理平台三大产品，已服务全球 150 余家本体企业与模型公司，累计适配 80 余款机器人。",
                    "link": "https://news.pedaily.cn/202608/567593.shtml",
                    "tags": [
                      "融资",
                      "具身智能"
                    ],
                    "source": "投资界"
                  }
                ]
              },
              {
                "title": "梁文锋",
                "news": [
                  {
                    "title": "梁文锋旗下私募拿下宇树网下配售最大份额",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，宇树科技科创板 IPO 网下配售结果出炉，135 家私募旗下 2839 只产品获配，合计约 42.99 亿元。梁文锋实际控制的宁波幻方量化与浙江九章资产以 198 只产品获配约 3893.74 万元，按配售对象计居私募机构首位；叠加 DeepSeek 此前约 1.41 亿元战略配售，梁文锋三家主体合计投入约 1.8 亿元，若宇树首日市值破 3000 亿有望浮盈约 7 亿元。",
                    "link": "https://www.thepaper.cn/newsDetail_forward_33769012",
                    "tags": [
                      "IPO",
                      "打新"
                    ],
                    "source": "澎湃新闻"
                  }
                ]
              },
              {
                "title": "但斌",
                "news": [
                  {
                    "title": "但斌美股持仓大换血：清仓苹果，新进 7 只 AI 硬件股",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，但斌旗下东方港湾海外基金二季度美股持仓大幅调整，清仓苹果、特斯拉、谷歌等 6 只标的，新进英特尔、闪迪、AMD、迈威尔、Arm、博通、Lumentum 等 7 只 AI 硬件股，其中英特尔以约 2.58 亿美元持仓升至第二大重仓股、超越英伟达。整体持仓市值约 16.5 亿美元，环比增约 45.6%。但斌重申 AI 是未来十年超级主线，国内产品保持满仓。",
                    "link": "https://m.21jingji.com/article/20260812/herald/be08b21eb59bb3d1132d23e9a23e9eaf.html",
                    "tags": [
                      "持仓",
                      "AI硬件"
                    ],
                    "source": "21世纪经济报道"
                  }
                ]
              },
              {
                "title": "芝商所",
                "news": [
                  {
                    "title": "芝商所拟推算力期货：追踪英伟达 GPU 租赁价格",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，芝加哥商品交易所宣布与 Silicon Data 合作，拟于 10 月 5 日推出追踪英伟达 H100、B200 GPU 每小时租赁成本的算力期货合约，每份合约代表约 730 GPU-hour 的标准月租赁量，采用现金结算，若落地将成为全球首个算力期货。此举将算力变为可交易的标准大宗商品，为 AI 厂商提供对冲算力成本与价格发现的新工具。",
                    "link": "https://www.weiyangx.com/475073.html",
                    "tags": [
                      "算力",
                      "期货"
                    ],
                    "source": "未央网"
                  }
                ]
              }
            ]
          },
          {
            "name": "行业趋势&观点",
            "cards": [
              {
                "title": "抖音",
                "news": [
                  {
                    "title": "抖音处置台风不实内容 1.28 万条，重点治理 AI 虚构灾害画面",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，抖音发布台风白海豚不实信息治理公告，自 8 月 9 日起累计处置不实内容 12834 条、违规账号 5 个、不实评论 128 条，并上线求真卡汇总权威信息。治理对象包括移花接木、旧闻翻炒、夸大灾情及利用 AI 生成或加工灾害画面等五类内容，平台结合内容识别、画面分析与人工核验处置 AI 伪造灾害场景，提醒用户以气象应急部门预警为准。",
                    "link": "https://finance.sina.cn/2026-08-12/detail-inimzytm3637661.d.html",
                    "tags": [
                      "AI治理",
                      "内容安全"
                    ],
                    "source": "新浪财经"
                  }
                ]
              },
              {
                "title": "狮门影业",
                "news": [
                  {
                    "title": "激进投资者敦促狮门影业拥抱 AI 或考虑出售",
                    "time": "8月11日消息",
                    "summary": "8月11日消息，激进投资机构 Anson Funds 致信狮门影业董事会，要求公司更快转向 AI 或考虑出售。信中认为生成式视频模型正改变市场对传统影视公司的判断，狮门需证明自己能成为 AI 受益者。狮门今年已任命首位首席 AI 官并测试相关工具，管理层强调用 AI 时保护创作者权益，公司表示目前无实质并购谈判。",
                    "link": "https://www.jiemian.com/article/14908376.html",
                    "tags": [
                      "AI转型",
                      "影视行业"
                    ],
                    "source": "界面新闻"
                  }
                ]
              },
              {
                "title": "SAFE 框架",
                "news": [
                  {
                    "title": "英伟达等 120 家组织提议建立 AI 智能体事故追踪机制",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，由英伟达、思科、CrowdStrike 等超 120 家组织组成的开放安全 AI 联盟，提议为 AI 智能体建立标准化安全事故追踪机制 SAFE。草案要求成员在事故后 4 个工作日内提交初步保密报告、90 天内更新修复进展，需保留提示词、智能体运行轨迹等证据，以 NASA 航空安全报告系统为蓝本，并明确意图不能决定事件是否应上报。",
                    "link": "https://m.21jingji.com/article/20260812/herald/a095ab7e976d08605172c2554f8daba2.html",
                    "tags": [
                      "AI安全",
                      "行业治理"
                    ],
                    "source": "21世纪经济报道"
                  }
                ]
              },
              {
                "title": "阿莫迪（Anthropic CEO）",
                "news": [
                  {
                    "title": "Anthropic 上市前夕，投资人不满 CEO 屡谈 AI 毁灭风险",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，据 The Information 报道，Anthropic 预计最快 9 月 IPO、估值约 9650 亿美元，但 CEO 阿莫迪屡次公开警告 AI 可能消灭一半初级白领岗位、将失业率推至 10%-20%，并主张建立航空式监管，令部分投资人不满，希望他少讲 AI 毁灭世界、多讲如何赚钱。阿莫迪坚持安全使命优先，此前甚至拒绝公关团队强化正面宣传的建议，投资者难以左右其决定。",
                    "link": "https://wallstreetcn.com/articles/3779225",
                    "tags": [
                      "AI安全",
                      "IPO"
                    ],
                    "source": "华尔街见闻"
                  }
                ]
              },
              {
                "title": "算力用电",
                "news": [
                  {
                    "title": "报告：2030 年全国算力用电量将达 8000 亿度",
                    "time": "8月12日消息",
                    "summary": "8月12日消息，据行业报告，到 2030 年全国算力用电量预计将达 8000 亿度，届时约 6 万亿度绿电将奔涌入网。随着大模型训练与推理需求快速增长，算力成为电力消耗的重要增量，报告同时关注数据中心绿电消纳与能源结构转型，为算力基础设施建设提供能耗与电网承载的量化参照。",
                    "link": "https://www.ithome.com/0/988/994.htm",
                    "tags": [
                      "算力",
                      "用电",
                      "行业趋势"
                    ],
                    "source": "IT之家"
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
            "date": "2026-07-27",
            "link": "https://lmarena.ai/leaderboard/text",
            "rankings": [
              {
                "model": "Claude Fable 5",
                "score": "1508",
                "change": "+6"
              },
              {
                "model": "Claude Opus 4.6 (Thinking)",
                "score": "1505",
                "change": "+4"
              },
              {
                "model": "Claude Opus 4.7 (Thinking)",
                "score": "1502",
                "change": "+4"
              },
              {
                "model": "Claude Opus 4.6",
                "score": "1497",
                "change": "+4"
              },
              {
                "model": "Claude Opus 5 Max",
                "score": "1495",
                "change": "+12"
              },
              {
                "model": "Claude Opus 4.7",
                "score": "1493",
                "change": "+4"
              },
              {
                "model": "Claude Opus 5 High",
                "score": "1493",
                "change": "+8"
              },
              {
                "model": "Muse Spark 1.1",
                "score": "1491",
                "change": "+7"
              },
              {
                "model": "Muse Spark",
                "score": "1488",
                "change": "+6"
              },
              {
                "model": "Gemini 3.1 Pro Preview",
                "score": "1486",
                "change": "+3"
              },
              {
                "model": "Kimi K3 Max",
                "score": "1486",
                "change": "+10"
              },
              {
                "model": "Gemini 3 Pro",
                "score": "1486",
                "change": "+4"
              },
              {
                "model": "GPT-5.6 Sol XHigh",
                "score": "1485",
                "change": "+7"
              },
              {
                "model": "Claude Opus 4.8 (Thinking)",
                "score": "1484",
                "change": "+5"
              },
              {
                "model": "Gemini 3.6 Flash",
                "score": "1482",
                "change": "+8"
              },
              {
                "model": "GPT-5.5 High",
                "score": "1482",
                "change": "+4"
              },
              {
                "model": "GPT-5.4 High",
                "score": "1477",
                "change": "+4"
              },
              {
                "model": "Gemini 3.5 Flash High",
                "score": "1476",
                "change": "+7"
              },
              {
                "model": "GPT-5.2 Chat Latest",
                "score": "1476",
                "change": "+4"
              },
              {
                "model": "GPT-5.5",
                "score": "1476",
                "change": "+4"
              }
            ]
          },
          {
            "name": "OpenRouter",
            "date": "2026-08-13",
            "link": "https://openrouter.ai/rankings",
            "rankings": [
              {
                "model": "DeepSeek V4 Flash 0731",
                "score": "10.5T tokens",
                "change": "↑123%"
              },
              {
                "model": "Hy3",
                "score": "10.1T tokens",
                "change": "↑89%"
              },
              {
                "model": "DeepSeek V4 Flash 0423",
                "score": "5.3T tokens",
                "change": "↑20%"
              },
              {
                "model": "GPT-5.6 Luna",
                "score": "5.12T tokens",
                "change": "↑45%"
              },
              {
                "model": "MiMo-V2.5",
                "score": "4.64T tokens",
                "change": "↑11%"
              },
              {
                "model": "GLM 5.2",
                "score": "3.65T tokens",
                "change": "↑22%"
              },
              {
                "model": "DeepSeek V4 Pro",
                "score": "2.66T tokens",
                "change": "↑5%"
              },
              {
                "model": "Nemotron 3 Ultra (free)",
                "score": "2.16T tokens",
                "change": "↑7%"
              },
              {
                "model": "Gemini 3.6 Flash",
                "score": "2.09T tokens",
                "change": "↑80%"
              },
              {
                "model": "Laguna S 2.1 (free)",
                "score": "1.71T tokens",
                "change": "↑3%"
              },
              {
                "model": "MiniMax M3",
                "score": "1.69T tokens",
                "change": "↑12%"
              },
              {
                "model": "Kimi K3",
                "score": "1.42T tokens",
                "change": "↑2%"
              },
              {
                "model": "Claude Opus 5",
                "score": "1.36T tokens",
                "change": "↑29%"
              },
              {
                "model": "Step 3.7 Flash",
                "score": "1.24T tokens",
                "change": "↑23%"
              },
              {
                "model": "Claude Sonnet 5",
                "score": "1.04T tokens",
                "change": "↑1%"
              },
              {
                "model": "Gemini 3 Flash Preview",
                "score": "898B tokens",
                "change": "↑8%"
              },
              {
                "model": "Claude Sonnet 4.6",
                "score": "840B tokens",
                "change": "↑16%"
              },
              {
                "model": "GPT-5.6 Terra",
                "score": "819B tokens",
                "change": "↑43%"
              },
              {
                "model": "GPT-5.6 Sol",
                "score": "653B tokens",
                "change": "↑44%"
              },
              {
                "model": "Gemini 2.5 Flash Lite",
                "score": "627B tokens",
                "change": "↑2%"
              }
            ]
          },
          {
            "name": "Product Hunt",
            "date": "2026-07-31",
            "link": "https://www.producthunt.com/",
            "rankings": [
              {
                "name": "MiniMax H3",
                "category": "Design Tools",
                "rank": 1,
                "link": "https://www.minimax.io"
              },
              {
                "name": "Cleanlist AI",
                "category": "Sales",
                "rank": 2,
                "link": "https://www.cleanlist.ai"
              },
              {
                "name": "metrics",
                "category": "Mac",
                "rank": 3,
                "link": "https://github.com/mxcl/metrics"
              },
              {
                "name": "Poth Labs",
                "category": "Customer Success",
                "rank": 4,
                "link": "https://www.pothlabs.com"
              },
              {
                "name": "DepthData",
                "category": "Analytics",
                "rank": 5,
                "link": "https://www.depthdata.com"
              },
              {
                "name": "Halo by Scam AI",
                "category": "Meetings",
                "rank": 6,
                "link": "https://www.producthunt.com"
              },
              {
                "name": "witr",
                "category": "Linux",
                "rank": 7,
                "link": "https://www.producthunt.com"
              },
              {
                "name": "Customer.io Summer Release",
                "category": "Email",
                "rank": 8,
                "link": "https://customer.io"
              },
              {
                "name": "Screencap",
                "category": "Productivity",
                "rank": 9,
                "link": "https://www.producthunt.com"
              },
              {
                "name": "Gemini Robotics 2",
                "category": "Robots",
                "rank": 10,
                "link": "https://deepmind.google"
              },
              {
                "name": "TraceLLM",
                "category": "Open Source",
                "rank": 11,
                "link": "https://www.producthunt.com"
              },
              {
                "name": "Mubert API",
                "category": "Music",
                "rank": 12,
                "link": "https://mubert.com"
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
