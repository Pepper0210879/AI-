const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-09-04",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 正式发布 GPT-6 Astra，可像人一样操作电脑",
              "summary": "当地时间9月3日，OpenAI 正式发布新一代旗舰模型 GPT-6 Astra，可在浏览器与专业软件中执行多步骤任务，支持工具调用、网页浏览，被视为“能直接干活的 AI Agent”；支持 105 万 token 上下文与 12.8 万 token 输出，先向 Trusted Access Program 企业客户开放，随后推送 API 与 ChatGPT 各档位用户。OpenAI 总裁布罗克曼称“我们可能已到达 AGI”。",
              "time": "当地时间9月3日",
              "link": "https://m.thepaper.cn/detail/34005953",
              "source": "澎湃新闻",
              "tags": [
                "GPT-6",
                "Agent",
                "AGI"
              ]
            },
            {
              "title": "奥特曼：OpenAI 将自研人形机器人本体",
              "summary": "当地时间9月2日，OpenAI CEO 奥特曼在播客节目中首次明确确认，公司将自研人形机器人本体，同时并行开发面向数据中心等场景的特种机器人。原世界模拟项目升级为 OpenAI Robotics，短期研发辅助基建工人的机器人，长期目标是“人手一台个人机器人”。他表示机器人外形最终要服务于“让机器人工作的大脑”。",
              "time": "当地时间9月2日",
              "link": "https://www.jiemian.com/article/15051430.html",
              "source": "界面新闻",
              "tags": [
                "人形机器人",
                "具身智能"
              ]
            },
            {
              "title": "OpenAI 首席科学家：应防止 AI 陷入“不可监控竞赛”",
              "summary": "9月3日消息，OpenAI 首席科学家 Jakub Pachocki 在社交媒体回应围绕 Astra 模型“深度循环”机制引发的 AI 安全争议。部分研究者担心该设计使推理过程更难监控。Pachocki 称发声是为防止混乱报道引发一场“冲向不可监控”的竞赛，并称 Astra 等前沿模型计算图深度与 GPT-4 相比差距不到两倍，未见架构复杂度跃升。",
              "time": "9月3日消息",
              "link": "https://www.c114.com.cn/news/16/a1316885.html",
              "source": "C114通信网",
              "tags": [
                "AI安全",
                "思维链"
              ]
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 发布 Claude 电商智能体蓝图并开源",
              "summary": "当地时间9月2日，Anthropic 发布面向 Claude 的电商智能体蓝图（commerce-agents），开源购物智能体与商家智能体两类参考实现，覆盖零售、旅游、电信、票务等场景，内置价格目录约束、人工审批等安全护栏，可在 Claude API、Amazon Bedrock、Vertex AI 等环境运行，助力零售商在假日季前快速上线智能体应用。",
              "time": "当地时间9月2日",
              "link": "https://claude.com/blog/claude-for-commerce-agents",
              "source": "Anthropic 官方博客",
              "tags": [
                "智能体",
                "电商"
              ]
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌拆解退役服务器回收 DDR4，缓解 AI 内存荒",
              "summary": "9月3日消息，内存持续短缺迫使大型数据中心运营商采取非常手段。谷歌供应链基础设施高级总监透露，为突破内存瓶颈，谷歌正同时开发软硬件方案，拆解退役服务器回收可复用组件，并设计专用硬件适配器，将上一代 DDR4 内存接入新一代 AI 服务器。高性能内存已约占 AI 服务器物料清单成本的 75%。",
              "time": "9月3日消息",
              "link": "https://finance.sina.com.cn/roll/2026-09-03/doc-iniqpqxy2167555.shtml",
              "source": "新浪财经",
              "tags": [
                "内存",
                "数据中心"
              ]
            },
            {
              "title": "谷歌 DeepMind 发布 WeatherNext 3 天气预报模型",
              "summary": "9月3日消息，谷歌 DeepMind 与 Google Research 发布 AI 天气预报模型 WeatherNext 3，号称目前最先进、最准确的全球气象模型，可直接从实时卫星观测学习，最高以 5 公里分辨率每小时生成一次全球预报，并为风电、光伏等可再生能源产出提供针对性预测，即日起为谷歌搜索、Gemini、地图等产品提供气象能力。",
              "time": "9月3日消息",
              "link": "https://www.ithome.com/0/998/198.htm",
              "source": "IT之家",
              "tags": [
                "天气预报",
                "气候AI"
              ]
            }
          ]
        },
        {
          "name": "xAI",
          "news": []
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达 129.3 亿美元收购 Hugging Face，维持开放运营",
              "summary": "9月3日消息，英伟达宣布已同意以 129.3 亿美元收购 AI 托管平台 Hugging Face，并承诺维持其作为开放平台运营。双方将共同扩展平台规模、强化基础设施，为全球开发者提供更广泛的 AI 应用机会；开发者仍可自由选择模型、框架、云服务与推理服务提供商，在 Hugging Face 上构建应用无需使用英伟达计算资源。",
              "time": "9月3日消息",
              "link": "https://www.jiemian.com/article/15052537.html",
              "source": "界面新闻",
              "tags": [
                "收购",
                "开源社区"
              ]
            },
            {
              "title": "英伟达开源 PAIR：调度 Mac / RTX PC 跨设备本地推理",
              "summary": "当地时间9月3日，英伟达以开源测试版发布 Personal AI Router（PAIR）软件，用于在局域网内为本地 AI 请求调度可用计算机。它可在 M4 及以上 Mac、RTX PC 与 DGX Spark 上运行，为 Ollama、LM Studio 等本地 AI 工具提供统一请求入口，设备繁忙或不可用时自动将请求转至其他已配对设备，实现跨设备并发负载分担。",
              "time": "当地时间9月3日",
              "link": "https://www.ithome.com/0/998/229.htm",
              "source": "IT之家",
              "tags": [
                "开源",
                "端侧推理"
              ]
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 取消员工 AI 使用量与绩效挂钩",
              "summary": "9月3日消息，据报道 Meta 本周在内部通知中表示，员工绩效评估将不再依据 AI 工具使用量，包括 Token 消耗等指标。此前 Meta 曾推动员工提升“AI 驱动影响力”，AI 使用程度成为关注指标。与此同时，员工开始测试新型智能体工具 Hatch，尽管考核不再强调使用量，其使用仍在推高 Token 消耗。",
              "time": "9月3日消息",
              "link": "https://news.qq.com/rain/a/20260903A05H2K00",
              "source": "腾讯新闻",
              "tags": [
                "AI治理",
                "绩效"
              ]
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
              "title": "阿里云 Qoder 上线“眼镜版”，接入千问与乐奇 AI 眼镜",
              "summary": "9月3日消息，阿里云智能体编程平台 Qoder 上线“Qoder 眼镜版”，首批接入千问 AI 眼镜和乐奇 AI 眼镜。用户无需打开手机、触碰屏幕，戴上眼镜即可通过语音交互让 Agent 执行任务，可用第一人称视角给 Agent 派活。千问 AI 眼镜版已开启定向邀测，完整功能将于 2026 云栖大会正式发布。",
              "time": "9月3日消息",
              "link": "https://news.qq.com/rain/a/20260903A04SFD00",
              "source": "腾讯新闻",
              "tags": [
                "AI眼镜",
                "语音Agent"
              ]
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
              "title": "腾讯推出 WorkBuddy 金融版，服务银行保险资管",
              "summary": "9月3日消息，腾讯正式推出 WorkBuddy 金融版，面向保险、资管、银行等金融机构，提供覆盖投研、合规、客户经营、信贷尽调、财富资配等核心业务的技能矩阵与金融数据源，以及全链路安全可信底座，推进金融智能体在垂直场景的规模化落地。",
              "time": "9月3日消息",
              "link": "https://finance.sina.com.cn/jjxw/2026-09-03/doc-iniqpksa2189530.shtml",
              "source": "新浪财经",
              "tags": [
                "金融智能体"
              ]
            },
            {
              "title": "腾讯 WorkBuddy 上线银河麒麟与统信 UOS",
              "summary": "9月3日消息，继支持鸿蒙之后，腾讯 WorkBuddy 再上线银河麒麟与统信 UOS 两大国产操作系统，进一步拓展信创环境适配，让企业用户可在国产化系统中使用腾讯开放平台的智能体基座能力。",
              "time": "9月3日消息",
              "link": "https://www.pingwest.com/w/317042",
              "source": "品玩",
              "tags": [
                "国产操作系统",
                "信创"
              ]
            }
          ]
        },
        {
          "name": "小米",
          "news": []
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱 GLM Coding Plan 夜间畅用：Flash 模型额度全免",
              "summary": "9月4日消息，智谱 AI 宣布旗下 GLM Coding Plan 推出“Flash × ZCode”夜间畅用活动：即日起至 9 月 20 日，每晚 23:00 至次日 9:00，经官方编程工具 ZCode 使用 GLM-5.3-Flash 模型额度消耗为零，经其他 Agent 使用时额度翻倍。GLM-5.3-Flash 是 GLM-5 系列首个原生多模态模型，支持百万级 token 上下文。",
              "time": "9月4日消息",
              "link": "https://www.ithome.com/0/998/231.htm",
              "source": "IT之家",
              "tags": [
                "价格策略",
                "免费额度"
              ]
            }
          ]
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
              "title": "联想",
              "news": [
                {
                  "title": "联想携手英伟达将千亿参数大模型装进笔记本",
                  "summary": "9月4日消息，联想在柏林 IFA 2026 Lenovo Innovation World 大会发布多款 AI 终端，其中携手英伟达推出的旗舰笔记本 Yoga Pro 9n（国内 YOGA Pro 15 Spark）通过统一内存架构将千亿参数级大模型推理引入端侧，该机搭载英伟达 RTX Spark 芯片，探索 PC 本地运行大模型的算力路径。",
                  "time": "9月4日消息",
                  "link": "https://www.donews.com/news/detail/5/6697224.html",
                  "source": "DoNews",
                  "tags": [
                    "AI PC",
                    "端侧大模型"
                  ]
                }
              ]
            },
            {
              "title": "字节跳动",
              "news": [
                {
                  "title": "字节跳动获约 296 亿美元银团贷款，加码 AI 基建",
                  "summary": "9月3日消息，据知情人士透露，TikTok 开发商字节跳动已获得约 296 亿美元贷款，将成为 2026 年亚洲规模第二大的美元计价银团贷款。字节跳动上一次大规模境外贷款发生在 2024 年，筹资约 108 亿美元。资金预计继续投向 AI 基础设施与数据中心建设。",
                  "time": "9月3日消息",
                  "link": "https://news.qq.com/rain/a/20260903A07XY200",
                  "source": "腾讯新闻",
                  "tags": [
                    "贷款",
                    "数据中心"
                  ]
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软发布转录 AI 模型 MAI-Transcribe-2，60 语种词错误率 5.2%",
                  "summary": "当地时间9月3日，微软发布最强 AI 语音转文字模型 MAI-Transcribe-2，称其在准确率、速度与价格上优于主流竞品：FLEURS 测试中 60 语种平均词错误率 5.2%，低于 Gemini 3.1 Pro 与 GPT-Transcribe；速度据称比 GPT-Transcribe 快 10 倍；新增说话人分离、逐词时间戳与可配置转写风格，限时收费 0.1 美元/小时。",
                  "time": "当地时间9月3日",
                  "link": "https://www.ithome.com/0/998/241.htm",
                  "source": "IT之家",
                  "tags": [
                    "语音识别",
                    "转录"
                  ]
                }
              ]
            },
            {
              "title": "MiniMax",
              "news": [
                {
                  "title": "沙特 HUMAIN 发布阿语模型 humain-m3，由 MiniMax 开发",
                  "summary": "9月3日消息，沙特主权财富基金 PIF 旗下人工智能企业 HUMAIN 公布前沿阿拉伯语模型 humain-m3，该模型由 MiniMax 受托开发，基于 MiniMax-M3 构建并进行 T 级阿拉伯语原生 Token 预训练，在 7 个公开阿语基准中取得参测前沿模型的最高平均分，将率先在 HUMAIN Node 平台以预览版开放，后续发布开放权重版本。",
                  "time": "9月3日消息",
                  "link": "https://www.ithome.com/0/998/189.htm",
                  "source": "IT之家",
                  "tags": [
                    "阿语模型",
                    "AI出海"
                  ]
                }
              ]
            },
            {
              "title": "天猫",
              "news": [
                {
                  "title": "天猫上线 AI Token 充值中心，首批接入四家模型厂商",
                  "summary": "9月3日消息，天猫正式上线“AI 空间站”（Token 充值中心），首批集合阿里云、智谱、Kimi、MiniMax 等国内大模型厂商的订阅服务，在售商品包括按周期订阅的 Token Plan、Coding Plan 以及按用量付费的充值方案，支持卡密或直充两种交付方式，大模型订阅开始进入电商渠道销售。",
                  "time": "9月3日消息",
                  "link": "https://www.pingwest.com/w/317034",
                  "source": "品玩",
                  "tags": [
                    "AI订阅",
                    "电商"
                  ]
                }
              ]
            },
            {
              "title": "百度",
              "news": [
                {
                  "title": "原 DeepSeek 研究员魏浩然出任百度文心多模态负责人",
                  "summary": "9月3日消息，据 AI 前线援引知情人士消息，原 DeepSeek 研究员魏浩然已带队转入百度基础模型研发部，出任文心大模型多模态算法负责人。他是《DeepSeek-OCR》系列论文第一作者，此前负责 OCR 等多模态方向研发，其加盟有望强化百度在多模态与文档智能方向的布局。",
                  "time": "9月3日消息",
                  "link": "https://tech.ifeng.com/c/8w6be4RKBrF",
                  "source": "凤凰科技",
                  "tags": [
                    "人事变动",
                    "多模态"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉 Cybercab 亮相奥斯汀，Robotaxi 车队扩至 45 辆",
                  "summary": "当地时间9月3日，特斯拉在得州奥斯汀举行 Cybercab 发布活动。这款为全自动驾驶出行设计的双座车型不设方向盘与脚踏板。得州机动车登记资料显示，特斯拉已将 45 辆 Cybercab 列入自动驾驶车队名单，较最初登记的 7 辆大幅增加，但这批车与 269 辆 Model Y 同登记于 Tesla Robotaxi 名下，入队尚不等于已对公众载客。",
                  "time": "当地时间9月3日",
                  "link": "http://www.nbd.com.cn/articles/2026-09-04/4572314.html",
                  "source": "每日经济新闻",
                  "tags": [
                    "自动驾驶",
                    "Robotaxi"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "远山智行",
              "news": [
                {
                  "title": "全球首款轮足式导盲犬“小远”正式发布",
                  "summary": "9月4日消息，远山智行发布全球首款轮足式导盲犬“小远”。该导盲机器人面向视障人群，以轮足式形态结合具身智能实现自主导航与避障，为视障人士出行提供新方案，缓解传统导盲犬训练周期长、数量稀缺的困境。",
                  "time": "9月4日消息",
                  "link": "http://www.stnn.cc/detail/6a9a0b29b4b06b3f17f0c576.html",
                  "source": "星岛环球网",
                  "tags": [
                    "导盲机器人",
                    "视障"
                  ]
                }
              ]
            },
            {
              "title": "优必选",
              "news": [
                {
                  "title": "优必选联合麦迪科技发布全国首款仿生医疗机器人",
                  "summary": "9月3日消息，优必选宣布携手麦迪科技发布全国首款仿生医疗机器人“优麦机器人康养版”，可选男女形象。该机器人实现人形硬件仿生交互与标准化临床医疗 AI 系统深度融合，内置 CGA 老年综合评估题库，覆盖 10 项老年慢病管理维度，可完成血压血糖监测、用药风险预警等智能问诊评估，面向养老康养场景。",
                  "time": "9月3日消息",
                  "link": "https://www.ithome.com/0/997/971.htm",
                  "source": "IT之家",
                  "tags": [
                    "仿生机器人",
                    "医疗康养"
                  ]
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
              "title": "Nscale",
              "news": [
                {
                  "title": "AI 算力公司 Nscale 签约收入 1030 亿美元，或本月 IPO",
                  "summary": "9月3日消息，据路透社援引 The Information 报道，英国 AI 云基础设施公司 Nscale 向潜在投资者披露，其合同签约收入增至约 1030 亿美元，其中包含与 Anthropic 达成的 450 亿美元算力协议。该公司由英伟达支持，最早可能在本月启动 IPO，投资者材料显示合同平均期限为 5.7 年。",
                  "time": "9月3日消息",
                  "link": "https://m.jiemian.com/article/15048230.html",
                  "source": "界面新闻",
                  "tags": [
                    "算力",
                    "IPO"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "AI服务宕机",
              "news": [
                {
                  "title": "ChatGPT、Claude、Grok 等主流 AI 服务集体宕机",
                  "summary": "9月4日消息，ChatGPT、Claude、Grok、Cursor 等主流 AI 服务出现集体突发故障，服务中断约 4 小时后陆续恢复正常。此次大规模宕机波及多家头部 AI 厂商的聊天与智能体产品，再次凸显行业对推理与云基础设施的集中化依赖及单点故障风险。",
                  "time": "9月4日消息",
                  "link": "https://wap.stockstar.com/detail/IG2026090400006429",
                  "source": "证券之星",
                  "tags": [
                    "宕机",
                    "基础设施"
                  ]
                }
              ]
            },
            {
              "title": "美国司法部",
              "news": [
                {
                  "title": "美国司法部首表态：AI 训练属“合理使用”",
                  "summary": "美国司法部于当地时间 9 月 1 日发表声明，支持 OpenAI 在多家出版机构和作家提起的版权诉讼中提出的“合理使用”抗辩，敦促纽约联邦法官裁定为训练大模型而复制作品不违反版权法，并称政府鼓励维持美国在 AI 领域的领导地位。这是美国司法部首次就 AI 训练版权问题公开表态。",
                  "time": "当地时间9月1日",
                  "link": "https://www.c114.com.cn/ai/5339/a1316877.html",
                  "source": "C114通信网",
                  "tags": [
                    "版权",
                    "AI政策"
                  ]
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
              "model": "claude-fable-5",
              "score": "1508",
              "change": "+6"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1497",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-max",
              "score": "1495",
              "change": "+12"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1493",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-high",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1486",
              "change": "+3"
            },
            {
              "model": "kimi-k3-max",
              "score": "1486",
              "change": "+10"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1485",
              "change": "+7"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "gemini-3.6-flash",
              "score": "1482",
              "change": "+8"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "gemini-3.5-flash-high",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "gpt-5.5",
              "score": "1476",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-09-03",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "GLM 5.3 Flash",
              "score": "11.9T tokens",
              "change": "+586%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "11.6T tokens",
              "change": "+137%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.3T tokens",
              "change": "+10%"
            },
            {
              "model": "Hy4 preview",
              "score": "11T tokens",
              "change": "—"
            },
            {
              "model": "Hy3",
              "score": "5.25T tokens",
              "change": "+23%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.18T tokens",
              "change": "+6%"
            },
            {
              "model": "MiniMax M3 (free)",
              "score": "5.15T tokens",
              "change": "+907%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.5T tokens",
              "change": "+59%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "4.1T tokens",
              "change": "+26%"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "2.63T tokens",
              "change": "+31%"
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
