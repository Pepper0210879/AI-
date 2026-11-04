const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-28",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": []
        },
        {
          "name": "Anthropic",
          "news": []
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌发布世界模型 Genie 4，原生音频+实时操控",
              "summary": "当地时间10月27日，Google DeepMind 以研究预览形式发布新一代世界模型 Genie 4，可生成迄今最逼真、最具互动性的虚拟世界，用户能在模拟过程中输入提示实时改变场景。Genie 4 首次支持原生音频生成，可同步生成音乐、环境音和互动对话，单次交互模拟时长约两分钟，较上一代翻倍。发布数月前，AI 视频初创公司 Runway 刚发布其第二款世界模型 GWM Worlds 2。",
              "link": "https://news.qq.com/rain/a/20261028A07N6Y00",
              "tags": [
                "世界模型",
                "多模态"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月27日"
            },
            {
              "title": "甲骨文将于 2027 年在云平台提供谷歌 TPU",
              "summary": "当地时间10月27日，甲骨文与谷歌宣布，谷歌张量处理单元（TPU）将接入甲骨文云基础设施（OCI），甲骨文将成为谷歌以外首家提供谷歌 TPU 的超大规模云服务商。该服务预计 2027 年推出，并在多年内逐步扩大规模，支持大模型训练、推理及智能体应用。谷歌第八代 TPU 包括面向训练的 TPU 8t 和面向推理的 TPU 8i。",
              "link": "https://news.qq.com/rain/a/20261028A02QQC00",
              "tags": [
                "AI芯片",
                "云计算"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月27日"
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
              "title": "英伟达与 Meta 扩大 Muse 系列模型合作",
              "summary": "当地时间10月27日，英伟达与 Meta 宣布将扩大在 Muse 系列模型上的合作，以响应市场对 AI 智能体的爆发式需求。双方还将探索更多技术协同，包括依托英伟达 OpenShell 参考架构强化智能体安全体系，借助英伟达 Sentry 实现智能体行为全链路监控。Meta 将进一步扩大英伟达 Vera Rubin AI 算力集群与 Vera CPU 的部署规模。",
              "link": "https://news.qq.com/rain/a/20261027A083DQ00",
              "tags": [
                "AI智能体",
                "大模型"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月27日"
            },
            {
              "title": "英伟达与甲骨文扩大 AI 基础设施合作",
              "summary": "当地时间10月27日，英伟达与甲骨文宣布，将把搭载英伟达 Vera Rubin NVL72 系统的甲骨文云基础设施（OCI）超级集群扩展至数吉瓦级，并正式提供 Vera Rubin NVL72 系统及 Vera CPU 云服务。甲骨文还计划推出搭载 8 颗 Rubin GPU 的 HGX Rubin NVL8 系统。双方称此次合作旨在提高 GPU 利用率，为 AI 工作负载提供可扩展的计算能力。",
              "link": "https://news.qq.com/rain/a/20261028A02QR100",
              "tags": [
                "算力",
                "AI基建"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月27日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "AMD 向 Meta 投资 10 亿美元，Helios 机架已开始测试",
              "summary": "当地时间10月27日，AMD 宣布将参与 Meta 的股权发行，投资 10 亿美元，双方同时披露算力合作进展：首批 Helios 机架级系统已在 Meta 安装并进行测试。AMD 的 EPYC 处理器为 Meta 的 Muse 个人 AI 智能体提供专用计算环境，Meta 已部署数百万颗 EPYC，并成为第六代 EPYC 首批重要客户，双方还在合作开发后续平台。",
              "link": "https://news.qq.com/rain/a/20261028A08IO300",
              "tags": [
                "算力",
                "融资"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月27日"
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
          "news": []
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "知情人士：DeepSeek 大举扩充团队",
              "summary": "10月27日，据知情人士透露，DeepSeek 正大举扩充团队，办公地主要位于北京和杭州。创始人梁文锋长期在北京租房居住，房间布置比较简单。随着新一轮融资受到关注，DeepSeek 的团队扩张引发行业关注。同日发布的《2026 胡润百富榜》显示，梁文锋以 2800 亿元财富首次上榜，位列第七。",
              "link": "https://news.qq.com/rain/a/20261027A07BOL00",
              "tags": [
                "团队",
                "大模型"
              ],
              "source": "腾讯新闻",
              "time": "10月27日"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "微信输入法上线「AI 录音笔」功能",
              "summary": "10月27日，微信派介绍，微信输入法新增「AI 录音笔」能力，可将录音实时转写为结构化网页，并按上下文整理重点和逻辑。功能除转成文字外，还能修正错别字、删去冗余口头表达，并根据内容生成图表、图示和交互原型。手机端可从键盘工具栏进入，电脑端可通过快捷键或菜单栏打开，支持多端同步历史录音总结。",
              "link": "https://news.qq.com/rain/a/20261028A05ZHD00",
              "tags": [
                "AI应用",
                "语音转写"
              ],
              "source": "腾讯新闻",
              "time": "10月27日"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米披露 21 自由度仿生灵巧手技术成果",
              "summary": "10月27日，小米技术披露仿生灵巧手技术探索成果。小米机器人团队基于汽车工厂 1827 个标准作业程序（SOP）进行完整数据采集与分析验证，设计了全新 21 自由度仿生灵巧手，采用混合驱动与腱绳张力控制方案，实现精准抓握力控、提升可靠性与可维护性，同时对散热体系和全掌触觉进行了系统性优化。",
              "link": "https://news.qq.com/rain/a/20261027A07X7600",
              "tags": [
                "具身智能",
                "灵巧手"
              ],
              "source": "腾讯新闻",
              "time": "10月27日"
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
                  "title": "苹果发布 M6 芯片 MacBook Pro 和 iMac",
                  "summary": "当地时间10月27日，苹果发布搭载 M6 芯片的 MacBook Pro 和 iMac，国行起售价分别为 15999 元、12499 元。M6 配备 12 核 CPU 和 12 核 GPU，GPU 每个核心均带神经网络加速器，并配备双 16 核神经网络引擎，相比 M5 图形性能最高提升 30%，端侧 AI 工作负载性能最高提升 25%。",
                  "link": "https://news.qq.com/rain/a/20261027A0E0HX00",
                  "tags": [
                    "芯片",
                    "端侧AI"
                  ],
                  "source": "腾讯新闻",
                  "time": "当地时间10月27日"
                }
              ]
            },
            {
              "title": "蚂蚁",
              "news": [
                {
                  "title": "蚂蚁灵光 2.0 发布，主打「能管事的 AI 助理」",
                  "summary": "10月27日，蚂蚁集团发布灵光 2.0，将其定位为「能管事的 AI 助理」，从单轮对话扩展到持续跟进的个人 Agent。用户关掉 App 后，任务仍可在独立云主机及浏览器中运行，并在有结果或需决策时提醒。灵光可读取合同整理报销条件、比较同平台价格并持续盯价，支持授权接入支付宝账单、钉钉、飞书等工具。",
                  "link": "https://news.qq.com/rain/a/20261027A05HCA00",
                  "tags": [
                    "AI助理",
                    "Agent"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月27日"
                }
              ]
            },
            {
              "title": "Liquid AI",
              "news": [
                {
                  "title": "Liquid AI 发布 LFM3 小模型家族",
                  "summary": "10月28日消息，Liquid AI 发布 LFM3 系列，首批 6 款模型均处于约 20 亿参数规模，覆盖文本、视觉、音频、全模态及决策任务，共用 LFM3-1.7B 基础骨干，权重已在 Hugging Face 上线。文本模型支持 256K Token 上下文，4-bit 精度下约占 1GB 内存，可在手机和笔记本本地运行。新架构结合门控短卷积、滑动窗口注意力和全局注意力，预训练使用 22 万亿 Token。",
                  "link": "https://news.qq.com/rain/a/20261028A0CJGJ00",
                  "tags": [
                    "小模型",
                    "开源"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月28日消息"
                }
              ]
            },
            {
              "title": "台积电",
              "news": [
                {
                  "title": "台积电拟将先进封装价格最高上调 20%",
                  "summary": "10月27日消息，据 TrendForce 援引媒体报道，受 AI 需求爆发、半导体供应链产能全面紧张影响，台积电计划上调先进芯片封装服务价格，最高涨幅可达 20%。台积电等晶圆代工及封测从业者正酝酿新一轮提价，准备将 CoWoS 封装报价上调 10% 至 20%。当前 CoWoS 需求已从 GPU 延伸至服务器 CPU 及定制 ASIC。",
                  "link": "https://news.qq.com/rain/a/20261027A0BXS700",
                  "tags": [
                    "芯片",
                    "涨价"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月27日消息"
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
              "title": "智元",
              "news": [
                {
                  "title": "智元 GO-3 Nano Preview 登顶 RoboDojo",
                  "summary": "10月27日，具身智能领域评测基准 RoboDojo 披露的最新榜单显示，来自智元（AGIBOT）的 GO-3 Nano Preview 以 61.90 分的平均成绩、56.42% 的平均成功率登顶，超越 GPT-6 Astra。在精细操作、长程执行及开放语义理解三个细分维度上，得分分别为 78.65 分、68.21 分和 61.71 分，均位列第一。",
                  "link": "https://news.qq.com/rain/a/20261027A08JR600",
                  "tags": [
                    "具身智能",
                    "评测"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月27日"
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
          "cards": []
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "邓煜（菲尔兹奖得主）",
              "news": [
                {
                  "title": "菲尔兹奖得主邓煜：AI 公司应公开思维链",
                  "summary": "10月25日，菲尔兹奖得主、数学家邓煜在《知识分子》《赛先生》联合举办的论坛演讲中谈到，如果把 AI 当作发表研究成果的研究者，就应解释重大证明是如何得到的。他认为 AI 公司不应仅以防止蒸馏为由拒绝公开思维链，是否允许输入数据参与训练应由用户自行选择，并主张建立思路和贡献的追溯机制。",
                  "link": "https://news.qq.com/rain/a/20261027A04ZK600",
                  "tags": [
                    "AI观点",
                    "学术规范"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月25日"
                }
              ]
            },
            {
              "title": "胡润百富榜",
              "news": [
                {
                  "title": "胡润百富榜发布，梁文锋首次上榜位列第七",
                  "summary": "10月27日，胡润研究院发布《2026 胡润百富榜》，字节跳动创始人张一鸣以 6700 亿元财富第二次成为中国首富，刷新榜单纪录。DeepSeek 创始人梁文锋首次上榜，以 2800 亿元位列第七；宇树科技创始人王兴兴也首次上榜，财富 695 亿元。胡润称，半导体、人工智能、机器人等行业是今年财富增长较突出的领域。",
                  "link": "https://news.qq.com/rain/a/20261028A05YH500",
                  "tags": [
                    "财富榜",
                    "AI行业"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月27日"
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
          "date": "2026-10-26",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "33.6T tokens",
              "change": "↑801%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "18T tokens",
              "change": "↓45%"
            },
            {
              "model": "MiniMax M3.1 Flash (free) (minimax)",
              "score": "13.7T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "13.2T tokens",
              "change": "↑8%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "8.97T tokens",
              "change": "↑19%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "8.35T tokens",
              "change": "↑35%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "8.27T tokens",
              "change": "↑34%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "6.07T tokens",
              "change": "↓39%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.85T tokens",
              "change": "↑18%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "5.05T tokens",
              "change": "↓3%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "3.99T tokens",
              "change": "↓15%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "3.63T tokens",
              "change": "↓68%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.05T tokens",
              "change": "↓2%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.98T tokens",
              "change": "↓2%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.81T tokens",
              "change": "↑45%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "2.81T tokens",
              "change": "↓7%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.77T tokens",
              "change": "↓16%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.68T tokens",
              "change": "↑29%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.46T tokens",
              "change": "—"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.99T tokens",
              "change": "↓10%"
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
