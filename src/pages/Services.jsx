import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import { services } from '../data/services.js';
import servicesImage from '../assets/services.png';

const LIFECYCLE = ['AI', 'Data', 'Software', 'Security', 'Consulting', 'Operations'];

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Technology built around your business — AI, data, software, security, consulting, and operations."
        path="/services"
      />

      <section className="contact-hero" aria-labelledby="services-page-heading">
        <div className="container contact-hero__inner">
          <div className="contact-hero__content">
            <Reveal variant="left">
              <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
              <span className="eyebrow">Our Services</span>
              <h1 id="services-page-heading">Technology built around your business.</h1>
              <p className="lead">
                From AI and data to software, security, and consulting, we provide practical
                technology capabilities designed around real business needs.
              </p>
              <div className="contact-hero__actions">
                <Button to="/contact" arrow>
                  Talk to Our Team
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="contact-hero__visual">
            <Reveal variant="right">
              <figure className="contact-hero__figure">
                <img
                  src={servicesImage}
                  alt="DTI Technologies services"
                  loading="eager"
                  decoding="async"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="what-we-do-heading">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: '44rem', marginBottom: '2rem' }}>
              <span className="eyebrow">What we do</span>
              <h2 id="what-we-do-heading">Technology capabilities that move businesses forward.</h2>
              <p className="lead" style={{ fontSize: '1.05rem' }}>
                Each capability can stand alone or combine into a broader engagement — shaped
                around your goals, your constraints, and the outcomes that matter.
              </p>
            </div>
          </Reveal>

          <div className="grid grid--3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint section--tight" aria-labelledby="lifecycle-heading">
        <div className="container">
          <Reveal>
            <h2 id="lifecycle-heading" className="section-title--compact" style={{ textAlign: 'center' }}>
              Built across the technology lifecycle.
            </h2>
            <div className="lifecycle-strip">
              {LIFECYCLE.map((stage, index) => (
                <span key={stage} className="lifecycle-strip__item">
                  <span className="lifecycle-strip__dot" aria-hidden="true" />
                  {stage}
                  {index < LIFECYCLE.length - 1 ? (
                    <Icon name="chevron-right" size={15} aria-hidden="true" />
                  ) : null}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="services-cta-heading">
        <div className="container">
          <div className="cta-band cta-band--compact">
            <div className="cta-band__inner">
              <span className="eyebrow">Next step</span>
              <h2 id="services-cta-heading">Have a technology challenge?</h2>
              <p className="lead">
                Let&apos;s discuss how DTI Technologies can help you turn it into a practical
                solution.
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
    </>
  );
}
