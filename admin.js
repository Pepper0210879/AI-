const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-07",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 发布 722 篇数学手稿，攻破数百个未解难题",
              "summary": "10月7日，OpenAI 在一批包含 722 份手稿、涵盖 372 个结果家族的文件中，公布了某款未发布前沿模型解决的多项长期数学难题，包含对「数百个」未解决问题的解答。这些手稿处于不同核验阶段，部分配有 Lean 形式化证明，部分仍依赖非形式化论证。",
              "link": "https://www.ithome.com/1/010/137.htm",
              "tags": [
                "数学",
                "AI科研"
              ],
              "source": "IT之家",
              "time": "10月7日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 发布 Claude Haiku 5.5，API 价格最高降 90%",
              "summary": "当地时间10月7日，Anthropic 发布 Claude Haiku 5.5，定位面向高并发、成本敏感任务的小模型。官方称其运行成本平均比 Haiku 4.5 低约 75%，处理 10 万 tokens 以内请求时价格低 90%；按每百万 tokens 计，输入价格为 0.10 美元、输出 0.50 美元，已在 Claude Platform、AWS、Google Cloud 和 Azure 上线。",
              "link": "https://www.ithome.com/1/010/333.htm",
              "tags": [
                "小模型",
                "降价"
              ],
              "source": "IT之家",
              "time": "当地时间10月7日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌发布 AI 图像模型 Nano Banana 2.1",
              "summary": "10月7日，谷歌正式发布 AI 图像生成与编辑模型 Nano Banana 2.1，在视觉设计、基于蒙版的图像编辑以及主体一致性方面全面提升。新版已逐步部署上线，覆盖 Gemini 应用、谷歌搜索 AI 模式、Google AI Studio 等，面向开发者开放，模型 ID 为 gemini-nano-banana-2.1。",
              "link": "https://www.ithome.com/1/010/149.htm",
              "tags": [
                "图像生成",
                "多模态"
              ],
              "source": "IT之家",
              "time": "10月7日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX 拟融资 400 亿美元采购英伟达芯片",
              "summary": "10月7日，媒体援引知情人士报道，马斯克旗下的 SpaceX 正寻求融资 400 亿美元用于购买英伟达芯片，凸显 AI 算力需求依然强劲。报道称 SpaceX 寻求约 100 亿美元银行贷款并计划发行 300 亿美元投资级债券，阿波罗全球管理预计牵头该笔交易。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-10-07/doc-iniukaaq6271745.shtml",
              "tags": [
                "融资",
                "算力"
              ],
              "source": "新浪财经",
              "time": "10月7日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达市值达 5.8 万亿美元，距 6 万亿仅一步之遥",
              "summary": "10月6日，英伟达市值达到 5.82 万亿美元（现汇率约合 39.08 万亿元人民币），创下历史新高，距 6 万亿美元仅有一步之遥。若继续上涨，英伟达有望成为全球首家市值达 6 万亿美元的公司。",
              "link": "https://www.sohu.com/a/1084553706_114984",
              "tags": [
                "市值",
                "芯片"
              ],
              "source": "搜狐",
              "time": "10月6日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 推出 iPad 版 Muse AI 智能体，适配大屏",
              "summary": "10月7日，Meta 将 Muse AI 智能体适配苹果 iPad 平台，同时新增 Canva、Dropbox、Figma、QuickBooks、GitHub、Klaviyo、Zoom 等连接器。Muse 是 Meta 推出的 AI 智能体应用，过去几周一直位居美国 App Store 免费 iPhone 应用下载榜首位。",
              "link": "https://www.ithome.com/1/010/295.htm",
              "tags": [
                "智能体",
                "应用"
              ],
              "source": "IT之家",
              "time": "10月7日"
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
              "title": "DeepSeek 新一轮融资接近锁定至少 800 亿元",
              "summary": "10月6日，据彭博社援引知情人士消息，DeepSeek 最新一轮融资已接近收官，锁定至少 800 亿元人民币（约 120 亿美元），远超最初约 500 亿元目标，最终规模有望逼近 1000 亿元。腾讯控股和宁德时代是承诺出资金额最高的投资方。",
              "link": "https://news.qq.com/rain/a/20261006A072KN00",
              "tags": [
                "融资",
                "大模型"
              ],
              "source": "腾讯新闻",
              "time": "10月6日"
            }
          ]
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
          "news": [
            {
              "title": "月之暗面完成 PreIPO 融资，估值 500 亿美元",
              "summary": "10月6日，据彭博社报道，月之暗面已完成最后一轮私募融资，估值约 500 亿美元，正朝着明年第一季度在香港进行首次公开招股（IPO）迈进。知情人士称公司最早将于本月启动 IPO 早期摸底会议，考虑通过 IPO 筹集最多 50 亿美元。",
              "link": "https://news.qq.com/rain/a/20261006A06YNM00",
              "tags": [
                "融资",
                "IPO"
              ],
              "source": "腾讯新闻",
              "time": "10月6日"
            }
          ]
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "华为徐直军：昇腾在中国市场份额已超英伟达",
              "summary": "10月7日，华为轮值董事长徐直军在媒体交流中表示，中国市场的英伟达份额很难统计，但按华为能统计到的数据看，昇腾的市场份额应该已经超过英伟达。他还称当前昇腾供给仍不足以满足国内需求，华为没有全面拓展海外市场的计划，国内客户将获得优先供应。",
              "link": "https://www.ithome.com/1/010/195.htm",
              "tags": [
                "AI芯片",
                "市场份额"
              ],
              "source": "IT之家",
              "time": "10月7日"
            },
            {
              "title": "华为回应「美国同行呼吁放缓 AI」：中国反而需要加快",
              "summary": "10月7日，针对美国同行呼吁放缓 AI 开发的言论，华为轮值董事长徐直军回应称，中国模型更弱反而需要加快，不然差距只会越拉越大。他强调中国 AI 发展不能因外部呼吁而减速，应继续加大投入追赶。",
              "link": "https://www.ithome.com/1/010/198.htm",
              "tags": [
                "AI芯片",
                "行业观点"
              ],
              "source": "IT之家",
              "time": "10月7日"
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
              "title": "微软",
              "news": [
                {
                  "title": "微软联合英伟达发布最强 Surface，本地跑千亿参数模型",
                  "summary": "10月7日，微软在旧金山举行 Windows 与 Surface 发布会，联合英伟达推出 Surface Laptop Ultra 和 Surface RTX Spark Dev Box。Surface Laptop Ultra 搭载英伟达 RTX Spark 超级芯片，配备最高 128GB 统一内存，可在本地运行超 1200 亿参数的 AI 模型，起售价 2599 美元。",
                  "link": "https://www.ithome.com/1/010/320.htm",
                  "tags": [
                    "AI PC",
                    "硬件"
                  ],
                  "source": "IT之家",
                  "time": "10月7日"
                }
              ]
            },
            {
              "title": "可灵 AI",
              "news": [
                {
                  "title": "可灵 AI 最早明年赴港上市，至少融资 10 亿美元",
                  "summary": "10月6日，据财联社消息，快手旗下视频生成大模型可灵 AI 计划最早明年赴港上市，至少融资 10 亿美元。有报道指出可灵 AI 已选择中金公司、高盛和瑞银作为香港 IPO 承销商，若消息属实将是快手在 AI 大模型领域分拆上市的关键一步。",
                  "link": "https://finance.sina.com.cn/stock/hkstock/2026-10-06/doc-iniuhcmn7154469.shtml",
                  "tags": [
                    "IPO",
                    "视频生成"
                  ],
                  "source": "新浪财经",
                  "time": "10月6日"
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
          "cards": []
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "微软与 Meta",
              "news": [
                {
                  "title": "Meta 和微软要求员工减少使用 Claude 节省成本",
                  "summary": "10月6日，据 The Information 报道，Meta 与微软已要求员工减少使用 Anthropic 旗下的 Claude 以削减成本，更多使用自研 AI 工具。微软内部使用 Claude 的年支出曾被预计至少 10 亿美元，相关预算已被削减超三分之一；Meta 内部使用 Claude Code 的人数已从约 6 万人减少至约 3 万人。",
                  "link": "https://www.ithome.com/1/010/010.htm",
                  "tags": [
                    "成本控制",
                    "AI工具"
                  ],
                  "source": "IT之家",
                  "time": "10月6日"
                }
              ]
            },
            {
              "title": "辛顿",
              "news": [
                {
                  "title": "辛顿提议 AI 行业建立 FDA 式审批机制",
                  "summary": "10月7日，AI 教父杰弗里·辛顿提议 AI 行业建立类似 FDA 的审批机制，模型推出前需通过安全审查。他呼吁对前沿 AI 系统实施更严格的监管，确保模型在部署前经过充分的安全验证，以降低潜在风险。",
                  "link": "https://www.ithome.com/1/010/187.htm",
                  "tags": [
                    "AI安全",
                    "监管"
                  ],
                  "source": "IT之家",
                  "time": "10月7日"
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
          "date": "2026-10-08",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "33.6T tokens",
              "change": "↑48%"
            },
            {
              "model": "Space Bunny Alpha (stealth)",
              "score": "28T tokens",
              "change": "↓1%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "10.5T tokens",
              "change": "↓1%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "10.1T tokens",
              "change": "↑11%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "6.74T tokens",
              "change": "↓10%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.46T tokens",
              "change": "↑28%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.95T tokens",
              "change": "↓2%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "5.53T tokens",
              "change": "↓21%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "3.37T tokens",
              "change": "↑74%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.32T tokens",
              "change": "↑12%"
            },
            {
              "model": "Deepseek V4 Flash (deepseek)",
              "score": "3.21T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.16T tokens",
              "change": "↑15%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.13T tokens",
              "change": "↑1%"
            },
            {
              "model": "GPT-5.6-Luna (openai)",
              "score": "1.95T tokens",
              "change": "↓75%"
            },
            {
              "model": "GPT-5.6-Sol (openai)",
              "score": "1.77T tokens",
              "change": "↑15%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.72T tokens",
              "change": "↑10%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "1.58T tokens",
              "change": "↓34%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.58T tokens",
              "change": "↑21%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "1.46T tokens",
              "change": "↓2%"
            },
            {
              "model": "GPT-6.1-Sol (openai)",
              "score": "1.4T tokens",
              "change": ">999%"
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
