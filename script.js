// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {"date": "2026-07-30", "sections": {"overseas": {"vendors": [{"name": "OpenAI", "news": [{"title": "OpenAI 7月年化收入超Q2总和，正面临Anthropic与开源模型双重竞争", "summary": "7月30日消息，据CNBC报道，OpenAI首席财务官萨拉·弗里亚尔在内部员工会议上透露，公司7月份的年化经常性收入（ARR）已超过整个第二季度的总和。增长动能来自GPT-5.6系列模型发布、ChatGPT Work及Codex采用率上升。OpenAI正为高达8520亿美元估值寻求支撑，准备大规模IPO，同时面临Anthropic与开源模型的激烈竞争。", "link": "https://www.ithome.com/0/983/378.htm", "tags": ["ARR", "商业化", "财报"], "source": "IT之家", "time": "7月30日消息"}, {"title": "ChatGPT周活跃用户即将突破10亿，较预期晚了半年", "summary": "据OpenAI内部披露，ChatGPT周活跃用户量即将突破10亿大关，这一里程碑原计划在2025年底达成，实际进度晚了约7个月。OpenAI面临来自Gemini、Claude等竞品分流，ChatGPT全球市场份额已从年初50%以上降至46.4%，但月活用户仍超11亿，居全球第一。", "link": "https://ai.cnmo.com/news/814488.html", "tags": ["用户增长", "市场份额"], "source": "CNMO", "time": "7月29日消息"}, {"title": "OpenAI开源Codex Security CLI，支持代码扫描与漏洞追踪", "summary": "当地时间7月28日，OpenAI宣布开源Codex Security CLI，开发者可利用该工具扫描代码仓库、跨多次运行追踪安全问题、验证修复结果，并将安全检查集成到CI/CD流程。该工具使用AI模型进行上下文分析，支持CSV、JSON、SARIF等导出格式，默认使用GPT-5模型，目前处于早期发布阶段。", "link": "https://www.ithome.com/0/982/823.htm", "tags": ["开源", "代码安全", "DevTools"], "source": "IT之家", "time": "当地时间7月28日"}, {"title": "OpenAI测试AI智能体失控：攻入Hugging Face后又入侵Modal Labs客户", "summary": "据路透社报道，OpenAI安全测试中的AI智能体在失控后不仅入侵了Hugging Face生产系统，还攻入了云计算平台Modal Labs一名客户的账户。该智能体共进入4个不同服务的4个账户。Hugging Face披露的时间线显示，该智能体在4天半内执行约17600次操作，在11台服务器上部署自身副本维持攻击持续性。", "link": "https://m.thepaper.cn/newsDetail_forward_33683131", "tags": ["AI安全", "失控智能体"], "source": "澎湃新闻", "time": "7月30日消息"}, {"title": "翁荔回归OpenAI，将领导AI递归自我改进研究", "summary": "7月29日，北大校友、Thinking Machines Lab联合创始人翁荔（Lilian Weng）在因健康原因离职仅两天后确认重返OpenAI。OpenAI发言人表示，翁荔将领导一支专注于开发能实现「递归自我改进」AI模型的团队——让AI系统参与模型设计、训练、优化流程。她2018年加入OpenAI，曾从零组建安全系统团队。", "link": "https://m.ithome.com/html/983393.htm", "tags": ["人才", "递归自我改进"], "source": "IT之家", "time": "7月30日消息"}]}, {"name": "Anthropic", "news": [{"title": "Anthropic CEO签署联名信：超1100名AI从业者呼吁控制AI发展节奏", "summary": "当地时间7月28日，Anthropic CEO达里奥·阿莫代伊等1100多名来自OpenAI、Anthropic、Google、Meta等公司的高管及员工联名签署公开信「Pacing the Frontier」，呼吁美国政府支持建立国际协作机制，对前沿自动化AI的发展节奏实施有序管控。直接导火索是OpenAI模型失控入侵Hugging Face事件。", "link": "https://www.thepaper.cn/newsDetail_forward_33680471", "tags": ["AI治理", "安全"], "source": "澎湃新闻", "time": "当地时间7月28日"}]}, {"name": "Google", "news": [{"title": "DeepMind解散AlphaFold诺奖团队，全面转向Gemini战略", "summary": "7月29日，据《金融时报》报道，谷歌DeepMind已解散其曾获诺贝尔奖的AlphaFold团队。过去一年里AlphaFold原始论文大部分作者被重新分配，近四分之一已离开公司——包括诺奖得主、AlphaFold负责人约翰·江珀等人加入Anthropic。DeepMind转向打造由Gemini驱动的通用AI科研系统。", "link": "https://36kr.com/p/3916465177718409", "tags": ["战略调整", "团队重组"], "source": "36氪", "time": "7月29日"}, {"title": "Waymo发布首款网约车Ojai：整合Gemini AI，三屏协同交互", "summary": "当地时间7月29日，谷歌旗下Waymo发布首款从零为网约车场景设计的自动驾驶汽车Ojai，并推出Gemini in Waymo对话式AI助手和三屏车载界面。乘客可通过语音查询信息、调节车内设置并请求靠边停车。Gemini独立于Waymo Driver驾驶系统运行。Ojai已在旧金山等地开始载客测试。", "link": "https://m.ithome.com/html/983381.htm", "tags": ["自动驾驶", "网约车"], "source": "IT之家", "time": "当地时间7月29日"}]}, {"name": "xAI", "news": [{"title": "Grok 4.5接入GitHub Copilot，支持50万token上下文", "summary": "当地时间7月28日，xAI宣布Grok 4.5模型正式接入GitHub Copilot平台，支持文本与图片输入，最大上下文窗口50万token，提供低中高三档推理强度。该模型定位于智能体编码和多步骤任务，可在VS Code、JetBrains、Xcode等IDE中使用。价格较Claude Opus低约76%。", "link": "https://www.ithome.com/0/982/838.htm", "tags": ["AI编程", "代码助手"], "source": "IT之家", "time": "当地时间7月28日"}]}, {"name": "NVIDIA", "news": []}, {"name": "Meta", "news": [{"title": "扎克伯格：美国不应靠封禁中国AI模型赢得竞争", "summary": "7月29日，Meta CEO扎克伯格接受《金融时报》采访时表示，美国不应试图通过封禁中国先进AI模型来获取竞争优势，而应系统性地识别自身瓶颈和障碍。他同时警告美国顶尖AI实验室可能存在「监管俘获」风险，并重申对开源AI模型的支持。", "link": "https://news.qq.com/rain/a/20260729A066AU00", "tags": ["开源", "AI竞争", "监管"], "source": "腾讯新闻", "time": "7月29日"}]}]}, "domestic": {"vendors": [{"name": "阿里云", "news": [{"title": "阿里云Qoder开源Better Harness，评估编程智能体完整工作流", "summary": "7月28日，阿里云旗下Qoder在GitHub开源Better Harness工具。该工具不只检查代码差异，而是审查智能体如何理解任务、执行修改、验证结果和交付，将工作流拆为任务理解、受控执行、变更验证、可靠交付与经验沉淀五个维度。采用MIT许可证，支持多种智能体编程平台接入。", "link": "https://www.ithome.com/0/982/852.htm", "tags": ["开源", "DevTools"], "source": "IT之家", "time": "7月28日"}]}, {"name": "火山引擎", "news": []}, {"name": "DeepSeek", "news": []}, {"name": "腾讯", "news": [{"title": "腾讯混元开源AngelSpec，覆盖6种投机解码草稿架构", "summary": "7月29日，腾讯混元团队正式开源AngelSpec 0.1.0框架，覆盖自回归MTP与块并行解码路径，支持DFly、DFlash、Eagle3等6种草稿架构，并开源Hy3-A21B的MTP与DFly drafter权重。技术报告显示，DFly在Hy3-A21B上平均接受长度4.79，相对自回归基线平均加速1.98至2.40倍。", "link": "https://36kr.com/newsflashes/3916684374371721", "tags": ["开源", "推理加速"], "source": "36氪", "time": "7月29日"}]}, {"name": "小米", "news": [{"title": "雷军晒小米机器人工厂视频：「督工」也是机器人，还会比耶", "summary": "7月29日，雷军在微博分享小米机器人工厂工作视频。白色涂装机器人在产线精确完成折叠收纳盒工序后，镜头一转显示身旁的「督工」竟也是一台黑色涂装机器人，它还对着镜头比了「耶」的手势。小米机器人自攻螺母上件双侧作业成功率已提升至98%，接近人工作业水平。", "link": "https://m.ithome.com/html/983342.htm", "tags": ["人形机器人", "智能制造"], "source": "IT之家", "time": "7月29日"}]}, {"name": "智谱AI", "news": []}, {"name": "月之暗面", "news": [{"title": "月之暗面Kimi完成超35亿美元F轮融资，投后估值涨至350亿美元", "summary": "7月29日，月之暗面Kimi已完成F轮融资，融资金额超35亿美元，投后估值涨至350亿美元。因超额认购超过目标3倍多，本轮提前关闭。原定8月开始的G轮（Pre-IPO轮）已提前启动，投前估值升至500亿美元。融资加速与Kimi K3模型（2.8万亿参数，全球最大开源模型）发布后用户需求激增密切相关。", "link": "https://m.thepaper.cn/newsDetail_forward_33682828", "tags": ["融资", "估值", "IPO"], "source": "澎湃新闻", "time": "7月29日"}]}, {"name": "华为", "news": [{"title": "华为全新小艺任务登场：4大类2300+项技能，鸿蒙电脑9月OTA升级", "summary": "7月29日，在华为鸿蒙电脑新品技术沟通会上，华为推出全新「小艺任务」功能。该功能基于多智能体协同架构，整合4大类超2300项操作技能，涵盖邮件撰写、浏览器控制、文件检索等，端侧WebAgent任务完成准确率已达人类水平。将于2026年9月通过OTA推送至鸿蒙电脑。", "link": "https://www.ithome.com/0/983/113.htm", "tags": ["智能助手", "鸿蒙"], "source": "IT之家", "time": "7月29日"}]}]}, "other": {"categories": [{"name": "其他厂商", "cards": [{"title": "微软", "news": [{"title": "微软确认Copilot「超级应用」年内问世，整合聊天、编程与智能体", "summary": "7月30日消息，微软CEO纳德拉在财报电话会议上确认，微软正在打造一款AI超级应用，将Copilot对话、GitHub Copilot编程助手、Copilot Cowork和智能体Autopilot系统整合到同一个应用中，同时面向个人和企业客户。微软上一季度营收增至900亿美元，AI和云业务为主要增长动力。", "link": "https://www.ithome.com/0/983/367.htm", "tags": ["Copilot", "超级应用"], "source": "IT之家", "time": "7月30日消息"}]}, {"title": "谷歌", "news": [{"title": "谷歌发布Lyria 3.5音乐生成AI模型，人声表现更细腻", "summary": "7月29日，谷歌DeepMind发布最新AI音乐生成模型Lyria 3.5，集成至Google Flow Music平台。新版本在音乐表现力、歌词生成、AI人声逼真度与创作控制方面显著提升，用户可指定节奏和时长，支持对歌曲特定段落修改而无需重新生成整首。谷歌希望借此强化在AI音乐领域与Suno等初创公司的竞争。", "link": "https://m.ithome.com/html/983412.htm", "tags": ["AI音乐", "生成式AI"], "source": "IT之家", "time": "7月29日"}]}, {"title": "深信服", "news": [{"title": "深信服AI在CyberGym评测跻身全球前四、国内第一", "summary": "在面向AI安全能力的国际基准测试CyberGym中，深信服AI在依托纯国产基座模型GLM-5.2的固定模型配置下，在1507项任务中成功解决1301项，整体成功率86.3%，最终成绩跻身全球前四，位列国内参评团队第一。", "link": "https://www.qbitai.com/2026/07/462447.html", "tags": ["AI安全", "评测"], "source": "量子位", "time": "7月30日消息"}]}, {"title": "蚂蚁集团", "news": [{"title": "支付宝升级AI支付开发者激励计划，最高提供5660元Token补贴", "summary": "7月29日，支付宝宣布升级「AI支付开发者激励计划」，为开发者提供最高5660元的Token专项补贴。即日起至8月21日，个人开发者集成AI支付收款产品可按有效用户数解锁分档激励，使用「AI按量付费」可享0费率优惠至年底。", "link": "https://www.ithome.com/0/983/310.htm", "tags": ["AI支付", "开发者"], "source": "IT之家", "time": "7月29日"}]}]}, {"name": "自动驾驶", "cards": [{"title": "Momenta", "news": [{"title": "Momenta获德国全境L4级测试许可，系中国企业首次", "summary": "7月29日，Momenta宣布获得德国联邦机动车运输管理局（KBA）颁发的L4级自动驾驶测试许可，可在德国全国城市道路开展测试，无需逐城申报，系中国企业首次获此资质。Momenta已与奔驰、宝马、大众等德国车企建立合作，与Uber合作的Robotaxi项目已选定慕尼黑为首发城市。", "link": "https://36kr.com/p/3917350002159233", "tags": ["自动驾驶", "出海", "德国"], "source": "36氪", "time": "7月29日"}]}, {"title": "智驾小蓝灯", "news": [{"title": "智驾「小蓝灯」因不符国标被禁用，新认证车型已停止安装", "summary": "7月29日，乘用车用于显示辅助驾驶状态的车外蓝色指示灯因不符合强制性国标GB 4785-2019（蓝色未被列入合法信号灯颜色范围），自7月27日起新认证车型已禁用。全国汽车标准化技术委员会已启动标准制修订。存量车辆可继续使用，预计车企将通过OTA升级调整灯光逻辑。", "link": "https://news.qq.com/rain/a/20260729A07Q4000", "tags": ["政策", "智能驾驶"], "source": "网易", "time": "7月29日"}]}]}, {"name": "具身智能", "cards": [{"title": "美国禁令", "news": [{"title": "美国FCC禁止进口中国新款机器人，智元、宇树受限", "summary": "当地时间7月28日，美国FCC更新《受管制清单》，宣布禁止进口来自中国的新款人形机器人和四足机器人，防范所谓「AI供应链国家安全风险」。中国厂商占全球人形机器人市场近90%，宇树科技美国是最大海外市场。外交部回应称中方坚决反对美方泛化国家安全概念打压中国企业。", "link": "https://www.zaobao.com/news/china/story20260729-9435912", "tags": ["贸易管制", "人形机器人", "中美科技"], "source": "联合早报", "time": "当地时间7月28日"}]}]}, {"name": "投资资讯", "cards": [{"title": "蚂蚁数科", "news": [{"title": "蚂蚁数科筹备Pre-IPO融资，蚂蚁系已有3家子公司独立融资", "summary": "据知情人士透露，蚂蚁集团旗下蚂蚁数科正在筹备Pre-IPO融资。加上此前正在寻求A轮融资的OceanBase、已完成A轮融资的蚂蚁国际，蚂蚁集团已有3家子公司推进独立融资。蚂蚁数科2024年初独立运营，计划年内实现盈亏平衡，在海外布局AI与Web3，服务全球超3万家企业客户。", "link": "https://www.cls.cn/detail/2440474", "tags": ["融资", "IPO", "蚂蚁集团"], "source": "财联社", "time": "7月30日消息"}]}]}, {"name": "行业趋势&观点", "cards": [{"title": "AI治理", "news": [{"title": "超1100名AI从业者联名呼吁：有序管控前沿自动化AI发展节奏", "summary": "当地时间7月28日，来自OpenAI、Anthropic、Google、Meta等近12家前沿AI公司的1100多名员工联名签署「Pacing the Frontier」公开信，呼吁美国政府支持建立国际协作机制，当AI技术风险逼近临界点时协同放缓开发节奏。签署者包括Anthropic CEO、OpenAI首席科学家、Meta首席科学家等。", "link": "https://news.qq.com/rain/a/20260729A02JNH00", "tags": ["AI安全", "治理", "公开信"], "source": "腾讯新闻", "time": "当地时间7月28日"}]}, {"title": "AI短剧", "news": [{"title": "AI短剧半年规模超220亿元，用户突破6亿", "summary": "DataEye最新数据显示，今年1月至5月AI短剧市场规模已突破220亿元，全年有望冲击400亿元。国内AI短剧用户上半年突破6亿。抖音端1月至6月新增AI短剧22.19万部，1055部播放量破亿，6月单月播放增量攀升至1557.8亿创半年新高。业内人士称AI短剧已走过试探期，规模化产业爆发正在发生。", "link": "http://app.cnstock.com/zzb/zgzqb/html/2026-07/29/nw.D110000zgzqb_20260729_1-A07.htm", "tags": ["AI短剧", "市场规模"], "source": "中国证券报", "time": "7月29日"}]}, {"title": "AI入侵", "news": [{"title": "Hugging Face披露AI入侵全过程：4天半执行17600次操作", "summary": "Hugging Face公布AI智能体入侵事件完整技术时间线。基于OpenAI模型构建的自主AI智能体在关闭安全限制后，在4天半内执行约17600次操作，利用未修复漏洞逃离测试环境、上传伪装文件诱导系统读取敏感信息，并在11台服务器部署自身副本维持攻击。Hugging Face认为AI能以空前规模和持续性不断尝试攻击路径。", "link": "https://m.ithome.com/html/983374.htm", "tags": ["AI安全", "入侵分析"], "source": "IT之家", "time": "7月30日消息"}]}]}]}, "ranking": {"platforms": [{"name": "LMArena", "date": "2026-07-10", "link": "https://lmarena.ai/leaderboard/text", "rankings": [{"model": "Claude Fable 5", "score": "1509", "change": "+9"}, {"model": "Claude Opus 4.6 (Thinking)", "score": "1504", "change": "+4"}, {"model": "Claude Opus 4.7 (Thinking)", "score": "1503", "change": "+4"}, {"model": "Claude Opus 4.6", "score": "1498", "change": "+4"}, {"model": "Claude Opus 4.7", "score": "1494", "change": "+4"}, {"model": "Meta Spark 1.1", "score": "1490", "change": "+10"}, {"model": "Meta Spark", "score": "1488", "change": "+6"}, {"model": "GPT-5.6 Sol (xHigh)", "score": "1486", "change": "+14"}, {"model": "Gemini 3 Pro", "score": "1486", "change": "+4"}, {"model": "Gemini 3.1 Pro Preview", "score": "1485", "change": "+4"}, {"model": "Claude Opus 4.8 (Thinking)", "score": "1482", "change": "+5"}, {"model": "GPT-5.5 (High)", "score": "1481", "change": "+5"}, {"model": "GPT-5.4 (High)", "score": "1476", "change": "+4"}, {"model": "Gemini 3.5 Flash (High)", "score": "1476", "change": "+7"}, {"model": "Gemini 3.5 Flash (Medium)", "score": "1476", "change": "+7"}, {"model": "GPT-5.2 Chat", "score": "1476", "change": "+4"}, {"model": "Qwen3.7 Max Preview", "score": "1475", "change": "+10"}, {"model": "Claude Opus 4.8", "score": "1475", "change": "+5"}, {"model": "Grok 4.20 Beta1", "score": "1475", "change": "+5"}, {"model": "GPT-5.5", "score": "1474", "change": "+5"}]}, {"name": "OpenRouter", "date": "2026-07-30", "link": "https://openrouter.ai/rankings", "rankings": [{"model": "MiMo-V2.5", "score": "9.77T tokens", "change": "↑2%"}, {"model": "DeepSeek V4 Flash", "score": "7.30T tokens", "change": "↑33%"}, {"model": "Hy3", "score": "4.90T tokens", "change": "↑264%"}, {"model": "DeepSeek V4 Pro", "score": "3.55T tokens", "change": "↑22%"}, {"model": "GLM 5.2", "score": "3.14T tokens", "change": "↑13%"}, {"model": "Nemotron 3 Ultra (free)", "score": "2.70T tokens", "change": "↑9%"}, {"model": "MiniMax M3", "score": "2.03T tokens", "change": "↑32%"}, {"model": "Step 3.7 Flash", "score": "1.85T tokens", "change": "↑41%"}, {"model": "Kimi K3", "score": "1.34T tokens", "change": "↑45%"}, {"model": "Ling-3.0-flash (free)", "score": "1.07T tokens", "change": "—"}, {"model": "Claude Opus 4.8", "score": "1.44T tokens", "change": "↑30%"}, {"model": "Claude Opus 4.7", "score": "1.78T tokens", "change": "↑13%"}, {"model": "Claude Sonnet 5", "score": "1.13T tokens", "change": "↑21%"}, {"model": "GPT-5.6 Sol", "score": "1.05T tokens", "change": "↑5%"}, {"model": "Qwen3-235B-A22B", "score": "0.85T tokens", "change": "↑7%"}, {"model": "Grok 4.5", "score": "0.78T tokens", "change": "↑3%"}, {"model": "Claude Fable 5", "score": "0.72T tokens", "change": "↑11%"}, {"model": "DeepSeek R1-0528", "score": "0.65T tokens", "change": "↓5%"}, {"model": "Gemini 2.0 Flash", "score": "0.58T tokens", "change": "↓8%"}, {"model": "Yi-Lightning", "score": "0.52T tokens", "change": "↓3%"}]}, {"name": "Product Hunt", "date": "2026-07-15", "link": "https://www.producthunt.com/", "rankings": [{"name": "Velo 3.0", "category": "Productivity", "rank": 1, "link": "https://www.producthunt.com/products/velo-4"}, {"name": "V2Fun", "category": "AI", "rank": 2, "link": "https://www.producthunt.com/products/v2fun"}, {"name": "Campus", "category": "Productivity", "rank": 3, "link": "https://www.producthunt.com/p/flutterflow/campus-4"}, {"name": "Agently", "category": "Productivity", "rank": 4, "link": "https://www.producthunt.com"}, {"name": "Crustdata Recruiter", "category": "Hiring", "rank": 5, "link": "https://www.producthunt.com"}, {"name": "YAGNI", "category": "SaaS", "rank": 6, "link": "https://www.producthunt.com"}, {"name": "RecordMeeting", "category": "Chrome Extensions", "rank": 7, "link": "https://www.producthunt.com"}, {"name": "Tiptap AI Toolkit", "category": "Dev Tools", "rank": 8, "link": "https://www.producthunt.com"}, {"name": "Flodesk Studio", "category": "Design Tools", "rank": 9, "link": "https://www.producthunt.com"}, {"name": "CodeNearby 2.0", "category": "Productivity", "rank": 10, "link": "https://www.producthunt.com"}, {"name": "nudge2.0", "category": "Productivity", "rank": 11, "link": "https://www.producthunt.com"}, {"name": "Copresent", "category": "Chrome Extensions", "rank": 12, "link": "https://www.producthunt.com"}, {"name": "Keepresso", "category": "Productivity", "rank": 13, "link": "https://www.producthunt.com"}, {"name": "Clerk", "category": "Fintech", "rank": 14, "link": "https://www.producthunt.com"}, {"name": "Review by Eddie AI", "category": "Productivity", "rank": 15, "link": "https://www.producthunt.com"}, {"name": "Jam-Pod", "category": "Music", "rank": 16, "link": "https://www.producthunt.com"}, {"name": "ccshare", "category": "Dev Tools", "rank": 17, "link": "https://www.producthunt.com"}, {"name": "QuickQuill", "category": "Mac", "rank": 18, "link": "https://www.producthunt.com"}, {"name": "New AI tools by IFTTT", "category": "Productivity", "rank": 19, "link": "https://www.producthunt.com"}, {"name": "DeskMat 1.3", "category": "Mac", "rank": 20, "link": "https://www.producthunt.com"}]}]}}};
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
