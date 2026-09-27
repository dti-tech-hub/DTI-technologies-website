import { createServer } from 'vite';

// React router uses useLayoutEffect internally; its SSR warning is expected
// noise from this client-rendered app and would drown the real results.
const originalError = console.error;
console.error = (...args) => {
  const message = String(args[0] ?? '');
  if (message.includes('useLayoutEffect does nothing on the server')) return;
  originalError(...args);
};

const routes = [
  '/',
  '/about',
  '/services',
  '/services/generative-ai',
  '/services/cyber-security',
  '/services/data-engineering',
  '/services/application-development',
  '/services/data-management',
  '/services/it-consulting',
  '/services/outsourcing',
  '/services/maintenance',
  '/services/other-services',
  '/services/does-not-exist',
  '/portfolio',
  '/careers',
  '/blog',
  '/blog/where-generative-ai-pays-off',
  '/blog/security-foundations-product-teams-own',
  '/blog/treating-data-as-a-product',
  '/blog/build-or-buy-without-regret',
  '/blog/practical-cloud-cost-awareness',
  '/blog/modernising-without-stopping-the-business',
  '/blog/unknown-article',
  '/contact',
  '/privacy',
  '/terms',
  '/completely/unknown',
];

const validTargets = new Set([
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/careers',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  '/services/generative-ai',
  '/services/cyber-security',
  '/services/data-engineering',
  '/services/application-development',
  '/services/data-management',
  '/services/it-consulting',
  '/services/outsourcing',
  '/services/maintenance',
  '/services/other-services',
  '/blog/where-generative-ai-pays-off',
  '/blog/security-foundations-product-teams-own',
  '/blog/treating-data-as-a-product',
  '/blog/build-or-buy-without-regret',
  '/blog/practical-cloud-cost-awareness',
  '/blog/modernising-without-stopping-the-business',
]);

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

let failures = 0;
let routeFailures = 0;
const brokenLinks = new Set();

try {
  const { renderRoute } = await vite.ssrLoadModule('/src/smoke.jsx');

  for (const route of routes) {
    try {
      const html = renderRoute(route);
      const h1Count = (html.match(/<h1[\s>]/g) || []).length;
      const problems = [];

      if (html.length < 1500) problems.push(`suspiciously short output (${html.length} chars)`);
      if (!html.includes('Skip to main content')) problems.push('missing skip link / layout');
      if (!html.includes('<main')) problems.push('missing <main>');
      if (h1Count !== 1) problems.push(`expected exactly one <h1>, found ${h1Count}`);
      if (html.includes('undefined</')) problems.push('renders literal "undefined"');

      const links = [...html.matchAll(/href="(\/[^"]*)"/g)].map((match) => match[1]);
      for (const link of links) {
        const path = link.split('#')[0].split('?')[0];
        if (path && !validTargets.has(path)) brokenLinks.add(`${route} -> ${link}`);
      }

      if (problems.length) {
        failures += 1;
        routeFailures += 1;
        console.log(`FAIL ${route}\n     - ${problems.join('\n     - ')}`);
      } else {
        console.log(`ok   ${route} (${html.length} chars, h1=${h1Count}, links=${links.length})`);
      }
    } catch (error) {
      failures += 1;
      routeFailures += 1;
      console.log(`FAIL ${route}\n     - ${error.message}`);
    }
  }
} catch (error) {
  failures += 1;
  console.log(`FAIL bootstrapping smoke test: ${error.stack}`);
} finally {
  await vite.close();
}

if (brokenLinks.size) {
  failures += brokenLinks.size;
  console.log('\nBroken internal links:');
  for (const link of brokenLinks) console.log(`  - ${link}`);
} else {
  console.log('\nNo broken internal links found.');
}

console.log(`${routes.length - routeFailures}/${routes.length} routes passed`);
process.exit(failures > 0 ? 1 : 0);
