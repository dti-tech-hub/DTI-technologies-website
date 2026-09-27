import { useEffect, useState } from 'react';

/**
 * Simulates a short content-loading phase so list views can demonstrate a
 * proper loading state (frontend-only, no API involved).
 */
export function useSimulatedLoad(delay = 450, key = '') {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay, key]);

  return loading;
}
