import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GoogleGenAI } from '@google/genai';
import { DITTO_KNOWLEDGE } from './dittoKnowledge.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

for (const name of ['.env.example', '.env.local', '.env']) {
  const file = path.join(root, name);
  if (!fs.existsSync(file)) continue;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (match) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, '');
    }
  }
}

const PORT = Number(process.env.DITTO_API_PORT || 8787);
const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbx2WMWDwEwuWDh8jCsOiYpGemlD2n0R_kALTXctNU6NTs1_5Fk0lWxWeTaEjxE29Hu_/exec';
const APPS_SCRIPT_SECRET = process.env.APPS_SCRIPT_SECRET || 'DTI_tech';

const GROQ_API_KEY = process.env.GROQ_API_KEY || (process.env.AI_API_KEY?.startsWith('gsk_') ? process.env.AI_API_KEY : '');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || (!process.env.AI_API_KEY?.startsWith('gsk_') ? process.env.AI_API_KEY : '') || '';

let AI_MODEL = process.env.AI_MODEL || (GROQ_API_KEY ? 'openai/gpt-oss-120b' : 'gemini-2.0-flash');
if (AI_MODEL === 'gemini-3.8-flash' || AI_MODEL === 'llama-3.3-70b-versatile') {
  AI_MODEL = GROQ_API_KEY ? 'openai/gpt-oss-120b' : 'gemini-2.0-flash';
}

const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY = 12;
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 20;

const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const entry = hits.get(ip) || { count: 0, reset: now + RATE_WINDOW_MS };
  if (now > entry.reset) {
    entry.count = 0;
    entry.reset = now + RATE_WINDOW_MS;
  }
  entry.count += 1;
  hits.set(ip, entry);
  return entry.count > RATE_LIMIT;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      if (data.length > 64 * 1024) reject(new Error('too large'));
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

function validateMessages(messages) {
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_HISTORY) {
    return 'Invalid conversation history.';
  }
  for (const message of messages) {
    if (
      !message ||
      typeof message !== 'object' ||
      !['user', 'assistant'].includes(message.role) ||
      typeof message.content !== 'string' ||
      message.content.trim().length === 0 ||
      message.content.length > MAX_MESSAGE_LENGTH
    ) {
      return 'Invalid message format or length.';
    }
  }
  return null;
}

function send(res, status, payload) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
}

function getFallbackResponse(messages = []) {
  const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
  const text = lastUserMsg.toLowerCase().trim();

  if (/service|offer|what do you do|build|capability|solution/i.test(text)) {
    return (
      "DTI Technologies offers 9 core digital solutions:\n\n" +
      "• Generative AI & Machine Learning\n" +
      "• Cybersecurity Solutions\n" +
      "• Data Engineering & Analytics\n" +
      "• Application Development\n" +
      "• Web Applications\n" +
      "• Data Management\n" +
      "• IT Consulting & Strategy\n" +
      "• Technology Outsourcing\n" +
      "• System Maintenance & Support\n\n" +
      "Explore details on our /services page!"
    );
  }

  if (/about|who are you|dti|ditto|company|tagline|values/i.test(text)) {
    return (
      "Hi, I'm Ditto 👋 — the AI assistant for DTI Technologies!\n\n" +
      "DTI Technologies (Design. Think. Innovate) creates intelligent, secure, and scalable software & AI solutions. " +
      "We focus on engineering discipline, security by design, and transparent collaboration.\n\n" +
      "Learn more on our /about page!"
    );
  }

  if (/portfolio|project|work|case stud/i.test(text)) {
    return (
      "Our portfolio is currently being prepared. Approved client projects and case studies will be published soon!\n\n" +
      "Visit /portfolio to check for updates."
    );
  }

  if (/contact|email|phone|call|location|address|reach|touch|whatsapp/i.test(text)) {
    return (
      "You can reach DTI Technologies at:\n\n" +
      "• Email: dtitechnologiespvtltd@gmail.com\n" +
      "• Phone / WhatsApp: +91 70134 94877\n" +
      "• Location: Kadapa, Andhra Pradesh, India\n\n" +
      "Or visit our /contact page to send us a direct message!"
    );
  }

  if (/career|job|hire|hiring|join|work with us|opportunity/i.test(text)) {
    return (
      "DTI Technologies will soon open exciting career opportunities across AI, cybersecurity, data engineering, and software development.\n\n" +
      "Check out /careers for updates!"
    );
  }

  if (/blog|article|insight|news/i.test(text)) {
    return (
      "Our blog shares insights on Generative AI, cybersecurity foundations, data engineering, and modern software development.\n\n" +
      "Read our articles on /blog!"
    );
  }

  if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/i.test(text)) {
    return "Hello! 👋 I'm Ditto, the AI assistant for DTI Technologies. How can I help you today?";
  }

  return (
    "Thanks for chatting! I'm Ditto, DTI Technologies' AI assistant.\n\n" +
    "DTI Technologies designs and builds intelligent, secure, and scalable digital solutions (AI, Data, Security, Software, Consulting).\n\n" +
    "Feel free to explore our /services page or reach out to our team at dtitechnologiespvtltd@gmail.com or +91 70134 94877 (/contact)."
  );
}

