import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { services } from '../data/services.js';
import { serviceGroups } from '../data/navigation.js';

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Nine service areas: generative AI, cyber security, data engineering, application development, data management, IT consulting, outsourcing, maintenance, and other digital services."
        path="/services"
      />

      <section className="page-hero" aria-labelledby="services-page-heading">
        <div className="atmosphere" aria-hidden="true">
          <span className="atmosphere__blob atmosphere__blob--primary" style={{ top: '-25%', left: '-5%' }} />
          <span className="atmosphere__grid" />
        </div>
        <div className="container page-hero__content">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
          <span className="eyebrow">What we do</span>
          <h1 id="services-page-heading">Technology services across the full delivery lifecycle.</h1>
          <p className="lead">
            From intelligent systems and secure applications to data platforms and long-term support —
            explore the capability areas we work in.
          </p>
          <div className="page-hero__actions">
            <Button to="/contact" size="lg" arrow>
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="service-catalogue-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Service catalogue"
            title="Nine ways we help businesses move forward."
            description="Each service can stand alone or combine into a broader engagement — shaped around your goals."
            id="service-catalogue-heading"
            align="center"
          />

          <div className="grid grid--3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="grouped-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Browse by focus"
            title="Organised the way challenges arise."
            description="Grouped by the kind of problem you are trying to solve."
            id="grouped-heading"
            align="center"
          />

          <div className="grid grid--3">
            {serviceGroups.map((group, index) => (
              <Reveal key={group.id} delay={index * 80} style={{ height: '100%' }}>
                <article className="card card--hover" style={{ height: '100%' }}>
                  <span className="badge badge--accent" style={{ alignSelf: 'flex-start' }}>
                    {group.label}
                  </span>
                  <ul className="footer__links" style={{ marginTop: '0.5rem' }}>
                    {group.items.map((item) => (
                      <li key={item.slug}>
                        <Link to={`/services/${item.slug}`} className="link-arrow" style={{ padding: '0.35rem 0' }}>
                          <Icon name={item.icon} size={16} />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            eyebrow="Not sure where to start?"
            title="Let’s find the right first step together."
            text="Describe the challenge — we will point you to the capability area that fits best, with no obligation."
            secondary={{ label: 'See our portfolio', to: '/portfolio' }}
          />
        </div>
      </section>
    </>
  );
}
