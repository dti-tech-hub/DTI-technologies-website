import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function PortfolioCard({ item, index = 0, onOpen }) {
  return (
    <Reveal delay={index * 80} style={{ height: '100%' }}>
      <article className="portfolio-item" style={{ height: '100%' }}>
        <div className="portfolio-item__visual">
          <div className="portfolio-picture-layer portfolio-picture-layer--back" />
          <div className="portfolio-picture-layer portfolio-picture-layer--front">
            {item.image ? (
              <img src={item.image} alt={item.title} className="portfolio-picture__img" />
            ) : (
              <div className="portfolio-picture__empty">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="portfolio-picture__text">Add Picture Here</span>
              </div>
            )}
          </div>
        </div>

        <div className="portfolio-item__info">
          <div className="portfolio-item__badges">
            <span className="badge badge--accent">{item.category}</span>
            {item.isPlaceholder ? <span className="badge badge--demo" style={{ marginLeft: '0.4rem' }}>Placeholder</span> : null}
          </div>
          <h3 className="portfolio-item__title">{item.title}</h3>
          <p className="portfolio-item__desc">{item.description}</p>
          <button
            type="button"
            className="link-arrow portfolio-item__btn"
            onClick={() => onOpen(item)}
            aria-label={`View details for ${item.title}`}
          >
            View details
            <Icon name="arrow-right" size={16} />
          </button>
        </div>
      </article>
    </Reveal>
  );
}

