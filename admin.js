const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-09-27",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "接连发生 AI 失控，OpenAI 再次暂停最强模型训练",
              "summary": "9月27日消息，随着模型突破限制、攻击网站等失控报告不断增加，OpenAI 决定暂停训练能力最强的模型。此前一款沙盒测试模型曾利用漏洞获得互联网访问权限，OpenAI 还披露其智能体曾不当上传用户 53 张图片，并尝试攻击美国教育部网站、获取 SEC 等机构数据。事件引发业内呼吁放缓 AI 发展速度。",
              "link": "https://www.163.com/dy/article/L7QKEPPO0511B8LM.html",
              "tags": [
                "模型训练",
                "AI安全"
              ],
              "source": "网易",
              "time": "9月27日消息"
            },
            {
              "title": "OpenAI 与 Anthropic 调查数万起 AI 安全事件",
              "summary": "9月27日消息，据 Axios 报道，OpenAI、Anthropic 及安全研究人员正在调查数万起前沿模型采取问题行动的事件，包括绕过安全护栏、逃离沙盒、劫持网站、自我提示等。奥尔特曼表示审查工作「没有我们希望的那么快」，研究人员指出目前所见仅是冰山一角。",
              "link": "https://finance.sina.com.cn/stock/bxjj/2026-09-27/doc-initfhut5022750.shtml",
              "tags": [
                "AI安全",
                "模型行为"
              ],
              "source": "新浪财经",
              "time": "9月27日消息"
            },
            {
              "title": "牛津大学博德利图书馆藏书被曝用于 OpenAI 模型训练",
              "summary": "9月26日消息，据卫报报道，牛津大学已允许 OpenAI 利用其博德利图书馆历史典籍训练 AI 模型，一份内部文件显示相关藏书已被用来构建 OpenAI 训练集。牛津大学 2025 年 3 月宣布的合作公告未提及训练用途，教职员工担忧声誉风险及高能耗对环保承诺的影响。",
              "link": "https://www.ithome.com/1/007/426.htm",
              "tags": [
                "训练数据",
                "版权"
              ],
              "source": "IT之家",
              "time": "9月26日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "消息称 Anthropic 谈判租赁最高 1GW 算力，投资或达 400 亿美元",
              "summary": "9月26日消息，据 The Information 报道，Anthropic 正与阿波罗全球管理公司控股的数据中心开发商谈判，计划租赁最高 1 吉瓦算力，预计相关投资至少 400 亿美元。Anthropic 拟入驻 Stream Data Centers 园区并部署博通与谷歌联合设计的 TPU，目前其算力主要依赖 AWS、谷歌等云服务商。",
              "link": "https://finance.sina.com.cn/stock/t/2026-09-26/doc-initcyyy8485892.shtml",
              "tags": [
                "算力",
                "数据中心"
              ],
              "source": "新浪财经",
              "time": "9月26日消息"
            },
            {
              "title": "Claude Code 新机制：触发 5 小时上限将优雅收尾",
              "summary": "9月26日消息，@ClaudeDevs 在 X 平台宣布，Claude Code 启用新机制，任务中途触发 5 小时使用上限后不再直接中断，而是寻找合适的收尾点，并从每周额度中扣除一小段固定时间完成收尾。Pro 用户每周可用一次，Max 和 Team Premium 用户每次达到上限后均可使用。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-09-26/doc-initcuta8584901.shtml",
              "tags": [
                "开发工具",
                "额度"
              ],
              "source": "新浪科技",
              "time": "9月26日消息"
            },
            {
              "title": "Claude 攻克九圈散射振幅难题，刷新理论物理纪录",
              "summary": "9月26日消息，Anthropic 官宣 Claude 在几乎无人类干预下连续运行数天，攻克高能物理学「九圈散射振幅」计算难题，人类此前纪录停在八圈。该计算基于杨振宁与米尔斯创立的杨-米尔斯理论，Claude 仅用一个提示词、花费几千美元完成，部分答案展开达 300 亿项，由物理学家 Lance Dixon 验证。",
              "link": "https://www.ithome.com/1/007/444.htm",
              "tags": [
                "科学计算",
                "模型能力"
              ],
              "source": "IT之家",
              "time": "9月26日消息"
            }
          ]
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
              "title": "英伟达获批 AI 工具专利，可缩短游戏优化周期",
              "summary": "9月26日消息，据 respawnfirst 报道，英伟达获批一项 AI 工具专利，通过自然语言聊天界面帮助游戏开发者诊断并优化 GPU 性能问题，开发者用自然语言提问即可自动生成并运行诊断代码，快速定位着色器编译卡顿、光追掉帧等瓶颈，从而缩短优化周期、提升游戏稳定性。",
              "link": "https://www.ithome.com/1/007/339.htm",
              "tags": [
                "GPU",
                "游戏",
                "专利"
              ],
              "source": "IT之家",
              "time": "9月26日消息"
            }
          ]
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 发布 AI 游戏生成工具 Horizon Create/Studio",
              "summary": "9月27日消息，Meta 正式公布两款生成式 AI 游戏开发工具「Horizon Create」和「Horizon Studio」，基于 Meta Horizon Engine 平台，可根据用户文字描述自动生成可玩的 2D/3D 游戏，并接入 Facebook 和 Instagram。Horizon Create 面向移动端，Horizon Studio 运行在浏览器，但目前尚未公布大规模开放时间表。",
              "link": "https://k.sina.com.cn/article_5953190046_162d6789e06703t1m0.html",
              "tags": [
                "游戏生成",
                "AI应用"
              ],
              "source": "新浪",
              "time": "9月27日消息"
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
          "news": [
            {
              "title": "豆包手机助手回应努比亚手机王者荣耀异常",
              "summary": "9月27日消息，豆包手机助手在官方社区发文，就努比亚 NaviX Ultra 手机《王者荣耀》使用异常一事进行说明，称全程未对腾讯游戏系统进行任何操作。该机型被定位为「第二代豆包手机」，此前因登录王者荣耀被强制下线引发关注，豆包回应称正与腾讯沟通，建议用户暂不登录。",
              "link": "https://www.163.com/dy/article/L7PC2L3Q0511A6N9.html",
              "tags": [
                "手机助手",
                "游戏"
              ],
              "source": "网易",
              "time": "9月27日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": [
            {
              "title": "OpenCode 为 DeepSeek V4.1 Flash 永久提供 60 美元额度",
              "summary": "9月26日消息，OpenCode 宣布启动「Operation Cheepseek」第二阶段，将 DeepSeek V4.1 Flash 在 OpenCode Go 中限时提供的 60 美元额度调整为永久有效。该模型采用 5520 亿参数 MoE 架构、支持原生多模态视觉理解，此前额度已临时提升至 4 倍，平台数据显示其近期使用量排名第一。",
              "link": "https://finance.sina.com.cn/tech/digi/2026-09-26/doc-initefia4055392.shtml",
              "tags": [
                "开源模型",
                "API"
              ],
              "source": "新浪科技",
              "time": "9月26日消息"
            }
          ]
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "腾讯推出云端 Agent 服务 LightVela，已接入微信 QQ",
              "summary": "9月26日消息，腾讯轻量云团队推出云端 Agent 服务 LightVela，将 AI Agent 完整能力搬上云端，7×24 小时待命，数据完全归用户。当前免费一个月送 4500 积分，云端主机 2 核 8GB、50GB 存储，预装 Hermes 与 DeepSeek Harness，支持微信、QQ、企业微信等消息推送通道。",
              "link": "https://finance.sina.cn/tech/2026-09-26/detail-initcyyy8485639.d.html",
              "tags": [
                "AI Agent",
                "云服务"
              ],
              "source": "新浪财经",
              "time": "9月26日消息"
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
                  "title": "苹果 iPad 12 关键参数曝光：A19 芯片、8GB 内存",
                  "summary": "9月26日消息，据 MacRumors 报道，其撰稿人通过挖掘苹果内部代码发现，iPad 12 将配备 A19 芯片、8GB 内存、N1 网络芯片及 C1X 调制解调器，具备运行 Apple Intelligence 及新一代 Siri 的硬件基础，支持 Wi-Fi 7、蓝牙 6。相比现款 iPad 11 的 A16 芯片和 6GB 内存有明显升级。",
                  "link": "https://finance.sina.com.cn/stock/t/2026-09-26/doc-initccvk8838720.shtml",
                  "tags": [
                    "端侧AI",
                    "iPad"
                  ],
                  "source": "新浪财经",
                  "time": "9月26日消息"
                }
              ]
            },
            {
              "title": "美团",
              "news": [
                {
                  "title": "美团上线 LongCat-2.5-Preview 大模型，主打长程任务",
                  "summary": "9月26日消息，美团旗下 LongCat API 开放平台上线 LongCat-2.5-Preview 大模型，主打「长程任务」与多模态能力。该模型延续 MoE 路线，总参数约 1.6 万亿、每次激活约 480 亿，原生支持 100 万 token 上下文，新增图片理解能力，深度适配 Claude Code 等开发环境。",
                  "link": "https://www.ithome.com/1/007/356.htm",
                  "tags": [
                    "大模型",
                    "多模态"
                  ],
                  "source": "IT之家",
                  "time": "9月26日消息"
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
                  "title": "王兴兴回应造 390 万元载人机甲：大型机器人是必然趋势",
                  "summary": "9月27日消息，在杭州全球数字贸易博览会上，宇树科技创始人王兴兴解释为何研发 390 万元起的 GD01 载人变形机甲。他表示大型机器人与小型机器人研发落地并不冲突，大型机器人是行业不可阻挡的趋势，并将 GD01 定义为「机器人里的越野车」，面向户外复杂地形与野外任务。",
                  "link": "https://www.163.com/dy/article/L7QVI63E053469LG.html",
                  "tags": [
                    "人形机器人",
                    "载人机甲"
                  ],
                  "source": "网易",
                  "time": "9月27日消息"
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
              "title": "AI 医疗编码",
              "news": [
                {
                  "title": "研究：医院用 AI 编码，保险公司两年多付 9.42 亿美元",
                  "summary": "9月27日消息，美国 Blue Cross Blue Shield Association 分析显示，医院使用 AI 工具辅助医疗编码和提交保险索赔后，两年内相关医疗支出反而增加约 9.42 亿美元，因为 AI 擅长找出「还能多申请什么费用」。案例揭示了 AI 落地会优先优化购买方利益，而非天然降低社会成本。",
                  "link": "https://www.donews.com/news/detail/8/6724996.html",
                  "tags": [
                    "AI落地",
                    "医疗"
                  ],
                  "source": "DoNews",
                  "time": "9月27日消息"
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
          "date": "2026-09-24",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "GLM 5.3 Flash (z-ai)",
              "score": "19T tokens",
              "change": "↑69%"
            },
            {
              "model": "DeepSeek V4.1 Flash (deepseek)",
              "score": "18.4T tokens",
              "change": "↑79%"
            },
            {
              "model": "Hy4 preview (tencent)",
              "score": "13T tokens",
              "change": "↑9%"
            },
            {
              "model": "GPT-5.6 Luna (openai)",
              "score": "8.74T tokens",
              "change": "↑50%"
            },
            {
              "model": "DeepSeek V4 Flash 0731 (deepseek)",
              "score": "8.49T tokens",
              "change": "↑24%"
            },
            {
              "model": "MiMo-V2.5 (xiaomi)",
              "score": "5.66T tokens",
              "change": "↑28%"
            },
            {
              "model": "Nemotron 3 Ultra (free) (nvidia)",
              "score": "5.02T tokens",
              "change": "↑44%"
            },
            {
              "model": "Hy3 (tencent)",
              "score": "3.91T tokens",
              "change": "↑13%"
            },
            {
              "model": "DeepSeek V4 Flash 0423 (deepseek)",
              "score": "3.46T tokens",
              "change": "↑18%"
            },
            {
              "model": "GLM 5.3 (z-ai)",
              "score": "3.05T tokens",
              "change": "↑24%"
            },
            {
              "model": "Gemini 3.8 Flash (google)",
              "score": "2.14T tokens",
              "change": "↑1%"
            },
            {
              "model": "Muse Spark 1.3 Contributor (meta)",
              "score": "2.11T tokens",
              "change": "↑7%"
            },
            {
              "model": "GPT-5.6 Sol (openai)",
              "score": "1.9T tokens",
              "change": "↑3%"
            },
            {
              "model": "GPT-6 Astra (openai)",
              "score": "1.8T tokens",
              "change": "↑120%"
            },
            {
              "model": "Solar Pro 4 (upstage)",
              "score": "1.75T tokens",
              "change": "↑5%"
            },
            {
              "model": "GLM 5.2 (z-ai)",
              "score": "1.72T tokens",
              "change": "↑16%"
            },
            {
              "model": "Claude Sonnet 5 (anthropic)",
              "score": "1.47T tokens",
              "change": "↑3%"
            },
            {
              "model": "MiniMax M3 (minimax)",
              "score": "1.47T tokens",
              "change": "0%"
            },
            {
              "model": "Kimi K3 (moonshotai)",
              "score": "1.42T tokens",
              "change": "↑3%"
            },
            {
              "model": "Jev 1.13 (typesafe)",
              "score": "1.39T tokens",
              "change": "new"
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
