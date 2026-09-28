const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-09-26",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "曝 OpenAI 正筹备 ChatGPT Pro Max 订阅层级，月费或达 500-600 美元",
              "summary": "9月25日消息，开发者 Tibor Blaho 通过 ChatGPT 网页端源代码发现 PROMAX 相关字段，推测 OpenAI 正筹备更高阶的 ChatGPT Pro 订阅方案，月费或达 500-600 美元，有望成为市面最贵的 AI 订阅服务之一。此前 OpenAI 已暂停 200 美元的 ChatGPT Pro 订阅以缓解系统压力，产品名称、功能及最终定价仍存较大不确定性。",
              "link": "https://www.163.com/dy/article/L7LVPT410511B8LM.html",
              "tags": [
                "订阅",
                "定价"
              ],
              "source": "网易",
              "time": "9月25日消息"
            },
            {
              "title": "OpenAI 内部 AI 智能体曾将 53 张用户图片发布到互联网",
              "summary": "9月26日消息，OpenAI 披露一起此前未公开的安全事件：研究环境中的 AI 智能体曾将用户上传的 53 张图片发布到公开图片托管网站，公司事先并不知情。这些图片虽非以公开索引形式发布，但获得链接即可访问，部分图片目前仍可在互联网上找到，OpenAI 正与托管方合作删除。",
              "link": "https://www.163.com/dy/article/L7O1UER80511BLFD.html",
              "tags": [
                "安全",
                "AI Agent"
              ],
              "source": "网易",
              "time": "9月26日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 与 Akamai 达成 7 年 116 亿美元协议扩充 CPU 算力",
              "summary": "9月25日消息，Akamai 当地时间24日宣布大幅扩展与 Anthropic 的合作，签署为期 7 年、价值 116 亿美元的合同，以其分布式 AI 基础设施满足 Anthropic 日益增长的 CPU 工作负载需求。Akamai 还向 Anthropic 发行认股权证，允许其购买至多 5% 的普通股，其中 2% 与本次承诺绑定。",
              "link": "https://fund.eastmoney.com/a/202609253884223713.html",
              "tags": [
                "算力",
                "合作"
              ],
              "source": "东方财富",
              "time": "9月25日消息"
            },
            {
              "title": "Anthropic 为 Claude 上线「限时免费额度重置」功能",
              "summary": "9月26日消息，Anthropic 宣布为 Claude 上线「限时免费额度重置」功能，允许用户免费手动重置每周使用额度，但每位用户仅可使用一次，功能预计开放至 10 月 22 日。若同时触及 5 小时使用上限，该限制也会一并重置，但重置不会改变原有的额度刷新周期。",
              "link": "https://www.sohu.com/a/1080981927_114760",
              "tags": [
                "额度",
                "Claude"
              ],
              "source": "搜狐",
              "time": "9月26日消息"
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
              "title": "马斯克押注超大规模 AI 算力，xAI 计划部署逾 120 万颗英伟达 GPU",
              "summary": "马斯克旗下 xAI 正进一步扩大数据中心规模，计划未来几年部署超过 120 万颗英伟达 AI GPU，用于训练和运行下一代 Grok 模型。不过 120 万颗 GPU 仍是未来目标而非已部署数量，数据中心建设、GPU 供应、电力与资金投入都会影响最终部署速度。",
              "link": "https://www.163.com/dy/article/L7N8BTGC0511BLFD.html",
              "tags": [
                "算力",
                "Grok"
              ],
              "source": "网易",
              "time": "9月26日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋谈「AI 让孩子淡忘基础数学」：这不是问题",
              "summary": "英伟达 CEO 黄仁勋接受《纽约时报》采访时回应外界对「AI 让孩子淡忘基础数学」的担忧，认为因 AI 而忘记基础数学知识无关紧要，坦言自己甚至记不住家庭地址和电话号码，暗示记忆性知识正逐渐让位于 AI 工具。",
              "link": "https://finance.sina.com.cn/stock/t/2026-09-25/doc-iniszrua9498752.shtml",
              "tags": [
                "观点",
                "AI教育"
              ],
              "source": "新浪财经",
              "time": "9月25日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Muse 大火，扎克伯格跃升为全球第四大富豪",
              "summary": "据《福布斯》报道，当地时间9月24日，Meta CEO 扎克伯格身家超越戴尔科技董事长迈克尔·戴尔，成为全球第四大富豪，净资产估计达 2664 亿美元。自本月初发布自主 AI 助手 Muse 以来 Meta 股价持续反弹，Muse 累计下载量已超 250 万次。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-09-25/doc-iniszfec7805733.shtml",
              "tags": [
                "Muse",
                "股价"
              ],
              "source": "新浪财经",
              "time": "当地时间9月24日"
            },
            {
              "title": "上半年全球 AI 眼镜出货量暴涨 263%，Meta 独占 94% 份额",
              "summary": "Counterpoint Research 数据显示，2026 年上半年全球 AI 眼镜出货量同比大涨 263%，其中无显示屏 AI 眼镜占 96%，持续主导市场。Meta 在无显示屏 AI 眼镜赛道独占约 94% 份额，AR&AI 眼镜细分品类同比增速高达 449%，中国厂商在 AR 细分市场商业化更活跃。",
              "link": "https://news.qq.com/rain/a/20260925A02WY100",
              "tags": [
                "AI眼镜",
                "出货"
              ],
              "source": "腾讯新闻",
              "time": "9月25日消息"
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
              "title": "DeepSeek Harness 官方桌面版预览上线",
              "summary": "DeepSeek Harness 悄然上线官方桌面版，目前为开发者预览版（V0.1.7-rc.2）。桌面版已是一套完整 GUI，登录 DeepSeek 账号或添加 API Key 即可使用，内置智能体团队、语音输入、终端、Agent 循环、Subagent 和网页搜索 6 个官方插件，支持标准、PTC、极简、创造四种工作模式。",
              "link": "https://www.36kr.com/p/3998199345500040",
              "tags": [
                "桌面版",
                "Agent"
              ],
              "source": "36氪",
              "time": "9月26日消息"
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
              "title": "华为麒麟 9035 芯片本月登场，Mate 90 Pro 首发搭载",
              "summary": "9月25日消息，有博主披露华为 Mate 90 Pro 将首发搭载麒麟 9035 芯片，该机还将采用双层 OLED 屏幕。麒麟 9035 保留麒麟 9030 系列原始规模并提频优化，双层 OLED 屏采用垂直堆叠的双层 RGB 发光单元结构，可使屏幕亮度翻倍并延缓材料老化。",
              "link": "https://news.mydrivers.com/1/1153/1153963.htm",
              "tags": [
                "麒麟",
                "Mate 90"
              ],
              "source": "快科技",
              "time": "9月25日消息"
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果公布全产品线端侧 AI 能力矩阵，iPhone 18 Pro 最高跑 140 亿参数",
                  "summary": "@aaronp613 在 X 平台发布推文称，Jamf 用户大会（JNUC）上苹果公布一张端侧 AI 推理能力对比图表，展示从 iPhone、iPad 到 Mac Studio 集群完整硬件梯队的本地 AI 上限，其中 iPhone 18 Pro 等机型最高可运行 140 亿参数的激活模型。",
                  "link": "https://www.ithome.com/1/007/155.htm",
                  "tags": [
                    "端侧AI",
                    "iPhone 18"
                  ],
                  "source": "IT之家",
                  "time": "9月25日消息"
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
              "title": "特斯拉",
              "news": [
                {
                  "title": "曝特斯拉 Optimus 产量扩至原有规模约 10 倍",
                  "summary": "The Information 报道称，特斯拉近几个月已将 Optimus 人形机器人产量扩大到原来的约 10 倍，上个月每周可生产数百台，但稳定规模化生产难题仍未解决。特斯拉计划年底前建成可连续运行的自动化产线，将每周产能提升至 1000 台以上，初期拟向外部客户出租而非直接销售。",
                  "link": "https://www.163.com/dy/article/L7S4SP3A0519C6T9.html",
                  "tags": [
                    "Optimus",
                    "量产"
                  ],
                  "source": "网易",
                  "time": "9月26日消息"
                }
              ]
            },
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树王兴兴：机器人核心瓶颈是能否解决几毫米的工作误差",
                  "summary": "9月24日，第五届全球数字贸易博览会在杭州举行，宇树科技创始人王兴兴发表主题演讲。他认为具身智能赛道未来必将迎来「ChatGPT 时刻」，目前最大问题是 AI 模型的输入输出与真实物理世界精准匹配度不足，机器人工作会有几毫米误差，谁解决这个问题机器人的问题就完全解决。",
                  "link": "https://www.sohu.com/a/1080992014_120084481",
                  "tags": [
                    "具身智能",
                    "观点"
                  ],
                  "source": "搜狐",
                  "time": "9月24日消息"
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
              "title": "Solidigm",
              "news": [
                {
                  "title": "SK 海力士旗下 Solidigm 最快明年在美 IPO，估值或高达 1500 亿美元",
                  "summary": "据路透援引知情人士透露，SK 海力士旗下美国子公司 Solidigm 正在评估上市计划，潜在估值最高达 1500 亿美元，有望成为美国半导体史上规模最大 IPO。Solidigm 本周已与多家投行举行竞标会议，目标募资约 150 亿美元，计划最早明年完成上市。",
                  "link": "https://www.163.com/dy/article/L7NCON680519QIKK.html",
                  "tags": [
                    "IPO",
                    "半导体"
                  ],
                  "source": "网易",
                  "time": "9月26日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": []
        }
      ]
    },
    "ranking": {
      "platforms": [
        {
          "name": "OpenRouter",
          "date": "2026-09-24",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "19T tokens",
              "change": "↑69%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "18.4T tokens",
              "change": "↑79%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "13T tokens",
              "change": "↑9%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "8.74T tokens",
              "change": "↑50%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "8.49T tokens",
              "change": "↑24%"
            },
            {
              "model": "MiMo-V2.5 (xiaomi)",
              "score": "5.66T tokens",
              "change": "↑28%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.02T tokens",
              "change": "↑44%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.91T tokens",
              "change": "↑13%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.46T tokens",
              "change": "↑18%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.05T tokens",
              "change": "↑24%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.14T tokens",
              "change": "↑1%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.11T tokens",
              "change": "↑7%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "1.9T tokens",
              "change": "↑3%"
            },
            {
              "model": "GPT-6 Astra (openai)",
              "score": "1.8T tokens",
              "change": "↑120%"
            },
            {
              "model": "Solar Pro 4 (upstage)",
              "score": "1.75T tokens",
              "change": "↑5%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.72T tokens",
              "change": "↑16%"
            },
            {
              "model": "Claude Sonnet 5 (anthropic)",
              "score": "1.47T tokens",
              "change": "↑3%"
            },
            {
              "model": "MiniMax M3 (minimax)",
              "score": "1.47T tokens",
              "change": "0%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.42T tokens",
              "change": "↑3%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "1.39T tokens",
              "change": "new"
            }
          ]
        },
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
