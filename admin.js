const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-10",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "奥特曼：Astra 因网络安全风险将延后开放",
              "time": "当地时间8月7日",
              "summary": "当地时间8月7日，OpenAI CEO 山姆·奥特曼表示公司正在推进下一代模型 Astra 向公众开放，但由于该模型具备较强的网络安全能力，需要“多一点时间”确保安全部署。OpenAI 内部评估显示 Astra 在网络安全活动方面或达严重风险级别，已采取暂停部分活动等安全保障措施。奥特曼称不希望将强大模型限制给少数用户，希望 Astra 最终广泛开放。",
              "link": "https://www.jiemian.com/article/14894047.html",
              "tags": [
                "Astra",
                "模型安全"
              ],
              "source": "界面新闻"
            },
            {
              "title": "OpenAI 取消 ChatGPT 免费版纯文本对话次数限制",
              "time": "8月6日消息",
              "summary": "8月6日消息，OpenAI 宣布取消 ChatGPT 免费版及 Go 套餐用户在纯文本对话中的次数限制，同时升级默认模型为 GPT-5.6 Luna，新增“思考（Think）”按钮。图片生成、文件上传、语音对话等功能仍保留独立额度。此举旨在提升 AI 使用普及度、增强免费用户粘性，被解读为应对 DeepSeek 调用量反超的竞争举措。",
              "link": "https://tech.ifeng.com/c/8vT3wmjQalf",
              "tags": [
                "ChatGPT",
                "免费版"
              ],
              "source": "凤凰科技"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Claude Code 换 GPT 模型账号误封，Anthropic 澄清不封号",
              "time": "8月9日消息",
              "summary": "8月9日消息，OpenAI 产品负责人 Tibo 公开教用户保留 Claude Code 的 harness、将底层模型换成 GPT，开发者 Alex Getman 照做后 Claude 账号被封。Claude Code 负责人 Boris Cherny 澄清 Anthropic 不会因 harness 搭配其他模型就封号，此次系风控误触发，账号随后恢复。两人在 X 上互相打趣，Tibo 事后重置了 ChatGPT Work 和 Codex 付费用户使用额度。",
              "link": "https://www.163.com/dy/article/L3V39SU90511ABV6.html",
              "tags": [
                "Claude Code",
                "模型切换"
              ],
              "source": "网易"
            },
            {
              "title": "Claude 共享对话遭谷歌搜索收录，敏感信息面临泄露风险",
              "time": "8月10日消息",
              "summary": "8月10日消息，安全公司 Malwarebytes 指出，Anthropic Claude 的共享对话可能被谷歌搜索引擎收录，导致用户聊天内容中的敏感信息意外暴露。问题源于 Claude 的“共享聊天”功能会生成公开访问链接，部分公开分享的聊天记录被搜索引擎抓取并建立索引。Malwarebytes 称 Grok、Meta AI 也曾出现类似问题，建议用户不要公开分享 AI 聊天内容。",
              "link": "https://www.ithome.com/0/987/668.htm",
              "tags": [
                "Claude",
                "隐私安全"
              ],
              "source": "IT之家"
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
              "title": "SpaceX 收购 Cursor 最快下周完成，或启用 Grok Bot 品牌",
              "time": "8月8日消息",
              "summary": "8月8日消息，据 The Information 报道，SpaceX 对 AI 编程工具 Cursor 的收购最快本周末完成、最迟不晚于 8 月底，交易以 60 亿美元全股票方式进行。Cursor 已向员工通报，品牌名称将在未来几个月内逐步退出新产品，员工将并入 SpaceX AI 业务；下一代通用智能体产品内部代号 Sand 或将以 Grok Bot 品牌亮相。",
              "link": "https://www.jiemian.com/article/14894187.html",
              "tags": [
                "收购",
                "AI编程"
              ],
              "source": "界面新闻"
            },
            {
              "title": "马斯克：星链 V3 卫星性能将比 V2 高一个数量级",
              "time": "8月9日消息",
              "summary": "8月9日消息，马斯克在 X 平台发文称，即将通过星舰发射的星链 V3 卫星综合性能将比 V2 高出一个数量级，星链 V3 整体带宽达 V2 系统的 100 倍以上，今年星链系统年度经常性收入（ARR）将达到 200 亿美元。马斯克称即使每千兆字节收入下降 10 倍，SpaceX 通信收入仍将超过每年 2000 亿美元。",
              "link": "https://finance.sina.com.cn/roll/2026-08-09/doc-inimssst8972051.shtml",
              "tags": [
                "星链",
                "卫星互联网"
              ],
              "source": "新浪财经"
            },
            {
              "title": "马斯克：SpaceX 将在月球建造工厂",
              "time": "8月9日消息",
              "summary": "8月9日消息，SpaceX 在上市后首份财报电话会上重申月球建厂计划，拟利用机器人生产 Starmind AI 卫星组件，并通过电磁质量加速器将卫星弹射入轨。马斯克认为这将使太空经济规模扩大至地球的 1000 倍。SpaceX Q2 营收 78 亿美元，同比增长 92%，其中 AI 业务营收 25.61 亿美元，同比增长 247%。",
              "link": "https://finance.eastmoney.com/a/202608093836019273.html",
              "tags": [
                "月球基地",
                "SpaceX"
              ],
              "source": "东方财富"
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
              "title": "博主用 Meta 智能眼镜拍视频遭差评，隐私争议再起",
              "time": "8月9日消息",
              "summary": "8月9日消息，据卫报报道，英国网红奥利弗·胡森在环法自行车赛期间用 Meta 智能眼镜拍摄第一人称视频，发布后遭遇大量“变态眼镜”“偷窥”等负面评论。公众担忧智能眼镜能在佩戴状态下未经同意录制他人，Meta 回应称设备配有 LED 指示灯提醒，指示灯被破坏则摄像头自动禁用，但现实仍有多起疑似偷拍争议。",
              "link": "https://news.17173.com/content/08102026/020157296.shtml",
              "tags": [
                "智能眼镜",
                "隐私"
              ],
              "source": "17173"
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
              "title": "千问闪购首次上车，极狐阿尔法 T7 支持一句话点奶茶",
              "time": "8月7日消息",
              "summary": "8月7日消息，极狐汽车确认千问闪购首次上车，阿尔法 T7 成为首款搭载该 AI 语音购物服务的车型，支持车内“一句话点奶茶”。用户说出饮品名称即可自动匹配门店、完成下单支付。新车定位 20 万级中大型智能轿跑 SUV，搭载华为乾崑智驾、宁德时代电池，将于 8 月 26 日开启预售。",
              "link": "https://tech.ifeng.com/c/8vPtnVvufay",
              "tags": [
                "千问",
                "车载AI"
              ],
              "source": "凤凰科技"
            }
          ]
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
          "news": [
            {
              "title": "朋友圈可 AI 帮写、点评，腾讯客服称逐步开放中",
              "time": "8月8日消息",
              "summary": "8月8日消息，有消息称微信在灰度测试朋友圈“AI 帮写”与“AI 点评”两项能力，腾讯客服回应称目前朋友圈的 AI 相关功能仍在逐步开放中，部分智能互动功能可能已在灰度测试阶段。两项功能属于微信原生 AI 助手“小微”的一部分，AI 帮写可识别编辑中的文字和配图，生成“简洁”“调侃”“文艺”三种风格的候选文案。",
              "link": "https://news.qq.com/rain/a/20260808A083K500",
              "tags": [
                "微信",
                "AI功能"
              ],
              "source": "腾讯新闻"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "原字节机器人一号位孔涛加入小米，负责基座模型研发",
              "time": "8月9日消息",
              "summary": "8月9日消息，据多方独立信源确认，原字节跳动机器人团队负责人孔涛已加盟小米，担任小米机器人基座模型团队负责人，并挂帅新成立的具身智能与应用部。孔涛曾从 0 到 1 组建字节 AI Lab 机器人团队，2025 年夏天加入小米并带来多名前字节员工。小米机器人事业部约 200 人，孔涛带领的基座模型团队高度保密。",
              "link": "https://m.21jingji.com/article/20260809/herald/107ee1343d570185e9152826bd53db04_zaker.html",
              "tags": [
                "人事变动",
                "具身智能"
              ],
              "source": "21财经"
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果回应删除接入千问手册：还没推出相关功能",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，针对删除《在 Mac 上配合 Apple 智能使用千问》支持文档一事，苹果客服回应新浪科技称：“我们有功能或新项目发布时，都会提前收到通知，目前并没有收到相关通知，中国大陆还没推出‘Apple 智能使用千问’相关功能。”该文档 8 月 8 日上线后不到 24 小时即被删除。今年 7 月阿里方面曾称千问将集成至 Apple 智能。",
                  "link": "https://finance.sina.com.cn/tob/2026-08-09/doc-inimtchr5630368.shtml",
                  "tags": [
                    "Apple智能",
                    "千问"
                  ],
                  "source": "新浪财经"
                },
                {
                  "title": "苹果被曝测试长鑫存储芯片，用于 iPhone 和 MacBook",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，据《华尔街日报》报道，苹果正在 iPhone 和 MacBook 等产品线测试长鑫存储的存储芯片，以缓解 AI 热潮引发的内存短缺，目标是在中国销售的部分设备中使用。苹果已与长鑫存储展开初步洽谈，并寻求白宫批准。此前惠普、宏碁已在销往美国以外市场的设备中采用长鑫芯片。",
                  "link": "https://finance.sina.com.cn/wm/2026-08-09/doc-inimtuef8605059.shtml",
                  "tags": [
                    "存储芯片",
                    "供应链"
                  ],
                  "source": "新浪财经"
                }
              ]
            },
            {
              "title": "摩尔线程",
              "news": [
                {
                  "title": "摩尔线程上半年营收大增 147%，智算集群规模化销售",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，国产 GPU 厂商摩尔线程发布 2026 年半年报，上半年营收 17.36 亿元，同比增长 147.42%，已超 2025 年全年营收；归母净利润亏损收窄 95.73%。MTT S5000 智算集群实现规模化销售，在北京、无锡、杭州等地完成落地部署，云端智算产品贡献营收占比 97.5%，同时公告拟赴港上市。",
                  "link": "https://stcn.com/article/detail/4065573.html",
                  "tags": [
                    "国产GPU",
                    "智算集群"
                  ],
                  "source": "证券时报"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软为 Outlook 加 Copilot：选词解释+每日邮件小结",
                  "time": "8月8日消息",
                  "summary": "8月8日消息，微软面向 Windows 经典版 Outlook 推送 Explain This 功能，选中邮件任意文本即可获得结合上下文的 AI 解释，预计 9 月底前完成推送；新版 Outlook 拟上线“每日小结”，基于过去 8 小时收件箱生成晚间简报。两项功能均需 Microsoft 365 Copilot 订阅，新版功能因未单独征求读取邮件许可引发隐私争议。",
                  "link": "https://www.ithome.com/0/987/274.htm",
                  "tags": [
                    "Copilot",
                    "AI办公"
                  ],
                  "source": "IT之家"
                }
              ]
            },
            {
              "title": "甲骨文",
              "news": [
                {
                  "title": "甲骨文 OpenJDK 新规：禁止提交 AI 生成代码",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，甲骨文通知 OpenJDK 开发者，项目组不能再提交 AI 生成的代码，社区贡献内容不得包含由大语言模型、扩散模型或深度学习系统生成的内容，包括代码、文本、PR、邮件沟通、Wiki 和 Bug 报告。甲骨文称主要考虑知识产权、网络安全及代码审查工作量风险，开发者仍可私下使用 AI 工具审查、调试代码。",
                  "link": "https://tech.ifeng.com/c/8vSO9PcSSUo",
                  "tags": [
                    "开源社区",
                    "AI代码"
                  ],
                  "source": "凤凰科技"
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
              "title": "中科慧思",
              "news": [
                {
                  "title": "中科慧思发布三款灵巧手，预告 37 自由度 F 系列",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，蓝思科技、中科慧灵与湖南华夏投资集团共同成立中科慧思具身智能公司，落户湘江新区，现场发布 L1、D1、M1 三款灵巧手并预告 37 自由度的 F 系列绳驱仿生灵巧手。其中 L1 为千元级普惠款，已用于机器人乐队演奏；全系列支持 100 万次往复运动零故障。公司同时宣布建设全国最大灵巧手技能训练场和数据采集中心。",
                  "link": "https://www.cnstock.com/commonDetail/757223",
                  "tags": [
                    "灵巧手",
                    "具身智能"
                  ],
                  "source": "界面新闻"
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
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树科技今日科创板申购，A股人形机器人第一股登场",
                  "time": "8月10日消息",
                  "summary": "8月10日消息，宇树科技在科创板开启网上、网下申购，成为 A 股“人形机器人第一股”。发行价 150.80 元/股，对应发行市值约 610 亿元，拟募资约 61 亿元，其中智能机器人模型研发拟投入约 20 亿元。2025 年其人形机器人出货量超 5500 台、居全球第一。市场测算中一签或盈利 20 万元以上。",
                  "link": "http://epaper.zqrb.cn/html/2026-08/10/content_1264446.htm",
                  "tags": [
                    "IPO",
                    "人形机器人"
                  ],
                  "source": "证券日报"
                }
              ]
            },
            {
              "title": "Harvey",
              "news": [
                {
                  "title": "法律 AI 公司 Harvey 洽谈融资，估值冲击 155 亿美元",
                  "time": "8月8日消息",
                  "summary": "8月8日消息，据 The Information 报道，面向律师的 AI 公司 Harvey 正洽谈新一轮融资，拟募资至少 5 亿美元，估值达 155 亿美元，较 5 个月前上一轮 110 亿美元高出约 40%。Harvey 年化收入超 3.5 亿美元，为律师提供合同审查、法律研究等 AI 工具，是法律垂直领域估值最高的 AI 创业公司，本轮或由 Lightspeed 领投。",
                  "link": "https://www.sina.cn/news/article/nimrvnz2259691.html",
                  "tags": [
                    "融资",
                    "法律AI"
                  ],
                  "source": "新浪"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "五大科技巨头",
              "news": [
                {
                  "title": "五大 AI 巨头现金流告急，2027 年预计亏空 1250 亿美元",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，据 S&P Global Market Intelligence 分析，微软、谷歌、亚马逊、Meta 和甲骨文因在 AI 开发和交付上投入巨资，2026 年自由现金流合计几乎为零，到 2027 年将出现高达 1250 亿美元的负现金流。其中亚马逊和谷歌过去三个月现金流失超过任何其他美国公司，AI 基建投资回报成为市场关注焦点。",
                  "link": "https://www.163.com/dy/article/L3SOGRAA0550A7YJ.html",
                  "tags": [
                    "AI投资",
                    "现金流"
                  ],
                  "source": "网易"
                }
              ]
            },
            {
              "title": "AI 农业应用",
              "news": [
                {
                  "title": "67 岁农民误信 AI 除草方案，150 亩芝麻苗一夜枯萎",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，安徽滁州 67 岁农户吴大伯按 AI 生成的芝麻田除草除虫方案用无人机全田喷洒后，次日 150 亩芝麻苗全部枯萎，预计损失约 15 万元。农技人员证实 AI 推荐的氟磺胺草醚专用于大豆田，严禁用于芝麻田。涉事 AI 软件客服回应称答复系根据网络公开信息整合生成。专家提醒高风险场景需专业核实。",
                  "link": "https://tech.ifeng.com/c/8vRS1Q0dbIR",
                  "tags": [
                    "AI幻觉",
                    "农业AI"
                  ],
                  "source": "凤凰科技"
                }
              ]
            },
            {
              "title": "Replit",
              "news": [
                {
                  "title": "Replit CEO：AI 让软件工程更「以人为本」",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，Replit CEO Amjad Masad 近日在科技记者 Casey Newton 的播客节目中表示，AI 正在让软件工程变得更加“以人为本”，编码智能体将工程师从高强度敲码中解放出来，转向更具创造力的构思与讨论。他称 Replit 引入 AI 代理后，工程师代码产出在六个月内几乎翻倍，同时保持代码质量，未来人的核心竞争力在于界定问题与创造力。",
                  "link": "https://www.businessinsider.tw/article/5589",
                  "tags": [
                    "AI编程",
                    "行业观点"
                  ],
                  "source": "Business Insider Taiwan"
                }
              ]
            },
            {
              "title": "AI 虚拟人代言",
              "news": [
                {
                  "title": "AI 短剧女主方桃子美瞳广告下架，虚拟人代言引争议",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，AI 短剧《被裁掉的女孩》女主方桃子的美瞳广告视频被下架。该剧全网播放量 2.6 亿，方桃子“60 秒广告报价 25 万 8”曾登上热搜。律师指出 AI 虚拟人不具民事主体资格，不适用“未使用不得代言”规定，但以第一人称宣称亲测体验涉嫌虚假广告，且美瞳属第三类医疗器械，广告不得利用代言人作推荐、证明。",
                  "link": "https://static.cdsb.com/micropub/Articles/202608/c145753ea4e63ad328cf7c7455d14534.html",
                  "tags": [
                    "虚拟人",
                    "广告监管"
                  ],
                  "source": "成都商报"
                }
              ]
            },
            {
              "title": "消费电子价格",
              "news": [
                {
                  "title": "国家统计局：AI 推动消费电子产品迭代升级价格上涨",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，国家统计局公布 7 月 CPI 数据，人工智能推动消费电子产品迭代升级，相关产品需求增加、价格上涨：平板电脑、计算机和移动电话机价格环比分别上涨 11.3%、5.5% 和 1.0%，三者合计影响 CPI 环比上涨约 0.03 个百分点。分析认为前沿技术驱动的消费电子热正成为经济内生增长引擎。",
                  "link": "https://tech.ifeng.com/c/8vRdvp3vpVW",
                  "tags": [
                    "消费电子",
                    "CPI"
                  ],
                  "source": "凤凰科技"
                }
              ]
            },
            {
              "title": "国产算力",
              "news": [
                {
                  "title": "首个全国产 10 万卡 AI 超集群投用，算力「一张网」成形",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，据国家发展改革委消息，首个全国产 10 万卡人工智能超集群日前正式投用，标志我国算力基础设施建设迈入 10 万卡级部署新阶段。该集群部署于国家超算互联网郑州核心节点，实现核心软硬件全国产化，正在支持新材料、创新药、AI 等 26 个领域 300 多种计算任务。全国多个算力节点迎来新一轮扩容。",
                  "link": "https://egs.stcn.com/news/detail/2324693.html",
                  "tags": [
                    "算力基建",
                    "国产算力"
                  ],
                  "source": "证券时报"
                }
              ]
            },
            {
              "title": "AI 内容造假",
              "news": [
                {
                  "title": "马斯克转发 SpaceX 撞月视频系 AI 生成，事后承认是假的",
                  "time": "8月9日消息",
                  "summary": "8月9日消息，一则声称 SpaceX 火箭残骸撞击月球的视频在 X 平台疯传，马斯克转发后承认“这是假的”。事实核查显示，火箭撞月确有其事，但该视频由“观月者俱乐部”账号于今年 4 月发布，系 AI 生成内容。目前尚无卫星直接拍摄到撞击过程的真实视频，AI 造假再次提醒“眼见不一定为实”。",
                  "link": "https://tech.ifeng.com/c/8vS0swOYk3b",
                  "tags": [
                    "AI造假",
                    "内容安全"
                  ],
                  "source": "凤凰科技"
                }
              ]
            },
            {
              "title": "李开复",
              "news": [
                {
                  "title": "李开复：AI 时代人的优势在「右脑」，能做出数据预测不了的事",
                  "time": "8月7日消息",
                  "summary": "8月7日消息，零一万物 CEO 李开复在北京大学国家发展研究院新书交流会上表示，AI 强于人类的“左脑”逻辑运算与数据处理，但尚未具备“右脑”的同理心、审美品味与远见。人类可以做出数据不能预测的事情，如 iPhone、可回收火箭等颠覆性创新。他建议选择“没有数据”的领域和开放式蓝领工作，与人际关系强相关的工作 AI 不能取代。",
                  "link": "https://www.thepaper.cn/newsDetail_forward_33740664",
                  "tags": [
                    "AI就业",
                    "行业观点"
                  ],
                  "source": "21财经"
                }
              ]
            },
            {
              "title": "人形机器人产业",
              "news": [
                {
                  "title": "上半年人形机器人领域新设企业 11.6 万户，同比增长 9.5%",
                  "time": "8月8日消息",
                  "summary": "8月8日消息，市场监管总局数据显示，2026 年上半年全国人形机器人领域新设企业 11.6 万户，同比增长 9.5%；生成式人工智能领域新设企业 5.5 万户，同比增长 28.0%。全国“8 大新兴+9 大未来产业”共新设企业 56.1 万户，人形机器人、生成式 AI 等新赛道加速形成新的经济增长点。",
                  "link": "https://www.cnfin.com/hg-lb/detail/20260808/4452774_1.html",
                  "tags": [
                    "人形机器人",
                    "行业数据"
                  ],
                  "source": "新华财经"
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
          "date": "2026-08-10",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "8.83T tokens",
              "change": "↑570%"
            },
            {
              "model": "Hy3",
              "score": "8.05T tokens",
              "change": "↑67%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.88T tokens",
              "change": "↑19%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "5.39T tokens",
              "change": "↑14%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "4.43T tokens",
              "change": "↑128%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.49T tokens",
              "change": "↑21%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.61T tokens",
              "change": "↑20%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.41T tokens",
              "change": "↑1%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "2.33T tokens",
              "change": "↑446%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.87T tokens",
              "change": "↑101%"
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
