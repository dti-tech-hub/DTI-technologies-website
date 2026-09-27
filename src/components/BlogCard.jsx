import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

export default function BlogCard({ article, index = 0 }) {
  const dateLabel = new Date(`${article.date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Reveal delay={index * 80} style={{ height: '100%' }}>
      <article className="card card--hover article-card" style={{ height: '100%' }}>
        <div className="article-card__media">
          <span className="badge badge--accent article-card__category">{article.category}</span>
          <Icon name="book" size={30} className="article-card__glyph" />
        </div>
        <div className="article-card__body">
          <div className="article-card__meta">
            <span>{dateLabel}</span>
            <span aria-hidden="true">•</span>
            <span>{article.readingTime}</span>
            {article.isDemo ? <span className="badge badge--demo">Demo</span> : null}
          </div>
          <h3 className="article-card__title">
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
          <p className="card__text">{article.excerpt}</p>
          <div className="article-card__tags" aria-label="Tags">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
