// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {
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
    // 其他厂商可能出现的品牌（暂无 logo 的不设 logo 字段，回退到首字母）
    "三星":         { color: "#8aaed4", softBg: "#eef5fb", initial: "三" },
    "小米":         { color: "#d4a882", softBg: "#faf5ee", initial: "米", logo: "logos/小米.jpg" },
    "昆仑万维":     { color: "#a0b0d4", softBg: "#f2f4fa", initial: "昆" },
    "字节跳动":     { color: "#8ab4d4", softBg: "#eef5fb", initial: "字" },
    "Stability AI": { color: "#b4a0d4", softBg: "#f5f0fa", initial: "S" },
    // 自动驾驶/具身智能/投资资讯 中出现的品牌
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
    // 其他关注·独立厂商（Google Favicon API 获取 logo）
    "英特尔":         { color: "#0071c5", softBg: "#e6f0f8", initial: "英", logo: "https://www.google.com/s2/favicons?domain=intel.com&sz=64" },
    "鸿海（富士康）": { color: "#e60012", softBg: "#fde8ec", initial: "鸿", logo: "https://www.google.com/s2/favicons?domain=foxconn.com&sz=64" },
    "网易有道":       { color: "#e4393c", softBg: "#fde8ec", initial: "有", logo: "https://www.google.com/s2/favicons?domain=youdao.com&sz=64" },
    "宇树科技":       { color: "#1a1a2e", softBg: "#e8e8f0", initial: "宇", logo: "https://www.google.com/s2/favicons?domain=unitree.com&sz=64" },
    "Vbot 维他动力":  { color: "#00d4aa", softBg: "#e6faf5", initial: "V", logo: "https://www.google.com/s2/favicons?domain=vbot.ai&sz=64" },
    "博登智能":       { color: "#4a90d9", softBg: "#eef5fb", initial: "博", logo: "https://www.google.com/s2/favicons?domain=bodenai.com&sz=64" },
    "软银集团":       { color: "#c0c0c0", softBg: "#f5f5f5", initial: "软", logo: "https://www.google.com/s2/favicons?domain=softbank.jp&sz=64" },
    // 标签→厂商名映射（用于「其他关注」分类识别公司名）
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
    // 补充 section 级别元数据
    const secMeta = {
        overseas: { title: "海外主要厂商", icon: "fas fa-globe-americas", iconClass: "overseas" },
        domestic: { title: "国内主要厂商", icon: "fas fa-flag", iconClass: "domestic" },
        other:    { title: "其他关注", icon: "fas fa-layer-group", iconClass: "other" },
        ranking:  { title: "榜单情况", icon: "fas fa-trophy", iconClass: "ranking" }
    };
    for (const [key, meta] of Object.entries(secMeta)) {
        if (data.sections[key]) Object.assign(data.sections[key], meta);
    }
    // 补充海外/国内厂商的展示字段
    for (const secKey of ['overseas', 'domestic']) {
        const vendors = data?.sections?.[secKey]?.vendors;
        if (!vendors) continue;
        for (const v of vendors) {
            const cfg = VENDOR_DISPLAY[v.name];
            if (cfg) { v.color = cfg.color; v.softBg = cfg.softBg; v.initial = cfg.initial; v.logo = cfg.logo; }
        }
    }
    // 补充「其他关注」分类的展示字段
    const categories = data?.sections?.other?.categories;
    if (categories) {
        for (const c of categories) {
            const cfg = CATEGORY_DISPLAY[c.name];
            if (cfg) { c.icon = cfg.icon; c.color = cfg.color; c.softBg = cfg.softBg; }
        }
    }
    // 补充榜单平台的展示字段
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
        if (map[tag]) return map[tag];  // 返回厂商名字符串
    }
    return null;
}

