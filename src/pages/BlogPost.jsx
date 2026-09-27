import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import { blogArticles, getArticleBySlug } from '../data/blog.js';

function renderBlock(block, index) {
  if (block.type === 'h2') {
    return <h2 key={index}>{block.text}</h2>;
  }
  if (block.type === 'ul') {
    return (
      <ul key={index}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p key={index}>{block.text}</p>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <>
        <Seo title="Article not found" description="The requested article could not be found." path="/blog" />
        <section className="article-page">
          <div className="container">
            <div className="state-block">
              <span className="state-block__icon">
                <Icon name="alert" size={26} />
              </span>
              <h1 className="state-block__title">Article not found.</h1>
              <p className="state-block__text">
                The article you are looking for does not exist or may have moved.
              </p>
              <Button to="/blog" arrow>
                Back to the blog
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  const dateLabel = new Date(`${article.date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const sorted = [...blogArticles].sort((a, b) => (a.date < b.date ? 1 : -1));
  const index = sorted.findIndex((item) => item.slug === article.slug);
  const previous = sorted[index + 1] ?? null;
  const next = sorted[index - 1] ?? null;

  return (
    <>
      <Seo
        title={article.title}
        description={article.excerpt}
        path={`/blog/${article.slug}`}
        type="article"
      />

      <article className="article-page">
        <div className="container">
          <header className="article-page__header">
            <Breadcrumbs
              items={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: article.title }]}
            />
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span className="badge badge--accent">{article.category}</span>
              {article.isDemo ? <span className="badge badge--demo">Demo content</span> : null}
            </div>
            <h1>{article.title}</h1>
            <div className="article-card__meta">
              <span>{dateLabel}</span>
              <span aria-hidden="true">•</span>
              <span>{article.readingTime}</span>
            </div>
            <p className="lead">{article.excerpt}</p>
          </header>

          <div className="article-page__content">{article.content.map(renderBlock)}</div>

          <div className="article-page__footer">
            <div className="filters" aria-label="Tags">
              {article.tags.map((tag) => (
                <span key={tag} className="badge">
                  #{tag}
                </span>
              ))}
            </div>
            <Link to="/blog" className="link-arrow">
              <Icon name="arrow-right" size={16} style={{ transform: 'rotate(180deg)' }} />
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <section className="section section--tight">
        <div className="container">
          <div className="grid grid--2">
            <Reveal>
              {previous ? (
                <Link
                  to={`/blog/${previous.slug}`}
                  className="card card--hover"
                  aria-label={`Previous article: ${previous.title}`}
                >
                  <span className="badge" style={{ alignSelf: 'flex-start' }}>
                    Previous
                  </span>
                  <h3 className="card__title" style={{ fontSize: '1.1rem' }}>
                    {previous.title}
                  </h3>
                </Link>
              ) : (
                <div className="card">
                  <span className="badge">Previous</span>
                  <p className="card__text">You are reading the earliest article.</p>
                </div>
              )}
            </Reveal>
            <Reveal delay={90}>
              {next ? (
                <Link
                  to={`/blog/${next.slug}`}
                  className="card card--hover"
                  aria-label={`Next article: ${next.title}`}
                  style={{ textAlign: 'right' }}
                >
                  <span className="badge" style={{ alignSelf: 'flex-end' }}>
                    Next
                  </span>
                  <h3 className="card__title" style={{ fontSize: '1.1rem' }}>
                    {next.title}
                  </h3>
                </Link>
              ) : (
                <div className="card" style={{ textAlign: 'right' }}>
                  <span className="badge" style={{ alignSelf: 'flex-end' }}>
                    Next
                  </span>
                  <p className="card__text">You are reading the latest article.</p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
