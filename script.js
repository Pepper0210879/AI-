// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
