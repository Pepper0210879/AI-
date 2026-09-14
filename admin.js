const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
    "date": "2026-09-14",
    "sections": {
      "overseas": {
        "vendors": [
          {
            "name": "OpenAI",
            "news": [
              {
                "title": "GPT-5.3-Codex-Spark下周退役，OpenAI「去英伟达化」首个试验品",
                "summary": "9月12日，OpenAI Codex负责人宣布GPT-5.3-Codex-Spark将在下周退役。该模型今年2月以研究预览形式推出，专为实时交互编程设计，最特殊之处在于采用Cerebras WSE-3晶圆级处理器运行，是OpenAI首次将生产模型推理部署到英伟达GPU之外的芯片平台，成为OpenAI「去英伟达化」探索的首个试验品。",
                "link": "https://m.yicai.com/news/103362164.html",
                "tags": [
                  "模型退役",
                  "芯片"
                ],
                "source": "第一财经",
                "time": "9月12日"
              }
            ]
          },
          {
            "name": "Anthropic",
            "news": [
              {
                "title": "曝Anthropic选定纳斯达克上市，10月路演，目标估值约2万亿美元",
                "summary": "9月14日，科技媒体Business Insider报道，Anthropic已选定纳斯达克作为潜在IPO地点，预计2026年10月启动路演，目标估值约2万亿美元，折合人民币约13.46万亿元。若按此规模完成，将成为全球有史以来规模最大的IPO，超越此前SpaceX上市时约1.77万亿美元的估值。",
                "link": "https://www.ithome.com/1/001/871.htm",
                "tags": [
                  "IPO",
                  "估值"
                ],
                "source": "IT之家",
                "time": "9月14日"
              },
              {
                "title": "消息称Anthropic有望连续第二季度盈利，Q2营收115亿美元",
                "summary": "9月14日消息，据报道，Anthropic正迎来快速增长阶段，有望实现连续第二个季度盈利，第二季度营收约115亿美元。此前Anthropic已宣布了最高1000亿美元的IPO募资计划，当前强劲的财务表现将进一步支撑其约2万亿美元的目标估值。",
                "link": "https://www.ithome.com/1/001/894.htm",
                "tags": [
                  "盈利",
                  "财务"
                ],
                "source": "IT之家",
                "time": "9月14日"
              }
            ]
          },
          {
            "name": "Google",
            "news": [
              {
                "title": "谷歌DeepMind安全研究员离职，称AI五年内造成危害概率「高得吓人」",
                "summary": "9月13日，一名谷歌DeepMind资深AI安全研究员宣布离职，并公开表示AI在未来五年内造成严重危害的概率「高得吓人」。该研究员表示，离职原因在于对AI发展速度和安全边界的深度担忧，认为当前行业整体在安全对齐上的投入仍远不足够。",
                "link": "https://www.ithome.com/1/001/843.htm",
                "tags": [
                  "AI安全",
                  "人才"
                ],
                "source": "IT之家",
                "time": "9月13日"
              },
              {
                "title": "谷歌云CEO：AI服务器两年内可回收投资，自研芯片成本仅GPU一半",
                "summary": "9月14日，谷歌云CEO Thomas Kurian在采访中表示，AI基础设施投资可在两年内回收，并披露谷歌自研TPU芯片总体运营成本仅为英伟达GPU的一半。他预计AI将加速谷歌云业务增长，并强调谷歌通过自研芯片、数据中心和软件的垂直整合形成核心竞争优势。",
                "link": "https://www.ithome.com/1/001/923.htm",
                "tags": [
                  "云计算",
                  "芯片"
                ],
                "source": "IT之家",
                "time": "9月14日"
              }
            ]
          },
          {
            "name": "xAI",
            "news": [
              {
                "title": "马斯克：Grok 4.8本周完成训练，参数量2.5万亿；Grok 4.7延期因RL惩罚过重",
                "summary": "9月14日，马斯克发文宣布Grok 4.8本周已完成训练，参数量达2.5万亿，为当前已知最大规模AI模型之一。同时披露Grok 4.7延期的真实原因：强化学习阶段惩罚力度过重，导致模型在难题上过早放弃，影响推理深度。马斯克表示正通过调整RL策略解决该问题。",
                "link": "https://www.ithome.com/1/001/947.htm",
                "tags": [
                  "Grok",
                  "模型训练"
                ],
                "source": "IT之家",
                "time": "9月14日"
              }
            ]
          },
          {
            "name": "NVIDIA",
            "news": [
              {
                "title": "黄仁勋高盛大会重申：2030年全球AI基础设施年支出将达3-4万亿美元",
                "summary": "当地时间9月10日，英伟达CEO黄仁勋在高盛Communacopia+Technology Conference上重申，全球AI基础设施年支出到2030年将达3万亿至4万亿美元。他指出AI基础设施供给上下游均面临约束，包括先进封装、DRAM、LPDDR内存及数据中心土地电力等，并预计自动驾驶等物理AI应用将在未来两到三年取得明显进展。",
                "link": "https://finance.sina.com.cn/wm/2026-09-12/doc-inirputk6708289.shtml",
                "tags": [
                  "AI基础设施",
                  "投资预测"
                ],
                "source": "新浪财经",
                "time": "当地时间9月10日"
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
            "news": []
          },
          {
            "name": "火山引擎",
            "news": []
          },
          {
            "name": "DeepSeek",
            "news": [
              {
                "title": "DeepSeek灰度测试AI语音对话，支持贝壳/白浪/海星/暗潮四种音色",
                "summary": "9月12日，DeepSeek在App端灰度测试AI语音对话功能，获得内测资格的用户可在App右上角看到喇叭入口，开启语音实时对话交互。功能内置4款不同风格语音：贝壳（百变活泼）、白浪（明朗坚定）、海星（俏皮甜美）、暗潮（低沉浑厚），用户可按需切换。本次为小范围灰度测试，补齐了语音回复能力，完善完整语音对话链路。",
                "link": "https://www.ithome.com/1/001/498.htm",
                "tags": [
                  "语音对话",
                  "产品更新"
                ],
                "source": "IT之家",
                "time": "9月12日"
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
            "news": [
              {
                "title": "智谱完成约50亿美元融资，20亿港股配售+30亿可转债，用于下一代GLM研发",
                "summary": "9月13日，智谱宣布完成约50亿美元融资，包括约20亿美元港股配售及约30亿美元可转债发行。股份配售价每股714港元，较收盘价折让约10%；可转债为零息结构，初始转股价每股892.50港元。约60%净募集资金将用于下一代GLM模型和完全自训练体系研发，其余用于业务扩张及优化资本结构。",
                "link": "https://finance.sina.com.cn/wm/2026-09-13/doc-inirsuvy5406126.shtml",
                "tags": [
                  "融资",
                  "GLM模型"
                ],
                "source": "新浪财经",
                "time": "9月13日"
              }
            ]
          },
          {
            "name": "月之暗面",
            "news": [
              {
                "title": "Kimi K2.8 Preview全量上线，性能接近K3，百万上下文全员开放",
                "summary": "9月12日，月之暗面Kimi K2.8 Preview全量上线，所有Kimi会员均可开放100万token上下文。据悉K2.8在多项评测上性能接近旗舰级K3，但推理成本更低，此前仅针对部分用户内测。本次更新进一步提升了Kimi在长文处理和复杂推理场景的能力，正式向全量用户开放。",
                "link": "https://www.qbitai.com/2026/09/487688.html",
                "tags": [
                  "Kimi",
                  "模型更新"
                ],
                "source": "量子位",
                "time": "9月12日"
              }
            ]
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
                "title": "微软",
                "news": [
                  {
                    "title": "纳德拉：支持AI审慎发展，AI行为准则明日公布",
                    "summary": "9月14日，微软CEO萨提亚·纳德拉公开表示支持AI行业审慎发展，并宣布微软将于次日发布AI行为准则。纳德拉表示，在Anthropic CEO阿莫迪、马斯克、奥尔特曼等业界领袖就AI安全发声后，科技公司有责任主动建立自律机制，微软将公布的准则涵盖AI模型开发、部署和监控三个层面的具体规范。",
                    "link": "https://www.ithome.com/1/001/876.htm",
                    "tags": [
                      "AI安全",
                      "行业规范"
                    ],
                    "source": "IT之家",
                    "time": "9月14日"
                  }
                ]
              },
              {
                "title": "苹果",
                "news": [
                  {
                    "title": "苹果CEO谈Meta「变态眼镜」风波：AI智能设备需让旁人安心",
                    "summary": "9月14日，苹果CEO在采访中回应近期Meta AR眼镜引发的「变态眼镜」隐私争议，表示AI智能设备不仅要保护用户，同样要让设备周围的人感到安心，这是苹果产品设计的核心原则之一。他强调苹果在开发AI功能时始终将隐私和环境感知纳入核心设计考量。",
                    "link": "https://www.ithome.com/1/001/906.htm",
                    "tags": [
                      "隐私",
                      "AI设备"
                    ],
                    "source": "IT之家",
                    "time": "9月14日"
                  }
                ]
              }
            ]
          },
          {
            "name": "具身智能",
            "cards": [
              {
                "title": "蚂蚁灵波",
                "news": [
                  {
                    "title": "蚂蚁灵波开源LingBot-World 2.0，含Small(1.3B)等三款模型",
                    "summary": "9月13日，蚂蚁灵波开源LingBot-World 2.0系列，包含三款模型：Small（1.3B参数）、Bidirectional和Causal Pretrain。该系列为面向具身智能机器人的世界模型，能让机器人通过模型预测环境动态并规划动作序列，Small版本轻量化设计可在边缘设备上部署。蚂蚁灵波同时在外滩大会发布了规模化具身智能解决方案。",
                    "link": "https://www.ithome.com/1/001/863.htm",
                    "tags": [
                      "世界模型",
                      "开源"
                    ],
                    "source": "IT之家",
                    "time": "9月13日"
                  }
                ]
              }
            ]
          },
          {
            "name": "行业趋势&观点",
            "cards": [
              {
                "title": "菲尔兹奖得主联合警告",
                "news": [
                  {
                    "title": "25位菲尔兹奖得主联合警告：AI在数学领域出现「严重错位」",
                    "summary": "当地时间9月11日，陶哲轩、邓煜、彼得·舒尔茨等25位菲尔兹奖得主联合发表声明《人工智能在数学中的严重错位》，警告AI公司与数学共同体之间出现「严重错位」。声明承认大语言模型数学能力显著提升，但指出AI公司将解题速度作为衡量模型能力的基准，而数学共同体追求的是深度理解与严格证明，并非最快得到答案。",
                    "link": "https://m.yicai.com/news/103361901.html",
                    "tags": [
                      "AI与数学",
                      "学界观点"
                    ],
                    "source": "第一财经",
                    "time": "当地时间9月11日"
                  }
                ]
              },
              {
                "title": "AI使用风险",
                "news": [
                  {
                    "title": "美国律师因ChatGPT编造刑事证词被罚5000美元",
                    "summary": "9月11日消息，美国新墨西哥州最高法院认定律师Stephen Aarons在谋杀案上诉材料中提交由ChatGPT编造的警察证词和虚构证人陈述，以未核实文件准确性为由判其藐视法庭，处以5000美元罚款，并转交律师纪律机构处理。Aarons表示，他用ChatGPT总结庭审记录时未意识到系统会凭空编造事实。",
                    "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02802001wsr4",
                    "tags": [
                      "法律风险",
                      "AI幻觉"
                    ],
                    "source": "新浪",
                    "time": "9月11日消息"
                  }
                ]
              },
              {
                "title": "国内AI政策",
                "news": [
                  {
                    "title": "工信部发专项行动方案：力争2030年关键软件全面实现智能化升级",
                    "summary": "9月13日，工业和信息化部发布专项行动方案，明确力争到2030年我国关键软件全面实现智能化升级，将AI技术深度融入操作系统、数据库、中间件等基础软件和行业应用软件。方案提出加强AI编程工具研发应用，推动软件开发效率大幅提升，并建立智能软件测评体系，保障软件质量和安全。",
                    "link": "https://www.ithome.com/1/001/836.htm",
                    "tags": [
                      "AI政策",
                      "软件升级"
                    ],
                    "source": "IT之家",
                    "time": "9月13日"
                  }
                ]
              },
              {
                "title": "AI就业",
                "news": [
                  {
                    "title": "英国试点AI训练营，帮助16-24岁待业青年破解就业难题",
                    "summary": "9月13日，英国政府宣布启动AI训练营试点项目，专门面向16-24岁尼特族（NEET）群体，旨在通过系统性AI技能培训帮助待业青年融入AI时代就业市场。项目将覆盖AI基础知识、提示工程、AI工具应用等内容，与企业合作提供实习机会，以应对AI技术普及带来的就业结构性变化。",
                    "link": "https://www.ithome.com/1/001/822.htm",
                    "tags": [
                      "AI就业",
                      "政策"
                    ],
                    "source": "IT之家",
                    "time": "9月13日"
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
                "model": "claude-fable-5\nAnthropic · Proprietary",
                "score": "1506",
                "change": "±5"
              },
              {
                "model": "claude-opus-4-6-high\nAnthropic · Proprietary",
                "score": "1505",
                "change": "±4"
              },
              {
                "model": "claude-opus-4-7-high\nAnthropic · Proprietary",
                "score": "1502",
                "change": "±4"
              },
              {
                "model": "muse-spark-1.2 (xHigh)\nMeta · Proprietary",
                "score": "1500",
                "change": "±11"
              },
              {
                "model": "claude-fable-5.1-max\nAnthropic · Proprietary",
                "score": "1498",
                "change": "±8"
              },
              {
                "model": "claude-opus-4-6\nAnthropic · Proprietary",
                "score": "1497",
                "change": "±3"
              },
              {
                "model": "claude-opus-4-7\nAnthropic · Proprietary",
                "score": "1494",
                "change": "±4"
              },
              {
                "model": "muse-spark-1.3-max\nMeta · Proprietary",
                "score": "1493",
                "change": "±9"
              },
              {
                "model": "gemini-3.8-flash-high\nGoogle · Proprietary",
                "score": "1493",
                "change": "±9"
              },
              {
                "model": "claude-opus-5-high\nAnthropic · Proprietary",
                "score": "1493",
                "change": "±4"
              },
              {
                "model": "muse-spark-1.1\nMeta · Proprietary",
                "score": "1493",
                "change": "±5"
              },
              {
                "model": "gemini-3.7-flash-high\nGoogle · Proprietary",
                "score": "1490",
                "change": "±8"
              },
              {
                "model": "muse-spark\nMeta · Proprietary",
                "score": "1488",
                "change": "±6"
              },
              {
                "model": "claude-opus-5-max\nAnthropic · Proprietary",
                "score": "1487",
                "change": "±5"
              },
              {
                "model": "gemini-3.1-pro-preview\nGoogle · Proprietary",
                "score": "1487",
                "change": "±3"
              },
              {
                "model": "gemini-3-pro\nGoogle · Proprietary",
                "score": "1485",
                "change": "±4"
              },
              {
                "model": "kimi-k3-max\nMoonshot · Kimi K3 license",
                "score": "1485",
                "change": "±5"
              },
              {
                "model": "gpt-5.6-sol-xhigh\nOpenAI · Proprietary",
                "score": "1483",
                "change": "±5"
              },
              {
                "model": "glm-5.3-max\nZ.ai · MIT",
                "score": "1483",
                "change": "±6"
              },
              {
                "model": "gpt-5.5-high\nOpenAI · Proprietary",
                "score": "1482",
                "change": "±4"
              }
            ]
          },
          {
            "name": "OpenRouter",
            "date": "2026-09-13",
            "link": "https://openrouter.ai/rankings",
            "rankings": [
              {
                "model": "GPT-5.6 Luna\nOpenAI",
                "score": "18.2T tokens",
                "change": "↑41%"
              },
              {
                "model": "Hy4 preview\nTencent",
                "score": "16.8T tokens",
                "change": "↑15%"
              },
              {
                "model": "GLM 5.3 Flash\nZ.AI",
                "score": "11.9T tokens",
                "change": "↑4%"
              },
              {
                "model": "DeepSeek V4 Flash 0731\nDeepSeek",
                "score": "11.6T tokens",
                "change": "↑6%"
              },
              {
                "model": "MiMo-V2.5\nXiaomi",
                "score": "7.77T tokens",
                "change": "↑230%"
              },
              {
                "model": "DeepSeek V4.1 Flash\nDeepSeek",
                "score": "4.94T tokens",
                "change": "NEW"
              },
              {
                "model": "DeepSeek V4 Flash 0423\nDeepSeek",
                "score": "4.36T tokens",
                "change": "↑16%"
              },
              {
                "model": "Hy3\nTencent",
                "score": "3.8T tokens",
                "change": "↑5%"
              },
              {
                "model": "Nemotron 3 Ultra (free)\nNVIDIA",
                "score": "3.56T tokens",
                "change": "↑2%"
              },
              {
                "model": "Gemini 3.8 Flash\nGoogle",
                "score": "2.56T tokens",
                "change": "↑139%"
              },
              {
                "model": "GLM 5.3\nZ.AI",
                "score": "2.52T tokens",
                "change": "↑17%"
              },
              {
                "model": "Muse Spark 1.3 Contributor\nMeta",
                "score": "1.98T tokens",
                "change": "↑137%"
              },
              {
                "model": "GLM 5.2\nZ.AI",
                "score": "1.73T tokens",
                "change": "↑26%"
              },
              {
                "model": "Solar Pro 4\nUpstage",
                "score": "1.71T tokens",
                "change": "↑41%"
              },
              {
                "model": "GPT-5.6 Sol\nOpenAI",
                "score": "1.64T tokens",
                "change": "↑13%"
              },
              {
                "model": "Kimi K3\nMoonshotai",
                "score": "1.47T tokens",
                "change": "↑26%"
              },
              {
                "model": "MiniMax M3\nMiniMax",
                "score": "1.46T tokens",
                "change": "↑1%"
              },
              {
                "model": "Claude Sonnet 5\nAnthropic",
                "score": "1.38T tokens",
                "change": "↑3%"
              },
              {
                "model": "DeepSeek V4 Pro 0423\nDeepSeek",
                "score": "1.31T tokens",
                "change": "↑5%"
              },
              {
                "model": "Claude Opus 5\nAnthropic",
                "score": "1.24T tokens",
                "change": "↑30%"
              }
            ]
          },
          {
            "name": "Product Hunt",
            "date": "2026-09-13",
            "link": "https://www.producthunt.com/",
            "rankings": [
              {
                "name": "Resurf",
                "category": "Design Tools",
                "rank": 1,
                "link": "https://www.producthunt.com/posts/resurf"
              },
              {
                "name": "Perplexity Hybrid Compute",
                "category": "Mac",
                "rank": 2,
                "link": "https://www.producthunt.com/posts/perplexity-hybrid-compute"
              },
              {
                "name": "ScreenCursor",
                "category": "Chrome Extensions",
                "rank": 3,
                "link": "https://www.producthunt.com/posts/screencursor"
              },
              {
                "name": "Cognition's SWE-2",
                "category": "Artificial Intelligence",
                "rank": 4,
                "link": "https://www.producthunt.com/posts/cognition-s-swe-2"
              },
              {
                "name": "Clipwise",
                "category": "Chrome Extensions",
                "rank": 5,
                "link": "https://www.producthunt.com/posts/clipwise"
              },
              {
                "name": "Visiby",
                "category": "Marketing",
                "rank": 6,
                "link": "https://www.producthunt.com/posts/visiby"
              },
              {
                "name": "SHIUI",
                "category": "Design Tools",
                "rank": 7,
                "link": "https://www.producthunt.com/posts/shiui"
              },
              {
                "name": "DemoTV",
                "category": "Marketing",
                "rank": 8,
                "link": "https://www.producthunt.com/posts/demotv"
              },
              {
                "name": "Epilude Notetaker",
                "category": "Productivity",
                "rank": 9,
                "link": "https://www.producthunt.com/posts/epilude-notetaker"
              },
              {
                "name": "GhostWriter by MyHandler",
                "category": "Productivity",
                "rank": 10,
                "link": "https://www.producthunt.com/posts/ghostwriter-by-myhandler"
              },
              {
                "name": "Neopress",
                "category": "SEO",
                "rank": 11,
                "link": "https://www.producthunt.com/posts/neopress"
              },
              {
                "name": "Kirokune",
                "category": "Notes",
                "rank": 12,
                "link": "https://www.producthunt.com/posts/kirokune"
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
