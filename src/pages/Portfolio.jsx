import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Button from '../components/Button.jsx';
import CtaBand from '../components/CtaBand.jsx';

const focusAreas = [
  { icon: 'brain', label: 'AI' },
  { icon: 'shield', label: 'Cybersecurity' },
  { icon: 'database', label: 'Data' },
  { icon: 'code', label: 'Software' },
  { icon: 'sparkles', label: 'Digital Transformation' },
];

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio"
        description="Our portfolio is coming soon — a collection of projects across AI, cybersecurity, data, software, and digital transformation."
        path="/portfolio"
      />

      <section className="page-hero" aria-labelledby="portfolio-heading">
        <div className="atmosphere" aria-hidden="true">
          <span className="atmosphere__blob atmosphere__blob--primary" style={{ top: '-25%', right: '-8%' }} />
          <span className="atmosphere__grid" />
        </div>
        <div className="container page-hero__content">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]} />
          <span className="eyebrow">Our work</span>
          
          
        </div>
      </section>

      <section className="section" aria-label="Portfolio coming soon">
        <div className="container">
          <div className="coming-soon">
            <div className="coming-soon__glow" aria-hidden="true" />
            <span className="coming-soon__badge">
              <span className="coming-soon__pulse" aria-hidden="true" />
              Stay tuned
            </span>
            <h2 className="coming-soon__title">Our portfolio is coming soon.</h2>
            <p className="coming-soon__text">
              We’re preparing a collection of projects that showcase our work across AI, cybersecurity,
              data, software, and digital transformation. Stay tuned — exciting work is on the way.
            </p>
            <ul className="coming-soon__areas">
              {focusAreas.map((area) => (
                <li key={area.label} className="coming-soon__chip">
                  <Icon name={area.icon} size={16} />
                  {area.label}
                </li>
              ))}
            </ul>
            <div className="coming-soon__actions">
              <Button to="/contact" variant="primary" arrow>
                Start a conversation
              </Button>
              <Button to="/services" variant="secondary">
                Explore our services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            eyebrow="Your project"
            title="Want your challenge to be the next case study?"
            text="Tell us what you are trying to build or improve — we will help you scope a sensible first step."
            secondary={{ label: 'Read the blog', to: '/blog' }}
          />
        </div>
      </section>
    </>
  );
}
