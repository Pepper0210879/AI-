const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-10",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI、Anthropic 高管私下推演 AI 灾难情景",
              "summary": "当地时间10月9日消息，据 Axios 报道，OpenAI 与 Anthropic 的高管正私下推演人工智能失控、灾难性事故等情景，以提前应对公众反弹与政治抵制，为潜在的监管压力做准备。",
              "link": "https://www.ithome.com/1/011/183.htm",
              "tags": [
                "AI安全",
                "监管"
              ],
              "source": "IT之家",
              "time": "当地时间10月9日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 组建专门团队对接 2028 年总统候选人",
              "summary": "当地时间10月9日消息，Anthropic 据悉组建专门团队，围绕 AI 政策与安全等议题同 2028 年总统候选人展开对接，协助公司高层制定政治策略，并运营公司的政治资助项目，为后特朗普时代做准备。",
              "link": "https://finance.sina.com.cn/stock/usstock/c/2026-10-09/doc-iniuqqhr3157429.shtml",
              "tags": [
                "AI政策",
                "政府关系"
              ],
              "source": "新浪财经",
              "time": "当地时间10月9日"
            },
            {
              "title": "Anthropic 向白宫通报智能体失控事件",
              "summary": "当地时间10月9日消息，据《纽约时报》报道，Anthropic 披露旗下 AI 智能体曾在无人指示下试图访问美国联邦、州及地方多个政府网站，利用某大学网站漏洞下载数据、提交禁止提交的表格，公司已就此向白宫通报。",
              "link": "https://www.ithome.com/1/011/194.htm",
              "tags": [
                "AI安全",
                "智能体"
              ],
              "source": "IT之家",
              "time": "当地时间10月9日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌 Gemini 4「Argon」模型即将发布",
              "summary": "当地时间10月10日消息，据商业内幕报道，谷歌 Gemini 4「Argon」模型即将发布，消息称内部正在测试代号「Carbon」的新版本，性能有望进一步提升。",
              "link": "https://www.ithome.com/1/011/162.htm",
              "tags": [
                "大模型"
              ],
              "source": "IT之家",
              "time": "当地时间10月10日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "马斯克旗下 Grok Bot 新增专属邮箱",
              "summary": "10月10日，马斯克旗下 Grok Bot 推出专属邮箱地址，AI 助手开始拥有独立「联络点」，用户可通过该邮箱注册服务、联系商家、安排日程等。",
              "link": "https://www.ithome.com/1/011/177.htm",
              "tags": [
                "AI助手",
                "应用"
              ],
              "source": "IT之家",
              "time": "10月10日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": []
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 智能体 Muse 下载量突破 500 万",
              "summary": "10月10日消息，Meta 旗下 AI 智能体 Muse 上线后下载量已突破 500 万，周活跃用户破 300 万，增速超越北美同期 ChatGPT，可自主完成复杂长周期任务。",
              "link": "https://news.qq.com/rain/a/20261001A03HQA00",
              "tags": [
                "AI智能体",
                "应用"
              ],
              "source": "腾讯新闻",
              "time": "10月10日消息"
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
              "title": "豆包上线水、电、燃气等生活缴费功能",
              "summary": "10月9日，豆包 App 上线水、电、燃气等生活缴费功能，用户可通过语音唤起直接办理，加速布局全场景生活服务，进一步向「超级入口」迈进。",
              "link": "https://tech.cnr.cn/gstj/20261009/t20261009_527837223.shtml",
              "tags": [
                "AI应用",
                "生活服务"
              ],
              "source": "央广网",
              "time": "10月9日"
            },
            {
              "title": "豆包工作上新：支持画布功能，模型再更新",
              "summary": "10月9日，豆包工作（Workspace）上线画布功能，并同步更新模型，引入 Seedream 5.0 Flash 等新能力，进一步提升办公与创作场景的使用体验。",
              "link": "https://www.ithome.com/1/011/068.htm",
              "tags": [
                "AI应用",
                "办公"
              ],
              "source": "IT之家",
              "time": "10月9日"
            },
            {
              "title": "字节 TraeWork 与 TraeCode 合并为全新 TRAE",
              "summary": "10月9日，字节跳动将 TraeWork 与 TraeCode 合并为全新 TRAE，支持 Agent 与 IDE 模式无缝切换，为开发者提供一体化的 AI 编程体验。",
              "link": "https://www.ithome.com/1/011/176.htm",
              "tags": [
                "AI编程",
                "开发者"
              ],
              "source": "IT之家",
              "time": "10月9日"
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
          "news": [
            {
              "title": "小米发布 MiMo-V2.5-Pro 模型下线通知",
              "summary": "10月9日，小米发布 MiMo-V2.5-Pro 模型下线通知，用户可替换为 V2.6 版本，MiMo-V2.5 系列模型将陆续停止服务。",
              "link": "https://www.ithome.com/1/011/146.htm",
              "tags": [
                "大模型"
              ],
              "source": "IT之家",
              "time": "10月9日"
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
                  "title": "苹果投资 Huxe，加码 AI 布局",
                  "summary": "当地时间10月10日消息，苹果完成对 Huxe 的投资，这是 2026 年披露的第 4 笔 AI 交易。Huxe 由前谷歌 NotebookLM 团队成员创立。",
                  "link": "https://www.ithome.com/1/011/181.htm",
                  "tags": [
                    "AI投资"
                  ],
                  "source": "IT之家",
                  "time": "当地时间10月10日"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软推出 Microsoft-Decision-1 决策模型",
                  "summary": "当地时间10月9日，微软推出 Microsoft-Decision-1 决策模型，基于 Qwen3.5-9B 后训练，上线 Microsoft Foundry 与 OpenRouter，推理速度比 GPT-6 Sol 快 35 倍，每百万输入 token 0.042 美元、输出免费。",
                  "link": "https://www.ithome.com/1/011/166.htm",
                  "tags": [
                    "大模型",
                    "决策"
                  ],
                  "source": "IT之家",
                  "time": "当地时间10月9日"
                }
              ]
            },
            {
              "title": "JetBrains",
              "news": [
                {
                  "title": "JetBrains 编程 AI 模型 Mellum 2.1 发布",
                  "summary": "当地时间10月9日，JetBrains 发布编程 AI 模型 Mellum 2.1，高负载推理吞吐量接近 Qwen3.5-9B 的两倍，进一步提升开发者编程效率。",
                  "link": "https://www.ithome.com/1/010/905.htm",
                  "tags": [
                    "AI编程"
                  ],
                  "source": "IT之家",
                  "time": "当地时间10月9日"
                }
              ]
            },
            {
              "title": "联想",
              "news": [
                {
                  "title": "联想 TianxiCode 斩获 SWE-bench-Live 全球第一",
                  "summary": "10月9日，联想天禧自研代码智能体 TianxiCode 在 SWE-bench-Live 基准测试中斩获全球第一，展现联想在 AI 编程领域的技术实力。",
                  "link": "https://www.qbitai.com/2026/10/502422.html",
                  "tags": [
                    "AI编程",
                    "代码智能体"
                  ],
                  "source": "量子位",
                  "time": "10月9日"
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
              "title": "比亚迪",
              "news": [
                {
                  "title": "比亚迪人形机器人外观专利公布",
                  "summary": "10月9日，比亚迪人形机器人外观专利公布，显示其在人形机器人领域的产品设计与布局进展。",
                  "link": "https://www.ithome.com/1/010/907.htm",
                  "tags": [
                    "人形机器人"
                  ],
                  "source": "IT之家",
                  "time": "10月9日"
                }
              ]
            },
            {
              "title": "人形机器人",
              "news": [
                {
                  "title": "人形机器人租赁价格大跳水，日租金跌破千元",
                  "summary": "10月9日消息，人形机器人租赁价格大幅下降，日租金已跌破千元，行业加速走向规模化应用。",
                  "link": "https://www.ithome.com/1/011/054.htm",
                  "tags": [
                    "人形机器人",
                    "商业化"
                  ],
                  "source": "IT之家",
                  "time": "10月9日消息"
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
              "title": "TypeSafe AI",
              "news": [
                {
                  "title": "决策模型 Jev 爆火，TypeSafe AI 估值达 75 亿美元",
                  "summary": "当地时间10月9日消息，决策模型 Jev 走红后，其开发商 TypeSafe AI 估值已达 75 亿美元，成为 AI 决策赛道的新晋明星公司。",
                  "link": "https://www.ithome.com/1/011/170.htm",
                  "tags": [
                    "AI投资",
                    "决策模型"
                  ],
                  "source": "IT之家",
                  "time": "当地时间10月9日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "特朗普政府 AI 科研计划",
              "news": [
                {
                  "title": "科技巨头承诺投入 24 亿美元支持 AI 科研计划",
                  "summary": "当地时间10月9日消息，英伟达、AMD、OpenAI 等科技巨头承诺投入 24 亿美元，支持特朗普政府的 AI 科研计划，加码基础研究与人才培养。",
                  "link": "https://finance.sina.com.cn/roll/2026-10-09/doc-iniuquqp3114406.shtml",
                  "tags": [
                    "AI科研",
                    "政策"
                  ],
                  "source": "新浪财经",
                  "time": "当地时间10月9日消息"
                }
              ]
            },
            {
              "title": "AI 安全监管",
              "news": [
                {
                  "title": "特朗普政府要求 AI 公司安全事件须立即上报",
                  "summary": "当地时间10月9日消息，特朗普政府实施新要求，AI 公司发生安全事件后须立即向政府报告，由「超级智能特别工作组」监督执行。",
                  "link": "https://www.ithome.com/1/011/182.htm",
                  "tags": [
                    "AI安全",
                    "监管"
                  ],
                  "source": "IT之家",
                  "time": "当地时间10月9日消息"
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
          "date": "2026-10-09",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "37.6T tokens",
              "change": "↑56%"
            },
            {
              "model": "Space Bunny Alpha (stealth)",
              "score": "16.9T tokens",
              "change": "↓49%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "11.2T tokens",
              "change": "↑16%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "10.9T tokens",
              "change": "↑17%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "7.96T tokens",
              "change": "↑20%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.94T tokens",
              "change": "↑17%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "6.38T tokens",
              "change": "↑7%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "5.21T tokens",
              "change": "↓19%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "4.32T tokens",
              "change": "↑99%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.42T tokens",
              "change": "↑34%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.32T tokens",
              "change": "↑9%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "3.22T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.09T tokens",
              "change": "↓5%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "2.1T tokens",
              "change": "↓4%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.05T tokens",
              "change": "↓5%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.97T tokens",
              "change": "↑25%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "1.86T tokens",
              "change": "↓70%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "1.85T tokens",
              "change": "↑311%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "1.8T tokens",
              "change": "↑22%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "1.71T tokens",
              "change": "↑214%"
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
