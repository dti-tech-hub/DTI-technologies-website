import { useEffect } from 'react';

/** Locks body scrolling while `active` is true, tolerating stacked locks. */
export function useBodyScrollLock(active, className = 'nav-open') {
  useEffect(() => {
    if (!active) return undefined;
    const body = document.body;
    const previous = body.classList.contains(className);
    body.classList.add(className);
    return () => {
      if (!previous) body.classList.remove(className);
    };
  }, [active, className]);
}
