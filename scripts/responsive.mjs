/**
 * Responsive audit — renders every route in headless Chrome at mobile, tablet
 * and desktop widths and reports any element that overflows the viewport
 * horizontally (uncontained by a clipping/scrolling ancestor).
 *
 * Usage: npm run build && npm run responsive
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';

const ROOT = path.resolve('dist');
const PORT = 4319;
const CHROME_CANDIDATES = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

const WIDTHS = [320, 360, 375, 390, 430, 768, 1024, 1100, 1280, 1440];

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/generative-ai',
  '/services/does-not-exist',
  '/portfolio',
  '/careers',
  '/blog',
  '/blog/where-generative-ai-pays-off',
  '/blog/unknown-article',
  '/contact',
  '/privacy',
  '/terms',
  '/completely/unknown',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* ------------------------------------------------------------------ */
/* Static server for dist/ (SPA fallback)                             */
/* ------------------------------------------------------------------ */
function startServer() {
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent((req.url || '/').split('?')[0]);
    let filePath = path.join(ROOT, url);
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403).end();
      return;
    }
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      const asIndex = path.join(filePath, 'index.html');
      filePath = fs.existsSync(asIndex) ? asIndex : path.join(ROOT, 'index.html');
    }
    const body = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
    res.end(body);
  });
  return new Promise((resolve) => server.listen(PORT, '127.0.0.1', () => resolve(server)));
}

/* ------------------------------------------------------------------ */
/* Minimal CDP client                                                  */
/* ------------------------------------------------------------------ */
class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.listeners = new Map();
    ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(`${msg.error.message} (${JSON.stringify(msg.error.data ?? '')})`));
        else resolve(msg.result);
        return;
      }
      const key = msg.sessionId ? `${msg.sessionId}:${msg.method}` : msg.method;
      (this.listeners.get(key) || []).forEach((fn) => fn(msg.params));
    });
  }

  static async connect(url) {
    const ws = new WebSocket(url);
    await new Promise((resolve, reject) => {
      ws.addEventListener('open', resolve, { once: true });
      ws.addEventListener('error', reject, { once: true });
    });
    return new Cdp(ws);
  }

  send(method, params = {}, sessionId) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
    });
  }

  on(method, fn, sessionId) {
    const key = sessionId ? `${sessionId}:${method}` : method;
    if (!this.listeners.has(key)) this.listeners.set(key, []);
    this.listeners.get(key).push(fn);
  }

  once(method, sessionId, timeout = 15000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`timeout waiting for ${method}`)), timeout);
      this.on(method, (params) => {
        clearTimeout(timer);
        resolve(params);
      }, sessionId);
    });
  }
}

/* ------------------------------------------------------------------ */
/* In-page probe                                                       */
/* ------------------------------------------------------------------ */
const PROBE = `(() => {
  const vw = document.documentElement.clientWidth;
  const describe = (el) => {
    const id = el.id ? '#' + el.id : '';
    const cls = typeof el.className === 'string' && el.className.trim()
      ? '.' + el.className.trim().split(/\\s+/).slice(0, 3).join('.')
      : '';
    const text = (el.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 40);
    return el.tagName.toLowerCase() + id + cls + (text ? ' «' + text + '»' : '');
  };
  const clippingAncestor = (el) => {
    let node = el.parentElement;
    while (node && node !== document.body) {
      const style = getComputedStyle(node);
      if (/hidden|clip|auto|scroll/.test(style.overflowX)) return describe(node);
      node = node.parentElement;
    }
    return null;
  };
  const offenders = [];
  const smallTargets = [];
  for (const el of document.body.querySelectorAll('*')) {
    const style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') continue;
    const rect = el.getBoundingClientRect();
    if (!rect.width && !rect.height) continue;
    const overRight = rect.right - vw;
    const overLeft = -rect.left;
    if (overRight > 1 || overLeft > 1) {
      const containedBy = clippingAncestor(el);
      offenders.push({
        el: describe(el),
        over: Math.round(Math.max(overRight, overLeft)),
        side: overRight > overLeft ? 'right' : 'left',
        contained: containedBy || null,
      });
    }
    const tag = el.tagName;
    const interactive = tag === 'A' || tag === 'BUTTON' || el.getAttribute('role') === 'button';
    // WCAG 2.5.8 exempts links that sit inline within a sentence, so only
    // flag elements that are not plain inline text.
    const plainInline = style.display === 'inline';
    if (interactive && !plainInline && rect.height > 0 && rect.height < 32 && el.offsetParent !== null) {
      smallTargets.push({ el: describe(el), h: Math.round(rect.height) });
    }
  }
  return JSON.stringify({
    vw,
    docScrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    offenders: offenders.slice(0, 25),
    offenderCount: offenders.length,
    uncontained: offenders.filter((o) => !o.contained).length,
    smallTargets: smallTargets.slice(0, 10),
  });
})()`;

