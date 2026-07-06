const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-06",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "rgba(16,163,127,0.08)",
          "initial": "O",
          "news": []
        },
        {
          "name": "Anthropic",
          "color": "#D4A574",
          "softBg": "rgba(212,165,116,0.08)",
          "initial": "A",
          "news": [
            {
              "title": "Anthropic拟在澳大利亚布局1.4GW数据中心算力，建设成本达150亿美元",
              "summary": "当地时间7月5日，据澳大利亚金融评论报报道，Anthropic计划在澳大利亚采购至少1.4GW数据中心算力，对应建设成本约150亿美元（约216亿澳元），目标在2027年底前启用至少1GW算力。Anthropic已在澳设立办公室推进本地化基础设施布局，并正与当地多家数据中心企业洽谈合作。",
              "link": "https://www.jiemian.com/article/14703116.html",
              "tags": [
                "数据中心",
                "算力基础设施",
                "海外布局"
              ],
              "source": "界面新闻",
              "time": "当地时间7月5日"
            },
            {
              "title": "Anthropic被曝正与三星洽谈开发自研AI芯片，考虑2nm工艺",
              "summary": "7月3日消息，据The Information报道，Anthropic已启动自研AI芯片早期开发工作，正与三星电子洽谈芯片代工合作，考虑采用三星2nm制造工艺和先进封装技术。Anthropic已挖来OpenAI自研芯片团队早期成员Clive Chan，目前仍处于方案规划阶段，尚未进入详细设计。",
              "link": "https://www.36kr.com/p/3879590135476233",
              "tags": [
                "自研芯片",
                "2nm制程",
                "代工合作"
              ],
              "source": "36氪",
              "time": "7月3日消息"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "rgba(66,133,244,0.08)",
          "initial": "G",
          "news": []
        },
        {
          "name": "xAI",
          "color": "#1DA1F2",
          "softBg": "rgba(29,161,242,0.08)",
          "initial": "X",
          "news": []
        },
        {
          "name": "NVIDIA",
          "color": "#76B900",
          "softBg": "rgba(118,185,0,0.08)",
          "initial": "N",
          "news": []
        },
        {
          "name": "Meta",
          "color": "#1877F2",
          "softBg": "rgba(24,119,242,0.08)",
          "initial": "M",
          "news": [
            {
              "title": "Meta AI负责人：下一代模型「西瓜」已追平GPT-5.5",
              "summary": "7月3日消息，据Business Insider报道，Meta超级智能实验室负责人Alexandr Wang在内部全员会议上表示，训练中的下一代AI模型代号「西瓜」在主流评测基准上已追平OpenAI旗舰模型GPT-5.5，使用算力规模较前代「牛油果」高出一个数量级。Wang还透露Muse Spark更新版即将推出，将提升代码和AI智能体能力。",
              "link": "https://36kr.com/p/3879841742090242",
              "tags": [
                "大模型",
                "GPT-5.5",
                "Meta AI"
              ],
              "source": "36氪",
              "time": "7月3日消息"
            },
            {
              "title": "Meta推出全新社交AI应用Pocket，用Vibe Coding生成小程序/小游戏",
              "summary": "7月5日消息，据Business Insider报道，Meta近日推出一款名为Pocket的社交AI应用，用户可用自然语言生成并分享Vibe Coding小程序/小游戏。例如用相册花朵照片生成笔刷，或生成复古游戏机小程序。生成后可在编辑器中调整完善，保存至「播放列表」分享给他人。",
              "link": "https://m.ithome.com/html/972832.htm",
              "tags": [
                "社交AI",
                "Vibe Coding",
                "小程序"
              ],
              "source": "IT之家",
              "time": "7月5日消息"
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
          "softBg": "rgba(255,106,0,0.08)",
          "initial": "A",
          "news": [
            {
              "title": "千问智能体功能将于7月15日正式下线",
              "summary": "7月4日消息，千问平台发布公告称，因功能升级与维护，拟人化互动类智能体及用户自建智能体功能将于2026年7月15日正式下线，下线后用户无法继续访问相关配置及历史对话。此举与《人工智能拟人化互动服务管理暂行办法》7月15日施行有关，建议用户提前备份数据。",
              "link": "https://static.cdsb.com/micropub/Articles/202607/6b0f6f2d8721df6608627e212adbc694.html",
              "tags": [
                "智能体下线",
                "合规",
                "AI监管"
              ],
              "source": "红星新闻",
              "time": "7月4日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#FF5733",
          "softBg": "rgba(255,87,51,0.08)",
          "initial": "B",
          "news": [
            {
              "title": "豆包智能体功能将于7月15日正式下线",
              "summary": "7月4日消息，字节跳动旗下豆包发布通知，因产品功能调整，智能体功能将于7月15日正式下线。平台为用户预留数据保存期至10月14日，期间可查看并导出智能体信息及历史对话，所有数据将于10月15日统一清理。字节跳动旗下猫箱App可继续提供智能体服务。",
              "link": "https://www.cls.cn/detail/2417054",
              "tags": [
                "智能体下线",
                "合规",
                "拟人化"
              ],
              "source": "财联社",
              "time": "7月4日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4D6BFE",
          "softBg": "rgba(77,107,254,0.08)",
          "initial": "D",
          "news": []
        },
        {
          "name": "腾讯",
          "color": "#00A4FF",
          "softBg": "rgba(0,164,255,0.08)",
          "initial": "T",
          "news": []
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "rgba(255,105,0,0.08)",
          "initial": "M",
          "news": []
        },
        {
          "name": "智谱AI",
          "color": "#667EEA",
          "softBg": "rgba(102,126,234,0.08)",
          "initial": "Z",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#8B5CF6",
          "softBg": "rgba(139,92,246,0.08)",
          "initial": "Y",
          "news": []
        },
        {
          "name": "华为",
          "color": "#CF0A2C",
          "softBg": "rgba(207,10,44,0.08)",
          "initial": "H",
          "news": [
            {
              "title": "华为何庭波发布「韬定律」V2版论文，补齐工程实现路径",
              "summary": "7月3日消息，华为半导体负责人何庭波于7月3日在中科院ChinaXiv发布《面向多层级电子系统的时间缩微理论》V2版论文，相比V1版补充了工程落地细节和实测数据。首次公开麒麟2026芯片实测数据：晶体管密度从155 MTr/mm²提升至238 MTr/mm²（+55%），同性能下功耗降低41%。",
              "link": "https://www.stdaily.com/web/gdxw/2026-07/05/content_542426.html",
              "tags": [
                "芯片架构",
                "后摩尔时代",
                "3D封装"
              ],
              "source": "科技日报",
              "time": "7月5日消息"
            },
            {
              "title": "华为乾崑智驾搭载车辆已超190万辆",
              "summary": "7月5日消息，华为乾崑智能汽车解决方案官方微博透露，截至目前搭载乾崑智驾的车辆已超过190万辆，累计辅助驾驶行驶里程超120亿公里。工信部新发布的《智能网联汽车组合驾驶辅助系统安全要求》国标中，华为引望是核心起草单位。乾崑智驾预计年底装车量冲击300万辆。",
              "link": "https://www.techweb.com.cn/it/2026-07-05/2977155.shtml",
              "tags": [
                "智能驾驶",
                "辅助驾驶",
                "华为"
              ],
              "source": "TechWeb",
              "time": "7月5日消息"
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
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉限制员工AI使用开销，每人每周上限200美元",
                  "summary": "7月3日消息，据The Information报道，特斯拉自7月6日起限制员工AI工具每周支出上限200美元，超出须经主管批准。此前有软件工程师每周Token成本达数千美元。xAI旗下Grok不计入额度，但据称Grok员工接受度偏低，多数人仍倾向Claude。Uber、Meta等也采取类似限制措施。",
                  "link": "https://www.stcn.com/article/detail/3998520.html",
                  "tags": [
                    "AI成本",
                    "企业政策"
                  ],
                  "source": "证券时报",
                  "time": "7月3日消息"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "苹果Siri AI秋季上线，仅限iPhone 15 Pro及以上机型",
                  "summary": "7月5日消息，苹果在WWDC 26发布的Siri AI将于今秋随iOS 27稳定版推送，基于Apple Intelligence架构实现语义理解和多任务执行升级。兼容性上仅限iPhone 15 Pro系列及后续机型、A17 Pro芯片iPad mini及以上设备。中国大陆因监管暂不提供该功能。",
                  "link": "https://tech.ifeng.com/c/8uVfRfTDNSp",
                  "tags": [
                    "Siri",
                    "Apple Intelligence",
                    "iOS 27"
                  ],
                  "source": "凤凰网科技",
                  "time": "7月5日消息"
                }
              ]
            },
            {
              "title": "Mistral",
              "news": [
                {
                  "title": "Mistral开源Leanstral 1.5定理证明模型，单题成本仅4美元",
                  "summary": "7月3日消息，法国AI公司Mistral发布针对Lean 4形式化证明的开源模型Leanstral 1.5，总参数量1190亿、激活参数约65亿的MoE架构，支持25.6万token上下文。在PutnamBench 672道难题中解出587道，miniF2F测试达100%，平均解题成本约4美元/题，远低于竞品数百美元的水平。",
                  "link": "https://www.marktechpost.com/2026/07/03/mistral-ai-releases-leanstral-1-5-an-apache-2-0-lean-4-code-agent-model-solving-587-of-672-putnambench-problems/",
                  "tags": [
                    "开源模型",
                    "数学推理",
                    "定理证明"
                  ],
                  "source": "MarkTechPost",
                  "time": "7月3日消息"
                }
              ]
            },
            {
              "title": "美光",
              "news": [
                {
                  "title": "美光科技投资93亿美元扩建日本HBM工厂，2028年出货",
                  "summary": "7月5日消息，美光科技于7月4日正式启动日本广岛工厂扩建工程，总投资1.5万亿日元（约93亿美元），生产HBM等先进存储芯片以满足AI需求。HBM是英伟达AI处理器的关键组件，工厂预计2028年夏季开始出货。日本政府承诺最高5000亿日元补贴。",
                  "link": "https://m.21jingji.com/article/20260705/herald/16d179952753f398d9a4a18143658e4b.html",
                  "tags": [
                    "HBM",
                    "存储芯片",
                    "AI基础设施"
                  ],
                  "source": "21经济网",
                  "time": "7月5日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "光象科技",
              "news": [
                {
                  "title": "清华系具身智能公司光象科技累计完成数亿元天使轮融资",
                  "summary": "7月4日消息，清华大学孵化的具身智能公司光象科技宣布完成累计数亿元天使轮融资，最新一轮由珠海科技产业集团、兴证资本、松禾资本等多家机构参与。公司成立于2025年4月，布局物理原生基座模型，2026年6月发布工业级机器人Phi-Bot X1，已在汽车产线完成场景验证。",
                  "link": "https://www.36kr.com/p/3882364132077577",
                  "tags": [
                    "天使轮",
                    "具身智能",
                    "清华"
                  ],
                  "source": "36氪",
                  "time": "7月4日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "AI数据中心耗水量",
              "news": [
                {
                  "title": "华尔街日报：科技巨头AI数据中心耗水量远超官方披露",
                  "summary": "7月5日消息，据华尔街日报报道，微软、谷歌、亚马逊等巨头AI数据中心实际耗水量远高于披露值。研究显示不计发电间接用水时，美国数据中心实际耗水约为报告值12倍。Meta 2024年间接用水190亿加仑，是直接用水20倍。约2/3新建数据中心位于凤凰城等缺水地区，到2031年当地数据中心用水占比或从3%飙升至20%。",
                  "link": "https://m.ithome.com/html/972689.htm",
                  "tags": [
                    "水资源",
                    "ESG",
                    "冷却技术"
                  ],
                  "source": "IT之家",
                  "time": "7月5日消息"
                }
              ]
            },
            {
              "title": "黑石放弃数据中心",
              "news": [
                {
                  "title": "黑石旗下QTS放弃全球最大数据中心项目，AI基建遇阻力",
                  "summary": "7月3日消息，黑石集团旗下数据中心运营商QTS宣布终止弗吉尼亚州全球最大数据中心园区项目，原计划投资超千亿美元建37栋数据中心建筑。因毗邻历史战场遗址引发法律纠纷致审批无效，合作方退出致成本无人分担。盖洛普调查显示71%美国人反对在居民区附近建设数据中心。",
                  "link": "https://www.thepaper.cn/newsDetail_forward_33521385",
                  "tags": [
                    "数据中心",
                    "建设受阻",
                    "环保"
                  ],
                  "source": "澎湃新闻",
                  "time": "7月3日消息"
                }
              ]
            },
            {
              "title": "Midjourney版权案",
              "news": [
                {
                  "title": "Midjourney要求好莱坞片厂披露AI使用细节，版权大战升级",
                  "summary": "7月5日消息，在迪士尼、环球和华纳兄弟起诉Midjourney图像版权案中，Midjourney要求法院迫使片厂披露自身生成式AI使用文件，主张若片厂内部也在使用图像生成AI做分镜和视觉构思，则说明相关训练和使用方式已是行业惯例。此前裁决仅允许片厂提交面向消费者的AI使用信息。",
                  "link": "https://techcrunch.com/2026/07/04/midjourney-wants-hollywood-studios-to-reveal-the-details-of-their-ai-usage/",
                  "tags": [
                    "版权诉讼",
                    "生成式AI",
                    "合理使用"
                  ],
                  "source": "TechCrunch",
                  "time": "7月4日消息"
                }
              ]
            },
            {
              "title": "具身智能行业展望",
              "news": [
                {
                  "title": "宇树科技陈立：具身智能「ChatGPT时刻」需达成两个80%",
                  "summary": "7月4日消息，宇树科技联合创始人陈立在2026亚布力论坛上表示，具身智能的ChatGPT时刻标志是「两个80%」：机器人在80%陌生场景中用语音或文字指令能完成约80%任务。预计垂直ToB场景有望率先达标，ToC场景需8-10年。关键突破在于端到端机器人大模型、低成本硬件和大规模算力。",
                  "link": "https://www.ithome.com/0/972/540.htm",
                  "tags": [
                    "具身智能",
                    "行业展望",
                    "商业化"
                  ],
                  "source": "IT之家",
                  "time": "7月4日消息"
                }
              ]
            },
            {
              "title": "AI教育创新",
              "news": [
                {
                  "title": "复旦大学课程考试改为「人考AI」，4名学生出题让AI拿0分",
                  "summary": "7月5日消息，复旦大学计算与智能创新学院「数据挖掘技术」课程实行颠覆性期末考——学生出题考AI。每名同学设计10道题让DeepSeek V4-Flash、MiniMax M2.7、Claude Sonnet 4.6三个模型作答，AI答错越多得分越高。全班平均分85.7分，4名学生成功让某个AI模型整卷0分。",
                  "link": "https://www.ithome.com/0/972/809.htm",
                  "tags": [
                    "AI教育",
                    "考试改革",
                    "创新教学"
                  ],
                  "source": "IT之家",
                  "time": "7月5日消息"
                }
              ]
            },
            {
              "title": "智能眼镜防作弊",
              "news": [
                {
                  "title": "华南农大严查智能眼镜考试作弊，金属探测仪入场安检",
                  "summary": "7月5日消息，华南农业大学期末考试期间发现多起学生使用AI智能眼镜作弊，镜框内置微型镜头拍照传输试题，AI分析后将答案滚动显示在镜片上。校方启动金属探测仪入场安检，重点扫描眼镜和耳朵部位，违规者该科成绩记零分并记入档案。",
                  "link": "https://news.qq.com/rain/a/20260705A05BEF00",
                  "tags": [
                    "考试作弊",
                    "智能眼镜",
                    "AI防作弊"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月5日消息"
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
          "date": "2026-07-02",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-opus-4-6",
              "score": "1499",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1494",
              "change": "+4"
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
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1481",
              "change": "+5"
            },
            {
              "model": "gemini-3.5-flash",
              "score": "1479",
              "change": "+6"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1478",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-8",
              "score": "1477",
              "change": "+6"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "qwen3.7-max-preview",
              "score": "1475",
              "change": "+10"
            },
            {
              "model": "gpt-5.5",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "grok-4.20-beta-0309-reasoning",
              "score": "1475",
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
            },
            {
              "model": "claude-opus-4-5-20251101-thinking-32k",
              "score": "1473",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-07-06",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash",
              "score": "5.34T tokens",
              "change": "↑15%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.38T tokens",
              "change": "↑2%"
            },
            {
              "model": "MiniMax M3",
              "score": "4.11T tokens",
              "change": "↑10%"
            },
            {
              "model": "Hy3 preview",
              "score": "3.13T tokens",
              "change": "↑7%"
            },
            {
              "model": "GLM 5.2",
              "score": "2.58T tokens",
              "change": "↑22%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.36T tokens",
              "change": "↑16%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.19T tokens",
              "change": "↑6%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "2.09T tokens",
              "change": "↑10%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.55T tokens",
              "change": "↑2%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "1.43T tokens",
              "change": "↑7%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-05",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Vida",
              "category": "Productivity",
              "rank": 1,
              "link": "https://vida.app"
            },
            {
              "name": "ChecklistFox",
              "category": "Design Tools",
              "rank": 2,
              "link": "https://checklistfox.com"
            },
            {
              "name": "PhoneDeck",
              "category": "iOS",
              "rank": 3,
              "link": "https://phonedeck.io"
            },
            {
              "name": "CentryAI",
              "category": "Productivity",
              "rank": 4,
              "link": "https://centryai.app"
            },
            {
              "name": "Termi Protocol",
              "category": "Productivity",
              "rank": 5,
              "link": "https://termiprotocol.com"
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
