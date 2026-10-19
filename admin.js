const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-19",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 将研发人形机器人，奥尔特曼称核心是打造大脑",
              "summary": "当地时间10月18日，OpenAI 宣布将研发人形机器人，CEO 奥尔特曼称世界是为人类设计的，人形更适配现有环境，核心重点是研发机器人的智能大脑，公司已开放多个相关岗位招聘。",
              "link": "https://www.ithome.com/1/014/433.htm",
              "tags": [
                "具身智能",
                "人形机器人"
              ],
              "source": "IT之家",
              "time": "10月18日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 与律所探讨 AI 智能体谈判规范",
              "summary": "据《金融时报》报道，Anthropic 正与律师事务所及法律专家合作，研究 AI Agent 代表用户谈判时的行为规范，覆盖砍价、薪资谈判、处理纠纷等场景，并探索通过签名文件明确代理权限与行为边界。",
              "link": "https://www.ithome.com/1/014/519.htm",
              "tags": [
                "AI智能体",
                "谈判规则"
              ],
              "source": "IT之家",
              "time": "当地时间10月18日"
            },
            {
              "title": "Anthropic 拟拨 5% 股份设立公益基金",
              "summary": "当地时间10月18日，Anthropic 宣布拟将公司 5% 股份划入新设公共利益基金，公司估值每较基准上涨 50%，董事会可酌情再增 2% 股份。基金将用于非营利捐赠、应对 AI 就业冲击等，不会用于政治游说。",
              "link": "https://www.bianews.com/news/details?id=247407",
              "tags": [
                "公益基金",
                "公司治理"
              ],
              "source": "鞭牛士",
              "time": "当地时间10月18日"
            },
            {
              "title": "Anthropic 拟向黑石融资 600 亿美元买芯片",
              "summary": "据英国《金融时报》报道，Anthropic 拟为芯片交易融资，向黑石提供超 10% 收益率，黑石旗下基金计划投入 90 亿美元。资金用于投资以 Anthropic 未来五年租赁款支持的芯片相关债务，总融资规模约 600 亿美元。",
              "link": "https://wallstreetcn.com/articles/3783838",
              "tags": [
                "芯片融资",
                "AI算力"
              ],
              "source": "华尔街见闻",
              "time": "当地时间10月16日"
            },
            {
              "title": "Anthropic 联创称 2030 年 AI 或助美 GDP 增 50%",
              "summary": "10月18日消息，Anthropic 联合创始人称 AI 将加速各行业变革，到 2030 年有望推动美国 GDP 增长近 50%，呼吁各国开展国际合作建立严格监管规则。目前公司正筹备 IPO，估值最高可达 2 万亿美元。",
              "link": "https://finance.eastmoney.com/a/202610183899110148.html",
              "tags": [
                "行业观点",
                "AI经济"
              ],
              "source": "东方财富",
              "time": "10月18日消息"
            },
            {
              "title": "Anthropic 向 METR 开放员工级访问权限",
              "summary": "10月19日消息，Anthropic 向外部 AI 监督机构 METR 开放类员工访问权限，非营利机构 METR 团队已入驻其办公场所，可访问硬件设备与内部系统评估模型风险，并将发布分析报告，Anthropic 无权否决。",
              "link": "https://www.pingwest.com/w/318447",
              "tags": [
                "AI安全",
                "外部监督"
              ],
              "source": "品玩",
              "time": "10月19日消息"
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
              "title": "传三星将用台积电 3nm 为英伟达定制 HBM",
              "summary": "据《首尔经济日报》报道，英伟达正与三星、台积电共同设计定制高带宽内存 NVHBM，计划用台积电 3nm 工艺制造底部逻辑芯片，将内存控制器从 GPU 移出。相较标准 HBM4E，设计目标带宽最高提升 30%、功耗降低 15%。",
              "link": "https://finance.eastmoney.com/a/202610193899255141.html",
              "tags": [
                "AI芯片",
                "HBM"
              ],
              "source": "东方财富",
              "time": "当地时间10月18日"
            },
            {
              "title": "NVIDIA RTX Spark 笔记本全球开售 2599 美元起",
              "summary": "英伟达宣布搭载 RTX Spark 的笔记本电脑正式开售，全球起价 2599 美元。RTX Spark 集成 Grace CPU 与 Blackwell RTX GPU，最高 128GB 统一内存，标称最高 1 PFLOPS FP4 算力，首批覆盖华硕、戴尔、惠普、联想等厂商。",
              "link": "https://www.ithome.com/1/014/187.htm",
              "tags": [
                "AI PC",
                "算力芯片"
              ],
              "source": "IT之家",
              "time": "10月16日"
            },
            {
              "title": "英伟达优化 Kimi K3 推理速度提升 1.68 倍",
              "summary": "英伟达通过上游 vLLM 优化，让 2.8 万亿参数的 Kimi K3 在 GB300 NVL72 上达到 423 tok/s/user，推理性能提升 1.68 倍。该优化由 CentML 工程师采用 1.2 万行 Megakernel 融合方案完成。",
              "link": "https://www.ithome.com/1/014/595.htm",
              "tags": [
                "推理优化",
                "vLLM"
              ],
              "source": "IT之家",
              "time": "10月18日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 移除可抓取新闻网站的训练条款",
              "summary": "Meta 更新商业服务条款，被指可抓取企业站内容用于 AI 训练，引发舆论质疑。目前 Meta 已删除相关条款内容，发言人澄清称抓取条款仅适用于广告和商业产品，网络爬虫使用方式未改变。",
              "link": "https://news.qq.com/rain/a/20261018A00IU600",
              "tags": [
                "AI训练",
                "数据抓取"
              ],
              "source": "腾讯新闻",
              "time": "10月18日"
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
                  "title": "曝苹果 J595 机械臂家庭机器人，定价 1000 美元",
                  "summary": "据彭博社 Mark Gurman 报道，苹果正开发代号 J595 的高端智能家居屏幕，配备约 9 英寸可旋转 360 度机械臂，可识别说话者并自动转向，计划 2027 年或 2028 年推出，定位高于现款 HomeView。",
                  "link": "https://www.163.com/dy/article/J9UMV1LT05566VDM.html",
                  "tags": [
                    "智能家居",
                    "机器人"
                  ],
                  "source": "网易",
                  "time": "当地时间10月18日"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软退出合作，Nscale 数据中心 IPO 受挫",
                  "summary": "微软已退出位于英国埃塞克斯的数据中心交易，对英国企业 Nscale 数十亿美元上市计划构成打击。作为 Nscale 最大客户之一，微软终止了去年公布的合作协议，可能打乱 Nscale 推进最高 350 亿美元华尔街上市的步伐。",
                  "link": "https://finance.eastmoney.com/a/202610183899204334.html",
                  "tags": [
                    "数据中心",
                    "AI基建"
                  ],
                  "source": "东方财富",
                  "time": "10月18日"
                }
              ]
            },
            {
              "title": "Character.AI",
              "news": [
                {
                  "title": "迪士尼 1.8 亿美元雇佣 Character.AI 60 余名员工",
                  "summary": "据彭博社援引破产法庭文件报道，迪士尼同意聘用 Character.AI 的 60 多名员工，前三年薪酬约 1.8 亿美元，另拨 3000 万美元留任奖励。迪士尼此前以 2000 万美元购买 Character.AI 部分资产，后者 10 月 12 日申请破产保护。",
                  "link": "https://finance.eastmoney.com/a/202610183899122588.html",
                  "tags": [
                    "AI陪伴",
                    "破产重组"
                  ],
                  "source": "东方财富",
                  "time": "当地时间10月18日"
                }
              ]
            },
            {
              "title": "VAST",
              "news": [
                {
                  "title": "VAST 开源实时生成模型 EdenLive",
                  "summary": "VAST 开源实时生成式渲染模型 EdenLive 的代码与 5B、14B 权重，5B 模型在单张 RTX 5090 上可实时生成 720P 画面，速度超 24FPS。模型可把简化场景渲染成精细视觉内容，主要视频模型采用 Apache 2.0 授权。",
                  "link": "https://news.qq.com/rain/a/20261018A09J4F00",
                  "tags": [
                    "世界模型",
                    "开源"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月18日"
                }
              ]
            },
            {
              "title": "曙光",
              "news": [
                {
                  "title": "我国首个十万卡 AI 超集群真机亮相",
                  "summary": "据央视新闻报道，在深圳举行的 2026 全国高性能计算学术大会上，我国首个全国产十万卡 AI 超集群「曙光 8000」真机亮相，将发布十大重要应用成果，可支撑数字孪生大脑、模拟百亿光年宇宙演化的算力需求。",
                  "link": "https://www.ithome.com/1/014/456.htm",
                  "tags": [
                    "算力集群",
                    "AI基建"
                  ],
                  "source": "IT之家",
                  "time": "10月18日"
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
              "title": "医用外骨骼",
              "news": [
                {
                  "title": "医用外骨骼康复训练纳入多地医保",
                  "summary": "10月17日消息，北京、上海、江苏、浙江等多地已将「医用外骨骼康复训练」项目纳入医保或长护险试点。医用外骨骼是可穿戴智能康复机器人，能为患者提供标准化步态训练。2025 年中国消费助力外骨骼机器人市场规模接近 1.1 亿元。",
                  "link": "https://finance.eastmoney.com/a/202610173899077871.html",
                  "tags": [
                    "康复机器人",
                    "医保"
                  ],
                  "source": "东方财富",
                  "time": "10月17日消息"
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
              "title": "格物通智",
              "news": [
                {
                  "title": "具身大脑格物通智完成近亿元天使轮",
                  "summary": "10月19日消息，杭州具身大脑企业格物通智完成近亿元天使轮融资，投资方包括鸿富资产、匹克投资、杭州资本、杭州人才集团、某省级具身产投及多家头部上市公司。资金用于物理反演世界模型预训练、硬件本体构建等。",
                  "link": "https://www.ithome.com/1/014/652.htm",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "IT之家",
                  "time": "10月19日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "美银",
              "news": [
                {
                  "title": "美银称超大规模云商自由现金流转负千亿",
                  "summary": "据美银全球研究报告，超大规模云服务商未来 12 个月合计自由现金流已暴跌至负 1000 亿美元以下，资本开支消耗掉 95% 经营现金流。英伟达、美光、博通三大半导体厂商同期自由现金流飙升至近 5000 亿美元。",
                  "link": "https://news.qq.com/rain/a/20261018A0ADBR00",
                  "tags": [
                    "AI资本开支",
                    "行业报告"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月18日"
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
          "date": "2026-10-18",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "32.8T tokens",
              "change": "↓20%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "12.2T tokens",
              "change": "0%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "11.5T tokens",
              "change": "↑30%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "9.94T tokens",
              "change": "↓13%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "7.55T tokens",
              "change": "↓9%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.21T tokens",
              "change": "↓12%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "6.18T tokens",
              "change": "↑23%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "5.19T tokens",
              "change": "↑37%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "4.97T tokens",
              "change": "↓28%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.7T tokens",
              "change": "↓4%"
            },
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "3.72T tokens",
              "change": "—"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "3.28T tokens",
              "change": "↑45%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.11T tokens",
              "change": "↑24%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.03T tokens",
              "change": "↓1%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.02T tokens",
              "change": "↓10%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.45T tokens",
              "change": "↑1%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.21T tokens",
              "change": "↑3%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.07T tokens",
              "change": "↑89%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "1.93T tokens",
              "change": "↓9%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "1.75T tokens",
              "change": "↓14%"
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
