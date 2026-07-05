const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-05",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "rgba(16,163,127,0.08)",
          "initial": "O",
          "news": []
        },
        {
          "name": "Anthropic",
          "color": "#D4A574",
          "softBg": "rgba(212,165,116,0.08)",
          "initial": "A",
          "news": [
            {
              "title": "Fable 5 重上架版被指降智，安全护栏致频繁回退至 Opus 4.8",
              "summary": "7月3日消息，科技媒体bleepingcomputer报道，Anthropic本月重新上架Claude Fable 5后多名用户反馈存在降智情况，BridgeBench测试显示调试能力从86.2跌至25.9，重构能力从73.6跌至38.4。分析认为模型本身未被削弱，但安全分类器过于严苛，阻止率超99%却误伤大量良性请求，用户更频繁触发安全限制并回退至Opus 4.8。",
              "link": "https://www.ithome.com/0/972/477.htm",
              "tags": [
                "Fable 5",
                "安全护栏",
                "性能争议"
              ],
              "source": "IT之家",
              "time": "7月3日消息"
            },
            {
              "title": "Anthropic 发布 Claude Science 科研平台，宣布进军药物研发领域",
              "summary": "7月2日消息，Anthropic举行The Briefing: AI for Science活动，发布面向科研人员的Claude Science平台，整合60多种科学工具和数据库，支持基因组学、蛋白质组学等领域分析。同时宣布启动自主药物研发项目，重点针对传统药企因商业回报有限而长期缺乏投入的被忽视疾病领域。",
              "link": "https://tech.ifeng.com/c/8uUJXY6nQf8",
              "tags": [
                "Claude Science",
                "药物研发",
                "AI for Science"
              ],
              "source": "凤凰网科技",
              "time": "7月2日消息"
            },
            {
              "title": "Anthropic 最强抓虫 AI 助推，6月高危漏洞报告数达此前纪录 3.5 倍",
              "summary": "7月4日消息，Epoch AI数据显示2026年6月21家机构共报告约1500个高危和关键漏洞，是此前月均最高纪录的3.5倍以上。Anthropic于4月发布的Claude Mythos Preview被指为主要推动力，其Glasswing项目与12家科技巨头合作已发现超10000个高危漏洞。",
              "link": "https://www.ithome.com/0/972/536.htm",
              "tags": [
                "漏洞挖掘",
                "Epoch AI",
                "网络安全"
              ],
              "source": "IT之家",
              "time": "7月4日消息"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "rgba(66,133,244,0.08)",
          "initial": "G",
          "news": [
            {
              "title": "谷歌地图将整合 Gemini AI，支持语音描述自动点餐功能",
              "summary": "7月4日消息，据Android Authority报道，Android版谷歌地图代码中出现点餐服务相关字符串，用户可通过Ask Maps用自然语言描述想吃的美食，谷歌地图将推荐附近餐厅并自动完成下单流程，用户驾车抵达时可直接在得来速窗口取餐，该功能尚处于内测阶段。",
              "link": "https://news.qq.com/rain/a/20260704A058DL00",
              "tags": [
                "Gemini AI",
                "谷歌地图",
                "AI点餐"
              ],
              "source": "腾讯新闻",
              "time": "7月4日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1DA1F2",
          "softBg": "rgba(29,161,242,0.08)",
          "initial": "x",
          "news": []
        },
        {
          "name": "NVIDIA",
          "color": "#76B900",
          "softBg": "rgba(118,185,0,0.08)",
          "initial": "N",
          "news": []
        },
        {
          "name": "Meta",
          "color": "#1877F2",
          "softBg": "rgba(24,119,242,0.08)",
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
          "softBg": "rgba(255,106,0,0.08)",
          "initial": "阿",
          "news": [
            {
              "title": "通义千问宣布智能体服务 7 月 15 日下线，配合拟人化互动新规",
              "summary": "7月4日消息，阿里通义千问向用户推送智能体服务下线提醒，智能体功能将于7月15日正式下线，用户将无法继续访问相关配置及历史对话记录。同一天《人工智能拟人化互动服务管理暂行办法》正式施行，上海市委网信办已面向近百家企业开展法规宣贯。",
              "link": "https://m.ithome.com/html/972525.htm",
              "tags": [
                "千问",
                "智能体",
                "合规"
              ],
              "source": "IT之家",
              "time": "7月4日消息"
            },
            {
              "title": "阿里云 Qoder 企业版全球发布，支持 Credits 资源池化与灵活订阅",
              "summary": "7月4日消息，阿里云宣布Qoder全球站正式发布企业版，支持Credits资源池化计费、按人按代码库的模型分级管控、十万级大库知识引擎以及企业专属Plugin/Skill市场。Qoder全球用户已超500万，已通过ISO 27001国际安全认证。",
              "link": "https://www.ithome.com/0/972/491.htm",
              "tags": [
                "Qoder",
                "AI编程",
                "企业服务"
              ],
              "source": "IT之家",
              "time": "7月4日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#0057FF",
          "softBg": "rgba(0,87,255,0.08)",
          "initial": "火",
          "news": [
            {
              "title": "豆包宣布智能体功能 7 月 15 日下线，因拟人化互动新规施行",
              "summary": "7月4日消息，字节跳动旗下豆包发布公告，因产品功能调整，智能体功能将于7月15日正式下线。用户可在数据保存期内查看并导出智能体信息及历史对话，所有数据将于10月15日统一清理。豆包建议用户通过猫箱App继续体验智能体功能。",
              "link": "https://wap.stockstar.com/detail/IG2026070400012224",
              "tags": [
                "豆包",
                "智能体",
                "合规"
              ],
              "source": "证券之星",
              "time": "7月4日消息"
            },
            {
              "title": "字节豆包视频生成模型 Seedance 2.5 预计 7 月 6 日上线体验中心",
              "summary": "7月4日消息，字节跳动旗下豆包视频生成模型Seedance 2.5预计7月6日上线体验中心，一周后开放API。新版本支持30秒单段原生视频直出、最多50个全模态素材联合生成，画面一致性和局部编辑能力显著提升，近一半调用量来自海外市场。",
              "link": "https://www.ithome.com/0/972/458.htm",
              "tags": [
                "Seedance",
                "视频生成",
                "豆包"
              ],
              "source": "IT之家",
              "time": "7月4日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4F46E5",
          "softBg": "rgba(79,70,229,0.08)",
          "initial": "D",
          "news": []
        },
        {
          "name": "腾讯",
          "color": "#07C160",
          "softBg": "rgba(7,193,96,0.08)",
          "initial": "腾",
          "news": []
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "rgba(255,105,0,0.08)",
          "initial": "米",
          "news": []
        },
        {
          "name": "智谱AI",
          "color": "#9B59B6",
          "softBg": "rgba(155,89,182,0.08)",
          "initial": "智",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#8B5CF6",
          "softBg": "rgba(139,92,246,0.08)",
          "initial": "月",
          "news": []
        },
        {
          "name": "华为",
          "color": "#CF0A2C",
          "softBg": "rgba(207,10,44,0.08)",
          "initial": "华",
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
              "title": "Midjourney",
              "news": [
                {
                  "title": "Midjourney 要求好莱坞揭示自用 AI 做法，版权案件转向合理使用抗辩",
                  "summary": "7月4日消息，AI图像公司Midjourney向法院提交动议，要求强制迪士尼、环球影业、华纳兄弟披露自身AI使用情况，以此在版权诉讼中进行合理使用抗辩。三家制片厂去年起诉Midjourney侵犯版权，法院已裁定制片厂只需披露面向消费者的AI应用，Midjourney正寻求推翻这一限制。",
                  "link": "https://www.ithome.com/0/972/681.htm",
                  "tags": [
                    "Midjourney",
                    "版权诉讼",
                    "合理使用"
                  ],
                  "source": "IT之家",
                  "time": "7月4日消息"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软重构 Copilot AI：精简冗余功能、新增 AutoPilot 智能体，8 月发布",
                  "summary": "7月3日消息，据The Information披露，微软将全面重构Copilot，把面向消费者与企业的应用合并为单一产品，预计8月发布。新版本将加入AI编程工具及名为AutoPilot的新型AI智能体，负责后台自动处理日程安排、邮件摘要等任务，同时精简Podcasts和Labs等低效功能。",
                  "link": "https://www.ithome.com/0/972/542.htm",
                  "tags": [
                    "微软",
                    "Copilot",
                    "AutoPilot"
                  ],
                  "source": "IT之家",
                  "time": "7月3日消息"
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
                  "title": "特斯拉 Robotaxi 拓展至迈阿密，首次实现车内无安全员运营",
                  "summary": "7月3日消息，特斯拉官方宣布Robotaxi自动驾驶网约车服务扩展至美国迈阿密西部区域，运营车辆未配备车内安全员。这是特斯拉继奥斯汀、达拉斯、休斯敦后进入的第四个城市，竞争对手Waymo已于1月率先进入迈阿密市场。",
                  "link": "https://m.ithome.com/html/972678.htm",
                  "tags": [
                    "特斯拉",
                    "Robotaxi",
                    "自动驾驶"
                  ],
                  "source": "IT之家",
                  "time": "7月3日消息"
                }
              ]
            },
            {
              "title": "小鹏汽车",
              "news": [
                {
                  "title": "何小鹏：中国智驾技术全球领先，L2 级辅助驾驶将加速出海",
                  "summary": "7月4日消息，小鹏汽车董事长何小鹏接受第一财经采访时表示，中国辅助驾驶技术与法规制定均走在全球前面。联合国近期通过L2级自动驾驶全球技术法规，自今年12月起NGP、NOA等功能可在全球范围内使用和落地，这将加速中国智驾出海进程。",
                  "link": "https://www.ithome.com/0/972/660.htm",
                  "tags": [
                    "何小鹏",
                    "智驾出海",
                    "L2法规"
                  ],
                  "source": "IT之家",
                  "time": "7月4日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树科技陈立：关节电机核心部件完全自研自产，供应链自主可控",
                  "summary": "7月4日消息，宇树科技联合创始人陈立在2026亚布力论坛创新年会上表示，公司核心零部件全部实现自研自产，关节电机上游仅有铜线、磁铁等原材料供应商，完全自主可控。四足机器人出货量占行业约70%，人形机器人出货量全球领先，业务覆盖全球50%以上国家和地区。",
                  "link": "https://tech.ifeng.com/c/8uUSRDDdtCd",
                  "tags": [
                    "宇树科技",
                    "关节电机",
                    "核心自研"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月4日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "AI-eSIM",
              "news": [
                {
                  "title": "中国移动发起成立业内首个 AI-eSIM 产业协同平台",
                  "summary": "7月4日消息，中国移动牵头成立中国通信企业协会AI-eSIM专业委员会，汇聚40余家成员单位，覆盖运营商、芯片设计、AI算法等领域。专委会确立标准筑基、生态聚力、场景落地、安全守底四大战略方向，将聚焦智慧家电、智能穿戴等场景打造标杆案例。",
                  "link": "https://m.ithome.com/html/972543.htm",
                  "tags": [
                    "中国移动",
                    "AI-eSIM",
                    "产业平台"
                  ],
                  "source": "IT之家",
                  "time": "7月4日消息"
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
          "date": "2026-07-02",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-opus-4-6 (Anthropic)",
              "score": "1499",
              "change": "0"
            },
            {
              "model": "claude-opus-4-7 (Anthropic)",
              "score": "1494",
              "change": "0"
            },
            {
              "model": "muse-spark (Meta)",
              "score": "1487",
              "change": "0"
            },
            {
              "model": "gemini-3.1-pro-preview (Google)",
              "score": "1486",
              "change": "0"
            },
            {
              "model": "gemini-3-pro (Google)",
              "score": "1486",
              "change": "0"
            },
            {
              "model": "claude-opus-4-8-thinking (Anthropic)",
              "score": "1484",
              "change": "—"
            },
            {
              "model": "gpt-5.5-high (OpenAI)",
              "score": "1481",
              "change": "0"
            },
            {
              "model": "gemini-3.5-flash (Google)",
              "score": "1479",
              "change": "+3"
            },
            {
              "model": "gpt-5.4-high (OpenAI)",
              "score": "1478",
              "change": "0"
            },
            {
              "model": "claude-opus-4-8 (Anthropic)",
              "score": "1477",
              "change": "—"
            },
            {
              "model": "gpt-5.2-chat-latest (OpenAI)",
              "score": "1476",
              "change": "0"
            },
            {
              "model": "qwen3.7-max-preview (Alibaba)",
              "score": "1475",
              "change": "0"
            },
            {
              "model": "gpt-5.5 (OpenAI)",
              "score": "1475",
              "change": "0"
            },
            {
              "model": "grok-4.20-beta-reasoning (xAI)",
              "score": "1475",
              "change": "—"
            },
            {
              "model": "grok-4.20-beta1 (xAI)",
              "score": "1474",
              "change": "0"
            },
            {
              "model": "gemini-3-flash (Google)",
              "score": "1473",
              "change": "0"
            },
            {
              "model": "claude-opus-4-5-thinking-32k (Anthropic)",
              "score": "1473",
              "change": "—"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-07-05",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash",
              "score": "5.35T tokens",
              "change": "↑14%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.3T tokens",
              "change": "↑5%"
            },
            {
              "model": "MiniMax M3",
              "score": "4.02T tokens",
              "change": "↑7%"
            },
            {
              "model": "Hy3 preview",
              "score": "3.37T tokens",
              "change": "↑3%"
            },
            {
              "model": "GLM 5.2",
              "score": "2.54T tokens",
              "change": "↑28%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.25T tokens",
              "change": "↑10%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "2.08T tokens",
              "change": "↑6%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.02T tokens",
              "change": "↑14%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.56T tokens",
              "change": "↑5%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "1.47T tokens",
              "change": "↑2%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-05",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Vida",
              "category": "Productivity",
              "rank": 1,
              "link": "https://www.producthunt.com/products/vida-5"
            },
            {
              "name": "ChecklistFox",
              "category": "Design Tools",
              "rank": 2,
              "link": "https://www.producthunt.com/products/checklistfox"
            },
            {
              "name": "PhoneDeck",
              "category": "iOS",
              "rank": 3,
              "link": "https://phonedeck.io"
            },
            {
              "name": "CentryAI",
              "category": "Productivity",
              "rank": 4,
              "link": "https://www.producthunt.com/products/centryai"
            },
            {
              "name": "Termi Protocol",
              "category": "Productivity",
              "rank": 5,
              "link": "https://www.producthunt.com/products/termi-protocol"
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
