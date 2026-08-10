// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
