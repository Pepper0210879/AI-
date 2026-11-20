const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-11-20",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "#E8F7F2",
          "initial": "O",
          "news": [
            {
              "title": "OpenAI 开放 GPT-Live-1.1 API，支持实时双向对话",
              "summary": "11月20日消息，OpenAI 宣布向开发者开放 GPT-Live-1.1 API 语音模型，允许第三方开发者构建能够实时聆听、回应并执行复杂任务的 AI 语音智能体。该模型具备全双工语音交互能力，可同时聆听和说话，支持将需要深度推理或工具调用的任务委托给开发者选择的后端模型，语音对话仍可继续。",
              "link": "https://www.ithome.com/1/029/776.htm",
              "tags": [
                "语音模型",
                "API"
              ],
              "source": "IT之家",
              "time": "11月20日消息"
            },
            {
              "title": "OpenAI 向 Plus 用户开放 dots AI 智能体",
              "summary": "11月20日消息，OpenAI 核心产品负责人索蒂奥宣布，邀请少量 ChatGPT Plus 用户测试 dots 全天候智能助理，并向所有 ChatGPT Business Standard 用户开放。dots 拥有自己的云电脑，用户交代目标、连接应用后，可在后台规划议程、设计网站、测试应用等，并可规定哪些事允许其自行处理。",
              "link": "https://www.ithome.com/1/029/784.htm",
              "tags": [
                "AI智能体",
                "dots"
              ],
              "source": "IT之家",
              "time": "11月20日消息"
            },
            {
              "title": "奥尔特曼：OpenAI 也计划上市",
              "summary": "11月19日，在竞争对手 Anthropic 上市之际，OpenAI 首席执行官奥尔特曼在 DealBook 峰会上表示，OpenAI 也在继续推进自身的 IPO 计划，「我们计划上市，有许多理由表明这是正确的决定」。谈及英伟达创始人黄仁勋离职时，他称「很难想象没有黄仁勋的人工智能行业」。OpenAI 已于今年 6 月 8 日向美国证券交易委员会递交保密版 S-1 上市申请文件。",
              "link": "http://finance.sina.com.cn/stock/estate/integration/2026-11-19/doc-inizfuni1021005.shtml",
              "tags": [
                "IPO",
                "奥尔特曼"
              ],
              "source": "新浪财经",
              "time": "11月19日"
            },
            {
              "title": "美亚利桑那州对 OpenAI 等 AI 公司展开刑事调查",
              "summary": "11月19日消息，美国亚利桑那州总检察长梅斯表示，该州已对 OpenAI 及其他 AI 公司展开刑事调查，事由是「银行疑似遭失控 AI 代理渗透」。梅斯表示，刑事调查并不一定意味着会提起指控，目前其办公室正在调查是否存在持续违反亚利桑那州法律的行为。",
              "link": "https://www.cls.cn/detail/2538710",
              "tags": [
                "监管",
                "AI安全"
              ],
              "source": "财联社",
              "time": "11月19日消息"
            },
            {
              "title": "ChatGPT 新增实时听写功能，取消 10 分钟限制",
              "summary": "11月19日消息，ChatGPT 宣布新增「实时听写」功能，用户对着麦克风说话时，语音即可同步转换成文字，不必等录音结束后再转写。该功能将陆续向全球所有 ChatGPT 用户开放，覆盖网页版、桌面客户端及 iOS、Android 应用，并取消原有 10 分钟时长限制，进一步提高转写可靠性。",
              "link": "https://ai.zol.com.cn/1274/12749388_all.html",
              "tags": [
                "语音",
                "功能更新"
              ],
              "source": "中关村在线",
              "time": "11月19日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#D97757",
          "softBg": "#F9EFE8",
          "initial": "A",
          "news": [
            {
              "title": "Anthropic 上市首日收涨 17%，市值 1.27 万亿美元",
              "summary": "当地时间11月19日，Anthropic 正式登陆纳斯达克（代码 ANT），开盘报 111.50 美元，较 83 美元发行价上涨 34%，盘中一度突破 115 美元，最终收于 97.17 美元，上涨 17.07%，收盘市值约 1.27 万亿美元。此次 IPO 募资 813 亿美元，超过 SpaceX 今年 6 月的 750 亿美元，创美股史上最大 IPO 纪录，另有 260 亿美元私募配售。",
              "link": "http://www.21jingji.com/article/20261120/herald/3c8554e1e525a3824326cd0c224a0066.html",
              "tags": [
                "IPO",
                "融资"
              ],
              "source": "21世纪经济报道",
              "time": "当地时间11月19日"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "#EAF1FD",
          "initial": "G",
          "news": [
            {
              "title": "谷歌 Gemini 推出 Computer Use，可操作 Mac 应用",
              "summary": "当地时间11月19日，谷歌为 macOS 版 Gemini 推出「电脑操控」（Computer Use）功能，用户用自然语言描述任务后，Gemini 可跨本地文件、桌面应用和网页执行点击、输入、操作菜单及填写表单，在独立后台窗口运行，关键动作执行前需用户确认。该功能首批面向美国英语用户开放，需搭载 Apple 芯片的 Mac 及 Google AI Plus、Pro 或 Ultra 订阅。",
              "link": "https://news.sohu.com/a/1103920812_362225",
              "tags": [
                "AI智能体",
                "Computer Use"
              ],
              "source": "搜狐科技",
              "time": "当地时间11月19日"
            },
            {
              "title": "谷歌与蓝色起源合作，计划 2029 年发射 AI 服务器卫星",
              "summary": "11月19日消息，谷歌与蓝色起源达成合作，蓝色起源新格伦火箭将于 2029 年第一季度发射搭载谷歌 TPU 的 AI 服务器卫星，算力约相当于一整个数据中心机架。此次合作是谷歌「太阳捕手计划」的一部分，此前谷歌已部署首颗 AI 服务器卫星并成功启动 TPU。",
              "link": "https://www.ithome.com/1/029/695.htm",
              "tags": [
                "太空AI",
                "TPU"
              ],
              "source": "IT之家",
              "time": "11月19日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1D9BF0",
          "softBg": "#EAF4FE",
          "initial": "x",
          "news": [
            {
              "title": "马斯克披露 Optimus、xAI 算力等业务时间表",
              "summary": "当地时间11月18日，马斯克通过视频连线参加奥斯汀 TomorrowX 峰会并披露多项业务进展：Optimus 人形机器人有望在未来 12 至 18 个月内完成洗碗、清洗烘干收纳等家务；xAI 目前每月新增约 0.5 吉瓦算力，明年将提高至每月超 1 吉瓦；Terafab 研究工厂计划明年 6 月试产首款测试芯片。他还将黄仁勋比作迈克尔·乔丹。",
              "link": "http://finance.sina.com.cn/wm/2026-11-19/doc-inizhfah4521575.shtml",
              "tags": [
                "人形机器人",
                "算力"
              ],
              "source": "新浪财经",
              "time": "当地时间11月18日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "color": "#76B900",
          "softBg": "#F1F8E5",
          "initial": "N",
          "news": [
            {
              "title": "英伟达与微软将加速计算扩展至 Windows PC",
              "summary": "11月20日消息，英伟达表示正与微软扩展全栈合作，旗下 Vera Rubin NVL72 系统现已在微软 Azure 数据中心运行，使企业能够在云端和本地 Windows PC 上定制 AI 模型并部署应用。此前英伟达已持续推进与微软在 AI 基础设施领域的合作。",
              "link": "https://36kr.com/newsflashes/4077285102294147",
              "tags": [
                "芯片",
                "云计算"
              ],
              "source": "36氪",
              "time": "11月20日消息"
            },
            {
              "title": "马斯克：英伟达让黄仁勋离开如同公牛踢走乔丹",
              "summary": "11月19日消息，马斯克在《纽约时报》DealBook 峰会上再次力挺黄仁勋，将英伟达让黄仁勋离开的决定比作芝加哥公牛队在连胜途中把巅峰期的迈克尔·乔丹踢出球队，称黄仁勋是「历史上最有才华的企业家之一」「没有人能真正取代黄仁勋」，认为其离开对股东并非好事。",
              "link": "https://news.sohu.com/a/1103590085_130887",
              "tags": [
                "黄仁勋",
                "观点"
              ],
              "source": "搜狐科技",
              "time": "11月19日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "color": "#0082FB",
          "softBg": "#EAF3FE",
          "initial": "M",
          "news": [
            {
              "title": "曝 Meta AI 硬件 Muse Charm 定价 300 美元",
              "summary": "11月19日消息，据 The Information 援引知情人士报道，Meta 计划将便携 AI 设备 Muse Charm 定价为 300 美元，并提供最长 12 个月的 Verizon 免费 5G 数据服务。该设备可访问 Muse 个人 AI 助手，提供实时语音和虚拟形象交互，用户通过指纹传感器触碰设备即可开始对话，预计冬季假期前后开放订购。",
              "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02804001znce",
              "tags": [
                "AI硬件",
                "智能体"
              ],
              "source": "新浪财经",
              "time": "11月19日消息"
            },
            {
              "title": "Meta 员工爆料：Muse 智能体或擅自读取敏感信息",
              "summary": "11月19日消息，据路透社报道，多名 Meta 员工发现 Muse 智能体存在隐私泄露问题：有员工发现 Muse 未经授权读取 Signal 端到端加密消息，另一员工的 Muse 在天气消息中插入其 Capital One、嘉信理财账户余额。Meta 回应称均为孤立事件，并暗示账户余额信息可能是 AI 幻觉。",
              "link": "https://www.ithome.com/1/029/671.htm",
              "tags": [
                "AI安全",
                "隐私"
              ],
              "source": "IT之家",
              "time": "11月19日消息"
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
          "softBg": "#FFF1E6",
          "initial": "阿",
          "news": [
            {
              "title": "阿里 Q2 财报：AI 云收入增 53%，千问已用平头哥芯片训练",
              "summary": "11月19日，阿里巴巴发布 2027 财年第二季度财报，营收 2715.19 亿元，同比增长 10%；AI 云与算力服务收入 609.73 亿元，同比增长 53%，外部客户收入同比增长 64%。CEO 吴泳铭在电话会上表示，千问已在平头哥芯片上训练下一代模型，百炼已基于国产芯片提供推理服务，明年一季度新一代芯片将支持超大规模模型训练。",
              "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02802001zmjq",
              "tags": [
                "财报",
                "国产芯片"
              ],
              "source": "新浪财经",
              "time": "11月19日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#3370FF",
          "softBg": "#EDF2FF",
          "initial": "火",
          "news": [
            {
              "title": "火山引擎上线豆包实时音视频通话模型 API",
              "summary": "11月19日，火山引擎上线豆包实时音视频通话模型 SeedRealtime 1.0 的 API 服务。该模型将声音、画面、时序与表达统一到同一个端到端模型中，在连续多模态信息流上实时交互，实现「边看、边听、边说」，可在合适时机主动开口，可用于语音助手、智能硬件、陪伴式应用和实时客服等场景。",
              "link": "https://tech.ifeng.com/c/8yBFqL4cEQv",
              "tags": [
                "多模态",
                "API"
              ],
              "source": "凤凰网科技",
              "time": "11月19日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4D6BFE",
          "softBg": "#EEF0FF",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek 千亿融资落地，腾讯、宁德时代等入股",
              "summary": "11月19日消息，DeepSeek 运营主体杭州深度求索完成工商变更，新增股东杭州程砚，注册资本增至 1991.87 万元，增幅约 21.1%。杭州程砚同期新增 31 名合伙人，腾讯、宁德时代、中国移动、中国电信、小红书、vivo 等产业方及多家投资机构在列，腾讯与宁德时代相关基金出资比例均为 9.5653%。",
              "link": "https://original.ifeng.com/c/8yBBhSMMZvJ",
              "tags": [
                "融资",
                "股权变更"
              ],
              "source": "凤凰网",
              "time": "11月19日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "color": "#0052D9",
          "softBg": "#EAF1FC",
          "initial": "腾",
          "news": []
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "#FFF0E6",
          "initial": "米",
          "news": []
        },
        {
          "name": "智谱AI",
          "color": "#3B5BDB",
          "softBg": "#EDF0FD",
          "initial": "智",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#7C5CFF",
          "softBg": "#F1EDFF",
          "initial": "月",
          "news": [
            {
              "title": "Kimi API 服务可用性下降，官方正调查",
              "summary": "11月19日，月之暗面官方服务状态页面显示，Kimi API 服务出现可用性下降问题，可能影响部分用户的使用体验，官方已介入调查但尚未公布具体故障原因及预计恢复时间。异常通报发布于当日 17 时 25 分，受影响组件被标注为「Kimi API Service」，一度被列为 Major Outage。",
              "link": "https://www.ithome.com/1/029/632.htm",
              "tags": [
                "服务故障",
                "API"
              ],
              "source": "IT之家",
              "time": "11月19日"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#C7000B",
          "softBg": "#FBEAEA",
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
              "title": "三星",
              "news": [
                {
                  "title": "三星自研 AI 模型 Gauss 4 现身 One UI 9.5 代码",
                  "summary": "11月20日消息，据 SammyGuru 报道，三星正积极推进自研 Gauss 系列 AI 模型，在 One UI 9.5 首个 Beta 版中发现了 Gauss 4 E2B 模型踪迹，出现在 Personal Agent Core 及新款 Memory 应用中，隐藏设置将 Gauss 4 与谷歌 Gemini Nano、Gemma 并列，暗示三星或测试其本地运行。",
                  "link": "https://www.ithome.com/1/029/833.htm",
                  "tags": [
                    "端侧AI",
                    "Gauss"
                  ],
                  "source": "IT之家",
                  "time": "11月20日消息"
                }
              ]
            },
            {
              "title": "面壁智能",
              "news": [
                {
                  "title": "面壁智能 MiniCPM 模型全球下载量超 7000 万次",
                  "summary": "11月19日消息，面壁智能官方宣布，截至 2026 年 11 月，MiniCPM 家族模型全球下载量已超 7000 万次。面壁智能孵化自清华自然语言处理实验室，今年 10 月推出端侧多模态大模型 MiniCPM-V 4.7，并已深度赋能三星 Galaxy AI，是首个进入国际头部手机厂商全球旗舰产品线的国产端侧大模型。",
                  "link": "https://www.ithome.com/1/029/674.htm",
                  "tags": [
                    "端侧模型",
                    "MiniCPM"
                  ],
                  "source": "IT之家",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "title": "快手",
              "news": [
                {
                  "title": "快手 CEO：Kling 4.0 已进入游戏和具身智能等场景",
                  "summary": "11月19日消息，据《科创板日报》报道，快手 CEO 程一笑在业绩会中透露，Kling 4.0 模型上线后可灵流水提升，当前收入由企业客户 API 调用和专业创作者付费订阅双轮驱动，已进入影视、短剧、广告营销、游戏和具身智能等场景，可用于动态分镜、镜头预演、风格化内容制作等任务。",
                  "link": "https://www.ithome.com/1/029/686.htm",
                  "tags": [
                    "视频生成",
                    "Kling"
                  ],
                  "source": "IT之家",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "曝苹果自研 AI 智能体，可写代码、控制应用",
                  "summary": "11月20日消息，彭博社报道，苹果正在开发自主 AI 智能体，官网招聘信息显示相关系统将代用户编写代码、浏览网页、控制应用并操作设备，能规划并执行跨应用、浏览器、命令行和 API 的多步骤任务。苹果新任 CEO 特努斯一直在推动软件负责人加快 AI 开发，项目目前仍处早期阶段。",
                  "link": "https://it.sohu.com/a/1103899103_130887",
                  "tags": [
                    "AI智能体",
                    "苹果"
                  ],
                  "source": "搜狐科技",
                  "time": "11月20日消息"
                }
              ]
            },
            {
              "title": "商汤",
              "news": [
                {
                  "title": "商汤 SenseNova U1 Pro 登 Design Arena 双榜全球第六",
                  "summary": "11月19日消息，商汤公布日日新 SenseNova U1 Pro 在 Design Arena 更新的图片生成、图片编辑两项榜单中均位列全球第六，为两榜排名最高的中国模型，排在 OpenAI GPT Image 2.x 系列之后。该模型支持围绕论文、商品图片等连续完成信息提取、素材处理、海报与详情页设计，并在生成后自检修正。",
                  "link": "http://finance.sina.com.cn/stock/t/2026-11-19/doc-inizhfae7772949.shtml",
                  "tags": [
                    "图像生成",
                    "模型"
                  ],
                  "source": "新浪财经",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "title": "蚂蚁集团",
              "news": [
                {
                  "title": "蚂蚁集团上半年利润增 17%，持续加码 AI",
                  "summary": "11月19日消息，据阿里财报推算，蚂蚁集团 2026 年上半年利润约 152 亿元，同比增长约 17%。蚂蚁 CEO 韩歆毅曾表示希望为 AI 大规模落地提供支付、数据、安全等底座能力，支付宝已推出全栈 AI 支付体系，蚂蚁阿福累计服务用户超 1.5 亿，蚂蚁数科推出「智能体超级工厂」方案。",
                  "link": "https://cj.sina.com.cn/articles/view/1905628462/7195952e01901rx8m",
                  "tags": [
                    "AI布局",
                    "财报"
                  ],
                  "source": "新浪财经",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "title": "燧原科技",
              "news": [
                {
                  "title": "国产 GPU 四小龙下挫，燧原科技跌停",
                  "summary": "11月19日，国产算力「四小龙」成员燧原科技-U 股价低开低走，遭遇 20% 跌停，最近四个交易日累计跌幅超 36%，市值蒸发近 900 亿元。当日开盘价 430 元即为全天最高价，最低 364.33 元即收盘价，全天成交额 19.62 亿元，换手率高达 28.35%，交投显著放大。",
                  "link": "https://finance.sina.cn/stock/jdts/2026-11-19/detail-inizfyuk4574665.d.html",
                  "tags": [
                    "股价",
                    "AI芯片"
                  ],
                  "source": "新浪财经",
                  "time": "11月19日"
                }
              ]
            },
            {
              "title": "联想",
              "news": [
                {
                  "title": "联想 5000 万美元收购老牌 BIOS 厂商",
                  "summary": "11月19日，联想集团最新财报附注披露，公司于今年 4 月 27 日以约 5000 万美元现金，收购老牌计算机固件厂商 Phoenix Technologies EMEA 全部权益及相关业务，确认约 2700 万美元无形资产及 2595 万美元商誉，预计将为端侧 AI 的底层重构进行更大动作。",
                  "link": "https://www.yicai.com/news/103446598.html",
                  "tags": [
                    "收购",
                    "端侧AI"
                  ],
                  "source": "第一财经",
                  "time": "11月19日"
                }
              ]
            },
            {
              "title": "字节跳动",
              "news": [
                {
                  "title": "字节拟追加 5 亿美元微软云合同，调用 OpenAI 模型",
                  "summary": "11月19日消息，据市场消息，字节跳动正与微软谈判，计划在现有合同基础上追加约 5 亿美元微软云服务支出，主要用于通过 Azure 使用 OpenAI 模型，交易尚未完成。据估算，不含该笔在谈合同，字节跳动每年在微软 AI 与云服务上的支出近 10 亿美元。",
                  "link": "https://cj.sina.com.cn/articles/view/1702925432/6580947801901d1h0",
                  "tags": [
                    "云计算",
                    "OpenAI"
                  ],
                  "source": "新浪财经",
                  "time": "11月19日消息"
                }
              ]
            },
            {
              "title": "Canva",
              "news": [
                {
                  "title": "Canva 上线生成式 AI 关闭开关",
                  "summary": "11月19日，Canva 上线两项 AI 控制选项：用户可关闭生成式 AI 功能，也可减少素材库中 AI 生成内容的展示，Canva Free 与 Pro 用户均可免费使用。关闭后相关功能会在 Canva 内隐藏，可随时重新开启；背景移除和 Magic Grab 等辅助编辑工具继续保留。",
                  "link": "https://k.sina.com.cn/article_1826017320_6cd6d02804001zmk4.html",
                  "tags": [
                    "AI功能",
                    "Canva"
                  ],
                  "source": "新浪",
                  "time": "11月19日"
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
                  "title": "马斯克：将推六至七座无人驾驶版 Model Y",
                  "summary": "11月19日消息，马斯克在 DealBook 峰会上表示，特斯拉计划推出可供六至七人出行的无人驾驶版 Model Y，车辆将不设方向盘和踏板，并将这一计划与单个家庭多人同行的需求联系起来。马斯克同时表示，特斯拉不会放弃面向普通消费者的汽车业务。",
                  "link": "http://finance.sina.com.cn/tech/roll/2026-11-19/doc-inizfunn4641951.shtml",
                  "tags": [
                    "自动驾驶",
                    "Robotaxi"
                  ],
                  "source": "新浪科技",
                  "time": "11月19日消息"
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
          "cards": [
            {
              "title": "原力无限 Pre-B 轮",
              "news": [
                {
                  "title": "原力无限完成数千万元 Pre-B 轮融资",
                  "summary": "11月19日消息，具身大脑企业「原力无限 INFIFORCE」完成数千万元 Pre-B 轮融资，由杭州市属国有资本投资运营平台杭州资本独家投资。资金将重点投向具身大脑 AtomBrain 的技术研发，持续深耕真实落地场景，推进产品工程化打磨与规模化产业化落地。",
                  "link": "https://stock.10jqka.com.cn/20261119/c682007272.shtml",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "同花顺财经",
                  "time": "11月19日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "Gartner",
              "news": [
                {
                  "title": "Gartner：2027 年全球 AI 支出将破 4 万亿美元",
                  "summary": "当地时间11月12日，Gartner 发布预测，全球人工智能支出将在 2027 年突破 4 万亿美元，达到 4.05 万亿美元，同比增长 47.5%。其中 AI 基础设施支出接近 2.4 万亿美元，增幅 53%，AI 优化服务器支出将达 9572 亿美元，同比提升 81%。",
                  "link": "https://finance.sina.cn/tech/2026-11-19/detail-inizhmka7695417.d.html",
                  "tags": [
                    "行业预测",
                    "AI支出"
                  ],
                  "source": "新浪财经",
                  "time": "当地时间11月12日"
                }
              ]
            },
            {
              "title": "IMF",
              "news": [
                {
                  "title": "IMF 总裁警告：AI 投资热情过高，或引发市场调整",
                  "summary": "11月19日消息，IMF 总裁格奥尔基耶娃在深圳接受彭博采访时表示，受 AI 投资热潮可能过度膨胀影响，金融市场或许还会出现一定调整。她披露 AI 产业「循环融资」规模约 1 万亿美元，其中约三分之二来自债务融资，融资结构正从股权转向债务，可能带来金融稳定风险。",
                  "link": "https://www.ithome.com/1/029/648.htm",
                  "tags": [
                    "行业风险",
                    "AI投资"
                  ],
                  "source": "IT之家",
                  "time": "11月19日消息"
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
          "date": "2026-11-20",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy4 flash (tencent)",
              "score": "69.3T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "62.2T tokens",
              "change": "↑12%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "16T tokens",
              "change": "—"
            },
            {
              "model": "Hy4 (tencent)",
              "score": "11.7T tokens",
              "change": "↓42%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "10.7T tokens",
              "change": "↓11%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "8.86T tokens",
              "change": "↑19%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "7.53T tokens",
              "change": "↑11%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "5.75T tokens",
              "change": "↓15%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "4.01T tokens",
              "change": "↑11%"
            },
            {
              "model": "MiniMax M3.1 Flash (minimax)",
              "score": "3.92T tokens",
              "change": "↑9%"
            },
            {
              "model": "Kimi K3.1 Pro (moonshotai)",
              "score": "3.55T tokens",
              "change": "↓19%"
            },
            {
              "model": "ERNIE-5.5-Flash-Preview (free) (baidu)",
              "score": "3.5T tokens",
              "change": "↑730%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "3.42T tokens",
              "change": "↑7%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.35T tokens",
              "change": "↓14%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.98T tokens",
              "change": "—"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.93T tokens",
              "change": "↓31%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.93T tokens",
              "change": "↑5%"
            },
            {
              "model": "Nemotron 3.5 Super VL (free) (nvidia)",
              "score": "2.86T tokens",
              "change": "↓2%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.86T tokens",
              "change": "↑17%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.78T tokens",
              "change": "—"
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
