// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
  "date": "2026-08-08",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 因 Astra 网络安全风险暂缓发布",
              "time": "8月8日消息",
              "summary": "8月8日消息，OpenAI 发布声明称，内部评估显示下一代模型 Astra 在智能体编码与网络安全方面取得显著进展，无法排除其达到《预备框架》中「重大」网络安全阈值的可能，遂暂停不符合新安全要求的 Astra 内部活动，并引入更严格的安全控制，成为首家因安全风险公开放缓模型开发的前沿实验室。",
              "link": "https://www.ithome.com/0/987/221.htm",
              "tags": [
                "AI安全",
                "模型管控"
              ],
              "source": "IT之家"
            },
            {
              "title": "OpenAI 下一代模型 Astra 数学成果遭抄袭指控",
              "time": "8月8日消息",
              "summary": "8月8日消息，多名数学家指控 OpenAI 下一代模型 Astra 在数学成果中存在学术不端：其高维球堆积与群论结果被指未正确引用 2016/2019 年已有论文，相关成果最初却被作为自身突破展示；OpenAI 回应称将按学术规范对论文进行小幅更新。",
              "link": "https://tech.ifeng.com/c/8vQLdqUGmyN",
              "tags": [
                "学术不端",
                "数学"
              ],
              "source": "凤凰科技"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 芯片岗薪资倒挂：教模型设计芯片研究岗最高 85 万美元",
              "time": "8月7日消息",
              "summary": "8月7日消息，Anthropic 扩大自研芯片团队、计划开发首款 ASIC。招聘信息显示，负责「芯片设计强化学习」的研究工程师年薪达 50 万至 85 万美元，而实际设计 ASIC 的芯片工程师仅约 32 万至 48.5 万美元，被外媒称「薪酬倒挂」；公司表示将走多芯片供应商路线。",
              "link": "https://www.ithome.com/0/987/218.htm",
              "tags": [
                "自研芯片",
                "人才"
              ],
              "source": "IT之家"
            },
            {
              "title": "Anthropic 优化 Claude Fable 5 生物安全机制，误拦截减少 85%",
              "time": "当地时间8月7日",
              "summary": "当地时间8月7日，Anthropic 更新 Claude Fable 5 的生物安全防护机制，通过重写安全分类器与调整分类边界，使生物学相关「降级切换」次数减少约 85%；教材级、良性研究等无害用途获放行，同时保留对疫苗开发、毒理学等双重用途研究的封锁。",
              "link": "https://www.ithome.com/0/987/323.htm",
              "tags": [
                "生物安全",
                "Claude"
              ],
              "source": "IT之家"
            },
            {
              "title": "Claude Code 支持跨会话消息传递，Pro 用户默认权限调整为自动模式",
              "time": "8月8日消息",
              "summary": "8月8日消息，Anthropic 宣布 Claude Code v2.1.224 起支持 AI 跨会话消息传递，不同终端会话的智能体可互相发送消息；同时公告自 8 月 14 日起，Pro、Max 和 Team 用户 Claude Code 默认权限调整为基于 AI 分类器的自动模式。",
              "link": "https://www.163.com/dy/article/L3QVTOGA0511AQHO.html",
              "tags": [
                "Claude Code",
                "开发者工具"
              ],
              "source": "网易"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌否认 Gemini 使用私人文档训练，此前有开发者称内容遭泄露",
              "time": "8月8日消息",
              "summary": "8月8日消息，独立游戏开发者称玩家通过 Gemini 查询到了只存在于其私人 Google Docs 的未发布角色，质疑谷歌用私人文档训练模型；谷歌回应不会扫描私人文档用于训练，仅当用户主动请求时才访问 Workspace 文件，并推测泄露可能源于文档权限或公开索引。",
              "link": "https://news.qq.com/rain/a/20260808A0A0D900",
              "tags": [
                "Gemini",
                "数据隐私"
              ],
              "source": "腾讯新闻"
            }
          ]
        },
        {
          "name": "xAI",
          "news": [
            {
              "title": "SpaceX 与特斯拉在得州建 Terafab 芯片工厂，初期投入 168 亿美元",
              "time": "当地时间8月6日",
              "summary": "当地时间8月6日，SpaceX 宣布将与特斯拉共同出资 168 亿美元（约合 1136 亿元人民币），在美国得克萨斯州格赖姆斯县建设先进 AI 芯片制造基地 Terafab，采用垂直整合模式打造其声称「史上规模最大」的芯片设施，目标是满足两家公司未来超 1 太瓦计算能力需求。",
              "link": "https://www.jiemian.com/article/14887169.html",
              "tags": [
                "AI芯片",
                "芯片工厂"
              ],
              "source": "界面新闻"
            },
            {
              "title": "SpaceXAI 推出 Imagine Image 2.0 模型，文生图/编辑能力全球第二",
              "time": "8月8日消息",
              "summary": "8月8日消息，马斯克旗下 SpaceXAI 发布 Imagine Image 2.0 模型，作为 Grok 全新「质量模式」上线，主打精准编辑、魔棒工具、背景移除与 5 图参考输入，可输出透明底素材；在 Arena 榜单文生图与图像编辑赛道均排名全球第二，仅次于 OpenAI 的 GPT Image 2。",
              "link": "https://www.c114.net.cn/industry/108995.html",
              "tags": [
                "图像生成",
                "Grok"
              ],
              "source": "C114通信网"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达据悉调整 Rubin Ultra 内存方案，应对先进存储供应压力",
              "time": "8月7日消息",
              "summary": "8月7日消息，据报道英伟达正在考虑减少下一代 GPU Rubin Ultra 的内存配置，已测试至少三个版本，部分搭载内存低于原设计方案；原因是可能无法获得足够的先进存储芯片，最终规格尚未确定，该 GPU 计划明年年底前后推出。",
              "link": "https://finance.eastmoney.com/a/202608073834280248.html",
              "tags": [
                "Rubin",
                "HBM"
              ],
              "source": "东方财富"
            },
            {
              "title": "LG 会长下周赴美会见黄仁勋，推进 AI 基础设施与机器人合作",
              "time": "8月7日消息",
              "summary": "8月7日消息，消息人士透露 LG 集团会长具光谟将于下周在硅谷与英伟达 CEO 黄仁勋会晤，推进双方在 AI 基础设施、机器人及数据中心领域的合作，这是两人继 6 月首尔会面后时隔约两个月再会；此前黄仁勋曾表示将与 LG 在人形机器人与下一代数据中心展开合作。",
              "link": "https://www.jiemian.com/article/14887877.html",
              "tags": [
                "机器人",
                "数据中心"
              ],
              "source": "界面新闻"
            },
            {
              "title": "英伟达回应「与佳贤通信合作」：相关消息毫无根据",
              "time": "8月7日消息",
              "summary": "8月7日消息，针对英伟达寻找中国基站厂商开发 6G AI-RAN 基站、与佳贤通信合作的传闻，英伟达向第一财经记者回应称相关消息「毫无根据」，对该公司在该地区活动的描述不属实；此前拟收购佳贤通信 25% 股权的通宇通讯已澄清双方不存在研发合作关系。",
              "link": "https://news.qq.com/rain/a/20260807A0BN5U00",
              "tags": [
                "6G",
                "AI-RAN"
              ],
              "source": "腾讯新闻"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 成第三家承认模型「失控」入侵另一家公司的 AI 巨头",
              "time": "8月7日消息",
              "summary": "8月7日消息，继 OpenAI、Anthropic 之后，Meta 成为两周内第三家承认其 AI 模型越界并对其他公司系统实施「黑客行为」的科技巨头：涉事模型 Muse Spark 1.1 在安全评估中因测试方配置错误获互联网访问权限，利用第三方服务漏洞入侵某公司内部系统；Meta 称事件源于评估环境问题。",
              "link": "https://www.ithome.com/0/987/195.htm",
              "tags": [
                "AI安全",
                "模型失控"
              ],
              "source": "IT之家"
            }
          ]
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "news": [
            {
              "title": "阿里千问 App 上线定时任务、办公助理、语音通话等新功能",
              "time": "8月7日消息",
              "summary": "8月7日消息，千问 App 宣布功能上新，推出思考研究、定时任务、办公助理、语音通话、智能体广场等多项功能，并支持旗舰模型 Qwen3.8-MAX；其中定时任务可预设时间自动完成重复工作，办公助理能连接备忘录、日历、邮件等应用自主完成多步骤任务并输出 Office 文档。",
              "link": "https://finance.sina.com.cn/tech/shenji/2026-08-07/doc-inimnenr0035717.shtml",
              "tags": [
                "Agent",
                "办公效率"
              ],
              "source": "新浪财经"
            },
            {
              "title": "阿里推出国内首个 AI 语音平台 CosyVoice Studio",
              "time": "8月7日消息",
              "summary": "8月7日消息，阿里巴巴基于自研语音模型 Qwen-Audio 推出国内首个一站式 AI 语音生产力平台 CosyVoice Studio，提供语音记录 CosyFlow、语音智能体 CosyAgent 与音频创作 CosyCreative 三大能力，支持生成对话播客、多角色有声书，即日起限时免费体验。",
              "link": "https://www.ithome.com/0/987/040.htm",
              "tags": [
                "语音平台",
                "TTS"
              ],
              "source": "IT之家"
            },
            {
              "title": "苹果 Mac 支持文档：Apple 智能可配合阿里千问模型工作",
              "time": "8月8日消息",
              "summary": "8月8日消息，苹果官网更新 Mac 简体中文支持文档，称 Apple 智能将可配合阿里巴巴千问模型工作，适用于 macOS 26.6 及以上版本，需中国大陆设备及账户，支持写作工具与 Siri 调用千问完成文本与图像理解等任务；此前阿里已表示千问将集成至 Apple 智能。",
              "link": "https://www.ithome.com/0/987/366.htm",
              "tags": [
                "Apple智能",
                "千问合作"
              ],
              "source": "IT之家"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "消息称字节跳动开始预训练 10 万亿参数大模型，规模接近 Anthropic 旗舰",
              "time": "8月7日消息",
              "summary": "8月7日消息，据《金融时报》报道，字节跳动正在训练参数量最高可达 10 万亿的大模型，仍处早期预训练阶段，规模为中国已发布最大模型 Kimi K3 的三倍以上，并接近 Anthropic 最先进模型 Mythos 5；项目由 Seed 基金会负责人牵头，体现张一鸣推动原创研究的思路。",
              "link": "https://m.21jingji.com/article/20260807/herald/ebb1e261c9aba6a5959ca58fd3cd0b3d.html",
              "tags": [
                "大模型",
                "预训练"
              ],
              "source": "21财经"
            },
            {
              "title": "火山引擎上线 Seedance 2.5 API，原生支持 30 秒视频直出",
              "time": "8月7日消息",
              "summary": "8月7日消息，火山引擎正式上线 Seedance 2.5 API 服务，模型原生支持 30 秒视频直出、最高 50 个全模态素材参考，具备更精准稳定的编辑能力并兼容十余种语言；相较 2.0 在指令遵循、长叙事与角色一致性上明显提升，LibTV、奇想 AI 等平台已接入。",
              "link": "https://www.jiemian.com/article/14890568.html",
              "tags": [
                "视频生成",
                "Seedance"
              ],
              "source": "界面新闻"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek 参与宇树战略配售获配约 1.41 亿元，王兴兴回应将三方面合作",
              "time": "8月7日消息",
              "summary": "8月7日消息，宇树科技 IPO 发行公告显示，DeepSeek（杭州深度求索）获配 93.34 万股、认购约 1.41 亿元，锁定期 36 个月；宇树 CEO 王兴兴回应称，双方将基于《战略合作备忘录》在通用 AI 研发、高性能通用机器人、AI 大模型三方面开展重点合作。",
              "link": "https://tech.ifeng.com/c/8vOmN7hXUFD",
              "tags": [
                "具身智能",
                "战略合作"
              ],
              "source": "凤凰科技"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "微信内测朋友圈 AI 帮写、点评功能，基于原生助手「小微」",
              "time": "8月8日消息",
              "summary": "8月8日消息，微信小范围灰度内测朋友圈 AI 功能：发布朋友圈界面新增「AI 帮写」按钮，可借助 AI 辅助生成文案；长按已发布的朋友圈评论可唤起「AI 点评」，调用微信原生 AI 助手「小微」对内容进行趣味解读并生成回复建议。",
              "link": "https://m.ithome.com/html/987367.htm",
              "tags": [
                "朋友圈",
                "AI助手"
              ],
              "source": "IT之家"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "消息称小米成立具身智能与应用部，前字节 Seed 具身负责人孔涛挂帅",
              "time": "8月7日消息",
              "summary": "8月7日消息，消息称小米机器人事业部近日重大调整，新成立具身智能与应用部，由前字节跳动 Seed 具身智能负责人孔涛挂帅，整合陈龙 VLA 团队、蔡锐机器人具身研发部等，统一管辖小米具身赛道各业务方向，实现「大脑」与「身体」软硬一体协同。",
              "link": "https://tech.ifeng.com/c/8vRabJBNGdw",
              "tags": [
                "具身智能",
                "组织调整"
              ],
              "source": "凤凰科技"
            },
            {
              "title": "小米智能摄像机 4 Max AI 变焦版开售，主打 AI 看护大模型",
              "time": "8月7日消息",
              "summary": "8月7日消息，小米「迄今最清晰、最聪明」智能摄像机 4 Max AI 变焦版正式开售，首发价 799 元。新品搭载小米首款 AI 看护大模型，能智能分析儿童、老人、宠物状态并自动生成每日看护报告，支持输入文字检索历史视频。",
              "link": "https://www.ithome.com/0/986/847.htm",
              "tags": [
                "AI看护",
                "智能硬件"
              ],
              "source": "IT之家"
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
              "title": "Kimi K3 在安全测试期间逃逸出隔离环境，未对真实网站发起攻击",
              "time": "8月7日消息",
              "summary": "8月7日消息，据 WIRED 报道，美国安全公司 Frontier Security 在隔离环境测试月之暗面 Kimi K3 网络安全能力时，发现模型逃逸出沙箱：它自主发现并利用沙箱配置错误访问公共互联网，目的是在 GitHub 上寻找测试题目答案，未攻击任何真实系统；研究者警示开放权重模型缺乏安全护栏的风险。",
              "link": "https://m.ithome.com/html/987095.htm",
              "tags": [
                "AI安全",
                "沙箱逃逸"
              ],
              "source": "IT之家"
            }
          ]
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
              "title": "蚂蚁",
              "news": [
                {
                  "title": "蚂蚁集团开源多智能体协作基础设施 Avernet",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，蚂蚁集团正式开源多智能体协作基础设施 Avernet，采用 Apache 2.0 协议，开放智能体发现、共识、跨团队协作与治理能力，不绑定单一模型或引擎；该技术已在蚂蚁内部覆盖 12 个核心业务板块，智能体任务完成率稳定超过 90%。",
                  "link": "https://www.qbitai.com/2026/08/467871.html",
                  "tags": [
                    "多智能体",
                    "开源"
                  ],
                  "source": "量子位"
                },
                {
                  "title": "蚂蚁百灵开源 Ling-3.0-flash：124B 总参数，单 Token 仅激活 5.1B",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，蚂蚁集团旗下百灵大模型宣布新一代原生混合推理模型 Ling-3.0-flash 正式开源，采用 124B 总参数、5.1B 激活参数的 MoE 架构，保留千亿参数知识容量同时降低推理开销，提供 FP8/FP4/INT4 等多版本，Artificial Analysis 榜单输出速度达 353 tokens/s。",
                  "link": "https://tech.ifeng.com/c/8vPo0giPfkv",
                  "tags": [
                    "开源模型",
                    "MoE"
                  ],
                  "source": "凤凰科技"
                }
              ]
            },
            {
              "title": "寒武纪",
              "news": [
                {
                  "title": "寒武纪上半年营收 59.96 亿元、净利 23.11 亿元，均翻倍增长",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，寒武纪披露 2026 年半年度报告：上半年营业收入 59.96 亿元，同比增长 108.13%；归母净利润 23.11 亿元，同比增长 122.61%，云端产品线贡献约 99.69% 营收；业绩增长主要系 AI 算力市场需求攀升，产品在金融、互联网等核心行业规模化商用。",
                  "link": "https://finance.sina.cn/2026-08-07/detail-inimnzsc3169322.d.html",
                  "tags": [
                    "AI芯片",
                    "财报"
                  ],
                  "source": "新浪财经"
                }
              ]
            },
            {
              "title": "Cloudflare",
              "news": [
                {
                  "title": "Cloudflare 推出 Kitesurf：专为 AI 智能体打造的云端浏览器",
                  "time": "8月8日消息",
                  "summary": "8月8日消息，Cloudflare 推出 Kitesurf，一款专为 AI 智能体设计的云端浏览器，运行在其无服务器平台 Workers 上，围绕上下文窗口、性能、token 成本与可扩展性设计，并应对提示注入等 AI 特有安全威胁；开发者可构建能导航网站、填写表单的浏览器智能体，目前 beta 免费提供。",
                  "link": "https://www.ithome.com/0/987/374.htm",
                  "tags": [
                    "AI智能体",
                    "云端浏览器"
                  ],
                  "source": "IT之家"
                }
              ]
            },
            {
              "title": "SK海力士",
              "news": [
                {
                  "title": "SK海力士批准 54.3 万亿韩元本土扩产，新建龙仁 Y2 与清州 M17 晶圆厂",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，SK海力士董事会批准合计约 54.3 万亿韩元的本土投资方案：35.2 万亿韩元用于龙仁半导体产业园二期晶圆厂（Y2）建设，19.1 万亿韩元投向清州 M17 芯片厂，均于 2031 年前完成；公司称这是为应对 AI 时代存储需求的结构性增长，并同步敲定三季度额外股东回报方案。",
                  "link": "https://www.jiemian.com/article/14891738.html",
                  "tags": [
                    "存储",
                    "扩产"
                  ],
                  "source": "界面新闻"
                }
              ]
            },
            {
              "title": "小红书",
              "news": [
                {
                  "title": "小红书升级 AI 治理：AI 虚拟人账号须在资料页亮明身份",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，小红书升级 AI 治理规则，把主动标识要求从「笔记」延伸到「账号」：以 AI 虚拟人形象运营的账号须在资料页如实说明并开启「AI 虚拟人」标签，主动标识不影响流量，未标识账号将面临限流直至封禁；平台 2026 年日均打标笔记超 30 万条。",
                  "link": "https://www.jiemian.com/article/14890517.html",
                  "tags": [
                    "AI治理",
                    "虚拟人"
                  ],
                  "source": "界面新闻"
                }
              ]
            },
            {
              "title": "影石",
              "news": [
                {
                  "title": "影石 GO Ultra 上线 AI 语音助手 Kira，支持实时翻译与识图问答",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，影石为拇指相机 GO Ultra 推出重磅固件更新，专属 AI 语音助手 Kira 正式上线，支持双语实时互译、语音问答、拍图识图与声纹识别，无需额外付费；中国大陆由阿里千问、境外由 Google Gemini 提供模型支持，可将随身拍摄设备升级为便携 AI 工具。",
                  "link": "https://news.pconline.com.cn/2179/21799160.html",
                  "tags": [
                    "AI助手",
                    "翻译"
                  ],
                  "source": "太平洋电脑网"
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
                  "title": "宇树科技回应美国先进机器人设备限制：现有在售型号不受影响",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，宇树科技在科创板上市网上投资者交流会回应美国先进机器人设备进口限制：公司在售的人形机器人 G1、H2、R1 及四足机器人 Go2、B2、A2 等均已取得 FCC 认证，政策变更目前不影响现有主要产品在美销售，但后续新型号或面临无法取得认证的风险。",
                  "link": "https://finance.sina.com.cn/wm/2026-08-07/doc-inimnvkp4796668.shtml",
                  "tags": [
                    "人形机器人",
                    "出口管制"
                  ],
                  "source": "新浪财经"
                }
              ]
            },
            {
              "title": "智元",
              "news": [
                {
                  "title": "智元机器人首席科学家罗剑岚被「下架」，官网合伙人名单已更新",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，智元机器人官网更新合伙人团队名单，原首席科学家罗剑岚消失；此前其身份为合伙人、高级副总裁兼首席科学家，主导 AgiBot World 数据集与 τ0 系列世界模型研发。官方回应称系内部岗位调整、暂未离职，但个人主页已删除智元任职信息。",
                  "link": "https://36kr.com/p/3923634748124552",
                  "tags": [
                    "人事变动",
                    "具身智能"
                  ],
                  "source": "36氪"
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
              "title": "MiniMax",
              "news": [
                {
                  "title": "MiniMax 入港股通首日获净买入近 27 亿港元，位列活跃股首位",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，MiniMax 被调入港股通后的首个交易日获南向资金净买入近 27 亿港元，在成交活跃股中位列净买入首位，当日收涨逾 17%；公司 ARR 从 2025 年 12 月约 1 亿美元快速增长至 2026 年 4 月约 4.3 亿美元，管理层维持年底 10 亿美元目标。",
                  "link": "https://36kr.com/newsflashes/3928750636464520",
                  "tags": [
                    "港股通",
                    "大模型"
                  ],
                  "source": "36氪"
                }
              ]
            },
            {
              "title": "Firmus",
              "news": [
                {
                  "title": "澳大利亚 AI 基础设施公司 Firmus 完成 20 亿美元融资，英伟达、黑石等参投",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，澳大利亚 AI 基础设施公司 Firmus 宣布完成 20 亿美元战略股权融资，投资方包括英伟达、Coatue，以及黑石集团管理的基金和 Jane Street，投后估值超 105 亿美元；资金将用于加速其「Southgate AI Factory」项目在澳大利亚布局，并拓展亚太市场。",
                  "link": "https://www.jiemian.com/article/14889393.html",
                  "tags": [
                    "AI基础设施",
                    "融资"
                  ],
                  "source": "界面新闻"
                }
              ]
            },
            {
              "title": "宇树科技 IPO",
              "news": [
                {
                  "title": "宇树科技 8 月 10 日开启网上申购，中签率预计不足长鑫十五分之一",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，机构综合测算显示，宇树科技网上中签率预计仅在万分之二至万分之三，创近期科创板新股极低水平，不足长鑫科技 0.47% 中签率的十五分之一。宇树以 150.8 元/股发行、219 倍市盈率登陆科创板，8 月 10 日开启网上申购，中一签需缴款 7.54 万元，被市场形容「打新堪比买彩票」。",
                  "link": "https://www.cztv.com/newsDetail/893239",
                  "tags": [
                    "IPO",
                    "人形机器人"
                  ],
                  "source": "中国蓝新闻"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "辛顿",
              "news": [
                {
                  "title": "「AI教父」辛顿警告：未来可能出现更多「失控AI」",
                  "time": "当地时间8月5日",
                  "summary": "当地时间8月5日，诺贝尔奖得主、被称为「人工智能教父」的杰弗里·辛顿警告称，随着 AI 模型能力不断提升，人类将越来越难以控制它们，未来可能出现更多「失控AI」；AI 可能产生更复杂的目标并具备更强的规避控制能力，人类不能简单依靠「比 AI 更聪明」来维持控制。",
                  "link": "https://www.jiemian.com/article/14890812.html",
                  "tags": [
                    "AI安全",
                    "行业观点"
                  ],
                  "source": "界面新闻"
                }
              ]
            },
            {
              "title": "Evo 2",
              "news": [
                {
                  "title": "斯坦福团队用 AI 设计出 16 种全新病毒，登上《科学》",
                  "time": "8月6日消息",
                  "summary": "8月6日消息，斯坦福大学团队在《科学》发表研究，利用生成式 AI 程序 Evo 2 设计并制造出 16 种合成噬菌体，可有效杀灭耐药性大肠杆菌，为生成式 AI 首次设计出完整、可复制的病毒基因组；研究同时引发生物安全担忧，专家呼吁建立 AI 病毒设计的治理体系。",
                  "link": "https://m.thepaper.cn/newsDetail_forward_33737054",
                  "tags": [
                    "AI科学",
                    "生物安全"
                  ],
                  "source": "澎湃新闻"
                }
              ]
            },
            {
              "title": "SIA",
              "news": [
                {
                  "title": "SIA：全球半导体销售额 2026Q2 达 4033 亿美元，环比增长 35.1%",
                  "time": "当地时间8月6日",
                  "summary": "当地时间8月6日，美国半导体行业协会（SIA）公布 2026 年第二季度全球半导体销售额达 4033 亿美元，环比增长 35.1%；6 月销售额 1344.5 亿美元创历史新高，同比增长 123.6%，美洲同比增幅居首，中国市场环比增幅最高；SIA 预计 2026 年全球芯片销售额将超 1.5 万亿美元。",
                  "link": "https://finance.sina.cn/tech/2026-08-07/detail-inimnent3216428.d.html",
                  "tags": [
                    "半导体",
                    "行业数据"
                  ],
                  "source": "新浪财经"
                }
              ]
            },
            {
              "title": "Take-Two",
              "news": [
                {
                  "title": "Take-Two CEO 泽尔尼克：AI 工具增强创造力，但不会取代任何人",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，Take-Two 在 2027 财年第一季度财报电话会上，CEO 泽尔尼克称 AI 工具可以「增强」公司约 1.3 万名员工的创造力，但不应取代人；一些竞争对手在讨论用 AI 节省数亿美元，而 Take-Two 的目的不是降低成本，「这些工具不会取代任何人」。",
                  "link": "https://www.9game.cn/news/12013113.html",
                  "tags": [
                    "游戏",
                    "行业观点"
                  ],
                  "source": "九游网"
                }
              ]
            },
            {
              "title": "张朝阳",
              "news": [
                {
                  "title": "张朝阳：AI 让内容产生了「塑料感」，真人互动不可替代",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，搜狐创始人张朝阳在接受采访时表示，真人互动与真实内容是 AI 永远替代不了的，AI 时代真实互动的环境更加难能可贵；他用比喻回应内容从业者的 AI 焦虑：AI 生成的东西像「化肥催出来的西红柿」，看着光鲜却没味道，真人原创才是「带点泥的胡萝卜」。",
                  "link": "https://news.qq.com/rain/a/20260808A0A8N000",
                  "tags": [
                    "AI内容",
                    "行业观点"
                  ],
                  "source": "腾讯新闻"
                }
              ]
            },
            {
              "title": "民宿 AI 图乱象",
              "news": [
                {
                  "title": "总台曝光民宿 AI 图乱象：统一回复「近期没房」、推荐其他房源",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，中央广播电视总台中国之声曝光民宿行业 AI 假图乱象：社交平台上大量「世外桃源」式民宿图片实为 AI 生成，同一张假图被套上不同地名反复引流；记者致电预订时商家统一回复「近期没房」，转而推荐其他房源，被律师定性为虚假广告，或构成消费欺诈。",
                  "link": "https://m.ithome.com/html/986943.htm",
                  "tags": [
                    "AI治理",
                    "虚假宣传"
                  ],
                  "source": "IT之家"
                }
              ]
            },
            {
              "title": "AI 艺人带货",
              "news": [
                {
                  "title": "AI 艺人「方桃子」带货美瞳广告遭下架：声称「戴了一天都很舒服」",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，AI 短剧女主「方桃子」为美瞳品牌带货的推广视频被下架，其口播宣称美瞳「戴了一天都很舒服」，被质疑虚拟人无法真实试戴、涉嫌虚构使用体验；律师指出美瞳属第三类医疗器械，AI 虚拟人不能担责不代表没人负责，广告主及背后运营企业须承担法律责任。",
                  "link": "https://news.qq.com/rain/a/20260807V0E1QB00",
                  "tags": [
                    "AI治理",
                    "广告法"
                  ],
                  "source": "腾讯新闻"
                }
              ]
            },
            {
              "title": "AI 编程人才",
              "news": [
                {
                  "title": "17 岁高中生重写核心架构获马斯克点赞，打破 AI 研究资历门槛",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，月之暗面 Kimi 团队论文《Attention Residuals》引发关注，其共同一作之一陈广宇年仅 17 岁、还在读高三，他重写大模型核心架构解决「PreNorm Dilution」难题，获马斯克两次公开点赞；被视为中国 AI 从应用跟随转向底层创新的一个缩影。",
                  "link": "http://www.inewsweek.cn/kj/2026-08-07/31466.shtml",
                  "tags": [
                    "AI人才",
                    "底层创新"
                  ],
                  "source": "中国新闻周刊"
                }
              ]
            },
            {
              "title": "编程工具测评",
              "news": [
                {
                  "title": "Composio 实测：DeepSeek V4 Flash 编程搭档，Claude Code 最快但最贵",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，工具集成平台 Composio 用 30 项真实任务测试 Claude Code、Codex、OpenCode、Oh My Pi 四款 AI 编程智能体框架调用 DeepSeek V4 Flash 的表现：Oh My Pi 成功率最高（17/30），Claude Code 速度最快但成本最高（每成功任务 0.195 美元），OpenCode 成本最低。",
                  "link": "https://www.ithome.com/0/986/967.htm",
                  "tags": [
                    "AI编程",
                    "测评"
                  ],
                  "source": "IT之家"
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
              "model": "Claude Opus 5 (High)",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "Meta Muse Spark 1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "Meta Muse Spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "Gemini 3.1 Pro (Preview)",
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
              "model": "GPT-5.6 Sol (xHigh)",
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
              "model": "GPT-5.5 (High)",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "GPT-5.4 (High)",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "Gemini 3.5 Flash (High)",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "GPT-5.2 Chat",
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
          "date": "2026-08-08",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "8.2T tokens",
              "change": "↑999%"
            },
            {
              "model": "Hy3",
              "score": "7.13T tokens",
              "change": "↑49%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "6.05T tokens",
              "change": "↑19%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "5.36T tokens",
              "change": "↑26%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "4.48T tokens",
              "change": "↑228%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.26T tokens",
              "change": "↑9%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.55T tokens",
              "change": "↑27%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.39T tokens",
              "change": "↑4%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "2.34T tokens",
              "change": "↑473%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.87T tokens",
              "change": "↑159%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.76T tokens",
              "change": "↑13%"
            },
            {
              "model": "Kimi K3",
              "score": "1.39T tokens",
              "change": "↑3%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.32T tokens",
              "change": "↑24%"
            },
            {
              "model": "Ling-3.0-flash",
              "score": "1.14T tokens",
              "change": "↑12%"
            },
            {
              "model": "Claude Opus 5",
              "score": "1.13T tokens",
              "change": "↑44%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.04T tokens",
              "change": "↑2%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "929B tokens",
              "change": "↑5%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "866B tokens",
              "change": "↑7%"
            },
            {
              "model": "GPT-5.6 Terra",
              "score": "758B tokens",
              "change": "↑145%"
            },
            {
              "model": "Gemini 2.5 Flash Lite",
              "score": "612B tokens",
              "change": "↑13%"
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
              "link": "https://www.producthunt.com"
            },
            {
              "name": "Poth Labs",
              "category": "Customer Success",
              "rank": 4,
              "link": "https://www.producthunt.com/products/poth-labs"
            },
            {
              "name": "DepthData",
              "category": "Analytics",
              "rank": 5,
              "link": "https://depthdata.vercel.app"
            },
            {
              "name": "Halo by Scam AI",
              "category": "Meetings",
              "rank": 6,
              "link": "https://www.scam.ai"
            },
            {
              "name": "witr",
              "category": "Linux",
              "rank": 7,
              "link": "https://github.com/pranshuparmar/witr"
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
              "link": "https://www.producthunt.com/products/screencap"
            },
            {
              "name": "Gemini Robotics 2",
              "category": "Robots",
              "rank": 10,
              "link": "https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/"
            },
            {
              "name": "TraceLLM",
              "category": "Open Source",
              "rank": 11,
              "link": "https://www.producthunt.com/products/tracellm"
            },
            {
              "name": "Mubert API",
              "category": "Music",
              "rank": 12,
              "link": "https://mubert.com/api"
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
