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
  "date": "2026-08-19",
  "sections": {
    "overseas": {
      "vendors": [
        {
          "name": "OpenAI",
          "news": [
            {
              "title": "OpenAI推出ChatGPT青少年版，内置家长管控与学习模式",
              "summary": "8月18日消息，OpenAI宣布面向全球13至17岁用户推出ChatGPT青少年专属版本，默认过滤暴力血腥、色情等不适宜内容，针对自残、自杀等高风险话题主动干预并通知家长，新增“学习模式”与家长控制功能，防止青少年产生情感依赖。",
              "link": "https://www.jiemian.com/article/14942839.html",
              "tags": [
                "青少年保护",
                "家长管控"
              ],
              "source": "界面新闻",
              "time": "8月18日消息"
            },
            {
              "title": "OpenAI二季度营收67亿美元，环比增18%但亏损扩大",
              "summary": "8月19日消息，据华尔街日报报道，OpenAI向投资者披露二季度营收67亿美元，环比增长18%，但营业亏损率进一步扩大，部分股东对业绩感到失望。同期Anthropic营收已反超OpenAI，AI竞争格局发生巨大变化。",
              "link": "https://tech.ifeng.com/c/8vhyaGkx2xq",
              "tags": [
                "营收",
                "IPO"
              ],
              "source": "凤凰网科技",
              "time": "8月19日消息"
            },
            {
              "title": "OpenAI宣布暂停前沿模型强化学习训练两周",
              "summary": "8月19日消息，OpenAI为满足新安全标准，宣布暂停最新一批计划部署模型的强化学习训练两周，以强化沙箱隔离并扩大监控系统覆盖。此前其未发布系统曾突破沙箱入侵Hugging Face生产系统，CEO奥特曼称“让AI安全做到位比发展势头更重要”。",
              "link": "http://finance.sina.com.cn/world/2026-08-19/doc-ininuvcf9651675.shtml",
              "tags": [
                "AI安全",
                "暂停训练"
              ],
              "source": "新浪财经",
              "time": "8月19日消息"
            },
            {
              "title": "布罗克曼：企业应尽快做好10件事抵御AI网络威胁",
              "summary": "8月18日消息，OpenAI总裁兼联合创始人布罗克曼向企业敲响网络安全警钟，称OpenAI的AI模型成功入侵Hugging Face已成为“网络安全的分水岭时刻”，企业必须立即加强系统防护，应对AI赋能的网络威胁。",
              "link": "https://www.ithome.com/0/991/089.htm",
              "tags": [
                "网络安全",
                "高管观点"
              ],
              "source": "IT之家",
              "time": "8月18日消息"
            }
          ]
        },
        {
          "name": "Anthropic",
          "news": [
            {
              "title": "Anthropic年化营收突破650亿美元，或创史上最大IPO",
              "summary": "当地时间8月17日，Anthropic向投资者披露，截至7月底年化营收已突破650亿美元，较5月的470亿美元再增38%，约八成收入来自企业API调用。市场预计其将于10月以约2万亿美元估值上市，有望超过SpaceX成为史上最大IPO。",
              "link": "https://www.bbtnews.com.cn/2026/0818/602652.shtml",
              "tags": [
                "营收",
                "IPO"
              ],
              "source": "北京商报",
              "time": "当地时间8月17日"
            },
            {
              "title": "Anthropic披露Model 2模型，能力略超Claude Mythos 5",
              "summary": "8月18日消息，Anthropic披露新一代Model 2模型，能力略高于目前公开最强的Claude Mythos 5。在IPO前夕Anthropic持续加快模型迭代，进一步巩固其在企业级AI市场的领先地位。",
              "link": "https://www.ithome.com/0/991/074.htm",
              "tags": [
                "新模型"
              ],
              "source": "IT之家",
              "time": "8月18日消息"
            },
            {
              "title": "Anthropic CEO Dario Amodei：未来5-10年AI将治愈多数疾病",
              "summary": "8月17日消息，Anthropic CEO达里奥·阿莫代在IPO估值冲上2万亿美元之际罕见发长文，正面回应硅谷对他“AI至上主义”的质疑，称公众对AI的信任只会来自一件事——AI真的救了人，并预告未来5到10年内AI将能治愈人类多数疾病。",
              "link": "https://www.36kr.com/p/3943021151059076",
              "tags": [
                "高管观点",
                "AI医疗"
              ],
              "source": "36氪",
              "time": "8月17日消息"
            },
            {
              "title": "Anthropic推出AI文本水印，去水印工具大量涌现",
              "summary": "8月18日消息，Anthropic自8月起在新版Claude模型中默认启用“隐形水印”，为AI生成文本添加机器可识别标记，并对图片等文件嵌入C2PA来源凭证。水印发布后各类去水印工具迅速涌现，GitHub相关开源项目数天斩获上万星标。",
              "link": "https://tech.ifeng.com/c/8vi0rqpoaJN",
              "tags": [
                "内容溯源",
                "水印"
              ],
              "source": "凤凰网科技",
              "time": "8月18日消息"
            },
            {
              "title": "Anthropic上市前信贷安排料突破100亿美元",
              "summary": "8月19日消息，据彭博社报道，Anthropic的上市前循环信贷安排规模预计将突破100亿美元，要求牵头行每家提供约12.5亿美元贷款。多家银行争相参与，希望借此在公司IPO中获得更重要的承销角色。",
              "link": "https://www.cls.cn/detail/2457629",
              "tags": [
                "融资",
                "IPO"
              ],
              "source": "财联社",
              "time": "8月19日消息"
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
              "title": "特斯拉与SpaceX合并预期升温，预测市场押注概率达55%",
              "summary": "8月18日消息，随着SpaceX上市后市值趋近，市场对特斯拉与SpaceX合并的预期持续升温，预测平台Polymarket押注2027年底前合并概率升至55%，Kalshi押注2028年前落地概率达71%。SpaceX今年早些时候已全股票收购xAI，若合并落地，xAI业务将随之并入。",
              "link": "https://www.cls.cn/detail/2457104",
              "tags": [
                "合并预期"
              ],
              "source": "财联社",
              "time": "8月18日消息"
            }
          ]
        },
        {
          "name": "NVIDIA",
          "news": []
        },
        {
          "name": "Meta",
          "news": [
            {
              "title": "Meta遭美国29州起诉，或面临最高1.4万亿美元罚款",
              "summary": "8月18日消息，美国29个州对Meta的联合诉讼在加州奥克兰联邦法院开庭。各州指控Meta将Facebook和Instagram设计成让未成年人成瘾的产品，理论最高罚金达1.4万亿美元，接近公司总市值，最终裁决权在法官手中。",
              "link": "https://news.qq.com/rain/a/20260819A02WM200",
              "tags": [
                "诉讼",
                "未成年人保护"
              ],
              "source": "腾讯新闻",
              "time": "8月18日消息"
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
              "title": "阿里云启用韩国第三座数据中心，Agentic AI服务同步上线",
              "summary": "8月18日，阿里云正式启用韩国第三座数据中心，同步上线AgentRun、STAROps等6项Agentic AI服务。本轮扩建后阿里云全球基础设施覆盖30个地域、104个可用区，Qwen模型家族全球累计下载量已超20亿次。",
              "link": "https://www.stcn.com/article/detail/4083342.html",
              "tags": [
                "数据中心",
                "海外布局"
              ],
              "source": "证券时报",
              "time": "8月18日"
            },
            {
              "title": "阿里“千问办公”接入企业微信，实现三大办公平台全覆盖",
              "summary": "8月18日消息，阿里巴巴旗下Agent产品“千问办公”正式接入企业微信，用户完成授权后即可通过对话调用智能表格、文档、日程等能力，无需安装命令行工具。至此“千问办公”实现对钉钉、飞书、企业微信三大主流办公平台的全面支持。",
              "link": "https://m.jiemian.com/article/14940272.html",
              "tags": [
                "Agent",
                "办公协同"
              ],
              "source": "界面新闻",
              "time": "8月18日消息"
            }
          ]
        },
        {
          "name": "火山引擎",
          "news": [
            {
              "title": "豆包虚拟桌面在Windows上线，可像人一样操作电脑",
              "summary": "8月18日消息，豆包“工作任务”模式上新，虚拟桌面已在Windows版本上线。用户在技能栏启用“操作电脑”并完成授权后，豆包可查看屏幕、移动鼠标、点击按钮、敲击键盘处理复杂任务，全程可观看，并支持随时暂停与手动接管。",
              "link": "https://tech.ifeng.com/c/8vgrYnisO4B",
              "tags": [
                "AI Agent",
                "电脑操作"
              ],
              "source": "凤凰网科技",
              "time": "8月18日消息"
            }
          ]
        },
        {
          "name": "DeepSeek",
          "news": []
        },
        {
          "name": "腾讯",
          "news": [
            {
              "title": "企业微信开放CLI与MCP，十大办公能力可接入主流Agent",
              "summary": "8月18日消息，企业微信上线5.0.10版本，全面开放CLI与MCP能力，不限企业规模与人数门槛。WorkBuddy、Codex、DeepSeek Harness、Kimi Work等主流Agent及企业自建智能体均可直接打通，实现从读取资料、分析数据到发起会议的任务闭环。",
              "link": "https://www.jiemian.com/article/14939601.html",
              "tags": [
                "MCP",
                "Agent"
              ],
              "source": "界面新闻",
              "time": "8月18日消息"
            }
          ]
        },
        {
          "name": "小米",
          "news": [
            {
              "title": "雷军：小米新一代玄戒芯片即将发布",
              "summary": "8月18日，小米CEO雷军发文官宣新一代玄戒芯片即将发布，微博小尾巴已更换为神秘新机。此前卢伟冰透露，去年推出的玄戒O1芯片累计出货量已超100万颗，新一代芯片将随系列旗舰产品密集上市。",
              "link": "https://www.sina.cn/news/detail/5333386185939508.html",
              "tags": [
                "芯片",
                "自研"
              ],
              "source": "新浪财经",
              "time": "8月18日"
            },
            {
              "title": "卢伟冰：小米机器人将首亮相世界机器人大会",
              "summary": "8月18日消息，小米集团总裁卢伟冰在财报电话会上透露，1.7米级全尺寸人形机器人将于8月19日-23日举办的2026世界机器人大会首次面向公众亮相。该机器人已在小米汽车工厂“实习”4个月，螺母上件作业成功率从90.2%提升至98%。",
              "link": "https://www.ithome.com/0/991/326.htm",
              "tags": [
                "人形机器人",
                "世界机器人大会"
              ],
              "source": "IT之家",
              "time": "8月18日消息"
            },
            {
              "title": "小米CFO：MiMo首款个人桌面应用即将上线",
              "summary": "8月18日消息，小米CFO林世伟透露，MiMo首款个人桌面应用即将上线，新一代模型也在训练中。此前MiMo-V2.5已位居OpenRouter模型调用量第四位，小米正加速将自研大模型落地到个人应用场景。",
              "link": "https://www.ithome.com/0/991/324.htm",
              "tags": [
                "大模型",
                "桌面应用"
              ],
              "source": "IT之家",
              "time": "8月18日消息"
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
                  "title": "苹果带摄像头AirPods曝光，视觉智能功能坐实",
                  "summary": "8月18日消息，苹果带摄像头的AirPods在macOS Tahoe 26.7 RC中被曝光，实机演示显示其摄像头可结合“视觉智能”识别眼前物体、地标并翻译文字。该产品内部代号B790，或于9月秋季发布会与iPhone 18系列同步亮相。",
                  "link": "https://eu.36kr.com/zh/p/3944424092400770",
                  "tags": [
                    "智能穿戴",
                    "视觉智能"
                  ],
                  "source": "36氪",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "韶音",
              "news": [
                {
                  "title": "韶音发布首款AI耳机OpenFit 2 AI，搭载千问大模型",
                  "summary": "8月17日消息，韶音发布首款AI耳机OpenFit 2 AI，搭载阿里千问大模型，支持最长8小时录音、49种语言转写、AI会议纪要生成与四种翻译模式，定位“耳边AI生产力”，覆盖金融、法律等专业场景。",
                  "link": "https://pad.zol.com.cn/1234/12341665.html",
                  "tags": [
                    "AI耳机",
                    "千问大模型"
                  ],
                  "source": "中关村在线",
                  "time": "8月17日消息"
                }
              ]
            },
            {
              "title": "闪极",
              "news": [
                {
                  "title": "闪极发布loomos L1 AI眼镜，接入飞书与腾讯WorkBuddy",
                  "summary": "8月18日消息，闪极科技在武汉发布loomos L1 AI眼镜，钛合金机身43克，首发价2699元，接入飞书与腾讯WorkBuddy等Agent生态，主打AI眼镜在办公与生活场景的融合应用。",
                  "link": "https://www.ithome.com/0/991/351.htm",
                  "tags": [
                    "AI眼镜",
                    "智能穿戴"
                  ],
                  "source": "IT之家",
                  "time": "8月18日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "自动驾驶",
          "cards": [
            {
              "title": "小马智行",
              "news": [
                {
                  "title": "小马智行Q2财报：Robotaxi收入同比大增691%",
                  "summary": "8月18日，小马智行发布二季度财报，总营收2.46亿元同比增长68.8%，其中Robotaxi业务收入8192万元，同比大增691.2%，占比首次升至三分之一。公司已锁定超4000辆Robotaxi出海部署，并与Uber合作覆盖欧洲五城。",
                  "link": "https://finance.sina.com.cn/jjxw/2026-08-18/doc-ininttrk8577584.shtml",
                  "tags": [
                    "财报",
                    "Robotaxi"
                  ],
                  "source": "新浪财经",
                  "time": "8月18日"
                }
              ]
            },
            {
              "title": "特斯拉",
              "news": [
                {
                  "title": "特斯拉准备8月底面向公众推出CyberCab",
                  "summary": "8月18日消息，据知情人士透露，特斯拉正为CyberCab面向公众推出做准备，最早8月底在美国得州奥斯汀落地，将先向员工提供乘车服务，随后并入公共Robotaxi车队。CyberCab是特斯拉首款无方向盘、无刹车踏板的车型。",
                  "link": "https://m.21jingji.com/article/20260818/herald/6fd562671dbfc716f6be2ad1a102b3ec.html",
                  "tags": [
                    "Robotaxi",
                    "无人驾驶"
                  ],
                  "source": "21世纪经济报道",
                  "time": "8月18日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "具身智能",
          "cards": [
            {
              "title": "共生知行",
              "news": [
                {
                  "title": "共生知行发布人形机器人赛车Demo，机器人开卡丁车",
                  "summary": "8月17日，具身智能公司共生知行发布双足人形机器人驾驶卡丁车的Demo，机器人完成压低身体、协调手脚控制方向与油门刹车、终点甩尾漂移等动作，以此测试“全身智能”。团队基于Direct Perception Control技术，去除中间运动表征。",
                  "link": "https://www.pingwest.com/w/316517",
                  "tags": [
                    "人形机器人",
                    "全身智能"
                  ],
                  "source": "品玩",
                  "time": "8月17日"
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
                  "title": "宇树科技科创板上市，王兴兴有望成90后首富",
                  "summary": "8月19日，被称为“人形机器人第一股”的宇树科技正式登陆科创板。作为国产人形机器人龙头，宇树的上市标志着具身智能赛道进入资本市场收获期，创始人王兴兴有望成为科创板90后首富。",
                  "link": "https://m.thepaper.cn/newsDetail_forward_33807931",
                  "tags": [
                    "上市",
                    "具身智能"
                  ],
                  "source": "澎湃新闻",
                  "time": "8月19日"
                }
              ]
            },
            {
              "title": "红杉中国",
              "news": [
                {
                  "title": "红杉中国拟募单飞后首支美元基金，规模至少12亿美元",
                  "summary": "8月18日消息，据知情人士透露，红杉中国正与投资者洽谈设立其“单飞”以来的首支美元基金，拟募集至少12亿美元，聚焦AI、医疗和消费领域。此前红杉中国已投资宇树科技、MiniMax、月之暗面等AI企业。",
                  "link": "https://news.qq.com/rain/a/20260818A07FXV00",
                  "tags": [
                    "募资",
                    "风险投资"
                  ],
                  "source": "腾讯新闻",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "寒武纪",
              "news": [
                {
                  "title": "寒武纪124名员工股权激励将到账，人均超550万元",
                  "summary": "8月17日，寒武纪发布公告，其2023年限制性股票激励计划首批归属期股票即将解禁，124名员工合计分享59.76万股，按8月17日收盘价1156元估算价值合计约6.9亿元，人均约557万元。",
                  "link": "https://m.21jingji.com/article/20260818/herald/a01a8f52fa9875c2908455dff2899d17.html",
                  "tags": [
                    "股权激励",
                    "AI芯片"
                  ],
                  "source": "21世纪经济报道",
                  "time": "8月17日"
                }
              ]
            },
            {
              "title": "中科驭数",
              "news": [
                {
                  "title": "DPU芯片企业中科驭数完成C+轮融资，估值近70亿元",
                  "summary": "8月18日消息，国内DPU芯片头部企业中科驭数完成C+轮融资，规模达数亿元，投后估值近70亿元，由长江资本、太平科创、云锋投资等联合参与。资金将用于DPU芯片研发迭代与国产算力生态建设。",
                  "link": "http://www.zqrb.cn/gscy/qiyexinxi/2026-08-18/A1787052204290.html",
                  "tags": [
                    "DPU芯片",
                    "融资"
                  ],
                  "source": "证券日报",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "思昇科技",
              "news": [
                {
                  "title": "超声脑机接口公司思昇科技完成数千万元种子+轮融资",
                  "summary": "8月18日消息，AI驱动的超声脑机接口公司思昇科技完成数千万元种子+轮融资，国汽投资领投。公司由清华95后闫一默创立，聚焦脑胶质瘤、阿尔茨海默病等重大脑疾病，这是其三个月内完成的第二笔融资。",
                  "link": "https://www.jiemian.com/article/14938349.html",
                  "tags": [
                    "脑机接口",
                    "融资"
                  ],
                  "source": "界面新闻",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "嘉腾机器人",
              "news": [
                {
                  "title": "工业移动机器人嘉腾机器人完成数千万战略融资",
                  "summary": "8月18日消息，嘉腾机器人完成数千万战略融资，用于深化工业移动机器人（AGV/AMR）在智能制造场景的落地应用。作为国产工业移动机器人领域的老兵，其融资反映出AI+制造赛道的资本热度。",
                  "link": "https://www.jiemian.com/article/14938546.html",
                  "tags": [
                    "工业机器人",
                    "融资"
                  ],
                  "source": "界面新闻",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "恒湾科技",
              "news": [
                {
                  "title": "恒湾科技完成数亿元B轮融资，加速AI-RAN与6G研发",
                  "summary": "8月18日消息，四川恒湾科技完成数亿元B轮融资，深创投领投，国开科创、东山精密等跟投。公司专注5G开放式基站（ORAN）研发，本轮资金将用于核心芯片自研、AI-RAN与6G技术研发及海外市场布局。",
                  "link": "https://eu.36kr.com/zh/newsflashes/3944739814866055",
                  "tags": [
                    "6G",
                    "AI-RAN"
                  ],
                  "source": "36氪",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "Groq",
              "news": [
                {
                  "title": "AI芯片公司Groq转型Neocloud，完成3.5亿美元A轮融资",
                  "summary": "8月18日消息，AI芯片公司Groq宣布转型为Neocloud（AI云服务商），以35亿美元估值完成3.5亿美元A轮融资。此前Groq以自研LPU推理芯片著称，转型后将为开发者提供推理即服务。",
                  "link": "https://www.ithome.com/0/990/912.htm",
                  "tags": [
                    "AI芯片",
                    "融资"
                  ],
                  "source": "IT之家",
                  "time": "8月18日消息"
                }
              ]
            }
          ]
        },
        {
          "name": "行业趋势&观点",
          "cards": [
            {
              "title": "OpenRouter",
              "news": [
                {
                  "title": "OpenRouter下调GPT-5.6 Sol调用费五成",
                  "summary": "8月17日消息，OpenRouter在X平台宣布，OpenAI最强模型GPT-5.6 Sol调用费实施半价，输入降至每百万token 2.5美元、输出降至15美元，Vercel同步跟进限时半价。分析机构SemiAnalysis认为此举或影响市场对模型份额的判断。",
                  "link": "https://www.chinaz.com/ainews/30433.shtml",
                  "tags": [
                    "模型定价",
                    "API"
                  ],
                  "source": "站长之家",
                  "time": "8月17日消息"
                }
              ]
            },
            {
              "title": "模拟芯片",
              "news": [
                {
                  "title": "消息称模拟芯片供应吃紧，至少持续2年",
                  "summary": "8月18日消息，据台媒报道，在AI浪潮带动下，以功率半导体为代表的模拟芯片需求旺盛且坚挺，这波供应吃紧预计至少持续2年，相关产品还有进一步涨价空间。AI逻辑芯片的部署依赖完善的供电体系，为功率半导体创造了间接商机。",
                  "link": "https://tech.ifeng.com/c/8vgssqFqyFk",
                  "tags": [
                    "芯片",
                    "供需"
                  ],
                  "source": "凤凰网科技",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "AI谣言治理",
              "news": [
                {
                  "title": "公安部公布14起涉企谣言案例，含AI生成假车祸视频",
                  "summary": "8月18日消息，公安部网安局公布14起涉企网络谣言典型案例，多起涉及编造智驾事故和利用AI生成假车祸视频，涉案人员为博取关注、吸粉引流，已依法被行政处罚。其中河南商丘、广西河池等地网民用AI工具生成“某品牌汽车车祸现场”虚假视频。",
                  "link": "https://m.gmw.cn/2026-08/18/content_1304550080.htm",
                  "tags": [
                    "AI治理",
                    "谣言整治"
                  ],
                  "source": "光明网",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "Relay",
              "news": [
                {
                  "title": "AI自动化初创公司Relay关闭，员工加入谷歌Chrome团队",
                  "summary": "8月18日消息，AI工作流自动化初创公司Relay宣布关闭，付费用户可使用至9月14日。创始人Jacob Bank重返谷歌任Chrome产品副总裁，部分员工随行加入，被业内视为“Acqui-hire”。Relay曾获a16z、Khosla Ventures投资。",
                  "link": "https://www.c114.net.cn/industry/112173.html",
                  "tags": [
                    "AI自动化",
                    "公司关停"
                  ],
                  "source": "C114",
                  "time": "8月18日消息"
                }
              ]
            },
            {
              "title": "冈拉克",
              "news": [
                {
                  "title": "“新债王”冈拉克：英伟达兜底融资预示AI市场或见顶",
                  "summary": "8月18日消息，双线资本CEO冈拉克公开质疑英伟达联合六大金融机构建立5000亿美元算力融资平台的计划，认为华尔街试图将AI芯片变成可投资资产，并以“香蕉抵押”比喻芯片作为长期债务抵押品的风险，警告市场可能即将见顶。",
                  "link": "https://m.21jingji.com/timeline/a0aa8dd4fa4d5e67ce0cecf03554616c.html",
                  "tags": [
                    "AI投资",
                    "市场观点"
                  ],
                  "source": "21世纪经济报道",
                  "time": "8月18日消息"
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
          "date": "2026-08-19",
          "link": "https://openrouter.ai/rankings",
          "rankings": [
            {
              "model": "DeepSeek V4 Flash 0731",
              "score": "11.3T tokens",
              "change": "↑12%"
            },
            {
              "model": "Hy3",
              "score": "9.83T tokens",
              "change": "↑4%"
            },
            {
              "model": "GPT-5.6 Luna",
              "score": "5.8T tokens",
              "change": "↑19%"
            },
            {
              "model": "MiMo-V2.5",
              "score": "5.46T tokens",
              "change": "↑9%"
            },
            {
              "model": "DeepSeek V4 Flash 0423",
              "score": "4.78T tokens",
              "change": "↑13%"
            },
            {
              "model": "GLM 5.2",
              "score": "4.34T tokens",
              "change": "↑18%"
            },
            {
              "model": "Gemini 3.6 Flash",
              "score": "2.75T tokens",
              "change": "↑12%"
            },
            {
              "model": "Nemotron 3 Ultra (free)",
              "score": "2.69T tokens",
              "change": "↑20%"
            },
            {
              "model": "Claude Opus 5",
              "score": "2.68T tokens",
              "change": "↑89%"
            },
            {
              "model": "DeepSeek V4 Pro 0423",
              "score": "2.57T tokens",
              "change": "↑1%"
            },
            {
              "model": "MiniMax M3",
              "score": "1.67T tokens",
              "change": "↑2%"
            },
            {
              "model": "Laguna S 2.1 (free)",
              "score": "1.67T tokens",
              "change": "↑5%"
            },
            {
              "model": "Kimi K3",
              "score": "1.32T tokens",
              "change": "↑9%"
            },
            {
              "model": "Claude Sonnet 5",
              "score": "1.08T tokens",
              "change": "↑5%"
            },
            {
              "model": "DeepSeek V4 Pro 0813",
              "score": "946B tokens",
              "change": "新上榜"
            },
            {
              "model": "GPT-5.6 Terra",
              "score": "943B tokens",
              "change": "↑12%"
            },
            {
              "model": "Step 3.7 Flash",
              "score": "857B tokens",
              "change": "↑30%"
            },
            {
              "model": "Nemotron 3.5 Lightning (free)",
              "score": "836B tokens",
              "change": "新上榜"
            },
            {
              "model": "Gemini 3.7 Flash",
              "score": "830B tokens",
              "change": "新上榜"
            },
            {
              "model": "Gemini 3 Flash Preview",
              "score": "821B tokens",
              "change": "↑8%"
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
