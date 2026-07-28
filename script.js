// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
};
const VENDOR_DISPLAY = {
    "OpenAI":       { color: "#7ab8d6", softBg: "#edf5fa", initial: "O", logo: "logos/OpenAI.png" },
    "Anthropic":    { color: "#c4a882", softBg: "#faf5ee", initial: "A", logo: "logos/Anthropic.png" },
    "Google":       { color: "#8ac4a0", softBg: "#effaf3", initial: "G", logo: "logos/Google.png" },
    "xAI":          { color: "#8ab4d4", softBg: "#eef5fb", initial: "X", logo: "logos/xAI.png" },
    "NVIDIA":       { color: "#a8c47a", softBg: "#f4f9ee", initial: "N", logo: "logos/NVDIA.png" },
    "Meta":         { color: "#8a9ad4", softBg: "#eff0fa", initial: "M", logo: "logos/Meta.png" },
    "微软":         { color: "#00A4EF", softBg: "#E6F5FD", initial: "微", logo: "logos/微软.jpg" },
    "阿里云":       { color: "#d4a06a", softBg: "#faf5ee", initial: "阿", logo: "logos/阿里云.png" },
    "火山引擎":     { color: "#8aaed4", softBg: "#eef5fb", initial: "火", logo: "logos/火山引擎.png" },
    "DeepSeek":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "D", logo: "logos/DeepSeek.png" },
    "腾讯":         { color: "#8ac4a0", softBg: "#effaf3", initial: "腾", logo: "logos/腾讯.png" },
    "智谱AI":       { color: "#b4a0d4", softBg: "#f5f0fa", initial: "智", logo: "logos/智谱.png" },
    "智谱 AI":      { color: "#b4a0d4", softBg: "#f5f0fa", initial: "智", logo: "logos/智谱.png" },
    "MiniMax":      { color: "#d4a0b4", softBg: "#faf0f4", initial: "M", logo: "logos/MiniMax.png" },
    "月之暗面":     { color: "#b4a0d4", softBg: "#f5f0fa", initial: "月", logo: "logos/月之暗面.png" },
    "华为":         { color: "#d4a0a0", softBg: "#faf0f0", initial: "华", logo: "logos/华为.jpg" },
    "三星":         { color: "#8aaed4", softBg: "#eef5fb", initial: "三" },
    "小米":         { color: "#d4a882", softBg: "#faf5ee", initial: "米", logo: "logos/小米.jpg" },
    "昆仑万维":     { color: "#a0b0d4", softBg: "#f2f4fa", initial: "昆" },
    "字节跳动":     { color: "#8ab4d4", softBg: "#eef5fb", initial: "字" },
    "Stability AI": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "S" },
    "波士顿动力":   { color: "#d4a0a0", softBg: "#faf0f0", initial: "B" },
    "Waymo":        { color: "#8ac4a0", softBg: "#effaf3", initial: "W" },
    "特斯拉":       { color: "#d4a0a0", softBg: "#faf0f0", initial: "T" },
    "新智具身":     { color: "#b4a0d4", softBg: "#f5f0fa", initial: "新" },
    "零一汽车":     { color: "#a8c47a", softBg: "#f4f9ee", initial: "零" },
    "蚂蚁灵波":     { color: "#d4a06a", softBg: "#faf5ee", initial: "蚂" },
    "Figure":       { color: "#8a9ad4", softBg: "#eff0fa", initial: "F" },
    "文远知行":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "文" },
    "小马智行":     { color: "#8ac4a0", softBg: "#effaf3", initial: "马" },
    "QuestMobile":  { color: "#b4a0d4", softBg: "#f5f0fa", initial: "Q" },
    "支付宝":       { color: "#4a90d9", softBg: "#eef5fb", initial: "支" },
    "SK 海力士":    { color: "#8a9ad4", softBg: "#eff0fa", initial: "S" },
    "快手":         { color: "#d4a06a", softBg: "#faf5ee", initial: "快", logo: "logos/其他厂商/快手.png" },
    "台积电":       { color: "#8ac4a0", softBg: "#effaf3", initial: "台" },
    "蚂蚁集团":     { color: "#4a90d9", softBg: "#eef5fb", initial: "蚂" },
    "蔚来":         { color: "#7ab8d6", softBg: "#edf5fa", initial: "蔚" },
    "问界 M9":      { color: "#d4a0a0", softBg: "#faf0f0", initial: "问" },
    "星尘智能":     { color: "#b4a0d4", softBg: "#f5f0fa", initial: "星" },
    "Figure AI":    { color: "#8a9ad4", softBg: "#eff0fa", initial: "F" },
    "长鑫科技":     { color: "#a8c47a", softBg: "#f4f9ee", initial: "长" },
    "杉岩数据":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "杉" },
    "FuriosaAI":    { color: "#d4a882", softBg: "#faf5ee", initial: "F" },
    "百川智能":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "百" },
    "面壁智能":     { color: "#b4a0d4", softBg: "#f5f0fa", initial: "面" },
    "擎朗智能":     { color: "#d4a882", softBg: "#faf5ee", initial: "擎" },
    "光轮智能":     { color: "#a8c47a", softBg: "#f4f9ee", initial: "光" },
    "美团":         { color: "#d4a06a", softBg: "#faf5ee", initial: "美" },
    "抖音":         { color: "#8ab4d4", softBg: "#eef5fb", initial: "抖" },
    "星巴克":       { color: "#8ac4a0", softBg: "#effaf3", initial: "星" },
    "黄仁勋":       { color: "#a8c47a", softBg: "#f4f9ee", initial: "黄" },
    "Demis Hassabis": { color: "#8a9ad4", softBg: "#eff0fa", initial: "H" },
    "SK海力士":     { color: "#8a9ad4", softBg: "#eff0fa", initial: "S" },
    "小米汽车":     { color: "#d4a882", softBg: "#faf5ee", initial: "车" },
    "OpenRouter":   { color: "#7ab8d6", softBg: "#edf5fa", initial: "O" },
    "MiniMax":      { color: "#d4a0b4", softBg: "#faf0f4", initial: "M", logo: "logos/MiniMax.png" },
    "小鹏汽车":     { color: "#8ac4a0", softBg: "#effaf3", initial: "鹏" },
    "小鹏 IRON":    { color: "#8a9ad4", softBg: "#eff0fa", initial: "I" },
    "苹果":         { color: "#a0a8b0", softBg: "#f2f4f5", initial: "苹", logo: "logos/其他厂商/苹果.png" },
    "自变量机器人": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "自" },
    "荣耀":         { color: "#4a90d9", softBg: "#eef5fb", initial: "荣" },
    "罗福莉（小米大模型负责人）": { color: "#d4a882", softBg: "#faf5ee", initial: "罗" },
    "黄仁勋（NVIDIA CEO）": { color: "#a8c47a", softBg: "#f4f9ee", initial: "黄" },
    "英特尔":         { color: "#0071c5", softBg: "#e6f0f8", initial: "英", logo: "https://www.google.com/s2/favicons?domain=intel.com&sz=64" },
    "鸿海（富士康）": { color: "#e60012", softBg: "#fde8ec", initial: "鸿", logo: "https://www.google.com/s2/favicons?domain=foxconn.com&sz=64" },
    "网易有道":       { color: "#e4393c", softBg: "#fde8ec", initial: "有", logo: "https://www.google.com/s2/favicons?domain=youdao.com&sz=64" },
    "宇树科技":       { color: "#1a1a2e", softBg: "#e8e8f0", initial: "宇", logo: "https://www.google.com/s2/favicons?domain=unitree.com&sz=64" },
    "Vbot 维他动力":  { color: "#00d4aa", softBg: "#e6faf5", initial: "V", logo: "https://www.google.com/s2/favicons?domain=vbot.ai&sz=64" },
    "博登智能":       { color: "#4a90d9", softBg: "#eef5fb", initial: "博", logo: "https://www.google.com/s2/favicons?domain=bodenai.com&sz=64" },
    "软银集团":       { color: "#c0c0c0", softBg: "#f5f5f5", initial: "软", logo: "https://www.google.com/s2/favicons?domain=softbank.jp&sz=64" },
    "_tag_map": {
        "三星": "三星", "小米": "小米", "MiMo": "小米", "小米汽车": "小米",
        "昆仑万维": "昆仑万维", "字节跳动": "字节跳动", "豆包": "字节跳动",
        "OpenAI": "OpenAI", "Anthropic": "Anthropic", "Google": "Google",
        "NVIDIA": "NVIDIA", "Meta": "Meta", "DeepSeek": "DeepSeek",
        "腾讯": "腾讯", "通义千问": "阿里云", "华为": "华为",
        "波士顿动力": "波士顿动力", "Atlas": "波士顿动力",
        "Waymo": "Waymo", "Robotaxi": "小马智行",
        "特斯拉": "特斯拉",
        "新智具身": "新智具身", "触觉": "新智具身",
        "零一汽车": "零一汽车",
        "蚂蚁灵波": "蚂蚁灵波",
        "文远知行": "文远知行",
        "小马智行": "小马智行",
        "QuestMobile": "QuestMobile",
        "支付宝": "支付宝", "AI支付": "支付宝",
        "SK海力士": "SK海力士", "HBM": "SK海力士",
        "百川智能": "百川智能", "医疗AI": "百川智能",
        "面壁智能": "面壁智能", "端侧AI": "面壁智能",
        "擎朗智能": "擎朗智能", "人形机器人": "擎朗智能",
        "光轮智能": "光轮智能",
        "美团": "美团", "Skill": "美团",
        "抖音": "抖音", "AI安全": "抖音",
        "星巴克": "星巴克", "AI应用": "星巴克",
        "黄仁勋": "黄仁勋",
        "Hassabis": "Demis Hassabis",
        "AI芯片": "NVIDIA",
        "蚂蚁集团": "支付宝",
        "物理AI": "光轮智能",
        "小米汽车": "小米"
    }
};

