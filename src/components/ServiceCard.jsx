import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

/** Card for a single service — used on home, services index and dropdowns. */
export default function ServiceCard({ service, index = 0, compact = false }) {
  return (
    <Reveal delay={index * 70}>
      <Link
        to={`/services/${service.slug}`}
        className="card card--hover card--interactive"
        style={{ height: '100%' }}
        aria-label={`${service.title} — view service details`}
      >
        <span className="service-card__number" aria-hidden="true">
          {service.number}
        </span>
        <span className="card__icon">
          <Icon name={service.icon} size={24} />
        </span>
        <h3 className="card__title">{service.navLabel}</h3>
        <p className="card__text">{service.cardText}</p>
        {!compact ? (
          <ul className="card__meta" aria-label={`Key capabilities of ${service.navLabel}`}>
            {service.capabilities.slice(0, 3).map((capability) => (
              <li key={capability}>
                <span className="badge">{capability}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <span className="card__footer">
          <span className="link-arrow">
            Explore service
            <Icon name="arrow-right" size={16} />
          </span>
        </span>
      </Link>
    </Reveal>
  );
}
