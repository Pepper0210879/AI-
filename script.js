// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
    // 其他厂商可能出现的品牌（暂无 logo 的不设 logo 字段，回退到首字母）
    "三星":         { color: "#8aaed4", softBg: "#eef5fb", initial: "三" },
    "小米":         { color: "#d4a882", softBg: "#faf5ee", initial: "米", logo: "logos/小米.jpg" },
    "昆仑万维":     { color: "#a0b0d4", softBg: "#f2f4fa", initial: "昆" },
    "字节跳动":     { color: "#8ab4d4", softBg: "#eef5fb", initial: "字" },
    "Stability AI": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "S" },
    // 自动驾驶/具身智能/投资资讯 中出现的品牌
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
    // 其他关注·独立厂商（Google Favicon API 获取 logo）
    "英特尔":         { color: "#0071c5", softBg: "#e6f0f8", initial: "英", logo: "https://www.google.com/s2/favicons?domain=intel.com&sz=64" },
    "鸿海（富士康）": { color: "#e60012", softBg: "#fde8ec", initial: "鸿", logo: "https://www.google.com/s2/favicons?domain=foxconn.com&sz=64" },
    "网易有道":       { color: "#e4393c", softBg: "#fde8ec", initial: "有", logo: "https://www.google.com/s2/favicons?domain=youdao.com&sz=64" },
    "宇树科技":       { color: "#1a1a2e", softBg: "#e8e8f0", initial: "宇", logo: "https://www.google.com/s2/favicons?domain=unitree.com&sz=64" },
    "Vbot 维他动力":  { color: "#00d4aa", softBg: "#e6faf5", initial: "V", logo: "https://www.google.com/s2/favicons?domain=vbot.ai&sz=64" },
    "博登智能":       { color: "#4a90d9", softBg: "#eef5fb", initial: "博", logo: "https://www.google.com/s2/favicons?domain=bodenai.com&sz=64" },
    "软银集团":       { color: "#c0c0c0", softBg: "#f5f5f5", initial: "软", logo: "https://www.google.com/s2/favicons?domain=softbank.jp&sz=64" },
    // 标签→厂商名映射（用于「其他关注」分类识别公司名）
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
    // 补充 section 级别元数据
    const secMeta = {
        overseas: { title: "海外主要厂商", icon: "fas fa-globe-americas", iconClass: "overseas" },
        domestic: { title: "国内主要厂商", icon: "fas fa-flag", iconClass: "domestic" },
        other:    { title: "其他关注", icon: "fas fa-layer-group", iconClass: "other" },
        ranking:  { title: "榜单情况", icon: "fas fa-trophy", iconClass: "ranking" }
    };
    for (const [key, meta] of Object.entries(secMeta)) {
        if (data.sections[key]) Object.assign(data.sections[key], meta);
    }
    // 补充海外/国内厂商的展示字段
    for (const secKey of ['overseas', 'domestic']) {
        const vendors = data?.sections?.[secKey]?.vendors;
        if (!vendors) continue;
        for (const v of vendors) {
            const cfg = VENDOR_DISPLAY[v.name];
            if (cfg) { v.color = cfg.color; v.softBg = cfg.softBg; v.initial = cfg.initial; v.logo = cfg.logo; }
        }
    }
    // 补充「其他关注」分类的展示字段
    const categories = data?.sections?.other?.categories;
    if (categories) {
        for (const c of categories) {
            const cfg = CATEGORY_DISPLAY[c.name];
            if (cfg) { c.icon = cfg.icon; c.color = cfg.color; c.softBg = cfg.softBg; }
        }
    }
    // 补充榜单平台的展示字段
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
        if (map[tag]) return map[tag];  // 返回厂商名字符串
    }
    return null;
}

