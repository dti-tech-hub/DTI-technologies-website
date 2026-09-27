import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import FilterTabs from '../components/FilterTabs.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { EmptyState, LoadingState } from '../components/States.jsx';
import { SearchInput } from '../components/Fields.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { blogArticles, blogCategories } from '../data/blog.js';
import { useSimulatedLoad } from '../hooks/useSimulatedLoad.js';

const PAGE_SIZE = 3;

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [tag, setTag] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loading = useSimulatedLoad(450, 'blog');

  const allTags = useMemo(
    () => Array.from(new Set(blogArticles.flatMap((article) => article.tags))).sort(),
    [],
  );

  const featured = blogArticles.find((article) => article.featured) ?? blogArticles[0];
  const showFeatured = category === 'All' && !query.trim() && !tag;

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return blogArticles
      .filter((article) => (showFeatured ? article.slug !== featured.slug : true))
      .filter((article) => (category === 'All' ? true : article.category === category))
      .filter((article) => (tag ? article.tags.includes(tag) : true))
      .filter((article) => {
        if (!needle) return true;
        const haystack = [article.title, article.excerpt, article.category, ...article.tags]
          .join(' ')
          .toLowerCase();
        return haystack.includes(needle);
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [query, category, tag, featured.slug, showFeatured]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const resetFilters = () => {
    setQuery('');
    setCategory('All');
    setTag(null);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      <Seo
        title="Blog"
        description="Ideas, insights and technology — practical perspectives on AI, cyber security, data, software engineering, cloud, and digital transformation."
        path="/blog"
      />

      <section className="page-hero" aria-labelledby="blog-heading">
        <div className="atmosphere" aria-hidden="true">
          <span className="atmosphere__blob atmosphere__blob--primary" style={{ top: '-25%', left: '-5%' }} />
          <span className="atmosphere__grid" />
        </div>
        <div className="container page-hero__content">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />
          <span className="eyebrow">Ideas, insights &amp; technology</span>
          <h1 id="blog-heading">Thinking worth sharing.</h1>
          <p className="lead">
            Practical perspectives on the technologies shaping modern businesses — written for
            decision-makers and builders alike.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Articles">
        <div className="container">
          <div className="notice" style={{ marginBottom: '2rem' }}>
            <Icon name="info" size={18} className="notice__icon" />
            <span>
              Phase 1 uses demo articles to demonstrate the blog experience. Real articles will replace
              them once supplied and approved.
            </span>
          </div>

          {loading ? (
            <>
              <div className="toolbar">
                <div className="toolbar__search">
                  <SearchInput id="blog-search" label="Search articles" value="" onChange={() => {}} placeholder="Search articles…" />
                </div>
              </div>
              <LoadingState label="Loading articles…" />
            </>
          ) : (
            <>
              {showFeatured && featured ? (
                <article className="card featured-article">
                  <div className="featured-article__media">
                    <span className="featured-article__glyph">
                      <Icon name="book" size={44} strokeWidth={1.4} />
                    </span>
                  </div>
                  <div className="featured-article__body">
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <span className="badge badge--accent">Featured</span>
                      <span className="badge">{featured.category}</span>
                      {featured.isDemo ? <span className="badge badge--demo">Demo</span> : null}
                    </div>
                    <h2 className="featured-article__title">
                      <Link to={`/blog/${featured.slug}`} className="link-arrow" style={{ color: 'inherit' }}>
                        {featured.title}
                      </Link>
                    </h2>
                    <p className="card__text">{featured.excerpt}</p>
                    <div className="article-card__meta">
                      <span>{new Date(`${featured.date}T00:00:00`).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}</span>
                      <span aria-hidden="true">•</span>
                      <span>{featured.readingTime}</span>
                    </div>
                  </div>
                </article>
              ) : null}

              <div className="toolbar">
                <div className="toolbar__search">
                  <SearchInput
                    id="blog-search"
                    label="Search articles"
                    value={query}
                    onChange={(value) => {
                      setQuery(value);
                      setVisibleCount(PAGE_SIZE);
                    }}
                    onClear={() => {
                      setQuery('');
                      setVisibleCount(PAGE_SIZE);
                    }}
                    placeholder="Search articles…"
                  />
                </div>
                <p className="toolbar__count" role="status" aria-live="polite">
                  {`${filtered.length} ${filtered.length === 1 ? 'article' : 'articles'}`}
                </p>
              </div>

              <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                <FilterTabs
                  label="Filter articles by category"
                  options={blogCategories}
                  value={category}
                  onChange={(value) => {
                    setCategory(value);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  idPrefix="blog-category"
                />
                <div className="filters" role="group" aria-label="Filter articles by tag">
                  <button
                    type="button"
                    className="filter-chip"
                    aria-pressed={tag === null}
                    onClick={() => setTag(null)}
                  >
                    All tags
                  </button>
                  {allTags.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="filter-chip"
                      aria-pressed={tag === item}
                      onClick={() => {
                        setTag(tag === item ? null : item);
                        setVisibleCount(PAGE_SIZE);
                      }}
                    >
                      #{item}
                    </button>
                  ))}
                </div>
              </div>

              {filtered.length === 0 ? (
                <EmptyState
                  icon="search"
                  title="No articles found."
                  text="Nothing matches your search and filters yet. Try different keywords or reset."
                  action={
                    <ButtonReset onClick={resetFilters} />
                  }
                />
              ) : (
                <>
                  <div className="grid grid--3">
                    {visible.map((article, index) => (
                      <BlogCard key={article.slug} article={article} index={index} />
                    ))}
                  </div>

                  {hasMore ? (
                    <div className="load-more">
                      <button
                        type="button"
                        className="btn btn--secondary"
                        onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                      >
                        Load more articles
                        <Icon name="chevron-down" size={16} />
                      </button>
                      <p className="form__note">
                        Showing {visible.length} of {filtered.length} articles
                      </p>
                    </div>
                  ) : (
                    <p className="form__note" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                      You have reached the end of the list.
                    </p>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CtaBand
            eyebrow="Stay informed"
            title="Have a topic you want us to cover?"
            text="Tell us what your team is wrestling with — it might become our next article, or the start of a conversation."
            secondary={{ label: 'Back to home', to: '/' }}
          />
        </div>
      </section>
    </>
  );
}

function ButtonReset({ onClick }) {
  return (
    <button type="button" className="btn btn--secondary btn--sm" onClick={onClick}>
      Reset filters
    </button>
  );
}
