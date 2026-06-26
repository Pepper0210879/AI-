// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
