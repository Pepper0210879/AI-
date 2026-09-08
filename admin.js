const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-09-08",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "GPT-6 Astra 自主通关 3D 解谜游戏《传送门》",
              "summary": "9月7日消息，AI 爱好者 CozyBlaze 让 OpenAI 旗舰模型 GPT-6 Astra 自主通关了 Valve 的 3D 解谜游戏《传送门》：模型通过 MCP 协议并配合修改版 SourcePauseTool 控制游戏，全程共 3,336 次工具调用、耗时约 24 小时，按 API 标价成本约 571 美元（实际由每月 200 美元 Codex Pro 订阅覆盖）。开发者称这是通用智能体理解 3D 空间与长任务规划的一次能力展示，相关工作流已在 GitHub 开源；其本人提醒不应将此视为标准化基准测试。",
              "time": "9月7日消息",
              "link": "https://tech.ifeng.com/c/8wEd7mxoGu5",
              "source": "凤凰科技",
              "tags": [
                "多模态",
                "3D空间",
                "AI Agent"
              ]
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": []
        },
        {
          "name": "Google",
          "news": []
        },
        {
          "name": "xAI",
          "news": []
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "黄仁勋：GPT-6 Astra 用 10 万 GPU 训练，AGI 已到来",
              "summary": "当地时间9月6日，英伟达 CEO 黄仁勋发帖祝贺 OpenAI 发布旗舰模型 GPT-6 Astra，称其由「约 10 万+ 块 NVIDIA Grace Blackwell NVLink72 集群」训练完成，直言「AGI 已经到来」，并透露下一批 40 万块 GPU 即将上线。他同时援引英伟达最新财报称数据中心业务收入 890 亿美元、同比增长 117%，强调「算力就是收入」。",
              "time": "当地时间9月6日",
              "link": "https://finance.sina.com.cn/roll/2026-09-07/doc-iniqymaf0490957.shtml",
              "source": "新浪财经",
              "tags": [
                "AGI",
                "算力"
              ]
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
              "title": "千问办公推出多人工作台，可一键生成百人协作网页",
              "summary": "9月7日消息，阿里旗下 Agent 产品千问办公推出业内首个「多人工作台」：用户用自然语言描述需求，即可生成并发布一个支持最多百人同时在线协作的网页，具备角色权限、云端数据库、管理后台和在线发布四项核心能力，适用于活动组织、家校协同与企业协作场景。官方称千问办公上线满一个月用户已突破 3,000 万，其中企业用户占比过半，推动 AI 从个人提效走向组织提效。",
              "time": "9月7日消息",
              "link": "https://www.pingwest.com/w/317143",
              "source": "品玩",
              "tags": [
                "AI办公",
                "多Agent协作"
              ]
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "火山引擎内测 AI 版权管理平台，Seedance 转向 IP 商业化",
              "summary": "9月7日，据腾讯新闻独家报道，火山引擎近日向多家版权方发起「AI 版权管理平台」内测邀请。平台允许品牌方、短剧制作方调用 Seedance、Seedream、Seed Audio 系列模型，对已签约正版 IP 进行受控商业化创作，版权方可在线监修审核、设定使用边界并实时查看用量与收入分账，已签约周星驰旗下比高集团《喜剧之王》《食神》等数十个头部 IP。这标志着 Seedance 版权策略从「防侵权」转向「受控 IP 商业化开发」，平台预计下半年正式上线。",
              "time": "9月7日",
              "link": "https://news.qq.com/rain/a/20260907A0CNE800",
              "source": "腾讯新闻",
              "tags": [
                "IP商业化",
                "AI版权",
                "AI视频"
              ]
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
              "title": "微信内测「小微 AI 社交」：让 AI 替你和朋友聊天",
              "summary": "9月7日消息，据每日经济新闻，微信正在内测「小微 AI 社交」功能：用户可让微信原生 AI 助手「小微」直接找到好友的「小微」对话，两个 AI 先行沟通，用户仅在授权与决策环节介入，且展示位置只在小微内、不进入个人对话框。腾讯客服称「小微」是微信团队 2026 年 6 月中旬开始小范围测试的原生 AI 助手，主模型为微信自研 WeLM，部分回答调用 DeepSeek。",
              "time": "9月7日消息",
              "link": "https://m.jiemian.com/article/15063609.html",
              "source": "界面新闻",
              "tags": [
                "AI社交",
                "AI Agent",
                "WeLM"
              ]
            },
            {
              "title": "腾讯混元 Hy4 preview 专项优化上线，降低任务轮次与 Token 消耗",
              "summary": "9月7日，腾讯混元联合 WorkBuddy 团队宣布，针对混元 Hy4 preview 接入 WorkBuddy 后暴露的「复杂任务下长思考、过度自我验证」等问题完成专项优化并全量上线。团队通过 Bench 指标与人工评测双重监控，在不损失任务效果的前提下显著降低任务轮次及输入输出 Token 消耗，提升复杂任务的执行效率与成本表现。",
              "time": "9月7日",
              "link": "https://www.jiemian.com/article/15064661.html",
              "source": "界面新闻",
              "tags": [
                "大模型优化",
                "推理效率"
              ]
            },
            {
              "title": "微信自研多模态模型 WeMM-Embedding 日调用量达 10 亿次",
              "summary": "9月7日消息，微信自研多模态向量模型 WeMM-Embedding 已在微信大规模投入使用，覆盖朋友圈搜索等场景，日调用量达 10 亿次，为微信的内容理解与检索提供底层向量能力。",
              "time": "9月7日消息",
              "link": "https://m.ithome.com/html/999527.htm",
              "source": "IT之家",
              "tags": [
                "多模态",
                "Embedding",
                "向量检索"
              ]
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米 18 Fold 发布：首发玄戒 O3 自研 AI 芯片，10999 元起",
              "summary": "9月7日消息，小米在北京举办秋季旗舰发布会，正式发布自研 AI 旗舰 SoC「玄戒 O3」及首搭该芯片的全尺寸折叠屏旗舰小米 18 Fold，售价 10,999 元起，将于 9 月 10 日开售。小米 18 Fold 搭载澎湃 OS 4 与 Xiaomi MiMo 端侧大模型。官方称小米计划十年投入 500 亿元造芯、目前已投入 210 亿元，玄戒 O3 进入商用使小米成为同时具备手机 SoC、AI 芯片、智驾芯片自研能力的厂商。",
              "time": "9月7日消息",
              "link": "https://www.c114.com.cn/4app/3542/a1317081.html",
              "source": "C114通信网",
              "tags": [
                "AI芯片",
                "端侧大模型",
                "折叠屏"
              ]
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
              "title": "华为发布麒麟 9050 Pro：首款落地「韬定律」，端侧可跑 300 亿参数",
              "summary": "9月7日，华为在 HarmonyOS 7 及 Mate XT 2 全场景新品发布会上推出新一代旗舰芯片麒麟 9050 Pro，由 Mate XT 2 非凡大师首发搭载，整机性能较上代提升 42% 以上。麒麟 9050 Pro 是全球首款落地华为「韬定律」逻辑折叠技术的芯片：单芯片内将逻辑单元垂直分层排布，以「时间缩微」替代几何缩微，依托现有 DUV 光刻实现晶体管密度提升 55%、NPU 功耗降低 66%，并实现行业首个端侧 300 亿参数 MoE 全模态大模型入端。",
              "time": "9月7日",
              "link": "https://www.zhidx.com/p/591414.html",
              "source": "智东西",
              "tags": [
                "AI芯片",
                "逻辑折叠",
                "端侧大模型"
              ]
            },
            {
              "title": "华为发布 HarmonyOS 7，小艺升级为系统级智能体",
              "summary": "9月7日，华为正式推出新一代操作系统 HarmonyOS 7。小艺完成从语音助手到系统级智能体的升级，可感知 200 余项系统级用户数据、调用 2,100 余项系统能力，复杂任务成功率超 90%；全新「小艺任务」具备端侧 Agent 能力，可一键整理桌面、生成日报周报。系统内置「鸿蒙盾」AI 安全防线，可拦截诈骗电话与 AI 合成语音。官方称搭载 HarmonyOS 6/7 的终端设备已突破 8,500 万。",
              "time": "9月7日",
              "link": "https://www.c114.com.cn/news/126/a1317089.html",
              "source": "C114通信网",
              "tags": [
                "操作系统",
                "系统级智能体",
                "AI Agent"
              ]
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
              "title": "字节跳动",
              "news": [
                {
                  "title": "字节开发实时空间视频生成模型，张一鸣亲自协调算力与硬件",
                  "summary": "当地时间9月7日，据彭博社报道，字节跳动正基于视频生成模型 Seedance 开发「实时空间视频生成模型」，即能随用户声音与动作实时变化的虚拟环境。创始人张一鸣亲自出面协调跨部门团队与算力资源，模型计划与自家 Pico 头显打通——用户移动、转身、开口时画面同步变化，落地方向包括直播、短剧和游戏，最快有望 10 月亮相。字节 2026 年四项 AI 优先事项中，「世界模型」位列首位。",
                  "time": "当地时间9月7日",
                  "link": "https://finance.sina.cn/tech/2026-09-08/detail-inirapza5998808.d.html",
                  "source": "新浪财经",
                  "tags": [
                    "世界模型",
                    "空间视频",
                    "Pico"
                  ]
                }
              ]
            },
            {
              "title": "努比亚",
              "news": [
                {
                  "title": "努比亚 NaviX Ultra 定档 9 月 16 日发布，定位全球首款 AI 普及手机",
                  "summary": "9月7日消息，中兴努比亚宣布新一代旗舰努比亚 NaviX Ultra 将于 9 月 16 日正式发布，定位「全球首款 AI 普及手机」，重构基础交互实现「一句话搞定手机」，主打能用、记得住、更安全，全国预约已开启。此前 7 月努比亚大模型已通过备案，NaviX Ultra 亦获得工信部相关备案。",
                  "time": "9月7日消息",
                  "link": "https://www.c114.com.cn/news/51/a1317032.html",
                  "source": "C114通信网",
                  "tags": [
                    "AI手机",
                    "智能体",
                    "AI普及"
                  ]
                }
              ]
            },
            {
              "title": "荣耀",
              "news": [
                {
                  "title": "荣耀 MagicOS 11 定档 9 月 15 日，首个系统级 Agent Harness 商用落地",
                  "summary": "9月8日消息，荣耀公布 2026 荣耀全球开发者大会日程，新一代操作系统 MagicOS 11 定档 9 月 15 日发布。官方称 MagicOS 11 是行业首个真正实现「系统级 Agent Harness 商用落地」的手机操作系统，通过「主动服务」与「自动执行」深度融合，升级 YOYO 智能体体验，标志 Agent 技术从实验室走向大规模商用。首批内测已开放报名，覆盖 Magic 8/7 系列等十余款设备。",
                  "time": "9月8日消息",
                  "link": "https://m.ithome.com/html/999493.htm",
                  "source": "IT之家",
                  "tags": [
                    "Agent Harness",
                    "操作系统",
                    "YOYO"
                  ]
                }
              ]
            },
            {
              "title": "科大讯飞",
              "news": [
                {
                  "title": "科大讯飞发布星火 X2.5：293B 参数 MoE，全国产算力全流程训练",
                  "summary": "9月7日，科大讯飞正式发布星火 X2.5（Spark-X2.5）大模型，采用 MoE 架构、总参数 2,930 亿、激活 300 亿（293B-A30B），支持 256K 上下文与 200 余种语言。模型基于全国产算力完成全流程训练及推理，重点提升代码与智能体能力，已上线讯飞开放平台与讯飞星辰 MaaS 平台，定价输入 1.6 元/百万 token、输出 6 元/百万 token。",
                  "time": "9月7日",
                  "link": "https://www.cnr.cn/ah/kjjr/20260907/t20260907_527806967.shtml",
                  "source": "央广网",
                  "tags": [
                    "国产大模型",
                    "MoE",
                    "全国产算力"
                  ]
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
                  "title": "宇树发布世界模型驱动全自主人形机器人格斗视频",
                  "summary": "9月7日，宇树科技发布世界模型实时驱动的全自主人形机器人格斗视频。官方称其 UnifoLM-X2-1.0 方案突破世界-动作大模型瞬时规划、决策与动态交互执行等瓶颈，实现高动态、强交互，全程不依赖遥控器、由世界模型驱动实现「全自主」搏击。宇树于 8 月 19 日登陆科创板，被称为「人形机器人第一股」。",
                  "time": "9月7日",
                  "link": "https://m.thepaper.cn/detail/34025165",
                  "source": "澎湃新闻",
                  "tags": [
                    "世界模型",
                    "人形机器人",
                    "具身智能"
                  ]
                }
              ]
            },
            {
              "title": "小鹏",
              "news": [
                {
                  "title": "小鹏 IRON 机器人自主走下产线，自动化产线正式启用",
                  "summary": "9月8日，小鹏集团董事长何小鹏宣布，小鹏高阶通用人形机器人 IRON 完成自动化总装并自主走下产线，小鹏机器人自动化产线随之启用，官方称其为「全球首条高阶通用人形机器人自动化生产线」。IRON 搭载小鹏自研图灵 AI 芯片，物理 AI 大模型端侧部署，可在无需遥操作下自主完成复杂任务；按规划 2026 年底进入规模量产，率先落地小鹏门店与园区场景。",
                  "time": "9月8日",
                  "link": "https://smartcar.cnmo.com/news/817928.html",
                  "source": "CNMO科技",
                  "tags": [
                    "人形机器人",
                    "自动产线",
                    "具身智能"
                  ]
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "消息称三星进军人形机器人赛道，计划 CES 2027 首秀",
                  "summary": "9月8日消息，据 IT 之家援引业内人士消息，三星电子正加快人形机器人原型机研发，目标在 2027 年 1 月 CES 2027 上首次公开自研产品。三星机器人 RX 部门直接向联席 CEO 卢泰文汇报，DX 部门首席技术官统筹硬件与 AI 软件研发，已布局髋关节设计、高灵巧度机械手、AI 运动控制等专利；与旗下 Rainbow Robotics 形成双轨，后者负责工业机器人落地。该消息尚未经三星官方确认。",
                  "time": "9月8日消息",
                  "link": "https://www.sohu.com/a/1073163333_100190264",
                  "source": "搜狐科技",
                  "tags": [
                    "人形机器人",
                    "CES"
                  ]
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
              "title": "中科世通亨奇 B 轮",
              "news": [
                {
                  "title": "中科世通亨奇完成近 5 亿元 B 轮融资，构建可信智能决策基础设施",
                  "summary": "9月7日，智能决策基础设施服务商中科世通亨奇宣布完成近 5 亿元 B 系列融资，为智能决策赛道单笔最大金额融资，由南方德茂基金、北京市信息产业基金、联通创投等国资与产业资本共同投资。公司由中科院孵化，借鉴 Palantir 以本体连接数据与业务的范式，自研 AOS 智能本体空间技术体系，将国防等高可信场景验证的能力向运营商、金融、能源电力等行业复制。",
                  "time": "9月7日",
                  "link": "https://www.chinaventure.com.cn/news/113-20260907-393136.html",
                  "source": "投中网",
                  "tags": [
                    "智能决策",
                    "融资",
                    "B轮"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "最高法",
              "news": [
                {
                  "title": "最高法发布 AI 司法意见：规制 AI 换脸拟声与「AI 幻觉」侵权",
                  "summary": "9月7日，最高人民法院发布《关于依法审理涉人工智能纠纷案件的意见》，这是首部由国家最高审判机构发布的涉人工智能司法裁判规则文件，分五部分共 24 条。文件明确利用 AI 换脸、拟声侵害人格权及 AI 幻觉、网络开盒、大数据杀熟等场景的归责原则与裁判规则，涵盖 AI 产品责任、自动驾驶事故赔偿、开源软件法律责任等；对尚未形成共识的问题则留白待条件成熟再明确。",
                  "time": "9月7日",
                  "link": "https://legal.gmw.cn/2026-09/07/content_38989161.htm",
                  "source": "光明网",
                  "tags": [
                    "AI治理",
                    "司法",
                    "深度合成"
                  ]
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
              "model": "claude-fable-5",
              "score": "1508",
              "change": "+6"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1497",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-max",
              "score": "1495",
              "change": "+12"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1493",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-high",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1486",
              "change": "+3"
            },
            {
              "model": "kimi-k3-max",
              "score": "1486",
              "change": "+10"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1485",
              "change": "+7"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "gemini-3.6-flash",
              "score": "1482",
              "change": "+8"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "gemini-3.5-flash-high",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "gpt-5.5",
              "score": "1476",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-09-08",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy4 preview",
              "score": "17.1T tokens",
              "change": "+326%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "14.2T tokens",
              "change": "+67%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.3T tokens",
              "change": "+1%"
            },
            {
              "model": "GLM 5.3 Flash",
              "score": "12.2T tokens",
              "change": "+50%"
            },
            {
              "model": "MiniMax M3 (free)",
              "score": "5.15T tokens",
              "change": "+70%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.11T tokens",
              "change": "+1%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "3.71T tokens",
              "change": "+25%"
            },
            {
              "model": "Hy3",
              "score": "3.66T tokens",
              "change": "+43%"
            },
            {
              "model": "GLM 5.3",
              "score": "3.3T tokens",
              "change": "+125%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "2.53T tokens",
              "change": "+69%"
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
};;
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