function loadNewsData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            // 检测旧格式数据（含 change 或 upvotes 字段），自动清除
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
    // 在新数据覆盖前，检查过往日期是否有遗漏确认（24 点自动确认）
    autoConfirmBeforeRefresh();

    // 同时检查 localStorage 和 data.js，取日期更近的
    let lsData = null;
    let rawData = null;

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) lsData = JSON.parse(saved);
    } catch (e) { /* ignore */ }

    if (window.__RAW_DATA) rawData = window.__RAW_DATA;

    // 比较日期（字符串可直接比较，如 "2026-05-30" > "2026-05-29"）
    // 只有 localStorage 日期严格大于 data.js 时，才认为用户手动编辑了更新日期
    const rawDate = rawData?.date || '';
    const lsDate = lsData?.date || '';
    // 仅当 localStorage 标记了手动编辑，且其编辑时间比 data.js 更新时，才保留本地数据
    // 如果 data.js 的编辑时间更新（别人刚改过），则 data.js 优先
    const lsEditTime = lsData?._manualEdit ? new Date(lsData._manualEdit).getTime() : 0;
    const rawEditTime = rawData?._manualEdit ? new Date(rawData._manualEdit).getTime() : 0;
    const isManualEdit = lsData?._manualEdit && lsDate === rawDate && lsEditTime >= rawEditTime;

    if (lsDate > rawDate || isManualEdit) {
        // localStorage 日期更新 → 用户手动编辑优先
        if (lsData) {
            delete lsData._manualEdit; // 清理内部标记
            enrichData(lsData);
            console.log('已从 localStorage 加载新闻数据（用户编辑优先）');
            return lsData;
        }
    }

    // data.js 日期 >= localStorage → 新抓取数据优先覆盖
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

    // 尝试 fetch data.json
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
    // 一次性补充被跳过的历史日期（如 5/27→5/29 的更新导致 5/28 版本丢失）
    // 同时清理无效日期（已明确不应存在的日期）
    try {
        const INVALID_DATES = ['2026-05-26'];  // 无内容日期，强制清除
        const confirmed = JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
        let changed = false;

        // 清除无效日期
        for (const d of INVALID_DATES) {
            if (confirmed[d]) {
                delete confirmed[d];
                changed = true;
                console.log('清除无效日期:', d);
            }
        }

        // 版本检查：种子数据更新后自动清除全部缓存，无需用户手动操作
        const seedVersion = window.__SEED_VERSION || 1;
        const cachedVersion = localStorage.getItem('ai-news-seed-version');
        if (String(seedVersion) !== cachedVersion) {
            localStorage.removeItem(CONFIRMED_KEY);
            localStorage.removeItem(STORAGE_KEY);
            localStorage.setItem('ai-news-seed-version', String(seedVersion));
            console.log('种子数据版本更新，已自动清除全部缓存，刷新后即见最新数据');
        }

        // 注入种子数据（始终覆盖，确保服务端修复能同步到客户端）
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
    // 首先注入种子数据
    seedConfirmedData();

    // 如果旧数据存在，且昨天未确认 → 用旧数据自动确认昨天
    try {
        const oldSaved = localStorage.getItem(STORAGE_KEY);
        if (!oldSaved) return;
        const oldData = JSON.parse(oldSaved);
        const oldDate = oldData.date; // 如 "2026-05-27"
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
    // DOMContentLoaded 可能已经触发过了
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }
})();

function initPage() {
    // 始终展示最新可用日期的新闻
    // loadNewsDataFromJSON 已自动选择最新数据源（data.js vs localStorage）
    const todayStr = getTodayStr();
    const currentDate = newsData?.date || todayStr;
    const savedDate = localStorage.getItem(LAST_VIEWED_DATE_KEY);

    // 如果数据已更新到更新日期，自动同步并清除旧的历史浏览记录
    if (savedDate && currentDate > savedDate) {
        localStorage.setItem(LAST_VIEWED_DATE_KEY, currentDate);
        console.log(`网页已更新：从 ${savedDate} 自动刷新到最新日期 ${currentDate}`);
    }

    updateHeaderDate();
    renderContent();
    setupEventListeners();
}

// ==================== 全局状态 ====================
const state = {
    currentCategory: 'all',
    isLoading: false
};

// ==================== 初始化 ====================
// 初始化已移至 dataReady（异步加载 data.json 后触发）

