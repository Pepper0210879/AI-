const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-08",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "ChatGPT 推出 IUI 界面，GPT-6 可生成交互工具",
              "summary": "10月7日，OpenAI 宣布将 GPT-6 推向更广泛的 ChatGPT 用户，并推出全新的 Intelligent UI（智能用户界面）。与此前以文字对话为主不同，ChatGPT 现在可根据用户问题自动组合文字、图表、按钮、表单等元素，生成可直接操作的交互界面。新功能从 10 月 7 日起向 Plus、Pro、Business 和 Enterprise 用户逐步开放。",
              "link": "https://www.ithome.com/1/010/327.htm",
              "tags": [
                "产品更新",
                "交互界面"
              ],
              "source": "IT之家",
              "time": "10月7日"
            },
            {
              "title": "OpenAI 为 ChatGPT 新增自动年龄检测",
              "summary": "10月7日，OpenAI 更新支持文档，宣布将自动检测年龄在 18 岁以下的用户，并为他们开启青少年版体验模式，包含额外防护措施。系统会使用年龄预测系统检测用户大致年龄段，参考用户常讨论的话题、使用时段、账户使用方式与频次等信号。",
              "link": "https://www.ithome.com/1/010/204.htm",
              "tags": [
                "安全",
                "未成年人保护"
              ],
              "source": "IT之家",
              "time": "10月7日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": []
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌推出 AI 游戏平台 Playground，文字生成可玩游戏",
              "summary": "10月8日，谷歌正式推出实验性 AI 游戏平台 Playground，允许用户通过自然语言描述直接生成、修改和游玩浏览器游戏。用户可指定游戏角色、玩法规则、物理效果和场景，生成的游戏可通过链接分享，支持排行榜和部分多人玩法，首先面向美国 18 岁以上用户开放。",
              "link": "https://www.ithome.com/1/010/289.htm",
              "tags": [
                "游戏",
                "生成式AI"
              ],
              "source": "IT之家",
              "time": "10月8日"
            },
            {
              "title": "谷歌 SynthID 面向全球用户开放，可检测 AI 内容",
              "summary": "10月7日，谷歌宣布 SynthID 面向全球用户开放，可检测 AI 生成内容。SynthID 是谷歌的 AI 内容水印与检测工具，此前已在部分产品中应用，此次面向全球用户开放将进一步帮助识别和标注 AI 生成内容。",
              "link": "https://www.ithome.com/1/010/293.htm",
              "tags": [
                "内容标识",
                "AI安全"
              ],
              "source": "IT之家",
              "time": "10月7日"
            },
            {
              "title": "谷歌 Gmail 新功能曝光：Gemini 帮你回邮件",
              "summary": "10月7日，科技媒体 Android Authority 报道称，Gmail 应用最新版 APK 拆解显示，谷歌或正为 Gmail 新增 Gemini 智能体，让用户可通过 AI 自动回复邮件。新功能上线后，AI 收件箱可能在待办事项旁显示「使用 Gemini」按钮，点击即可让 Gemini 查看收件箱并起草回复。",
              "link": "https://www.ithome.com/1/010/279.htm",
              "tags": [
                "AI应用",
                "邮件"
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
              "title": "马斯克：Grok Bot 不再只认自家模型，择优用 Claude",
              "summary": "10月8日，马斯克表示 Grok Bot 不再只认自家模型，将按用户任务择优调用 Claude 等最合适的模型。此举显示马斯克在 AI 助手策略上的转变，从只使用自家 Grok 模型转向开放调用第三方最优模型。",
              "link": "https://www.ithome.com/1/010/359.htm",
              "tags": [
                "AI助手",
                "产品策略"
              ],
              "source": "IT之家",
              "time": "10月8日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达拟再投 10 亿美元加码人形机器人 Figure",
              "summary": "10月8日，消息称英伟达拟再投 10 亿美元加码人形机器人企业 Figure，此前英伟达已是 Figure 的重要投资方。此举显示英伟达持续加码具身智能赛道，也透露出其对 AI 算力需求降温的担忧，希望通过对机器人的投资打开新的增长空间。",
              "link": "https://www.ithome.com/1/010/387.htm",
              "tags": [
                "具身智能",
                "机器人"
              ],
              "source": "IT之家",
              "time": "10月8日"
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
                  "title": "苹果与 LG 智能家居合作再曝 4 款摄像头新品",
                  "summary": "10月8日，苹果与 LG 的智能家居合作再曝 4 款摄像头新品，覆盖门铃、室内和户外场景。此前消息称苹果正与 LG 联合开发视频门铃、智能门锁、恒温器等智能家居配件，产品将使用 LG 品牌并适配苹果智能家居中枢。",
                  "link": "https://www.ithome.com/1/010/355.htm",
                  "tags": [
                    "智能家居",
                    "硬件"
                  ],
                  "source": "IT之家",
                  "time": "10月8日"
                }
              ]
            },
            {
              "title": "田柯宇",
              "news": [
                {
                  "title": "被字节辞退的实习生田柯宇创业，估值达 2 亿美元",
                  "summary": "10月8日，曾被字节跳动辞退的实习生田柯宇进军世界模型领域创业，其创业公司估值已达 2 亿美元，被外界视为「挑战李飞飞」。田柯宇此前因技术争议被字节辞退，如今转身创业，聚焦世界模型这一具身智能关键方向。",
                  "link": "https://www.ithome.com/1/010/356.htm",
                  "tags": [
                    "世界模型",
                    "创业"
                  ],
                  "source": "IT之家",
                  "time": "10月8日"
                }
              ]
            },
            {
              "title": "CoreWeave",
              "news": [
                {
                  "title": "CoreWeave 落子印度，签署 240MW 数据中心租约",
                  "summary": "10月8日，AI 算力公司 CoreWeave 落子印度，签署 240MW 数据中心容量租约，进一步拓展其在全球的 AI 算力基础设施布局。此举显示 AI 算力需求持续旺盛，CoreWeave 正加速在全球部署数据中心。",
                  "link": "https://www.ithome.com/1/010/300.htm",
                  "tags": [
                    "算力",
                    "数据中心"
                  ],
                  "source": "IT之家",
                  "time": "10月8日"
                }
              ]
            },
            {
              "title": "AMD",
              "news": [
                {
                  "title": "AMD 苏姿丰承诺 2027 年大幅增加 AI 芯片供应",
                  "summary": "10月8日，AMD CEO 苏姿丰承诺 2027 年大幅增加 AI 数据中心芯片供应。她表示 AI 芯片需求非常旺盛，AMD 将持续大幅扩产，以满足市场对 AI 算力的强劲需求。",
                  "link": "https://www.ithome.com/1/010/284.htm",
                  "tags": [
                    "AI芯片",
                    "算力"
                  ],
                  "source": "IT之家",
                  "time": "10月8日"
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
              "title": "法德尔",
              "news": [
                {
                  "title": "「iPod 之父」法德尔分析初代 AI 设备为何失败",
                  "summary": "10月8日，「iPod 之父」托尼·法德尔分析 Rabbit R1 等初代 AI 设备为何失败，指出这些设备没有解决真正的用户痛点，功能与智能手机重叠却缺乏足够差异化，因而难以在市场中立足。",
                  "link": "https://www.ithome.com/1/010/299.htm",
                  "tags": [
                    "AI硬件",
                    "行业观点"
                  ],
                  "source": "IT之家",
                  "time": "10月8日"
                }
              ]
            },
            {
              "title": "微软与 OpenAI",
              "news": [
                {
                  "title": "微软、OpenAI 遭美国多家地方媒体起诉侵犯版权",
                  "summary": "10月8日，微软、OpenAI 遭美国多家地方媒体起诉，被指侵犯版权。这是继此前多起版权诉讼后，AI 公司再度面临来自新闻媒体机构的集体诉讼，指控其在训练大模型时未经授权使用新闻内容。",
                  "link": "https://www.ithome.com/1/010/257.htm",
                  "tags": [
                    "版权",
                    "诉讼"
                  ],
                  "source": "IT之家",
                  "time": "10月8日"
                }
              ]
            },
            {
              "title": "诺奖经济学家",
              "news": [
                {
                  "title": "诺奖经济学家背书：AI 不会大规模抢走饭碗",
                  "summary": "10月8日，有诺奖经济学家背书指出，未来 10 年内预估仅 5% 的工作会被 AI 大规模取代，AI 不会大规模抢走人们的饭碗。这一观点与部分担忧 AI 导致大规模失业的论调相左，为 AI 对就业的影响提供了更温和的评估。",
                  "link": "https://www.ithome.com/1/010/329.htm",
                  "tags": [
                    "就业",
                    "行业观点"
                  ],
                  "source": "IT之家",
                  "time": "10月8日"
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
