const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-06-22",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "#E6F7F4",
          "initial": "O",
          "news": [
            {
              "title": "OpenAI 上调五年收入预期，但预计 2030 年前多消耗 1110 亿美元现金",
              "summary": "据 The Information 6月21日报道，OpenAI上调未来五年收入预期约27%，去年收入131亿美元，今年预计300亿美元，明年约620亿美元。但现金消耗同步激增，预计2030年前将比此前预测多消耗1110亿美元，AI训练和推理成本将投入6650亿美元。ChatGPT周活跃用户9.1亿，公司仍预计2030年实现现金流转正。",
              "link": "https://www.ifanr.com/1669504",
              "tags": [
                "财务",
                "营收预期"
              ],
              "source": "爱范儿",
              "time": "6月21日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#D4A574",
          "softBg": "#FBF5EF",
          "initial": "A",
          "news": [
            {
              "title": "特朗普称不再将 Anthropic 视为国家安全威胁",
              "summary": "当地时间6月19日，特朗普在Axios访谈节目中表示，他已不再将Anthropic视为国家安全威胁。此前白宫曾以国家安全为由限制Anthropic的Mythos和Fable 5模型对非美国用户开放，Anthropic高管近日在首尔表示有信心数日内恢复访问。",
              "link": "https://36kr.com/p/3863586257573124",
              "tags": [
                "政策",
                "出口管制"
              ],
              "source": "36氪",
              "time": "6月19日"
            }
          ]
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
          "news": [
            {
              "title": "马斯克行权特斯拉薪酬方案，账面收益 1160 亿美元",
              "summary": "6月22日消息，马斯克已全额行使其2018年特斯拉CEO薪酬方案，以每股23.34美元行权价获得3.04亿股，按6月16日收盘价计账面收益约1160亿美元（约合7800亿元人民币）。历时六年法律拉锯战终结，但股份需至2028年1月归属并面临巨额税务。",
              "link": "https://www.ithome.com/0/966/746.htm",
              "tags": [
                "薪酬",
                "特斯拉"
              ],
              "source": "IT之家",
              "time": "6月22日"
            }
          ]
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
          "news": []
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
          "news": [
            {
              "title": "字节跳动洽购至少5万颗天数智芯AI推理GPU",
              "summary": "6月22日消息，字节跳动正与天数智芯讨论采购至少5万颗AI芯片，主要用于大模型推理负载，对应智铠系列云端推理GPU。若交易达成，天数智芯将成为华为和寒武纪之后字节跳动的第三家GPU供应商，进一步推动豆包大模型的算力部署。",
              "link": "https://36kr.com/p/3863586257573124",
              "tags": [
                "GPU采购",
                "国产芯片"
              ],
              "source": "36氪",
              "time": "6月17日"
            }
          ]
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
          "news": []
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
          "news": [
            {
              "title": "智谱 GLM-5.2 登顶 DeepSWE 开源第一",
              "summary": "6月22日消息，智谱AI开源模型GLM-5.2进入长程软件工程基准DeepSWE v1.1榜单，在最高思考力度下Pass@1为44%±2%，位列第五且为表现最好的开源模型，比Kimi K2.7 Code高出13个百分点。平均成本3.92美元，平均输出7.8万token。",
              "link": "https://www.ifanr.com/1669504",
              "tags": [
                "GLM-5.2",
                "软件工程"
              ],
              "source": "爱范儿",
              "time": "6月22日"
            }
          ]
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
          "cards": [
            {
              "title": "波士顿动力",
              "news": [
                {
                  "title": "现代汽车拟收购软银持有波士顿动力剩余股权，将成全资子公司",
                  "summary": "6月22日消息，现代汽车计划以5000亿韩元（约22.23亿元人民币）收购软银持有的波士顿动力9.65%股份，交易后波士顿动力将成为现代全资子公司。现代2021年以80%股份入主，软银现行使看跌期权出售剩余股权，现代预计6月22日召开董事会批准。",
                  "link": "https://www.ifanr.com/1669504",
                  "tags": [
                    "收购",
                    "人形机器人"
                  ],
                  "source": "爱范儿",
                  "time": "6月22日"
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
          "name": "AI出海",
          "cards": []
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "淬思科技",
              "news": [
                {
                  "title": "AI推理芯片公司淬思科技完成首轮融资",
                  "summary": "6月22日消息，上海淬思科技完成孵化轮融资，由砺思资本与启盈同创基金联合领投，资金用于首款面向AI智能体推理的专用芯片研发与流片。公司Agentic EDA平台已产生商业化收入，芯片设计方法学已通过真实流片验证。",
                  "link": "https://www.ifanr.com/1669504",
                  "tags": [
                    "AI芯片",
                    "融资"
                  ],
                  "source": "爱范儿",
                  "time": "6月22日"
                }
              ]
            }
          ]
        },
        {
          "name": "其他厂商",
          "cards": [
            {
              "title": "米哈游",
              "news": [
                {
                  "title": "米哈游 AI 女友陪伴软件《BSide：Olivia Lin》上架 Steam",
                  "summary": "米哈游旗下AI陪伴软件《BSide：Olivia Lin》近日上架Steam，主角设定为上海钢琴系女生，提供钢琴演奏、音乐视频生成、文字通信和桌面动态壁纸等功能。这是米哈游在AI情感陪伴领域的新尝试。",
                  "link": "https://www.ifanr.com/1669504",
                  "tags": [
                    "AI陪伴",
                    "游戏"
                  ],
                  "source": "爱范儿",
                  "time": "6月21日"
                }
              ]
            },
            {
              "title": "努比亚",
              "news": [
                {
                  "title": "努比亚集中资源投入第二代豆包 AI 手机，收缩传统手机业务",
                  "summary": "6月22日消息，中兴努比亚内部已调整手机业务优先级，计划将核心资源集中投入第二代豆包AI手机，传统手机业务线暂时收缩。第二代豆包AI手机预计搭载第五代骁龙8至尊版，可能在2026年上半年发布。",
                  "link": "https://www.ithome.com/0/966/746.htm",
                  "tags": [
                    "AI手机",
                    "豆包"
                  ],
                  "source": "IT之家",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "网易云音乐",
              "news": [
                {
                  "title": "网易云音乐旗下 AI 陪伴 App「妙时」将于 7 月停运",
                  "summary": "6月22日消息，网易云音乐旗下AI情感陪伴App「妙时」发布停运公告，已停止新用户注册和充值，将于7月14日正式停运。用户账号余额可申请退款。妙时是网易在AI社交陪伴赛道的一次尝试，停运反映出该赛道商业化仍面临挑战。",
                  "link": "https://www.ifanr.com/1669504",
                  "tags": [
                    "AI陪伴",
                    "停运"
                  ],
                  "source": "爱范儿",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉申请 Amazing Abundance 商标，加速推进 AI 与机器人战略",
                  "summary": "特斯拉正式提交「Amazing Abundance」商标注册申请，表明将深耕AI、人形机器人、自动驾驶系统等长期发展愿景，依托自动化技术实现生产成本大幅下降。此举呼应马斯克此前提出的「极致丰饶」未来愿景。",
                  "link": "https://36kr.com/p/3863586257573124",
                  "tags": [
                    "商标",
                    "机器人"
                  ],
                  "source": "36氪",
                  "time": "6月22日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "刘强东（京东）",
              "news": [
                {
                  "title": "刘强东：AI时代不再需要快递员，拟培训70万蓝领员工转岗",
                  "summary": "6月21日，刘强东在APEC工商领导人中国论坛上透露，京东提出「涅槃计划」，拟将70万快递员等蓝领员工送学校接受技术培训，未来配送由机器人完成。京东已签约120所学校，员工可转岗从事机器人维修保养。刘强东同时呼吁全球合作应对AI时代冲击，表示京东所有AI技术将向海外开放。",
                  "link": "https://www.ithome.com/0/966/746.htm",
                  "tags": [
                    "AI就业",
                    "机器人替代"
                  ],
                  "source": "IT之家",
                  "time": "6月21日"
                }
              ]
            },
            {
              "title": "梁朝伟",
              "news": [
                {
                  "title": "梁朝伟：AI能节省制作时间但没有灵魂",
                  "summary": "梁朝伟在上海国际电影节闭幕前受访时将AI称为「双刃剑」。他认为AI可在前期和后期制作中节省大量时间和成本，但也会让岗位消失、把创作简化为计算。他呼吁年轻观众重回大银幕，认为表演和电影仍依赖人的观察、经验和情感积累。",
                  "link": "https://www.ifanr.com/1669504",
                  "tags": [
                    "AI与影视",
                    "行业观点"
                  ],
                  "source": "爱范儿",
                  "time": "6月21日"
                }
              ]
            }
          ]
        }
      ]
    },
    "ranking": {
      "platforms": []
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
