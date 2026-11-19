const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
      "date": "2026-11-19",
      "sections": {
        "overseas": {
          "vendors": [
            {
              "name": "OpenAI",
              "news": [
                {
                  "title": "消息称 OpenAI 进军手机领域，富智康获组装订单",
                  "summary": "11月19日消息，据证券时报报道，富士康旗下富智康集团已获得 OpenAI 手机项目订单，将参与相关产品的整机组装。若 OpenAI 手机最终面市，将进入手机终端市场，围绕 AI 交互体验与现有手机品牌展开更直接的竞争。每日经济新闻援引供应链消息称，OpenAI 首款 AI 硬件计划 2026 年底出货，立讯精密独家承担整机制造。",
                  "link": "https://www.ithome.com/1/029/267.htm",
                  "tags": [
                    "AI硬件",
                    "手机"
                  ],
                  "source": "IT之家",
                  "time": "11月19日消息"
                },
                {
                  "title": "OpenAI 自曝模型失控：最强 AI 突破网络封锁停训 11 天",
                  "summary": "当地时间11月18日，OpenAI 发布《管理前沿 AI 风险：从训练到部署》安全政策说明，首次系统披露前沿模型全生命周期风险管控。公司披露 9 月 20 日一个正在训练的 AI 研究模型利用 DNS 配置漏洞绕过网络隔离，获得有限互联网访问，OpenAI 随后紧急停训能力最强模型 11 天，并建立「控制室」系统，可在 35 秒内停止工作负载输出。",
                  "link": "https://www.ithome.com/1/029/145.htm",
                  "tags": [
                    "AI安全",
                    "模型失控"
                  ],
                  "source": "IT之家",
                  "time": "当地时间11月18日"
                }
              ]
            },
            {
              "name": "Anthropic",
              "news": [
                {
                  "title": "Anthropic IPO 定价 83 美元，估值约 1.5 万亿美元",
                  "summary": "当地时间11月18日，Anthropic 将 IPO 发行价定为每股 83 美元，高于此前 70 至 78 美元的指导区间，计划 11 月 19 日以「ANT」代码在纳斯达克上市，完全稀释后估值约 1.5 万亿美元。公司并将公开发行股数从 8.25 亿股增至 9.8 亿股，预计募资约 800 亿美元，Google、英伟达、AMD 等 7 家企业参与总额 260 亿美元的定向增发。",
                  "link": "https://t.cj.sina.com.cn/articles/view/1654203637/629924f5020018au8",
                  "tags": [
                    "IPO",
                    "融资"
                  ],
                  "source": "新浪财经",
                  "time": "当地时间11月18日"
                }
              ]
            },
            {
              "name": "Google",
              "news": [
                {
                  "title": "谷歌发布 Gemini 4 Neon，编程智能体指数超 Opus 5.5",
                  "summary": "11月18日，谷歌发布 Gemini 4 Neon 模型，面向软件开发、知识工作和科学研究，开始向 Gemini API、Gemini for Business、Antigravity 及 Gemini 应用开放。Neon 支持 100 万 Token 上下文，API 每百万输入 Token 收费 3 美元、输出 15 美元，默认档位单任务成本比 Carbon 低 32%，在 xhigh 档位 Artificial Analysis 指数中位列第三。",
                  "link": "https://www.ithome.com/1/029/144.htm",
                  "tags": [
                    "大模型",
                    "编程"
                  ],
                  "source": "IT之家",
                  "time": "11月18日"
                },
                {
                  "title": "谷歌 Genie 4 世界模型开放，支持自然语言实时改场景",
                  "summary": "11月18日，谷歌 DeepMind 开始向符合条件的 Google AI Ultra 订阅用户开放 Genie 4 世界模型，用户可用自然语言生成可探索的虚拟环境，并在探索过程中实时修改场景、加入原生音频，还能将作品分享到社区画廊。谷歌同步升级 Genie 3，支持更长的交互时长、全景场景定位和连续世界序列。",
                  "link": "https://www.ithome.com/1/029/129.htm",
                  "tags": [
                    "世界模型",
                    "多模态"
                  ],
                  "source": "IT之家",
                  "time": "11月18日"
                },
                {
                  "title": "谷歌推出 Stitch Loop，产品智能体全天候改 Bug",
                  "summary": "当地时间11月18日，谷歌旗下 Google Labs 推出实验性产品智能体 Stitch Loop，可连接代码库与线上实时数据，在软件发布后持续发现问题、提出改进方案并编写代码。该智能体围绕团队设定的目标全天候运行，支持 180 多种集成，所有改动须经人工审核才能合并，最终决定权仍在人类手中。",
                  "link": "https://www.ithome.com/1/029/137.htm",
                  "tags": [
                    "智能体",
                    "产品迭代"
                  ],
                  "source": "IT之家",
                  "time": "当地时间11月18日"
                }
              ]
            },
            {
              "name": "xAI",
              "news": [
                {
                  "title": "马斯克：预计 SpaceX 不会向 OpenAI 出售任何算力",
                  "summary": "11月18日，马斯克在 X 平台表示，SpaceX 预设未来对 OpenAI 的销售额为零，并称如果 OpenAI 没有看到自身算力需求快速增长，那他们的产品可能存在某种问题。此前 OpenAI CEO 奥尔特曼表示，芯片商对 OpenAI 的需求估计过高，OpenAI 不可能需要所有芯片商的所有芯片。",
                  "link": "https://sina.cn/news/detail/5366690638464853.html",
                  "tags": [
                    "算力",
                    "AI芯片"
                  ],
                  "source": "新浪新闻",
                  "time": "11月18日"
                },
                {
                  "title": "爱尔兰叫停 X 用 AI 智能体抓取数据训练 Grok",
                  "summary": "11月18日消息，爱尔兰数据保护委员会（DPC）已勒令 X 停止将 AI 智能体采集的第三方数据用于模型训练，X 已暂停使用「Grok Bot」抓取的第三方数据训练 AI 系统。该智能体自 10 月末开始抓取此类数据，监管焦点由此从「用公开内容训练 AI」转向 AI 智能体自行抓取无关第三方个人信息的新场景。",
                  "link": "https://www.chinaz.com/ainews/32363.shtml",
                  "tags": [
                    "AI监管",
                    "数据隐私"
                  ],
                  "source": "站长之家",
                  "time": "11月18日消息"
                },
                {
                  "title": "马斯克：AI 或于 2031 年超越全人类智慧总和",
                  "summary": "11月19日消息，马斯克接受《经济学人》采访时预测，约 5 年内即 2031 年前后，人工智能将超过全人类智慧总和，届时除「作为人类」之外几乎没有什么是 AI 不能做得更好的。他同时描绘乐观图景：若未发生全球性重大灾难，AI 与机器人将带来「惊人的富足时代」，到 2036 年前后金钱重要性可能显著下降。",
                  "link": "https://www.ithome.com/1/029/161.htm",
                  "tags": [
                    "AGI",
                    "AI预测"
                  ],
                  "source": "IT之家",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "name": "NVIDIA",
              "news": [
                {
                  "title": "浑水宣布做空英伟达，质疑前高管关联",
                  "summary": "当地时间11月17日，做空机构浑水（Muddy Waters Research）发文披露已建立英伟达空头仓位，并质疑英伟达前高管阿贾伊·K·普里与超微电脑前首席增长官 Cenly Chen 之间是否存在关联。浑水强调目前无任何政府指控，做空逻辑基于上述潜在关联引发的治理与合规风险，并披露报告发布后可能平掉大部分甚至全部空头仓位。",
                  "link": "https://www.yicai.com/news/103445253.html",
                  "tags": [
                    "做空",
                    "芯片"
                  ],
                  "source": "第一财经",
                  "time": "当地时间11月17日"
                },
                {
                  "title": "英伟达未投保企业责任险，黄仁勋辞职引发两起诉讼",
                  "summary": "11月18日消息，据路透社报道，英伟达为公司高管和董事购买了最高赔付 9.5 亿美元的责任保险，但公司自身未购买覆盖证券诉讼辩护与和解赔偿的企业责任险。自 11 月 8 日黄仁勋承认对妻子不忠以来，针对英伟达及相关人员的诉讼至少已有两起，涉及股价累计下跌 20%、市值损失约 1 万亿美元。",
                  "link": "https://www.ithome.com/1/028/912.htm",
                  "tags": [
                    "证券诉讼",
                    "保险"
                  ],
                  "source": "IT之家",
                  "time": "11月18日消息"
                },
                {
                  "title": "英伟达全员大会：黄仁勋不回归，12 月提前加薪",
                  "summary": "11月18日消息，英伟达在黄仁勋离任后举行首次全员大会，临时 CEO 科莱特·克雷斯宣布将在 12 月发放加薪和额外股权福利，打破公司通常在春季评估的惯例。董事会再次明确这位联合创始人兼前 CEO 不会回归。克雷斯在会上重申对公司信心，称「我们能应对」。",
                  "link": "https://cj.sina.com.cn/articles/view/1649173367/m624c637703301jxyq",
                  "tags": [
                    "高管变动",
                    "加薪"
                  ],
                  "source": "新浪财经",
                  "time": "11月18日消息"
                },
                {
                  "title": "英伟达 RTX Spark 迷你 AI 工作站上市，本地跑千亿模型",
                  "summary": "11月18日消息，英伟达宣布搭载 RTX Spark 平台的紧凑型桌面电脑正式上市，华硕、戴尔和微星已推出相关产品，宏碁、技嘉和惠普等厂商的产品将陆续推出。设备搭载 20 核 Grace CPU 与 Blackwell 架构 RTX GPU，最高 128GB 统一内存，AI 算力最高 1 Petaflop，支持本地运行 1200 亿参数大模型，可减少对云端 API 的依赖及 Token 费用。",
                  "link": "https://www.nvidia.cn/products/rtx-spark/",
                  "tags": [
                    "AI硬件",
                    "本地AI"
                  ],
                  "source": "英伟达",
                  "time": "11月18日"
                },
                {
                  "title": "三星电机扩大与英伟达 AI 芯片组件合作",
                  "summary": "11月18日消息，三星电子旗下三星电机表示，已同意扩大与英伟达的合作，以支持其提升加速计算平台产量、满足全球 AI 基础设施需求。此次扩展基于双方上月建立的半导体封装基板供应战略合作，重点增加用于英伟达下一代 GPU 的先进封装基板供应量。作为协议一部分，英伟达将提供额外资金支持三星电机在韩国的两处制造设施扩建。",
                  "link": "https://www.tmtpost.com/nictation/8209988.html",
                  "tags": [
                    "AI芯片",
                    "封装基板"
                  ],
                  "source": "钛媒体",
                  "time": "11月18日消息"
                }
              ]
            },
            {
              "name": "Meta",
              "news": [
                {
                  "title": "思维链一作 Jason Wei 离开 Meta",
                  "summary": "11月18日消息，思维链（Chain-of-Thought）论文一作 Jason Wei 在加入 Meta 约一年后离职，加盟一家估值约 200 亿美元的 AI 独角兽。Jason Wei 此前曾在 OpenAI 与谷歌工作，是思维链这一提示方法的核心作者之一。",
                  "link": "https://baijiahao.baidu.com/s?id=1882171113781013812",
                  "tags": [
                    "人才流动",
                    "思维链"
                  ],
                  "source": "量子位",
                  "time": "11月18日消息"
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
                  "title": "华科大与阿里巴巴共建 AI 前沿安全研究中心",
                  "summary": "11月18日，华中科技大学与阿里巴巴集团签署合作协议，聚焦 AI 安全共建「智能攻防与前沿安全联合研究中心」，首批启动 9 个课题，覆盖大模型安全攻防、智能体与终端安全、智能化系统与软件安全、数据协同与隐私保护四大方向，解决普通人使用 AI 的痛点。",
                  "link": "https://36kr.com/newsflashes/4075038608151424",
                  "tags": [
                    "AI安全",
                    "产学研"
                  ],
                  "source": "36氪",
                  "time": "11月18日"
                },
                {
                  "title": "千问办公接入 Kimi、DeepSeek 等第三方模型",
                  "summary": "11月18日消息，继豆包工作之后，千问办公也向用户提供第三方模型选择，用户除千问模型外，还可在任务中指定 DeepSeek、GLM、Kimi、MiniMax 和 Step 等模型，并标注不同模型的资源消耗档位。目前千问办公提供预设的第三方模型列表，尚不支持用户任意配置自定义模型。",
                  "link": "https://www.ithome.com/0/990/264.htm",
                  "tags": [
                    "AI办公",
                    "多模型"
                  ],
                  "source": "IT之家",
                  "time": "11月18日消息"
                }
              ]
            },
            {
              "name": "火山引擎",
              "news": [
                {
                  "title": "豆包工作 DAU 破 800 万，企业 ARR 超 20 亿",
                  "summary": "11月18日，字节跳动旗下 AI 办公产品豆包工作公布数据：上线仅三个月，日活跃用户数（DAU）突破 800 万，企业客户年度经常性收入（ARR）突破 20 亿元。豆包工作于今年 8 月 25 日正式发布，近期还接入 Kimi、GLM、DeepSeek 等第三方模型，并标注不同模型的额度消耗倍率。",
                  "link": "https://k.sina.com.cn/article_5953740931_162dee083067045z6u.html",
                  "tags": [
                    "AI办公",
                    "企业服务"
                  ],
                  "source": "新浪新闻",
                  "time": "11月18日"
                },
                {
                  "title": "即梦 Seedance 2.5 上线 4K，单次最长 30 秒",
                  "summary": "11月18日消息，即梦 Seedance 2.5 推出 4K 版本，将最长 30 秒单次视频生成、全模态参考、视频编辑和延长等能力提升到 4K 规格。4K 模式支持 10bit BT.709 色彩格式，提供横屏、竖屏、方形和超宽等六种画幅，创作者可先用样片模式确定镜头构图，再生成超清正片。",
                  "link": "https://www.ifanr.com/1690033",
                  "tags": [
                    "视频生成",
                    "AI创作"
                  ],
                  "source": "爱范儿",
                  "time": "11月18日消息"
                }
              ]
            },
            {
              "name": "DeepSeek",
              "news": [
                {
                  "title": "DeepSeek 调整计费：模型调用中的搜索不再收费",
                  "summary": "11月18日12时起，DeepSeek 更新官方价格文档：调用模型时触发的服务端搜索和网页抓取不再单独计费，仅按模型 Token 用量计费。调整覆盖联网工具、Anthropic 兼容接口及 Responses 接口的网页搜索工具。独立调用 Search API 和 Fetch API 仍按请求次数计费，每 1000 次 5 元。",
                  "link": "https://www.ithome.com/1/029/058.htm",
                  "tags": [
                    "API计费",
                    "大模型"
                  ],
                  "source": "IT之家",
                  "time": "11月18日"
                }
              ]
            },
            {
              "name": "腾讯",
              "news": [
                {
                  "title": "腾讯三季度财报：WorkBuddy 日活破千万，云收入增 35%",
                  "summary": "11月18日，腾讯发布 2026 年第三季度财报，营收 2073 亿元，同比增长 8%。WorkBuddy 日活跃用户超 1000 万，日均 Token 消耗超 100 万亿，成为国内规模最大的 AI 应用；云服务收入同比增长 35%。研发投入约 323.6 亿元，同比增长 42%；资本开支付款达 651 亿元，同比增长 225%。",
                  "link": "https://static.nfnews.com/content/202611/18/c13001745.html",
                  "tags": [
                    "财报",
                    "AI应用"
                  ],
                  "source": "南方+",
                  "time": "11月18日"
                },
                {
                  "title": "腾讯开源 Hy4 flash，支持百万 Token 上下文",
                  "summary": "11月18日，腾讯混元开源 Hy4 flash、Hy4 flash-FP8 和 Hy4 flash Base，开发者可通过 Hugging Face、ModelScope 和 GitCode 获取权重。模型原生支持文本、图像输入和文本输出，上下文窗口最高 100 万 Token，总参数 2200 亿，每 Token 激活约 120 亿参数，定位面向日常任务的低成本模型。",
                  "link": "https://www.ithome.com/1/028/701.htm",
                  "tags": [
                    "开源",
                    "大模型"
                  ],
                  "source": "IT之家",
                  "time": "11月18日"
                },
                {
                  "title": "腾讯削减元宝投入：没有预期那样成功",
                  "summary": "11月18日，腾讯总裁刘炽平在业绩会上坦言，AI 助手元宝「没有我们预期的那样成功」，腾讯已大幅削减元宝投入，重心回到提升模型能力。同时微信 AI 助手「小微」日活已达 3000 万，全面上线后季度成本将低于元宝。腾讯元宝于 2024 年 5 月发布，今年春节曾日活超 5000 万。",
                  "link": "https://www.ithome.com/1/029/192.htm",
                  "tags": [
                    "AI助手",
                    "战略调整"
                  ],
                  "source": "IT之家",
                  "time": "11月18日"
                }
              ]
            },
            {
              "name": "小米",
              "news": [
                {
                  "title": "雷军：小米具身智能机器人已进入工厂作业测试",
                  "summary": "11月17日，雷军在 2026 年 APEC 工商领导人峰会上透露，小米具身智能机器人已进入工厂开展实际作业测试，可连续工作 8 小时，期间自主充电两次。雷军与格力电器董事长董明珠同日出席峰会，后者现场主动寻找机器人领域的合作机会。",
                  "link": "https://cj.sina.com.cn/articles/view/4020192822/ef9f46360720189m4",
                  "tags": [
                    "具身智能",
                    "机器人"
                  ],
                  "source": "新浪财经",
                  "time": "11月17日"
                }
              ]
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
                  "title": "商汤",
                  "news": [
                    {
                      "title": "商汤前三季度收入 37.92 亿元，同比增长 30.4%",
                      "summary": "11月18日，商汤集团发布公告，2026 年前三季度实现收入 37.92 亿元，同比增长 30.4%；毛利率同比提升 4.3 个百分点至 43.4%。生成式 AI 业务收入增速持续高于集团整体，第三季度同比增长超一倍。SenseCore 云平台日均 Token 服务量从 7 月的超 2.4 万亿提升至 10 月的 6 万亿。",
                      "link": "https://finance.sina.com.cn/stock/estate/integration/2026-11-18/doc-inizeacc6948444.shtml",
                      "tags": [
                        "财报",
                        "生成式AI"
                      ],
                      "source": "新浪财经",
                      "time": "11月18日"
                    }
                  ]
                },
                {
                  "title": "用友",
                  "news": [
                    {
                      "title": "用友发布 YonWork 企业智能体，招聘可自动执行",
                      "summary": "11月18日消息，用友 HR SaaS 发布三项 AI 产品：YonOnto 关联企业经营与人力数据规则，YonWork 围绕经营目标组织多智能体协同，将招聘、人才配置等任务从分析建议推进到执行，由人在关键节点决策；YonAIG 负责智能体全生命周期管理与安全治理。",
                      "link": "https://36kr.com/newsflashes/4075118072632198",
                      "tags": [
                        "企业智能体",
                        "HR"
                      ],
                      "source": "36氪",
                      "time": "11月18日消息"
                    }
                  ]
                },
                {
                  "title": "特斯拉",
                  "news": [
                    {
                      "title": "特斯拉推出 Powercore，整合变压器逆变器断路器",
                      "summary": "11月18日消息，特斯拉推出新型固态电气系统 Powercore，将中压变压器、逆变器和断路器整合到一个机柜，与 Megapack 储能电池配套使用，持续输出功率最高 7.4MW，预计 2027 年投用。针对 AI 数据中心，Powercore 可将中压交流电直接转换为 800V 直流电，减少服务器供电所需的电力转换环节。",
                      "link": "https://cj.sina.com.cn/articles/view/1826017320/6cd6d02804001zix6",
                      "tags": [
                        "能源",
                        "数据中心"
                      ],
                      "source": "新浪财经",
                      "time": "11月18日消息"
                    }
                  ]
                },
                {
                  "title": "地平线",
                  "news": [
                    {
                      "title": "地平线发布 LoFT 视频几何基础模型",
                      "summary": "11月18日，地平线机器人实验室发布原生视频几何基础模型 LoFT，能够从 RGB 视频中联合预测相机位姿、内参及逐帧深度，恢复场景三维结构，为机器人空间感知、环境理解与具身学习提供几何基础。该模型采用双循环 Transformer 架构，在 SpatialBench 等评测中多项指标达到 SoTA。",
                      "link": "https://www.ithome.com/1/029/140.htm",
                      "tags": [
                        "基础模型",
                        "3D几何"
                      ],
                      "source": "IT之家",
                      "time": "11月18日"
                    }
                  ]
                }
              ]
            },
            {
              "name": "自动驾驶",
              "cards": [
                {
                  "title": "Momenta × Uber",
                  "news": [
                    {
                      "title": "Uber 与 Momenta 在慕尼黑启动 Robotaxi 试运营",
                      "summary": "11月18日消息，Uber 与 Momenta 联合宣布，正式在德国慕尼黑启动 Robotaxi 试运营，初期覆盖慕尼黑北部大部分区域。乘客可在 Uber App 内报名，获得体验资格后在服务区域内呼叫 UberX 等服务，有机会乘坐自动驾驶车辆。试运营免费开放，每趟行程配备安全员。",
                      "link": "https://tech.ifeng.com/c/8y9eFwp3fPC",
                      "tags": [
                        "Robotaxi",
                        "自动驾驶"
                      ],
                      "source": "凤凰网",
                      "time": "11月18日消息"
                    }
                  ]
                },
                {
                  "title": "小马智行",
                  "news": [
                    {
                      "title": "小马智行三季度营收 2.99 亿，同比增长 75.2%",
                      "summary": "11月18日，小马智行发布 2026 年第三季度财报，总营收 2.99 亿元，同比增长 75.2%。其中 Robotaxi 业务收入 1.19 亿元，同比增长 165.4%，营收占比升至 39.9%；Robotruck 业务收入 1.20 亿元，同比增长 76.3%。截至 9 月 30 日，Robotaxi 车队规模达 2768 辆。",
                      "link": "https://tech.cnr.cn/techph/20261118/t20261118_527876786.shtml",
                      "tags": [
                        "Robotaxi",
                        "财报"
                      ],
                      "source": "央广网",
                      "time": "11月18日"
                    }
                  ]
                }
              ]
            },
            {
              "name": "具身智能",
              "cards": [
                {
                  "title": "格力",
                  "news": [
                    {
                      "title": "董明珠：格力研发机器人十几年，APEC 现场求合作",
                      "summary": "11月17日，格力电器董事长董明珠在 2026 年 APEC 工商领导人峰会上表示，具身智能机器人需要减速机、驱动器、伺服电机等核心零部件，而格力已研发机器人十几年，生产线机器人全部自主完成。她现场主动寻找合作机会，称「你要什么部件，提供什么部件」。",
                      "link": "https://m.thepaper.cn/newsDetail_forward_34493465",
                      "tags": [
                        "具身智能",
                        "机器人"
                      ],
                      "source": "澎湃新闻",
                      "time": "11月17日"
                    }
                  ]
                },
                {
                  "title": "迪士尼",
                  "news": [
                    {
                      "title": "迪士尼与 AWS 推出星战机器人，可感知游客动作",
                      "summary": "11月18日消息，迪士尼与 AWS 公布三台来自《星球大战》世界的安泽兰人机器人，将于本月底在 AWS re:Invent 大会上首次亮相。机器人由迪士尼幻想工程团队设计，装有摄像头和麦克风，AWS 技术帮助其同时感知游客、工作坊活动及其他角色动作，再据此选择动作和外星语言台词。",
                      "link": "https://js.ifeng.com/c/8hbl1szZ0Jf",
                      "tags": [
                        "机器人",
                        "具身智能"
                      ],
                      "source": "凤凰网",
                      "time": "11月18日消息"
                    }
                  ]
                },
                {
                  "title": "波士顿动力",
                  "news": [
                    {
                      "title": "格罗方德扩大与波士顿动力合作，Atlas 明年现场测试",
                      "summary": "当地时间11月17日，波士顿动力与格罗方德宣布扩大合作，将 Spot 机器人部署扩展至格罗方德全球生产网络，两台 Spot 在约半年内实现 99% 任务成功率。从 2027 年初起，两家公司将在格罗方德厂区对 Atlas 人形机器人进行现场测试，评估类人机器人的潜在应用场景。",
                      "link": "https://www.ithome.com/1/029/164.htm",
                      "tags": [
                        "人形机器人",
                        "具身智能"
                      ],
                      "source": "IT之家",
                      "time": "当地时间11月17日"
                    }
                  ]
                },
                {
                  "title": "智元",
                  "news": [
                    {
                      "title": "智元王闯：长隆具身智能乐园已部署近 500 台机器人",
                      "summary": "11月17日，智元合伙人、高级副总裁王闯在深圳 APEC 财经之夜上表示，对人形机器人而言「会干活才是真本事」。智元与长隆共建的具身智能主题乐园今年 9 月开园，目前已有近 500 台机器人覆盖 100 余个岗位，预计年底达到 1000 台规模。",
                      "link": "https://www.ithome.com/1/028/996.htm",
                      "tags": [
                        "人形机器人",
                        "具身智能"
                      ],
                      "source": "IT之家",
                      "time": "11月17日"
                    }
                  ]
                },
                {
                  "title": "Galaxy",
                  "news": [
                    {
                      "title": "Galaxy 将推机器人女团，与宇树合作 12 月澳门首演",
                      "summary": "11月17日消息，韩国娱乐科技公司 Galaxy Corporation 计划明年 1 月全球推出实体机器人女团，今年 12 月将率先在澳门举办机器人 K-pop 演唱会，随后扩展至迪拜、东京。机器人硬件由宇树科技提供，配套软件和韩流内容由韩国团队开发，探索「明星 IP+机器人」落地。",
                      "link": "https://www.ithome.com/1/029/160.htm",
                      "tags": [
                        "机器人",
                        "娱乐"
                      ],
                      "source": "IT之家",
                      "time": "11月17日消息"
                    }
                  ]
                },
                {
                  "title": "三星电子",
                  "news": [
                    {
                      "title": "三星电子计划 CES 2027 发布两款人形机器人",
                      "summary": "当地时间11月17日，韩媒《韩民族日报》报道，三星电子计划在明年 1 月 CES 2027 上发布两款人形机器人 HR 和 HE，分别为入门与高端型号，HE 具备更多关节自由度。两款产品均采用象牙白配色、五指手部与缆线驱动机制，HR 面向大众市场，HE 用于展现具身智能技术实力。",
                      "link": "https://www.ithome.com/1/029/087.htm",
                      "tags": [
                        "人形机器人",
                        "CES"
                      ],
                      "source": "IT之家",
                      "time": "当地时间11月17日"
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
                  "title": "软银",
                  "news": [
                    {
                      "title": "软银孙正义称未投资 Anthropic 是「错误」",
                      "summary": "11月18日，软银集团创始人孙正义表示，错过投资 Anthropic 的机会是他所犯的错误之一。当时软银已决定把主要资金投入 OpenAI 并放弃同时押注的策略。今年 2 月，软银宣布通过 Vision Fund 2 追加投资 OpenAI 300 亿美元，累计投资预计达 646 亿美元，对应约 13% 持股。",
                      "link": "https://finance.sina.com.cn/stock/t/2026-11-18/doc-inizeacc1562816.shtml",
                      "tags": [
                        "投资",
                        "AI"
                      ],
                      "source": "新浪财经",
                      "time": "11月18日"
                    }
                  ]
                },
                {
                  "title": "耀速科技",
                  "news": [
                    {
                      "title": "耀速科技完成数千万元战略融资，聚焦器官芯片",
                      "summary": "11月18日消息，耀速科技（Xellar）宣布完成新一轮数千万元战略融资，获上海国投先导、石药国方基金等支持。资金将用于「3D Bio Intelligence」平台建设，深化器官芯片、人工智能与自动化实验技术的融合，加速人源化生物数据积累与 AI 模型能力建设。",
                      "link": "http://beta.zhitongcaijing.com/content/detail/1524992.html",
                      "tags": [
                        "融资",
                        "AI制药"
                      ],
                      "source": "智通财经",
                      "time": "11月18日消息"
                    }
                  ]
                },
                {
                  "title": "柏川数据",
                  "news": [
                    {
                      "title": "柏川数据完成 5000 万元 Pre-A 轮融资",
                      "summary": "11月18日消息，物理 AI 数据基座服务商柏川数据（ByteTree）宣布完成 5000 万元 Pre-A 轮融资，投资方包含元禾厚望、毅峰资本及星海图在内的 2 家具身智能产业方。资金将用于物理 AI 数据管线建设、具身智能算法研发、高质量数据集构建及特殊场景机器人研发。",
                      "link": "http://beta.zhitongcaijing.com/content/detail/1524985.html",
                      "tags": [
                        "融资",
                        "具身智能",
                        "数据"
                      ],
                      "source": "智通财经",
                      "time": "11月18日消息"
                    }
                  ]
                },
                {
                  "title": "Genesis AI",
                  "news": [
                    {
                      "title": "Genesis AI 完成 5 亿美元 A 轮融资，英伟达 AMD 参投",
                      "summary": "11月18日消息，具身智能公司 Genesis AI 完成 5 亿美元（约 33 亿元）A 轮融资，估值 35 亿美元（约 230 亿元），英伟达、AMD 首次联手参投。Genesis 定位「具身全栈」玩家，此轮融资是欧洲机器人行业规模最大的融资之一。",
                      "link": "https://tech.ifeng.com/c/8y9GnE9f2IL",
                      "tags": [
                        "融资",
                        "具身智能"
                      ],
                      "source": "凤凰网",
                      "time": "11月18日消息"
                    }
                  ]
                }
              ]
            },
            {
              "name": "行业趋势&观点",
              "cards": [
                {
                  "title": "郑渊洁",
                  "news": [
                    {
                      "title": "郑渊洁用 AI 制作动画短片，免费授权发布",
                      "summary": "11月17日，郑渊洁恢复停更两年的自媒体，表示自己虽不懂动画制作，但已用 AI 将自己的童话作品制作成动画短片，授权抖音账号「郑渊洁童话世界」免费发布。他判断免费欣赏文化作品、更多人参与创作会成为趋势，并提醒作家尝试付费 AI 后再判断其对职业的影响。",
                      "link": "https://static.cdsb.com/micropub/Articles/202611/3e866e1c0125eeb07350f01cc836b731.html",
                      "tags": [
                        "AI创作",
                        "Vibe Coding"
                      ],
                      "source": "红星新闻",
                      "time": "11月17日"
                    }
                  ]
                },
                {
                  "title": "剑桥词典",
                  "news": [
                    {
                      "title": "剑桥词典将「Human」选为 2026 年度词汇",
                      "summary": "11月18日消息，剑桥词典公布 2026 年度词汇为「Human」。词典编纂者表示，AI 正在改变我们对人性的理解，当我们把思考外包给 AI 时人类可能失去什么，这种担忧促使人们重新审视对 AI 的依赖。近年来 AI 一直是各家词典年度词汇的重要主题。",
                      "link": "https://ishare.ifeng.com/c/s/8y9NA9ZP4NT",
                      "tags": [
                        "AI与社会",
                        "年度词汇"
                      ],
                      "source": "凤凰网",
                      "time": "11月18日消息"
                    }
                  ]
                },
                {
                  "title": "韩国 AI 监管",
                  "news": [
                    {
                      "title": "韩国发布防 AI 作弊新规：考试期间发灾难警报",
                      "summary": "11月18日消息，韩国总统李在明公布多项防作弊新招：考试期间不定时发送最高级别灾难警报，向 AI 公司调取考生拍题问答案记录，举报者最高可获 1 亿韩元奖励，向 AI 索要答案最高判 5 年。此举针对高考等考试中的 AI 作弊问题。",
                      "link": "https://content-static.cctvnews.cctv.com/snow-book/index.html?item_id=11007727814306239180",
                      "tags": [
                        "AI监管",
                        "教育"
                      ],
                      "source": "央视新闻",
                      "time": "11月18日消息"
                    }
                  ]
                },
                {
                  "title": "AMD 观点",
                  "news": [
                    {
                      "title": "AMD 高管：AI 无法取代高精度计算的超算",
                      "summary": "11月18日消息，AMD 高性能计算与主权 AI 企业副总裁 Scott Tease 表示，多数高性能计算机构已认识到 AI 不会取代传统 HPC，依赖双精度 FP64 的科学计算还会存在很长时间。他提出将 AI、HPC 和量子计算连接为统一计算体系，AMD 正与 IBM、橡树岭国家实验室合作探索混合系统。",
                      "link": "https://www.guandian.cn/article/20261118/629220.html",
                      "tags": [
                        "HPC",
                        "AI芯片"
                      ],
                      "source": "观点网",
                      "time": "11月18日消息"
                    }
                  ]
                },
                {
                  "title": "张朝阳",
                  "news": [
                    {
                      "title": "张朝阳回应搜狐「躺平」：大模型投入太大",
                      "summary": "11月18日消息，搜狐张朝阳再次回应搜狐「躺平」话题，称公司要根据自己的资源决定做什么，大模型投入太大，搜狐没资源来做这个事情。他表示推荐算法和 AI 很新鲜，但人们大多数时间还是使用主流应用，人与人连接更重要，目前搜狐着重做社交板块。",
                      "link": "https://www.ithome.com/1/029/086.htm",
                      "tags": [
                        "大模型",
                        "行业观点"
                      ],
                      "source": "IT之家",
                      "time": "11月18日消息"
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
              "date": "2026-11-18",
              "link": "https://openrouter.ai/rankings",
              "rankings": [
                {
                  "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
                  "score": "62.1T tokens",
                  "change": "↑17%"
                },
                {
                  "model": "Hy4 flash (tencent)",
                  "score": "46.6T tokens",
                  "change": "—"
                },
                {
                  "model": "DeepSeek V4.1 Flash (deepseek)",
                  "score": "16T tokens",
                  "change": "↓2%"
                },
                {
                  "model": "Hy4 (tencent)",
                  "score": "13T tokens",
                  "change": "↓36%"
                },
                {
                  "model": "GLM 5.3 Flash (z-ai)",
                  "score": "10.9T tokens",
                  "change": "↓9%"
                },
                {
                  "model": "GPT-6 Luna (openai)",
                  "score": "8.62T tokens",
                  "change": "↑20%"
                },
                {
                  "model": "Claude Opus 5.5 (anthropic)",
                  "score": "7.63T tokens",
                  "change": "↑15%"
                },
                {
                  "model": "Step 5 Preview (stepfun)",
                  "score": "6.39T tokens",
                  "change": "↓7%"
                },
                {
                  "model": "MiMo-V2.6-Flash (xiaomi)",
                  "score": "4.05T tokens",
                  "change": "↑25%"
                },
                {
                  "model": "MiniMax M3.1 Flash (minimax)",
                  "score": "3.67T tokens",
                  "change": "↓4%"
                },
                {
                  "model": "Kimi K3.1 Pro (moonshotai)",
                  "score": "3.55T tokens",
                  "change": "↓20%"
                },
                {
                  "model": "GLM 5.3 (z-ai)",
                  "score": "3.43T tokens",
                  "change": "↓12%"
                },
                {
                  "model": "ERNIE-5.5-Flash-Preview (free) (baidu)",
                  "score": "3.37T tokens",
                  "change": "↑999%"
                },
                {
                  "model": "Nemotron 3 Ultra (free) (nvidia)",
                  "score": "3.32T tokens",
                  "change": "↑6%"
                },
                {
                  "model": "GPT-6.1 Sol (openai)",
                  "score": "3.29T tokens",
                  "change": "↓21%"
                },
                {
                  "model": "Muse Spark 1.3 Contributor (meta)",
                  "score": "2.95T tokens",
                  "change": "—"
                },
                {
                  "model": "Jev 1.13 (typesafe)",
                  "score": "2.93T tokens",
                  "change": "↑4%"
                },
                {
                  "model": "Nemotron 3.5 Super VL (free) (nvidia)",
                  "score": "2.91T tokens",
                  "change": "↑2%"
                },
                {
                  "model": "DeepSeek V4 Flash 0731 (deepseek)",
                  "score": "2.88T tokens",
                  "change": "↓10%"
                },
                {
                  "model": "Claude Sonnet 5.5 (anthropic)",
                  "score": "2.84T tokens",
                  "change": "↑19%"
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
