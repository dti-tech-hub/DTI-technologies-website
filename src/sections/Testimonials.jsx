import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { useSwipeRail } from '../hooks/useSwipeRail.js';
import { testimonials } from '../data/site.js';

// Pixels per second. Calmer than the services rail, since a testimonial reads
// as a slower, calmer band of social proof.
const RAIL_SPEED = 25;

// Pixels of pointer travel before a press counts as a drag rather than a tap.
const DRAG_THRESHOLD = 5;

function QuoteCard({ item, isClone }) {
  const initial = (item.author || '').trim().charAt(0).toUpperCase();

  return (
    /* The clone is a direct flex child of the track and hidden from assistive
       tech, so the quotes are not announced twice. */
    <figure className="quote-card quote-card--light-blue" aria-hidden={isClone || undefined}>
      <div className="quote-card__head">
        <Icon name="quote" size={30} className="quote-card__mark" />
        {item.placeholder ? (
          <span className="badge badge--cobalt">Placeholder</span>
        ) : null}
      </div>
      <blockquote className="quote-card__text">{item.quote}</blockquote>
      <figcaption className="quote-card__author">
        <span className="quote-card__avatar" aria-hidden="true">
          {initial}
        </span>
        <div>
          <span className="quote-card__name">{item.author}</span>
          {item.role ? (
            <>
              <br />
              <span className="quote-card__role">{item.role}</span>
            </>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const { railRef, trackRef } = useSwipeRail({
    speed: RAIL_SPEED,
    dragThreshold: DRAG_THRESHOLD,
    copies: 2,
  });

  // Two identical sets, so any one-set-wide offset loops without a seam.
  const displayItems = [...testimonials, ...testimonials];

  return (
    <section className="section section--white testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Social proof"
          title="What partners say about working with us."
          description="Feedback from the teams we have worked with."
          id="testimonials-heading"
          align="center"
        />
      </div>

      <Reveal delay={80} className="testimonials-ticker">
        <div
          className="testimonials-ticker__viewport"
          role="group"
          aria-label="Client testimonials"
          ref={railRef}
        >
          <div className="testimonials-ticker__track" ref={trackRef}>
            {displayItems.map((item, index) => (
              <QuoteCard
                key={`${item.id}-${index}`}
                item={item}
                isClone={index >= testimonials.length}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}