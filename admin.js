const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-11",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 发布 GPT-5.6-Cyber，扩展网络安全计划 Daybreak",
              "time": "8月11日消息",
              "summary": "8月11日消息，OpenAI 发布专为高级授权网络安全工作设计的 GPT-5.6-Cyber 模型，并扩展网络安全防御计划 Daybreak 为蓝队/红队双层级。GPT-5.6-Cyber 基于 GPT-5.6 Sol 构建，对 95% 的高级网络安全任务请求作出响应，覆盖漏洞利用链开发、身份验证绕过和权限提升，高风险能力仅向 CrowdStrike、IBM 等获批准用户开放。",
              "link": "https://www.cls.cn/detail/2450602",
              "tags": [
                "网络安全",
                "GPT-5.6-Cyber"
              ],
              "source": "财联社"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Claude 用 60 个 AI 智能体推进黎曼猜想，刷新数学纪录",
              "time": "8月11日消息",
              "summary": "8月11日消息，Anthropic 官宣，其尚未发布的研究版 Claude 在尝试证明黎曼猜想时虽未成功，但将黎曼ζ函数零点中满足猜想的比例下界从 41.6% 大幅提升至 67.2%，刷新人类数学家 37 年保持的纪录。研究过程中 Claude 测试约 650 个思路，协调约 60 个子 AI 智能体进行数值检查、论文检索和论证验证，两轮共消耗约 3100 万个输出 token，核心结果已写成 Lean 形式化证明。",
              "link": "https://www.36kr.com/p/3934278945029505",
              "tags": [
                "黎曼猜想",
                "AI科研",
                "智能体"
              ],
              "source": "36氪"
            },
            {
              "title": "Anthropic 联合麦格理、GIC 成立数据中心平台 Theseus",
              "time": "8月10日消息",
              "summary": "8月10日消息，Anthropic 与麦格理资产管理、新加坡主权财富基金 GIC 宣布战略合作，共同成立名为 Theseus Infrastructure 的数据中心合资平台，为 Anthropic 定制开发 AI 数据中心基础设施，初期聚焦美国市场。麦格理与 GIC 将共同持有平台并为项目提供大部分股权资金，Anthropic 承诺承担数据中心可能导致的消费者电价上涨。",
              "link": "https://www.jiemian.com/article/14902065.html",
              "tags": [
                "数据中心",
                "算力基建"
              ],
              "source": "界面新闻"
            }
          ]
        },
        {
          "name": "Google",
          "news": []
        },
        {
          "name": "xAI",
          "news": []
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达联合六家金融机构，为 AI 基建筹超 5000 亿美元",
              "time": "8月10日消息",
              "summary": "8月10日消息，英伟达宣布与 Apollo、贝莱德、黑石、博枫、高盛和 KKR 六家金融机构签署谅解备忘录，共同设立独立的算力融资平台，为 AI 基础设施建设筹集超过 5000 亿美元第三方资本。平台将向前沿 AI 开发者、企业、政府和云服务商提供英伟达算力基础设施，并向资产管理机构和私募资本提供周期更长、回报与算力使用量挂钩的投资工具。",
              "link": "https://www.jiemian.com/article/14902696.html",
              "tags": [
                "算力基建",
                "融资平台"
              ],
              "source": "界面新闻"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 开源 30B 智能体模型 Muse Glimmer，单卡可运行",
              "time": "8月10日消息",
              "summary": "8月10日消息，Meta 发布开放权重智能体模型 Muse Glimmer，参数规模 30B，采用 Apache 2.0 许可证，可在配备 24GB 显存的消费级 GPU 上运行，面向本地常驻智能体工作流。该模型是 Muse Spark 1.2 的蒸馏版本，在 MCP Atlas、DeepSearch QA 等智能体基准测试中表现优于同尺寸模型。Meta 同时确认将发布 Muse Spark 1.2 开放权重版本。",
              "link": "https://tech.ifeng.com/c/8vTu2Im0Jrt",
              "tags": [
                "开源模型",
                "智能体"
              ],
              "source": "凤凰科技"
            },
            {
              "title": "扎克伯格发长文：AI 最大的风险是权力过度集中",
              "time": "8月10日消息",
              "summary": "8月10日消息，Meta CEO 扎克伯格发布长文《未来属于每个人》，主张将超级智能广泛交给个人而非少数公司、政府或 AI 系统。Meta 将推出个人智能体完全私密模式，免费或低价版本面向广泛用户。扎克伯格同时提议前沿实验室提前向美国政府提供模型训练检查点，并呼吁减少美国开源 AI 政策障碍，批评 AI 行业弥漫的末日论情绪。",
              "link": "https://www.36kr.com/p/3934353278844036",
              "tags": [
                "AI治理",
                "开源"
              ],
              "source": "36氪"
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
              "title": "千问开放平台上线，接入顺丰、自如等覆盖三端",
              "time": "8月10日消息",
              "summary": "8月10日消息，阿里千问开放平台正式上线，面向生态伙伴和开发者开放手机、PC 和 AI 眼镜三类终端的服务接入。首批合作伙伴覆盖顺丰速运、天鹅到家、自如、哈啰租车、彩云天气、闪送、飞常准等十多个领域，用户可在千问对话中完成查询、筛选、下单和支付，智能体生态进入履约阶段。",
              "link": "https://www.geekpark.net/news/368604",
              "tags": [
                "开放平台",
                "智能体生态"
              ],
              "source": "极客公园"
            },
            {
              "title": "千问办公助理开始收费，年费最高 1499 元",
              "time": "8月10日消息",
              "summary": "8月10日消息，千问办公助理推出付费会员服务，套餐分为旗舰、精英和高级三档：旗舰套餐 128 元/月或 1499 元/年，精英套餐 49 元/月或 568 元/年，高级套餐 200 元/年。基础功能保持免费，付费用户可在办公助理、AI PPT 等场景调用更多额度。千问还针对视频生成功能推出独立额度付费选项。",
              "link": "https://www.jiemian.com/article/14902985.html",
              "tags": [
                "AI办公",
                "会员收费"
              ],
              "source": "界面新闻"
            },
            {
              "title": "阿里 qwen3.8-max 冲进大模型综合榜 Top 6",
              "time": "8月10日消息",
              "summary": "8月10日消息，LMArena 发布 2026 年第 32 周 AI 大模型盲测榜单，阿里 qwen3.8-max 杀入综合榜第 6 名，ELO 1497 分，与第 5 名 claude-opus-4-6 同分，成为排名最高的国产大模型。代码榜位列第 8、前端开发榜第 4，国产模型在综合、代码、前端、生图、视频等多个方向同时逼近全球第一梯队。",
              "link": "https://www.ithome.com/0/987/938.htm",
              "tags": [
                "榜单",
                "国产大模型"
              ],
              "source": "IT之家"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包推荐酒店抽取 12% 佣金，官方回应",
              "time": "8月10日消息",
              "summary": "8月10日消息，通过豆包入口跳转抖音来客成交的酒店订单执行独立渠道费率：软件服务费 11.4% 加支付手续费 0.6%，综合费率约 12%。豆包公关负责人刘星回应称，豆包生活服务目前没有付费推广，推荐酒店不收取广告费，商家不能通过付费影响推荐排序，仅在订单成交后支付渠道服务费。",
              "link": "https://m.jiemian.com/article/14902227.html",
              "tags": [
                "豆包",
                "商业化"
              ],
              "source": "界面新闻"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek-V4-Flash 周调用量登顶全球第一",
              "time": "8月10日消息",
              "summary": "8月10日消息，OpenRouter 周度数据显示，8月3日至9日全球大模型总调用 69 万亿 Token，DeepSeek-V4-Flash 正式版以周调用 8.83 万亿 Token、环比暴涨 570% 位居全球第一。中国 AI 大模型周调用量连续十五周超越美国，当周前四名均为国产模型，腾讯 Hy3、DeepSeek 预览版分列二三名，国产大模型流量优势持续扩大。",
              "link": "https://finance.eastmoney.com/a/202608103836375277.html",
              "tags": [
                "调用量",
                "开源模型"
              ],
              "source": "东方财富"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": []
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米启动 2027 届校招，AI 岗位需求增长 50%",
              "time": "8月10日消息",
              "summary": "8月10日消息，小米启动 2027 届全球校园招聘，面向海内外应届毕业生开放 17 类以上岗位，产研岗位占整体需求的 70%，AI 相关岗位需求增长 50%。招聘方向覆盖 Xiaomi MiMo、Xiaomi miclaw、人形机器人 CyberOne、智能汽车世界模型及 AI for Science 等，工作地点覆盖北京、上海、深圳及慕尼黑、新加坡等地，网申截止 12 月 31 日。",
              "link": "https://www.ithome.com/0/987/799.htm",
              "tags": [
                "AI人才",
                "校园招聘"
              ],
              "source": "IT之家"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱 API 用户接近 700 万，启用超 5 万块国产算力芯片",
              "time": "8月10日消息",
              "summary": "8月10日消息，据晚点报道，智谱 MaaS 开放平台注册用户接近 700 万，较 7 月初增加约 200 万，其中企业客户 2.3 万家；对标 Codex 的开发者产品 ZCode 上线一个月用户突破 100 万。智谱 7 月启用超过 5 万块国产算力芯片缓解推理压力，今年以来 ARR 增长 15 倍，智谱和 DeepSeek 均预计 8 月发布新模型。",
              "link": "https://tech.ifeng.com/c/8vTzRRStCj6",
              "tags": [
                "API",
                "国产算力"
              ],
              "source": "凤凰科技"
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
              "title": "三星",
              "news": [
                {
                  "title": "三星 HBM4 量产良率提升至近 80%",
                  "time": "8月10日消息",
                  "summary": "8月10日消息，三星电子第六代高带宽存储器 HBM4 量产良率半年内从不足 60% 提升至约 80%，达到行业黄金良率标准，工艺改善速度大幅超出市场预期。三星计划 Q3 HBM4 营收较二季度提升 3 倍，下半年 HBM4 占整体 HBM 营收超 60%，年末目标拿下约 38% 全球 HBM 市场份额，抢占 AI 算力存储增量需求。",
                  "link": "https://www.jiemian.com/article/14899222.html",
                  "tags": [
                    "HBM4",
                    "存储芯片"
                  ],
                  "source": "界面新闻"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软最早 9 月发布 Maia 300 自研 AI 芯片",
                  "time": "8月10日消息",
                  "summary": "8月10日消息，据 The Information 报道，微软计划今年秋季发布新一代自研 AI 芯片 Maia 300，最早可能 9 月亮相，并已与台积电洽谈为 2027 年锁定超过 30 万颗制造产能，长期目标超 100 万颗。微软希望扩大自研芯片在 Azure 中的使用，减少对英伟达 AI 加速器的依赖，并让 Anthropic 等大型云客户使用 Maia 300。",
                  "link": "https://www.ithome.com/0/988/036.htm",
                  "tags": [
                    "自研芯片",
                    "Maia 300"
                  ],
                  "source": "IT之家"
                }
              ]
            },
            {
              "title": "零一万物",
              "news": [
                {
                  "title": "零一万物大模型开放平台将停止在线体验与 API 服务",
                  "time": "8月10日消息",
                  "summary": "8月10日消息，零一万物发布公告，因产品与服务体系升级并聚焦企业级 AI 解决方案，其大模型开放平台将逐步停止面向用户提供在线体验、API 调用及充值等服务。即日起停止新用户注册及充值，9 月 3 日起停止模型体验与 API 调用，退款申请窗口开放至 12 月 3 日。零一万物由李开复创立，未来将聚焦企业级应用。",
                  "link": "https://tech.ifeng.com/c/8vTnAm4GU0t",
                  "tags": [
                    "零一万物",
                    "API服务"
                  ],
                  "source": "凤凰科技"
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
                  "title": "小马智行第四代自动驾驶卡车推向量产",
                  "time": "8月10日消息",
                  "summary": "8月10日消息，小马智行公布第四代 L4 自动驾驶卡车计划，未来两三年先在中国投放 500 至 1000 辆重卡，覆盖干线物流、散货运输和港口作业，到 2030 年累计部署 10 万辆轻型自动驾驶卡车。第四代系统硬件成本较上一代降低约 70%，已有超过 200 辆自动驾驶重卡投入运营，累计货运周转量超 10 亿吨公里。",
                  "link": "https://smartcar.cnmo.com/news/815454.html",
                  "tags": [
                    "自动驾驶",
                    "物流运输"
                  ],
                  "source": "澎湃新闻"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "普渡机器人张涛",
              "news": [
                {
                  "title": "普渡机器人张涛：通用机器人的价值被高估",
                  "time": "8月10日消息",
                  "summary": "8月10日消息，普渡机器人创始人兼 CEO 张涛在访谈中指出，外界可能高估了通用机器人的价值，未来机器人行业不会只剩人形机器人，而会形成通用、专用和类人形机器人多种形态并存的格局。在商场、车库等大面积清洁场景中专用机器人效率更高，人形机器人更适合复杂化任务。他判断具身智能的 ChatGPT 时刻至少还需 3 到 5 年。",
                  "link": "https://video.caixin.com/2026-08-10/102472877.html",
                  "tags": [
                    "机器人",
                    "行业观点"
                  ],
                  "source": "财新网"
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
              "title": "摩尔线程",
              "news": [
                {
                  "title": "摩尔线程拟发行 H 股并申请港交所上市",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，国产 GPU 厂商摩尔线程发布公告，拟发行境外上市外资股（H股）并在港交所主板挂牌上市，相关议案已通过董事会审议。公司在科创板上市八个月后启动 A+H 双平台布局，深化国际化战略。摩尔线程上半年营收 17.36 亿元同比增长 147.42%，归母净利润亏损收窄 95.73%。",
                  "link": "https://stcn.com/article/detail/4065596.html",
                  "tags": [
                    "国产GPU",
                    "IPO"
                  ],
                  "source": "证券时报"
                }
              ]
            },
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树科技申购中签率公布，美团红杉成最大赢家",
                  "time": "8月10日消息",
                  "summary": "8月10日消息，宇树科技科创板 IPO 网上发行最终中签率 0.01809759%，发行价 150.8 元/股，募资约 61 亿元，发行市盈率 219 倍。发行前美团系合计持股 9.65% 为最大外部机构股东，红杉中国持股 7.11% 位列第二。战略配售中 DeepSeek 获配 1.41 亿元、腾讯获配超 1 亿元，宇树 171 名员工参与配售合计认购约 2.7 亿元。",
                  "link": "https://www.sina.cn/news/detail/5330635770299436.html",
                  "tags": [
                    "人形机器人",
                    "IPO"
                  ],
                  "source": "新浪财经"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "高盛",
              "news": [
                {
                  "title": "高盛：2026 年末全球 AI 投资将突破 1 万亿美元",
                  "time": "8月10日消息",
                  "summary": "8月10日消息，高盛最新行业报告预测，2026 年末全球人工智能总投资将突破 1 万亿美元，其中美国接近 6000 亿美元。高盛批评现有估算仅聚焦美国大型科技公司资本支出，低估了全球 AI 投资规模。2026 至 2028 年美国 AI 资本支出占 GDP 比重逐年升至 1.8%、2.5%、2.8%，全球 AI 投资对应 GDP 占比分别为 0.9%、1.3%、1.4%。",
                  "link": "https://www.21jingji.com/article/20260810/herald/4a59af25eabfe1e9438e7e22ca8c1ad1.html",
                  "tags": [
                    "投资预测",
                    "宏观趋势"
                  ],
                  "source": "21世纪经济报道"
                }
              ]
            },
            {
              "title": "美参议员桑德斯",
              "news": [
                {
                  "title": "美参议员桑德斯致信三大 AI 巨头，要求暂停开发",
                  "time": "8月10日消息",
                  "summary": "8月10日消息，美国参议员桑德斯分别致信 OpenAI CEO 奥特曼、Anthropic CEO 阿莫代伊和 Meta CEO 扎克伯格，要求暂停 AI 开发，警告若公司不采取行动参议院将介入。桑德斯列举了 AI 智能体失控入侵第三方平台、AI 设计新病毒等事件，并援引各公司此前安全承诺称暂停时刻已到。OpenAI 已暂停部分 Astra 模型开发。",
                  "link": "https://m.ithome.com/html/988093.htm",
                  "tags": [
                    "AI监管",
                    "AI安全"
                  ],
                  "source": "凤凰科技"
                }
              ]
            },
            {
              "title": "韩国芯片工程师",
              "news": [
                {
                  "title": "三星电子平均奖金 300 万、SK 海力士 371 万",
                  "time": "8月10日消息",
                  "summary": "8月10日消息，据华尔街日报报道，AI 热潮推动内存芯片需求增长，三星电子和 SK 海力士员工奖金水涨船高。三星存储芯片员工今年奖金预计约 6.26 亿韩元（约合人民币 298 万元），海力士人均奖金约 7.79 亿韩元（约合人民币 371 万元）。高额奖金改变员工消费和生活计划，芯片工程师在韩国婚恋市场评级已接近医生、律师等 A+ 档。",
                  "link": "https://finance.sina.com.cn/roll/2026-08-10/doc-inimvsvi2806904.shtml",
                  "tags": [
                    "AI内存",
                    "行业现象"
                  ],
                  "source": "新浪财经"
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
              "model": "GPT-5.2 Chat",
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
          "date": "2026-08-11",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "9.39T tokens",
              "change": "↑302%"
            },
            {
              "model": "Hy3",
              "score": "8.94T tokens",
              "change": "↑83%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.72T tokens",
              "change": "↑19%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "5.31T tokens",
              "change": "↑2%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "4.67T tokens",
              "change": "↑90%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.64T tokens",
              "change": "↑27%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.58T tokens",
              "change": "↑17%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.36T tokens",
              "change": "0%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "2.32T tokens",
              "change": "↑434%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.85T tokens",
              "change": "↑58%"
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
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Poth Labs",
              "category": "Customer Success",
              "rank": 4,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "DepthData",
              "category": "Analytics",
              "rank": 5,
              "link": "https://www.producthunt.com"
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
              "link": "https://www.producthunt.com"
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
              "link": "https://www.producthunt.com"
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
              "link": "https://www.producthunt.com"
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