async function generateGroqContent(apiKey, model, userMessages) {
  const messages = [
    { role: 'system', content: DITTO_KNOWLEDGE },
    ...userMessages.map((m) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: m.content,
    })),
  ];

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: model || 'openai/gpt-oss-120b',
      messages,
      temperature: 0.4,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Groq API returned ${response.status}: ${errText}`);
  }

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content?.trim();
  if (!reply) throw new Error('Empty response from Groq API');
  return reply;
}

const ai = GEMINI_API_KEY ? new GoogleGenAI({ apiKey: GEMINI_API_KEY }) : null;

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'POST' || !['/api/ditto', '/api/chat', '/api/contact'].includes(req.url)) {
    send(res, 404, { error: 'Not found' });
    return;
  }

  const ip = req.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    send(res, 429, { error: 'Too many requests. Please wait a moment.' });
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(await readBody(req));
  } catch {
    send(res, 400, { error: 'Invalid request body.' });
    return;
  }

  if (req.url === '/api/contact') {
    const v = parsed || {};
    const emailOk = typeof v.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email);
    if (
      typeof v.name !== 'string' || v.name.trim().length < 2 ||
      !emailOk ||
      typeof v.service !== 'string' || !v.service.trim() ||
      typeof v.message !== 'string' || v.message.trim().length < 20
    ) {
      send(res, 400, { error: 'Please check the required fields.' });
      return;
    }
    const fields = ['name', 'company', 'email', 'phone', 'service', 'subject', 'message', 'preferredContact'];
    for (const key of fields) {
      if (v[key] !== undefined && (typeof v[key] !== 'string' || v[key].length > 2000)) {
        send(res, 400, { error: 'Invalid field value.' });
        return;
      }
    }
    try {
      const upstream = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ secret: APPS_SCRIPT_SECRET, ...v }),
      });
      const result = await upstream.json().catch(() => null);
      if (!upstream.ok || !result?.ok) {
        send(res, 502, { error: result?.error || 'Submission failed. Please try again.' });
        return;
      }
      send(res, 200, { ok: true });
    } catch {
      send(res, 502, { error: 'Submission failed. Please try again.' });
    }
    return;
  }

  const problem = validateMessages(parsed?.messages);
  if (problem) {
    send(res, 400, { error: problem });
    return;
  }

  // 1. Try Groq API if Groq key is present
  if (GROQ_API_KEY) {
    try {
      const reply = await generateGroqContent(GROQ_API_KEY, AI_MODEL, parsed.messages);
      send(res, 200, { reply });
      return;
    } catch (err) {
      console.warn(`[ditto-api] Groq API call failed (${err?.message || err}). Falling back.`);
    }
  }

  // 2. Try Gemini API if Gemini key is present
  if (ai) {
    try {
      const contents = parsed.messages.map((message) => ({
        role: message.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: message.content }],
      }));

      const response = await ai.models.generateContent({
        model: AI_MODEL.includes('gemini') ? AI_MODEL : 'gemini-2.0-flash',
        contents,
        config: {
          systemInstruction: DITTO_KNOWLEDGE,
          temperature: 0.4,
          maxOutputTokens: 500,
        },
      });

      const reply = response?.text?.trim();
      if (reply) {
        send(res, 200, { reply });
        return;
      }
    } catch (err) {
      console.warn(`[ditto-api] Gemini API call failed (${err?.message || err}). Falling back.`);
    }
  }

  // 3. Fallback to smart local responses
  const reply = getFallbackResponse(parsed.messages);
  send(res, 200, { reply });
});

server.listen(PORT, () => {
  console.log(`Ditto API listening on http://localhost:${PORT}`);
});
