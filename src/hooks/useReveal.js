import { useEffect, useRef, useState } from 'react';

/**
 * Adds an `is-visible` class to the element once it scrolls into view.
 * Falls back to visible when IntersectionObserver is unavailable.
 */
export function useReveal({ threshold = 0.08, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}
