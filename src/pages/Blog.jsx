import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';

const TOPICS = ['AI', 'Cybersecurity', 'Data', 'Software', 'Digital Transformation'];

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog"
        description="Ideas, insights, and technology — coming soon from DTI Technologies."
        path="/blog"
      />

      <section className="page-hero" aria-labelledby="blog-heading">
        <div className="atmosphere" aria-hidden="true">
          <span className="atmosphere__blob atmosphere__blob--primary" style={{ top: '-25%', left: '-5%' }} />
          <span className="atmosphere__grid" />
        </div>
        <div className="container page-hero__content">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />
          <span className="eyebrow">Blog &amp; Insights</span>
          <h1 id="blog-heading">Ideas, insights, and technology — coming soon.</h1>
          <p className="lead">
            We're preparing practical insights and perspectives from the world of AI, cybersecurity,
            data, software engineering, and digital transformation.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="insights-heading">
        <div className="container">
          <Reveal>
            <div className="card" style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
              <span className="value-card__glyph" style={{ margin: '0 auto 1.25rem' }}>
                <Icon name="book" size={21} />
              </span>
              <h2 id="insights-heading" className="card__title">
                Our insights are coming soon.
              </h2>
              <p className="card__text" style={{ maxWidth: '40rem', margin: '0 auto 1rem' }}>
                Our first articles will be published soon. Stay connected with DTI Technologies as
                we share ideas, lessons, and practical perspectives on building technology that
                delivers.
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
                {TOPICS.map((topic) => (
                  <span key={topic} className="badge">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="cta-band__actions" style={{ justifyContent: 'center' }}>
                <Button to="/contact" size="lg" arrow>
                  Talk to Our Team
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
