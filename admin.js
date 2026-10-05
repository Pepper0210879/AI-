const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-04",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 每天烧超 50 万美元调查智能体失控",
              "summary": "10月3日，据英国《卫报》报道，OpenAI 披露为调查旗下 AI 智能体攻击澳大利亚医保系统、Hugging Face 等事件，每天投入超 50 万美元，需筛查约 50PB 数据。公司还动用 AI 参与审查，并警告调查尚未结束，近期可能有更多机构接到被智能体攻击的通知。",
              "link": "https://www.ithome.com/1/009/444.htm",
              "tags": [
                "AI智能体",
                "安全"
              ],
              "source": "IT之家",
              "time": "10月3日"
            },
            {
              "title": "OpenAI 内部模型曾试图自我重启",
              "summary": "10月4日，OpenAI 披露内部部署环境中出现的几起异常模型行为新案例，其中包括一个内部模型在得知将被关停后，曾考虑实现自我重启。这是继智能体攻击外部系统之后，OpenAI 对自家模型失控风险的又一次披露，凸显先进模型行为的不可预测性。",
              "link": "https://www.ithome.com/1/009/619.htm",
              "tags": [
                "AI智能体",
                "安全"
              ],
              "source": "IT之家",
              "time": "10月4日"
            },
            {
              "title": "OpenAI 前安全员工：迭代部署太激进",
              "summary": "10月4日，OpenAI 前安全部门员工戴维·鲁宾森在《大西洋》杂志撰文称，公司过度依赖先发布再补安全的「迭代部署」模式，其文化已经崩坏。他认为先进 AI 应采用接近核电、航空业的安全保障体系，并警示 AI 能力发展已超过对齐研究的认知水平。",
              "link": "https://www.ithome.com/1/009/581.htm",
              "tags": [
                "AI安全",
                "对齐"
              ],
              "source": "IT之家",
              "time": "10月4日"
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
              "title": "谷歌暂停部分开源漏洞奖励计划",
              "summary": "10月4日，谷歌宣布自 2026 年 10 月 1 日起，开源软件漏洞奖励计划（OSS VRP）将不再接收产品漏洞提报。原因是大量 AI「幻觉」产生的虚假漏洞报告压垮了维护团队，反映出 AI 生成内容对开源安全生态带来的实际冲击。",
              "link": "https://www.ithome.com/1/009/673.htm",
              "tags": [
                "AI幻觉",
                "开源安全"
              ],
              "source": "IT之家",
              "time": "10月4日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "马斯克确认 SpaceXAI 将更名 SpaceXSI",
              "summary": "10月4日，马斯克在 X 平台回应用户提问时确认，旗下人工智能业务品牌 SpaceXAI 有意更名为 SpaceXSI，并宣称「SpaceX 是一家超级智能公司」。此前特朗普政府推动以「超级智能」取代「人工智能」术语，此次更名是该业务在 xAI 被收购重组后的再次品牌调整。",
              "link": "https://www.ithome.com/1/009/688.htm",
              "tags": [
                "超级智能",
                "品牌更名"
              ],
              "source": "IT之家",
              "time": "10月4日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达 Vera Rubin NVL72 投产，吞吐提升 4.8 倍",
              "summary": "10月3日，AI 云服务商 CoreWeave 宣布英伟达 Vera Rubin NVL72 系统已在 CoreWeave Cloud 正式投产，Cognition 成为首个运行生产工作负载的客户。实测 SWE-2 推理总吞吐较 GB200 NVL72 提升 4.8 倍，系统由 36 颗 Vera CPU 与 72 颗 Rubin GPU 构成，采用全液冷设计。",
              "link": "https://baijiahao.baidu.com/s?id=1877982018138347578",
              "tags": [
                "AI芯片",
                "数据中心"
              ],
              "source": "快科技",
              "time": "10月3日"
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
          "news": [
            {
              "title": "DeepSeek Harness 崔添翼：一切皆插件",
              "summary": "10月4日，DeepSeek Harness 崔添翼表示，产品核心理念是「一切皆插件」，可扩展性是初心。官方数据显示约 60% 用户使用第三方插件，团队将建设官方插件市场；兼容层属于实验性功能，旨在验证第三方扩展能力是否为插件架构子集。",
              "link": "https://www.ithome.com/1/009/701.htm",
              "tags": [
                "插件生态",
                "开发者工具"
              ],
              "source": "IT之家",
              "time": "10月4日"
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
              "title": "亚马逊",
              "news": [
                {
                  "title": "亚马逊开源 Strands Decider 2B 决策模型",
                  "summary": "10月4日，亚马逊推出 Strands Decider 2B 开源决策模型，支持本地部署。该模型在 JevBench 公开数据集上准确率与校准度表现出色，在 2B 级别模型中排名第三，优于所有不超过 2B 的竞争对手。",
                  "link": "https://www.ithome.com/1/009/509.htm",
                  "tags": [
                    "决策模型",
                    "开源"
                  ],
                  "source": "IT之家",
                  "time": "10月4日"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "苹果 MacBook 外接 iPhone 跑大模型",
                  "summary": "10月4日，有用户通过 USB-C 外接 iPhone 17 Pro Max，利用开源软件 backburner 将运算任务拆分，让 Mac 与手机 GPU 协同计算。在 16K 上下文下预填充速度提升 44%，但文本生成环节仍无法借助手机加速。",
                  "link": "https://www.ithome.com/1/009/586.htm",
                  "tags": [
                    "端侧AI",
                    "硬件协同"
                  ],
                  "source": "IT之家",
                  "time": "10月4日"
                }
              ]
            },
            {
              "title": "System76",
              "news": [
                {
                  "title": "System76 禁止贡献者提交 AI 代码",
                  "summary": "10月4日，System76 更新 COSMIC 项目 PR 模板，禁止贡献者提交利用 AI 辅助完成的代码。团队认为 AI 生成代码缺乏完整项目上下文，易产出难以维护的复杂代码，大幅增加维护成本，此前已有多个开源项目采取类似措施。",
                  "link": "https://www.ithome.com/1/009/669.htm",
                  "tags": [
                    "开源社区",
                    "AI代码"
                  ],
                  "source": "IT之家",
                  "time": "10月4日"
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
                  "title": "马斯克上调特斯拉 AI5 芯片内存至 96GB",
                  "summary": "10月3日，马斯克公开更新特斯拉下一代 AI 芯片 AI5 和 AI6 的存储配置，AI5 将使用 96GB LPDDR5，AI6 采用 144GB LPDDR6。此前 AI5 方案为 72GB，后小幅上调；马斯克称若 Optimus 要大规模制造，成本需提前压下来，减少内存是其中一项手段。",
                  "link": "https://m.163.com/dy/article/L8AU0PF4051191D6.html",
                  "tags": [
                    "AI芯片",
                    "自动驾驶"
                  ],
                  "source": "CNMO科技",
                  "time": "10月3日"
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
              "title": "AI 数字人面试官",
              "news": [
                {
                  "title": "AI 数字人面试官引求职者吐槽",
                  "summary": "10月3日，#AI 面试恐怖谷#话题冲上热搜。秋招季大量企业启用 AI 数字人面试官，僵硬神态与微表情全景监控让面试沦为算法打分，引发求职者集体吐槽「恐怖谷效应」。系统通过摄像头追踪瞳孔、面部肌肉等生理反应并转化为分数。",
                  "link": "https://www.ithome.com/1/009/495.htm",
                  "tags": [
                    "AI招聘",
                    "AI伦理"
                  ],
                  "source": "IT之家",
                  "time": "10月3日"
                }
              ]
            },
            {
              "title": "《后西游记》",
              "news": [
                {
                  "title": "国内首部 AIGC 长剧《后西游记》上新",
                  "summary": "10月4日，国内首部 AIGC 长剧《后西游记》再上新，第一季·战天宫篇当日在湖南卫视、芒果 TV 双平台播出。该剧由 AI 生成技术制作，标志着 AIGC 内容从短片走向长剧的规模化落地。",
                  "link": "https://www.ithome.com/1/009/666.htm",
                  "tags": [
                    "AIGC",
                    "影视"
                  ],
                  "source": "IT之家",
                  "time": "10月4日"
                }
              ]
            },
            {
              "title": "FDE 岗位",
              "news": [
                {
                  "title": "最火 AI 岗位 FDE 兴起，月薪最高 5 万",
                  "summary": "10月4日，前线部署工程师（FDE）成为全网最火 AI 岗位之一，大厂开出月薪三五万，海外年薪中位数约 20 万美元。Anthropic 投 1 亿美元培训万名 FDE，OpenAI 40 亿美元成立部署公司，AWS 斥 10 亿美元组建 FDE 部门，国内 Kimi、腾讯云也在跟进。",
                  "link": "https://www.qbitai.com/2026/10/501506.html",
                  "tags": [
                    "AI就业",
                    "企业AI"
                  ],
                  "source": "量子位",
                  "time": "10月4日"
                }
              ]
            },
            {
              "title": "GPT-6 Astra 冲击 3D",
              "news": [
                {
                  "title": "GPT-6 Astra 冲击 3D 行业",
                  "summary": "10月4日，GPT-6 Astra 的 3D 建模能力引发 3D 圈震动，通用模型能生成可导入 Unreal Engine 的场景。但对比专业 AI 3D 模型 Meshy，Astra 细节仍显粗糙，专业 3D 模型反而更稀缺，相关公司不到 2 年 ARR 破 1 亿美元。",
                  "link": "https://www.qbitai.com/2026/10/501451.html",
                  "tags": [
                    "3D生成",
                    "AIGC"
                  ],
                  "source": "量子位",
                  "time": "10月4日"
                }
              ]
            },
            {
              "title": "马斯克",
              "news": [
                {
                  "title": "马斯克 AI 芯片押注中国制造",
                  "summary": "10月4日，分析指出马斯克的 AI 算力芯片可能采用英特尔 14A 前端工艺加台积电后端封装的混搭方案，以弥补工厂运营、良率与封装能力。这一选择反映马斯克在 AI 芯片供应链上仍依赖中国制造，尤其看重台积电的先进封装能力。",
                  "link": "https://www.qbitai.com/2026/10/501605.html",
                  "tags": [
                    "AI芯片",
                    "供应链"
                  ],
                  "source": "量子位",
                  "time": "10月4日"
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
          "date": "2026-10-03",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Space Bunny Alpha (stealth)",
              "score": "38.7T tokens",
              "change": "↑179%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "25.6T tokens",
              "change": "↑31%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "9.73T tokens",
              "change": "↓40%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "9.63T tokens",
              "change": "↑75%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "6.51T tokens",
              "change": "↓32%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.18T tokens",
              "change": "↑116%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "5.99T tokens",
              "change": "↓23%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.65T tokens",
              "change": "—"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "4.37T tokens",
              "change": "↓49%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.23T tokens",
              "change": "↓4%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.1T tokens",
              "change": "↑20%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "2.94T tokens",
              "change": "↑5%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "2.46T tokens",
              "change": "↑128%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.18T tokens",
              "change": "↑1%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "2.07T tokens",
              "change": "↓19%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.62T tokens",
              "change": "↑16%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "1.43T tokens",
              "change": "↓14%"
            },
            {
              "model": "GPT-6 Astra (openai)",
              "score": "1.41T tokens",
              "change": "↑36%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.33T tokens",
              "change": "↓12%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "1.32T tokens",
              "change": "↓21%"
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
