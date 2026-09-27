import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumbs">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              {item.to && !isLast ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              )}
              {!isLast ? (
                <Icon name="chevron-right" size={13} className="breadcrumbs__sep" aria-hidden="true" />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
