import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';

export default function BlogPreview() {
  return (
    <section className="section section--tight" aria-labelledby="blog-preview-heading">
      <div className="container">
        <Reveal>
          <div className="cta-band blog-preview-banner">
            <div className="cta-band__inner">
              <span className="eyebrow">Ideas, insights &amp; technology</span>
              <h2 id="blog-preview-heading">Thinking out loud about the work we do.</h2>
              <p className="lead">
                Practical perspectives on AI, security, data, software, and digital transformation.
              </p>
              <div className="cta-band__actions">
                <Button to="/blog" variant="secondary" size="lg" arrow>
                  Read the blog
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
