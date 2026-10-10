const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-09",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 推出 GPT-6.1 Sol Ultrafast，速度最高提升 8 倍",
              "summary": "10月9日，OpenAI 正式在 API、Codex 和 ChatGPT Work 中推出 GPT-6.1 Sol 的 Ultrafast 版本，运行速度最高可达标准版的 8 倍，定价为标准版的 6 倍（每百万输入 token 12 美元、输出 60 美元）。新版本面向 Pro 500、部分企业按量付费及教育版用户开放，并已支持美国和欧盟的数据驻留合规服务。",
              "link": "https://tech.ifeng.com/c/8x4ilXRm8oT",
              "tags": [
                "大模型",
                "推理速度"
              ],
              "source": "凤凰科技",
              "time": "10月9日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 推出 Claude Dashboards 与 Motion，可生成实时看板和动画",
              "summary": "当地时间10月8日，Anthropic 宣布为 Claude 推出两项生产力功能：Claude Dashboards 支持用自然语言生成实时数据看板，可连接 BigQuery、Snowflake 等平台；Claude Motion 可将报告、图表转换成可编辑动画并导出 MP4。两者均处 Beta 阶段，Docs、Slides 和 Design 则已向所有订阅档位开放。",
              "link": "https://claude.com/resources/articles/dashboards-and-motion",
              "tags": [
                "产品更新",
                "数据分析"
              ],
              "source": "Claude 官方博客",
              "time": "当地时间10月8日"
            },
            {
              "title": "Anthropic 更新使用政策，11 月 12 日起禁止持续无端虐待 Claude",
              "summary": "10月8日，Anthropic 发布新版使用政策，将于 11 月 12 日生效。政策细化了对影响行动、武器开发、监控、医疗和金融等高风险用途的限制，新增「持续且无必要地虐待或残酷对待模型」的禁止条款，并把利用虚假账号、伪造网站等归入新的「欺骗性活动」章节。",
              "link": "https://baijiahao.baidu.com/s?id=1878549705953482161",
              "tags": [
                "AI安全",
                "使用政策"
              ],
              "source": "百家号",
              "time": "10月8日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌云发布 Gemini Agent，定位通用工作智能体",
              "summary": "10月8日，谷歌云在 Gemini at Work 2026 发布会上推出面向企业的 Gemini Agent，用户只需设定目标即可完成解答问题、处理知识工作、创建内容和编写代码等任务。该智能体目前支持 Gemini 和 Claude 模型，未来将兼容更多开源模型，并通过 API 集成到第三方应用。",
              "link": "https://news.qq.com/rain/a/20261009A01E9O00",
              "tags": [
                "智能体",
                "企业服务"
              ],
              "source": "财联社",
              "time": "10月8日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX 收购全美 800MHz 频谱，星链将直接挑战传统运营商",
              "summary": "当地时间10月8日，SpaceX 宣布与美国投资公司 Grain Management 达成协议，收购其持有的全部美国全国性 800MHz 频段许可。新低频段频谱将与 Starlink Mobile 现有 2GHz 频段互补，增强手机直连卫星信号穿透力。消息公布后，Verizon、AT&T 和 T-Mobile 盘后股价明显下跌。",
              "link": "https://baijiahao.baidu.com/s?id=1878560122124972594",
              "tags": [
                "卫星通信",
                "星链"
              ],
              "source": "百家号",
              "time": "当地时间10月8日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": []
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
          "news": []
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "字节 Seed 团队发现 DeepSeek 长上下文「抽风」原因",
              "summary": "10月9日，字节 Seed 团队 9 月底在 arXiv 提交论文，指出分块 KV 缓存压缩带来的「相位敏感性」是 DeepSeek 长上下文性能漂移的原因。研究评估了 DeepSeek-V4-Flash、V4-Pro 和 V4.1-Flash，发现采用该压缩的模型中长上下文检索准确度在不同相位间可能相差高达 40 个百分点。",
              "link": "https://www.ithome.com/1/010/780.htm",
              "tags": [
                "长上下文",
                "技术研究"
              ],
              "source": "IT之家",
              "time": "10月9日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": []
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯据报考虑发行至多 50 亿美元离岸债券加码 AI",
              "summary": "10月9日消息，据知情人士透露，腾讯控股考虑发行至多 50 亿美元离岸债券，可能以美元和离岸人民币计价，最早本月发行。腾讯 6 月已通过发行长期债券筹集近 47 亿美元，所得资金主要用于债务再融资以及包括开发 AI 产品和服务在内的一般公司用途。",
              "link": "https://baijiahao.baidu.com/s?id=1878470145491148126",
              "tags": [
                "融资",
                "算力投入"
              ],
              "source": "百家号",
              "time": "10月9日消息"
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
              "title": "联想",
              "news": [
                {
                  "title": "联想 YOGA Pro 15 RTX Spark 开启预售，本地可跑千亿参数模型",
                  "summary": "10月8日，联想 YOGA Pro 15 RTX Spark 在中国市场开启预售，成为全球首批搭载英伟达 RTX Spark N1X 芯片的 AI PC 之一。该机最高配备 128GB 统一内存，FP4 AI 峰值算力最高 1 PFLOPS，支持本地运行超千亿参数模型，预装 35B 本地大模型和天禧 AI 超能模式。",
                  "link": "https://www.qbitai.com/2026/10/502020.html",
                  "tags": [
                    "AI PC",
                    "本地大模型"
                  ],
                  "source": "量子位",
                  "time": "10月8日"
                }
              ]
            },
            {
              "title": "Vidu",
              "news": [
                {
                  "title": "Vidu Q4 Preview 开放，支持 15 张参考图和 4K 输出",
                  "summary": "10月8日，Vidu AI 开放新一代视频生成模型 Vidu Q4 Preview，最多支持 3 段参考音频、15 张参考图和 2K、4K 输出，重点强化人物表演、动态运镜和复杂视效，首发优惠价 0.09 元/秒起。",
                  "link": "https://www.vidu.cn/vidu-q4",
                  "tags": [
                    "视频生成",
                    "多模态"
                  ],
                  "source": "Vidu 官网",
                  "time": "10月8日"
                }
              ]
            },
            {
              "title": "阶跃星辰",
              "news": [
                {
                  "title": "阶跃 STEPX Neo 智能体手机定档 10 月 13 日发布",
                  "summary": "10月8日，阶跃终端宣布首款大模型原生智能体手机 STEPX Neo 将于 10 月 13 日 19:00 发布，发布会主题「Ready Builder One」。该手机 7 月已在世界人工智能大会亮相，定位将大模型、智能体原生系统 Step AOS 与手机硬件结合，具体芯片和售价将于发布会公布。",
                  "link": "https://www.qbitai.com/2026/10/501915.html",
                  "tags": [
                    "AI手机",
                    "智能体"
                  ],
                  "source": "量子位",
                  "time": "10月8日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "小鹏汽车",
              "news": [
                {
                  "title": "小鹏 Robotaxi 定名「小鹏悠游」，打车小程序同步上线",
                  "summary": "10月8日，小鹏汽车官宣 Robotaxi 中文品牌名「小鹏悠游」（XPENG YOYO），官网页面和自动驾驶打车小程序同步上线，后续将通过邀请码向公众开放。小鹏 Robotaxi 业务依托自研图灵 AI 芯片、第二代 VLA 大模型和 AI 基础设施，计划明年推出更适合 Robotaxi 业务的车型。",
                  "link": "https://www.ithome.com/1/010/391.htm",
                  "tags": [
                    "Robotaxi",
                    "自动驾驶"
                  ],
                  "source": "IT之家",
                  "time": "10月8日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "正行创新",
              "news": [
                {
                  "title": "正行创新发布全球首个零售物理智能 24/7 服务解决方案",
                  "summary": "10月8日，正行创新亮相第 22 届亚太零售商大会（APRCE 2026），正式发布面向零售开放场景「人机协作」需求的 Physical AI 解决方案，主打货架补货、店面巡检和搬运等任务，无需改造门店货架与动线即可快速部署。旗下双足人形机器人 H1 和轮臂式机器人 C1 同步亮相，计划 2027 年正式提供商业化服务。",
                  "link": "https://www.qbitai.com/2026/10/502035.html",
                  "tags": [
                    "人形机器人",
                    "具身智能"
                  ],
                  "source": "量子位",
                  "time": "10月8日"
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
              "title": "Manus",
              "news": [
                {
                  "title": "Manus 母公司完成超 5 亿美元新一轮融资",
                  "summary": "10月8日，Manus 母公司蝴蝶效应宣布完成超 5 亿美元新一轮融资，由博裕投资、IDG 资本领投，腾讯、红杉中国、真格基金继续加持。据相关人士透露，本轮融资目标估值约 40 亿美元，距离 Manus 9 月 1 日宣布恢复独立运营不到一个月。",
                  "link": "https://www.cnstock.com/commonDetail/798681",
                  "tags": [
                    "融资",
                    "AI智能体"
                  ],
                  "source": "上海证券报",
                  "time": "10月8日"
                }
              ]
            },
            {
              "title": "白犀牛",
              "news": [
                {
                  "title": "L4 自动驾驶公司白犀牛完成 1 亿美元 C 轮融资",
                  "summary": "10月8日，L4 自动驾驶公司白犀牛宣布完成 C2 轮融资，C 轮累计金额达 1 亿美元。C2 轮由隐山资本领投，湘潭国资、深重投、湖南财信等跟投，资金将重点投向 L4 端到端技术与物理 AI 能力迭代、城市运营网络拓展。",
                  "link": "https://stock.10jqka.com.cn/20261008/c680469651.shtml",
                  "tags": [
                    "融资",
                    "自动驾驶"
                  ],
                  "source": "同花顺",
                  "time": "10月8日"
                }
              ]
            },
            {
              "title": "比特幻境",
              "news": [
                {
                  "title": "智能眼镜品牌 NIMO 母公司比特幻境完成数亿元天使轮融资",
                  "summary": "10月9日消息，智能眼镜品牌 NIMO 所属公司比特幻境完成数亿元人民币天使轮融资，最新估值达 15 亿元。本轮投资方包括博华资本、戈壁创投、元禾璞华等，融资资金将主要用于产品研发、渠道拓展及海外市场布局。",
                  "link": "https://www.vrarworld.cn/xinwenrili/13973.html",
                  "tags": [
                    "融资",
                    "智能眼镜"
                  ],
                  "source": "VRAR星球",
                  "time": "10月9日消息"
                }
              ]
            },
            {
              "title": "Firmus",
              "news": [
                {
                  "title": "英伟达支持的 AI 数据中心公司 Firmus 上市遇阻",
                  "summary": "10月8日，英伟达支持的澳大利亚 AI 数据中心运营商 Firmus 原计划通过 IPO 筹资至多 55 亿美元，但随着投资者对公司上市后股价表现及股东抛售压力的担忧加剧，上市计划面临不确定性。10月8日公司结束 IPO 询价簿记，但发行价和交易结构仍不明确。",
                  "link": "https://finance.sina.com.cn/stock/usstock/c/2026-10-08/doc-iniupafi3747722.shtml",
                  "tags": [
                    "IPO",
                    "AI数据中心"
                  ],
                  "source": "新浪财经",
                  "time": "10月8日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "陶哲轩",
              "news": [
                {
                  "title": "陶哲轩带头，人类数学家联合抵制 OpenAI 数学证明",
                  "summary": "10月9日，菲尔兹奖得主陶哲轩牵头人类数学协会（AHM）发布联合声明，正式抵制 OpenAI。原因是 OpenAI 动用内部模型测试约 8000 个开放性数学问题（命中率约 5%），一次性发布 700 多份机器生成的证明文件，宣称解决若干千禧难题。理论计算机科学家 Scott Aaronson 称之为「数学界的末日浩劫」。此前陶哲轩曾联合 25 位菲尔兹奖得主呼吁商业公司放慢脚步。",
                  "link": "https://www.qbitai.com/2026/10/502089.html",
                  "tags": [
                    "AI数学",
                    "学术争议"
                  ],
                  "source": "量子位",
                  "time": "10月9日"
                }
              ]
            },
            {
              "title": "高通中国区董事长孟樸",
              "news": [
                {
                  "title": "高通中国区董事长孟樸：中国 AI 手机需看清几个关键变化",
                  "summary": "10月9日，高通中国区董事长孟樸在 2026 骁龙峰会后接受腾讯科技采访，谈中国 AI 手机新故事。他指出端侧 AI 仍处于早期，跨终端协同服务要到 2027、2028 年才逐步实现；为配合中国厂商国庆假期前发布旗舰，高通将旗舰芯片惯例发布时间从 10 月提前到 9 月下旬；并预计零部件高价至少持续到 2027 年底。",
                  "link": "https://news.qq.com/rain/a/20261009A02IJ000",
                  "tags": [
                    "AI手机",
                    "行业观点"
                  ],
                  "source": "腾讯科技",
                  "time": "10月9日"
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
          "date": "2026-10-09",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "37.6T tokens",
              "change": "↑56%"
            },
            {
              "model": "Space Bunny Alpha (stealth)",
              "score": "16.9T tokens",
              "change": "↓49%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "11.2T tokens",
              "change": "↑16%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "10.9T tokens",
              "change": "↑17%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "7.96T tokens",
              "change": "↑20%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.94T tokens",
              "change": "↑17%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "6.38T tokens",
              "change": "↑7%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "5.21T tokens",
              "change": "↓19%"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "4.32T tokens",
              "change": "↑99%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.42T tokens",
              "change": "↑34%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3.32T tokens",
              "change": "↑9%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "3.22T tokens",
              "change": "—"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.09T tokens",
              "change": "↓5%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "2.1T tokens",
              "change": "↓4%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.05T tokens",
              "change": "↓5%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.97T tokens",
              "change": "↑25%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "1.86T tokens",
              "change": "↓70%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "1.85T tokens",
              "change": "↑311%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "1.8T tokens",
              "change": "↑22%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "1.71T tokens",
              "change": "↑214%"
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
};;;;;;;;

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
