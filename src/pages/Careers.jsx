import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { benefits, careersIntro } from '../data/careers.js';

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers"
        description="Build what's next with us — explore open roles, benefits, and the application experience."
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

      <section className="section" aria-label="Open roles">
        <div className="container">
          <div className="notice" style={{ marginBottom: '2rem' }}>
            <Icon name="info" size={18} className="notice__icon" />
            <span>
              No career opportunities are available today. They will be uploaded in the future.
            </span>
          </div>
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
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 70} style={{ height: '100%' }}>
                <article className="card card--hover value-card" style={{ height: '100%' }}>
                  <span className="value-card__glyph">
                    <Icon name={benefit.icon} size={21} />
                  </span>
                  <h3 className="card__title" style={{ fontSize: '1.08rem' }}>
                    {benefit.title}
                  </h3>
                  <p className="card__text">{benefit.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
