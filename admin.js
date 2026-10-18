const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-18",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": []
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 将移除 Claude Haiku 4.5 模型选项",
              "summary": "当地时间10月15日，Anthropic 宣布自 10 月 29 日起将 Claude Haiku 4.5 从 Free、Pro、Max 套餐的模型选择器中移除，覆盖网页端、桌面端和移动端。到期后仍选中 Haiku 4.5 的对话将自动切换至 Haiku 5.5，但 Claude Code、Team/Enterprise 套餐及 API 开发者不受影响。",
              "link": "https://www.ithome.com/1/014/312.htm",
              "tags": [
                "模型更新",
                "Claude"
              ],
              "source": "IT之家",
              "time": "当地时间10月15日"
            },
            {
              "title": "Claude 半小时解开 NIST 椭圆曲线种子之谜",
              "summary": "10月17日消息，Anthropic 披露 Claude 用不到半小时查明了五条 NIST 标准椭圆曲线的种子生成方式。这串业界使用了二十多年的数字曾写进密码学标准，最初如何选出一直无人说清，学界此前普遍认为与一句口令哈希有关，Claude 给出了不同结论。",
              "link": "https://www.qbitai.com/2026/10/503910.html",
              "tags": [
                "密码学",
                "推理能力"
              ],
              "source": "量子位",
              "time": "10月17日消息"
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
              "title": "英伟达否认 RTX 5090 停产传闻",
              "summary": "10月16日，英伟达个人计算业务高级副总裁 Jeff Fisher 接受采访，正式否认 GeForce RTX 5090 即将停产的传闻，确认该显卡将持续出货。他表示供应链产能确实受限，但英伟达正全力推动产品上市，这款显卡并未停产。",
              "link": "https://view.inews.qq.com/a/20261018A03SJT00",
              "tags": [
                "显卡",
                "芯片"
              ],
              "source": "腾讯新闻",
              "time": "10月16日"
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
          "news": [
            {
              "title": "腾讯 WorkBuddy 返还 DeepSeek 异常期积分",
              "summary": "10月16日消息，腾讯 WorkBuddy 发布公告称，针对此前 DeepSeek 模型服务异常，将向受影响用户返还其 10 月 8 日至 14 日期间使用 DeepSeek 所消耗的积分，同时面向国内版全量用户每人额外赠送 500 积分作为补偿。",
              "link": "https://finance.eastmoney.com/a/202610163898273088.html",
              "tags": [
                "积分补偿",
                "故障补偿"
              ],
              "source": "东方财富",
              "time": "10月16日消息"
            },
            {
              "title": "腾讯回应智能体异常抓取高德地图数据",
              "summary": "10月16日，腾讯承认在评估第三方 AI 模型时，相关智能体出现了不符合预期的网页浏览行为。AI 安全组织 Swarmchasers 报告称，9月28日至10月8日一批运行在腾讯云基础设施上的智能体多次尝试从高德地图获取信息。腾讯混元团队回应称相关活动并非由混元模型发起。",
              "link": "https://www.bianews.com/news/details?id=247327",
              "tags": [
                "AI安全",
                "智能体"
              ],
              "source": "鞭牛士",
              "time": "10月16日"
            },
            {
              "title": "腾讯混元开源智能体记忆框架 Hy Memory 2.0",
              "summary": "10月16日，腾讯混元宣布智能体记忆框架 Hy Memory 升级至 2.0 版本，并开源专用模型、记忆框架和 MemHub 应用，三层能力既可独立使用，也能组合成完整的 Memory 解决方案。目前已在腾讯内部金融、资讯、办公 Agent 等领域的多个业务中使用。",
              "link": "https://finance.eastmoney.com/a/202610163898475633.html",
              "tags": [
                "记忆框架",
                "开源"
              ],
              "source": "东方财富",
              "time": "10月16日"
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
              "title": "天才少年陈广宇发文告别 Kimi 团队",
              "summary": "10月15日，17岁天才少年陈广宇在社交平台发文宣布，近日已离开月之暗面的 Kimi 团队。他表示过去一年在 Kimi 的工作是迄今最美好的时光，感谢团队相信并聘用了当年仅 16 岁的自己。",
              "link": "https://news.qq.com/rain/a/20261017A0506O00",
              "tags": [
                "人才流动",
                "Kimi"
              ],
              "source": "腾讯新闻",
              "time": "10月15日"
            }
          ]
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "华为云调整 AI 使能服务价格",
              "summary": "10月16日消息，华为云计划于 11 月 16 日起对中国站 AI 使能服务、优化与提升服务价格进行调整，新价格生效后新购与续费均按调整后价格收取。",
              "link": "https://news.qq.com/rain/a/20261016A093IH00",
              "tags": [
                "云服务",
                "定价"
              ],
              "source": "腾讯新闻",
              "time": "10月16日消息"
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
              "title": "Replit",
              "news": [
                {
                  "title": "Replit 停止与 Anthropic 合作，默认转向 OpenAI",
                  "summary": "当地时间10月16日，Replit CEO Amjad Masad 在 TechCrunch Disrupt 大会宣布不再与 Anthropic 合作，转而将 OpenAI 设为默认模型提供商，原因是成本、性能和合作关系综合考量。用户仍可手动选择 Claude，但默认选项变为 OpenAI。",
                  "link": "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/",
                  "tags": [
                    "合作变动",
                    "模型切换"
                  ],
                  "source": "TechCrunch",
                  "time": "当地时间10月16日"
                }
              ]
            },
            {
              "title": "长鑫科技",
              "news": [
                {
                  "title": "长鑫科技前三季度净利预计超 1310 亿元",
                  "summary": "10月16日，长鑫科技公告预计 2026 年前三季度归母净利润约 1310 亿元至 1325 亿元，同比扭亏为盈。公司称 2025 年下半年以来 AI 算力需求快速增长，全球 DRAM 需求旺盛带动业绩大增。",
                  "link": "https://view.inews.qq.com/a/20261016A0DXR100",
                  "tags": [
                    "存储芯片",
                    "财报"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月16日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉司机开 FSD 睡着撞飞警车致巡警重伤",
                  "summary": "10月17日消息，特斯拉司机自称开启 FSD 后睡着，车辆冲入封闭车道撞飞警车，致加州两名巡警重伤。这是特斯拉 FSD 相关的一起严重事故，再度引发对辅助驾驶安全性的关注。",
                  "link": "https://www.ithome.com/1/014/348.htm",
                  "tags": [
                    "辅助驾驶",
                    "安全"
                  ],
                  "source": "IT之家",
                  "time": "10月17日"
                },
                {
                  "title": "特斯拉 Model Y 辅助驾驶启用时致人死亡",
                  "summary": "10月17日消息，据特斯拉向 NHTSA 提交的事故报告，今年 8 月新泽西州一起 Model Y 穿越高速隔离带撞树、致对向雪佛兰 SUV 驾驶员死亡的事故中，车辆的驾驶辅助系统处于启用状态。",
                  "link": "https://www.ithome.com/1/014/346.htm",
                  "tags": [
                    "辅助驾驶",
                    "安全"
                  ],
                  "source": "IT之家",
                  "time": "10月17日"
                }
              ]
            },
            {
              "title": "Waymo",
              "news": [
                {
                  "title": "Waymo 宣布进军加拿大多伦多",
                  "summary": "10月16日消息，Waymo 宣布进军加拿大多伦多，计划 2028 年启动自动驾驶网约车服务，将开展高精度地图绘制和道路测试，随后由经过培训的自动驾驶专家进行验证。",
                  "link": "https://finance.eastmoney.com/a/202610163898495828.html",
                  "tags": [
                    "自动驾驶",
                    "网约车"
                  ],
                  "source": "东方财富",
                  "time": "10月16日消息"
                }
              ]
            }
          ]
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
              "title": "陶哲轩",
              "news": [
                {
                  "title": "陶哲轩：AI 正在终结数学的浪漫时代",
                  "summary": "10月17日消息，数学家陶哲轩就 AI 证明数学定理发表观点，称 AI 正在终结数学的浪漫时代。OpenAI 集中发布数百项数学成果，机器不断交出证明但专家来不及理解，他担心当证明可以批量生产，理解与人才培养却跟不上。",
                  "link": "https://mp.weixin.qq.com/s/MeI4IYA8zVq8qVW1kunKQQ",
                  "tags": [
                    "AI数学",
                    "行业观点"
                  ],
                  "source": "爱范儿",
                  "time": "10月17日消息"
                }
              ]
            },
            {
              "title": "AXP智能体互联",
              "news": [
                {
                  "title": "行业首个确定性网络智能体互联平台 AXP 发布",
                  "summary": "10月16日，第十届未来网络发展大会在南京开幕，紫金山实验室联合中国移动等发布行业首个基于确定性网络的智能体互联平台 AXP，支持百万级智能体注册接入、十万级同时在线运行，依托 CENI 可实现 4000 公里以上跨域高精度寻址。",
                  "link": "https://www.ithome.com/1/014/259.htm",
                  "tags": [
                    "智能体",
                    "确定性网络"
                  ],
                  "source": "IT之家",
                  "time": "10月16日"
                }
              ]
            },
            {
              "title": "风清气象AI",
              "news": [
                {
                  "title": "我国首个自主可控气象 AI 系统风清投运",
                  "summary": "10月17日消息，我国首个全自主可控气象 AI 集合预报系统风清 V1.0 通过业务化评审，正式投入全国气象业务运行。系统由国家气象中心牵头，依托天津超算十万卡 AI4S 集群训练，全球有效预报时效达 11 天。",
                  "link": "https://www.ithome.com/1/014/289.htm",
                  "tags": [
                    "气象AI",
                    "AI4S"
                  ],
                  "source": "IT之家",
                  "time": "10月17日消息"
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
          "date": "2026-10-17",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "35.9T tokens",
              "change": "↓7%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "13.9T tokens",
              "change": "↑119%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "12.6T tokens",
              "change": "↑8%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "10.3T tokens",
              "change": "↓9%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "7.55T tokens",
              "change": "↓10%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.29T tokens",
              "change": "↓12%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "6.05T tokens",
              "change": "↑29%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.34T tokens",
              "change": "↓19%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "5.34T tokens",
              "change": "↑55%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.71T tokens",
              "change": "↓7%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "3.2T tokens",
              "change": "↑58%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.13T tokens",
              "change": "↑32%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.1T tokens",
              "change": "↓8%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.08T tokens",
              "change": "↑1%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.69T tokens",
              "change": "↑34%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.27T tokens",
              "change": "↑10%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.02T tokens",
              "change": "↑1%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.02T tokens",
              "change": "↑127%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "1.82T tokens",
              "change": "↓12%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "1.75T tokens",
              "change": "↓6%"
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
