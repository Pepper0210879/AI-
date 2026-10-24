const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-21",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "ChatGPT上线对话锁，支持PIN与生物识别",
              "summary": "OpenAI为ChatGPT推出Locked Chats对话锁功能，用户可用四位PIN或Face ID、Touch ID等生物识别方式锁定私密对话，锁定内容从常规历史、置顶与搜索中隐藏但仍会保留。该功能覆盖Free至Enterprise及Edu用户，医疗版暂不支持，忘记PIN后重置将永久删除锁定对话。",
              "link": "https://news.qq.com/rain/a/20261021A0C7IO00",
              "tags": [
                "隐私保护",
                "对话锁定",
                "生物识别"
              ],
              "source": "三易生活",
              "time": "10月21日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic上半年净亏807亿美元",
              "summary": "招股书草案显示，Anthropic今年上半财年净亏损807亿美元，其中约720亿美元来自可转换票据等工具价值变动的会计计提；同期算力与基础设施支出近90亿美元，约为上年同期的四倍。公司未来数年用于购买算力的潜在支出可能达7500亿美元。",
              "link": "https://stock.jrj.com.cn/2026/10/21135058805382.shtml",
              "tags": [
                "财报",
                "算力",
                "IPO"
              ],
              "source": "金融界",
              "time": "10月21日消息"
            },
            {
              "title": "施密特被曝持有Anthropic约1%股份",
              "summary": "据知情人士透露，谷歌前首席执行官埃里克·施密特持有AI初创公司Anthropic约1%的股份，其曾在A轮融资中投入数千万美元。若Anthropic成功IPO，施密特有望获得可观回报，此前有投资者讨论的估值约1.5万亿美元，低于此前约2万亿美元的预期。",
              "link": "https://news.qq.com/rain/a/20261020A04HKM00",
              "tags": [
                "股权",
                "IPO",
                "估值"
              ],
              "source": "腾讯新闻",
              "time": "10月20日消息"
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
              "title": "马斯克称SpaceX与特斯拉研究合并",
              "summary": "当地时间10月20日，马斯克在SpaceX财报电话会上透露，SpaceX与特斯拉均已成立由独立董事组成的特别委员会，评估两家公司合并的可能性。他称合并有诸多好处，在开发超级智能软件方面合作将大有裨益；若落地将成为史上规模最大的企业合并交易。",
              "link": "https://finance.eastmoney.com/a/202610213902826024.html",
              "tags": [
                "合并",
                "超级智能",
                "企业并购"
              ],
              "source": "东方财富",
              "time": "当地时间10月20日"
            },
            {
              "title": "SpaceX三季度净利44亿美元，AI成最大收入",
              "summary": "SpaceX公布上市后首次季度盈利：三季度营收146亿美元，同比增长161%，净利润44亿美元，上年同期为亏损11亿美元。其中AI业务营收增至75.6亿美元，接近上年同期的10倍，成为最大收入来源，主要来自向Anthropic、谷歌等出租算力。",
              "link": "https://news.qq.com/rain/a/20261021A067CO00",
              "tags": [
                "财报",
                "AI算力",
                "盈利"
              ],
              "source": "腾讯新闻",
              "time": "当地时间10月20日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋：AI发展不能急刹车但要装安全带",
              "summary": "英伟达首席执行官黄仁勋在伦敦表示，反对以「急刹车」或严厉监管来限制AI发展，主张建立「安全带」，通过更智能的安全标准、监测机制和事故防范措施约束AI。其表态为当前AI监管之争提供了松紧结合的立场。",
              "link": "https://news.qq.com/rain/a/20261020A05G2H00",
              "tags": [
                "AI监管",
                "行业观点"
              ],
              "source": "腾讯新闻",
              "time": "10月20日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta助手Muse下载量突破1000万",
              "summary": "据Sensor Tower数据，Meta旗下AI助手Muse自9月推出以来累计下载量达1090万次，其中美国地区约1020万次，上线40天即达成里程碑。此前达成该成绩的应用仅11款，数据显示Muse的用户留存表现优于ChatGPT、Claude、Grok等AI竞品。",
              "link": "https://finance.eastmoney.com/a/202610223903324480.html",
              "tags": [
                "AI助手",
                "下载量",
                "用户增长"
              ],
              "source": "东方财富",
              "time": "10月22日消息"
            }
          ]
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
              "title": "姚顺雨立下硬核Flag：腾讯混元要做世界第一",
              "summary": "据晚点LatePost报道，姚顺雨加入腾讯一年后，混元团队已扩张至近2000人。姚顺雨曾提出在成为第一之前不发技术报告、目标直指世界第一；有成员回忆其称可通过竞争把DeepSeek「卷到加班」，Hy 4 Preview发布后还曾给研究员放一周假。",
              "link": "https://news.qq.com/rain/a/20261021A04HDF00",
              "tags": [
                "团队扩张",
                "人才",
                "大模型"
              ],
              "source": "快科技",
              "time": "10月21日消息"
            },
            {
              "title": "腾讯内测AI学习社区「懂了鸭」",
              "summary": "腾讯正在内测AI趣味学习社区「懂了鸭」，用户可用AI将想法制作成绘本、动画、动态课件和知识游戏并分享。内容覆盖学前至K12阶段，输入主题后Agent会拆解创作步骤并支持实时预览，提供网页与小程序两种形态。",
              "link": "https://news.qq.com/rain/a/20261019A05MBW00",
              "tags": [
                "AI教育",
                "内容创作",
                "Agent"
              ],
              "source": "腾讯新闻",
              "time": "10月19日消息"
            },
            {
              "title": "腾讯元宝AI搜索通过腾讯云对外开放",
              "summary": "腾讯宣布元宝搜索正式通过腾讯云对外开放，面向大模型和Agent提供联网搜索能力，开发者可通过API、MCP和Skill三种方式接入。该服务已形成千亿级索引，日均调用量达数亿次，支撑WorkBuddy、ima等50多个腾讯业务。",
              "link": "https://news.qq.com/rain/a/20261021A0C58300",
              "tags": [
                "搜索",
                "API",
                "Agent"
              ],
              "source": "腾讯新闻",
              "time": "10月20日"
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
          "news": [
            {
              "title": "华为引望宁德时代换电车型2027年上市",
              "summary": "据媒体报道，华为引望与宁德时代、时代电服的换电合作进入车型开发阶段，首批涉及五款新车，计划2027年上市，首款巧克力换电车型为东风与华为合作的奕境品牌。三方计划让华为乾崑智驾与巧克力换电网络协同，打通车辆、换电站与云端数据服务。",
              "link": "https://news.qq.com/rain/a/20261021V0738S00",
              "tags": [
                "换电",
                "智能驾驶",
                "新能源"
              ],
              "source": "腾讯新闻",
              "time": "10月20日"
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
              "title": "三星",
              "news": [
                {
                  "title": "三星研发24小时工作的机器人",
                  "summary": "三星电子机器人业务RX业务推进室正在首尔R&D园区验证可在产业现场24小时运转的机器人，用于搬运货物等制造、物流重复作业，同时学习周边环境和作业方式。三星正以多个候选产品为对象，研究是否参展CES。",
                  "link": "https://news.qq.com/rain/a/20261020A0BP1S00",
                  "tags": [
                    "机器人",
                    "制造业",
                    "具身智能"
                  ],
                  "source": "鞭牛士",
                  "time": "10月20日消息"
                }
              ]
            },
            {
              "title": "甲骨文",
              "news": [
                {
                  "title": "甲骨文与阿斯利康合作探索AI医疗",
                  "summary": "甲骨文与阿斯利康宣布达成非约束性协议，计划利用AI和真实世界数据识别符合临床试验条件的患者、加快医学证据生成，并融入日常诊疗流程。双方初步考虑在肿瘤、心血管、肾脏及代谢疾病、呼吸免疫和罕见病等领域探索应用。",
                  "link": "https://news.qq.com/rain/a/20261020A073W200",
                  "tags": [
                    "AI医疗",
                    "临床试验",
                    "合作"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月20日消息"
                }
              ]
            },
            {
              "title": "高通",
              "news": [
                {
                  "title": "外媒曝高通启动全球绩效裁员",
                  "summary": "据路透社报道，高通CEO安蒙在内部备忘录中表示，公司将在年度员工评估后开展以绩效为重点的全球裁员，相关通知11月起发出。随着业务向AI数据中心等非手机市场拓展，高通预计2027财年芯片销售大部分将来自智能手机以外业务。",
                  "link": "https://news.qq.com/rain/a/20261020A0EO0L00",
                  "tags": [
                    "裁员",
                    "AI芯片",
                    "组织调整"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月20日消息"
                }
              ]
            },
            {
              "title": "记忆张量",
              "news": [
                {
                  "title": "记忆张量开源记忆原生模型MemT 1.0",
                  "summary": "记忆张量发布并开源记忆原生基础模型MemT 1.0系列，含Flash（288B）与Nano（36B）两款。模型在Transformer中加入原生记忆模块，让记忆注意力与原有注意力并行运行，在11项记忆基准上平均得分分别为50.6和47.0。",
                  "link": "https://news.qq.com/rain/a/20261020A09TVL00",
                  "tags": [
                    "开源",
                    "记忆模型",
                    "大模型"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月20日消息"
                }
              ]
            },
            {
              "title": "今日宜休",
              "news": [
                {
                  "title": "王腾旗下ISHO Ring智能戒指亮相",
                  "summary": "王腾创立的今日宜休公布首款硬件ISHO Ring智能戒指外观，提供金、黑、银三款配色，采用航空级钛合金与蓝宝石玻璃。品牌首场AI睡眠科技生态产品发布会定于10月29日举行，产品将把感知、分析、行动建议与设备联动串联。",
                  "link": "https://news.qq.com/rain/a/20261021A06FVL00",
                  "tags": [
                    "智能戒指",
                    "睡眠健康",
                    "可穿戴"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月21日消息"
                }
              ]
            },
            {
              "title": "Elice",
              "news": [
                {
                  "title": "韩国数据中心公司Elice上市首日大跌32%",
                  "summary": "韩国数据中心基础设施公司Elice上市首日股价暴跌，盘中一度跌38%，收盘跌幅收窄至32%，为韩国大型IPO史上最差首日表现。该公司此前通过IPO融资2010亿韩元，散户认购倍数达400倍，凸显投资者对AI巨额投资的担忧。",
                  "link": "https://news.qq.com/rain/a/20261020A09G3X00",
                  "tags": [
                    "数据中心",
                    "IPO",
                    "股价"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月20日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "工信部车灯新规",
              "news": [
                {
                  "title": "工信部拟规定：未达L3级禁装智驾小蓝灯",
                  "summary": "10月20日，工信部就《汽车及挂车外部照明和光信号装置的安装要求》公开征求意见，明确不具备L3级及以上自动驾驶系统的车辆禁止安装ADS标志灯，标志灯专用光色为蓝绿色，L2组合驾驶辅助与L3有条件自动驾驶由此作出区分。",
                  "link": "https://ep.ycwb.com/epaper/ycwb/html/2026-10/21/content_2977_769531.htm",
                  "tags": [
                    "自动驾驶",
                    "政策",
                    "标准"
                  ],
                  "source": "羊城晚报",
                  "time": "10月20日"
                }
              ]
            },
            {
              "title": "Waymo",
              "news": [
                {
                  "title": "Waymo将在马德里测试自动驾驶",
                  "summary": "Waymo宣布进入西班牙，首先在马德里自治区开展自动驾驶出行服务前期准备，目标2027年接待首批乘客。未来几天其捷豹I-PACE电动车将上街，初期由驾驶员手动驾驶，随后由本地自动驾驶专家驾驶开展技术验证。",
                  "link": "https://news.qq.com/rain/a/20261021A08TVH00",
                  "tags": [
                    "自动驾驶",
                    "出海",
                    "Robotaxi"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月20日"
                }
              ]
            },
            {
              "title": "Momenta",
              "news": [
                {
                  "title": "Momenta曹旭东：2028年迎L4规模化拐点",
                  "summary": "在2026物理AI与世界模型大会上，Momenta CEO曹旭东指出世界模型正加速智驾摩尔定律，预判2028年成为L4规模化落地的重要拐点。他概括智驾安全性与性能每两年提升十倍，并认为世界模型、Data Scaling与Model Scaling是提速关键。",
                  "link": "https://news.qq.com/rain/a/20261020A0BJLU00",
                  "tags": [
                    "世界模型",
                    "L4",
                    "智能驾驶"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月20日消息"
                }
              ]
            },
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉与支付宝合作车载助手智慧停车",
                  "summary": "10月20日，特斯拉与支付宝正式签署车载助手项目合作协议，特斯拉中国车机系统计划上线支付宝车载助手智慧停车服务，车主可通过后续软件升级在车机屏幕上完成停车费快捷安全支付，更多车载生活场景便利化功能正在开发。",
                  "link": "https://news.qq.com/rain/a/20261021V056R300",
                  "tags": [
                    "车载助手",
                    "支付",
                    "智慧停车"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月20日"
                }
              ]
            },
            {
              "title": "新石器",
              "news": [
                {
                  "title": "无人配送车新石器完成近4亿美元E轮融资",
                  "summary": "自动驾驶科技公司新石器完成近4亿美元E轮融资，由博裕投资与某国家级基金联合领投，阿里巴巴、纪源资本、淡马锡等机构参与，创造今年国内自动驾驶领域最大单笔融资纪录。新石器累计融资额已突破百亿元，居无人配送车行业第一。",
                  "link": "https://finance.eastmoney.com/a/202610213902769687.html",
                  "tags": [
                    "无人配送",
                    "融资",
                    "自动驾驶"
                  ],
                  "source": "东方财富",
                  "time": "10月21日消息"
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
              "title": "Today AI",
              "news": [
                {
                  "title": "Personal AI公司Today AI完成超2亿美元融资",
                  "summary": "Personal AI公司Today AI完成超2亿美元融资，投资方包括IDG资本、腾讯、五源资本、蚂蚁集团、红杉中国、传音控股等。Today AI致力于打造个性化的AI系统，提供「更懂你」的AI助理，公司目前持续招募各方向人才。",
                  "link": "https://www.stcn.com/article/detail/4233960.html",
                  "tags": [
                    "融资",
                    "AI助理",
                    "个人AI"
                  ],
                  "source": "证券时报",
                  "time": "10月22日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "CleanYourTV",
              "news": [
                {
                  "title": "用户借助Claude Code清除智能电视广告",
                  "summary": "部分开发者与普通用户开始借助Claude Code等AI工具清理智能电视中的广告和预装软件、禁用追踪功能。开发者Gathin T.发起的CleanYourTV项目通过Wi-Fi连接电视禁用了25个原生软件包并生成新启动器，数千用户尝试类似改造。",
                  "link": "https://news.qq.com/rain/a/20261020A0FC3I00",
                  "tags": [
                    "Claude Code",
                    "AI编程",
                    "智能电视"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月20日消息"
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
          "date": "2026-10-21",
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
