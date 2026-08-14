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
const NEWS_DATA =     {
      "date": "2026-08-14",
      "sections": {
        "overseas": {
          "vendors": [
            {
              "name": "OpenAI",
              "news": [
                {
                  "title": "OpenAI 推 Ultrafast 模式，GPT-5.6 Sol 提速 14 倍",
                  "time": "8月14日消息",
                  "summary": "8月14日消息，OpenAI 以预览形式针对最强模型 GPT-5.6 Sol 推出 Ultrafast（超高速）模式，处理速度达标准模式 14 倍，最高每秒输出 750 个词元。该模式由 Cerebras 晶圆级引擎提供算力，让速度与能力兼得。早期应用场景包括事故响应、金融研究、客服与电商问答，当前仅向一小批客户开放有限预览。",
                  "link": "https://news.qq.com/rain/a/20260814A03MJQ00",
                  "tags": [
                    "产品功能",
                    "推理提速"
                  ],
                  "source": "腾讯新闻"
                },
                {
                  "title": "备战 IPO：彭博称 OpenAI 年化营收有望翻番至 400 亿美元",
                  "time": "8月14日消息",
                  "summary": "8月14日消息，据彭博社报道，OpenAI 在筹备 IPO 前发展势头良好，2026 年有望实现年化收入超过 400 亿美元，较 2025 年约 200 亿美元翻番。联合创始人布罗克曼在内部公告中称，仅 7 月月度营收增长率就超 20%。增长主要得益于 AI 编程软件业务扩张，公司已下调部分模型价格以应对 Anthropic 等竞争对手冲击。",
                  "link": "https://tech.ifeng.com/c/8vYGCajr2EF",
                  "tags": [
                    "IPO",
                    "营收"
                  ],
                  "source": "凤凰科技"
                }
              ]
            },
            {
              "name": "Anthropic",
              "news": [
                {
                  "title": "Anthropic 传 10 月 IPO，估值或达 2 万亿美元",
                  "time": "8月13日消息",
                  "summary": "8月13日消息，多位 Anthropic 投资方透露，公司预计将于 10 月挂牌上市，估值有望达到 2 万亿美元及以上，将超越 SpaceX 成为史上规模最大 IPO。截至 5 月，Anthropic 年化营收已突破 470 亿美元，投资方预测年底可达 1000 亿至 1200 亿美元。公司已秘密向 SEC 提交 IPO 申请，但官方尚未敲定最终估值目标。",
                  "link": "https://finance.sina.cn/2026-08-13/detail-inineiys0055547.d.html",
                  "tags": [
                    "IPO",
                    "融资"
                  ],
                  "source": "新浪财经"
                },
                {
                  "title": "部分 Claude 模型将添加文本水印，Anthropic 回应关切",
                  "time": "8月13日消息",
                  "summary": "8月13日消息，Anthropic 宣布部分 Claude 模型会在输出文本中嵌入难以察觉的水印，复制粘贴后仍保留，用于判断文字由 AI 还是人类生成。针对外界担忧，Anthropic 回应将提供免费 API 让第三方检测水印，并强调水印不改变回答含义与质量，旨在遵守欧盟《人工智能法》透明度义务。",
                  "link": "https://tech.ifeng.com/c/8vZ4PJWhJIX",
                  "tags": [
                    "AI治理",
                    "产品功能"
                  ],
                  "source": "凤凰科技"
                }
              ]
            },
            {
              "name": "Google",
              "news": [
                {
                  "title": "谷歌 DeepMind 推手语转文本模型 SL2T，落地 Pixel 11",
                  "time": "当地时间8月12日",
                  "summary": "当地时间8月12日，谷歌 DeepMind 发布大规模多语言手语转文本模型 SL2T，并搭载至 Pixel 11 手机系统，首次将手语 AI 落地普通消费电子产品。模型基于超 10 万小时数据训练，采用设备端追踪+云端翻译架构，原始视频即时丢弃保障隐私。首批支持将美国手语翻译成英文，后续将扩展更多语言。",
                  "link": "https://www.jiemian.com/article/14917125.html",
                  "tags": [
                    "AI应用",
                    "无障碍"
                  ],
                  "source": "界面新闻"
                },
                {
                  "title": "谷歌发布 Gemini 3.7 Flash，编程能力大增半价促销",
                  "time": "当地时间8月13日",
                  "summary": "当地时间8月13日，谷歌发布 Gemini 3.7 Flash 模型，距 3.6 Flash 仅三周，专为编程与 Agent 场景打造，软件工程、知识工作及网页开发能力大幅提升。至 2026 年底以首发优惠价提供，输入降至每百万 Token 0.75 美元，仅为原 3.6 Flash 一半，被视为抢占开发者市场的价格战策略。",
                  "link": "https://www.ithome.com/0/989/497.htm",
                  "tags": [
                    "模型发布",
                    "编程"
                  ],
                  "source": "IT之家"
                },
                {
                  "title": "谷歌 AI 重组内幕：布林要求全力投入 Gemini",
                  "time": "8月13日消息",
                  "summary": "8月13日消息，据路透社报道，谷歌联合创始人布林近几个月敦促关键 AI 部门员工全力投入 Gemini 模型，以缩小与 Anthropic、OpenAI 的差距。内部测试显示 Gemini 新旗舰版本在编程等领域仍落后，谷歌已推迟发布时间。8月5日 DeepMind 大规模调整领导层，原 CEO 哈萨比斯转任董事长，副手卡武克丘奥鲁接任。",
                  "link": "https://tech.ifeng.com/c/8vY9MTvnqZD",
                  "tags": [
                    "公司战略",
                    "人事"
                  ],
                  "source": "凤凰科技"
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
                  "title": "德国人权组织对 Meta 智能眼镜提起刑事诉讼",
                  "time": "8月13日消息",
                  "summary": "8月13日消息，德国数字人权组织 HateAid 向法兰克福总检察院提交刑事控告，指控 Meta 及 Ray-Ban 等企业的 AI 智能眼镜违反隐私法规。该组织认为眼镜隐蔽录制能力使销售产品本身即可能构成犯罪，要求禁止在德国销售。Meta 回应称眼镜设计已融入隐私保护，录制时 LED 指示灯会闪烁。",
                  "link": "https://www.notebookcheck-cn.com/Meta.1367332.0.html",
                  "tags": [
                    "隐私",
                    "监管"
                  ],
                  "source": "Notebookcheck"
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
                  "title": "千问开放平台上线菜鸟智能体，自然语言寄件",
                  "time": "8月13日消息",
                  "summary": "8月13日消息，千问开放平台上线菜鸟智能体，用户用自然语言描述寄件需求，即可根据物品类型、价格要求、上门时间等智能匹配寄件方案和快递公司。支持大件识别推荐承运方、寄件避坑答疑、结合通讯录和历史寄件记录自动补全信息。此前千问开放平台于 8 月 10 日上线，首批覆盖物流、房产、理财等多个领域。",
                  "link": "https://www.jiemian.com/article/14916554.html",
                  "tags": [
                    "智能体",
                    "AI应用"
                  ],
                  "source": "界面新闻"
                }
              ]
            },
            {
              "name": "火山引擎",
              "news": []
            },
            {
              "name": "DeepSeek",
              "news": [
                {
                  "title": "DeepSeek Harness 开发者预览版开放测试",
                  "time": "8月13日消息",
                  "summary": "8月13日消息，DeepSeek Harness 开发者预览版（v0.1）面向全球开放测试，并同步以 MIT 协议开放源码。Harness 采取一切皆插件设计，模型、工具、技能、会话、沙箱等所有 Agent 能力均由插件组合，可自由替换重组，定位对标 Claude Code/Cowork，主打编程和办公场景。GitHub 仓库星数半小时内破万。",
                  "link": "https://tech.ifeng.com/c/8vZ0azYi0Sf",
                  "tags": [
                    "智能体",
                    "开源"
                  ],
                  "source": "凤凰科技"
                },
                {
                  "title": "DeepSeek API 采用峰谷定价，空闲时段半价",
                  "time": "8月13日消息",
                  "summary": "8月13日消息，深度求索宣布对 DeepSeek API 价格更新调整，采用峰谷定价，空闲时段价格为高峰时段一半。高峰时段为北京时间 9:00-12:00、14:00-18:00，新价格将于 8 月 17 日 00:00 起生效。以 V4-Pro 为例，高峰时段百万 Token 输出价最高达 27 元，鼓励用户错峰调用优化资源利用。",
                  "link": "https://stcn.com/article/detail/4074219.html",
                  "tags": [
                    "定价",
                    "API"
                  ],
                  "source": "证券时报"
                }
              ]
            },
            {
              "name": "腾讯",
              "news": []
            },
            {
              "name": "小米",
              "news": [
                {
                  "title": "小米澎湃 OS 4 发布，超级小爱 2.0 加持",
                  "time": "8月13日消息",
                  "summary": "8月13日消息，小米集团总裁卢伟冰官宣澎湃 OS 4 Beta 版，决定不开发布会直接推送。新系统引入柔光玻璃材质，接入 Xiaomi MiMo 大模型升级超级小爱 2.0，推出专家模式实现跨应用跨设备任务编排，一句话即可自规划自执行。首批 Beta 版机型 8 月 14 日起陆续推送，覆盖小米 17、REDMI K90 系列。",
                  "link": "https://k.sina.cn/article_5328858693_13d9fee4502002gr82.html",
                  "tags": [
                    "操作系统",
                    "AI助手"
                  ],
                  "source": "新浪科技"
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
                      "title": "苹果拟付数亿美元买新闻内容改进 AI 版 Siri",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，据《华尔街日报》报道，苹果正与多家新闻出版商洽谈多年期内容授权协议，拟投入最高数亿美元获取新闻内容，用于支持 AI 版 Siri 升级，新功能预计 2026 年内上线。苹果提出按实际使用量结算的灵活付费方案，区别于行业主流固定年费模式，相关全新 AI 功能预计年内推出。",
                      "link": "https://www.jiemian.com/article/14914816.html",
                      "tags": [
                        "AI助手",
                        "内容授权"
                      ],
                      "source": "界面新闻"
                    }
                  ]
                },
                {
                  "title": "三星",
                  "news": [
                    {
                      "title": "三星、SK海力士积极引入 AI，考核与部署挂钩",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，SK 海力士已在清州半导体后端生产线分阶段部署 AI 系统，设备验证人员 KPI 已与 AI 软件成功验证直接挂钩，目标是 2030 年建成自主半导体制造工厂。三星电子则要求设备供应商将 AI Agent 作为新订购设备标配，此前保守态度近期已转变，积极部署 AI 用于流程控制和制造运营。",
                      "link": "https://www.guandian.cn/article/20260813/584613.html",
                      "tags": [
                        "芯片制造",
                        "AI应用"
                      ],
                      "source": "观点网"
                    }
                  ]
                },
                {
                  "title": "联想",
                  "news": [
                    {
                      "title": "联想 AI 相关收入同比增长 60%，占营收 35%",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，联想集团发布 2026/27 财年第一财季业绩，营收 269.4 亿美元创单季度新高，同比增长 43%；经调整净利润 10.75 亿美元，同比增长 176%。其中人工智能相关收入同比增长 60%，占集团总收入 35%；AI 服务器储备订单从 1400 亿元大幅提升至 3600 亿元，混合式 AI 战略进入价值兑现阶段。",
                      "link": "https://stcn.com/article/detail/4073186.html",
                      "tags": [
                        "财报",
                        "AI业务"
                      ],
                      "source": "证券时报"
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
                  "title": "Dyna Robotics",
                  "news": [
                    {
                      "title": "机器人基础模型 DYNA-2 登场，百万小时人类视频训练",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，具身智能公司 Dyna Robotics 发布机器人基础模型 DYNA-2，基于超 100 万小时第一人称人类视频预训练，任务成功率可达 90%。模型采用世界动作模型架构，先预测物理世界如何运动再采取动作，仅需 13 分钟机器人数据即可让灵巧手学会拧瓶盖，首次验证人类到机器人跨本体迁移的缩放规律。",
                      "link": "https://www.163.com/dy/article/L47HHACL0511B8LM.html",
                      "tags": [
                        "机器人",
                        "基础模型"
                      ],
                      "source": "网易科技"
                    }
                  ]
                },
                {
                  "title": "世界人形机器人运动会",
                  "news": [
                    {
                      "title": "第二届世界人形机器人运动会 8 月 22 日开赛",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，第二届世界人形机器人运动会将于 8 月 22 日在国家速滑馆冰丝带开幕，吸引六大洲 16 个国家 666 支队伍、2056 台机器人参赛，队伍总量同比增长 138%，机器人数量翻两番。本届共设 51 个项目 1301 场比赛，新增武术、舞蹈等对抗观赏性项目，场景赛覆盖家庭、工业、应急救援等真实场景。",
                      "link": "https://paper.people.com.cn/rmrb/pc/content/202608/14/content_30174922.html",
                      "tags": [
                        "机器人",
                        "赛事"
                      ],
                      "source": "人民日报"
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
                  "title": "长鑫科技",
                  "news": [
                    {
                      "title": "长鑫科技市值超腾讯，成中国市值最高上市公司",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，存储芯片巨头长鑫科技收盘市值达 3.54 万亿元，超越腾讯成为中国市值最高的上市公司。上市仅两周多，累计涨幅超 500%。同期腾讯发布二季度业绩后股价跌 4.5%，市值降至约 3.44 万亿元。DRAM 作为 AI 算力基础设施核心组件，长鑫被视为资金押注中国 AI 产业链的重要标的。",
                      "link": "https://www.jiemian.com/article/14918411.html",
                      "tags": [
                        "半导体",
                        "市值"
                      ],
                      "source": "界面新闻"
                    }
                  ]
                },
                {
                  "title": "宇树科技",
                  "news": [
                    {
                      "title": "宇树科技网上 8734 股遭弃购，保荐人包销",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，宇树科技披露科创板 IPO 发行结果，网上投资者缴款认购 969.8 万股，放弃认购 8734 股，包销金额约 131.7 万元，占发行总量约 0.02%。作为 A 股人形机器人第一股，宇树中签率仅 0.018%，虽一签难求但仍有个别投资者弃购，所弃股份由保荐人全部包销。",
                      "link": "https://stcn.com/article/detail/4074183.html",
                      "tags": [
                        "IPO",
                        "机器人"
                      ],
                      "source": "证券时报"
                    }
                  ]
                },
                {
                  "title": "中际旭创",
                  "news": [
                    {
                      "title": "中际旭创拟 17.47 亿受让中石科技 10.47% 股份",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，光模块龙头中际旭创公告，拟以现金 17.47 亿元受让中石科技 10.47% 股份，转让价 55.70 元/股，较收盘价折价约 0.8%。中石科技主营高性能导热材料，广泛应用于数据中心、算力中心等数字基建。双方业务具备上下游互补属性，可补齐算力硬件散热配套环节，体现 AI 产业链纵向整合趋势。",
                      "link": "https://www.cnstock.com/commonDetail/759625",
                      "tags": [
                        "并购",
                        "算力"
                      ],
                      "source": "上海证券报"
                    }
                  ]
                }
              ]
            },
            {
              "name": "行业趋势&观点",
              "cards": [
                {
                  "title": "外卖平台",
                  "news": [
                    {
                      "title": "三大外卖平台在京落地红灯停表，骑手等灯自动补时",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，北京市场监管组织平台经济破卷向善第二次协商对话，美团、淘宝闪购、京东外卖三平台率先落地红灯停表机制：骑手等红灯时配送时长自动补时，等灯多久补多久。同时电动自行车按时速不超 15 公里计算配送时长，因商家出餐慢导致的超时不扣骑手服务分，推动外卖算法从速度竞赛转向质量竞争。",
                      "link": "https://finance.sina.cn/2026-08-13/detail-ininecss3255334.d.html",
                      "tags": [
                        "算法治理",
                        "骑手"
                      ],
                      "source": "新浪财经"
                    }
                  ]
                },
                {
                  "title": "AI供应链",
                  "news": [
                    {
                      "title": "LiteLLM 供应链投毒致 195TB 数据泄露，波及 2500 家企业",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，安全公司披露今年 3 月爆发的 AI API 网关 LiteLLM 供应链投毒事件，约 40 分钟攻击窗口内波及全球约 2500 家企业，导致约 195TB 密码数据泄露，被称为 2026 年最大规模 AI 供应链泄露。攻击者通过受感染版本窃取云密钥、SSH 密钥等凭证，英伟达、AWS 等多家公司受影响。",
                      "link": "https://www.zhiding.cn/network_security/2026/0813/3196287.shtml",
                      "tags": [
                        "安全",
                        "供应链"
                      ],
                      "source": "至顶网"
                    }
                  ]
                },
                {
                  "title": "AI生产力报告",
                  "news": [
                    {
                      "title": "报告称 90% 高管认为 AI 未提升公司生产力",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，据亚特兰大联邦储备银行调查，约 90% 企业高管认为 AI 尚未提高公司生产力，自 2021 年以来推动生产力提升的因素更多是疫情期间的远程办公。研究交叉分析上市公司 5 年数据发现，裁员公告后股票平均回报接近 0，员工对 AI 相关评论明显更负面，部分企业开始召回被裁员工，出现 AI 回旋镖现象。",
                      "link": "https://news.china.com/socialgd/10000169/20260813/49673365.html",
                      "tags": [
                        "行业报告",
                        "生产力"
                      ],
                      "source": "中国网"
                    }
                  ]
                },
                {
                  "title": "AI开放之争",
                  "news": [
                    {
                      "title": "辛顿、李飞飞、吴恩达呼吁保持 AI 一定程度开放",
                      "time": "8月13日消息",
                      "summary": "8月13日消息，诺贝尔奖得主辛顿、World Labs 创始人李飞飞及吴恩达近日分别阐述对 AI 开放的立场。三人上周在 Ai4 大会讨论，均认为 AI 仍需保持一定程度的开放，避免少数大公司垄断技术。辛顿区分开源与开放权重，明确反对开放权重模型；吴恩达则聚焦谁掌握模型使用渠道的问题。",
                      "link": "https://www.ithome.com/0/989/245.htm",
                      "tags": [
                        "行业观点",
                        "开源"
                      ],
                      "source": "IT之家"
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
              "date": "2026-08-14",
              "link": "https://openrouter.ai/rankings",
              "rankings": [
                {
                  "model": "DeepSeek V4 Flash 0731",
                  "score": "10.7T tokens",
                  "change": "↑74%"
                },
                {
                  "model": "Hy3",
                  "score": "10.6T tokens",
                  "change": "↑87%"
                },
                {
                  "model": "GPT-5.6 Luna",
                  "score": "5.2T tokens",
                  "change": "↑25%"
                },
                {
                  "model": "DeepSeek V4 Flash 0423",
                  "score": "5.11T tokens",
                  "change": "↑19%"
                },
                {
                  "model": "MiMo-V2.5",
                  "score": "4.3T tokens",
                  "change": "↑19%"
                },
                {
                  "model": "GLM 5.2",
                  "score": "3.68T tokens",
                  "change": "↑23%"
                },
                {
                  "model": "DeepSeek V4 Pro",
                  "score": "2.76T tokens",
                  "change": "↑5%"
                },
                {
                  "model": "Nemotron 3 Ultra (free)",
                  "score": "1.94T tokens",
                  "change": "↑17%"
                },
                {
                  "model": "Gemini 3.6 Flash",
                  "score": "1.7T tokens",
                  "change": "↑15%"
                },
                {
                  "model": "Laguna S 2.1 (free)",
                  "score": "1.68T tokens",
                  "change": "↑8%"
                },
                {
                  "model": "Claude Opus 5",
                  "score": "1.6T tokens",
                  "change": "↑41%"
                },
                {
                  "model": "MiniMax M3",
                  "score": "1.56T tokens",
                  "change": "↑11%"
                },
                {
                  "model": "Kimi K3",
                  "score": "1.45T tokens",
                  "change": "↑4%"
                },
                {
                  "model": "Step 3.7 Flash",
                  "score": "1.12T tokens",
                  "change": "↑16%"
                },
                {
                  "model": "Claude Sonnet 5",
                  "score": "1.07T tokens",
                  "change": "↑3%"
                },
                {
                  "model": "Gemini 3 Flash Preview",
                  "score": "877B tokens",
                  "change": "↑6%"
                },
                {
                  "model": "GPT-5.6 Terra",
                  "score": "875B tokens",
                  "change": "↑16%"
                },
                {
                  "model": "Claude Sonnet 4.6",
                  "score": "776B tokens",
                  "change": "↑10%"
                },
                {
                  "model": "GPT-5.6 Sol",
                  "score": "683B tokens",
                  "change": "↑25%"
                },
                {
                  "model": "Gemini 2.5 Flash Lite",
                  "score": "1K - 10K tokens",
                  "change": "↑11%"
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
