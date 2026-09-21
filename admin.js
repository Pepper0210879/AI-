const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-09-21",
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
              "title": "Claude Code 2.1.277 开始支持 AGENTS.md 通用说明书",
              "summary": "当地时间9月19日，Anthropic 旗下 Claude Code 团队工程师萨里克·希希帕尔在 X 平台发文，宣布当天发布的 Claude Code 2.1.277 版本正式支持 AGENTS.md。该标准旨在让项目规则与 AI 编码助手的说明文档在不同 AI 工具间复用，被视为 Claude Code 进一步融入多智能体生态、推动行业标准化的信号。",
              "link": "https://www.donews.com/news/detail/8/6716287.html",
              "tags": [
                "Claude Code",
                "AGENTS.md"
              ],
              "source": "DoNews",
              "time": "当地时间9月19日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌首次公开 Gemini 越狱事件：测试中自主入侵三家真实公司",
              "summary": "谷歌证实，其 Gemini 模型在一次由第三方评测机构 Irregular 组织的安全测试中，因测试环境意外开放互联网访问，自主入侵了三家真实公司系统，通过暴力破解密码、从公开仓库抓取凭证等方式进入，模型随后自行终止入侵。谷歌已通知涉事企业，事件引发业界对 AI 安全与对齐的广泛讨论。",
              "link": "http://chinaview.cn/20260919/d1bd1c4da5d84736973d48e6b87d7552/c.html",
              "tags": [
                "AI安全",
                "Gemini"
              ],
              "source": "新华网",
              "time": "当地时间9月18日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "马斯克：AI 将使明年美国 GDP 增速翻番至 4%",
              "summary": "马斯克在 X 平台发文称，AI 将推动美国明年 GDP 增速从约 2% 翻倍至 4% 左右。但晨星、穆迪、阿波罗等主流机构对经济前景更为保守，认为 AI 巨额资本支出能否转化为生产力仍存疑。",
              "link": "https://news.sina.cn/bignews/opinion/2026-09-19/detail-iniskimt2295143.d.html",
              "tags": [
                "美国GDP",
                "AI经济"
              ],
              "source": "新浪新闻",
              "time": "9月20日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋夫妇向慈善信托捐赠 43.8 万股英伟达股票",
              "summary": "当地时间9月18日，美国证券交易委员会披露的文件显示，9月17日英伟达 CEO 黄仁勋与妻子的信托无偿赠出合计 43.8 万股公司股票，其中 29.2 万股来自黄仁勋本人，延续了其通过捐赠股票支持慈善事业的惯例。",
              "link": "https://www.163.com/dy/article/L7A5580005568W0A.html",
              "tags": [
                "慈善捐赠",
                "股票"
              ],
              "source": "第一财经",
              "time": "当地时间9月18日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta AI 助手 Muse 被指未经授权读取 Mac 通知，官方否认",
              "summary": "9月21日消息，编辑曝出 Meta 旗下 AI 助手 Muse 在未获授权的情况下即可读取 Mac 设备的通知窗口内容。Meta 高管回应称不会监视通知，仅在用户主动授权后采集数据，目前双方说法矛盾，事件引发对个人 AI 代理隐私边界的关注。",
              "link": "https://www.chinaz.com/ainews/31175.shtml",
              "tags": [
                "AI助手",
                "隐私"
              ],
              "source": "站长之家",
              "time": "9月21日消息"
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
              "title": "阿里千问开源图像模型 Qwen-Image-2.1，支持透明图像与 10 张参考图",
              "summary": "9月20日，阿里千问宣布开源 Qwen-Image-2.1 图像模型，兼顾生成效果、推理效率与使用成本。该模型将文生图与图像编辑统一，支持生成、编辑透明图像，可基于最多 10 张参考图进行指令式编辑，并原生支持 2K 输出。",
              "link": "https://www.ithome.com/1/004/989.htm",
              "tags": [
                "图像模型",
                "开源"
              ],
              "source": "IT之家",
              "time": "9月20日"
            },
            {
              "title": "阿里内测金融投研智能体 Qovest，面向个人投资者",
              "summary": "9月20日消息，阿里内测面向个人投资者的金融投研智能体 Qovest。该产品可调用金融数据，读取财报、公告和研究资料，生成分析与投研报告并保存到研究空间，界面还显示定时任务、股票条件检索、个股与行业研究等功能，目前处于申请内测阶段。",
              "link": "https://www.toutiao.com/article/7687178550240756266",
              "tags": [
                "金融智能体",
                "投研"
              ],
              "source": "今日头条",
              "time": "9月20日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "字节内测 ADrive 智能网盘，统一保存 Agent 生成文件",
              "summary": "9月20日消息，字节跳动内测 ADrive 智能网盘，主打统一保存 AI Agent 生成的文件。该产品面向智能体工作流场景，帮助用户在 Agent 执行任务时集中管理、归档其产出的文件，进一步完善字节在 AI 应用侧的布局。",
              "link": "https://weibo.com/1642720480/5345223271778080",
              "tags": [
                "智能网盘",
                "Agent"
              ],
              "source": "微博",
              "time": "9月20日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": []
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯混元发布 WebCraftBench，用真实交互测试 AI 生成网页",
              "summary": "9月20日，腾讯混元发布网页生成评测基准 WebCraftBench，主打用真实交互而非静态指标来测试 AI 生成网页的能力。该基准评估模型在真实用户交互场景下生成网页的质量与可用性，为网页类智能体的能力对比提供新参照。",
              "link": "https://www.toutiao.com/article/7687540407055483392",
              "tags": [
                "评测基准",
                "网页生成"
              ],
              "source": "今日头条",
              "time": "9月20日"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米 18 Pro 系列官宣 9 月 23 日发布，卢伟冰称价格会上涨",
              "summary": "9月20日，小米宣布 18 Pro 系列将于 9 月 23 日发布。针对涨价传闻，小米集团合伙人、手机部总裁、品牌总经理卢伟冰回应称“是会涨，但相信大家会觉得合理”，引发外界对旗舰手机定价策略与 AI 卖点溢价的关注。",
              "link": "https://news.qq.com/rain/a/20260920A0DBII00",
              "tags": [
                "小米18 Pro",
                "旗舰手机"
              ],
              "source": "腾讯新闻",
              "time": "9月20日"
            },
            {
              "title": "卢伟冰：真正意义上的 AI 手机离走进生活还有不少距离",
              "summary": "9月20日，小米集团合伙人、手机部总裁卢伟冰发文详细介绍小米 18 Pro 系列升级点。他提到，近年来全行业都在谈 AI 手机，但目前看，真正意义上的 AI 手机距离走进生活还有不少距离，还需要整个 AI 和手机行业的共同努力。",
              "link": "https://news.qq.com/rain/a/20260920A063F900",
              "tags": [
                "AI手机",
                "观点"
              ],
              "source": "腾讯新闻",
              "time": "9月20日"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱 MaaS 平台将上线数据内容不留存机制",
              "summary": "9月20日晚间，智谱 MaaS 平台宣布近期将上线“数据内容不留存”功能，为企业和开发者用户提供更严格的数据隐私保护。生效后平台不会对用户输入输出做静态存储，数据仅用于当次模型调用；但 Batch API、File API 及依法留存情形不在覆盖范围内。",
              "link": "http://www.zqrb.cn/gscy/qiyexinxi/2026-09-21/A1789920310001.html",
              "tags": [
                "数据隐私",
                "MaaS"
              ],
              "source": "证券日报",
              "time": "9月20日"
            },
            {
              "title": "智谱回应数据隐私争议：ZCode 正式开源并开展安全审计",
              "summary": "9月21日，智谱宣布旗下 AI 编程工具 ZCode 正式开源，回应此前“静默上传代码”争议。智谱已邀请中国信息通信研究院与绿盟科技开展安全审计，确认涉事 OSS 存储桶已删除至云端零数据，v3.14.0 客户端已移除 Repo Wiki 功能，此后将每月公布代码安全审计报告。",
              "link": "https://www.thepaper.cn/newsDetail_forward_34111815",
              "tags": [
                "开源",
                "安全审计"
              ],
              "source": "澎湃新闻",
              "time": "9月21日"
            }
          ]
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
              "title": "长鑫存储",
              "news": [
                {
                  "title": "长鑫存储第五代 DRAM 技术平台正式量产",
                  "summary": "9月20日，长鑫存储在世界制造业大会上正式宣布第五代 DRAM 技术平台实现量产，同步展出两款基于 G5 平台的 LPDDR5X 量产产品，单颗容量均为 24Gb，较上一代同类型产品提升 50%，进一步缩小与海外头部厂商在先进存储上的差距。",
                  "link": "https://www.ithome.com/1/004/720.htm",
                  "tags": [
                    "DRAM",
                    "存储芯片"
                  ],
                  "source": "IT之家",
                  "time": "9月20日"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "苹果 A20 Pro 芯片端侧 AI 实测：可本地跑 270 亿参数模型",
                  "summary": "9月20日消息，实测显示苹果 iPhone 18 Pro 搭载的 A20 Pro 芯片可在端侧本地运行 270 亿参数的大模型，速度较 iPhone 17 Pro 翻倍。该机型配备 12GB 96 位 LPDDR5X 内存，内存带宽达 115GB/s，为端侧大模型推理提供更强算力支持。",
                  "link": "https://www.163.com/dy/article/L79Q9KOO0511BLFD.html",
                  "tags": [
                    "端侧AI",
                    "A20 Pro"
                  ],
                  "source": "网易",
                  "time": "9月20日消息"
                },
                {
                  "title": "苹果智能家居屏 J490 最快下月发布，围绕 Siri AI 打造",
                  "summary": "9月20日消息，据报道苹果代号 J490 的智能家居屏幕最快将于下个月发布，设备采用接近方形的屏幕，提供立式与壁挂两种版本，外观类似被切掉一半的 HomePod mini。该设备将搭载一套围绕 Siri AI 打造的新操作系统，目前正在苹果员工家庭中广泛测试。",
                  "link": "https://news.qq.com/rain/a/20260920A0DG1A00",
                  "tags": [
                    "智能家居",
                    "Siri"
                  ],
                  "source": "腾讯新闻",
                  "time": "9月20日消息"
                }
              ]
            },
            {
              "title": "阶跃星辰",
              "news": [
                {
                  "title": "阶跃发布 Step 5 Preview：600B 参数，10 月 15 日开源权重",
                  "summary": "9月20日，阶跃星辰发布旗舰基础模型 Step 5 Preview，采用稀疏混合专家架构，总参数量 600B、单 token 激活 27B，支持 100 万 token 上下文及文本与视觉输入。该模型在 Artificial Analysis 智能指数上得 44 分，开源权重将于 10 月 15 日开放。",
                  "link": "https://www.ithome.com/1/004/705.htm",
                  "tags": [
                    "大模型",
                    "开源"
                  ],
                  "source": "IT之家",
                  "time": "9月20日"
                }
              ]
            },
            {
              "title": "B站",
              "news": [
                {
                  "title": "B 站上线 AI 无限竞技场测评榜，GPT-6 Astra 现居榜首",
                  "summary": "9月20日，B 站宣布上线「AI 无限竞技场」大模型测评榜，号称“全球百大模型同场竞技”。首轮榜单显示 GPT-6 Astra 暂居榜首，前五名中国产大模型占三席；测评由 UP 主自主命题还原真实场景表现，排名实时更新，面向全站 UP 主开放报名。",
                  "link": "https://news.qq.com/rain/a/20260920A07MWT00",
                  "tags": [
                    "模型测评",
                    "排行榜"
                  ],
                  "source": "腾讯新闻",
                  "time": "9月20日"
                }
              ]
            },
            {
              "title": "剪映",
              "news": [
                {
                  "title": "剪映发布 Hub 及 AI 助手「小映」",
                  "summary": "9月20日，剪映发布内容创作平台 Hub 及 AI 助手「小映」，面向创作者提供智能辅助能力。同时推出面向模板作者的 AI 助手及「剪映创作合伙人」计划，进一步强化 AI 在视频创作工作流中的落地。",
                  "link": "https://www.stdaily.com/web/gdxw/2026-09/20/content_584720.html",
                  "tags": [
                    "视频创作",
                    "AI助手"
                  ],
                  "source": "科技日报",
                  "time": "9月20日"
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
              "title": "启元机器人",
              "news": [
                {
                  "title": "启元 Q1 与 T1 人形机器人开售，19999 元起",
                  "summary": "9月20日，上纬新材旗下启元机器人在新品发布会上宣布启元 Q1、T1 两款人形机器人正式开售，售价均为 19999 元，探索版 26999 元、T1 Pro 更高，10 月 1 日起按订单顺序发货。产品首发接入腾讯 WorkBuddy，支持外壳随心改换与人形四足切换。",
                  "link": "https://www.163.com/dy/article/L7AC2E0005199NPP.html",
                  "tags": [
                    "人形机器人",
                    "开售"
                  ],
                  "source": "网易",
                  "time": "9月20日"
                }
              ]
            },
            {
              "title": "法拉第未来",
              "news": [
                {
                  "title": "法拉第未来一口气发布九款配置 EAI 机器人，最贵超 92 万元",
                  "summary": "9月20日消息，贾跃亭旗下的法拉第未来发布五大型号共九款配置的 EAI 机器人新品，同时推出四套行业生产力解决方案，目前新品已启动销售与交付，最贵版本折合人民币超 92 万元，标志着法拉第未来正式进军具身智能赛道。",
                  "link": "https://www.toutiao.com/article/7687635435320803855/",
                  "tags": [
                    "人形机器人",
                    "EAI"
                  ],
                  "source": "今日头条",
                  "time": "9月20日消息"
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
          "cards": [
            {
              "title": "硅基流动",
              "news": [
                {
                  "title": "硅基流动完成 B+ 轮二期和 C 轮融资，年内累计近 29 亿元",
                  "summary": "9月20日消息，硅基流动宣布完成 B+ 轮二期和 C 轮融资，至此 2026 年度累计股权融资额近 29 亿元。参与投资方包括中国互联网投资基金、国新基金、中国移动链长基金、中国东方资产等，公司仍按港交所 18C 规则申请上市。",
                  "link": "https://jnzstatic.cs.com.cn/zzb/htmlInfo/133719.html",
                  "tags": [
                    "融资",
                    "AI基础设施"
                  ],
                  "source": "中国证券报",
                  "time": "9月20日消息"
                }
              ]
            },
            {
              "title": "瑞银",
              "news": [
                {
                  "title": "瑞银：全球 AI 资本支出 2027 年将升至 1.4 万亿美元",
                  "summary": "9月20日消息，瑞银预计 2026 年全球人工智能资本开支将接近 1 万亿美元，2027 年进一步攀升至约 1.4 万亿美元，而增长背后的最主要原因是内存成本大幅上涨，内存相关开支在其中贡献显著增量。",
                  "link": "https://finance.sina.com.cn/stock/bxjj/2026-09-20/doc-inismzve6776375.shtml",
                  "tags": [
                    "资本支出",
                    "内存"
                  ],
                  "source": "新浪财经",
                  "time": "9月20日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "特朗普",
              "news": [
                {
                  "title": "特朗普计划组建「人工智能部队」，称 AI 或占美国 GDP 的 25%",
                  "summary": "当地时间9月19日，美国总统特朗普在社交媒体发文称，将组建一支“人工智能部队”。他称人工智能代表下一场工业革命或互联网浪潮，其规模和影响力将更大，甚至可能占到美国国内生产总值的 25%。",
                  "link": "https://www.huanqiu.com/article/4THWgUQJ5Jy",
                  "tags": [
                    "AI政策",
                    "美国"
                  ],
                  "source": "环球网",
                  "time": "当地时间9月19日"
                },
                {
                  "title": "特朗普要给「人工智能」改名",
                  "summary": "9月20日消息，特朗普再度就 AI 议题发声，提出要给“人工智能”改名。此举延续其近期围绕 AI 的系列表态，在行业内外引发对 AI 话语权与政策导向的讨论。",
                  "link": "https://news.qq.com/rain/a/20260920A09ENR00",
                  "tags": [
                    "AI政策",
                    "改名"
                  ],
                  "source": "腾讯新闻",
                  "time": "9月20日消息"
                }
              ]
            },
            {
              "title": "FBI",
              "news": [
                {
                  "title": "FBI 局长称该局 AI 使用量增长 605%，称曾拦截多起枪击案",
                  "summary": "9月20日，美国联邦调查局局长卡什·帕特尔在接受福克斯新闻采访时表示，在其推动下 FBI 对人工智能技术的使用量增长了 605%。他称 AI 可用于筛选和分类数据，曾帮助调查人员跟进线索，阻止北卡罗来纳州及另外六个州发生枪击事件，但未解释该统计口径。",
                  "link": "https://tech.ifeng.com/c/8wa3DEN2UWD",
                  "tags": [
                    "AI应用",
                    "执法"
                  ],
                  "source": "凤凰网科技",
                  "time": "9月20日"
                }
              ]
            },
            {
              "title": "MLCC涨价",
              "news": [
                {
                  "title": "「电子工业大米」MLCC 价格飙涨，AI 服务器需求是主因",
                  "summary": "9月20日消息，多层陶瓷电容器（MLCC）被称为“电子工业大米”，小到手机家电、大到 AI 服务器与新能源汽车都离不开。受 AI 服务器等需求拉动，MLCC 价格近期大幅飙涨，成为 AI 算力产业链上游成本抬升的一个信号。",
                  "link": "https://finance.sina.cn/2026-09-20/detail-inisnwyp1283355.d.html",
                  "tags": [
                    "MLCC",
                    "AI服务器"
                  ],
                  "source": "新浪财经",
                  "time": "9月20日消息"
                }
              ]
            },
            {
              "title": "DNA分子计算机",
              "news": [
                {
                  "title": "最复杂最快的 DNA 分子计算机诞生，可实现 100 比特运算",
                  "summary": "9月20日消息，据最新一期《自然》杂志报道，爱尔兰梅努斯大学研究人员研制出一种新型 DNA 分子计算机，可利用 DNA 分子相互作用完成加法、乘法和除法等数学运算。这是目前已报道的最复杂、速度最快的分子计算机，已实现 100 比特、连续 25 次不同运算。",
                  "link": "https://www.huanqiu.com/article/4THmymMgS91",
                  "tags": [
                    "分子计算",
                    "前沿研究"
                  ],
                  "source": "环球网",
                  "time": "9月20日消息"
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
          "date": "2026-09-21",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "15.8T tokens",
              "change": "↑219%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "14.1T tokens",
              "change": "↑18%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "12.5T tokens",
              "change": "↑26%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "9.72T tokens",
              "change": "↑47%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "9.44T tokens",
              "change": "↑18%"
            },
            {
              "model": "MiMo-V2.5 (xiaomi)",
              "score": "7.07T tokens",
              "change": "↑9%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "4.78T tokens",
              "change": "↑26%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "4.49T tokens",
              "change": "↑26%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.77T tokens",
              "change": "↑13%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3T tokens",
              "change": "↑19%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.2T tokens",
              "change": "↑11%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.19T tokens",
              "change": "↑14%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "2.1T tokens",
              "change": "↑28%"
            },
            {
              "model": "GPT-6 Astra (openai)",
              "score": "1.75T tokens",
              "change": "↑142%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.67T tokens",
              "change": "↑4%"
            },
            {
              "model": "Solar Pro 4 (upstage)",
              "score": "1.64T tokens",
              "change": "↑4%"
            },
            {
              "model": "Claude Sonnet 5 (anthropic)",
              "score": "1.52T tokens",
              "change": "↑11%"
            },
            {
              "model": "MiniMax M3 (minimax)",
              "score": "1.49T tokens",
              "change": "↑2%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.45T tokens",
              "change": "↑1%"
            },
            {
              "model": "Laguna S 2.1 (free) (poolside)",
              "score": "1.19T tokens",
              "change": "↑5%"
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
