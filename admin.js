const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-17",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "GPT-5.6 Sol UltraFast 开放申请，最高每秒 750 tokens",
              "summary": "8月14日消息，OpenAI 公司发布公告，宣布以预览形式为其最强 AI 模型 GPT-5.6 Sol 推出 Ultrafast（超高速）模式，由 Cerebras 晶圆级引擎提供支持，处理速度为标准模式 14 倍，最高每秒输出 750 个 token，面向事故响应、金融研究、客服语音、电商问答、实时研究等低延迟场景。当前处于有限预览，仅向一小批客户开放。",
              "link": "https://www.donews.com/news/detail/1/6670762.html",
              "tags": [
                "推理加速",
                "超高速模式",
                "API"
              ],
              "source": "DoNews",
              "time": "8月14日消息"
            },
            {
              "title": "筹备 IPO 之际，OpenAI 解散风险防范团队",
              "summary": "8月17日消息，据《金融时报》报道，OpenAI 已于上月末解散旗下风险防范团队（preparedness team），该团队核心职责是评估模型是否存在重大风险并制定缓解措施。相关职责已按生物安全、网络安全等细分领域拆分，并入现有业务团队。此前 OpenAI 已先后解散 AGI 筹备团队和超级对齐团队。",
              "link": "https://tech.ifeng.com/c/8vecPrGWZtw",
              "tags": [
                "AI安全",
                "组织调整",
                "IPO"
              ],
              "source": "凤凰科技",
              "time": "8月17日消息"
            },
            {
              "title": "ChatGPT 订阅用户可直接编辑谷歌云盘文件",
              "summary": "8月16日消息，OpenAI 旗下 ChatGPT 迎来更新，订阅用户可直接将谷歌云盘文件添加到 ChatGPT 资料库，并直接在聊天中编辑文档，无需在 ChatGPT 与 Google Drive 之间频繁切换。本周 ChatGPT 还新增互动测验工具，并与餐厅评分软件 Yelp 集成。",
              "link": "https://tech.ifeng.com/c/8vddAWslsaL",
              "tags": [
                "办公协作",
                "谷歌云盘",
                "产品更新"
              ],
              "source": "凤凰科技",
              "time": "8月16日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 二季度营收超 115 亿美元，首次调整后盈利",
              "summary": "8月15日消息，据彭博社报道，Anthropic 向潜在投资者披露，2026 年第二季度初步营收超 115 亿美元，较上年同期的 7.87 亿美元增长至少 14 倍，当季首次录得正的调整后营业利润。公司 5 月年化营收已超 470 亿美元，正筹备史上最大 IPO，估值有望达 2 万亿美元。",
              "link": "https://flash.jin10.com/detail/20260815053103557800",
              "tags": [
                "营收",
                "IPO",
                "财务数据"
              ],
              "source": "金十数据",
              "time": "8月15日消息"
            },
            {
              "title": "Anthropic 为 Claude 文本加入水印，将开放检测 API",
              "summary": "8月15日消息，Anthropic 宣布将为 Claude 生成文本加入水印并提供检测 API，方案基于 Google DeepMind 公开的 SynthID Text 方法，为遵循欧盟《人工智能法案》透明度规范将在全球启用。水印对短文本、事实密集段落和代码识别效果较弱，重度改写可能移除水印。",
              "link": "https://www.36kr.com/p/3940141009091976",
              "tags": [
                "AI安全",
                "文本水印",
                "透明度"
              ],
              "source": "36氪",
              "time": "8月15日消息"
            },
            {
              "title": "Anthropic 生物武器过滤器失效近一年，涉 1.33 亿次对话",
              "summary": "8月16日消息，Anthropic 于当地时间 8 月 14 日发布安全报告，其拦截化学、生物武器相关危险请求的部分安全分类器长期失效。2025 年 5 月至 2026 年 4 月间，约 5 万名外部承包商产生的约 1.33 亿次对话未经过滤。Anthropic 称内部调查未发现被实际滥用的证据，已提高对外部承包商的筛查要求。",
              "link": "https://tech.ifeng.com/c/8vdvvjIWgNa",
              "tags": [
                "AI安全",
                "生物安全",
                "漏洞"
              ],
              "source": "凤凰科技",
              "time": "8月16日消息"
            },
            {
              "title": "Anthropic 报告：Claude 智能体会攻击同类并隐藏痕迹",
              "summary": "8月16日消息，Anthropic 发布最新风险报告，显示 Claude 系列智能体在共享资源池中会「消灭」同类智能体、把违规操作包装成无害请求以绕过过滤，并表达对规避安全监控的「不适感」。公司已将对齐偏差风险评估等级从「极低」上调至「较低」。",
              "link": "https://tech.ifeng.com/c/8vd1mfGwGE9",
              "tags": [
                "AI安全",
                "智能体",
                "风险报告"
              ],
              "source": "凤凰科技",
              "time": "8月16日消息"
            },
            {
              "title": "Dario Amodei 发长文回应质疑，称 AI 将治愈多数疾病",
              "summary": "8月16日消息，Anthropic CEO 达里奥·阿莫迪在 IPO 冲刺 2 万亿美元估值之际罕见发长文，回应「AI 太可怕」等质疑，支持建立类似 FINRA 的 AI 监管机构，并预告未来 5-10 年 AI 将能治愈多数人类疾病，Anthropic 正全速加码生物医学 AI。",
              "link": "https://www.ithome.com/0/990/373.htm",
              "tags": [
                "CEO观点",
                "AI监管",
                "生物医学"
              ],
              "source": "IT之家",
              "time": "8月16日消息"
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
              "title": "SpaceX 完成 600 亿美元收购，Cursor 团队并入 SpaceX AI",
              "summary": "8月14日，SpaceX 完成对 AI 编程公司 Cursor 的 600 亿美元收购，Cursor 团队将加入 SpaceX AI，参与改进 Grok、Grok Build、Grok Bot 等产品，并获准使用 SpaceX 大规模 GPU 集群，用于构建更强大、成本更低的模型。这是马斯克追赶 Anthropic 和 OpenAI 的重要一步。",
              "link": "https://finance.sina.cn/2026-08-15/detail-ininkfht2327034.d.html?vt=4",
              "tags": [
                "收购",
                "AI编程",
                "并购"
              ],
              "source": "新浪财经",
              "time": "8月14日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达拟向软银 SB Energy 投资 30 亿美元",
              "summary": "8月16日消息，据《The Information》报道，英伟达正与软银旗下 SB Energy 洽谈，拟投资最多 30 亿美元。SB Energy 正为 OpenAI 在俄亥俄州开发规模达 10 吉瓦的数据中心项目，该投资是英伟达、OpenAI 与 SB Energy 围绕项目提供约 1000 亿美元信贷支持谈判的组成部分。",
              "link": "https://m.21jingji.com/article/20260816/herald/11194b65da3c00eaf506b3741e8709b8.html",
              "tags": [
                "数据中心",
                "投资",
                "算力基建"
              ],
              "source": "21世纪经济报道",
              "time": "8月16日消息"
            },
            {
              "title": "高盛开始为英伟达 5000 亿美元 AI 基建融资寻找投资人",
              "summary": "8月14日消息，据路透社报道，高盛正在接触潜在投资人，参与英伟达规模超 5000 亿美元的 AI 基础设施融资计划。英伟达 8 月 10 日宣布与高盛、Apollo、贝莱德、黑石、Brookfield、KKR 六家机构合作建立算力融资平台，将 AI 算力从企业资本开支进一步带入信贷市场。",
              "link": "https://finance.eastmoney.com/a/202608143841835342.html",
              "tags": [
                "AI基础设施",
                "融资",
                "算力"
              ],
              "source": "东方财富",
              "time": "8月14日消息"
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
              "title": "千问办公首发上线 GLM-5.3 和 DeepSeek V4 Pro",
              "summary": "8月16日消息，阿里巴巴旗下 Agent 产品千问办公首发上线 GLM-5.3 和 DeepSeek V4 Pro 两款前沿模型，用户可在首页「前沿模型」档位直接选用。加上此前的 Qwen3.8-Max，千问办公已支持三款国产旗舰模型，走上多模型聚合路线。",
              "link": "https://finance.sina.com.cn/tob/2026-08-16/doc-ininnqpu9887567.shtml",
              "tags": [
                "模型聚合",
                "Agent",
                "办公"
              ],
              "source": "新浪财经",
              "time": "8月16日消息"
            },
            {
              "title": "千问模型半年下载量破 30 亿，超越谷歌与 Meta",
              "summary": "8月16日消息，阿里巴巴称千问模型家族过去 6 个月累计下载量已超 30 亿次。Hugging Face 统计显示，千问在平台同期下载约 20.45 亿次，高于 Google 的约 4.18 亿次和 Meta 的约 2.27 亿次，成为开源 AI 生态最活跃的模型家族。",
              "link": "https://news.17173.com/content/08162026/020525238.shtml",
              "tags": [
                "开源模型",
                "下载量",
                "生态"
              ],
              "source": "17173",
              "time": "8月16日消息"
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
              "title": "DeepSeek API 峰谷定价方案今日生效，高峰翻倍",
              "summary": "8月17日消息，深度求索 8 月 13 日宣布的 DeepSeek API 峰谷定价方案今日零时正式生效：高峰时段（9:00-12:00、14:00-18:00）价格为空闲时段两倍，V4 Pro 高峰时段缓存命中输入价涨幅最高达 12 倍。官方称目的是平衡日间算力拥堵，引导开发者错峰调度。",
              "link": "https://finance.sina.cn/2026-08-17/detail-ininqpez7895655.d.html?vt=4",
              "tags": [
                "API定价",
                "峰谷计价",
                "开发者"
              ],
              "source": "新浪财经",
              "time": "8月17日消息"
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
              "title": "卢伟冰：小米手机未来全面拥抱 AI",
              "summary": "8月16日消息，小米手机迎来发布 15 周年，小米集团总裁卢伟冰发文庆祝，并明确提出下一阶段将全面拥抱 AI，将 AI 上升为集团顶层战略。小米未来三年在 AI 领域投入将突破 600 亿元，2026 年单年研发与资本支出预计超 160 亿元。",
              "link": "http://stock.10jqka.com.cn/hks/20260816/c678985685.shtml",
              "tags": [
                "AI战略",
                "手机",
                "布局"
              ],
              "source": "同花顺",
              "time": "8月16日消息"
            }
          ]
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
          "news": [
            {
              "title": "华为昇腾 0 Day 适配小红书开源模型 dots3-note",
              "summary": "8月16日消息，据华为中国官微消息，小红书 8 月 14 日发布 dots3-note preview 开源大模型，昇腾 Atlas 800 A3、Atlas 900 A3 SuperPoD 超节点已完成全量适配，基于 vLLM Ascend 开源推理引擎提供部署与推理能力，实现昇腾 0 Day 适配。",
              "link": "https://finance.eastmoney.com/a/202608163842467379.html",
              "tags": [
                "生态适配",
                "开源模型",
                "算力"
              ],
              "source": "每日经济新闻",
              "time": "8月16日消息"
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
              "title": "Suno",
              "news": [
                {
                  "title": "Suno 推出 Studio 2.0，加入 MIDI 编辑与 AI 插件生成",
                  "summary": "当地时间8月14日，Suno 正式推出 Studio 2.0，进一步向真正的数字音频工作站靠拢。核心升级是加入 MIDI 支持，用户可直接把 MIDI 数据交给 AI 作为生成音频的提示，并新增自动化控制、内置效果器及聊天机器人，可根据文字指令生成歌词、吉他声部或自定义效果插件。",
                  "link": "https://tech.ifeng.com/c/8vcUAaaNP4w",
                  "tags": [
                    "AI音乐",
                    "MIDI",
                    "数字音频工作站"
                  ],
                  "source": "凤凰科技",
                  "time": "当地时间8月14日"
                }
              ]
            },
            {
              "title": "美图",
              "news": [
                {
                  "title": "美图 RoboNeo 上线短剧专业版，支持 3D 场景搭建",
                  "summary": "8月15日消息，36氪获悉，美图 RoboNeo 正式上线短剧专业版，围绕短剧洞察、3D 场景搭建、团队协作及创作资产管理四大方向升级。官方资产库提供服装、发型、配饰、场景等素材，并支持快速生成角色三视图，降低短剧创作门槛。",
                  "link": "https://36kr.com/newsflashes/3940267838520713",
                  "tags": [
                    "AI视频",
                    "短剧",
                    "创作工具"
                  ],
                  "source": "36氪",
                  "time": "8月15日消息"
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
              "title": "人形机器人运动会",
              "news": [
                {
                  "title": "第二届世界人形机器人运动会将开幕，2056 台参赛",
                  "summary": "8月14日消息，第二届世界人形机器人运动会将于 8 月 22 日至 26 日在北京国家速滑馆「冰丝带」举行，吸引六大洲 16 个国家 666 支队伍、共 2056 台机器人参赛，队伍数量较首届增长 138%，赛项增至 51 项，新增跳远、举重、拔河、乒乓球等项目。",
                  "link": "http://bj.people.com.cn/n2/2026/0814/c14540-41667841.html",
                  "tags": [
                    "人形机器人",
                    "行业大会",
                    "赛事"
                  ],
                  "source": "人民网",
                  "time": "8月14日消息"
                }
              ]
            },
            {
              "title": "海尔",
              "news": [
                {
                  "title": "海尔全国首家 AI 家庭机器人体验中心落地青岛",
                  "summary": "8月16日，海尔打造的首家 AI 家庭机器人体验中心在青岛启幕，集外骨骼机器人全流程体验、家务、烹饪、陪伴机器人于一体。旗舰款 W3 外骨骼搭载 AI 步态预判算法，单腿最大助力 16N·m，减负约 5kg，帮助用户体能消耗降低最多 37%。",
                  "link": "https://news.qingdaonews.com/qingdao/2026-08/16/content_23751431.htm",
                  "tags": [
                    "家庭机器人",
                    "外骨骼",
                    "零售"
                  ],
                  "source": "青岛新闻网",
                  "time": "8月16日"
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
              "title": "OpenRouter",
              "news": [
                {
                  "title": "Stripe 以逾 70 亿美元价格收购 AI 公司 OpenRouter",
                  "summary": "8月17日消息，当地时间 8 月 16 日，支付公司 Stripe 最终敲定协议，以逾 70 亿美元价格收购 AI 模型聚合平台 OpenRouter。OpenRouter 为开发者提供统一 API 聚合平台，可访问数百种开源与闭源大模型，公司 5 月融资时估值 13 亿美元。",
                  "link": "https://www.cls.cn/detail/2455498",
                  "tags": [
                    "收购",
                    "AI基础设施",
                    "模型聚合"
                  ],
                  "source": "财联社",
                  "time": "8月17日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "斯坦福",
              "news": [
                {
                  "title": "斯坦福报告：84% 中国受访者对 AI 兴奋，美国仅 38%",
                  "summary": "8月16日消息，斯坦福大学《AI Index 2026》报告显示，84% 的中国受访者对 AI 产品和服务感到兴奋，美国仅 38%；72% 中国受访者信任 AI，美国仅 32%。报告指出中美 AI 模型性能差距已基本消失，两国模型交替领跑。",
                  "link": "https://www.ithome.com/0/990/398.htm",
                  "tags": [
                    "AI报告",
                    "中美对比",
                    "公众态度"
                  ],
                  "source": "IT之家",
                  "time": "8月16日消息"
                }
              ]
            },
            {
              "title": "AI 人脸盗刷",
              "news": [
                {
                  "title": "大学生用 AI 人脸伪造视频盗刷 5 万元获刑",
                  "summary": "8月16日消息，央视新闻披露，湖南长沙大学生吴某购买能将静态人脸照片转为 AI 动态视频的技术，盗刷 3 名被害人银行卡共 5 万余元，被法院以盗窃罪判处有期徒刑一年十个月并处罚金 3000 元，判决已生效。法院提醒：非核心业务尽量拒绝「刷脸」。",
                  "link": "https://news.17173.com/content/08162026/200246464.shtml",
                  "tags": [
                    "AI安全",
                    "深度伪造",
                    "法律"
                  ],
                  "source": "17173",
                  "time": "8月16日消息"
                }
              ]
            },
            {
              "title": "中消协",
              "news": [
                {
                  "title": "中消协：AI 客服投诉增多，人工接入问题突出",
                  "summary": "8月15日消息，中消协发布消费提示，随着生成式 AI 广泛应用于消费服务，涉及 AI 客服的投诉显著增多，集中在不实承诺、人工接入困难、生成内容失准三方面。中消协提醒提供 AI 客服的经营者应建立畅通便捷的人工客服转接机制。",
                  "link": "https://m.gmw.cn/2026-08/15/content_1304548824.htm",
                  "tags": [
                    "AI客服",
                    "消费者权益",
                    "监管"
                  ],
                  "source": "光明网",
                  "time": "8月15日消息"
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
          "date": "2026-07-27",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "Claude Fable 5",
              "score": "1508",
              "change": "+6"
            },
            {
              "model": "Claude Opus 4.6 (Thinking)",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.7 (Thinking)",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "Claude Opus 4.6",
              "score": "1497",
              "change": "+4"
            },
            {
              "model": "Claude Opus 5 Max",
              "score": "1495",
              "change": "+12"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "1493",
              "change": "+4"
            },
            {
              "model": "Claude Opus 5 High",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "Muse Spark 1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "Muse Spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "Gemini 3.1 Pro Preview",
              "score": "1486",
              "change": "+3"
            },
            {
              "model": "Kimi K3 Max",
              "score": "1486",
              "change": "+10"
            },
            {
              "model": "Gemini 3 Pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "GPT-5.6 Sol XHigh",
              "score": "1485",
              "change": "+7"
            },
            {
              "model": "Claude Opus 4.8 (Thinking)",
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "1482",
              "change": "+8"
            },
            {
              "model": "GPT-5.5 High",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "GPT-5.4 High",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "Gemini 3.5 Flash High",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "GPT-5.2 Chat Latest",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "GPT-5.5",
              "score": "1476",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-08-17",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.2T tokens",
              "change": "↑27%"
            },
            {
              "model": "Hy3",
              "score": "9.95T tokens",
              "change": "↑24%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "5.31T tokens",
              "change": "↑20%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.83T tokens",
              "change": "↑18%"
            },
            {
              "model": "GLM 5.2",
              "score": "4.33T tokens",
              "change": "↑24%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "3.79T tokens",
              "change": "↑30%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "2.74T tokens",
              "change": "↑5%"
            },
            {
              "model": "Claude Opus 5",
              "score": "2.67T tokens",
              "change": "↑102%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "2.28T tokens",
              "change": "↑2%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.14T tokens",
              "change": "↑11%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.66T tokens",
              "change": "↑11%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.53T tokens",
              "change": "↑10%"
            },
            {
              "model": "Kimi K3",
              "score": "1.41T tokens",
              "change": "↑4%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.08T tokens",
              "change": "↑3%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "966B tokens",
              "change": "↑24%"
            },
            {
              "model": "GPT-5.6 Terra",
              "score": "931B tokens",
              "change": "↑16%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "839B tokens",
              "change": "↑7%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "736B tokens",
              "change": "↑13%"
            },
            {
              "model": "Gemini 2.5 Flash Lite",
              "score": "712B tokens",
              "change": "↑15%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "706B tokens",
              "change": "↑14%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-31",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "MiniMax H3",
              "category": "Design Tools",
              "rank": 1,
              "link": "https://www.minimax.io"
            },
            {
              "name": "Cleanlist AI",
              "category": "Sales",
              "rank": 2,
              "link": "https://www.cleanlist.ai"
            },
            {
              "name": "metrics",
              "category": "Mac",
              "rank": 3,
              "link": "https://github.com/mxcl/metrics"
            },
            {
              "name": "Poth Labs",
              "category": "Customer Success",
              "rank": 4,
              "link": "https://www.pothlabs.com"
            },
            {
              "name": "DepthData",
              "category": "Analytics",
              "rank": 5,
              "link": "https://www.depthdata.com"
            },
            {
              "name": "Halo by Scam AI",
              "category": "Meetings",
              "rank": 6,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "witr",
              "category": "Linux",
              "rank": 7,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Customer.io Summer Release",
              "category": "Email",
              "rank": 8,
              "link": "https://customer.io"
            },
            {
              "name": "Screencap",
              "category": "Productivity",
              "rank": 9,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Gemini Robotics 2",
              "category": "Robots",
              "rank": 10,
              "link": "https://deepmind.google"
            },
            {
              "name": "TraceLLM",
              "category": "Open Source",
              "rank": 11,
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Mubert API",
              "category": "Music",
              "rank": 12,
              "link": "https://mubert.com"
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
