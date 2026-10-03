import { spawn } from 'node:child_process';

console.log('Starting Ditto API server & Vite dev server...');

const api = spawn('node', ['server/ditto-api.mjs'], { stdio: 'inherit', shell: true });
const vite = spawn('npx', ['vite'], { stdio: 'inherit', shell: true });

function cleanup() {
  try { api.kill(); } catch {}
  try { vite.kill(); } catch {}
  process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', cleanup);
