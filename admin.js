const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-22",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 前沿模型及 Codex 将接入谷歌云 Model Garden",
              "summary": "10月21日，OpenAI宣布与谷歌云合作，将前沿模型及Codex智能体工作流接入谷歌云Model Garden，计划未来几周正式开放。企业可通过谷歌云市场购买相关模型，并用云消费承诺支付费用。OpenAI模型还将陆续接入谷歌Antigravity和Gemini Agent。OpenAI表示微软仍是其首要云合作伙伴。",
              "link": "https://www.cls.cn/detail/2511433",
              "tags": [
                "云合作",
                "智能体"
              ],
              "source": "财联社",
              "time": "10月21日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 推出主动式智能体 Claude Duet",
              "summary": "10月22日消息，Anthropic以研究预览版形式发布全新应用Claude Duet，定位为可主动联系用户、持续处理任务的个人智能体，基于Claude Opus 5.5构建，先面向美国Pro和Max订阅用户开放候补名单，与Meta Muse、OpenAI Dots竞争全天候主动型AI助理市场。",
              "link": "https://news.qq.com/rain/a/20261022A04SRM00",
              "tags": [
                "智能体",
                "个人助理"
              ],
              "source": "腾讯新闻",
              "time": "10月22日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌 CEO：2027 年算力新增需求已极难满足",
              "summary": "皮查伊在播客访谈中透露，谷歌去年曾短期租用外部算力以满足客户需求。他表示即便客户现在希望获得2027年的算力，谷歌要满足需求已极其困难，行业各公司都希望当初规划的规模能再大一倍。围绕新模型Gemini 4 Argon，他还谈及智能体商业化、苹果合作与太空数据中心。",
              "link": "https://finance.eastmoney.com/a/202610213902671815.html",
              "tags": [
                "算力",
                "数据中心"
              ],
              "source": "东方财富",
              "time": "10月21日"
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
              "title": "NVIDIA GTC 2026：发布模块化 AI 工厂 DSX POD",
              "summary": "10月21日，英伟达在GTC柏林大会推出DSX POD，由合作伙伴在模块化集装箱内建造完整的Vera Rubin AI工厂，出厂前完成集成验证，计划2027年初全球交付。在场地电力、冷却、网络配套就绪前提下，可将现场部署时间从6个月缩短至最快14天，戴尔、惠普企业、联想、施耐德电气、维谛技术等参与合作。",
              "link": "https://news.qq.com/rain/a/20261021A0BI7400",
              "tags": [
                "AI数据中心",
                "模块化"
              ],
              "source": "腾讯新闻",
              "time": "10月21日"
            },
            {
              "title": "NVIDIA GTC 2026：DGX Spark 可组 8 台集群",
              "summary": "英伟达在GTC柏林大会更新本地AI产品，DGX Spark现支持最多8台设备组建集群，使用内置ConnectX-7网络互联，128GB版本集群统一内存最高达1TB，可运行更大模型、更长上下文和多个智能体；64GB版本将于10月23日通过合作伙伴陆续发售。",
              "link": "https://news.qq.com/rain/a/20261022A04HO700",
              "tags": [
                "AI硬件",
                "本地推理"
              ],
              "source": "快科技",
              "time": "10月22日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 第三季度营收 646 亿美元，同比增长 26%",
              "summary": "Meta发布第三季度财报，营收646.01亿美元，同比增长26%；归母净利润98.6亿美元，同比增长264%；每股收益3.83美元。Family of Apps营收641.58亿美元；Reality Labs营收4.43亿美元、运营亏损41.29亿美元同比收窄。公司预计全年资本开支1350亿至1450亿美元。",
              "link": "https://news.qq.com/rain/a/20261022A0DJVN00",
              "tags": [
                "财报",
                "资本开支"
              ],
              "source": "腾讯新闻",
              "time": "10月22日"
            },
            {
              "title": "Meta Muse 上线 40 天美国下载量超 1000 万",
              "summary": "10月21日，Sensor Tower数据显示，自9月上线以来Meta Muse下载量达1090万次，其中1020万来自美国。分析人士指出，Meta能屡次打造爆款归功于其应用生态与跨平台导流能力。目前Muse用户留存率优于ChatGPT、Claude和Grok等AI竞争对手。",
              "link": "https://www.cls.cn/detail/2510859",
              "tags": [
                "AI应用",
                "下载量"
              ],
              "source": "财联社",
              "time": "10月21日"
            }
          ]
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "news": []
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包工作本地 Office 编辑新增 Word",
              "summary": "10月21日，豆包工作宣布上线新功能，本地Office编辑新增Word，支持直接打开本地文件；新增可追溯的记忆面板，云电脑与浏览器、消息排队、复杂任务分工体验同步升级。",
              "link": "https://www.yicai.com/brief/103402080.html",
              "tags": [
                "办公",
                "功能更新"
              ],
              "source": "第一财经",
              "time": "10月21日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "曝 DeepSeek 近 1000 亿元新融资接近完成",
              "summary": "据雷递报道，DeepSeek新一轮近1000亿元融资接近完成，投前估值约5000亿元。砺思星深、拾象尚势两只基金均参与本轮投资，腾讯继续跟投；本轮新进投资者以产业资本为主，包括石溪资本、中芯聚源、CPE源峰、君联资本和吉利等。",
              "link": "https://finance.jrj.com.cn/2026/10/22175258823659.shtml",
              "tags": [
                "融资",
                "估值"
              ],
              "source": "金融界",
              "time": "10月22日"
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
              "title": "雷军：未来 5 年小米硬核科技投入将超 2000 亿元",
              "summary": "10月21日，在世界智能网联汽车大会上，雷军表示小米已构建全球最大消费级IoT平台，设备连接数超11亿台。过去5年小米在芯片、操作系统、AI具身智能等底层硬核技术研发投入1055亿元，预计未来5年相关投资将超2000亿元。",
              "link": "https://news.qq.com/rain/a/20261021A0CRUV00",
              "tags": [
                "研发投入",
                "具身智能"
              ],
              "source": "腾讯新闻",
              "time": "10月21日"
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果据悉本月在韩国上线 Siri AI 功能",
                  "summary": "业内消息人士透露，韩国用户很快就能使用苹果搭载生成式人工智能的助手，苹果计划从本月起为Siri AI新增韩语支持。苹果已于9月推出新版Siri英文测试版，此次服务扩展前还与Kakao、Naver等韩国本土企业合作优化相关服务。",
                  "link": "https://news.qq.com/rain/a/20261021A08GFB00",
                  "tags": [
                    "语音助手",
                    "生成式AI"
                  ],
                  "source": "金融界",
                  "time": "10月21日"
                }
              ]
            },
            {
              "title": "亚马逊",
              "news": [
                {
                  "title": "亚马逊豪掷数十亿美元囤英伟达 GPU，因缺电闲置仓库",
                  "summary": "内部邮件显示，亚马逊设立「提前接收机架」计划开启激进算力储备，将提前接收价值约50亿美元的英伟达GB300服务器机架，并持续以每月30亿美元规模新增采购。但多个AWS站点电力容量不足，大量提前采购的GPU设备闲置在仓库，形成无法投产的「黑暗GPU」。",
                  "link": "https://news.qq.com/rain/a/20261021A05L3U00",
                  "tags": [
                    "算力",
                    "数据中心"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月21日"
                }
              ]
            },
            {
              "title": "沃尔玛",
              "news": [
                {
                  "title": "沃尔玛为 AI 代购设独立档案，可限额并随时撤销授权",
                  "summary": "沃尔玛宣布为AI代购推出Agent Profiles、Agent Gateway及专门的智能体使用条款，覆盖沃尔玛与山姆会员店。用户可选择AI应用代买商品，为每个智能体单独设置权限、消费限额，可要求逐笔确认并随时关闭授权，系统还会将AI代购订单与本人订单区分。",
                  "link": "https://news.qq.com/rain/a/20261022A04F1V00",
                  "tags": [
                    "AI代购",
                    "智能体"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月22日"
                }
              ]
            },
            {
              "title": "Groq",
              "news": [
                {
                  "title": "消息称 Groq 下一代芯片拟采用 3D 堆叠 DRAM",
                  "summary": "据报道，Groq正考虑将三维堆叠DRAM封装技术应用于下一代芯片，用DRAM替代现有SRAM，以大幅提升芯片容量。3D封装将多个半导体芯片垂直堆叠，可减小芯片表面积并提高能效。",
                  "link": "https://finance.jrj.com.cn/2026/10/21163858809525.shtml",
                  "tags": [
                    "AI芯片",
                    "封装"
                  ],
                  "source": "金融界",
                  "time": "10月21日"
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "三星晶圆代工 4 纳米产能拉满，2nm 谈判进度滞后",
                  "summary": "据报道，三星4纳米和5纳米工艺良率相对稳定，4纳米产能因客户订单激增接近饱和，公司正为5纳米争取更多客户。相比之下，三星与全球大型科技公司洽谈2纳米工艺半导体生产合同的进度有所滞后。",
                  "link": "https://stock.jrj.com.cn/2026/10/21143658806076.shtml",
                  "tags": [
                    "芯片代工",
                    "2nm"
                  ],
                  "source": "金融界",
                  "time": "10月21日"
                }
              ]
            },
            {
              "title": "三星、SK海力士",
              "news": [
                {
                  "title": "三星、SK 海力士升级中国工厂，拟转产更高层数 NAND",
                  "summary": "据路透社报道，三星和SK海力士正升级各自在中国的NAND闪存工厂，以应对长江存储竞争及AI数据中心需求。三星西安工厂拟转产286层V9 NAND，SK海力士拟将大连工厂产品从192层升级至240层或以上。",
                  "link": "https://news.qq.com/rain/a/20261021A0BA9R00",
                  "tags": [
                    "存储芯片",
                    "AI数据中心"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月21日"
                }
              ]
            },
            {
              "title": "Recursive",
              "news": [
                {
                  "title": "田渊栋：Recursive 发布 40B 开源编程模型 Flint",
                  "summary": "10月21日，AI初创公司Recursive发布首款本地编程模型Flint，为面向编程Agent的混合专家模型，总参数约398亿、每Token激活约25亿。开发大量依赖内部自动化AI研究系统，小团队四个月完成，以Apache 2.0开放权重，在Terminal-Bench 2.1取得54.9%成绩。",
                  "link": "https://news.qq.com/rain/a/20261022A0DXXM00",
                  "tags": [
                    "开源模型",
                    "编程"
                  ],
                  "source": "智东西",
                  "time": "10月21日"
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
                  "title": "比亚迪：L3 级自动驾驶有望 2028 年落地",
                  "summary": "10月21日，比亚迪集团高级副总裁、汽车新技术研究院院长杨冬生在世界智能网联汽车大会上表示，L3级别有条件自动驾驶有希望在2028年落地，更高级别自动驾驶通过迭代，有望再过1-2年落地。",
                  "link": "https://finance.eastmoney.com/a/202610213902714773.html",
                  "tags": [
                    "自动驾驶",
                    "L3"
                  ],
                  "source": "东方财富",
                  "time": "10月21日"
                }
              ]
            },
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉第三季度净利润同比下降 43%，FSD 订阅达 174 万",
                  "summary": "特斯拉发布第三季度财报，营收280.46亿美元同比基本持平；净利润7.87亿美元，同比下降43%。北美新车交付中超四分之三附带FSD订阅，全球活跃FSD订阅数达174万；Cybercab已于9月在奥斯汀加入Robotaxi服务，Optimus已在弗里蒙特开始生产。",
                  "link": "https://news.qq.com/rain/a/20261022A05QHC00",
                  "tags": [
                    "财报",
                    "FSD",
                    "Robotaxi"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月22日"
                }
              ]
            },
            {
              "title": "小鹏汽车",
              "news": [
                {
                  "title": "何小鹏：自动驾驶应跳过 L3，安全性要打个问号",
                  "summary": "小鹏汽车董事长何小鹏在世界智能网联汽车大会上表示，自动驾驶应该跳过L3，L3将安全责任转移给系统但用户体验未优化、安全性是否提高也需打问号。他看好L2、L4及重新定义后的L5路线，预计L4技术上2028年下半年落地。",
                  "link": "https://finance.eastmoney.com/a/202610213902733453.html",
                  "tags": [
                    "自动驾驶",
                    "行业观点"
                  ],
                  "source": "东方财富",
                  "time": "10月21日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树科技发布人形机器人 H2-X 功夫传奇",
                  "summary": "宇树科技宣布发布人形机器人H2-X「功夫传奇」，最长续航时间约8小时。官方此前公布2026世界物理AI大会暨宇树合作伙伴生态大会将于10月22日举行，H2-X在大会前一天公开。",
                  "link": "https://www.stcn.com/article/detail/4230555.html",
                  "tags": [
                    "人形机器人"
                  ],
                  "source": "证券时报",
                  "time": "10月21日"
                }
              ]
            },
            {
              "title": "生数科技",
              "news": [
                {
                  "title": "生数科技直播 Motubrain 2.0 具身模型训练全流程",
                  "summary": "生数科技世界模型团队宣布，10月21日开启Motubrain 2.0训练全流程公开直播，计划持续半个月，展示具身模型从训练、测试到能力迭代的过程，团队表示该模型即将开源。直播覆盖预训练、后训练、Agent任务执行和递归自我改进四个环节。",
                  "link": "https://www.7e.hk/article/show.asp?id=2112",
                  "tags": [
                    "具身智能",
                    "世界模型"
                  ],
                  "source": "奇异互动",
                  "time": "10月21日"
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
              "title": "Today AI",
              "news": [
                {
                  "title": "Today AI 累计融资超 2 亿美元，腾讯、蚂蚁参投",
                  "summary": "10月21日，由Teambition创始人、前豆包PC端负责人齐俊元创办的Today AI宣布累计完成超2亿美元融资，投资方包括IDG资本、腾讯、五源资本、蚂蚁集团、红杉中国、传音控股等。产品主打个性化主动式AI助理，已在国内上线。",
                  "link": "https://news.qq.com/rain/a/20261021A08OLF00",
                  "tags": [
                    "融资",
                    "AI助理"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月21日"
                }
              ]
            },
            {
              "title": "Flowtica",
              "news": [
                {
                  "title": "Flowtica 完成数千万元融资，AI 墨水屏硬件 Verso 将出货",
                  "summary": "AI硬件公司Flowtica完成新一轮数千万元融资，投资方包括祥峰资本、源码资本、五源资本和清水湾基金。其磁吸式墨水屏硬件Verso本周开始预收定金，首批量产产品计划12月出货，可贴在手机背面呈现日程、待办及AI提炼的信息。",
                  "link": "https://finance.eastmoney.com/a/202610213902692681.html",
                  "tags": [
                    "融资",
                    "AI硬件"
                  ],
                  "source": "东方财富",
                  "time": "10月21日"
                }
              ]
            },
            {
              "title": "乙太科技",
              "news": [
                {
                  "title": "乙太科技完成超亿元融资，华为哈勃、高瓴参投",
                  "summary": "物理空间智能基础设施公司乙太科技连续完成种子轮及天使轮融资，累计规模超亿元，产业投资方包括华为哈勃、嘉立创、自变量、智元、中科第五纪、软通动力，财务投资方包括高瓴、深高新投、上海半导体、中平资本等。",
                  "link": "https://news.qq.com/rain/a/20261021A054Z800",
                  "tags": [
                    "融资",
                    "空间智能"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月21日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "人工智能+行动",
              "news": [
                {
                  "title": "中办、国办：全面实施「人工智能+」行动",
                  "summary": "中办、国办发布《关于推动科技创新和产业创新深度融合的意见》，提出全面实施「人工智能+」行动，推动人工智能全方位赋能千行百业；在量子科技、脑机接口、具身智能、6G等前沿领域探索技术路线和商业模式，推动健全人工智能等前沿领域法律法规并探索「沙盒监管」。",
                  "link": "https://finance.eastmoney.com/a/202610213902751450.html",
                  "tags": [
                    "政策",
                    "人工智能+"
                  ],
                  "source": "东方财富",
                  "time": "10月21日"
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
          "date": "2026-10-22",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "26.7T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "20.5T tokens",
              "change": "↓44%"
            },
            {
              "model": "MiniMax M3.1 Flash (free) (minimax)",
              "score": "13.7T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "11.9T tokens",
              "change": "↓6%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "8.77T tokens",
              "change": "↑12%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "8.04T tokens",
              "change": "↑35%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "7.41T tokens",
              "change": "↓32%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.74T tokens",
              "change": "↑4%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.43T tokens",
              "change": "↓14%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "5.02T tokens",
              "change": "↓4%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.17T tokens",
              "change": "↓11%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "3T tokens",
              "change": "↓4%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "2.99T tokens",
              "change": "↓8%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.92T tokens",
              "change": "↓10%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "2.77T tokens",
              "change": "↓11%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.67T tokens",
              "change": "↑33%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.58T tokens",
              "change": "↓8%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.41T tokens",
              "change": "↑13%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "2.04T tokens",
              "change": "↓88%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.03T tokens",
              "change": "↓15%"
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
