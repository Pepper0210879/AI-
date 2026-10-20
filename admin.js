const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-20",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 拟融资 300 亿美元，估值或超 1.4 万亿美元",
              "summary": "OpenAI 正加快推进一轮约 300 亿美元的融资，目标估值可能超过 1.4 万亿美元，并希望赶在 Anthropic 预计 11 月中旬上市前获得投资者承诺。软银、MGX 等现有投资者正洽谈参与，OpenAI 年化营收已达 500 亿美元，预计年底升至 700 亿美元。",
              "link": "https://finance.eastmoney.com/a/202610203900470711.html",
              "tags": [
                "融资",
                "估值"
              ],
              "source": "东方财富",
              "time": "10月19日"
            },
            {
              "title": "OpenAI 加码机器人研发，发布 19 个 Robotics 岗位",
              "summary": "OpenAI 从「用大模型给机器人当大脑」进一步延伸到机器人硬件、控制系统和制造环节。截至 10 月 19 日，官网已发布 19 个 Robotics 相关岗位，涵盖控制系统、电机设计、制造、数据系统等方向，同时推进机器人软硬件研发与现实世界数据采集训练体系。",
              "link": "https://www.bianews.com/news/details?id=247424",
              "tags": [
                "机器人",
                "招聘"
              ],
              "source": "鞭牛士",
              "time": "10月19日"
            },
            {
              "title": "OpenAI 上线 ChatGPT Slides 幻灯片工具",
              "summary": "OpenAI 上线 ChatGPT Slides，支持生成演示文稿、协同编辑并导出多种格式，目前仅对 Pro、Business 和 Enterprise 套餐用户开放，Plus 用户暂不可用。",
              "link": "https://news.qq.com/rain/a/20261020A08FEQ00",
              "tags": [
                "办公",
                "幻灯片"
              ],
              "source": "腾讯新闻",
              "time": "10月20日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Nscale 与 Anthropic 洽谈 450 亿美元新算力交易",
              "summary": "据路透社报道，Nscale 正与 Anthropic 商谈一笔约 450 亿美元的 AI 算力交易，拟由美国西弗吉尼亚州 Monarch 数据中心园区的第二座设施提供服务，采用英伟达 Vera Rubin AI 芯片提供 460 兆瓦算力。",
              "link": "https://finance.jrj.com.cn/2026/10/20063558777786.shtml",
              "tags": [
                "算力",
                "数据中心"
              ],
              "source": "金融界",
              "time": "10月19日"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌 Gemini 4 Argon 智能体通关《我的世界》",
              "summary": "谷歌研究人员用四个 Gemini 4 Argon 智能体在无人类辅助、无种子地图条件下，仅用 27 小时通关《我的世界》。它们通过聊天框自主分工协作，运行 2783 个程序，消耗 13.5 亿 Token，成本约 1620 美元。",
              "link": "https://www.ithome.com/1/015/048.htm",
              "tags": [
                "智能体",
                "游戏"
              ],
              "source": "IT之家",
              "time": "10月20日"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "马斯克承诺赠美国每个孩子 1 股 SpaceX 股份",
              "summary": "马斯克表示明年将把自己持有的 SpaceX 股份赠予美国每个孩子一股，称「这将是众多行动中的第一个」。按约 7200 万儿童、每股约 146 美元计算，总价值约 105 亿美元。",
              "link": "https://finance.eastmoney.com/a/202610193900097394.html",
              "tags": [
                "SpaceX",
                "赠股"
              ],
              "source": "东方财富",
              "time": "10月19日"
            },
            {
              "title": "马斯克称 Optimus 与 Cybercab 将构成特斯拉绝大部分价值",
              "summary": "马斯克称公司 Optimus 人形机器人与 Cybercab 自动驾驶汽车将构成特斯拉价值的绝大部分，重申重心放在机器人与 AI 领域，并提出超级智能、机器人、太阳能和大规模太空运输是仅有的高经济扩张潜力方向。",
              "link": "https://news.qq.com/rain/a/20261019A02UKM00",
              "tags": [
                "人形机器人",
                "自动驾驶"
              ],
              "source": "腾讯新闻",
              "time": "10月19日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "Modal 将采用英伟达 Vera CPU 支撑 AI 智能体",
              "summary": "云计算初创公司 Modal 计划首次采用英伟达 Vera 中央处理器，为可长期执行任务的 AI 智能体提供算力。早期测试中 Vera 让智能体完成的工作量翻倍，Modal 将把 Vera 与现有 Intel、AMD 产品组合成混合机群。",
              "link": "https://news.qq.com/rain/a/20261020A073RZ00",
              "tags": [
                "芯片",
                "智能体"
              ],
              "source": "腾讯新闻",
              "time": "10月19日"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "杨立昆质疑特斯拉飞车，马斯克回「放屁」",
              "summary": "杨立昆质疑马斯克「会飞的汽车」演示依赖压缩空气推进，难以成为真正飞行汽车的技术路径；马斯克以「放屁」回应。杨立昆称不反对马斯克真实成就，但会质疑那些「表面很酷、实际并非宣传所称成就」的营销演示。",
              "link": "https://news.qq.com/rain/a/20261019V0C1VW00",
              "tags": [
                "飞行汽车",
                "论战"
              ],
              "source": "腾讯新闻",
              "time": "10月19日"
            },
            {
              "title": "美国银行、摩根大通等金融平台屏蔽 Muse 智能体",
              "summary": "嘉信理财、摩根大通、美国银行等相继限制第三方 AI 智能体访问，允许查询但禁止转账；达美航空、Yelp、亚马逊也收紧规则，核心争议在于责任由谁承担。",
              "link": "https://finance.jrj.com.cn/2026/10/19162558772956.shtml",
              "tags": [
                "智能体",
                "金融"
              ],
              "source": "金融界",
              "time": "10月19日"
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
              "title": "豆包回应「国内过半算力造爽剧」不实",
              "summary": "针对「国内超一半算力在造爽剧」的话题，豆包公关负责人刘星回应称相关算力数据「不靠谱」，字节跳动总算力中只有约 10% 用于视频生成模型的训练和推理。",
              "link": "https://view.inews.qq.com/a/20261019A07M0600",
              "tags": [
                "算力",
                "辟谣"
              ],
              "source": "腾讯新闻",
              "time": "10月19日"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek V4.1 Flash 登顶 Code Arena 开源榜首",
              "summary": "DeepSeek-V4.1-Flash-1017（Max）超过 Kimi K3，成为 Code Arena WebDev 榜单排名最高的开源模型，得分 1670 分，进入性能成本帕累托前沿，综合成本约为 Kimi K3 的十分之一。",
              "link": "https://news.qq.com/rain/a/20261019A0CEH400",
              "tags": [
                "开源模型",
                "编程"
              ],
              "source": "腾讯新闻",
              "time": "10月19日"
            },
            {
              "title": "DeepSeek 宣布 DeepInfer 推理框架全面开源",
              "summary": "DeepSeek 官宣，在此前开源一系列大模型、TileLang 编译工具及推理算子库的基础上，进一步将内部推理框架 DeepInfer 全面开源，目标实现大模型普惠。",
              "link": "https://www.yicai.com/brief/103401025.html",
              "tags": [
                "推理框架",
                "开源"
              ],
              "source": "第一财经",
              "time": "10月20日"
            },
            {
              "title": "外交部回应美政府要求机构停用 DeepSeek",
              "summary": "针对美国政府要求机构停止使用 DeepSeek 等中国 AI 工具，外交部发言人毛宁在例行记者会上回应：中方一贯反对泛化国家安全概念、将科技经贸问题政治化，将坚决维护中国企业的合法权益。",
              "link": "https://view.inews.qq.com/a/20261020A099G300",
              "tags": [
                "出海",
                "政策"
              ],
              "source": "腾讯新闻",
              "time": "10月20日"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯 WorkBuddy 教育公益版上线",
              "summary": "腾讯 SSV 宣布 WorkBuddy 教育公益版正式上线，面向全国教师开放，每位教师每月可领 2000 积分，连续支持 12 个月。团队围绕教师工作制作 AI 教学助理，联合北大、北师大等高校将研究成果转为可调用的教育专家模块。",
              "link": "https://news.qq.com/rain/a/20261019V0AVQY00",
              "tags": [
                "教育",
                "公益"
              ],
              "source": "腾讯新闻",
              "time": "10月19日"
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
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax M3.1 Flash 上线，推理提速 3 倍价格降 70%",
                  "summary": "MiniMax 正式上线 M3.1 Flash，并确认此前匿名运行、累计处理超 200T Token 的 Space Bunny 是其早期版本。新模型在 Agentic 任务、编程等能力上代际提升，线上推理速度提升近 3 倍，使用成本降低 70%。",
                  "link": "https://news.qq.com/rain/a/20261020A08XDO00",
                  "tags": [
                    "开源模型",
                    "定价"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月19日"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软推出 Guardian Agents 防护方案",
                  "summary": "微软发布守护智能体等新功能，用于监控企业内部 AI 智能体行为。纳德拉警告不应信任 AI 模型供应商，需将智能能力的供给与管控权限分离。",
                  "link": "https://www.ithome.com/1/015/069.htm",
                  "tags": [
                    "智能体安全",
                    "企业"
                  ],
                  "source": "IT之家",
                  "time": "10月20日"
                }
              ]
            },
            {
              "title": "蚂蚁",
              "news": [
                {
                  "title": "蚂蚁百灵开源 Ming-3.0 语音系列模型",
                  "summary": "蚂蚁百灵宣布开源 Ming-3.0 语音系列，分别提供语音合成、音频理解与对话、语音识别三个系列，共五款模型。",
                  "link": "https://www.ithome.com/1/015/117.htm",
                  "tags": [
                    "语音",
                    "开源"
                  ],
                  "source": "IT之家",
                  "time": "10月20日"
                }
              ]
            },
            {
              "title": "奇瑞",
              "news": [
                {
                  "title": "奇瑞将发布首个汽车行业垂域大模型",
                  "summary": "奇瑞 10 月 20 日举办全球创新大会，发布首个汽车行业垂域大模型，并将首发 V2G 技术、人形机器人「墨宝」等多款新品，展示向智能科技公司转型路线。",
                  "link": "https://www.ithome.com/1/014/887.htm",
                  "tags": [
                    "大模型",
                    "汽车"
                  ],
                  "source": "IT之家",
                  "time": "10月19日"
                }
              ]
            },
            {
              "title": "王腾",
              "news": [
                {
                  "title": "王腾宣布今日宜休 10 月 29 日举办首场发布会",
                  "summary": "王腾宣布 ISHO 今日宜休将于 10 月 29 日举办 AI 睡眠科技生态产品发布会，这是公司成立后的首场发布会。王腾曾任小米 REDMI 品牌总经理，今年年初成立「今日宜休」研发睡眠健康产品。",
                  "link": "https://finance.eastmoney.com/a/202610193899281236.html",
                  "tags": [
                    "AI硬件",
                    "睡眠"
                  ],
                  "source": "东方财富",
                  "time": "10月19日"
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
                  "title": "宇树科技市值重回 2000 亿，人形机器人股批量涨停",
                  "summary": "10 月 19 日午后人形机器人概念持续走高，兆威机电、福莱新材等多股涨停。宇树科技午后涨超 16%，总市值重返 2000 亿上方，报 495.92 元/股，创下上市后除 IPO 首日外最大单日涨幅。",
                  "link": "https://finance.eastmoney.com/a/202610193899833832.html",
                  "tags": [
                    "人形机器人",
                    "股价"
                  ],
                  "source": "东方财富",
                  "time": "10月19日"
                },
                {
                  "title": "宇树科技合作伙伴生态大会 10 月 22 日召开",
                  "summary": "宇树科技将于 10 月 22 日举办 2026 世界物理 AI 大会暨宇树合作伙伴生态大会，预计迎来 3000 余名嘉宾、40 余个展示专区，并设具身智能创投分论坛开展项目路演。",
                  "link": "https://news.qq.com/rain/a/20261019A093CW00",
                  "tags": [
                    "物理AI",
                    "大会"
                  ],
                  "source": "腾讯新闻",
                  "time": "10月19日"
                }
              ]
            },
            {
              "title": "人形机器人产量",
              "news": [
                {
                  "title": "今年上半年我国人形机器人产量超 4 万台",
                  "summary": "工信部数据显示，今年上半年我国人形机器人产量超 4 万台，预计全年将突破 10 万台。人形机器人已在仓储物流、餐饮零售等 300 多个场景加快部署。",
                  "link": "https://www.ithome.com/1/015/002.htm",
                  "tags": [
                    "人形机器人",
                    "工信部"
                  ],
                  "source": "IT之家",
                  "time": "10月19日"
                }
              ]
            },
            {
              "title": "荣耀",
              "news": [
                {
                  "title": "荣耀闪电与萨维、赵家驹首次同框",
                  "summary": "荣耀自研人形机器人闪电与两位顶级马拉松跑者萨维、赵家驹同台竞速。作为全球首家入局消费级人形机器人的手机品牌，荣耀迁移手机技术沉淀，探索终端厂商做具身智能的新路径。",
                  "link": "https://www.ithome.com/1/015/423.htm",
                  "tags": [
                    "人形机器人",
                    "消费级"
                  ],
                  "source": "IT之家",
                  "time": "10月20日"
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
              "title": "Tenstorrent E轮",
              "news": [
                {
                  "title": "Tenstorrent 完成 15 亿美元 E 轮融资",
                  "summary": "由 Jim Keller 领导的 AI 计算公司 Tenstorrent 完成 15 亿美元 E 轮融资，投后估值达 62 亿美元，由 Trace Capital 与 Innovation X 领投，ARK Invest、Fidelity 等参投，资金用于大规模部署 Galaxy 服务器。",
                  "link": "https://usstock.jrj.com.cn/2026/10/20073458777799.shtml",
                  "tags": [
                    "AI芯片",
                    "融资"
                  ],
                  "source": "金融界",
                  "time": "10月19日"
                }
              ]
            },
            {
              "title": "铭芯启睿 A轮",
              "news": [
                {
                  "title": "铭芯启睿完成超 4 亿元 A 轮融资",
                  "summary": "铭芯启睿（MemSilicon）完成超 4 亿元 A 轮融资，由博原资本领投，博世创投、米哈游、中关村科学城公司、兆易创新等跟投，资金主要用于 RRAM 的产业化与商业化，以及新产品 LPU 的研发。",
                  "link": "https://finance.eastmoney.com/a/202610193900166664.html",
                  "tags": [
                    "RRAM",
                    "融资"
                  ],
                  "source": "东方财富",
                  "time": "10月19日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "AI虚假信息",
              "news": [
                {
                  "title": "山姆回应「品质暴跌」：有账号用 AI 编造虚假信息引流",
                  "summary": "10 月 19 日，山姆会员商店发布声明称，近期多个社交媒体平台集中出现数千条针对山姆的恶意攻击及虚假营销信息，部分账号通过 AI 生成、拼接素材、伪造采访等方式，将从未上架的洗衣凝珠等商品编造成「山姆下架好物」进行欺骗性营销引流牟利，公司已投诉举报并将依法追责。",
                  "link": "https://finance.eastmoney.com/a/202610193899912953.html",
                  "tags": [
                    "AI虚假信息",
                    "营销"
                  ],
                  "source": "东方财富",
                  "time": "10月19日"
                }
              ]
            },
            {
              "title": "商务部",
              "news": [
                {
                  "title": "商务部：前 9 月重点平台智能眼镜销售额增长 1.1 倍",
                  "summary": "商务部数据显示，今年 1-9 月重点平台智能眼镜销售额增长 1.1 倍。商务部等 9 部门发布《关于加快推进科技兴商的意见》，丰富智能穿戴等智能商品供给，并推动家电等领域建立人工智能终端智能化分级国家标准。",
                  "link": "https://finance.eastmoney.com/a/202610203900737171.html",
                  "tags": [
                    "智能眼镜",
                    "政策"
                  ],
                  "source": "东方财富",
                  "time": "10月19日"
                }
              ]
            },
            {
              "title": "深度伪造",
              "news": [
                {
                  "title": "OpenAI 与 Meta 齐发声：深度伪造威胁法律证据",
                  "summary": "OpenAI 与 Meta 齐声警告，深度伪造将严重威胁法律诉讼中的证据可靠性，法院抵御 AI 生成虚假证据的难度与日俱增，缺少统一水印也加大了识别难度。",
                  "link": "https://usstock.jrj.com.cn/2026/10/20173258791868.shtml",
                  "tags": [
                    "深度伪造",
                    "法律"
                  ],
                  "source": "金融界",
                  "time": "10月20日"
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
          "date": "2026-10-20",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "29.6T tokens",
              "change": "↓27%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "11.9T tokens",
              "change": "↓6%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "9.57T tokens",
              "change": "↓17%"
            },
            {
              "model": "Step 5 Preview (stepfun)",
              "score": "8.22T tokens",
              "change": "↓32%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "7.82T tokens",
              "change": "↓6%"
            },
            {
              "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
              "score": "7.34T tokens",
              "change": "—"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "6.47T tokens",
              "change": "↑21%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "6.23T tokens",
              "change": "↓12%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "5.29T tokens",
              "change": "↑33%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "4.73T tokens",
              "change": "↑1%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "4.63T tokens",
              "change": "↓35%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "3.27T tokens",
              "change": "↑29%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.13T tokens",
              "change": "↑12%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "2.98T tokens",
              "change": "↓10%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "2.91T tokens",
              "change": "↓6%"
            },
            {
              "model": "Claude Sonnet 5.5 (anthropic)",
              "score": "2.43T tokens",
              "change": "↓8%"
            },
            {
              "model": "Claude Haiku 5.5 (anthropic)",
              "score": "2.07T tokens",
              "change": "↑54%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "2.04T tokens",
              "change": "↓11%"
            },
            {
              "model": "GPT-6.1 Sol (openai)",
              "score": "1.9T tokens",
              "change": "↓15%"
            },
            {
              "model": "MiMo-V2.6-Pro (xiaomi)",
              "score": "1.71T tokens",
              "change": "↑25%"
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
