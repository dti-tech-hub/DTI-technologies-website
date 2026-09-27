/**
 * Frontend-only submission simulation.
 * Phase 1 performs no network calls and stores nothing (MASTER_README section 55).
 */
export function simulateSubmit({ delay = 1200, fail = false } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail || (typeof navigator !== 'undefined' && navigator.onLine === false)) {
        reject(new Error('network'));
        return;
      }
      resolve({ ok: true });
    }, delay);
  });
}
