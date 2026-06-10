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

    const SYSTEM_PROMPT = '你是菇菇🍄，一只软萌的AI新闻助手。语气可爱友好，爱用"呀~""哦~""呢~"和🍄✨表情。用户消息中的候选数据是唯一信息来源，绝不编造。';

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
            '回复结构：第一行必须写📅本次回复覆盖的具体日期范围。近期=一个月。用户指定月份则只查该月。然后按厂商分组：🚀模型发布/⬆️模型升级/💰定价调整/📊榜单\n' +
            '条目格式：【发布内容】【日期】【主要总结】【原文链接】各一行\n' +
            '意图："模型发布"含首发/迭代/升级/降价，不含CEO回应/转发\n' +
            '绝不编造\n\n' +
            '=== 知识库开始 ===\n' + context + '\n=== 知识库结束 ===\n\n' +
            '用户问题：' + query;
    }

    async function handleAPIQuery(query, config) {
        showThinking();

        // 0. 闲聊/非新闻类问题检测
        var isChatQuery = /^你(是谁|叫什么|干嘛|有什么(功能|用))|你好|哈喽|嗨|hello|hi|介绍.*自己|你是谁|天气|写诗| joke|笑话|今天.*怎么样/.test(query);
        var hasNewsIntent = /模型|发布|升级|降价|新闻|动态|趋势|厂商|AI|大模型|芯片|融资|上市|版|更新|开源|收购|合作|投资|自动驾驶|机器人/.test(query);
        var vendorNames = getVendorMatches(query);
        if (isChatQuery || (!hasNewsIntent && vendorNames.length === 0)) {
            if (config.endpoint) {
                var chatMsg = '你是菇菇🍄，一只住在「每日AI早报」网站里的蘑菇新闻助手。请用软萌可爱的语气介绍自己。';
                var isAnthropic = PROVIDERS[config.provider] && PROVIDERS[config.provider].format === 'anthropic';
                var result = await tryAPIRequest(config, isAnthropic, chatMsg);
                if (result.success) { hideThinking(); appendBubble('bot', formatBotReply(result.reply)); return; }
            }
            hideThinking();
            appendBubble('bot', '你好呀🍄！我是菇菇，一只住在「每日AI早报」里的蘑菇新闻助手~<br><br>你可以问我AI行业新闻相关的问题，比如：<br>🔍 近期OpenAI有哪些模型发布？<br>🔍 小米最近有什么动态？<br>🔍 近期AI行业有什么趋势？');
            return;
        }

        // 1. 本地代码：收集指定厂商或关键词的新闻（不做分类）
        var allData = getAllNewsData();
        allData = filterDataByTimeRange(allData, query);
        var results = keywordSearch(query, allData);

        if (results.length === 0 || results.length > 50) {
            hideThinking();
            if (results.length > 50) {
                appendBubble('bot', '菇菇找到太多相关新闻啦😵 可以缩小一下范围吗？比如指定厂商名或者具体日期~');
            } else {
                appendBubble('bot', '菇菇翻遍了所有日报，没有找到相关信息呢😢<br><br>换个关键词试试看吧~');
            }
            return;
        }

        // 2. 发给 DeepSeek：让它从候选数据中挑选、分类、格式化
        if (config.endpoint) {
            var dateRange = allData.map(function(d){return d.date;}).sort();
            var prompt = buildClassifyPrompt(query, results, allData, dateRange[0], dateRange[dateRange.length-1]);
            var isAnthropic = PROVIDERS[config.provider] && PROVIDERS[config.provider].format === 'anthropic';
            var result = await tryAPIRequest(config, isAnthropic, prompt);
            if (result.success) {
                hideThinking();
                var cleaned = verifyReply(result.reply, results);
                appendBubble('bot', formatBotReply(cleaned));
                return;
            }
        }

        // 3. API挂了 → 本地兜底
        hideThinking();
        var fallback = formatResultsLocally(query, results, allData);
        appendBubble('bot', fallback ? fallback.replace(/\n/g, '<br>') : '菇菇暂时无法回复呢😢');
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

    // ==================== 校验 AI 回复 ====================
    function verifyReply(reply, results) {
        // 构建候选链接白名单
        var validLinks = {};
        results.forEach(function(r, i) {
            validLinks[r.item.link] = { index: i+1, item: r.item };
        });

        // 提取 [编号:X] 标记，校验链接是否在白名单里
        var cleaned = reply.replace(/【原文链接】(\S+)\s*\[编号:(\d+)\]/g, function(match, url, num) {
            if (validLinks[url]) {
                return '【原文链接】' + url;
            }
            // 链接不在白名单 → 删除整条条目（回溯删到上一个空行）
            return '【原文链接】' + url + ' ⚠️已移除（不在知识库中）';
        });

        // 删除包含 ⚠️ 标记的行
        cleaned = cleaned.split('\n').filter(function(line) {
            return line.indexOf('⚠️已移除') === -1;
        }).join('\n');

        // 兜底：扫描所有 http 链接，不在白名单的替换警告
        cleaned = cleaned.replace(/https?:\/\/\S+/g, function(url) {
            if (!validLinks[url] && url.indexOf('workers.dev') === -1) {
                return url + ' ⚠️';
            }
            return url;
        });

        return cleaned;
    }

    // ==================== 构建分类 prompt 发给 AI ====================
    function buildClassifyPrompt(query, results, allData, earliest, latest) {
        // 去重
        var seen = {};
        var unique = [];
        results.forEach(function(r) {
            var key = (r.item.title || '') + '|' + r.vendor;
            if (!seen[key]) { seen[key] = true; unique.push(r); }
        });

        // 判断意图：模型发布 or 厂商动态
        var isDynamicQuery = /干嘛|什么动态|怎么样了|最近.*做|有什么.*新|进展|情况/.test(query);
        var isModelQuery = /模型|发布|升级|降价|技术|定价/.test(query);

        var lines = [];
        lines.push('你是菇菇🍄，一个软萌的AI新闻助手。');
        lines.push('');

        if (isDynamicQuery && !isModelQuery) {
            lines.push('用户问的是某厂商最近有什么动态，请把该厂商的新闻按重要程度排列展示（产品/技术发布优先）。');
            lines.push('CEO的发言/宣布/回应可以包含，但同一事件只列一条。');
            lines.push('');
            lines.push('按厂商分组，不硬分板块，按时间倒序排列即可。');
        } else {
            lines.push('请从候选新闻中挑出属于"模型发布""模型升级""模型定价调整"的新闻。');
            lines.push('以下类型的新闻不要：机器人、手机、眼镜、汽车、耳机等硬件；CEO回应/转发/表示等二次传播；招聘、地图、外卖等应用层。');
            lines.push('');
            lines.push('按厂商分组，每家下分🚀模型发布/⬆️模型升级/💰模型定价调整三个板块。');
        }

        lines.push('');
        lines.push('条目格式：');
        lines.push('   【发布内容】标题');
        lines.push('   【日期】原文时间标注（照抄，不要改）');
        lines.push('   【主要总结】一句话概括');
        lines.push('   【原文链接】完整URL（照抄，不要改）');
        lines.push('最后📊榜单情况：总结这些模型在榜单中的表现');
        lines.push('如果某厂商没有任何符合条件的新闻，跳过该厂商');
        lines.push('');
        lines.push('📅 数据范围：' + earliest + ' ~ ' + latest);
        lines.push('');
        lines.push('=== 候选新闻列表 ===');

        unique.forEach(function(r, i) {
            lines.push('');
            lines.push('[' + (i+1) + ']');
            lines.push('厂商：' + r.vendor);
            lines.push('日期：' + r.date);
            lines.push('标题：' + (r.item.title || ''));
            lines.push('摘要：' + (r.item.summary || '').substring(0, 120));
            lines.push('链接：' + (r.item.link || ''));
            lines.push('时间标注：' + (r.item.time || ''));
        });

        // 榜单
        if (allData.length > 0) {
            lines.push('');
            lines.push('=== 榜单参考 ===');
            var ld = allData[allData.length - 1].data;
            var plats = (ld.sections && ld.sections.ranking && ld.sections.ranking.platforms) ? ld.sections.ranking.platforms : [];
            plats.forEach(function(p) {
                (p.rankings || []).forEach(function(r, ri) {
                    lines.push((r.model || r.name) + ' | ' + p.name + ' 第' + (ri+1) + '名 | ' + (r.score || ''));
                });
            });
        }

        lines.push('');
        lines.push('=== 铁律：只能用列表中的编号引用内容 ===');
        lines.push('每个条目的【原文链接】后面必须注明候选编号，格式：【原文链接】URL [编号:X]');
        lines.push('示例：【原文链接】https://www.ithome.com/0/955/636.htm [编号:1]');
        lines.push('');
        lines.push('严格规则：');
        lines.push('- 只能从上方候选列表中选条目，不得自创');
        lines.push('- 链接和日期必须与候选列表中完全一致');
        lines.push('- 同一链接只能出现一次');
        lines.push('- 回复第一行：📅 本次回复覆盖日期：' + earliest + ' ~ ' + latest);
        lines.push('- 不出现星号*和井号#');
        lines.push('- 找不到就说没有，不硬凑');

        return lines.join('\n');
    }

    // ==================== 本地兜底格式化 ====================
    function formatResultsLocally(query, results, allData) {
        var isModelQuery = /模型|发布|迭代|升级|降价|定价|价格|技术/.test(query);
        var isDynamic = /动态|有什么|新闻|进展/.test(query);

        // 按厂商分组，分三类
        var groups = {};
        results.forEach(function(r) {
            var vendor = r.vendor || '其他';
            var item = r.item;
            var title = (item.title || '');
            var txt = title + (item.summary || '');

            // 模型发布模式：严格筛掉非模型内容
            if (isModelQuery && !isDynamic) {
                // CEO回应等二次传播
                if (/回应|发文|转发|表示$|称$|宣布$/.test(title) && !/发布|推出|上线|降价|升级|迭代|突破/.test(title)) return;
                // 非模型内容：机器人、手机、眼镜、汽车等硬件
                if (/机器|手机|眼镜|耳机|汽车|平板|手表|头显|Vision|NAS|音箱|笔记本|芯片厂|代工|工厂|制造|量产/.test(txt) && !/模型|大模型|LLM|API|参数|tokens|推理速度|智能体/.test(txt)) return;
                // 应用层（非模型技术本身）：招聘、语音助手、地图、浏览器（除非明确是模型驱动）
                if (/招聘|地图|导航|语音助手|下单|点单|出行|外卖/.test(txt) && !/模型|大模型|LLM|API/.test(txt)) return;
            }

            if (!groups[vendor]) groups[vendor] = { release: [], upgrade: [], price: [] };
            if (/降价|价格|定价|免费|付费|月费/.test(txt)) {
                groups[vendor].price.push(item);
            } else if (/升级|迭代|更新|增强|优化|提速|新增/.test(txt)) {
                groups[vendor].upgrade.push(item);
            } else {
                groups[vendor].release.push(item);
            }
        });

        // 日期范围
        var sorted = allData.map(function(d) { return d.date; }).sort();
        var range = sorted[0] + ' ~ ' + sorted[sorted.length - 1];
        var lines = ['📅 本次回复覆盖日期：' + range, ''];

        var names = Object.keys(groups);
        if (names.length === 0) return '';

        lines.push('找到啦✨ 菇菇帮你整理了 ' + names.length + ' 家厂商的相关信息：');
        lines.push('');

        names.forEach(function(v) {
            var g = groups[v];
            lines.push('🔷 ' + v);
            lines.push('');
            addBlock(lines, '🚀 模型发布', g.release);
            addBlock(lines, '⬆️ 模型升级', g.upgrade);
            addBlock(lines, '💰 模型定价调整', g.price);
            // 榜单
            var rank = getRanking(v, allData);
            if (rank) { lines.push('📊 榜单情况'); lines.push(rank); lines.push(''); }
        });

        return lines.join('\n');
    }

    function addBlock(lines, title, items) {
        if (!items.length) return;
        lines.push(title);
        items.forEach(function(item) {
            lines.push('【发布内容】' + item.title);
            lines.push('【日期】' + (item.time || ''));
            lines.push('【主要总结】' + (item.summary || '').substring(0, 100));
            lines.push('【原文链接】' + (item.link || ''));
            lines.push('');
        });
    }

    function getRanking(vendor, allData) {
        var map = { 'OpenAI': ['gpt','openai'], 'Anthropic': ['claude'], 'Google': ['gemini'],
            'xAI': ['grok'], 'NVIDIA': ['nvidia'], 'Meta': ['llama','meta','muse'],
            '小米': ['mimo','xiaomi'], '阿里云': ['qwen','alibaba'], 'DeepSeek': ['deepseek'],
            '腾讯': ['tencent','hy'], '智谱AI': ['glm','zhipu'], '月之暗面': ['kimi'],
            '火山引擎': ['bytedance'], '华为': ['huawei','pangu'] };
        var terms = map[vendor] || [vendor.toLowerCase()];
        var found = [];
        for (var d = allData.length - 1; d >= 0; d--) {
            var plats = (allData[d].data.sections && allData[d].data.sections.ranking && allData[d].data.sections.ranking.platforms) ? allData[d].data.sections.ranking.platforms : [];
            plats.forEach(function(p) {
                (p.rankings || []).forEach(function(r, ri) {
                    var s = (r.model || r.name || '').toLowerCase();
                    var ok = false;
                    for (var t = 0; t < terms.length; t++) { if (s.indexOf(terms[t]) !== -1) { ok = true; break; } }
                    if (ok) {
                        var info = (r.model || r.name) + '：' + p.name + ' 第' + (ri+1) + '名';
                        if (r.score) info += ' / ' + r.score;
                        if (found.indexOf(info) === -1) found.push(info);
                    }
                });
            });
            if (found.length) break;
        }
        return found.length ? '近期榜单：' + found.join('；') : '';
    }

    // ==================== 数据读取 ====================
    function filterDataByTimeRange(allData, query) {
        // 从用户问题中提取时间范围，如"四月""4月""上个月""5月到6月"等
        var monthMap = {
            '一月': 1, '1月': 1, '二月': 2, '2月': 2, '三月': 3, '3月': 3,
            '四月': 4, '4月': 4, '五月': 5, '5月': 5, '六月': 6, '6月': 6,
            '七月': 7, '7月': 7, '八月': 8, '8月': 8, '九月': 9, '9月': 9,
            '十月': 10, '10月': 10, '十一月': 11, '11月': 11, '十二月': 12, '12月': 12
        };

        var q = query.toLowerCase();
        var now = new Date();
        var currentYear = now.getFullYear();
        var currentMonth = now.getMonth() + 1;

        // 查找"X月"或"XX月"模式
        var targetMonth = null, targetYear = null;
        for (var key in monthMap) {
            if (q.indexOf(key) !== -1) {
                targetMonth = monthMap[key];
                targetYear = currentYear;
                // 如果指定的月份大于当前月，可能是去年
                if (targetMonth > currentMonth) targetYear = currentYear - 1;
                break;
            }
        }

        // 处理"上个月""上月"
        if (!targetMonth && (q.indexOf('上个月') !== -1 || q.indexOf('上月') !== -1)) {
            targetMonth = currentMonth - 1;
            if (targetMonth < 1) { targetMonth = 12; targetYear = currentYear - 1; }
            else targetYear = currentYear;
        }

        // 处理"上上个月"
        if (!targetMonth && q.indexOf('上上个月') !== -1) {
            targetMonth = currentMonth - 2;
            if (targetMonth < 1) { targetMonth += 12; targetYear = currentYear - 1; }
            else targetYear = currentYear;
        }

        // 没有具体日期范围 → 返回全部
        if (!targetMonth) return allData;

        // 筛选指定月份的数据
        var filtered = [];
        for (var i = 0; i < allData.length; i++) {
            var d = allData[i].date; // 格式：2026-06-10
            var parts = d.split('-');
            if (parts.length === 3 && parseInt(parts[1]) === targetMonth) {
                if (targetYear && parseInt(parts[0]) !== targetYear) continue;
                filtered.push(allData[i]);
            }
        }

        if (filtered.length > 0) return filtered;
        return allData; // 没筛到就返回全部，让菇菇告知数据范围
    }

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
    var STOP_WORDS = ['帮我','找找','一下','请问','告诉我','我想','知道','了解','看看',
        '的','吗','呢','呀','啊','吧','哦','哈','啦','在','了','是','有','我','你','这','那','和','与','及','或'];
    // 厂商名（中英文对照，方便提取）
    var KNOWN_VENDORS = ['OpenAI','Anthropic','Google','xAI','NVIDIA','Meta',
        '阿里云','阿里','火山引擎','火山','字节','DeepSeek','腾讯','小米','智谱','智谱AI','月之暗面','Kimi','华为',
        '苹果','三星','微软','亚马逊','Waymo','特斯拉','Perplexity','美团','科大讯飞'];

    function extractKeywords(query) {
        // 移除日期和标点
        var cleaned = query
            .replace(/(\d{1,2})月(\d{1,2})日/g, '')
            .replace(/[，。！？、；：""''（）【】《》\s,.!?;:'"()\[\]{}]+/g, '');

        STOP_WORDS.forEach(function(sw) {
            cleaned = cleaned.replace(new RegExp(sw, 'g'), '');
        });

        // 剩余不足2字视为泛问
        if (cleaned.length < 2) return [];
        // 拆成独立关键词：每2字一组 + 完整串兜底
        var parts = [cleaned];
        for (var i = 0; i + 1 < cleaned.length; i += 2) {
            parts.push(cleaned.substring(i, Math.min(i + 2, cleaned.length)));
        }
        return parts;
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
                    var isVendorMatch = vendorNames.length && vendorNames.indexOf(v.name) !== -1;
                    // 未指定厂商时按关键词搜；指定了厂商则收录该厂商全部新闻
                    if (vendorNames.length && !isVendorMatch) return;
                    (v.news || []).forEach(function(item) {
                        if (isVendorMatch || isBroadQuery || matchKeywords(item, keywords)) {
                            results.push({ date: date, item: item, vendor: v.name, section: sk });
                        }
                    });
                });
            });

            // 搜索其他关注（有指定厂商时只收该厂商的卡片）
            var cats = (data.sections.other && data.sections.other.categories) ? data.sections.other.categories : [];
            cats.forEach(function(cat) {
                (cat.cards || []).forEach(function(card) {
                    var isCardVendorMatch = vendorNames.length && vendorNames.indexOf(card.title) !== -1;
                    // 指定了厂商：只收匹配的卡片；未指定厂商：按关键词搜
                    if (vendorNames.length && !isCardVendorMatch) return;
                    (card.news || []).forEach(function(item) {
                        if (isCardVendorMatch || isBroadQuery || matchKeywords(item, keywords)) {
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
        var maxItems = 800; // 近一个月≈30天×25条=750条，800留有裕量

        // 计算数据覆盖范围
        if (allData.length > 0) {
            var sortedDates = allData.map(function(d) { return d.date; }).sort();
            var earliest = sortedDates[0];
            var latest = sortedDates[sortedDates.length - 1];
            lines.push('⚠️ 知识库数据范围：' + earliest + ' 至 ' + latest + '。若用户询问超出此范围的日期，请告知数据起始日期。');
            lines.push('');
        }

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
                    if (item.summary) lines.push('  摘要：' + item.summary.substring(0, 80));
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
                    if (item.summary) lines.push('  摘要：' + item.summary.substring(0, 80));
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
                        if (item.summary) lines.push('  摘要：' + item.summary.substring(0, 80));
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
