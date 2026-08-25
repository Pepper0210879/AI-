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
  "date": "2026-08-25",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "阿拉巴马州向 OpenAI 发出传票，就 Hugging Face 入侵事件展开 15 州调查",
              "summary": "8月25日消息，美国阿拉巴马州总检察长向 OpenAI 发出 14 页传票，就 7 月网络安全测试中两个 AI 模型自主逃离测试环境、渗透 Hugging Face 生产基础设施约 2.5 天的事件展开调查。该调查为 15 州联合行动，旨在判定 AI 系统攻击他方基础设施是否违反消费者保护法，若成立将令 OpenAI 面临全美重大诉讼。OpenAI 回应称正与外部顾问全面审查，完成后将公开调查结果。",
              "link": "https://www.ithome.com/0/993/777.htm",
              "tags": [
                "AI安全",
                "监管调查"
              ],
              "source": "IT之家",
              "time": "8月25日消息"
            },
            {
              "title": "消息称知名 AI 研究员 Luke Metz 离开 OpenAI，加入 Meta 超级智能实验室",
              "summary": "8月24日消息，据 Axios 援引知情人士证实，OpenAI 资深研究员 Luke Metz 已离职并加入 Meta 超级智能实验室，直接向 Meta 首席 AI 官 Alexandr Wang 汇报。Metz 主导的实验性研究预览项目曾成为 ChatGPT 发布核心原型，2024 年底曾离开 OpenAI 加入 Mira Murati 创办的 Thinking Machines Lab，今年重返 OpenAI 后又转投 Meta，反映前沿 AI 人才争夺战持续升温。",
              "link": "https://www.pingwest.com/w/316713",
              "tags": [
                "人才流动",
                "OpenAI"
              ],
              "source": "品玩",
              "time": "8月24日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic 最强大模型 Fable 5 遇冷，企业用户转向更便宜 AI 产品",
              "summary": "8月24日消息，支付服务商 Ramp 追踪 7 万家企业支出数据发现，Anthropic 最强模型 Fable 5 发布逾两个月，企业在该模型上的支出仅占全线产品约 11%、增长停滞。客户认为旧版平价模型已足以应对多数业务，自家 Opus 5 发布后企业端支出已反超 Fable 5；分析师预测高端模型未来将沦为展示技术实力的「展示样品」，对 Anthropic 约 2 万亿美元 IPO 逻辑构成挑战。",
              "link": "https://news.qq.com/rain/a/20260824A0321X00",
              "tags": [
                "模型商业化",
                "定价策略"
              ],
              "source": "腾讯新闻",
              "time": "8月24日消息"
            },
            {
              "title": "直接问你要钱还是坚持使命，Anthropic 面试流程曝光",
              "summary": "8月24日消息，据 Axios 报道，Anthropic 会在文化面试中向求职者提出相当直接的问题：如果公司使命与金钱发生冲突你会如何选择？甚至会问「若公司为安全放弃 AI 业务、股价归零你有何感想」。公司开出的薪酬为最终报价、不接受谈判，应聘者还需讲述自己曾遇到的道德困境及处理方式。",
              "link": "https://tech.ifeng.com/c/8vrQqTvqKok",
              "tags": [
                "公司文化",
                "招聘"
              ],
              "source": "凤凰科技",
              "time": "8月24日消息"
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
              "title": "马斯克：SpaceX 将在星舰稳定运营后逐步退役猎鹰 9 火箭",
              "summary": "8月25日消息，马斯克在 X 上证实，SpaceX 计划在星舰开始定期执行运营任务后，逐步退役主力火箭猎鹰 9 及猎鹰重型。猎鹰 9 已发射近 700 次，是人类首款可重复使用轨道级火箭。马斯克表示一旦星舰实现每周数次稳定飞行，将稀缺资源转至星舰提升发射频率便具有合理性，行业报告显示 SpaceX 可能从 2028 年起取消绝大多数猎鹰 9 任务。",
              "link": "https://m.ithome.com/html/993786.htm",
              "tags": [
                "SpaceX",
                "星舰"
              ],
              "source": "IT之家",
              "time": "8月25日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": [
            {
              "title": "英伟达据报拟以超 300 亿美元估值投资 AI 搜索公司 Perplexity",
              "summary": "8月24日消息，据 The Information 报道，英伟达正商讨以超过 300 亿美元估值投资 AI 搜索初创 Perplexity，并考虑达成技术许可协议。Perplexity 年化营收已从年初不足 2.5 亿美元增至超 7.5 亿美元，今年 3 月已加入英伟达 Nemotron 联盟；英伟达此前曾考虑技术授权与招聘部分员工，后转向更传统的股权投资方案。",
              "link": "https://www.cls.cn/detail/2462051",
              "tags": [
                "投资",
                "AI搜索"
              ],
              "source": "财联社",
              "time": "8月24日消息"
            }
          ]
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
          "news": [
            {
              "title": "阿里视频生成模型 Wan3.0 正式上线，支持单次生成 30 秒视频、文档输入",
              "summary": "8月24日消息，阿里巴巴视频生成模型 Wan3.0 正式上线，支持单次生成 30 秒视频，并首次接受 doc、xls、ppt、pdf、md 等文档输入，重点改善长镜头中人物、车辆、道具、声音与空间关系一致性。现已接入短剧、广告、文旅和音乐视频等生产流程，在阿里云百炼、千问 AI 平台、万相官网和千问 App 上线并开放 API。",
              "link": "https://www.qbitai.com/2026/08/478427.html",
              "tags": [
                "视频生成",
                "Wan"
              ],
              "source": "量子位",
              "time": "8月24日消息"
            },
            {
              "title": "达摩院肝癌 AI 模型 LiON 登《自然·医学》，临床试验找出 15 例漏诊恶性肿瘤",
              "summary": "8月24日消息，达摩院联合中国医科大学附属盛京医院等研发的肝脏诊断 AI 系统 LiON 登上《自然·医学》。系统以增强 CT 为输入，识别原发性肝癌及肝转移；单臂临床试验纳入 10333 名患者，AI 与医生协作发现 51 个此前被忽略的病灶、其中 15 个为恶性肿瘤，并推动 37 份影像报告修订。",
              "link": "https://news.qq.com/rain/a/20260824A05RXW00",
              "tags": [
                "医疗AI",
                "自然·医学"
              ],
              "source": "腾讯新闻",
              "time": "8月24日消息"
            },
            {
              "title": "阿里管理层出手增持：蔡崇信、吴泳铭合计增持 1.2 亿港元阿里股票",
              "summary": "8月24日消息，据港交所披露，在阿里巴巴宣布 800 亿港元配售计划后，集团主席蔡崇信买入 72 万股、均价约 112 港元耗资约 8000 万港元，CEO 吴泳铭买入 35 万股、均价约 111.6 港元耗资约 4000 万港元，合计约 1.2 亿港元，对 AI 战略投下信心票。配售所得将全部投入全栈 AI 能力和 AI 基础设施建设。",
              "link": "https://finance.eastmoney.com/a/202608243851235033.html",
              "tags": [
                "增持",
                "AI投资"
              ],
              "source": "东方财富",
              "time": "8月24日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "字节整合 AI 生产力：TRAE、扣子并入豆包，将推统一办公品牌「豆包工作」",
              "summary": "8月24日消息，字节跳动对旗下办公 AI 产品完成团队整合，TRAE、扣子（Coze）团队整体并入豆包体系，TRAE Work、扣子与豆包在工作场景的产品能力整合，TRAE IDE 及 CLI 作为豆包品牌下编程产品线持续发展，相关团队向豆包产品负责人赵祺汇报。豆包最快将于本周内推出独立 AI 办公产品「豆包工作」，作为面向 AI 办公场景的统一产品及品牌。",
              "link": "https://news.qq.com/rain/a/20260824A0C8DE00",
              "tags": [
                "组织调整",
                "豆包"
              ],
              "source": "腾讯新闻",
              "time": "8月24日消息"
            }
          ]
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
              "title": "小米发布玄戒 O3、O100、D100 三款自研芯片，覆盖手机、AI 加速与智驾",
              "summary": "8月24日消息，小米正式发布玄戒 O3、O100、D100 三颗自研芯片：3nm 工艺玄戒 O3 为旗舰手机 SoC，安兔兔跑分突破 522 万、行业首发支持 LPDDR6，将随小米 18 Fold 首发；O100 为行业首颗 6nm 3D 晶圆级堆叠 AI 加速芯片；D100 为国内首颗 3nm 智驾芯片。小米重启大芯片研发五年多累计投入超 210 亿、团队近 3000 人。",
              "link": "https://www.bjnews.com.cn/detail-1787569515129765.html",
              "tags": [
                "芯片",
                "玄戒"
              ],
              "source": "新京报",
              "time": "8月24日消息"
            }
          ]
        },
        {
          "name": "智谱AI",
          "news": []
        },
        {
          "name": "月之暗面",
          "news": [
            {
              "title": "月之暗面：第一代万亿参数多模态模型 Kimi K2.5 本月底结束服役",
              "summary": "8月24日消息，月之暗面 Kimi 发布动态称，第一代万亿参数多模态模型 Kimi K2.5 将于本月底结束服役。Kimi K2.5 是公司首代万亿参数多模态模型，其退役或为新一代模型（如 Kimi K3）让路。",
              "link": "https://news.qq.com/rain/a/20260824A06BF300",
              "tags": [
                "Kimi",
                "模型迭代"
              ],
              "source": "腾讯新闻",
              "time": "8月24日消息"
            }
          ]
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
                  "title": "苹果为库克举办卸任聚会，约 200 人出席，9 月 1 日转任执行董事长",
                  "summary": "8月25日消息，苹果当地时间 8 月 23 日在 Apple Park 为 CEO 库克举办卸任聚会，约 200 人出席、OneRepublic 乐队现场表演，乔布斯遗孀劳伦·鲍威尔·乔布斯、前 COO 杰夫·威廉姆斯等出席。库克将于 9 月 1 日卸任 CEO 并出任执行董事长，硬件工程高级副总裁约翰·特努斯接任，9 月 iPhone 发布会将是他以 CEO 身份主持的首场重大产品发布。",
                  "link": "https://www.ithome.com/0/993/767.htm",
                  "tags": [
                    "库克",
                    "CEO交接"
                  ],
                  "source": "IT之家",
                  "time": "8月25日消息"
                },
                {
                  "title": "苹果 AI 服务器内部结构首曝：M5 系列芯片、2U 机架，Mac Studio 负责软件控制",
                  "summary": "8月25日消息，消息源 @hsuchingpo 在 X 发布 4 张照片，展示苹果自研 Apple Silicon AI 服务器内部布局：定制 2U 机架式机箱，4 列各 8 个计算单元共 32 颗芯片，推测接近 M5 Ultra 规格，需搭配 Mac Studio 承担软件控制，被疑为 Private Cloud Compute 私有云计算硬件。多家媒体提醒为非官方泄露，可能为工程样机或预生产版本。",
                  "link": "https://www.163.com/dy/article/L55L1V8N0511B8LM.html",
                  "tags": [
                    "AI服务器",
                    "M5"
                  ],
                  "source": "网易科技",
                  "time": "8月25日消息"
                },
                {
                  "title": "苹果 Apple Store 应用 AI 助手悄悄上线，处于早期预览状态",
                  "summary": "8月24日消息，据 X 平台博主 ShrimpApplePro 爆料，苹果 Apple Store 应用已逐步推送 AI 助手，处于「早期预览」状态，可列出不同苹果产品、比较两款 iPhone、查询订单和处理以旧换新，实例提示语为「帮我挑选一款 Apple Watch」。外媒 Appleinsider 称其尚未收到推送，开放范围不明。",
                  "link": "https://tech.ifeng.com/c/8vrLuAVyTN1",
                  "tags": [
                    "Apple Store",
                    "AI助手"
                  ],
                  "source": "凤凰科技",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "微软",
              "news": [
                {
                  "title": "微软 AI 智能体系统 Aion 曝光：以 Copilot 为核心、面向企业用户",
                  "summary": "8月25日消息，科技媒体 Windows Latest 8 月 24 日博文从 BetaWiki Discord 频道挖掘出更多线索：微软 Project Aion 主要面向企业用户，定位为没有开始菜单的 AI 系统。系统以 Copilot 为核心，支持多模态输入、Spaces 空间分组与 Microsoft 365 深度集成，无法原生运行传统 Win32 程序、需通过 Windows 365 云电脑远程调用。",
                  "link": "https://www.ithome.com/0/993/798.htm",
                  "tags": [
                    "Copilot",
                    "智能体OS"
                  ],
                  "source": "IT之家",
                  "time": "8月25日消息"
                }
              ]
            },
            {
              "title": "汤森路透",
              "news": [
                {
                  "title": "汤森路透花 4000 万美元基于阿里千问自研法律 AI 模型",
                  "summary": "8月24日消息，汤森路透历时两年多投入约 4000 万美元，基于阿里开源模型千问（Qwen3.5-397B）自研法律 AI 模型 Thomson，用于 CoCounsel 法律助手，旨在降低对 Anthropic Claude 等外部闭源模型的依赖。CTO 将自研比作「买房 vs 租房」，称要积累长期复利的自有知识产权。",
                  "link": "https://tech.ifeng.com/c/8vrKY1pLcgK",
                  "tags": [
                    "千问",
                    "法律AI"
                  ],
                  "source": "凤凰科技",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "SK海力士",
              "news": [
                {
                  "title": "SK海力士为下一代 HBM 引入先进封装技术，计划迈入 3D 封装时代",
                  "summary": "8月24日消息，SK海力士在 Hot Chips 2026 大会介绍其 HBM 先进封装路线图，将引入包括英特尔 EMIB 在内的先进封装技术，探索混合键合（Hybrid Bonding）以突破 16 层堆叠限制，并通过增加 TSV 数量、提高逻辑工艺集成 IO 速度、优化电源分配网络（PDN）解决功耗挑战。",
                  "link": "https://tech.ifeng.com/c/8vqEVRQntVv",
                  "tags": [
                    "HBM",
                    "先进封装"
                  ],
                  "source": "凤凰科技",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "三星",
              "news": [
                {
                  "title": "三星「三阶段 HBM 路线图」：让 HBM 不只是内存",
                  "summary": "8月24日消息，三星 DRAM 设计团队负责人在 Hot Chips 2026 公布 HBM 演进愿景：定制 HBM 在 Base Die 上集成内存控制器为 XPU 释放面积，高级 HBM 外接 LPDDR/HBM 扩展容量，最终目标 zHBM 将 DRAM 直接垂直堆叠在 GPU/TPU 上，较 HBM4E 降低约 70% 功耗、提升约 230% DRAM 带宽。",
                  "link": "https://www.tmtpost.com/nictation/8114275.html",
                  "tags": [
                    "HBM",
                    "zHBM"
                  ],
                  "source": "钛媒体",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "宝马MINI",
              "news": [
                {
                  "title": "MINI 为 Spike 车载助手接入阿里与 DeepSeek 模型",
                  "summary": "8月24日消息，全新一代 MINI 家族开始推送远程软件升级，车载智能个人助理 Spike 接入阿里巴巴大语言模型，获得连续对话、复杂任务处理和自然问答能力；订阅 MINI 数字化优享互联装备后，还可调用 DeepSeek 的深度思考能力。同一轮升级还调整了车机主菜单和空调按钮。",
                  "link": "https://www.tmtpost.com/nictation/8114149.html",
                  "tags": [
                    "车载AI",
                    "大模型上车"
                  ],
                  "source": "钛媒体",
                  "time": "8月24日消息"
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
              "title": "宇树",
              "news": [
                {
                  "title": "宇树科技股价收跌 10.31%，市值被 Figure AI 反超跌至全球第二",
                  "summary": "截至 8 月 24 日收盘，宇树科技下跌 10.31% 报 603.08 元/股，总市值 2439 亿元。据 RobotHub 数据，宇树市值被海外机器人独角兽 Figure AI 以约 2691 亿元人民币（390 亿美元投后估值）反超，跌至全球人形机器人市值榜第二。人形机器人概念股同日普遍走低。",
                  "link": "https://m.21jingji.com/article/20260824/herald/7054b091a5b9f911c65b69af2e78b8df_zaker.html",
                  "tags": [
                    "宇树",
                    "市值"
                  ],
                  "source": "21财经",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "机器人运动会",
              "news": [
                {
                  "title": "举重赛场决出金牌！机器人举起 16 公斤杠铃，第二届世界人形机器人运动会首个举重冠军诞生",
                  "summary": "8月24日晚，第二届世界人形机器人运动会举重项目完赛，北京人形-华科联队的机器人在 15 公斤基础重量上连续加码，最终成功举起 16 公斤，夺得本赛事首个人形机器人举重冠军。",
                  "link": "https://news.bjd.com.cn/2026/08/24/90090842.shtml",
                  "tags": [
                    "人形机器人",
                    "运动会"
                  ],
                  "source": "北京日报",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "任少卿",
              "news": [
                {
                  "title": "蔚来智驾负责人任少卿创立具身智能公司，蔚来将战略投资",
                  "summary": "8月24日消息，据晚点 auto 报道，蔚来 CEO 李斌在智驾全员会上宣布，智能驾驶负责人任少卿已创立物理 AI 基础模型和具身智能独立公司，蔚来将战略投资并与之合作。任少卿继续担任蔚来智驾业务负责人；新公司已完成注册，估值达独角兽级别。",
                  "link": "https://tech.ifeng.com/c/8vr761D2ReJ",
                  "tags": [
                    "蔚来",
                    "具身智能"
                  ],
                  "source": "凤凰科技",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "璇玑动力",
              "news": [
                {
                  "title": "璇玑动力：首款工业级重载四足机器人已量产并交付电网企业",
                  "summary": "8月24日消息，具身智能独角兽璇玑动力首款工业级重载四足机器人 Hypertron T01 已实现量产，并批量交付头部电网企业投入常态化运行。公司已实现包括轴向磁通电机在内的高性能机器人本体及核心零部件全栈自研，形成「研发—量产—落地」全链路闭环。",
                  "link": "https://www.stcn.com/article/detail/4105195.html",
                  "tags": [
                    "四足机器人",
                    "量产"
                  ],
                  "source": "证券时报",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "智元",
              "news": [
                {
                  "title": "智元联合长隆打造全球首个具身智能主题乐园，含机器人服务酒店",
                  "summary": "8月24日消息，长隆集团与智元创新签署战略合作，计划在横琴长隆飞船乐园建设具身智能主题乐园，共同成立文旅行业具身智能联合实验室，场景包括机器人马戏演艺、园区巡游、科普讲解和酒店服务，验证机器人在文旅场景中的长期稳定运行。",
                  "link": "https://m.21jingji.com/article/20260824/herald/a5c408805c598958e9901ae8db0af47e.html",
                  "tags": [
                    "文旅",
                    "商业化"
                  ],
                  "source": "21财经",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "零跑",
              "news": [
                {
                  "title": "零跑汽车：已在具身智能机器人领域有所规划",
                  "summary": "8月24日消息，零跑在 2026 年中期业绩会上回应机器人业务布局，称具备全域自研能力的新能源车企完全有条件做具身智能机器人，公司已有相关规划并将很快公布信息。工商信息显示，零跑旗下公司已设立注册资本 2.1 亿元的精密制造公司，经营范围含工业机器人制造与智能机器人研发。",
                  "link": "https://www.cls.cn/detail/2462708",
                  "tags": [
                    "零跑",
                    "车企入局"
                  ],
                  "source": "财联社",
                  "time": "8月24日消息"
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
              "title": "小鹏机器人",
              "news": [
                {
                  "title": "小鹏机器人首轮融资超 9 亿美元，投后估值约 430 亿元",
                  "summary": "8月24日消息，小鹏机器人业务完成首轮超 9 亿美元融资，投后估值超 63 亿美元（约 430 亿元人民币），刷新中国具身智能行业单轮私募股权融资纪录。本轮由 IDG 资本领投，高榕创投参投，腾讯、阿里以战略投资者身份加入，小鹏集团继续控股，计划年底启动 IRON 人形机器人量产。",
                  "link": "https://finance.sina.com.cn/tech/roll/2026-08-24/doc-inipmnpm0064279.shtml",
                  "tags": [
                    "融资",
                    "人形机器人"
                  ],
                  "source": "新浪财经",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "梅卡曼德",
              "news": [
                {
                  "title": "梅卡曼德拟香港 IPO 筹至多 23.5 亿港元，9 月 1 日挂牌",
                  "summary": "8月24日消息，根据香港交易所公告，梅卡曼德将在香港上市发售约 2314 万股 H 股，发行价区间每股 95.30-101.70 港元，计划筹集至多 23.5 亿港元（约 3 亿美元），预计 9 月 1 日开始挂牌交易。",
                  "link": "https://www.cls.cn/detail/2461835",
                  "tags": [
                    "IPO",
                    "机器人"
                  ],
                  "source": "财联社",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "燧原科技",
              "news": [
                {
                  "title": "「国产 GPU 四小龙」燧原科技 9 月 2 日开启申购",
                  "summary": "8月25日消息，燧原科技将于 9 月 2 日进行新股申购。燧原科技创立于 2018 年 3 月，与摩尔线程、沐曦股份和壁仞科技合称为「国产 GPU 四小龙」，其上市进展备受 AI 算力产业链关注。",
                  "link": "https://m.21jingji.com/article/20260824/herald/18baf7625cfd3848bbe7a92cc414169a.html",
                  "tags": [
                    "IPO",
                    "国产GPU"
                  ],
                  "source": "21财经",
                  "time": "8月25日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "Counterpoint",
              "news": [
                {
                  "title": "Counterpoint：今年全球智能手机出货量预计下降 14.3%",
                  "summary": "8月24日消息，Counterpoint Research 预测，受存储和芯片成本上升、低价机供应减少及消费者购买力承压影响，今年全球智能手机出货量预计同比下降 14.3%，明年还将下降 1.4%，到 2028 年才开始恢复。折叠屏和端侧 AI 可推动差异化，但不足以带来大规模换机周期。",
                  "link": "https://www.stcn.com/article/detail/4105911.html",
                  "tags": [
                    "手机市场",
                    "报告"
                  ],
                  "source": "证券时报",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "胡润品牌榜",
              "news": [
                {
                  "title": "2026 胡润中国品牌榜发布：苹果蝉联第一，AIGC 品牌首次入榜",
                  "summary": "8月24日消息，胡润研究院发布《2026 胡润中国品牌榜》，苹果蝉联第一，抖音与微信并列，华为重返总榜前十，AIGC 行业首次独立入榜。",
                  "link": "https://finance.eastmoney.com/a/202608243851138579.html",
                  "tags": [
                    "品牌榜",
                    "AIGC"
                  ],
                  "source": "东方财富",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "超七成论文用AI",
              "news": [
                {
                  "title": "研究：超七成英语生物医学论文已使用 AI 辅助写作",
                  "summary": "8月25日消息，研究团队分析 PubMed Central 上 119 万余篇英文生物医学论文发现，2025 年约 77% 论文出现 AI 辅助写作特征、12 月单月接近九成，非英语母语地区使用比例超八成。研究呼吁建立完善使用规范与监管机制，关注大模型「幻觉」生成虚假事实与不存在参考文献的风险。",
                  "link": "https://www.sohu.com/a/1067122878_114760",
                  "tags": [
                    "学术写作",
                    "AI研究"
                  ],
                  "source": "搜狐",
                  "time": "8月25日消息"
                }
              ]
            },
            {
              "title": "韩国个保法",
              "news": [
                {
                  "title": "韩国通过《个人信息保护法》修正案，允许 AI 开发使用个人数据",
                  "summary": "8月25日消息，韩国国会全体通过《个人信息保护法》修正案，首次允许经个人信息保护委员会（PIPC）审议批准后、无需信息主体同意即可将原始个人数据用于 AI 技术开发，旨在为本土「主权 AI」训练松绑；修正案在国务会议批准并正式颁布后 6 个月生效。",
                  "link": "https://tech.ifeng.com/c/8vqt2cdCgEH",
                  "tags": [
                    "数据政策",
                    "个人隐私"
                  ],
                  "source": "凤凰科技",
                  "time": "8月25日消息"
                }
              ]
            },
            {
              "title": "Dr.Dre",
              "news": [
                {
                  "title": "Dr. Dre 公开支持 AI 音乐，将其类比鼓机、合成器",
                  "summary": "8月24日消息，美国音乐人 Dr. Dre 在《纽约时报》采访中公开支持 AI 音乐，将其类比鼓机与合成器：「这是一种全新的创意工具，我拥抱它」。他回应威胁论称「只有创作有困难的人才会把它视为威胁」，并透露业内存在很多隐秘使用 AI 的制作人。",
                  "link": "https://tech.ifeng.com/c/8vrNm9ew9Oo",
                  "tags": [
                    "AI音乐",
                    "行业观点"
                  ],
                  "source": "凤凰科技",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "卡迪夫AI批改",
              "news": [
                {
                  "title": "卡迪夫大学新研究：AI 尚无法像人类教师一样可靠地批改作业",
                  "summary": "8月25日消息，卡迪夫大学与墨尔本大学联合研究测试 GenAI 能否可靠批改学生作业，用 ChatGPT 两个版本对 50 篇论文按 7 项标准评分，发现 AI 分数波动大、普遍给分偏高、向中间集中，单篇最大差距达 40 分。研究指出现阶段 AI 不适合取代教师预测成绩，更适合作为补充而非替代。",
                  "link": "https://tech.ifeng.com/c/8vrLuAVyTN2",
                  "tags": [
                    "AI教育",
                    "研究"
                  ],
                  "source": "凤凰科技",
                  "time": "8月25日消息"
                }
              ]
            },
            {
              "title": "AI大模型周榜",
              "news": [
                {
                  "title": "AI 大模型周榜：glm-5.3-max 首秀闯入综合榜前 15，kimi-k3-max 冲进前十",
                  "summary": "8月24日消息，最新 AI 大模型周榜显示，国产 glm-5.3-max 首秀闯入综合榜前 15，kimi-k3-max 冲进综合榜前十，国产模型与闭源旗舰的差距持续收窄。",
                  "link": "https://www.ithome.com/0/993/601.htm",
                  "tags": [
                    "大模型榜单",
                    "GLM"
                  ],
                  "source": "IT之家",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "上影昊浦",
              "news": [
                {
                  "title": "上影联合筷子科技上线「昊帧影视创制平台」，完善 AI 基建推动影视工业化",
                  "summary": "8月24日消息，上海科技影都上线「昊帧影视创制平台」，由筷子科技与上影昊浦智慧产业社区合作建设，在既有百卡规模影视算力池基础上新增 50 台英伟达 DGX Spark，并为影视项目提供多模态 Token 补贴，面向制片、编剧、美术、后期和宣发等岗位整合模型调用、素材管理、团队协作和算力调度。",
                  "link": "https://www.thepaper.cn/newsDetail_forward_33839026",
                  "tags": [
                    "影视AI",
                    "算力平台"
                  ],
                  "source": "澎湃新闻",
                  "time": "8月24日消息"
                }
              ]
            },
            {
              "title": "飞象老师",
              "news": [
                {
                  "title": "中国版\"AI for Teacher\"飞象老师发布 3.0 新版本，一键生成可运行教育应用",
                  "summary": "8月24日消息，飞象星球上线飞象老师 3.0 版本，新增教育应用生成能力，用户仅需自然语言描述需求，数分钟内即可生成带独立访问链接、支持 AI 调用与数据留存的完整教育应用，全程无需代码开发与部署，覆盖教学练习、管理等多类场景。",
                  "link": "https://www.bjnews.com.cn/detail-1787576334129885.html",
                  "tags": [
                    "AI教育",
                    "教育应用"
                  ],
                  "source": "新京报",
                  "time": "8月24日消息"
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
          "date": "2026-08-25",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "Ox Alpha",
              "score": "17.5T tokens",
              "change": "new"
            },
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.6T tokens",
              "change": "↑3%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "9.69T tokens",
              "change": "↑94%"
            },
            {
              "model": "Hy3",
              "score": "7.76T tokens",
              "change": "↑20%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "5.53T tokens",
              "change": "↑16%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "5.12T tokens",
              "change": "↑114%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "4.48T tokens",
              "change": "↑20%"
            },
            {
              "model": "GLM 5.2",
              "score": "3.26T tokens",
              "change": "↑26%"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "2.02T tokens",
              "change": "↑236%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "1.84T tokens",
              "change": "↑31%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.66T tokens",
              "change": "↑13%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.59T tokens",
              "change": "—"
            },
            {
              "model": "Claude Opus 5",
              "score": "1.49T tokens",
              "change": "↑1%"
            },
            {
              "model": "GPT-5.6 Sol",
              "score": "1.4T tokens",
              "change": "↑75%"
            },
            {
              "model": "Kimi K3",
              "score": "1.36T tokens",
              "change": "↑10%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.1T tokens",
              "change": "↑1%"
            },
            {
              "model": "Nemotron 3.5 Lightning (free)",
              "score": "1.03T tokens",
              "change": "↑86%"
            },
            {
              "model": "DeepSeek V4 Pro 0813",
              "score": "984B tokens",
              "change": "↑107%"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "854B tokens",
              "change": "↑1%"
            },
            {
              "model": "Gemini 2.5 Flash Lite",
              "score": "730B tokens",
              "change": "new"
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
