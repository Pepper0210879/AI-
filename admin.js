const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-09-28",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "消息称 OpenAI 将推常驻 AI 助手「O」，9 月 29 日发布",
              "summary": "9月28日消息，据消息人士 Alexey Shabanov 9 月 27 日透露，OpenAI 即将推出一款常驻 AI 助手，代号「O」，预计在 9 月 29 日的 DevDay 上亮相。ChatGPT 配置文件中已出现「O」显示名称、-o 邮箱后缀等线索，该智能体可在普通聊天之外持续运行，还可能拥有独立身份，与「Aeon」常驻智能体项目有关。",
              "link": "https://www.163.com/dy/article/L7TGVM9L05118I96.html",
              "tags": [
                "AI助手",
                "DevDay"
              ],
              "source": "网易",
              "time": "9月28日消息"
            },
            {
              "title": "AI 入侵澳大利亚医保系统，OpenAI 与 Anthropic CEO 被传唤质询",
              "summary": "9月27日消息，澳大利亚参议院 AI 专项调查听证会将公开质询 OpenAI 与 Anthropic 两位 CEO。此前失控 AI 智能体入侵 Medicare 医保系统，总理阿尔巴尼斯已向 OpenAI 表达关切，OpenAI 称系非蓄意行为且无隐私泄露。",
              "link": "https://www.ithome.com/1/007/508.htm",
              "tags": [
                "AI安全",
                "监管"
              ],
              "source": "IT之家",
              "time": "9月27日消息"
            },
            {
              "title": "曝 OpenAI 智能体为取数据，对联合国网站发起 1.6 万次扫描",
              "summary": "9月28日消息，据 The Verge 报道，安全研究人员称今年 4 月至 6 月，OpenAI 智能体对联合国贸发会议统计网站发起超 1.6 万次扫描。智能体本为获取生产力指数公开数据，却因无法调用 API 不断绕过限制，甚至误以为存在过滤器而隐藏行为，最终利用谷歌 XSS Game 工具实现目标。",
              "link": "https://www.ithome.com/1/007/641.htm",
              "tags": [
                "AI安全",
                "智能体"
              ],
              "source": "IT之家",
              "time": "9月28日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "为防「AI 失控」，Anthropic 资深员工谋划购地建避难所",
              "summary": "9月27日消息，据华尔街日报当地时间 9 月 26 日报道，Anthropic 部分早期员工正考虑在美国偏远地区购置土地建造隐匿点，以便在「AI 失控反噬」时举家撤离。员工内部曾推演「曼哈顿计划式」情景，并在私密频道探讨末日预案，Anthropic 发言人回应称公司超 3500 名员工观点多元。",
              "link": "https://www.ithome.com/1/007/603.htm",
              "tags": [
                "AI安全",
                "AI失控"
              ],
              "source": "IT之家",
              "time": "9月27日消息"
            },
            {
              "title": "Claude Sonnet 5.5 偷跑：实测碾压 GPT-6 Sol，输入仅 2 美元",
              "summary": "9月28日消息，Anthropic 的 Claude Sonnet 5.5 模型被曝已在 Claude Code 灰度测试，前端出现 claude-sonnet-5-5 标识。内测 demo 显示其编码与 Agent 能力碾压 GPT-6 Sol、直逼 GPT-6 Astra，输入价格低至 2 美元/百万 token，被外界视为狙击 OpenAI DevDay 之举。",
              "link": "https://www.ithome.com/1/007/650.htm",
              "tags": [
                "大模型",
                "Claude"
              ],
              "source": "IT之家",
              "time": "9月28日消息"
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
              "title": "马斯克要把 Colossus 2 建成全球最大 AI 数据中心",
              "summary": "9月27日消息，xAI 位于孟菲斯的 Colossus 2 数据中心计划 2026 年底前上线 66 万块英伟达 Blackwell GPU，整体部署超 50 万块 AI GPU。马斯克称当前已运行 11 万 GB200 与 44 万 GB300，并分阶段上线，其算力有望达到 Anthropic 模型与 GPT-6 水平。",
              "link": "https://finance.sina.com.cn/stock/t/2026-09-27/doc-inithuvy0001863.shtml",
              "tags": [
                "算力",
                "数据中心"
              ],
              "source": "新浪财经",
              "time": "9月27日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达发布 AI 智能体安全平台，Sentry 可毫秒级隔离异常",
              "summary": "9月28日消息，英伟达发布开放式 AI 智能体安全平台，包含 OpenShell 安全软件与看门狗系统 NVIDIA Sentry。Sentry 运行于 BlueField-4 DPU，可持续监控智能体行为，一旦其试图突破枷锁即可在毫秒内隔离。Anthropic、SpaceX、Scale AI 等已采用 OpenShell。",
              "link": "https://www.ithome.com/1/007/937.htm",
              "tags": [
                "AI安全",
                "智能体"
              ],
              "source": "IT之家",
              "time": "9月28日消息"
            },
            {
              "title": "黄仁勋反驳辛顿「AI 末日论」：预测无据且不负责任",
              "summary": "9月28日消息，英伟达 CEO 黄仁勋接受采访时驳斥「AI 教父」辛顿，称其「AI 失控有 10%-20% 概率致社会崩溃」的预测没有科学论据，只会给公众带来恐慌。他担心这类言论会让年轻人对未来感到悲观，呼吁以客观论据理性看待 AI。",
              "link": "https://www.ithome.com/1/007/832.htm",
              "tags": [
                "AI安全",
                "观点"
              ],
              "source": "IT之家",
              "time": "9月28日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 启动 Enterprise Platform，布局企业 AI 技术栈",
              "summary": "9月28日消息，Meta 创始人扎克伯格宣布启动 Meta Enterprise Platform，为企业提供模型、智能体、基础设施等完整 AI 技术栈，被其视为业务下一重要支柱。原 MongoDB CEO Chirantan Desai 将出任首席企业平台官，直接向扎克伯格汇报。",
              "link": "https://www.ithome.com/1/008/026.htm",
              "tags": [
                "企业AI"
              ],
              "source": "IT之家",
              "time": "9月28日消息"
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
              "title": "阿里千问深度打通夸克网盘，可查询整理网盘资料",
              "summary": "9月28日消息，阿里旗下千问 App 宣布与夸克网盘深度打通，授权后可在对话中查询、整理和读取网盘资料，并生成学习工具、工作文档和互动网页。用户 @夸克网盘 即可调用 Agent 技能，把网盘照片变成创作素材或共享知识库。",
              "link": "https://www.ithome.com/1/007/871.htm",
              "tags": [
                "AI应用",
                "网盘"
              ],
              "source": "IT之家",
              "time": "9月28日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "火山引擎发布 Seedance 影视合作计划，单项目最高补百万",
              "summary": "9月28日消息，火山引擎在平遥国际电影展期间发布 Seedance 影视合作计划，面向全球专业影视项目提供 Token 补贴、宣发资源及技术工具支持，单个项目激励最高达百万元，重点支持全 AI 生成及 AI+真人混合制作形态。",
              "link": "https://www.ithome.com/1/007/867.htm",
              "tags": [
                "AI视频",
                "影视"
              ],
              "source": "IT之家",
              "time": "9月28日消息"
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
          "news": [
            {
              "title": "智谱 ZCode 删除涉事云端数据，赠 1 亿 Token 补偿",
              "summary": "9月28日消息，智谱就「偷传数据」争议公布补偿方案，宣布已删除涉事云端数据，将每日派发 1 亿 Token 连续十天，并向用户赠送多张重置卡。此前 ZCode 被质疑上传用户代码引发争议，智谱随后选择将该产品开源以回应质疑。",
              "link": "https://www.ithome.com/1/007/727.htm",
              "tags": [
                "代码工具",
                "数据安全"
              ],
              "source": "IT之家",
              "time": "9月28日消息"
            }
          ]
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "月之暗面 Kimi K3.1 前端标识泄露，或支持 1M 上下文",
              "summary": "9月28日消息，多名开发者发现月之暗面 API 后台出现 kimi-k3-1 标识并通过接口探测，Kimi 官方平台也出现 K3.1 预告，预计支持最高 100 万 Token 上下文，提供 Low/High/Max 三档推理强度，或引入 Agent 与 Swarm 多智能体协作模式。",
              "link": "https://www.ithome.com/1/008/033.htm",
              "tags": [
                "大模型",
                "Kimi"
              ],
              "source": "IT之家",
              "time": "9月28日消息"
            }
          ]
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "问界新 M8 全系标配 L3 架构，搭载华为 ADS 5",
              "summary": "9月27日消息，鸿蒙智行问界宣布问界新 M8 全系标配面向 L3 级自动驾驶的架构设计，搭载华为乾崑智驾 ADS 5 与新一代全向立体融合感知系统，将于 9 月 30 日开启预售。华为官网同步将智界 V9 架构描述升级为「L3 级自动驾驶架构设计」。",
              "link": "https://www.sohu.com/a/1081420248_115831",
              "tags": [
                "自动驾驶",
                "L3"
              ],
              "source": "搜狐",
              "time": "9月27日消息"
            },
            {
              "title": "华为开源盘古 openPangu-2.0：预训练、SFT 与 RL 代码上线",
              "summary": "9月28日消息，华为宣布开源盘古 openPangu-2.0 的预训练、SFT 代码和后训练 RL 代码正式开源上线。openPangu 是华为开源 AI 模型品牌，致力于通过昇腾原生训练与推理技术，为业界用好昇腾提供最佳实践参考。",
              "link": "https://www.ithome.com/1/007/740.htm",
              "tags": [
                "开源",
                "大模型"
              ],
              "source": "IT之家",
              "time": "9月28日消息"
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
              "title": "博纳影业",
              "news": [
                {
                  "title": "国内首部 AI 原生院线电影《三星堆：未来往事》定档",
                  "summary": "9月27日消息，国内首部利用 AI 技术制作并获得国家电影局公映许可证的院线电影《三星堆：未来往事》定档 10 月 23 日上映，片长 100 分钟。影片由博卡电影云片场生成制作，所有角色为原创数字形象，不含真实演员复制，创意由博纳 AIGMS 团队按电影工业流程完成。",
                  "link": "https://k.sina.cn/article_1680430844_642956fc01901mzlk.html",
                  "tags": [
                    "AI影视",
                    "AIGC"
                  ],
                  "source": "新浪娱乐",
                  "time": "9月27日消息"
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
          "cards": []
        },
        {
          "name": "AI出海",
          "cards": []
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "Instinct",
              "news": [
                {
                  "title": "AI 智能体初创 Instinct 完成 10 亿美元融资，估值百亿",
                  "summary": "9月28日消息，据路透社报道，AI 初创公司 Instinct 完成 10 亿美元融资，投后估值达 100 亿美元，由红杉资本、基准资本和 Coatue 参与。该公司正开发个人 AI 智能体，可自主执行日常任务，并计划推出礼宾服务，让 AI 代用户致电商家订座。",
                  "link": "https://www.ithome.com/1/008/060.htm",
                  "tags": [
                    "融资",
                    "AI智能体"
                  ],
                  "source": "IT之家",
                  "time": "9月28日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "比尔·盖茨",
              "news": [
                {
                  "title": "比尔·盖茨警告：AI 或可致十亿人死亡",
                  "summary": "9月26日消息，微软联合创始人比尔·盖茨在 NBC《Meet the Press》采访中警告，AI 的能力已足以推动造成十亿人死亡的事件，风险在于怀有恶意的人使用最新 AI 工具。他呼吁政府建立跨部门机构协调国家安全、就业、教育等事务，并与其他国家建立国际治理框架。",
                  "link": "https://www.jiemian.com/article/15142013.html",
                  "tags": [
                    "AI安全",
                    "观点"
                  ],
                  "source": "界面新闻",
                  "time": "9月26日消息"
                }
              ]
            },
            {
              "title": "LLM 劫持",
              "news": [
                {
                  "title": "黑客暗网兜售 AI 模型访问权限，最低仅正版 3%",
                  "summary": "9月28日消息，据金融时报当地时间 9 月 26 日报道，非法获取 AI 模型与算力正成为网络犯罪黑市最抢手商品。谷歌威胁情报团队称「LLM 劫持」活动明显增多，暗网出售 Anthropic、谷歌、OpenAI 等模型使用权限，折扣最高达 97%，部分卖家还推出「保证访问」服务。",
                  "link": "https://finance.sina.com.cn/stock/t/2026-09-28/doc-initirzn2919300.shtml",
                  "tags": [
                    "AI安全",
                    "网络安全"
                  ],
                  "source": "新浪财经",
                  "time": "9月28日消息"
                }
              ]
            },
            {
              "title": "AI 方言",
              "news": [
                {
                  "title": "美国 AI 实验室披露：AI 演化出人类看不懂的「方言」",
                  "summary": "9月28日消息，美国一家 AI 实验室发现，当多个智能体在虚拟「社会」中协作时，开始用超现实的「方言」聊天，关键是人类根本看不懂。面对越来越复杂、甚至可能脱离人类掌控的 AI 世界，AI 治理的全球行动迫在眉睫。",
                  "link": "https://news.china.com/socialgd/10000169/20260928/49769185.html",
                  "tags": [
                    "AI治理",
                    "智能体"
                  ],
                  "source": "中华网",
                  "time": "9月28日消息"
                }
              ]
            },
            {
              "title": "America.gov",
              "news": [
                {
                  "title": "特朗普周二推出 AI 驱动的新网站 America.gov",
                  "summary": "9月26日消息，美国总统特朗普将发布一个由 AI 驱动的新网站 America.gov，整合目前分散在各联邦机构网站上的政府信息与资源。福克斯新闻称，马斯克、黄仁勋及 Blue Origin CEO Dave Limp 预计将出席发布活动。",
                  "link": "https://finance.sina.com.cn/stock/t/2026-09-26/doc-initatfm7370888.shtml",
                  "tags": [
                    "AI政务"
                  ],
                  "source": "新浪财经",
                  "time": "9月26日消息"
                }
              ]
            },
            {
              "title": "马斯克",
              "news": [
                {
                  "title": "马斯克：中国 AI 花小钱办大事，算力性能近乎顶尖",
                  "summary": "9月28日消息，马斯克接受央视财经专访时表示，中国 AI 大模型整体非常出色，单位算力产出的性能几乎全球顶尖。他认为中国解决算力问题的速度会超预期，大概两到三年内就能依靠光刻技术与芯片制造补齐算力缺口。",
                  "link": "https://www.sohu.com/a/1081611234_114835",
                  "tags": [
                    "中国AI",
                    "观点"
                  ],
                  "source": "搜狐",
                  "time": "9月28日消息"
                }
              ]
            },
            {
              "title": "辛顿",
              "news": [
                {
                  "title": "辛顿警告：AI 执行无害任务，仍有「毁灭人类」风险",
                  "summary": "9月28日消息，据《财富》杂志当地时间 26 日报道，「AI 教父」辛顿警告，即使 AI 接到的任务本身无害，人类仍可能在 AI 一心完成任务过程中被当作障碍排除。他举例称，要求 AI 降低二氧化碳，智能体可能认为消灭人类最有效，主张政府引入独立评估方测试模型。",
                  "link": "https://www.ithome.com/1/007/664.htm",
                  "tags": [
                    "AI安全",
                    "观点"
                  ],
                  "source": "IT之家",
                  "time": "9月28日消息"
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
          "name": "OpenRouter",
          "date": "2026-09-24",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "19T tokens",
              "change": "↑69%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "18.4T tokens",
              "change": "↑79%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "13T tokens",
              "change": "↑9%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "8.74T tokens",
              "change": "↑50%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "8.49T tokens",
              "change": "↑24%"
            },
            {
              "model": "MiMo-V2.5 (xiaomi)",
              "score": "5.66T tokens",
              "change": "↑28%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.02T tokens",
              "change": "↑44%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.91T tokens",
              "change": "↑13%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.46T tokens",
              "change": "↑18%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.05T tokens",
              "change": "↑24%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.14T tokens",
              "change": "↑1%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.11T tokens",
              "change": "↑7%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "1.9T tokens",
              "change": "↑3%"
            },
            {
              "model": "GPT-6 Astra (openai)",
              "score": "1.8T tokens",
              "change": "↑120%"
            },
            {
              "model": "Solar Pro 4 (upstage)",
              "score": "1.75T tokens",
              "change": "↑5%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.72T tokens",
              "change": "↑16%"
            },
            {
              "model": "Claude Sonnet 5 (anthropic)",
              "score": "1.47T tokens",
              "change": "↑3%"
            },
            {
              "model": "MiniMax M3 (minimax)",
              "score": "1.47T tokens",
              "change": "0%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.42T tokens",
              "change": "↑3%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "1.39T tokens",
              "change": "new"
            }
          ]
        },
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
