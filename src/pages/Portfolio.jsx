import { useMemo, useState } from 'react';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Button from '../components/Button.jsx';
import FilterTabs from '../components/FilterTabs.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import PortfolioModal from '../components/PortfolioModal.jsx';
import { EmptyState, LoadingState } from '../components/States.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { portfolioCategories, portfolioItems } from '../data/portfolio.js';
import { useSimulatedLoad } from '../hooks/useSimulatedLoad.js';

export default function Portfolio() {
  const [category, setCategory] = useState('All');
  const [activeItem, setActiveItem] = useState(null);
  const loading = useSimulatedLoad(450, 'portfolio');

  const filtered = useMemo(() => {
    if (category === 'All') return portfolioItems;
    return portfolioItems.filter((item) => item.category === category);
  }, [category]);

  return (
    <>
      <Seo
        title="Portfolio"
        description="Selected software, digital solutions, and services — the work showcase of our technology teams."
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
          <h1 id="portfolio-heading">The work we’re proud to put our name on.</h1>
          <p className="lead">
            Genuine software, digital solutions, and services delivered for organisations — presented
            as case studies once approved for publication.
          </p>
          <div className="page-hero__actions">
            <Button to="/contact" size="lg" arrow>
              Start a conversation
            </Button>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Portfolio listing">
        <div className="container">
          <div className="notice" style={{ marginBottom: '2rem' }}>
            <Icon name="info" size={18} className="notice__icon" />
            <span>
              Real portfolio items have not been supplied yet. The entries below are clearly marked
              placeholders that demonstrate the layout, filtering, and detail experience.
            </span>
          </div>

          <div className="toolbar">
            <FilterTabs
              label="Filter portfolio by category"
              options={portfolioCategories}
              value={category}
              onChange={setCategory}
              idPrefix="portfolio-filter"
            />
            <p className="toolbar__count" role="status" aria-live="polite">
              {loading
                ? 'Loading portfolio…'
                : `${filtered.length} ${filtered.length === 1 ? 'item' : 'items'}`}
            </p>
          </div>

          {loading ? (
            <LoadingState label="Loading portfolio items…" />
          ) : filtered.length === 0 ? (
            <EmptyState
              icon="inbox"
              title="No portfolio items in this category."
              text="Nothing has been published here yet. Try another category."
              action={
                <Button variant="secondary" size="sm" onClick={() => setCategory('All')}>
                  Show all categories
                </Button>
              }
            />
          ) : (
            <div className="grid grid--3">
              {filtered.map((item, index) => (
                <PortfolioCard key={item.id} item={item} index={index} onOpen={setActiveItem} />
              ))}
            </div>
          )}
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

      <PortfolioModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  );
}
