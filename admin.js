const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-08-20",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI CFO：公司或将在2027年上市，甚至更早",
              "summary": "8月19日，OpenAI首席财务官弗莱尔在全员大会上向员工表示，公司将在2027年上市；倘若业务持续高速增长，也可能更早登陆公开市场。她称IPO并非终点而是里程碑，公司6月已向SEC秘密提交招股文件，即便Anthropic抢先上市，OpenAI仍将按自己节奏推进。",
              "link": "https://36kr.com/newsflashes/3947046235634818",
              "tags": [
                "IPO",
                "上市"
              ],
              "source": "36氪",
              "time": "8月19日"
            },
            {
              "title": "OpenAI升级Codex安全防护，降低破坏性操作风险",
              "summary": "8月19日消息，OpenAI团队成员Tibo复盘近几周为Codex部署的安全防御措施，确认风险集中在清理临时工作目录时误删文件。团队引入目标校验、独立临时目录、危险命令拦截与审核、提高Full access权限门槛、升级Auto-review规则等多层防护，在保障编码效率的同时压降安全风险。",
              "link": "https://news.qq.com/rain/a/20260819A04YJS00",
              "tags": [
                "安全防护",
                "Codex"
              ],
              "source": "腾讯新闻",
              "time": "8月19日消息"
            },
            {
              "title": "ChatGPT广告下周扩展至31个欧洲国家",
              "summary": "当地时间8月18日，OpenAI宣布其广告业务ChatGPT Ads将于8月24日起扩展至31个欧洲国家，覆盖德国、法国、西班牙、意大利、瑞典等，为迄今最大规模广告扩张。广告仅向免费版和Go套餐用户展示，Plus、Pro、Enterprise保持无广告，OpenAI称广告将清晰标注、不影响回答且不出售用户个人数据。",
              "link": "https://openai.com/index/chatgpt-ads-expands-across-europe/",
              "tags": [
                "商业化",
                "广告"
              ],
              "source": "OpenAI",
              "time": "当地时间8月18日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic首次季度盈利，收入首超OpenAI",
              "summary": "8月19日消息，据华尔街日报援引知情人士，Anthropic二季度初步营收超115亿美元，较上年同期增长约14倍，环比增幅逾140%，首次在季度收入上超越OpenAI并实现小幅运营盈利。同期OpenAI营收67亿美元、环比仅增18%且亏损扩大，Claude Code大获成功正迫使OpenAI重审商业策略。",
              "link": "http://www.eeo.com.cn/2026/0819/1003304.shtml",
              "tags": [
                "营收",
                "盈利"
              ],
              "source": "经济观察报",
              "time": "8月19日消息"
            },
            {
              "title": "Anthropic拟赋予CEO超级投票权，为IPO铺路",
              "summary": "8月19日消息，Anthropic计划在筹备IPO前向CEO阿莫迪及其他联合创始人授予带额外投票权的股份，以抵御外部股东压力、上市后维持控制权。经多轮融资后阿莫迪持股已稀释至约2%，此举将使其成为美国股市中价值最高的公共利益公司，预计最快9月下旬启动上市。",
              "link": "https://finance.eastmoney.com/a/202608193845008370.html",
              "tags": [
                "公司治理",
                "IPO"
              ],
              "source": "东方财富",
              "time": "8月19日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌：AI可承担前沿部署工程师的部分工作",
              "summary": "8月19日消息，谷歌云数据库产品副总裁古特曼表示，尽管谷歌计划招聘数百名前沿部署工程师协助客户基于Gemini开发应用，公司正用AI自动化这批顾问面向大企业的部分工作，主要负责数据治理。AI智能体可扫描梳理客户全部数据、生成知识图谱与语义层，大幅降低多步骤任务工作量。",
              "link": "https://www.c114.net.cn/cloudnews/112389.html",
              "tags": [
                "Agent",
                "数据治理"
              ],
              "source": "C114通信网",
              "time": "8月19日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "news": []
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
              "title": "特斯拉中国车机正式推送豆包大模型",
              "summary": "8月19日，字节跳动旗下火山引擎宣布，特斯拉中国车机系统已上线豆包大模型，正陆续分批推送，覆盖Model 3/Y/S/X四款车型，这是特斯拉入华以来首次在车机集成第三方大模型。车机语音采用双模型方案：豆包负责基础车控与车主手册查询，DeepSeek Chat侧重闲聊与资讯。",
              "link": "https://www.jiemian.com/article/14949802.html",
              "tags": [
                "车载AI",
                "大模型上车"
              ],
              "source": "界面新闻",
              "time": "8月19日"
            },
            {
              "title": "豆包工作任务上线云电脑模式",
              "summary": "8月20日消息，豆包「工作任务」模式新增云电脑功能，提供本地电脑与云电脑两套执行环境。云端沙箱构建于独立隔离环境、默认不访问本地数据，即使电脑关机任务也能在后台持续运行，适合高负载长耗时任务；支持多端实时同步进度、定时执行，任务统一纳入任务中心管理。",
              "link": "https://www.chinaz.com/2026/0820/1772050.shtml",
              "tags": [
                "Agent",
                "云电脑"
              ],
              "source": "站长之家",
              "time": "8月20日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "DeepSeek Harness更新多模态能力，任务命令可接收图文输入",
              "summary": "8月20日消息，DeepSeek Harness发布dsh-v0.1.0-rc.8，为DeepSeek模型适配器加入可配置的原生图片请求，/goal、/plan等任务命令可直接接收图文输入，@菜单可引用文件与会话。Claude Code与Codex子代理改为按需安装的Profile Bundle，Windows端PTY新增持久化PowerShell会话。",
              "link": "https://news.qq.com/rain/a/20260820A03U8O00",
              "tags": [
                "多模态",
                "Agent框架"
              ],
              "source": "腾讯新闻",
              "time": "8月20日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯AI应用平台「吐司」推出一键上架App功能",
              "summary": "8月19日消息，腾讯为旗下AI应用生成平台吐司推出「一键上架App」付费功能，用户用自然语言生成安卓应用后，可在应用内完成软著申请、App备案、合规文件生成并一站式提交上架，审核通过后应用可在应用宝分发。基础版Plus售价899元、进阶版Pro售价7999元，降低AI应用从开发到市场交付门槛。",
              "link": "https://tech.ifeng.com/c/8viN05QZqlQ",
              "tags": [
                "AI应用",
                "分发"
              ],
              "source": "凤凰网",
              "time": "8月19日消息"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米新一代人形机器人亮相，双足1.7米全身66自由度",
              "summary": "8月19日消息，小米新一代人形机器人在2026世界机器人大会上首次面向公众亮相，身高约1.70米、体重66公斤，全身66个自由度（一半集中手部），动作由大模型驱动可自主理解判断。该机器人已在小米汽车工厂完成4个月产线实习，螺母上件成功率提升至98%，卢伟冰强调将与人车家全生态协同而非独立做机器人。",
              "link": "https://news.qq.com/rain/a/20260819A0AD6800",
              "tags": [
                "人形机器人",
                "具身智能"
              ],
              "source": "腾讯新闻",
              "time": "8月19日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": [
            {
              "title": "智谱GLM-5.3上线：60分跻身全球前沿，并列开源第一",
              "summary": "8月19日，智谱新一代基座模型GLM-5.3 API正式上线，擅长复杂编码、防御性网络安全与长程任务，在Artificial Analysis Intelligence Index取得60分，与Kimi K3并列开源模型第一。GLM-5.3沿用GLM-5.2同一基础模型，性能提升主要来自后训练，实现前沿旗舰中最低的单任务成本，模型权重将于8月28日开源。",
              "link": "https://news.qq.com/rain/a/20260819A04J6300",
              "tags": [
                "大模型",
                "开源"
              ],
              "source": "腾讯新闻",
              "time": "8月19日"
            },
            {
              "title": "智谱唐杰：模型达知识阈值后，能力跃升应转向Post-training",
              "summary": "8月19日消息，智谱创始人唐杰在采访中表示，模型总参数达到知识阈值后，能力跃升的关键应转向Post-training（后训练）。GLM-5.3正是例证——与GLM-5.2沿用同一基础模型，性能提升主要来自后训练，表明前沿能力推进不再依赖更大参数规模，为行业提供高参数效率路径。",
              "link": "https://news.qq.com/rain/a/20260819A09D0800",
              "tags": [
                "Post-training",
                "大模型"
              ],
              "source": "腾讯新闻",
              "time": "8月19日消息"
            }
          ]
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
              "title": "Cerebras",
              "news": [
                {
                  "title": "Cerebras推出CS-4系统对标英伟达，推理速度号称30倍",
                  "summary": "当地时间8月18日，AI芯片公司Cerebras发布全新机架式AI系统CS-4，内置3颗WSE-3 Turbo晶圆级处理器，单用户场景下每秒输出token能力号称可达传统GPU服务器的30倍。WSE-3 Turbo集成4万亿个晶体管，为迄今规模最大的AI处理器。该套系统面向AI推理而非训练，采用SRAM而非DRAM。",
                  "link": "https://finance.jrj.com.cn/2026/08/19185058178832.shtml",
                  "tags": [
                    "AI芯片",
                    "推理"
                  ],
                  "source": "金融界",
                  "time": "当地时间8月18日"
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "三星因AI芯片需求激增上调代工价格，最高涨幅15%",
                  "summary": "8月19日消息，由于AI芯片需求导致产能趋紧，三星电子已对部分先进晶圆代工服务的新订单上调价格，最高涨幅达15%。7月三星已上调4nm（SF4）制程价格，中国大陆和美国客户涨幅10%-15%。台积电先进产能趋于饱和，客户正转向三星，使其获得更大议价空间。",
                  "link": "https://www.cls.cn/detail/2458336",
                  "tags": [
                    "芯片代工",
                    "涨价"
                  ],
                  "source": "财联社",
                  "time": "8月19日消息"
                }
              ]
            },
            {
              "title": "Marvell",
              "news": [
                {
                  "title": "Marvell与谷歌达成定制半导体协议，股价大涨",
                  "summary": "8月19日，Marvell宣布与谷歌就开发定制半导体产品达成商业协议，涵盖AI推理加速器、存储控制器、网络接口控制器、内存接口控制器及近内存计算等与TPU生态关联的定制芯片项目。Marvell向谷歌发行可购5897万股普通股的认股权证，若全数行使谷歌将成为其第五大股东，消息公布后Marvell盘前涨超10%。",
                  "link": "https://finance.eastmoney.com/a/202608193846528418.html",
                  "tags": [
                    "定制芯片",
                    "TPU"
                  ],
                  "source": "东方财富",
                  "time": "8月19日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "比亚迪",
              "news": [
                {
                  "title": "比亚迪张卓：智驾比华为强没人信，核心在于数据量",
                  "summary": "8月19日消息，比亚迪汽车海洋网销售事业部总经理张卓在2027款海豹06上市后受访时称，比亚迪智能驾驶能力已强于华为，只是没人相信。他指出端到端大模型背后逻辑是「谁的数据量大谁强」，比亚迪数百万辆量产车积累的真实路况数据，是今年天神之眼B体验大幅提升的根本原因，并预判行业差距将逐渐缩小。",
                  "link": "http://www.c114.net.cn/industry/112694.html",
                  "tags": [
                    "智驾",
                    "端到端"
                  ],
                  "source": "C114通信网",
                  "time": "8月19日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "京东",
              "news": [
                {
                  "title": "京东发布机器人战略，2028年前投入百亿",
                  "summary": "8月19日，2026世界机器人大会上，京东出任WRC全球战略合作伙伴并发布机器人战略，立足供应链、服务、技术三大维度。供应链层面截至2028年将投入百亿资源，助力100个品牌独立销售额破10亿；服务层面未来5年建立覆盖全球超100国的售后能力，创造超10万机器人售后工程师岗位。",
                  "link": "https://finance.eastmoney.com/a/202608193846458883.html",
                  "tags": [
                    "机器人",
                    "供应链"
                  ],
                  "source": "东方财富",
                  "time": "8月19日"
                }
              ]
            },
            {
              "title": "爱湫",
              "news": [
                {
                  "title": "9.8万元起，国产情感交互人形机器人「爱湫」发售",
                  "summary": "8月19日消息，四川具身人形机器人科技公司在2026世界机器人大会上正式发售情感交互人形机器人「爱湫」，售价9.8万元起，为国内首款面向家庭的消费级情感人形机器人。搭载3D超短焦投影面部支持自定义变脸，最高32个自由度，核心零部件本地化率超90%，已计划在成都30多个银行网点担任大堂经理。",
                  "link": "https://news.ifeng.com/c/8viipkKTGYw",
                  "tags": [
                    "人形机器人",
                    "情感交互"
                  ],
                  "source": "凤凰网",
                  "time": "8月19日消息"
                }
              ]
            },
            {
              "title": "松延动力",
              "news": [
                {
                  "title": "蔡明同款仿生机器人亮相，9.9万元起",
                  "summary": "8月19日消息，2026世界机器人大会上，松延动力展出与央视春晚蔡明同系列的仿生机器人，皮肤质感接近真人、五官自然贴合，支持语音对话及卖萌、亲吻等表情动作，基础款售价约9.9万元、高配超13万元。该产品主打情感交互，可用于医院导诊、博物馆讲解、语音陪伴等场景。",
                  "link": "https://news.qq.com/rain/a/20260819A0CSFA00",
                  "tags": [
                    "仿生机器人",
                    "情感陪伴"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月19日消息"
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
                  "title": "宇树科技上市首日大涨460%，王兴兴身家超1300亿",
                  "summary": "8月19日，「人形机器人第一股」宇树科技登陆科创板，开盘一度暴涨629%报1100元，收盘报845元收涨460.34%，市值超3300亿元、盘中一度突破4400亿。以收盘价计算，创始人王兴兴身家超1300亿元成为90后新首富；梁文锋打新浮盈超11亿，雷军旗下顺为资本浮盈超152亿。",
                  "link": "https://news.qq.com/rain/a/20260819A0B0OF00",
                  "tags": [
                    "IPO",
                    "具身智能"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月19日"
                }
              ]
            },
            {
              "title": "Etched",
              "news": [
                {
                  "title": "AI芯片公司Etched一个月内估值翻倍至210亿美元",
                  "summary": "当地时间8月18日，据路透社报道，AI芯片初创公司Etched在最新一轮融资中估值较不到一个月前翻倍至210亿美元。Etched押注专用于Transformer推理的AI芯片，此前已获软银、OpenAI等机构投资。本轮估值翻倍凸显市场对AI专用芯片赛道的追捧，公司正加速推进首款芯片量产。",
                  "link": "https://www.zhiding.cn/chips/2026/0819/3196799.shtml",
                  "tags": [
                    "融资",
                    "AI芯片"
                  ],
                  "source": "至顶网",
                  "time": "当地时间8月18日"
                }
              ]
            },
            {
              "title": "Stripe收购OpenRouter",
              "news": [
                {
                  "title": "Stripe以75亿美元收购AI模型网关OpenRouter",
                  "summary": "8月19日，支付巨头Stripe宣布收购AI模型聚合网关OpenRouter，交易约75亿美元，其中约15亿美元归创始人。OpenRouter通过单一接口接入超400种AI模型，服务超800万开发者、日均处理超10万亿tokens。Stripe CEO称「Token是AI时代公司构建的核心货币」，此举为布局AI费用管理的重要一步。",
                  "link": "https://www.donews.com/news/detail/1/6677749.html",
                  "tags": [
                    "收购",
                    "大模型"
                  ],
                  "source": "DoNews",
                  "time": "8月19日"
                }
              ]
            },
            {
              "title": "长江存储",
              "news": [
                {
                  "title": "长江存储IPO辅导状态变更为「辅导验收」",
                  "summary": "8月19日消息，据证监会网站披露，长江存储控股IPO辅导状态变更为「辅导验收」，辅导券商为中信证券和中信建投，验收通过后可进入正式申报阶段。长江存储专注3D NAND闪存，2026年二季度NAND出货量首进全球前三，一季度营收突破200亿元同比增长100%，以1600亿元估值入围2025全球独角兽榜。",
                  "link": "https://finance.eastmoney.com/a/202608193846037433.html",
                  "tags": [
                    "IPO",
                    "存储芯片"
                  ],
                  "source": "东方财富",
                  "time": "8月19日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "数据中心监管",
              "news": [
                {
                  "title": "美国多州收紧数据中心建设，AI扩张面临监管压力",
                  "summary": "当地时间8月18日，美国宾夕法尼亚州州长沙皮罗签署行政令，对数据中心建设实施严格限制：项目须先获地方政府批准、承担全部电力成本并遵守节水标准，退出快速审批通道。纽约州已暂停大型数据中心审批一年，得州暂停部分新项目。随着AI投资快速增长，多州正收紧数据中心扩张以应对电力与社区压力。",
                  "link": "https://finance.eastmoney.com/a/202608193846593964.html",
                  "tags": [
                    "数据中心",
                    "监管"
                  ],
                  "source": "东方财富",
                  "time": "当地时间8月18日"
                }
              ]
            },
            {
              "title": "AI硬件劫车",
              "news": [
                {
                  "title": "暴力团伙开始劫持AI数据中心硬件运输车",
                  "summary": "8月19日消息，据《连线》报道，美国加州近期出现两起针对高价值AI数据中心设备的暴力货运劫案，服务器等价值数百万美元的硬件至今下落不明。货运安全人士认为两起事件均经过协调。上季度美国货运盗窃案件数量同比下降26%，被盗货物价值却翻倍，液冷部件、服务器等成为更显眼目标。",
                  "link": "https://www.163.com/dy/article/L48FJUV90511BLFD.html",
                  "tags": [
                    "数据中心",
                    "安全"
                  ],
                  "source": "网易",
                  "time": "8月19日消息"
                }
              ]
            },
            {
              "title": "客服国标",
              "news": [
                {
                  "title": "人工与智能客服协同国家标准9月1日起实施",
                  "summary": "8月19日消息，我国首个聚焦人工与智能客服协同机制的国家标准《顾客联络服务 人工与智能客户服务协同要求》将于9月1日实施，重点规范AI客服答非所问、虚假承诺、人工入口隐藏等行业乱象。标准要求人工入口清晰、复杂纠纷及时转人工、避免消费者反复复述问题，企业需对智能客服输出内容承担相应责任。",
                  "link": "https://news.qq.com/rain/a/20260819A0ATXB00",
                  "tags": [
                    "AI治理",
                    "客服"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月19日消息"
                }
              ]
            },
            {
              "title": "罗宾·威廉姆斯",
              "news": [
                {
                  "title": "罗宾·威廉姆斯家人重启Instagram对抗AI肖像滥用",
                  "summary": "8月19日消息，罗宾·威廉姆斯三个子女重启父亲沉寂12年的Instagram账号，希望把它变成发布真实照片、视频和回忆的可信空间，以对抗其声音和肖像被AI大量滥用。Zelda曾公开批评AI生成的父亲视频，称这些内容把真实人物遗产压缩成粗糙模仿素材，逝者数字形象的授权与治理正成为现实问题。",
                  "link": "https://www.zhiding.cn/ai-applications/2026/0819/3196734.shtml",
                  "tags": [
                    "AI滥用",
                    "数字遗产"
                  ],
                  "source": "至顶网",
                  "time": "8月19日消息"
                }
              ]
            },
            {
              "title": "起点AI小说",
              "news": [
                {
                  "title": "起点中文网集中治理AI小说，多部万订作品移出榜单",
                  "summary": "8月19日消息，针对作者反映均订过万作品因「AI痕迹过重」被处理，阅文集团知情人士回应称治理属持续动作，并未下架而是建议调整内容。被治理作品仍可更新付费，但被移出月票榜、畅销榜并取消推荐流量，包括《山河鉴》等多部万订作品。番茄小说同日公布7月拦截AI生成及水文书籍16万本。",
                  "link": "https://finance.eastmoney.com/a/202608193846230346.html",
                  "tags": [
                    "AI内容治理",
                    "网文"
                  ],
                  "source": "东方财富",
                  "time": "8月19日消息"
                }
              ]
            },
            {
              "title": "存储龙头业绩",
              "news": [
                {
                  "title": "两大存储龙头上半年净利增超10倍，AI需求驱动",
                  "summary": "8月19日消息，存储巨头兆易创新半年报显示上半年营收115.66亿元同比增长178.67%，净利润68.57亿元同比增长1091.5%；普冉股份上半年净利润8.27亿元同比增长1929.65%。AI算力建设带动存储芯片需求激增、价格上涨，成为业绩大增共同原因，NOR Flash合约价上半年累计涨幅破100%。",
                  "link": "https://4g.stockstar.com/detail/IG2026081900003530",
                  "tags": [
                    "存储芯片",
                    "业绩"
                  ],
                  "source": "证券之星",
                  "time": "8月19日消息"
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
          "date": "2026-08-20",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.2T tokens",
              "change": "↑7%"
            },
            {
              "model": "Hy3",
              "score": "9.47T tokens",
              "change": "↑6%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "6.16T tokens",
              "change": "↑33%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "5.73T tokens",
              "change": "↑12%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.88T tokens",
              "change": "↑8%"
            },
            {
              "model": "GLM 5.2",
              "score": "4.37T tokens",
              "change": "↑20%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "3.16T tokens",
              "change": "↑46%"
            },
            {
              "model": "Claude Opus 5",
              "score": "2.58T tokens",
              "change": "↑65%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "2.43T tokens",
              "change": "↑17%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "2.34T tokens",
              "change": "↑12%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.75T tokens",
              "change": "↑9%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.71T tokens",
              "change": "—"
            },
            {
              "model": "Kimi K3",
              "score": "1.31T tokens",
              "change": "↑9%"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "1.1T tokens",
              "change": "—"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.09T tokens",
              "change": "↑3%"
            },
            {
              "model": "DeepSeek V4 Pro 0813",
              "score": "1.07T tokens",
              "change": "↑999%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "940B tokens",
              "change": "新上榜"
            },
            {
              "model": "GPT-5.6 Terra",
              "score": "912B tokens",
              "change": "↑7%"
            },
            {
              "model": "Nemotron 3.5 Lightning (free)",
              "score": "853B tokens",
              "change": "↑545%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "838B tokens",
              "change": "↑5%"
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