/* ------------------------------------------------------------------ */
/* Runner                                                              */
/* ------------------------------------------------------------------ */
async function main() {
  if (!fs.existsSync(path.join(ROOT, 'index.html'))) {
    console.error('dist/index.html not found — run `npm run build` first.');
    process.exit(1);
  }
  const chromePath = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
  if (!chromePath) {
    console.error('No Chrome/Edge binary found.');
    process.exit(1);
  }

  const server = await startServer();
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'responsive-audit-'));
  const chrome = spawn(
    chromePath,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-extensions',
      '--hide-scrollbars',
      '--remote-debugging-port=0',
      `--user-data-dir=${userDataDir}`,
      'about:blank',
    ],
    { stdio: 'ignore' },
  );

  const cleanup = () => {
    try { chrome.kill(); } catch {}
    try { server.close(); } catch {}
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch {}
  };
  process.on('exit', cleanup);

  // Wait for the DevTools port
  const portFile = path.join(userDataDir, 'DevToolsActivePort');
  let port = null;
  for (let i = 0; i < 100 && !port; i++) {
    await sleep(100);
    if (fs.existsSync(portFile)) {
      const [first] = fs.readFileSync(portFile, 'utf8').split('\n');
      if (first && Number(first) > 0) port = Number(first);
    }
  }
  if (!port) {
    console.error('Chrome did not expose a DevTools port.');
    process.exit(1);
  }

  const version = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json();
  const cdp = await Cdp.connect(version.webSocketDebuggerUrl);
  const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });

  await cdp.send('Page.enable', {}, sessionId);
  await cdp.send('Runtime.enable', {}, sessionId);

  const problems = [];
  const small = [];
  let checks = 0;

  for (const width of WIDTHS) {
    const touch = width <= 1024;
    await cdp.send('Emulation.setTouchEmulationEnabled', { enabled: touch, maxTouchPoints: touch ? 5 : 1 }, sessionId);
    await cdp.send(
      'Emulation.setDeviceMetricsOverride',
      { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 },
      sessionId,
    );

    for (const route of ROUTES) {
      const load = cdp.once('Page.loadEventFired', sessionId, 20000);
      await cdp.send('Page.navigate', { url: `http://127.0.0.1:${PORT}${route}` }, sessionId);
      try {
        await load;
      } catch {
        /* fall through — still probe */
      }
      await sleep(260);

      const result = await cdp.send(
        'Runtime.evaluate',
        { expression: PROBE, returnByValue: true },
        sessionId,
      );
      checks += 1;
      const data = JSON.parse(result.result.value);
      const pageOverflow = data.docScrollWidth > data.vw + 1;
      if (pageOverflow || data.uncontained > 0) {
        problems.push({ width, route, ...data });
      }
      if (touch && data.smallTargets.length) {
        small.push({ width, route, targets: data.smallTargets });
      }
    }
    process.stdout.write(`  ${width}px done\n`);
  }

  console.log('');
  if (problems.length === 0) {
    console.log(`No horizontal overflow at any width. ${checks} route/width combinations checked.`);
  } else {
    console.log(`${problems.length} of ${checks} route/width combinations have overflow:\n`);
    for (const p of problems) {
      console.log(`  ${p.route} @ ${p.width}px  (scrollWidth ${p.docScrollWidth} vs ${p.vw}, uncontained ${p.uncontained})`);
      p.offenders
        .filter((o) => !o.contained)
        .slice(0, 6)
        .forEach((o) => console.log(`      +${o.over}px ${o.side}  ${o.el}`));
    }
  }

  if (small.length) {
    console.log(`\nTap targets under 32px tall (informational, ${small.length} route/width combos):`);
    for (const s of small.slice(0, 8)) {
      console.log(`  ${s.route} @ ${s.width}px  ${s.targets.map((t) => `${t.el} (${t.h}px)`).join(', ')}`);
    }
  } else {
    console.log('\nAll interactive elements are at least 32px tall at every width.');
  }

  cleanup();
  process.exit(problems.length === 0 ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
