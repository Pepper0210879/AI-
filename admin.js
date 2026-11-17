const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
    "date": "2026-11-17",
    "sections": {
      "overseas": {
        "vendors": [
          {
            "name": "OpenAI",
            "news": [
              {
                "title": "奥特曼：没有黄仁勋，AI 行业仍能继续发展",
                "summary": "11月16日，OpenAI CEO 奥特曼在 Semafor 举办的「Silicon Valley & The World」活动上首次公开谈及黄仁勋辞任英伟达 CEO 一事。他认为，尽管黄仁勋对 AI 行业至关重要，但 AI 市场需求和收入仍在快速增长，即便没有其领导，行业仍能继续发展。奥特曼同时称黄仁勋一直是自己心目中的英雄，但「英雄也有缺点」，并对其处境表示同情。",
                "link": "https://original.ifeng.com/c/8y7FJSNWZKK",
                "tags": [
                  "AI行业",
                  "观点"
                ],
                "source": "凤凰网",
                "time": "11月16日"
              },
              {
                "title": "OpenAI 推出儿童性虐待内容检测工具",
                "summary": "11月17日消息，OpenAI 发布 CSAM 检测工具，通过 API 向审核机构免费开放，结合新图像分类器与 ChatGPT 警告机制打击有害内容，并与 Anthropic、谷歌等合作制定应对指南，加强儿童网络安全防护。",
                "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02804001zf5a",
                "tags": [
                  "内容安全",
                  "儿童保护"
                ],
                "source": "新浪财经",
                "time": "11月17日消息"
              }
            ]
          },
          {
            "name": "Anthropic",
            "news": [
              {
                "title": "Anthropic 拟 IPO 后要求员工按计划卖股",
                "summary": "11月17日消息，据 Business Insider 报道，Anthropic 为降低内幕交易风险，计划在 IPO 后要求出售公司股票的员工使用预设交易计划（10b5-1），提前 30 天书面安排卖出，把「高管紧箍咒」套在普通员工头上。",
                "link": "https://www.aibase.com/zh/news/32352",
                "tags": [
                  "IPO",
                  "内幕交易"
                ],
                "source": "AIBase",
                "time": "11月17日消息"
              }
            ]
          },
          {
            "name": "Google",
            "news": [
              {
                "title": "谷歌 Ironwood TPU 刷新 MLPerf 训练纪录",
                "summary": "11月16日，谷歌云公布第七代自研 Ironwood TPU 在 MLPerf Training v6.1 基准测试第一轮的 10 项结果，覆盖模型预训练与智能体强化学习测试，其中 8192 颗 Ironwood TPU 集群约 102 秒完成 DeepSeek-V3 预训练。",
                "link": "https://www.cls.cn/detail/2535989",
                "tags": [
                  "TPU",
                  "AI芯片",
                  "MLPerf"
                ],
                "source": "财联社",
                "time": "11月16日"
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
                "title": "英伟达董事会不考虑让黄仁勋重任 CEO",
                "summary": "11月17日消息，据 CNBC 援引知情人士报道，英伟达董事会目前没有考虑让黄仁勋重新担任 CEO，也未就其回归展开讨论，工作重心仍聚焦对黄仁勋相关行为的调查。此前已有约 18 万人联署支持黄仁勋复职，马斯克等科技界人士也公开表达支持。",
                "link": "https://baijiahao.baidu.com/s?id=1882071799748745603",
                "tags": [
                  "CEO",
                  "人事",
                  "调查"
                ],
                "source": "财联社",
                "time": "11月17日消息"
              },
              {
                "title": "英伟达发布 Vera CPU 与 Rubin HPC GPU",
                "summary": "11月16日，英伟达在 SC26 大会发布面向高性能计算的 Vera CPU 机架级平台与 Rubin HPC GPU。Vera 为智能体科学带来更高性能，能效比 x86 CPU 提升一倍；Rubin HPC GPU 单卡超 5 万 CUDA 核心创纪录，支持第七代 NVLink，预计 2028 年上市。",
                "link": "https://baijiahao.baidu.com/s?id=1882037622081021302",
                "tags": [
                  "HPC",
                  "GPU",
                  "CPU"
                ],
                "source": "IT之家",
                "time": "11月16日"
              },
              {
                "title": "摩根大通：英伟达 AI 算力份额降至 39%",
                "summary": "11月16日消息，摩根大通资产管理市场与投资策略主席切巴莱斯特在报告中称，OpenAI、Anthropic 等前沿 AI 实验室已敲定未来采购的算力中，英伟达 GPU 占比仅 39%，而 2023 至 2025 年其份额曾达 83%，预示英伟达在下一代算力基础设施中的占比可能大幅萎缩。",
                "link": "https://caifuhao.eastmoney.com/news/20261116164907429869160",
                "tags": [
                  "GPU",
                  "市场份额",
                  "AI算力"
                ],
                "source": "财联社",
                "time": "11月16日消息"
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
                "title": "阿里发布 Qwen4-Max，单任务成本降六成",
                "summary": "11月16日，阿里巴巴发布新一代旗舰基座模型 Qwen4-Max，总参数 2.4 万亿，具备原生视觉能力，支持百万 Token 上下文。基于创新架构与训练优化，Qwen4-Max 以更少 Token 消耗实现更高性能，单任务平均成本较上代下降约六成，缓存命中输入低至每百万 Token 0.5 元。",
                "link": "https://baijiahao.baidu.com/s?id=1881991547859291568",
                "tags": [
                  "大模型",
                  "MoE",
                  "开源"
                ],
                "source": "财联社",
                "time": "11月16日"
              }
            ]
          },
          {
            "name": "火山引擎",
            "news": [
              {
                "title": "豆包工作上线「工作台」，覆盖 21 个场景",
                "summary": "11月16日，豆包工作在电脑端上线「工作台」功能，首批覆盖金融、医疗、教育、创意设计等 21 个专业场景，预先放入对应任务常用的技能与工具，支持连接万得、同花顺等数据服务，并可自建个性化工作台，是业内首个面向多专业场景定制的 AI 工作台。",
                "link": "https://baijiahao.baidu.com/s?id=1882000476420570842",
                "tags": [
                  "AI办公",
                  "工作台"
                ],
                "source": "36氪",
                "time": "11月16日"
              },
              {
                "title": "火山引擎全面开放 Seedance 2.5 4K 视频 API",
                "summary": "11月16日，火山引擎宣布 Seedance 2.5 的 4K 视频生成 API 在火山方舟全面开放，个人和企业用户均可调用，采用 10bit 位深与 H.265 编码，支持先生成 480p 样片再生成 4K 成片，适配大荧幕制作需求。",
                "link": "https://post.smzdm.com/p/aggwodzd/",
                "tags": [
                  "视频生成",
                  "4K",
                  "API"
                ],
                "source": "火山引擎",
                "time": "11月16日"
              }
            ]
          },
          {
            "name": "DeepSeek",
            "news": [
              {
                "title": "DeepSeek 因算力不足限额 App 与网页版",
                "summary": "11月16日，DeepSeek 对 App/网页版长对话实施限额，多名用户反馈收到「算力不足，不再支持超过 7 天不活跃的长对话」提示，单次输入上限缩至约 4 万字，并限制每日对话额度。这是 DeepSeek 近期算力紧张状态的延续，10 月以来平台已发生多起服务中断。",
                "link": "https://www.cqrb.cn/caijingzonghe/2026-11-16/2822542_pc.html",
                "tags": [
                  "算力",
                  "限额",
                  "API"
                ],
                "source": "重庆日报",
                "time": "11月16日"
              }
            ]
          },
          {
            "name": "腾讯",
            "news": [
              {
                "title": "腾讯混元发布 Hy4 flash，成本大幅降低",
                "summary": "11月16日，腾讯混元发布最新语言模型 Hy4 flash，总参数 224B、激活参数 12B，支持多模态与百万 Token 上下文，解码速度超 150tps。该模型已接入 WorkBuddy、元宝、企业微信等产品，单任务成本约为 Hy4 的二十分之一，计划后续开源。",
                "link": "https://cloud.tencent.com/developer/article/2785919",
                "tags": [
                  "大模型",
                  "MoE",
                  "多模态"
                ],
                "source": "腾讯云",
                "time": "11月16日"
              },
              {
                "title": "腾讯总办号召面向 AI 时代再创业",
                "summary": "11月16日，腾讯文化公开 28 周年 LinkTime 现场笔记，总办号召「心态归零，所有核心业务每一个团队都要面向 AI 时代再创业」，认为「现在的智能革命如果不投入拥抱，就是被颠覆」，要求组织扁平化、以小团队为作战单元，用 AI 重新设计管理流程与做事方式。",
                "link": "https://original.ifeng.com/c/8y7bb5Z7XiT",
                "tags": [
                  "组织变革",
                  "AI战略"
                ],
                "source": "凤凰网",
                "time": "11月16日"
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
            "news": []
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
                "title": "AMD",
                "news": [
                  {
                    "title": "AMD 完成收购 World Labs，李飞飞加盟",
                    "summary": "11月16日，AMD 宣布完成对 AI 研究公司 World Labs 的收购，以增强其在 AI 模型领域的研发能力。World Labs 专注于创建和模拟交互式 3D 环境的 AI 模型，以及机器人学习与仿真技术。创始人李飞飞加入 AMD，担任执行副总裁兼首席科学家，直接向苏姿丰汇报。",
                    "link": "https://c.m.163.com/news/a/LBT3RLQE0519D45U.html",
                    "tags": [
                      "收购",
                      "AI模型",
                      "3D"
                    ],
                    "source": "网易",
                    "time": "11月16日"
                  }
                ]
              },
              {
                "title": "苹果",
                "news": [
                  {
                    "title": "苹果启动健康 AI 研究，拟招募 20 万人",
                    "summary": "11月16日，苹果与医疗 AI 公司 OpenEvidence 在美国启动 Apple Health AI Usage Study，参与者通过研究 App 提交睡眠、心脏健康等问题，团队分析参与者如何理解并信任 AI 回答。项目最多招募 20 万名美国用户，数据不会用于训练 AI 模型。",
                    "link": "https://baijiahao.baidu.com/s?id=1881995660026034852",
                    "tags": [
                      "医疗AI",
                      "健康"
                    ],
                    "source": "钛媒体",
                    "time": "11月16日"
                  }
                ]
              },
              {
                "title": "台积电",
                "news": [
                  {
                    "title": "台积电拟按信用额度供应 AI 产能",
                    "summary": "11月16日消息，AI 循环融资疑虑升温背景下，台积电拟收紧客户付款政策，按客户财务状况评估信用额度，超额下单需现金支付，部分客户需预付产能保留款。ASIC 厂商也加紧筹资以应对行业变局。",
                    "link": "https://baijiahao.baidu.com/s?id=1881996843107047816",
                    "tags": [
                      "AI芯片",
                      "供应链",
                      "循环融资"
                    ],
                    "source": "财联社",
                    "time": "11月16日消息"
                  }
                ]
              }
            ]
          },
          {
            "name": "自动驾驶",
            "cards": [
              {
                "title": "小马智行",
                "news": [
                  {
                    "title": "小马智行与丰田 Robotaxi 广州示范运营",
                    "summary": "11月16日，小马智行与丰田合作研发并量产的第七代铂智 4X Robotaxi 在广州正式投入示范运营，面向公众开放 L4 级自动驾驶服务。该车搭载小马智行第七代车规级自动驾驶系统，采用丰田面向 L4 的车辆平台与冗余控制系统，可应对暴雨、夜间、拥堵等复杂场景。",
                    "link": "https://baijiahao.baidu.com/s?id=1882006867757997869",
                    "tags": [
                      "Robotaxi",
                      "L4自动驾驶"
                    ],
                    "source": "汽车之家",
                    "time": "11月16日"
                  }
                ]
              },
              {
                "title": "特斯拉",
                "news": [
                  {
                    "title": "特斯拉投 30 亿欧元扩建德国厂产 Cybercab",
                    "summary": "11月16日消息，特斯拉宣布将向德国柏林郊外的超级工厂投资 30 亿欧元，新建生产设施，目标实现每年最多生产 100 万辆 Cybercab。新设施计划今年底前提交建筑许可申请，预计 2027 年上半年开工、2029 年投产。",
                    "link": "https://baijiahao.baidu.com/s?id=1882063410084826960",
                    "tags": [
                      "Cybercab",
                      "Robotaxi",
                      "扩产"
                    ],
                    "source": "新浪财经",
                    "time": "11月16日消息"
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
                    "title": "首届蚂蚁灵波具身大模型挑战赛在沪揭晓",
                    "summary": "11月16日，首届蚂蚁灵波具身大模型挑战赛在上海揭晓结果，由福田实验室、西北工业大学、普渡机器人等选手组成的 TARS 战队以 82.5 分获一等奖。15 支决赛队伍在 48 小时内使用同一套硬件与 LingBot-VLA 2.0 模型完成抓取、整理、清扫等真机任务。",
                    "link": "https://www.jfdaily.com/staticsg/res/html/web/newsDetail.html?id=1215019",
                    "tags": [
                      "具身智能",
                      "机器人",
                      "VLA"
                    ],
                    "source": "上观新闻",
                    "time": "11月16日"
                  }
                ]
              },
              {
                "title": "小鹏",
                "news": [
                  {
                    "title": "何小鹏：小鹏 IRON 机器人明年二季度发布",
                    "summary": "11月16日，何小鹏在小鹏 Q3 财报电话会上透露，小鹏自研人形机器人 IRON 将在科技日和广州车展亮相，明年一季度进入门店试用，二季度面向外部商业客户正式发布。IRON 主打高阶智能交互能力。",
                    "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02804001ze9w",
                    "tags": [
                      "人形机器人",
                      "具身智能"
                    ],
                    "source": "新浪财经",
                    "time": "11月16日"
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
                "title": "英伟芯",
                "news": [
                  {
                    "title": "光互连厂商英伟芯完成数亿元融资",
                    "summary": "11月16日消息，下一代高速光互连解决方案提供商英伟芯宣布分阶段完成 Pre-A、Pre-A+ 系列融资，累计金额数亿元。Pre-A 轮由上海科创集团等领投，Pre-A+ 轮由经纬创投和中金资本旗下基金领投，资金将用于硅光芯片、光引擎研发迭代与量产交付。",
                    "link": "https://caifuhao.eastmoney.com/news/20261116112253485621120",
                    "tags": [
                      "光互连",
                      "硅光芯片",
                      "融资"
                    ],
                    "source": "东方财富网",
                    "time": "11月16日消息"
                  }
                ]
              },
              {
                "title": "无界进化",
                "news": [
                  {
                    "title": "无界进化完成超亿元 Pre-A 轮融资",
                    "summary": "11月16日，AI4S 企业无界进化（INFevo）宣布完成超亿元 Pre-A 轮融资，由星连资本、Prosperity7、华盖资本等联合投资，顺为资本、红杉中国追加投资。公司由晶泰科技孵化，以虚拟细胞与递归科学发现为核心，资金将用于基础模型研发与扩大自动化实验设施。",
                    "link": "https://caifuhao.eastmoney.com/news/20261116153319727340870",
                    "tags": [
                      "AI4S",
                      "虚拟细胞",
                      "融资"
                    ],
                    "source": "东方财富网",
                    "time": "11月16日"
                  }
                ]
              },
              {
                "title": "通芯智能",
                "news": [
                  {
                    "title": "AGI 芯片厂商通芯智能连获数亿元融资",
                    "summary": "11月16日消息，由通研院孵化、龙芯与海光老兵集结创立的 AGI 芯片公司通芯智能，半年内连续完成数亿元种子轮及天使轮融资，研发原生 AGI 架构芯片，首款芯片计划 12 月开展原型验证。",
                    "link": "https://news.pedaily.cn/202611/571748.shtml",
                    "tags": [
                      "AGI芯片",
                      "融资"
                    ],
                    "source": "投资界",
                    "time": "11月16日消息"
                  }
                ]
              }
            ]
          },
          {
            "name": "行业趋势&观点",
            "cards": [
              {
                "title": "AI演员方桃子",
                "news": [
                  {
                    "title": "AI 演员方桃子代言美瞳广告被罚",
                    "summary": "11月16日消息，因在未取得医疗审查证明的情况下发布美瞳广告且虚构产品使用效果，AI 短剧《被裁掉的女孩》虚拟女主「方桃子」的运营方广州我的影视文化传媒有限公司被广州市番禺区市场监管局罚款 6.82 万余元。该 AI 演员出道 30 天吸粉超 40 万。",
                    "link": "https://baijiahao.baidu.com/s?id=1882074646130257953",
                    "tags": [
                      "AI演员",
                      "虚假广告",
                      "监管"
                    ],
                    "source": "IT之家",
                    "time": "11月16日消息"
                  }
                ]
              },
              {
                "title": "辛顿",
                "news": [
                  {
                    "title": "辛顿：相比奥特曼等人更信任黄仁勋",
                    "summary": "11月16日消息，被誉为「AI 教父」的杰弗里·辛顿在最新采访中对英伟达前 CEO 黄仁勋给出评价，称印象中他是个正派的人，不会将其与奥特曼、扎克伯格、马斯克归为同一类人，「我信任黄仁勋得多」，同时坦言「我认为他犯了一个重大错误，但猜想英伟达能扛过去」。",
                    "link": "https://baijiahao.baidu.com/s?id=1881997930328874651",
                    "tags": [
                      "AI行业",
                      "观点"
                    ],
                    "source": "IT之家",
                    "time": "11月16日消息"
                  }
                ]
              },
              {
                "title": "IMF",
                "news": [
                  {
                    "title": "IMF 警告 AI 循环融资规模超万亿美元",
                    "summary": "11月16日，国际货币基金组织（IMF）总裁格奥尔基耶娃警告，全球经济当前高度依赖 AI 投资驱动，AI 领域循环融资规模已超 1 万亿美元，若相关信心骤降可能引发全球金融稳定风险。",
                    "link": "https://k.sina.com.cn/article_5953740931_v162dee083067045qie.html",
                    "tags": [
                      "AI投资",
                      "循环融资",
                      "风险"
                    ],
                    "source": "新浪财经",
                    "time": "11月16日"
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
                "model": "claude-fable-5",
                "score": "1506",
                "change": "±5"
              },
              {
                "model": "claude-opus-4-6-high",
                "score": "1505",
                "change": "±4"
              },
              {
                "model": "claude-opus-4-7-high",
                "score": "1502",
                "change": "±4"
              },
              {
                "model": "muse-spark-1.2 (xHigh)",
                "score": "1500",
                "change": "±11"
              },
              {
                "model": "claude-fable-5.1-max",
                "score": "1498",
                "change": "±8"
              },
              {
                "model": "claude-opus-4-6",
                "score": "1497",
                "change": "±3"
              },
              {
                "model": "claude-opus-4-7",
                "score": "1494",
                "change": "±4"
              },
              {
                "model": "muse-spark-1.3-max",
                "score": "1493",
                "change": "±9"
              },
              {
                "model": "gemini-3.8-flash-high (Preliminary)",
                "score": "1493",
                "change": "±9"
              },
              {
                "model": "claude-opus-5-high",
                "score": "1493",
                "change": "±4"
              },
              {
                "model": "muse-spark-1.1",
                "score": "1493",
                "change": "±5"
              },
              {
                "model": "gemini-3.7-flash-high (Preliminary)",
                "score": "1490",
                "change": "±8"
              },
              {
                "model": "muse-spark",
                "score": "1488",
                "change": "±6"
              },
              {
                "model": "claude-opus-5-max",
                "score": "1487",
                "change": "±5"
              },
              {
                "model": "gemini-3.1-pro-preview",
                "score": "1487",
                "change": "±3"
              },
              {
                "model": "gemini-3-pro",
                "score": "1485",
                "change": "±4"
              },
              {
                "model": "kimi-k3-max",
                "score": "1485",
                "change": "±5"
              },
              {
                "model": "gpt-5.6-sol-xhigh",
                "score": "1483",
                "change": "±5"
              },
              {
                "model": "glm-5.3-max",
                "score": "1483",
                "change": "±6"
              },
              {
                "model": "gpt-5.5-high",
                "score": "1482",
                "change": "±4"
              }
            ]
          },
          {
            "name": "OpenRouter",
            "date": "2026-11-16",
            "link": "https://openrouter.ai/rankings",
            "rankings": [
              {
                "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
                "score": "61.2T tokens",
                "change": "↑10%"
              },
              {
                "model": "Hy4 (tencent)",
                "score": "16T tokens",
                "change": "—"
              },
              {
                "model": "DeepSeek V4.1 Flash (deepseek)",
                "score": "15.5T tokens",
                "change": "↓12%"
              },
              {
                "model": "GLM 5.3 Flash (z-ai)",
                "score": "11.8T tokens",
                "change": "↓3%"
              },
              {
                "model": "GPT-6 Luna (openai)",
                "score": "8.08T tokens",
                "change": "↑14%"
              },
              {
                "model": "Claude Opus 5.5 (anthropic)",
                "score": "7.37T tokens",
                "change": "↑9%"
              },
              {
                "model": "Step 5 Preview (stepfun)",
                "score": "6.36T tokens",
                "change": "↓11%"
              },
              {
                "model": "MiMo-V2.6-Flash (xiaomi)",
                "score": "4.16T tokens",
                "change": "↑63%"
              },
              {
                "model": "GLM 5.3 (z-ai)",
                "score": "3.74T tokens",
                "change": "↑5%"
              },
              {
                "model": "GPT-6.1 Sol (openai)",
                "score": "3.71T tokens",
                "change": "↓5%"
              },
              {
                "model": "MiniMax M3.1 Flash (minimax)",
                "score": "3.35T tokens",
                "change": "↓28%"
              },
              {
                "model": "Kimi K3.1 Pro (moonshotai)",
                "score": "3.24T tokens",
                "change": "↓26%"
              },
              {
                "model": "Nemotron 3 Ultra (free) (nvidia)",
                "score": "3.2T tokens",
                "change": "↑1%"
              },
              {
                "model": "DeepSeek V4 Flash 0731 (deepseek)",
                "score": "3.2T tokens",
                "change": "—"
              },
              {
                "model": "Nemotron 3.5 Super VL (free) (nvidia)",
                "score": "2.97T tokens",
                "change": "↑4%"
              },
              {
                "model": "Muse Spark 1.3 Contributor (meta)",
                "score": "2.96T tokens",
                "change": "↑3%"
              },
              {
                "model": "Jev 1.13 (typesafe)",
                "score": "2.87T tokens",
                "change": "↓5%"
              },
              {
                "model": "Claude Haiku 5.5 (anthropic)",
                "score": "2.78T tokens",
                "change": "↑4%"
              },
              {
                "model": "Claude Sonnet 5.5 (anthropic)",
                "score": "2.67T tokens",
                "change": "↑12%"
              },
              {
                "model": "ERNIE-5.5-Flash-Preview (free) (baidu)",
                "score": "2.47T tokens",
                "change": "—"
              }
            ]
          },
          {
            "name": "Product Hunt",
            "date": "2026-09-16",
            "link": "https://www.producthunt.com/",
            "rankings": [
              {
                "name": "Viktor.com",
                "category": "Productivity",
                "rank": 0,
                "link": "https://viktor.com"
              },
              {
                "name": "Weave Router 2.0",
                "category": "Open Source",
                "rank": 1,
                "link": "https://weaverouter.com"
              },
              {
                "name": "Appwrite 2.0",
                "category": "Open Source",
                "rank": 2,
                "link": "https://appwrite.io"
              },
              {
                "name": "Gemini 3.8 & 3.8 Live Extended Thinking",
                "category": "Bots",
                "rank": 3,
                "link": "https://gemini.google.com"
              },
              {
                "name": "Toki Coordination",
                "category": "Productivity",
                "rank": 4,
                "link": "https://toki.com"
              },
              {
                "name": "CAT ME app",
                "category": "Photography",
                "rank": 5,
                "link": "https://apps.apple.com/us/app/cat-me-ai/id6803704105"
              },
              {
                "name": "Expand Board for macOS",
                "category": "Mac",
                "rank": 6,
                "link": "https://www.producthunt.com/products/expand-board-for-macos"
              },
              {
                "name": "Thread",
                "category": "Productivity",
                "rank": 7,
                "link": "https://threadapp.io"
              },
              {
                "name": "Fide Island",
                "category": "Mac",
                "rank": 8,
                "link": "https://www.producthunt.com/products/fide-island"
              },
              {
                "name": "Twigg",
                "category": "Developer Tools",
                "rank": 9,
                "link": "https://twigg.ai"
              },
              {
                "name": "ZeroClick",
                "category": "Payments",
                "rank": 10,
                "link": "https://zeroclick.ai"
              },
              {
                "name": "Jottoo",
                "category": "Productivity",
                "rank": 11,
                "link": "https://jottoo.com"
              },
              {
                "name": "flat.social",
                "category": "Events",
                "rank": 12,
                "link": "https://flat.social"
              },
              {
                "name": "Project Feed",
                "category": "Design Tools",
                "rank": 13,
                "link": "https://www.producthunt.com/products/project-feed"
              },
              {
                "name": "Convo",
                "category": "Sales",
                "rank": 14,
                "link": "https://www.toolfinder.co/go/convo"
              },
              {
                "name": "PeakHour 6",
                "category": "Mac",
                "rank": 15,
                "link": "https://peakhour.app"
              },
              {
                "name": "CreatorHat",
                "category": "Safari Extensions",
                "rank": 16,
                "link": "https://creatorhat.com"
              },
              {
                "name": "PhraseVault 3.0",
                "category": "Mac",
                "rank": 17,
                "link": "https://phrasevault.app"
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
