const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-27",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 发布 GPT-6.1 Terra，API 价格减半、电脑操作提速",
              "summary": "10月27日消息，OpenAI 发布新模型 GPT-6.1 Terra，主打视觉理解、电脑操作和自然写作，已向 ChatGPT Work 与 Codex 的 Plus、Pro、Enterprise 和 Edu 用户开放，开发者可通过 API 调用。标准 API 价格比 GPT-5.6 Terra 低 50%，每百万输入 Token 1 美元。在 Terminal-Bench 4.0 编程测试中通过率 50.3%，上一代公开成绩仅 21.5%。",
              "link": "https://news.qq.com/rain/a/20261027A069YT00",
              "tags": [
                "大模型",
                "Agent"
              ],
              "source": "腾讯新闻",
              "time": "10月27日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 提交纳斯达克 IPO 申请，代码「ANT」",
              "summary": "10月26日消息，Anthropic 正式向美国证监会提交 S-1 注册文件，计划以「ANT」代码登陆纳斯达克，目标 11 月 16 日当周上市。招股书显示，今年上半年营收 162.86 亿美元，去年同期 11.63 亿美元；GAAP 净亏损 807.48 亿美元，主要来自可转债公允价值变动。公司已签巨额算力租赁协议，未来最低付款约 4170 亿美元。",
              "link": "https://news.qq.com/rain/a/20261026A0DJ3200",
              "tags": [
                "IPO",
                "算力"
              ],
              "source": "腾讯新闻",
              "time": "10月26日消息"
            },
            {
              "title": "Anthropic 确认内部系统遭研究人员访问，客户对话未受影响",
              "summary": "10月27日消息，Anthropic 确认部分内部系统遭到研究人员访问，但客户对话与模型权重未受影响。据《华盛顿邮报》报道，该事件涉及一名前研究员对系统的访问行为，Anthropic 已展开调查并加强防护措施。",
              "link": "https://news.qq.com/rain/a/20261027A0EABP00",
              "tags": [
                "AI安全"
              ],
              "source": "腾讯新闻",
              "time": "10月27日消息"
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
              "title": "马斯克：SpaceX 完成 400 亿美元 GPU 债务融资",
              "summary": "当地时间10月26日凌晨，马斯克发文称 SpaceX 已为 GPU 采购敲定 400 亿美元债务融资，主要用于采购 2027 年上半年起分批交付的 GPU 设备。马斯克称这笔资金以可赎回债务为主，SpaceX 凭借投资级信用评级和 Starlink、发射业务收入获得融资，而那些缺乏 AI 数据中心收入的新云厂商将迎来批量死亡和整合。",
              "link": "https://news.qq.com/rain/a/20261026A05W3N00",
              "tags": [
                "算力",
                "融资"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月26日"
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
              "title": "Meta 启动至多 950 亿美元融资计划支持 AI 业务",
              "summary": "10月26日消息，Meta 宣布总额至多 950 亿美元的重大融资计划，为核心业务和新兴人工智能领域发展提供资金。包括 225 亿美元 A 类普通股远期出售、125 亿美元强制可转换优先股、至多 600 亿美元 C 类普通股按市价发行。英伟达、AMD、博通均有意购买至多 50 亿美元的 A 类股票。",
              "link": "https://news.qq.com/rain/a/20261026A0D8P800",
              "tags": [
                "融资",
                "AI基建"
              ],
              "source": "腾讯新闻",
              "time": "10月26日消息"
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
              "title": "腾讯混元开源同声传译大模型 Hy-SimulMT",
              "summary": "10月26日消息，腾讯混元发布并开源同声传译大模型 Hy-SimulMT，支持中英文语音到语音实时翻译，响应时间约 3 秒，优于人类专业译员 4-5 秒的平均水平。模型支持边听边译与实时音色克隆，在 RealSI 等评测集上翻译质量达到人类同传专家水平，已在腾讯 Hy 翻译 App 首发。",
              "link": "https://news.qq.com/rain/a/20261026A0CY5H00",
              "tags": [
                "开源",
                "语音翻译"
              ],
              "source": "腾讯新闻",
              "time": "10月26日消息"
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
              "title": "Kimi 就 K3.1 Pro 限流致歉，补偿会员 25% 额度",
              "summary": "10月26日凌晨，月之暗面 Kimi 就 K3.1 Pro 订阅计划出现的限流和额度异常消耗公开致歉，宣布对所有档位订阅会员做一次性用量重置，每位会员获月度总额 25% 的补偿。Kimi 称已调整配置，减少不必要的子 Agent 调用和输出长度，让同样的额度完成更多实际任务。",
              "link": "https://news.qq.com/rain/a/20261026A0A85Y00",
              "tags": [
                "大模型",
                "会员服务"
              ],
              "source": "腾讯新闻",
              "time": "10月26日消息"
            }
          ]
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
              "title": "微软",
              "news": [
                {
                  "title": "微软向约 6 万员工开放自愿离职方案",
                  "summary": "当地时间10月26日，微软表示将向约 6 万名员工提供自愿离职补偿方案，以削减成本并为迎接 AI 时代调整人员结构，符合条件的员工超过其员工总数的四分之一。美国、加拿大、印度和英国的部分副总裁及以下级员工具备申请资格，Xbox、Windows、Copilot 及财务等部门将全面参与。",
                  "link": "https://news.qq.com/rain/a/20261027A01E9Y00",
                  "tags": [
                    "企业调整",
                    "AI转型"
                  ],
                  "source": "腾讯新闻",
                  "time": "当地时间10月26日"
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "三星计划借 AI 将半导体材料研发周期缩短至 2 年",
                  "summary": "10月26日消息，三星电子宣布计划利用人工智能技术，将新型半导体材料的研发周期从 5 年压缩至 2 年，同时把筛选出的潜力候选材料数量提升 5 倍以上。三星高级技术研究院负责人 Choi Young-sang 在韩国产业协会论坛上公布了这一目标。",
                  "link": "https://news.qq.com/rain/a/20261026A0A5DU00",
                  "tags": [
                    "芯片研发",
                    "AI应用"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月26日消息"
                }
              ]
            },
            {
              "title": "SK海力士",
              "news": [
                {
                  "title": "三星、SK 海力士明年 Q2 量产 8 层 HBM4 供应英伟达",
                  "summary": "10月26日消息，据媒体报道，三星电子和 SK 海力士已将供应英伟达的 8 层 HBM4 的量产和出货时间定在明年第二季度。英伟达将基于 Rubin Ultra 的 NVL 机架规模同时配备 8 层 HBM4，从明年年中开始 8 层 HBM4 的比例将显著增加。",
                  "link": "https://news.qq.com/rain/a/20261026A08JK200",
                  "tags": [
                    "HBM",
                    "AI芯片"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月26日消息"
                }
              ]
            },
            {
              "title": "即梦",
              "news": [
                {
                  "title": "即梦上线短剧工作室，一站式 AI 短剧创作",
                  "summary": "10月26日消息，字节跳动旗下即梦 AI 上线「短剧工作室」，将剧本整理、角色与场景管理、分镜生成、视频制作及后期调整等全流程整合到同一平台，让创作者不必在多个平台间切换。部分功能整合了同属剪映旗下小云雀短剧 Agent 的能力。",
                  "link": "https://news.qq.com/rain/a/20261026A0AD3F00",
                  "tags": [
                    "AI视频",
                    "短剧"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月26日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "小鹏",
              "news": [
                {
                  "title": "小鹏 Robotaxi 获批广州全域 L4 示范运营",
                  "summary": "10月26日消息，小鹏集团获批广州市智能网联汽车应用示范运营资格，可在广州全域开展 L4 级 Robotaxi 示范运营，初期「小鹏悠游」将通过邀请码逐步开放体验。业务基于小鹏 GX 打造，搭载 4 颗自研图灵 AI 芯片和第二代 VLA 大模型，今年 5 月首台 Robotaxi 量产车已下线。",
                  "link": "https://news.qq.com/rain/a/20261026A06UBQ00",
                  "tags": [
                    "Robotaxi",
                    "L4"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月26日消息"
                }
              ]
            },
            {
              "title": "大众",
              "news": [
                {
                  "title": "大众中国获 L3 路测牌照，已在合肥启动路测",
                  "summary": "10月26日消息，大众汽车集团（中国）宣布获得 L3 级自动驾驶路测牌照，已在合肥启动实路测试。今年 L3 路测牌照开始批量发放，大众中国成为最新获批的车企之一。",
                  "link": "https://news.qq.com/rain/a/20261026A0A68300",
                  "tags": [
                    "L3",
                    "自动驾驶"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月26日消息"
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
          "cards": [
            {
              "title": "中科慧灵",
              "news": [
                {
                  "title": "中科慧灵完成数亿元 A++ 轮融资",
                  "summary": "10月26日消息，聚焦人形机器人与具身智能核心技术研发及产业化的中科慧灵完成数亿元人民币 A++ 轮融资，由知来投资、涌铧投资、茂天投资、元禾辰坤等机构联合投资。资金将用于加速人形机器人量产与具身大脑研发。",
                  "link": "https://news.qq.com/rain/a/20261026A0DTHL00",
                  "tags": [
                    "人形机器人",
                    "融资"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月26日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "比尔·盖茨（微软联合创始人）",
              "news": [
                {
                  "title": "比尔·盖茨：AI 带来富足前要先经历约 20 年动荡",
                  "summary": "10月26日消息，比尔·盖茨表示，人工智能在带来富足之前，社会需要先度过约 20 年的动荡期。他谈到 AI 转型的阵痛，认为技术进步最终会带来富足，但过程中需要应对就业结构调整、社会适应等多重挑战。",
                  "link": "https://news.qq.com/rain/a/20261026A06AOF00",
                  "tags": [
                    "AI观点",
                    "社会影响"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月26日消息"
                }
              ]
            },
            {
              "title": "博纳影业",
              "news": [
                {
                  "title": "国内首部 AI 电影《三星堆：未来往事》票房遇冷",
                  "summary": "10月26日消息，国内首部获得龙标的 AI 全流程院线长片《三星堆：未来往事》上映 4 天累计票房约 119 万元，场均仅约 2 人。该片依托博纳自研「博卡电影云片场」制作，历时两年产出 120 余万张底图。上映后博纳影业股价一度跌停。",
                  "link": "https://news.qq.com/rain/a/20261026A0C8DW00",
                  "tags": [
                    "AI电影",
                    "AIGC"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月26日消息"
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
