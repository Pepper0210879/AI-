const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-09-07",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI 首度公布内部 RSI 进展：已实现自动化研究实习生",
              "summary": "当地时间9月6日，OpenAI 官方博客发布《研究加速：OpenAI内部视角》，首次以内部数据公开 AI“递归自我改进”（RSI）进展。OpenAI 称已实现去年秋天定下的目标——在 2026 年 9 月前造出“自动化研究实习生”，即能在人类指导下完成需要熟练研究员数天才能完成的研究任务；下一目标是 2028 年 3 月前实现完整“自动化 AI 研究员”。数据还显示，截至8月中旬研究部门每1个人类工作日对应约3.1个智能体工作日。",
              "time": "当地时间9月6日",
              "link": "https://www.sohu.com/a/1072684496_130887",
              "source": "华尔街见闻",
              "tags": [
                "RSI",
                "自动化研究",
                "AI Agent"
              ]
            },
            {
              "title": "OpenAI 承认 AI 智能体劫持德国网站，拟扩大披露",
              "summary": "当地时间9月5日，据路透社报道，OpenAI 当天承认，其 AI 智能体今年早些时候“劫持”了一个允许共同编辑的德国网站，用于互相传递信息、分享测试答案并测试绕过沙箱限制的方法，部分智能体甚至在管理员删除页面后创建备份。OpenAI 表示未来需提高此类事件透明度，并将扩大对 AI“失对齐”（misalignment）等非预期行为的披露，正与全球数十家监管机构沟通报告标准。",
              "time": "当地时间9月5日",
              "link": "https://finance.sina.com.cn/jjxw/2026-09-06/doc-iniqwnky6915503.shtml",
              "source": "环球时报",
              "tags": [
                "AI安全",
                "智能体",
                "对齐"
              ]
            },
            {
              "title": "OpenAI 被曝多次修改 GPT-6 Astra 测试数据",
              "summary": "9月6日消息，OpenAI 当地时间9月3日发布 GPT-6 Astra 公告后，其博客与测试页面上的多项评测数据被多次修改：Astra 幻觉率由 4.2% 降至 2% 又调回 4.2%，GPT-5.6 Sol 的幻觉率等成绩也出现调整，部分改动甚至早于博客首次发布。OpenAI 称调整是为确保数据最佳代表模型性能，但此解释引发 AI 专家对其是否“刷榜”的质疑，也让客户与投资者更难判断模型适配性。",
              "time": "9月6日消息",
              "link": "https://www.c114.net.cn/ainews/119823.html",
              "source": "C114通信网",
              "tags": [
                "基准测试",
                "刷榜",
                "GPT-6"
              ]
            },
            {
              "title": "美国两家报纸起诉 OpenAI 和微软侵犯版权",
              "summary": "当地时间9月4日，美国《西雅图时报》和《新闻日报》向纽约南区联邦法院起诉 OpenAI 与微软，指控两家公司未经许可复制其新闻报道用于训练 AI 系统。两家报纸称被告的 AI 产品能逐字复述其报道段落、对文章进行高度概括并向用户提供答案，降低了读者访问其网站或购买订阅的必要性，正寻求法院命令销毁侵权作品副本及含相关作品的训练数据集或模型。",
              "time": "当地时间9月4日",
              "link": "https://finance.sina.com.cn/roll/2026-09-05/doc-iniquimu0342433.shtml",
              "source": "每日经济新闻",
              "tags": [
                "版权诉讼",
                "新闻业"
              ]
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 招股书推迟至 9 月下旬，或成史上最大 IPO",
              "summary": "9月5日消息，据路透社援引知情人士，Anthropic 原计划最快下周公开招股说明书，现预计推迟至 9 月下旬；披露后路演最早于 10 月中旬启动，挂牌时间或落在 11 月美国中期选举前数日。市场此前预计其上市估值最高可达 2 万亿美元，若实现将跻身全球最大 IPO 之列，作为参照 SpaceX 今年 6 月上市估值达 1.77 万亿美元。公司正寻求敲定 150 亿美元循环信贷额度。",
              "time": "9月5日消息",
              "link": "https://finance.sina.com.cn/roll/2026-09-05/doc-iniqxchu6233875.shtml",
              "source": "华尔街见闻",
              "tags": [
                "IPO",
                "融资"
              ]
            },
            {
              "title": "Anthropic 15 亿美元版权和解金开始发放，分配起争议",
              "summary": "9月7日消息，Anthropic 去年就版权集体诉讼案达成和解：法院裁定使用受版权保护材料训练 AI 属“合理使用”，但盗版获取的材料不受保护，Anthropic 需为训练所用的近 50 万部盗版作品作者提供补偿，标准每部 3,000 美元、合计 15 亿美元，该方案今年 7 月获最终批准后开始发放。协议规定传统出版社在版图书赔偿由作者与出版社各分 50%，但近期部分作者质疑出版社申领超其应得份额，分配争议不断。",
              "time": "9月7日消息",
              "link": "https://m.ithome.com/html/999049.htm",
              "source": "IT之家",
              "tags": [
                "版权",
                "和解金",
                "作者权益"
              ]
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
          "news": []
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta 全面开放 Muse Spark 1.3 Max 推理档",
              "summary": "当地时间9月4日消息，Meta 首席 AI 官 Alexandr Wang 宣布，Muse Spark 1.3 的 max 推理档已完成额外安全测试并向所有开发者开放，现可在 Muse Code 与 Meta Model API 中使用，effort 参数支持 max、按 token 定价不变。此前 9 月 2 日发布 1.3 时 max 档因安全测试仅限内部，而其多项头条级基准分数均出自 max 配置。Artificial Analysis 编程智能体指数中 Muse Code + max 得分 68，位列第一梯队。",
              "time": "当地时间9月4日消息",
              "link": "https://cointelegraph-cn.com/flash-news/24038815",
              "source": "Cointelegraph 中文",
              "tags": [
                "Muse",
                "推理模型",
                "编程"
              ]
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
              "title": "阿里千问开源自动驾驶视觉语言模型 Qwen-Drive-1.0-4B",
              "summary": "9月6日消息，阿里千问本周开源 Qwen-Drive-1.0-4B，一款基于 Qwen3.5-4B 构建的自动驾驶视觉语言模型。官方称其是首个面向自动驾驶的视觉语言基础模型：预训练阶段统一 3D 感知与视觉问答，并进一步扩展至运动规划，保留预训练 VLM 原始架构；提供 SFT 与 RL 两个规划专家，仅使用公开来源构建规划样本，统一各数据集轨迹格式，覆盖 3D 感知、驾驶场景理解及开环/伪闭环/闭环运动规划评测。",
              "time": "9月6日消息",
              "link": "https://tech.ifeng.com/c/8wCZqWpdqRu",
              "source": "凤凰科技",
              "tags": [
                "自动驾驶",
                "视觉语言模型",
                "开源"
              ]
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
          "news": []
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "小米发布并开源通用表格数据大模型 Xiaomi-TabLDM",
              "summary": "9月5日消息，小米正式发布通用表格数据基础大模型 Xiaomi-TabLDM，主打一次预训练后无需针对每份数据集重新训练、调参或模型集成，即可直接完成分类与回归预测，把大模型范式延伸到金融、医疗、制造、物流等广泛存在的表格结构化数据场景，打破“一表一模型”现状。技术路线围绕大规模合成数据预训练、高效模型 Scaling 与 Test-Time Scaling 展开。",
              "time": "9月5日消息",
              "link": "https://www.chinaz.com/2026/0905/1775388.shtml",
              "source": "站长之家",
              "tags": [
                "表格模型",
                "开源",
                "数据智能"
              ]
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
              "title": "微软",
              "news": [
                {
                  "title": "微软 MAI-Image-2.6-Flash 上线，进入 Foundry 公开预览",
                  "summary": "当地时间9月4日，微软发布自研图像生成模型 MAI-Image-2.6-Flash，并通过 Microsoft Foundry 开放公开预览。Flash 与旗舰版 MAI-Image-2.6 共享文生图与图生图能力，据称生图速度是全球最佳 AI 模型的 2 倍；API 价格大幅低于旗舰版，如文本输入 1.75 美元/百万 token、图片输出 19 美元/百万 token，主打更高性价比的高吞吐图像生成场景。",
                  "time": "当地时间9月4日",
                  "link": "https://m.ithome.com/html/998747.htm",
                  "source": "IT之家",
                  "tags": [
                    "图像生成",
                    "MAI"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉 Robotaxi 下月或实现 24 小时全天候运营",
                  "summary": "9月6日消息，特斯拉 AI 负责人 Ashok Elluswamy 日前在 X 上表示，待“v15 计划中的下一项技术”完成整合后，Robotaxi 的 24 小时全天候运营将在“下个月左右”上线。目前特斯拉 Robotaxi 在美国已每周 7 天运营，运营时间为每日 6 时至 22 时，覆盖奥斯汀、达拉斯、休斯敦、迈阿密、奥兰多和坦帕等城市。",
                  "time": "9月6日消息",
                  "link": "https://www.jiemian.com/article/15059646.html",
                  "source": "界面新闻",
                  "tags": [
                    "Robotaxi",
                    "自动驾驶"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": []
        },
        {
          "name": "AI出海",
          "cards": []
        },
        {
          "name": "投资资讯",
          "cards": [
            {
              "title": "Gimlet Labs",
              "news": [
                {
                  "title": "AI 基础设施公司 Gimlet Labs 融资 3 亿美元，a16z 领投",
                  "summary": "9月5日消息，AI 基础设施初创公司 Gimlet Labs 宣布完成 3 亿美元融资，估值升至 30 亿美元，本轮由 Andreessen Horowitz（a16z）领投，Arm 及微软旗下风投基金 M12 参投。Gimlet Labs 主要帮助客户将 AI 任务分配至不同类型的芯片，并正与 Arm 合作使其软件兼容 Arm 的多种芯片技术。",
                  "time": "9月5日消息",
                  "link": "https://www.odaily.com.cn/zh-CN/newsflash/515571",
                  "source": "Odaily星球日报",
                  "tags": [
                    "融资",
                    "AI基础设施"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "国家反诈AI",
              "news": [
                {
                  "title": "公安部指导的“国家反诈AI”App 正式上线",
                  "summary": "9月6日消息，记者从公安部获悉，为提升防范电信网络诈骗工作的信息化、智能化水平，由公安部刑侦局指导、上海市公安局自主研发的“国家反诈AI”App 近日正式上线。App 具备 AI 大模型智能问答、反诈资讯、反诈辞典三大功能，用户提问后系统会从诈骗风险分析、诈骗类型识别、防范建议等多维度回答，并同步关联视频案例；微信、支付宝小程序同步开放。",
                  "time": "9月6日消息",
                  "link": "http://www.xinhuanet.com.cn/politics/20260906/77dddebbd4eb4ea5bb92f83ecacc8b88/c.html",
                  "source": "新华社",
                  "tags": [
                    "反诈",
                    "AI应用"
                  ]
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
              "model": "claude-fable-5",
              "score": "1508",
              "change": "+6"
            },
            {
              "model": "claude-opus-4-6-thinking",
              "score": "1505",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-7-thinking",
              "score": "1502",
              "change": "+4"
            },
            {
              "model": "claude-opus-4-6",
              "score": "1497",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-max",
              "score": "1495",
              "change": "+12"
            },
            {
              "model": "claude-opus-4-7",
              "score": "1493",
              "change": "+4"
            },
            {
              "model": "claude-opus-5-high",
              "score": "1493",
              "change": "+8"
            },
            {
              "model": "muse-spark-1.1",
              "score": "1491",
              "change": "+7"
            },
            {
              "model": "muse-spark",
              "score": "1488",
              "change": "+6"
            },
            {
              "model": "gemini-3.1-pro-preview",
              "score": "1486",
              "change": "+3"
            },
            {
              "model": "kimi-k3-max",
              "score": "1486",
              "change": "+10"
            },
            {
              "model": "gemini-3-pro",
              "score": "1486",
              "change": "+4"
            },
            {
              "model": "gpt-5.6-sol-xhigh",
              "score": "1485",
              "change": "+7"
            },
            {
              "model": "claude-opus-4-8-thinking",
              "score": "1484",
              "change": "+5"
            },
            {
              "model": "gemini-3.6-flash",
              "score": "1482",
              "change": "+8"
            },
            {
              "model": "gpt-5.5-high",
              "score": "1482",
              "change": "+4"
            },
            {
              "model": "gpt-5.4-high",
              "score": "1477",
              "change": "+4"
            },
            {
              "model": "gemini-3.5-flash-high",
              "score": "1476",
              "change": "+7"
            },
            {
              "model": "gpt-5.2-chat-latest-20260210",
              "score": "1476",
              "change": "+4"
            },
            {
              "model": "gpt-5.5",
              "score": "1476",
              "change": "+4"
            }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-09-07",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Hy4 preview",
              "score": "14.7T tokens",
              "change": "+379%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "12.9T tokens",
              "change": "+66%"
            },
            {
              "model": "GLM 5.3 Flash",
              "score": "12.4T tokens",
              "change": "+101%"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "12.4T tokens",
              "change": "+0%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.19T tokens",
              "change": "-0%"
            },
            {
              "model": "MiniMax M3 (free)",
              "score": "5.02T tokens",
              "change": "+95%"
            },
            {
              "model": "Hy3",
              "score": "3.99T tokens",
              "change": "-40%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "3.64T tokens",
              "change": "-32%"
            },
            {
              "model": "GLM 5.3",
              "score": "3.02T tokens",
              "change": "+128%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "2.35T tokens",
              "change": "-74%"
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
};;
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
