const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-06-30",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "rgba(16,163,127,0.08)",
          "initial": "O",
          "news": [
            {
              "title": "OpenAI预告Codex配套外设，7月15日发布",
              "summary": "当地时间6月29日，OpenAI在X平台发布预告视频，宣布将于7月15日推出一款与Codex配合使用的硬件设备。该设备由OpenAI与外设厂商Work Louder联合推出，外形接近Creator Micro 2宏控制板，配备机械按键、摇杆和旋钮，可为Codex分配自定义快捷键。这是OpenAI首款正式发布的硬件产品，与Jony Ive正在开发的AI消费硬件（代号Gumdrop）为不同项目。目前Codex周活跃用户已突破500万，是年初的6倍。",
              "link": "https://www.theverge.com/ai-artificial-intelligence/959174/openai-codex-hardware-work-louder",
              "tags": [
                "AI硬件",
                "开发者工具"
              ],
              "source": "The Verge",
              "time": "当地时间6月29日"
            },
            {
              "title": "OpenAI成立应急小组调查Codex额度异常消耗",
              "summary": "6月29日消息，OpenAI组建应急专项攻坚小组，调查用户Codex编程工具额度消耗速度异常飙升的问题。OpenAI状态监控页面称问题根源是反欺诈风控系统错误地对部分账户实施了限流。Codex工程负责人索蒂奥克斯表示团队周日全员进驻应急攻坚室逐条核查日志，已全面重置所有用户额度上限。有订阅200美元套餐的用户反映，此前一周高强度工作才会耗尽额度，现在一天就耗光整周额度。",
              "link": "https://www.ithome.com/0/970/200.htm",
              "tags": [
                "AI编程",
                "产品故障"
              ],
              "source": "IT之家",
              "time": "6月29日"
            },
            {
              "title": "OpenAI Codex负责人：AI能写代码但仍不懂设计品味",
              "summary": "OpenAI Codex负责人Andrew Ambrosino近日在播客节目《Lenny's Podcast》中坦言，AI在创意设计领域仍存在明显短板——设计的好坏比代码能否运行更难量化，训练模型辨别好设计的反馈回路难以建立。他指出，当实现成本趋近于零时，真正的稀缺资源变成了品味和判断力。Figma CEO Dylan Field此前也指出，AI模型基于数据分布训练，产出往往落在平均水平区间，缺乏创造性。",
              "link": "https://www.businessinsider.com/ai-design-limits-openai-andrew-ambrosino-codex-dylan-field-2026-6",
              "tags": [
                "AI设计",
                "行业观点"
              ],
              "source": "Business Insider",
              "time": "6月29日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#D4A574",
          "softBg": "rgba(212,165,116,0.08)",
          "initial": "A",
          "news": [
            {
              "title": "加州政府与Anthropic签约，全州政务半价使用Claude",
              "summary": "当地时间6月29日，加州州长纽森宣布与Anthropic建立合作伙伴关系，州级行政部门及市县两级政府可以五折优惠价格使用Claude系列产品，同时获得免费培训和技术援助。这是美国州级政府与AI公司之间迄今规模最大的合作。此前美国国防部曾将Anthropic认定为供应链风险实体，商务部也对Fable 5和Mythos 5模型实施出口管制，加州此举被视为绕开联邦限制。",
              "link": "https://techcrunch.com/2026/06/29/anthropic-and-gov-newsom-forge-deal-allowing-california-government-to-use-claude-at-half-price/",
              "tags": [
                "政务AI",
                "公共部门"
              ],
              "source": "TechCrunch",
              "time": "当地时间6月29日"
            },
            {
              "title": "消息称美国即将解除Fable 5出口管制，最快下周恢复访问",
              "summary": "6月28日消息，据Axios援引知情人士报道，特朗普政府即将准许Anthropic重新开放Fable 5大模型的使用权限。6月12日美国以国家安全风险为由要求关停Mythos 5和Fable 5，Mythos 5已于6月26日向部分可信机构恢复访问。Fable 5因编码能力极强——Stripe曾一天完成5000万行代码改进——而备受开发者关注。",
              "link": "https://www.ithome.com/0/969/553.htm",
              "tags": [
                "出口管制",
                "模型解禁"
              ],
              "source": "IT之家",
              "time": "6月28日"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "rgba(66,133,244,0.08)",
          "initial": "G",
          "news": [
            {
              "title": "谷歌云将上架SandboxAQ科学专用AI模型",
              "summary": "6月29日，谷歌宣布与量子AI公司SandboxAQ达成合作，将后者的大型量化模型（LQM）上架Google Cloud Marketplace。首批上线两款模型：AQCat用于材料科学和催化剂发现，AQPotency用于药物分子结合力预测。与传统LLM不同，LQM基于真实实验室数据和科学方程训练，擅长处理数值数据。SandboxAQ前身为Alphabet量子技术部门，近期获美国芯片法案5亿美元拨款。",
              "link": "https://thenextweb.com/news/google-cloud-science-ai-models-sandboxaq",
              "tags": [
                "科学AI",
                "药物发现"
              ],
              "source": "TNW",
              "time": "6月29日"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1DA1F2",
          "softBg": "rgba(29,161,242,0.08)",
          "initial": "x",
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
          "color": "#0668E1",
          "softBg": "rgba(6,104,225,0.08)",
          "initial": "M",
          "news": [
            {
              "title": "Meta限制AI工程师使用Claude与Codex，防止模型蒸馏",
              "summary": "6月29日消息，据The Information报道，Meta已出台内部规范限制AI工程部门使用Anthropic的Claude Code和OpenAI的Codex。Meta担心竞品模型的输出可能被无意间混入自家Llama模型的训练数据，违反用户协议并引发法律纠纷。相关团队已暂停部分依托外部AI模型的任务，并加速推动自研工具MetaCode。",
              "link": "https://www.ithome.com/0/970/233.htm",
              "tags": [
                "模型蒸馏",
                "内部规范"
              ],
              "source": "IT之家",
              "time": "6月29日"
            },
            {
              "title": "Meta发布Brain2Qwerty v2：非侵入式脑机接口实时解码句子",
              "summary": "Meta于6月29日发布Brain2Qwerty v2，同步在《自然·神经科学》发表研究成果。该系统平均单词准确率达61%，最佳受试者达78%，而此前非侵入式方法仅8%。系统采用端到端深度学习处理脑磁图（MEG）信号，并通过微调大语言模型引入语义上下文。研究同时发现解码准确率随数据量呈对数线性增长。Meta已开源全部训练代码。",
              "link": "https://www.digitaltrends.com/cool-tech/metas-brain2qwerty-v2-turns-thoughts-into-text-and-it-doesnt-need-brain-implants/",
              "tags": [
                "脑机接口",
                "开源"
              ],
              "source": "Digital Trends",
              "time": "6月29日"
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
          "news": [
            {
              "title": "豆包App上线「豆包导航」，支持步行骑行原生导航",
              "summary": "6月29日消息，字节跳动旗下AI应用豆包App已上线内置导航功能「豆包导航」。用户通过语音或文字输入目的地即可启动，步行与骑行路线支持App内原生导航，驾车与公交则跳转至高德地图。底层地图技术由百度地图提供，支持实时语音播报和悬浮小窗模式，可在导航同时使用豆包其他功能。该功能定位为轻量化导航工具，补齐豆包线下出行服务短板。",
              "link": "https://tech.ifeng.com/c/8uM9Lq6fMzf",
              "tags": [
                "AI应用",
                "导航"
              ],
              "source": "凤凰网科技",
              "time": "6月29日"
            },
            {
              "title": "豆包回应「内测社交功能」传闻：没有该计划",
              "summary": "6月29日，针对近期豆包大模型内测社交功能的传闻，豆包相关负责人向澎湃新闻回应称，豆包没有传闻所说的社交功能计划。在企业办公场景下，豆包与飞书确有一些协同尝试，未来合作会更紧密。豆包专业版已于6月24日正式推出，基于2.1系列大模型，提供阶梯式付费方案。",
              "link": "https://www.ithome.com/0/970/029.htm",
              "tags": [
                "AI应用",
                "辟谣"
              ],
              "source": "IT之家",
              "time": "6月29日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek V4正式版7月中旬上线，高峰时段API价格翻倍",
              "summary": "6月29日，多位开发者确认已收到DeepSeek发送的升级邮件。V4正式版计划于7月中旬上线，同步引入峰谷定价机制：高峰时段（每日9:00-12:00、14:00-18:00）API价格为平时2倍。V4 Pro高峰输出价格12元/百万tokens，V4 Flash高峰输出4元/百万tokens。非高峰时段维持现行低价不变。官方表示此举旨在更合理分配算力资源、提升服务稳定性。",
              "link": "https://wallstreetcn.com/livenews/3126184",
              "tags": [
                "API定价",
                "大模型"
              ],
              "source": "华尔街见闻",
              "time": "6月29日"
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
          "news": []
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "月之暗面声明：未授权任何第三方处理融资交易",
              "summary": "6月29日，月之暗面发布严正声明称，近期市场上出现多起假借公司名义传播的不实融资及股权交易信息，部分机构和个人已涉嫌欺诈。公司强调所有融资活动由公司直接负责，未聘任或授权任何第三方机构作为财务顾问处理融资交易。老股转让须经内部批准方可进行，未经批准的老股交易一律无效。今年5月初月之暗面刚完成约20亿美元融资，投后估值突破200亿美元。",
              "link": "https://finance.sina.com.cn/jjxw/2026-06-29/doc-iniezxce7097442.shtml",
              "tags": [
                "融资声明",
                "风险提示"
              ],
              "source": "新浪财经",
              "time": "6月29日"
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
              "title": "三星",
              "news": [
                {
                  "title": "存储三巨头在美遭DRAM价格操纵集体诉讼",
                  "summary": "6月25日，三星、SK海力士和美光在美国加州联邦法院遭集体诉讼，被指控协同限制传统DRAM产能、操纵价格。诉状称三家公司控制全球DRAM市场超90%供应，借向HBM转型之名压缩传统DRAM供应，致价格四年涨约700%。原告请求法院颁布禁令并寻求三倍赔偿。这已是存储巨头第三次面临类似反垄断诉讼。",
                  "link": "https://www.cls.cn/detail/2411974",
                  "tags": [
                    "反垄断",
                    "DRAM"
                  ],
                  "source": "财联社",
                  "time": "6月25日"
                }
              ]
            },
            {
              "title": "快手",
              "news": [
                {
                  "title": "消息称快手两位技术高管转岗可灵AI事业部，或为上市铺路",
                  "summary": "6月29日消息，快手社区科学线两位核心技术高管李晗、洪立印已完成岗位划转，正式加入可灵AI事业部。李晗为技术副总裁，主管基础大模型与推荐模型；洪立印长期深耕增长与电商算法。两人转岗被视为为可灵冲刺资本市场进行关键技术底盘补强。可灵2026年Q1营收突破6.5亿元，同比增速超300%，内部按2027年初递交港股上市申请推进。",
                  "link": "https://finance.sina.com.cn/roll/2026-06-29/doc-inifaita3797061.shtml",
                  "tags": [
                    "高管变动",
                    "IPO"
                  ],
                  "source": "新浪财经",
                  "time": "6月29日"
                }
              ]
            },
            {
              "title": "高德",
              "news": [
                {
                  "title": "曝高德内测Vibe Coding产品「袋马」，自然语言生成小程序和App",
                  "summary": "6月29日消息，高德正在内测一款名为「袋马」的Vibe Coding产品，用户用自然语言描述需求后可生成微信小程序或iOS原生App，面向无专业研发团队的中小企业和个人。生成结果可在真机运行，并支持通过自然语言继续修改。AI零代码应用生成已成大厂重点赛道，腾讯吐司、百度秒哒、阿里Qoder等产品已密集落地。",
                  "link": "https://m.ithome.com/html/969794.htm",
                  "tags": [
                    "Vibe Coding",
                    "低代码"
                  ],
                  "source": "IT之家",
                  "time": "6月29日"
                }
              ]
            },
            {
              "title": "蚂蚁集团",
              "news": [
                {
                  "title": "蚂蚁阿宝AI助手正式上线，支付宝跨代升级大版本12",
                  "summary": "6月16日，蚂蚁集团发布AI版支付宝「阿宝」，用户可通过语音或文字对话式交互一站式完成查公积金、点外卖、打车等上万种服务。App界面精简为「阿宝」和「资产」两个核心页面。6月29日，iOS版支付宝跨代升级至大版本12.12.1，阿宝正式全面上线。支付宝由此成为全球首个完成全端AI化的10亿用户级超级应用。",
                  "link": "https://www.ithome.com/0/970/088.htm",
                  "tags": [
                    "超级应用",
                    "AI助手"
                  ],
                  "source": "IT之家",
                  "time": "6月16日"
                }
              ]
            },
            {
              "title": "中国移动",
              "news": [
                {
                  "title": "中国移动确认设立Token办公室，集团领导挂帅督战",
                  "summary": "6月29日，中国移动官方确认在集团层面设立Token办公室，统筹「创造Token—输送Token—应用Token」全流程。这是继数智事业部和算力办公室后设立的第三个AI相关专项机构。办公室将重点落地MobileClaw智能体框架和MoMA模型聚合平台。国内日均Token调用量已从2024年初的1000亿次飙升至140万亿次，两年增长超千倍。",
                  "link": "https://finance.eastmoney.com/a/202606293786778442.html",
                  "tags": [
                    "运营商",
                    "Token经济"
                  ],
                  "source": "东方财富",
                  "time": "6月29日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "大众",
              "news": [
                {
                  "title": "大众汽车被曝终止与博世自动驾驶合作，已投入15亿欧元",
                  "summary": "6月29日据德国《图片报》报道，大众汽车计划终止与博世在自动驾驶领域的合作。该项目由大众软件子公司CARIAD牵头，累计投入约15亿欧元、集结超千名研发人员，但因进展未达预期将被终止。大众目前正物色替代合作伙伴，计划9月底前签订新合同。此举是大众削减成本、裁减10万岗位的更广泛重组计划的一部分。",
                  "link": "https://news.ifeng.com/c/8uLyrxtcyXE",
                  "tags": [
                    "合作终止",
                    "战略调整"
                  ],
                  "source": "凤凰网科技",
                  "time": "当地时间6月28日"
                }
              ]
            },
            {
              "title": "Momenta",
              "news": [
                {
                  "title": "Momenta启动港股招股：定价295.6港元，奔驰比亚迪押注",
                  "summary": "6月29日，自动驾驶公司Momenta启动港股IPO招股，定价每股295.6港元，全球发售约1993.83万股，预计募资约58.9亿港元，7月8日挂牌交易。此次引入14家基石投资者认购约3.76亿美元，GIC和富达国际各领投1亿美元，梅赛德斯-奔驰认购2500万美元，比亚迪认购1500万美元。Momenta定位「物理AI第一股」，2025年营收24.13亿元，毛利率71.6%。",
                  "link": "https://stcn.com/article/detail/3986275.html",
                  "tags": [
                    "IPO",
                    "物理AI"
                  ],
                  "source": "证券时报",
                  "time": "6月29日"
                }
              ]
            },
            {
              "title": "联合国自动驾驶法规",
              "news": [
                {
                  "title": "中国参与牵头，全球首个自动驾驶系统全球技术法规获批",
                  "summary": "6月22日至26日，联合国世界车辆法规协调组织第199次全体会议在日内瓦召开，由中国、欧盟、英国、美国、加拿大和日本共同牵头制定的自动驾驶系统全球技术法规（ADS GTR）经全体缔约方投票通过。法规明确了自动驾驶核心技术指标及全生命周期管理框架。中国自2019年起担任相关工作组副主席国和联合主席国，工信部已完成国内配套强制性国标的编制工作。",
                  "link": "https://www.miit.gov.cn/xwfb/gxdt/sjdt/art/2026/art_708b7727cc4544e8bc2f335cdc92b531.html",
                  "tags": [
                    "国际法规",
                    "技术标准"
                  ],
                  "source": "工信部官网",
                  "time": "6月26日"
                }
              ]
            },
            {
              "title": "小鹏汽车",
              "news": [
                {
                  "title": "小鹏发布X-Mind技术框架，让自动驾驶拥有「预见未来」能力",
                  "summary": "6月29日，小鹏汽车正式发布X-Mind技术框架，通过内嵌预测性世界模型赋予车载智能体视觉思维链能力。框架包含思维草图（将12帧世界推演压缩至96个Token）、递归块扩散机制和思维链可视化三大核心技术，可在动作生成前执行显式时空推演。小鹏已形成X-World、X-Foresight、X-Mind、X-Cache四层物理AI基座模型谱系。",
                  "link": "https://www.ithome.com/0/970/079.htm",
                  "tags": [
                    "世界模型",
                    "技术框架"
                  ],
                  "source": "IT之家",
                  "time": "6月29日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "智平方",
              "news": [
                {
                  "title": "智平方完成近50亿元新一轮融资，估值突破200亿元",
                  "summary": "6月29日，具身智能企业智平方宣布完成近50亿元人民币新一轮融资，估值升至超200亿元，成为大湾区首个突破200亿估值的具身智能独角兽。智平方采用端到端VLA技术路线全栈自研具身大模型AlphaBrain，已建成年产2000台以上的半自动化产线。本轮融资后将加速推进机器人大脑迭代升级与规模化量产。",
                  "link": "https://www.cnstock.com/commonDetail/735645",
                  "tags": [
                    "融资",
                    "人形机器人"
                  ],
                  "source": "中国证券报",
                  "time": "6月29日"
                }
              ]
            },
            {
              "title": "纬钛机器人",
              "news": [
                {
                  "title": "纬钛机器人完成Pre-A轮融资，推进视触觉技术产业化",
                  "summary": "6月29日，纬钛机器人宣布完成Pre-A轮融资，由红鸟启航基金领投，领屹投资、永鑫方舟、韦豪创芯、宁波吉德等联合参投，上海天使会联合投资。公司由MIT博士李瑞创立，专注视触觉感知与灵巧操作技术，已发布全球首款分辨率超越人类手指的视触觉传感器。融资将用于技术迭代、执行器落地和海外市场拓展。",
                  "link": "https://stcn.com/article/detail/3984707.html",
                  "tags": [
                    "融资",
                    "视触觉"
                  ],
                  "source": "证券时报",
                  "time": "6月29日"
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
              "title": "韩国半导体投资计划",
              "news": [
                {
                  "title": "韩国宣布5760亿美元半导体与AI产业投资计划",
                  "summary": "6月29日，韩国总统李在明主持召开「大韩民国大飞跃三大超级项目国民报告会」，宣布史上最大规模半导体与AI产业投资计划，总投资超5760亿美元。三星宣布投资2655万亿韩元，SK集团投资2100万亿韩元，政府配套推动西南地区800万亿韩元建设四座晶圆厂。计划将半导体、物理AI和AI数据中心定位为韩国产业升级三大支柱，目标五年内DRAM产能翻倍。",
                  "link": "https://edition.cnn.com/2026/06/29/business/south-korea-ai-investment-samsung-skhynix",
                  "tags": [
                    "产业政策",
                    "半导体"
                  ],
                  "source": "CNN",
                  "time": "6月29日"
                }
              ]
            },
            {
              "title": "半导体涨价潮",
              "news": [
                {
                  "title": "近20家半导体企业7月1日启动新一轮涨价",
                  "summary": "6月29日消息，近20家模拟及功率半导体企业将于7月1日启动新一轮涨价。AI服务器电源管理芯片涨幅15%-25%，工业芯片涨幅10%-15%。本轮涨价由AI数据中心功率芯片需求激增与晶圆代工/原材料成本上升形成共振驱动。英飞凌、德州仪器、扬杰科技、华润微等企业纷纷调价，部分企业订单能见度已达9个月。A股功率半导体板块当日全线大涨。",
                  "link": "https://finance.eastmoney.com/a/202606293786603643.html",
                  "tags": [
                    "芯片涨价",
                    "AI算力"
                  ],
                  "source": "东方财富",
                  "time": "6月29日"
                }
              ]
            },
            {
              "title": "北京太空算力创新中心",
              "news": [
                {
                  "title": "北京太空算力创新中心揭牌，聚焦星载AI芯片等六大方向",
                  "summary": "6月29日，北京太空算力创新中心在全球数字经济大会太空算力论坛上揭牌成立。中心采用「公司+联盟」双轮驱动模式，运营主体为北京天算星联科技有限公司。中心聚焦太空原生算力芯片、星载大模型部署、天地一体云平台等六大攻关方向，同步成立由12位两院院士领衔的专家委员会和108家成员单位的产业联盟。业内预计太空算力商业化拐点有望在2030年前后实现。",
                  "link": "https://www.bjnews.com.cn/detail/1782736353129228.html",
                  "tags": [
                    "太空算力",
                    "星载AI"
                  ],
                  "source": "新京报",
                  "time": "6月29日"
                }
              ]
            },
            {
              "title": "欧盟AI监管",
              "news": [
                {
                  "title": "欧盟批准简化AI监管规则，明令禁止AI生成色情内容",
                  "summary": "6月29日，欧盟理事会正式批准简化AI监管新法案。新规明令禁止利用AI生成未经同意的色情内容或儿童性虐待材料，能通过「消除衣物」技术暴露人体私密部位的AI系统将于今年12月起全面禁用。同时将高风险AI系统合规期限推迟至2027-2028年，中型企业也纳入监管豁免范围。此次修法是欧盟「第七次综合立法方案」的一部分，旨在减轻企业合规负担。",
                  "link": "https://m.ithome.com/html/970202.htm",
                  "tags": [
                    "AI监管",
                    "深伪禁令"
                  ],
                  "source": "IT之家",
                  "time": "6月29日"
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
          "date": "2026-06-25",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5 (Anthropic)",
              "score": "1508",
              "change": "+9"
            },
            {
              "model": "claude-opus-4-6-thinking (Anthropic)",
              "score": "1503",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking (Anthropic)",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-6 (Anthropic)",
              "score": "1499",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7 (Anthropic)",
              "score": "1494",
              "change": "+4"
            },
            {
              "model": "muse-spark (Meta)",
              "score": "1487",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview (Google)",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gemini-3-pro (Google)",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-8-thinking (Anthropic)",
              "score": "1484",
              "change": "+6"
            },
            {
              "model": "gpt-5.5-high (OpenAI)",
              "score": "1481",
              "change": "+5"
            },
            {
              "model": "claude-opus-4-8 (Anthropic)",
              "score": "1479",
              "change": "+6"
            },
            {
              "model": "gpt-5.4-high (OpenAI)",
              "score": "1478",
              "change": "+4"
            },
            {
              "model": "gemini-3.5-flash (Google)",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest (OpenAI)",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "grok-4.20-beta-0309-reasoning (xAI)",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "qwen3.7-max-preview (Alibaba)",
              "score": "1475",
              "change": "+10"
            },
            {
              "model": "gpt-5.5 (OpenAI)",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "grok-4.20-beta1 (xAI)",
              "score": "1474",
              "change": "+5"
            },
            {
              "model": "glm-5.1 (ZhipuAI)",
              "score": "1473",
              "change": "+5"
            },
            {
              "model": "gemini-3-flash (Google)",
              "score": "1473",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-06-30",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash",
              "score": "4.72T tokens",
              "change": "↑5%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.38T tokens",
              "change": "↑7%"
            },
            {
              "model": "MiniMax M3",
              "score": "3.68T tokens",
              "change": "↑2%"
            },
            {
              "model": "Owl Alpha",
              "score": "3.55T tokens",
              "change": "↑31%"
            },
            {
              "model": "Hy3 preview",
              "score": "3.46T tokens",
              "change": "↑6%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.23T tokens",
              "change": "↑9%"
            },
            {
              "model": "GLM 5.2",
              "score": "2.20T tokens",
              "change": "↑46%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.08T tokens",
              "change": "↑17%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1.92T tokens",
              "change": "↑11%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "1.54T tokens",
              "change": "↑1%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.52T tokens",
              "change": "↑52%"
            },
            {
              "model": "GPT-5.5",
              "score": "1.10T tokens",
              "change": "↑2%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "915B tokens",
              "change": "↑2%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "777B tokens",
              "change": "↑34%"
            },
            {
              "model": "Laguna M.1 (free)",
              "score": "679B tokens",
              "change": "↑24%"
            },
            {
              "model": "DeepSeek V3.2",
              "score": "665B tokens",
              "change": "↑31%"
            },
            {
              "model": "Gemini 2.5 Flash Lite",
              "score": "613B tokens",
              "change": "↑10%"
            },
            {
              "model": "Gemini 2.5 Flash",
              "score": "559B tokens",
              "change": "↑10%"
            },
            {
              "model": "MiMo-V2.5-Pro",
              "score": "491B tokens",
              "change": "↑4%"
            },
            {
              "model": "gpt-oss-120b",
              "score": "422B tokens",
              "change": "↑12%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-06-30",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Agent Mode by Receiptor AI",
              "category": "Fintech",
              "rank": 1,
              "link": "https://www.producthunt.com/products/receiptor-ai"
            },
            {
              "name": "Spira for Product Hunt Makers",
              "category": "Social Media",
              "rank": 2,
              "link": "https://www.producthunt.com/products/spira-ai"
            },
            {
              "name": "ClinePass",
              "category": "Developer Tools",
              "rank": 3,
              "link": "https://www.producthunt.com/products/cline-4"
            },
            {
              "name": "VisibAI",
              "category": "Marketing",
              "rank": 4,
              "link": "https://www.producthunt.com/products/visibai-ai-visibility-audit-tool"
            },
            {
              "name": "PMB",
              "category": "Open Source",
              "rank": 5,
              "link": "https://www.producthunt.com/products/pmb-local-first-memory-for-ai"
            },
            {
              "name": "ReadHere",
              "category": "eBook Reader",
              "rank": 6,
              "link": "https://www.producthunt.com/products/readhere-2"
            },
            {
              "name": "Crest",
              "category": "Mac",
              "rank": 7,
              "link": "https://www.producthunt.com/products/crest-3"
            },
            {
              "name": "Sami",
              "category": "Marketing",
              "rank": 8,
              "link": "https://www.producthunt.com/products/sami-automate-pace-scale-your-ads"
            },
            {
              "name": "Outpaint - Ad Reframe",
              "category": "Advertising",
              "rank": 9,
              "link": "https://www.producthunt.com/products/outpaint-com-ad-reframe"
            },
            {
              "name": "Intelli",
              "category": "Customer Communication",
              "rank": 10,
              "link": "https://www.producthunt.com/products/intelli"
            },
            {
              "name": "Upstream FTP",
              "category": "Mac",
              "rank": 11,
              "link": "https://www.producthunt.com/products/upstream-ftp"
            },
            {
              "name": "discode.ai",
              "category": "Productivity",
              "rank": 12,
              "link": "https://www.producthunt.com/products/discode-ai"
            },
            {
              "name": "GetCompress",
              "category": "Mac",
              "rank": 13,
              "link": "https://www.producthunt.com/products/getcompress"
            },
            {
              "name": "Persona.js",
              "category": "Open Source",
              "rank": 14,
              "link": "https://www.producthunt.com/products/persona-12"
            },
            {
              "name": "Dotient",
              "category": "Productivity",
              "rank": 15,
              "link": "https://www.producthunt.com/products/dotient"
            },
            {
              "name": "Lyto",
              "category": "Chrome Extensions",
              "rank": 16,
              "link": "https://www.producthunt.com/products/lyto"
            },
            {
              "name": "Tencent EdgeOne Makers",
              "category": "Website Builder",
              "rank": 17,
              "link": "https://www.producthunt.com/products/tencent-edgeone-2"
            },
            {
              "name": "Bluerails Discovery",
              "category": "Fintech",
              "rank": 18,
              "link": "https://www.producthunt.com/products/bluerails-discovery"
            },
            {
              "name": "BrowserAct",
              "category": "Productivity",
              "rank": 19,
              "link": "https://www.producthunt.com/products/browseract"
            },
            {
              "name": "AgentX",
              "category": "Analytics",
              "rank": 20,
              "link": "https://www.producthunt.com/products/agentx"
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
