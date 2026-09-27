import Seo from '../components/Seo.jsx';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you are looking for does not exist." path="/404" />
      <section className="not-found">
        <div className="container" style={{ display: 'grid', justifyItems: 'center', gap: '1rem' }}>
          <p className="not-found__code" aria-hidden="true">
            404
          </p>
          <h1>Page not found.</h1>
          <p className="lead" style={{ maxWidth: '480px' }}>
            The page you are looking for may have moved, or the address may be incorrect.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.75rem' }}>
            <Button to="/" arrow>
              Back to home
            </Button>
            <Button to="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
