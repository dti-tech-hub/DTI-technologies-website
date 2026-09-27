import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';

export default function HomeDualCta() {
  return (
    <section className="section section--tight home-dual-section" aria-label="Insights and contact">
      <div className="container">
        <div className="home-dual-grid">
          {/* Card 1: Ideas, Insights & Technology */}
          <Reveal variant="left" style={{ height: '100%' }}>
            <div className="home-dual-card">
              <span className="badge badge--cobalt">Ideas, insights &amp; technology</span>
              <h2 className="home-dual-card__title">Thinking out loud about the work we do.</h2>
              <p className="home-dual-card__text">
                Practical perspectives on AI, security, data, software, and digital transformation.
              </p>
              <div className="home-dual-card__actions">
                <Button to="/blog" variant="primary" arrow>
                  Read the blog
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Let's talk */}
          <Reveal variant="right" style={{ height: '100%' }}>
            <div className="home-dual-card">
              <span className="badge badge--cobalt">Let’s talk</span>
              <h2 className="home-dual-card__title">Have a Challenge Worth Solving?</h2>
              <p className="home-dual-card__text">
                Tell us what you're trying to build, improve, or transform. Let's explore what technology can do for your business.
              </p>
              <div className="home-dual-card__actions">
                <Button to="/contact" variant="primary" arrow>
                  Talk to Our Team
                </Button>
                <Button to="/services" variant="secondary">
                  Explore Our Services
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
