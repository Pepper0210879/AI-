const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-09-20",
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
              "title": "Anthropic 年化收入预计突破 1000 亿美元",
              "summary": "9月20日消息，据知情人士透露，Anthropic 今年年化收入预计将超过 1000 亿美元，较 7 月时的 650 亿美元大幅增长。寻求参与 IPO 的投资者正以这一快速增长数据，支撑公司潜在 2 万亿美元估值。知情人士称，Anthropic 最快可能在未来几周公布 IPO 相关财务文件，最早于 11 月开始股票交易。",
              "link": "https://baijiahao.baidu.com/s?id=1876716615882000335",
              "tags": [
                "IPO",
                "年化收入"
              ],
              "source": "财联社",
              "time": "9月20日消息"
            },
            {
              "title": "Anthropic 拟将 IPO 推迟至 11 月，估值约 2 万亿美元",
              "summary": "9月20日消息，据媒体报道，Anthropic 计划将 IPO 推迟至 11 月，以便展示三季度财报证明竞争优势，此前计划于 10 月进行。此次 IPO 估值约 2 万亿美元，募资规模将创年内新纪录。",
              "link": "https://baijiahao.baidu.com/s?id=1876729420934571449",
              "tags": [
                "IPO",
                "估值"
              ],
              "source": "每日经济新闻",
              "time": "9月20日消息"
            },
            {
              "title": "消息称 Anthropic 考虑在 IPO 前发布新一代 AI 模型",
              "summary": "9月20日消息，据路透社援引知情人士消息，Anthropic 正考虑在 IPO 前正式发布最新旗舰级 AI 模型，旨在巩固生成式 AI 领域的市场领先地位，并在资本市场亮相前向潜在投资者展示技术迭代能力与商业化前景。目前新模型正处于最后的内部测试与性能调优阶段。",
              "link": "https://baijiahao.baidu.com/s?id=1876748860250052075",
              "tags": [
                "IPO",
                "旗舰模型"
              ],
              "source": "财联社",
              "time": "9月20日消息"
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
              "title": "Neuralink 脑机接口让失语者用意念“说出我爱你”",
              "summary": "当地时间9月18日，马斯克联合创立的脑机接口公司 Neuralink 在 X 平台发布演示，有语言障碍的志愿者 Terry 植入脑机接口后，可通过意念将神经信号转化为与原声高度匹配的合成语音，向亲人传达“我爱你”。该演示采用 Grok Voice 语音技术，设备仍处研究阶段，尚未获 FDA 批准。",
              "link": "https://finance.sina.cn/tech/2026-09-20/detail-inismrfh9390461.d.html",
              "tags": [
                "脑机接口",
                "语音合成"
              ],
              "source": "新浪财经",
              "time": "当地时间9月18日"
            },
            {
              "title": "xAI 发布 Grok Voice Transcribe 2.0 语音转文本模型",
              "summary": "当地时间9月19日，xAI 发布 Grok Voice Transcribe 2.0 语音转文本模型，在价格保持不变的前提下，词错误率较上一代降低约一半，进一步提升语音识别与转写能力。",
              "link": "https://stock.10jqka.com.cn/20260919/c680084425.shtml",
              "tags": [
                "语音识别",
                "Grok"
              ],
              "source": "同花顺",
              "time": "当地时间9月19日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋等 5 名英伟达高管合计出售近 15 万股股票",
              "summary": "9月20日消息，英伟达多名高管向美国 SEC 披露股票交易情况，包括 CEO 黄仁勋在内的 5 名高管合计出售近 15 万股公司股票。其中黄仁勋出售约 4.6 万股，成交价约每股 212 美元；CFO 科莱特·克雷斯除缴税出售股票外，还通过交易计划出售约 3.5 万股。",
              "link": "https://baijiahao.baidu.com/s?id=1876726010526938009",
              "tags": [
                "高管减持",
                "SEC披露"
              ],
              "source": "新浪财经",
              "time": "9月20日消息"
            },
            {
              "title": "黄仁勋：2030 年不会是世界末日，反对放缓 AI 发展",
              "summary": "当地时间9月19日，在 CBS《周日早间》节目中，英伟达 CEO 黄仁勋表示“2030 年不会是世界末日”，并反对放缓 AI 发展的呼声。这一表态与 Anthropic、OpenAI 等企业高管近期呼吁暂缓最先进 AI 研发形成鲜明对比。",
              "link": "https://finance.sina.com.cn/tech/roll/2026-09-19/doc-iniskptt2962805.shtml",
              "tags": [
                "AI安全",
                "观点"
              ],
              "source": "新浪财经",
              "time": "当地时间9月19日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 个人 AI 助手 Muse 登顶美国 App Store",
              "summary": "9月20日消息，Meta 推出的个人 AI 代理应用 Muse 上线仅一周便登顶美国 App Store 免费应用榜第一，超越 ChatGPT。Muse 被设计为可代表用户执行实际任务的 AI 代理，能帮用户填写表格、在线购物、预订餐厅，并连接邮箱、日历、Spotify 等第三方服务，被视为 Meta“个人超级智能”战略获得市场认可的信号。",
              "link": "https://baijiahao.baidu.com/s?id=1876756830780615724",
              "tags": [
                "AI助手",
                "个人智能体"
              ],
              "source": "cnBeta",
              "time": "9月20日消息"
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
              "title": "阿里千问发布同声传译大模型 Qwen3.8-LiveTranslate",
              "summary": "9月19日，千问大模型正式发布同声传译大模型 Qwen3.8-LiveTranslate，以 Interleave 架构重构实时同传，支持 60 种语言，并新增实时说话人分离、原文译文同帧同出、长上下文消歧三项能力，字均延迟从 2.8 秒降至 2.3 秒。",
              "link": "https://www.jiemian.com/article/15115996.html",
              "tags": [
                "同声传译",
                "大模型"
              ],
              "source": "界面新闻",
              "time": "9月19日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": []
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek 调整 API 峰谷计费，法定节假日按空闲时段计费",
              "summary": "9月20日消息，DeepSeek 公布最新 API 峰谷计费规则，调休上班的周末、中国法定节假日全天均按空闲时段计费，此前已将周末全天统一按低谷时段收费。此次调整进一步细化峰谷定价机制，降低开发者在节假日使用大模型的成本。",
              "link": "https://baijiahao.baidu.com/s?id=1876754587358191420",
              "tags": [
                "API定价",
                "计费规则"
              ],
              "source": "IT之家",
              "time": "9月20日消息"
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
          "news": []
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "华为：昇腾已跨过生态拐点，有能力构建 AI 新生态",
              "summary": "9月19日，华为计算战略与业务发展部部长朱照生表示，昇腾已跨越生态拐点，完全有能力、有机会在 Agentic 时代构建 AI 新生态。昇腾 CANN 开源社区月均活跃用户超 5200 人，自今年 6 月起成为国内活跃度最高的开源社区，基于昇腾完成预训练的大模型和多模态模型已超 40 个。",
              "link": "https://baijiahao.baidu.com/s?id=1876739958280567216",
              "tags": [
                "昇腾",
                "AI算力"
              ],
              "source": "新浪财经",
              "time": "9月19日"
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
              "title": "中国电信",
              "news": [
                {
                  "title": "中国电信开源全栈国产智能体大模型 Xing4.0-29B-A4B",
                  "summary": "9月19日消息，中国电信开源首个全栈国产轻量级智能体大模型 Xing4.0-29B-A4B，从训练芯片到推理部署实现全栈国产，采用昇腾训练、国产框架适配与自研架构，并开放开源生态。",
                  "link": "https://baijiahao.baidu.com/s?id=1876815053579505183",
                  "tags": [
                    "开源模型",
                    "智能体"
                  ],
                  "source": "新浪财经",
                  "time": "9月19日消息"
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
              "title": "璇玑动力",
              "news": [
                {
                  "title": "璇玑动力中型智能四足机器人全球首发",
                  "summary": "9月19日，璇玑动力发布中型智能四足机器人 Hypertron-SW01，搭载峰值扭矩 240N·m 的关节电机模组，最大陡坡攀爬 45°、最大站立荷载 120Kg，支持 IP67 防护与自动充电，可热插拔换电实现 7×24 小时运行，并开放核心 SDK 对接第三方外设。",
                  "link": "https://baijiahao.baidu.com/s?id=1876808702106069701",
                  "tags": [
                    "四足机器人",
                    "具身智能"
                  ],
                  "source": "新浪财经",
                  "time": "9月19日"
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
              "title": "欧洲AI业界",
              "news": [
                {
                  "title": "欧洲人士质疑美企提议放缓 AI 研发是“出于私利”",
                  "summary": "9月20日消息，欧洲科技企业和政府人士近期纷纷质疑美国 AI 企业以安全为由提议放缓 AI 研发是“出于私利”，认为其真正目的是巩固自身优势并打压竞争者。法国米斯特拉尔等欧洲 AI 企业表示反对，法国经济与财政部长罗兰·莱斯屈尔称“让身后所有竞争者放慢脚步、好保住第一名的利己意图一目了然”。",
                  "link": "https://baijiahao.baidu.com/s?id=1876747570267152054",
                  "tags": [
                    "AI监管",
                    "国际竞争"
                  ],
                  "source": "新华社",
                  "time": "9月20日消息"
                }
              ]
            },
            {
              "title": "AI反垄断诉讼",
              "news": [
                {
                  "title": "Anthropic、OpenAI 等四家 AI 巨头因呼吁放缓 AI 遭反垄断诉讼",
                  "summary": "当地时间9月18日，一份提交至联邦法院的民事诉讼显示，Anthropic、OpenAI、SpaceXAI 及谷歌因近期呼吁协同放缓 AI 研发速度，被指控存在串通行为。诉状认为，依据美国反垄断法，上述行为属于竞争者之间达成的非法商业协议。代理律师称，提起诉讼是为了防止巨头达成“利己的私下协议”。",
                  "link": "https://baijiahao.baidu.com/s?id=1876739329460280262",
                  "tags": [
                    "反垄断",
                    "AI监管"
                  ],
                  "source": "金融界",
                  "time": "当地时间9月18日"
                }
              ]
            },
            {
              "title": "金刚石散热",
              "news": [
                {
                  "title": "中信证券：金刚石散热迎来产业化元年",
                  "summary": "9月20日消息，中信证券研报称，在 AI 芯片功耗陡峭攀升、传统金属散热逼近物理极限及金刚石制备技术持续优化三重因素驱动下，金刚石散热行业有望迎来产业化元年的投资机遇，建议围绕率先商用交付和产能量产卡位两条主线布局。",
                  "link": "https://baijiahao.baidu.com/s?id=1876739801996716804",
                  "tags": [
                    "AI芯片",
                    "散热"
                  ],
                  "source": "新浪财经",
                  "time": "9月20日消息"
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
          "date": "2026-09-20",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "14.6T tokens",
              "change": "↑300%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "13T tokens",
              "change": "↑8%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "12.4T tokens",
              "change": "↑24%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "11.9T tokens",
              "change": "↑31%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "9.77T tokens",
              "change": "↑16%"
            },
            {
              "model": "MiMo-V2.5 (xiaomi)",
              "score": "7.17T tokens",
              "change": "↑4%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "4.75T tokens",
              "change": "↑30%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "4.19T tokens",
              "change": "↑16%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.87T tokens",
              "change": "↑13%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "2.97T tokens",
              "change": "↑12%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.16T tokens",
              "change": "↑8%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.14T tokens",
              "change": "↑16%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "2.08T tokens",
              "change": "↑27%"
            },
            {
              "model": "GPT-6 Astra (openai)",
              "score": "1.7T tokens",
              "change": "↑135%"
            },
            {
              "model": "Solar Pro 4 (upstage)",
              "score": "1.62T tokens",
              "change": "↑6%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.58T tokens",
              "change": "↑17%"
            },
            {
              "model": "Claude Sonnet 5 (anthropic)",
              "score": "1.53T tokens",
              "change": "↑11%"
            },
            {
              "model": "MiniMax M3 (minimax)",
              "score": "1.48T tokens",
              "change": "↑1%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.45T tokens",
              "change": "↑3%"
            },
            {
              "model": "Laguna S 2.1 (free) (poolside)",
              "score": "1.18T tokens",
              "change": "↑3%"
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
