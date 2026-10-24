const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-23",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI更新使用政策：模型网关须经审批",
              "summary": "10月22日，OpenAI宣布更新使用政策，进一步明确安全模型开发相关规则，新政策将于11月20日生效。政策要求模型路由器和AI网关在提供直接模型访问权限前须经OpenAI审查批准，合作伙伴须采取与OpenAI标准一致的安全保障措施，调查违规行为并协调执行工作。",
              "link": "https://finance.eastmoney.com/a/202610223903079983.html",
              "tags": [
                "AI安全",
                "使用政策",
                "模型网关"
              ],
              "source": "东方财富网",
              "time": "10月22日消息"
            },
            {
              "title": "OpenAI将ChatGPT广告扩展至26个新国家",
              "summary": "10月21日，OpenAI宣布将ChatGPT广告推广至阿根廷、秘鲁、尼日利亚、南非、乌克兰等另外26个国家，这是其发展新兴广告业务的最新努力。免费用户和Go订阅用户将开始看到广告，OpenAI表示广告与回复分开、不影响回答且会被明确标注。",
              "link": "https://finance.eastmoney.com/a/202610213902892234.html",
              "tags": [
                "广告业务",
                "商业化"
              ],
              "source": "东方财富网",
              "time": "10月21日消息"
            },
            {
              "title": "OpenAI接近敲定最高300亿美元融资",
              "summary": "据CNBC援引知情人士报道，OpenAI接近敲定一轮最高300亿美元的融资，由阿联酋投资者与Coatue牵头，投前估值1.25万亿美元，被定位为潜在IPO前的过桥融资。OpenAI已于10月22日告知投资者希望在下周末前完成签署，最终融资规模仍在确定中。",
              "link": "https://finance.eastmoney.com/a/202610233904686535.html",
              "tags": [
                "融资",
                "IPO"
              ],
              "source": "东方财富网",
              "time": "10月23日消息"
            },
            {
              "title": "OpenAI全面开放Decisions API",
              "summary": "10月22日，OpenAI宣布Decisions API结束公开测试并正式开放，目前使用GPT-6 Luna模型，面向内容分类、请求路由和任务优先级排序等场景，直接返回条件成立概率、预设选项或评分。相较公开测试阶段，单次请求支持的问题数由200个增至400个。",
              "link": "https://finance.jrj.com.cn/2026/10/23104858831304.shtml",
              "tags": [
                "API",
                "决策模型"
              ],
              "source": "金融界",
              "time": "10月23日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic最快本周五提交上市申请",
              "summary": "据知情人士消息，Anthropic最快将于当地时间本周五向美国SEC公开提交S-1招股说明书，冲刺史上规模最大的IPO。今年6月其已完成650亿美元H轮融资、投后估值达9650亿美元，华尔街主流机构预期其有望以2万亿美元估值上市。",
              "link": "https://finance.jrj.com.cn/2026/10/22103058817695.shtml",
              "tags": [
                "IPO",
                "上市"
              ],
              "source": "金融界",
              "time": "10月22日消息"
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
              "title": "SpaceX洽谈接入8万座基站建移动网络",
              "summary": "据彭博社10月22日报道，SpaceX正与美国移动通信基础设施企业洽谈，希望获得至少8万座地面通信站点的使用权，以建立覆盖美国全国的移动通信网络，进一步拓展Starlink业务范围，将卫星通信与传统地面移动网络结合。",
              "link": "https://news.qq.com/rain/a/20261023A038F000",
              "tags": [
                "通信网络",
                "卫星"
              ],
              "source": "腾讯新闻",
              "time": "10月23日消息"
            },
            {
              "title": "SpaceX与特斯拉力争2027上半年完成合并",
              "summary": "据报道，SpaceX、特斯拉据称力争在2027年上半年完成合并交易。若落地，这将是马斯克旗下太空公司与电动车公司的一次重要整合，市场对其协同前景高度关注。",
              "link": "https://finance.eastmoney.com/a/202610223903323182.html",
              "tags": [
                "并购重组"
              ],
              "source": "东方财富网",
              "time": "10月22日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": []
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta未来支出承诺升至8250亿美元",
              "summary": "Meta五年期信用违约互换（CDS）报价一度上行8.9个基点至约119.3个基点/年，创该合约上市以来盘中最高。Meta已签署多项租赁与合约，未来承诺支出规模达8250亿美元，大量资金用于AI算力及基础设施建设，引发市场对其为AI扩产大举发债的担忧。",
              "link": "https://finance.eastmoney.com/a/202610223904317631.html",
              "tags": [
                "AI算力",
                "信用风险",
                "资本开支"
              ],
              "source": "东方财富网",
              "time": "10月22日消息"
            },
            {
              "title": "Meta被判支付250亿美元罚款",
              "summary": "美国新墨西哥州法院判令Meta Platforms支付250亿美元民事罚款。陪审团认定Meta因涉及用户隐私、数据处理及仇恨言论审核的误导性陈述，违反州消费者保护法超过4300万次，判决金额为美国司法史上最高的罚款判决之一。",
              "link": "https://finance.eastmoney.com/a/202610223903052052.html",
              "tags": [
                "隐私",
                "内容审核",
                "监管"
              ],
              "source": "东方财富网",
              "time": "10月22日消息"
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
          "news": []
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
              "title": "三星电机",
              "news": [
                {
                  "title": "三星电机获特斯拉英伟达注资建AI芯片基板产线",
                  "summary": "特斯拉、英伟达将分别出资1.1万亿韩元、2.6万亿韩元（合计约3.7万亿韩元），与三星电机共建FC-BGA基板产线，这是面向AI半导体的新一代封装基板。特斯拉出资用于产线扩建与设备投入，换取中长期稳定供货，基板将供给其自动驾驶电动车和Optimus人形机器人搭载的AI芯片。",
                  "link": "https://finance.eastmoney.com/a/202610223904055472.html",
                  "tags": [
                    "AI芯片",
                    "封装基板",
                    "供应链"
                  ],
                  "source": "东方财富网",
                  "time": "10月22日消息"
                }
              ]
            },
            {
              "title": "LG Innotek",
              "news": [
                {
                  "title": "LG Innotek与英伟达共研物理AI感知方案",
                  "summary": "LG集团旗下LG Innotek与英伟达合作，共同开发面向物理人工智能及机器人技术的感知解决方案。LG Innotek将提供摄像头模组、激光雷达及雷达融合感知技术，英伟达贡献Holoscan Sensor Bridge平台，实现传感器与图形处理器之间的数据直连。",
                  "link": "https://finance.eastmoney.com/a/202610223904067218.html",
                  "tags": [
                    "物理AI",
                    "机器人感知"
                  ],
                  "source": "东方财富网",
                  "time": "10月22日消息"
                }
              ]
            },
            {
              "title": "是石科技",
              "news": [
                {
                  "title": "是石科技发布TokenFleet调度框架",
                  "summary": "是石科技在2026 CCF全国高性能计算大会上发布TokenFleet分布式调度框架，从请求路由、跨机房容量协同到混合负载治理，把推理优化从单实例推进到集群层。据其GLM5.3调优数据，P95首Token延迟降低32.4%、P50降低71.3%，达标输出吞吐提升约29.4%。",
                  "link": "https://news.qq.com/rain/a/20261020A09PF100",
                  "tags": [
                    "推理优化",
                    "算力调度"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月20日消息"
                }
              ]
            },
            {
              "title": "宝马",
              "news": [
                {
                  "title": "宝马与中国信通院续签AI合作",
                  "summary": "宝马（中国）服务有限公司与中国信息通信研究院续签合作备忘录，将围绕下一代通信技术、人工智能及其他前沿技术深化合作，内容包括产业趋势研判、政策与标准研究、联合研究和产业生态共建。双方于2019年首次签署合作协议。",
                  "link": "https://news.qq.com/rain/a/20261023A015HS00",
                  "tags": [
                    "AI合作",
                    "智能网联"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月23日消息"
                }
              ]
            },
            {
              "title": "1Password",
              "news": [
                {
                  "title": "1Password推出智能体密码授权功能",
                  "summary": "密码管理服务商1Password发布面向个人AI智能体的1Password for Agents，让智能体在获得用户批准后登录网站，密码无需进入AI模型的上下文、也不交给智能体保存。公司正与Meta Muse、Claude Duet、ChatGPT Work、Grok Bot等产品推进集成。",
                  "link": "https://www.ithome.com/1/016/772.htm",
                  "tags": [
                    "AI智能体",
                    "身份安全"
                  ],
                  "source": "IT之家",
                  "time": "10月23日消息"
                }
              ]
            },
            {
              "title": "今日宜休",
              "news": [
                {
                  "title": "今日宜休发布iFlow智能温控系统",
                  "summary": "王腾创办的睡眠科技品牌今日宜休公布第二款产品ISHO iFlow智能温控系统，主打智能温控、面向深睡和精力恢复需求，将于10月29日的AI睡眠科技生态产品发布会上亮相。品牌将其作为AI睡眠科技生态的重要组成部分，配合智能戒指等穿戴设备协同使用。",
                  "link": "https://news.qq.com/rain/a/20261022A04SMB00",
                  "tags": [
                    "AI硬件",
                    "睡眠科技"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月22日消息"
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
          "cards": [
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "王兴兴称物理AI已有被击穿苗头",
                  "summary": "10月22日，在2026世界物理AI大会暨宇树合作伙伴生态大会上，宇树科技创始人王兴兴表示，随着GPT-6的发布，物理AI已看到被击穿的苗头，具身智能迈过ChatGPT时刻的最核心挑战是AI模型输入输出与真实机器人的对齐，商业服务落地将比家庭、工业领域更快。",
                  "link": "https://finance.eastmoney.com/a/202610233904919815.html",
                  "tags": [
                    "具身智能",
                    "物理AI"
                  ],
                  "source": "东方财富网",
                  "time": "10月22日"
                },
                {
                  "title": "宇树G1机器人累计下线约1-2万台",
                  "summary": "10月22日，宇树科技创始人王兴兴在2026世界物理AI大会上表示，自2024年5月发布以来，宇树G1机器人已累计生产下线约1-2万台，成为全球同型号出货量最高的人形机器人。",
                  "link": "https://finance.eastmoney.com/a/202610223903812332.html",
                  "tags": [
                    "人形机器人",
                    "量产"
                  ],
                  "source": "东方财富网",
                  "time": "10月22日消息"
                }
              ]
            },
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "马斯克称人形机器人数量将超人类",
                  "summary": "美东时间10月21日，特斯拉CEO马斯克在财报电话会上表示，坚信人形机器人赛道将成为全球最大产业，未来地球上人形机器人数量甚至会超过人类。他预计到明年年末，机器人AI、机电设计、可靠性等问题有望解决，届时可向特斯拉以外企业交付Optimus。",
                  "link": "https://news.qq.com/rain/a/20261022A07SDV00",
                  "tags": [
                    "人形机器人",
                    "量产交付"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月22日消息"
                }
              ]
            },
            {
              "title": "智元",
              "news": [
                {
                  "title": "智元开源具身推理数据集",
                  "summary": "10月22日，智元开源AGIBOT WORLD 2026第四期「具身推理」数据集，围绕真实任务中的目标、现场状态与执行约束训练机器人选择下一步行动，覆盖属性约束选择、前置条件推理、目标导向搜索、长程规划等九类能力，已用于其即将推出的Agent框架与新一代基座模型训练。",
                  "link": "https://news.qq.com/rain/a/20261022A083S600",
                  "tags": [
                    "具身智能",
                    "开源数据集"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月22日消息"
                }
              ]
            },
            {
              "title": "小鹏",
              "news": [
                {
                  "title": "小鹏IRON机器人可预测6秒内动作",
                  "summary": "小鹏汽车发布IRON人形机器人交互演示，展示握手、碰拳、击掌时对临时动作变化的响应。升级后的第二代VLA大模型已在IRON端侧运行，机器人每0.2秒根据当前画面重新推理一次，并预测未来6秒内的动作变化。",
                  "link": "https://news.qq.com/rain/a/20261023A09AGY00",
                  "tags": [
                    "人形机器人",
                    "VLA大模型"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月23日消息"
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
              "title": "辉羲智能",
              "news": [
                {
                  "title": "辉羲智能年内累计融资超25亿元",
                  "summary": "具身智能大算力芯片企业辉羲智能宣布，随着Pre-B+及B轮融资相继完成，公司2026年内累计股权融资规模已超25亿元。本轮由北京市人工智能产业投资基金领投，北京机器人产业发展投资基金等参与，资金将用于新一代具身智能大算力芯片研发及规模化交付。",
                  "link": "https://news.qq.com/rain/a/20261022A05I5600",
                  "tags": [
                    "具身智能芯片",
                    "融资"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月22日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "比尔·盖茨",
              "news": [
                {
                  "title": "比尔盖茨：AI将带来二十年颠覆性变革",
                  "summary": "10月22日，微软联合创始人比尔·盖茨接受The Verge采访表示，人们要为AI带来的二十年颠覆性变革做好准备，这段时期可能非常痛苦，甚至将社会分裂成乐于接受前沿科技与拒绝的两派。他认为AI过去一年的进步令人惊叹，社会必须为此做好准备。",
                  "link": "https://www.ithome.com/1/016/742.htm",
                  "tags": [
                    "AI社会影响",
                    "行业观点"
                  ],
                  "source": "IT之家",
                  "time": "10月22日消息"
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
          "date": "2026-10-23",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "26.7T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "20.5T tokens",
              "change": "↓44%"
            },
            {
              "model": "MiniMax M3.1 Flash (free) (minimax)",
              "score": "13.7T tokens",
              "change": "—"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "11.9T tokens",
              "change": "↓6%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "8.77T tokens",
              "change": "↑12%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "8.04T tokens",
              "change": "↑35%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "7.41T tokens",
              "change": "↓32%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.74T tokens",
              "change": "↑4%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.43T tokens",
              "change": "↓14%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "5.02T tokens",
              "change": "↓4%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.17T tokens",
              "change": "↓11%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "3T tokens",
              "change": "↓4%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "2.99T tokens",
              "change": "↓8%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.92T tokens",
              "change": "↓10%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "2.77T tokens",
              "change": "↓11%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.67T tokens",
              "change": "↑33%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.58T tokens",
              "change": "↓8%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "2.41T tokens",
              "change": "↑13%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "2.04T tokens",
              "change": "↓88%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.03T tokens",
              "change": "↓15%"
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
