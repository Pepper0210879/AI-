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
              "link": "https://wallstreetcn.com/articles/3775117",
              "tags": [
                "财务",
                "营收预期"
              ],
              "source": "华尔街见闻",
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
              "link": "https://news.cri.cn/20260620/72077e7b-a6cc-4f74-bb32-ef21d02496b4.html",
              "tags": [
                "政策",
                "出口管制"
              ],
              "source": "国际在线",
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
              "link": "https://www.cls.cn/detail/2084239",
              "tags": [
                "薪酬",
                "特斯拉"
              ],
              "source": "财联社",
              "time": "6月22日"
            },
            {
              "title": "马斯克：Grok语音控制特斯拉FSD功能约3个月后上线",
              "summary": "6月21日消息，马斯克在X平台确认，Grok与FSD系统适配工作正在推进，语音控制FSD功能约三个月后上线。届时车主可通过自然语言直接设定FSD全部行驶逻辑，如'导航去五角场，到店后倒进门口的车位'。这将是AI首次深度操控车辆底层驾驶系统，彻底改变人车交互方式。",
              "link": "https://www.ithome.com/0/966/604.htm",
              "tags": [
                "Grok",
                "FSD",
                "语音控制"
              ],
              "source": "IT之家",
              "time": "6月21日"
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
              "link": "https://www.cnfin.com/gs-lb/detail/20260617/4428410_1.html",
              "tags": [
                "GPU采购",
                "国产芯片"
              ],
              "source": "第一财经",
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
              "link": "https://www.iheima.com/article-398750.html",
              "tags": [
                "GLM-5.2",
                "软件工程"
              ],
              "source": "i黑马",
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
                  "link": "https://www.jiemian.com/article/14615901.html",
                  "tags": [
                    "收购",
                    "人形机器人"
                  ],
                  "source": "界面新闻",
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
                  "link": "https://www.sohu.com/a/1039481015_122014422",
                  "tags": [
                    "AI芯片",
                    "融资"
                  ],
                  "source": "搜狐",
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
                  "link": "https://www.gamersky.com/news/202606/2048125.shtml",
                  "tags": [
                    "AI陪伴",
                    "游戏"
                  ],
                  "source": "游民星空",
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
                  "link": "https://www.ithome.com/0/966/642.htm",
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
                  "link": "https://m.thepaper.cn/newsDetail_forward_33424950",
                  "tags": [
                    "AI陪伴",
                    "停运"
                  ],
                  "source": "澎湃新闻",
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
                  "link": "https://www.cls.cn/detail/2084500",
                  "tags": [
                    "商标",
                    "机器人"
                  ],
                  "source": "财联社",
                  "time": "6月22日"
                }
              ]
            },
            {
              "title": "亚马逊",
              "news": [
                {
                  "title": "亚马逊AI主管称正商谈外售Trainium芯片",
                  "summary": "6月22日消息，亚马逊AI主管透露公司已就向外部客户出售实体Trainium AI芯片进行商谈，认为外售芯片不会蚕食AWS的AI云业务，AI算力领域仍有很大增长空间。此举将直接挑战NVIDIA在AI训练芯片市场的主导地位。",
                  "link": "https://next.ithome.com/",
                  "tags": [
                    "AI芯片",
                    "Trainium"
                  ],
                  "source": "IT之家",
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
                  "link": "https://www.nbd.com.cn/articles/2026-06-22/4438225.html",
                  "tags": [
                    "AI就业",
                    "机器人替代"
                  ],
                  "source": "每日经济新闻",
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
                  "link": "https://www.hollywoodreporter.com/news/general-news/tony-leung-ai-soul-1236281745/",
                  "tags": [
                    "AI与影视",
                    "行业观点"
                  ],
                  "source": "好莱坞报道者",
                  "time": "6月21日"
                }
              ]
            },
            {
              "title": "独立开发者",
              "news": [
                {
                  "title": "独立开发者用AI九天内自制《GTA6》，全程Vibe Coding",
                  "summary": "6月21日消息，25岁AI智能体初创公司创始人徐子文在X平台启动自制《GTA6》项目，使用Claude Max 20x大模型投入开发。仅九天即实现NPC自主行走、道路车辆通行、武器系统和游戏手机等功能。项目无发行商合作也无工作室资金，全部内容依靠「氛围式编程」搭配多组循环联动AI智能体制作而成。",
                  "link": "https://www.ithome.com/0/966/642.htm",
                  "tags": [
                    "Vibe Coding",
                    "游戏开发"
                  ],
                  "source": "IT之家",
                  "time": "6月21日"
                }
              ]
            },
            {
              "title": "AI治理",
              "news": [
                {
                  "title": "四川一女子用AI编造股市谣言被行政处罚",
                  "summary": "6月22日消息，四川南充一男子利用大模型生成约3000字虚假股市文章，对A股走势进行误导性解读以博取流量，被警方行政处罚并清理文章。这是继5月北京处罚后又一AI小作文扰乱市场案例，AI生成内容监管持续收紧。",
                  "link": "https://next.ithome.com/",
                  "tags": [
                    "AI监管",
                    "网络谣言"
                  ],
                  "source": "IT之家",
                  "time": "6月22日"
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
          "date": "2026-06-22",
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
              "name": "Agent 37 Cloud",
              "category": "Developer Tools",
              "rank": 1,
              "link": "https://www.producthunt.com/products/agent-37-cloud"
            },
            {
              "name": "Atomic Mail Agentic",
              "category": "Email",
              "rank": 2,
              "link": "https://www.producthunt.com/products/atomic-mail-agentic"
            },
            {
              "name": "Grok by SpaceXAI for Word",
              "category": "Productivity",
              "rank": 3,
              "link": "https://www.producthunt.com/products/grok-for-word"
            },
            {
              "name": "Backgrind",
              "category": "Productivity",
              "rank": 4,
              "link": "https://www.producthunt.com/products/backgrind"
            },
            {
              "name": "oioi",
              "category": "Productivity",
              "rank": 5,
              "link": "https://www.producthunt.com/products/oioi"
            },
            {
              "name": "Laguna by Poolside",
              "category": "Developer Tools",
              "rank": 6,
              "link": "https://www.producthunt.com/products/laguna-by-poolside"
            },
            {
              "name": "Cloudback MCP Server",
              "category": "Developer Tools",
              "rank": 7,
              "link": "https://www.producthunt.com/products/cloudback-mcp-server"
            },
            {
              "name": "Notchkin",
              "category": "Productivity",
              "rank": 8,
              "link": "https://www.producthunt.com/products/notchkin"
            },
            {
              "name": "Plansera AI",
              "category": "SaaS",
              "rank": 9,
              "link": "https://www.producthunt.com/products/plansera-ai"
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
