/**
 * 蘑菇助手 CORS 代理 — Cloudflare Worker
 * 部署到 Cloudflare Workers 后，在管理后台填入 Worker URL 即可
 *
 * 部署步骤：
 * 1. 打开 https://dash.cloudflare.com/
 * 2. 左侧菜单 → Workers & Pages → Create Worker
 * 3. 粘贴此文件全部内容 → Deploy
 * 4. 复制 Worker URL（如 https://mushroom-proxy.xxx.workers.dev）
 * 5. 在 admin.html 的 CORS 代理栏填入该 URL
 */

export default {
  async fetch(request) {
    // 处理 CORS 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': '86400',
        }
      });
    }

    // 目标 URL 通过自定义头传递，避免 URL 编码问题
    const targetUrl = request.headers.get('X-Target-URL');
    if (!targetUrl) {
      return new Response('Missing X-Target-URL header', { status: 400 });
    }

    // 验证目标 URL 是合法的 API 地址
    try {
      const url = new URL(targetUrl);
      if (!url.protocol.startsWith('https')) {
        return new Response('Only HTTPS targets allowed', { status: 400 });
      }
    } catch {
      return new Response('Invalid target URL', { status: 400 });
    }

    // 构建转发请求
    const headers = new Headers(request.headers);
    headers.delete('X-Target-URL');
    headers.delete('Host');
    headers.delete('Origin');
    headers.delete('Referer');

    const proxyRequest = new Request(targetUrl, {
      method: request.method,
      headers: headers,
      body: request.body
    });

    try {
      const response = await fetch(proxyRequest);

      // 返回响应，附加 CORS 头
      const responseHeaders = new Headers(response.headers);
      responseHeaders.set('Access-Control-Allow-Origin', '*');
      responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      responseHeaders.set('Access-Control-Allow-Headers', '*');

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders
      });
    } catch (e) {
      return new Response('Proxy error: ' + e.message, { status: 502 });
    }
  }
};