const CATEGORY_DISPLAY = {
    "其他厂商":   { icon: "fas fa-building",    color: "#a0a8b0", softBg: "#f2f4f5" },
    "自动驾驶":   { icon: "fas fa-car",          color: "#82c4d4", softBg: "#eefafc" },
    "具身智能":   { icon: "fas fa-robot",        color: "#d4b482", softBg: "#faf6ee" },
    "AI出海":     { icon: "fas fa-ship",         color: "#8ac4a0", softBg: "#effaf3" },
    "投资资讯":   { icon: "fas fa-chart-line",   color: "#d4c482", softBg: "#faf9ee" },
    "行业趋势&观点":   { icon: "fas fa-lightbulb",    color: "#b4a0d4", softBg: "#f5f0fa" }
};

const PLATFORM_DISPLAY = {
    "LMArena":     { color: "#7ab8d6", softBg: "#edf5fa", initial: "L" },
    "OpenRouter":  { color: "#b4a0d4", softBg: "#f5f0fa", initial: "O" },
    "Product Hunt":{ color: "#d4a882", softBg: "#faf5ee", initial: "P" }
};

function enrichData(data) {
    if (!data || !data.sections) return;
    const secMeta = {
        overseas: { title: "海外主要厂商", icon: "fas fa-globe-americas", iconClass: "overseas" },
        domestic: { title: "国内主要厂商", icon: "fas fa-flag", iconClass: "domestic" },
        other:    { title: "其他关注", icon: "fas fa-layer-group", iconClass: "other" },
        ranking:  { title: "榜单情况", icon: "fas fa-trophy", iconClass: "ranking" }
    };
    for (const [key, meta] of Object.entries(secMeta)) {
        if (data.sections[key]) Object.assign(data.sections[key], meta);
    }
    for (const secKey of ['overseas', 'domestic']) {
        const vendors = data?.sections?.[secKey]?.vendors;
        if (!vendors) continue;
        for (const v of vendors) {
            const cfg = VENDOR_DISPLAY[v.name];
            if (cfg) { v.color = cfg.color; v.softBg = cfg.softBg; v.initial = cfg.initial; v.logo = cfg.logo; }
        }
    }
    const categories = data?.sections?.other?.categories;
    if (categories) {
        for (const c of categories) {
            const cfg = CATEGORY_DISPLAY[c.name];
            if (cfg) { c.icon = cfg.icon; c.color = cfg.color; c.softBg = cfg.softBg; }
        }
    }
    const platforms = data?.sections?.ranking?.platforms;
    if (platforms) {
        for (const p of platforms) {
            const cfg = PLATFORM_DISPLAY[p.name];
            if (cfg) { p.color = cfg.color; p.softBg = cfg.softBg; p.initial = cfg.initial; }
        }
    }
}

