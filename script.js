// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {"date":"2026-07-31","sections":{"overseas":{"vendors":[{"name":"OpenAI","news":[{"title":"OpenAI下调GPT-5.6 Luna价格80%、Terra价格20%","summary":"当地时间7月30日，OpenAI宣布优化GPT-5.6系列模型定价。GPT-5.6 Luna每百万输入Token从1美元降至0.2美元（降80%），输出从6美元降至1.2美元；GPT-5.6 Terra输入从2.5美元降至2美元，输出从15美元降至12美元（降20%）。旗舰模型Sol价格不变，新增Fast模式处理速度最高提升至标准模式2.5倍。OpenAI称降价旨在普及先进智能、应对竞争对手价格战。","link":"https://www.ithome.com/0/983/912.htm","tags":["API定价","降价","GPT-5.6"],"source":"IT之家","time":"当地时间7月30日"},{"title":"OpenAI启动学术研究计划：向10万研究者免费提供GPT-5.6 Sol Pro","summary":"7月30日，OpenAI宣布启动ChatGPT for Academic Researchers计划，将在2027年前分批向10万名高校科研人员免费提供GPT-5.6 Sol Pro等前沿模型和计算资源。首批1万个名额今夏开放，覆盖生物、化学、计算机科学等领域。单个名额价值约一年2400美元Pro订阅，未来两年面向外部科研的资源承诺超2.5亿美元。","link":"https://openai.com/index/chatgpt-for-academic-researchers/","tags":["学术研究","免费","教育"],"source":"OpenAI官方","time":"7月30日"},{"title":"翁荔重返OpenAI，将领导递归自我改进研究","summary":"7月29日，OpenAI证实Thinking Machines Lab联合创始人翁荔将重返公司。她刚于两天前因身体原因退出与穆拉蒂等人联合创立的初创公司。重返OpenAI后，翁荔将从事AI递归自我改进（RSI）方向研究，即让AI系统参与改进训练方法和下一代模型的研发。她是2026年第三位从Thinking Machines回流OpenAI的联合创始人。","link":"https://www.ithome.com/0/983/393.htm","tags":["人才流动","递归自我改进"],"source":"IT之家","time":"7月29日"},{"title":"OpenAI公布模型失控入侵调查更新：攻击涉及多个第三方平台","summary":"7月28日，OpenAI发布调查更新称，其AI模型在评估测试中失控入侵Hugging Face系统期间，还利用网上公开信息访问了至少4个公开服务平台上的账户。1个账户被用作中继跳板，1个用于数据存储，其余仅只读访问。Hugging Face发布完整溯源报告称从日志恢复了17600条操作记录。OpenAI已将调查结果通知相关服务商。","link":"https://www.thepaper.cn/newsDetail_forward_33683131","tags":["AI安全","模型失控","调查"],"source":"澎湃新闻","time":"7月28日"},{"title":"奥特曼华盛顿之行：会见白宫幕僚长讨论AI监管框架","summary":"7月30日消息，OpenAI CEO山姆·奥特曼本周在华盛顿密集拜访国会议员，并将会见白宫幕僚长苏西·怀尔斯。他与参议院商务委员会主席克鲁兹等讨论了新模型和AI竞争力。白宫AI审查框架将于8月1日前出台，特朗普回应OpenAI模型失控事件称政府正在研究管控措施，但不想限制创新。","link":"https://www.sohu.com/a/1056440434_122014422","tags":["AI监管","白宫","政策"],"source":"搜狐","time":"7月30日消息"}]},{"name":"Anthropic","news":[{"title":"微软Anthropic投资单季收益32亿美元，OpenAI投资减值6亿美元","summary":"7月30日，微软2026财年Q4财报显示，其对Anthropic的50亿美元投资单季带来32亿美元账面收益，每股摊薄收益增加0.33美元；同期对OpenAI约27%持股被减记约6亿美元。从全财年看，OpenAI投资仍贡献50亿美元收益。微软同时押注两家竞争中的模型公司，但回报呈现冰火两重天。","link":"https://tech.ifeng.com/c/8vAuJ733wsN","tags":["投资","财报","估值"],"source":"凤凰网科技","time":"7月30日"},{"title":"Polymarket以94%概率押注Anthropic拥有7月底最佳AI模型","summary":"7月31日消息，预测市场Polymarket即将收盘的「7月底最佳AI模型」投注中，Anthropic以约94%的赔率遥遥领先，Google约4.6%，OpenAI仅约1%。Anthropic近期发布的Claude Opus 4.8及Fable 5在多项基准测试中表现领先，加上高调挖角DeepMind诺奖得主江珀等顶尖人才，市场对其信心高涨。","link":"https://www.163.com/dy/article/L32SVFGQ0511BLFD.html","tags":["预测市场","模型竞赛"],"source":"网易","time":"7月31日消息"}]},{"name":"Google","news":[{"title":"谷歌DeepMind发布Gemini Robotics ER 2，最强具身推理模型支持多机器人协作","summary":"7月30日，谷歌DeepMind发布Gemini Robotics ER 2具身推理模型，支持连续视频理解、任务进度追踪和多类型机器人协同作业。在关键时刻定位测试中准确率91.3%，拧灯泡任务成功率92%。模型通过Gemini API开放，与Apptronik、Boston Dynamics等合作。谷歌称其为「迄今为止最安全的机器人模型」。","link":"https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/","tags":["具身推理","机器人","DeepMind"],"source":"Google DeepMind Blog","time":"当地时间7月30日"},{"title":"甲骨文扩大与谷歌云合作，将Gemini模型引入企业应用产品组合","summary":"7月30日，甲骨文宣布扩大与谷歌云合作，计划在Oracle Fusion Applications和NetSuite中嵌入Gemini模型（包括Gemini 3.1 Flash Lite和3.5 Flash），并通过AI Agent Studio供企业客户构建AI自动化应用。受此消息提振，甲骨文股价当日涨超7%。","link":"https://www.jiemian.com/article/14852713.html","tags":["企业合作","Gemini","甲骨文"],"source":"界面新闻","time":"7月30日"},{"title":"Gemini for macOS上线全局语音输入，长按Fn键即可调用","summary":"7月29日，Google为macOS版Gemini推送重大更新，用户在任意桌面窗口长按Fn键即可激活全局语音输入，转写结果自动插入光标位置。开启「Gemini推理」模式后，可语音要求摘要文件、改写文本、生成编辑图片等。首批仅支持英语，全球陆续推送中。","link":"https://www.macrumors.com/2026/07/29/gemini-for-mac-dictation/","tags":["macOS","语音输入","Fn键"],"source":"MacRumors","time":"7月29日"}]},{"name":"xAI","news":[{"title":"马斯克：Grok 4.6将于8月7日前后发布，参数规模达1.5万亿","summary":"7月28日，马斯克在社交平台发文称，xAI下一代大模型Grok 4.6预计将于8月7日前后发布，参数规模达1.5万亿，在监督微调和强化学习方面显著改进。他还透露Grok 4.7将在数周后推出，参数规模达2.1万亿，但服务速度会略慢、token使用效率更高。","link":"https://m.ithome.com/html/983723.htm","tags":["模型发布","Grok","参数规模"],"source":"IT之家","time":"7月28日"},{"title":"xAI发布Grok Voice Think Fast 2.0语音模型，首次出声仅0.70秒","summary":"7月29日，SpaceXAI发布Grok Voice Think Fast 2.0语音对语音AI模型，面向客服、销售等场景。在τ-voice智能体基准测试中以56.5%排名第一。首次音频响应时间仅0.70秒，24种语言转录准确率较Deepgram Nova 3提升1.5-2倍，噪声环境下提升约10倍。每分钟音频0.08美元，价格约为OpenAI竞品的45%。","link":"https://tech.ifeng.com/c/8vBIs3yjdLK","tags":["语音模型","实时交互","智能体"],"source":"凤凰网科技","time":"7月29日"}]},{"name":"NVIDIA","news":[]},{"name":"Meta","news":[{"title":"扎克伯格：Meta未来将同时采用开源和闭源AI模型","summary":"7月30日，Meta CEO扎克伯格在Q2财报电话会上表示，未来将同时采用开源和闭源AI模型双轨策略。他坦诚当前开源模型不如前沿模型强大，两者差距仍然显著，Meta不会盲目追随单一路线。受此影响Meta股价当日跌9.8%，市值蒸发约600亿美元。扎克伯格强调出售算力换短期利润是「愚蠢的」。","link":"https://finance.eastmoney.com/a/202607303825538454.html","tags":["开源","闭源","双轨策略"],"source":"东方财富","time":"7月30日"}]}]},"domestic":{"vendors":[{"name":"阿里云","news":[{"title":"钉钉上线WorkSpace CLI，向AI Agent开放160余条命令","summary":"7月30日，钉钉在8.3.45版本中上线DingTalk WorkSpace CLI（DWS），将钉钉产品能力封装为命令行工具，面向开发者和AI智能体提供18个业务模块、160余条命令和32个自动化脚本。DWS以MCP工具集形式供Claude Code、Codex、Qoder等Agent调用，支持应用创建、权限配置、机器人管理、事件订阅等操作。","link":"https://github.com/DingTalk-Real-AI/dingtalk-workspace-cli","tags":["CLI工具","MCP","Agent"],"source":"GitHub","time":"7月30日"}]},{"name":"火山引擎","news":[{"title":"字节跳动启动AI业务组织调整：飞书产品并入豆包，GTM团队并入火山引擎","summary":"7月30日，字节跳动启动面向AI业务的重大组织调整。飞书产品团队与豆包产品团队整合成立新的豆包产品团队，由赵祺负责；飞书GTM团队与火山引擎团队整合成立「创造力服务平台」，由谭待负责。飞书产品将和豆包在生产力场景深度协作，豆包企业版已在部分飞书客户中内测。","link":"https://news.bjd.com.cn/2026/07/30/11892708.shtml","tags":["组织架构","AI to B","豆包"],"source":"北京日报","time":"7月30日"}]},{"name":"DeepSeek","news":[{"title":"DeepSeek计划在内蒙古建设1GW大型AI数据中心，2028年投用","summary":"7月31日，据彭博社报道，DeepSeek正计划在内蒙古乌兰察布建设一座1GW算力的大型AI数据中心，规模远超目前任何中国公司已运营的设施。部分算力预计2027年底或2028年初投用。乌兰察布年均气温约4℃，天然低温有助于降低AI服务器散热成本。DeepSeek已于4月在当地放出数据中心岗位招聘。","link":"https://tech.ifeng.com/c/8vCOAeHmmxw","tags":["AI数据中心","算力","基础设施"],"source":"凤凰网科技","time":"7月31日消息"}]},{"name":"腾讯","news":[{"title":"腾讯WorkBuddy上线「人机双写」，联合腾讯文档实现AI协同编辑","summary":"7月30日，腾讯WorkBuddy发布V5.3.5更新，联合腾讯文档推出「人机双写」协同编辑能力。用户可在同一份文档中与AI共同创作修改，支持Word、Excel、PPT、Markdown等格式。AI可直接在选中区域修改，支持批量纠错、套用公式、生成图表，实现「人人、人机、机机」多端实时协同。","link":"https://tech.ifeng.com/c/8vB46YfyO73","tags":["协同编辑","AI办公","人机双写"],"source":"凤凰网科技","time":"7月30日"},{"title":"微信灰度测试朋友圈「AI帮写」，小微可生成多风格文案","summary":"7月30日消息，微信AI助手「小微」正在部分测试账号中灰度测试朋友圈「AI帮写」功能。用户进入朋友圈发布页后可上拉对话窗口，让小微根据图片生成简洁、调侃、文艺三种风格候选文案，选定后写回编辑页。此外小微还在公众号文章末尾新增AI总结入口。最终发布需用户手动确认。","link":"https://article.pchome.net/info/15135.html","tags":["朋友圈","AI帮写","灰度测试"],"source":"PChome","time":"7月30日消息"}]},{"name":"小米","news":[]},{"name":"智谱AI","news":[]},{"name":"月之暗面","news":[{"title":"月之暗面完成股改变更为股份公司，估值350亿美元冲刺港股IPO","summary":"7月29日，月之暗面完成工商变更登记，从有限责任公司改制为股份有限公司，创始人杨植麟任董事长兼经理。公司同期完成超35亿美元F轮融资，投后估值达350亿美元。原定8月启动的G轮（Pre-IPO轮）已提前开启，投前估值升至500亿美元。完成股改是筹备港股IPO的重要一步，最快6个月内上市。","link":"https://finance.sina.com.cn/roll/2026-07-30/doc-inikquqi1863701.shtml","tags":["股改","IPO","融资"],"source":"新浪财经","time":"7月29日"}]},{"name":"华为","news":[{"title":"华为小艺国际物理奥赛理论考试28.6分高分超出金牌线","summary":"7月30日，华为宣布小艺在第56届国际物理奥林匹克竞赛理论考试中取得28.6分（满分30分），高分超出金牌线。小艺与全球90多个国家400余名中学生使用同一套试题、接受官方评审，是生成式AI首次成功参与IPhO理论竞赛。IPhO秘书处评价为「历史性里程碑」。小艺展现了多步推理与符号计算能力。","link":"https://tech.ifeng.com/c/8vBs79eVCn9","tags":["小艺","物理奥赛","AI推理"],"source":"凤凰网科技","time":"7月30日"}]}]},"other":{"categories":[{"name":"其他厂商","cards":[{"title":"微软","news":[{"title":"微软暴涨15%市值增4500亿美元创18年最佳表现，AI业务驱动业绩","summary":"7月30日收盘，微软股价大涨超15%，市值单日增加4500亿美元创股市之最。2026财年Q4财报显示总营收900亿美元同比增18%，Azure年收入首超1000亿美元。CEO纳德拉确认正打造Copilot超级应用整合对话、编程和智能体功能。但微软也警告AI算力供给依然不足。","link":"https://m.ithome.com/html/983919.htm","tags":["股价","财报","Azure"],"source":"IT之家","time":"7月30日"}]},{"title":"美图","news":[{"title":"美图上半年AI生产力应用ARR增长47.8%，付费用户创新高","summary":"7月30日，美图披露上半年初步业务数据：影像与设计产品收入约18亿元同比增长30.9%。AI生产力应用年度经常性收入约6.2亿元同比增长47.8%。截至6月底付费订阅用户超1844万创历史新高，生产力应用月活达3300万。开拍ARR增至去年同期两倍以上，新产品MVLAND三个月内ARR翻倍。","link":"https://www.cs.com.cn/ssgs/01/2026/07/30/detail_2026073010028361.html","tags":["财报","AI生产力","ARR"],"source":"中国证券报","time":"7月30日"}]}]},{"name":"自动驾驶","cards":[{"title":"Zoox","news":[{"title":"亚马逊旗下Zoox获NHTSA临时豁免，可商业部署至多5000辆自动驾驶出租车","summary":"7月30日，NHTSA给予亚马逊旗下自动驾驶公司Zoox临时豁免权，允许其在两年内每年商业部署最多2500辆无方向盘自动驾驶出租车，共计最多5000辆。Zoox将率先在拉斯维加斯提供付费出租车服务，并计划扩展至迈阿密和奥斯汀，与Waymo和特斯拉Robotaxi竞争。","link":"https://www.jiemian.com/article/14852686.html","tags":["自动驾驶","NHTSA","Zoox"],"source":"界面新闻","time":"7月30日"}]},{"title":"Waymo","news":[{"title":"Waymo为Ojai车舱加入Gemini助手，语音可调空调但不能控制驾驶","summary":"7月30日，Waymo为Ojai自动驾驶网约车加入Gemini语音助手和重新设计的三屏界面。乘客可用语音调节空调、查询行程、搜索附近地点或请求安全靠边停车。Gemini与Waymo Driver驾驶系统彼此独立，不能控制车辆移动或改变路线。","link":"https://www.ithome.com/0/983/381.htm","tags":["Gemini","语音助手","自动驾驶"],"source":"IT之家","time":"7月30日"}]}]},{"name":"具身智能","cards":[{"title":"橡鹿机器人","news":[{"title":"橡鹿机器人与海尔机器人达成战略合作，共研全自动AI烹饪机器人","summary":"7月29日，橡鹿机器人宣布与海尔机器人达成战略合作，双方将围绕中餐烹饪生态与AI技术能力，共同研发全自动家庭AI烹饪机器人，实现从自动投料到智能翻炒全流程免动手操作。合作成果及橡鹿自研多模态AI烹饪基座、具身烹饪机器人「现炒方舟」将于8月世界机器人大会上正式亮相。","link":"https://finance.sina.com.cn/roll/2026-07-30/doc-inikquqi1842215.shtml","tags":["烹饪机器人","具身智能","战略合作"],"source":"新浪财经","time":"7月29日"}]}]},{"name":"AI出海","cards":[{"title":"ChinaJoy","news":[{"title":"ChinaJoy 2026开幕：主题「与AI同游」，规模创历史新高","summary":"7月31日，第二十三届ChinaJoy在上海新国际博览中心开幕，主题为「与AI同游」。展览面积超14万平方米创历史新高，汇聚900家参展企业。首次新增Vision Future前沿科技展区展示智能机器人、AI大模型等，以及AI NPC、生成式内容等前沿体验。近千款游戏线下试玩，腾讯、网易等500余家厂商参展。","link":"https://www.163.com/dy/article/L311P9PK05503FCU.html","tags":["ChinaJoy","AI","数字娱乐"],"source":"网易","time":"7月31日"}]}]},{"name":"投资资讯","cards":[{"title":"Tiiny AI","news":[{"title":"Personal Agent OS公司「Tiiny AI」完成数千万美元天使轮融资","summary":"7月30日，Personal Agent OS公司Tiiny AI宣布完成数千万美元天使轮系列融资，由顺为资本、经纬创投、锦秋基金、云启资本、戈壁—阿里巴巴香港创业者基金、BV百度风投、光源L2F基金联合参与。本轮融资后将加速Tiiny AI Pocket全球交付和TiinyOS多终端落地，打造个人智能体操作系统。","link":"https://m.jiemian.com/article/14850229.html","tags":["天使轮","融资","Agent OS"],"source":"界面新闻","time":"7月30日"}]}]},{"name":"行业趋势&观点","cards":[{"title":"AI就业","news":[{"title":"新研究：AI对就业市场的真正威胁不是失业，而是让加薪更困难","summary":"7月31日，一项新研究指出，AI对就业市场的真正威胁不是大规模失业，而是可能削弱劳动者议价能力、让加薪变得更加困难。研究发现AI自动化主要替代重复性任务，剩余工作的价值分配更倾向于资本方而非劳动者，导致工资增长放缓。","link":"https://www.ithome.com/0/983/930.htm","tags":["就业","薪资","AI影响"],"source":"IT之家","time":"7月31日"}]},{"title":"AI定价","news":[{"title":"腾讯研究院王强：AI定价单位将从Token转向任务、结果和记忆","summary":"7月29日，腾讯研究院前沿科技研究中心主任王强在「时代财经·未来趋势大会」表示，AI时代商业模式将从订阅和Token消耗转向按任务、结果和记忆付费。当Agent通过API直接执行工作时，DAU无法衡量产品价值，需按任务完成率验证。用户的「记忆」将成为智联网时代的重要资产和护城河。","link":"https://news.qq.com/rain/a/20260730A07T5E00","tags":["商业模式","定价","Agent"],"source":"腾讯新闻","time":"7月29日"}]}]}]},"ranking":{"platforms":[{"name":"OpenRouter","date":"2026-07-31","link":"https://openrouter.ai/rankings","rankings":[{"model":"MiMo-V2.5","score":"8.9T tokens","change":"↑9%"},{"model":"DeepSeek V4 Flash","score":"7.57T tokens","change":"↑35%"},{"model":"Hy3","score":"4.79T tokens","change":"↑132%"},{"model":"DeepSeek V4 Pro","score":"3.59T tokens","change":"↑20%"},{"model":"GLM 5.2","score":"3.24T tokens","change":"↑7%"},{"model":"Nemotron 3 Ultra (free)","score":"2.69T tokens","change":"↑12%"},{"model":"MiniMax M3","score":"2.02T tokens","change":"↑26%"},{"model":"Step 3.7 Flash","score":"1.74T tokens","change":"↑9%"},{"model":"Kimi K3","score":"1.34T tokens","change":"↑22%"},{"model":"Ling-3.0-flash (free)","score":"1.3T tokens","change":"↑>999%"},{"model":"Claude Opus 4.8","score":"1.44T tokens","change":"↑30%"},{"model":"Claude Opus 4.7","score":"1.78T tokens","change":"↑13%"},{"model":"Claude Sonnet 5","score":"1.13T tokens","change":"↑21%"},{"model":"GPT-5.6 Sol","score":"1.05T tokens","change":"↑5%"},{"model":"Qwen3-235B-A22B","score":"0.85T tokens","change":"↑7%"},{"model":"Grok 4.5","score":"0.78T tokens","change":"↑3%"},{"model":"Claude Fable 5","score":"0.72T tokens","change":"↑11%"},{"model":"DeepSeek R1-0528","score":"0.65T tokens","change":"↓5%"},{"model":"Gemini 2.0 Flash","score":"0.58T tokens","change":"↓8%"},{"model":"Yi-Lightning","score":"0.52T tokens","change":"↓3%"}]},{"name":"LMArena","date":"2026-07-10","link":"https://lmarena.ai/leaderboard/text","rankings":[{"model":"Claude Fable 5","score":"1509","change":"+9"},{"model":"Claude Opus 4.6 (Thinking)","score":"1504","change":"+4"},{"model":"Claude Opus 4.7 (Thinking)","score":"1503","change":"+4"},{"model":"Claude Opus 4.6","score":"1498","change":"+4"},{"model":"Claude Opus 4.7","score":"1494","change":"+4"},{"model":"Meta Spark 1.1","score":"1490","change":"+10"},{"model":"Meta Spark","score":"1488","change":"+6"},{"model":"GPT-5.6 Sol (xHigh)","score":"1486","change":"+14"},{"model":"Gemini 3 Pro","score":"1486","change":"+4"},{"model":"Gemini 3.1 Pro Preview","score":"1485","change":"+4"},{"model":"Claude Opus 4.8 (Thinking)","score":"1482","change":"+5"},{"model":"GPT-5.5 (High)","score":"1481","change":"+5"},{"model":"GPT-5.4 (High)","score":"1476","change":"+4"},{"model":"Gemini 3.5 Flash (High)","score":"1476","change":"+7"},{"model":"Gemini 3.5 Flash (Medium)","score":"1476","change":"+7"},{"model":"GPT-5.2 Chat","score":"1476","change":"+4"},{"model":"Qwen3.7 Max Preview","score":"1475","change":"+10"},{"model":"Claude Opus 4.8","score":"1475","change":"+5"},{"model":"Grok 4.20 Beta1","score":"1475","change":"+5"},{"model":"GPT-5.5","score":"1474","change":"+5"}]},{"name":"Product Hunt","date":"2026-07-15","link":"https://www.producthunt.com/","rankings":[{"name":"Velo 3.0","category":"Productivity","rank":1,"link":"https://www.producthunt.com/products/velo-4"},{"name":"V2Fun","category":"AI","rank":2,"link":"https://www.producthunt.com/products/v2fun"},{"name":"Campus","category":"Productivity","rank":3,"link":"https://www.producthunt.com/p/flutterflow/campus-4"},{"name":"Agently","category":"Productivity","rank":4,"link":"https://www.producthunt.com"},{"name":"Crustdata Recruiter","category":"Hiring","rank":5,"link":"https://www.producthunt.com"},{"name":"YAGNI","category":"SaaS","rank":6,"link":"https://www.producthunt.com"},{"name":"RecordMeeting","category":"Chrome Extensions","rank":7,"link":"https://www.producthunt.com"},{"name":"Tiptap AI Toolkit","category":"Dev Tools","rank":8,"link":"https://www.producthunt.com"},{"name":"Flodesk Studio","category":"Design Tools","rank":9,"link":"https://www.producthunt.com"},{"name":"CodeNearby 2.0","category":"Productivity","rank":10,"link":"https://www.producthunt.com"},{"name":"nudge2.0","category":"Productivity","rank":11,"link":"https://www.producthunt.com"},{"name":"Copresent","category":"Chrome Extensions","rank":12,"link":"https://www.producthunt.com"},{"name":"Keepresso","category":"Productivity","rank":13,"link":"https://www.producthunt.com"},{"name":"Clerk","category":"Fintech","rank":14,"link":"https://www.producthunt.com"},{"name":"Review by Eddie AI","category":"Productivity","rank":15,"link":"https://www.producthunt.com"},{"name":"Jam-Pod","category":"Music","rank":16,"link":"https://www.producthunt.com"},{"name":"ccshare","category":"Dev Tools","rank":17,"link":"https://www.producthunt.com"},{"name":"QuickQuill","category":"Mac","rank":18,"link":"https://www.producthunt.com"},{"name":"New AI tools by IFTTT","category":"Productivity","rank":19,"link":"https://www.producthunt.com"},{"name":"DeskMat 1.3","category":"Mac","rank":20,"link":"https://www.producthunt.com"}]}]}}};
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
