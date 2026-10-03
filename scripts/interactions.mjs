/**
 * UI interaction smoke tests against the production bundle.
 * Boots the built site inside happy-dom and exercises the key user flows:
 * navigation, services dropdown, mobile menu, filters, search, forms.
 *
 * Usage: npm test  (runs the build first)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Window } from 'happy-dom';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = path.join(root, 'dist', 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('dist/index.html not found — run `npm run build` first.');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const bundleMatch = html.match(/src="(\/assets\/[^"]+\.js)"/);
if (!bundleMatch) {
  console.error('Could not locate the JS bundle in dist/index.html.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Environment setup
// ---------------------------------------------------------------------------
const window = new Window({ url: 'http://localhost/' });
const { document } = window;
document.body.innerHTML = '<div id="root"></div>';

const exposed = [
  'window', 'document', 'navigator', 'location', 'history', 'getComputedStyle',
  'requestAnimationFrame', 'cancelAnimationFrame', 'matchMedia', 'MutationObserver',
  'Event', 'CustomEvent', 'MouseEvent', 'KeyboardEvent', 'FocusEvent',
  'HTMLElement', 'HTMLInputElement', 'HTMLTextAreaElement', 'HTMLSelectElement',
  'HTMLButtonElement', 'HTMLAnchorElement', 'HTMLFormElement', 'HTMLDivElement',
  'Element', 'Node', 'SVGElement', 'DocumentFragment', 'localStorage', 'sessionStorage',
];

const skipped = [];
for (const name of exposed) {
  if (!(name in window) || typeof window[name] === 'undefined') continue;
  try {
    Object.defineProperty(globalThis, name, {
      value: window[name],
      configurable: true,
      writable: true,
    });
  } catch {
    skipped.push(name);
  }
}
if (skipped.length) console.log(`note: could not override globals: ${skipped.join(', ')}`);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const text = (selector) => $(selector)?.textContent ?? '';
const byText = (selector, needle) =>
  $$(selector).find((element) => (element.textContent || '').includes(needle));

const click = (element, label = 'target') => {
  if (!element) {
    failed += 1;
    console.log(`  FAIL ${label} — element not found`);
    return false;
  }
  element.dispatchEvent(
    new window.MouseEvent('click', { bubbles: true, cancelable: true, view: window }),
  );
  return true;
};

function setValue(element, value) {
  const proto = element instanceof window.HTMLTextAreaElement
    ? window.HTMLTextAreaElement.prototype
    : window.HTMLInputElement.prototype;
  const setter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;
  if (setter) setter.call(element, value);
  else element.value = value;
  element.dispatchEvent(new window.Event('input', { bubbles: true }));
}

function setSelect(element, value) {
  const setter = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value')?.set;
  if (setter) setter.call(element, value);
  else element.value = value;
  element.dispatchEvent(new window.Event('change', { bubbles: true }));
}

function submit(form) {
  form.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
}

const currentPath = () => window.location.pathname;
const openModal = () => $('.modal-backdrop .modal');

let passed = 0;
let failed = 0;

function check(condition, label) {
  if (condition) {
    passed += 1;
    console.log(`  ok   ${label}`);
  } else {
    failed += 1;
    console.log(`  FAIL ${label}`);
  }
}

function section(name) {
  console.log(`\n${name}`);
}

async function waitFor(predicate, timeout = 3000, step = 40) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (predicate()) return true;
    await sleep(step);
  }
  return predicate();
}

// ---------------------------------------------------------------------------
// Boot the app
// ---------------------------------------------------------------------------
await import(pathToFileURL(path.join(root, 'dist', bundleMatch[1].replace(/^\//, ''))).href);

const booted = await waitFor(() => $('#root')?.children.length > 0, 5000);
if (!booted) {
  console.error('App did not mount.');
  process.exit(1);
}
await sleep(150);

// ---------------------------------------------------------------------------
section('Navbar & routing');
check(
  (text('h1') || '').includes('Technology That Moves Your Business Forward'),
  'home hero headline renders',
);
check($$('.nav-menu > li').length === 7, 'desktop nav has 7 items');

const dropdownTrigger = $('button.dropdown-trigger');
click(dropdownTrigger, 'services dropdown trigger');
await sleep(200);
check(dropdownTrigger.getAttribute('aria-expanded') === 'true', 'services dropdown opens (aria-expanded)');
check($('.nav-dropdown').classList.contains('is-open'), 'dropdown panel marked open');
check($$('#services-dropdown a').length === 11, 'dropdown lists 10 services + overview link');

const genAiLink = $$('#services-dropdown a').find((a) => a.getAttribute('href') === '/services/generative-ai');
click(genAiLink, 'dropdown service link');
await sleep(250);
check(currentPath() === '/services/generative-ai', 'dropdown link navigates to service page');
check(
  (text('h1') || '').includes('Build Intelligent Systems'),
  'service detail headline renders',
);
check($('.breadcrumbs') !== null, 'breadcrumbs render on service page');

click($$('.nav-menu a').find((a) => (a.textContent || '').trim() === 'Home'), 'nav Home link');
await sleep(250);
check(currentPath() === '/', 'navbar Home link returns home');

// ---------------------------------------------------------------------------
section('Careers — coming soon message and links');
click($$('.nav-menu a').find((a) => (a.textContent || '').trim() === 'Careers'), 'nav Careers link');
await sleep(250);
check(currentPath() === '/careers', 'careers route reachable from navbar');
check((text('h1') || '').includes('Build the future with us'), 'careers headline renders');
check(byText('h2', 'Career opportunities are coming soon.') !== undefined, 'coming soon message renders');
check(byText('button, a', 'Talk to Our Team') !== undefined || byText('a', 'Talk to Our Team') !== undefined, 'talk to team CTA renders');
check(byText('a', 'Contact Us') !== undefined, 'contact us CTA renders');
await sleep(300);

// ---------------------------------------------------------------------------
section('Blog — coming soon message and CTA');
click($$('.nav-menu a').find((a) => (a.textContent || '').trim() === 'Blog'), 'nav Blog link');
await sleep(250);
check(currentPath() === '/blog', 'blog route reachable');
check((text('h1') || '').includes('coming soon'), 'blog coming soon headline renders');
check(byText('h2', 'Our insights are coming soon.') !== undefined, 'blog coming soon message renders');
check(byText('a', 'Talk to Our Team') !== undefined, 'blog CTA renders');
await sleep(300);

// ---------------------------------------------------------------------------
section('Portfolio — loading, filters, detail modal');
click($$('.nav-menu a').find((a) => (a.textContent || '').trim() === 'Portfolio'), 'nav Portfolio link');
await sleep(250);
check(currentPath() === '/portfolio', 'portfolio route reachable');
await sleep(700);
check($$('article.portfolio-item').length === 6, 'six portfolio items listed');

click(byText('.filter-chip', 'AI'), 'AI category chip');
await sleep(200);
check($$('article.portfolio-item').length === 2, 'portfolio category filter works');
check(byText('.filter-chip', 'AI').getAttribute('aria-pressed') === 'true', 'active filter is aria-pressed');
click(byText('.filter-chip', 'All'), 'All category chip');
await sleep(200);

click($$('article.portfolio-item button').find((b) => b.getAttribute('aria-label') === 'View details for Customer Self-Service Portal'), 'portfolio view details button');
await sleep(200);
check(openModal() !== null, 'portfolio details dialog opens');
check(byText('.modal', 'Outcome') !== undefined, 'dialog shows outcome section');
check(byText('.modal', 'placeholder content') !== undefined, 'dialog marks placeholder content');
click($('.modal__close'), 'portfolio modal close button');
await sleep(200);
check(openModal() === null, 'portfolio dialog closes');

// ---------------------------------------------------------------------------
section('Contact — validation & success state');
click($$('.nav-menu a').find((a) => (a.textContent || '').trim() === 'Contact'), 'nav Contact link');
await sleep(250);
check(currentPath() === '/contact', 'contact route reachable');
check((text('h1') || '').includes("Let's build something valuable"), 'contact headline renders');

const contactForm = $('#contact-form form');
submit(contactForm);
await sleep(200);
check($$('#contact-form .field__error').length >= 4, 'empty submit shows required-field errors');

setValue($('#contact-name'), 'Alex Morgan');
setValue($('#contact-email'), 'not-an-email');
setValue($('#contact-message'), 'Too short');
submit(contactForm);
await sleep(200);
check(byText('#contact-form .field__error', 'Enter a valid email address') !== undefined, 'invalid email rejected');
check(byText('#contact-form .field__error', 'at least 20 characters') !== undefined, 'short message rejected');

window.fetch = async (url, options) => {
  if (String(url).includes('/api/contact')) {
    return { ok: true, status: 200, json: async () => ({ ok: true }) };
  }
  throw new Error('network disabled in tests');
};

setValue($('#contact-email'), 'alex.morgan@example.com');
setSelect($('#contact-service'), $$('#contact-service option')[1].textContent);
setValue($('#contact-message'), 'We are planning a data platform modernisation and would like to discuss scope.');
await sleep(100);
submit(contactForm);
const successShown = await waitFor(
  () => byText('#contact-form', 'Your inquiry has been received') !== undefined,
  5000,
);
check(successShown, 'valid submit shows success state');

if (successShown) {
  click(byText('#contact-form button', 'Send another message'), 'send another message button');
  await sleep(200);
  check($('#contact-form form') !== null, 'form resets for a new message');
}

// ---------------------------------------------------------------------------
section('Newsletter — validation & success');
const newsletterForm = $('#footer-newsletter-email').closest('form');
setValue($('#footer-newsletter-email'), 'invalid');
click(newsletterForm.querySelector('button[type="submit"]'), 'newsletter submit (invalid)');
await sleep(200);
check(byText('#footer-newsletter-error', 'Enter a valid email address') !== undefined, 'invalid newsletter email rejected');

setValue($('#footer-newsletter-email'), 'reader@example.com');
click(newsletterForm.querySelector('button[type="submit"]'), 'newsletter submit (valid)');
const newsletterOk = await waitFor(
  () => byText('.footer', 'You’re subscribed') !== undefined,
  4000,
);
check(newsletterOk, 'valid newsletter subscribe shows success');

// ---------------------------------------------------------------------------
section('Mobile navigation');
const toggle = $('.nav-toggle');
click(toggle, 'mobile menu toggle');
await sleep(200);
check(toggle.getAttribute('aria-expanded') === 'true', 'mobile menu opens');
check($('.mobile-nav').classList.contains('is-open'), 'mobile panel marked open');
check($('.mobile-nav').getAttribute('aria-hidden') === 'false', 'open mobile menu exposed to assistive tech');
check($$('.mobile-nav__list > li').length === 7, 'mobile menu lists 7 primary items');

const mobileServices = byText('.mobile-nav__list button', 'Services');
click(mobileServices, 'mobile services accordion');
await sleep(200);
check(mobileServices.getAttribute('aria-expanded') === 'true', 'mobile services submenu expands');
check($('#mobile-services-submenu').classList.contains('is-open'), 'submenu marked open');

click(
  $$('#mobile-services-submenu a').find((a) => a.getAttribute('href') === '/services/data-engineering'),
  'mobile submenu service link',
);
await sleep(300);
check(currentPath() === '/services/data-engineering', 'mobile submenu link navigates');
check(!$('.mobile-nav').classList.contains('is-open'), 'mobile menu closes after navigation');
check($('.mobile-nav').getAttribute('aria-hidden') === 'true', 'closed mobile menu hidden from assistive tech');

// ---------------------------------------------------------------------------
section('Footer & misc');
click(byText('.footer__bottom-links a', 'Privacy Policy'), 'footer privacy link');
await sleep(250);
check(currentPath() === '/privacy', 'footer privacy link works');
check((text('h1') || '').includes('Privacy Policy'), 'privacy page headline');
check($('a[href="#overview"]') !== null, 'privacy table of contents renders');

click(byText('.footer__links a', 'Careers'), 'footer careers link');
await sleep(250);
check(currentPath() === '/careers', 'footer careers link works');

check($('.ditto-launcher') !== null, 'Ditto launcher exists');
check($('.skip-link') !== null, 'skip link exists');
check($$('main h1').length === 1, 'exactly one h1 in main content');

console.log(`\n${passed}/${passed + failed} interaction checks passed`);
process.exit(failed > 0 ? 1 : 0);
