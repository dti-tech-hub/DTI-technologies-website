import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { spawn } from 'node:child_process';
import http from 'node:http';

function dittoApiPlugin() {
  let apiProcess = null;

  return {
    name: 'ditto-api-runner',
    configureServer(server) {
      const checkReq = http.get('http://localhost:8787/api/ditto', () => {
        // Server is already running
      });

      checkReq.on('error', () => {
        console.log('\n[ditto-api] Starting Ditto API backend server on http://localhost:8787...');
        apiProcess = spawn('node', ['server/ditto-api.mjs'], {
          stdio: 'inherit',
          shell: true,
        });
      });

      const cleanup = () => {
        if (apiProcess) {
          try {
            apiProcess.kill();
          } catch {}
          apiProcess = null;
        }
      };

      server.httpServer?.on('close', cleanup);
      process.on('exit', cleanup);
      process.on('SIGINT', cleanup);
      process.on('SIGTERM', cleanup);
    },
    configurePreviewServer() {
      const checkReq = http.get('http://localhost:8787/api/ditto', () => {
        // Server is already running
      });

      checkReq.on('error', () => {
        console.log('\n[ditto-api] Starting Ditto API backend server for preview on http://localhost:8787...');
        apiProcess = spawn('node', ['server/ditto-api.mjs'], {
          stdio: 'inherit',
          shell: true,
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), dittoApiPlugin()],
  build: {
    target: 'es2019',
    sourcemap: false,
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8787',
    },
  },
  preview: {
    proxy: {
      '/api': 'http://localhost:8787',
    },
  },
});
