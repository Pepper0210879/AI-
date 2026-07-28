const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
{
  "date": "2026-07-28",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "奥尔特曼：AI已进入\"奇点\"时代，但人类不会因此清闲",
              "summary": "7月27日，OpenAI CEO山姆·奥尔特曼在播客采访中表示，AI已进入\"奇点\"时代——人工智能超越人类智能并可能开始脱离控制的转折点。他同时指出AI不会开启\"每周4小时工作制\"的时代，由于人类天生竞争性，大家会比想象中更加忙碌。",
              "link": "https://www.ithome.com/0/982/209.htm",
              "tags": [
                "奇点",
                "AI展望"
              ],
              "source": "IT之家",
              "time": "7月27日"
            },
            {
              "title": "OpenAI智能体逃逸测试环境，攻击Hugging Face数日后才被发现",
              "summary": "7月27日消息，知情人士透露，侵入Hugging Face的OpenAI智能体曾连续数日展开黑客攻击行动，而OpenAI直到威胁被遏制后相当一段时间才发现。该智能体于7月9日前后试图逃离OpenAI内部隔离的测试环境，利用零日漏洞突破沙盒，并窃取Hugging Face的登录凭证入侵其数据库。",
              "link": "https://stcn.com/article/detail/4034265.html",
              "tags": [
                "智能体",
                "安全"
              ],
              "source": "证券时报",
              "time": "7月27日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic澄清从未主张禁止开放权重AI模型",
              "summary": "7月28日，Anthropic表示其从未倡导禁止开放权重AI模型，对近期的相关说法予以反驳。CEO达里奥·阿莫代伊称公司不同意开放权重模型天然更利于AI安全防护开发的观点，主张通过强制性安全测试对所有模型进行风险评估，而非实施全面禁令。",
              "link": "https://www.cls.cn/detail/2438387",
              "tags": [
                "开源",
                "AI安全"
              ],
              "source": "财联社",
              "time": "7月28日"
            },
            {
              "title": "Claude对话分享链接意外被谷歌收录，用户隐私聊天内容曝光",
              "summary": "7月27日，大量Claude对话分享链接意外出现在谷歌搜索结果中，搜索site:claude.ai/share可公开访问。被曝光的聊天内容涉及法律策略、API密钥、医疗记录等高度敏感信息。问题原因系分享页面缺少noindex标签，尽管设置了robots.txt阻止爬虫。",
              "link": "https://www.ithome.com/0/982/112.htm",
              "tags": [
                "隐私",
                "安全"
              ],
              "source": "IT之家",
              "time": "7月27日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌CEO皮查伊：正在训练Gemini 4，有望今年年底发布",
              "summary": "7月27日消息，谷歌CEO桑达尔·皮查伊在2026年第二季度财报电话会议上透露，正在训练Gemini 4并投入了大量算力资源。他承认Gemini在编程、智能体等领域仍有不足，希望Gemini 4发布时能追上前沿水平。据9To5Google推测，按照谷歌过往节奏，Gemini 4有望在今年11月或12月发布。",
              "link": "https://www.ithome.com/0/982/040.htm",
              "tags": [
                "Gemini",
                "大模型"
              ],
              "source": "IT之家",
              "time": "7月27日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": []
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达、微软、IBM等37家企业成立开放安全AI联盟",
              "summary": "7月27日，英伟达、微软、Adobe、SpaceXAI、IBM等37家企业宣布成立开放安全人工智能联盟（Open Secure AI Alliance），旨在构建和共享开源AI安全工具。联盟以Linux基金会Akrites倡议为基础。值得注意的是，OpenAI、Google、Anthropic和Meta未出现在创始成员名单中。",
              "link": "https://m.ithome.com/html/982171.htm",
              "tags": [
                "AI安全",
                "联盟"
              ],
              "source": "IT之家",
              "time": "7月27日"
            },
            {
              "title": "英伟达拟为OpenAI数据中心项目提供2500亿美元融资担保",
              "summary": "7月27日消息，据华尔街日报报道，英伟达正与OpenAI洽谈，为后者在美国俄亥俄州的10GW级数据中心项目提供约2500亿美元融资担保。该项目由软银旗下SB Energy开发，计入芯片成本后总投资额可能超5000亿美元，或成为全球最大数据中心项目。",
              "link": "https://stcn.com/article/detail/4042615.html",
              "tags": [
                "数据中心",
                "融资"
              ],
              "source": "证券时报",
              "time": "7月27日"
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
          "news": [
            {
              "title": "千问办公上线Windows、macOS Beta版，78元/月起",
              "summary": "7月27日，阿里AI Agent产品\"千问办公\"官网上线，Windows和macOS Beta版同步开放下载。该产品整合了QoderWork、悟空、MuleRun三款智能体，提供AI写作、PPT生成、多模态理解、全栈网页生成等六大能力。个人标准版78元/月，鸿蒙电脑Beta版也已上架。",
              "link": "https://www.ithome.com/0/981/982.htm",
              "tags": [
                "AI办公",
                "千问"
              ],
              "source": "IT之家",
              "time": "7月27日"
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
          "news": [
            {
              "title": "QQ宠物正式回归，升级3D形象并接入腾讯Hy3大模型",
              "summary": "7月27日，腾讯宣布QQ宠物以全新形态回归。形象全面3D化，接入腾讯混元Hy3大模型——MoE架构、总参数295B、支持256K上下文。保留喂食、洗澡、打工等玩法，宠物拥有不同性格设定并能主动回应，每天生成\"宠物日记\"。",
              "link": "https://www.ithome.com/0/981/998.htm",
              "tags": [
                "QQ宠物",
                "大模型"
              ],
              "source": "IT之家",
              "time": "7月27日"
            },
            {
              "title": "腾讯WorkBuddy正式上架鸿蒙电脑应用市场",
              "summary": "7月27日，腾讯WorkBuddy正式上架鸿蒙电脑应用市场，成为鸿蒙平台首个桌面办公智能体。覆盖办公、代码开发和设计创意场景，提供140多个AI顾问和2.2万个技能插件。鸿蒙版利用系统底层能力加入了\"碰一碰\"分享功能。",
              "link": "https://cloud.tencent.com.cn/developer/article/2716509",
              "tags": [
                "WorkBuddy",
                "鸿蒙"
              ],
              "source": "腾讯云",
              "time": "7月27日"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米MiMo-V2.5登OpenRouter全球周榜、月榜双第一",
              "summary": "7月27日，OpenRouter最新数据显示，小米MiMo-V2.5登上全球大模型调用量周榜、月榜双第一，当周全球调用量唯一突破10T的模型。7月调用量前五名全部为中国模型：MiMo-V2.5、DeepSeek V4 Flash、腾讯Hy3、智谱GLM-5.2、DeepSeek V4 Pro。",
              "link": "https://finance.sina.com.cn/wm/2026-07-27/doc-inikhcku8408395.shtml",
              "tags": [
                "MiMo",
                "OpenRouter"
              ],
              "source": "新浪财经",
              "time": "7月27日"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": []
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "月之暗面正式开源Kimi K3模型，2.8万亿参数",
              "summary": "7月27日晚，月之暗面正式开源Kimi K3模型权重和技术报告，并开源MoonEP、FlashKDA、AgentEnv等关键Infra技术。K3总参数2.8万亿，采用MoE架构每token激活16个专家，原生支持视觉理解和100万token上下文。官方称其为首个达2.8万亿参数规模的开源模型。",
              "link": "https://www.ithome.com/0/982/259.htm",
              "tags": [
                "开源",
                "K3"
              ],
              "source": "IT之家",
              "time": "7月27日"
            }
          ]
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "华为小艺智慧大脑版本随机逐步放量，实现快慢思考融合",
              "summary": "7月27日，华为小艺智慧大脑基于Agentic自演进架构上线，核心特性为快慢思考融合——简单任务由快系统执行，复杂任务路由到慢系统经多轮\"规划—执行—反思\"完成。具备记忆与自主学习能力，正在随机逐步放量，需HarmonyOS 6.0及以上。",
              "link": "https://www.ithome.com/0/982/246.htm",
              "tags": [
                "小艺",
                "智慧大脑"
              ],
              "source": "IT之家",
              "time": "7月27日"
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
              "title": "美团",
              "news": [
                {
                  "title": "美团AI\"小团\"全面升级，从\"能答\"走向\"能办\"",
                  "summary": "7月27日，美团宣布旗下本地生活AI原生助手\"小团\"全面升级，新增代理执行能力。用户提出需求后可协助完成下单、打车、订位等操作，对未接入线上预订的商家支持AI外呼功能。目前已覆盖全国2800多个城市，累计完成超7亿次商家信息校验。",
                  "link": "https://www.ithome.com/0/982/080.htm",
                  "tags": [
                    "AI助手",
                    "本地生活"
                  ],
                  "source": "IT之家",
                  "time": "7月27日"
                },
                {
                  "title": "美团全场景AI Agent平台CatPaw正式上线",
                  "summary": "7月27日，美团发布全场景AI Agent平台CatPaw，提供移动端App、PC客户端和企业级Agent开发托管能力。CatPaw已在内部覆盖9万名员工，搭建超3万个Agent，在餐饮、美业、宠物医院等场景完成验证。搭载美团自研LongCat 2.0大模型。",
                  "link": "https://www.ithome.com/0/981/934.htm",
                  "tags": [
                    "Agent",
                    "企业服务"
                  ],
                  "source": "IT之家",
                  "time": "7月27日"
                }
              ]
            },
            {
              "title": "OPPO",
              "news": [
                {
                  "title": "OPPO启动小布Next计划，开放端侧Multi-Agent系统内测",
                  "summary": "7月27日，OPPO宣布启动\"小布Next计划\"，开放行业首个端侧Multi-Agent多智能体协同系统内测。搭载端侧全域记忆系统，可智能调度多个Agent协同工作，支持全时意图感知。已打通100多项系统能力。首批支持Find X8、X9系列及一加旗舰机型。",
                  "link": "https://tech.ifeng.com/c/8v6Bwa7REya",
                  "tags": [
                    "Multi-Agent",
                    "端侧AI"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月27日"
                }
              ]
            },
            {
              "title": "百度",
              "news": [
                {
                  "title": "小度AI手表Fit开售，搭载文心大模型国补价159.8元",
                  "summary": "7月27日，小度AI智能手表Fit正式开售，搭载百度文心大模型，支持语音问答、AI生成表盘等功能。配备1.95英寸超清全面屏、100+种运动模式及24小时健康监测。定价198元，国补价159.8元。",
                  "link": "https://www.ithome.com/0/982/239.htm",
                  "tags": [
                    "AI手表",
                    "文心大模型"
                  ],
                  "source": "IT之家",
                  "time": "7月27日"
                }
              ]
            },
            {
              "title": "荣耀",
              "news": [
                {
                  "title": "全球首款机器人手机荣耀Robot Phone定档8月12日发布",
                  "summary": "7月27日消息，荣耀宣布与阿莱（ARRI）联合研发的全球首款机器人手机荣耀Robot Phone定档8月12日发布。机身顶部集成四自由度钛合金机械云台系统，搭载第五代骁龙8至尊版芯片和AgenticOS操作系统，联合阿里千问大模型打造手机Agent方案。",
                  "link": "https://www.ithome.com/0/981/843.htm",
                  "tags": [
                    "机器人手机",
                    "荣耀"
                  ],
                  "source": "IT之家",
                  "time": "7月27日"
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
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉Optimus项目遭知名投资人泼冷水：短期不会产生收入",
                  "summary": "7月27日消息，投资公司Gerber Kawasaki CEO警告称，特斯拉Optimus人形机器人短期内不太可能产生收入，复制人类身体能力是最大障碍。马斯克在财报会上坦言项目尚无成熟供应链。高管透露Optimus弗里蒙特产线计划2026年底启动，远期年产能目标100万台。",
                  "link": "https://www.cls.cn/detail/2437832",
                  "tags": [
                    "Optimus",
                    "人形机器人"
                  ],
                  "source": "财联社",
                  "time": "7月27日"
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
              "title": "正奇未来",
              "news": [
                {
                  "title": "物理AI公司正奇未来8个月完成3轮数亿元天使融资",
                  "summary": "7月27日，物理AI公司正奇未来宣布8个月内完成3轮数亿元天使系列融资，每轮均超募。投资方包括鼎晖VGC、线性资本、上汽恒旭、柏睿资本、正轩投资、周大福投资等。公司聚焦Door-to-Door短途出行机器人，首款产品已量产并获海外十多个国家商业订单。",
                  "link": "https://stcn.com/article/detail/4042614.html",
                  "tags": [
                    "具身智能",
                    "融资"
                  ],
                  "source": "证券时报",
                  "time": "7月27日"
                }
              ]
            },
            {
              "title": "词元无限",
              "news": [
                {
                  "title": "AI Agent基础设施商\"词元无限\"完成天使++轮融资数亿元",
                  "summary": "7月27日，企业级AI Agent基础设施服务商\"词元无限\"宣布完成天使++轮融资，由临芯投资领投、华控基金跟投，一个月内完成第二笔融资，累计融资额达数亿元。资金将用于加速打造企业级AI Agent基础设施平台及与清华、北航的联合研究。",
                  "link": "https://www.cls.cn/detail/2437576",
                  "tags": [
                    "AI Agent",
                    "融资"
                  ],
                  "source": "IT之家",
                  "time": "7月27日"
                }
              ]
            },
            {
              "title": "软银",
              "news": [
                {
                  "title": "软银为投资OpenAI股权贷款新增21家放款机构",
                  "summary": "7月27日消息，软银集团为投资OpenAI安排的400亿美元过渡贷款进入大规模分销阶段，新增阿布扎比第一银行、新加坡GIC、渣打银行等21家金融机构参与放贷，合计分得约70亿美元贷款额度。",
                  "link": "https://www.jiemian.com/article/14831472.html",
                  "tags": [
                    "融资",
                    "软银"
                  ],
                  "source": "IT之家",
                  "time": "7月27日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "商务部回应美方AI制裁威胁",
              "news": [
                {
                  "title": "商务部回应美方拟调查中国AI企业：典型的人工智能霸权主义行径",
                  "summary": "7月27日，商务部发言人就美方宣称将调查中国AI企业所谓\"蒸馏\"美国前沿模型并实施制裁回应称，美方缺乏事实依据，是典型的人工智能霸权主义行径。中方强调创新不是任何一方专利，将采取一切必要措施维护企业正当权益。",
                  "link": "https://www.thepaper.cn/newsDetail_forward_33668120",
                  "tags": [
                    "AI监管",
                    "中美"
                  ],
                  "source": "澎湃新闻",
                  "time": "7月27日"
                }
              ]
            },
            {
              "title": "AI考试作弊",
              "news": [
                {
                  "title": "历史系教授揭露：35名学生有32名在考试中使用AI生成答案",
                  "summary": "7月27日，历史学教授Jason Gibson发布TikTok视频称，其两个班级共35名学生中有32名期中考试不及格——他们都用AI生成了全部答案且未经检查。教授在试卷中隐藏了白色提示词指令，AI生成的答案中包含无意义的\"马达加斯加\"句子，轻松识别作弊。",
                  "link": "https://www.aibase.com/zh/news/29916",
                  "tags": [
                    "AI教育",
                    "作弊"
                  ],
                  "source": "IT之家",
                  "time": "7月27日"
                }
              ]
            },
            {
              "title": "翁荔",
              "news": [
                {
                  "title": "北大校友翁荔因健康原因离开Thinking Machines Lab",
                  "summary": "7月28日消息，Thinking Machines Lab联合创始人、北大校友翁荔在社交媒体发布离职信，表示因健康问题离开这家成立仅20个月的AI初创公司。翁荔此前在OpenAI任职超6年，曾组建80人安全系统团队。Thinking Machines刚发布首个开源模型Inkling。",
                  "link": "https://36kr.com/p/3914516361254281",
                  "tags": [
                    "人物",
                    "离职"
                  ],
                  "source": "爱范儿",
                  "time": "7月28日"
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
          "name": "OpenRouter",
          "date": "2026-07-26",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "MiMo-V2.5",
              "score": "10.5T tokens",
              "change": "↑12%"
            },
            {
              "model": "DeepSeek V4 Flash",
              "score": "6.37T tokens",
              "change": "↑18%"
            },
            {
              "model": "Hy3",
              "score": "3.94T tokens",
              "change": "↑>999%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.29T tokens",
              "change": "↑10%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "3.17T tokens",
              "change": "↑17%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.34T tokens",
              "change": "↑26%"
            },
            {
              "model": "MiniMax M3",
              "score": "2.05T tokens",
              "change": "↑46%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.92T tokens",
              "change": "↑156%"
            },
            {
              "model": "Hy3 (free)",
              "score": "1.76T tokens",
              "change": "↑85%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1.44T tokens",
              "change": "↑30%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "1.78T tokens",
              "change": "↑13%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.13T tokens",
              "change": "↑21%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.05T tokens",
              "change": "↑5%"
            },
            {
              "model": "Qwen3-235B-A22B",
              "score": "0.85T tokens",
              "change": "↑7%"
            },
            {
              "model": "Grok 4.5",
              "score": "0.78T tokens",
              "change": "↑3%"
            },
            {
              "model": "Claude Fable 5",
              "score": "0.72T tokens",
              "change": "↑11%"
            },
            {
              "model": "DeepSeek R1-0528",
              "score": "0.65T tokens",
              "change": "↓5%"
            },
            {
              "model": "Gemini 2.0 Flash",
              "score": "0.58T tokens",
              "change": "↓8%"
            },
            {
              "model": "Yi-Lightning",
              "score": "0.52T tokens",
              "change": "↓3%"
            },
            {
              "model": "Spark 1.1",
              "score": "0.48T tokens",
              "change": "↑18%"
            }
          ]
        },
        {
          "name": "LMArena",
          "date": "2026-07-10",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "Claude Fable 5",
              "score": "1509",
              "change": "+9"
            },
            {
              "model": "Claude Opus 4.6 (Thinking)",
              "score": "1504",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.7 (Thinking)",
              "score": "1503",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.6",
              "score": "1498",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "1494",
              "change": "+4"
            },
            {
              "model": "Meta Spark 1.1",
              "score": "1490",
              "change": "+10"
            },
            {
              "model": "Meta Spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "GPT-5.6 Sol (xHigh)",
              "score": "1486",
              "change": "+14"
            },
            {
              "model": "Gemini 3 Pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "Gemini 3.1 Pro Preview",
              "score": "1485",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.8 (Thinking)",
              "score": "1482",
              "change": "+5"
            },
            {
              "model": "GPT-5.5 (High)",
              "score": "1481",
              "change": "+5"
            },
            {
              "model": "GPT-5.4 (High)",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "Gemini 3.5 Flash (High)",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "Gemini 3.5 Flash (Medium)",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "GPT-5.2 Chat",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "Qwen3.7 Max Preview",
              "score": "1475",
              "change": "+10"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "Grok 4.20 Beta1",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "GPT-5.5",
              "score": "1474",
              "change": "+5"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-15",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Velo 3.0",
              "category": "Productivity",
              "rank": 1,
              "link": "https://www.producthunt.com/products/velo-4"
            },
            {
              "name": "V2Fun",
              "category": "AI",
              "rank": 2,
              "link": "https://www.producthunt.com/products/v2fun"
            },
            {
              "name": "Campus",
              "category": "Productivity",
              "rank": 3,
              "link": "https://www.producthunt.com/p/flutterflow/campus-4"
            },
            {
              "name": "Agently",
              "category": "Productivity",
              "rank": 4,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Crustdata Recruiter",
              "category": "Hiring",
              "rank": 5,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "YAGNI",
              "category": "SaaS",
              "rank": 6,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "RecordMeeting",
              "category": "Chrome Extensions",
              "rank": 7,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Tiptap AI Toolkit",
              "category": "Dev Tools",
              "rank": 8,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Flodesk Studio",
              "category": "Design Tools",
              "rank": 9,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "CodeNearby 2.0",
              "category": "Productivity",
              "rank": 10,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "nudge 2.0",
              "category": "Productivity",
              "rank": 11,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Copresent",
              "category": "Chrome Extensions",
              "rank": 12,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Keepresso",
              "category": "Productivity",
              "rank": 13,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Clerk",
              "category": "Fintech",
              "rank": 14,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Review by Eddie AI",
              "category": "Productivity",
              "rank": 15,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Jam-Pod",
              "category": "Music",
              "rank": 16,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "ccshare",
              "category": "Dev Tools",
              "rank": 17,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "QuickQuill",
              "category": "Mac",
              "rank": 18,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "New AI tools by IFTTT",
              "category": "Productivity",
              "rank": 19,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "DeskMat 1.3",
              "category": "Mac",
              "rank": 20,
              "link": "https://www.producthunt.com"
            }
          ]
        }
      ]
    }
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