function resolveVendorByTags(tags) {
    if (!tags || !tags.length) return null;
    const map = VENDOR_DISPLAY._tag_map;
    for (const tag of tags) {
        if (map[tag]) return VENDOR_DISPLAY[map[tag]];
    }
    return null;
}

function resolveCompanyName(tags) {
    if (!tags || !tags.length) return null;
    const map = VENDOR_DISPLAY._tag_map;
    for (const tag of tags) {
        if (map[tag]) return map[tag];
    }
    return null;
}

function loadNewsData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            const ranking = parsed?.sections?.ranking?.platforms;
            if (ranking) {
                const firstItem = ranking[0]?.rankings?.[0];
                if (firstItem && ('change' in firstItem || 'upvotes' in firstItem)) {
                    localStorage.removeItem(STORAGE_KEY);
                    throw new Error('旧格式数据，已清除');
                }
            }
            enrichData(parsed);
            return parsed;
        }
    } catch (e) { /* ignore corrupt data */ }
    const data = JSON.parse(JSON.stringify(NEWS_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
}

async function loadNewsDataFromJSON() {
    autoConfirmBeforeRefresh();
    let lsData = null;
    let rawData = null;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) lsData = JSON.parse(saved);
    } catch (e) { /* ignore */ }
    if (window.__RAW_DATA) rawData = window.__RAW_DATA;
    const rawDate = rawData?.date || '';
    const lsDate = lsData?.date || '';
    const lsEditTime = lsData?._manualEdit ? new Date(lsData._manualEdit).getTime() : 0;
    const rawEditTime = rawData?._manualEdit ? new Date(rawData._manualEdit).getTime() : 0;
    const isManualEdit = lsData?._manualEdit && lsDate === rawDate && lsEditTime >= rawEditTime;
    if (lsDate > rawDate || isManualEdit) {
        if (lsData) {
            delete lsData._manualEdit;
            enrichData(lsData);
            console.log('已从 localStorage 加载新闻数据（用户编辑优先）');
            return lsData;
        }
    }
    if (rawData) {
        enrichData(rawData);
        const cleanData = JSON.parse(JSON.stringify(rawData));
        delete cleanData._generated;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cleanData));
        localStorage.setItem(LAST_UPDATE_KEY, rawDate);
        console.log('已从 data.js 加载新闻数据（v' + rawDate + '）');
        return rawData;
    }
    if (lsData) {
        enrichData(lsData);
        console.log('已从 localStorage 加载新闻数据');
        return lsData;
    }
    try {
        const resp = await fetch('data.json?v=' + Date.now(), { cache: 'no-store' });
        if (resp.ok) {
            const data = await resp.json();
            enrichData(data);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            setLastUpdateTime(data.date);
            console.log('已从 data.json 加载新闻数据（v' + data.date + '）');
            return data;
        }
    } catch (e) {
        console.log('data.json fetch 不可用，尝试回退');
    }
    return loadNewsData();
}

function seedConfirmedData() {
    try {
        const INVALID_DATES = ['2026-05-26'];
        const confirmed = JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
        let changed = false;
        for (const d of INVALID_DATES) {
            if (confirmed[d]) {
                delete confirmed[d];
                changed = true;
                console.log('清除无效日期:', d);
            }
        }
        const seedVersion = window.__SEED_VERSION || 1;
        const cachedVersion = localStorage.getItem('ai-news-seed-version');
        if (String(seedVersion) !== cachedVersion) {
            localStorage.removeItem(CONFIRMED_KEY);
            localStorage.removeItem(STORAGE_KEY);
            localStorage.setItem('ai-news-seed-version', String(seedVersion));
            console.log('种子数据版本更新，已自动清除全部缓存，刷新后即见最新数据');
        }
        if (window.__SEED_CONFIRMED) {
            for (const [dateStr, data] of Object.entries(window.__SEED_CONFIRMED)) {
                confirmed[dateStr] = data;
                changed = true;
            }
            if (Object.keys(window.__SEED_CONFIRMED).length > 0) {
                console.log('种子数据已同步:', Object.keys(window.__SEED_CONFIRMED).join(', '));
            }
        }
        if (changed) {
            localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
        }
    } catch (e) { /* ignore */ }
}

function autoConfirmBeforeRefresh() {
    seedConfirmedData();
    try {
        const oldSaved = localStorage.getItem(STORAGE_KEY);
        if (!oldSaved) return;
        const oldData = JSON.parse(oldSaved);
        const oldDate = oldData.date;
        if (!oldDate) return;
        const confirmed = JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
        if (!confirmed[oldDate]) {
            confirmed[oldDate] = JSON.parse(JSON.stringify(oldData));
            localStorage.setItem(CONFIRMED_KEY, JSON.stringify(confirmed));
            console.log('自动确认遗漏日期:', oldDate);
        }
    } catch (e) { /* ignore */ }
}

