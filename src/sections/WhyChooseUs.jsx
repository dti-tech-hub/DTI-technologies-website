import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { whyChooseUs } from '../data/site.js';

export default function WhyChooseUs() {
  return (
    <section className="section section--tint" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          title="Engineering with purpose, partnership and permanence."
          description="We combine business thinking with modern engineering so the work stays valuable long after launch."
          id="why-heading"
          align="center"
        />

        <div className="grid grid--3">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} style={{ height: '100%' }}>
              <article className="card card--hover value-card" style={{ height: '100%' }}>
                <span className="value-card__glyph">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__text">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
