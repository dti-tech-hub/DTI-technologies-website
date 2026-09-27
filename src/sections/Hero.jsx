import Button from '../components/Button.jsx';
import Enter from '../components/Enter.jsx';
import { capabilityStrip } from '../data/site.js';
import heroVisual from '../assets/hero.jpeg';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="atmosphere" aria-hidden="true">
        <span className="atmosphere__blob atmosphere__blob--primary" style={{ top: '-10%', right: '-8%' }} />
        <span className="atmosphere__blob atmosphere__blob--accent" style={{ bottom: '-14%', left: '-6%' }} />
        <span className="atmosphere__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <Enter as="span" className="eyebrow" delay={120} style={{ width: 'fit-content' }}>
            Technology • Innovation • Transformation
          </Enter>

          <Enter as="h1" id="hero-heading" className="hero__title" delay={240}>
            Technology That Moves Your <span className="text-gradient">Business Forward.</span>
          </Enter>

          <Enter as="p" className="lead" delay={380}>
            We help businesses build secure, scalable, and intelligent digital solutions that turn ideas
            into measurable business value. From data and AI to software and cybersecurity, we create
            technology designed for long-term growth.
          </Enter>

          <Enter className="hero__actions" delay={520}>
            <Button to="/services" size="lg" arrow>
              Explore Our Services
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Talk to Our Team
            </Button>
          </Enter>

          <Enter className="hero__strip" delay={660} style={{ width: '100%' }}>
            <div className="marquee" aria-label="Core capabilities">
              <div className="marquee__track">
                {[0, 1].map((copy) => (
                  <div className="marquee__item" key={copy} aria-hidden={copy === 1}>
                    {capabilityStrip.map((item) => (
                      <span key={`${copy}-${item}`}>
                        {item}
                        <span className="marquee__dot">•</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Enter>
        </div>

        <div className="hero__visual">
          <span className="hero__figure">
            <img src={heroVisual} alt="" width="1290" height="860" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}