let newsData = null;
let dataReady = (async () => {
    newsData = await loadNewsDataFromJSON();
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }
})();

function initPage() {
    const todayStr = getTodayStr();
    const currentDate = newsData?.date || todayStr;
    const savedDate = localStorage.getItem(LAST_VIEWED_DATE_KEY);
    if (savedDate && currentDate > savedDate) {
        localStorage.setItem(LAST_VIEWED_DATE_KEY, currentDate);
        console.log(`网页已更新：从 ${savedDate} 自动刷新到最新日期 ${currentDate}`);
    }
    updateHeaderDate();
    renderContent();
    setupEventListeners();
}

const state = {
    currentCategory: 'all',
    isLoading: false
};

function updateHeaderDate(dateStr) {
    const today = new Date();
    const d = dateStr ? new Date(dateStr + 'T00:00:00') : today;
    const timeEl = document.getElementById('update-time');
    if (timeEl) {
        const lastUpdate = getLastUpdateTime();
        if (lastUpdate) {
            const lu = new Date(lastUpdate);
            const datePart = `${lu.getMonth() + 1}月${lu.getDate()}日`;
            const timePart = lu.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
            timeEl.textContent = `${datePart} ${timePart}`;
        } else if (dateStr) {
            timeEl.textContent = d.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
        } else {
            const now = new Date();
            const datePart = `${now.getMonth() + 1}月${now.getDate()}日`;
            const timePart = now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
            timeEl.textContent = `${datePart} ${timePart}`;
        }
    }
    const dateEl = document.getElementById('header-date');
    if (dateEl) {
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        dateEl.textContent = `${d.getMonth() + 1}月${d.getDate()}日 ${weekdays[d.getDay()]} · 早报`;
    }
}

function getLastUpdateTime() {
    try {
        const ts = localStorage.getItem(LAST_UPDATE_KEY);
        return ts || null;
    } catch (e) {
        return null;
    }
}

function setLastUpdateTime(dateStr) {
    localStorage.setItem(LAST_UPDATE_KEY, dateStr || new Date().toISOString().slice(0, 10));
}

function renderContent(filter = 'all') {
    const grid = document.getElementById('content-grid');
    grid.innerHTML = '';
    const sections = newsData.sections;
    if (filter === 'all' || filter === 'overseas') {
        grid.appendChild(renderVendorCards('overseas', sections.overseas, [2, 2, 2]));
    }
    if (filter === 'all' || filter === 'domestic') {
        grid.appendChild(renderVendorCards('domestic', sections.domestic, [2, 2, 2, 2]));
    }
    if (filter === 'all' || filter === 'other') {
        grid.appendChild(renderOtherSection(sections.other));
    }
    if (filter === 'all' || filter === 'ranking') {
        grid.appendChild(renderRankingSection(sections.ranking));
    }
}

function renderVendorSection(key, section) {
    const el = document.createElement('section');
    el.className = 'content-section';
    el.dataset.category = key;
    const totalNews = section.vendors.reduce((sum, v) => sum + v.news.length, 0);
    el.innerHTML = `
        <div class="section-header">
            <div class="section-title">
                <div class="section-icon ${section.iconClass}">
                    <i class="${section.icon}"></i>
                </div>
                <h2>${section.title}</h2>
            </div>
            <span class="item-count">${totalNews} 条</span>
        </div>
        ${section.vendors.map(vendor => renderVendorGroup(vendor)).join('')}
    `;
    return el;
}

function renderVendorCards(key, section, rowSizes = []) {
    const el = document.createElement('section');
    el.className = 'content-section';
    el.dataset.category = key;
    const totalNews = section.vendors.reduce((sum, v) => sum + v.news.length, 0);
    let vendorIdx = 0;
    const rowsHtml = rowSizes.map(size => {
        const rowVendors = section.vendors.slice(vendorIdx, vendorIdx + size);
        vendorIdx += size;
        const cardsHtml = rowVendors.map((vendor, i) => {
            const actualIdx = vendorIdx - size + i;
            const hasNews = vendor.news.length > 0;
            const newsListHtml = hasNews
                ? vendor.news.map(n => `
                    <div class="vendor-card-news-item">
                        <div class="vendor-card-news-title">${n.title}</div>
                    </div>
                `).join('')
                : (() => {
                    const recentNews = getRecentNewsForVendor(vendor.name, key);
                    if (recentNews.length === 0) {
                        return '<div class="vendor-card-empty">本日无新闻</div>';
                    }
                    const recentHtml = recentNews.map(n => {
                        const d = new Date(n.date + 'T00:00:00');
                        const dateLabel = `${d.getMonth() + 1}月${d.getDate()}日早报`;
                        const title = n.title.length > 25 ? n.title.slice(0, 25) + '...' : n.title;
                        return `<div class="vendor-card-recent-item"><span class="vendor-card-recent-date">${dateLabel}</span><span class="vendor-card-recent-title"${n.link ? ` data-link="${n.link}"` : ''}>${title}</span></div>`;
                    }).join('');
                    return `<div class="vendor-card-empty"><div class="vendor-card-empty-label">本日无新闻，关注近期新闻</div><div class="vendor-card-recent">${recentHtml}</div></div>`;
                })();
            return `
                <div class="vendor-card" data-category="${key}" data-vendor-index="${actualIdx}" tabindex="0" role="button" aria-label="查看 ${vendor.name} 详情">
                    <div class="vendor-card-header">
                        <div class="vendor-card-icon${vendor.logo ? ' has-logo' : ''}" style="background: ${vendor.softBg}; color: ${vendor.color}; border: 1px solid ${vendor.color}30;">
                            ${vendor.logo ? `<img src="${vendor.logo}" alt="${vendor.name}" class="vendor-card-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${vendor.initial}';this.parentElement.classList.remove('has-logo');">` : vendor.initial}
                        </div>
                        <span class="vendor-card-name">${vendor.name}</span>
                        <span class="vendor-card-news-count">${vendor.news.length} 条</span>
                    </div>
                    <div class="vendor-card-news-list">
                        ${newsListHtml}
                    </div>
                </div>
            `;
        }).join('');
        return `<div class="vendor-cards-row" style="--cols: ${size}">${cardsHtml}</div>`;
    }).join('');
    el.innerHTML = `
        <div class="section-header" data-toggle-section>
            <div class="section-title">
                <div class="section-icon ${section.iconClass}">
                    <i class="${section.icon}"></i>
                </div>
                <h2>${section.title}</h2>
            </div>
            <div class="section-header-right">
                <span class="item-count">${totalNews} 条</span>
                <span class="section-toggle"><i class="fas fa-chevron-down"></i></span>
            </div>
        </div>
        ${rowsHtml}
    `;
    return el;
}

