const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-11-16",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 推出 ChatGPT 钱包，联手三大支付网络",
              "summary": "11月14日消息，OpenAI 宣布推出 ChatGPT 钱包，与美国运通、万事达和 Visa 三大支付网络合作，通过替代支付凭证让 AI 代理无需接触用户真实信用卡信息即可完成付款，同时保留原有信用卡奖励和交易争议保障。该功能上线初期仅面向美国成年 Pro 订阅用户开放，且须持有符合条件的美国信用卡，上线初期不会从交易中抽成。",
              "link": "https://www.cls.cn/detail/2534281",
              "tags": [
                "支付",
                "AI代理"
              ],
              "source": "财联社",
              "time": "11月14日消息"
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
          "news": [
            {
              "title": "黄仁勋考虑重返英伟达 CEO，硅谷盟友游说复职",
              "summary": "11月16日消息，据《金融时报》报道，被董事会驱逐数天后，英伟达前 CEO 黄仁勋正在讨论重返公司的可能性，硅谷多位盟友组建由企业高管组成的「作战室」游说推动其复职，并计划争取白宫支持。呼吁恢复黄仁勋职务的公开信已获超 16 万个签名，马斯克等高管公开支持联名信。",
              "link": "https://finance.sina.com.cn/wm/2026-11-16/doc-iniywsti1331229.shtml",
              "tags": [
                "CEO更替",
                "请愿"
              ],
              "source": "新浪财经",
              "time": "11月16日消息"
            },
            {
              "title": "英伟达回应继任者传闻，被曝接触 Arm CEO Rene Haas",
              "summary": "11月16日消息，据界面新闻报道，英伟达董事会在寻找黄仁勋潜在继任者过程中，已接触 Arm 首席执行官雷内·哈斯（Rene Haas）。哈斯 2013 年加入 Arm 前曾任英伟达计算产品业务高管，报道称他只是董事会目前考虑的候选人之一。英伟达董事会声明称正遴选负责 CEO 人选物色的猎头机构，尚未与任何候选人正式接触，针对具体候选人的猜测「为时过早」。",
              "link": "https://www.sina.cn/news/detail/5365183850480171.html",
              "tags": [
                "继任者",
                "人事"
              ],
              "source": "新浪",
              "time": "11月16日消息"
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
          "news": [
            {
              "title": "华为云上线开源盘古 openPangu-2.1-Pro，支持 512K 上下文",
              "summary": "11月15日消息，华为云 MaaS 平台正式上线开源盘古模型 openPangu-2.1-Pro，围绕 Agent 开发、AI 编码、推理优化方向能力升级，支持 512K 上下文、可开关的深度思考、函数调用、前缀续写和前缀缓存。新版本着重改进鸿蒙原生应用开发的 ArkTS 代码生成，并适配昇腾算子开发流程。",
              "link": "https://baijiahao.baidu.com/s?id=1881934130971082320",
              "tags": [
                "开源",
                "Agent"
              ],
              "source": "百家号",
              "time": "11月15日消息"
            },
            {
              "title": "华为麒麟 9050 巴龙 AI Modem 公开：首创融合通信架构",
              "summary": "11月15日消息，华为官方继续揭秘首款「逻辑折叠」技术 τ 芯片麒麟 9050 系列，公开新一代巴龙 AI Modem 情报，首创融合通信架构，业界首发四卡三待。此前华为已公开麒麟 9050 的新马良 GPU 与 AI ISP 情报，自研芯片能力持续曝光。",
              "link": "https://m.ithome.com/html/1027292.htm",
              "tags": [
                "自研芯片",
                "基带"
              ],
              "source": "IT之家",
              "time": "11月15日消息"
            },
            {
              "title": "华为云发布并开源昇腾原生具身世界模型 CloudRobo-WM1.2",
              "summary": "11月16日消息，华为云「行业 AI 梦工厂」正式发布并开源昇腾原生具身世界模型 CloudRobo-WM1.2，通过五大核心技术突破加速具身智能从实验室走向规模化落地。华为云透露，昇腾云在具身智能市场排行中国第一，已有 80% 的中国具身智能企业选择昇腾云。",
              "link": "https://www.ithome.com/1/027/684.htm",
              "tags": [
                "具身智能",
                "世界模型"
              ],
              "source": "IT之家",
              "time": "11月16日消息"
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
                  "title": "曝苹果首款智能眼镜 N50 明年 6 月发布，主打 Siri 生态",
                  "summary": "11月16日消息，据彭博社报道，苹果首款智能眼镜内部代号 N50，计划明年 6 月 WWDC 发布，主打 Siri AI 与第三方应用的深度集成。该眼镜不具备 AR 显示功能，被员工称为「戴在脸上的 AirPods」，镜框比 Meta 二代 Ray-Ban 更轻薄，运行精简版 visionOS 28，与 iPhone 协作即可完成订座、导航、翻译等操作。",
                  "link": "https://original.ifeng.com/c/8y5myS0eIoe",
                  "tags": [
                    "智能眼镜",
                    "AI硬件"
                  ],
                  "source": "凤凰网",
                  "time": "11月16日消息"
                }
              ]
            },
            {
              "title": "联发科",
              "news": [
                {
                  "title": "联发科 Genio 420 平台赋能端侧 AI 睡眠温控",
                  "summary": "11月16日消息，ISHO iFlow 智能温控系统搭载联发科 Genio 420 平台，通过端侧 AI 实时分析睡眠数据动态调温，实现无感智能睡眠体验。该方案让卧室温控从被动调节变为主动适配，是端侧 AI 在智能家居场景的落地案例。",
                  "link": "https://baijiahao.baidu.com/s?id=1881980703372403486",
                  "tags": [
                    "端侧AI",
                    "智能家居"
                  ],
                  "source": "百家号",
                  "time": "11月16日消息"
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
                  "title": "特斯拉开始面向个人销售无人驾驶 Cybercab",
                  "summary": "11月14日消息，特斯拉表示已向一小部分客户开放 Cybercab 预订，准备向普通消费者推出这款无方向盘、无脚踏板的两座无人驾驶汽车。此前 Cybercab 仅作为特斯拉自动驾驶出租车服务的一部分在奥斯汀上线，此次开放个人购买的具体范围和定义尚未明确。",
                  "link": "https://finance.sina.com.cn/wm/2026-11-14/doc-iniytnhu7066480.shtml",
                  "tags": [
                    "自动驾驶",
                    "无人出租车"
                  ],
                  "source": "新浪财经",
                  "time": "11月14日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "谋先飞",
              "news": [
                {
                  "title": "谋先飞发布机器人物理仿真引擎 MotrixSim 1.0",
                  "summary": "11月16日消息，中国团队谋先飞（Motphys）发布物理仿真引擎 MotrixSim 1.0，面向机器人训练和合成数据生成。引擎核心以 Rust 编写，支持在 CPU 上并行运行多个仿真环境，可模拟物体接触和摩擦，同时输出渲染画面和传感器数据，开发者可通过 Python 接口载入机器人模型、发送控制指令。",
                  "link": "https://baijiahao.baidu.com/s?id=1881995769077284901",
                  "tags": [
                    "具身智能",
                    "仿真"
                  ],
                  "source": "百家号",
                  "time": "11月16日消息"
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
              "title": "AI音乐奖",
              "news": [
                {
                  "title": "首届 AI 音乐奖揭晓，虚拟歌手 Xania Monet 获三项大奖",
                  "summary": "当地时间11月13日消息，首届 AI 音乐奖在洛杉矶举行，虚拟歌手 Xania Monet 拿下年度 AI 艺人、年度 AI 歌曲和年度 AI 专辑三项大奖，获奖歌曲为 R&B 单曲《How Was I Supposed to Know?》。Xania Monet 由词作者 Telisha「Nikki」Jones 创造，主办方 Sonic Intelligence Academy 还设置了最佳 AI 辅助歌曲等奖项。",
                  "link": "https://vrtuoluo.cn/546436.html",
                  "tags": [
                    "AI音乐",
                    "AIGC"
                  ],
                  "source": "VR陀螺",
                  "time": "当地时间11月13日消息"
                }
              ]
            },
            {
              "title": "韩国税务师考试",
              "news": [
                {
                  "title": "韩国税务师考试现 AI 作弊，政府排查全部国家资格考试",
                  "summary": "11月15日消息，韩国第 63 届税务师考试头名考生公开承认利用 AI 作弊，使用微型摄像头拍摄题目、借助 AI 获取答案。韩国雇佣劳动部宣布立即排查 2026 年所有国家资格考试，涉事考生成绩作废、取消合格资格并禁考五年，还将引入红外线探测器等防作弊措施。",
                  "link": "http://korea.people.com.cn/n1/2026/1116/c407864-40834564.html",
                  "tags": [
                    "AI作弊",
                    "监管"
                  ],
                  "source": "人民网",
                  "time": "11月15日消息"
                }
              ]
            },
            {
              "title": "国家统计局",
              "news": [
                {
                  "title": "国家统计局：AI 快速落地带动电子、电气机械行业价格回升",
                  "summary": "11月16日消息，国家统计局新闻发言人王冠华表示，AI 正加快从技术创新走向产业落地，持续赋能产业升级。10 月电气机械和计算机通信等行业价格环比均上涨 0.1%，同比分别上涨 6.2% 和 5.9%，合计影响 PPI 同比上涨约 1.18 个百分点。",
                  "link": "https://baijiahao.baidu.com/s?id=1881984005129785279",
                  "tags": [
                    "宏观数据",
                    "产业落地"
                  ],
                  "source": "百家号",
                  "time": "11月16日消息"
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
          "date": "2026-11-13",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "55.8T tokens",
              "change": "↓1%"
            },
            {
              "model": "Hy4 (tencent)",
              "score": "20.3T tokens",
              "change": "↑405%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "16T tokens",
              "change": "↓3%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "12T tokens",
              "change": "↓20%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "7.43T tokens",
              "change": "↑2%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "6.79T tokens",
              "change": "↑4%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "6.73T tokens",
              "change": "↑1%"
            },
            {
              "model": "Kimi K3.1 Pro (moonshotai)",
              "score": "4.38T tokens",
              "change": "↑24%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "4.23T tokens",
              "change": "↑17%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.88T tokens",
              "change": "↑9%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "3.62T tokens",
              "change": "↑51%"
            },
            {
              "model": "MiniMax M3.1 Flash (minimax)",
              "score": "3.6T tokens",
              "change": "↓40%"
            },
            {
              "model": "Crouton Alpha (stealth)",
              "score": "3.53T tokens",
              "change": "↑125%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "3.24T tokens",
              "change": "↓12%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "3.19T tokens",
              "change": "↑10%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.99T tokens",
              "change": "↑15%"
            },
            {
              "model": "Nemotron 3.5 Super VL (free) (nvidia)",
              "score": "2.91T tokens",
              "change": "↑3%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.8T tokens",
              "change": "↓7%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.79T tokens",
              "change": "—"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.44T tokens",
              "change": "↑6%"
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
