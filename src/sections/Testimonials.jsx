import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { testimonials } from '../data/site.js';

export default function Testimonials() {
  const [isHeld, setIsHeld] = useState(false);

  // Triple list for infinite seamless marquee loop
  const displayItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="section section--white testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Social proof"
          title="What partners say about working with us."
          description="Approved client testimonials will be published here. The cards below demonstrate the live testimonial experience."
          id="testimonials-heading"
          align="center"
        />
      </div>

      <Reveal delay={80} className="testimonials-ticker">
        <div
          className={`testimonials-ticker__viewport ${isHeld ? 'is-held' : ''}`}
          onPointerDown={() => setIsHeld(true)}
          onPointerUp={() => setIsHeld(false)}
          onPointerLeave={() => setIsHeld(false)}
          onPointerCancel={() => setIsHeld(false)}
        >
          <div className="testimonials-ticker__track">
            {displayItems.map((item, index) => (
              <figure key={`${item.id}-${index}`} className="quote-card quote-card--light-blue">
                <div className="quote-card__head">
                  <Icon name="quote" size={30} className="quote-card__mark" />
                  {item.placeholder ? (
                    <span className="badge badge--cobalt">Placeholder</span>
                  ) : null}
                </div>
                <blockquote className="quote-card__text">{item.quote}</blockquote>
                <figcaption className="quote-card__author">
                  <span className="quote-card__avatar" aria-hidden="true">
                    ?
                  </span>
                  <div>
                    <span className="quote-card__name">{item.author}</span>
                    <br />
                    <span className="quote-card__role">{item.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

