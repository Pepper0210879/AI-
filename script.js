// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
  "date": "2026-06-24",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "#E8F8F5",
          "initial": "O",
          "news": [
            {
              "title": "OpenAI推出「Patch the Planet」计划，用AI助力开源社区修复漏洞",
              "summary": "6月23日，OpenAI宣布启动「Patch the Planet」计划，与安全公司Trail of Bits合作，派出25名安全工程师直接与开源项目维护者协作，借助GPT-5.5-Cyber和Codex Security等AI工具发现并修复代码漏洞。首批覆盖cURL、Go、Python等超30个关键开源项目，首周已发现数百个漏洞、提交64个PR。OpenAI表示该计划旨在降低维护者负担，应对AI时代「发现漏洞易、修复漏洞难」的新挑战。",
              "link": "https://tech.ifeng.com/c/8uBVhynDHDf",
              "tags": [
                "开源安全",
                "AI安全"
              ],
              "source": "凤凰网科技",
              "time": "6月23日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#D4A574",
          "softBg": "#FBF5EF",
          "initial": "A",
          "news": [
            {
              "title": "美光与Anthropic达成战略合作，将用Claude参与芯片设计",
              "summary": "当地时间6月22日，美光科技与Anthropic宣布达成战略合作，涵盖四方面：美光向Anthropic供应HBM高带宽内存、DRAM和数据中心SSD；双方联合研发面向AI系统的内存与存储技术；美光内部全面部署Claude模型用于编码、工程和制造运营；美光参与Anthropic H轮融资。消息公布后美光股价大涨6.8%，收报1211.38美元创历史新高。",
              "link": "https://finance.eastmoney.com/news/1354,202606223778430247.html",
              "tags": [
                "AI芯片",
                "战略合作",
                "存储器"
              ],
              "source": "东方财富",
              "time": "当地时间6月22日"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "#ECF0FD",
          "initial": "G",
          "news": [
            {
              "title": "郭明錤：联发科独家拿下Google TPU v9升级版芯片订单",
              "summary": "6月22日，天风国际分析师郭明錤发文称，Google正在TPU v9（代号Humufish）基础上开发升级版芯片Triggerfish，定位为推理能力更强的改版，SRAM容量提升至2-3倍，HBM从HBM4升级至HBM4E，新增仿真芯片用于强化学习和AI Agent协作。联发科独家承接该订单，Google追加100-200万颗Triggerfish，预计2027年底投产、2028年放量。",
              "link": "https://www.jiemian.com/article/14623554.html",
              "tags": [
                "AI芯片",
                "TPU"
              ],
              "source": "界面新闻",
              "time": "6月22日"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1DA1F2",
          "softBg": "#E8F5FD",
          "initial": "X",
          "news": [
            {
              "title": "SpaceX与Reflection AI签署63亿美元算力供应协议",
              "summary": "6月23日，据报道，SpaceX旗下AI部门SpaceXAI与开源AI初创公司Reflection AI签署价值最高63亿美元的算力协议。Reflection AI将从今年7月起至2029年每月支付1.5亿美元，使用SpaceX位于田纳西州孟菲斯的Colossus 2数据中心算力，该中心搭载Nvidia GB300芯片。Reflection AI由前Google DeepMind研究员创立，估值约250亿美元，定位为开源AI实验室。",
              "link": "https://wallstreetcn.com/articles/3775221",
              "tags": [
                "算力",
                "AI基础设施"
              ],
              "source": "华尔街见闻",
              "time": "6月23日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "color": "#76B900",
          "softBg": "#F3F9E8",
          "initial": "N",
          "news": [
            {
              "title": "英伟达发布Halos for Robotics，业界首个全栈物理AI安全系统",
              "summary": "6月22日，英伟达在芝加哥Automate 2026大会上发布Halos for Robotics，覆盖从IGX Thor芯片、Holoscan Sensor Bridge传感器、Halos OS安全操作系统到AI安全认证实验室的四层架构。系统将自动驾驶领域超18600工程人年的安全积累迁移至机器人赛道，核心框架已开源。首批合作伙伴Agility Robotics已将Halos集成至Digit人形机器人，用于亚马逊、GXO等工厂物流场景。",
              "link": "https://zhidx.com/p/568438.html",
              "tags": [
                "物理AI",
                "机器人安全",
                "具身智能"
              ],
              "source": "智东西",
              "time": "6月22日"
            },
            {
              "title": "英伟达发布Vera Rubin NVL4超算平台，Q4上市，性能达Grace Hopper四倍",
              "summary": "6月22日，英伟达宣布推出Vera Rubin NVL4超级计算平台，集成4颗Rubin GPU和2颗Vera CPU，采用台积电3nm制程和HBM4内存，原生FP64双精度性能约5 Petaflops，科学计算模拟性能是Grace Hopper的4倍。系统预计2026年Q4通过戴尔、HPE、Supermicro等合作伙伴上市。该平台面向气候建模、量子化学、药物研发等HPC+AI融合场景，单机架最高144颗GPU。",
              "link": "https://www.jiemian.com/article/14626764.html",
              "tags": [
                "GPU",
                "超算",
                "HPC"
              ],
              "source": "界面新闻",
              "time": "6月22日"
            }
          ]
        },
        {
          "name": "Meta",
          "color": "#0668E1",
          "softBg": "#E8F0FD",
          "initial": "M",
          "news": [
            {
              "title": "Meta发布299美元起自有品牌智能眼镜，首发三款26种样式",
              "summary": "6月23日，Meta与依视路陆逊梯卡合作推出自有品牌「Meta Glasses」系列智能眼镜，起售价299美元。首发三款型号：Adventurer（方形）、Fury（粗框）和Starfire（凯莉·詹娜联名，399美元），共26种配色与镜片组合。搭载Meta Muse Spark AI模型，支持20种语言实时翻译、动态抓拍和行人导航，单次续航8小时，充电盒额外提供40小时。此举意在抢先苹果，巩固Meta在智能眼镜市场超80%的份额。",
              "link": "https://techcrunch.com/2026/06/23/meta-debuts-new-cheaper-smart-glasses-under-its-own-brand/",
              "tags": [
                "AI眼镜",
                "可穿戴"
              ],
              "source": "TechCrunch",
              "time": "6月23日"
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
          "softBg": "#FFF3E8",
          "initial": "阿",
          "news": []
        },
        {
          "name": "火山引擎",
          "color": "#3370FF",
          "softBg": "#E8ECFD",
          "initial": "火",
          "news": [
            {
              "title": "豆包Seed 2.1 Pro/Turbo深度思考模型发布，三大能力比肩GPT-5.5",
              "summary": "6月23日，字节跳动旗下火山引擎发布豆包Seed 2.1系列深度思考模型，包括旗舰版Pro和高效版Turbo。官方称在Coding工程交付、Agent长链路任务执行和多模态理解三项核心能力上比肩GPT-5.5。Pro版定价输入6元/百万tokens、输出30元；Turbo版输入3元、输出15元。模型已上线火山方舟API、豆包App和TRAE。同步发布的Seedance 2.5视频生成模型支持单段30秒视频生成，可同时导入50个全模态素材，预计7月初正式上线。",
              "link": "https://www.donews.com/news/detail/1/6605620.html",
              "tags": [
                "大模型",
                "深度思考",
                "视频生成"
              ],
              "source": "DoNews",
              "time": "6月23日"
            },
            {
              "title": "火山引擎谭待：豆包保持免费，日均Token调用量突破180万亿，Seedance 2.5预计7月上线",
              "summary": "6月23日火山引擎FORCE原动力大会上，总裁谭待披露豆包大模型日均Token调用量突破180万亿，较去年增长超10倍，火山引擎在中国公有云MaaS市场份额达49.5%位居第一。谭待表示豆包将继续保持免费，专业版办公任务模式搭载2.1 Pro模型；火山引擎暂无拆分上市计划；字节内部已大规模落地AI Coding生产流程，CEO梁汝波称公司持续聚焦AI领域。Seedance 2.5预计7月初正式上线。",
              "link": "https://m.jiemian.com/article/14628786.html",
              "tags": [
                "大模型",
                "火山引擎",
                "Token"
              ],
              "source": "界面新闻",
              "time": "6月23日"
            },
            {
              "title": "豆包音频生成模型Seed-Audio 1.0发布，实现全模态AI创作闭环",
              "summary": "6月23日，火山引擎在FORCE大会上发布豆包音频生成模型1.0（Seed-Audio 1.0），支持单条Prompt同时编排角色对白、情绪语气、方言口音、背景音乐和拟音特效，一次性直出影视级成品音频。模型支持长时多角色音色一致性，单次2分钟音频创作，可通过参考音频持续延展。已在火山方舟开启API邀测，个人用户可享30分钟免费创作额度，后续将接入剪映、即梦、番茄等产品。此举补齐了豆包全链路创作的音频板块。",
              "link": "https://www.chinaz.com/ainews/29117.shtml",
              "tags": [
                "音频生成",
                "多模态",
                "AI创作"
              ],
              "source": "站长之家",
              "time": "6月23日"
            },
            {
              "title": "豆包专业版正式上线，三档套餐68元/月起",
              "summary": "6月24日，字节跳动旗下AI助手豆包正式推出专业版，采用三级阶梯定价：标准套餐连续包月68元、加强套餐200元/月、高级套餐500元/月。专业版搭载豆包2.1 Pro旗舰模型，新增办公任务模式，支持操作本地电脑、调用Skills、定时任务等Agent能力。免费版用户不受影响，日常搜索、写作生图等功能继续免费。在校大学生认证后可享标准套餐38元/月专属折扣。",
              "link": "http://www.bjnews.com.cn/detail/1782264672129670.html",
              "tags": [
                "付费",
                "商业化",
                "Agent"
              ],
              "source": "新京报",
              "time": "6月24日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4A6CF7",
          "softBg": "#E8ECFD",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek崔添翼回应「不招外国人」质疑：要求能用中文工作",
              "summary": "6月23日，针对网友「DeepSeek不招外国人」的评论，DeepSeek团队成员崔添翼回应称，正如美国同类公司要求员工能用英语工作一样，DeepSeek要求员工能使用中文开展工作，公司并无禁止雇用外国人的规定。",
              "link": "https://www.ithome.com/0/967/380.htm",
              "tags": [
                "招聘",
                "人才"
              ],
              "source": "IT之家",
              "time": "6月23日"
            }
          ]
        },
        {
          "name": "腾讯",
          "color": "#0066CC",
          "softBg": "#E8F0FD",
          "initial": "腾",
          "news": [
            {
              "title": "微信原生AI助手「小微」开启内测，入驻首页首屏",
              "summary": "6月20日起，微信原生AI助手「小微」面向部分用户灰度内测。入口位于微信主界面左上角绿色眼睛图标，点击或右滑即可进入。小微主模型为微信自研WeLM，部分回答由DeepSeek配合，支持语音/文字对话、发消息、发红包、管理朋友圈、调用小程序（点外卖、打车、挂号等）、一句话生成小程序、群聊总结等功能。涉及支付和隐私调用需用户确认，不可代发朋友圈或查看私聊记录。微信及WeChat月活达14.32亿。",
              "link": "https://www.bjnews.com.cn/detail/1782208769129384.html",
              "tags": [
                "AI助手",
                "微信",
                "超级入口"
              ],
              "source": "新京报",
              "time": "6月20日"
            },
            {
              "title": "QQ邮箱推出Agently Mail，专为AI Agent设计的独立邮箱",
              "summary": "6月23日，腾讯宣布QQ邮箱开启内测「Agently Mail」，这是一款专为AI Agent设计的独立邮箱，与个人邮箱数据完全隔离。Agent可凭此邮箱自主注册第三方平台、收发验证码，支持企业间Agent-to-Agent自动通信（如询价、报价、订单对接）。已适配WorkBuddy、OpenClaw、Claude Code等主流Agent，通过微信扫码授权即可开通，Apache-2.0协议开源。",
              "link": "https://www.donews.com/news/detail/4/6605957.html",
              "tags": [
                "AI Agent",
                "邮箱",
                "基础设施"
              ],
              "source": "DoNews",
              "time": "6月23日"
            }
          ]
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "#FFF3E8",
          "initial": "米",
          "news": [
            {
              "title": "小米MiMo-V2.5-Pro-UltraSpeed限时体验延期，推理速度达1000 tokens/s",
              "summary": "6月23日，小米官方发布通知，MiMo-V2.5-Pro-UltraSpeed限时体验窗口延期，下线时间另行通知，以便更多开发者体验1000 tokens/s的推理速度。此前雷军曾亲自发文宣布MiMo业内首次在万亿参数模型上突破1000 tokens/s推理速度。",
              "link": "https://www.ithome.com/0/967/698.htm",
              "tags": [
                "大模型",
                "推理速度"
              ],
              "source": "IT之家",
              "time": "6月23日"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#5B4BF7",
          "softBg": "#EDE8FD",
          "initial": "智",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#6C5CE7",
          "softBg": "#F0E8FD",
          "initial": "月",
          "news": []
        },
        {
          "name": "华为",
          "color": "#CF0A2C",
          "softBg": "#FDE8EC",
          "initial": "华",
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
              "title": "甲骨文",
              "news": [
                {
                  "title": "甲骨文上财年裁员2.1万人，承认AI已替代部分岗位",
                  "summary": "6月23日，甲骨文发布2026财年年报显示，截至5月31日员工总数为14.1万人，较去年同期的16.2万人减少约2.1万人（降幅13%）。公司在监管文件中明确表示「AI技术的采用和部署已导致并可能继续导致员工人数减少」。财年内甲骨文为重组支付18.4亿美元遣散费，远高于上一财年的3.74亿美元。甲骨文正将资本配置重心从人力扩张转向AI算力基础设施，本财年资本开支计划约700亿美元。",
                  "link": "https://finance.sina.com.cn/roll/2026-06-23/doc-iniekeex6535343.shtml",
                  "tags": [
                    "AI替代就业",
                    "裁员"
                  ],
                  "source": "新浪财经",
                  "time": "6月23日"
                }
              ]
            },
            {
              "title": "高通",
              "news": [
                {
                  "title": "高通推进约40亿美元收购AI芯片初创公司Modular",
                  "summary": "6月23日，据彭博社报道，高通正深入谈判以约40亿美元收购AI芯片初创公司Modular。Modular由Swift语言创始人Chris Lattner等创立，核心产品为MAX AI推理引擎和Mojo编程语言，旨在解决AI跨硬件部署碎片化问题。若交易完成，将补足高通AI推理和编译器软件栈，与其自研AI推理芯片AI200/AI250形成软硬协同。高通近期还传出拟收购Tenstorrent，两笔交易总额约140亿美元，加速挑战英伟达数据中心AI芯片地位。",
                  "link": "https://fund.eastmoney.com/a/202606233779673189.html",
                  "tags": [
                    "AI芯片",
                    "收购",
                    "推理"
                  ],
                  "source": "东方财富",
                  "time": "6月23日"
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "三星推出业界首款端侧AI优化UFS 5.0闪存，Q4量产",
                  "summary": "6月23日，三星电子发布业界首款面向端侧AI优化的UFS 5.0通用闪存方案，顺序读取速度最高10.8GB/s、写入9.5GB/s，较UFS 4.1性能翻倍，能效提升超40%。封装尺寸7.5mm×13mm×0.9mm（缩小16.7%），最大容量1TB。该产品专为端侧大模型和生成式AI本地运行设计，覆盖旗舰手机、XR头显和AI可穿戴设备，计划2026年第四季度量产。",
                  "link": "https://www.ithome.com/0/967/255.htm",
                  "tags": [
                    "端侧AI",
                    "闪存",
                    "存储"
                  ],
                  "source": "IT之家",
                  "time": "6月23日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "贾跃亭（FF创始人）",
              "news": [
                {
                  "title": "贾跃亭发布美国首个工业级轮臂机器人FF Faber系列",
                  "summary": "6月23日，Faraday Future在芝加哥Automate机器人展会上发布美国首个工业级轮臂机器人系列FF Faber，含U（顶配版）、T（工业巡检版）、S（最大臂展版）三款机型，覆盖工业上下料、物流转运、巡检等场景。FF已形成人形、四足、轮臂三大形态六大系列机器人产品矩阵。贾跃亭表示未来Faber将参与机器人生产，推动「机器人生产机器人」模式。FF预计6月机器人本体出货超100台。",
                  "link": "https://tech.ifeng.com/c/8uBcLNn0pJ6",
                  "tags": [
                    "轮臂机器人",
                    "工业机器人",
                    "具身智能"
                  ],
                  "source": "凤凰网科技",
                  "time": "6月23日"
                }
              ]
            },
            {
              "title": "特斯拉 Optimus",
              "news": [
                {
                  "title": "特斯拉推进Optimus 3人形机器人量产，供应链开始备货",
                  "summary": "6月23日，据多家媒体报道，特斯拉正加速推进Optimus 3人形机器人量产，供应链已进入实质性备货阶段。加州弗里蒙特工厂计划2026年夏季启动小批量试产，德州超级工厂2027年跟进大规模量产，远期目标年产能1000万台。谐波减速器供应商盟立自动化已开始供货，光学镜头供应商亚洲光学处于样品试产阶段。马斯克称Optimus 3为「迄今为止全球最先进的机器人」。",
                  "link": "https://www.ithome.com/0/967/375.htm",
                  "tags": [
                    "人形机器人",
                    "量产",
                    "特斯拉"
                  ],
                  "source": "IT之家",
                  "time": "6月23日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "Momenta",
              "news": [
                {
                  "title": "Momenta通过港交所聆讯，冲刺「物理AI第一股」",
                  "summary": "6月23日，自动驾驶公司Momenta（梦腾智驾）通过港交所聆讯。招股书显示其2023-2025年营收从7.43亿元增长至24.13亿元，三年复合增速超80%；毛利率从17.5%升至71.6%；现金储备超百亿元。Momenta搭载车型超90万台，城市NOA在中国第三方供应商市场占有率达65%，覆盖全球前10大车企中9家。公司计划募资约10亿美元，估值约90亿美元，资金将用于世界模型和全球化布局。",
                  "link": "https://www.cnfin.com/gs-lb/detail/20260623/4430335_1.html",
                  "tags": [
                    "自动驾驶",
                    "IPO",
                    "物理AI"
                  ],
                  "source": "中国金融新闻网",
                  "time": "6月23日"
                }
              ]
            },
            {
              "title": "小竹无人车",
              "news": [
                {
                  "title": "佑驾创新旗下小竹无人车将完成独立融资，估值数亿美元",
                  "summary": "6月23日，佑驾创新旗下无人物流车品牌小竹无人车即将完成独立融资，估值达数亿美元，投资方包括一线自动驾驶产业资本。截至2025年已在全国18个城市落地运营，合作规模超8000台，20天内连续开通四城。采用「真无图」L4级方案，区域部署周期缩短至小时级。本轮资金将用于物理AI技术研发和整车量产产能扩充。",
                  "link": "https://stcn.com/article/detail/3974665.html",
                  "tags": [
                    "无人物流",
                    "L4自动驾驶",
                    "融资"
                  ],
                  "source": "证券时报",
                  "time": "6月23日"
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "正行创新 天使轮",
              "news": [
                {
                  "title": "正行创新完成近亿美元天使轮融资，姚颂再闯具身智能赛道",
                  "summary": "6月23日，具身智能企业正行创新（Striding AI）宣布完成近亿美元天使轮系列融资，投资方包括正大集团、华勤技术、九安医疗等多家上市企业。公司成立于2026年初，由连续创业者姚颂（前深鉴科技CEO、东方空间联席CEO）与清华助理教授于超联合发起，同步研发轮臂机器人与人形机器人本体及解决方案，首批自研产品计划2026年下半年亮相。资金将用于人才引进、世界动作模型迭代和零售工业场景落地。",
                  "link": "https://www.qbitai.com/2026/06/437694.html",
                  "tags": [
                    "具身智能",
                    "天使轮",
                    "融资"
                  ],
                  "source": "量子位",
                  "time": "6月23日"
                }
              ]
            },
            {
              "title": "影眸科技 新一轮融资",
              "news": [
                {
                  "title": "影眸科技Hyper3D完成数亿元融资，3D生成大模型Rodin Gen-2.5发布",
                  "summary": "6月23日，3D生成大模型公司影眸科技完成数亿元人民币新一轮融资，由凯辉基金、上海国投先导领投，老股东跟投。同步发布的Rodin Gen-2.5具备千万面级生成能力，引入「先思考再生成」逻辑，最快4秒生成模型。公司海外收入占比约80%，客户包括字节跳动、Unity、Figma、Canva等，已实现数千万美元ARR。此前英伟达CEO黄仁勋在CES 2026展示机器人时其3D画面由Hyper3D完成。",
                  "link": "https://www.jiemian.com/article/14631332.html",
                  "tags": [
                    "3D生成",
                    "融资",
                    "AIGC"
                  ],
                  "source": "界面新闻",
                  "time": "6月23日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "孙正义（软银创始人）",
              "news": [
                {
                  "title": "孙正义给马斯克泼冷水：太空数据中心意义不大，AI竞赛由地球算力决定",
                  "summary": "6月23日，软银创始人孙正义在股东大会上公开反驳马斯克的太空数据中心构想，称其「意义不大」。他指出电力成本仅占数据中心运营成本的约7%，节省的电费将被发射运输、在轨维护和通信延迟抵消；声称「未来几年远比十年后更重要」，先发者才能赢得AI竞赛。软银已向OpenAI投资约650亿美元，计划全球投入数千亿美元建设地面AI基础设施。",
                  "link": "https://wallstreetcn.com/articles/3775297",
                  "tags": [
                    "AI基础设施",
                    "太空数据中心",
                    "算力"
                  ],
                  "source": "华尔街见闻",
                  "time": "6月23日"
                }
              ]
            },
            {
              "title": "美图CPO 陈剑毅",
              "news": [
                {
                  "title": "美图CPO陈剑毅：AI工具是次要的，用户需求才是主要的",
                  "summary": "6月23日，美图CPO陈剑毅在与APPSO对话中表示，美图做AI产品的核心不是追求通用能力，而是围绕设计、口播、AI短剧、MV等具体内容格式做深度定制。他认为通用AI工具可覆盖大量场景，但垂直产品的价值在于理解特定内容的关键元素，把用户真正需要的流程做短做准。他表示会谨慎看待只迷恋AI工具却离用户很远的产品经理，因为「误把用AI来产出当成创造价值」。",
                  "link": "https://www.ifanr.com/1669611",
                  "tags": [
                    "产品方法论",
                    "AI应用",
                    "垂直场景"
                  ],
                  "source": "爱范儿APPSO",
                  "time": "6月23日"
                }
              ]
            },
            {
              "title": "中国超算「灵晟」",
              "news": [
                {
                  "title": "时隔九年，中国超算「灵晟」以2.19EFlops登顶全球TOP500",
                  "summary": "6月23日，在德国汉堡ISC2026大会上，中国超算「灵晟」以2.198 EFlops持续性能登顶全球TOP500榜首，这是继2017年「神威·太湖之光」后中国超算时隔九年重回第一。灵晟采用全自研LX2 CPU（ARMv9架构，近1400万核心），未使用任何GPU加速卡，在AMD/英伟达GPU对华出口禁令下实现自主突破。图灵奖得主唐加拉评价其「让世界看到超算通向AI for Science的希望」。",
                  "link": "https://news.cctv.com/2026/06/24/ARTIzgNeSyRyqMhNxuDNorwy260623.shtml",
                  "tags": [
                    "超算",
                    "国产芯片",
                    "AI算力"
                  ],
                  "source": "央视新闻",
                  "time": "6月23日"
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
          "date": "2026-06-16",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5",
              "score": "1508",
              "change": "+9"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1504",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1502",
              "change": "+5"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1499",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1493",
              "change": "+5"
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
              "score": "1483",
              "change": "+6"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1481",
              "change": "+5"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1478",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-8",
              "score": "1478",
              "change": "+6"
            },
            {
              "model": "gemini-3.5-flash",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1475",
              "change": "+4"
            },
            {
              "model": "glm-5.1",
              "score": "1475",
              "change": "+6"
            },
            {
              "model": "gpt-5.5",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "qwen3.7-max-preview",
              "score": "1475",
              "change": "+10"
            },
            {
              "model": "grok-4.20-beta-0309-reasoning",
              "score": "1474",
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
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-06-24",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash",
              "score": "4.96T tokens",
              "change": "↑16%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.1T tokens",
              "change": "↑12%"
            },
            {
              "model": "MiniMax M3",
              "score": "3.77T tokens",
              "change": "↑17%"
            },
            {
              "model": "Hy3 preview",
              "score": "3.68T tokens",
              "change": "↑5%"
            },
            {
              "model": "Owl Alpha",
              "score": "2.7T tokens",
              "change": "↑10%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.5T tokens",
              "change": "↑32%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.45T tokens",
              "change": "↑3%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "1.73T tokens",
              "change": "↑39%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "1.53T tokens",
              "change": "↑24%"
            },
            {
              "model": "GLM 5.2",
              "score": "1.51T tokens",
              "change": "new"
            },
            {
              "model": "GPT-5.5",
              "score": "1.07T tokens",
              "change": "↑131%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1T tokens",
              "change": "↑32%"
            },
            {
              "model": "GLM 5.1",
              "score": "973B tokens",
              "change": "↑78%"
            },
            {
              "model": "DeepSeek V3.2",
              "score": "961B tokens",
              "change": "↑15%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "937B tokens",
              "change": "↑3%"
            },
            {
              "model": "Gemini 2.5 Flash Lite",
              "score": "678B tokens",
              "change": "↑3%"
            },
            {
              "model": "Gemini 2.5 Flash",
              "score": "620B tokens",
              "change": "↑2%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "581B tokens",
              "change": "↑26%"
            },
            {
              "model": "Kimi K2.6",
              "score": "573B tokens",
              "change": "↑29%"
            },
            {
              "model": "Laguna M.1 (free)",
              "score": "548B tokens",
              "change": "↑9%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-06-23",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Bluerails Discovery",
              "category": "Fintech",
              "rank": 1,
              "link": "https://www.producthunt.com/search?q=Bluerails+Discovery"
            },
            {
              "name": "Cotypist",
              "category": "Productivity",
              "rank": 2,
              "link": "https://www.producthunt.com/search?q=Cotypist"
            },
            {
              "name": "OpenArt Director",
              "category": "Design Tools",
              "rank": 3,
              "link": "https://www.producthunt.com/search?q=OpenArt+Director"
            },
            {
              "name": "Latitude",
              "category": "Developer Tools",
              "rank": 4,
              "link": "https://www.producthunt.com/search?q=Latitude"
            },
            {
              "name": "Thumbmagic",
              "category": "Marketing",
              "rank": 5,
              "link": "https://www.producthunt.com/search?q=Thumbmagic"
            },
            {
              "name": "Hush",
              "category": "Open Source",
              "rank": 6,
              "link": "https://www.producthunt.com/search?q=Hush"
            },
            {
              "name": "Steam Machine",
              "category": "Hardware",
              "rank": 7,
              "link": "https://www.producthunt.com/search?q=Steam+Machine"
            },
            {
              "name": "Jotform AI App Builder",
              "category": "Productivity",
              "rank": 8,
              "link": "https://www.producthunt.com/search?q=Jotform+AI+App+Builder"
            },
            {
              "name": "Sakana Fugu",
              "category": "API",
              "rank": 9,
              "link": "https://www.producthunt.com/search?q=Sakana+Fugu"
            },
            {
              "name": "Blazly SEO",
              "category": "Marketing",
              "rank": 10,
              "link": "https://www.producthunt.com/search?q=Blazly+SEO"
            },
            {
              "name": "Conduit",
              "category": "Open Source",
              "rank": 11,
              "link": "https://www.producthunt.com/search?q=Conduit"
            },
            {
              "name": "Sipcode",
              "category": "Open Source",
              "rank": 12,
              "link": "https://www.producthunt.com/search?q=Sipcode"
            },
            {
              "name": "BestDefense.io",
              "category": "Artificial Intelligence",
              "rank": 13,
              "link": "https://www.producthunt.com/search?q=BestDefense.io"
            },
            {
              "name": "jebi",
              "category": "Mac",
              "rank": 14,
              "link": "https://www.producthunt.com/search?q=jebi"
            },
            {
              "name": "wildbirds",
              "category": "Social Media",
              "rank": 15,
              "link": "https://www.producthunt.com/search?q=wildbirds"
            },
            {
              "name": "prepros",
              "category": "Design Tools",
              "rank": 16,
              "link": "https://www.producthunt.com/search?q=prepros"
            },
            {
              "name": "NeuralAgent 3.0",
              "category": "Productivity",
              "rank": 17,
              "link": "https://www.producthunt.com/search?q=NeuralAgent+3.0"
            },
            {
              "name": "Buddy AI Note",
              "category": "Productivity",
              "rank": 18,
              "link": "https://www.producthunt.com/search?q=Buddy+AI+Note"
            },
            {
              "name": "Deckwise",
              "category": "Design Tools",
              "rank": 19,
              "link": "https://www.producthunt.com/search?q=Deckwise"
            },
            {
              "name": "Amnesia",
              "category": "Mac",
              "rank": 20,
              "link": "https://www.producthunt.com/search?q=Amnesia"
            }
          ]
        }
      ]
    }
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
