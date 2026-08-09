const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-09",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 桌面端 ChatGPT 上线语音交互，可语音操控电脑执行多步骤任务",
              "time": "8月9日消息",
              "summary": "8月9日消息，OpenAI 更新 ChatGPT 桌面应用，新增 ChatGPT Voice 语音功能，基于全新语音模型系列 ChatGPT-Live，用户可用语音下达多步骤指令控制 AI 智能体执行任务，同时支持 ChatGPT Work 和 Codex，可调用计算机操作能力访问网站和应用；macOS 端借助 Appshots 可识别屏幕上下文。",
              "link": "https://m.ithome.com/html/987452.htm",
              "tags": [
                "ChatGPT",
                "语音交互"
              ],
              "source": "IT之家"
            },
            {
              "title": "OpenAI 收购 AI 演示文稿初创公司 NextSlide，团队加入 ChatGPT",
              "time": "8月9日消息",
              "summary": "8月9日消息，OpenAI 收购 AI 演示文稿初创公司 NextSlide，其团队成员已加入 ChatGPT 团队参与研发；NextSlide 产品可将提示词、笔记、文档或研究资料转化为精美可编辑的演示文稿，创始人曾联合创立被 Instacart 收购的 Caper AI，交易金额未披露。",
              "link": "https://www.ithome.com/0/987/455.htm",
              "tags": [
                "收购",
                "生产力工具"
              ],
              "source": "IT之家"
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
          "news": [
            {
              "title": "X 平台 9 月 8 日推出原创内容奖励计划，要求 500 名认证粉丝",
              "time": "8月9日消息",
              "summary": "8月9日消息，SpaceXAI 旗下高级产品经理在 X 平台宣布，X 将于 9 月 8 日推出全新「原创内容奖励计划」，取代原收益分成计划：创作者需至少拥有 500 名认证粉丝、近 90 天主页时间线有效曝光达 50 万次，根据原创内容的「有效曝光量」获得收益，以抑制搬运和标题党内容获利。",
              "link": "https://tech.ifeng.com/c/8vRMpCE6k7k",
              "tags": [
                "创作者激励",
                "内容平台"
              ],
              "source": "凤凰科技"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": []
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
              "title": "苹果中国官网删除 Apple 智能接入阿里千问使用手册",
              "time": "8月9日消息",
              "summary": "8月9日消息，8 月 8 日一篇《在 Mac 上配合 Apple 智能使用千问》支持文档现身苹果官网 Mac 简体中文手册，明确 Apple 智能可配合阿里巴巴千问模型工作，适用于 macOS 26.6 及以上、需中国大陆设备及账户，支持写作工具和 Siri 调用；但仅一天后该手册已从官网删除，页面恢复为配合 ChatGPT 版本，苹果国行 Apple 智能落地节奏再添变数。",
              "link": "https://www.ithome.com/0/987/467.htm",
              "tags": [
                "Apple智能",
                "千问合作"
              ],
              "source": "IT之家"
            }
          ]
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
              "title": "消息称 WorkBuddy 已成腾讯 AI 应用战略优先级最高产品之一",
              "time": "8月9日消息",
              "summary": "8月9日消息，据界面新闻，腾讯 AI 办公智能体 WorkBuddy 获公司内部高度支持，被视为继 QQ、微信后第三个战略级产品，马化腾亲自参与产品会议、资源审批「一路绿灯」；第三方数据显示 WorkBuddy 6 月 PC 端月访问量突破 2000 万，位列国内同类市场第一。",
              "link": "https://www.jiemian.com/article/14892732.html",
              "tags": [
                "AI办公",
                "智能体"
              ],
              "source": "界面新闻"
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
              "title": "亚马逊",
              "news": [
                {
                  "title": "曝亚马逊用 45 年前规划绕过社区投票建 AI 数据中心，美国市民不满",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，据《华尔街日报》，亚马逊在加州吉尔罗伊投资 20 亿美元建设 AI 数据中心，利用当地 45 年前制定的工业区规划标准、仅一名官员签署即获批，全程无公开听证会或市议会投票；多数居民直到施工开始才知情，担忧干旱地区水资源消耗，市议会正审议要求社区参与的新规。",
                  "link": "https://news.17173.com/content/08092026/020217527.shtml",
                  "tags": [
                    "AI数据中心",
                    "选址争议"
                  ],
                  "source": "17173"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "存储芯片涨价风暴蔓延，iPhone 17 或于 8 月 10 日上调售价",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，受全球存储芯片价格飙升影响，苹果最早可能于 8 月 10 日上调 iPhone 17 全系售价，使其与此前受内存危机影响而提价的其他硬件保持一致；据爆料，国行 Pro 系列预计全系涨 500 元，苹果供应链已减产约 30%，此前 iPad、Mac 等产品线已因内存成本上调价格。",
                  "link": "https://www.163.com/dy/article/L3REDBS90511BLFD.html",
                  "tags": [
                    "存储涨价",
                    "iPhone"
                  ],
                  "source": "网易"
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
              "title": "世界人形机器人运动会",
              "news": [
                {
                  "title": "第二届世界人形机器人运动会 8 月 22 日开赛：百米全自主跑，新增乒乓球+自由搏击",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，第二届世界人形机器人运动会将于 8 月 22 日至 26 日在北京国家速滑馆「冰丝带」举行，共设 50 个赛项：百米、400 米等径赛升级为「全自主」模式，机器人须完全依靠自身感知与决策系统比赛，并新增乒乓球、自由搏击、拔河、投壶等项目，场景赛覆盖家庭清洁、工业生产等九大真实场景，票价最低 98 元。",
                  "link": "https://tech.cnr.cn/gstj/20260809/t20260809_527754649.shtml",
                  "tags": [
                    "人形机器人",
                    "赛事"
                  ],
                  "source": "央广网"
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
              "title": "Cloudflare",
              "news": [
                {
                  "title": "Cloudflare：AI 机器人流量已超越人类，五年后人机流量比或达 1:1000",
                  "time": "8月8日消息",
                  "summary": "8月8日消息，Cloudflare 在 2026 年第二季度财报电话会上披露，AI 机器人等非人类流量已于今年 5 月正式超过人类流量，比 CEO 此前预测的 2027 年大幅提前；公司预测若趋势延续，五年后非人类流量将达到人类流量的 1000 倍，届时人类在互联网上的存在「将变得微不足道」。",
                  "link": "https://www.ithome.com/0/987/438.htm",
                  "tags": [
                    "AI流量",
                    "行业趋势"
                  ],
                  "source": "IT之家"
                }
              ]
            },
            {
              "title": "内存价格",
              "news": [
                {
                  "title": "研究称 2026 年内存每 GB 价格回到 2007 年水平，20 年降价进程被逆转",
                  "time": "8月8日消息",
                  "summary": "8月8日消息，软件性能专家丹尼尔·勒米尔研究指出，受 HBM 需求激增影响，DDR5 内存每 GB 价格已回到约 11-13 美元，约 20 年降价进程在数月内被逆转；AI 竞赛对高带宽内存的抢购锁定了先进封装产能，连带推高标准 DRAM 价格，内存紧缺已外溢至显卡、手机、汽车电子等消费领域。",
                  "link": "https://www.ithome.com/0/987/305.htm",
                  "tags": [
                    "存储",
                    "内存涨价"
                  ],
                  "source": "IT之家"
                }
              ]
            },
            {
              "title": "AI 创作研究",
              "news": [
                {
                  "title": "研究：人们无法有效区分 AI 生成与人类原创短篇小说",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，维拉诺瓦大学研究发表在《判断与决策》期刊：读者无法有效区分 AI 生成与人类原创短篇小说，识别准确率仅约四成，且给 AI 生成的故事打了更高的吸引力和质量评分；但当被告知故事是「人类创作」时，评价反而更高，揭示人们对真人创作叙事的偏好。",
                  "link": "https://www.c114.net.cn/industry/109059.html",
                  "tags": [
                    "AI创作",
                    "研究"
                  ],
                  "source": "C114通信网"
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
              "model": "Claude Opus 5 (High)",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "Meta Muse Spark 1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "Meta Muse Spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "Gemini 3.1 Pro (Preview)",
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
              "model": "GPT-5.6 Sol (xHigh)",
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
              "model": "GPT-5.5 (High)",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "GPT-5.4 (High)",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "Gemini 3.5 Flash (High)",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "GPT-5.2 Chat",
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
          "date": "2026-08-09",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "8.2T tokens",
              "change": "↑999%"
            },
            {
              "model": "Hy3",
              "score": "7.13T tokens",
              "change": "↑49%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "6.05T tokens",
              "change": "↑19%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "5.36T tokens",
              "change": "↑26%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "4.48T tokens",
              "change": "↑228%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.26T tokens",
              "change": "↑9%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.55T tokens",
              "change": "↑27%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.39T tokens",
              "change": "↑4%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "2.34T tokens",
              "change": "↑473%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.87T tokens",
              "change": "↑159%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.76T tokens",
              "change": "↑13%"
            },
            {
              "model": "Kimi K3",
              "score": "1.39T tokens",
              "change": "↑3%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.32T tokens",
              "change": "↑24%"
            },
            {
              "model": "Ling-3.0-flash",
              "score": "1.14T tokens",
              "change": "↑12%"
            },
            {
              "model": "Claude Opus 5",
              "score": "1.13T tokens",
              "change": "↑44%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.04T tokens",
              "change": "↑2%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "929B tokens",
              "change": "↑5%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "866B tokens",
              "change": "↑7%"
            },
            {
              "model": "GPT-5.6 Terra",
              "score": "758B tokens",
              "change": "↑145%"
            },
            {
              "model": "Gemini 2.5 Flash Lite",
              "score": "612B tokens",
              "change": "↑13%"
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
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Poth Labs",
              "category": "Customer Success",
              "rank": 4,
              "link": "https://www.producthunt.com/products/poth-labs"
            },
            {
              "name": "DepthData",
              "category": "Analytics",
              "rank": 5,
              "link": "https://depthdata.vercel.app"
            },
            {
              "name": "Halo by Scam AI",
              "category": "Meetings",
              "rank": 6,
              "link": "https://www.scam.ai"
            },
            {
              "name": "witr",
              "category": "Linux",
              "rank": 7,
              "link": "https://github.com/pranshuparmar/witr"
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
              "link": "https://www.producthunt.com/products/screencap"
            },
            {
              "name": "Gemini Robotics 2",
              "category": "Robots",
              "rank": 10,
              "link": "https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/"
            },
            {
              "name": "TraceLLM",
              "category": "Open Source",
              "rank": 11,
              "link": "https://www.producthunt.com/products/tracellm"
            },
            {
              "name": "Mubert API",
              "category": "Music",
              "rank": 12,
              "link": "https://mubert.com/api"
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
