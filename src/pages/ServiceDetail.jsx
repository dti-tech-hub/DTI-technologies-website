import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CtaBand from '../components/CtaBand.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { getServiceBySlug, services } from '../data/services.js';

function ServiceHero({ service }) {
  return (
    <section className="page-hero" aria-labelledby="service-heading">
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
        <span className="eyebrow">Service {service.number} • {service.group}</span>
        <h1 id="service-heading">{service.headline}</h1>
        <p className="lead">{service.summary}</p>
        <div className="page-hero__actions">
          <Button to="/contact" size="lg" arrow>
            Discuss this service
          </Button>
          <Button to="/services" variant="secondary" size="lg">
            All services
          </Button>
        </div>
      </div>
    </section>
  );
}

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

      <ServiceHero service={service} />

      <section className="section" aria-labelledby="capabilities-heading">
        <div className="container split">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Capabilities"
              title="What this service covers."
              description={`Core capability areas included in ${service.title.toLowerCase()}.`}
              id="capabilities-heading"
            />
            <div className="grid grid--2">
              {service.capabilities.map((capability, index) => (
                <Reveal key={capability} delay={index * 60} className="reveal--fade">
                  <article className="card card--hover capability-card">
                    <span className="capability-card__bullet">
                      <Icon name="check" size={18} />
                    </span>
                    <h3 className="card__title" style={{ fontSize: '1.05rem' }}>
                      {capability}
                    </h3>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal variant="right">
            <aside className="service-hero-aside">
              <span className="eyebrow">Our approach</span>
              <h2>How we deliver {service.navLabel.toLowerCase()}.</h2>
              <ul>
                {service.approach.map((step) => (
                  <li key={step.title}>
                    <Icon name="check-circle" size={17} />
                    <span>
                      <strong style={{ color: 'var(--text-primary)' }}>{step.title}</strong> — {step.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Button to="/contact" arrow style={{ marginTop: '0.5rem', justifySelf: 'start' }}>
                Start a conversation
              </Button>
            </aside>
          </Reveal>
        </div>
      </section>

      {service.note ? (
        <section className="section section--tight" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="notice">
                <Icon name="info" size={18} className="notice__icon" />
                <span>{service.note}</span>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="section section--secondary" aria-labelledby="related-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Keep exploring"
            title="Related services."
            description="Other capability areas that often complement this engagement."
            id="related-heading"
            align="center"
          />
          <div className="related-grid">
            {related.map((item, index) => (
              <ServiceCard key={item.slug} service={item} index={index} compact />
            ))}
          </div>
          <div style={{ display: 'grid', justifyItems: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="link-arrow">
              View the full service catalogue
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            eyebrow="Next step"
            title="Ready to explore this for your business?"
            text="Share your goals and constraints — we will help you understand what a sensible first step looks like."
            secondary={{ label: 'Back to services', to: '/services' }}
          />
        </div>
      </section>
    </>
  );
}
