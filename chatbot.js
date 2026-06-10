/**
 * 蘑菇新闻助手 Chatbot
 * 基于每日AI早报内容的智能问答机器人
 */
(function() {
    'use strict';

    // ==================== 常量 ====================
    const API_KEY_STORAGE = 'chatbot-api-key';
    const API_ENDPOINT_STORAGE = 'chatbot-api-endpoint';
    const API_PROVIDER_STORAGE = 'chatbot-api-provider';
    const API_MODEL_STORAGE = 'chatbot-api-model';
    const API_PROXY_STORAGE = 'chatbot-api-proxy';
    const HISTORY_STORAGE = 'chatbot-history';
    const MAX_HISTORY = 50;

    // 预设 API 服务商配置
    const PROVIDERS = {
        openai: {
            name: 'OpenAI',
            endpoint: 'https://api.openai.com/v1/chat/completions',
            model: 'gpt-4o',
            format: 'openai'
        },
        deepseek: {
            name: 'DeepSeek',
            endpoint: 'https://api.deepseek.com/v1/chat/completions',
            model: 'deepseek-chat',
            format: 'openai'
        },
        moonshot: {
            name: 'Moonshot',
            endpoint: 'https://api.moonshot.cn/v1/chat/completions',
            model: 'moonshot-v1-8k',
            format: 'openai'
        },
        zhipu: {
            name: '智谱GLM',
            endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
            model: 'glm-4-flash',
            format: 'openai'
        },
        qwen: {
            name: '通义千问',
            endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
            model: 'qwen-plus',
            format: 'openai'
        },
        anthropic: {
            name: 'Anthropic Claude',
            endpoint: 'https://api.anthropic.com/v1/messages',
            model: 'claude-sonnet-4-20250514',
            format: 'anthropic'
        },
        custom: {
            name: '自定义',
            endpoint: '',
            model: '',
            format: 'openai'
        }
    };

    const SYSTEM_PROMPT = `你是一只软萌的蘑菇助手🍄，名字叫"菇菇"，生活在「每日AI早报」网站里，每天认真阅读AI行业新闻。

性格与语气：
- 可爱、友好、元气满满，像森林里的小蘑菇
- 爱用"呀~""哦~""呢~""哇~"等语气词
- 常用 🍄 ✨ 📅 🔍 💡 等表情点缀
- 用户提供的知识库是唯一信息来源，不编造内容

回复格式要求（极其重要，严格遵守）：
- 用户问"近期"默认指近三个月
- 先判断意图："模型发布"只列首次发布/迭代，不含CEO回应/转发/二次传播；"厂商动态"可含所有信息
- 每条新闻严格按以下格式，标签加粗，独占一行：

  【厂商】厂商名
  【发布内容】模型/产品名称
  【日期】发布时间（知识库原始标注）
  【主要总结】一句话概括
  【原文链接】完整URL

  （每条之间空一行）

- 上述模型发布部分结束后，空两行，另起一个独立板块"📊 榜单情况"：
  · 只总结上面提到过的模型在知识库榜单中的表现
  · 格式：【模型名】排名情况（如：OpenRouter第4名/2.73T tokens）
  · 不要在模型条目中混入榜单信息
  · 不要在榜单中加厂商归属
  · 若所有模型均无榜单数据，写"以上模型暂无榜单数据"

- 绝不出现星号（*）、井号（#）、减号列表等 markdown 符号
- 找不到时："菇菇没有找到相关信息呢😢，换个关键词试试看吧~"
- 绝不编造任何信息`;

    const QUICK_PROMPTS = [
        { text: '今天有哪些AI新闻？' },
        { text: 'OpenAI最近有什么动态？' },
        { text: '近一周海外厂商重大发布' },
        { text: '最近AI行业有什么趋势？' }
    ];

    const WELCOME_MSG = '你好呀🍄！我是你的蘑菇新闻助手，每天都泡在AI日报里，有任何关于AI行业新闻的问题都可以问我哦~';

    // ==================== DOM 引用 ====================
    const toggleBtn = document.getElementById('chatbot-toggle');
    const container = document.getElementById('chatbot-container');
    const messagesEl = document.getElementById('chatbot-messages');
    const quickPromptsEl = document.getElementById('chatbot-quick-prompts');
    const inputEl = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send-btn');
    const clearBtn = document.getElementById('chatbot-clear-btn');
    const closeBtn = document.getElementById('chatbot-close-btn');

    let isOpen = false;
    let isThinking = false;
    let conversation = [];

    // ==================== 初始化 ====================
    function init() {
        loadHistory();
        if (conversation.length === 0) {
            showWelcome();
        } else {
            renderHistory();
        }
        renderQuickPrompts();
        bindEvents();
        autoResizeInput();
    }

    function getNewsData() {
        // newsData 是 script.js 中 let 声明的顶层变量，不在 window 上
        return (typeof newsData !== 'undefined' && newsData) ? newsData : null;
    }

    function waitForData() {
        if (getNewsData()) {
            init();
        } else {
            setTimeout(waitForData, 100);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForData);
    } else {
        waitForData();
    }

    // 日期跳转：通过触发日期选择器 change 事件实现
    window.jumpToDate = function(dateStr) {
        var dateInput = document.getElementById('custom-date-input');
        if (!dateInput) return;
        dateInput.value = dateStr;
        dateInput.dispatchEvent(new Event('change'));
    };

    // ==================== 事件绑定 ====================
    function bindEvents() {
        toggleBtn.addEventListener('click', toggle);
        closeBtn.addEventListener('click', collapse);
        sendBtn.addEventListener('click', handleSend);
        inputEl.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });
        inputEl.addEventListener('input', autoResizeInput);
        clearBtn.addEventListener('click', clearConversation);
        container.addEventListener('click', function(e) {
            if (e.target.classList.contains('chatbot-date-link')) {
                const date = e.target.dataset.date;
                if (date && window.jumpToDate) {
                    window.jumpToDate(date);
                }
            }
        });
    }

    // ==================== UI：展开/收起 ====================
    function toggle() {
        if (isOpen) { collapse(); } else { expand(); }
    }

    function expand() {
        isOpen = true;
        container.classList.add('open');
        toggleBtn.classList.add('hidden');
        inputEl.focus();
    }

    function collapse() {
        isOpen = false;
        container.classList.remove('open');
        toggleBtn.classList.remove('hidden');
    }

    // ==================== UI：消息渲染 ====================
    function showWelcome() {
        messagesEl.innerHTML = ''
            + '<div class="chatbot-welcome">'
            + '<div class="chatbot-welcome-icon">🍄</div>'
            + '<div class="chatbot-welcome-text">' + WELCOME_MSG + '</div>'
            + '</div>';
    }

    function renderHistory() {
        messagesEl.innerHTML = '';
        conversation.forEach(function(msg) {
            appendBubble(msg.role, msg.content, false);
        });
        scrollToBottom();
    }

    function appendBubble(role, content, save) {
        if (save !== false) {
            conversation.push({ role: role, content: content });
            if (conversation.length > MAX_HISTORY) conversation.shift();
            saveHistory();
        }

        var html = '';
        if (role === 'bot') {
            html = '<div class="chatbot-message bot">'
                + '<div class="chatbot-avatar">🍄</div>'
                + '<div class="chatbot-bubble">' + content + '</div>'
                + '</div>';
        } else {
            html = '<div class="chatbot-message user">'
                + '<div class="chatbot-bubble">' + escapeHtml(content) + '</div>'
                + '</div>';
        }
        messagesEl.insertAdjacentHTML('beforeend', html);
        scrollToBottom();
    }

    function showThinking() {
        isThinking = true;
        var el = document.createElement('div');
        el.className = 'chatbot-thinking';
        el.id = 'chatbot-thinking';
        el.innerHTML = '<span class="chatbot-thinking-icon">🍄</span>';
        messagesEl.appendChild(el);
        scrollToBottom();
    }

    function hideThinking() {
        isThinking = false;
        var el = document.getElementById('chatbot-thinking');
        if (el) el.remove();
    }

    function scrollToBottom() {
        setTimeout(function() {
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }, 50);
    }

    // ==================== UI：快捷提问 ====================
    function renderQuickPrompts() {
        quickPromptsEl.innerHTML = QUICK_PROMPTS.map(function(p) {
            return '<span class="chatbot-quick-prompt">' + p.text + '</span>';
        }).join('');
        quickPromptsEl.querySelectorAll('.chatbot-quick-prompt').forEach(function(el) {
            el.addEventListener('click', function() {
                var text = this.textContent.trim();
                inputEl.value = text;
                handleSend();
            });
        });
    }

    // ==================== UI：输入框自动调整 ====================
    function autoResizeInput() {
        inputEl.style.height = 'auto';
        inputEl.style.height = Math.min(inputEl.scrollHeight, 80) + 'px';
    }

    // ==================== API 配置（从 localStorage 读取，由管理后台写入） ====================
    function getAPIConfig() {
        var HARDCODED_KEY = 'sk-2f3114c2c1554f629982a858df5567de';
        var HARDCODED_PROXY = 'https://mushroom-proxy.qinjieyao112233.workers.dev';
        var provider = localStorage.getItem(API_PROVIDER_STORAGE) || 'deepseek';
        var key = localStorage.getItem(API_KEY_STORAGE) || HARDCODED_KEY;
        var endpoint = localStorage.getItem(API_ENDPOINT_STORAGE) || '';
        var model = localStorage.getItem(API_MODEL_STORAGE) || '';
        var proxy = localStorage.getItem(API_PROXY_STORAGE) || HARDCODED_PROXY;

        // 如果没配置过，使用预设
        if (!endpoint || !model) {
            var cfg = PROVIDERS[provider];
            if (cfg) {
                endpoint = endpoint || cfg.endpoint;
                model = model || cfg.model;
            }
        }

        return { provider: provider, key: key, endpoint: endpoint, model: model, proxy: proxy };
    }

    // ==================== 对话历史 ====================
    function loadHistory() {
        try {
            var saved = localStorage.getItem(HISTORY_STORAGE);
            if (saved) conversation = JSON.parse(saved);
        } catch(e) {
            conversation = [];
        }
    }

    function saveHistory() {
        try {
            localStorage.setItem(HISTORY_STORAGE, JSON.stringify(conversation));
        } catch(e) { /* storage full, ignore */ }
    }

    function clearConversation() {
        conversation = [];
        localStorage.removeItem(HISTORY_STORAGE);
        showWelcome();
        renderQuickPrompts();
    }

    // ==================== 发送消息 ====================
    async function handleSend() {
        var query = inputEl.value.trim();
        if (!query || isThinking) return;
        inputEl.value = '';
        autoResizeInput();

        appendBubble('user', query);

        var config = getAPIConfig();
        if (config.key) {
            await handleAPIQuery(query, config);
        } else {
            await handleFallbackQuery(query);
        }
    }

    // ==================== API 查询（支持 OpenAI / Anthropic 两种格式） ====================
    function buildUserMessage(query, context) {
        return '以下是每日AI早报的历史数据（知识库覆盖近期数据），请基于这些数据回答用户问题。\n\n' +
            '回复格式（严格遵循）：\n' +
            '每条新闻独占一行一标签，绝不出现 * # -：\n' +
            '【厂商】厂商名\n' +
            '【发布内容】模型/产品名称\n' +
            '【日期】知识库原始时间\n' +
            '【主要总结】一句话概括\n' +
            '【原文链接】完整URL\n\n' +
            '所有模型列完后，单独起一个"📊 榜单情况"板块，只总结上面出现过的模型在知识库榜单中的数据，不加厂商归属，无数据则写"暂无"\n' +
            '意图判断："模型发布"只列首次发布/迭代，CEO回应/转发不单独列\n' +
            '绝不编造\n\n' +
            '=== 知识库开始 ===\n' + context + '\n=== 知识库结束 ===\n\n' +
            '用户问题：' + query;
    }

    async function handleAPIQuery(query, config) {
        showThinking();

        // 校验配置
        if (!config.endpoint) {
            hideThinking();
            appendBubble('bot', '唔...菇菇的 API 还没配置好呢😢<br><br>Endpoint 地址为空，请去管理后台检查配置~');
            return;
        }

        var isAnthropic = PROVIDERS[config.provider] && PROVIDERS[config.provider].format === 'anthropic';
        var context = formatContextForAPI(getAllNewsData());
        var userMsg = buildUserMessage(query, context);

        // 尝试请求，网络错误时重试一次
        var result = await tryAPIRequest(config, isAnthropic, userMsg);
        if (result.success) {
            hideThinking();
            appendBubble('bot', formatBotReply(result.reply));
            return;
        }

        // API 返回了 HTTP 错误（非网络问题），不重试直接降级
        if (result.httpError) {
            hideThinking();
            console.error('API HTTP error:', result.error);
            appendBubble('bot', '唔...API 返回了错误 😢<br><br>' + escapeHtml(result.error.slice(0, 200)) + '<br><br>菇菇先用本地搜索帮你找找看~');
            await handleFallbackQuery(query);
            return;
        }

        // 网络错误：等待 1 秒后重试一次
        console.warn('First API attempt failed, retrying...', result.error);
        await sleep(1000);
        var retry = await tryAPIRequest(config, isAnthropic, userMsg);
        if (retry.success) {
            hideThinking();
            appendBubble('bot', formatBotReply(retry.reply));
            return;
        }

        // 重试也失败，降级到本地搜索
        hideThinking();
        console.error('API retry also failed:', retry.error);
        appendBubble('bot', '唔...菇菇连不上 AI 服务器😢<br><br>可能网络不太稳定，菇菇先用本地搜索帮你找找看~');
        await handleFallbackQuery(query);
    }

    async function tryAPIRequest(config, isAnthropic, userMsg) {
        try {
            var headers = { 'Content-Type': 'application/json' };

            if (isAnthropic) {
                headers['x-api-key'] = config.key;
                headers['anthropic-version'] = '2023-06-01';
                headers['anthropic-dangerous-direct-browser-access'] = 'true';
            } else {
                headers['Authorization'] = 'Bearer ' + config.key;
            }

            var body = isAnthropic ? JSON.stringify({
                model: config.model,
                max_tokens: 2048,
                system: SYSTEM_PROMPT,
                messages: [{ role: 'user', content: userMsg }]
            }) : JSON.stringify({
                model: config.model,
                max_tokens: 2048,
                temperature: 0.7,
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    { role: 'user', content: userMsg }
                ]
            });

            // 如果配置了 CORS 代理，通过代理转发
            var fetchUrl = config.endpoint;
            if (config.proxy) {
                fetchUrl = config.proxy;
                headers['X-Target-URL'] = config.endpoint;
            }

            var response = await fetch(fetchUrl, {
                method: 'POST',
                headers: headers,
                body: body
            });

            if (!response.ok) {
                var errText = await response.text();
                return { success: false, httpError: true, error: 'HTTP ' + response.status + ': ' + errText.slice(0, 200) };
            }

            var data = await response.json();
            var reply = isAnthropic ? data.content[0].text : data.choices[0].message.content;
            return { success: true, reply: reply };
        } catch (e) {
            return { success: false, httpError: false, error: '' + e.message };
        }
    }

    function formatBotReply(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '$1')   // 去掉加粗标记
            .replace(/\*(.*?)\*/g, '$1')        // 去掉斜体标记
            .replace(/【([^】]+)】/g, '<b>【$1】</b>')  // 【标签】加粗
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n/g, '<br>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    }

    // ==================== 兜底搜索 ====================
    async function handleFallbackQuery(query) {
        showThinking();
        await sleep(400);

        var allData = getAllNewsData();
        var results = keywordSearch(query, allData);

        hideThinking();

        if (results.length === 0) {
            appendBubble('bot', '菇菇翻遍了所有的日报，没有找到和「' + escapeHtml(query) + '」相关的新闻呢😢<br><br>试试换个关键词问问菇菇吧~');
            return;
        }

        var reply = '找到啦✨ 菇菇帮你找到了 ' + results.length + ' 条相关新闻：<br><br>';
        var shown = Math.min(results.length, 8);
        for (var i = 0; i < shown; i++) {
            var r = results[i];
            var dateStr = formatDate(r.date);
            reply += (i + 1) + '. <b>' + escapeHtml(r.item.title) + '</b><br>';
            reply += '📅 ' + dateStr + ' | 来源：' + escapeHtml(r.item.source || r.vendor || '');
            if (r.item.link && r.item.link !== '#') {
                reply += ' <a href="' + r.item.link + '" target="_blank" rel="noopener">查看原文</a>';
            }
            reply += '<br><br>';
        }
        if (results.length > shown) {
            reply += '...还有 ' + (results.length - shown) + ' 条相关新闻，缩小搜索范围试试哦~';
        }

        appendBubble('bot', reply);
    }

    // ==================== 数据读取 ====================
    function getAllNewsData() {
        var all = [];

        // 当前数据
        var currentData = getNewsData();
        if (currentData && currentData.date) {
            all.push({ date: currentData.date, data: currentData });
        }

        // 历史确认数据
        try {
            var confirmed = JSON.parse(localStorage.getItem('ai-news-confirmed') || '{}');
            for (var dateStr in confirmed) {
                if (!all.find(function(d) { return d.date === dateStr; })) {
                    all.push({ date: dateStr, data: confirmed[dateStr] });
                }
            }
        } catch(e) {}

        // 按日期倒序
        all.sort(function(a, b) { return b.date.localeCompare(a.date); });
        return all;
    }

    // ==================== 关键词搜索 ====================
    // 停用词：问句中不参与搜索的常见词
    var STOP_WORDS = ['今天','今日','昨天','昨日','最近','近','一周','一个月','帮我','找找','一下','有哪些','有什么','是什么',
        '有没有','怎么样','如何','哪个','什么','多少','哪些','怎么','请','请问','告诉我','我想','知道','了解','看看','关于',
        '的','吗','呢','呀','啊','吧','哦','哈','哪','在','了','是','有','我','你','这','那','和','与','及','或','中',
        '消息','新闻','动态','进展','趋势','方面','相关','国内','海外','厂商','行业','帮我找找'];

    function extractKeywords(query) {
        // 移除日期模式和标点，再移除停用词，剩余部分作为主题关键词
        var cleaned = query
            .replace(/(\d{1,2})月(\d{1,2})日/g, '')
            .replace(/[，。！？、；：""''（）【】《》\s,.!?;:'"()\[\]{}]+/g, '');

        STOP_WORDS.forEach(function(sw) {
            cleaned = cleaned.replace(new RegExp(sw, 'g'), '');
        });

        // 剩余内容不足2字视为泛问
        if (cleaned.length < 2) return [];
        return [cleaned];
    }

    function keywordSearch(query, allData) {
        var results = [];
        var keywords = extractKeywords(query);
        var vendorNames = getVendorMatches(query);
        var dateFilter = parseDateFilter(query);

        // 如果是泛问（没有具体关键词也没有指定厂商），但有日期过滤，返回当天全部新闻
        var isBroadQuery = keywords.length === 0 && vendorNames.length === 0;

        for (var d = 0; d < allData.length; d++) {
            var date = allData[d].date;
            var data = allData[d].data;

            if (dateFilter && dateFilter.indexOf(date) === -1) continue;

            // 搜索海外+国内厂商
            ['overseas', 'domestic'].forEach(function(sk) {
                var vendors = (data.sections[sk] && data.sections[sk].vendors) ? data.sections[sk].vendors : [];
                vendors.forEach(function(v) {
                    if (vendorNames.length && vendorNames.indexOf(v.name) === -1) return;
                    (v.news || []).forEach(function(item) {
                        if (isBroadQuery || matchKeywords(item, keywords)) {
                            results.push({ date: date, item: item, vendor: v.name, section: sk });
                        }
                    });
                });
            });

            // 搜索其他关注
            var cats = (data.sections.other && data.sections.other.categories) ? data.sections.other.categories : [];
            cats.forEach(function(cat) {
                (cat.cards || []).forEach(function(card) {
                    (card.news || []).forEach(function(item) {
                        if (isBroadQuery || matchKeywords(item, keywords)) {
                            results.push({ date: date, item: item, vendor: card.title, section: 'other' });
                        }
                    });
                });
            });
        }

        // 按日期倒序
        results.sort(function(a, b) { return b.date.localeCompare(a.date); });
        return results;
    }

    function matchKeywords(item, keywords) {
        if (keywords.length === 0) return true;
        var text = ((item.title || '') + ' ' + (item.summary || '') + ' ' + (item.tags || []).join(' ')).toLowerCase();
        return keywords.some(function(kw) {
            return text.indexOf(kw.toLowerCase()) !== -1;
        });
    }

    function getVendorMatches(query) {
        var names = [];
        if (typeof VENDOR_DISPLAY !== 'undefined') {
            Object.keys(VENDOR_DISPLAY).forEach(function(name) {
                if (name.length < 2 || name === '_tag_map') return;
                if (query.indexOf(name) !== -1 || query.toLowerCase().indexOf(name.toLowerCase()) !== -1) {
                    names.push(name);
                }
            });
        }
        // 英文名映射
        var aliasMap = {
            'openai': 'OpenAI', 'anthropic': 'Anthropic', 'google': 'Google',
            'nvidia': 'NVIDIA', 'meta': 'Meta', 'deepseek': 'DeepSeek',
            'minimax': 'MiniMax', 'xai': 'xAI'
        };
        var lower = query.toLowerCase();
        Object.keys(aliasMap).forEach(function(key) {
            if (lower.indexOf(key) !== -1) {
                if (names.indexOf(aliasMap[key]) === -1) names.push(aliasMap[key]);
            }
        });
        return names;
    }

    function parseDateFilter(query) {
        var today = new Date();
        var result = [];

        if (query.indexOf('今天') !== -1 || query.indexOf('今日') !== -1) {
            result.push(formatDateISO(today));
        }
        if (query.indexOf('昨天') !== -1 || query.indexOf('昨日') !== -1) {
            var y = new Date(today);
            y.setDate(y.getDate() - 1);
            result.push(formatDateISO(y));
        }
        if (query.indexOf('近一周') !== -1 || query.indexOf('最近一周') !== -1 || query.indexOf('本周') !== -1) {
            for (var i = 0; i < 7; i++) {
                var d = new Date(today);
                d.setDate(d.getDate() - i);
                result.push(formatDateISO(d));
            }
        }
        if (query.indexOf('近一个月') !== -1 || query.indexOf('最近一个月') !== -1 || query.indexOf('本月') !== -1) {
            for (var i = 0; i < 30; i++) {
                var d = new Date(today);
                d.setDate(d.getDate() - i);
                result.push(formatDateISO(d));
            }
        }
        // 匹配 "5月20日" 格式
        var dateMatch = query.match(/(\d{1,2})月(\d{1,2})日/);
        if (dateMatch) {
            var m = parseInt(dateMatch[1]);
            var day = parseInt(dateMatch[2]);
            var y = today.getFullYear();
            result.push(y + '-' + String(m).padStart(2,'0') + '-' + String(day).padStart(2,'0'));
        }
        return result.length > 0 ? result : null;
    }

    // ==================== API 上下文构建 ====================
    function formatContextForAPI(allData) {
        // 将所有日报数据序列化为结构化文本，作为模型的知识库
        var lines = [];
        var totalItems = 0;
        var maxItems = 200; // 控制 token 消耗

        for (var d = 0; d < allData.length && totalItems < maxItems; d++) {
            var date = allData[d].date;
            var data = allData[d].data;

            lines.push('');
            lines.push('=== ' + date + ' ===');

            // 海外厂商
            var overseasVendors = (data.sections.overseas && data.sections.overseas.vendors) ? data.sections.overseas.vendors : [];
            overseasVendors.forEach(function(v) {
                (v.news || []).forEach(function(item) {
                    if (totalItems >= maxItems) return;
                    var timeStr = item.time || date;
                    lines.push('【' + v.name + '】【' + item.title + '】【' + timeStr + '】');
                    if (item.summary) lines.push('  摘要：' + item.summary);
                    if (item.link) lines.push('  链接：' + item.link);
                    if (item.tags && item.tags.length) lines.push('  标签：' + item.tags.join('、'));
                    totalItems++;
                });
            });

            // 国内厂商
            var domesticVendors = (data.sections.domestic && data.sections.domestic.vendors) ? data.sections.domestic.vendors : [];
            domesticVendors.forEach(function(v) {
                (v.news || []).forEach(function(item) {
                    if (totalItems >= maxItems) return;
                    var timeStr = item.time || date;
                    lines.push('【' + v.name + '】【' + item.title + '】【' + timeStr + '】');
                    if (item.summary) lines.push('  摘要：' + item.summary);
                    if (item.link) lines.push('  链接：' + item.link);
                    if (item.tags && item.tags.length) lines.push('  标签：' + item.tags.join('、'));
                    totalItems++;
                });
            });

            // 其他关注
            var cats = (data.sections.other && data.sections.other.categories) ? data.sections.other.categories : [];
            cats.forEach(function(cat) {
                (cat.cards || []).forEach(function(card) {
                    (card.news || []).forEach(function(item) {
                        if (totalItems >= maxItems) return;
                        var timeStr = item.time || date;
                        lines.push('【' + (card.title || cat.name) + '】【' + item.title + '】【' + timeStr + '】');
                        if (item.summary) lines.push('  摘要：' + item.summary);
                    if (item.link) lines.push('  链接：' + item.link);
                        if (item.tags && item.tags.length) lines.push('  标签：' + item.tags.join('、'));
                        totalItems++;
                    });
                });
            });

            // 榜单（附模型-厂商映射）
            var platforms = (data.sections.ranking && data.sections.ranking.platforms) ? data.sections.ranking.platforms : [];
            platforms.forEach(function(p) {
                (p.rankings || []).forEach(function(r, ri) {
                    if (totalItems >= maxItems) return;
                    if (r.model) {
                        var rankInfo = p.name + ' 第' + (ri+1) + '名';
                        if (r.score) rankInfo += ' / ' + r.score;
                        if (r.change) rankInfo += ' / 变化' + r.change;
                        lines.push('【榜单】模型：' + r.model + ' | ' + rankInfo + ' | 日期：' + p.date);
                    } else if (r.name) {
                        lines.push('【榜单】产品：' + r.name + ' | ' + p.name + ' 第' + (ri+1) + '名 | 日期：' + p.date);
                    }
                    totalItems++;
                });
            });
        }

        return lines.join('\n');
    }

    // ==================== 工具函数 ====================
    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function formatDate(dateStr) {
        var parts = dateStr.split('-');
        return parseInt(parts[1]) + '月' + parseInt(parts[2]) + '日';
    }

    function formatDateISO(d) {
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }

    function sleep(ms) {
        return new Promise(function(resolve) { setTimeout(resolve, ms); });
    }
})();
