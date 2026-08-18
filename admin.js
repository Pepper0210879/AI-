const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-18",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "布罗克曼回应OpenAI高管流失潮，称并非十分反常",
              "summary": "8月17日，OpenAI 总裁布罗克曼回应近期多名高管相继离职一事，称高管流失并非十分反常，公司运转正常。此前 OpenAI 多位核心高管在筹备 IPO 之际相继离职，引发外界对公司治理与团队稳定性的担忧。",
              "link": "https://36kr.com/newsflashes/3944221563763845",
              "tags": [
                "高管",
                "离职潮"
              ],
              "source": "36氪",
              "time": "8月17日"
            },
            {
              "title": "奥特曼：四年制大学耗时过长，两年恰到好处",
              "summary": "8月15日，OpenAI CEO 萨姆·奥特曼发表观点称，四年制大学耗时过长，两年教育恰到好处，认为 AI 时代应压缩高等教育周期。该言论引发关于 AI 冲击下教育模式变革的广泛讨论。",
              "link": "https://www.sohu.com/a/1063818292_100190264",
              "tags": [
                "教育",
                "观点"
              ],
              "source": "搜狐",
              "time": "8月15日"
            },
            {
              "title": "佛州男子用ChatGPT策划杀害前女友，OpenAI举报获刑",
              "summary": "8月17日消息，美国佛罗里达州一名男子使用 ChatGPT 描述杀害前女友的计划，OpenAI 发现后主动向 FBI 举报，该男子随后被捕并被定罪获刑。此案引发关于 AI 安全机制与平台责任的热议。",
              "link": "https://m.163.com/dy/article_v5/L4GUKR5D0514BT3D.html",
              "tags": [
                "AI安全",
                "法律"
              ],
              "source": "网易",
              "time": "8月17日消息"
            },
            {
              "title": "OpenAI与英伟达扩大合作，2030年AI工厂规模或达6000亿美元",
              "summary": "8月17日，OpenAI 与英伟达宣布扩大计算合作，共同建设 PORTS-Pike 人工智能工厂，2030 年相关投资规模或达 6000 亿美元，用于支撑下一代大模型训练与推理。",
              "link": "https://m.nbd.com.cn/articles/2026-08-17/4544492.html",
              "tags": [
                "算力",
                "数据中心"
              ],
              "source": "每日经济新闻",
              "time": "8月17日"
            },
            {
              "title": "Codex开放1M上下文，GPT-5.6 Sol百万上下文能力上线",
              "summary": "8月17日消息，Codex 中的 GPT-5.6 Sol 百万上下文能力已可通过 ChatGPT 账号使用，开发者无需额外配置即可处理超长代码库与文档，大幅提升复杂工程任务的完成能力。",
              "link": "https://finance.sina.cn/tech/2026-08-17/detail-ininqtnu9160707.d.html?vt=4",
              "tags": [
                "Codex",
                "上下文窗口"
              ],
              "source": "新浪财经",
              "time": "8月17日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic预计2028年营收2000亿美元，10月或启动IPO",
              "summary": "8月17日，Anthropic 预计 2028 年营收将达 2000 亿美元，市场消息称其最快 10 月启动 IPO，潜在估值或达 2 万亿美元，成为 AI 领域规模最大的上市案之一。",
              "link": "https://finance.eastmoney.com/a/202608173843249047.html",
              "tags": [
                "IPO",
                "营收预测"
              ],
              "source": "东方财富",
              "time": "8月17日"
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
              "title": "英伟达将OpenAI俄亥俄数据中心担保下调至1050亿美元",
              "summary": "8月17日消息，英伟达将 OpenAI 俄亥俄州 AI 数据中心的担保金额由 2500 亿美元下调至 1050 亿美元，缩减了自身承担的融资风险，双方合作继续推进。",
              "link": "https://k.sina.com.cn/article_5182171545_134e1a99902002ibyi.html?from=tech",
              "tags": [
                "数据中心",
                "担保"
              ],
              "source": "新浪财经",
              "time": "8月17日"
            },
            {
              "title": "黄仁勋之女黄敏珊将访LG，推进人形机器人合作",
              "summary": "消息称英伟达高管、黄仁勋之女黄敏珊将于 8 月 18 日到访 LG 电子机器人中心，现场考察其数据工厂，并就人形机器人合作与 LG 高层举行闭门会谈，深化双方在 AI 基础设施与机器人领域协作。",
              "link": "https://finance.eastmoney.com/a/202608173843079212.html",
              "tags": [
                "人形机器人",
                "合作"
              ],
              "source": "东方财富",
              "time": "8月18日"
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
              "title": "千问办公开源MyContext上下文基础设施",
              "summary": "8月17日消息，千问办公宣布开源 MyContext 上下文基础设施，为智能体与 Agent 场景提供统一的上下文管理与记忆能力，帮助开发者构建更可靠的长任务应用。",
              "link": "https://www.cnstock.com/commonDetail/761275",
              "tags": [
                "开源",
                "上下文管理"
              ],
              "source": "中国证券网",
              "time": "8月17日消息"
            },
            {
              "title": "阿里发布AI音乐模型快乐虾米1.0",
              "summary": "8月17日，阿里发布 AI 音乐模型快乐虾米（Happy Shrimp）1.0，支持根据需求生成完整音乐作品，面向音乐创作场景开放能力。",
              "link": "https://k.sina.com.cn/article_1644114654_61ff32de020028gqy.html?from=news&subch=onews",
              "tags": [
                "音乐",
                "生成式AI"
              ],
              "source": "新浪财经",
              "time": "8月17日"
            },
            {
              "title": "Qwen-Audio-3.0语音模型上线千问AI平台",
              "summary": "8月17日，阿里千问上线 Qwen-Audio-3.0 语音模型，具备更强的语音理解与生成能力，已可在千问 AI 平台体验，为多模态应用提供支持。",
              "link": "https://www.sohu.com/a/1063974085_122014422",
              "tags": [
                "语音",
                "多模态"
              ],
              "source": "搜狐",
              "time": "8月17日"
            },
            {
              "title": "联发科Day-0适配Qwen3.8，端侧AI落地手机与汽车",
              "summary": "8月17日消息，联发科宣布完成对千问 Qwen 3.8 的 Day-0 适配，天玑汽车座舱平台 C-X1 与旗舰移动芯片率先实现端侧部署，覆盖从手机到汽车的全场景。",
              "link": "https://news.qq.com/rain/a/20260817A0B5L400",
              "tags": [
                "端侧AI",
                "芯片"
              ],
              "source": "腾讯新闻",
              "time": "8月17日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包\"工作任务\"支持手机远程操控电脑",
              "summary": "8月17日，火山引擎豆包「工作任务」功能新增手机远程操控电脑能力，用户可通过手机远程向电脑下发并执行任务，扩展了智能体的远程操作场景。",
              "link": "https://finance.sina.cn/2026-08-17/detail-ininrkkr7846005.d.html?vt=4",
              "tags": [
                "智能体",
                "远程操控"
              ],
              "source": "新浪财经",
              "time": "8月17日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": []
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
              "title": "支付宝",
              "news": [
                {
                  "title": "支付宝发布智能体商业底座与AHA协议",
                  "summary": "8月17日，支付宝发布智能体商业底座及 AHA 协议，为 AI 智能体的商业化落地提供统一的支付、信用与开放标准，降低开发者变现门槛。",
                  "link": "https://www.stcn.com/article/detail/4080157.html",
                  "tags": [
                    "智能体",
                    "商业变现"
                  ],
                  "source": "证券时报",
                  "time": "8月17日"
                }
              ]
            },
            {
              "title": "字节跳动",
              "news": [
                {
                  "title": "字节跳动与美国电影协会达成AI模型版权保护协议",
                  "summary": "当地时间8月17日，字节跳动与美国电影协会（MPA）就 AI 模型版权保护达成协议，结束历时约 6 个月的争议，为 AI 训练数据使用确立框架。",
                  "link": "https://finance.eastmoney.com/a/202608183843888247.html",
                  "tags": [
                    "版权",
                    "影视行业"
                  ],
                  "source": "东方财富",
                  "time": "当地时间8月17日"
                }
              ]
            },
            {
              "title": "亚马逊",
              "news": [
                {
                  "title": "亚马逊被曝销毁珍稀书籍用于AI训练",
                  "summary": "8月18日消息，调查发现亚马逊在 AI 训练设施中销毁珍稀书籍，通过扫描书页后切断书脊的方式处理，用于训练 AI 模型，引发版权与文化遗产保护的广泛争议。",
                  "link": "https://www.163.com/dy/article/L4JMUO280511BLFD.html",
                  "tags": [
                    "版权",
                    "训练数据"
                  ],
                  "source": "网易",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "美团",
              "news": [
                {
                  "title": "王莆中：美团AI变革将掀起\"养虾运动\"",
                  "summary": "8月17日，美团 CEO 王莆中谈及 AI 变革，称美团业务每天消耗千万级 Token，将掀起行业「养虾运动」，推动各业务线全面拥抱大模型。",
                  "link": "https://finance.jrj.com.cn/2026/08/17085858134190.shtml",
                  "tags": [
                    "AI应用",
                    "观点"
                  ],
                  "source": "金融界",
                  "time": "8月17日"
                }
              ]
            },
            {
              "title": "360",
              "news": [
                {
                  "title": "周鸿祎发全员信：360以AI\"重新创业\"",
                  "summary": "8月17日，360 董事长周鸿祎发布全员信，宣布以 AI 为核心「重新创业」，推动公司全面转型，聚焦大模型与数字安全融合。",
                  "link": "https://www.eeo.com.cn/2026/0817/1001790.shtml",
                  "tags": [
                    "全员信",
                    "转型"
                  ],
                  "source": "经济观察报",
                  "time": "8月17日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": []
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树发布\"超人\"机器人，原地跳高2米破人类纪录",
                  "summary": "8月17日，宇树科技在上市前夕发布人形机器人「超人」，原地跳高 2 米、极限速度 12.66 米/秒，双双超越人类纪录，仅用 3 个多月研发完成。",
                  "link": "https://m.thepaper.cn/newsDetail_forward_33800082",
                  "tags": [
                    "人形机器人",
                    "运动能力"
                  ],
                  "source": "澎湃新闻",
                  "time": "8月17日"
                }
              ]
            },
            {
              "title": "九光技术",
              "news": [
                {
                  "title": "九光技术发布人形机器人小睿G3",
                  "summary": "8月17日，九光技术发布新款人形机器人小睿 G3，可在强辐射、有毒等危险环境中作业，定价 20 万美元，主打特种场景应用。",
                  "link": "https://finance.sina.cn/2026-08-17/detail-ininrzhc6731832.d.html?vt=4",
                  "tags": [
                    "人形机器人",
                    "特种作业"
                  ],
                  "source": "新浪财经",
                  "time": "8月17日"
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
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树科技8月19日科创板上市",
                  "summary": "8月17日，宇树科技将于 8 月 19 日在科创板上市，中签率仅万分之一点八，预计上市后创始人王兴兴身家或迎百亿级跃升。",
                  "link": "https://www.bjnews.com.cn/detail-1786969581129111.html",
                  "tags": [
                    "IPO",
                    "机器人"
                  ],
                  "source": "新京报",
                  "time": "8月17日"
                }
              ]
            },
            {
              "title": "Gravis Robotics",
              "news": [
                {
                  "title": "Gravis Robotics获软银2亿美元A轮融资",
                  "summary": "8月17日，建筑机器人公司 Gravis Robotics 完成 2 亿美元 A 轮融资，由软银领投，资金将用于扩大建筑自动化机器人的研发与商业化。",
                  "link": "https://www.jiemian.com/article/14935750.html",
                  "tags": [
                    "融资",
                    "建筑机器人"
                  ],
                  "source": "界面新闻",
                  "time": "8月17日"
                }
              ]
            },
            {
              "title": "Higgsfield",
              "news": [
                {
                  "title": "Higgsfield完成4亿美元融资，估值达54亿美元",
                  "summary": "8月17日，AI 视频生成公司 Higgsfield 完成 4 亿美元融资，估值达 54 亿美元，资金将用于扩充 AI 视频生成模型研发。",
                  "link": "https://finance.jrj.com.cn/2026/08/17145458139507.shtml",
                  "tags": [
                    "融资",
                    "AI视频"
                  ],
                  "source": "金融界",
                  "time": "8月17日"
                }
              ]
            },
            {
              "title": "猿声科技",
              "news": [
                {
                  "title": "猿声科技连续三轮融资，触觉传感器受资本青睐",
                  "summary": "8月17日消息，触觉传感器厂商猿声科技完成连续三轮融资，累计融资金额超亿元，显示具身智能产业链上游传感技术受资本追捧。",
                  "link": "https://36kr.com/newsflashes/3943073201831296",
                  "tags": [
                    "融资",
                    "触觉传感器"
                  ],
                  "source": "36氪",
                  "time": "8月17日消息"
                }
              ]
            },
            {
              "title": "法拉第未来",
              "news": [
                {
                  "title": "法拉第未来机器人业务拟独立融资上市",
                  "summary": "8月17日，法拉第未来（FF）宣布旗下机器人业务拟独立融资并推动上市，贾跃亭再度布局 AI 机器人赛道，引发市场关注。",
                  "link": "https://tech.ifeng.com/c/8venwICvJWA",
                  "tags": [
                    "机器人",
                    "融资"
                  ],
                  "source": "凤凰科技",
                  "time": "8月17日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "Fidji Simo",
              "news": [
                {
                  "title": "Fidji Simo：AI将治愈所有疾病，但仅靠模型不够",
                  "summary": "8月18日消息，OpenAI 前二号人物、现生物科技公司 ChroniBio CEO Fidji Simo 表示，AI 将治愈所有疾病，但仅靠模型不够，呼吁加快建设生物数据基础设施，以解锁 AI 在医疗领域的全部潜力。",
                  "link": "https://tech.ifeng.com/c/8vgL8IC36fI",
                  "tags": [
                    "观点",
                    "AI医疗"
                  ],
                  "source": "凤凰科技",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "TrendForce",
              "news": [
                {
                  "title": "TrendForce：液冷散热成高阶AI基础设施标配",
                  "summary": "8月17日消息，TrendForce 报告显示，液冷散热正成为高阶 AI 基础设施的标配，2026 年相关渗透率或达 53%，带动液冷产业链景气上行。",
                  "link": "https://www.cls.cn/detail/2455860",
                  "tags": [
                    "液冷",
                    "数据中心"
                  ],
                  "source": "财联社",
                  "time": "8月17日消息"
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
          "date": "2026-08-18",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.3T tokens",
              "change": "↑20%"
            },
            {
              "model": "Hy3",
              "score": "9.7T tokens",
              "change": "↑9%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "5.57T tokens",
              "change": "↑19%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.99T tokens",
              "change": "↑6%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.77T tokens",
              "change": "↑17%"
            },
            {
              "model": "GLM 5.2",
              "score": "4.41T tokens",
              "change": "↑21%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "2.77T tokens",
              "change": "↑19%"
            },
            {
              "model": "Claude Opus 5",
              "score": "2.7T tokens",
              "change": "↑98%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "2.66T tokens",
              "change": "↑3%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.39T tokens",
              "change": "↑1%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.63T tokens",
              "change": "↑12%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.55T tokens",
              "change": "↑8%"
            },
            {
              "model": "Kimi K3",
              "score": "1.37T tokens",
              "change": "↑4%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.08T tokens",
              "change": "↑4%"
            },
            {
              "model": "GPT-5.6 Terra",
              "score": "948B tokens",
              "change": "↑16%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "922B tokens",
              "change": "↑26%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "814B tokens",
              "change": "↑9%"
            },
            {
              "model": "DeepSeek V4 Pro 0813",
              "score": "796B tokens",
              "change": "新上榜"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "747B tokens",
              "change": "↑14%"
            },
            {
              "model": "Nemotron 3.5 Lightning (free)",
              "score": "724B tokens",
              "change": "新上榜"
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
