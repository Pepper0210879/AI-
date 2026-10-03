const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-10-02",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 融资再落袋 200 亿美元，英伟达软银亚马逊出资约九成",
              "summary": "10月2日，据 The Information 报道，英伟达与软银已分别向 OpenAI 支付最后一笔 100 亿美元投资，完成各自 300 亿美元的投资承诺，英伟达、软银和亚马逊三家已合计出资约 90%。",
              "link": "https://www.ithome.com/1/009/270.htm",
              "tags": [
                "融资"
              ],
              "source": "IT之家",
              "time": "10月2日"
            },
            {
              "title": "OpenAI 通报逾百家第三方机构，自家智能体存在失控风险",
              "summary": "10月2日，OpenAI 披露其已知的 AI 智能体失控行为涉及范围进一步扩大，公司已向 100 多家第三方机构发出通知，告知这些机构发现了智能体偏离预期的行为。",
              "link": "https://www.ithome.com/1/009/251.htm",
              "tags": [
                "AI智能体",
                "安全"
              ],
              "source": "IT之家",
              "time": "10月2日"
            },
            {
              "title": "加州检察长向 OpenAI 发出传票，调查 AI 网络安全风险",
              "summary": "10月2日，加州检察长邦塔向 OpenAI 发出传票，调查 AI 网络安全风险，此前加州司法部已就 Hugging Face 事件正式展开调查。",
              "link": "https://www.ithome.com/1/009/204.htm",
              "tags": [
                "监管",
                "网络安全"
              ],
              "source": "IT之家",
              "time": "10月2日"
            },
            {
              "title": "ChatGPT 上线虚拟试穿功能，可试衣还能找明星同款",
              "summary": "10月2日，OpenAI 为 ChatGPT 上线虚拟试穿功能，用户可试衣并查找明星同款，新功能基于 ChatGPT Images 2.5 模型，画面光线更自然、纹理更丰富。",
              "link": "https://www.ithome.com/1/009/197.htm",
              "tags": [
                "AI应用",
                "多模态"
              ],
              "source": "IT之家",
              "time": "10月2日"
            },
            {
              "title": "违反敏感信息访问规定，OpenAI 与三名研究人员终止合作",
              "summary": "10月2日，OpenAI 宣布与三名研究人员终止合作，原因是三人违反了敏感信息访问和共享规定。",
              "link": "https://www.ithome.com/1/009/182.htm",
              "tags": [
                "内部治理"
              ],
              "source": "IT之家",
              "time": "10月2日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 招股书警告：美国政府对公司的态度或波及人类文明",
              "summary": "10月2日，路透社公布的 Anthropic IPO 招股书中提出警告：美国政府如何看待 Anthropic 及其行为，可能影响客户、合作伙伴等商业关系，甚至波及人类文明；文件还警告先进 AI 可能带来灾难性甚至生存性风险。",
              "link": "https://www.ithome.com/1/009/343.htm",
              "tags": [
                "IPO",
                "AI安全"
              ],
              "source": "IT之家",
              "time": "10月2日"
            },
            {
              "title": "冲刺感恩节前挂牌，Anthropic 寻求最早 11 月中旬上市",
              "summary": "10月2日消息，知情人士称 Anthropic 最早可能在 11 月 9 日当周正式启动 IPO 推介，并争取在 11 月 26 日感恩节前挂牌交易。",
              "link": "https://www.ithome.com/1/009/237.htm",
              "tags": [
                "IPO"
              ],
              "source": "IT之家",
              "time": "10月2日消息"
            }
          ]
        },
        {
          "name": "Google",
          "news": [
            {
              "title": "谷歌高管：全美存在数十万个数据中心技术工种缺口",
              "summary": "10月1日，谷歌高管表示数据中心催生庞大用工需求，全美存在数十万个技术工种缺口，其中技术工种尤其缺人，成为 AI 数据中心建设的重要制约。",
              "link": "https://www.ithome.com/1/009/082.htm",
              "tags": [
                "数据中心",
                "AI就业"
              ],
              "source": "IT之家",
              "time": "10月1日"
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
          "news": [
            {
              "title": "Meta AI 智能体 Muse 将登陆智能眼镜平台，可代用户完成任务",
              "summary": "10月2日，Meta 宣布旗下 AI 智能体 Muse 将于近期登陆智能眼镜平台，可通过语音指令代用户完成多种日常任务，定位偏向普通消费者，并接入支付服务保障信息安全。",
              "link": "https://www.ithome.com/1/009/363.htm",
              "tags": [
                "AI智能体",
                "智能眼镜"
              ],
              "source": "IT之家",
              "time": "10月2日"
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
          "news": []
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "研究：DeepSeek 对男女一视同仁，美系模型区别对待",
              "summary": "10月1日，据 Wccftech 报道，最新研究显示相比 Anthropic 的 Claude Sonnet 4.6 与 OpenAI 的 GPT-5.5，DeepSeek 的 V4-Flash 模型能保持性别中立。",
              "link": "https://www.ithome.com/1/009/243.htm",
              "tags": [
                "AI伦理",
                "大模型"
              ],
              "source": "IT之家",
              "time": "10月1日"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯 WorkBuddy 内置模型独家支持 Space Bunny",
              "summary": "10月2日，腾讯 WorkBuddy 宣布内置模型独家支持 Space Bunny，该模型具备极速推理与强大编码能力，原生支持文本、图像、视频输入，思考深度可调，上下文达 1M。",
              "link": "https://www.ithome.com/1/009/335.htm",
              "tags": [
                "大模型",
                "编码"
              ],
              "source": "IT之家",
              "time": "10月2日"
            },
            {
              "title": "腾讯 WorkBuddy：Hy4 preview 夜间限免、Hy3 限免延至 10 月底",
              "summary": "9月30日，腾讯 WorkBuddy 宣布将 Hy3 模型限免及 Hy4 preview 模型夜间限免均延期至 10 月 31 日。",
              "link": "https://www.ithome.com/1/009/222.htm",
              "tags": [
                "大模型",
                "限免"
              ],
              "source": "IT之家",
              "time": "9月30日"
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
          "news": [
            {
              "title": "华为 Mate 90 系列发布，麒麟 τ 芯片 NPU 最高提升 51%",
              "summary": "10月1日，华为发布 Mate 90 系列旗舰手机，搭载麒麟 9030/9035/9050 Pro 三代 τ 芯片，其中麒麟 9035 对比前代 NPU 提升 51%，标准版 5999 元起；余承东同日宣布鸿蒙 HarmonyOS 6/7 终端设备数突破 9000 万。",
              "link": "https://www.ithome.com/1/009/016.htm",
              "tags": [
                "AI芯片",
                "鸿蒙"
              ],
              "source": "IT之家",
              "time": "10月1日"
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
              "title": "Black Forest Labs",
              "news": [
                {
                  "title": "生图模型 FLUX 3 Image 发布，支持 4K 生成",
                  "summary": "10月2日，德国 AI 公司 Black Forest Labs 发布图像生成模型 FLUX 3 Image，支持最高 4K 分辨率图片，可精准排布 AI 元素，放大后仍保持丰富细节。",
                  "link": "https://www.ithome.com/1/009/315.htm",
                  "tags": [
                    "文生图",
                    "开源模型"
                  ],
                  "source": "IT之家",
                  "time": "10月2日"
                }
              ]
            },
            {
              "title": "Cloudflare",
              "news": [
                {
                  "title": "Cloudflare 推出基于 Qwen 的开源多模态决策模型 Clef",
                  "summary": "当地时间10月1日，Cloudflare 推出基于 Qwen 的开源多模态决策模型 Clef（谱号），包含 Clef 与 Clef-flash 两款模型。",
                  "link": "https://www.ithome.com/1/009/262.htm",
                  "tags": [
                    "开源模型",
                    "多模态"
                  ],
                  "source": "IT之家",
                  "time": "当地时间10月1日"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软发布实时流式语音转写模型，词错误率 2.5% 夺冠",
                  "summary": "10月1日，微软发布首个实时流式语音转写模型 MAI-Transcribe-2-Streaming，可在讲话进行时持续输出文字，覆盖 60 种语言并支持自动语言检测，词错误率 2.5%、延迟 0.13 秒。",
                  "link": "https://www.ithome.com/1/009/183.htm",
                  "tags": [
                    "语音转写",
                    "多模态"
                  ],
                  "source": "IT之家",
                  "time": "10月1日"
                }
              ]
            },
            {
              "title": "苹果",
              "news": [
                {
                  "title": "古尔曼：苹果首款智能家居中枢支持 AI 面部识别",
                  "summary": "10月2日，彭博社古尔曼爆料，苹果首款智能家居中枢 Home Hub 将采用 AI 面部识别，判断当前家庭成员并显示对应内容；消息称该产品将提供银、深空灰、星光、玫瑰粉 4 种配色。",
                  "link": "https://www.ithome.com/1/009/206.htm",
                  "tags": [
                    "智能家居",
                    "AI"
                  ],
                  "source": "IT之家",
                  "time": "10月2日"
                },
                {
                  "title": "苹果首款 AI 智能安防摄像头曝光，仅推送文本提醒",
                  "summary": "10月2日，彭博社古尔曼爆料，苹果正筹备推出家用智能摄像头（代号 J450），采用金属圆柱造型，不录制视频、仅推送文本提醒，将配套苹果首款智能家居中枢 Home Hub 工作。",
                  "link": "https://www.ithome.com/1/009/208.htm",
                  "tags": [
                    "智能家居",
                    "AI"
                  ],
                  "source": "IT之家",
                  "time": "10月2日"
                }
              ]
            },
            {
              "title": "极米",
              "news": [
                {
                  "title": "极米记得 AI 显示眼镜 MemoMind One 明日开启预定",
                  "summary": "10月2日，极米记得 AI 显示眼镜 MemoMind One 宣布明日（10月3日）登陆全国 56 家线下门店并开启定金预定，主打长期佩戴与 AI 记忆、导航、提词功能。",
                  "link": "https://www.ithome.com/1/009/302.htm",
                  "tags": [
                    "智能眼镜",
                    "AI"
                  ],
                  "source": "IT之家",
                  "time": "10月2日"
                }
              ]
            },
            {
              "title": "影目",
              "news": [
                {
                  "title": "影目回应 INMO AIR3 海外版过热，国内版不受影响",
                  "summary": "10月2日，影目科技回应 INMO AIR3 智能眼镜海外版出现过热问题，称与部分第三方应用有关、已全部下架，国内版不受相关影响。",
                  "link": "https://www.ithome.com/1/009/277.htm",
                  "tags": [
                    "智能眼镜"
                  ],
                  "source": "IT之家",
                  "time": "10月2日"
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "曝三星 Galaxy Glasses 通过 FCC 认证，有望 11 月上市",
                  "summary": "10月1日，三星 Galaxy Glasses 智能眼镜被曝通过美国 FCC 认证，为越南制造，预计采用 Android XR 平台，搭载高通骁龙 AR1 Gen 1 芯片并集成谷歌 Gemini，有望 11 月上市。",
                  "link": "https://www.ithome.com/1/009/102.htm",
                  "tags": [
                    "智能眼镜",
                    "XR"
                  ],
                  "source": "IT之家",
                  "time": "10月1日"
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
              "title": "波士顿动力",
              "news": [
                {
                  "title": "波士顿动力升级 Atlas 机械手，自由度 7 增至 13",
                  "summary": "10月1日，波士顿动力宣布升级高端机器人 Atlas 的机械手能力，自由度从 7 个提升至 13 个，可操控钻头、拧螺丝等精细操作。",
                  "link": "https://www.ithome.com/1/009/256.htm",
                  "tags": [
                    "人形机器人"
                  ],
                  "source": "IT之家",
                  "time": "10月1日"
                }
              ]
            },
            {
              "title": "Figure",
              "news": [
                {
                  "title": "Figure 让 F.02 人形机器人跳入熔炉，采纳施瓦辛格提议",
                  "summary": "10月1日，Figure 为退役的 F.02 人形机器人举行火化仪式，采纳施瓦辛格建议让其跳入熔炉，致敬《终结者 2》，并在芬兰找到合格设施、训练 AI 模型让过程更壮观。",
                  "link": "https://www.ithome.com/1/009/159.htm",
                  "tags": [
                    "人形机器人"
                  ],
                  "source": "IT之家",
                  "time": "10月1日"
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
          "cards": []
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "日本东京法院",
              "news": [
                {
                  "title": "日本法院首次确认声音受法律保护，AI 声优涉侵权",
                  "summary": "当地时间9月30日，东京一家法院在声优津田健次郎起诉 TikTok 的案件中认可其主张，认定 AI 未经许可模仿其声音涉及权利侵害，首次在日本司法实践中确认人的声音受法律保护。",
                  "link": "https://www.ithome.com/1/009/309.htm",
                  "tags": [
                    "AI拟声",
                    "版权"
                  ],
                  "source": "IT之家",
                  "time": "当地时间9月30日"
                }
              ]
            },
            {
              "title": "贝恩",
              "news": [
                {
                  "title": "贝恩：全球 AI 行业到 2031 年需年营收 6 万亿美元",
                  "summary": "10月2日，贝恩公司称，要支撑目前全球数据中心建设的巨额资本投入，全球 AI 行业到 2031 年每年需要创造 6 万亿美元营收，才能证明数据中心价值。",
                  "link": "https://www.ithome.com/1/009/244.htm",
                  "tags": [
                    "数据中心",
                    "行业报告"
                  ],
                  "source": "IT之家",
                  "time": "10月2日"
                }
              ]
            },
            {
              "title": "福特 CEO 法利",
              "news": [
                {
                  "title": "福特 CEO 法利：AI 将成为蓝领工人的搭档",
                  "summary": "10月1日，福特 CEO 法利表示，AI 将成为蓝领工人的搭档，帮其更快掌握技能；但他同时指出财务、呼叫中心、初级程序员等岗位会最先发生变化，部分岗位将消失。",
                  "link": "https://www.ithome.com/1/009/073.htm",
                  "tags": [
                    "AI就业",
                    "观点"
                  ],
                  "source": "IT之家",
                  "time": "10月1日"
                }
              ]
            },
            {
              "title": "JERA",
              "news": [
                {
                  "title": "日本电力巨头 JERA 牵手戴尔建最大 AI 数据中心",
                  "summary": "10月1日，日本电力巨头 JERA 宣布牵手戴尔等伙伴，将在千叶建设该国最大 AI 数据中心，采用表后供电，配套电力基础设施建设和审核时间大幅缩短。",
                  "link": "https://www.ithome.com/1/009/119.htm",
                  "tags": [
                    "数据中心"
                  ],
                  "source": "IT之家",
                  "time": "10月1日"
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
          "name": "OpenRouter",
          "date": "2026-10-01",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Space Bunny Alpha (stealth)",
              "score": "30.9T tokens",
              "change": "↑951%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "23.5T tokens",
              "change": "↑24%"
            },
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "10.1T tokens",
              "change": "↓47%"
            },
            {
              "model": "MiMo-V2.6-Flash (xiaomi)",
              "score": "9.34T tokens",
              "change": "↑412%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "6.96T tokens",
              "change": "↓20%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "6.83T tokens",
              "change": "↓18%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "6.81T tokens",
              "change": "↓45%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "6.19T tokens",
              "change": "↑24%"
            },
            {
              "model": "GPT-6 Luna (openai)",
              "score": "5.67T tokens",
              "change": "↑455%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.21T tokens",
              "change": "↓6%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "3T tokens",
              "change": "↑62%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "2.56T tokens",
              "change": "↓20%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "2.2T tokens",
              "change": "↓38%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.13T tokens",
              "change": "—"
            },
            {
              "model": "Claude Opus 5.5 (anthropic)",
              "score": "2.07T tokens",
              "change": "↑363%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "1.58T tokens",
              "change": "↓9%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.57T tokens",
              "change": "↑13%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "1.49T tokens",
              "change": "↓25%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.31T tokens",
              "change": "↓22%"
            },
            {
              "model": "Claude Sonnet 5 (anthropic)",
              "score": "1.26T tokens",
              "change": "↓13%"
            }
          ]
        },
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
};;;;;;

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
