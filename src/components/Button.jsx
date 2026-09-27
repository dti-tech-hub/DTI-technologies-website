import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

/**
 * Unified button/link component.
 * `to` renders an internal router Link, `href` renders an anchor,
 * otherwise it renders a <button>.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = '',
  arrow = false,
  loading = false,
  disabled = false,
  className = '',
  icon,
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size ? `btn--${size}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {loading ? <span className="btn__spinner" aria-hidden="true" /> : null}
      {!loading && icon ? <Icon name={icon} size={18} /> : null}
      <span>{children}</span>
      {arrow && !loading ? <Icon name="arrow-right" size={17} className="btn__arrow" /> : null}
    </>
  );

  if (to && !disabled && !loading) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href && !disabled && !loading) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} disabled={disabled || loading} {...rest}>
      {content}
    </button>
  );
}