function renderVendorGroup(vendor) {
    const logoHtml = vendor.logo
        ? `<img src="${vendor.logo}" alt="${vendor.name}" class="vendor-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${vendor.initial}';this.parentElement.classList.remove('has-logo');">`
        : vendor.initial;
    const logoClass = vendor.logo ? ' has-logo' : '';
    return `
        <div class="vendor-group">
            <div class="vendor-header">
                <div class="vendor-icon${logoClass}" style="background: ${vendor.softBg}; color: ${vendor.color}; border: 1px solid ${vendor.color}30;">
                    ${logoHtml}
                </div>
                <h3>${vendor.name}</h3>
                <span class="vendor-news-count">${vendor.news.length} 条新闻</span>
            </div>
            <div class="items-list">
                ${vendor.news.map(item => renderNewsItem(item, vendor)).join('')}
            </div>
        </div>
    `;
}

function renderNewsItem(item, vendor) {
    const color = vendor.color;
    const softBg = vendor.softBg;
    return `
        <article class="news-item">
            <div class="item-header">
                <span class="source-badge" style="background: ${softBg}; color: ${color}; border: 1px solid ${color}30;">${item.source}</span>
                <span class="time-badge">${item.time}</span>
            </div>
            <h3 class="item-title">${item.title}</h3>
            <p class="item-summary">${item.summary}</p>
            <a class="item-link" href="${item.link}" target="_blank" rel="noopener">
                <i class="fas fa-external-link-alt"></i>
                查看原文
            </a>
            ${item.tags ? `<div class="item-tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
        </article>
    `;
}

function renderOtherSection(section) {
    const el = document.createElement('section');
    el.className = 'content-section';
    el.dataset.category = 'other';
    const activeCategories = section.categories
        .map((c, i) => ({ ...c, origIndex: i }))
        .filter(c => c.cards && c.cards.length > 0);
    const totalNews = activeCategories.reduce((sum, c) => sum + c.cards.reduce((s, card) => s + card.news.length, 0), 0);
    el.setAttribute('id', 'other-section');
    if (activeCategories.length === 0) {
        el.innerHTML = `
            <div class="section-header" data-toggle-section>
                <div class="section-title">
                    <div class="section-icon ${section.iconClass}">
                        <i class="${section.icon}"></i>
                    </div>
                    <h2>${section.title}</h2>
                </div>
                <div class="section-header-right">
                    <span class="item-count">0 条</span>
                    <span class="section-toggle"><i class="fas fa-chevron-down"></i></span>
                </div>
            </div>
            <div class="vendor-card-empty" style="padding: 2rem;">本日无新闻</div>
        `;
        return el;
    }
    const firstCat = activeCategories[0];
    el.innerHTML = `
        <div class="section-header" data-toggle-section>
            <div class="section-title">
                <div class="section-icon ${section.iconClass}">
                    <i class="${section.icon}"></i>
                </div>
                <h2>${section.title}</h2>
            </div>
            <div class="section-header-right">
                <span class="item-count">${totalNews} 条</span>
                <span class="section-toggle"><i class="fas fa-chevron-down"></i></span>
            </div>
        </div>
        <div class="other-tabs">
            ${activeCategories.map((c, i) => `
                <button class="other-tab ${i === 0 ? 'active' : ''}" data-cat-index="${c.origIndex}">
                    <i class="${c.icon}"></i> ${c.name}
                </button>
            `).join('')}
        </div>
        <div class="vendor-cards-row" id="other-cards-row" style="--cols: 2">
            ${renderOtherCards(firstCat, firstCat.origIndex)}
        </div>
    `;
    setTimeout(() => {
        el.querySelectorAll('.other-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const idx = parseInt(tab.dataset.catIndex);
                const cat = section.categories[idx];
                el.querySelectorAll('.other-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const row = el.querySelector('#other-cards-row');
                row.innerHTML = renderOtherCards(cat, idx);
            });
        });
    }, 0);
    return el;
}

function renderOtherCards(cat, catIndex) {
    if (!cat.cards || cat.cards.length === 0) {
        return '<div class="vendor-card vendor-card--empty"><div class="vendor-card-empty">本日无新闻</div></div>';
    }
    return cat.cards.map((card, cardIdx) => {
        const vd = VENDOR_DISPLAY[card.title];
        let iconHtml;
        if (vd) {
            const cardLogo = vd.logo
                ? `<img src="${vd.logo}" alt="${card.title}" class="vendor-card-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${vd.initial}';">`
                : vd.initial;
            const cardLogoClass = vd.logo ? ' has-logo' : '';
            iconHtml = `<div class="vendor-card-icon${cardLogoClass}" style="background: ${vd.softBg}; color: ${vd.color}; border: 1px solid ${vd.color}30;">${cardLogo}</div>`;
        } else {
            iconHtml = `<div class="vendor-card-icon" style="background: ${cat.softBg}; color: ${cat.color}; border: 1px solid ${cat.color}30;"><i class="${cat.icon}" style="font-size: 0.8rem;"></i></div>`;
        }
        const newsItemsHtml = card.news.map((item, newsIdx) => `
            <div class="vendor-card-news-item" data-card-index="${cardIdx}" data-news-index="${newsIdx}">
                <div class="vendor-card-news-title">${item.title}</div>
            </div>
        `).join('');
        return `
        <div class="vendor-card other-news-card" data-cat-index="${catIndex}" data-card-index="${cardIdx}" tabindex="0" role="button" aria-label="查看详情">
            <div class="vendor-card-header">
                ${iconHtml}
                <span class="vendor-card-name">${card.title}</span>
            </div>
            <div class="vendor-card-news-list">
                ${newsItemsHtml}
            </div>
        </div>
        `;
    }).join('');
}

function renderRankingSection(section) {
    const el = document.createElement('section');
    el.className = 'content-section';
    el.dataset.category = 'ranking';
    el.innerHTML = `
        <div class="section-header" data-toggle-section>
            <div class="section-title">
                <div class="section-icon ${section.iconClass}">
                    <i class="${section.icon}"></i>
                </div>
                <h2>${section.title}</h2>
            </div>
            <div class="section-header-right">
                <span class="item-count">${section.platforms.length} 个榜单</span>
                <span class="section-toggle"><i class="fas fa-chevron-down"></i></span>
            </div>
        </div>
        <div class="ranking-grid">
            ${section.platforms.map(p => renderRankingCard(p)).join('')}
        </div>
    `;
    return el;
}

function renderRankingCard(platform) {
    const isPH = platform.rankings.length > 0 && 'name' in platform.rankings[0];
    const linkAttr = platform.link ? `href="${platform.link}" target="_blank" rel="noopener" title="查看完整榜单"` : '';
    return `
        <div class="ranking-card">
            <a class="ranking-card-header" ${linkAttr}>
                <div class="ranking-platform">
                    <div class="ranking-platform-icon" style="background: ${platform.softBg}; color: ${platform.color}; border: 1px solid ${platform.color}30;">
                        ${platform.initial}
                    </div>
                    <h4>${platform.name}</h4>
                    ${platform.link ? '<i class="fas fa-external-link-alt ranking-link-icon"></i>' : ''}
                </div>
                <span class="ranking-date">${platform.date}</span>
            </a>
            <div class="ranking-list">
                ${platform.rankings.map((r, i) => `
                    <div class="ranking-item">
                        <span class="ranking-num ${i < 3 ? 'top' + (i + 1) : 'other'}">${i + 1}</span>
                        ${isPH && r.link
                            ? `<a class="ranking-model ranking-model-link" href="${r.link}" target="_blank" rel="noopener" title="访问 ${r.name} 官网">${r.name}</a>`
                            : `<span class="ranking-model">${isPH ? r.name : r.model}</span>`
                        }
                        ${isPH
                            ? `<span class="ranking-category">${r.category || ''}</span>`
                            : `<span class="ranking-score">${r.score}</span>`
                        }
                        ${!isPH && r.change
                            ? `<span class="ranking-change ${r.change.startsWith('↑') || r.change.startsWith('+') ? 'up' : r.change.startsWith('↓') || r.change.startsWith('-') ? 'down' : 'flat'}">${r.change}</span>`
                            : ''
                        }
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function setupEventListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCategory(btn));
    });
    setupDateSelector();
    document.querySelector('.export-btn').addEventListener('click', () => {
        showToast('正在打开打印对话框，选择「存储为PDF」即可...');
        setTimeout(() => window.print(), 500);
    });
    setupBackToTop();
    setupKeyboardNav();
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const title = e.target.closest('.vendor-card-recent-title[data-link]');
        if (!title) return;
        e.stopPropagation();
        e.preventDefault();
        window.open(title.dataset.link, '_blank', 'noopener');
    });
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.vendor-card');
        if (!card) return;
        const category = card.dataset.category;
        const vendorIndex = parseInt(card.dataset.vendorIndex);
        openVendorModal(category, vendorIndex);
    });
    document.getElementById('content-grid').addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const card = e.target.closest('.vendor-card');
            if (!card) return;
            e.preventDefault();
            if (card.classList.contains('other-news-card')) {
                const catIndex = parseInt(card.dataset.catIndex);
                const cardIndex = parseInt(card.dataset.cardIndex);
                const firstItem = card.querySelector('.vendor-card-news-item');
                const newsIndex = firstItem ? parseInt(firstItem.dataset.newsIndex) : 0;
                openOtherNewsModal(catIndex, cardIndex, newsIndex);
                return;
            }
            const category = card.dataset.category;
            const vendorIndex = parseInt(card.dataset.vendorIndex);
            openVendorModal(category, vendorIndex);
        }
    });
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.other-news-card');
        if (!card) return;
        const catIndex = parseInt(card.dataset.catIndex);
        const cardIndex = parseInt(card.dataset.cardIndex);
        const newsItem = e.target.closest('.vendor-card-news-item');
        const newsIndex = newsItem ? parseInt(newsItem.dataset.newsIndex) : 0;
        openOtherNewsModal(catIndex, cardIndex, newsIndex);
    });
    document.getElementById('modal-close').addEventListener('click', closeVendorModal);
    document.getElementById('vendor-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeVendorModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('vendor-modal').classList.contains('active')) {
                closeVendorModal();
            } else if (document.getElementById('source-modal').classList.contains('active')) {
                closeSourceModal();
            }
        }
    });
    document.getElementById('source-info-btn').addEventListener('click', openSourceModal);
    document.getElementById('source-modal-close').addEventListener('click', closeSourceModal);
    document.getElementById('source-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeSourceModal();
    });
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const header = e.target.closest('[data-toggle-section]');
        if (!header) return;
        const section = header.closest('.content-section');
        if (section) section.classList.toggle('collapsed');
    });
}

function switchCategory(btn) {
    state.currentCategory = btn.dataset.category;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderContent(state.currentCategory);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupDateSelector() {
    const dateInput = document.getElementById('custom-date-input');
    const dateBtn = document.getElementById('custom-date-btn');
    const todayStr = getTodayStr();
    const confirmed = getConfirmedDates();
    const confirmedDates = Object.keys(confirmed).sort();
    const minDate = confirmedDates.length > 0 ? confirmedDates[0] : todayStr;
    dateInput.min = minDate;
    dateInput.max = todayStr;
    const displayDate = newsData?.date || todayStr;
    dateInput.value = displayDate;
    let lastValidDate = displayDate;
    dateBtn.addEventListener('click', () => {
        if (dateInput.classList.contains('visible')) {
            dateInput.classList.remove('visible');
            return;
        }
        dateInput.classList.add('visible');
        dateInput.showPicker ? dateInput.showPicker() : dateInput.focus();
    });
    dateInput.addEventListener('change', () => {
        const selected = dateInput.value;
        if (!selected) return;
        if (selected !== todayStr && !confirmed[selected]) {
            showToast(`${selected} 暂无内容，不可选择`);
            dateInput.value = lastValidDate;
            return;
        }
        lastValidDate = selected;
        localStorage.setItem(LAST_VIEWED_DATE_KEY, selected);
        dateInput.classList.remove('visible');
        showLoading();
        setTimeout(() => {
            hideLoading();
            if (selected === todayStr) {
                loadTodayData();
                updateHeaderDate();
                renderContent(state.currentCategory);
            } else {
                const snap = loadConfirmedDate(selected);
                if (snap) {
                    newsData = snap;
                    enrichData(newsData);
                    updateHeaderDate(selected);
                    renderContent(state.currentCategory);
                }
            }
        }, 200);
    });
}

function getTodayStr() {
    return new Date().toISOString().split('T')[0];
}

function getConfirmedDates() {
    try {
        return JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function loadConfirmedDate(dateStr) {
    const confirmed = getConfirmedDates();
    return confirmed[dateStr] || null;
}

function getRecentNewsForVendor(vendorName, sectionKey) {
    const confirmed = getConfirmedDates();
    const todayStr = getTodayStr();
    const cutoffDate = new Date(todayStr);
    cutoffDate.setDate(cutoffDate.getDate() - 7);
    const cutoffStr = cutoffDate.toISOString().slice(0, 10);
    const dates = Object.keys(confirmed)
        .filter(d => d !== todayStr && d >= cutoffStr)
        .sort()
        .reverse();
    const seen = new Set();
    const result = [];
    for (const dateStr of dates) {
        if (result.length >= 3) break;
        const data = confirmed[dateStr];
        const vendors = data?.sections?.[sectionKey]?.vendors;
        if (!vendors) continue;
        const vendor = vendors.find(v => v.name === vendorName);
        if (!vendor || !vendor.news) continue;
        for (const item of vendor.news) {
            if (result.length >= 3) break;
            if (seen.has(item.title)) continue;
            seen.add(item.title);
            result.push({ title: item.title, date: data.date || dateStr, link: item.link || '' });
        }
    }
    return result;
}

function loadTodayData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            newsData = JSON.parse(saved);
            enrichData(newsData);
            return;
        }
    } catch (e) {}
    if (window.__RAW_DATA) {
        newsData = window.__RAW_DATA;
        enrichData(newsData);
    }
}

function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                btn.classList.toggle('visible', window.scrollY > 500);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function setupKeyboardNav() {
    document.querySelector('.category-tabs').addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            const tabs = [...document.querySelectorAll('.tab-btn')];
            const currentIdx = tabs.indexOf(document.activeElement);
            const nextIdx = e.key === 'ArrowRight'
                ? (currentIdx + 1) % tabs.length
                : (currentIdx - 1 + tabs.length) % tabs.length;
            tabs[nextIdx].focus();
            tabs[nextIdx].click();
        }
    });
}

function openVendorModal(category, vendorIndex) {
    const vendor = newsData.sections[category].vendors[vendorIndex];
    if (!vendor || vendor.news.length === 0) return;
    const iconEl = document.getElementById('modal-vendor-icon');
    iconEl.style.cssText = `background: ${vendor.softBg}; color: ${vendor.color}; border: 1px solid ${vendor.color}30;`;
    if (vendor.logo) {
        iconEl.innerHTML = `<img src="${vendor.logo}" alt="${vendor.name}" class="vendor-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${vendor.initial}';this.parentElement.classList.remove('has-logo');">`;
        iconEl.classList.add('has-logo');
    } else {
        iconEl.textContent = vendor.initial;
        iconEl.classList.remove('has-logo');
    }
    document.getElementById('modal-vendor-name').textContent = vendor.name;
    document.getElementById('modal-news-count').textContent = `共 ${vendor.news.length} 条新闻`;
    renderModalBody(vendor);
    document.getElementById('vendor-modal').classList.add('active');
    document.body.classList.add('modal-open');
}

function closeVendorModal() {
    document.getElementById('vendor-modal').classList.remove('active');
    document.body.classList.remove('modal-open');
}

function openSourceModal() {
    document.getElementById('source-modal').classList.add('active');
    document.body.classList.add('modal-open');
}

function closeSourceModal() {
    document.getElementById('source-modal').classList.remove('active');
    document.body.classList.remove('modal-open');
}

function openOtherNewsModal(catIndex, cardIndex, newsIndex) {
    const cat = newsData.sections.other.categories[catIndex];
    const card = cat.cards[cardIndex];
    const item = card.news[newsIndex];
    if (!item) return;
    const cardTitle = card.title;
    const vd = VENDOR_DISPLAY[cardTitle];
    const iconEl2 = document.getElementById('modal-vendor-icon');
    if (vd) {
        iconEl2.style.cssText = `background: ${vd.softBg}; color: ${vd.color}; border: 1px solid ${vd.color}30;`;
        if (vd.logo) {
            iconEl2.innerHTML = `<img src="${vd.logo}" alt="${cardTitle}" class="vendor-logo-img" onerror="this.style.display='none';this.parentElement.textContent='${vd.initial}';this.parentElement.classList.remove('has-logo');">`;
            iconEl2.classList.add('has-logo');
        } else {
            iconEl2.textContent = vd.initial;
            iconEl2.classList.remove('has-logo');
        }
    } else {
        iconEl2.style.cssText = `background: ${cat.softBg}; color: ${cat.color}; border: 1px solid ${cat.color}30;`;
        iconEl2.innerHTML = `<i class="${cat.icon}" style="font-size: 0.8rem;"></i>`;
        iconEl2.classList.remove('has-logo');
    }
    document.getElementById('modal-vendor-name').textContent = cardTitle;
    document.getElementById('modal-news-count').textContent = '';
    const dateStr = formatNewsDate(newsData.date);
    document.getElementById('modal-body').innerHTML = `
        <div class="modal-news-block">
            <h3 class="modal-news-title">${item.title}</h3>
            <div class="modal-news-meta">
                <a class="modal-news-source" href="${item.link}" target="_blank" rel="noopener" style="background: ${cat.softBg}; color: ${cat.color}; border: 1px solid ${cat.color}30;">
                    ${item.source}
                </a>
                ${item.tags ? item.tags.map(t => `<span class="tag">${t}</span>`).join('') : ''}
            </div>
            <p class="modal-news-summary">${item.summary}</p>
        </div>
    `;
    document.getElementById('vendor-modal').classList.add('active');
    document.body.classList.add('modal-open');
}

function renderModalBody(vendor) {
    const bodyEl = document.getElementById('modal-body');
    const dateStr = formatNewsDate(newsData.date);
    bodyEl.innerHTML = vendor.news.map((item, i) => `
        <div class="modal-news-block ${i > 0 ? 'modal-news-block--divider' : ''}">
            <h3 class="modal-news-title">${item.title}</h3>
            <div class="modal-news-meta">
                <a class="modal-news-source" href="${item.link}" target="_blank" rel="noopener" style="background: ${vendor.softBg}; color: ${vendor.color}; border: 1px solid ${vendor.color}30;">
                    ${item.source}
                </a>
                ${item.tags ? item.tags.map(t => `<span class="tag">${t}</span>`).join('') : ''}
            </div>
            <p class="modal-news-summary">${item.summary}</p>
        </div>
    `).join('');
}

function formatNewsDate(dateStr) {
    const parts = dateStr.split('-');
    return `${parseInt(parts[1])}月${parseInt(parts[2])}日`;
}

function formatHeaderDate() {
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const d = new Date();
    return `${d.getMonth() + 1}月${d.getDate()}日 ${weekdays[d.getDay()]}`;
}

function downloadReport() {
    const d = new Date();
    const dateStr = d.toLocaleDateString('zh-CN').replace(/\//g, '-');
    const sections = newsData.sections;
    let md = `# 每日AI早报 — ${d.toLocaleDateString('zh-CN')}\n\n`;
    md += `> 生成时间: ${d.toLocaleString('zh-CN')}\n\n---\n\n`;
    md += '## 🌍 海外主要厂商\n\n';
    sections.overseas.vendors.forEach(v => {
        md += `### ${v.name}\n\n`;
        v.news.forEach(n => {
            md += `- **${n.title}**  \n`;
            md += `  ${n.summary}  \n`;
            md += `  📎 [查看原文](${n.link}) | 🕐 ${n.time}\n\n`;
        });
    });
    md += '## 🇨🇳 国内主要厂商\n\n';
    sections.domestic.vendors.forEach(v => {
        md += `### ${v.name}\n\n`;
        v.news.forEach(n => {
            md += `- **${n.title}**  \n`;
            md += `  ${n.summary}  \n`;
            md += `  📎 [查看原文](${n.link}) | 🕐 ${n.time}\n\n`;
        });
    });
    md += '## 📦 其他关注\n\n';
    sections.other.categories.forEach(c => {
        md += `### ${c.name}\n\n`;
        c.news.forEach(n => {
            md += `- **${n.title}**  \n`;
            md += `  ${n.summary}  \n`;
            md += `  📎 [查看原文](${n.link}) | 🕐 ${n.time}\n\n`;
        });
    });
    md += '## 🏆 榜单情况\n\n';
    sections.ranking.platforms.forEach(p => {
        md += `### ${p.name} (${p.date})\n\n`;
        md += '| 排名 | 名称 | 分数 |\n|:---:|------|------|\n';
        const items = p.rankings || [];
        items.forEach((r, i) => {
            const name = r.model || r.name || '';
            const score = r.score || r.upvotes || '';
            md += `| ${i + 1} | ${name} | ${score} |\n`;
        });
        md += '\n';
    });
    md += `---\n\n*由每日AI早报自动生成*\n`;
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI早报_${dateStr}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function showLoading() {
    state.isLoading = true;
    document.getElementById('loading-overlay').classList.add('active');
}

function hideLoading() {
    state.isLoading = false;
    document.getElementById('loading-overlay').classList.remove('active');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

console.log('%c每日AI早报', 'color: #4a9eff; font-size: 20px; font-weight: bold;');
console.log('%c每天为你精选AI领域最新动态', 'color: #a0a0b0; font-size: 14px;');
