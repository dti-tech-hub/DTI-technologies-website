import { useReveal } from '../hooks/useReveal.js';

/**
 * Scroll-reveal wrapper. Renders a semantic element with a staggered
 * fade/slide entrance that respects prefers-reduced-motion (via CSS).
 */
export default function Reveal({
  as: Tag = 'div',
  variant = '',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, visible] = useReveal();

  const classes = ['reveal', variant ? `reveal--${variant}` : '', visible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ');

  const mergedStyle = { ...style, '--reveal-delay': `${delay}ms` };

  return (
    <Tag ref={ref} className={classes} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}
