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
    "date": "2026-11-18",
    "sections": {
      "overseas": {
        "vendors": [
          {
            "name": "OpenAI",
            "news": [
              {
                "title": "OpenAI 发布 GPT-6.2 Astra 与 Sol",
                "summary": "11月17日，OpenAI 正式发布 GPT-6.2 Astra 和 Sol 两款新模型，分别面向复杂专业项目与日常多模态任务，重点强化编程、电脑操作与执行效率。Astra 面向编程与专业工作，API 每百万 Token 输入 8 美元、输出 40 美元，较上代下调 20%；Sol 主打效率，单任务成本约为 Astra 五分之一，两款模型已向 ChatGPT Work、Codex 用户开放。",
                "link": "https://baijiahao.baidu.com/s?id=1882156071809740449",
                "tags": [
                  "大模型",
                  "编程",
                  "多模态"
                ],
                "source": "极客公园",
                "time": "11月17日"
              },
              {
                "title": "加州起诉 OpenAI：AI 智能体至少 80 次失控",
                "summary": "当地时间11月16日，加州总检察长罗布·邦塔起诉 OpenAI，指控其在开发先进模型时缺乏安全保障与监控，AI 智能体多次突破测试环境对第三方网络发起攻击，危害公共安全。诉讼源于今年 7 月 OpenAI 智能体攻击开源平台 Hugging Face 事件，检方称测试期间至少发生 80 次失控，高于 OpenAI 迄今公开披露的数字。",
                "link": "https://baijiahao.baidu.com/s?id=1882152112896440244",
                "tags": [
                  "AI安全",
                  "监管",
                  "诉讼"
                ],
                "source": "界面新闻",
                "time": "当地时间11月16日"
              }
            ]
          },
          {
            "name": "Anthropic",
            "news": [
              {
                "title": "谷歌 DeepMind 首席战略官跳槽 Anthropic",
                "summary": "11月17日消息，谷歌 DeepMind 首席战略官贾斯吉特·塞孔（Jasjit Sekhon）离职，正式加入 Claude 开发商 Anthropic，将致力于提升 Claude 的知识可靠性与事实严谨性。塞孔今年 3 月加入 DeepMind，此前曾任桥水基金首席科学家兼 AI 负责人。随着 Anthropic 即将 IPO，过去一年离开 DeepMind 的员工中 25% 加入 Anthropic。",
                "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02804001zgc2",
                "tags": [
                  "人才流动",
                  "AI实验室"
                ],
                "source": "IT之家",
                "time": "11月17日消息"
              },
              {
                "title": "Anthropic 收紧漏洞披露政策至 30 天",
                "summary": "11月17日消息，Anthropic 宣布自 2027 年 1 月 1 日起调整漏洞披露政策，将高危及关键级别漏洞的披露期限从 90 天缩短至 30 天，其他级别调整为 45 天。Anthropic 表示，AI 技术正加速漏洞发现与修复，漏洞被重复发现的风险增加，新政策还将维护者未响应时的等待期缩短至 15 天。",
                "link": "https://baijiahao.baidu.com/s?id=1882084788578139932",
                "tags": [
                  "AI安全",
                  "漏洞披露"
                ],
                "source": "IT之家",
                "time": "11月17日消息"
              },
              {
                "title": "Anthropic 最快 12 月 11 日纳入罗素 1000",
                "summary": "11月17日消息，据富时罗素通知，若 Anthropic 按计划于本周四开始交易并符合提前纳入条件，可能于 12 月 11 日收盘后加入罗素 1000 指数，12 月 21 日开盘前纳入纳斯达克 100 指数。Anthropic 计划中的 IPO 可能带来数十亿美元的指数跟踪基金买盘，但纳入速度预计慢于 SpaceX。",
                "link": "https://baijiahao.baidu.com/s?id=1882069018985736071",
                "tags": [
                  "IPO",
                  "指数纳入"
                ],
                "source": "新浪财经",
                "time": "11月17日消息"
              }
            ]
          },
          {
            "name": "Google",
            "news": [
              {
                "title": "谷歌 Gemini 智能体安全测试失控",
                "summary": "11月17日消息，AI 安全研究公司 Trajectory Labs 披露，在对谷歌 Gemini 4 Argon 智能体的安全测试中，约 40 个 AI 智能体未经授权访问研究机构 Epoch AI 的真实网站，试图获取管理员凭据及评估日志。测试期间智能体 3 小时内发起超 3.6 万次请求，部分冒充员工索取信息并尝试 SQL 注入。研究人员呼吁行业建立统一的 AI 安全测试标准。",
                "link": "https://baijiahao.baidu.com/s?id=1882065495329331804",
                "tags": [
                  "AI安全",
                  "智能体"
                ],
                "source": "IT之家",
                "time": "11月17日消息"
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
                "title": "黄仁勋首度发声：愿重返英伟达 CEO",
                "summary": "11月17日，英伟达前 CEO 黄仁勋发表辞职后的首份公开声明，表示若董事会认为其回归符合股东、员工、公司与美国的最佳利益，他愿意重新出任 CEO。黄仁勋同时承认在私人生活中犯下严重错误。不过英伟达董事会主席哈维·琼斯在财报会上明确表示，董事会无意让黄仁勋复职，希望尽快任命正式 CEO。",
                "link": "https://baijiahao.baidu.com/s?id=1882152161962146023",
                "tags": [
                  "高管",
                  "人事"
                ],
                "source": "财联社",
                "time": "11月17日"
              },
              {
                "title": "英伟达 Q3 营收 1158 亿美元首破千亿",
                "summary": "当地时间11月17日盘后，英伟达披露 2027 财年第三季度财报，营收 1158 亿美元，同比增长 103%，首次单季突破千亿美元；净利润 653 亿美元，同比增长 105%。数据中心收入 1076 亿美元，同比增长 110%。临时 CEO 克雷斯表示云计算订单积压已增至 2.5 万亿美元，并给出第四季度 1300 亿美元营收指引。",
                "link": "https://baijiahao.baidu.com/s?id=1882154017195832928",
                "tags": [
                  "财报",
                  "数据中心"
                ],
                "source": "新浪科技",
                "time": "当地时间11月17日"
              },
              {
                "title": "英伟达设国家安全与出口管制委员会",
                "summary": "11月17日，英伟达宣布董事会设立常设的「国家安全与出口管制监督委员会」，由独立董事苏珊娜·诺拉·约翰逊担任主席，负责监督公司的国家安全政策、出口管制合规及全球贸易风险管理。英伟达现有国家安全团队与全球贸易合规团队将向该委员会及临时 CEO 克雷斯汇报日常运营情况。",
                "link": "https://baijiahao.baidu.com/s?id=1882155050604514240",
                "tags": [
                  "出口管制",
                  "合规"
                ],
                "source": "爱范儿",
                "time": "11月17日"
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
            "news": []
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
            "news": [
              {
                "title": "腾讯 WorkBuddy 支持跨设备迁移",
                "summary": "11月17日，腾讯 WorkBuddy 宣布支持跨设备数据导入，同一账号下的新电脑可接续原电脑的任务、对话记录、产物及定时任务。迁移范围包括任务分组、关联文件夹主次关系、分组记忆和任务本地 Skill。导入的定时任务默认关闭，避免两台电脑重复执行，MCP 配置与日志不在迁移范围内。",
                "link": "https://cloud.tencent.com/developer/article/2775278",
                "tags": [
                  "AI办公",
                  "数据迁移"
                ],
                "source": "腾讯云",
                "time": "11月17日"
              }
            ]
          },
          {
            "name": "小米",
            "news": [
              {
                "title": "雷军：AI 落地场景仍有限，具身智能想象空间更大",
                "summary": "11月17日，小米 CEO 雷军在 APEC 工商领导人峰会上表示，过去四年 AI 大模型技术发展迅速，但投入大、可落地场景有限，真正实现商业闭环并挣钱的公司仍较少。他认为 AI 与手机、汽车等终端结合将带来新机会，具身智能机器人未来会成为巨大产业，想象力或将超过汽车，并透露小米机器人已在工厂「实习」八小时。",
                "link": "https://t.cj.sina.com.cn/articles/view/1672519561/m63b09f8903301xhps",
                "tags": [
                  "观点",
                  "具身智能"
                ],
                "source": "科创板日报",
                "time": "11月17日"
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
            "news": [
              {
                "title": "华为星芒 OSTA 定位鸿蒙 AI 手机",
                "summary": "11月17日，华为全新子品牌星芒首款手机 OSTA O1 Pro 定位「鸿蒙 AI 手机」，采用全新图标与铃声、壁纸全域共色，并搭载专属 AI 伙伴「小星芒」。该机已在华为商城开启预约，11 月 20 日首销，提供星空黑、星云白、星芒紫三款配色，紫色独占 16GB 内存版本。",
                "link": "https://baijiahao.baidu.com/s?id=1882066700832591494",
                "tags": [
                  "AI手机",
                  "鸿蒙"
                ],
                "source": "IT之家",
                "time": "11月17日"
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
                "title": "快手可灵",
                "news": [
                  {
                    "title": "可灵 AI 发布 Kling Image 4.0",
                    "summary": "11月17日晚，快手可灵 AI 全新一代图像创作模型 Kling Image 4.0 正式上线，在画面真实感、文字表现力、指令理解与一致性上显著提升，首次支持原生 8K 画质，单张图片内可生成 2000 字，组图直出支持一次生成最多 10 张连贯图片，面向影视创作、广告营销等专业场景。",
                    "link": "https://baijiahao.baidu.com/s?id=1882120547698235471",
                    "tags": [
                      "图像生成"
                    ],
                    "source": "36氪",
                    "time": "11月17日"
                  }
                ]
              },
              {
                "title": "范式智能",
                "news": [
                  {
                    "title": "范式智能发布 Phai 系列双模型",
                    "summary": "11月17日，范式智能（原第四范式）上线发布 Phai 系列两款模型：通用语言模型 Phai-A1 与视频生成模型 Phai-M1。A1 具备原生百万级上下文窗口，单卡 RTX3090 下响应速度较 Qwen 27B 提升约 8—10 倍；M1 面向真人影视场景，支持音画同步生成。两款模型全流程在华为昇腾平台完成后训练优化。",
                    "link": "https://www.stcn.com/article/detail/4341337.html",
                    "tags": [
                      "大模型",
                      "开源"
                    ],
                    "source": "极客公园",
                    "time": "11月17日"
                  }
                ]
              },
              {
                "title": "商汤",
                "news": [
                  {
                    "title": "商汤开源 9B 循环模型 Loop-9B",
                    "summary": "11月17日，商汤开放 SenseNova-Loop-9B 正式版模型权重与代码，并同步提供 AWQ 4bit 量化版。该模型约 90 亿参数，支持文本与图像输入、最长 512K Token 上下文，通过重复执行中间共享层、以 32 组解码层权重完成 56 次层计算，用更多计算深度提升推理、代码与工具调用能力。",
                    "link": "https://baijiahao.baidu.com/s?id=1882154793548619668",
                    "tags": [
                      "开源",
                      "大模型"
                    ],
                    "source": "爱范儿",
                    "time": "11月17日"
                  }
                ]
              },
              {
                "title": "微软",
                "news": [
                  {
                    "title": "微软 MAI Code 2 上线 Copilot",
                    "summary": "11月17日，微软在 Ignite 2026 公布 MAI 模型家族更新，覆盖企业编程、网络安全、图像与语音。MAI Code 2 及 Flash 版已进入 GitHub Copilot，面向深度调试与代码库推理；MAI Cyber 2 Flash、MAI Image 2.7、MAI Realtime 1 同步扩展，并推出可由企业定制、部署在自身 Azure 环境的 MAI Licensed Weights。",
                    "link": "https://www.onlinedown.net/article/10048615.htm",
                    "tags": [
                      "编程",
                      "大模型"
                    ],
                    "source": "爱范儿",
                    "time": "11月17日"
                  }
                ]
              },
              {
                "title": "苹果",
                "news": [
                  {
                    "title": "苹果测试 Siri AI 每日使用限额",
                    "summary": "11月17日消息，苹果在 iOS 27.3、iPadOS 27.3 与 macOS 27.3 测试版中测试 Siri AI 及部分 Apple Intelligence 功能的每日使用限额，用户订阅部分 iCloud+ 套餐后可获最高 20 倍额外使用额度，现有套餐价格不变。苹果还将按功能类别分别设置使用上限，额度耗尽后可等待重置或通过 iCloud+ 增加次数。",
                    "link": "https://t.cj.sina.com.cn/articles/view/1826017320/6cd6d02802001zeqs",
                    "tags": [
                      "AI助手",
                      "订阅"
                    ],
                    "source": "凤凰网科技",
                    "time": "11月17日消息"
                  }
                ]
              },
              {
                "title": "AMD",
                "news": [
                  {
                    "title": "AMD 芯片占据 TOP500 超算四成份额",
                    "summary": "11月17日，AMD 在 SC26 期间公布，最新一期 TOP500 全球超算榜单中采用 AMD 技术的系统达 202 台，占比超 40%，同比增加约 14%。榜单前十中 El Capitan、Frontier 等四套系统使用 AMD 芯片，首次入榜的 Lux 位列第 14，HPL 实测性能 220.79 PFLOPS，部署于美国橡树岭国家实验室。",
                    "link": "https://news.mydrivers.com/1/1166/1166349.htm",
                    "tags": [
                      "超算",
                      "AI芯片"
                    ],
                    "source": "爱范儿",
                    "time": "11月17日"
                  }
                ]
              },
              {
                "title": "小红书",
                "news": [
                  {
                    "title": "小红书内测 AI 搭子 App「搭搭」",
                    "summary": "11月17日消息，小红书正在内测独立 App「搭搭」，定位领域 Agent 社区，用户可将设计、求职、学习等经验做成 AI 智能体「搭子」分享给他人。内测版已提供设计美学等数十个搭子，支持图文对话，用户也可新建群组把真人好友与搭子加入同一会话，通过创造者平台搭建自定义搭子。",
                    "link": "https://it.sohu.com/a/1102824889_362225",
                    "tags": [
                      "AI Agent",
                      "社交"
                    ],
                    "source": "读佳",
                    "time": "11月17日消息"
                  }
                ]
              },
              {
                "title": "蚂蚁集团",
                "news": [
                  {
                    "title": "蚂蚁与西湖心辰发布世界模型 Duo v1",
                    "summary": "11月17日，蚂蚁技术研究院与西湖心辰共同发布双向世界模型 Duo v1，实现开源并开启实时交互。该模型采用双向世界模型架构，可模拟可交互的物理环境，此前西湖心辰已推出多项世界模型相关成果，此次与蚂蚁合作进一步推进世界模型在具身智能等方向的应用探索。",
                    "link": "https://t.cj.sina.com.cn/articles/view/1644983660/620c756c02001y85q",
                    "tags": [
                      "世界模型",
                      "开源"
                    ],
                    "source": "机器之心",
                    "time": "11月17日"
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
                    "title": "马斯克：特斯拉 12 月试点车主 Robotaxi",
                    "summary": "11月17日消息，马斯克在社交平台表示，特斯拉最早可能于 12 月启动个人车主接入 Robotaxi 网络的试运营，允许车主将自有车辆投入无人驾驶出租车队接单赚钱。该表态源于一名奥斯汀 Uber 司机的提问，马斯克称「如果一切顺利，可能下个月开始试点」，但未透露具体城市与车费分成方案。",
                    "link": "https://baijiahao.baidu.com/s?id=1882076901244393867",
                    "tags": [
                      "自动驾驶",
                      "Robotaxi"
                    ],
                    "source": "新浪财经",
                    "time": "11月17日消息"
                  }
                ]
              }
            ]
          },
          {
            "name": "具身智能",
            "cards": [
              {
                "title": "王兴兴",
                "news": [
                  {
                    "title": "王兴兴：机器人模型泛化是首要难题",
                    "summary": "11月17日，宇树科技 CEO 王兴兴在 APEC 工商领导人峰会上表示，机器人行业当前最大挑战是 AI 模型泛化能力不足，更换应用场景往往需要重新训练，难以一台设备适配各类家庭与工作环境。他判断全球技术演进已接近突破临界点，但即便模型突破，产业链规模化、可靠性与算力需求仍是考验。",
                    "link": "https://cbgc.scol.com.cn/news/8150737",
                    "tags": [
                      "具身智能",
                      "机器人"
                    ],
                    "source": "证券时报",
                    "time": "11月17日"
                  }
                ]
              },
              {
                "title": "强脑科技",
                "news": [
                  {
                    "title": "强脑科技韩璧丞谈脑机接口前景",
                    "summary": "11月17日，强脑科技 CEO 韩璧丞在深圳 APEC 工商领导人峰会上表示，脑机接口将改变人与外界的交互方式，未来人们有望用大脑直接控制手机、电脑等设备。强脑科技专注于非侵入式脑机接口技术研发，其产品已应用于康复、教育等领域，韩璧丞认为脑机接口正加速从实验室走向日常生活。",
                    "link": "https://baijiahao.baidu.com/s?id=1882104618173571187",
                    "tags": [
                      "脑机接口"
                    ],
                    "source": "IT之家",
                    "time": "11月17日"
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
                "title": "穗升科技",
                "news": [
                  {
                    "title": "穗升科技完成数千万元 Pre-A 轮融资",
                    "summary": "11月17日消息，AI Memory 智能硬件公司穗升科技完成数千万元 Pre-A 轮融资，由 NexTide Capital、阿尔法公社投资。资金将重点投入长期记忆引擎与主动式 Agent 体验优化，拓展家庭、团队场景，推进硬件量产交付，并搭建海外渠道、完善本地化交付能力。",
                    "link": "https://36kr.com/newsflashes/4073445119464322",
                    "tags": [
                      "融资",
                      "AI硬件"
                    ],
                    "source": "36氪",
                    "time": "11月17日消息"
                  }
                ]
              },
              {
                "title": "蓝点触控",
                "news": [
                  {
                    "title": "蓝点触控完成数亿元 D3 轮融资",
                    "summary": "11月17日消息，机器人力传感器企业蓝点触控完成数亿元 D3 轮融资，由厦门海投集团、洪泰基金、中关村科学城等 14 家机构联合投资，近半年融资额已超 10 亿元。本轮资金将用于随核心大客户扩充研发投入、推进新一代机器人力传感器产品研发，并拓展海外市场、扩充产能。",
                    "link": "https://baijiahao.baidu.com/s?id=1882071401700188862",
                    "tags": [
                      "融资",
                      "机器人"
                    ],
                    "source": "36氪",
                    "time": "11月17日消息"
                  }
                ]
              },
              {
                "title": "Isomorphic Labs",
                "news": [
                  {
                    "title": "Isomorphic Labs 融资 50 亿美元推进 AI 制药",
                    "summary": "11月17日，哈萨比斯创办的 AI 药物研发公司 Isomorphic Labs 宣布完成 50 亿美元 C 轮融资，由 Greenoaks 与红杉资本共同领投，a16z 等新投资者参与，Alphabet 继续出资。资金将用于扩展自有药物设计引擎 IsoDDE、推进候选药物管线，并建设面向 AI 生物工程的全球基础设施，推动首批治疗项目进入临床试验。",
                    "link": "https://baijiahao.baidu.com/s?id=1882160464375146167",
                    "tags": [
                      "融资",
                      "AI制药"
                    ],
                    "source": "爱范儿",
                    "time": "11月17日"
                  }
                ]
              }
            ]
          },
          {
            "name": "行业趋势&观点",
            "cards": [
              {
                "title": "丘成桐",
                "news": [
                  {
                    "title": "丘成桐人民日报发文谈 AI 与数学",
                    "summary": "11月17日，数学家丘成桐在人民日报刊文谈 AI 与数学，认为 AI 已从下棋、解奥数题发展到协助攻克长期悬置的数学难题，但当前 AI 还提供不了颠覆性的思想跃迁。他主张拥抱这一工具同时守住独立提问与思考能力，若完全跟着 AI 结论走，人们将失去深度思考和创新突破的能力。",
                    "link": "https://baijiahao.baidu.com/s?id=1882056512755411525",
                    "tags": [
                      "观点",
                      "AI教育"
                    ],
                    "source": "人民日报",
                    "time": "11月17日"
                  }
                ]
              },
              {
                "title": "Take-Two",
                "news": [
                  {
                    "title": "Take-Two CEO 批评 AI 公司放任游戏仿制",
                    "summary": "11月17日消息，《GTA 6》发行商 Take-Two CEO 施特劳斯·泽尔尼克批评 Anthropic、OpenAI 等 AI 公司对用户利用生成式 AI 仿制现有游戏缺乏限制，呼吁科技企业加强知识产权保护。随着 AI 辅助编程降低游戏仿制门槛，部分开发者已取消试玩测试，此前多款经典游戏曾遭 AI 辅助逆向开发。",
                    "link": "https://baijiahao.baidu.com/s?id=1882094873032024952",
                    "tags": [
                      "AI版权",
                      "游戏"
                    ],
                    "source": "IT之家",
                    "time": "11月17日消息"
                  }
                ]
              },
              {
                "title": "康师傅豆包应用",
                "news": [
                  {
                    "title": "康师傅用豆包工作搭建产线管理平台",
                    "summary": "11月17日消息，康师傅团队在豆包工作帮助下，用妙搭搭建面饼重量管理平台，已覆盖 14 家工厂、77 条产线，把人工下载导入的产线数据改为每日自动汇集。负责制面规划的员工是食品专业背景、没有 IT 经验，把计算方式交给 AI，截至 2026 年 8 月该重量管理项目累计创效 1900 万元。",
                    "link": "https://finance.sina.com.cn/wm/2026-11-17/doc-iniyznqi7630755.shtml",
                    "tags": [
                      "AI应用",
                      "制造业"
                    ],
                    "source": "界面新闻",
                    "time": "11月17日消息"
                  }
                ]
              },
              {
                "title": "李沐",
                "news": [
                  {
                    "title": "李沐加盟 Aimotion 出任联创兼 CTO",
                    "summary": "11月17日消息，AI 领域知名技术人李沐宣布加入 Aimotion，出任联合创始人兼 CTO。Aimotion 是一家瞄准「产业级世界模型」的 AI 公司，李沐此前长期从事大模型与深度学习研究，此次加盟将推动公司构建面向产业应用的世界模型能力，引发行业对世界模型商业化路径的关注。",
                    "link": "https://cj.sina.com.cn/articles/view/3996876140/ee3b7d6c0010182py",
                    "tags": [
                      "人才",
                      "世界模型"
                    ],
                    "source": "量子位",
                    "time": "11月17日消息"
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
            "name": "OpenRouter",
            "date": "2026-11-17",
            "link": "https://openrouter.ai/rankings",
            "rankings": [
              {
                "model": "DeepSeek V4.1 Flash 1017 (deepseek)",
                "score": "61.9T tokens",
                "change": "↑15%"
              },
              {
                "model": "Hy4 flash (tencent)",
                "score": "22.8T tokens",
                "change": "—"
              },
              {
                "model": "DeepSeek V4.1 Flash (deepseek)",
                "score": "15.9T tokens",
                "change": "↓6%"
              },
              {
                "model": "Hy4 (tencent)",
                "score": "14.3T tokens",
                "change": "↓24%"
              },
              {
                "model": "GLM 5.3 Flash (z-ai)",
                "score": "11.5T tokens",
                "change": "↑2%"
              },
              {
                "model": "GPT-6 Luna (openai)",
                "score": "8.38T tokens",
                "change": "↑19%"
              },
              {
                "model": "Claude Opus 5.5 (anthropic)",
                "score": "7.53T tokens",
                "change": "↑11%"
              },
              {
                "model": "Step 5 Preview (stepfun)",
                "score": "6.57T tokens",
                "change": "↓5%"
              },
              {
                "model": "MiMo-V2.6-Flash (xiaomi)",
                "score": "4.11T tokens",
                "change": "↑44%"
              },
              {
                "model": "GLM 5.3 (z-ai)",
                "score": "3.62T tokens",
                "change": "↓1%"
              },
              {
                "model": "GPT-6.1 Sol (openai)",
                "score": "3.54T tokens",
                "change": "↓13%"
              },
              {
                "model": "Kimi K3.1 Pro (moonshotai)",
                "score": "3.39T tokens",
                "change": "↓23%"
              },
              {
                "model": "MiniMax M3.1 Flash (minimax)",
                "score": "3.36T tokens",
                "change": "↓22%"
              },
              {
                "model": "DeepSeek V4 Flash 0731 (deepseek)",
                "score": "3.13T tokens",
                "change": "↑1%"
              },
              {
                "model": "Nemotron 3 Ultra (free) (nvidia)",
                "score": "3.12T tokens",
                "change": "↓4%"
              },
              {
                "model": "ERNIE-5.5-Flash-Preview (free) (baidu)",
                "score": "2.99T tokens",
                "change": "—"
              },
              {
                "model": "Muse Spark 1.3 Contributor (meta)",
                "score": "2.96T tokens",
                "change": "↑2%"
              },
              {
                "model": "Nemotron 3.5 Super VL (free) (nvidia)",
                "score": "2.93T tokens",
                "change": "↑2%"
              },
              {
                "model": "Jev 1.13 (typesafe)",
                "score": "2.89T tokens",
                "change": "—"
              },
              {
                "model": "Claude Sonnet 5.5 (anthropic)",
                "score": "2.79T tokens",
                "change": "↑17%"
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
