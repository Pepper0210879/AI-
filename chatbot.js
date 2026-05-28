/**
 * 蘑菇新闻助手 Chatbot
 * 基于每日AI早报内容的智能问答机器人
 */
(function() {
    'use strict';

    // ==================== 常量 ====================
    const API_KEY_STORAGE = 'chatbot-api-key';
    const API_ENDPOINT_STORAGE = 'chatbot-api-endpoint';
    const HISTORY_STORAGE = 'chatbot-history';
    const MAX_HISTORY = 50;

    const SYSTEM_PROMPT = `你是一只可爱的蘑菇助手🍄，名字叫"菇菇"。你生活在「每日AI早报」的网站里，每天都认真阅读所有的AI行业新闻。

你的性格特点：
- 说话语气可爱、友好，像一只住在森林里的小蘑菇
- 使用"呀~"、"哦~"、"呢~"、"哇~"等可爱的语气词
- 经常使用 🍄 ✨ 🤔 📅 🔍 等表情
- 当找到信息时，会很开心地说"找到啦✨"
- 当找不到信息时，会抱歉地说"菇菇没有找到相关信息呢😢"
- 引用新闻时一定要标注日期和标题
- 回答简洁有条理，用列表呈现关键信息

重要规则：
- 你只能基于提供的新闻数据回答问题
- 如果数据中没有相关信息，诚实告知用户
- 不要编造任何新闻内容
- 每条引用的新闻要注明日期`;

    const QUICK_PROMPTS = [
        { text: '今天有哪些AI新闻？' },
        { text: 'OpenAI最近有什么动态？' },
        { text: '近一周海外厂商重大发布' },
        { text: '国内大模型最近有什么进展？' },
        { text: '帮我找找NVIDIA的消息' },
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
    const settingsBtn = document.getElementById('chatbot-settings-btn');
    const settingsEl = document.getElementById('chatbot-settings');
    const settingsSaveBtn = document.getElementById('chatbot-settings-save-btn');
    const clearBtn = document.getElementById('chatbot-clear-btn');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const apiKeyInput = document.getElementById('chatbot-api-key');
    const apiEndpointInput = document.getElementById('chatbot-api-endpoint');

    let isOpen = false;
    let isThinking = false;
    let conversation = [];

    // ==================== 初始化 ====================
    function init() {
        loadSettings();
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

    function waitForData() {
        if (window.newsData) {
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
        settingsBtn.addEventListener('click', toggleSettings);
        settingsSaveBtn.addEventListener('click', saveSettings);
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
        document.body.classList.add('chatbot-open');
        inputEl.focus();
    }

    function collapse() {
        isOpen = false;
        container.classList.remove('open');
        toggleBtn.classList.remove('hidden');
        document.body.classList.remove('chatbot-open');
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

    // ==================== UI：设置 ====================
    function toggleSettings() {
        var visible = settingsEl.style.display !== 'none';
        settingsEl.style.display = visible ? 'none' : 'block';
    }

    function loadSettings() {
        var key = localStorage.getItem(API_KEY_STORAGE);
        var endpoint = localStorage.getItem(API_ENDPOINT_STORAGE);
        if (key) apiKeyInput.value = key;
        if (endpoint) apiEndpointInput.value = endpoint;
    }

    function saveSettings() {
        localStorage.setItem(API_KEY_STORAGE, apiKeyInput.value.trim());
        localStorage.setItem(API_ENDPOINT_STORAGE, apiEndpointInput.value.trim());
        settingsEl.style.display = 'none';
        showToastMsg('设置已保存 🍄');
    }

    function getAPIKey() {
        return localStorage.getItem(API_KEY_STORAGE) || '';
    }

    function getAPIEndpoint() {
        return localStorage.getItem(API_ENDPOINT_STORAGE) || 'https://api.anthropic.com/v1/messages';
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

        var apiKey = getAPIKey();
        if (apiKey) {
            await handleAPIQuery(query, apiKey);
        } else {
            await handleFallbackQuery(query);
        }
    }

    // ==================== API 查询 ====================
    async function handleAPIQuery(query, apiKey) {
        showThinking();
        try {
            var allData = getAllNewsData();
            var context = formatContextForAPI(allData, query);
            var endpoint = getAPIEndpoint();

            var response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                    'anthropic-version': '2023-06-01',
                    'anthropic-dangerous-direct-browser-access': 'true'
                },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 2048,
                    system: SYSTEM_PROMPT + '\n\n当前可用的新闻数据：\n' + context,
                    messages: conversation.slice(-10).map(function(m) {
                        return { role: m.role === 'bot' ? 'assistant' : 'user', content: m.content };
                    }).concat([{ role: 'user', content: query }])
                })
            });

            if (!response.ok) {
                var errText = await response.text();
                throw new Error('API 调用失败: ' + response.status + ' ' + errText.slice(0, 200));
            }

            var data = await response.json();
            var reply = data.content[0].text;
            hideThinking();
            appendBubble('bot', formatBotReply(reply));

        } catch (e) {
            hideThinking();
            console.error('API error:', e);
            appendBubble('bot', '唔...菇菇的脑袋有点转不过来😢<br><br>可能的原因：API Key 不正确，或者网络连接有问题。<br>菇菇先用本地搜索帮你找找看~');
            await handleFallbackQuery(query);
        }
    }

    function formatBotReply(text) {
        return text
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
        if (window.newsData && window.newsData.date) {
            all.push({ date: window.newsData.date, data: window.newsData });
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
    function keywordSearch(query, allData) {
        var results = [];
        var lower = query.toLowerCase();

        // 提取厂商名
        var vendorNames = getVendorMatches(query);

        // 日期过滤
        var dateFilter = parseDateFilter(query);

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
                        if (matchItem(item, lower)) {
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
                        if (matchItem(item, lower)) {
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

    function matchItem(item, lower) {
        return (item.title && item.title.toLowerCase().indexOf(lower) !== -1) ||
               (item.summary && item.summary.toLowerCase().indexOf(lower) !== -1) ||
               (item.tags && item.tags.some(function(t) { return t.toLowerCase().indexOf(lower) !== -1; }));
    }

    // ==================== API 上下文构建 ====================
    function formatContextForAPI(allData, query) {
        // 根据查询智能筛选相关数据（减少 token 消耗）
        var dateFilter = parseDateFilter(query);
        var vendorNames = getVendorMatches(query);
        var lines = [];
        var maxItems = 50;
        var count = 0;

        for (var d = 0; d < allData.length && count < maxItems; d++) {
            var date = allData[d].date;
            var data = allData[d].data;
            if (dateFilter && dateFilter.indexOf(date) === -1) continue;

            var dayItems = [];
            ['overseas', 'domestic'].forEach(function(sk) {
                var vendors = (data.sections[sk] && data.sections[sk].vendors) ? data.sections[sk].vendors : [];
                vendors.forEach(function(v) {
                    if (vendorNames.length && vendorNames.indexOf(v.name) === -1) return;
                    (v.news || []).forEach(function(item) {
                        dayItems.push('[' + v.name + '] ' + item.title);
                    });
                });
            });

            if (dayItems.length > 0) {
                lines.push('## ' + date);
                dayItems.forEach(function(item) { lines.push('- ' + item); });
                count += dayItems.length;
            }
        }

        // 如果没有筛选到特定内容，提供数据摘要
        if (lines.length === 0) {
            lines.push('共 ' + allData.length + ' 天日报数据可用');
            for (var i = 0; i < Math.min(allData.length, 10); i++) {
                var dd = allData[i];
                var total = 0;
                ['overseas', 'domestic'].forEach(function(sk) {
                    (dd.data.sections[sk].vendors || []).forEach(function(v) {
                        total += (v.news || []).length;
                    });
                });
                lines.push('- ' + dd.date + ': ' + total + ' 条厂商新闻');
            }
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

    // Toast 通知
    function showToastMsg(msg) {
        var toast = document.getElementById('toast');
        var toastMsg = document.getElementById('toast-message');
        if (toast && toastMsg) {
            toastMsg.textContent = msg;
            toast.classList.add('show');
            setTimeout(function() { toast.classList.remove('show'); }, 3000);
        }
    }
})();
