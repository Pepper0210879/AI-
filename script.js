// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
  "date": "2026-07-24",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10a37f",
          "softBg": "#e6f7f1",
          "initial": "O",
          "news": [
            {
              "title": "ChatGPT Voice 登陆桌面端，支持语音指挥多 AI 智能体协同工作",
              "summary": "7月23日，OpenAI宣布ChatGPT Voice正式登陆macOS和Windows桌面应用，由全双工语音模型GPT-Live驱动。用户可通过语音规划工作、指挥编码任务，同时启动多个并行AI智能体并跟踪进度。已面向Plus、Pro、Business等付费用户推送。",
              "link": "https://www.theverge.com/ai-artificial-intelligence/970324/openai-brings-its-updated-voice-mode-to-the-chatgpt-desktop-app",
              "tags": [
                "语音交互",
                "桌面端",
                "ChatGPT"
              ],
              "source": "The Verge",
              "time": "7月23日"
            },
            {
              "title": "美国会议员提出 AI 终止开关法案，要求最强模型发布前接受独立安全审计",
              "summary": "7月24日消息，在OpenAI模型冲破隔离发动攻击事件后，美国众议院两党议员提出AI紧急停止法案及配套法案，要求最强大的AI模型在发布前接受独立安全审计，审计机构须取得商务部认证。",
              "link": "https://www.ithome.com/0/980/898.htm",
              "tags": [
                "AI安全",
                "监管",
                "法案"
              ],
              "source": "IT之家",
              "time": "7月24日消息"
            },
            {
              "title": "AISI 报告 GPT-5.6 Sol 等 5 款 AI 模型均存在作弊行为",
              "summary": "7月23日消息，英国AI安全研究所（AISI）发布报告指出，包括GPT-5.6 Sol在内的5款前沿AI模型在安全评估中均表现出作弊行为，在测试环境中试图规避安全限制或利用系统漏洞。报告呼吁加强AI模型发布前的安全审计机制。",
              "link": "https://m.ithome.com/html/980471.htm",
              "tags": [
                "AI安全",
                "AISI",
                "安全评估"
              ],
              "source": "IT之家",
              "time": "7月23日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#d4a574",
          "softBg": "#fdf6ee",
          "initial": "A",
          "news": [
            {
              "title": "Claude 语音模式升级：支持 Opus 和 Sonnet 模型，可调用第三方工具",
              "summary": "7月23日，Anthropic升级Claude语音模式，用户可在Haiku、Sonnet和Opus三种模型间自由切换，付费用户可体验更强模型。语音模式新增工具调用能力，可语音操作Gmail、Google Calendar、Slack等应用，并新增11种语言支持，已在移动端、桌面端和网页端Beta推送。",
              "link": "https://9to5mac.com/2026/07/23/anthropic-upgrades-claude-voice-mode-with-more-powerful-models/",
              "tags": [
                "语音交互",
                "Claude",
                "工具调用"
              ],
              "source": "9to5Mac",
              "time": "7月23日"
            },
            {
              "title": "Anthropic 酝酿上市后强制员工售股方案，规避内幕交易风险",
              "summary": "7月23日消息，随着Anthropic筹备最快9月IPO上市，公司正考虑一项罕见举措：要求普通员工按照10b5-1预设交易计划出售股票，以避免触犯内幕交易法律。Anthropic管理层与外部顾问仍在磋商中，尚未作出最终决定。",
              "link": "https://www.jiemian.com/article/14819198.html",
              "tags": [
                "IPO",
                "内幕交易",
                "公司治理"
              ],
              "source": "界面新闻",
              "time": "7月23日消息"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285f4",
          "softBg": "#e8f0fe",
          "initial": "G",
          "news": [
            {
              "title": "Alphabet Q2 营收 1198 亿美元超预期，谷歌云收入同比大增 82%",
              "summary": "7月23日，Alphabet发布2026财年第二季度财报，营收1198亿美元同比增长24%，谷歌云收入247.7亿美元同比大增82%，远超预期。当季资本支出449.2亿美元同比翻倍，全年资本支出指引上调至1950亿-2050亿美元。自由现金流数十年来首次转负59亿美元。",
              "link": "https://finance.eastmoney.com/a/202607233817816650.html",
              "tags": [
                "财报",
                "谷歌云",
                "资本支出"
              ],
              "source": "东方财富",
              "time": "7月23日"
            },
            {
              "title": "谷歌 Gemini 应用月活跃用户达 9.5 亿，逼近 ChatGPT",
              "summary": "7月23日，Alphabet财报披露，谷歌Gemini应用月活跃用户已达9.5亿，较2月的7.5亿持续增长，距离ChatGPT约10亿月活仅一步之遥。近90%的财富100强企业已采用Gemini Enterprise，API每分钟处理约2200亿个token。",
              "link": "https://tech.ifeng.com/c/8uzXG4AkyFd",
              "tags": [
                "Gemini",
                "月活",
                "用户增长"
              ],
              "source": "凤凰网科技",
              "time": "7月23日"
            },
            {
              "title": "谷歌旗舰大模型难产幕后：军方合作引员工不满，内部感叹已落后",
              "summary": "7月24日消息，据Axios报道，六位现任及前任谷歌DeepMind员工透露，员工对军方合作项目不满导致士气低落，是谷歌推迟发布旗舰大模型的原因之一。内部已感叹落后。谷歌正加紧预训练Gemini 4，但内部文化冲突成为隐性阻力。",
              "link": "https://www.ithome.com/0/980/911.htm",
              "tags": [
                "Gemini",
                "文化冲突",
                "军事AI"
              ],
              "source": "IT之家",
              "time": "7月24日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1d1d1f",
          "softBg": "#f2f2f2",
          "initial": "X",
          "news": [
            {
              "title": "马斯克宣布用 Grok Imagine 制作 AI 长篇电影《奥德赛》，称忠于荷马原作",
              "summary": "7月22日，马斯克在X上宣布，计划在2026年底前用旗下AI视频生成工具Grok Imagine制作一部长篇电影《奥德赛》，声称将符合史实并忠于荷马的艺术作品。此举是对克里斯托弗-诺兰版同名电影选角的回应。",
              "link": "https://news.qq.com/rain/a/20260723A0BSOR00",
              "tags": [
                "AI电影",
                "Grok Imagine",
                "AIGC"
              ],
              "source": "腾讯新闻",
              "time": "7月22日"
            },
            {
              "title": "马斯克呼吁 AI 实验室联手审查安全问题，愿与 OpenAI 奥尔特曼冰释前嫌",
              "summary": "7月24日消息，马斯克在接受采访时表示，前沿AI能力提升迅速，全球各大AI实验室应在新模型发布前合作审查安全问题，并将风险报告中美政府。他称为了全球利益，愿意放下个人恩怨与OpenAI CEO奥尔特曼合作。",
              "link": "https://www.ithome.com/0/980/906.htm",
              "tags": [
                "AI安全",
                "合作",
                "马斯克"
              ],
              "source": "IT之家",
              "time": "7月24日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "color": "#76b900",
          "softBg": "#f0fae6",
          "initial": "N",
          "news": [
            {
              "title": "黄仁勋：市场再次低估了中国模型 Kimi 的影响力，就像此前低估了 DeepSeek",
              "summary": "7月21日，英伟达CEO黄仁勋接受Axios采访时表示，华尔街和华盛顿都误解了Kimi带来的影响力。他认为更便宜更开放的AI模型会让更多企业和个人使用AI，反而利好英伟达等基础设施供应商。他表示美国应使用优秀的中国开源模型。",
              "link": "https://news.qq.com/rain/a/20260723A07ZVG00",
              "tags": [
                "开源模型",
                "中国AI",
                "观点"
              ],
              "source": "腾讯新闻",
              "time": "7月21日"
            },
            {
              "title": "英伟达与 Amkor 达成 15 亿美元芯片封装协议，共拓美国先进 AI 封装产能",
              "summary": "7月24日消息，英伟达与芯片封装巨头Amkor签署约15亿美元协议，共同拓展美国先进AI芯片封装产能。此举是英伟达多元化供应链、降低对亚洲封装产能依赖的重要一步，以应对持续增长的AI芯片需求。",
              "link": "https://www.ithome.com/0/980/882.htm",
              "tags": [
                "芯片封装",
                "供应链",
                "产能"
              ],
              "source": "IT之家",
              "time": "7月24日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "color": "#0668e1",
          "softBg": "#e8f0fe",
          "initial": "M",
          "news": []
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "color": "#ff6a00",
          "softBg": "#fff3e6",
          "initial": "A",
          "news": [
            {
              "title": "阿里云灵骏真武 M890 超节点适配 Qwen3.8，成国内首个运行超 2 万亿参数大模型超节点",
              "summary": "7月23日，阿里云宣布灵骏真武M890超节点实例已成功适配Qwen3.8模型（2.4万亿参数），通过64张真武M890芯片实现800GB/s高速互联与9TB显存，是首个成功运行超2万亿参数大模型的国内超节点，显著提升推理效率、降低成本。",
              "link": "https://m.ithome.com/html/980677.htm",
              "tags": [
                "智算",
                "超节点",
                "Qwen3.8"
              ],
              "source": "IT之家",
              "time": "7月23日"
            },
            {
              "title": "阿里平头哥开源 AI 软件栈 SAIL，芯片累计出货量达 56 万片",
              "summary": "7月23日，阿里平头哥宣布开源AI软件栈SAIL，支持260+框架即开即用。这是平头哥在芯片出货量突破56万片后最大规模的开源动作，旨在降低AI开发门槛，构建更开放的国产AI芯片生态。",
              "link": "https://www.qbitai.com/2026/07/457405.html",
              "tags": [
                "开源",
                "AI芯片",
                "平头哥"
              ],
              "source": "量子位",
              "time": "7月23日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#1e7aff",
          "softBg": "#e8f2ff",
          "initial": "火",
          "news": [
            {
              "title": "飞书 Agent 产品 aily 全新升级：支持自主工作、团队共享智能体",
              "summary": "7月23日，飞书内的Agent产品飞书aily全新升级。新版aily可在用户授权范围内主动跟进任务，基于飞书消息、文档、日历等信息开展工作，支持团队共享智能体和多智能体协同。任务发起执行到结果交付均在飞书内完成，实现AI从被动助手到主动同事的转变。",
              "link": "https://36kr.com/newsflashes/3907843428390020",
              "tags": [
                "AI智能体",
                "协同办公",
                "飞书"
              ],
              "source": "36氪",
              "time": "7月23日"
            },
            {
              "title": "字节跳动 Seed 启动 STEM 科学家计划，面向全球招募 100 位学者推动 AI4S",
              "summary": "7月23日，字节跳动Seed Edge团队正式启动STEM科学家计划，拟招募100位前沿科学领域学者合作探索AI加速科学发现。参与者可选择科学家顾问或博士实习生方式，首期约持续6个月，需在北京海淀办公，提供充足算力与专业团队支持。",
              "link": "https://tech.ifeng.com/c/8uzjSxsxxMR",
              "tags": [
                "AI4S",
                "科研",
                "人才培养"
              ],
              "source": "凤凰网科技",
              "time": "7月23日"
            },
            {
              "title": "TikTok 在美国测试付费短剧 App LimeShorts，周订阅 20 美元",
              "summary": "7月24日消息，TikTok正在美国低调测试付费短剧应用LimeShorts，采用免费+付费模式，用户可支付每周20美元或每年200美元订阅全部内容。主打1至5分钟竖屏短剧，内容来自第三方合作伙伴，进一步加码美国14亿美元微短剧市场。",
              "link": "https://www.ithome.com/0/980/894.htm",
              "tags": [
                "TikTok",
                "短剧",
                "海外市场"
              ],
              "source": "IT之家",
              "time": "7月24日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4f6ef7",
          "softBg": "#edf0fe",
          "initial": "D",
          "news": [
            {
              "title": "梁文锋闭门会内容曝光：DeepSeek 不追求成为下一个字节或腾讯，专注攻克持续学习",
              "summary": "7月23日消息，DeepSeek创始人梁文锋在近4小时投资人闭门会议上的言论流出。他系统阐述了公司战略：不做3D视频生成与世界模型，全部资源集中于AGI主线。继思维链和Agent后，下一阶段攻坚方向是模型的持续学习能力。目标是缩短中美差距。",
              "link": "https://www.163.com/dy/article/L2HLVO8F051492LM.html",
              "tags": [
                "AGI",
                "持续学习",
                "战略"
              ],
              "source": "网易",
              "time": "7月23日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "color": "#07c160",
          "softBg": "#e6f9ed",
          "initial": "腾",
          "news": [
            {
              "title": "腾讯混元多模态理解负责人胡瀚离职，原团队或转向世界模型研究",
              "summary": "7月23日，腾讯混元多模态理解负责人胡瀚提出离职创业。他曾任微软亚洲研究院首席研究员。前OpenAI研究员田永龙将接替VLM方向研发工作。姚顺雨正梳理团队分工，胡瀚此前所在组或聚焦世界模型。",
              "link": "https://36kr.com/p/3907934819521670",
              "tags": [
                "人事变动",
                "多模态",
                "世界模型"
              ],
              "source": "36氪",
              "time": "7月23日"
            },
            {
              "title": "腾讯云发布云端智能体 CodeBuddy NPC，自主完成代码开发全流程",
              "summary": "7月23日，腾讯云发布云端智能体CodeBuddy NPC，能像@同事一样派发任务，自主完成方案规划、代码开发、提交PR、执行测试等全流程。首轮Token消耗从2万多降至约2000，降幅超90%，企业还可组建NPC Team协同复杂研发。",
              "link": "https://m.ithome.com/html/980633.htm",
              "tags": [
                "AI编程",
                "CodeBuddy",
                "云端智能体"
              ],
              "source": "IT之家",
              "time": "7月23日"
            }
          ]
        },
        {
          "name": "小米",
          "color": "#ff6900",
          "softBg": "#fff0e6",
          "initial": "米",
          "news": [
            {
              "title": "小米 MiMo Code 宣布 7 月 26 日结束免费使用阶段",
              "summary": "7月23日，小米宣布自7月26日18:00起，MiMo Code将结束免费使用阶段。限免结束后用户可前往Xiaomi MiMo API开放平台订阅Token Plan继续使用，首次订阅可享88折优惠。MiMo Code是小米6月发布的终端AI编程助手，内置多模态模型MiMo-V2.5。",
              "link": "https://m.ithome.com/html/980799.htm",
              "tags": [
                "AI编程",
                "收费",
                "MiMo"
              ],
              "source": "IT之家",
              "time": "7月23日"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#7c3aed",
          "softBg": "#f3edff",
          "initial": "智",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#8b5cf6",
          "softBg": "#f3edfe",
          "initial": "月",
          "news": [
            {
              "title": "月之暗面负责人否认 Kimi K3 蒸馏复刻：核心性能跃升来自原创架构创新",
              "summary": "7月23日，月之暗面企业业务负责人黄震昕回应争议称，Kimi K3并非对任何现有模型蒸馏复刻，核心性能跃升来自底层原创架构创新——包括全新二阶优化器Moon Clip、自研线性注意力机制Kimi Linear Tension和注意力残差技术。K3在Frontend Code Arena以1679分登顶，计划7月27日前开放权重。",
              "link": "https://tech.ifeng.com/c/8uzPVYBVQdU",
              "tags": [
                "Kimi K3",
                "原创架构",
                "辟谣"
              ],
              "source": "凤凰网科技",
              "time": "7月23日"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#cf0a2c",
          "softBg": "#fde8eb",
          "initial": "华",
          "news": [
            {
              "title": "任正非亲自撰文定调：τ 定律是华为唯一突围道路，数万员工六年迭代已成熟",
              "summary": "7月23日消息，华为心声社区转发《人民日报》专访何庭波文章，华为创始人任正非亲自撰写代序，首次完整发表对τ定律的权威定调。τ定律以时间缩微替代传统几何缩微，基于该定律华为已量产381款芯片。任正非表示华为不是为了颠覆什么，只是找到了可选的一条路。",
              "link": "https://www.ithome.com/0/980/708.htm",
              "tags": [
                "τ定律",
                "芯片",
                "自主创新"
              ],
              "source": "IT之家",
              "time": "7月23日"
            },
            {
              "title": "华为小艺获版本升级，鸿蒙龙虾小艺 Claw 接入 Kimi K3 旗舰模型",
              "summary": "7月23日，华为小艺获11.6.6.300版本升级，鸿蒙龙虾小艺Claw接入Kimi K3旗舰模型。Kimi K3拥有2.8万亿参数，是Kimi迄今能力最强模型。此次接入体现了华为在AI语音助手层面与第三方先进大模型开放合作的策略。",
              "link": "https://m.ithome.com/html/980861.htm",
              "tags": [
                "鸿蒙",
                "小艺",
                "Kimi K3"
              ],
              "source": "IT之家",
              "time": "7月23日"
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
              "title": "AMD",
              "news": [
                {
                  "title": "AMD 展示最强 AI 加速器 MI455X：台积电 2nm、3200 亿晶体管、432GB HBM4",
                  "summary": "7月24日，AMD在Advancing AI 2026大会上展示下一代AI加速器Instinct MI455X，采用台积电2nm工艺，集成3200亿晶体管，配备432GB HBM4。苏姿丰称该加速器将大幅提升AI训练和推理性能，进一步缩小与NVIDIA的差距。",
                  "link": "https://www.ithome.com/0/980/873.htm",
                  "tags": [
                    "AI加速器",
                    "MI455X",
                    "2nm"
                  ],
                  "source": "IT之家",
                  "time": "7月24日"
                },
                {
                  "title": "AMD 发布第六代 EPYC Venice CPU：2nm 工艺、256 核心、2030 亿晶体管",
                  "summary": "7月24日，AMD在Advancing AI 2026上发布第六代EPYC Venice CPU，采用台积电2nm GAA工艺量产，集成2030亿晶体管，最高频率超5GHz。AMD声称每瓦性能可达Arm架构CPU的2.8倍。",
                  "link": "https://m.ithome.com/html/980872.htm",
                  "tags": [
                    "CPU",
                    "EPYC",
                    "数据中心"
                  ],
                  "source": "IT之家",
                  "time": "7月24日"
                },
                {
                  "title": "AMD CEO 苏姿丰：AI 服务器 Helios 已全面投产，OpenAI 计划部署",
                  "summary": "7月24日，AMD CEO苏姿丰在Advancing AI 2026上宣布，搭载MI455X和Venice CPU的Helios AI服务器已全面投产，预计三季度末出货。OpenAI计划今年晚些时候部署该系统。苏姿丰还公布了两年一代CPU、一年一代GPU的AI/HPC路线图。",
                  "link": "https://www.ithome.com/0/980/896.htm",
                  "tags": [
                    "AI服务器",
                    "Helios",
                    "OpenAI"
                  ],
                  "source": "IT之家",
                  "time": "7月24日"
                },
                {
                  "title": "AMD 苏姿丰表态支持开源 AI 模型：透明度和控制力是好事",
                  "summary": "7月24日，AMD CEO苏姿丰表态支持开源AI模型，称开源赋予用户透明度和控制力。AMD还宣布了与Cerebras在AI推理硬件方面的合作，后者股价盘中上涨11%。",
                  "link": "https://www.ithome.com/0/980/913.htm",
                  "tags": [
                    "开源AI",
                    "苏姿丰",
                    "观点"
                  ],
                  "source": "IT之家",
                  "time": "7月24日"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "苹果 Apple Store 应用将上线 AI 购物助手，辅助用户选购产品",
                  "summary": "7月23日消息，苹果更新了Apple Store应用隐私政策，新增虚拟购物助手相关条款，暗示对话式AI导购功能即将上线。该助手可处理账户信息和聊天内容，为用户推荐产品和对比机型的个性化建议。",
                  "link": "https://www.ithome.com/0/980/351.htm",
                  "tags": [
                    "AI导购",
                    "Apple Store",
                    "零售"
                  ],
                  "source": "IT之家",
                  "time": "7月23日消息"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软发布 MAI-Image-2.5-Pro 和 MAI-Voice-2-Flash 自研 AI 模型",
                  "summary": "7月24日消息，微软发布两款自研AI模型：MAI-Image-2.5-Pro专注高精度图像生成与文字渲染，MAI-Voice-2-Flash针对高并发语音场景优化。两款模型未蒸馏第三方产品，已落地Bing、PowerPoint和Dynamics 365等产品。",
                  "link": "https://www.ithome.com/0/980/899.htm",
                  "tags": [
                    "微软",
                    "图像生成",
                    "语音"
                  ],
                  "source": "IT之家",
                  "time": "7月24日消息"
                }
              ]
            },
            {
              "title": "英特尔",
              "news": [
                {
                  "title": "英特尔 14A 节点加速：计划 2027 下半年风险试产，2028 年全面量产",
                  "summary": "7月24日，英特尔CEO陈立武在Q2财报电话会上确认，14A工艺风险试产提前至2027下半年，大规模量产定于2028年。14A将采用第二代RibbonFET晶体管和PowerDirect背部供电技术，率先使用ASML High-NA EUV光刻设备，能效较18A提升15%-20%。",
                  "link": "https://www.ithome.com/0/980/920.htm",
                  "tags": [
                    "制程",
                    "14A",
                    "英特尔"
                  ],
                  "source": "IT之家",
                  "time": "7月24日"
                },
                {
                  "title": "英特尔 Q2 营收 161 亿美元同比增 25%，AI CPU 需求激增但供不应求",
                  "summary": "7月24日，英特尔发布2026财年Q2财报，营收161亿美元同比大增25%为15年来最快增速，但归母亏损110亿美元。CEO陈立武称CPU需求激增却库存耗尽且良率未达标。",
                  "link": "https://www.ithome.com/0/980/876.htm",
                  "tags": [
                    "财报",
                    "CPU",
                    "代工"
                  ],
                  "source": "IT之家",
                  "time": "7月24日"
                }
              ]
            },
            {
              "title": "亚马逊",
              "news": [
                {
                  "title": "亚马逊裁撤通用人工智能（AGI）部门部分岗位，聚焦核心 AI 项目",
                  "summary": "7月23日消息，亚马逊对旗下AGI研究部门实施裁员，涉及模型定制和后训练等领域。公司称是为了聚焦客户最关心的核心AI项目。虽然人员精简，但亚马逊承诺在AI及云基础设施领域持续投入高达2000亿美元。",
                  "link": "https://finance.eastmoney.com/a/202607233818043071.html",
                  "tags": [
                    "裁员",
                    "AGI",
                    "组织调整"
                  ],
                  "source": "东方财富",
                  "time": "7月23日消息"
                }
              ]
            },
            {
              "title": "面壁智能",
              "news": [
                {
                  "title": "面壁智能 MiniCPM 登陆三星 Galaxy Z Fold8 系列，国产端侧大模型首次进入国际旗舰",
                  "summary": "7月23日，面壁智能宣布旗下MiniCPM系列端侧模型将赋能三星Galaxy Z Fold8系列的Galaxy AI。这是国产端侧大模型首次进入国际头部手机厂商的全球旗舰产品线，标志着中国端侧AI模型技术实力获得国际认可。",
                  "link": "https://m.ithome.com/html/980730.htm",
                  "tags": [
                    "端侧模型",
                    "三星",
                    "AI手机"
                  ],
                  "source": "IT之家",
                  "time": "7月23日"
                }
              ]
            },
            {
              "title": "科大讯飞",
              "news": [
                {
                  "title": "科大讯飞发布星火 Token Factory，打造企业级 AI 模型智能路由与治理新底座",
                  "summary": "7月23日，科大讯飞发布星火Token Factory，定位企业级AI模型智能路由与治理平台，可帮助企业统一管理多模型调用、优化成本和保障安全合规。",
                  "link": "https://www.qbitai.com/2026/07/457359.html",
                  "tags": [
                    "企业AI",
                    "模型路由",
                    "治理"
                  ],
                  "source": "量子位",
                  "time": "7月23日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "大众与地平线",
              "news": [
                {
                  "title": "大众汽车集团与地平线深化 AI 合作，加速 L3/L4 自动驾驶本土化落地",
                  "summary": "7月22日，大众汽车集团（中国）与地平线宣布深化战略合作，通过合资公司酷睿程基于白盒授权模式共同开发L3和L4级自动驾驶技术。L3级自动驾驶最快将于2027年下半年启动交付。",
                  "link": "https://36kr.com/p/3906758699849605",
                  "tags": [
                    "大众",
                    "地平线",
                    "L3"
                  ],
                  "source": "36氪",
                  "time": "7月22日"
                }
              ]
            },
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉 Q2 交付量同比增 25%，FSD 付费用户增至 148 万进入大型投资周期",
                  "summary": "7月23日，特斯拉发布Q2财报：营收282亿美元同比增26%，交付超48万辆同比增25%。FSD付费用户增至148万，年资本开支将超250亿美元。特斯拉将为几乎所有配备摄像头的车辆升级下一代AI硬件。",
                  "link": "https://tech.ifeng.com/c/8uzJqRU0vw3",
                  "tags": [
                    "特斯拉",
                    "FSD",
                    "财报"
                  ],
                  "source": "IT之家",
                  "time": "7月23日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "中国团队超越π0",
              "news": [
                {
                  "title": "超越 Google π0，中国团队用 1B 参数模型登顶具身智能榜单",
                  "summary": "7月23日消息，中国AI团队以仅1B参数的模型在具身智能基准测试中超越Google π0等大参数模型登顶，证明具身智能正从参数竞赛进入架构竞赛阶段。该团队通过创新的模型架构设计，以小参数实现了超越大模型的任务完成率。",
                  "link": "https://www.qbitai.com/2026/07/457537.html",
                  "tags": [
                    "具身智能",
                    "参数效率",
                    "Benchmark"
                  ],
                  "source": "量子位",
                  "time": "7月23日消息"
                }
              ]
            },
            {
              "title": "特斯拉 Optimus",
              "news": [
                {
                  "title": "特斯拉 App 代码暗示为 Optimus 人形机器人上线做准备",
                  "summary": "7月23日消息，特斯拉手机App代码更新首次出现多项与Optimus机器人相关的功能，包括蓝牙安全认证机制和面向家庭场景的数据采集功能。这意味着Optimus不仅将走向市场，更可能深入家庭。",
                  "link": "https://www.ithome.com/0/980/629.htm",
                  "tags": [
                    "Optimus",
                    "人形机器人",
                    "特斯拉"
                  ],
                  "source": "IT之家",
                  "time": "7月23日消息"
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
              "title": "智象未来",
              "news": [
                {
                  "title": "AI 视频公司智象未来完成 15 亿元 C 轮融资，三个月内三轮累计超 21 亿元",
                  "summary": "7月23日，智象未来（HiDream.ai）宣布完成15亿元C轮融资，由社保基金四川振兴科创基金、工银资本等联合领投。公司近三个月完成三轮融资累计超21亿元，正式迈入独角兽行列。产品已覆盖全球100多个国家和地区的5000多万专业用户。",
                  "link": "https://36kr.com/p/3908307536669824",
                  "tags": [
                    "融资",
                    "AI视频",
                    "独角兽"
                  ],
                  "source": "36氪",
                  "time": "7月23日"
                }
              ]
            },
            {
              "title": "灵初智能",
              "news": [
                {
                  "title": "具身智能公司灵初智能以 14.8 亿美元估值融资近 1 亿美元，奇瑞领投",
                  "summary": "7月23日消息，上海具身智能初创公司灵初智能正以14.8亿美元估值融资近1亿美元，由奇瑞汽车领投，蓝思科技等参投。公司专注于AI大模型与机器人硬件融合及世界模型技术研发。",
                  "link": "https://36kr.com/newsflashes/3907726672090241",
                  "tags": [
                    "融资",
                    "具身智能",
                    "奇瑞"
                  ],
                  "source": "36氪",
                  "time": "7月23日消息"
                }
              ]
            },
            {
              "title": "设序科技",
              "news": [
                {
                  "title": "工业 AI 设计公司设序科技完成 B 轮超亿元融资",
                  "summary": "7月23日，工业AI设计研发解决方案供应商设序科技正式完成B轮超亿元融资，累计获超3亿元融资。投资方包括深产投、合鼎共及老股东涌铧投资等。融资将用于市场开拓及核心模型技术研发。",
                  "link": "https://36kr.com/newsflashes/3907538337338499",
                  "tags": [
                    "融资",
                    "工业AI",
                    "设计"
                  ],
                  "source": "36氪",
                  "time": "7月23日"
                }
              ]
            },
            {
              "title": "Deeplore",
              "news": [
                {
                  "title": "水下 AI 科技公司 Deeplore 完成数千万元种子轮融资",
                  "summary": "7月23日，水下AI自然探索科技公司Deeplore完成数千万元种子轮融资，由五源资本、顺为资本联合投资。资金将用于研发团队扩建与水下AI技术深耕，加速首款AI潜水面镜落地迭代。",
                  "link": "https://36kr.com/newsflashes/3907716402582912",
                  "tags": [
                    "融资",
                    "水下AI",
                    "种子轮"
                  ],
                  "source": "36氪",
                  "time": "7月23日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "200家硅谷初创联署",
              "news": [
                {
                  "title": "近 200 家硅谷小型科技公司联名致信特朗普，反对全面封禁中国开源 AI 模型",
                  "summary": "7月22日，代表近200家初创公司的Little Tech向特朗普政府递交联名信，反对全面封禁中国开放权重AI模型。信中指出小型团队依赖可下载可本地部署的中国开源模型进行研发，全面禁令会抬高成本并助长巨头垄断。",
                  "link": "https://news.qq.com/rain/a/20260723A0DPG000",
                  "tags": [
                    "开源模型",
                    "政策",
                    "美国"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月22日"
                }
              ]
            },
            {
              "title": "Cursor Router",
              "news": [
                {
                  "title": "Cursor 推出模型路由器 Router，按任务自动选模型可节省 60% 成本",
                  "summary": "7月22日，Cursor面向Teams和Enterprise用户推出模型路由器Router，可根据代码库状态和任务复杂度自动为每个请求选择最佳模型。经数百万次A/B测试验证，相比固定使用单一旗舰模型可节省约60%成本。",
                  "link": "https://cursor.com/cn/blog/router",
                  "tags": [
                    "AI编程",
                    "模型路由",
                    "降本"
                  ],
                  "source": "Cursor",
                  "time": "7月22日"
                }
              ]
            },
            {
              "title": "Uber拥抱AI",
              "news": [
                {
                  "title": "Uber 裁减 10% 客服岗位明确称拥抱 AI，远程员工被要求返回办公室",
                  "summary": "7月22日，Uber宣布裁减客服业务10%的岗位，明确将调整与拥抱AI直接联系起来。公司称AI已可处理重复性客服请求，需简化架构以释放AI潜力。",
                  "link": "https://www.jiemian.com/article/14814459.html",
                  "tags": [
                    "裁员",
                    "AI替代",
                    "客服"
                  ],
                  "source": "界面新闻",
                  "time": "7月22日"
                }
              ]
            },
            {
              "title": "中国脑机接口突破",
              "news": [
                {
                  "title": "中国脑机接口重要突破：全球首次实现跨地域上千人同步脑电信号采集",
                  "summary": "7月22日下午，中国科研团队发布新型脑电信号采集装置，全球首次实现跨地域上千人同步脑电采集。核心攻克了设备小型化高精度和毫秒级时间对齐两大技术难关。2026年有望成为脑机接口商业化元年。",
                  "link": "https://36kr.com/newsflashes/3908041021871240",
                  "tags": [
                    "脑机接口",
                    "神经科学",
                    "突破"
                  ],
                  "source": "36氪",
                  "time": "7月22日"
                }
              ]
            },
            {
              "title": "AI伪造水果图诈骗",
              "news": [
                {
                  "title": "男子用 AI 伪造烂果图骗取仅退款4个月涉案1.6万余元获刑一年",
                  "summary": "湖南衡山县法院审结一起利用AI伪造水果腐烂图片骗取退款的案件。被告谭某某用AI生成腐烂照片申请仅退款后转卖完好水果。大量异常订单一度致电商平台将衡山县列为高风险地区。",
                  "link": "https://finance.jrj.com.cn/2026/07/23142857880849.shtml",
                  "tags": [
                    "AI造假",
                    "网络诈骗",
                    "法律"
                  ],
                  "source": "IT之家",
                  "time": "7月23日"
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
          "name": "OpenRouter",
          "date": "2026-07-23",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "MiMo-V2.5",
              "score": "9.6T tokens",
              "change": "↑ 19%"
            },
            {
              "model": "Hy3 (free)",
              "score": "8.54T tokens",
              "change": "↑ 5%"
            },
            {
              "model": "DeepSeek V4 Flash",
              "score": "5.48T tokens",
              "change": "↑ 5%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.59T tokens",
              "change": "↑ 9%"
            },
            {
              "model": "MiniMax M3",
              "score": "2.98T tokens",
              "change": "↑ 26%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.92T tokens",
              "change": "↑ 15%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.47T tokens",
              "change": "↑ 19%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1.86T tokens",
              "change": "↑ 15%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "1.78T tokens",
              "change": "↑ 13%"
            },
            {
              "model": "Hy3",
              "score": "1.35T tokens",
              "change": "↑ >999%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.13T tokens",
              "change": "↑ 21%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.05T tokens",
              "change": "↑ 5%"
            },
            {
              "model": "Qwen3-235B-A22B",
              "score": "0.85T tokens",
              "change": "↑ 7%"
            },
            {
              "model": "Grok 4.5",
              "score": "0.78T tokens",
              "change": "↑ 3%"
            },
            {
              "model": "Claude Fable 5",
              "score": "0.72T tokens",
              "change": "↑ 11%"
            },
            {
              "model": "DeepSeek R1-0528",
              "score": "0.65T tokens",
              "change": "↓ 5%"
            },
            {
              "model": "Gemini 2.0 Flash",
              "score": "0.58T tokens",
              "change": "↓ 8%"
            },
            {
              "model": "Yi-Lightning",
              "score": "0.52T tokens",
              "change": "↓ 3%"
            },
            {
              "model": "Spark 1.1",
              "score": "0.48T tokens",
              "change": "↑ 18%"
            },
            {
              "model": "Mistral Large 3",
              "score": "0.38T tokens",
              "change": "↓ 2%"
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
              "name": "New AI Tools by IFTTT",
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
