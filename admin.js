const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-04",
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
          "news": []
        },
        {
          "name": "Google",
          "color": "#4285F4",
          "softBg": "rgba(66,133,244,0.08)",
          "initial": "G",
          "news": [
            {
              "title": "Google Gemini Omni Flash 登顶文生视频盲测榜，领先字节 Seedance",
              "summary": "7月3日消息，Video Arena实时排名更新，Google DeepMind旗下Gemini Omni Flash文生视频模型以1527 Elo登顶榜首，超出第二名字节跳动Seedance 2.0达61分。阿里巴巴happyhorse-1.0以1437 Elo位居第三，前十名中Google占据五个席位。",
              "link": "https://www.ithome.com/0/972/253.htm",
              "tags": [
                "Google",
                "文生视频",
                "Gemini"
              ],
              "source": "IT之家",
              "time": "7月3日消息"
            }
          ]
        },
        {
          "name": "xAI",
          "color": "#1DA1F2",
          "softBg": "rgba(29,161,242,0.08)",
          "initial": "x",
          "news": []
        },
        {
          "name": "NVIDIA",
          "color": "#76B900",
          "softBg": "rgba(118,185,0,0.08)",
          "initial": "N",
          "news": []
        },
        {
          "name": "Meta",
          "color": "#1877F2",
          "softBg": "rgba(24,119,242,0.08)",
          "initial": "M",
          "news": [
            {
              "title": "Meta将第三代AI加速器MTIA交由三星2纳米代工，订单价值超10万亿韩元",
              "summary": "7月3日消息，Meta正推进与三星晶圆代工合作，其自研AI加速器MTIA已锁定三星为合作伙伴，计划采用2纳米尖端工艺量产数十万组，合同价值预计超10万亿韩元（约73亿美元）。三星中长期积压订单有望逼近50万亿韩元，Anthropic也在评估使用其2纳米工艺开发定制芯片。",
              "link": "https://www.jiemian.com/article/14700175.html",
              "tags": [
                "Meta",
                "AI芯片",
                "三星代工"
              ],
              "source": "界面新闻",
              "time": "7月3日消息"
            },
            {
              "title": "扎克伯格坦承AI智能体发展未达预期，Meta战略面临两难",
              "summary": "当地时间7月2日，Meta CEO扎克伯格在内部全员会中承认AI智能体开发进展未达预期，实现超级智能仍需更多时间和投入。Meta正投入数百亿美元建设AI基础设施，但已意识到快速推进AI的代价明显。扎克伯格预计未来3-6个月内能看到部分成果。",
              "link": "https://www.thepaper.cn/newsDetail_forward_33510953",
              "tags": [
                "Meta",
                "扎克伯格",
                "AI智能体"
              ],
              "source": "澎湃新闻",
              "time": "当地时间7月2日"
            },
            {
              "title": "Meta低调推出AI社交应用Pocket，主打Vibe Coding互动小游戏",
              "summary": "7月3日消息，Meta在部分地区悄然上线AI社交应用Pocket，用户通过输入文字提示词即可生成并分享名为「gizmo」的互动式小型游戏。该平台定位为「与朋友共同创作、分享及探索」的轻量化社交创作平台，基于Meta收购的Atma Sciences团队技术打造。",
              "link": "https://36kr.com/newsflashes/3879110494351622",
              "tags": [
                "Meta",
                "AI社交",
                "Pocket"
              ],
              "source": "36氪",
              "time": "7月3日消息"
            }
          ]
        }
      ]
    },
    "domestic": {
      "vendors": [
        {
          "name": "阿里云",
          "color": "#FF6A00",
          "softBg": "rgba(255,106,0,0.08)",
          "initial": "阿",
          "news": [
            {
              "title": "阿里内部全面禁用Claude Code，7月10日起生效",
              "summary": "7月3日消息，因近期Claude Code被曝存在植入后门的安全风险，阿里经综合评估后将其列入高风险软件名单。自7月10日起全面禁止内部员工使用Claude Code，推荐使用自研Qoder作为替代方案。事件源于Anthropic上月指控阿里蒸馏其模型，及Claude Code被发现内置中国用户检测代码。",
              "link": "https://36kr.com/p/3879721635361032",
              "tags": [
                "阿里云",
                "Claude Code",
                "安全"
              ],
              "source": "36氪",
              "time": "7月3日消息"
            },
            {
              "title": "阿里整合三大AI智能体产品，92年陈宇森统管",
              "summary": "7月2日消息，阿里巴巴确认以桌面AI工具QoderWork为基础，深度融合钉钉孵化的悟空和阿里云内部创业的MuleRun，打造统一企业级AI产品。由6月刚接任钉钉CEO的92年陈宇森全面负责，三款产品将采取前台（QoderWork）、中台（MuleRun）、后台（悟空）的分层融合架构。",
              "link": "https://www.36kr.com/p/3878491297296388",
              "tags": [
                "阿里云",
                "Agent",
                "AI生产力"
              ],
              "source": "36氪",
              "time": "7月2日消息"
            },
            {
              "title": "阿里云发布Qoder企业版，推出QMind知识库和Credits付费模式",
              "summary": "7月3日消息，阿里云发布Qoder企业版，提供个人云端知识库QMind，支持跨产品、跨设备、跨人员的知识共享与自迭代。推出资源池化Credits付费模式，管理员可按需分配额度。企业标准版定价99元/席位/月，目前Qoder全球用户已超500万，服务中国一汽、中信证券等数十万家企业。",
              "link": "https://36kr.com/newsflashes/3879659625640193",
              "tags": [
                "阿里云",
                "Qoder",
                "企业版"
              ],
              "source": "36氪",
              "time": "7月3日消息"
            },
            {
              "title": "阿里达摩院AI智能体自主发现4种全新超导材料",
              "summary": "7月3日消息，阿里达摩院联合中国人民大学、中科院大学发布首个超导材料发现AI智能体Elements Claw，仅用28个GPU时从240万种结构中筛选出6.8万种候选超导材料，其中4种已合成并实验验证存在超导性。相关数据已全部开放，未来可拓展至固态电池、催化剂等新材料研发。",
              "link": "https://www.ithome.com/0/972/089.htm",
              "tags": [
                "阿里达摩院",
                "AI智能体",
                "超导材料"
              ],
              "source": "IT之家",
              "time": "7月3日消息"
            },
            {
              "title": "阿里云AI原生数据库服务Databridge Agent将于8月1日正式收费",
              "summary": "7月3日消息，阿里云官网显示，AI原生数据库服务产品Databridge Agent将于2026年8月1日正式转商业化计费。该产品提供多源异构数据的采集、解析与结构化转换能力，为大模型训练和RAG等应用提供标准化数据输入。",
              "link": "https://36kr.com/newsflashes/3879236702433537",
              "tags": [
                "阿里云",
                "Databridge",
                "商业化"
              ],
              "source": "36氪",
              "time": "7月3日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "color": "#3370FF",
          "softBg": "rgba(51,112,255,0.08)",
          "initial": "火",
          "news": [
            {
              "title": "豆包智能体功能将于7月15日下线，用户需提前备份",
              "summary": "7月3日消息，字节跳动旗下豆包发布通知，因产品功能调整，智能体功能将于7月15日正式下线。用户需在此之前截图或导出文本备份智能体信息及历史对话，10月15日后相关数据将按隐私政策处理。字节旗下的猫箱App可继续创建新的智能体。",
              "link": "https://www.ithome.com/0/972/448.htm",
              "tags": [
                "豆包",
                "智能体",
                "产品调整"
              ],
              "source": "IT之家",
              "time": "7月3日消息"
            },
            {
              "title": "字节豆包Seedance 2.5视频生成模型预计7月6日上线体验中心",
              "summary": "7月3日消息，字节豆包视频生成模型Seedance 2.5预计7月6日上线火山引擎体验中心，一周后开放API。该模型支持30秒单段原生直出、50个全模态素材联合输入及灵活的视频二次编辑，目前处于全球企业内测阶段。即梦官网已更新相关内容。",
              "link": "https://www.ithome.com/0/972/458.htm",
              "tags": [
                "火山引擎",
                "Seedance",
                "视频生成"
              ],
              "source": "IT之家",
              "time": "7月3日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "color": "#4F46E5",
          "softBg": "rgba(79,70,229,0.08)",
          "initial": "D",
          "news": [
            {
              "title": "DeepSeek-V4正式版「原厂直供」计划7月中上线腾讯云",
              "summary": "7月3日消息，腾讯云宣布DeepSeek-V4正式版原厂直供模型计划于7月中旬在TokenHub和智能体开发平台上线，提供Pro和Flash两个版本。正式版发布后将跟随原厂同步调整定价策略，引入峰谷定价机制，低谷时段可为企业客户降低30%-50%的AI运营成本。",
              "link": "https://m.ithome.com/html/972437.htm",
              "tags": [
                "DeepSeek",
                "腾讯云",
                "峰谷定价"
              ],
              "source": "IT之家",
              "time": "7月3日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "color": "#0052D9",
          "softBg": "rgba(0,82,217,0.08)",
          "initial": "腾",
          "news": [
            {
              "title": "腾讯QClaw产品经理张舒昱离职，澄清内部不存在赛马",
              "summary": "7月3日消息，腾讯QClaw负责人、产品经理张舒昱于6月29日正式离职，7月2日发长文确认。她澄清QClaw与WorkBuddy并非赛马关系，两个产品汇报给同一位负责人且增长团队高度重合。张舒昱25岁年入百万，26岁做出现象级产品QClaw，下一步希望解决困扰人类的难题。",
              "link": "https://news.qq.com/rain/a/20260703A07YN800",
              "tags": [
                "腾讯",
                "QClaw",
                "人事变动"
              ],
              "source": "腾讯新闻",
              "time": "7月3日消息"
            }
          ]
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "rgba(255,105,0,0.08)",
          "initial": "小",
          "news": []
        },
        {
          "name": "智谱AI",
          "color": "#6C5CE7",
          "softBg": "rgba(108,92,231,0.08)",
          "initial": "智",
          "news": []
        },
        {
          "name": "月之暗面",
          "color": "#8B5CF6",
          "softBg": "rgba(139,92,246,0.08)",
          "initial": "月",
          "news": [
            {
              "title": "GitHub Copilot首次接入开源模型——月之暗面Kimi K2.7 Code",
              "summary": "7月3日消息，月之暗面宣布GitHub Copilot正式接入其开源编程模型Kimi K2.7 Code，这是GitHub Copilot首次接入开源模型。该模型由GitHub托管于微软Azure平台，采用按量计费模式，逐步向Copilot Pro/Pro+/Max用户开放，后续将扩展至Business和Enterprise版本。",
              "link": "https://www.ithome.com/0/972/269.htm",
              "tags": [
                "月之暗面",
                "Kimi",
                "GitHub Copilot"
              ],
              "source": "IT之家",
              "time": "7月3日消息"
            }
          ]
        },
        {
          "name": "华为",
          "color": "#CF0A2C",
          "softBg": "rgba(207,10,44,0.08)",
          "initial": "华",
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
              "title": "三星",
              "news": [
                {
                  "title": "三星Galaxy Glasses智能眼镜渲染图曝光：对标Meta Ray-Ban",
                  "summary": "7月3日消息，三星首款智能眼镜Galaxy Glasses渲染图曝光。该产品采用类似普通黑框眼镜造型，搭载Android XR与Gemini AI，支持拍照录像、实时翻译、语音导航。配备12MP摄像头、定向扬声器，无内置显示屏，重约50克，可联动Galaxy Ring/Watch控制，预计7月22日发布。",
                  "link": "https://www.ithome.com/0/944/197.htm",
                  "tags": [
                    "三星",
                    "智能眼镜",
                    "Galaxy Glasses"
                  ],
                  "source": "IT之家",
                  "time": "7月3日消息"
                }
              ]
            },
            {
              "title": "生数科技",
              "news": [
                {
                  "title": "生数科技发布Vidu S1实时交互视频模型，视频生成迈入实时互动时代",
                  "summary": "7月3日消息，生数科技在2026全球数字经济大会上发布新一代实时交互模型Vidu S1。该模型主打实时可交互的视频生成，支持视频通话和语音控制视频走向，可基于单张图片快速创建交互角色，支持无限时长连续互动。Vidu S1已开启内测。",
                  "link": "https://www.donews.com/news/detail/4/6620682.html",
                  "tags": [
                    "生数科技",
                    "Vidu S1",
                    "实时交互"
                  ],
                  "source": "DoNews",
                  "time": "7月3日消息"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软砸25亿美元组建6000人AI前沿公司，加速企业AI部署",
                  "summary": "当地时间7月2日，微软宣布成立Microsoft Frontier Company（微软前沿公司），投入25亿美元、配备6000名行业专家与工程技术人员，为企业客户提供AI技术选型与系统集成服务。客户保留所有成果所有权，无需回传数据。初期合作包括伦敦证券交易所集团、联合利华等。",
                  "link": "https://www.jiemian.com/article/14695715.html",
                  "tags": [
                    "微软",
                    "AI部署",
                    "Microsoft Frontier"
                  ],
                  "source": "界面新闻",
                  "time": "当地时间7月2日"
                },
                {
                  "title": "微软实验性系统Project Aion曝光：基于Edge，主打AI交互",
                  "summary": "7月3日消息，微软内部曾开发的实验性操作系统原型Project Aion（Copilot OS）曝光。该系统基于Edge浏览器和Chromium引擎，彻底取消开始菜单，由Copilot按钮作为核心入口，不支持传统Win32应用，只支持Web应用和PWA。该项目已被搁置，部分概念已融入Windows 11。",
                  "link": "https://m.ithome.com/html/971975.htm",
                  "tags": [
                    "微软",
                    "Project Aion",
                    "Copilot OS"
                  ],
                  "source": "IT之家",
                  "time": "7月3日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "理想汽车",
              "news": [
                {
                  "title": "理想汽车调整组织架构：产品定义回归研发，决策链条缩短",
                  "summary": "7月3日消息，理想汽车启动新一轮组织调整，拆分产品部部分关键职能并入研发部门。电动本体定义团队并入整车研发部门，自动驾驶终端产品团队并入基座模型研发团队。调整后决策部门由三层缩减为两层，旨在缩短从定义到落地的周期，提升产品定义对市场变化的适应能力。",
                  "link": "https://36kr.com/p/3877919172047111",
                  "tags": [
                    "理想汽车",
                    "组织架构",
                    "自动驾驶"
                  ],
                  "source": "36氪",
                  "time": "7月3日消息"
                }
              ]
            },
            {
              "title": "小鹏汽车",
              "news": [
                {
                  "title": "何小鹏：MONA L03预售破纪录，明年海外逐步开通VLA智驾",
                  "summary": "7月3日消息，小鹏MONA L03（14.38万元起）预售订单打破小鹏所有车型同期纪录，将于7月16日在中德同步上市。何小鹏称期望MONA L03成为全球销量最大车型，明年起在海外大部分国家和地区逐步开通VLA（视觉-语言-动作）智驾系统，实现多语言自由交互与本地不联网控车。",
                  "link": "https://m.ithome.com/html/971991.htm",
                  "tags": [
                    "小鹏",
                    "MONA L03",
                    "VLA智驾"
                  ],
                  "source": "IT之家",
                  "time": "7月3日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "ElevenLabs 要约收购",
              "news": [
                {
                  "title": "AI语音独角兽ElevenLabs洽谈要约收购，估值或达220亿美元",
                  "summary": "7月3日消息，据彭博社报道，AI语音初创公司ElevenLabs正与投资者洽谈员工股权出售（要约收购），估值可能达到220亿美元，约为2月D轮融资后身价的两倍。该公司由英伟达等投资，2026年ARR已突破5亿美元，预计交易于9月前完成。",
                  "link": "https://www.cls.cn/detail/2415922",
                  "tags": [
                    "ElevenLabs",
                    "融资",
                    "AI语音"
                  ],
                  "source": "财联社",
                  "time": "7月3日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "Kent Beck",
              "news": [
                {
                  "title": "软件工程传奇Kent Beck：AI时代程序员更需要学会「做人」",
                  "summary": "7月3日消息，软件工程传奇人物Kent Beck在节目中表示，AI能自动生成大量代码的当下，软件工程师必须学习沟通与共情等软技能。Anthropic等公司已要求工程师在小型项目中担任微型产品经理，未来最有价值的工程师将是技术实力与产品判断力、人际交往能力相结合的人才。",
                  "link": "https://m.ithome.com/html/971974.htm",
                  "tags": [
                    "Kent Beck",
                    "AI时代",
                    "软技能"
                  ],
                  "source": "爱范儿",
                  "time": "7月3日消息"
                }
              ]
            },
            {
              "title": "AI魔改视频治理",
              "news": [
                {
                  "title": "6月「AI魔改」视频治理成果公布：清理违规视频近7600条",
                  "summary": "7月3日消息，国家广电总局部署的「AI魔改」视频专项治理公布6月成果，重点网络视听平台共清理违规视频近7600条、处置违规账号20余个。其中抖音清理1836条、快手1908条、微信1631条、小红书1024条。治理工作自2月起转为常态化长效机制。",
                  "link": "https://news.cctv.cn/2026/07/03/ARTIOEfxDVamNdxL8ZOtxcCp260703.shtml",
                  "tags": [
                    "AI治理",
                    "AI魔改",
                    "广电总局"
                  ],
                  "source": "央视新闻",
                  "time": "7月3日消息"
                }
              ]
            },
            {
              "title": "Palantir CEO抨击Token计费",
              "news": [
                {
                  "title": "Palantir CEO卡普抨击OpenAI等AI公司双重收费：要钱还要数据",
                  "summary": "7月3日消息，Palantir CEO Alex Karp公开指责OpenAI、Anthropic等前沿AI公司收取高额Token费用的同时窃取客户数据，形容为「披着订阅服务外衣的知识产权掠夺」。卡普呼吁企业转向开源权重模型，Palantir随即宣布与英伟达扩大合作推进主权AI部署。此言论推动Palantir股价大涨约9%。",
                  "link": "https://tech.ifeng.com/c/8uSHpxJ7ggW",
                  "tags": [
                    "Palantir",
                    "Token计费",
                    "数据安全"
                  ],
                  "source": "凤凰科技",
                  "time": "7月3日消息"
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
          "date": "2026-06-25",
          "link": "https://lmarena.ai/leaderboard/text",
          "rankings": [
            {
              "model": "claude-fable-5 (Anthropic)",
              "score": "1508",
              "change": "↑4"
            },
            {
              "model": "claude-opus-4-6-thinking (Anthropic)",
              "score": "1503",
              "change": "↑4"
            },
            {
              "model": "claude-opus-4-7-thinking (Anthropic)",
              "score": "1502",
              "change": "↑5"
            },
            {
              "model": "claude-opus-4-6 (Anthropic)",
              "score": "1499",
              "change": "↑5"
            },
            {
              "model": "claude-opus-4-7 (Anthropic)",
              "score": "1494",
              "change": "↑9"
            },
            {
              "model": "muse-spark (Meta)",
              "score": "1487",
              "change": "↑14"
            },
            {
              "model": "gemini-3.1-pro-preview (Google)",
              "score": "1486",
              "change": "↑13"
            },
            {
              "model": "gemini-3-pro (Google)",
              "score": "1486",
              "change": "↑13"
            },
            {
              "model": "claude-opus-4-8-thinking (Anthropic)",
              "score": "1484",
              "change": "↑19"
            },
            {
              "model": "gpt-5.5-high (OpenAI)",
              "score": "1481",
              "change": "↑23"
            },
            {
              "model": "claude-opus-4-8 (Anthropic)",
              "score": "1479",
              "change": "↑25"
            },
            {
              "model": "gpt-5.4-high (OpenAI)",
              "score": "1478",
              "change": "↑25"
            },
            {
              "model": "gemini-3.5-flash (Google)",
              "score": "1476",
              "change": "↑31"
            },
            {
              "model": "gpt-5.2-chat (OpenAI)",
              "score": "1476",
              "change": "↑28"
            },
            {
              "model": "grok-4.20-beta-reasoning (xAI)",
              "score": "1476",
              "change": "↑28"
            },
            {
              "model": "qwen3.7-max-preview (Alibaba)",
              "score": "1475",
              "change": "↑34"
            },
            {
              "model": "gpt-5.5 (OpenAI)",
              "score": "1475",
              "change": "↑31"
            },
            {
              "model": "grok-4.20-beta1 (xAI)",
              "score": "1474",
              "change": "↑31"
            },
            {
              "model": "glm-5.1 (Zai·MIT)",
              "score": "1473",
              "change": "↑33"
            },
            {
              "model": "gemini-3-flash (Google)",
              "score": "1473",
              "change": "↑32"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-07-04",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash (DeepSeek)",
              "score": "5.28T tokens",
              "change": "↑9%"
            },
            {
              "model": "MiMo-V2.5 (小米)",
              "score": "4.20T tokens",
              "change": "↑6%"
            },
            {
              "model": "MiniMax M3 (MiniMax)",
              "score": "3.90T tokens",
              "change": "↑2%"
            },
            {
              "model": "Hy3 preview (腾讯)",
              "score": "3.54T tokens",
              "change": "↑8%"
            },
            {
              "model": "GLM 5.2 (智谱)",
              "score": "2.44T tokens",
              "change": "↑27%"
            },
            {
              "model": "Owl Alpha (OpenRouter)",
              "score": "1.83T tokens",
              "change": "↑44%"
            },
            {
              "model": "DeepSeek V4 Pro (DeepSeek)",
              "score": "2.23T tokens",
              "change": "↑8%"
            },
            {
              "model": "Claude Opus 4.8 (Anthropic)",
              "score": "2.07T tokens",
              "change": "—"
            },
            {
              "model": "Claude Opus 4.7 (Anthropic)",
              "score": "1.93T tokens",
              "change": "↑17%"
            },
            {
              "model": "Step 3.7 Flash (阶跃星辰)",
              "score": "1.56T tokens",
              "change": "↑10%"
            },
            {
              "model": "Claude Sonnet 4.6 (Anthropic)",
              "score": "1.37T tokens",
              "change": "↑4%"
            },
            {
              "model": "DeepSeek V4 (DeepSeek)",
              "score": "1.20T tokens",
              "change": "↑24%"
            },
            {
              "model": "Gemini 3.1 Pro (Google)",
              "score": "1.05T tokens",
              "change": "↑6%"
            },
            {
              "model": "Qwen3.7-Max (阿里)",
              "score": "0.98T tokens",
              "change": "↑4%"
            },
            {
              "model": "Claude Fable 5 (Anthropic)",
              "score": "0.86T tokens",
              "change": "—"
            },
            {
              "model": "GPT-5.5 (OpenAI)",
              "score": "0.74T tokens",
              "change": "↑11%"
            },
            {
              "model": "Muse Spark (Meta)",
              "score": "0.62T tokens",
              "change": "—"
            },
            {
              "model": "Gemini 3 Flash (Google)",
              "score": "0.56T tokens",
              "change": "↑8%"
            },
            {
              "model": "Kimi K2 (月之暗面)",
              "score": "0.51T tokens",
              "change": "↑5%"
            },
            {
              "model": "Claude Haiku 4.5 (Anthropic)",
              "score": "0.48T tokens",
              "change": "↓12%"
            }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-02",
          "link": "https://www.producthunt.com/",
          "rankings": [
            {
              "name": "Context.dev",
              "category": "API",
              "rank": 1,
              "link": "https://context.dev"
            },
            {
              "name": "Fypro",
              "category": "Social Media",
              "rank": 2,
              "link": "https://fypro.com"
            },
            {
              "name": "Needle",
              "category": "Productivity",
              "rank": 3,
              "link": "https://needle.so"
            },
            {
              "name": "PixFit",
              "category": "Design Tools",
              "rank": 4,
              "link": "https://pixfit.ai"
            },
            {
              "name": "Macro",
              "category": "Productivity",
              "rank": 5,
              "link": "https://macro.com"
            },
            {
              "name": "Solaris",
              "category": "Education",
              "rank": 6,
              "link": "https://solaris.com"
            },
            {
              "name": "Banger Mail",
              "category": "Email",
              "rank": 7,
              "link": "https://bangermail.com"
            },
            {
              "name": "PieterPost MCP",
              "category": "Developer Tools",
              "rank": 8,
              "link": "https://pieterpost.com"
            },
            {
              "name": "Sidedoor",
              "category": "Hiring",
              "rank": 9,
              "link": "https://sidedoor.com"
            },
            {
              "name": "scritty",
              "category": "Developer Tools",
              "rank": 10,
              "link": "https://scritty.com"
            },
            {
              "name": "Macuse",
              "category": "Mac",
              "rank": 11,
              "link": "https://macuse.com"
            },
            {
              "name": "Basedash Actions",
              "category": "Data & Analytics",
              "rank": 12,
              "link": "https://basedash.com"
            },
            {
              "name": "html.contact",
              "category": "Developer Tools",
              "rank": 13,
              "link": "https://html.contact"
            },
            {
              "name": "Flowly",
              "category": "Productivity",
              "rank": 14,
              "link": "https://flowly.com"
            },
            {
              "name": "Gaming Chat SDK by CometChat",
              "category": "Developer Tools",
              "rank": 15,
              "link": "https://cometchat.com"
            },
            {
              "name": "Retrace",
              "category": "Developer Tools",
              "rank": 16,
              "link": "https://retrace.com"
            },
            {
              "name": "Quick Sub 2",
              "category": "Design Tools",
              "rank": 17,
              "link": "https://quicksub.com"
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
