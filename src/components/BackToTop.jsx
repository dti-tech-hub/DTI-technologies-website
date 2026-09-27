import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo?.({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    document.querySelector('#main-content')?.focus?.();
  };

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`.trim()}
      onClick={handleClick}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="arrow-up" size={20} />
    </button>
  );
}
