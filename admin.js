const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-12",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 宣布 GPT-6.1 Sol 上下文长度提升至 500k",
              "summary": "10月12日消息，OpenAI 宣布 GPT-6.1 Sol 默认上下文长度从 272k 提升至 500k，增幅约 84%，可处理更长的文档与代码，进一步强化长文本能力。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-10-12/doc-iniuxmtr7179077.shtml",
              "tags": [
                "上下文长度",
                "模型升级"
              ],
              "source": "新浪财经",
              "time": "10月12日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Claude 半年封杀 1140 万账号，申诉翻案仅 4.2 万",
              "summary": "10月11日消息，据外媒报道，Anthropic 旗下 Claude 在过去半年封禁约 1140 万个账号，其中仅 4.2 万个申诉后成功解封，翻案率不足 0.4%，绝大多数账号因涉嫌滥用被永久封禁。",
              "link": "https://finance.sina.com.cn/roll/2026-10-11/doc-iniuvpan0595959.shtml",
              "tags": [
                "账号封禁",
                "安全治理"
              ],
              "source": "新浪财经",
              "time": "10月11日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": []
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "马斯克：SpaceXAI 官方账号更名 SpaceXSI",
              "summary": "当地时间10月10日消息，马斯克在社交平台发布截图，显示 SpaceXAI 官方账号已更名为「SpaceX Super Intelligence」（@SpaceXSI）。此前马斯克曾表示 SpaceX 是一家超级智能（SI）公司，将把 SpaceXAI 改名为 SpaceXSI。",
              "link": "https://www.ithome.com/1/011/620.htm",
              "tags": [
                "品牌更名",
                "超级智能"
              ],
              "source": "IT之家",
              "time": "当地时间10月10日"
            },
            {
              "title": "马斯克：Terrafab 工厂将重塑芯片制造",
              "summary": "当地时间10月10日，马斯克表示，凭借旗下公司在定制设备制造上的专长，其芯片工厂 Terrafab 很可能「找到比任何人都更好地制造芯片的方法」。他坦言目前尚不清楚如何制造微芯片，但称会弄明白。",
              "link": "https://finance.sina.com.cn/stock/bxjj/2026-10-11/doc-iniuvpap7328938.shtml",
              "tags": [
                "芯片制造",
                "Terrafab"
              ],
              "source": "新浪财经",
              "time": "当地时间10月10日"
            },
            {
              "title": "马斯克：Grok Bot 拍照信用卡即可购物",
              "summary": "10月11日消息，马斯克称用户给信用卡拍照即可通过 Grok Bot 购物，OpenAI 高管蒂博调侃「不如直接把卡发网上」，凸显双方在个人 AI 智能体购物功能上的竞争。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-10-11/doc-iniuvxsc5653015.shtml",
              "tags": [
                "个人智能体",
                "Grok Bot"
              ],
              "source": "新浪财经",
              "time": "10月11日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达据悉洽谈追加投资或收购 Reflection AI",
              "summary": "10月12日消息，据报道，英伟达正与美国开放权重模型开发商 Reflection AI 进行初步谈判，讨论收购或进一步追加投资。潜在交易结构包括「收购式招聘」、提供更多芯片或增加股权投资等。",
              "link": "https://video.sina.com.cn/p/finance/2026-10-12/detail-iniuxmtq0401542.d.html",
              "tags": [
                "收购",
                "开放权重模型"
              ],
              "source": "新浪科技",
              "time": "10月12日消息"
            },
            {
              "title": "HPE 确认英伟达将推出 Rubin PCIe GPU",
              "summary": "10月12日消息，据 HPE 方面确认，英伟达将推出面向服务器的 Rubin PCIe 版本 GPU，进一步扩展下一代 Rubin 架构在数据中心市场的落地。",
              "link": "https://www.ithome.com/1/011/747.htm",
              "tags": [
                "Rubin",
                "GPU"
              ],
              "source": "IT之家",
              "time": "10月12日消息"
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
              "title": "通义千问 Qwen-Image-2.1 Pro/Turbo API 上线",
              "summary": "10月11日消息，通义千问 Qwen-Image-2.1 Pro 和 Turbo API 正式上线千问 AI 平台，面向开发者开放，可生成更高质量的图像，支持工作流集成。",
              "link": "https://finance.sina.com.cn/stock/t/2026-10-11/doc-iniuvxsh0514826.shtml",
              "tags": [
                "图像生成",
                "API"
              ],
              "source": "新浪财经",
              "time": "10月11日消息"
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
              "title": "腾讯元器宣布 11月9日停止服务",
              "summary": "10月10日消息，腾讯智能体创作平台「元器」宣布将于 11月9日停止服务，用户在平台上创建的智能体将不再可用。这是继 QClaw 后腾讯近期关停的又一款 Agent 产品。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-10-10/doc-iniuufia0641857.shtml",
              "tags": [
                "智能体平台",
                "停服"
              ],
              "source": "新浪科技",
              "time": "10月10日消息"
            },
            {
              "title": "字节、腾讯加速个人 AI 智能体研发，追赶 Meta Muse",
              "summary": "10月11日消息，据 IT之家报道，字节跳动与腾讯正加速个人 AI 智能体研发，对标 Meta 推出的个人智能体 Muse，竞争从对话式助手转向能主动执行任务的个人智能体赛道。",
              "link": "https://www.ithome.com/1/011/548.htm",
              "tags": [
                "个人智能体",
                "Meta Muse"
              ],
              "source": "IT之家",
              "time": "10月11日消息"
            },
            {
              "title": "腾讯入股墨奇智能",
              "summary": "10月10日消息，天眼查显示，上海墨奇万象智能技术有限公司发生工商变更，新增腾讯旗下上海启善投资有限公司为股东，注册资本由约 154.2 万元增至约 162.2 万元。",
              "link": "https://www.36kr.com/newsflashes/4019769731469447",
              "tags": [
                "投资",
                "工商变更"
              ],
              "source": "36氪",
              "time": "10月10日消息"
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
          "news": [
            {
              "title": "月之暗面注册资本增至约 1437 万元",
              "summary": "10月10日消息，天眼查显示，北京月之暗面科技股份有限公司注册资本由约 1157.53 万元增至约 1437.23 万元，增幅约 24%。今年以来该公司已多次增资，注册资本从 100 万元增至约 1437.23 万元。",
              "link": "https://finance.eastmoney.com/a/202610103891870768.html",
              "tags": [
                "增资",
                "工商变更"
              ],
              "source": "东方财富网",
              "time": "10月10日消息"
            }
          ]
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "华为×华东师大时序预测模型登顶国际双榜单",
              "summary": "10月11日消息，华为与华东师范大学联合研发的时序预测基础模型，登顶国际权威时序测评 GIFT-Eval 等双榜单，在时序预测任务上取得领先成绩。",
              "link": "https://www.sohu.com/a/1086369164_114760",
              "tags": [
                "时序预测",
                "基础模型"
              ],
              "source": "搜狐",
              "time": "10月11日消息"
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
              "title": "蚂蚁集团",
              "news": [
                {
                  "title": "蚂蚁「灵光」开启内测，对标 Meta Muse",
                  "summary": "10月11日消息，蚂蚁集团旗下 AI 产品「灵光」开启新版本小范围内测，新版对标 Meta 个人智能体 Muse，核心升级是从聊天助手转向拥有长期记忆、可主动推进任务的 AI 原生个人智能体。",
                  "link": "https://www.ithome.com/1/011/593.htm",
                  "tags": [
                    "个人智能体",
                    "内测"
                  ],
                  "source": "IT之家",
                  "time": "10月11日消息"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "苹果首款智能家庭中枢定名 HomeView",
                  "summary": "10月11日消息，据古尔曼爆料，苹果首款智能家庭中枢定名 HomeView，搭载 A18 芯片，提供四种配色可选，预计 10月13日「欢迎回家」活动正式发布，11月出货。",
                  "link": "https://www.ithome.com/1/011/709.htm",
                  "tags": [
                    "智能家居",
                    "HomeView"
                  ],
                  "source": "IT之家",
                  "time": "10月11日消息"
                },
                {
                  "title": "古尔曼：苹果正研发不录像的 AI 摄像头 J450",
                  "summary": "10月11日消息，据古尔曼透露，苹果正在研发代号 J450 的家用安防摄像头，与市面产品不同，它不会录制视频，而是用 AI 分析环境并以文字描述形式推送动态，主打隐私。",
                  "link": "https://news.sina.com.cn/w/2026-10-11/doc-iniuumqz7359379.shtml",
                  "tags": [
                    "智能摄像头",
                    "隐私"
                  ],
                  "source": "新浪新闻",
                  "time": "10月11日消息"
                }
              ]
            },
            {
              "title": "高通",
              "news": [
                {
                  "title": "高通 CEO：AI 厂商计划 2028 年手机跑千亿参数模型",
                  "summary": "10月11日消息，高通 CEO 克里斯蒂亚诺·阿蒙透露，部分前沿 AI 公司希望到 2028 年让手机持续运行 1000 亿参数的大模型，内存与散热成为关键瓶颈。",
                  "link": "https://finance.sina.cn/tech/2026-10-11/detail-iniuwkhf8764803.d.html",
                  "tags": [
                    "端侧AI",
                    "手机芯片"
                  ],
                  "source": "新浪科技",
                  "time": "10月11日消息"
                }
              ]
            },
            {
              "title": "酷派",
              "news": [
                {
                  "title": "酷派阔直板智能体手机背部外观曝光",
                  "summary": "10月11日消息，酷派 6.3 英寸阔直板新机背部外观曝光，消息称搭载联发科 Helio G99 处理器，配备 720p LCD 屏，预装 DroiClaw 诸葛3 AI OS，主打智能体体验。",
                  "link": "https://www.163.com/dy/article/L90LNINL0553TDTR.html",
                  "tags": [
                    "智能体手机",
                    "AI OS"
                  ],
                  "source": "网易",
                  "time": "10月11日消息"
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
              "title": "创维",
              "news": [
                {
                  "title": "消息称创维内部孵化外骨骼产品，主打老年助行",
                  "summary": "10月12日消息，据消息称，创维集团内部孵化一款外骨骼产品，主打老年助行场景，通过 AI 与机器人技术为老年人行走提供助力。",
                  "link": "https://www.sohu.com/a/1086555769_114760",
                  "tags": [
                    "外骨骼",
                    "老年助行"
                  ],
                  "source": "搜狐",
                  "time": "10月12日消息"
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
              "title": "睿质科技",
              "news": [
                {
                  "title": "睿质科技完成首轮数千万元融资",
                  "summary": "10月11日消息，据中关村资本消息，睿质科技完成首轮数千万元融资，由中关村资本领投、中关村科学城公司跟投，资金将用于科研智能体工作平台与工业级跨尺度智能计算引擎迭代。",
                  "link": "https://www.sohu.com/a/1086319474_130887",
                  "tags": [
                    "融资",
                    "科研智能体"
                  ],
                  "source": "搜狐",
                  "time": "10月11日消息"
                }
              ]
            },
            {
              "title": "庞伯特",
              "news": [
                {
                  "title": "AI 体育硬件公司庞伯特完成数亿元 B 轮融资",
                  "summary": "10月11日消息，AI 体育硬件公司「庞伯特」完成数亿元 B 轮融资，由上海国投先导基金领投，元禾璞华、浦东创投等跟投，老股东蓝驰创投持续加注。",
                  "link": "https://www.jiemian.com/article/15176547.html",
                  "tags": [
                    "B轮融资",
                    "AI体育"
                  ],
                  "source": "界面新闻",
                  "time": "10月11日消息"
                }
              ]
            },
            {
              "title": "利太智药",
              "news": [
                {
                  "title": "AI 制药公司利太智药完成近 5000 万元种子轮融资",
                  "summary": "10月10日消息，利太智药宣布完成近 5000 万元种子轮融资，由讯飞创投、L2F 光源创业者基金及知名产业方联合投资，资金将用于核心管线研发、算力投入与专利布局。",
                  "link": "https://fund.eastmoney.com/a/202610103892000121.html",
                  "tags": [
                    "种子轮",
                    "AI制药"
                  ],
                  "source": "天天基金网",
                  "time": "10月10日消息"
                }
              ]
            },
            {
              "title": "Decart",
              "news": [
                {
                  "title": "亚马逊拟 70 亿美元收购 AI 初创公司 Decart",
                  "summary": "10月12日消息，据报道，亚马逊正洽谈以约 70 亿美元收购 AI 初创公司 Decart，后者主打 AI 芯片间的「通用适配器」技术，Anthropic 此前已放手该标的。",
                  "link": "https://finance.eastmoney.com/a/202610123892154195.html",
                  "tags": [
                    "收购",
                    "AI芯片"
                  ],
                  "source": "东方财富网",
                  "time": "10月12日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软 CEO 纳德拉：AI 需配「紧急刹车」机制",
                  "summary": "当地时间10月10日消息，微软 CEO 纳德拉表示，企业应将强大 AI 模型视为潜在的内部威胁，假定其可能已被攻破，并建立「紧急刹车」机制，授权人员应能随时暂停或关闭模型。",
                  "link": "https://www.sohu.com/a/1086216416_114984",
                  "tags": [
                    "AI安全",
                    "AI治理"
                  ],
                  "source": "搜狐",
                  "time": "当地时间10月10日"
                }
              ]
            },
            {
              "title": "陶哲轩",
              "news": [
                {
                  "title": "陶哲轩：数学 2.0 时代已至",
                  "summary": "10月11日消息，数学家陶哲轩公开加州理工学院演讲《数学 2.0》，认为 AI 正在降低数学问题求解成本，使数学研究从「证明稀缺」走向「证明富足」，人类工作重心转向理解与验证证明。",
                  "link": "https://www.qbitai.com/2026/10/502594.html",
                  "tags": [
                    "AI数学",
                    "数学2.0"
                  ],
                  "source": "量子位",
                  "time": "10月11日消息"
                }
              ]
            },
            {
              "title": "AI 声纹克隆",
              "news": [
                {
                  "title": "国安部提醒：接陌生来电先沉默三秒，防 AI 声纹克隆",
                  "summary": "10月12日消息，国家安全部提醒公众，接听陌生来电时先沉默三秒，因为数秒语音样本可能被不法分子用于 AI 声纹克隆，进而冒充身份实施诈骗等违法犯罪行为。",
                  "link": "https://news.china.com/socialgd/10000169/20261012/49788814.html",
                  "tags": [
                    "声纹克隆",
                    "AI诈骗"
                  ],
                  "source": "中华网",
                  "time": "10月12日消息"
                }
              ]
            },
            {
              "title": "AI 安全监管",
              "news": [
                {
                  "title": "英国 AI 国务大臣呼吁企业加大 AI 安全保障力度",
                  "summary": "10月12日消息，英国 AI 国务大臣呼吁人工智能企业加大安全保障力度，加强网络防御，防范 AI 系统被滥用带来的安全风险。",
                  "link": "https://www.163.com/dy/article/L91A66PH0511B8LM.html",
                  "tags": [
                    "AI安全",
                    "监管"
                  ],
                  "source": "网易",
                  "time": "10月12日消息"
                }
              ]
            },
            {
              "title": "何恺明",
              "news": [
                {
                  "title": "何恺明团队发布多模态 Harness 框架",
                  "summary": "10月11日消息，何恺明团队发布面向多模态模型的视觉原生 Harness 框架，为多模态模型的评测与开发提供统一接口。",
                  "link": "https://www.qbitai.com/2026/10/502628.html",
                  "tags": [
                    "多模态",
                    "评测框架"
                  ],
                  "source": "量子位",
                  "time": "10月11日消息"
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
          "date": "2026-10-12",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "41T tokens",
              "change": "↑60%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "12.2T tokens",
              "change": "↑26%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "11.5T tokens",
              "change": "↑19%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "8.84T tokens",
              "change": "—"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "8.28T tokens",
              "change": "↑27%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "7.08T tokens",
              "change": "↑15%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "6.87T tokens",
              "change": "↑22%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "5.02T tokens",
              "change": "↑104%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.92T tokens",
              "change": "↓18%"
            },
            {
              "model": "Space Bunny Alpha (stealth)",
              "score": "4.2T tokens",
              "change": "↓89%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.79T tokens",
              "change": "↑29%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.36T tokens",
              "change": "↑8%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.07T tokens",
              "change": "↓5%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "2.51T tokens",
              "change": "↑21%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.43T tokens",
              "change": "↑208%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.27T tokens",
              "change": "↑58%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.15T tokens",
              "change": "↑33%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.12T tokens",
              "change": "↑191%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.05T tokens",
              "change": "↓6%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "1.84T tokens",
              "change": "↓58%"
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
};;

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
