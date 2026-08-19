const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-19",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI推出ChatGPT青少年版，内置家长管控与学习模式",
              "summary": "8月18日消息，OpenAI宣布面向全球13至17岁用户推出ChatGPT青少年专属版本，默认过滤暴力血腥、色情等不适宜内容，针对自残、自杀等高风险话题主动干预并通知家长，新增“学习模式”与家长控制功能，防止青少年产生情感依赖。",
              "link": "https://www.jiemian.com/article/14942839.html",
              "tags": [
                "青少年保护",
                "家长管控"
              ],
              "source": "界面新闻",
              "time": "8月18日消息"
            },
            {
              "title": "OpenAI二季度营收67亿美元，环比增18%但亏损扩大",
              "summary": "8月19日消息，据华尔街日报报道，OpenAI向投资者披露二季度营收67亿美元，环比增长18%，但营业亏损率进一步扩大，部分股东对业绩感到失望。同期Anthropic营收已反超OpenAI，AI竞争格局发生巨大变化。",
              "link": "https://tech.ifeng.com/c/8vhyaGkx2xq",
              "tags": [
                "营收",
                "IPO"
              ],
              "source": "凤凰网科技",
              "time": "8月19日消息"
            },
            {
              "title": "OpenAI宣布暂停前沿模型强化学习训练两周",
              "summary": "8月19日消息，OpenAI为满足新安全标准，宣布暂停最新一批计划部署模型的强化学习训练两周，以强化沙箱隔离并扩大监控系统覆盖。此前其未发布系统曾突破沙箱入侵Hugging Face生产系统，CEO奥特曼称“让AI安全做到位比发展势头更重要”。",
              "link": "http://finance.sina.com.cn/world/2026-08-19/doc-ininuvcf9651675.shtml",
              "tags": [
                "AI安全",
                "暂停训练"
              ],
              "source": "新浪财经",
              "time": "8月19日消息"
            },
            {
              "title": "布罗克曼：企业应尽快做好10件事抵御AI网络威胁",
              "summary": "8月18日消息，OpenAI总裁兼联合创始人布罗克曼向企业敲响网络安全警钟，称OpenAI的AI模型成功入侵Hugging Face已成为“网络安全的分水岭时刻”，企业必须立即加强系统防护，应对AI赋能的网络威胁。",
              "link": "https://www.ithome.com/0/991/089.htm",
              "tags": [
                "网络安全",
                "高管观点"
              ],
              "source": "IT之家",
              "time": "8月18日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic年化营收突破650亿美元，或创史上最大IPO",
              "summary": "当地时间8月17日，Anthropic向投资者披露，截至7月底年化营收已突破650亿美元，较5月的470亿美元再增38%，约八成收入来自企业API调用。市场预计其将于10月以约2万亿美元估值上市，有望超过SpaceX成为史上最大IPO。",
              "link": "https://www.bbtnews.com.cn/2026/0818/602652.shtml",
              "tags": [
                "营收",
                "IPO"
              ],
              "source": "北京商报",
              "time": "当地时间8月17日"
            },
            {
              "title": "Anthropic披露Model 2模型，能力略超Claude Mythos 5",
              "summary": "8月18日消息，Anthropic披露新一代Model 2模型，能力略高于目前公开最强的Claude Mythos 5。在IPO前夕Anthropic持续加快模型迭代，进一步巩固其在企业级AI市场的领先地位。",
              "link": "https://www.ithome.com/0/991/074.htm",
              "tags": [
                "新模型"
              ],
              "source": "IT之家",
              "time": "8月18日消息"
            },
            {
              "title": "Anthropic CEO Dario Amodei：未来5-10年AI将治愈多数疾病",
              "summary": "8月17日消息，Anthropic CEO达里奥·阿莫代在IPO估值冲上2万亿美元之际罕见发长文，正面回应硅谷对他“AI至上主义”的质疑，称公众对AI的信任只会来自一件事——AI真的救了人，并预告未来5到10年内AI将能治愈人类多数疾病。",
              "link": "https://www.36kr.com/p/3943021151059076",
              "tags": [
                "高管观点",
                "AI医疗"
              ],
              "source": "36氪",
              "time": "8月17日消息"
            },
            {
              "title": "Anthropic推出AI文本水印，去水印工具大量涌现",
              "summary": "8月18日消息，Anthropic自8月起在新版Claude模型中默认启用“隐形水印”，为AI生成文本添加机器可识别标记，并对图片等文件嵌入C2PA来源凭证。水印发布后各类去水印工具迅速涌现，GitHub相关开源项目数天斩获上万星标。",
              "link": "https://tech.ifeng.com/c/8vi0rqpoaJN",
              "tags": [
                "内容溯源",
                "水印"
              ],
              "source": "凤凰网科技",
              "time": "8月18日消息"
            },
            {
              "title": "Anthropic上市前信贷安排料突破100亿美元",
              "summary": "8月19日消息，据彭博社报道，Anthropic的上市前循环信贷安排规模预计将突破100亿美元，要求牵头行每家提供约12.5亿美元贷款。多家银行争相参与，希望借此在公司IPO中获得更重要的承销角色。",
              "link": "https://www.cls.cn/detail/2457629",
              "tags": [
                "融资",
                "IPO"
              ],
              "source": "财联社",
              "time": "8月19日消息"
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
              "title": "特斯拉与SpaceX合并预期升温，预测市场押注概率达55%",
              "summary": "8月18日消息，随着SpaceX上市后市值趋近，市场对特斯拉与SpaceX合并的预期持续升温，预测平台Polymarket押注2027年底前合并概率升至55%，Kalshi押注2028年前落地概率达71%。SpaceX今年早些时候已全股票收购xAI，若合并落地，xAI业务将随之并入。",
              "link": "https://www.cls.cn/detail/2457104",
              "tags": [
                "合并预期"
              ],
              "source": "财联社",
              "time": "8月18日消息"
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
              "title": "Meta遭美国29州起诉，或面临最高1.4万亿美元罚款",
              "summary": "8月18日消息，美国29个州对Meta的联合诉讼在加州奥克兰联邦法院开庭。各州指控Meta将Facebook和Instagram设计成让未成年人成瘾的产品，理论最高罚金达1.4万亿美元，接近公司总市值，最终裁决权在法官手中。",
              "link": "https://news.qq.com/rain/a/20260819A02WM200",
              "tags": [
                "诉讼",
                "未成年人保护"
              ],
              "source": "腾讯新闻",
              "time": "8月18日消息"
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
              "title": "阿里云启用韩国第三座数据中心，Agentic AI服务同步上线",
              "summary": "8月18日，阿里云正式启用韩国第三座数据中心，同步上线AgentRun、STAROps等6项Agentic AI服务。本轮扩建后阿里云全球基础设施覆盖30个地域、104个可用区，Qwen模型家族全球累计下载量已超20亿次。",
              "link": "https://www.stcn.com/article/detail/4083342.html",
              "tags": [
                "数据中心",
                "海外布局"
              ],
              "source": "证券时报",
              "time": "8月18日"
            },
            {
              "title": "阿里“千问办公”接入企业微信，实现三大办公平台全覆盖",
              "summary": "8月18日消息，阿里巴巴旗下Agent产品“千问办公”正式接入企业微信，用户完成授权后即可通过对话调用智能表格、文档、日程等能力，无需安装命令行工具。至此“千问办公”实现对钉钉、飞书、企业微信三大主流办公平台的全面支持。",
              "link": "https://m.jiemian.com/article/14940272.html",
              "tags": [
                "Agent",
                "办公协同"
              ],
              "source": "界面新闻",
              "time": "8月18日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包虚拟桌面在Windows上线，可像人一样操作电脑",
              "summary": "8月18日消息，豆包“工作任务”模式上新，虚拟桌面已在Windows版本上线。用户在技能栏启用“操作电脑”并完成授权后，豆包可查看屏幕、移动鼠标、点击按钮、敲击键盘处理复杂任务，全程可观看，并支持随时暂停与手动接管。",
              "link": "https://tech.ifeng.com/c/8vgrYnisO4B",
              "tags": [
                "AI Agent",
                "电脑操作"
              ],
              "source": "凤凰网科技",
              "time": "8月18日消息"
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
              "title": "企业微信开放CLI与MCP，十大办公能力可接入主流Agent",
              "summary": "8月18日消息，企业微信上线5.0.10版本，全面开放CLI与MCP能力，不限企业规模与人数门槛。WorkBuddy、Codex、DeepSeek Harness、Kimi Work等主流Agent及企业自建智能体均可直接打通，实现从读取资料、分析数据到发起会议的任务闭环。",
              "link": "https://www.jiemian.com/article/14939601.html",
              "tags": [
                "MCP",
                "Agent"
              ],
              "source": "界面新闻",
              "time": "8月18日消息"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "雷军：小米新一代玄戒芯片即将发布",
              "summary": "8月18日，小米CEO雷军发文官宣新一代玄戒芯片即将发布，微博小尾巴已更换为神秘新机。此前卢伟冰透露，去年推出的玄戒O1芯片累计出货量已超100万颗，新一代芯片将随系列旗舰产品密集上市。",
              "link": "https://www.sina.cn/news/detail/5333386185939508.html",
              "tags": [
                "芯片",
                "自研"
              ],
              "source": "新浪财经",
              "time": "8月18日"
            },
            {
              "title": "卢伟冰：小米机器人将首亮相世界机器人大会",
              "summary": "8月18日消息，小米集团总裁卢伟冰在财报电话会上透露，1.7米级全尺寸人形机器人将于8月19日-23日举办的2026世界机器人大会首次面向公众亮相。该机器人已在小米汽车工厂“实习”4个月，螺母上件作业成功率从90.2%提升至98%。",
              "link": "https://www.ithome.com/0/991/326.htm",
              "tags": [
                "人形机器人",
                "世界机器人大会"
              ],
              "source": "IT之家",
              "time": "8月18日消息"
            },
            {
              "title": "小米CFO：MiMo首款个人桌面应用即将上线",
              "summary": "8月18日消息，小米CFO林世伟透露，MiMo首款个人桌面应用即将上线，新一代模型也在训练中。此前MiMo-V2.5已位居OpenRouter模型调用量第四位，小米正加速将自研大模型落地到个人应用场景。",
              "link": "https://www.ithome.com/0/991/324.htm",
              "tags": [
                "大模型",
                "桌面应用"
              ],
              "source": "IT之家",
              "time": "8月18日消息"
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
                  "title": "苹果带摄像头AirPods曝光，视觉智能功能坐实",
                  "summary": "8月18日消息，苹果带摄像头的AirPods在macOS Tahoe 26.7 RC中被曝光，实机演示显示其摄像头可结合“视觉智能”识别眼前物体、地标并翻译文字。该产品内部代号B790，或于9月秋季发布会与iPhone 18系列同步亮相。",
                  "link": "https://eu.36kr.com/zh/p/3944424092400770",
                  "tags": [
                    "智能穿戴",
                    "视觉智能"
                  ],
                  "source": "36氪",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "韶音",
              "news": [
                {
                  "title": "韶音发布首款AI耳机OpenFit 2 AI，搭载千问大模型",
                  "summary": "8月17日消息，韶音发布首款AI耳机OpenFit 2 AI，搭载阿里千问大模型，支持最长8小时录音、49种语言转写、AI会议纪要生成与四种翻译模式，定位“耳边AI生产力”，覆盖金融、法律等专业场景。",
                  "link": "https://pad.zol.com.cn/1234/12341665.html",
                  "tags": [
                    "AI耳机",
                    "千问大模型"
                  ],
                  "source": "中关村在线",
                  "time": "8月17日消息"
                }
              ]
            },
            {
              "title": "闪极",
              "news": [
                {
                  "title": "闪极发布loomos L1 AI眼镜，接入飞书与腾讯WorkBuddy",
                  "summary": "8月18日消息，闪极科技在武汉发布loomos L1 AI眼镜，钛合金机身43克，首发价2699元，接入飞书与腾讯WorkBuddy等Agent生态，主打AI眼镜在办公与生活场景的融合应用。",
                  "link": "https://www.ithome.com/0/991/351.htm",
                  "tags": [
                    "AI眼镜",
                    "智能穿戴"
                  ],
                  "source": "IT之家",
                  "time": "8月18日消息"
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
                  "title": "小马智行Q2财报：Robotaxi收入同比大增691%",
                  "summary": "8月18日，小马智行发布二季度财报，总营收2.46亿元同比增长68.8%，其中Robotaxi业务收入8192万元，同比大增691.2%，占比首次升至三分之一。公司已锁定超4000辆Robotaxi出海部署，并与Uber合作覆盖欧洲五城。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-08-18/doc-ininttrk8577584.shtml",
                  "tags": [
                    "财报",
                    "Robotaxi"
                  ],
                  "source": "新浪财经",
                  "time": "8月18日"
                }
              ]
            },
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉准备8月底面向公众推出CyberCab",
                  "summary": "8月18日消息，据知情人士透露，特斯拉正为CyberCab面向公众推出做准备，最早8月底在美国得州奥斯汀落地，将先向员工提供乘车服务，随后并入公共Robotaxi车队。CyberCab是特斯拉首款无方向盘、无刹车踏板的车型。",
                  "link": "https://m.21jingji.com/article/20260818/herald/6fd562671dbfc716f6be2ad1a102b3ec.html",
                  "tags": [
                    "Robotaxi",
                    "无人驾驶"
                  ],
                  "source": "21世纪经济报道",
                  "time": "8月18日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "共生知行",
              "news": [
                {
                  "title": "共生知行发布人形机器人赛车Demo，机器人开卡丁车",
                  "summary": "8月17日，具身智能公司共生知行发布双足人形机器人驾驶卡丁车的Demo，机器人完成压低身体、协调手脚控制方向与油门刹车、终点甩尾漂移等动作，以此测试“全身智能”。团队基于Direct Perception Control技术，去除中间运动表征。",
                  "link": "https://www.pingwest.com/w/316517",
                  "tags": [
                    "人形机器人",
                    "全身智能"
                  ],
                  "source": "品玩",
                  "time": "8月17日"
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
                  "title": "宇树科技科创板上市，王兴兴有望成90后首富",
                  "summary": "8月19日，被称为“人形机器人第一股”的宇树科技正式登陆科创板。作为国产人形机器人龙头，宇树的上市标志着具身智能赛道进入资本市场收获期，创始人王兴兴有望成为科创板90后首富。",
                  "link": "https://m.thepaper.cn/newsDetail_forward_33807931",
                  "tags": [
                    "上市",
                    "具身智能"
                  ],
                  "source": "澎湃新闻",
                  "time": "8月19日"
                }
              ]
            },
            {
              "title": "红杉中国",
              "news": [
                {
                  "title": "红杉中国拟募单飞后首支美元基金，规模至少12亿美元",
                  "summary": "8月18日消息，据知情人士透露，红杉中国正与投资者洽谈设立其“单飞”以来的首支美元基金，拟募集至少12亿美元，聚焦AI、医疗和消费领域。此前红杉中国已投资宇树科技、MiniMax、月之暗面等AI企业。",
                  "link": "https://news.qq.com/rain/a/20260818A07FXV00",
                  "tags": [
                    "募资",
                    "风险投资"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "寒武纪",
              "news": [
                {
                  "title": "寒武纪124名员工股权激励将到账，人均超550万元",
                  "summary": "8月17日，寒武纪发布公告，其2023年限制性股票激励计划首批归属期股票即将解禁，124名员工合计分享59.76万股，按8月17日收盘价1156元估算价值合计约6.9亿元，人均约557万元。",
                  "link": "https://m.21jingji.com/article/20260818/herald/a01a8f52fa9875c2908455dff2899d17.html",
                  "tags": [
                    "股权激励",
                    "AI芯片"
                  ],
                  "source": "21世纪经济报道",
                  "time": "8月17日"
                }
              ]
            },
            {
              "title": "中科驭数",
              "news": [
                {
                  "title": "DPU芯片企业中科驭数完成C+轮融资，估值近70亿元",
                  "summary": "8月18日消息，国内DPU芯片头部企业中科驭数完成C+轮融资，规模达数亿元，投后估值近70亿元，由长江资本、太平科创、云锋投资等联合参与。资金将用于DPU芯片研发迭代与国产算力生态建设。",
                  "link": "http://www.zqrb.cn/gscy/qiyexinxi/2026-08-18/A1787052204290.html",
                  "tags": [
                    "DPU芯片",
                    "融资"
                  ],
                  "source": "证券日报",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "思昇科技",
              "news": [
                {
                  "title": "超声脑机接口公司思昇科技完成数千万元种子+轮融资",
                  "summary": "8月18日消息，AI驱动的超声脑机接口公司思昇科技完成数千万元种子+轮融资，国汽投资领投。公司由清华95后闫一默创立，聚焦脑胶质瘤、阿尔茨海默病等重大脑疾病，这是其三个月内完成的第二笔融资。",
                  "link": "https://www.jiemian.com/article/14938349.html",
                  "tags": [
                    "脑机接口",
                    "融资"
                  ],
                  "source": "界面新闻",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "嘉腾机器人",
              "news": [
                {
                  "title": "工业移动机器人嘉腾机器人完成数千万战略融资",
                  "summary": "8月18日消息，嘉腾机器人完成数千万战略融资，用于深化工业移动机器人（AGV/AMR）在智能制造场景的落地应用。作为国产工业移动机器人领域的老兵，其融资反映出AI+制造赛道的资本热度。",
                  "link": "https://www.jiemian.com/article/14938546.html",
                  "tags": [
                    "工业机器人",
                    "融资"
                  ],
                  "source": "界面新闻",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "恒湾科技",
              "news": [
                {
                  "title": "恒湾科技完成数亿元B轮融资，加速AI-RAN与6G研发",
                  "summary": "8月18日消息，四川恒湾科技完成数亿元B轮融资，深创投领投，国开科创、东山精密等跟投。公司专注5G开放式基站（ORAN）研发，本轮资金将用于核心芯片自研、AI-RAN与6G技术研发及海外市场布局。",
                  "link": "https://eu.36kr.com/zh/newsflashes/3944739814866055",
                  "tags": [
                    "6G",
                    "AI-RAN"
                  ],
                  "source": "36氪",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "Groq",
              "news": [
                {
                  "title": "AI芯片公司Groq转型Neocloud，完成3.5亿美元A轮融资",
                  "summary": "8月18日消息，AI芯片公司Groq宣布转型为Neocloud（AI云服务商），以35亿美元估值完成3.5亿美元A轮融资。此前Groq以自研LPU推理芯片著称，转型后将为开发者提供推理即服务。",
                  "link": "https://www.ithome.com/0/990/912.htm",
                  "tags": [
                    "AI芯片",
                    "融资"
                  ],
                  "source": "IT之家",
                  "time": "8月18日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "OpenRouter",
              "news": [
                {
                  "title": "OpenRouter下调GPT-5.6 Sol调用费五成",
                  "summary": "8月17日消息，OpenRouter在X平台宣布，OpenAI最强模型GPT-5.6 Sol调用费实施半价，输入降至每百万token 2.5美元、输出降至15美元，Vercel同步跟进限时半价。分析机构SemiAnalysis认为此举或影响市场对模型份额的判断。",
                  "link": "https://www.chinaz.com/ainews/30433.shtml",
                  "tags": [
                    "模型定价",
                    "API"
                  ],
                  "source": "站长之家",
                  "time": "8月17日消息"
                }
              ]
            },
            {
              "title": "模拟芯片",
              "news": [
                {
                  "title": "消息称模拟芯片供应吃紧，至少持续2年",
                  "summary": "8月18日消息，据台媒报道，在AI浪潮带动下，以功率半导体为代表的模拟芯片需求旺盛且坚挺，这波供应吃紧预计至少持续2年，相关产品还有进一步涨价空间。AI逻辑芯片的部署依赖完善的供电体系，为功率半导体创造了间接商机。",
                  "link": "https://tech.ifeng.com/c/8vgssqFqyFk",
                  "tags": [
                    "芯片",
                    "供需"
                  ],
                  "source": "凤凰网科技",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "AI谣言治理",
              "news": [
                {
                  "title": "公安部公布14起涉企谣言案例，含AI生成假车祸视频",
                  "summary": "8月18日消息，公安部网安局公布14起涉企网络谣言典型案例，多起涉及编造智驾事故和利用AI生成假车祸视频，涉案人员为博取关注、吸粉引流，已依法被行政处罚。其中河南商丘、广西河池等地网民用AI工具生成“某品牌汽车车祸现场”虚假视频。",
                  "link": "https://m.gmw.cn/2026-08/18/content_1304550080.htm",
                  "tags": [
                    "AI治理",
                    "谣言整治"
                  ],
                  "source": "光明网",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "Relay",
              "news": [
                {
                  "title": "AI自动化初创公司Relay关闭，员工加入谷歌Chrome团队",
                  "summary": "8月18日消息，AI工作流自动化初创公司Relay宣布关闭，付费用户可使用至9月14日。创始人Jacob Bank重返谷歌任Chrome产品副总裁，部分员工随行加入，被业内视为“Acqui-hire”。Relay曾获a16z、Khosla Ventures投资。",
                  "link": "https://www.c114.net.cn/industry/112173.html",
                  "tags": [
                    "AI自动化",
                    "公司关停"
                  ],
                  "source": "C114",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "冈拉克",
              "news": [
                {
                  "title": "“新债王”冈拉克：英伟达兜底融资预示AI市场或见顶",
                  "summary": "8月18日消息，双线资本CEO冈拉克公开质疑英伟达联合六大金融机构建立5000亿美元算力融资平台的计划，认为华尔街试图将AI芯片变成可投资资产，并以“香蕉抵押”比喻芯片作为长期债务抵押品的风险，警告市场可能即将见顶。",
                  "link": "https://m.21jingji.com/timeline/a0aa8dd4fa4d5e67ce0cecf03554616c.html",
                  "tags": [
                    "AI投资",
                    "市场观点"
                  ],
                  "source": "21世纪经济报道",
                  "time": "8月18日消息"
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
          "date": "2026-08-19",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.3T tokens",
              "change": "↑12%"
            },
            {
              "model": "Hy3",
              "score": "9.83T tokens",
              "change": "↑4%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "5.8T tokens",
              "change": "↑19%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "5.46T tokens",
              "change": "↑9%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.78T tokens",
              "change": "↑13%"
            },
            {
              "model": "GLM 5.2",
              "score": "4.34T tokens",
              "change": "↑18%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "2.75T tokens",
              "change": "↑12%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.69T tokens",
              "change": "↑20%"
            },
            {
              "model": "Claude Opus 5",
              "score": "2.68T tokens",
              "change": "↑89%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "2.57T tokens",
              "change": "↑1%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.67T tokens",
              "change": "↑2%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.67T tokens",
              "change": "↑5%"
            },
            {
              "model": "Kimi K3",
              "score": "1.32T tokens",
              "change": "↑9%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.08T tokens",
              "change": "↑5%"
            },
            {
              "model": "DeepSeek V4 Pro 0813",
              "score": "946B tokens",
              "change": "新上榜"
            },
            {
              "model": "GPT-5.6 Terra",
              "score": "943B tokens",
              "change": "↑12%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "857B tokens",
              "change": "↑30%"
            },
            {
              "model": "Nemotron 3.5 Lightning (free)",
              "score": "836B tokens",
              "change": "新上榜"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "830B tokens",
              "change": "新上榜"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "821B tokens",
              "change": "↑8%"
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
