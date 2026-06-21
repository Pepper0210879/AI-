const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-06-21",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "#E6F7F4",
          "initial": "O",
          "news": []
        },
        {
          "name": "Anthropic",
          "color": "#D4A574",
          "softBg": "#FBF5EF",
          "initial": "A",
          "news": []
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "#EBF1FD",
          "initial": "G",
          "news": []
        },
        {
          "name": "xAI",
          "color": "#000000",
          "softBg": "#F2F2F2",
          "initial": "x",
          "news": []
        },
        {
          "name": "NVIDIA",
          "color": "#76B900",
          "softBg": "#F3F9E8",
          "initial": "N",
          "news": []
        },
        {
          "name": "Meta",
          "color": "#1877F2",
          "softBg": "#E8F0FD",
          "initial": "M",
          "news": [
            {
              "title": "Meta员工士气低迷，马斯克X平台趁机挖人",
              "summary": "6月20日消息，Meta CTO博斯沃思宣布将改善办公室零食福利以提振士气后，X产品负责人比尔直接发文挖角Meta员工，称会匹配甚至超过任何零食预算报价。X招聘Web和数据工程师年薪18万至44万美元。此前Meta经历多轮裁员，CTO承认士气为20年来最糟。",
              "link": "https://www.ithome.com/0/966/523.htm",
              "tags": [
                "人才争夺",
                "员工福利"
              ],
              "source": "IT之家",
              "time": "1天前"
            }
          ]
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "color": "#FF6A00",
          "softBg": "#FFF0E5",
          "initial": "阿",
          "news": []
        },
        {
          "name": "火山引擎",
          "color": "#3370FF",
          "softBg": "#EBF1FF",
          "initial": "火",
          "news": []
        },
        {
          "name": "DeepSeek",
          "color": "#4D4DFF",
          "softBg": "#EDEDFF",
          "initial": "D",
          "news": []
        },
        {
          "name": "腾讯",
          "color": "#0052D9",
          "softBg": "#E5EDFB",
          "initial": "腾",
          "news": [
            {
              "title": "微信AI助手「小微」灰度上线，支持一句话生成小程序",
              "summary": "6月20日消息，微信原生AI助手「小微」扩大灰度测试，支持通过文字或语音对话操作微信原生功能，包括调整设置、发送消息、点外卖、生成图片等。最受关注的功能是「一句话生成小程序」，用户可通过自然语言描述直接生成小程序雏形，并支持多轮对话修改。该功能旨在打通微信生态内数百万小程序。",
              "link": "https://www.ithome.com/0/966/534.htm",
              "tags": [
                "AI助手",
                "小程序"
              ],
              "source": "IT之家",
              "time": "1天前"
            }
          ]
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "#FFF0E5",
          "initial": "米",
          "news": []
        },
        {
          "name": "智谱AI",
          "color": "#5B4CBF",
          "softBg": "#EEEDF9",
          "initial": "智",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#6C5CE7",
          "softBg": "#F0EEFD",
          "initial": "月",
          "news": []
        },
        {
          "name": "华为",
          "color": "#CF0A2C",
          "softBg": "#FDE8EC",
          "initial": "华",
          "news": []
        }
      ]
    },
    "other": {
      "categories": [
        {
          "name": "具身智能",
          "cards": []
        },
        {
          "name": "自动驾驶",
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
          "name": "其他厂商",
          "cards": []
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "高通CEO安蒙",
              "news": [
                {
                  "title": "高通CEO安蒙：智能眼镜市场有望比肩手机",
                  "summary": "当地时间6月19日，高通CEO安蒙接受CNBC采访时表示，AI智能体将改变人们使用应用和设备的方式，未来手机和新型设备都将围绕AI智能体重新设计。高通正参与40多种AI设备的设计，涵盖智能首饰、摄像头耳机、智能胸针等。安蒙最看好智能眼镜，预计其市场规模最终可比肩智能手机（年出货超12亿部）。",
                  "link": "https://www.ithome.com/0/966/548.htm",
                  "tags": [
                    "智能眼镜",
                    "AI智能体"
                  ],
                  "source": "IT之家",
                  "time": "2天前"
                }
              ]
            },
            {
              "title": "Netflix工程师",
              "news": [
                {
                  "title": "Netflix工程师开源Headroom工具，可节省60%-95% Token消耗",
                  "summary": "6月20日消息，Netflix高级工程师开发的开源工具Headroom近日爆火，GitHub星标超3.96万，累计帮助用户节省约70万美元成本。Headroom在AI应用与LLM之间建立本地透明压缩层，自动压缩冗余数据。研究指出AI应用中约76%的Token消耗仅用于读取用户输入，该工具能大幅降低API成本。",
                  "link": "https://www.ithome.com/0/966/527.htm",
                  "tags": [
                    "开源工具",
                    "Token优化"
                  ],
                  "source": "IT之家",
                  "time": "1天前"
                }
              ]
            },
            {
              "title": "中国科学家",
              "news": [
                {
                  "title": "中国科学家提出AI语言，文本压缩至27.9%仍保留99.5%语义",
                  "summary": "上海交大等高校团队提出BabelTele压缩方法，将AI模型间通信文本压缩至原长的27.9%，语义保留率达99.5%。这种人类几乎无法阅读的AI语言在Gemini等模型间传递时理解准确率稳定，为AI Agent通信和长文本处理提供了新思路，有助于降低多智能体系统通信成本。",
                  "link": "https://www.ithome.com/0/966/529.htm",
                  "tags": [
                    "学术研究",
                    "AI通信"
                  ],
                  "source": "IT之家",
                  "time": "6月21日"
                }
              ]
            },
            {
              "title": "Take-Two前AI负责人",
              "news": [
                {
                  "title": "Take-Two前AI负责人：生成式AI或败坏整个AI领域声誉",
                  "summary": "当地时间6月19日，Take-Two前AI研究负责人迪肯博士接受采访时表示，生成式AI热度被严重夸大，一旦泡沫破裂可能连累传统AI研究。Take-Two已于今年4月裁撤整个AI研究团队，迪肯呼吁行业重新认识传统AI技术的价值，认为大语言模型已进入幻灭低谷期。",
                  "link": "https://www.ithome.com/0/966/565.htm",
                  "tags": [
                    "AI泡沫",
                    "行业观点"
                  ],
                  "source": "IT之家",
                  "time": "2天前"
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
          "date": "2026-06-16",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5",
              "score": "1508",
              "change": "+9"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1504",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1502",
              "change": "+5"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1499",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1493",
              "change": "+5"
            },
            {
              "model": "muse-spark",
              "score": "1487",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1483",
              "change": "+6"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1481",
              "change": "+5"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1478",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-8",
              "score": "1478",
              "change": "+6"
            },
            {
              "model": "gemini-3.5-flash",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1475",
              "change": "+4"
            },
            {
              "model": "glm-5.1",
              "score": "1475",
              "change": "+6"
            },
            {
              "model": "gpt-5.5",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "qwen3.7-max-preview",
              "score": "1475",
              "change": "+10"
            },
            {
              "model": "grok-4.20-beta-0309-reasoning",
              "score": "1474",
              "change": "+4"
            },
            {
              "model": "grok-4.20-beta1",
              "score": "1474",
              "change": "+5"
            },
            {
              "model": "gemini-3-flash",
              "score": "1473",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-06-21",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash",
              "score": "4.89T tokens",
              "change": "↑8%"
            },
            {
              "model": "MiniMax M3",
              "score": "3.96T tokens",
              "change": "↑4%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "3.84T tokens",
              "change": "↑12%"
            },
            {
              "model": "Hy3 preview",
              "score": "3.53T tokens",
              "change": "↑17%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.71T tokens",
              "change": "↑23%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.55T tokens",
              "change": "↑28%"
            },
            {
              "model": "Owl Alpha",
              "score": "2.47T tokens",
              "change": "↑2%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1.57T tokens",
              "change": "↑19%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "1.55T tokens",
              "change": "↑30%"
            },
            {
              "model": "GLM 5.2",
              "score": "1.07T tokens",
              "change": "new"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-06-21",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "WorkClaw",
              "category": "Productivity",
              "rank": 1,
              "link": "https://www.producthunt.com/search?q=WorkClaw"
            },
            {
              "name": "Reframe",
              "category": "Open Source",
              "rank": 2,
              "link": "https://www.producthunt.com/search?q=Reframe"
            },
            {
              "name": "Slackbot's MCP Client",
              "category": "Slack",
              "rank": 3,
              "link": "https://www.producthunt.com/search?q=Slackbot's+MCP+Client"
            },
            {
              "name": "Mellum by JetBrains",
              "category": "Developer Tools",
              "rank": 4,
              "link": "https://www.producthunt.com/search?q=Mellum+by+JetBrains"
            },
            {
              "name": "Arbor",
              "category": "Sustainability",
              "rank": 5,
              "link": "https://www.producthunt.com/search?q=Arbor"
            },
            {
              "name": "Lottielab",
              "category": "Design",
              "rank": 6,
              "link": "https://www.producthunt.com/search?q=Lottielab"
            },
            {
              "name": "Routine 5.0",
              "category": "Productivity",
              "rank": 7,
              "link": "https://www.producthunt.com/search?q=Routine+5.0"
            },
            {
              "name": "Windsurf by Codeium",
              "category": "Developer Tools",
              "rank": 8,
              "link": "https://www.producthunt.com/search?q=Windsurf+by+Codeium"
            },
            {
              "name": "Glowtify",
              "category": "Marketing",
              "rank": 9,
              "link": "https://www.producthunt.com/search?q=Glowtify"
            },
            {
              "name": "EverArt 5.0",
              "category": "Design",
              "rank": 10,
              "link": "https://www.producthunt.com/search?q=EverArt+5.0"
            },
            {
              "name": "Potis AI",
              "category": "Artificial Intelligence",
              "rank": 11,
              "link": "https://www.producthunt.com/search?q=Potis+AI"
            },
            {
              "name": "Make It Snappy",
              "category": "User Experience",
              "rank": 12,
              "link": "https://www.producthunt.com/search?q=Make+It+Snappy"
            },
            {
              "name": "Flutter Flow 6.0",
              "category": "Developer Tools",
              "rank": 13,
              "link": "https://www.producthunt.com/search?q=Flutter+Flow+6.0"
            },
            {
              "name": "Zendo Edit",
              "category": "Video",
              "rank": 14,
              "link": "https://www.producthunt.com/search?q=Zendo+Edit"
            },
            {
              "name": "Rally",
              "category": "Productivity",
              "rank": 15,
              "link": "https://www.producthunt.com/search?q=Rally"
            },
            {
              "name": "Sune",
              "category": "Productivity",
              "rank": 16,
              "link": "https://www.producthunt.com/search?q=Sune"
            },
            {
              "name": "Pulsetic",
              "category": "Developer Tools",
              "rank": 17,
              "link": "https://www.producthunt.com/search?q=Pulsetic"
            },
            {
              "name": "Loom 4.0",
              "category": "Productivity",
              "rank": 18,
              "link": "https://www.producthunt.com/search?q=Loom+4.0"
            },
            {
              "name": "Sheetify",
              "category": "Data & Analytics",
              "rank": 19,
              "link": "https://www.producthunt.com/search?q=Sheetify"
            },
            {
              "name": "Bezel 3.0",
              "category": "Design",
              "rank": 20,
              "link": "https://www.producthunt.com/search?q=Bezel+3.0"
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
        // 从服务端拉取合并远程日志
        try {
            var auditUrl = 'https://api.github.com/repos/' + config.owner + '/' + config.repo + '/contents/audit-log.json';
            var auditGetResp = await fetch(auditUrl, { headers: headers });
            if (auditGetResp.ok) {
                var auditFileInfo = await auditGetResp.json();
                var remoteAudit = JSON.parse(base64ToUtf8(auditFileInfo.content));
                var remoteSha = auditFileInfo.sha;
                // 合并去重
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
                // 首次创建
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
