const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-11-14",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 撤销独立机器人团队，并入通用模型研究",
              "summary": "11月14日消息，OpenAI 向《财富》证实已撤销独立机器人团队，机器人研究人员并入首席研究官 Mark Chen 领导的核心研究团队，机器人应用与硬件团队转入总裁 Greg Brockman 负责的应用部门。OpenAI 表示研究人员原计划沿 Sora 路线推进机器人研究，后发现 GPT-6 Astra 等通用模型可直接执行部分机器人任务，故将机器人研究并入更广泛的模型研发工作。",
              "link": "https://news.china.com/socialgd/10000169/20261114/49871513_all.html",
              "tags": [
                "机器人",
                "组织架构"
              ],
              "source": "中华网",
              "time": "11月14日消息"
            },
            {
              "title": "Flinn AI 起诉 OpenAI、Anthropic 侵犯神经网络专利",
              "summary": "11月13日消息，人工智能公司 Flinn AI 向美国特拉华州地区法院提起诉讼，指控 OpenAI 与 Anthropic 侵犯其联合发明人 Steven Flinn 和 Naomi Mannipeni 获得的五项专利。这些发明可追溯至 2015 年末至 2016 年初，诉状称其旨在保护基于注意力机制的神经网络技术，而该技术构成现代生成式 AI 系统的重要功能基础。",
              "link": "https://baijiahao.baidu.com/s?id=1881701528297281361",
              "tags": [
                "专利诉讼",
                "注意力机制"
              ],
              "source": "百家号",
              "time": "11月13日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic「史上最严」Claude 封号机制正式生效",
              "summary": "11月12日消息，Anthropic 被称为「Claude 史上最严封号机制」正式生效，明确地区准入的穿透式审查标准，封堵壳公司、代理中转等绕开地区限制的方式。新规覆盖 Claude.ai、Claude Code、API 及云服务商渠道，划分三类准入限制：使用者物理位置、经营主体注册地及受受限地区主体持股控制的企业均受限。",
              "link": "https://www.sina.cn/news/detail/5364827666514244.html",
              "tags": [
                "封号",
                "地区准入"
              ],
              "source": "新浪",
              "time": "11月12日消息"
            },
            {
              "title": "Claude 出现大量报错，Anthropic 官方称正在调查",
              "summary": "11月14日消息，Claude.ai 与 Claude Code 出现大量身份验证报错，Anthropic 官方发布公告称「正在调查用户在 Claude.ai 和 Claude Code 上进行身份验证时遇到的问题」，并表示将尽快提供最新进展。",
              "link": "https://i.ifeng.com/c/8y1XGNpJd2q",
              "tags": [
                "服务故障"
              ],
              "source": "凤凰网",
              "time": "11月14日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "Gemini 接入 Google 钱包，可整理账单与订阅扣款",
              "summary": "当地时间11月13日消息，谷歌开始向美国 Gemini 用户推送 Google 钱包连接功能，覆盖网页版与移动应用。用户可在聊天中通过 @Google Wallet 查询消费记录，或经 Plaid 接入银行账户。Gemini 可生成支出图表、找出跨账户定期扣款并标注涨价项目，采用只读访问机制，不涉及资金转移。",
              "link": "https://baijiahao.baidu.com/s?id=1881831154954135794",
              "tags": [
                "个人财务",
                "钱包"
              ],
              "source": "百家号",
              "time": "当地时间11月13日消息"
            },
            {
              "title": "谷歌发布 Antigravity Teamwork 多智能体系统",
              "summary": "11月13日消息，谷歌扩展 Antigravity 平台发布 Teamwork 多智能体系统，利用多个专业 AI 智能体协同工作，成功验证多项复杂数学证明。系统让不同专长的智能体分工协作，为复杂推理任务提供新的解决范式。",
              "link": "https://baijiahao.baidu.com/s?id=1881815607519244841",
              "tags": [
                "多智能体",
                "数学推理"
              ],
              "source": "百家号",
              "time": "11月13日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "马斯克：将签名支持黄仁勋复职英伟达 CEO 的请愿",
              "summary": "11月14日消息，马斯克在 X 平台回复一则讨论英伟达员工如何争取黄仁勋复职的帖子时表示「目前正在进行要求黄仁勋复职的请愿活动，我也会签名」。此前英伟达员工通过内网发帖呼吁董事会请回黄仁勋，帖子已获逾 1600 条评论。",
              "link": "https://finance.sina.com.cn/tech/csj/2026-11-14/doc-iniysvma7300079.shtml",
              "tags": [
                "英伟达",
                "请愿"
              ],
              "source": "新浪财经",
              "time": "11月14日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达员工请愿黄仁勋回归，市值重返美股第二",
              "summary": "11月13日消息，据《连线》报道，英伟达资深工程师通过内网「建议箱」发帖要求董事会先听取员工意见，帖子获逾 1600 条评论，内部投票超 97% 员工支持黄仁勋复职。美东时间 11 月 13 日英伟达收报 162.85 美元，市值约 3.92 万亿美元，重返美股第二；本周累计下跌 12.7%，市值蒸发超 5730 亿美元。",
              "link": "https://c.m.163.com/news/a/LBKMLTB70511D6RL.html",
              "tags": [
                "CEO更替",
                "股价"
              ],
              "source": "网易",
              "time": "11月13日消息"
            },
            {
              "title": "段永平：目前不会卖出英伟达，当天卖出不少看跌期权",
              "summary": "11月13日消息，知名投资人段永平在回复网友提问时表示，目前不会卖出英伟达，实际上当天还卖出了不少看跌期权。此前他已清空英伟达正股，此番表态被市场解读为其对英伟达长期价值仍持信心。",
              "link": "https://t.cj.sina.com.cn/articles/view/1659643027/62ec249302001uswu",
              "tags": [
                "投资观点",
                "期权"
              ],
              "source": "新浪财经",
              "time": "11月13日消息"
            },
            {
              "title": "散户逆势抄底英伟达，开盘半小时买入 1.11 亿美元",
              "summary": "11月13日消息，据 Vanda Analytics 数据，散户在开盘后半小时内买入约 1.11 亿美元的英伟达股票，创下该股有记录以来开盘阶段的最大散户买入规模。英伟达当日盘中一度跌至 158.39 美元，最终收跌 2.01%。",
              "link": "https://www.techweb.com.cn/ucweb/news/id/2980521",
              "tags": [
                "散户",
                "抄底"
              ],
              "source": "TechWeb",
              "time": "11月13日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 旗下 Muse 上线代打电话功能",
              "summary": "11月14日消息，Meta 旗下 AI 智能体 Muse 上线代打电话功能，面向所有付费用户推出。用户可授权 Muse 帮助联络商家或保险公司等机构，由 AI 智能体代替自己完成电话沟通，标志着 AI 智能体从信息助手向实际代办事务迈进一步。",
              "link": "https://i.ifeng.com/c/8y3R9ly8xnl",
              "tags": [
                "AI智能体",
                "电话代办"
              ],
              "source": "凤凰网",
              "time": "11月14日消息"
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
          "news": []
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek 开放全家桶应用 API，可复刻官方 App",
              "summary": "11月13日消息，DeepSeek 开放一组应用 API，把官方 App 与网页端使用的联网搜索、文件输入、链接阅读等工具接入现有对话接口。普通模式可按问题搜索网页并附引用，思考模式可在多步推理中继续搜索；语音、OCR、ASR、TTS 等底层能力也开放独立接口，可单独或组合调用。",
              "link": "https://baijiahao.baidu.com/s?id=1881789490873220768",
              "tags": [
                "API",
                "工具调用"
              ],
              "source": "百家号",
              "time": "11月13日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯混元发布实时语音模型 Hy Realtime",
              "summary": "11月13日消息，腾讯混元发布全新实时语音模型 Hy Realtime，新增 Agentic 工具调用与唱歌能力，已在元宝语音通话、腾讯客服等产品上线，近期将上线腾讯云对外提供 API。模型能根据上下文判断是否联网搜索，演唱能力由混元与腾讯音乐 TME 灵音 AI 团队联合开发。",
              "link": "https://baijiahao.baidu.com/s?id=1881733628518714554",
              "tags": [
                "语音模型",
                "Agentic"
              ],
              "source": "百家号",
              "time": "11月13日消息"
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
              "title": "微软",
              "news": [
                {
                  "title": "微软 365 全球宕机，Outlook、Teams、Copilot 集体受影响",
                  "summary": "11月13日消息，微软 Microsoft 365 出现全球性服务中断，Outlook、Teams 及 Copilot 等产品在至少 70 个国家无法使用，追踪平台 Downdetector 收到约 20 万份问题报告。微软初步认定故障源于此前一次网络容量升级留下的问题，与网络攻击或 AI agents 无关。",
                  "link": "https://cloud.tencent.com/developer/article/2783498",
                  "tags": [
                    "服务中断",
                    "Copilot"
                  ],
                  "source": "腾讯云",
                  "time": "11月13日消息"
                },
                {
                  "title": "微软资深 AI 科学家 John Langford 离职",
                  "summary": "11月14日消息，微软资深人工智能科学家约翰·兰福德（John Langford）离职，结束其在微软逾 14 年的职业生涯。兰福德曾领导微软 AI Frontiers 实验室，其离职被外界视为微软在 AI 领域降本调整、技术创新难以落地背景下的又一信号。",
                  "link": "https://baijiahao.baidu.com/s?id=1881802258546073245",
                  "tags": [
                    "人事变动",
                    "AI Frontiers"
                  ],
                  "source": "百家号",
                  "time": "11月14日消息"
                }
              ]
            },
            {
              "title": "阿里",
              "news": [
                {
                  "title": "阿里上线 AI 写歌应用「快乐虾米」",
                  "summary": "11月13日消息，阿里旗下「快乐虾米」登录 iOS 与安卓应用商店，输入故事、情绪或曲风即可生成带歌词和演唱的完整歌曲。应用由阿里 ATH 团队开发，今年 8 月先推网页测试版，原虾米音乐于 2021 年停止服务后，该应用让虾米品牌重回大众视野。",
                  "link": "https://baijiahao.baidu.com/s?id=1881726451546350197",
                  "tags": [
                    "AI音乐",
                    "AIGC"
                  ],
                  "source": "百家号",
                  "time": "11月13日消息"
                }
              ]
            },
            {
              "title": "Thinking Machines",
              "news": [
                {
                  "title": "Thinking Machines 开放 Inkling 2 Small 模型权重",
                  "summary": "11月14日消息，Thinking Machines Lab 将 Inkling 2 Small 模型权重上传至 Hugging Face，采用 Apache 2.0 许可。该模型为支持图像输入的混合专家模型，总参数 5940 亿、每次推理激活 170 亿，支持调节推理投入，已接入 vLLM、SGLang 等推理框架。",
                  "link": "https://huggingface.co/thinkingmachines/Inkling-2-Small",
                  "tags": [
                    "开源",
                    "MoE"
                  ],
                  "source": "Hugging Face",
                  "time": "11月14日消息"
                }
              ]
            },
            {
              "title": "可达智灵",
              "news": [
                {
                  "title": "可达智灵发布织灵 2.5，从 AI 编程走向 AI 研发",
                  "summary": "11月13日消息，可达智灵发布织灵 Coda Loom 2.5，以 ADF 数智研发工厂为核心，为企业提供 7×24 小时的 ADE 数字研发团队。本次升级围绕自主推进、组织沉淀、持续进化、跨越多端四个方向，核心变化是 AI 研发从个人提效走向组织能力沉淀。",
                  "link": "https://baijiahao.baidu.com/s?id=1881712223953944869",
                  "tags": [
                    "AI研发",
                    "智能体"
                  ],
                  "source": "百家号",
                  "time": "11月13日消息"
                }
              ]
            },
            {
              "title": "Cloudflare",
              "news": [
                {
                  "title": "Cloudflare 开源 AI 智能体专用浏览器 Kitesurf",
                  "summary": "11月14日消息，Cloudflare 开源为 AI 智能体打造的专用浏览器 Kitesurf，让 AI 智能体摆脱传统 Chromium 进程的束缚，以更轻量高效的方式浏览网页。该项目面向开发者开放，旨在降低智能体执行网页操作的门槛。",
                  "link": "https://baijiahao.baidu.com/s?id=1881828902637307011",
                  "tags": [
                    "开源",
                    "智能体浏览器"
                  ],
                  "source": "百家号",
                  "time": "11月14日消息"
                }
              ]
            },
            {
              "title": "Perplexity",
              "news": [
                {
                  "title": "Perplexity Teammates 登陆 Mac 版应用",
                  "summary": "11月13日消息，Perplexity 向 Mac 用户推出 Teammates「AI 队友」功能，Max 订阅用户可通过三步设置开启，让 AI 智能体协助完成搜索、信息整合等办公任务，实现所谓「躺平式办公」。",
                  "link": "https://baijiahao.baidu.com/s?id=1881797046315530918",
                  "tags": [
                    "AI智能体",
                    "办公"
                  ],
                  "source": "百家号",
                  "time": "11月13日消息"
                }
              ]
            },
            {
              "title": "摩尔线程",
              "news": [
                {
                  "title": "摩尔线程 S5000 复现清华大学 ProtCell 预训练",
                  "summary": "11月14日消息，清华大学发布单细胞蛋白组基础模型 ProtCell，利用摩尔线程 MTT S5000 智算卡成功完成「虚拟细胞」预训练，训练规模达 3.8 亿细胞，复现误差仅 0.2%，展示了国产 GPU 在大规模生命科学计算中的能力。",
                  "link": "https://www.elecfans.com/d/8945127.html",
                  "tags": [
                    "AI4Science",
                    "国产GPU"
                  ],
                  "source": "电子发烧友",
                  "time": "11月14日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": []
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
          "cards": [
            {
              "title": "LangChain",
              "news": [
                {
                  "title": "LangChain 完成 3 亿美元 C 轮融资，估值 30 亿美元",
                  "summary": "11月14日消息，AI 智能体开发平台 LangChain 宣布完成 3 亿美元 C 轮融资，估值 30 亿美元，老股东 CapitalG 领投，GIC、DFJ Growth 首次参投。LangChain 表示已有逾 7000 家机构使用其 LangSmith 平台，公司计划于 11 月 20 日公布 LangSmith 新功能。",
                  "link": "https://baijiahao.baidu.com/s?id=1881795655684025457",
                  "tags": [
                    "融资",
                    "智能体平台"
                  ],
                  "source": "百家号",
                  "time": "11月14日消息"
                }
              ]
            },
            {
              "title": "青葵智造",
              "news": [
                {
                  "title": "青葵智造完成亿元 A 轮融资，聚焦 Physical AI",
                  "summary": "11月14日消息，面向科学研发的 Physical AI 公司「青葵智造」完成亿元 A 轮融资，由创东方投资、飞荣达股份及金辉大数据共同参与。资金将用于核心技术研发、重点行业拓展及云实验室建设，加速自驱动实验室的产业化落地。",
                  "link": "https://36kr.com/newsflashes/4067555949319041",
                  "tags": [
                    "融资",
                    "Physical AI"
                  ],
                  "source": "36氪",
                  "time": "11月14日消息"
                }
              ]
            },
            {
              "title": "字节跳动",
              "news": [
                {
                  "title": "字节跳动拟以 4000 亿美元估值回购至多 60 亿美元股份",
                  "summary": "11月13日消息，字节跳动计划以约 4000 亿美元估值从现有投资者回购不超过 60 亿美元股份，回购价每股 241.35 美元，高于上轮。字节还计划向从事 AI 业务的员工提供合计 3 亿股与 AI 业务价值挂钩的股份，以奖励并留住 AI 人才。",
                  "link": "https://www.techweb.com.cn/ucweb/news/id/2980543",
                  "tags": [
                    "回购",
                    "AI人才"
                  ],
                  "source": "TechWeb",
                  "time": "11月13日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "Omdia",
              "news": [
                {
                  "title": "Omdia：2026 年全球 AI 软件收入将突破 2000 亿美元",
                  "summary": "11月14日消息，据 Omdia《AI 软件市场预测》报告，2026 年全球 AI 软件收入将超过 2000 亿美元，达到 2024 年水平的两倍。Omdia 预测显示，生成式 AI 与代理式 AI 的需求均呈加速增长态势。",
                  "link": "https://baijiahao.baidu.com/s?id=1881716164186070287",
                  "tags": [
                    "市场预测",
                    "生成式AI"
                  ],
                  "source": "百家号",
                  "time": "11月14日消息"
                }
              ]
            },
            {
              "title": "灵光（蚂蚁）",
              "news": [
                {
                  "title": "灵光产品经理：为什么选择「托管量」评价个人 AI 助手",
                  "summary": "11月14日消息，蚂蚁集团旗下 AI 应用灵光产品经理寺二近日接受《晚点》采访时表示，团队把「托管量」作为衡量个人 AI 助手的核心指标，统计用户交给应用持续跟进的事项。目前托管更多集中在监测和提醒，要进一步完成实际操作还需打通不同互联网平台的数据与接口。",
                  "link": "https://t.cj.sina.com.cn/articles/view/7294209083/1b2c4cc3b00101xpxc",
                  "tags": [
                    "个人AI助手",
                    "观点"
                  ],
                  "source": "新浪财经",
                  "time": "11月14日消息"
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
          "date": "2026-11-13",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "55.8T tokens",
              "change": "↓1%"
            },
            {
              "model": "Hy4 (tencent)",
              "score": "20.3T tokens",
              "change": "↑405%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "16T tokens",
              "change": "↓3%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "12T tokens",
              "change": "↓20%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "7.43T tokens",
              "change": "↑2%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "6.79T tokens",
              "change": "↑4%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "6.73T tokens",
              "change": "↑1%"
            },
            {
              "model": "Kimi K3.1 Pro (moonshotai)",
              "score": "4.38T tokens",
              "change": "↑24%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "4.23T tokens",
              "change": "↑17%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.88T tokens",
              "change": "↑9%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "3.62T tokens",
              "change": "↑51%"
            },
            {
              "model": "MiniMax M3.1 Flash (minimax)",
              "score": "3.6T tokens",
              "change": "↓40%"
            },
            {
              "model": "Crouton Alpha (stealth)",
              "score": "3.53T tokens",
              "change": "↑125%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "3.24T tokens",
              "change": "↓12%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "3.19T tokens",
              "change": "↑10%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.99T tokens",
              "change": "↑15%"
            },
            {
              "model": "Nemotron 3.5 Super VL (free) (nvidia)",
              "score": "2.91T tokens",
              "change": "↑3%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.8T tokens",
              "change": "↓7%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.79T tokens",
              "change": "—"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.44T tokens",
              "change": "↑6%"
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
