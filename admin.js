const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-11-15",
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
              "title": "Anthropic CEO 阿莫迪：算力是最深层的商业难题",
              "summary": "11月15日消息，Anthropic CEO 阿莫迪在与摩根大通 CEO 戴蒙对谈时表示，算力是公司面临的最深层商业难题，Anthropic 上市正是为了储备现金以应对算力需求的不确定性，公司已做出高达 9000 亿美元的算力相关承诺。",
              "link": "https://baijiahao.baidu.com/s?id=1881990004656447397",
              "tags": [
                "算力",
                "观点"
              ],
              "source": "百家号",
              "time": "11月15日消息"
            },
            {
              "title": "Claude Fable 5.2 用 Python 代码模拟真实画笔作画",
              "summary": "11月15日消息，Anthropic 发布的 Claude Fable 5.2 不采用传统扩散模型生成图像，而是通过编写 Python 代码模拟画笔、颜料和画布质感，逐笔完成绘画，还能自行修正绘制错误。该模型在编程、科研及机器人控制领域表现出色。",
              "link": "https://m.ithome.com/mip/html/1027490.htm",
              "tags": [
                "多模态",
                "代码生成"
              ],
              "source": "IT之家",
              "time": "11月15日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌高管借 Gemini AI 让 iPhone Duo 运行 Win11",
              "summary": "11月14日消息，谷歌 AI Studio 产品与设计负责人阿马尔·雷希于 11 月 12 日在 X 平台发布推文，演示借助 Gemini AI 在苹果首款折叠手机 iPhone Duo 上运行 Windows 11 系统，并将相关项目 WindowsiOS 开源至 GitHub。",
              "link": "https://www.gamersky.com/news/202611/2246443.shtml",
              "tags": [
                "AI应用",
                "开源"
              ],
              "source": "游民星空",
              "time": "11月14日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX 首次实现「筷子夹星舰飞船」",
              "summary": "11月15日消息，SpaceX 在星舰第 15 次试飞中首次用发射塔「筷子」机械臂捕获轨道返回的星舰上面级，并成功部署 26 颗卫星，虽未完全回收整枚火箭，仍是星舰项目的重要里程碑，目前正调查助推器中止着陆的原因。",
              "link": "https://baijiahao.baidu.com/s?id=1881893228731058057",
              "tags": [
                "星舰",
                "火箭回收"
              ],
              "source": "百家号",
              "time": "11月15日消息"
            },
            {
              "title": "马斯克再发声力挺黄仁勋：没有他英伟达将流失关键合作",
              "summary": "11月14日消息，马斯克再度发声力挺黄仁勋，称赞其在供应链管理方面表现出色，指出英伟达许多关键交易都是靠黄仁勋与合作方握手达成，并未签署书面合同，若黄仁勋离开，英伟达将失去部分关键合作。",
              "link": "https://baijiahao.baidu.com/s?id=1881845917821247586",
              "tags": [
                "英伟达",
                "供应链"
              ],
              "source": "百家号",
              "time": "11月14日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达机器人学习工程师戴士钦辞职",
              "summary": "11月15日消息，英伟达机器人学习工程师戴士钦宣布辞职，称「黄仁勋离职让我格外失望」。他钦佩黄仁勋对 CUDA、AI 和具身智能的长期投入，更珍视其亲自阅读员工邮件、直接交流的工程师文化，黄仁勋突然离职且缺乏充分解释让他决定结束在英伟达的职业篇章。",
              "link": "https://baijiahao.baidu.com/s?id=1881990734315988833",
              "tags": [
                "人事变动",
                "具身智能"
              ],
              "source": "百家号",
              "time": "11月15日消息"
            },
            {
              "title": "英伟达品牌人员称 GeForce 显卡不会终结",
              "summary": "11月14日消息，黄仁勋离任 CEO 之际，英伟达品牌推广人员弗里曼表态称 GeForce 显卡不会终结，回应此前部分玩家担心英伟达会放弃游戏显卡业务的疑虑，为游戏玩家吃下定心丸。",
              "link": "https://baijiahao.baidu.com/s?id=1881830060720809621",
              "tags": [
                "游戏显卡"
              ],
              "source": "百家号",
              "time": "11月14日消息"
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
          "news": [
            {
              "title": "阿里通义千问 Qwen4-Max 正式上线",
              "summary": "11月15日消息，阿里通义千问推出新一代旗舰模型 Qwen4-Max，采用全新 MoE 架构，总参数 2.4 万亿，原生支持视觉理解，提供 100 万 Token 上下文窗口，任务成本较上一代降低超 60%，已开放 API 接入，后续将开源小尺寸模型。",
              "link": "https://baijiahao.baidu.com/s?id=1881991547859291568",
              "tags": [
                "MoE",
                "旗舰模型"
              ],
              "source": "百家号",
              "time": "11月15日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包工作上线「工作台」，覆盖 21 个专业场景",
              "summary": "11月15日消息，字节豆包工作上线新功能「工作台」，首批覆盖金融、医疗、教育等 21 个专业场景，为用户打造专属 AI 工作空间，预先配置专业技能与工具，支持自建个性化工作台，降低 AI 使用门槛。",
              "link": "https://baijiahao.baidu.com/s?id=1881994652814956748",
              "tags": [
                "AI办公",
                "工作台"
              ],
              "source": "百家号",
              "time": "11月15日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": []
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯混元发布 Hy4 flash 模型，单任务成本约 Hy4 的 5%",
              "summary": "11月15日消息，腾讯混元发布 Hy4 flash 模型，总参数 224B、激活 12B，支持 100 万 token 上下文，解码速度超 150tps，单任务成本约 Hy4 的 5%，综合能力略优于前代，已接入腾讯多款产品。",
              "link": "https://news.17173.com/content/11162026/133107367.shtml",
              "tags": [
                "推理模型",
                "降本"
              ],
              "source": "17173",
              "time": "11月15日消息"
            },
            {
              "title": "腾讯总办号召「心态归零」面向 AI 再创业",
              "summary": "11月15日消息，腾讯文化发布总办 LinkTime 播客现场笔记，提出核心业务需「心态归零」全面拥抱 AI，强调做以人为本的 AI，透露 AI 金字塔已具雏形，要求打破组织山头主义快速推进变革。",
              "link": "https://baijiahao.baidu.com/s?id=1881994722521618965",
              "tags": [
                "AI战略",
                "组织变革"
              ],
              "source": "百家号",
              "time": "11月15日消息"
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
          "news": []
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "华为麒麟 9050 新马良 GPU、AI ISP 情报公开",
              "summary": "11月14日消息，华为继续揭秘首款「逻辑折叠」技术 τ 芯片麒麟 9050 系列，公开新一代马良 GPU 和麒麟 AI ISP 情报，实装二代硬件光追，首次实现 2 亿像素融合拍照。",
              "link": "https://baijiahao.baidu.com/s?id=1881824140165078053",
              "tags": [
                "自研芯片",
                "GPU"
              ],
              "source": "百家号",
              "time": "11月14日消息"
            }
          ]
        }
      ]
    },
    "other": {
      "categories": [
        {
          "name": "其他厂商",
          "cards": []
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
          "cards": [
            {
              "title": "中国-东盟",
              "news": [
                {
                  "title": "中国与东盟宣布 2027 年为人工智能合作年",
                  "summary": "11月15日消息，中国与东盟宣布将 2027 年定为人工智能合作年，中国－东盟自贸区 3.0 版升级议定书将于 2026 年 12 月 1 日生效，双方将联合营造人工智能创新生态。",
                  "link": "http://www.xinhuanet.com/fortune/20261116/38e5aee23d7646c6ae526f58e5c0a922/c.html",
                  "tags": [
                    "AI出海",
                    "国际合作"
                  ],
                  "source": "新华网",
                  "time": "11月15日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "无界进化",
              "news": [
                {
                  "title": "无界进化完成超亿元 Pre-A 轮融资，刷新国内虚拟细胞纪录",
                  "summary": "11月15日消息，以虚拟细胞与递归科学发现为核心的 AI4S 企业无界进化宣布完成超亿元 Pre-A 轮融资，刷新中国虚拟细胞企业单笔融资金额纪录，投资方包括红杉中国、华盖、星连等。",
                  "link": "https://baijiahao.baidu.com/s?id=1881994207003734058",
                  "tags": [
                    "融资",
                    "AI4S"
                  ],
                  "source": "百家号",
                  "time": "11月15日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "SK 集团",
              "news": [
                {
                  "title": "SK 集团会长崔泰源：所有子公司都要蜕变为 AI 企业",
                  "summary": "11月15日消息，SK 集团会长崔泰源在 2026 CEO 研讨会上提出打破现有框架，将所有子公司转型为 AI 企业，打造 AI 服务与 Token 经济联动的「AI 飞轮」，强调 AI 时代全球合作的重要性。",
                  "link": "https://baijiahao.baidu.com/s?id=1881888614622524989",
                  "tags": [
                    "AI转型",
                    "产业升级"
                  ],
                  "source": "百家号",
                  "time": "11月15日消息"
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
