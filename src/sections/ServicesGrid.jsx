import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { useSwipeRail } from '../hooks/useSwipeRail.js';
import { services } from '../data/services.js';
import servicesImage from '../assets/services.png';

// Pixels per second. The rail holds two identical card sets, so any offset
// within one set width looks continuous and the loop point is invisible.
const RAIL_SPEED = 40;

// Pixels of pointer travel before a press counts as a drag rather than a tap.
// Below this the card links stay clickable.
const DRAG_THRESHOLD = 5;

// Display titles for all 9 DTI Technologies services
const SERVICE_TITLES = {
  'generative-ai': 'Generative AI',
  'cyber-security': 'Cyber Security',
  'data-engineering': 'Data Engineering',
  'application-development': 'Application Development',
  'data-management': 'Data Management',
  'it-consulting': 'IT Consulting Services',
  outsourcing: 'Outsourcing Services',
  maintenance: 'Maintenance Services',
  'other-services': 'Other Services',
};

function ServiceCard({ service, isClone }) {
  return (
    /* The clone is rendered as a direct flex child of the track (see below)
       and hidden from assistive tech; its links are skipped in the tab order. */
    <div className="services-slider-scroll__slide" aria-hidden={isClone || undefined}>
      <div className="service-glass-card service-card--white">
        <div className="service-glass-card__head">
          <div className="service-glass-card__icon">
            <Icon name={service.icon} size={22} />
          </div>
          <span className="service-glass-card__index" aria-hidden="true">
            {service.number}
          </span>
        </div>

        <h3 className="service-glass-card__name">
          {SERVICE_TITLES[service.slug] || service.navLabel || service.title}
        </h3>

        <p className="service-glass-card__text">{service.cardText}</p>

        <div className="service-glass-card__footer">
          <Link
            to={`/services/${service.slug}`}
            className="service-glass-card__btn"
            tabIndex={isClone ? -1 : undefined}
          >
            More Details
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  const { railRef, trackRef } = useSwipeRail({
    speed: RAIL_SPEED,
    dragThreshold: DRAG_THRESHOLD,
    copies: 2,
  });

  return (
    <section className="section section--secondary services" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services__header">
          <Reveal className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2 id="services-heading">Services built around real technology challenges.</h2>
            <p className="section-heading__desc">
              Intelligent systems, secure applications, modern data platforms, and long-term technology support — delivered by
              engineers who care about outcomes.
            </p>
          </Reveal>
          <Reveal delay={80} className="services__header-image">
            <img src={servicesImage} alt="Our services" loading="lazy" />
          </Reveal>
        </div>
      </div>

      <Reveal delay={80} className="services-carousel-wrapper">
        <div className="container">
          <div
            className="services-slider-scroll"
            role="group"
            aria-label="Services offered"
            ref={railRef}
          >
            {/* Two identical copies so any one-set-wide offset loops without a
                seam. The clones are siblings, not nested in a wrapper element —
                a wrapper would make them stack vertically and stretch the track
                to the combined height of both sets. */}
            <div className="services-slider-scroll__track" ref={trackRef}>
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
              {services.map((service) => (
                <ServiceCard key={`clone-${service.slug}`} service={service} isClone />
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <div className="container">
        <Reveal delay={120} className="services__cta">
          <Button to="/services" variant="secondary" arrow>
            View all services
          </Button>
        </Reveal>
      </div>
    </section>
  );
}