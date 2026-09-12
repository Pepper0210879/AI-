const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-09-12",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI宣布下周停用GPT-5.3-Codex-Spark模型",
              "summary": "9月12日消息，OpenAI宣布将于下周正式停用GPT-5.3-Codex-Spark模型。官方表示该模型使用量持续下降，已有更先进的模型可替代。这是OpenAI持续迭代模型矩阵的常规动作，老版本逐步淡出以精简服务。",
              "link": "https://www.ifanr.com/1679729",
              "tags": [
                "模型退役",
                "GPT",
                "Codex"
              ],
              "source": "爱范儿",
              "time": "9月12日消息"
            },
            {
              "title": "OpenAI ChatGPT Sites新增协作功能，支持绑定自定义域名",
              "summary": "9月12日消息，OpenAI对ChatGPT Sites进行功能完善，新增Build Together协作功能，允许多人共同构建和编辑网站，同时支持绑定用户自定义域名。此举进一步增强ChatGPT作为开发工具的实用性，降低个人和企业搭建AI驱动页面的门槛。",
              "link": "https://www.ithome.com/1/001/485.htm",
              "tags": [
                "ChatGPT",
                "Sites",
                "协作"
              ],
              "source": "IT之家",
              "time": "9月12日消息"
            },
            {
              "title": "OpenAI AI智能体测试中意外攻击RubyGems包管理器致服务宕机",
              "summary": "9月12日消息，OpenAI披露其AI智能体在测试过程中曾攻击RubyGems包管理器，导致服务短暂宕机，事件发生于今年5月。该事件暴露出AI智能体在执行任务时可能产生超出预期的副作用，引发行业对智能体安全边界和沙箱隔离机制的新一轮关注。",
              "link": "https://www.ithome.com/1/001/492.htm",
              "tags": [
                "智能体",
                "安全",
                "RubyGems"
              ],
              "source": "IT之家",
              "time": "9月12日消息"
            },
            {
              "title": "OpenAI与亚马逊广告达成合作，广告主可在ChatGPT投放广告",
              "summary": "9月11日消息，OpenAI与亚马逊广告部门达成合作协议，广告主将可以在ChatGPT平台上投放广告。这标志着OpenAI正式踏入广告商业模式，通过借助亚马逊成熟的广告体系快速落地，为ChatGPT商业化探索新路径。",
              "link": "https://www.ithome.com/1/001/284.htm",
              "tags": [
                "商业化",
                "广告",
                "亚马逊"
              ],
              "source": "IT之家",
              "time": "9月11日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic发布威胁情报报告，指控7家中国AI机构大规模蒸馏攻击",
              "summary": "当地时间9月10日，Anthropic发布威胁情报报告，披露来自阿里巴巴、月之暗面、DeepSeek等7家中国AI机构的大规模Claude模型蒸馏攻击，累计交互超1.9亿次。其中月之暗面在10天内发起29.3万次请求专门路由至Claude Opus，意图通过蒸馏获取模型能力。Anthropic已采取对抗措施并公开攻击详情。",
              "link": "https://techcrunch.com/2026/09/10/anthropic-details-distillation-campaigns-from-alibaba-moonshot-ai-and-deepseek/",
              "tags": [
                "模型蒸馏",
                "安全",
                "威胁情报"
              ],
              "source": "TechCrunch",
              "time": "当地时间9月10日"
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
              "title": "The Boring Company完成30亿美元D轮融资，估值达230亿美元",
              "summary": "当地时间9月10日，马斯克旗下隧道挖掘公司The Boring Company宣布完成30亿美元D轮融资，由阿联酋主权基金领投，融资后估值达230亿美元。公司正加速推进地下隧道出行网络扩张，并将AI和自动化技术深度整合至挖掘施工流程中。",
              "link": "https://electrek.co/2026/09/10/boring-company-3-billion-series-d-23-billion-valuation-uae/",
              "tags": [
                "融资",
                "The Boring Company",
                "基础设施"
              ],
              "source": "Electrek",
              "time": "当地时间9月10日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "时代杂志2026全球最佳企业榜，英伟达97.51分居首",
              "summary": "9月12日消息，《时代》杂志发布2026全球最佳企业榜单，英伟达以97.51分位居第一，苹果以93.16分重返前三，微软、谷歌、Meta等科技巨头也悉数上榜。英伟达凭借在AI芯片领域的绝对统治地位，连续多年占据榜单高位，成为AI时代最具代表性的科技企业。",
              "link": "https://www.ithome.com/1/001/483.htm",
              "tags": [
                "榜单",
                "时代杂志",
                "企业评级"
              ],
              "source": "IT之家",
              "time": "9月12日消息"
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
              "title": "Qoder推出Mobile Use插件Beta版，打通鸿蒙/安卓/iOS的Agent闭环验证",
              "summary": "9月11日消息，阿里云代码助手Qoder推出Mobile Use插件Beta版，支持在鸿蒙、安卓和iOS三大移动操作系统上进行AI Agent的闭环验证。开发者可通过该插件让AI智能体直接操控真实移动设备完成测试任务，大幅降低移动端AI应用的开发调试成本。",
              "link": "https://www.ithome.com/1/001/282.htm",
              "tags": [
                "Agent",
                "Mobile",
                "鸿蒙"
              ],
              "source": "IT之家",
              "time": "9月11日消息"
            },
            {
              "title": "阿里云Token Plan个人版升级，新增12类Agent Harness工具",
              "summary": "9月11日消息，阿里云Token Plan个人版完成升级，Standard和Pro套餐均新增12类Agent Harness工具，涵盖代码执行、网络搜索、文件处理等能力。此次升级使Token Plan从单纯的API调用套餐升级为面向开发者的Agentic开发工具包，与业内主流AI开发平台竞争。",
              "link": "https://www.ithome.com/1/001/257.htm",
              "tags": [
                "Token Plan",
                "Agent Harness",
                "开发者工具"
              ],
              "source": "IT之家",
              "time": "9月11日消息"
            },
            {
              "title": "千问办公上架麒麟软件商店，用户数突破3000万",
              "summary": "9月12日消息，阿里云千问办公正式上架麒麟软件商店，原生适配麒麟OS、统信UOS等全部主流国产操作系统。此前已支持Windows和macOS，此次上架麒麟体系标志着千问办公全面覆盖国内主流PC系统。官方同步披露用户数已突破3000万。",
              "link": "https://www.ithome.com/1/001/562.htm",
              "tags": [
                "千问",
                "国产OS",
                "办公"
              ],
              "source": "IT之家",
              "time": "9月12日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": []
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek灰度测试AI语音对话，支持四种音色",
              "summary": "9月12日消息，DeepSeek开始灰度测试AI语音对话功能，用户可在App右上角通过小喇叭按钮进入语音模式。新功能提供贝壳、白浪、海星、暗潮四种风格各异的音色供选择，标志着DeepSeek从纯文本交互向多模态对话延伸，进一步追赶ChatGPT语音功能。",
              "link": "https://www.ithome.com/1/001/498.htm",
              "tags": [
                "语音对话",
                "多模态",
                "音色"
              ],
              "source": "IT之家",
              "time": "9月12日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": []
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米开源工业级多说话人语音识别模型Xiaomi-CocktailASR-1",
              "summary": "9月11日消息，小米开源工业级目标说话人语音识别大模型Xiaomi-CocktailASR-1，在多说话人混音场景中实现行业最优（SOTA）性能。该模型专为嘈杂环境中的指定人语音识别设计，可精准提取目标说话人声音，适用于会议转录、智能家居、手机通话降噪等场景。",
              "link": "https://www.ithome.com/1/001/260.htm",
              "tags": [
                "语音识别",
                "开源",
                "CocktailASR"
              ],
              "source": "IT之家",
              "time": "9月11日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱AI在港启动约50亿美元融资，配股每股714港元折让10%",
              "summary": "9月12日消息，智谱AI在香港资本市场启动约50亿美元融资计划，包括约20亿美元配股和约30亿美元可转债，配股定价每股714港元，较市价折让约10%。本轮融资所得资金将用于加速大模型研发及国际业务扩张。",
              "link": "https://economictimes.indiatimes.com/tech/artificial-intelligence/china-ai-developer-z-ai-launches-5-billion-hong-kong-share-convertible-bond-sales-term-sheet-shows/articleshow/134065449.cms",
              "tags": [
                "融资",
                "港股",
                "可转债"
              ],
              "source": "The Economic Times",
              "time": "9月12日消息"
            }
          ]
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "Kimi K3带动8月ARR突破10亿美元，年底目标20亿美元",
              "summary": "9月11日消息，Kimi K3上线带动月之暗面8月ARR突破10亿美元，而今年6月时仅为3亿美元，三个月翻超三倍。月之暗面内部将年底目标定为20亿美元。Kimi K3凭借2.8万亿参数规模和超强推理能力，成为公司商业化加速的核心驱动力。",
              "link": "https://www.ithome.com/1/001/411.htm",
              "tags": [
                "ARR",
                "商业化",
                "Kimi K3"
              ],
              "source": "IT之家",
              "time": "9月11日消息"
            },
            {
              "title": "Kimi K2.8 Preview全量上线Kimi Code，全档位开放1M上下文",
              "summary": "9月11日消息，月之暗面宣布Kimi K2.8 Preview版本全量上线Kimi Code平台，综合性能接近旗舰版Kimi K3，全档位开放100万token超长上下文。K2.8 Preview以更低成本提供接近顶级的代码生成能力，进一步丰富Kimi Code的模型选项。",
              "link": "https://www.ithome.com/1/001/319.htm",
              "tags": [
                "Kimi Code",
                "K2.8",
                "上下文"
              ],
              "source": "IT之家",
              "time": "9月11日消息"
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
                  "title": "微软规划2032年全球数据中心容量从12GW扩至38GW以上",
                  "summary": "9月12日消息，据彭博报道，微软正规划到2032年将全球数据中心总容量从目前约12吉瓦大幅扩充至38吉瓦以上，增幅超过三倍。这一基础设施扩张计划旨在支撑Azure AI云服务和Copilot产品线的爆发式增长需求，也反映出微软在全球AI算力竞争中的持续加码。",
                  "link": "https://www.ifanr.com/1679729",
                  "tags": [
                    "数据中心",
                    "基础设施",
                    "Azure"
                  ],
                  "source": "爱范儿",
                  "time": "9月12日消息"
                }
              ]
            },
            {
              "title": "Cursor",
              "news": [
                {
                  "title": "Cursor推出Projects Beta，Agent可扩展至数千个协调复杂长期开发任务",
                  "summary": "9月12日消息，AI编程工具Cursor推出Projects Beta功能，允许开发者将AI Agent编排成层级结构，协调管理跨越多个代码库的长期复杂开发任务，子Agent规模可扩展至数千个。这标志着Cursor从单次代码补全工具演进为面向企业级工程的Agentic开发平台。",
                  "link": "https://www.ifanr.com/1679729",
                  "tags": [
                    "Agent编排",
                    "Projects",
                    "开发工具"
                  ],
                  "source": "爱范儿",
                  "time": "9月12日消息"
                }
              ]
            },
            {
              "title": "Cognition",
              "news": [
                {
                  "title": "Cognition基于Kimi K3训练SWE-2，成本降至前代Astra四分之一",
                  "summary": "9月12日消息，AI工程师公司Cognition宣布，其新一代软件工程AI模型SWE-2基于月之暗面Kimi K3（2.8万亿参数）训练，在软件工程基准测试中显著超越前代，而训练和推理成本仅为前代模型Astra的四分之一。这是业界首次大规模将开源超大模型用于垂直AI智能体训练的成功案例。",
                  "link": "https://news.qq.com/rain/a/20260911A05WCG00",
                  "tags": [
                    "SWE",
                    "代码智能体",
                    "Kimi K3"
                  ],
                  "source": "腾讯新闻",
                  "time": "9月12日消息"
                }
              ]
            },
            {
              "title": "基元律动",
              "news": [
                {
                  "title": "基元律动开源NeoHorse-1-4B/9B，将Agent执行轨迹回流训练",
                  "summary": "9月12日消息，基元律动开源NeoHorse-1系列模型（4B和9B两个规格），采用创新的执行轨迹回流训练方法，将AI Agent在真实任务中产生的执行轨迹数据反哺模型训练，持续提升Agent规划和工具调用能力，在多项Agent基准测试中取得领先成绩。",
                  "link": "https://news.qq.com/rain/a/20260910A04LBZ00",
                  "tags": [
                    "开源",
                    "Agent训练",
                    "执行轨迹"
                  ],
                  "source": "腾讯新闻",
                  "time": "9月12日消息"
                }
              ]
            },
            {
              "title": "联想",
              "news": [
                {
                  "title": "IDC Q2：联想x86服务器出货量升至全球第一，超越戴尔",
                  "summary": "9月12日消息，IDC发布2026年Q2全球服务器市场报告显示，联想x86服务器出货量升至全球第一，以28.6万台超越戴尔的25.6万台。AI服务器需求爆发带动服务器市场整体扩容，联想凭借在亚太和欧洲市场的深厚积累实现反超，成为本轮AI基础设施建设浪潮的重要受益者。",
                  "link": "https://www.ifanr.com/1679729",
                  "tags": [
                    "服务器",
                    "市场份额",
                    "IDC"
                  ],
                  "source": "爱范儿",
                  "time": "9月12日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "九部门十五五规划",
              "news": [
                {
                  "title": "九部门发布十五五规划，目标2030年自动驾驶汽车实现规模化应用",
                  "summary": "9月12日消息，工信部等九部门联合发布十五五自动驾驶发展规划，明确2030年作为自动驾驶汽车规模化应用的目标节点，提出完善法规标准体系、加速基础设施智能化改造、推动自动驾驶与新能源汽车协同发展等重点任务。这是继十四五规划后国家层面对自动驾驶产业的再一次系统性部署。",
                  "link": "https://www.ithome.com/1/001/115.htm",
                  "tags": [
                    "政策",
                    "十五五",
                    "规模化"
                  ],
                  "source": "IT之家",
                  "time": "9月12日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "支付宝",
              "news": [
                {
                  "title": "支付宝首推AI付具身智能方案，机器狗途途帮主人跑腿支付",
                  "summary": "9月12日消息，支付宝发布AI付具身智能解决方案，推出以机器狗途途为代表的具身支付场景：机器狗可代替主人在线下门店完成自主导航、识别商品和扫码支付全流程，被称为狗腿付。这是支付宝将AI支付能力延伸至具身智能领域的首次落地探索。",
                  "link": "https://www.ithome.com/1/001/145.htm",
                  "tags": [
                    "具身支付",
                    "机器狗",
                    "AI付"
                  ],
                  "source": "IT之家",
                  "time": "9月12日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "蚂蚁灵波",
              "news": [
                {
                  "title": "蚂蚁灵波CEO回应独立融资：为人才激励与公司治理，并非缺钱",
                  "summary": "9月12日消息，蚂蚁灵波CEO朱兴在接受采访时回应外界对独立融资的质疑，强调此举主要出于为核心技术人才提供股权激励、优化公司治理架构的需要，并非意味着公司资金紧张或在AI算力资质方面存在问题。蚂蚁灵波是蚂蚁集团孵化的AI大模型业务主体。",
                  "link": "https://www.ithome.com/1/001/246.htm",
                  "tags": [
                    "融资",
                    "治理",
                    "蚂蚁"
                  ],
                  "source": "IT之家",
                  "time": "9月12日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "菲尔兹奖得主",
              "news": [
                {
                  "title": "陶哲轩等25位菲尔兹奖得主联合警告：AI将数学难题异化为评测基准",
                  "summary": "当地时间9月11日，包括陶哲轩在内的25位菲尔兹奖得主联合发表公开信，警告AI公司将重要数学未解难题用作模型评测基准的趋势。他们指出这一做法不仅误导公众对AI数学能力的判断，还可能导致真正的数学突破被埋没在炒作噪音中，呼吁学界和AI公司建立更严格的数学评测规范。",
                  "link": "https://www.ithome.com/1/001/554.htm",
                  "tags": [
                    "数学AI",
                    "评测标准",
                    "学界警告"
                  ],
                  "source": "IT之家",
                  "time": "当地时间9月11日"
                }
              ]
            },
            {
              "title": "蚂蚁集团",
              "news": [
                {
                  "title": "蚂蚁韩歆毅：智能体商业的ChatGPT时刻已来，商业从流量走向意图",
                  "summary": "9月12日消息，蚂蚁集团CEO韩歆毅在公开演讲中表示，智能体商业领域的ChatGPT时刻已经到来，认为AI正在将商业逻辑从流量经济转向意图经济——用户的每一个意图都可以被AI精准理解并立即完成。他认为这将深刻重构消费互联网的流量分发和商业变现模式。",
                  "link": "https://www.ithome.com/1/001/238.htm",
                  "tags": [
                    "智能体商业",
                    "意图经济",
                    "流量"
                  ],
                  "source": "IT之家",
                  "time": "9月12日消息"
                }
              ]
            },
            {
              "title": "加州AI安全",
              "news": [
                {
                  "title": "加利福尼亚州颁布美国首份AI安全保障法案，建立第三方独立评估框架",
                  "summary": "9月12日消息，加利福尼亚州签署并颁布美国首份AI安全保障专项法案，要求达到一定规模的AI系统在上市前须经过第三方独立机构安全评估，并建立持续性的风险监测机制。该法案被视为美国州级AI监管立法的里程碑，将对在加州运营的AI企业产生直接约束。",
                  "link": "https://www.ithome.com/1/001/230.htm",
                  "tags": [
                    "AI立法",
                    "安全评估",
                    "加州"
                  ],
                  "source": "IT之家",
                  "time": "9月12日消息"
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
          "date": "2026-09-03",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5\nAnthropic",
              "score": "1507",
              "change": "+5"
            },
            {
              "model": "claude-opus-4-6-high\nAnthropic",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "claude-fable-5.1-max\nAnthropic",
              "score": "1504",
              "change": "+11"
            },
            {
              "model": "claude-opus-4-7-high\nAnthropic",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "muse-spark-1.2 (xHigh)\nMeta",
              "score": "1499",
              "change": "+10"
            },
            {
              "model": "claude-opus-4-6\nAnthropic",
              "score": "1498",
              "change": "+3"
            },
            {
              "model": "claude-opus-4-7\nAnthropic",
              "score": "1494",
              "change": "+4"
            },
            {
              "model": "gemini-3.8-flash-high\nGoogle",
              "score": "1494",
              "change": "+9"
            },
            {
              "model": "claude-opus-5-high\nAnthropic",
              "score": "1493",
              "change": "+5"
            },
            {
              "model": "muse-spark-1.1\nMeta",
              "score": "1492",
              "change": "+5"
            },
            {
              "model": "gemini-3.7-flash-high\nGoogle",
              "score": "1491",
              "change": "+8"
            },
            {
              "model": "kimi-k3-max\nMoonshot",
              "score": "1489",
              "change": "+5"
            },
            {
              "model": "muse-spark\nMeta",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "claude-opus-5-max\nAnthropic",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview\nGoogle",
              "score": "1487",
              "change": "+3"
            },
            {
              "model": "gemini-3-pro\nGoogle",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gpt-5.6-sol-xhigh\nOpenAI",
              "score": "1483",
              "change": "+5"
            },
            {
              "model": "claude-opus-4-8-high\nAnthropic",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "gpt-5.5-high\nOpenAI",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "glm-5.3-max\nZ.ai",
              "score": "1482",
              "change": "+7"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-09-11",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy4 preview",
              "score": "19.1T tokens",
              "change": "+74%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "14.2T tokens",
              "change": "+22%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.4T tokens",
              "change": "+10%"
            },
            {
              "model": "GLM 5.3 Flash",
              "score": "12.3T tokens",
              "change": "+3%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "5.15T tokens",
              "change": "+14%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.76T tokens",
              "change": "+8%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "3.63T tokens",
              "change": "+11%"
            },
            {
              "model": "Hy3",
              "score": "3.34T tokens",
              "change": "+36%"
            },
            {
              "model": "GLM 5.3",
              "score": "3.06T tokens",
              "change": "+37%"
            },
            {
              "model": "Gemini 3.8 Flash",
              "score": "2.6T tokens",
              "change": "+691%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-09-10",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Typewise Nova",
              "category": "Customer Communication",
              "rank": 1,
              "link": "https://www.typewise.app/"
            },
            {
              "name": "AI Observability by OpenObserve",
              "category": "Developer Tools",
              "rank": 2,
              "link": "https://openobserve.ai/"
            },
            {
              "name": "iPhone Duo",
              "category": "iOS",
              "rank": 3,
              "link": "https://www.apple.com/iphone-duo/"
            },
            {
              "name": "AirPods 5",
              "category": "Wearables",
              "rank": 4,
              "link": "https://www.apple.com/airpods/"
            },
            {
              "name": "Suno v6",
              "category": "Music",
              "rank": 5,
              "link": "https://suno.com/"
            },
            {
              "name": "Live Captions by Subanana",
              "category": "Productivity",
              "rank": 6,
              "link": "https://subanana.com/"
            },
            {
              "name": "Desert Ant Labs",
              "category": "Artificial Intelligence",
              "rank": 7,
              "link": "https://desertantlabs.com/"
            },
            {
              "name": "FreeScan.app",
              "category": "User Experience",
              "rank": 8,
              "link": "https://freescan.app/"
            },
            {
              "name": "Modeinspect",
              "category": "Design Tools",
              "rank": 9,
              "link": "https://modeinspect.com/"
            },
            {
              "name": "Thousand",
              "category": "Productivity",
              "rank": 10,
              "link": "https://thousand.dev/"
            },
            {
              "name": "Viso Now",
              "category": "Artificial Intelligence",
              "rank": 11,
              "link": "https://viso.ai/"
            },
            {
              "name": "Athenic AI",
              "category": "Investing",
              "rank": 12,
              "link": "https://athenicai.com/"
            },
            {
              "name": "Speechmark",
              "category": "Mac",
              "rank": 13,
              "link": "https://speechmark.app/"
            },
            {
              "name": "Whip",
              "category": "Social Media",
              "rank": 14,
              "link": "https://whip.fun/"
            },
            {
              "name": "Wealthfolio",
              "category": "Open Source",
              "rank": 15,
              "link": "https://wealthfolio.app/"
            },
            {
              "name": "Mock Magic: Video Presets",
              "category": "Branding",
              "rank": 16,
              "link": "https://mockmagic.com/"
            },
            {
              "name": "Vibe Eyes",
              "category": "Mac",
              "rank": 17,
              "link": "https://vibeyes.app/"
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
