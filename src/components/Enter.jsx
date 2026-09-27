import { useEffect, useState } from 'react';

/**
 * Entrance animation on mount (hero, page headers).
 * Starts hidden, flips visible on the next frames so CSS transitions play.
 * Respects prefers-reduced-motion through the shared `.reveal` rules.
 */
export default function Enter({
  as: Tag = 'div',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    let frame2;
    const frame1 = requestAnimationFrame(() => {
      frame2 = requestAnimationFrame(() => setOn(true));
    });
    return () => {
      cancelAnimationFrame(frame1);
      if (frame2) cancelAnimationFrame(frame2);
    };
  }, []);

  const classes = ['reveal', on ? 'is-visible' : '', className].filter(Boolean).join(' ');
  const mergedStyle = { ...style, '--reveal-delay': `${delay}ms` };

  return (
    <Tag className={classes} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}