function updateHeaderDate(dateStr) {
    // 顶部日期：默认显示更新当天；日期选择器可覆盖
    const today = new Date();
    const d = dateStr ? new Date(dateStr + 'T00:00:00') : today;

    // 更新时间：显示最后一次数据操作时间（scraper 抓取或后台保存）
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

    // 顶部日期：更新当天的日期 + 星期
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

// ==================== 渲染内容 ====================
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

    // 按 rowSizes 分组渲染
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

    // 只保留有卡片的分类
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

    // Tab 切换事件
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
        // 卡片图标：尝试从 VENDOR_DISPLAY 匹配
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

// ==================== 事件监听 ====================
function setupEventListeners() {
    // 分类标签
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCategory(btn));
    });

    // 日期选择
    setupDateSelector();

    // 导出 PDF
    document.querySelector('.export-btn').addEventListener('click', () => {
        showToast('正在打开打印对话框，选择「存储为PDF」即可...');
        setTimeout(() => window.print(), 500);
    });

    // 回到顶部
    setupBackToTop();

    // 键盘导航
    setupKeyboardNav();

    // 近期新闻标题点击（无新闻厂商卡片内的历史链接）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const title = e.target.closest('.vendor-card-recent-title[data-link]');
        if (!title) return;
        e.stopPropagation();
        e.preventDefault();
        window.open(title.dataset.link, '_blank', 'noopener');
    });

    // 厂商卡片点击（事件委托）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.vendor-card');
        if (!card) return;
        const category = card.dataset.category;
        const vendorIndex = parseInt(card.dataset.vendorIndex);
        openVendorModal(category, vendorIndex);
    });

    // 厂商卡片键盘
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

    // 其他关注卡片点击（事件委托）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.other-news-card');
        if (!card) return;
        const catIndex = parseInt(card.dataset.catIndex);
        const cardIndex = parseInt(card.dataset.cardIndex);
        const newsItem = e.target.closest('.vendor-card-news-item');
        const newsIndex = newsItem ? parseInt(newsItem.dataset.newsIndex) : 0;
        openOtherNewsModal(catIndex, cardIndex, newsIndex);
    });

    // 弹窗关闭
    document.getElementById('modal-close').addEventListener('click', closeVendorModal);
    document.getElementById('vendor-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeVendorModal();
    });

    // ESC 关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('vendor-modal').classList.contains('active')) {
                closeVendorModal();
            } else if (document.getElementById('source-modal').classList.contains('active')) {
                closeSourceModal();
            }
        }
    });

    // 信源说明弹窗
    document.getElementById('source-info-btn').addEventListener('click', openSourceModal);
    document.getElementById('source-modal-close').addEventListener('click', closeSourceModal);
    document.getElementById('source-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeSourceModal();
    });

    // 板块折叠
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

    // 限制可选范围：最早有内容的日期 ~ 今天
    const confirmed = getConfirmedDates();
    const confirmedDates = Object.keys(confirmed).sort();
    const minDate = confirmedDates.length > 0 ? confirmedDates[0] : todayStr;
    dateInput.min = minDate;
    dateInput.max = todayStr;

    // 初始值设为当前展示的日期
    const displayDate = newsData?.date || todayStr;
    dateInput.value = displayDate;
    let lastValidDate = displayDate;

    // 点击按钮展开日期选择器
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

        // 校验：只有今天或已确认日期可选
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
    // 从历史确认数据中查找该厂商最近 2-3 条新闻（7 天内窗口）
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
    // 分类标签键盘导航
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

// ==================== 弹窗逻辑 ====================
function openVendorModal(category, vendorIndex) {
    const vendor = newsData.sections[category].vendors[vendorIndex];
    if (!vendor || vendor.news.length === 0) return;

    // Header
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

    // Body — 所有新闻堆叠展示
    renderModalBody(vendor);

    // Show
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

    // 卡片标题由数据决定
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

// ==================== 导出 ====================
function downloadReport() {
    const d = new Date();
    const dateStr = d.toLocaleDateString('zh-CN').replace(/\//g, '-');
    const sections = newsData.sections;

    // Markdown 格式
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

// ==================== 加载 & 通知 ====================
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


// ==================== 控制台 ====================
console.log('%c每日AI早报', 'color: #4a9eff; font-size: 20px; font-weight: bold;');
console.log('%c每天为你精选AI领域最新动态', 'color: #a0a0b0; font-size: 14px;');
