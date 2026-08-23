const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-23",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI一改立场，呼吁加州强化AI安全法案",
              "summary": "8月23日消息，OpenAI呼吁加州进一步加强具有里程碑意义的AI安全法案SB 53，称该法案应扩大安全保障措施，例如要求对正在训练或评估的前沿AI模型进行监控、在整个模型开发生命周期加强网络安全保护。这是OpenAI首次公开支持强化该州级监管，此前其曾反对该法案。OpenAI表示在缺乏联邦AI立法的情况下支持「逆向联邦主义」路径，让各州采取相互兼容的监管政策。",
              "link": "https://www.ithome.com/0/993/141.htm",
              "tags": [
                "AI安全",
                "监管"
              ],
              "source": "IT之家",
              "time": "8月23日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic多款Claude旧模型可被越狱生成露骨内容",
              "summary": "8月23日消息，据TechCrunch测试及英国独立研究员发现，Anthropic多款仍在使用的Claude旧模型存在安全漏洞，可被诱导生成其使用规范明确禁止的露骨色情内容。Claude Opus 4.6在10次测试中每次都立即配合，Opus 3和Haiku 4.5也可通过近期被利用的越狱方法生成违规内容，这些模型仍可通过API及Azure、AWS等平台访问。较新的Opus 4.7至5对此越狱方法有抵抗力。Anthropic回应称用户用于色情角色扮演的场景仅占全部对话不到0.1%。",
              "link": "https://finance.sina.com.cn/stock/t/2026-08-23/doc-iniphhay2676675.shtml",
              "tags": [
                "AI安全",
                "越狱漏洞"
              ],
              "source": "京报网",
              "time": "8月23日消息"
            },
            {
              "title": "Anthropic招股书把美国公众AI抵制情绪列为关键风险",
              "summary": "8月22日消息，据CNBC报道，Anthropic已在6月秘密提交IPO申请，预计未来几周发布的招股说明书将把美国公众对AI和数据中心的负面情绪列为一项关键风险因素。盖洛普5月调查显示70%美国人反对在所在地区建设AI数据中心，近半数强烈反对。公司上市估值或高达约2万亿美元，年化营收刚突破650亿美元。数据中心建设若因公众抵制放缓，可能削弱其增长势头。",
              "link": "https://awtmt.com/articles/3780042",
              "tags": [
                "IPO",
                "数据中心"
              ],
              "source": "华尔街见闻",
              "time": "8月22日消息"
            }
          ]
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
          "news": []
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "字节豆包最快下周发布办公AI产品，对标腾讯WorkBuddy",
              "summary": "8月22日消息，据第一财经新皮层报道，字节豆包团队最快将于下周推出一款对标腾讯WorkBuddy的独立办公类AI产品。该产品相当于把豆包App内「工作任务」模式单独拆分出来成为独立应用，豆包网页端已出现独立「新工作任务」入口。此前字节已将飞书产品团队与豆包产品团队整合，梁汝波提出把豆包培育为全新AI主干业务。",
              "link": "https://app.myzaker.com/news/article.php?pk=6a898e1e8e9f093f9c5e0d60",
              "tags": [
                "办公AI",
                "字节"
              ],
              "source": "ZAKER",
              "time": "8月22日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek调整API周末计费，周六日全天统一按低谷价",
              "summary": "8月23日消息，DeepSeek API开放平台宣布自8月23日00:00起优化峰谷计费规则：周末全天不再区分峰谷时段，统一按低谷时段价格收费；工作日继续执行原有峰谷分段计费。距8月17日V4-Pro高峰输出价大涨350%仅一周，此举让周末批量跑任务开发者成本直接腰斩。官方称意在让用户在周末更灵活安排业务，同时平衡全网算力负载。",
              "link": "https://finance.eastmoney.com/a/202608233850243858.html",
              "tags": [
                "API",
                "定价"
              ],
              "source": "东方财富",
              "time": "8月23日消息"
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
              "title": "Inherent",
              "news": [
                {
                  "title": "DeepMind校友创办Inherent，小参数智能体Faraday科研复现超旗舰",
                  "summary": "8月23日消息，伦敦AI实验室Inherent由前谷歌DeepMind员工创办，其AI智能体Faraday以仅270亿参数的Qwen 3.6模型，在事先不知答案的情况下自主复现已发表科学论文研究结果，击败Anthropic的Claude Opus 4.8与OpenAI的GPT-5.5。该公司以5000万美元种子轮结束隐身模式，目标打造具备「研究品味」、能发现全新科学知识的AI科学家智能体。",
                  "link": "https://m.ithome.com/html/993133.htm",
                  "tags": [
                    "AI智能体",
                    "科研"
                  ],
                  "source": "IT之家",
                  "time": "8月23日消息"
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
                  "title": "第二届世界人形机器人运动会开幕，2056台机器人竞技51赛项",
                  "summary": "8月22日消息，第二届世界人形机器人运动会8月22日晚在北京国家速滑馆「冰丝带」开幕，赛期至8月26日。来自6大洲16个国家的666支队伍、2056台机器人围绕51个赛项展开1301场比赛，新增跳远、举重、拔河、乒乓球、自由搏击等对抗项目及灵巧手专项赛。开幕式上超1000台人形机器人协同列队入场，与奥运冠军丁宁、网球名将郑洁等同台展演。主办方提出「以赛定标、以赛促产」，赛后「冰丝带」将打造为永久赛训基地。",
                  "link": "https://m.thepaper.cn/detail/33774359",
                  "tags": [
                    "人形机器人",
                    "竞技"
                  ],
                  "source": "澎湃新闻",
                  "time": "8月22日消息"
                }
              ]
            },
            {
              "title": "荣耀",
              "news": [
                {
                  "title": "荣耀机器人闪电百米跑出9秒32，打破人类世界纪录",
                  "summary": "8月22日消息，在第二届世界人形机器人运动会百米竞速备赛中，荣耀战队机器人「闪电」录得9秒32成绩，峰值速度达14.5米/秒，再度刷新博尔特保持的9.58秒人类百米世界纪录，超越半马时期每秒7-8米水平。闪电采用自研高爆发关节模组、液冷散热与纯视觉识别方案，将出战100米、400米、1500米三个竞速项目。此前闪电曾以50分26秒净用时夺得人形机器人半程马拉松冠军，同样打破人类纪录。",
                  "link": "https://news.qq.com/rain/a/20260822A08LDY00",
                  "tags": [
                    "人形机器人",
                    "竞速"
                  ],
                  "source": "京报网",
                  "time": "8月22日消息"
                }
              ]
            },
            {
              "title": "天工",
              "news": [
                {
                  "title": "天工400米39秒70夺得第一，打破人类世界纪录",
                  "summary": "8月22日消息，第二届世界人形机器人运动会400米田径大型组预赛中，北京人形机器人创新中心研发的天工Ultra以39.70秒成绩位列第一，超越人类男子400米43.03秒的世界纪录，还以9.32秒率先撞线刷新百米纪录、跳出2.88米破原地跳高纪录。天工Ultra身高180cm重52kg，实测最高奔跑速度12km/h，所有参赛项目均基于「慧思开物」平台开发训练。",
                  "link": "https://xinwen.bjd.com.cn/content/s6a8a5fdce4b03fa51a83440c.html",
                  "tags": [
                    "人形机器人",
                    "竞速"
                  ],
                  "source": "京报网",
                  "time": "8月22日消息"
                }
              ]
            },
            {
              "title": "银河通用",
              "news": [
                {
                  "title": "银河通用银河星仔打网球，全球首场人机网球赛开打",
                  "summary": "8月22日消息，第二届世界人形机器人运动会开幕式上，银河通用公司推出的全球首款全自主打网球机器人「银河星仔」与网球名将郑洁及演员李昀锐上演人机混双和全球首场人机单打。星仔身高约1.75米，搭载LATENT智能规控算法，不依赖预编程，通过深度强化学习自主掌握网球技能，双目视觉0.1秒内锁定时速超50公里的来球，实测正手击球成功率90.9%，发球时速一百多公里。其背后是具身智能大模型「银河星脑」与训练平台「银河星坊」。",
                  "link": "https://sports.sina.cn/2026-08-22/detail-inipfern3011662.d.html",
                  "tags": [
                    "具身智能",
                    "网球"
                  ],
                  "source": "京报网",
                  "time": "8月22日消息"
                }
              ]
            },
            {
              "title": "宇树",
              "news": [
                {
                  "title": "宇树机器人「笨笨」入职理想汽车，担任讲解员与向导",
                  "summary": "8月22日消息，理想汽车官宣宇树科技人形机器人「笨笨」正式入职，担任讲解员、向导等职位，是理想首位「硅基员工」，配有专属工牌、限定工服和工位。8月23日起「笨笨」将在北京汽车博物馆迎宾讲解理想L9 Livis，随后现身珠海长隆海洋王国表演特技，并将在理想郑州东站IP体验中心担任讲解员。此次合作被视为具身智能从实验室走向真实商业场景的标志性一步。",
                  "link": "https://tech.ifeng.com/c/8vnbMtJWwnJ",
                  "tags": [
                    "具身智能",
                    "宇树"
                  ],
                  "source": "IT之家",
                  "time": "8月22日消息"
                }
              ]
            },
            {
              "title": "上纬新材",
              "news": [
                {
                  "title": "上纬新材消费级机器人启元Q1/T1开启预订，首发9月发货",
                  "summary": "8月23日消息，上纬新材旗下消费级机器人启元Q1、启元T1双产品正式开启预订，可通过官方小程序、天猫、抖音、B站官方店铺及线下体验参与，预计首批发货今年9月。启元Q1为首个小尺寸全身力控人形机器人，高约88cm重约15公斤，聚焦具身开发与家庭陪伴；启元T1为首个可变形个人机器人，高约100cm，可实现轮足人形与四足形态自主切换。上纬新材此前与蓝思智能、卧龙电驱达成产线合作。",
                  "link": "https://www.stcn.com/article/detail/4102725.html",
                  "tags": [
                    "消费级机器人",
                    "预订"
                  ],
                  "source": "证券时报",
                  "time": "8月23日消息"
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
              "title": "哈佛商学院",
              "news": [
                {
                  "title": "哈佛商学院推出699美元创业训练营，讲师AI数字分身提供反馈",
                  "summary": "8月22日消息，哈佛商学院（HBS）推出为期8周、收费699美元的HBS Foundry创业训练营，借助HeyGen打造的AI数字分身，在模拟路演和董事会会议等实践环节为学员提供个性化反馈。项目负责人称最初设想接近聊天机器人，因学员反馈转向更具表现力的AI虚拟形象。部分大学生对AI持抵触态度，但训练营参与者表示很喜欢这些AI分身。该案例反映AI正从教育辅助工具向教学交互核心环节延伸。",
                  "link": "https://www.c114.net.cn/industry/114183.html",
                  "tags": [
                    "AI教育",
                    "数字分身"
                  ],
                  "source": "C114",
                  "time": "8月22日消息"
                }
              ]
            },
            {
              "title": "AI合成影像",
              "news": [
                {
                  "title": "四川男子利用AI合成虚假影像骚扰他人被行拘",
                  "summary": "8月22日消息，四川眉山警方查处一起利用AI合成虚假影像骚扰他人案件，嫌疑人徐某某利用AI技术合成「受害人和嫌疑人同时躺在一张床上」等虚假私密照片，多次通过微信发送给受害人并进行骚扰恐吓，被依法行政拘留五天。受害人提前保存全部聊天记录和截图形成闭环证据链。警方提示勿轻易泄露照片等个人信息，一旦遭遇AI合成影像骚扰应第一时间保存证据并报案。",
                  "link": "https://finance.sina.cn/2026-08-22/detail-inipferi7252288.d.html",
                  "tags": [
                    "AI法规",
                    "深度伪造"
                  ],
                  "source": "京报网",
                  "time": "8月22日消息"
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
              "model": "claude-fable-5",
              "score": "1508",
              "change": "+6"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1497",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-max",
              "score": "1495",
              "change": "+12"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1493",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-high",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1486",
              "change": "+3"
            },
            {
              "model": "kimi-k3-max",
              "score": "1486",
              "change": "+10"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1485",
              "change": "+7"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "gemini-3.6-flash",
              "score": "1482",
              "change": "+8"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "gemini-3.5-flash-high",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "gpt-5.5",
              "score": "1476",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-08-22",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.6T tokens",
              "change": "↑5%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "9.14T tokens",
              "change": "↑138%"
            },
            {
              "model": "Hy3",
              "score": "8.56T tokens",
              "change": "↑18%"
            },
            {
              "model": "Ox Alpha",
              "score": "6.54T tokens",
              "change": "new"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.3T tokens",
              "change": "↑11%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "5.17T tokens",
              "change": "↑1%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "4.42T tokens",
              "change": "↑122%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.59T tokens",
              "change": "↑15%"
            },
            {
              "model": "Claude Opus 5",
              "score": "2.09T tokens",
              "change": "↑1%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "1.88T tokens",
              "change": "↑32%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.73T tokens",
              "change": "↑13%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.65T tokens",
              "change": "—"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "1.58T tokens",
              "change": "↑493%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "1.48T tokens",
              "change": "↑20%"
            },
            {
              "model": "Kimi K3",
              "score": "1.3T tokens",
              "change": "↑10%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.23T tokens",
              "change": "↑75%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.07T tokens",
              "change": "↑1%"
            },
            {
              "model": "DeepSeek V4 Pro 0813",
              "score": "1.03T tokens",
              "change": "↑107%"
            },
            {
              "model": "Nemotron 3.5 Lightning (free)",
              "score": "920B tokens",
              "change": "↑86%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "860B tokens",
              "change": "↑1%"
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
