const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-07",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "rgba(16,163,127,0.08)",
          "initial": "O",
          "news": []
        },
        {
          "name": "Anthropic",
          "color": "#D4A574",
          "softBg": "rgba(212,165,116,0.08)",
          "initial": "A",
          "news": [
            {
              "title": "Anthropic最新论文发现Claude内部存在心理工作空间J-space",
              "summary": "当地时间7月6日，Anthropic发布论文称在Claude内部发现一组在训练过程中自然涌现的神经模式集合J-space，并非人为设计。研究团队开发J-lens方法可直接读取Claude的推理过程。关闭J-space后Claude多步推理能力几乎归零。Google DeepMind已在开源模型上独立复现核心结论。",
              "link": "https://news.qq.com/rain/a/20260707A0232700",
              "tags": [
                "可解释性",
                "AI安全",
                "模型对齐"
              ],
              "source": "腾讯新闻",
              "time": "当地时间7月6日"
            }
          ]
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "rgba(66,133,244,0.08)",
          "initial": "G",
          "news": []
        },
        {
          "name": "xAI",
          "color": "#1DA1F2",
          "softBg": "rgba(29,161,242,0.08)",
          "initial": "X",
          "news": [
            {
              "title": "马斯克xAI正式更名为SpaceXAI，全新logo同步上线",
              "summary": "7月7日，马斯克创立的AI公司xAI官宣正式更名为SpaceXAI，同步更换标识和X平台用户名。今年2月xAI被SpaceX收购，5月马斯克宣布xAI将撤销独立公司身份并入SpaceX。SpaceX在6月完成IPO（融资750亿美元），2025年AI领域资本开支达127亿美元，计划最早2028年部署AI算力卫星。",
              "link": "https://m.ithome.com/html/973318.htm",
              "tags": [
                "品牌更名",
                "SpaceX",
                "xAI"
              ],
              "source": "IT之家",
              "time": "7月7日"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "color": "#76B900",
          "softBg": "rgba(118,185,0,0.08)",
          "initial": "N",
          "news": [
            {
              "title": "英伟达回应Kyber NVL144 AI服务器架构延后传闻：路线图未变",
              "summary": "7月7日消息，研究机构SemiAnalysis爆料英伟达下一代AI服务器架构Kyber NVL144因PCB制造工艺遭挑战，将延迟超12个月至2028年推出。亚洲PCB板块股价应声重挫。英伟达随后书面声明回应称路线图没有改变。替代方案NVL72x2已因客户反对取消。",
              "link": "https://finance.eastmoney.com/a/202607073795525096.html",
              "tags": [
                "AI服务器",
                "英伟达",
                "芯片"
              ],
              "source": "东方财富",
              "time": "7月7日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "color": "#1877F2",
          "softBg": "rgba(24,119,242,0.08)",
          "initial": "M",
          "news": []
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "color": "#FF6A00",
          "softBg": "rgba(255,106,0,0.08)",
          "initial": "A",
          "news": [
            {
              "title": "阿里千问升级实时语音识别模型Fun-ASR-Realtime，支持16种方言30种语言",
              "summary": "7月6日，阿里千问正式升级实时语音识别大模型Fun-ASR-Realtime，首字延迟控制在百毫秒级别，识别准确率接近离线模型水平，支持16种方言和30种语言。API已上线阿里云百炼平台。离线版Fun-ASR-Flash在Artificial Analysis上字错率仅1.7%，全球第一。",
              "link": "https://www.ithome.com/0/973/062.htm",
              "tags": [
                "语音识别",
                "千问",
                "多语言"
              ],
              "source": "IT之家",
              "time": "7月6日"
            },
            {
              "title": "沙利文报告：阿里云全栈AI云服务市场份额40.1%，超第二至第四名总和",
              "summary": "7月6日，国际咨询机构沙利文发布报告显示2025年中国IaaS+PaaS+MaaS总市场规模达595.9亿元。阿里云以239亿元收入占据40.1%市场份额位列第一，超过第二至第四名总和。报告指出云的主要消费者正从人变为Agent，进入Agentic Cloud时代。",
              "link": "https://36kr.com/newsflashes/3883658638405896",
              "tags": [
                "市场份额",
                "阿里云",
                "AI云服务"
              ],
              "source": "36氪",
              "time": "7月6日"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#FF5733",
          "softBg": "rgba(255,87,51,0.08)",
          "initial": "B",
          "news": [
            {
              "title": "豆包应用生成功能已停止服务，智能体功能将于7月15日下线",
              "summary": "7月6日消息，继豆包宣布全面下线智能体功能后，其应用生成功能已于5月31日率先停止服务。用户仍可查看、复制和下载历史创建的应用，但无法新建或更新。豆包正持续进行产品功能调整和精简，先后下线多项非核心功能。",
              "link": "https://news.qq.com/rain/a/20260706A04Y7M00",
              "tags": [
                "豆包",
                "功能调整",
                "产品精简"
              ],
              "source": "腾讯新闻",
              "time": "7月6日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4D6BFE",
          "softBg": "rgba(77,107,254,0.08)",
          "initial": "D",
          "news": []
        },
        {
          "name": "腾讯",
          "color": "#00A4FF",
          "softBg": "rgba(0,164,255,0.08)",
          "initial": "T",
          "news": [
            {
              "title": "腾讯混元Hy3正式发布，Agent能力显著提升，API输入价降至1元/百万Token",
              "summary": "7月6日，腾讯混元Hy3正式发布并开源。采用MoE架构，总参数295B、激活参数21B，支持256K上下文。幻觉率从12.5%降至5.4%，WorkBuddy任务解决率从72%跃升至90%。API已在腾讯云TokenHub上线，输入价格仅1元/百万Token。Hy3已接入元宝、WorkBuddy、ima等多项业务。",
              "link": "https://www.tencent.com/zh-cn/articles/2202386.html",
              "tags": [
                "大模型",
                "Hy3",
                "腾讯混元"
              ],
              "source": "腾讯",
              "time": "7月6日"
            },
            {
              "title": "企业微信联合出门问问、科大讯飞发布AI录音硬件，支持声纹识别和智能摘要",
              "summary": "7月6日，企业微信与出门问问、科大讯飞等硬件伙伴联合推出AI录音设备。出门问问TicNote合作款支持声纹识别区分发言人、自动生成会议摘要和待办事项，连续录音超32小时，已深度打通企业微信记录面聊功能。企业微信目前已服务1400万家企业组织。",
              "link": "https://www.ithome.com/0/972/991.htm",
              "tags": [
                "AI硬件",
                "企业微信",
                "智能办公"
              ],
              "source": "IT之家",
              "time": "7月6日"
            }
          ]
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "rgba(255,105,0,0.08)",
          "initial": "M",
          "news": []
        },
        {
          "name": "智谱AI",
          "color": "#667EEA",
          "softBg": "rgba(102,126,234,0.08)",
          "initial": "Z",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#8B5CF6",
          "softBg": "rgba(139,92,246,0.08)",
          "initial": "Y",
          "news": [
            {
              "title": "Kimi K2.7 Code接入GitHub Copilot，为首个开源模型登陆该平台",
              "summary": "7月6日，Kimi开放平台官宣GitHub Copilot模型选择器已上线Kimi K2.7 Code，这是Copilot首次接入开源模型。该模型采用MoE架构总参数1万亿、支持256K上下文，平均token消耗减少30%。首批面向Copilot Pro、Pro+和Max订阅用户开放。微软财报显示GitHub Copilot已积累超2000万用户。",
              "link": "https://www.53ai.com/news/OpenSourceLLM/2026070648196.html",
              "tags": [
                "AI编程",
                "开源模型",
                "Kimi"
              ],
              "source": "53AI",
              "time": "7月6日"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#CF0A2C",
          "softBg": "rgba(207,10,44,0.08)",
          "initial": "H",
          "news": [
            {
              "title": "华为Mate 90系列有望搭载基于韬定律的新麒麟芯片，秋季发布",
              "summary": "7月6日，据科创板报从知情人士处获悉，将于今年秋季发布的华为Mate 90系列计划搭载基于韬定律的新麒麟芯片。该芯片将率先采用逻辑折叠技术，晶体管密度提升53.5%达238MTr/mm2，能效提升41%。韬定律由华为何庭波于5月提出，以系统性降低时间常数t为核心绕开先进光刻机限制。",
              "link": "https://36kr.com/newsflashes/3883711499137283",
              "tags": [
                "麒麟芯片",
                "韬定律",
                "华为"
              ],
              "source": "36氪",
              "time": "7月6日"
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
              "title": "苹果",
              "news": [
                {
                  "title": "苹果与博通延长AI定制芯片合作至2031年，共同开发ASIC",
                  "summary": "7月6日，博通向SEC提交文件宣布与苹果签署多年期协议，将技术合作关系延长至2031年，将为苹果多代产品开发并供应定制ASIC芯片。此次合作从传统射频组件向AI定制芯片拓展，与苹果代号Baltra的AI服务器处理器项目高度吻合。博通在定制AI芯片市场持有超70%份额。",
                  "link": "https://finance.eastmoney.com/a/202607063795502250.html",
                  "tags": [
                    "AI芯片",
                    "苹果",
                    "博通"
                  ],
                  "source": "东方财富",
                  "time": "7月6日"
                },
                {
                  "title": "苹果iOS 27家庭App新增AI摄像头功能，需每月68元iCloud+订阅",
                  "summary": "7月7日，iOS 27第三个开发者预览版发布，内置家庭App新增Apple Intelligence摄像头能力：自动基于HomeKit安全视频异动生成文字摘要，多路画面整合全局活动总览，支持自然语言检索录像内容。该功能需订阅2TB及以上iCloud+套餐（国行68元/月）。",
                  "link": "https://www.ithome.com/0/973/316.htm",
                  "tags": [
                    "AI摄像头",
                    "iOS 27",
                    "Apple Intelligence"
                  ],
                  "source": "IT之家",
                  "time": "7月7日"
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "三星电子Q2营业利润暴增1810%，AI存储芯片超级周期驱动",
                  "summary": "7月7日，三星电子公布Q2业绩预告：销售额171万亿韩元同比增129%，营业利润89.4万亿韩元同比暴增1810%，超市场预期。AI热潮下存储芯片价格飙升，Q2 DRAM均价环比涨44%、NAND涨53%。三星半导体负责人称今年全年营业利润将超越公司进入半导体业务40余年利润总和。",
                  "link": "https://finance.eastmoney.com/a/202607073795748155.html",
                  "tags": [
                    "存储芯片",
                    "AI驱动",
                    "三星"
                  ],
                  "source": "东方财富",
                  "time": "7月7日"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软Teams加强第三方AI智能体权限管理，需组织者审批方可入会",
                  "summary": "7月6日，微软宣布为Teams会议推出全新AI机器人管理策略，新增管理外部机器人及会议访问权限策略默认启用。第三方AI机器人尝试加入会议时将被先置于等候室，须经会议组织者确认批准后方可入会。新机制将逐步替代原有CAPTCHA验证，以降低未授权AI工具带来的信息安全风险。",
                  "link": "https://www.ithome.com/0/973/146.htm",
                  "tags": [
                    "AI安全",
                    "Teams",
                    "智能体"
                  ],
                  "source": "IT之家",
                  "time": "7月6日"
                }
              ]
            },
            {
              "title": "英特尔",
              "news": [
                {
                  "title": "英特尔确认上调CPU售价，服务器芯片最高涨超1300美元",
                  "summary": "7月6日，英特尔官方确认上调部分CPU建议零售价。消费级Core Ultra 7 270K Plus等型号上涨30-50美元，服务器级Xeon 6系列最高涨幅超1300美元。英特尔称价格调整基于对供应链及相关成本的持续监控。分析指出AI需求爆发导致先进产能紧张，终端PC价格预计短期内保持高位。",
                  "link": "https://m.21jingji.com/article/20260706/herald/145ec837b2108beec923e4d09d84aab7.html",
                  "tags": [
                    "CPU涨价",
                    "英特尔",
                    "芯片"
                  ],
                  "source": "21财经",
                  "time": "7月6日"
                }
              ]
            },
            {
              "title": "美团",
              "news": [
                {
                  "title": "美团开源万亿参数模型LongCat-2.0，SWE-bench跑分超越GPT-5.5",
                  "summary": "7月6日，美团正式开源万亿参数大模型LongCat-2.0。采用MoE架构总参数1.6T，支持1M超长上下文，在超5万张国产AI芯片集群上完成35万亿token预训练，为业界首个全流程使用国产算力的万亿参数模型。SWE-bench Pro得分59.5超越GPT-5.5（58.6）。华为昇腾、摩尔线程等国产芯片厂商同步适配。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-07-06/doc-inifvzfz1886264.shtml",
                  "tags": [
                    "开源",
                    "万亿参数",
                    "国产算力"
                  ],
                  "source": "36氪",
                  "time": "7月6日"
                }
              ]
            },
            {
              "title": "Deep Code",
              "news": [
                {
                  "title": "Deep Code开源AI编程助手上线，专为DeepSeek-V4模型适配",
                  "summary": "7月6日，一款名为Deep Code的开源终端AI编程助手被DeepSeek官方API文档收录。该工具专为DeepSeek-V4系列模型适配，支持深度思考、推理强度控制、Agent Skills及MCP集成，可视为DeepSeek生态中的Claude Code替代品。开发者可在终端CLI或VS Code中使用。",
                  "link": "https://m.ithome.com/html/972910.htm",
                  "tags": [
                    "AI编程",
                    "开源",
                    "DeepSeek"
                  ],
                  "source": "IT之家",
                  "time": "7月6日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "优必选",
              "news": [
                {
                  "title": "优必选回应99万元仿生机器人续航争议：2-4小时是行业普遍水平",
                  "summary": "7月6日，针对顶配99万元仿生机器人U1 Ultra续航仅2-4小时的质疑，优必选回应称全尺寸人形机器人续航2-4小时为行业普遍情况，U1 Ultra面向商业场景而非个人消费市场，产品定位为情感陪伴而非伴侣。公司已成立人工智能与机器人科技伦理委员会。U1系列订单已累计突破13,361台。",
                  "link": "https://www.thepaper.cn/newsDetail_forward_33526038",
                  "tags": [
                    "人形机器人",
                    "优必选",
                    "续航争议"
                  ],
                  "source": "澎湃新闻",
                  "time": "7月6日"
                }
              ]
            },
            {
              "title": "爱仕达/智元机器人",
              "news": [
                {
                  "title": "爱仕达与智元机器人签署战略合作协议，五大方向深度合作",
                  "summary": "7月6日，爱仕达下属人形机器人子公司与智元机器人正式签署战略合作协议。双方将在采购订单与产品交付、具身智能机器人委托制造、供应链合作、技术支持及场景化赋能、股权投资及合资公司设立五大方向开展合作。爱仕达将承接智元子公司四足机器人订单。消息发布后爱仕达股价强势涨停。",
                  "link": "https://www.jiemian.com/article/14708136.html",
                  "tags": [
                    "人形机器人",
                    "战略合作",
                    "具身智能"
                  ],
                  "source": "界面新闻",
                  "time": "7月6日"
                }
              ]
            },
            {
              "title": "佑驾创新",
              "news": [
                {
                  "title": "佑驾创新发布四轮足机器人，无人车+机器人打通末端物流",
                  "summary": "7月6日，佑驾创新正式发布Combo全链路无人物流闭环方案，旗下曜行动力打造的四轮足式机器人同步亮相。机器人采用轮足一体化设计，最大负载30kg，可自主切换足式步态攀爬30cm楼梯和45度斜坡，与小竹系列无人车协同完成最后一米末端配送。",
                  "link": "https://news.qq.com/rain/a/20260706A0523500",
                  "tags": [
                    "四轮足机器人",
                    "末端物流",
                    "佑驾创新"
                  ],
                  "source": "腾讯新闻",
                  "time": "7月6日"
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "宇树科技",
              "news": [
                {
                  "title": "宇树科技科创板IPO注册生效，有望成A股人形机器人第一股",
                  "summary": "7月6日，上交所官网显示宇树科技科创板IPO审核状态变更为注册生效。从3月20日获受理到注册生效仅104天，创科创板最快纪录。拟募资42.02亿元，其中智能机器人模型研发投入20.22亿元。2025年人形机器人出货量超5500台位居全球第一，营收16.99亿元同比增332%。",
                  "link": "https://finance.sina.cn/2026-07-06/detail-inifwscq1803880.d.html",
                  "tags": [
                    "IPO",
                    "人形机器人",
                    "科创板"
                  ],
                  "source": "新浪财经",
                  "time": "7月6日"
                }
              ]
            },
            {
              "title": "星动纪元",
              "news": [
                {
                  "title": "星动纪元完成10亿元融资，两个月累计融资近25亿元",
                  "summary": "7月6日，具身智能公司星动纪元宣布完成新一轮10亿元B++轮融资。诚通基金领投，江西国控、国元股权、渝富中新基金等多家国资参与，两个月内累计融资近25亿元。公司由清华大学交叉信息研究院孵化，已在物流场景实现机器人落地作业。",
                  "link": "https://finance.eastmoney.com/a/202607063794409340.html",
                  "tags": [
                    "融资",
                    "具身智能",
                    "星动纪元"
                  ],
                  "source": "东方财富",
                  "time": "7月6日"
                }
              ]
            },
            {
              "title": "逸文科技",
              "news": [
                {
                  "title": "逸文科技完成1.5亿美元Pre-B轮融资，跻身智能眼镜独角兽",
                  "summary": "7月6日，深圳智能眼镜创业公司逸文科技完成1.5亿美元Pre-B轮融资，投后估值超10亿美元。美团龙珠和美团战投领投，腾讯跟投。逸文科技坚持无摄像头、无扬声器的做减法产品路线，G2眼镜仅30余克周活跃率超90%，在40多个国家和地区销售并已实现盈利。",
                  "link": "https://finance.eastmoney.com/a/202607063795284458.html",
                  "tags": [
                    "融资",
                    "智能眼镜",
                    "独角兽"
                  ],
                  "source": "东方财富",
                  "time": "7月6日"
                }
              ]
            },
            {
              "title": "geoSurge",
              "news": [
                {
                  "title": "英国AI公司geoSurge完成1200万美元种子轮融资，专注AI可见性",
                  "summary": "7月6日，伦敦AI公司geoSurge宣布完成1200万美元超额认购种子轮融资，由AlbionVC领投。该公司专注于AI可见性领域，帮助品牌在ChatGPT、Gemini、Claude等生成式AI系统中塑造呈现方式，产品包括排名监测、模型行为分析和品牌语料库优化。投资方包含来自Google DeepMind和Microsoft AI的天使投资人。",
                  "link": "https://36kr.com/newsflashes/3883918767665408",
                  "tags": [
                    "融资",
                    "AI可见性",
                    "GEO"
                  ],
                  "source": "36氪",
                  "time": "7月6日"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "AI原生企业研究",
              "news": [
                {
                  "title": "哈佛研究：AI原生初创公司规模缩小25%，初级岗位正在消失",
                  "summary": "7月5日消息，哈佛商学院与欧洲工商管理学院最新研究显示，AI原生初创公司平均规模比非AI同类小25%，工程师比例高13%，初级员工比例下降约15%，资深员工比例高20%。产品路径（AI直接嵌入产品替代人力团队）是团队缩小的主因。研究担忧AI将就业机会进一步集中在已具备高学历和技术的群体中。",
                  "link": "https://m.ithome.com/html/972807.htm",
                  "tags": [
                    "AI就业",
                    "初创公司",
                    "职场变革"
                  ],
                  "source": "IT之家",
                  "time": "7月5日消息"
                }
              ]
            },
            {
              "title": "AI发现超导体",
              "news": [
                {
                  "title": "芬兰阿尔托大学利用AI发现两种新型超导体，为寻找室温超导提供新路径",
                  "summary": "7月6日，新华社报道芬兰阿尔托大学参与的国际研究团队利用机器学习从海量材料组合中筛选出两种新型超导体，均具有笼目晶格结构，结合量子理论计算和实验验证，实现了AI筛选到理论预测再到实验验证的完整流程。该方法可将可筛选材料数量扩大至数十亿级别，有望大幅提升新型超导体的发现效率。",
                  "link": "http://www.xinhuanet.com/liangzi/20260701/2d91e0072f624d9fabb8a10bff2fa888/c.html",
                  "tags": [
                    "AI科研",
                    "超导体",
                    "材料发现"
                  ],
                  "source": "新华社",
                  "time": "7月6日"
                }
              ]
            },
            {
              "title": "上海脑机接口",
              "news": [
                {
                  "title": "上海脑机接口融资事件数量占全国近60%，企业数量占1/3",
                  "summary": "7月6日，上海市科委主任骆大进透露上半年上海脑机接口融资事件数量占全国近60%，披露融资金额占约40%。全市集聚脑机接口企业占全国1/3，同时集聚全国半数中性原子量子计算整机企业。上海重点跟踪战略前沿领域已增至20个，打造了4个市级未来产业集聚区。",
                  "link": "https://www.cls.cn/detail/2417840",
                  "tags": [
                    "脑机接口",
                    "上海",
                    "前沿科技"
                  ],
                  "source": "财联社",
                  "time": "7月6日"
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
          "date": "2026-07-02",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-opus-4-6",
              "score": "1499",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1494",
              "change": "+4"
            },
            {
              "model": "muse-spark",
              "score": "1487",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1481",
              "change": "+5"
            },
            {
              "model": "gemini-3.5-flash",
              "score": "1479",
              "change": "+6"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1478",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-8",
              "score": "1477",
              "change": "+6"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "qwen3.7-max-preview",
              "score": "1475",
              "change": "+10"
            },
            {
              "model": "gpt-5.5",
              "score": "1475",
              "change": "+5"
            },
            {
              "model": "grok-4.20-beta-0309-reasoning",
              "score": "1475",
              "change": "+4"
            },
            {
              "model": "grok-4.20-beta1",
              "score": "1474",
              "change": "+5"
            },
            {
              "model": "gemini-3-flash",
              "score": "1473",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-5-20251101-thinking-32k",
              "score": "1473",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-07-07",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash",
              "score": "5.36T tokens",
              "change": "up14%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "4.43T tokens",
              "change": "up1%"
            },
            {
              "model": "MiniMax M3",
              "score": "4.17T tokens",
              "change": "up13%"
            },
            {
              "model": "Hy3 preview",
              "score": "2.81T tokens",
              "change": "up19%"
            },
            {
              "model": "GLM 5.2",
              "score": "2.80T tokens",
              "change": "up27%"
            },
            {
              "model": "DeepSeek V4 Pro",
              "score": "2.53T tokens",
              "change": "up22%"
            },
            {
              "model": "Claude Opus 4.7",
              "score": "2.32T tokens",
              "change": "up4%"
            },
            {
              "model": "Claude Opus 4.8",
              "score": "2.10T tokens",
              "change": "up10%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "1.56T tokens",
              "change": "up2%"
            },
            {
              "model": "Claude Sonnet 4.6",
              "score": "1.36T tokens",
              "change": "up12%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-06",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "AnySearch",
              "category": "Developer Tools",
              "rank": 1,
              "link": "https://www.anysearch.com"
            },
            {
              "name": "Octolens",
              "category": "Marketing",
              "rank": 2,
              "link": "https://octolens.com"
            },
            {
              "name": "Typeahead 2.0",
              "category": "Productivity",
              "rank": 3,
              "link": "https://www.producthunt.com/products/typeahead/launches/typeahead-2-0"
            },
            {
              "name": "Sunrise",
              "category": "Productivity",
              "rank": 4,
              "link": "https://www.producthunt.com/products/sunrise-5"
            },
            {
              "name": "Stanley Studio",
              "category": "Social Media",
              "rank": 5,
              "link": "https://www.producthunt.com/posts/stanley-studio"
            },
            {
              "name": "AirKaren",
              "category": "Customer Success",
              "rank": 6,
              "link": "https://www.producthunt.com/posts/airkaren"
            },
            {
              "name": "Edge Claude Code Compressor V2",
              "category": "API",
              "rank": 7,
              "link": "https://www.producthunt.com/posts/edge-claude-code-compressor-v2"
            },
            {
              "name": "Astryx",
              "category": "Design Tools",
              "rank": 8,
              "link": "https://www.producthunt.com/posts/astryx"
            },
            {
              "name": "CodeMote",
              "category": "iOS",
              "rank": 9,
              "link": "https://www.producthunt.com/posts/codemote"
            },
            {
              "name": "Nixmac",
              "category": "Open Source",
              "rank": 10,
              "link": "https://www.producthunt.com/posts/nixmac"
            },
            {
              "name": "Mozaik",
              "category": "Developer Tools",
              "rank": 11,
              "link": "https://www.producthunt.com/posts/mozaik"
            },
            {
              "name": "Cadence",
              "category": "Productivity",
              "rank": 12,
              "link": "https://www.producthunt.com/posts/cadence"
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
        // 从服务端拉取合并远程日志
        try {
            var auditUrl = 'https://api.github.com/repos/' + config.owner + '/' + config.repo + '/contents/audit-log.json';
            var auditGetResp = await fetch(auditUrl, { headers: headers });
            if (auditGetResp.ok) {
                var auditFileInfo = await auditGetResp.json();
                var remoteAudit = JSON.parse(base64ToUtf8(auditFileInfo.content));
                var remoteSha = auditFileInfo.sha;
                // 合并去重
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
                // 首次创建
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
