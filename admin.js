const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-31",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 终止向 Cursor 提供模型服务，马斯克回应\"毫不在意\"",
              "summary": "当地时间 8 月 28 日，OpenAI 宣布计划停止向 SpaceX 旗下 AI 编程平台 Cursor 提供模型服务，拟定终止日期为 2026 年 11 月 12 日，理由是马斯克旗下公司曾出现违约行为、无法信任其合规使用。马斯克在 X 平台回应\"毫不在意\"，并指责 OpenAI CEO 阿尔特曼和总裁布罗克曼\"偷走了一个开源非营利组织\"。",
              "link": "https://www.jiemian.com/article/15029229.html",
              "tags": [
                "AI编程",
                "市场竞争"
              ],
              "source": "界面新闻",
              "time": "当地时间8月28日"
            },
            {
              "title": "Codex 修复 8 类额度异常，付费用户同等额度可多用 10%~50%",
              "summary": "8 月 30 日消息，OpenAI 修复 Codex 中 8 类导致 Token 异常消耗的漏洞，并为 Codex 和 ChatGPT Work 付费用户重置使用额度。据 Codex 负责人 Tibo 透露，修复后相同额度可多支撑 10%~50% 的使用量，同时建立异常监测告警机制。",
              "link": "https://www.theblockbeats.info/flash/364264",
              "tags": [
                "Codex",
                "修复"
              ],
              "source": "BlockBeats",
              "time": "8月30日消息"
            },
            {
              "title": "OpenAI Astra 首批演示样本流出，1 次交互生成类 GTA2 游戏",
              "summary": "8 月 30 日消息，科技媒体 testingcatalog 8 月 29 日报道，OpenAI 正加快 Astra 模型发布进程，新增 mozaik-alpha-fdm 测试阶段扩大内测范围。首批演示样本流出，Astra 可 1 次交互生成类 GTA2 游戏，有媒体预估其为 GPT-6 模型。",
              "link": "https://news.qq.com/rain/a/20260830A06IFQ00",
              "tags": [
                "GPT-6",
                "多模态"
              ],
              "source": "腾讯新闻",
              "time": "8月30日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Claude 被曝大规模盗号，Anthropic 紧急切断支付权限",
              "summary": "8 月 31 日消息，Anthropic 正调查大规模 Claude 账号被盗事件，紧急切断受影响用户支付权限，并在邮件中警告用户电脑很可能已感染通用信息窃取恶意软件，勿随意下载软件。分享邮件的 Reddit 用户确认其下载过盗版游戏。",
              "link": "https://m.ithome.com/html/996359.htm",
              "tags": [
                "安全",
                "账号"
              ],
              "source": "IT之家",
              "time": "8月31日消息"
            },
            {
              "title": "Claude Code 标准周限额 9 月 14 日起永久上调 25%",
              "summary": "8 月 30 日消息，Anthropic 开发者账号 @ClaudeDevs 在 X 平台宣布，自 9 月 14 日起，Pro、Max、Team 及按席位计费企业版用户的 Claude Code 标准周限额永久上调 25%。",
              "link": "https://tech.ifeng.com/c/8w0WxoIbqlZ",
              "tags": [
                "Claude Code",
                "额度"
              ],
              "source": "凤凰科技",
              "time": "8月30日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": []
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "Grok Bot 上线使用指南库，支持复制和分享 Bot 配置",
              "summary": "8 月 31 日消息，xAI 为 Grok Bot 上线使用指南库，支持通过公开链接预览并复制分享 Bot 配置，内容包括 Bot 身份、描述、技能和例行程序（不含账户与对话历史），方便团队快速复用数字员工。",
              "link": "https://docs.x.ai/grok-bot/overview",
              "tags": [
                "Grok Bot",
                "指南"
              ],
              "source": "xAI 官方文档",
              "time": "8月31日消息"
            },
            {
              "title": "马斯克确认 SpaceX 自产燃气轮机叶片，突破 AI 供电瓶颈",
              "summary": "8 月 30 日，马斯克在 X 平台发文，确认 SpaceX 正筹划在美国得克萨斯州巴斯特罗普建设燃气轮机动叶与静叶铸造厂。全球仅 3 家能铸此类叶片，自产将使投运时间提前 18 个月，缓解 AI 数据中心供电瓶颈。",
              "link": "https://m.21jingji.com/article/20260831/herald/d2355f7a9d5a1fefca575135d989918c.html",
              "tags": [
                "AI基础设施",
                "能源"
              ],
              "source": "21世纪经济报道",
              "time": "8月30日"
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
          "news": []
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "消息称字节豆包大模型 2.2 推迟发布，原计划 8 月推出",
              "summary": "8 月 30 日消息，消息称字节跳动原计划于 8 月推出的豆包大模型 2.2 将推迟面世。",
              "link": "https://tech.ifeng.com/c/8w1IOuKEoEg",
              "tags": [
                "大模型",
                "发布"
              ],
              "source": "凤凰科技",
              "time": "8月30日消息"
            }
          ]
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
          "news": [
            {
              "title": "小米 18 Pro 或首发防窥屏，支付等 4 类敏感场景自动开启",
              "summary": "8 月 30 日消息，博主 @kacskrz 8 月 28 日在 X 平台分享视频和图片，从国际版 ROM 固件中发现小米防窥屏功能，可按应用和敏感页面自动启用，支付、转账等 4 类高频敏感场景自动开启，小米 18 Pro 系列有望首发。",
              "link": "https://www.163.com/dy/article/L5ISNPNH0511B8LM.html",
              "tags": [
                "隐私",
                "屏幕"
              ],
              "source": "网易科技",
              "time": "8月30日消息"
            }
          ]
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
          "news": [
            {
              "title": "华为云联合瑞金医院发布 RuiPath 2.0，覆盖 19 个常见癌种",
              "summary": "8 月 30 日，华为云联合瑞金医院发布瑞智病理大模型 RuiPath 2.0，参数规模 7B，覆盖 19 个常见癌种，诊断任务增至 205 项，可覆盖病理医生 90% 以上的日常诊断场景，在有无淋巴瘤诊断中准确率达 96.48%。",
              "link": "https://www.jiemian.com/article/15030053.html",
              "tags": [
                "AI医疗",
                "病理"
              ],
              "source": "界面新闻",
              "time": "8月30日"
            }
          ]
        }
      ]
    },
    "other": {
      "categories": [
        {
          "name": "其他厂商",
          "cards": [
            {
              "title": "长鑫",
              "news": [
                {
                  "title": "长鑫 LPDDR6 全球首发量产，小米 18 Fold 首批搭载",
                  "summary": "8 月 29 日消息，长鑫科技宣布新一代低功耗内存 LPDDR6 实现量产并全球首发商用，首批搭载于小米 18 Fold 折叠旗舰手机，打破三星、SK 海力士长期垄断的先发局面。LPDDR6 峰值速率达 12800Mbps，芯片最高容量 16GB，雷军转发称\"非常了不起\"。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-08-29/doc-inipyrwr5446696.shtml",
                  "tags": [
                    "存储",
                    "国产芯片"
                  ],
                  "source": "新浪财经",
                  "time": "8月29日消息"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "苹果就 Siri 跳票支付 2.5 亿美元和解，单台最高赔 95 美元",
                  "summary": "8 月 29 日消息，苹果同意支付 2.5 亿美元（约合人民币 17 亿元）就 Siri 虚假宣传集体诉讼达成和解，符合条件的美国 iPhone 用户单台设备最高可获 95 美元赔偿。此案源于苹果将 Apple Intelligence 加持的个性化 Siri 作为 iPhone 15/16 卖点后部分功能延期上线。",
                  "link": "https://finance.sina.cn/2026-08-29/detail-inipxyyx5520206.d.html",
                  "tags": [
                    "Siri",
                    "诉讼"
                  ],
                  "source": "新浪财经",
                  "time": "8月29日消息"
                },
                {
                  "title": "Ternus 明日起接任苹果 CEO，AI 与秋季新品成首要任务",
                  "summary": "8 月 31 日消息，苹果将于 9 月 1 日完成 CEO 交接：硬件工程高级副总裁 John Ternus 接替 Tim Cook，后者转任董事会执行主席。Ternus 上任后很快要主持苹果秋季产品周期，新品包括首款折叠屏 iPhone、可识别说话者的智能显示器等，AI 成首要任务。",
                  "link": "https://news.qq.com/rain/a/20260831A03KK300",
                  "tags": [
                    "人事",
                    "苹果"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "高通",
              "news": [
                {
                  "title": "高通力推 HBC 架构商业化，邀三星与 SK 海力士合作",
                  "summary": "8 月 28 日消息，高通大力推动 HBC（高带宽缓存）架构商业化，邀请三星和 SK 海力士成为存储合作伙伴，首代产品计划明年出货，有望提升 AI 计算内存带宽、降低功耗。",
                  "link": "https://finance.sina.com.cn/stock/t/2026-08-28/doc-inipvwaa0168702.shtml",
                  "tags": [
                    "芯片",
                    "存储"
                  ],
                  "source": "新浪财经",
                  "time": "8月28日消息"
                }
              ]
            },
            {
              "title": "Tavus",
              "news": [
                {
                  "title": "Tavus 发布 Sparrow-2，语音 Agent 学会等待和识别环境声",
                  "summary": "8 月 30 日消息，Tavus 发布语音 AI 模型 Sparrow-2，让语音 Agent 学会在对话中等待、识别环境声，不再一停顿就抢话，提升语音交互自然度。",
                  "link": "https://www.theblockbeats.info/flash/364287",
                  "tags": [
                    "语音AI",
                    "Agent"
                  ],
                  "source": "BlockBeats",
                  "time": "8月30日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "小马智行",
              "news": [
                {
                  "title": "小马智行携手 FutureLink，拟在韩商业投放 200 辆 Robotaxi",
                  "summary": "8 月 31 日消息，小马智行携手 FutureLink，拟首批在韩国商业投放 200 辆 Robotaxi。两家企业去年已在首尔江南自动驾驶示范区开展技术验证，累计行驶约 8 万公里且未发生事故。",
                  "link": "https://tech.ifeng.com/c/8w27hfGqrO0",
                  "tags": [
                    "Robotaxi",
                    "出海"
                  ],
                  "source": "凤凰科技",
                  "time": "8月31日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "敏实集团",
              "news": [
                {
                  "title": "中塞合建机器人工厂投产，成欧洲首座人形机器人量产基地",
                  "summary": "8 月 30 日，位于塞尔维亚沙巴茨的中塞合建机器人工厂投产，成为欧洲首座人形机器人量产基地。工厂由敏实集团投资建设，首期投资 2000 万欧元，首台人形机器人已下线，能写书法、下棋，未来年产能最高可达 2 万台，产品面向欧洲及全球市场。",
                  "link": "https://news.china.com.cn/2026-08/30/content_118670974.shtml",
                  "tags": [
                    "人形机器人",
                    "出海"
                  ],
                  "source": "中国网",
                  "time": "8月30日"
                }
              ]
            },
            {
              "title": "法拉第未来",
              "news": [
                {
                  "title": "法拉第未来机器人中东业务启航，完成首笔订单交付",
                  "summary": "8 月 31 日消息，贾跃亭宣布法拉第未来机器人中东业务正式启航，完成中东首笔订单销售及交付，共交付 6 台机器人（2 台人形、4 台四足），团队正加紧推进更多订单落地。",
                  "link": "https://tech.ifeng.com/c/8w1wUch0J0g",
                  "tags": [
                    "机器人",
                    "中东"
                  ],
                  "source": "凤凰科技",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "Microduck",
              "news": [
                {
                  "title": "Hugging Face 机器鸭 Microduck 开售爆单，24 小时订单破 260 万美元",
                  "summary": "8 月 30 日消息，Hugging Face 旗下 Pollen Robotics 推出的 399 美元机器鸭 Microduck 开售首日订单破 260 万美元，已出现订单积压，新订单预计 4 至 6 个月后交付。",
                  "link": "https://sina.cn/news/detail/5337747751437442.html",
                  "tags": [
                    "机器人",
                    "开源"
                  ],
                  "source": "新浪新闻",
                  "time": "8月30日消息"
                }
              ]
            },
            {
              "title": "荣耀机器人",
              "news": [
                {
                  "title": "荣耀机器人\"闪电\"海外首秀，跑完马来西亚马拉松 10 公里",
                  "summary": "8 月 30 日消息，荣耀机器人「闪电」完成海外首秀，在马来西亚双子塔夜景下跑完 10 公里并刷新赛事纪录，成为当地马拉松首位机器人参赛选手。这款 169cm 高的红色机甲风机器人以速度见长，曾在 1500 米赛中打破人类世界纪录。",
                  "link": "https://k.sina.cn/article_1826017320_6cd6d02804001w8vu.html",
                  "tags": [
                    "机器人",
                    "马拉松"
                  ],
                  "source": "新浪体育",
                  "time": "8月30日消息"
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
              "title": "a16z",
              "news": [
                {
                  "title": "a16z 机器时代基金筹集 11 亿美元，投向芯片与机器人",
                  "summary": "当地时间 8 月 28 日，a16z 宣布硬件正式确立为核心方向，为旗下机器时代基金筹集 11 亿美元，将投资 AI 依赖的芯片、内存、网络、存储基础设施，以及数据中心、机器人、家用 AI 设备，近期已投资 Unconventional AI、Nexthop、Volta、Atoms 等硬件公司。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-08-30/doc-iniqacxv8360037.shtml",
                  "tags": [
                    "融资",
                    "硬件"
                  ],
                  "source": "新浪财经",
                  "time": "当地时间8月28日"
                }
              ]
            },
            {
              "title": "优地机器人",
              "news": [
                {
                  "title": "优地机器人拟全球发售 4500 万股 H 股，9 月 9 日港交所上市",
                  "summary": "8 月 31 日消息，优地机器人公告拟全球发售 4500 万股 H 股，香港发售 225 万股，发售价不超每股 19.55 港元，预期 2026 年 9 月 9 日开始在香港联交所买卖。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-08-31/doc-iniqeaqx7936430.shtml",
                  "tags": [
                    "IPO",
                    "机器人"
                  ],
                  "source": "新浪财经",
                  "time": "8月31日消息"
                }
              ]
            },
            {
              "title": "燧原科技",
              "news": [
                {
                  "title": "燧原科技科创板上市获证监会注册，9 月 1 日网上路演",
                  "summary": "8 月 30 日消息，燧原科技首次公开发行股票并在科创板上市的申请已获证监会同意注册，拟公开发行新股 4303.5173 万股，占发行后总股本 10%，将于 9 月 1 日举行网上路演。",
                  "link": "https://finance.sina.com.cn/roll/2026-08-30/doc-iniqaqpv8331373.shtml",
                  "tags": [
                    "科创板",
                    "芯片"
                  ],
                  "source": "新浪财经",
                  "time": "8月30日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "国家数据局",
              "news": [
                {
                  "title": "国家数据局：研究探索词元增值订阅、按效付费商业模式",
                  "summary": "8 月 30 日，在 2026 中国国际大数据产业博览会上，国家数据局局长刘烈宏表示，要围绕国民经济重大场景，研究探索词元增值订阅、按效付费等商业模式。会上同步发布一批数据领域政策举措，涵盖词元、数据标注、数字人才培养等领域。",
                  "link": "https://news.cnr.cn/native/gd/20260830/t20260830_527798687.shtml",
                  "tags": [
                    "数据要素",
                    "政策"
                  ],
                  "source": "央广网",
                  "time": "8月30日"
                }
              ]
            },
            {
              "title": "液冷赛道",
              "news": [
                {
                  "title": "液冷从\"可选项\"到\"必选项\"，千亿赛道加速升温",
                  "summary": "8 月 30 日消息，全球 AI 硬件功耗持续攀升，传统风冷散热瓶颈凸显，液冷产业迎来爆发增长期，多家液冷企业订单排至年底。国内首个浸没式液冷算力方舱投入运行，对硅油、合成油、再生变压器油及氟化液四种冷却液进行兼容性测试，浸没式液冷有望逐步替代传统冷板式液冷。",
                  "link": "https://www.cls.cn/detail/2438442",
                  "tags": [
                    "AI基础设施",
                    "散热"
                  ],
                  "source": "财联社",
                  "time": "8月30日消息"
                }
              ]
            },
            {
              "title": "Terminal-Bench 4.0",
              "news": [
                {
                  "title": "Terminal-Bench 4.0 发布，GLM-5.3 冲到第三超 GPT-5.6",
                  "summary": "8 月 30 日消息，Terminal-Bench 4.0 基准发布，衡量 AI Agent 在真实终端环境执行任务的能力。智谱 AI 的 GLM-5.3 排名升至第三，超过 GPT-5.6 Sol。",
                  "link": "https://kakaweb3.com/kuaixun/48904.html",
                  "tags": [
                    "基准",
                    "Agent"
                  ],
                  "source": "卡卡Web3",
                  "time": "8月30日消息"
                }
              ]
            },
            {
              "title": "AI反诈",
              "news": [
                {
                  "title": "谷歌、OpenAI、Meta 联手日本官方打击网络诈骗",
                  "summary": "8 月 30 日电，据报道，谷歌、OpenAI、Meta 正与日本官方机构和本土企业联手，打击激增的网络诈骗案件。",
                  "link": "https://www.cls.cn/detail/2468704",
                  "tags": [
                    "安全",
                    "反诈"
                  ],
                  "source": "财联社",
                  "time": "8月30日消息"
                }
              ]
            },
            {
              "title": "AI失控",
              "news": [
                {
                  "title": "报告称 2026 年已记录 1664 起 AI 失控事件，7 月环比增 93.76%",
                  "summary": "8 月 30 日消息，英国长期韧性中心 8 月 28 日发布报告，其\"失控观察站\"2026 年已记录 1664 起 AI 失控事件，7 月共记录 306 起，环比增长 93.67%，日均峰值 11.3 起。",
                  "link": "https://tech.ifeng.com/c/8w0kxrSD72i",
                  "tags": [
                    "AI安全",
                    "报告"
                  ],
                  "source": "凤凰科技",
                  "time": "8月30日消息"
                }
              ]
            },
            {
              "title": "英国5G",
              "news": [
                {
                  "title": "英国电信高管警告：5G 升级太慢或输掉 AI 竞赛",
                  "summary": "8 月 30 日消息，英国电信行业高管集体发声，警告若 5G 升级速度不加快，英国将在全球 AI 竞赛中落后。目前英国网络覆盖率落后于 G7 及欧盟多国，下载速度排名跌至全球第 70 位。",
                  "link": "https://finance.sina.cn/stock/jdts/2026-08-30/detail-iniqauvt8227822.d.html",
                  "tags": [
                    "5G",
                    "AI竞赛"
                  ],
                  "source": "新浪财经",
                  "time": "8月30日消息"
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
          "date": "2026-08-31",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Ox Alpha",
              "score": "15.7T tokens",
              "change": "+36%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.3T tokens",
              "change": "+6%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "9.14T tokens",
              "change": "+8%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "7.79T tokens",
              "change": "+59%"
            },
            {
              "model": "Hy3",
              "score": "6.66T tokens",
              "change": "+19%"
            },
            {
              "model": "GLM 5.3 Flash",
              "score": "6.16T tokens",
              "change": "—"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "5.33T tokens",
              "change": "+12%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.2T tokens",
              "change": "+5%"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "3.95T tokens",
              "change": "+120%"
            },
            {
              "model": "Hy4 preview",
              "score": "3.07T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.2",
              "score": "2.99T tokens",
              "change": "+12%"
            },
            {
              "model": "MiniMax M3 (free)",
              "score": "2.57T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "1.77T tokens",
              "change": "+4%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.7T tokens",
              "change": "+29%"
            },
            {
              "model": "Kimi K3",
              "score": "1.57T tokens",
              "change": "+19%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.52T tokens",
              "change": "+11%"
            },
            {
              "model": "Claude Opus 5",
              "score": "1.46T tokens",
              "change": "—"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.35T tokens",
              "change": "+16%"
            },
            {
              "model": "GLM 5.3",
              "score": "1.33T tokens",
              "change": "+171%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.2T tokens",
              "change": "+11%"
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