function loadNewsData() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            // 检测旧格式数据（含 change 或 upvotes 字段），自动清除
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
    // 在新数据覆盖前，检查过往日期是否有遗漏确认（24 点自动确认）
    autoConfirmBeforeRefresh();

    // 同时检查 localStorage 和 data.js，取日期更近的
    let lsData = null;
    let rawData = null;

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) lsData = JSON.parse(saved);
    } catch (e) { /* ignore */ }

    if (window.__RAW_DATA) rawData = window.__RAW_DATA;

    // 比较日期（字符串可直接比较，如 "2026-05-30" > "2026-05-29"）
    // 只有 localStorage 日期严格大于 data.js 时，才认为用户手动编辑了更新日期
    const rawDate = rawData?.date || '';
    const lsDate = lsData?.date || '';
    // 仅当 localStorage 标记了手动编辑，且其编辑时间比 data.js 更新时，才保留本地数据
    // 如果 data.js 的编辑时间更新（别人刚改过），则 data.js 优先
    const lsEditTime = lsData?._manualEdit ? new Date(lsData._manualEdit).getTime() : 0;
    const rawEditTime = rawData?._manualEdit ? new Date(rawData._manualEdit).getTime() : 0;
    const isManualEdit = lsData?._manualEdit && lsDate === rawDate && lsEditTime >= rawEditTime;

    if (lsDate > rawDate || isManualEdit) {
        // localStorage 日期更新 → 用户手动编辑优先
        if (lsData) {
            delete lsData._manualEdit; // 清理内部标记
            enrichData(lsData);
            console.log('已从 localStorage 加载新闻数据（用户编辑优先）');
            return lsData;
        }
    }

    // data.js 日期 >= localStorage → 新抓取数据优先覆盖
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

    // 尝试 fetch data.json
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
    // 一次性补充被跳过的历史日期（如 5/27→5/29 的更新导致 5/28 版本丢失）
    // 同时清理无效日期（已明确不应存在的日期）
    try {
        const INVALID_DATES = ['2026-05-26'];  // 无内容日期，强制清除
        const confirmed = JSON.parse(localStorage.getItem(CONFIRMED_KEY) || '{}');
        let changed = false;

        // 清除无效日期
        for (const d of INVALID_DATES) {
            if (confirmed[d]) {
                delete confirmed[d];
                changed = true;
                console.log('清除无效日期:', d);
            }
        }

        // 版本检查：种子数据更新后自动清除全部缓存，无需用户手动操作
        const seedVersion = window.__SEED_VERSION || 1;
        const cachedVersion = localStorage.getItem('ai-news-seed-version');
        if (String(seedVersion) !== cachedVersion) {
            localStorage.removeItem(CONFIRMED_KEY);
            localStorage.removeItem(STORAGE_KEY);
            localStorage.setItem('ai-news-seed-version', String(seedVersion));
            console.log('种子数据版本更新，已自动清除全部缓存，刷新后即见最新数据');
        }

        // 注入种子数据（始终覆盖，确保服务端修复能同步到客户端）
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
    // 首先注入种子数据
    seedConfirmedData();

    // 如果旧数据存在，且昨天未确认 → 用旧数据自动确认昨天
    try {
        const oldSaved = localStorage.getItem(STORAGE_KEY);
        if (!oldSaved) return;
        const oldData = JSON.parse(oldSaved);
        const oldDate = oldData.date; // 如 "2026-05-27"
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
    // DOMContentLoaded 可能已经触发过了
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        initPage();
    }
})();

function initPage() {
    // 始终展示最新可用日期的新闻
    // loadNewsDataFromJSON 已自动选择最新数据源（data.js vs localStorage）
    const todayStr = getTodayStr();
    const currentDate = newsData?.date || todayStr;
    const savedDate = localStorage.getItem(LAST_VIEWED_DATE_KEY);

    // 如果数据已更新到更新日期，自动同步并清除旧的历史浏览记录
    if (savedDate && currentDate > savedDate) {
        localStorage.setItem(LAST_VIEWED_DATE_KEY, currentDate);
        console.log(`网页已更新：从 ${savedDate} 自动刷新到最新日期 ${currentDate}`);
    }

    updateHeaderDate();
    renderContent();
    setupEventListeners();
}

// ==================== 全局状态 ====================
const state = {
    currentCategory: 'all',
    isLoading: false
};

// ==================== 初始化 ====================
// 初始化已移至 dataReady（异步加载 data.json 后触发）

