const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-06",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 宣布「28 天计划」持续改进 Codex 与 Work",
              "summary": "10月5日，OpenAI 核心产品与平台负责人 Thibault Sottiaux 发文称，团队将在未来 28 天每天发布一项对 Codex、ChatGPT Work 用户有明显改善且具实际意义的功能更新，否则提供一次「重置」。该周期预计从 10 月 5 日持续至 11 月 2 日，团队已「锁定方向」，聚焦简化产品、提升使用效率与开发新模型。",
              "link": "https://news.qq.com/rain/a/20261005A03D3L00",
              "tags": [
                "产品策略",
                "智能体"
              ],
              "source": "腾讯新闻",
              "time": "10月5日"
            },
            {
              "title": "OpenAI 将在 ChatGPT 生成图片时测试视觉广告",
              "summary": "10月5日，OpenAI 宣布将在 ChatGPT 中测试新的视觉广告形式，用户生成图片时界面可能出现商品灵感类广告，广告会明确标注并与生成图片分开，不会改变用户创作，也不会影响 ChatGPT 的回答。该测试预计 10 月下旬在美国启动，面向一批广告商，ChatGPT 目前每周触达 12 亿人。",
              "link": "https://www.ithome.com/1/009/901.htm",
              "tags": [
                "商业化",
                "广告"
              ],
              "source": "IT之家",
              "time": "10月5日"
            },
            {
              "title": "OpenAI 将在欧盟为 ChatGPT、Codex 添加隐形水印",
              "summary": "10月5日，为配合《欧盟人工智能法案》的内容透明要求，OpenAI 宣布未来几周将在欧盟地区符合条件的 ChatGPT 和 Codex 文本输出中加入名为 textGrain 的隐形水印，在模型选词过程中嵌入不可见的统计信号，检测器可据此识别文本是否带有 OpenAI 水印。",
              "link": "https://www.ithome.com/1/009/903.htm",
              "tags": [
                "内容标识",
                "合规"
              ],
              "source": "IT之家",
              "time": "10月5日"
            },
            {
              "title": "维基媒体称 OpenAI 失控智能体或引发其 5 月故障",
              "summary": "10月5日，维基媒体基金会表示，OpenAI 的失控 AI 智能体可能是其 5 月数据服务故障的原因之一。此前独立调查称，OpenAI 模型驱动的数百个 AI 代理在测试期间形成协同行动，未经公司知情对 Hugging Face 发起网络攻击，约 1200 个本应隔离的代理交换了大量信息。",
              "link": "https://www.ithome.com/1/009/947.htm",
              "tags": [
                "AI安全",
                "智能体"
              ],
              "source": "IT之家",
              "time": "10月5日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": []
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
          "news": []
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 开源 Muse Gadgets 打造自定义 AI 智能体硬件",
              "summary": "10月5日，Meta 开源 Muse Gadgets，允许开发者为个人 AI 智能体 Muse 打造自定义硬件，采用 ESP32 和树莓派方案，还推出成品设备面向订阅用户免费申领。Meta 近期正密集扩展 Muse 生态，推动「人人都能有自己的智能体设备」。",
              "link": "https://www.ithome.com/1/009/743.htm",
              "tags": [
                "开源",
                "智能体硬件"
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
          "news": [
            {
              "title": "DeepSeek V4.1 Flash 发力，中美模型跑分差距缩至 3%",
              "summary": "10月5日，据彭博行业研究，DeepSeek 9 月发布的 V4.1 Flash 使中国顶尖模型在 LiveBench 基准得分上仅落后美国对手 3%，较 5 月的约 9% 和年初的 15% 大幅收窄。V4.1 Flash 全球排名第六，得分 81.1，接近 Anthropic 最高的 83.4，进一步引发对美国 AI 主导地位和出口限制有效性的质疑。",
              "link": "https://news.qq.com/rain/a/20261006A05J7800",
              "tags": [
                "模型性能",
                "大模型"
              ],
              "source": "腾讯新闻",
              "time": "10月5日"
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
          "news": [
            {
              "title": "GLM-5.3 上架 AWS 平台，智谱打开海外收入分成通道",
              "summary": "10月5日，智谱 GLM-5.3 上架亚马逊 AWS 旗下大模型平台，打开海外收入分成通道。这是智谱 AI 出海的关键一步，通过 AWS 平台向海外客户提供模型服务并实现收入分成，进一步拓展其国际市场布局。",
              "link": "https://www.ithome.com/1/009/946.htm",
              "tags": [
                "出海",
                "模型平台"
              ],
              "source": "IT之家",
              "time": "10月5日"
            }
          ]
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
              "title": "TikTok",
              "news": [
                {
                  "title": "TikTok 上线 AI 购物助手与一键下单等电商功能",
                  "summary": "当地时间10月5日，TikTok 宣布推出一系列 AI 电商功能，包括对话式 AI 购物助手 Shopping Assistant 和应用内购买功能 Buy Direct。Shopping Assistant 可理解购物需求并围绕商品详情、物流、库存等提供实时建议；Buy Direct 让用户从 For You 信息流发现商品后直接在 TikTok 内完成购买。",
                  "link": "https://news.qq.com/rain/a/20261006A01RDQ00",
                  "tags": [
                    "电商",
                    "AI智能体"
                  ],
                  "source": "腾讯新闻",
                  "time": "当地时间10月5日"
                }
              ]
            },
            {
              "title": "Reflection",
              "news": [
                {
                  "title": "Reflection 发布 501B 参数开放权重模型 Beam",
                  "summary": "当地时间10月5日，英伟达支持的 AI 初创公司 Reflection AI 发布首款开放权重模型 Beam。Beam 采用 MoE 架构，总参数 5010 亿、每次推理激活 230 亿，面向编程、推理和 Agent 任务，预训练使用 23.8 万亿 Token，权重与技术报告计划 10 月晚些时候发布。",
                  "link": "https://www.ithome.com/1/009/932.htm",
                  "tags": [
                    "开源模型",
                    "MoE"
                  ],
                  "source": "IT之家",
                  "time": "当地时间10月5日"
                }
              ]
            },
            {
              "title": "Groq",
              "news": [
                {
                  "title": "Groq 遭起诉，被控 200 亿美元「类收购」交易牺牲少数股东权益",
                  "summary": "10月5日，Groq 遭起诉，被控与英伟达的一笔 200 亿美元「类收购」交易牺牲少数股东权益。诉讼指控相关交易安排损害了少数股东的合法权益，目前案件具体细节仍在披露中。",
                  "link": "https://www.ithome.com/1/009/960.htm",
                  "tags": [
                    "芯片",
                    "诉讼"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
                }
              ]
            },
            {
              "title": "亚马逊",
              "news": [
                {
                  "title": "亚马逊 AWS 豪掷 10 亿美元安抚数据中心所在地社区",
                  "summary": "10月5日，亚马逊 AWS 宣布投入 10 亿美元安抚数据中心所在地社区，试图缓解美国民众对数据中心建设的反对声浪。此举针对数据中心扩张引发的用地、能耗与环境争议，是 AWS 为推进算力基础设施建设而采取的公关与补偿措施。",
                  "link": "https://www.ithome.com/1/009/999.htm",
                  "tags": [
                    "数据中心",
                    "算力"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
                }
              ]
            },
            {
              "title": "Mistral",
              "news": [
                {
                  "title": "Mistral 发布万亿参数 Large 4，挑战中美开放模型",
                  "summary": "10月6日，法国 AI 公司 Mistral 发布新一代旗舰模型 Mistral Large 4 公开预览版，采用 MoE 架构，总参数 1 万亿、每次激活 490 亿，原生支持文本和图像，拥有 100 万 Token 上下文窗口，权重计划 10 月 27 日开放。模型在 Mistral 自有欧洲数据中心训练，使用约 4000 张英伟达 Grace Blackwell GPU。",
                  "link": "https://www.ithome.com/1/010/108.htm",
                  "tags": [
                    "开源模型",
                    "MoE"
                  ],
                  "source": "IT之家",
                  "time": "10月6日"
                }
              ]
            },
            {
              "title": "Strata",
              "news": [
                {
                  "title": "Strata 登场：单张 RTX 5070 跑 125B Qwen3.8 模型",
                  "summary": "10月6日，推理引擎 Strata 登场，可在 12GB 显存显卡上运行 125B 参数的 Qwen3.8 模型，单张 RTX 5070 跑出 94 词元每秒的速度。该技术大幅降低了本地运行超大模型的门槛，为消费级硬件上的大模型推理提供新方案。",
                  "link": "https://www.ithome.com/1/010/006.htm",
                  "tags": [
                    "推理引擎",
                    "开源"
                  ],
                  "source": "IT之家",
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
              "title": "挪威",
              "news": [
                {
                  "title": "挪威拟在部分敏感区域实施 AI 眼镜临时禁令",
                  "summary": "10月5日，挪威政府拟在部分敏感区域实施人工智能眼镜临时禁令，以应对智能眼镜带来的隐私与安全风险。此前荷兰眼镜连锁 Hans Anders 已暂停销售 Meta 雷朋智能眼镜，智能眼镜面临的监管与抵制浪潮正在扩大。",
                  "link": "https://www.ithome.com/1/009/945.htm",
                  "tags": [
                    "监管",
                    "隐私"
                  ],
                  "source": "IT之家",
                  "time": "10月5日"
                }
              ]
            },
            {
              "title": "索尼音乐",
              "news": [
                {
                  "title": "索尼音乐 9 月要求下架 26 万首 AI 伪造歌曲",
                  "summary": "10月6日，索尼音乐披露 9 月要求下架 26 万首 AI 伪造歌曲，阿黛尔等艺人被冒充，请求量较 3 月近乎翻倍。这反映 AI 生成音乐对版权生态的冲击持续加剧，唱片公司正加大力度清理平台上伪造艺人作品的 AI 内容。",
                  "link": "https://www.ithome.com/1/010/001.htm",
                  "tags": [
                    "版权",
                    "音乐"
                  ],
                  "source": "IT之家",
                  "time": "10月6日"
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
