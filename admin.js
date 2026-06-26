const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-06-26",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI倾向将IPO推迟至2027年",
              "summary": "据《纽约时报》报道，OpenAI正倾向于将首次公开募股推迟到2027年。三位知情人士称，投行顾问提醒近期科技股波动及SpaceX上市后股价回落，可能削弱散户投资者对OpenAI发行的热情，当前市场条件未必能支撑Sam Altman设想中的1万亿美元估值。OpenAI已于6月9日向SEC秘密提交IPO申请，CFO称公司尚未为公开报告标准做好准备。",
              "link": "https://m.ithome.com/html/968734.htm",
              "tags": [
                "IPO",
                "资本市场",
                "估值"
              ],
              "source": "IT之家",
              "time": "6月25日消息"
            },
            {
              "title": "OpenAI以5.8万亿元位列全球独角兽第二",
              "summary": "胡润《2026全球独角兽榜》6月25日发布，ChatGPT母公司OpenAI以5.8万亿元价值位列全球第二。前三名均布局大模型业务，随着SpaceX完成史上最大IPO上市退出榜单，Claude母公司Anthropic以6.6万亿元登顶，豆包母公司字节跳动以3.3万亿元位列第三。全球独角兽企业数量达1603家创历史新高，总价值54万亿元。",
              "link": "https://m.jiemian.com/article/14646145.html",
              "tags": [
                "独角兽",
                "估值",
                "胡润榜"
              ],
              "source": "界面新闻",
              "time": "6月25日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic成全球价值最高独角兽，价值6.6万亿元",
              "summary": "胡润《2026全球独角兽榜》6月25日发布，Claude母公司Anthropic以6.6万亿元人民币估值跃居全球价值最高独角兽，单年增值6.1万亿元创胡润独角兽榜历史纪录。报告指出，前三名均布局大模型业务，随着SpaceX完成史上最大IPO退出榜单，AI企业包揽前三。OpenAI以5.8万亿元位列第二，字节跳动3.3万亿元第三。DeepSeek以3400亿元跻身前15名，成为全球新晋独角兽首位。",
              "link": "https://m.jiemian.com/article/14646145.html",
              "tags": [
                "独角兽",
                "估值",
                "胡润榜"
              ],
              "source": "界面新闻",
              "time": "6月25日"
            },
            {
              "title": "Google两名Gemini核心研究员转投Anthropic",
              "summary": "据彭博社报道，Google两名资深AI研究员Jonas Adler和Alexander Pritzel计划离职加入Anthropic。两人在Google内部被视为Gemini模型的关键贡献者，Adler参与AI编程相关工作，Pritzel参与AI系统训练流程。此前诺贝尔化学奖得主John Jumper也已宣布加入Anthropic，三人早年曾共同参与AlphaFold研究，相当于以团队形式集体转投。Google DeepMind CEO Hassabis称当前行业正处于「极其激烈」的人才竞争阶段。",
              "link": "https://www.ithome.com/0/968/224.htm",
              "tags": [
                "人才流动",
                "AI研究"
              ],
              "source": "IT之家",
              "time": "6月25日消息"
            },
            {
              "title": "Anthropic致信美参议院指控阿里实施蒸馏攻击",
              "summary": "据CNBC报道，Anthropic已向美国参议院银行委员会致信，指控阿里巴巴使用近2.5万个虚假账户，在4月22日至6月5日期间与Claude模型进行超2880万次交互，实施「迄今已知最大规模的蒸馏攻击」。指控称攻击主要针对Claude的软件工程、智能体推理和长周期任务规划等高价值能力。Anthropic呼吁美国政府加强打击非法蒸馏并继续对先进AI芯片实施出口管制。阿里暂未回应。",
              "link": "https://tech.ifeng.com/c/8uF70icCNs4",
              "tags": [
                "模型安全",
                "蒸馏攻击",
                "中美AI"
              ],
              "source": "凤凰网科技",
              "time": "6月25日消息"
            },
            {
              "title": "Anthropic更换联合创始人布朗对接美政府协商解封Fable 5",
              "summary": "据Wired报道，因CEO达里奥·阿莫迪被美方官员评价为「难以沟通」「态度强硬」，Anthropic已由联合创始人汤姆·布朗取代阿莫迪，与美国政府重启Claude Fable 5大模型重新上线事宜的会谈。美方官员称布朗「能真正坐下来务实交流」。此前因NSA确认存在绕过模型安全护栏的手段，美国政府于6月12日强制下线Fable 5和Mythos两款模型，至今未解除管制。",
              "link": "https://www.ithome.com/0/968/389.htm",
              "tags": [
                "模型管制",
                "政府关系",
                "Fable 5"
              ],
              "source": "IT之家",
              "time": "6月25日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "Google将Computer Use内置进Gemini 3.5 Flash",
              "summary": "当地时间6月24日，Google DeepMind宣布将Computer Use能力原生集成到Gemini 3.5 Flash模型中。此前该功能仅作为独立的Gemini 2.5 Computer Use预览模型提供，现成为Gemini 3.5 Flash的内置工具，同一模型可同时支持推理、搜索和计算机操作。OSWorld验证UI控制得分78.4%，较此前独立模型提升约8个百分点。开发者可通过Gemini API调用，构建浏览器、移动端和桌面控制智能体。",
              "link": "https://www.chinaz.com/ainews/29158.shtml",
              "tags": [
                "AI Agent",
                "Computer Use",
                "多模态"
              ],
              "source": "站长之家",
              "time": "当地时间6月24日"
            },
            {
              "title": "谷歌重组AI编程攻坚小组以追赶Anthropic",
              "summary": "据The Information报道，谷歌正对其刚成立的AI编程工具专项攻坚小组进行重组，调整训练思路以同步提升代码生成与演示文稿等多场景能力，并将临时团队固化为正式组织。此次重组发生在Jonas Adler和Alexander Pritzel等核心研究员计划转投Anthropic之后。此前谷歌管理层曾认为只要基础模型足够强自然具备出色代码能力，但Anthropic的Claude代码助手已成为开发者首选工具。",
              "link": "https://36kr.com/newsflashes/3868733981562118",
              "tags": [
                "AI编程",
                "组织调整",
                "人才流失"
              ],
              "source": "36氪",
              "time": "6月25日消息"
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
              "title": "黄仁勋股东大会：物理AI是下一波增长浪潮",
              "summary": "当地时间6月24日，英伟达举行年度股东大会。CEO黄仁勋表示AI投资回报率的问题「已有答案」，将AI数据中心定义为制造token的工厂，每个token都是利润单位。黄仁勋把「物理AI」称为下一波增长浪潮，认为机器人、汽车和工厂将成为现实世界中的智能体，能感知、推理、规划并自主行动。他还宣布计划在未来将50%或更多自由现金流返还给股东，Vera Rubin平台已全面量产。",
              "link": "http://www.nbd.com.cn/articles/2026-06-25/4436827.html",
              "tags": [
                "物理AI",
                "AI工厂",
                "股东回报"
              ],
              "source": "每日经济新闻",
              "time": "当地时间6月24日"
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
              "title": "阿里云QoderWork推出「峰谷Token」夜间低至2折",
              "summary": "6月24日，阿里云旗下AI编程工具QoderWork推出「峰谷Token」定价机制，借鉴电力峰谷计价逻辑，每晚22:00至次日8:00时段，Qwen3.7-Max模型调用价格低至2折，其他模型折扣20%~40%。该功能覆盖QoderWork全产品线，开发者可日间预设定时任务或睡前提交长程指令，Agent夜间自动执行。Qwen3.7-Max在Code Arena编程评测中以1541分位列全球第二，仅次于Claude系列。",
              "link": "https://www.chinaz.com/2026/0624/1760822.shtml",
              "tags": [
                "峰谷定价",
                "编程工具",
                "成本优化"
              ],
              "source": "站长之家",
              "time": "6月24日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "字节跳动以3.3万亿元位列全球独角兽第三",
              "summary": "胡润《2026全球独角兽榜》6月25日发布，豆包母公司字节跳动以3.3万亿元价值位列全球第三。前三名均布局大模型业务，Anthropic以6.6万亿元登顶，OpenAI以5.8万亿元位列第二。字节跳动旗下豆包大模型持续迭代，最新2.1版本已上线专业版付费服务，包月68元起。全球独角兽企业数量达1603家创历史新高，总价值54万亿元。",
              "link": "https://m.jiemian.com/article/14646145.html",
              "tags": [
                "独角兽",
                "估值",
                "豆包"
              ],
              "source": "界面新闻",
              "time": "6月25日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek计划将所有部门规模扩大至少一倍",
              "summary": "6月25日，DeepSeek发布大规模招聘公告，覆盖7大类33个岗位，工作地点为北京和杭州，所有岗位接受实习。公司表示正努力将所有部门规模扩大至少一倍，这是DeepSeek成立以来规模最大的一次公开招聘。其中Agent Harness团队为全新组建，对标Anthropic旗下Claude Code，负责人崔添翼称团队人员非常紧缺。此次扩招背后是DeepSeek刚完成的约510亿元首轮外部融资，估值接近4000亿元。",
              "link": "https://tech.ifeng.com/c/8uGHU1YVm20",
              "tags": [
                "招聘",
                "团队扩张",
                "Agent"
              ],
              "source": "凤凰网科技",
              "time": "6月25日"
            },
            {
              "title": "DeepSeek以3400亿元跻身全球独角兽前15",
              "summary": "胡润《2026全球独角兽榜》6月25日发布，DeepSeek以3400亿元人民币估值跻身全球独角兽企业前15名，并成为全球308家新晋独角兽企业榜首。榜单显示AI独角兽强势崛起，前三名Anthropic、OpenAI、字节跳动均布局大模型业务。DeepSeek近期刚完成约510亿元首轮外部融资，创始人梁文锋个人出资约200亿元为最大单一出资方。",
              "link": "https://www.sohu.com/a/1041466399_115433",
              "tags": [
                "独角兽",
                "融资",
                "估值"
              ],
              "source": "搜狐",
              "time": "6月25日"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "企业微信5.0.9上线：AI服务总结与智能助理「大圆」",
              "summary": "6月25日，企业微信发布5.0.9版本，上线多项AI能力。核心功能「AI服务总结」可自动读取员工与微信客户的聊天记录，梳理客户需求、意向等级和成交卡点，并每日筛选高价值待跟进客户。首款原生AI智能助理「大圆」开启内测，支持总结聊天、读写文档表格、汇总项目进展和联网搜索。智能表格新增100+「AI字段」技能卡，支持批量提取文件信息和处理图片。企业微信已接入超1400万企业与组织。",
              "link": "https://www.chinaz.com/ainews/29101.shtml",
              "tags": [
                "AI助理",
                "企业服务",
                "客户管理"
              ],
              "source": "站长之家",
              "time": "6月25日"
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
          "news": [
            {
              "title": "月之暗面黄震昕：Kimi目标对标海外模型三强",
              "summary": "6月25日，月之暗面B端业务负责人黄震昕在亚马逊云科技中国峰会上透露，Kimi企业业务占比持续提升，互联网、金融、制造、教育、医疗等已成为重要客户来源，海外业务也在快速增长。公司目前仅300多名员工，资源配置最高优先级仍在模型研发。黄震昕明确表示Kimi最终希望与OpenAI、Google、Anthropic三家海外头部模型公司竞争，目前Cache命中率已超90%，海外付费用户增长4倍。",
              "link": "https://36kr.com/p/3868382544647177",
              "tags": [
                "B端业务",
                "企业服务",
                "国际化"
              ],
              "source": "36氪",
              "time": "6月25日"
            }
          ]
        },
        {
          "name": "华为",
          "news": [
            {
              "title": "华为联合湖北移动完成AI推理加速现网测试",
              "summary": "6月24日，在2026 MWC上海展期间，华为与湖北移动联合宣布完成全国运营商首个AI推理加速方案现网测试。测试基于华为OceanStor A800存储与昇腾A3超节点架构，搭载UCM推理记忆数据管理技术，在长序列AI推理场景下，MiniMax M2.5和GLM-5.1模型的Token吞吐率最高提升372%。湖北移动地处全国八大算力枢纽10毫秒时延圈核心区，该方案有望大幅降低运营商Token成本。",
              "link": "https://www.ithome.com/0/968/730.htm",
              "tags": [
                "AI推理",
                "昇腾",
                "运营商"
              ],
              "source": "IT之家",
              "time": "6月24日"
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
              "title": "IBM",
              "news": [
                {
                  "title": "IBM发布全球首个亚1纳米芯片技术",
                  "summary": "6月25日，IBM宣布推出全球首款亚纳米芯片工艺技术，采用0.7纳米（7埃）节点和革命性NanoStack三维垂直堆叠晶体管架构，在指甲盖大小的芯片上集成近1000亿个晶体管，密度约为其2021年2纳米芯片的两倍。相较2纳米节点，性能最高提升50%，能效提升70%。该技术面向生成式AI、云基础设施等计算场景，预计未来5年内进入商业化生产。IBM盘前股价一度涨超6%。",
                  "link": "https://www.ithome.com/0/968/648.htm",
                  "tags": [
                    "芯片技术",
                    "亚纳米",
                    "晶体管"
                  ],
                  "source": "IT之家",
                  "time": "6月25日"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "苹果Siri AI新增限制：明确拒绝读取网页链接",
                  "summary": "6月24日发布的iOS 27开发者Beta 2中，苹果在Siri AI系统提示词中加入新规则，要求Siri明确告知用户无法访问URL背后的网页内容，且不得提供后续建议或变通方案。分析认为此举旨在防止AI聊天机器人直接抓取和总结网页内容，保护开放网页生态和内容创作者利益。在Safari浏览器中用户浏览当前页面时仍可调用Apple Intelligence生成摘要，但不能通过粘贴URL触发。",
                  "link": "https://www.ithome.com/0/968/266.htm",
                  "tags": [
                    "Siri",
                    "网页内容",
                    "隐私"
                  ],
                  "source": "IT之家",
                  "time": "当地时间6月24日"
                }
              ]
            },
            {
              "title": "中兴",
              "news": [
                {
                  "title": "中兴董事长方榕：新一代AI手机近期上市",
                  "summary": "6月23日至25日，世界经济论坛第十七届新领军者年会在大连举行。中兴通讯董事长方榕在「AI与未来增长」午餐会上表示，中兴新一代AI手机即将在近期上市，这是公司将智能能力从云端推向端侧的重要一步。新机将提供「听得懂、能干活」的交互体验，将AI智能体深度融入操作系统，融合自研Co Claw智能调度技术，支持跨应用、跨生态协同。中兴正与字节跳动等生态伙伴合作推进豆包AI手机研发。",
                  "link": "https://www.cnstock.com/commonDetail/734007",
                  "tags": [
                    "AI手机",
                    "端侧AI",
                    "智能体"
                  ],
                  "source": "上海证券报",
                  "time": "6月25日消息"
                }
              ]
            },
            {
              "title": "蚂蚁集团",
              "news": [
                {
                  "title": "蚂蚁阿福上线「科学减重1亿斤」AI健康行动",
                  "summary": "6月25日，蚂蚁集团旗下阿福App正式发起「科学减重1亿斤」健康行动，用户可1分钱领取支持18项身体数据测量的体脂秤。阿福App同步升级AI解读功能，可基于用户体脂数据、历史体检报告生成个性化身体小结，给出重点关注事项、饮食运动建议和行动提醒。不同于一刀切的通用建议，AI能根据用户生活习惯给出可落地的个性化方案，标志着AI健康管理从概念走向规模化应用。",
                  "link": "https://tech.cnr.cn/techph/20260625/t20260625_527676203.shtml",
                  "tags": [
                    "AI健康",
                    "体脂秤",
                    "个性化"
                  ],
                  "source": "央广网",
                  "time": "6月25日"
                }
              ]
            },
            {
              "title": "百度",
              "news": [
                {
                  "title": "文心一言官网关闭，7月26日迁移至百度文心",
                  "summary": "6月25日零时起，文心一言官网提问入口关闭，服务将于7月26日正式迁移至全新百度文心网站。6月25日至7月25日为缓冲期，用户可导出历史对话记录、收藏内容等个人数据。新网站基于文心5.1大模型打造一站式AI服务入口，整合AI对话、PPT生成、AI绘图、Office在线编辑、AI志愿报告等功能。2025年2月13日前购买的付费会员可按剩余时长比例退款。",
                  "link": "https://tech.ifeng.com/c/8uEhW7vt7q9",
                  "tags": [
                    "产品升级",
                    "服务整合",
                    "文心一言"
                  ],
                  "source": "凤凰网科技",
                  "time": "6月25日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "联合国自动驾驶法规",
              "news": [
                {
                  "title": "全球首个自动驾驶系统全球技术法规获批发布",
                  "summary": "6月25日，由中国、欧盟、英国、美国、加拿大和日本共同牵头制定的联合国自动驾驶系统全球技术法规（ADS GTR）在联合国世界车辆法规协调组织第199次全体会议上正式获批发布，成为全球首个自动驾驶全球技术法规。该法规明确了自动驾驶系统的核心技术指标、安全管理过程保障、全流程试验验证体系及车辆部署后安全等要求。中国自2018年起担任相关工作组副主席国，提交了数十项技术提案。",
                  "link": "https://m.gmw.cn/2026-06/25/content_1304509491.htm",
                  "tags": [
                    "自动驾驶",
                    "全球法规",
                    "联合国"
                  ],
                  "source": "光明网",
                  "time": "6月25日"
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
          "cards": []
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "AI耗水与环保",
              "news": [
                {
                  "title": "AI全产业链一年耗水230亿立方米",
                  "summary": "本届夏季达沃斯论坛上，AI用水成为热点话题。毕马威中国副主席吴旭初指出，与AI聊天5分钟约消耗500毫升散热用水；美国国家地理学会温波称向AI提10个问题约消耗一瓶矿泉水。世界经济论坛报告显示，芯片制造、发电和数据中心三大环节构成的AI全产业链一年消耗230亿立方米淡水，占全球工业淡水取用总量的3.7%。全球约40%数据中心和近三分之一芯片工厂建在缺水地区。",
                  "link": "https://k.sina.com.cn/article_2258727970_m86a1742203302g42g.html",
                  "tags": [
                    "AI能耗",
                    "水资源",
                    "可持续"
                  ],
                  "source": "央视财经",
                  "time": "6月25日消息"
                }
              ]
            },
            {
              "title": "李飞飞（World Labs创始人）",
              "news": [
                {
                  "title": "李飞飞：10年后职场或只剩两类工作者",
                  "summary": "在近期的Silicon Valley Girl播客访谈中，美国国家工程院院士、World Labs创始人李飞飞与MasterClass CEO David Rogier探讨AI对职场的影响。Rogier提出未来职场将呈「杠铃效应」：一端是领域顶尖专家，另一端是能用AI完成多类任务的高主动性通才，中间层生存空间正在被压缩。李飞飞认同并强调，核心在于「agency」——主动理解、使用并驾驭工具的能力，而非被动等待被替代。",
                  "link": "https://news.qq.com/rain/a/20260625A04DWL00",
                  "tags": [
                    "职场变革",
                    "AI素养",
                    "观点"
                  ],
                  "source": "腾讯新闻",
                  "time": "6月25日消息"
                }
              ]
            },
            {
              "title": "AI眼镜自律公约",
              "news": [
                {
                  "title": "工信部指导发布《AI眼镜可信视界自律公约》",
                  "summary": "6月17日，在工信部信息通信管理局指导下，中国信通院联合深圳市AI眼镜产业联盟在2026人工智能眼镜生态大会上正式发布《AI眼镜可信视界自律公约》。公约提出三大支柱15条准则：用户隐私守护（最小必要原则、透明告知）、终端技术可控（算法可解释、本地化优先、5年安全更新）、全链数据合规（数据分类分级、跨境传输合规）。雷鸟创新、Rokid、中兴通讯等多家企业参与签署。",
                  "link": "https://www.ithome.com/0/968/733.htm",
                  "tags": [
                    "AI眼镜",
                    "隐私保护",
                    "行业规范"
                  ],
                  "source": "IT之家",
                  "time": "6月17日"
                }
              ]
            },
            {
              "title": "具身智能市场",
              "news": [
                {
                  "title": "我国具身智能市场规模2026年预计突破万亿元",
                  "summary": "据央视财经报道，2025年中国具身智能市场规模约9150亿元，预计2026年将达10904亿元，正式突破万亿元大关。全国具身智能相关企业数量已突破万家。国家发改委此前表示将全面推进具身智能领域高质量发展，加快训练基础设施建设，推动机器人「进工厂、进商场、进家庭」。产业链从核心零部件到整机系统再到场景应用，闭环正在加速成型。",
                  "link": "https://www.ithome.com/0/968/702.htm",
                  "tags": [
                    "具身智能",
                    "市场规模",
                    "产业数据"
                  ],
                  "source": "IT之家",
                  "time": "6月26日消息"
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
              "model": "claude-fable-5",
              "score": "1508",
              "change": "+9"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1503",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1502",
              "change": "+4"
            },
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
              "change": "+16"
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
              "change": "+6"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1481",
              "change": "+5"
            },
            {
              "model": "claude-opus-4-8",
              "score": "1479",
              "change": "+6"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1478",
              "change": "+4"
            },
            {
              "model": "gemini-3.5-flash",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "grok-4.20-beta-0309-reasoning",
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
              "model": "grok-4.20-beta1",
              "score": "1474",
              "change": "+5"
            },
            {
              "model": "glm-5.1",
              "score": "1473",
              "change": "+5"
            },
            {
              "model": "gemini-3-flash",
              "score": "1473",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-06-26",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash",
              "score": "4.94T tokens",
              "change": "↑8%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.42T tokens",
              "change": "↑16%"
            },
            {
              "model": "MiniMax M3",
              "score": "3.80T tokens",
              "change": "↑14%"
            },
            {
              "model": "Hy3 preview",
              "score": "3.26T tokens",
              "change": "↑10%"
            },
            {
              "model": "Owl Alpha",
              "score": "3.15T tokens",
              "change": "↑32%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.37T tokens",
              "change": "↑21%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.09T tokens",
              "change": "↑11%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1.98T tokens",
              "change": "↑47%"
            },
            {
              "model": "GLM 5.2",
              "score": "1.83T tokens",
              "change": "↑209%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "1.48T tokens",
              "change": "↑9%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-06-25",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Oxlo.ai",
              "category": "API",
              "rank": 1,
              "link": "https://oxlo.ai"
            },
            {
              "name": "BrowserAct",
              "category": "Productivity",
              "rank": 2,
              "link": "https://browseract.com"
            },
            {
              "name": "Zaro",
              "category": "Productivity",
              "rank": 3,
              "link": "https://zaro.ai"
            },
            {
              "name": "Figma Motion",
              "category": "Design Tools",
              "rank": 4,
              "link": "https://figma.com"
            },
            {
              "name": "Brain³ by ClickUp",
              "category": "Productivity",
              "rank": 5,
              "link": "https://clickup.com"
            },
            {
              "name": "Samepage Signals",
              "category": "Productivity",
              "rank": 6,
              "link": "https://samepage.io"
            },
            {
              "name": "Tough Tongue AI for Sales",
              "category": "Sales",
              "rank": 7,
              "link": "https://toughtongue.ai"
            },
            {
              "name": "Polygraph",
              "category": "Developer Tools",
              "rank": 8,
              "link": "https://polygraph.dev"
            },
            {
              "name": "Genspark Design",
              "category": "Design Tools",
              "rank": 9,
              "link": "https://genspark.ai"
            },
            {
              "name": "Papermark Agents",
              "category": "API",
              "rank": 10,
              "link": "https://papermark.io"
            },
            {
              "name": "MeetPoint",
              "category": "Travel",
              "rank": 11,
              "link": "https://meetpoint.com"
            },
            {
              "name": "Postproxy",
              "category": "API",
              "rank": 12,
              "link": "https://postproxy.com"
            },
            {
              "name": "Grass 2.0",
              "category": "Developer Tools",
              "rank": 13,
              "link": "https://grass.io"
            },
            {
              "name": "Milestones",
              "category": "Productivity",
              "rank": 14,
              "link": "https://milestones.app"
            },
            {
              "name": "Nashra",
              "category": "Design Tools",
              "rank": 15,
              "link": "https://nashra.com"
            },
            {
              "name": "Dub Ninja",
              "category": "Music",
              "rank": 16,
              "link": "https://dubninja.com"
            },
            {
              "name": "SendTidings",
              "category": "Productivity",
              "rank": 17,
              "link": "https://sendtidings.com"
            },
            {
              "name": "Heron",
              "category": "Developer Tools",
              "rank": 18,
              "link": "https://heron.dev"
            },
            {
              "name": "SayCraft",
              "category": "Developer Tools",
              "rank": 19,
              "link": "https://saycraft.ai"
            },
            {
              "name": "VTT for Mac",
              "category": "Productivity",
              "rank": 20,
              "link": "https://vtt.app"
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