function updateHeaderDate(dateStr) {
    // 顶部日期：默认显示更新当天；日期选择器可覆盖
    const today = new Date();
    const d = dateStr ? new Date(dateStr + 'T00:00:00') : today;

    // 更新时间：显示最后一次数据操作时间（scraper 抓取或后台保存）
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

    // 顶部日期：更新当天的日期 + 星期
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

// ==================== 渲染内容 ====================
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

    // 按 rowSizes 分组渲染
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

    // 只保留有卡片的分类
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

    // Tab 切换事件
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
        // 卡片图标：尝试从 VENDOR_DISPLAY 匹配
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

// ==================== 事件监听 ====================
function setupEventListeners() {
    // 分类标签
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchCategory(btn));
    });

    // 日期选择
    setupDateSelector();

    // 导出 PDF
    document.querySelector('.export-btn').addEventListener('click', () => {
        showToast('正在打开打印对话框，选择「存储为PDF」即可...');
        setTimeout(() => window.print(), 500);
    });

    // 回到顶部
    setupBackToTop();

    // 键盘导航
    setupKeyboardNav();

    // 近期新闻标题点击（无新闻厂商卡片内的历史链接）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const title = e.target.closest('.vendor-card-recent-title[data-link]');
        if (!title) return;
        e.stopPropagation();
        e.preventDefault();
        window.open(title.dataset.link, '_blank', 'noopener');
    });

    // 厂商卡片点击（事件委托）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.vendor-card');
        if (!card) return;
        const category = card.dataset.category;
        const vendorIndex = parseInt(card.dataset.vendorIndex);
        openVendorModal(category, vendorIndex);
    });

    // 厂商卡片键盘
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

    // 其他关注卡片点击（事件委托）
    document.getElementById('content-grid').addEventListener('click', (e) => {
        const card = e.target.closest('.other-news-card');
        if (!card) return;
        const catIndex = parseInt(card.dataset.catIndex);
        const cardIndex = parseInt(card.dataset.cardIndex);
        const newsItem = e.target.closest('.vendor-card-news-item');
        const newsIndex = newsItem ? parseInt(newsItem.dataset.newsIndex) : 0;
        openOtherNewsModal(catIndex, cardIndex, newsIndex);
    });

    // 弹窗关闭
    document.getElementById('modal-close').addEventListener('click', closeVendorModal);
    document.getElementById('vendor-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeVendorModal();
    });

    // ESC 关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('vendor-modal').classList.contains('active')) {
                closeVendorModal();
            } else if (document.getElementById('source-modal').classList.contains('active')) {
                closeSourceModal();
            }
        }
    });

    // 信源说明弹窗
    document.getElementById('source-info-btn').addEventListener('click', openSourceModal);
    document.getElementById('source-modal-close').addEventListener('click', closeSourceModal);
    document.getElementById('source-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeSourceModal();
    });

    // 板块折叠
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

    // 限制可选范围：最早有内容的日期 ~ 今天
    const confirmed = getConfirmedDates();
    const confirmedDates = Object.keys(confirmed).sort();
    const minDate = confirmedDates.length > 0 ? confirmedDates[0] : todayStr;
    dateInput.min = minDate;
    dateInput.max = todayStr;

    // 初始值设为当前展示的日期
    const displayDate = newsData?.date || todayStr;
    dateInput.value = displayDate;
    let lastValidDate = displayDate;

    // 点击按钮展开日期选择器
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

        // 校验：只有今天或已确认日期可选
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
    // 从历史确认数据中查找该厂商最近 2-3 条新闻（7 天内窗口）
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
    // 分类标签键盘导航
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

// ==================== 弹窗逻辑 ====================
function openVendorModal(category, vendorIndex) {
    const vendor = newsData.sections[category].vendors[vendorIndex];
    if (!vendor || vendor.news.length === 0) return;

    // Header
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

    // Body — 所有新闻堆叠展示
    renderModalBody(vendor);

    // Show
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

    // 卡片标题由数据决定
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

// ==================== 导出 ====================
function downloadReport() {
    const d = new Date();
    const dateStr = d.toLocaleDateString('zh-CN').replace(/\//g, '-');
    const sections = newsData.sections;

    // Markdown 格式
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

// ==================== 加载 & 通知 ====================
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


// ==================== 控制台 ====================
console.log('%c每日AI早报', 'color: #4a9eff; font-size: 20px; font-weight: bold;');
console.log('%c每天为你精选AI领域最新动态', 'color: #a0a0b0; font-size: 14px;');
