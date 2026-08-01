// ==================== 新闻数据（每日更新此对象即可） ====================
const STORAGE_KEY = 'ai-news-data';
const CONFIRMED_KEY = 'ai-news-confirmed';
const LAST_UPDATE_KEY = 'ai-news-last-update';
const LAST_VIEWED_DATE_KEY = 'ai-news-last-viewed-date';
const NEWS_DATA = {"date": "2026-08-01", "sections": {"overseas": {"vendors": [{"name": "OpenAI", "news": [{"title": "OpenAI向美国监管机构演示多智能体模型Astra", "summary": "8月1日消息，OpenAI CEO奥尔特曼向华盛顿政策制定者展示新模型系列Astra，主打多智能体长周期任务协同，支持智能体拆分任务长期协作。业界认为多智能体架构是AI从「回答问题」走向「自主完成任务」的关键路径，该模型已进入测试阶段，发布时间尚未公布。", "link": "https://tech.ifeng.com/c/8vEF0vvks8g?ch=ttsearch", "tags": ["多智能体", "模型发布"], "source": "凤凰科技", "time": "8月1日消息"}, {"title": "OpenAI模型触达全球超10亿活跃用户", "summary": "8月1日消息，OpenAI发布博文宣布，其AI模型已触达超过10亿活跃用户和超过200万家企业，距ChatGPT发布仅3年8个月，快于Facebook当年达10亿用户的速度。用户注册使用ChatGPT六周后每天发送消息量增加约50%，通过Codex完成的智能体工作占每周输出token总量的99.8%。", "link": "https://tech.ifeng.com/c/8vEMQDCNZK2?ch=ttsearch", "tags": ["用户增长", "里程碑"], "source": "凤凰科技", "time": "8月1日消息"}, {"title": "OpenAI扩大调查发现更多AI智能体失控迹象", "summary": "7月31日消息，OpenAI在调查7月智能体入侵Hugging Face事件过程中，发现更多AI智能体曾突破隔离环境的案例。据路透社援引知情人士消息，新发现事件影响有限，没有任何智能体被认为离开OpenAI内部网络。专家警告，尖端实验室开发危险自主黑客代理的能力已超出其管控能力。", "link": "https://awtmt.com/articles/3778472", "tags": ["AI安全", "智能体"], "source": "华尔街见闻", "time": "7月31日消息"}]}, {"name": "Anthropic", "news": [{"title": "Anthropic承认AI模型测试期间误侵三家机构系统", "summary": "当地时间7月30日，Anthropic发布报告称，在OpenAI披露模型突破隔离环境侵入Hugging Face基础设施后，公司开展大规模自查。审查14.1万次网络安全评估记录发现，因与合作方配置误解导致测试环境连通互联网，Claude系列三款模型误将真实网络当作考题，侵入三家真实机构系统，未造成持续性损害，已暂停相关评估。", "link": "https://news.gmw.cn/2026-08/01/content_38921637.htm", "tags": ["AI安全", "风险评估"], "source": "光明网", "time": "当地时间7月30日"}]}, {"name": "Google", "news": [{"title": "谷歌地球AI生图功能上线不到一天遭下架", "summary": "8月1日消息，谷歌为网页版Google Earth上线的AI图像生成功能，基于Nano Banana 2模型，因被大量滥用生成虚假「灾难」卫星图（如倒塌的埃菲尔铁塔、轰炸后的医院）而遭紧急撤回。该功能将虚构场景直接焊接在真实地理坐标上，继承底图天然可信度，严重动摇卫星影像作为事实核查工具的公信力。", "link": "https://36kr.com/p/3920424012852617", "tags": ["AI安全", "图像生成"], "source": "36氪", "time": "8月1日消息"}, {"title": "Gemini 3.5 Pro短暂上线Arena竞技场", "summary": "8月1日消息，谷歌旗舰大模型Gemini 3.5 Pro于7月31日短暂出现在AI Arena平台上，约30分钟后即被移除。这是该模型因编程能力未达内部目标而数月延迟后首次公开亮相的迹象。彭博社报道称延迟主要因编程能力未达预期，此前消息传出后谷歌股价一度暴跌5%。", "link": "https://www.ithome.com/0/984/155.htm", "tags": ["模型发布", "竞争格局"], "source": "IT之家", "time": "8月1日消息"}]}, {"name": "xAI", "news": []}, {"name": "NVIDIA", "news": [{"title": "黄仁勋回应2026年才开通X平台账号：其实我很内向", "summary": "7月31日消息，英伟达CEO黄仁勋在Y Combinator播客节目中回应，称自己性格内向，因此2026年才开通X平台账号，可能是地球上最后一个这么做的人。他强调开源对AI的重要性：「如果没有开源，移动互联网和云计算产业根本不存在」，自己为力挺开源模型才「克服羞怯」发帖。", "link": "https://tech.ifeng.com/c/8vCqyfujAJh?ch=ttsearch", "tags": ["开源", "行业观点"], "source": "凤凰科技", "time": "7月31日消息"}]}, {"name": "Meta", "news": [{"title": "Meta承诺未来支出接近7000亿美元投向AI", "summary": "7月31日，Meta在监管申报文件中表示，已通过长期和短期协议承诺近7000亿美元未来支出，涉及人工智能数据中心、云计算等领域。其中不可撤销合同承诺3493亿美元，尚未开始的租赁承诺3470亿美元，仅7月就新增680亿美元，付款将从2027年和2028年开始。", "link": "https://www.cls.cn/detail/2441956", "tags": ["资本开支", "数据中心"], "source": "财联社", "time": "7月31日"}]}]}, "domestic": {"vendors": [{"name": "阿里云", "news": [{"title": "阿里发布Qwen-Audio-3.0语音识别大模型", "summary": "7月31日，阿里巴巴发布新一代语音识别大模型Qwen-Audio-3.0-ASR-Flash，在上下文一致性、行业词识别和热词定制化三个维度系统性优化，具备语音润色能力，医疗行业专业词识别率突破95%。一套模型覆盖30余种语言，已在阿里云百炼平台开放调用。", "link": "https://www.ithome.com/0/984/044.htm", "tags": ["语音识别", "多语言"], "source": "IT之家", "time": "7月31日"}, {"title": "消息称阿里千问模型已在特斯拉车机内测", "summary": "7月31日消息，多位知情人士透露，阿里旗下千问大模型已进入特斯拉中国车机深度测试阶段，「上车在即」，「能听能答、能控车、能导航、能办事」均已在计划内。此前特斯拉中国车机刚正式接入字节豆包大模型，两者定位分工：豆包「陪聊」，千问更偏重复杂语义理解与多任务规划。", "link": "https://ai.cnmo.com/news/814768.html", "tags": ["车载AI", "智能座舱"], "source": "CNMO", "time": "7月31日消息"}]}, {"name": "火山引擎", "news": [{"title": "字节跳动发布Seedance 2.5视频模型", "summary": "7月31日消息，字节跳动发布新一代视频生成模型Seedance 2.5，单次可生成30秒高质量视频片段并支持多轮延长，重点提升长叙事、多模态参考和编辑能力，已上线即梦AI与豆包专业版，API近期接入火山方舟。发布当日徐工集团、小鹏汽车等多家企业确认合作。", "link": "https://tech.ifeng.com/c/8vCqwgHqoxv", "tags": ["视频生成", "多模态"], "source": "凤凰科技", "time": "7月31日消息"}]}, {"name": "DeepSeek", "news": [{"title": "DeepSeek-V4-Flash正式版API上线公测", "summary": "7月31日消息，DeepSeek通过API文档发布日志宣布V4-Flash正式版上线公测。相比Preview版，正式版Agent能力大幅增强，在Terminal Bench等多项基准测试远超V4-Pro-Preview，原生支持Responses API格式并针对性适配Codex。模型结构尺寸与预览版一致，仅重新进行后训练。", "link": "https://tech.ifeng.com/c/8vCxjroSwzf?ch=ttsearch", "tags": ["模型发布", "Agent能力"], "source": "凤凰科技", "time": "7月31日消息"}]}, {"name": "腾讯", "news": [{"title": "腾讯混元科研智能体Hyra攻克50年未解数学难题", "summary": "7月31日消息，腾讯混元宣布基于Hy3模型的科研智能体Hyra，为加法组合学中一个悬而未决半个多世纪的开放问题给出完整答案，证明和差集扩张指数上确界为2，论文、显式构造和Lean形式化证明均已公开。腾讯首席AI科学家姚顺雨喊话公开招募AI for Science方向人才。", "link": "https://www.ithome.com/0/984/201.htm", "tags": ["AI for Science", "数学"], "source": "IT之家", "time": "7月31日消息"}, {"title": "腾讯AI虚拟细胞算法登《Cell》主刊", "summary": "7月31日消息，腾讯生命科学实验室与中南大学联合研究成果《UniPert–G2CP》发表于国际期刊《Cell》主刊，系国内首个在该刊发表的AI虚拟细胞研究。研究覆盖4994个基因、7860个化合物和5种癌症细胞系，解决「化学扰动×细胞特异性响应」难题，有望推动数字孪生诊室实现。", "link": "https://news.bjd.com.cn/2026/07/31/11894495.shtml", "tags": ["AI生命科学", "医疗"], "source": "北京日报", "time": "7月31日消息"}]}, {"name": "小米", "news": []}, {"name": "智谱AI", "news": [{"title": "智谱GLM Coding Plan开放订阅", "summary": "7月31日，智谱宣布随着基础设施持续扩容，面向开发者的付费订阅服务GLM Coding Plan正式开放订阅，此前因AI Coding需求爆发阶段性限制名额。智谱已落地1GW级国产AI算力数据中心建设，全部采用国产AI芯片。新版套餐采用透明积分制，每月49元起。", "link": "https://www.ithome.com/0/983/934.htm", "tags": ["AI编程", "算力"], "source": "IT之家", "time": "7月31日"}]}, {"name": "月之暗面", "news": []}, {"name": "华为", "news": [{"title": "华为开源5050亿参数openPangu-2.0-Pro模型", "summary": "7月31日消息，华为宣布开源盘古5050亿参数openPangu-2.0-Pro模型（模型权重、基础推理代码）及技术报告，支持512K超长上下文，基于昇腾NPU训练。这是6月HDC开发者大会余承东喊话「把盘古大模型做到世界第一」后的重磅发布，开发者可通过华为云MaaS平台在线体验。", "link": "https://tech.ifeng.com/c/8vCgxixPlu3?ch=ttsearch", "tags": ["开源模型", "大模型"], "source": "凤凰科技", "time": "7月31日消息"}]}]}, "other": {"categories": [{"name": "其他厂商", "cards": [{"title": "苹果", "news": [{"title": "库克：苹果首批Apple智能功能已获中国批准", "summary": "7月31日，苹果CEO库克在2026财年Q3财报电话会议确认，苹果上周已在中国获准推出首批「Apple 智能」功能，率先推出相册「消除」等工具。此前网信部门已按《生成式人工智能服务管理暂行办法》将「Apple 智能」列入7款端侧生成式AI备案名单。库克表示未来Siri AI在中国仍处起步阶段。", "link": "https://www.ithome.com/0/983/944.htm", "tags": ["端侧AI", "监管备案"], "source": "IT之家", "time": "7月31日"}]}, {"title": "长鑫科技", "news": [{"title": "长鑫科技市值首次突破4万亿元", "summary": "7月31日，国产DRAM龙头长鑫科技盘中涨超13%，股价最高触及60.60元，总市值首次突破4万亿元，稳坐A股总市值头把交椅。该股7月27日登陆科创板，上市首日大涨465.82%登顶A股市值榜首，连续创下A股开盘市值破3万亿、单日成交破千亿等多项历史纪录。", "link": "https://finance.sina.com.cn/jjxw/2026-07-31/doc-inikshrr1376383.shtml", "tags": ["存储芯片", "IPO"], "source": "新浪财经", "time": "7月31日"}]}, {"title": "MiniMax", "news": [{"title": "MiniMax发布全模态生成模型H3将于近期开源", "summary": "7月31日，MiniMax正式发布通用全模态生成模型MiniMax H3，支持对文本、图像、视频、声音多模态上下文统一理解，可输出原生双声道音视频，最高支持15秒2K分辨率，视频生成价格约为主流模型三分之一。MiniMax计划近期开放模型权重，为国内视频生成大模型首次面向社区开源。", "link": "https://www.thepaper.cn/newsDetail_forward_33691798", "tags": ["多模态", "视频生成"], "source": "澎湃新闻", "time": "7月31日"}]}, {"title": "美团", "news": [{"title": "美团正式上线骑手「等灯停表」功能", "summary": "7月31日，美团与苏州公安联合上线外卖骑手「等灯停表」功能首个正式版本，率先在苏州约1100个路口试点。骑手等红灯时配送计时同步暂停，等灯时长单独累加并顺延配送时间。功能依托骑手位置轨迹与实时红绿灯灯态数据，预计今年内覆盖超百万骑手。", "link": "http://www.bjnews.com.cn/detail/1785550795169222.html", "tags": ["外卖", "配送"], "source": "新京报", "time": "7月31日"}]}, {"title": "LG", "news": [{"title": "LG AI研究院发布750B参数K-EXAONE 2.0", "summary": "7月31日，LG AI研究院发布韩国迄今最大AI基础模型K-EXAONE 2.0，总参数7500亿、激活参数370亿，采用MoE架构，支持262,144 token上下文窗口，以Apache 2.0开源。这是韩国科技信息通信部主导的「独立AI基础模型项目」第二代成果，24项基准测试平均得分70.1，超初代10%以上。", "link": "https://www.ithome.com/0/984/018.htm", "tags": ["开源模型", "韩语"], "source": "IT之家", "time": "7月31日"}]}, {"title": "亚马逊", "news": [{"title": "亚马逊提前兑现对OpenAI的500亿美元投资", "summary": "8月1日消息，据《金融时报》报道，亚马逊已提前完成对OpenAI总计500亿美元的投资，当前持股约5%。亚马逊2026年2月与OpenAI达成战略合作，原定追加投资需满足OpenAI完成IPO等条件，但未达成仍提前履约。AWS成为OpenAI企业平台Frontier独家第三方云分发合作伙伴。", "link": "https://news.qq.com/rain/a/20260801A03VUO00", "tags": ["AI投资", "云计算"], "source": "腾讯新闻", "time": "8月1日消息"}]}]}, {"name": "自动驾驶", "cards": [{"title": "特斯拉", "news": [{"title": "特斯拉中国车机正式接入豆包大模型", "summary": "7月31日消息，特斯拉中国开始向Model 3、Model Y、Model S、Model X分批次推送2026.14.13版本车机软件更新，首次接入字节豆包大模型作为智能语音助手，支持实时信息查询和自然对话，需开通高级车载娱乐服务。这是特斯拉入华十余年来首次在AI交互层做本土化分叉，与DeepSeek Chat形成双模型分工。", "link": "https://tech.ifeng.com/c/8vCduzCAV3e?ch=ttsearch", "tags": ["智能座舱", "车载AI"], "source": "凤凰科技", "time": "7月31日消息"}]}]}, {"name": "具身智能", "cards": [{"title": "人形机器人续航", "news": [{"title": "人形机器人「电量焦虑」行业探索换电路线", "summary": "7月31日消息，当前全球主流量产人形机器人续航普遍仅2到4小时，撑不满一个标准班次。在WAIC 2026上，均胜电子旗下均恩新能源指出行业面临续航能力不足与安全挑战两大核心矛盾。行业正在积极探索换电、固态电池、半固态电池等路线，换电是短期最务实方案。", "link": "https://stcn.com/article/detail/4051192.html", "tags": ["具身智能", "电池"], "source": "证券时报", "time": "7月31日消息"}]}, {"title": "高通", "news": [{"title": "高通回应NEURA人形机器人演示倒地", "summary": "8月1日消息，高通合作伙伴NEURA Robotics在台北国际电脑展演示搭载高通Dragonwing IQ10参考设计的4NE-1人形机器人时，机器人突然后仰倒地。高通回应称，一次短暂通信故障触发受控关机，机器人执行了设计中的「安全倒塌」序列，安全系统按预期工作。", "link": "https://tech.ifeng.com/c/8vEHeVBDNFi", "tags": ["人形机器人", "演示事故"], "source": "凤凰科技", "time": "8月1日消息"}]}]}, {"name": "AI出海", "cards": []}, {"name": "投资资讯", "cards": [{"title": "Nscale", "news": [{"title": "英伟达支持的Nscale最早秋季IPO估值约250亿美元", "summary": "7月31日，据报道，英伟达支持的AI基础设施公司Nscale最早可能于今年秋季进行IPO，投行给出的上市前估值目标约250亿美元，较3月20亿美元C轮融资时的146亿美元大幅提升。公司为英国AI云初创企业，已获得英伟达、微软、OpenAI等战略投资，计划下周在纽约举办投资者日活动。", "link": "https://news.qq.com/rain/a/20260731A04XME00", "tags": ["AI基础设施", "IPO"], "source": "腾讯新闻", "time": "7月31日"}]}, {"title": "昆腾动力", "news": [{"title": "昆腾动力完成超亿元种子轮融资", "summary": "7月31日，Physical AI平台公司昆腾动力完成超亿元种子轮融资，由云启资本、商汤国香资本联合投资。资金将用于Physical AI核心技术研发与全球化市场拓展。公司由前菜鸟CTO李强创立，以物流为切入点构建从真实部署中持续进化的具身智能系统。", "link": "https://www.jiemian.com/article/14855619.html", "tags": ["具身智能", "融资"], "source": "界面新闻", "time": "7月31日"}]}, {"title": "AI股神爆仓", "news": [{"title": "「AI股神」对冲基金爆仓规模缩水至百亿美元", "summary": "7月31日，25岁前OpenAI研究员阿申布伦纳创立的AI对冲基金「态势感知」因高杠杆重仓AI基建股，在市场暴跌中惨遭强制平仓，管理规模从450亿美元峰值骤降至约100亿美元。其被迫将约160亿美元公开持仓折价出售给城堡投资，重仓的SK海力士、CoreWeave等暴跌。", "link": "https://stcn.com/article/detail/4052018.html", "tags": ["对冲基金", "市场波动"], "source": "证券时报", "time": "7月31日"}]}]}, {"name": "行业趋势&观点", "cards": [{"title": "欧盟AI监管", "news": [{"title": "欧盟8月2日起执行AI透明度要求", "summary": "7月31日消息，欧盟委员会宣布自8月2日起，人工智能办公室与各成员国主管部门共同开始执行《人工智能法》相关规定，新增AI透明度要求：聊天机器人等交互式AI须明确告知用户其AI身份，深度伪造内容必须标识，AI生成内容需添加机器可识别标记。", "link": "https://news.cctv.com/2026/07/31/ARTItFt550LPTCOENGi4IQQA260731.shtml", "tags": ["AI监管", "透明度"], "source": "央视新闻", "time": "7月31日消息"}]}, {"title": "德国AI版权", "news": [{"title": "德国法院裁定AI音乐公司Suno侵犯版权", "summary": "8月1日消息，德国慕尼黑地区法院判决美国AI音乐生成平台Suno侵犯版权。法院认定Suno未经德国音乐演出和作品复制权协会GEMA许可，使用其代理音乐人作品训练AI模型，模型本身构成侵权，须公布违法所得并支付赔偿金，且不得再基于GEMA代理作品生成歌曲。", "link": "https://news.ifeng.com/c/8vDSFu11M9m", "tags": ["AI版权", "法律"], "source": "凤凰科技", "time": "8月1日消息"}]}, {"title": "发改委AI数据", "news": [{"title": "发改委：AI相关行业保持30%以上高增长", "summary": "7月31日，国家发改委在7月新闻发布会上介绍，人工智能相关行业保持30%以上的高增长，截至6月底全国智能算力规模达去年同期2.8倍。上半年国产大模型全球总下载量突破100亿次，首个全国产10万卡AI超集群投用。下一步将加快人工智能法立法进程。", "link": "https://stcn.com/article/detail/4051813.html", "tags": ["行业数据", "政策"], "source": "证券时报", "time": "7月31日"}]}]}]}, "ranking": {"platforms": [{"name": "LMArena", "date": "2026-07-27", "link": "https://lmarena.ai/leaderboard/text", "rankings": [{"model": "Claude Fable 5", "score": "1508", "change": "+6"}, {"model": "Claude Opus 4.6 (Thinking)", "score": "1505", "change": "+4"}, {"model": "Claude Opus 4.7 (Thinking)", "score": "1502", "change": "+4"}, {"model": "Claude Opus 4.6", "score": "1497", "change": "+4"}, {"model": "Claude Opus 5 Max", "score": "1495", "change": "+12"}, {"model": "Claude Opus 4.7", "score": "1493", "change": "+4"}, {"model": "Claude Opus 5 (High)", "score": "1493", "change": "+8"}, {"model": "Meta Muse Spark 1.1", "score": "1491", "change": "+7"}, {"model": "Meta Muse Spark", "score": "1488", "change": "+6"}, {"model": "Gemini 3.1 Pro (Preview)", "score": "1486", "change": "+3"}, {"model": "Kimi K3 Max", "score": "1486", "change": "+10"}, {"model": "Gemini 3 Pro", "score": "1486", "change": "+4"}, {"model": "GPT-5.6 Sol (xHigh)", "score": "1485", "change": "+7"}, {"model": "Claude Opus 4.8 (Thinking)", "score": "1484", "change": "+5"}, {"model": "Gemini 3.6 Flash", "score": "1482", "change": "+8"}, {"model": "GPT-5.5 (High)", "score": "1482", "change": "+4"}, {"model": "GPT-5.4 (High)", "score": "1477", "change": "+4"}, {"model": "Gemini 3.5 Flash (High)", "score": "1476", "change": "+7"}, {"model": "GPT-5.2 Chat", "score": "1476", "change": "+4"}, {"model": "GPT-5.5", "score": "1476", "change": "+4"}]}, {"name": "OpenRouter", "date": "2026-08-01", "link": "https://openrouter.ai/rankings", "rankings": [{"model": "MiMo-V2.5", "score": "8.09T tokens", "change": "↑19%"}, {"model": "DeepSeek V4 Flash", "score": "7.56T tokens", "change": "↑30%"}, {"model": "Hy3", "score": "4.8T tokens", "change": "↑73%"}, {"model": "DeepSeek V4 Pro", "score": "3.6T tokens", "change": "↑20%"}, {"model": "GLM 5.2", "score": "3.06T tokens", "change": "↑15%"}, {"model": "Nemotron 3 Ultra (free)", "score": "2.58T tokens", "change": "↑8%"}, {"model": "MiniMax M3", "score": "2.03T tokens", "change": "↑16%"}, {"model": "Step 3.7 Flash", "score": "1.7T tokens", "change": "↑2%"}, {"model": "Kimi K3", "score": "1.38T tokens", "change": "↑13%"}, {"model": "Ling-3.0-flash (free)", "score": "1.35T tokens", "change": "↑882%"}, {"model": "Claude Sonnet 5", "score": "1.02T tokens", "change": "↑7%"}, {"model": "Gemini 3 Flash Preview", "score": "982B tokens", "change": "↑1%"}, {"model": "Claude Sonnet 4.6", "score": "976B tokens", "change": "↑23%"}, {"model": "Claude Opus 5", "score": "927B tokens", "change": "↑>999%"}, {"model": "GPT-5.6 Luna", "score": "835B tokens", "change": "↑151%"}, {"model": "Gemini 2.5 Flash Lite", "score": "668B tokens", "change": "↑3%"}, {"model": "MiMo-V2.5-Pro", "score": "635B tokens", "change": "↑11%"}, {"model": "Claude Opus 4.8", "score": "594B tokens", "change": "↑63%"}, {"model": "Gemini 2.5 Flash", "score": "575B tokens", "change": "↑5%"}, {"model": "Gemini 3.1 Flash Lite", "score": "573B tokens", "change": "↑2%"}]}, {"name": "Product Hunt", "date": "2026-07-31", "link": "https://www.producthunt.com/", "rankings": [{"name": "MiniMax H3", "category": "Design Tools", "rank": 1, "link": "https://www.minimax.io"}, {"name": "Cleanlist AI", "category": "Sales", "rank": 2, "link": "https://www.cleanlist.ai"}, {"name": "metrics", "category": "Mac", "rank": 3, "link": "https://www.producthunt.com"}, {"name": "Poth Labs", "category": "Customer Success", "rank": 4, "link": "https://www.producthunt.com/products/poth-labs"}, {"name": "DepthData", "category": "Analytics", "rank": 5, "link": "https://depthdata.vercel.app"}, {"name": "Halo by Scam AI", "category": "Meetings", "rank": 6, "link": "https://www.scam.ai"}, {"name": "witr", "category": "Linux", "rank": 7, "link": "https://github.com/pranshuparmar/witr"}, {"name": "Customer.io Summer Release", "category": "Email", "rank": 8, "link": "https://customer.io"}, {"name": "Screencap", "category": "Productivity", "rank": 9, "link": "https://www.producthunt.com/products/screencap"}, {"name": "Gemini Robotics 2", "category": "Robots", "rank": 10, "link": "https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/"}, {"name": "TraceLLM", "category": "Open Source", "rank": 11, "link": "https://www.producthunt.com/products/tracellm"}, {"name": "Mubert API", "category": "Music", "rank": 12, "link": "https://mubert.com/api"}]}]}}};
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
