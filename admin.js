const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-16",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 上线 GPT-5.6 多智能体 V2，支持跨模型委派任务",
              "summary": "8月16日消息，OpenAI 工程师宣布 Multi-Agent V2 全面上线，主 Agent 可自动将子任务委派给任意支持模型（含此前受限的 Luna），每个子 Agent 可独立设置推理强度，仅将约 20% 高难度步骤交给最强模型，其余交由低成本模型处理。同批曝光的 ChatGPT 前端性能重构，让 741 轮「怪物级」对话打开提速约 16 倍。",
              "link": "https://tech.ifeng.com/c/8valEJF1gP9",
              "tags": [
                "多智能体",
                "产品功能",
                "GPT-5.6"
              ],
              "source": "凤凰科技",
              "time": "8月16日消息"
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
              "title": "谷歌安卓负责人：未来用户只表达意图，系统代劳完成任务",
              "summary": "8月16日消息，谷歌安卓生态系统总裁萨马特接受采访称，新一代安卓系统将以「用户表达意图、系统智能代劳」为核心，AI 智能体可跨应用自动完成从信息检索到任务执行的全流程，例如读取就诊记录、核实保险承保并直接完成预约。Pixel 11 Pro 背面新增指示灯，在 AI 处理语音指令时亮起。",
              "link": "https://www.ithome.com/0/990/172.htm",
              "tags": [
                "安卓",
                "智能体",
                "产品愿景"
              ],
              "source": "IT之家",
              "time": "8月16日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "news": []
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达首度披露 SpaceX 持仓，位列第六大股东",
              "summary": "8月16日消息，英伟达首次向 SEC 提交 13F 文件，披露持有 SpaceX 约 1.228 亿股 A 类股票、价值约 210 亿美元，为 SpaceX 第六大股东，也是其第二大股权持仓。该股份源于今年 1 月对 xAI 的 100 亿美元投资，2 月 SpaceX 换股收购 xAI 后转为 SpaceX 股权。马斯克称 AI 数据中心将独家采用英伟达芯片。",
              "link": "https://stcn.com/article/detail/4078755.html",
              "tags": [
                "投资",
                "SpaceX",
                "xAI"
              ],
              "source": "证券时报",
              "time": "8月16日消息"
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
              "title": "DeepSeek V4 Pro 正式版、Harness 上线国家超算互联网",
              "summary": "8月16日消息，国家超算互联网正式上线 DeepSeek V4 Pro 正式版及智能体框架 Harness，为科研与企业提供从训练到部署的国产算力支撑。该版本增强 Agent 能力，性能媲美 Claude Fable 5 等国外模型，可一站式完成部署开发。",
              "link": "https://www.ithome.com/0/990/002.htm",
              "tags": [
                "国产算力",
                "智能体",
                "模型发布"
              ],
              "source": "IT之家",
              "time": "8月16日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "刘炽平：微信将成为以 AI 为先的生态系统",
              "summary": "8月13日消息，在腾讯 2026Q2 财报业绩电话会上，腾讯总裁刘炽平表示，PC 时代 QQ 是通信社交工具，移动互联网时代微信将价值放大十倍以上，而到 AI 时代微信将成为以 AI 为先的生态系统——用户给出指令，系统就自行执行。微信 AI 助手「小微」自 6 月下旬灰度测试，帮助用户交易、探索内容、管理日常生活。",
              "link": "https://finance.sina.com.cn/roll/2026-08-13/doc-ininecsn4716907.shtml",
              "tags": [
                "微信",
                "AI生态",
                "高管观点"
              ],
              "source": "新浪财经",
              "time": "8月13日消息"
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
              "title": "索尼",
              "news": [
                {
                  "title": "索尼新专利：用 AI 模拟未成年人账号，主动识别潜在恶意用户",
                  "summary": "8月16日消息，索尼公布一项新专利，利用 AI 驱动账号模拟未成年人行为，主动识别并标记平台上的潜在恶意用户，为游戏及社交平台未成年人保护提供新思路。",
                  "link": "https://www.ithome.com/0/990/270.htm",
                  "tags": [
                    "AI应用",
                    "未成年人保护",
                    "专利"
                  ],
                  "source": "IT之家",
                  "time": "8月16日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "Waymo",
              "news": [
                {
                  "title": "Waymo 获准在加州 18 个县大幅扩张无人驾驶出租车",
                  "summary": "8月15日消息，加州公用事业委员会批准 Waymo 有史以来最大规模扩张，覆盖从索诺马到圣地亚哥的 18 个县，可在整个旧金山湾区和洛杉矶地区提供全自动驾驶付费出行，并开辟萨克拉门托和圣迭戈两个新市场。获批车型含捷豹 I-Pace 及搭载第六代 Waymo Driver 系统的 Ojai，目标年底前实现每周 100 万次出行。",
                  "link": "https://www.163.com/dy/article/L4C5A7LF0511BLFD.html",
                  "tags": [
                    "无人驾驶",
                    "Robotaxi"
                  ],
                  "source": "网易",
                  "time": "8月15日消息"
                }
              ]
            },
            {
              "title": "大众",
              "news": [
                {
                  "title": "大众中国推出自研端到端智驾 HS8，Q3 起搭载 7 款新车",
                  "summary": "8月16日消息，大众汽车集团（中国）通过酷睿程（CARIZON，大众与地平线合资）推出第一代全场景驾驶辅助 L2++ 产品 HS8，采用车载一段式端到端方案，专为中国复杂路况打造。2026 年三季度起将陆续搭载于上汽大众、一汽-大众、大众安徽三家合资企业的 7 款车型。",
                  "link": "https://www.c114.net.cn/industry/111407.html",
                  "tags": [
                    "智能驾驶",
                    "端到端",
                    "大众"
                  ],
                  "source": "通信世界网",
                  "time": "8月16日消息"
                }
              ]
            },
            {
              "title": "岚图",
              "news": [
                {
                  "title": "岚图追光 S 上市，全系标配华为乾崑智驾四激光方案",
                  "summary": "8月15日消息，岚图追光 S 正式上市，全系标配华为乾崑智驾四激光雷达方案，22.99 万元起售，限时 22.39 万-27.39 万元，限时免费赠送主副驾双零重力座椅、电动遮阳帘等。",
                  "link": "https://www.ithome.com/0/990/113.htm",
                  "tags": [
                    "智能驾驶",
                    "华为乾崑",
                    "新车"
                  ],
                  "source": "IT之家",
                  "time": "8月15日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "世界机器人大会",
              "news": [
                {
                  "title": "2026 世界机器人大会展位图揭晓，8 月 19 日开幕",
                  "summary": "8月16日消息，2026 世界机器人大会将于 8 月 19 日至 23 日在北京举行，展位图揭晓。宇树科技、优必选、银河通用、傅利叶、越疆等企业将带来机器人整机、具身智能及人形机器人最新成果，AMD、Infineon 等国际企业将亮相芯片与控制技术。",
                  "link": "https://www.ithome.com/0/990/220.htm",
                  "tags": [
                    "机器人",
                    "行业大会"
                  ],
                  "source": "IT之家",
                  "time": "8月16日消息"
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
          "cards": []
        }
      ]
    },
    "ranking": {
      "platforms": [
        {
          "name": "LMArena",
          "date": "2026-07-27",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "Claude Fable 5",
              "score": "1508",
              "change": "+6"
            },
            {
              "model": "Claude Opus 4.6 (Thinking)",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.7 (Thinking)",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.6",
              "score": "1497",
              "change": "+4"
            },
            {
              "model": "Claude Opus 5 Max",
              "score": "1495",
              "change": "+12"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "1493",
              "change": "+4"
            },
            {
              "model": "Claude Opus 5 High",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "Muse Spark 1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "Muse Spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "Gemini 3.1 Pro Preview",
              "score": "1486",
              "change": "+3"
            },
            {
              "model": "Kimi K3 Max",
              "score": "1486",
              "change": "+10"
            },
            {
              "model": "Gemini 3 Pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "GPT-5.6 Sol XHigh",
              "score": "1485",
              "change": "+7"
            },
            {
              "model": "Claude Opus 4.8 (Thinking)",
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "1482",
              "change": "+8"
            },
            {
              "model": "GPT-5.5 High",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "GPT-5.4 High",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "Gemini 3.5 Flash High",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "GPT-5.2 Chat Latest",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "GPT-5.5",
              "score": "1476",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-08-15",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.1T tokens",
              "change": "↑35%"
            },
            {
              "model": "Hy3",
              "score": "10.4T tokens",
              "change": "↑46%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "5.23T tokens",
              "change": "↑17%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.77T tokens",
              "change": "↑21%"
            },
            {
              "model": "GLM 5.2",
              "score": "4.23T tokens",
              "change": "↑30%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "3.84T tokens",
              "change": "↑28%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.77T tokens",
              "change": "↑8%"
            },
            {
              "model": "Claude Opus 5",
              "score": "2.06T tokens",
              "change": "↑67%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "1.99T tokens",
              "change": "↑17%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "1.85T tokens",
              "change": "↑21%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.65T tokens",
              "change": "↑12%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.53T tokens",
              "change": "↑10%"
            },
            {
              "model": "Kimi K3",
              "score": "1.45T tokens",
              "change": "↑9%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.08T tokens",
              "change": "↑3%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.01T tokens",
              "change": "↑21%"
            },
            {
              "model": "GPT-5.6 Terra",
              "score": "912B tokens",
              "change": "↑15%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "850B tokens",
              "change": "↑6%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "742B tokens",
              "change": "↑11%"
            },
            {
              "model": "Gemini 2.5 Flash Lite",
              "score": "706B tokens",
              "change": "↑15%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "701B tokens",
              "change": "↑19%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-31",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "MiniMax H3",
              "category": "Design Tools",
              "rank": 1,
              "link": "https://www.minimax.io"
            },
            {
              "name": "Cleanlist AI",
              "category": "Sales",
              "rank": 2,
              "link": "https://www.cleanlist.ai"
            },
            {
              "name": "metrics",
              "category": "Mac",
              "rank": 3,
              "link": "https://github.com/mxcl/metrics"
            },
            {
              "name": "Poth Labs",
              "category": "Customer Success",
              "rank": 4,
              "link": "https://www.pothlabs.com"
            },
            {
              "name": "DepthData",
              "category": "Analytics",
              "rank": 5,
              "link": "https://www.depthdata.com"
            },
            {
              "name": "Halo by Scam AI",
              "category": "Meetings",
              "rank": 6,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "witr",
              "category": "Linux",
              "rank": 7,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Customer.io Summer Release",
              "category": "Email",
              "rank": 8,
              "link": "https://customer.io"
            },
            {
              "name": "Screencap",
              "category": "Productivity",
              "rank": 9,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Gemini Robotics 2",
              "category": "Robots",
              "rank": 10,
              "link": "https://deepmind.google"
            },
            {
              "name": "TraceLLM",
              "category": "Open Source",
              "rank": 11,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Mubert API",
              "category": "Music",
              "rank": 12,
              "link": "https://mubert.com"
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
