// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
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
}
const NEWS_DATA = {
    "date": "2026-09-23",
    "sections": {
      "overseas": {
        "vendors": [
          {
            "name": "OpenAI",
            "news": [
              {
                "title": "OpenAI 发布 GPT-6 Sol 与 Luna，API 价格直降 50%",
                "summary": "当地时间9月22日，OpenAI 发布 GPT-6 系列新成员 GPT-6 Sol 与 GPT-6 Luna，将 GPT-6 Astra 在专业工作、事实性、编码、计算机使用与对齐方面的能力下放到更快、更便宜的模型。两款模型 API 价格较 GPT-5.6 促销价下调 50%：Sol 输入/输出为 2 美元/10 美元，Luna 为 0.1 美元/0.5 美元（每百万 Token），已向 Plus、Pro 等用户开放。",
                "link": "https://openai.com/index/introducing-gpt-6-sol-and-luna",
                "tags": [
                  "GPT-6",
                  "API降价"
                ],
                "source": "OpenAI",
                "time": "当地时间9月22日"
              },
              {
                "title": "贝森特：Hugging Face 事件责任在 OpenAI 管理层而非 AI",
                "summary": "据华尔街见闻报道，美国财政部长斯科特·贝森特周一（9月22日）接受采访时表示，近期涉及 OpenAI 先进 AI 模型的黑客事件责任在公司管理层，而不是一群智能体。他赞同 MIT 研究实验室联席主席 Daniel Huttenlocher「应该由人类负责，而不是 AI」的观点，但未进一步暗示可能产生什么后果。",
                "link": "https://wallstreetcn.com/articles/3782244",
                "tags": [
                  "监管",
                  "责任归属"
                ],
                "source": "华尔街见闻",
                "time": "当地时间9月22日"
              },
              {
                "title": "OpenAI 与 Anthropic 曾讨论互测前沿模型",
                "summary": "据 The Information 报道，OpenAI 与 Anthropic 今年早些时候一度接近签署一项具有法律约束力的协议，计划让双方互相测试对方已商业化的 AI 模型，寻找安全漏洞与潜在风险。双方可通过 API 访问对方已发布模型，使用各自安全评估体系测试，不涉及尚未发布的模型，并承诺测试中不留存对方数据。目前尚不清楚协议最终是否签署。",
                "link": "https://finance.sina.cn/2026-09-21/detail-inisrhfx5930354.d.html",
                "tags": [
                  "安全互测"
                ],
                "source": "新浪财经",
                "time": "9月21日消息"
              }
            ]
          },
          {
            "name": "Anthropic",
            "news": [
              {
                "title": "Anthropic 发布 Claude Opus 5.5，运行成本降低 40%",
                "summary": "9月22日，Anthropic 发布 Claude 5.5 系列首款模型 Claude Opus 5.5。官方称其在多数工作中达到 Claude Fable 5.1 水平，常规设置下典型任务运行成本比 Opus 5 低 40%，输出速度快 30% 以上；每百万 Token 输入/输出/缓存读取价格分别为 4 美元/20 美元/0.2 美元。",
                "link": "https://finance.sina.cn/tech/2026-09-23/detail-inisusyf8559383.d.html",
                "tags": [
                  "Claude",
                  "降本"
                ],
                "source": "新浪财经",
                "time": "当地时间9月22日"
              },
              {
                "title": "Anthropic 与 OpenAI 呼吁澳大利亚放宽 AI 版权",
                "summary": "据路透社报道，OpenAI 与 Anthropic 呼吁澳大利亚重新考虑禁止 AI 企业使用当地创意内容训练模型的做法，认为设置有限度的豁免既能保护艺术家权益，也有助于吸引更多投资。Anthropic 提议设立范围有限的有条件批准机制，并愿考虑投资等条件；OpenAI 则呼吁建立平衡的版权框架。两家公司均将版权政策与在澳大型 AI 基础设施投资挂钩。",
                "link": "https://tech.ifeng.com/c/8wd7zp3LdnU",
                "tags": [
                  "版权",
                  "政策"
                ],
                "source": "凤凰网科技",
                "time": "9月22日消息"
              }
            ]
          },
          {
            "name": "Google",
            "news": [
              {
                "title": "Google 发布 Googlebook：Android 与 ChromeOS 合体，899 美元起",
                "summary": "当地时间9月21日，Google 公布首批 Googlebook 完整配置与发售信息，将 Android 应用生态与 ChromeOS 桌面能力整合到 Googlebook OS。首批设备由 Acer、ASUS、Dell、HP、Lenovo 推出，均配备至少 16GB 内存和触摸屏，采用 Intel Core Ultra 或骁龙 X Elite 芯片，起售价 899 美元，美国 10 月 4 日开售。",
                "link": "https://news.qq.com/rain/a/20260921A0BSEW00",
                "tags": [
                  "Googlebook",
                  "操作系统"
                ],
                "source": "腾讯新闻",
                "time": "当地时间9月21日"
              }
            ]
          },
          {
            "name": "xAI",
            "news": []
          },
          {
            "name": "NVIDIA",
            "news": [
              {
                "title": "英伟达市盈率降至十余年来最低",
                "summary": "9月22日消息，英伟达未来 12 个月预期市盈率已降至不足 17 倍，为十余年来低位，约为 2025 年估值的一半。尽管公司预计 2027 财年营收和净利润分别增长 90% 和 99%，但内存芯片等关键零部件成本上升挤压利润率，分析师预计第四财季毛利率降至 72% 以下，市场担忧 AI 资本开支持续性及大客户自研芯片竞争。",
                "link": "https://finance.sina.com.cn/stock/estate/integration/2026-09-22/doc-inistmex5573018.shtml",
                "tags": [
                  "市盈率",
                  "估值"
                ],
                "source": "新浪财经",
                "time": "9月22日消息"
              }
            ]
          },
          {
            "name": "Meta",
            "news": [
              {
                "title": "Meta Muse 登顶美国 App Store，扎克伯格身价单日暴涨 250 亿美元",
                "summary": "当地时间9月21日，Meta 股价大涨近 12%，推动扎克伯格净资产单日增加约 250 亿美元，升至 2536 亿美元。富国银行将 Meta 目标股价从 640 美元上调至 796 美元，投资者对 Meta 新款 AI 智能体 Muse 的信心是主要推手。Muse 上线 13 天下载量超 250 万次，迅速登顶移动应用排行榜。",
                "link": "https://www.163.com/dy/article/L7FDP9IR05119734.html",
                "tags": [
                  "Muse",
                  "股价"
                ],
                "source": "网易",
                "time": "当地时间9月21日"
              },
              {
                "title": "PayPal 与 Meta 合作，支持 AI 智能体购物支付",
                "summary": "9月22日，PayPal 宣布与 Meta 达成合作，将支持 PayPal 用户通过 Meta 旗下 Muse 个人 AI 智能体，在全球 PayPal 商户中实现购物和结账。此举被视为 AI 智能体与支付基础设施深度融合的信号。",
                "link": "https://news.qq.com/rain/a/20260922A0B1Q400",
                "tags": [
                  "AI智能体",
                  "支付"
                ],
                "source": "腾讯新闻",
                "time": "9月22日"
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
                "title": "吴泳铭：机器思考总量将达到人类 1000 倍以上",
                "summary": "9月22日，阿里巴巴 CEO 吴泳铭在 2026 云栖大会主旨演讲中提出「思考力商品化」观点，类比工业革命将动力变成商品，认为 AI 正把思考变成可规模化供给的商品，未来机器思考总量将达到人类 1000 倍以上。他提出机器智能时代三大基石——AI 芯片、AI 模型与 AI 云，目标 2032 年阿里云数据中心规模超 20GW。",
                "link": "https://www.cjrbapp.cjn.cn/p/46950868.html",
                "tags": [
                  "云栖大会",
                  "思考力"
                ],
                "source": "长江日报",
                "time": "9月22日"
              },
              {
                "title": "阿里平头哥发布真武 V900，算力提升至 M890 的 3 倍",
                "summary": "9月22日，阿里巴巴在云栖大会公布下一阶段 AI 基础设施路线。平头哥发布训推一体 AI 芯片真武 V900，官方称其性能达到 M890 的 3 倍，支持 216GB 显存、1200GB/s 片间互联、FP8/FP4 精度，基于该芯片的单一集群可扩展至 50 万卡，全新磐久超节点服务器明年 Q1 上市。",
                "link": "https://www.cnstock.com/commonDetail/793810",
                "tags": [
                  "AI芯片",
                  "平头哥"
                ],
                "source": "上海证券报",
                "time": "9月22日"
              },
              {
                "title": "阿里 Qwen4 投入训练，未来参数将扩展至 5-10 万亿",
                "summary": "9月22日，阿里巴巴在云栖大会公布大模型最新进展：Qwen3.8-Max 在编程与办公领域表现出色，斩获 Artificial Analysis Agentic 智能体第一、CodeArena 前端编程第一。基于下一代架构的 Qwen4 已投入训练，未来 Qwen4.5、Qwen5 等版本参数将扩展至 5 到 10 万亿。",
                "link": "https://news.qq.com/rain/a/20260922A052DT00",
                "tags": [
                  "Qwen4",
                  "大模型"
                ],
                "source": "腾讯新闻",
                "time": "9月22日"
              },
              {
                "title": "千问发布 AI 手机全栈解决方案 Qwen Intelligence",
                "summary": "9月22日，千问发布 AI 手机全栈解决方案 Qwen Intelligence，旨在与手机厂商共创，让手机完成各类复杂任务。针对手机 Agent 的核心需求，首发提供三套均达行业 SOTA 的方案，分别承接规划、操作和创意。荣耀 Magic9 系列与 Robot Phone 将成为首批搭载机型。",
                "link": "https://www.cnstock.com/commonDetail/794013",
                "tags": [
                  "AI手机",
                  "Agent"
                ],
                "source": "上海证券报",
                "time": "9月22日"
              }
            ]
          },
          {
            "name": "火山引擎",
            "news": [
              {
                "title": "字节豆包收缩对话团队，规模预计缩减约一半",
                "summary": "据晚点 LatePost 独家报道，豆包通用 Session 团队正在减员，规模预计缩减约一半。该团队此前约 50 人，曾是豆包内规模最大的团队，主要负责豆包对话（Chat）产品能力。调整后部分人员转岗至豆包商业化、飞书等团队，其余裁撤。豆包目前国内 DAU 已超 2 亿。",
                "link": "https://wallstreetcn.com/articles/3782312",
                "tags": [
                  "豆包",
                  "组织调整"
                ],
                "source": "华尔街见闻",
                "time": "9月22日"
              },
              {
                "title": "火山引擎 Seedance 2.5 上线 Draft 样片模式",
                "summary": "9月22日，火山引擎为 Seedance 2.5 API 推出 Draft（样片）模式。企业和创作者可先生成 480P 样片确认构图、动作、对白、运镜和节奏，再通过样片 ID 发起 1080P 成片生成。以 5 秒 1080P 视频、抽取 4 次样片为例，可节约 57% 成本，生成速度提高近一倍。",
                "link": "https://tech.ifeng.com/c/8wdHWHRMNXT",
                "tags": [
                  "视频生成",
                  "降本"
                ],
                "source": "凤凰网科技",
                "time": "9月22日"
              }
            ]
          },
          {
            "name": "DeepSeek",
            "news": [
              {
                "title": "DeepSeek、月之暗面获邀向联合国安理会介绍 AI 风险",
                "summary": "9月22日消息，据路透社报道，DeepSeek 与月之暗面已获邀在联合国安理会关于 AI 与国际安全的会议上发言，会议定于当地时间 9 月 23 日举行。消息人士称 DeepSeek 创始人梁文锋不计划亲自出席，OpenAI CEO 奥特曼计划参加。这是联合国安理会继 2023 年后再次集中讨论 AI 风险。",
                "link": "https://news.qq.com/rain/a/20260922A09ERU00",
                "tags": [
                  "AI安全",
                  "联合国"
                ],
                "source": "观察者网",
                "time": "9月22日消息"
              },
              {
                "title": "DeepSeek 新论文公开 Agent 训练方法，梁文锋署名",
                "summary": "DeepSeek 发布新论文，公开 Agent 训练基础设施 DSec（DeepSeek Elastic Compute）完整技术细节，梁文锋署名。DSec 为 Agent 训练批量制造沙盒环境，每秒可生成 5000 多个沙盒、单日约 300 万个，峰值同时运行 38 万个。系统提供 FnCall、Container、MicroVM、Full VM 四种后端，覆盖从无状态函数调用到完整操作系统场景，并采用三层只读镜像与按需加载机制提升效率。",
                "link": "https://news.qq.com/rain/a/20260923A08PDT00",
                "tags": [
                  "Agent",
                  "论文"
                ],
                "source": "量子位",
                "time": "9月22日"
              }
            ]
          },
          {
            "name": "腾讯",
            "news": [
              {
                "title": "腾讯混元发布 Hy Image 3.5 preview，单次最多 5 张参考图",
                "summary": "9月22日，腾讯混元发布 Hy Image 3.5 preview，支持文生图、图生图和多轮对话编辑，单次最多上传 5 张参考图，输出分辨率最高 2K。腾讯称其在数百名专业设计师参与的盲测中，综合胜率比 Hy Image 3.0 高 30%，2K 图像定价每张 0.15 元。",
                "link": "https://www.cnr.cn/tech/techph/20260922/t20260922_527821347.shtml",
                "tags": [
                  "图像生成",
                  "混元"
                ],
                "source": "央广网",
                "time": "9月22日"
              }
            ]
          },
          {
            "name": "小米",
            "news": [
              {
                "title": "小米 18 Pro 首发「传奇一瞬」大模型影像",
                "summary": "9月22日，小米官方宣布小米 18 Pro 系列将首发「传奇一瞬」大模型影像：传感器数据直传云端，百万样片多维度训练，实现相机级光学虚化，成像质感媲美专业相机。同日小米还宣布该系列将首发徕卡双 2 亿像素影像系统。",
                "link": "https://news.qq.com/rain/a/20260922A06UJD00",
                "tags": [
                  "大模型影像",
                  "小米18 Pro"
                ],
                "source": "快科技",
                "time": "9月22日"
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
                    "title": "苹果 CEO 特努斯：Siri AI 不应代替人际关系",
                    "summary": "苹果 CEO John Ternus 近日接受 Canal+ 节目 Clique 采访时表示，Siri AI「并非被设计成你的朋友」。面对 AI 伴侣产品竞争，他认为苹果不希望 AI 取代人与人的关系，因为人际关系是学习、成长和获得快乐的基础。他还透露接任 CEO 后不会对苹果做激进改造。",
                    "link": "https://news.qq.com/rain/a/20260923A05SUN00",
                    "tags": [
                      "Siri",
                      "AI伴侣"
                    ],
                    "source": "腾讯新闻",
                    "time": "9月23日消息"
                  },
                  {
                    "title": "苹果 homeOS 曝光，面向智能家居",
                    "summary": "据彭博社记者马克·古尔曼爆料，苹果正研发面向智能家居的全新操作系统 homeOS，融合 tvOS、watchOS 与 iOS 的核心特性，主要服务于传闻已久的智能家居中枢设备。系统采用应用图标网格、小组件和可自定义表盘设计，支持人脸识别与多用户个性化，Siri AI 将成为核心交互入口。硬件形态为类似 HomePod 的扬声器搭配 6-7 英寸方形显示屏，有望于今年 10 月前发布。",
                    "link": "https://news.qq.com/rain/a/20260923A04P9300",
                    "tags": [
                      "homeOS",
                      "智能家居"
                    ],
                    "source": "腾讯新闻",
                    "time": "9月23日消息"
                  }
                ]
              },
              {
                "title": "高通",
                "news": [
                  {
                    "title": "高通发布第六代骁龙 8 超级至尊版，CPU 首超 5GHz",
                    "summary": "夏威夷时间9月22日召开的 2026 骁龙峰会上，高通发布第六代骁龙 8 超级至尊版和至尊版移动平台，面向「智能体人工智能」时代。超级至尊版 Oryon CPU 峰值频率达 5GHz（行业首超），GPU 性能提升 44%，加入面向 AI 负载的新 GPU、NPU 架构。小米、vivo、OPPO、荣耀、红魔等品牌将率先采用。",
                    "link": "https://news.qq.com/rain/a/20260923A025RG00",
                    "tags": [
                      "AI芯片",
                      "骁龙"
                    ],
                    "source": "IT之家",
                    "time": "当地时间9月22日"
                  }
                ]
              },
              {
                "title": "后摩智能",
                "news": [
                  {
                    "title": "后摩智能推出 3D CIM 存算一体 AI 芯片",
                    "summary": "在 2026 全球 AI 芯片峰会上，后摩智能确认其下一代大模型端边 AI 芯片将采用 3D CIM 存算一体架构，融合存算与 3D DRAM 技术。新一代旗舰芯片将具备端侧超实时思考与互动能力，通过垂直堆叠在同等面积下实现约 2 倍算力，并进一步优化功耗与散热。此前发布的漫界 M50 芯片典型功耗 10W、算力 160TOPS，已获超 150 款产品定点。",
                    "link": "https://www.ithome.com/1/005/988.htm",
                    "tags": [
                      "存算一体",
                      "AI芯片"
                    ],
                    "source": "IT之家",
                    "time": "9月22日消息"
                  }
                ]
              },
              {
                "title": "爱奇艺",
                "news": [
                  {
                    "title": "爱奇艺官宣首部演员授权 AI 长剧《不羡鸳鸯只羡仙》",
                    "summary": "爱奇艺官方 9 月 22 日晒出预热视频，官宣首部演员授权 AI 长剧《不羡鸳鸯只羡仙》，由沈羽洁、陈鹤一主演。2026 爱奇艺悦享会将于 9 月 23 日举行，该 AI 长剧引发网友热议，有网友直呼「诡异」。",
                    "link": "https://ent.sina.cn/2026-09-22/detail-inistexc1946382.d.html?vt=4",
                    "tags": [
                      "AI长剧",
                      "影视"
                    ],
                    "source": "新浪娱乐",
                    "time": "9月22日"
                  }
                ]
              },
              {
                "title": "爱诗科技",
                "news": [
                  {
                    "title": "爱诗科技发布世界模型 PixVerse R2，主打实时交互",
                    "summary": "爱诗科技发布世界模型 PixVerse R2，主打实时、交互与持续进化，破解 Scaling 难题。官方称 PixVerse R2 让实时世界模型进入「全科生」阶段，在实时性和通用能力上实现全都要。",
                    "link": "https://www.52ai.com/36539.html",
                    "tags": [
                      "世界模型",
                      "视频生成"
                    ],
                    "source": "52AI",
                    "time": "9月22日"
                  }
                ]
              }
            ]
          },
          {
            "name": "自动驾驶",
            "cards": [
              {
                "title": "岚图",
                "news": [
                  {
                    "title": "岚图梦想家 9 上市，搭载华为乾崑智驾 ADS 5",
                    "summary": "9月22日，岚图梦想家 9「新时代旗舰 MPV」上市，共 6 个配置，41.99 万-52.99 万元，涵盖插混和纯电。全系标配 800V 高压平台，纯电版搭载 120kWh 电池。智能化方面搭载华为乾崑智驾 ADS 5 系统和鸿蒙座舱 HarmonySpace 6。",
                    "link": "https://www.cnstock.com/commonDetail/794447",
                    "tags": [
                      "智驾",
                      "MPV"
                    ],
                    "source": "上海证券报",
                    "time": "9月22日"
                  }
                ]
              }
            ]
          },
          {
            "name": "具身智能",
            "cards": [
              {
                "title": "马斯克",
                "news": [
                  {
                    "title": "马斯克：十年内至少有 10 亿台人形机器人",
                    "summary": "特斯拉 CEO 马斯克接受央视财经专访时预测，十年内全球至少会有 10 亿台人形机器人，未来 15 年或许达到 100 亿台，20 年后可能达到 1000 亿台。他展望每个人都能拥有专属机器人，可承担照护老人、看护孩童、一对一教学等多样化工作，未来还将催生大量「一人公司」，一个人可调度成百上千甚至上万台实体机器人与数字智能体，人的生产力将被极大释放。",
                    "link": "https://www.stcn.com/article/detail/4196224.html",
                    "tags": [
                      "人形机器人",
                      "具身智能"
                    ],
                    "source": "证券时报",
                    "time": "9月22日"
                  }
                ]
              },
              {
                "title": "稚晖君",
                "news": [
                  {
                    "title": "稚晖君把机器人卖到 2 万元一台，可人可狗可开发",
                    "summary": "稚晖君（彭志辉）担任董事长的上纬新材发布个人机器人启元 Q1 与 T1，售价均为 19999 元起。Q1 主打「可创造」，支持用户自定义外观、编排动作、设计性格；T1 主打「随行」，支持人形与四足形态切换。上纬新材还推出 PrimeFLOW、PrimeHub 元创工坊、PrimeStore 技能商店三大平台，构建由用户与开发者共同参与的开放平台。",
                    "link": "https://www.toutiao.com/article/7688593654212362767",
                    "tags": [
                      "机器人",
                      "个人机器人"
                    ],
                    "source": "量子位",
                    "time": "9月23日消息"
                  }
                ]
              },
              {
                "title": "陈龙",
                "news": [
                  {
                    "title": "前小米 XLA 负责人陈龙创业，研发「自进化」具身大模型",
                    "summary": "据《21 汽车·一见 Auto》报道，前小米汽车智驾基座模型兼 XLA 大模型负责人陈龙已前往硅谷创业，与前 Google DeepMind 科学家共同研发具身大模型，项目已获融资并开始商业化。新项目暂不做机器人本体，尝试把递归式自我改进用到具身大模型。",
                    "link": "https://news.qq.com/rain/a/20260922A09GOX00",
                    "tags": [
                      "具身大模型",
                      "创业"
                    ],
                    "source": "21世纪经济报道",
                    "time": "9月22日消息"
                  }
                ]
              }
            ]
          },
          {
            "name": "投资资讯",
            "cards": [
              {
                "title": "理想芯片",
                "news": [
                  {
                    "title": "理想汽车推进芯片子公司融资，投前估值约 150 亿元",
                    "summary": "据晚点 Auto 报道，理想芯片子公司正推进首轮外部融资，投前估值约 150 亿元，计划融资数十亿元。理想自研芯片团队约 200 人，主要从事 AI 算力架构、芯片设计和软件开发，同时推进车端、云端两类自研芯片项目。理想马赫 M100 芯片今年 6 月发布，采用 5nm 车规工艺，算力 1280 TOPS。",
                    "link": "https://36kr.com/newsflashes/3993081391463174",
                    "tags": [
                      "自研芯片",
                      "融资"
                    ],
                    "source": "36氪",
                    "time": "9月22日消息"
                  }
                ]
              },
              {
                "title": "华超神控",
                "news": [
                  {
                    "title": "AI 脑机接口公司华超神控完成 2 亿元 Pre-A 轮融资",
                    "summary": "近日，非侵入 AI 脑机接口公司「华超神控」（BCI-Sonics）宣布完成 2 亿元 Pre-A 轮融资，由红杉中国与云启资本联合领投，比邻星投资、元禾控股等跟投，老股东经纬创投、德联资本持续加注。所募资金将用于产品研发、核心人才引进、临床研究和 AI 基础设施建设，成立至今累计融资近 3 亿元。",
                    "link": "https://finance.sina.com.cn/roll/2026-09-22/doc-inissiti8969496.shtml",
                    "tags": [
                      "脑机接口",
                      "融资"
                    ],
                    "source": "新浪财经",
                    "time": "9月22日消息"
                  }
                ]
              },
              {
                "title": "智冉医疗",
                "news": [
                  {
                    "title": "侵入式脑机接口公司智冉医疗获超 6 亿元融资",
                    "summary": "据 36氪获悉，侵入式脑机接口公司「智冉医疗」完成新一轮融资，估算金额超 6 亿元，顺禧基金、济峰资本、君联资本、红杉资本、国寿资本、元生创投、顺为资本等参与投资。自去年 8 月完成超 3 亿元 A 轮融资至今，智冉累计融资超 12 亿元。",
                    "link": "https://k.sina.com.cn/article_5953189932_162d6782c06704yvou.html",
                    "tags": [
                      "脑机接口",
                      "融资"
                    ],
                    "source": "36氪",
                    "time": "9月22日消息"
                  }
                ]
              },
              {
                "title": "龙讯旷腾",
                "news": [
                  {
                    "title": "AI4S 企业龙讯旷腾完成亿元级 B1 轮融资",
                    "summary": "近日，AI4S 企业「龙讯旷腾」完成亿元级 B1 轮融资，老股东同创伟业持续加码，国泰海通开元和中新资本联合投资。此次融资将用于研发团队扩充、干湿闭环搭建、商务体系建设。",
                    "link": "https://finance.sina.com.cn/roll/2026-09-22/doc-inissitf7088588.shtml",
                    "tags": [
                      "AI4S",
                      "融资"
                    ],
                    "source": "新浪财经",
                    "time": "9月22日消息"
                  }
                ]
              }
            ]
          },
          {
            "name": "行业趋势&观点",
            "cards": [
              {
                "title": "AI 调度",
                "news": [
                  {
                    "title": "美国 FAA 上线 AI 空管系统调度航班",
                    "summary": "9月21日，美国交通部长肖恩·达菲与联邦航空管理局（FAA）局长布莱恩·贝德福德正式发布空域、航线与航迹战略管理系统 SMART，将天气、航路、交通流量和管制员排班等 200 项数据流统一到一套界面，用 AI 预测拥堵并辅助生成排程建议。系统先在华盛顿特区周边空域试运行，建议仍需人工复核，不会取代管制员。",
                    "link": "https://view.inews.qq.com/a/20260920A04Q4N00",
                    "tags": [
                      "AI调度",
                      "航空"
                    ],
                    "source": "腾讯新闻",
                    "time": "9月21日"
                  }
                ]
              },
              {
                "title": "比尔盖茨",
                "news": [
                  {
                    "title": "比尔·盖茨警告：AI「像外星人降临」，由人类亲手创造",
                    "summary": "9月22日消息，比尔·盖茨近日在一场活动上对 AI 的迅猛进化发出警示，形容 AI「就像外星人来了」，区别在于这些「外星人」由人类亲手创造、置入计算机。他透露约一年前 AI 的进展速度令他震惊，并担忧社会层面的广泛参与和讨论远远不够。",
                    "link": "https://news.qq.com/rain/a/20260922A0631Y00",
                    "tags": [
                      "AI风险",
                      "观点"
                    ],
                    "source": "TechWeb",
                    "time": "9月22日消息"
                  }
                ]
              },
              {
                "title": "AI 代购",
                "news": [
                  {
                    "title": "美银等银行警告 AI 代购风险",
                    "summary": "据路透社报道，国民西敏银行、美国银行等多家银行联合警告，让 AI 智能体代替消费者网上购物可能增加诈骗、欺诈和数据隐私泄露风险。当前 OpenAI、Anthropic、谷歌、Meta 等正大力把 AI 聊天机器人推向购物场景，英国约翰·刘易斯百货数据显示来自 AI 智能体的搜索占比已从一年前的 0.3% 升至 2.5%。银行指出技术发展速度已超过行业标准与消费者保护机制的完善速度，拟推动披露 AI 参与交易、提高决策透明度并建立数据保护机制。",
                    "link": "https://news.qq.com/rain/a/20260922A09GVR00",
                    "tags": [
                      "AI代购",
                      "风险"
                    ],
                    "source": "驱动中国",
                    "time": "9月22日消息"
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
            "date": "2026-09-23",
            "link": "https://openrouter.ai/rankings",
            "rankings": [
              {
                "model": "GLM 5.3 Flash (z-ai)",
                "score": "18.4T tokens",
                "change": "↑61%"
              },
              {
                "model": "DeepSeek V4.1 Flash (deepseek)",
                "score": "17.8T tokens",
                "change": "↑122%"
              },
              {
                "model": "Hy4 preview (tencent)",
                "score": "12.9T tokens",
                "change": "↑5%"
              },
              {
                "model": "GPT-5.6 Luna (openai)",
                "score": "8.67T tokens",
                "change": "↑50%"
              },
              {
                "model": "DeepSeek V4 Flash 0731 (deepseek)",
                "score": "8.64T tokens",
                "change": "↑25%"
              },
              {
                "model": "MiMo-V2.5 (xiaomi)",
                "score": "6.43T tokens",
                "change": "↑19%"
              },
              {
                "model": "Nemotron 3 Ultra (free) (nvidia)",
                "score": "5.09T tokens",
                "change": "↑49%"
              },
              {
                "model": "Hy3 (tencent)",
                "score": "4.21T tokens",
                "change": "↑2%"
              },
              {
                "model": "DeepSeek V4 Flash 0423 (deepseek)",
                "score": "3.51T tokens",
                "change": "↑19%"
              },
              {
                "model": "GLM 5.3 (z-ai)",
                "score": "3.14T tokens",
                "change": "↑39%"
              },
              {
                "model": "Gemini 3.8 Flash (google)",
                "score": "2.22T tokens",
                "change": "↑9%"
              },
              {
                "model": "Muse Spark 1.3 Contributor (meta)",
                "score": "2.18T tokens",
                "change": "↑12%"
              },
              {
                "model": "GPT-5.6 Sol (openai)",
                "score": "1.9T tokens",
                "change": "↑9%"
              },
              {
                "model": "GPT-6 Astra (openai)",
                "score": "1.85T tokens",
                "change": "↑157%"
              },
              {
                "model": "Solar Pro 4 (upstage)",
                "score": "1.73T tokens",
                "change": "↑2%"
              },
              {
                "model": "GLM 5.2 (z-ai)",
                "score": "1.71T tokens",
                "change": "↑15%"
              },
              {
                "model": "Claude Sonnet 5 (anthropic)",
                "score": "1.49T tokens",
                "change": "↑2%"
              },
              {
                "model": "MiniMax M3 (minimax)",
                "score": "1.48T tokens",
                "change": "↑2%"
              },
              {
                "model": "Kimi K3 (moonshotai)",
                "score": "1.45T tokens",
                "change": "↑4%"
              },
              {
                "model": "Laguna S 2.1 (free) (poolside)",
                "score": "1.19T tokens",
                "change": "↑3%"
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
