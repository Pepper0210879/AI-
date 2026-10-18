const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-16",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 伦敦分部去年人均薪酬超 230 万英镑",
              "summary": "10月15日消息，据媒体报道，OpenAI 伦敦分部员工去年人均薪酬达 231.8 万英镑（约合人民币 2055 万元），是英国全职员工收入中位数的 58 倍，税前折算时薪约 1000 英镑。这一堪比英超球星的薪酬水平，凸显这家 AI 明星公司不惜重金在全球角逐 AI 人才。",
              "link": "https://news.qq.com/rain/a/20261015A06TR500",
              "tags": [
                "薪酬",
                "AI人才"
              ],
              "source": "腾讯新闻",
              "time": "10月15日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 营收增速放缓，投资者下调 IPO 估值预期",
              "summary": "10月16日消息，据《The Information》报道，Anthropic 在面向潜在投资者的沟通会上披露，公司营收仍在高速增长但增速已回落，第三季度营收 168 亿美元，环比增长约 45%，明显低于上一季度超 140% 的增速。部分投资者认为投行应下调估值预期，IPO 估值或低于 1.5 万亿美元。",
              "link": "https://finance.eastmoney.com/a/202610163897419230.html",
              "tags": [
                "营收",
                "IPO"
              ],
              "source": "东方财富",
              "time": "10月16日消息"
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
              "title": "巴克莱：特斯拉与 SpaceX 最快 12 月前宣布合并",
              "summary": "10月16日消息，巴克莱分析师 Dan Levy 预计，马斯克可能在 12 月前宣布特斯拉与 SpaceX 合并，以整合旗下人工智能、机器人及航天业务。最可能的方案是由 SpaceX 换股收购特斯拉，合并后马斯克或持有约 37% 股份、掌握约 56% 投票权。目前双方尚未宣布正式合并计划。",
              "link": "https://news.qq.com/rain/a/20261016A049F100",
              "tags": [
                "合并",
                "AI业务整合"
              ],
              "source": "腾讯新闻",
              "time": "10月16日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达发布 Nemotron 3.5 系列模型，旗舰 1200 亿参数",
              "summary": "10月16日消息，英伟达宣布扩展 Nemotron 3.5 模型家族，推出面向企业级 AI 智能体的大型视觉语言模型 Nemotron 3.5 Super VL，拥有 1200 亿参数，支持文本理解、图像分析与多模态推理。同时发布两款 Nemotron 3.5 Bolt 轻量级边缘模型，分别约需 4GB 与 24GB 显存，降低本地部署门槛。",
              "link": "https://news.qq.com/rain/a/20261016A06WAN00",
              "tags": [
                "大模型",
                "智能体"
              ],
              "source": "腾讯新闻",
              "time": "10月16日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 发布开放权重模型 Muse Spark Open，总参数 8160 亿",
              "summary": "当地时间10月15日，Meta 发布开放权重模型 Muse Spark Open，并与苹果合作支持其在 Mac 本地运行。该模型采用混合专家架构，总参数 8160 亿、活跃参数 420 亿，上下文窗口 100 万词元，主打编码与智能代理任务，Meta 称其为美国迄今能力最强的开放权重模型。",
              "link": "https://news.qq.com/rain/a/20261016A02R4U00",
              "tags": [
                "开源模型",
                "智能体"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月15日"
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
          "news": []
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "企业微信上线 WorkBuddy，AI 可调用企业内部资料处理任务",
              "summary": "10月14日，微信派宣布企业微信侧边栏上线 WorkBuddy，用户将企业微信升级至 5.0.12 版本即可直接对话。在企业授权范围内，WorkBuddy 可调用消息、文档、会议等工作上下文理解任务，调用工作台执行并返回结果，让企业微信沉淀的工作资料、项目经验成为可调用的生产资料。",
              "link": "https://news.qq.com/rain/a/20261015A03WK200",
              "tags": [
                "智能体",
                "办公协同"
              ],
              "source": "腾讯新闻",
              "time": "10月14日"
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
                  "title": "库克：苹果智能在华获批，10 月底推测试版，阿里百度双伙伴",
                  "summary": "10月15日，苹果董事会执行主席库克在上海确认，Apple Intelligence 配套阿里千问大模型已获审批，10 月晚些时候上线国内测试版，首批含实时翻译、书写工具、照片清除等功能，暂不含 Siri AI。国内采用双供应商模式，阿里千问、通义万相提供多模态能力，百度承接 Siri 与视觉智能。",
                  "link": "https://news.qq.com/rain/a/20261015A0BM7F00",
                  "tags": [
                    "Apple Intelligence",
                    "国行版"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月15日"
                }
              ]
            },
            {
              "title": "台积电",
              "news": [
                {
                  "title": "台积电 Q3 净利润 7631 亿元台币，先进制程占晶圆收入 79%",
                  "summary": "10月15日，台积电披露 2026 年第三季度业绩，净利润 7631 亿元台币，高于市场预估的 7394.9 亿元台币。制程收入结构方面，2 纳米出货占总晶圆收入 8%，3 纳米占 33%，5 纳米占 28%，7 纳米占 10%，7 纳米及更先进技术合计占比达 79%，先进制程需求保持旺盛。",
                  "link": "https://news.qq.com/rain/a/20261015A077QM00",
                  "tags": [
                    "财报",
                    "AI芯片"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月15日"
                }
              ]
            },
            {
              "title": "美的",
              "news": [
                {
                  "title": "美的加入英伟达 MGX 生态，成热管理合作伙伴",
                  "summary": "10月15日消息，在 2026 OCP 全球峰会上，英伟达公布面向下一代 Vera Rubin 平台的 NVIDIA MGX AI Factory 生态及合作伙伴名单，美的被列入热管理合作伙伴。MGX 是英伟达围绕 Blackwell、Vera Rubin 等 AI 计算平台打造的开放式硬件底座，美的将有机会提前参与热管理规格对接与系统级验证。",
                  "link": "https://news.qq.com/rain/a/20261015A0AW6S00",
                  "tags": [
                    "AI服务器",
                    "液冷"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月15日消息"
                }
              ]
            },
            {
              "title": "蚂蚁",
              "news": [
                {
                  "title": "蚂蚁阿福入选《时代》2026 年度最佳发明，系唯一中国 AI 应用",
                  "summary": "10月15日，美国《时代》周刊揭晓 2026 年度最佳发明榜单，蚂蚁集团旗下健康 AI「蚂蚁阿福」入选，是今年唯一上榜的中国 AI 应用，去年入选者为 DeepSeek。《时代》认为蚂蚁阿福「让专业医疗健康服务更普惠」。今年 9 月，蚂蚁阿福 App 用户量已达 1.5 亿，单日健康咨询量近 2000 万次。",
                  "link": "https://news.qq.com/rain/a/20261016A0AQOX00",
                  "tags": [
                    "AI应用",
                    "健康"
                  ],
                  "source": "新京报",
                  "time": "10月15日"
                }
              ]
            },
            {
              "title": "亚马逊",
              "news": [
                {
                  "title": "亚马逊旗下 Bee 推出两款 AI 录音产品，74.99 美元起",
                  "summary": "当地时间10月15日，亚马逊宣布旗下 Bee 推出两款 AI 录音产品：可穿戴设备 Frontier 与手机磁吸配件 Eclipse。前者定价 74.99 美元，可佩戴于手腕或夹在衣物上；后者起售 99.99 美元。Bee 可实时整合对话语境输出洞察，原始音频不被存储，并已打通与 Alexa+ 及 Amazon.com 的生态连接。",
                  "link": "https://www.donews.com/news/detail/8/6742600.html",
                  "tags": [
                    "AI硬件",
                    "录音"
                  ],
                  "source": "DoNews",
                  "time": "当地时间10月15日"
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
              "title": "NEXFORM新元体 种子轮",
              "news": [
                {
                  "title": "NEXFORM 新元体完成数千万元种子轮融资，布局 Physical AGI",
                  "summary": "10月15日消息，Physical AGI 公司 NEXFORM 新元体完成数千万元种子轮融资，投资方包括戈壁创投、浙大友创等。公司围绕「通用硬件平台＋开发者生态＋物理智能体」布局，以 AI for Physical AI 为研发范式，通过 AI Agentic 开展 Auto Research，推动机器人实现自我进化。",
                  "link": "https://news.qq.com/rain/a/20261015A05WJ000",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月15日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "算力造爽剧",
              "news": [
                {
                  "title": "国内一半 AI 算力被指用于造爽剧，投入研发仅 15%",
                  "summary": "10月16日消息，「国内超一半算力在造爽剧」话题引发热议。中文在线在投资者活动记录中披露，国内 AI Token 消耗 55% 用于短剧与视频生成，24% 用于电商广告，仅 15% 投入研发。OpenRouter 数据显示，10 月 5 日至 11 日国内大模型周调用量 86.74 万亿 Token，连续二十四周超过美国。",
                  "link": "https://news.qq.com/rain/a/20261016V00OZF00",
                  "tags": [
                    "算力",
                    "短剧"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月16日消息"
                }
              ]
            },
            {
              "title": "马斯克",
              "news": [
                {
                  "title": "马斯克自曝过去一年经历 6 次「赛博精神病」",
                  "summary": "10月15日消息，特斯拉、SpaceX 首席执行官马斯克在「X Takeover」访谈中透露，过去一年自己大约经历六次「人工智能精神病」，又称「赛博精神错乱」。该词并非临床医学术语，多用来形容深度接触 AI 后带来的认知冲击。马斯克称这种感受来源于见识到 AI 具备审美理解能力带来的震撼。",
                  "link": "https://news.qq.com/rain/a/20261015A054JD00",
                  "tags": [
                    "AI认知",
                    "观点"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月15日消息"
                }
              ]
            },
            {
              "title": "IDC",
              "news": [
                {
                  "title": "IDC：三季度全球智能手机出货量同比暴跌 22%",
                  "summary": "10月16日消息，IDC 数据显示，受人工智能拉动存储芯片涨价影响，2026 年三季度全球智能手机出货量同比大跌 22%，为史上最严重季度下滑。小米、OPPO 等头部国产品牌受冲击严重，市场复苏预计至少要到 2028 年。",
                  "link": "https://news.qq.com/rain/a/20261016A07E7H00",
                  "tags": [
                    "智能手机",
                    "存储涨价"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月16日消息"
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
          "date": "2026-10-15",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "37.4T tokens",
              "change": "↑11%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "18.8T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "12.9T tokens",
              "change": "↑23%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "11.5T tokens",
              "change": "↑14%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "7.84T tokens",
              "change": "↑16%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "7.46T tokens",
              "change": "↑25%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "7.07T tokens",
              "change": "↑10%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "5.65T tokens",
              "change": "↑68%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.71T tokens",
              "change": "↓15%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "4.43T tokens",
              "change": "↑40%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.32T tokens",
              "change": "—"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.22T tokens",
              "change": "↑103%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.15T tokens",
              "change": "↓2%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "3T tokens",
              "change": "↑106%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.7T tokens",
              "change": "↑94%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.63T tokens",
              "change": "↑53%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.3T tokens",
              "change": "↑64%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "1.97T tokens",
              "change": "↓7%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "1.96T tokens",
              "change": "↑>999%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "1.8T tokens",
              "change": "↓8%"
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
};function loadAPIConfig() {
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
