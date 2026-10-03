import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import { benefits, careersIntro, hiringAreas } from '../data/careers.js';

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers"
        description="Build the future with us — career opportunities at DTI Technologies are coming soon."
        path="/careers"
      />

      <section className="page-hero" aria-labelledby="careers-heading">
        <div className="atmosphere" aria-hidden="true">
          <span className="atmosphere__blob atmosphere__blob--accent" style={{ top: '-30%', left: '10%' }} />
          <span className="atmosphere__grid" />
        </div>
        <div className="container page-hero__content">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Careers' }]} />
          <span className="eyebrow">Careers</span>
          <h1 id="careers-heading">{careersIntro.headline}</h1>
          <p className="lead">{careersIntro.support}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="opportunities-heading">
        <div className="container">
          <Reveal>
            <div className="card" style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
              <span className="value-card__glyph" style={{ margin: '0 auto 1.25rem' }}>
                <Icon name="compass" size={21} />
              </span>
              <h2 id="opportunities-heading" className="card__title">
                Career opportunities are coming soon.
              </h2>
              <p className="card__text" style={{ maxWidth: '40rem', margin: '0 auto 1rem' }}>
                We're growing our team and preparing opportunities across technology, AI,
                cybersecurity, data, software, and digital transformation. Stay tuned for
                upcoming openings — and feel free to reach out if you'd like to be part of
                DTI Technologies.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  margin: '1.5rem 0',
                }}
              >
                {hiringAreas.map((area) => (
                  <span key={area} className="badge">
                    {area}
                  </span>
                ))}
              </div>
              <div className="cta-band__actions" style={{ justifyContent: 'center' }}>
                <Button to="/contact" size="lg" arrow>
                  Talk to Our Team
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="benefits-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Benefits"
            title="What we offer the people who build with us."
            description="Draft benefits copy — final offering to be confirmed by the company."
            id="benefits-heading"
            align="center"
          />
          <div className="benefits-grid">
            {benefits.map((benefit) => (
              <div key={benefit.title} style={{ height: '100%' }}>
                <article className="card card--hover value-card" style={{ height: '100%' }}>
                  <span className="value-card__glyph">
                    <Icon name={benefit.icon} size={21} />
                  </span>
                  <h3 className="card__title" style={{ fontSize: '1.08rem' }}>
                    {benefit.title}
                  </h3>
                  <p className="card__text">{benefit.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
