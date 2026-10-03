import { DITTO_KNOWLEDGE } from '../server/dittoKnowledge.js';

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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY || (process.env.AI_API_KEY?.startsWith('gsk_') ? process.env.AI_API_KEY : '');
  const AI_MODEL = process.env.AI_MODEL || (GROQ_API_KEY ? 'openai/gpt-oss-120b' : 'gemini-2.0-flash');

  const { messages } = req.body || {};

  if (GROQ_API_KEY) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: AI_MODEL,
          messages: [
            { role: 'system', content: DITTO_KNOWLEDGE },
            ...(messages || []).map((m) => ({
              role: m.role === 'assistant' ? 'assistant' : 'user',
              content: m.content,
            })),
          ],
          temperature: 0.4,
          max_tokens: 500,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content?.trim();
        if (reply) {
          return res.status(200).json({ reply });
        }
      }
    } catch (err) {
      console.warn('Groq API error on Vercel:', err);
    }
  }

  const reply = getFallbackResponse(messages);
  return res.status(200).json({ reply });
}
