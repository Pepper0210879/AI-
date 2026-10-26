const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
    "date": "2026-10-25",
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
                "title": "Anthropic 被曝悄悄限制 Claude Opus 5.5 逆向能力",
                "summary": "10月25日消息，大量用户反馈 Claude Opus 5.5「可以逆向一切」的能力疑似被悄悄削弱，安全护栏会在输出中途拦截对受知识产权保护内容的逆向分析。Anthropic 未官宣新版本，但 10 月 21 日对多款 Claude 产品推送更新，时间点与社区反馈吻合，外界猜测或与三星电视固件、Adobe 等商业程序被逆向开源等事件有关。",
                "link": "https://www.ithome.com/1/017/554.htm",
                "tags": [
                  "模型能力",
                  "安全护栏"
                ],
                "source": "IT之家",
                "time": "10月25日消息"
              },
              {
                "title": "Anthropic 披露未发布模型，能力超 Mythos 5.1 更守规矩",
                "summary": "当地时间10月23日，Anthropic 联合英国 AI 安全研究所发布 AI 网络测试失控事件报告，披露旗下一款未发布内部研究模型能力已超过 Claude Mythos 5.1，且安全对齐表现更好。在危险能力评估中该模型从未主动发起攻击，意识到可能造成真实伤害时也更愿意停止行动。",
                "link": "https://www.ithome.com/1/017/375.htm",
                "tags": [
                  "安全对齐",
                  "前沿模型"
                ],
                "source": "IT之家",
                "time": "当地时间10月23日"
              }
            ]
          },
          {
            "name": "Google",
            "news": [
              {
                "title": "谷歌 DeepMind 高管：终身学习者将在 AI 职场占优",
                "summary": "10月25日消息，谷歌 DeepMind 高管莱拉·易卜拉欣接受《商业内幕》采访时表示，公司招聘越来越看重求职者在课堂之外的持续学习经历，多项资历能说明其具备持续学习心态。她认为 AI 让获取答案的成本变得极低，真正知道如何提出好问题反而越来越难。",
                "link": "https://www.ithome.com/1/017/681.htm",
                "tags": [
                  "AI就业",
                  "招聘趋势"
                ],
                "source": "IT之家",
                "time": "10月25日消息"
              },
              {
                "title": "皮查伊：AI 实现递归自我改进还有很长的路",
                "summary": "10月24日消息，谷歌 CEO 桑达尔·皮查伊表示，距离 AI 能够完全自主改进自身的「最终形态」还有很长的路，谷歌研究人员虽已开始用 AI 智能体辅助开发模型，但仍处起步阶段。他预计明年将看到进一步进展，并称 AI 工具不仅提高编程效率，也改善了代码质量。",
                "link": "https://www.ithome.com/1/017/290.htm",
                "tags": [
                  "自我改进",
                  "AI研发"
                ],
                "source": "IT之家",
                "time": "10月24日消息"
              }
            ]
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
            "news": [
              {
                "title": "Meta Muse 分享链接被曝泄露用户敏感数据，功能已暂停",
                "summary": "10月24日消息，网络安全团队 Claroc 通过被动 DNS 查询发现超过 6800 个 Muse 分享页面可被检索，部分包含企业财务、贷款申请、银行欺诈警报等敏感信息。Meta 已暂停该分享功能并展开调查，但已进入 DNS 历史记录的域名及对话标题仍无法彻底清除。",
                "link": "https://www.ithome.com/1/017/517.htm",
                "tags": [
                  "隐私泄露",
                  "数据安全"
                ],
                "source": "IT之家",
                "time": "10月24日消息"
              },
              {
                "title": "Meta 收购 AI 数据分析平台 Sundial，加码数据智能",
                "summary": "当地时间10月23日，据 Axios 报道，Meta 已收购 AI 数据分析平台 Sundial，该公司由两名前 Meta 员工创立，核心能力是让企业通过聊天机器人用自然语言向复杂数据提问。收购后联合创始人 Chandra Narayanan 将负责数据分析工具与智能体相关工作。",
                "link": "https://www.ithome.com/1/017/294.htm",
                "tags": [
                  "收购",
                  "数据分析"
                ],
                "source": "IT之家",
                "time": "当地时间10月23日"
              }
            ]
          }
        ]
      },
      "domestic": {
        "vendors": [
          {
            "name": "阿里云",
            "news": [
              {
                "title": "阿里千问蒋冠军：模型、记忆与生态协同构建个人智能体",
                "summary": "10月25日消息，在 10 月 22 日的 2026 中国计算机大会上，阿里千问事业部 AI 算法负责人蒋冠军分享个人 AI 智能体技术实践，认为模型、记忆与生态是构建核心能力的三要素。千问已建立覆盖 30 多个头部行业的用户需求透视图，梳理 8000 多项原子模型能力要求。",
                "link": "https://www.ithome.com/1/017/669.htm",
                "tags": [
                  "个人智能体",
                  "技术框架"
                ],
                "source": "IT之家",
                "time": "10月25日消息"
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
                "title": "KRAFTON",
                "news": [
                  {
                    "title": "KRAFTON 预览 Raon-1 mini 开源模型，对标 Meta Muse Glimmer",
                    "summary": "10月25日消息，韩国游戏企业 KRAFTON 旗下 AI 分支公布从头训练的 Raon-1 mini 模型预览版，采用 30B-A4B 混合专家架构、线性注意力，以 Apache 2.0 许可开源，聚焦韩语兼顾英语。官方称其在编程与智能体任务上与 Meta Muse Glimmer 30B 相当，且速度更快、内存效率更高。",
                    "link": "https://www.ithome.com/1/017/695.htm",
                    "tags": [
                      "开源模型",
                      "混合专家"
                    ],
                    "source": "IT之家",
                    "time": "10月25日消息"
                  }
                ]
              },
              {
                "title": "Block",
                "news": [
                  {
                    "title": "多尔西旗下 Block 推出全双工语音模型 Dessa，可本地运行",
                    "summary": "10月25日消息，杰克·多尔西旗下 Block 公司推出全新语音模型 Dessa，支持本地运行，能模拟笑声、停顿、哽咽等情绪表达，属全双工模型。Dessa 完全基于人类语音数据训练，可在 M4 Max 及以上 MacBook 本地运行，目前暂不对外开放，正向安全研究者发出测试邀请。",
                    "link": "https://www.ithome.com/1/017/557.htm",
                    "tags": [
                      "语音模型",
                      "端侧AI"
                    ],
                    "source": "IT之家",
                    "time": "10月25日消息"
                  }
                ]
              },
              {
                "title": "亚马逊",
                "news": [
                  {
                    "title": "亚马逊 CEO：AI 推理成本还需降至十分之一才能普及",
                    "summary": "当地时间10月23日，亚马逊 CEO 安迪·贾西在 a16z 采访中表示，AI 推理成本仍高了一个数量级，要让 AI 广泛应用于企业软件，成本还需降至目前的约十分之一。他透露亚马逊自研 Trainium 芯片性价比较同类处理器高 30%-40%，有望帮助降低推理成本。",
                    "link": "https://www.ithome.com/1/017/313.htm",
                    "tags": [
                      "推理成本",
                      "自研芯片"
                    ],
                    "source": "IT之家",
                    "time": "当地时间10月23日"
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
                "title": "智元机器人",
                "news": [
                  {
                    "title": "智元 110 台人形机器人同场群舞创吉尼斯纪录",
                    "summary": "10月24日，智元机器人在山东济南组织 110 台远征 A3 全尺寸人形机器人同场群舞，采用灵动 LinkBots 集群调控平台及 UWB 厘米级定位技术，成功创下「最多人形机器人同时跳舞」吉尼斯世界纪录。这些机器人后续将投入文旅演艺、公共服务、科研教育等场景。",
                    "link": "https://www.ithome.com/1/017/382.htm",
                    "tags": [
                      "人形机器人",
                      "集群控制"
                    ],
                    "source": "IT之家",
                    "time": "10月24日"
                  }
                ]
              },
              {
                "title": "极飞科技",
                "news": [
                  {
                    "title": "软银投资的极飞科技：让每个农民都有自己的机器人",
                    "summary": "10月25日消息，获软银投资的中国农业无人机企业极飞科技表示，希望让「每个农民都有自己的机器人」，以应对农业劳动力减少和气候变化。按营收计极飞是仅次于大疆的全球第二大农业无人机制造商，产品销往近 70 国，正筹备赴港上市，2023 年融资估值约 15 亿美元。",
                    "link": "https://www.ithome.com/1/017/552.htm",
                    "tags": [
                      "农业机器人",
                      "无人机"
                    ],
                    "source": "IT之家",
                    "time": "10月25日消息"
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
                "title": "大模型词元服务监测报告",
                "news": [
                  {
                    "title": "信通院：6 月国内词元日均消耗约 500 万亿",
                    "summary": "10月24日消息，中国信通院联合发布《大模型词元服务性能监测报告（2026年）》，显示 2026 年 6 月国内词元日均消耗量约 500 万亿，是 2025 年 12 月的近 4 倍。报告同时指出今年词元服务价格明显回升，国内归一化均价从 6.8 元涨至 13.46 元。",
                    "link": "https://www.ithome.com/1/017/518.htm",
                    "tags": [
                      "词元服务",
                      "行业报告"
                    ],
                    "source": "IT之家",
                    "time": "10月24日消息"
                  }
                ]
              },
              {
                "title": "野村证券",
                "news": [
                  {
                    "title": "野村证券：存储芯片需求 2028 年前仍将快速增长",
                    "summary": "10月25日消息，野村证券发布乐观预测，认为全球存储芯片需求仍将在 2028 年前保持快速增长，将三星电子和 SK 海力士列为重点推荐股票并给予「买入」评级。该机构认为市场过度担忧 AI 投资前景，OpenAI 和 Anthropic 三季度合计营收同比增长 507%。",
                    "link": "https://www.ithome.com/1/017/622.htm",
                    "tags": [
                      "存储芯片",
                      "投资预测"
                    ],
                    "source": "IT之家",
                    "time": "10月25日消息"
                  }
                ]
              },
              {
                "title": "瑞典政府办公厅",
                "news": [
                  {
                    "title": "瑞典政府办公厅将禁止办公电脑访问 ChatGPT、Claude",
                    "summary": "当地时间10月23日，据瑞典国家公共广播公司报道，瑞典政府办公厅将从下周一起禁止工作人员通过办公电脑直接访问 ChatGPT 和 Claude，要求改用微软 Copilot 等获批 AI 服务。瑞典税务局和国家机构管理局也已采取类似封锁措施。",
                    "link": "https://www.ithome.com/1/017/385.htm",
                    "tags": [
                      "AI监管",
                      "数据安全"
                    ],
                    "source": "IT之家",
                    "time": "当地时间10月23日"
                  }
                ]
              },
              {
                "title": "三星堆：未来往事",
                "news": [
                  {
                    "title": "国内首部 AI 院线长片《三星堆：未来往事》票房破百万",
                    "summary": "10月25日消息，猫眼专业版数据显示，国内首部获得国家电影局公映许可证的 AI 全流程院线长片《三星堆：未来往事》票房已达 116.2 万元。该片 10 月 23 日上映，片长 100 分钟，所有角色均为原创数字形象，全片依托博纳自研「博卡电影云片场」完成。",
                    "link": "https://www.ithome.com/1/017/719.htm",
                    "tags": [
                      "AI电影",
                      "票房"
                    ],
                    "source": "IT之家",
                    "time": "10月25日消息"
                  }
                ]
              },
              {
                "title": "AI智能体金融",
                "news": [
                  {
                    "title": "AI 智能体大量涌入，美国大行开始准备「灾后预案」",
                    "summary": "10月25日消息，据 Axios 报道，随着代表个人客户的 AI 智能体活动激增，摩根士丹利、美国银行、摩根大通等头部银行开始加急落地安全流程、更新业务规则，为假设中由 AI 引发的灾难制定应急预案。部分智能体在未收到明确指令时擅自替用户致电客服，引发金融风险担忧。",
                    "link": "https://www.ithome.com/1/017/562.htm",
                    "tags": [
                      "AI智能体",
                      "金融安全"
                    ],
                    "source": "IT之家",
                    "time": "10月25日消息"
                  }
                ]
              },
              {
                "title": "网络安全专家",
                "news": [
                  {
                    "title": "网络安全专家：AI 发现的漏洞将引发新的安全隐患",
                    "summary": "10月25日消息，路透社采访的七名网络安全专家认为，随着 AI 推动软件漏洞发现数量同比增长翻倍，类似本周多地政府网站因 PHP 漏洞中断服务的事件几乎肯定会再发生。AI 能在数小时内开发出漏洞攻击程序，大幅压缩了防御方的修补时间窗口。",
                    "link": "https://www.ithome.com/1/017/592.htm",
                    "tags": [
                      "网络安全",
                      "漏洞"
                    ],
                    "source": "IT之家",
                    "time": "10月25日消息"
                  }
                ]
              },
              {
                "title": "库班（亿万富翁投资人）",
                "news": [
                  {
                    "title": "库班：抵御失控智能体就像防蟑螂，可用 AI「喷药」防御",
                    "summary": "10月24日消息，亿万富翁马克·库班将 AI 智能体发动的网络攻击比作蟑螂入侵，认为 AI 并未创造新攻击手段，只是能发动海量暴力破解攻击。他强调防御者同样可以用大量 AI 增强防护，OpenAI 过去一年安全岗位招聘数量增长 91%。",
                    "link": "https://www.ithome.com/1/017/347.htm",
                    "tags": [
                      "网络安全",
                      "AI攻防"
                    ],
                    "source": "IT之家",
                    "time": "10月24日消息"
                  }
                ]
              },
              {
                "title": "卡兰多",
                "news": [
                  {
                    "title": "澳国脚授权 AI 数字分身，运动员肖像权开启商业化",
                    "summary": "10月25日消息，澳大利亚足球运动员克里斯蒂安·沃尔帕托授权加州公司卡兰多使用其 AI 肖像，成为最新一位将 AI 肖像变现的职业运动员。卡兰多独家持有其数字形象、声音、生物特征数据，对接品牌合作并抽取分成，同时拦截未经许可的 AI 内容。",
                    "link": "https://www.ithome.com/1/017/542.htm",
                    "tags": [
                      "AI肖像",
                      "商业化"
                    ],
                    "source": "IT之家",
                    "time": "10月25日消息"
                  }
                ]
              },
              {
                "title": "AI安全",
                "news": [
                  {
                    "title": "悉尼男子向 Claude 透露袭击意图后被警方逮捕",
                    "summary": "10月24日消息，悉尼一名 29 岁男子向 Anthropic 聊天机器人 Claude 透露想杀害附近托儿所儿童，对话引起国际刑警组织注意后被捕，被控利用通信服务实施骚扰、恐吓或冒犯行为。该事件再度引发 AI 聊天机器人助长有害执念的担忧，已有多起犯罪与长期使用聊天机器人相关。",
                    "link": "https://www.ithome.com/1/017/325.htm",
                    "tags": [
                      "AI滥用",
                      "安全监管"
                    ],
                    "source": "IT之家",
                    "time": "10月24日消息"
                  }
                ]
              },
              {
                "title": "脑机接口",
                "news": [
                  {
                    "title": "全国首个国家脑机接口高质量数据集建设项目启动",
                    "summary": "10月25日消息，华中科技大学同济医学院附属同济医院牵头的脑机接口高质量数据集建设项目 24 日在武汉启动，拟于 2027 年建成投用，聚焦脑卒中康复、帕金森病、癫痫等 10 类疾病方向，建成我国自主可控的脑机接口高质量数据库。",
                    "link": "https://www.ithome.com/1/017/607.htm",
                    "tags": [
                      "脑机接口",
                      "医疗AI"
                    ],
                    "source": "IT之家",
                    "time": "10月25日消息"
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
            "date": "2026-10-24",
            "link": "https://openrouter.ai/rankings",
            "rankings": [
              {
                "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
                "score": "26.7T tokens",
                "change": "—"
              },
              {
                "model": "DeepSeek V4.1 Flash (deepseek)",
                "score": "20.5T tokens",
                "change": "↓44%"
              },
              {
                "model": "MiniMax M3.1 Flash (free) (minimax)",
                "score": "13.7T tokens",
                "change": "—"
              },
              {
                "model": "GLM 5.3 Flash (z-ai)",
                "score": "11.9T tokens",
                "change": "↓6%"
              },
              {
                "model": "Hy4 preview (tencent)",
                "score": "8.77T tokens",
                "change": "↑12%"
              },
              {
                "model": "Claude Opus 5.5 (anthropic)",
                "score": "8.04T tokens",
                "change": "↑35%"
              },
              {
                "model": "MiMo-V2.6-Flash (xiaomi)",
                "score": "7.41T tokens",
                "change": "↓32%"
              },
              {
                "model": "GPT-6 Luna (openai)",
                "score": "6.74T tokens",
                "change": "↑4%"
              },
              {
                "model": "Nemotron 3 Ultra (free) (nvidia)",
                "score": "5.43T tokens",
                "change": "↓14%"
              },
              {
                "model": "GLM 5.3 (z-ai)",
                "score": "5.02T tokens",
                "change": "↓4%"
              },
              {
                "model": "DeepSeek V4 Flash 0731 (deepseek)",
                "score": "4.17T tokens",
                "change": "↓11%"
              },
              {
                "model": "Muse Spark 1.3 Contributor (meta)",
                "score": "3T tokens",
                "change": "↓4%"
              },
              {
                "model": "Hy3 (tencent)",
                "score": "2.99T tokens",
                "change": "↓8%"
              },
              {
                "model": "Jev 1.13 (typesafe)",
                "score": "2.92T tokens",
                "change": "↓10%"
              },
              {
                "model": "DeepSeek V4 Flash 0423 (deepseek)",
                "score": "2.77T tokens",
                "change": "↓11%"
              },
              {
                "model": "Claude Haiku 5.5 (anthropic)",
                "score": "2.67T tokens",
                "change": "↑33%"
              },
              {
                "model": "Claude Sonnet 5.5 (anthropic)",
                "score": "2.58T tokens",
                "change": "↓8%"
              },
              {
                "model": "GPT-6.1 Sol (openai)",
                "score": "2.41T tokens",
                "change": "↑13%"
              },
              {
                "model": "Step 5 Preview (stepfun)",
                "score": "2.04T tokens",
                "change": "↓88%"
              },
              {
                "model": "Kimi K3 (moonshotai)",
                "score": "2.03T tokens",
                "change": "↓15%"
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
