const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-05",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "奥特曼：AI 的巨大收益值得承担部分风险",
              "summary": "10月5日，OpenAI 首席执行官奥特曼接受 Politico 旗下 Decoded 采访时表示，AI 带来的收益和公众使用技术的自主权，意味着社会应当接受发展过程中出现「某些坏事」。他强调 AI 最终带来的积极成果将比负面影响多出「几个数量级」，但不接受包括人类对 AI 失去控制在内的灾难性风险，此番表态正值 OpenAI 面临自主 AI 系统安全性质疑之际。",
              "link": "https://www.ithome.com/1/009/754.htm",
              "tags": [
                "AI监管",
                "AI安全"
              ],
              "source": "IT之家",
              "time": "10月5日"
            },
            {
              "title": "GPT-6 Astra 破解拿破仑 1809 年密信，揭示 217 年前军事部署",
              "summary": "10月4日，SentinelOne AI 工程师卡特·丘奇借助 OpenAI GPT-6 Astra 破解了一封写于 1809 年的拿破仑加密军事信件。这封信此前因密码本遗失，217 年未能完整解读。模型从一张历史文献扫描图开始，完成文字识别与密码分析，约耗时 6 小时，揭示出奥地利战争爆发前夕的兵力部署。",
              "link": "https://news.qq.com/rain/a/20261004A0584H00",
              "tags": [
                "多模态",
                "密码破译"
              ],
              "source": "腾讯新闻",
              "time": "10月4日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 前研究员将出席纽约 AI 听证会作证",
              "summary": "10月5日，Anthropic 前研究员雅各布·考克斯顿应议长朱莉·梅宁要求，将在纽约市 AI 听证会上作证。市议员正审议一揽子 AI 保障法案，他此前警告 AI 或在本十年末致人类灭绝，并指责前雇主与 OpenAI 拿生命冒险。",
              "link": "https://www.ithome.com/1/009/769.htm",
              "tags": [
                "AI安全",
                "AI监管"
              ],
              "source": "IT之家",
              "time": "10月5日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "10 月 9 日起 Gemini 免费用户仅可使用 Flash-Lite 模型",
              "summary": "10月3日，据 Google 官方文档，自 10 月 9 日起，使用个人账号且未开通 Google AI 订阅的用户将只能使用 Gemini Flash-Lite 模型，Gemini Flash 和 Pro 不再面向免费版开放。高阶模型将成为付费方案的差异化功能，调整暂不影响 Gemini API、AI Studio 等产品。",
              "link": "https://www.ithome.com/1/009/431.htm",
              "tags": [
                "订阅策略",
                "模型分层"
              ],
              "source": "IT之家",
              "time": "10月3日"
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
              "title": "美国买家购 RTX 5090 整机被要求签署「转售承诺」",
              "summary": "10月4日，据 Tom's Hardware 报道，一名美国消费者在加州 Micro Center 购买内含英伟达 RTX 5090 的整机时，被要求签署「购买者声明」，承诺不得将显卡带出美国境外，且需提供身份、地址、电话等个人信息。此举或与美国对先进计算产品的出口限制有关。",
              "link": "https://www.ithome.com/1/009/661.htm",
              "tags": [
                "芯片",
                "出口管制"
              ],
              "source": "IT之家",
              "time": "10月4日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "荷兰眼镜连锁 Hans Anders 暂停销售 Meta 雷朋智能眼镜",
              "summary": "10月5日，荷兰大型眼镜连锁企业 Hans Anders 宣布暂停在荷兰与比利时销售 Meta 雷朋智能眼镜，成为较早采取此类行动的零售商之一。随着隐私抗议升温、监管警示及诉讼压力增加，智能眼镜正面临更广泛的抵制浪潮。",
              "link": "https://www.ithome.com/1/009/798.htm",
              "tags": [
                "智能眼镜",
                "隐私"
              ],
              "source": "IT之家",
              "time": "10月5日"
            },
            {
              "title": "Meta AI 助手 Muse 被曝为每位联系人建立个人档案",
              "summary": "10月5日，研究人员通过普通聊天界面提取出 Meta AI 助手 Muse 的内部指令，发现它会每小时为每位联系人建立独立档案，包含亲密程度、关系建议甚至隐私推断。Meta 回应称文件本就对外开放，但专家警告用户正把远超以往的信息交给企业。",
              "link": "https://www.ithome.com/1/009/755.htm",
              "tags": [
                "AI助手",
                "隐私"
              ],
              "source": "IT之家",
              "time": "10月5日"
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
          "news": [
            {
              "title": "余承东：华为已设计并量产 381 款 τ 芯片",
              "summary": "10月4日，华为常务董事、终端 BG 董事长余承东发布视频透露，华为半导体已在手机、AI、通用计算、网络、智能汽车等领域成功设计并量产 381 款 τ 芯片。华为提出以「时间缩微」替代「几何缩微」的韬定律，通过逻辑折叠等技术持续压缩信号传播时延，实现半导体持续演进。",
              "link": "https://www.ithome.com/1/009/633.htm",
              "tags": [
                "芯片",
                "半导体"
              ],
              "source": "IT之家",
              "time": "10月4日"
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
              "title": "台积电",
              "news": [
                {
                  "title": "消息称台积电先进晶圆价格 2027Q1 拟再上调 6%~8%",
                  "summary": "10月5日，据韩媒 ddaily 报道，在决定上调 10%~20% 基础上，台积电计划 2027 年第一季度针对最先进晶圆出货价格再上调约 6%~8%，理由是制造成本和电力费用上涨。台积电 2 纳米订单激增，5 座专用工厂已全面运转，部分客户开始寻求三星等替代供应。",
                  "link": "https://finance.sina.cn/tech/2026-10-05/detail-iniucpwp4691678.d.html?vt=4",
                  "tags": [
                    "芯片",
                    "涨价"
                  ],
                  "source": "新浪财经",
                  "time": "10月5日"
                }
              ]
            },
            {
              "title": "TypeSafe AI",
              "news": [
                {
                  "title": "TypeSafe AI 决策模型 Jev 日处理量达 1 万亿 Token",
                  "summary": "10月5日，TypeSafe AI 决策模型 Jev 被曝日处理量达 1 万亿 Token，约 25% 的世界 500 强企业在使用，新一轮融资估值或超 100 亿美元。该模型不生成文本，而是将输入归类到预设输出，采用「面向校准决策的强化学习」，创始人来自 OpenAI。",
                  "link": "https://www.ithome.com/1/009/744.htm",
                  "tags": [
                    "决策模型",
                    "AI应用"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "Wayve",
              "news": [
                {
                  "title": "消息称 Wayve 将为大众供应自动驾驶解决方案",
                  "summary": "10月5日，据消息人士透露，Wayve 将为大众供应自动驾驶解决方案，负责开发自动驾驶人工智能软件，CARIAD 则负责软件与大众-博世联合开发硬件的系统集成工作。",
                  "link": "https://www.ithome.com/1/009/762.htm",
                  "tags": [
                    "自动驾驶",
                    "合作"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "REK",
              "news": [
                {
                  "title": "机器人格斗公司 REK 人机笼斗赛被叫停",
                  "summary": "10月5日，加州州立体育委员会向机器人格斗公司 REK 发出停止令，指其未取得许可组织格斗赛事属轻罪。被叫停的是 9 月 18 日一场人形机器人笼斗赛，博主先后与三台机器人对战，人机对抗的安全与伦理争议引发关注。",
                  "link": "https://www.ithome.com/1/009/736.htm",
                  "tags": [
                    "机器人",
                    "具身智能"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
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
              "title": "FieldAI",
              "news": [
                {
                  "title": "机器人通用大脑受追捧：FieldAI 拟融资 7 亿美元",
                  "summary": "10月5日，机器人企业 FieldAI 正融资 7 亿美元，投后估值达 100 亿美元，一年多估值翻五倍。该公司主打研发通用机器人「大脑」，目前订单规模已超亿美元。",
                  "link": "https://www.ithome.com/1/009/746.htm",
                  "tags": [
                    "融资",
                    "机器人"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "特朗普",
              "news": [
                {
                  "title": "特朗普宣布成立超级智能工作组",
                  "summary": "10月5日，特朗普宣布成立超级智能工作组，由美国国家情报总监克莱顿牵头，成员包括 FTC 主席、国防部副部长等，需在 120 天内提交 AI 风险与机遇分析报告。特朗普此前已签署行政令，将 AI 重新命名为「超级智能」。",
                  "link": "https://www.ithome.com/1/009/792.htm",
                  "tags": [
                    "AI政策",
                    "超级智能"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
                }
              ]
            },
            {
              "title": "孙正义",
              "news": [
                {
                  "title": "孙正义罕见发出 AI 安全警告",
                  "summary": "10月5日，软银集团创始人孙正义罕见发出 AI 安全警告，呼吁各国携手应对威胁。作为人工智能最坚定的拥护者之一，他近日坦言，随着 AI 能力突飞猛进，就连他也对伴随而来的安全风险深感担忧。",
                  "link": "https://www.ithome.com/1/009/758.htm",
                  "tags": [
                    "AI安全",
                    "行业观点"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
                }
              ]
            },
            {
              "title": "斯凯孚",
              "news": [
                {
                  "title": "斯凯孚用 AI「复活」已故女星葛丽泰·嘉宝拍广告",
                  "summary": "10月5日，瑞典轴承制造商斯凯孚借助字节跳动 Seedream 5 Pro、Seedance 2、可灵 AI 及谷歌 Gemini 等工具，生成葛丽泰·嘉宝虚拟形象拍摄广告。项目获嘉宝遗产管理方授权，但影评人给出一星差评，乔治·克鲁尼等明星也表达了对 AI「合成复活」趋势的担忧。",
                  "link": "https://www.ithome.com/1/009/764.htm",
                  "tags": [
                    "AI复活",
                    "广告"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
                }
              ]
            },
            {
              "title": "Reflection",
              "news": [
                {
                  "title": "消息称 Reflection 等多家西方企业本月将推出开放权重 AI 模型",
                  "summary": "10月5日，据消息人士透露，Reflection 等多家西方企业本月将推出开放权重 AI 模型。Reflection 即将推出的模型预计最初会落后于美国最先进的闭源模型，但足以同中国友商的顶级开放权重模型相竞争。",
                  "link": "https://www.ithome.com/1/009/765.htm",
                  "tags": [
                    "开源模型",
                    "AI模型"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
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
          "date": "2026-10-04",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Space Bunny Alpha (stealth)",
              "score": "38.7T tokens",
              "change": "↑179%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "25.6T tokens",
              "change": "↑31%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "9.73T tokens",
              "change": "↓40%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "9.63T tokens",
              "change": "↑75%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "6.51T tokens",
              "change": "↓32%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.18T tokens",
              "change": "↑116%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "5.99T tokens",
              "change": "↓23%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.65T tokens",
              "change": "—"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "4.37T tokens",
              "change": "↓49%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.23T tokens",
              "change": "↓4%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.1T tokens",
              "change": "↑20%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "2.94T tokens",
              "change": "↑5%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "2.46T tokens",
              "change": "↑128%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.18T tokens",
              "change": "↑1%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "2.07T tokens",
              "change": "↓19%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.62T tokens",
              "change": "↑16%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "1.43T tokens",
              "change": "↓14%"
            },
            {
              "model": "GPT-6 Astra (openai)",
              "score": "1.41T tokens",
              "change": "↑36%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.33T tokens",
              "change": "↓12%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "1.32T tokens",
              "change": "↓21%"
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
};;;;;;;;

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
