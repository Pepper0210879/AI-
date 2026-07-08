const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';

// 默认数据结构（与 script.js 中的 NEWS_DATA 一致）
const DEFAULT_DATA = {
  "date": "2026-07-08",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "color": "#10A37F",
          "softBg": "rgba(16,163,127,0.08)",
          "initial": "O",
          "news": [
            {
              "title": "OpenAI首席未来学家Joshua Achiam宣布月底离职",
              "summary": "7月8日，OpenAI首席未来学家Joshua Achiam在社交媒体上宣布将于本月底离职，结束近九年的任职。他于2017年以实习生身份加入OpenAI，曾负责使命对齐团队，后被调任虚职。这是OpenAI近年安全派系离职潮的最新一例，标志着公司加速向商业化转型。",
              "link": "https://finance.sina.com.cn/roll/2026-07-08/doc-inifzwqh8250727.shtml",
              "tags": ["高层变动", "安全对齐"],
              "source": "新浪财经",
              "time": "7月8日"
            }
          ]
        },
        {
          "name": "Anthropic",
          "color": "#D4A574",
          "softBg": "rgba(212,165,116,0.08)",
          "initial": "A",
          "news": [
            {
              "title": "Claude Cowork扩展至网页与移动端，支持跨设备任务接续",
              "summary": "7月7日，Anthropic宣布Claude Cowork正式扩展至网页端与移动端，用户可在任意设备上发起、监控和接续任务。超90%的使用场景为非代码开发的日常知识工作。首批面向Max计划用户推送Beta测试，其他订阅层级将在数周内跟进。",
              "link": "https://36kr.com/p/3886261266640896",
              "tags": ["产品更新", "移动端"],
              "source": "36氪",
              "time": "7月7日"
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
              "title": "xAI正式更名为SpaceXAI，完成品牌重塑",
              "summary": "7月7日，马斯克旗下AI公司xAI正式完成品牌重塑，更名为SpaceXAI，同步启用全新Logo并更新X平台官方账号。此次重组源于SpaceX今年2月对xAI的收购，马斯克5月曾表示xAI将不再作为独立公司存在，而是并入SpaceX成为其AI业务部门。",
              "link": "https://www.sohu.com/a/1046991421_99900743",
              "tags": ["品牌更名", "组织整合"],
              "source": "搜狐",
              "time": "7月7日"
            },
            {
              "title": "SpaceX公布AI数据中心计划，推进星链卫星脱轨",
              "summary": "7月6日，SpaceX公布全新AI数据中心建设计划，将在美国中西部建设一座250兆瓦的AI数据中心，直接利用星链卫星网络提供高速低延迟数据回传能力，首批投产预计2027年第二季度。同时公司正同步推进约100颗第一代星链卫星脱轨操作。",
              "link": "https://36kr.com/newsflashes/3884777410031879",
              "tags": ["AI基础设施", "数据中心"],
              "source": "36氪",
              "time": "7月6日"
            }
          ]
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
              "title": "Meta发布自研AI图像生成模型Muse Image，免费接入Instagram和WhatsApp",
              "summary": "当地时间7月7日，Meta发布全新AI图像生成模型Muse Image，这是超级智能实验室成立以来首个自研图像模型，支持文生图、图像编辑、文字渲染等功能。模型已接入Meta AI聊天机器人、Instagram和WhatsApp，广告商也可通过Advantage+ creative调用。在Arena.ai文生图排名第二。",
              "link": "https://www.ithome.com/0/973/820.htm",
              "tags": ["图像生成", "产品发布"],
              "source": "IT之家",
              "time": "当地时间7月7日"
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
          "initial": "A",
          "news": []
        },
        {
          "name": "火山引擎",
          "color": "#FF5733",
          "softBg": "rgba(255,87,51,0.08)",
          "initial": "B",
          "news": []
        },
        {
          "name": "DeepSeek",
          "color": "#4D6BFE",
          "softBg": "rgba(77,107,254,0.08)",
          "initial": "D",
          "news": [
            {
              "title": "消息称DeepSeek正在自研AI推理芯片，降低对英伟达和华为依赖",
              "summary": "7月7日，路透社独家报道三位知情人士消息，称DeepSeek正在自研面向推理场景的AI芯片，项目约一年前启动，目前处于早期阶段，已与芯片设计、晶圆代工和存储厂商进行讨论。消息引发英伟达盘前股价下跌约1.6%。",
              "link": "https://www.ithome.com/0/973/810.htm",
              "tags": ["自研芯片", "推理场景"],
              "source": "IT之家",
              "time": "7月7日"
            },
            {
              "title": "前华为天才少年李博杰公开吐槽DeepSeek面试流程",
              "summary": "7月6日，前华为天才少年李博杰在社交平台公开吐槽DeepSeek面试流程，称笔试通过后半个月未安排面试、面试官迟到且质疑他抄袭代码，他感到被严重冒犯后终止面试。DeepSeek对此未作官方置评。",
              "link": "https://m.21jingji.com/article/20260707/herald/8b65799685586edbb2a119ec0c1a65d3.html",
              "tags": ["人才招聘", "面试争议"],
              "source": "第一财经",
              "time": "7月6日"
            }
          ]
        },
        {
          "name": "腾讯",
          "color": "#00A4FF",
          "softBg": "rgba(0,164,255,0.08)",
          "initial": "T",
          "news": [
            {
              "title": "腾讯AI应用生成平台「吐司」iOS版正式上线",
              "summary": "7月6日，腾讯旗下AI应用生成及灵感共创平台「吐司」iOS版正式上线。这是一款零门槛Vibe Coding产品，用户通过自然语言描述需求即可生成专属App。截至7月已生成近5万个应用，累计服务近3万用户。8月将全量开放一站式上架服务。",
              "link": "https://news.qq.com/rain/a/20260707A078CW00",
              "tags": ["Vibe Coding", "应用生成"],
              "source": "腾讯新闻",
              "time": "7月6日"
            },
            {
              "title": "腾讯AI小程序成长计划加码：混元Hy3上线，Token额度提升至10亿",
              "summary": "7月7日，据腾讯公开课消息，AI小程序成长计划大幅升级：大模型Token额度从1亿提升至10亿，AI生图额度从1万张提升至10万张，模型全面升级至混元最新Hy3与Hy Image 3.0。",
              "link": "https://www.ithome.com/0/973/597.htm",
              "tags": ["混元", "开发者生态"],
              "source": "IT之家",
              "time": "7月7日"
            }
          ]
        },
        {
          "name": "小米",
          "color": "#FF6900",
          "softBg": "rgba(255,105,0,0.08)",
          "initial": "M",
          "news": [
            {
              "title": "小米调整小爱同学组织架构：MiMo团队负责基础模型，原负责人王刚调任机器人",
              "summary": "7月7日，36氪消息称小米集团近期对小爱同学进行组织架构调整：基础模型能力由罗福莉领导的MiMo基座大模型团队负责，原负责人王刚（任期近十年）调任机器人业务。小米未来三年将在AI领域投入至少600亿元。",
              "link": "https://36kr.com/p/3885391875242884",
              "tags": ["组织调整", "小爱同学"],
              "source": "36氪",
              "time": "7月7日"
            },
            {
              "title": "小米发布MiMo-V2.5-ASR全链路语音模型，定价0.5元/小时",
              "summary": "7月7日，小米MiMo开放平台上线全链路语音模型听觉基座MiMo-V2.5-ASR，支持方言、中英混识、强噪音场景识别等能力，端到端延迟控制在300毫秒以内，国内定价0.5元/小时。",
              "link": "https://m.ithome.com/html/973369.htm",
              "tags": ["语音识别", "模型发布"],
              "source": "IT之家",
              "time": "7月7日"
            }
          ]
        },
        {
          "name": "智谱AI",
          "color": "#667EEA",
          "softBg": "rgba(102,126,234,0.08)",
          "initial": "Z",
          "news": [
            {
              "title": "智谱辟谣「撤回A股辅导备案」传闻，股价一度涨超10%",
              "summary": "7月7日，针对媒体报道称智谱已撤回A股辅导备案，智谱紧急发布公告辟谣，称报道失实，A股发行辅导工作已完成。受此影响，智谱午后股价一度涨超10%。",
              "link": "https://www.cnstock.com/commonDetail/739703",
              "tags": ["A股上市", "辟谣"],
              "source": "证券之星",
              "time": "7月7日"
            }
          ]
        },
        {
          "name": "月之暗面",
          "color": "#8B5CF6",
          "softBg": "rgba(139,92,246,0.08)",
          "initial": "Y",
          "news": []
        },
        {
          "name": "华为",
          "color": "#CF0A2C",
          "softBg": "rgba(207,10,44,0.08)",
          "initial": "H",
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
                  "title": "微软在Excel和Outlook中改用自研MAI模型，逐步替代OpenAI和Anthropic",
                  "summary": "7月8日消息，微软开始在Excel和Outlook等软件中采用内部自研的MAI模型替代OpenAI和Anthropic的模型以降低AI成本。每周已有数万条AI提示词由MAI模型处理。微软AI负责人此前表示目标是减少并最终消除向外部AI实验室支付的高昂费用。",
                  "link": "https://www.jiemian.com/article/14718882.html",
                  "tags": ["自研模型", "降本"],
                  "source": "界面新闻",
                  "time": "7月8日消息"
                }
              ]
            },
            {
              "title": "玻色量子",
              "news": [
                {
                  "title": "量子计算企业玻色量子启动IPO辅导",
                  "summary": "7月6日，北京玻色量子科技股份有限公司在北京证监局办理IPO辅导备案登记。公司聚焦相干光量子技术路线，2026年5月发布新一代专用量子计算机「驭量·山海1000」，已建成国内首个专用量子计算机规模化制造工厂。",
                  "link": "https://wallstreetcn.com/articles/3776370",
                  "tags": ["IPO", "量子计算"],
                  "source": "华尔街见闻",
                  "time": "7月6日"
                }
              ]
            },
            {
              "title": "支付宝",
              "news": [
                {
                  "title": "支付宝AI开放平台上线开启邀测，覆盖餐饮出行等高频场景",
                  "summary": "7月7日，支付宝正式上线AI开放平台，面向企业开发者、服务商开放邀测。平台支持「一次接入、多端分发」，首批接入品牌包括肯德基、蜜雪冰城、瑞幸、高德打车等，覆盖餐饮、出行、文旅等高频场景。",
                  "link": "https://www.ithome.com/0/973/400.htm",
                  "tags": ["AI开放平台", "智能体商业"],
                  "source": "IT之家",
                  "time": "7月7日"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "蚂蚁灵波",
              "news": [
                {
                  "title": "蚂蚁灵波发布空间感知模型LingBot-Depth 2.0，训练数据扩至1.5亿规模",
                  "summary": "7月7日，蚂蚁集团旗下具身智能公司灵波科技发布空间感知模型LingBot-Depth 2.0，面向机器人真实场景深度补全，训练数据从300万扩展至1.5亿，在16项测评中获得12项第一。同步开源视觉基座模型LingBot-Vision。",
                  "link": "https://m.ithome.com/html/973402.htm",
                  "tags": ["空间感知", "机器人视觉", "开源"],
                  "source": "IT之家",
                  "time": "7月7日"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "Momenta",
              "news": [
                {
                  "title": "Momenta官宣自动驾驶搭载量突破100万台，港股上市在即",
                  "summary": "7月7日，自动驾驶方案商Momenta宣布量产业务搭载规模突破100万台，累计定点车型超210款，合作品牌含奔驰、宝马、奥迪等全球9家车企。公司将于7月8日以6880.HK在港股上市，超额认购413.6倍。",
                  "link": "https://www.ithome.com/0/973/698.htm",
                  "tags": ["量产落地", "港股上市"],
                  "source": "IT之家",
                  "time": "7月7日"
                }
              ]
            },
            {
              "title": "小鹏汽车",
              "news": [
                {
                  "title": "小鹏MONA L03首搭驾驶员失能辅助系统：自动靠边、呼叫救援",
                  "summary": "7月7日，小鹏汽车宣布MONA L03首搭驾驶员失能辅助系统。在高速路辅助驾驶时，若驾驶员失去驾驶能力，车辆可自动靠边停车并呼叫救援，进一步提升自动驾驶安全冗余。",
                  "link": "https://www.ithome.com/0/973/811.htm",
                  "tags": ["驾驶员失能", "安全辅助"],
                  "source": "IT之家",
                  "time": "7月7日"
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
              "title": "李开复（零一万物CEO）",
              "news": [
                {
                  "title": "李开复：AI编程已超过人类，90%以上代码由AI完成",
                  "summary": "7月7日，零一万物创始人李开复在万策AI媒体发布会上表示，过去两年多AI编程能力已全面超过人类，很多公司90%以上代码由AI生成。但他指出程序员最不需要担心被替代，AI是扩展能力的工具。",
                  "link": "https://www.ithome.com/0/973/484.htm",
                  "tags": ["AI编程", "行业观点"],
                  "source": "IT之家",
                  "time": "7月7日"
                }
              ]
            },
            {
              "title": "Google前高管",
              "news": [
                {
                  "title": "Google前高管：22岁AI原生代员工效率已超越资深员工",
                  "summary": "Google前高管、Sierra联合创始人Clay Bavor表示，具备AI素养的22岁毕业生对AI工具的熟练程度和应用直觉已超越许多资深员工。Sierra已调整面试流程，不再依赖传统编程笔试，而是要求候选人用AI编程工具构建应用。",
                  "link": "https://www.163.com/dy/article/L18BEV7O0511B8LM.html",
                  "tags": ["AI原生代", "职场效率"],
                  "source": "商业内幕",
                  "time": "7月7日"
                }
              ]
            },
            {
              "title": "工信部",
              "news": [
                {
                  "title": "工信部：中国规上工业企业AI应用普及率已超30%",
                  "summary": "7月7日，工信部科技司副司长甘小斌表示，今年人形机器人全年整机产量有望突破10万台。目前中国规上工业企业AI应用普及率已超30%，人形机器人开始「进工厂、下车间」。",
                  "link": "https://www.cnstock.com/commonDetail/739679",
                  "tags": ["AI普及率", "人形机器人"],
                  "source": "IT之家",
                  "time": "7月7日"
                }
              ]
            },
            {
              "title": "Omdia",
              "news": [
                {
                  "title": "Omdia：2026年中国半导体市场规模将超8000亿美元，存储芯片暴涨262.9%",
                  "summary": "7月7日，Omdia最新报告显示，2026年中国半导体市场预计同比增长92.9%，达8120.8亿美元。其中存储芯片市场预计增长262.9%，达4496亿美元。AI基础设施建设是主要驱动力。",
                  "link": "https://www.ithome.com/0/973/488.htm",
                  "tags": ["半导体", "存储芯片", "市场报告"],
                  "source": "IT之家",
                  "time": "7月7日"
                }
              ]
            },
            {
              "title": "2026世界人工智能大会",
              "news": [
                {
                  "title": "2026世界人工智能大会将首发全球首款AI智能体手机等多款重磅产品",
                  "summary": "7月7日，上海市政府新闻发布会透露，2026世界人工智能大会将聚焦世界模型、开源智能体、AI Coding等议题。展览将首发华为Atlas 950超节点、MiniMax M3多模态大模型、全球首款AI智能体手机以及多款人形机器人等新品。",
                  "link": "https://news.ifeng.com/c/8uYzkeG6VM3",
                  "tags": ["WAIC", "智能体手机"],
                  "source": "财联社",
                  "time": "7月7日"
                }
              ]
            },
            {
              "title": "港大DeepTutor",
              "news": [
                {
                  "title": "港大数据智能实验室开源AI智能体导师DeepTutor v1.5",
                  "summary": "近日，香港大学数据智能实验室发布开源AI智能体导师DeepTutor v1.5，将聊天、测验、研究、可视化、解题与学习路径规划六个教学环节并入同一智能体运行闭环，通过「追踪森林」机制沉淀学习者画像。",
                  "link": "https://cloud.tencent.com/developer/article/2639541",
                  "tags": ["开源", "AI教育"],
                  "source": "腾讯云",
                  "time": "近日"
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
            { "model": "claude-opus-4-6", "score": "1499", "change": "+4" },
            { "model": "claude-opus-4-7", "score": "1494", "change": "+4" },
            { "model": "muse-spark", "score": "1487", "change": "+6" },
            { "model": "gemini-3.1-pro-preview", "score": "1486", "change": "+4" },
            { "model": "gemini-3-pro", "score": "1486", "change": "+4" },
            { "model": "claude-opus-4-8-thinking", "score": "1484", "change": "+5" },
            { "model": "gpt-5.5-high", "score": "1481", "change": "+5" },
            { "model": "gemini-3.5-flash", "score": "1479", "change": "+6" },
            { "model": "gpt-5.4-high", "score": "1478", "change": "+4" },
            { "model": "claude-opus-4-8", "score": "1477", "change": "+6" },
            { "model": "gpt-5.2-chat-latest-20260210", "score": "1476", "change": "+4" },
            { "model": "qwen3.7-max-preview", "score": "1475", "change": "+10" },
            { "model": "gpt-5.5", "score": "1475", "change": "+5" },
            { "model": "grok-4.20-beta-0309-reasoning", "score": "1475", "change": "+4" },
            { "model": "grok-4.20-beta1", "score": "1474", "change": "+5" },
            { "model": "gemini-3-flash", "score": "1473", "change": "+4" },
            { "model": "claude-opus-4-5-20251101-thinking-32k", "score": "1473", "change": "+4" }
          ]
        },
        {
          "name": "OpenRouter",
          "date": "2026-07-08",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            { "model": "DeepSeek V4 Flash", "score": "5.44T tokens", "change": "↑14%" },
            { "model": "MiMo-V2.5", "score": "4.46T tokens", "change": "↑5%" },
            { "model": "MiniMax M3", "score": "4.24T tokens", "change": "↑15%" },
            { "model": "GLM 5.2", "score": "2.9T tokens", "change": "↑25%" },
            { "model": "DeepSeek V4 Pro", "score": "2.71T tokens", "change": "↑26%" },
            { "model": "Claude Opus 4.7", "score": "2.47T tokens", "change": "↑23%" },
            { "model": "Hy3 preview", "score": "2.3T tokens", "change": "↑37%" },
            { "model": "Claude Opus 4.8", "score": "2.06T tokens", "change": "↑6%" },
            { "model": "Step 3.7 Flash", "score": "1.53T tokens", "change": "↑2%" },
            { "model": "Claude Sonnet 4.6", "score": "1.24T tokens", "change": "↑21%" }
          ]
        },
        {
          "name": "Product Hunt",
          "date": "2026-07-06",
          "link": "https://www.producthunt.com/",
          "rankings": [
            { "name": "AnySearch", "category": "Developer Tools", "rank": 1, "link": "https://www.anysearch.com" },
            { "name": "Octolens", "category": "Marketing", "rank": 2, "link": "https://octolens.com" },
            { "name": "Typeahead 2.0", "category": "Productivity", "rank": 3, "link": "https://www.producthunt.com/products/typeahead/launches/typeahead-2-0" },
            { "name": "Sunrise", "category": "Productivity", "rank": 4, "link": "https://www.producthunt.com/products/sunrise-5" },
            { "name": "Stanley Studio", "category": "Social Media", "rank": 5, "link": "https://studio.getstanley.ai/" },
            { "name": "AirKaren", "category": "Customer Success", "rank": 6, "link": "https://www.producthunt.com/posts/airkaren" },
            { "name": "Edge Claude Code Compressor V2", "category": "API", "rank": 7, "link": "https://www.producthunt.com/posts/edge-claude-code-compressor-v2" },
            { "name": "Astryx", "category": "Design Tools", "rank": 8, "link": "https://www.producthunt.com/posts/astryx" },
            { "name": "CodeMote", "category": "iOS", "rank": 9, "link": "https://www.producthunt.com/posts/codemote" },
            { "name": "Nixmac", "category": "Open Source", "rank": 10, "link": "https://www.producthunt.com/posts/nixmac" },
            { "name": "Mozaik", "category": "Developer Tools", "rank": 11, "link": "https://www.producthunt.com/posts/mozaik" },
            { "name": "Cadence", "category": "Productivity", "rank": 12, "link": "https://www.producthunt.com/posts/cadence" }
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
