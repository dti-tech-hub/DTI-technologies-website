const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbx2WMWDwEwuWDh8jCsOiYpGemlD2n0R_kALTXctNU6NTs1_5Fk0lWxWeTaEjxE29Hu_/exec';
const APPS_SCRIPT_SECRET = process.env.APPS_SCRIPT_SECRET || 'DTI_tech';

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

  const v = req.body || {};
  try {
    const upstream = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ secret: APPS_SCRIPT_SECRET, ...v }),
    });
    const result = await upstream.json().catch(() => null);
    if (!upstream.ok || !result?.ok) {
      return res.status(502).json({ error: result?.error || 'Submission failed. Please try again.' });
    }
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Submission failed. Please try again.' });
  }
}
