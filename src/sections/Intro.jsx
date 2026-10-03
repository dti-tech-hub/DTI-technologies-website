import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import weIllustration from '../assets/we.png';

const principles = [
  {
    label: 'Guidance',
    text: 'Connect technology decisions to real business goals.',
  },
  {
    label: 'Delivery',
    text: 'Prioritize maintainability, security, and clarity.',
  },
  {
    label: 'Support',
    text: 'Continue supporting clients well after launch.',
  },
];

export default function Intro() {
  return (
    <section className="section section--snug" aria-labelledby="intro-heading">
      <div className="container intro">
        <Reveal variant="left" className="intro__media">
          <figure className="intro__figure">
            <img
              className="intro__image"
              src={weIllustration}
              alt=""
              aria-hidden="true"
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </Reveal>

        <div className="intro__content">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="section-heading__title" id="intro-heading">
              A technology partner focused on outcomes.
            </h2>
            <p className="section-heading__desc">
              We help organizations turn complex technology challenges into intelligent, secure, and
              scalable digital solutions — combining strategic thinking with disciplined engineering.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <ul className="intro__points">
              {principles.map((principle) => (
                <li key={principle.label}>
                  <Icon name="check-circle" size={18} />
                  <span>
                    <strong>{principle.label}</strong> — {principle.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <div className="intro__actions">
              <Button to="/about" variant="secondary" arrow>
                More about us
              </Button>
            </div>
            <p className="intro__focus">Focus: AI • Security • Data • Software • Consulting</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
