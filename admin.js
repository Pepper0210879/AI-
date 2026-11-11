const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-11-09",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "伯恩斯坦：OpenAI 至 2030 年算力支出或达 6140 亿美元",
              "summary": "伯恩斯坦分析师 Mark Moerdler 估算，OpenAI 已披露的算力合作协议对应的基础设施支出到 2030 年累计可能达 6140 亿美元，明显低于《华尔街日报》此前传出的 7500 亿美元。其中与甲骨文、微软、亚马逊的协议规模分别约为 3000 亿、2500 亿和 1380 亿美元。",
              "link": "https://www.tmtpost.com/agent/ai-article/22355",
              "tags": [
                "算力",
                "投资"
              ],
              "source": "钛媒体",
              "time": "11月8日消息"
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
              "title": "马斯克：SpaceX 有望在 12 月实现 1000 亿美元年化营收",
              "summary": "11月7日，马斯克表示，SpaceX 有望在 12 月实现 1000 亿美元年化营收。SpaceX 业务涵盖发射、星链及面向 AI 的算力服务，此前马斯克多次透露其营收预期持续上调。",
              "link": "https://news.qq.com/rain/a/20261107A0D7MD00",
              "tags": [
                "营收",
                "商业航天"
              ],
              "source": "腾讯新闻",
              "time": "11月7日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋发全员信承认婚外情，英伟达董事会启动独立调查",
              "summary": "当地时间11月8日，英伟达创始人兼CEO黄仁勋在致员工信中承认对妻子不忠并致歉，表示愿意承担全部责任、接受批评。英伟达董事会已启动一项独立调查，黄仁勋表态将全力配合。目前董事会仍公开支持黄仁勋，发言人称其将继续担任CEO、不会中断履职。",
              "link": "https://www.thepaper.cn/newsDetail_forward_34436634",
              "tags": [
                "公司治理",
                "人事风波"
              ],
              "source": "澎湃新闻",
              "time": "当地时间11月8日"
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
          "news": [
            {
              "title": "腾讯姚顺雨：AI 模型公司的护城河在产品层而非模型层",
              "summary": "11月9日，据第一财经报道，在 2026 未来科学大奖的一场对话中，腾讯姚顺雨谈到 AI 公司护城河时表示，竞争壁垒更多存在于产品层而非模型层。他认为模型能力会逐渐趋同，真正的护城河在于产品体验与用户生态。",
              "link": "https://original.ifeng.com/c/8xu1xEOyhBq",
              "tags": [
                "护城河",
                "行业观点"
              ],
              "source": "凤凰网",
              "time": "11月9日"
            },
            {
              "title": "腾讯元宝搜索上线独立网页端，支持 AI 问答与普通搜索",
              "summary": "腾讯元宝搜索上线独立网页端，用户可直接通过浏览器访问，支持 AI 问答和普通搜索两种模式。此举将元宝搜索从元宝 App 中独立出来，进一步拓展其 AI 搜索入口。",
              "link": "https://news.qq.com/rain/a/20261109A09PWO00",
              "tags": [
                "AI搜索",
                "产品"
              ],
              "source": "腾讯新闻",
              "time": "11月9日消息"
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果新 CEO 特努斯施压软件团队：加快 AI 研发，不能只修补 Siri",
                  "summary": "据彭博社记者古尔曼披露，苹果新任 CEO 特努斯在闭门会议上向软件团队发出严厉提醒，称苹果在 AI 上已远落后于竞争对手，必须加速推进路线图，超越「仅仅对 Siri 进行必要修补」的阶段。这是特努斯掌舵两个月来对 AI 战略最明确的一次施压。",
                  "link": "https://www.ifanr.com/1688570",
                  "tags": [
                    "Siri",
                    "战略调整"
                  ],
                  "source": "爱范儿",
                  "time": "11月9日消息"
                },
                {
                  "title": "古尔曼：苹果 Siri 负责人罗克韦尔考虑 2027 年卸任",
                  "summary": "11月9日，据彭博社记者古尔曼报道，苹果 Siri 工程副总裁、AI 团队负责人罗克韦尔考虑在 2027 年卸任或离职。古尔曼称苹果 Siri AI 团队或迎来大调整，罗克韦尔的去留引发外界对苹果 AI 团队稳定性的关注。",
                  "link": "https://original.ifeng.com/c/8xu1xEOyh30",
                  "tags": [
                    "人事变动",
                    "Siri"
                  ],
                  "source": "凤凰网",
                  "time": "11月9日消息"
                }
              ]
            },
            {
              "title": "蚂蚁",
              "news": [
                {
                  "title": "蚂蚁集团 AI 助手灵光用户突破 2000 万，2.0 版本上线一周",
                  "summary": "蚂蚁集团旗下 AI 助手灵光用户数量已突破 2000 万，2.0 版本上线一周已帮助用户管理超 116 万项事务。灵光主打任务执行能力，可帮用户处理订票、点餐等长链条事务。",
                  "link": "https://www.ithome.com/1/024/010.htm",
                  "tags": [
                    "AI助手",
                    "用户增长"
                  ],
                  "source": "IT之家",
                  "time": "11月9日消息"
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
                  "title": "特斯拉更新 AI 加速器路线图：SI6 算力达 HW4 的 80 倍",
                  "summary": "11月8日，特斯拉公布更新后的 AI 加速器路线图，进一步揭示未来几年的芯片研发方向。其中 SI6 算力达 HW4 的 80 倍，Dojo D3 弃晶圆级改芯粒方案，并将面向太空部署。",
                  "link": "https://news.qq.com/rain/a/20261108A06PHM00",
                  "tags": [
                    "智驾芯片",
                    "路线图"
                  ],
                  "source": "腾讯新闻",
                  "time": "11月8日消息"
                }
              ]
            },
            {
              "title": "文远知行",
              "news": [
                {
                  "title": "文远知行韩旭：希望四五年内 Robotaxi 从广州直达香港",
                  "summary": "文远知行创始人兼 CEO 韩旭接受 CNBC 专访时表示，Robotaxi 规模化的条件已基本具备，期待四五年内实现从广州直达香港的无人驾驶出行。随着技术成熟和成本下降，Robotaxi 的商业化落地正在加速。",
                  "link": "https://cj.sina.com.cn/articles/view/1826017320/6cd6d02804001ytmw",
                  "tags": [
                    "Robotaxi",
                    "自动驾驶"
                  ],
                  "source": "新浪财经",
                  "time": "11月7日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "亚马逊",
              "news": [
                {
                  "title": "亚马逊成立新团队专攻家用机器人，剑指「前所未有」新产品",
                  "summary": "亚马逊成立新的家用机器人团队，正在开发一款被内部称为「世界首创」的机器人产品。该团队招聘涉及机械、软件、AI 等多个方向，标志着亚马逊进一步加码具身智能赛道。",
                  "link": "https://www.ithome.com/1/024/012.htm",
                  "tags": [
                    "家用机器人",
                    "具身智能"
                  ],
                  "source": "IT之家",
                  "time": "11月9日消息"
                }
              ]
            },
            {
              "title": "上纬新材",
              "news": [
                {
                  "title": "上纬新材消费级机器人「启元 Q1/T1」累计下线 1 万台",
                  "summary": "11月8日，上纬新材公告称，消费级具身智能机器人产品「启元Q1」和「启元T1」累计下线 1 万台。上纬新材以新材料业务起家，近年来切入消费级机器人赛道，其量产进度引发市场关注。",
                  "link": "https://www.cls.cn/detail/2528251",
                  "tags": [
                    "消费机器人",
                    "量产"
                  ],
                  "source": "财联社",
                  "time": "11月8日消息"
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
              "title": "AI 冒充诈骗",
              "news": [
                {
                  "title": "三名男子用 AI 冒充企业高管行骗，涉案金额超 1 亿美元",
                  "summary": "三名男子涉嫌利用 AI 技术冒充企业高管和律师实施诈骗，涉案金额超 1 亿美元。三人利用 AI 生成语音和视频伪造身份，向企业员工发出转账指令，引发对 AI 深度伪造诈骗风险的关注。",
                  "link": "https://finance.sina.com.cn/tech/digi/2026-11-08/doc-inixzhva4085957.shtml",
                  "tags": [
                    "AI诈骗",
                    "深度伪造"
                  ],
                  "source": "新浪财经",
                  "time": "11月8日消息"
                }
              ]
            },
            {
              "title": "Suno",
              "news": [
                {
                  "title": "猫王、埃米纳姆版权方起诉 Suno，AI 音乐再陷版权纠纷",
                  "summary": "AI 音乐生成平台 Suno 再次因版权侵权被告上法庭，原告为猫王音乐版权实体及埃米纳姆歌曲出版公司 Eight Mile Style，指控 Suno 未经授权使用知名艺人形象与作品生成歌曲。Suno 回应称已引入第三方工具筛查滥用行为。",
                  "link": "https://www.sohu.com/a/1099110465_122094388",
                  "tags": [
                    "AI音乐",
                    "版权"
                  ],
                  "source": "搜狐",
                  "time": "11月9日消息"
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
