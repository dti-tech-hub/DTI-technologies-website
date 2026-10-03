import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { getServiceBySlug, services } from '../data/services.js';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <>
        <Seo title="Service not found" description="The requested service page could not be found." path="/services" />
        <section className="section" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)' }}>
          <div className="container">
            <div className="state-block">
              <span className="state-block__icon">
                <Icon name="alert" size={26} />
              </span>
              <h1 className="state-block__title">Service not found.</h1>
              <p className="state-block__text">
                The service you are looking for does not exist or may have moved.
              </p>
              <Button to="/services" arrow>
                Browse all services
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={service.meta.title}
        description={service.meta.description}
        path={`/services/${service.slug}`}
      />

      <section className="page-hero page-hero--compact" aria-labelledby="service-heading">
        <div className="atmosphere" aria-hidden="true">
          <span className="atmosphere__blob atmosphere__blob--primary" style={{ top: '-20%', right: '-10%' }} />
          <span className="atmosphere__grid" />
        </div>
        <div className="container page-hero__content">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: service.navLabel },
            ]}
          />
          <span className="eyebrow">
            Service {service.number} • {service.group}
          </span>
          <h1 id="service-heading">{service.headline}</h1>
          <p className="lead">{service.summary}</p>
          <div className="page-hero__actions">
            <Button to="/contact" arrow>
              Start a conversation
            </Button>
            <Button to="/services" variant="secondary">
              All services
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="capabilities-heading">
        <div className="container">
          <Reveal>
            <h2 id="capabilities-heading" className="section-title--compact">
              What this service covers.
            </h2>
          </Reveal>
          <div className="grid grid--3 capability-grid">
            {service.capabilities.map((capability, index) => (
              <Reveal key={capability} delay={index * 50} className="reveal--fade">
                <article className="card card--hover capability-chip">
                  <span className="capability-chip__icon" aria-hidden="true">
                    <Icon name="check-circle" size={18} />
                  </span>
                  <h3 className="capability-chip__title">{capability}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint section--tight" aria-labelledby="approach-heading">
        <div className="container">
          <Reveal>
            <h2 id="approach-heading" className="section-title--compact">
              Our approach.
            </h2>
          </Reveal>
          <div className="approach-track">
            {service.approach.map((step, index) => (
              <Reveal key={step.title} delay={index * 60} className="reveal--fade">
                <div className="approach-step">
                  <span className="approach-step__num">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="approach-step__title">{step.title}</h3>
                  <p className="approach-step__text">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {service.note ? (
        <section className="section section--snug">
          <div className="container">
            <div className="notice">
              <Icon name="info" size={18} className="notice__icon" />
              <span>{service.note}</span>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--tight" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-band cta-band--compact">
            <div className="cta-band__inner">
              <span className="eyebrow">Next step</span>
              <h2 id="cta-heading">Let&apos;s build something valuable.</h2>
              <p className="lead">
                Share your goals and constraints — we will help you understand what a sensible first
                step looks like.
              </p>
              <div className="cta-band__actions">
                <Button to="/contact" arrow>
                  Start a conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--secondary section--tight" aria-labelledby="related-heading">
        <div className="container">
          <h2 id="related-heading" className="section-title--compact">
            Related services.
          </h2>
          <div className="related-grid">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="card card--hover related-card"
              >
                <h3 className="related-card__title">{item.navLabel}</h3>
                <p className="card__text">{item.cardText}</p>
                <span className="card__footer">
                  <span className="link-arrow">
                    Explore service
                    <Icon name="arrow-right" size={15} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.75rem' }}>
            <Link to="/services" className="link-arrow">
              View the full service catalogue
              <Icon name="arrow-right" size={16} />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
