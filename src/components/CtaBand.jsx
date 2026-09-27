import Reveal from './Reveal.jsx';
import Button from './Button.jsx';

export default function CtaBand({
  eyebrow = 'Let’s talk',
  title = 'Have a Challenge Worth Solving?',
  text = "Tell us what you're trying to build, improve, or transform. Let's explore what technology can do for your business.",
  primary = { label: 'Talk to Our Team', to: '/contact' },
  secondary = { label: 'Explore Our Services', to: '/services' },
}) {
  return (
    <Reveal>
      <div className="cta-band">
        <div className="cta-band__inner">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p className="lead">{text}</p>
          <div className="cta-band__actions">
            {primary ? (
              <Button to={primary.to} size="lg" arrow>
                {primary.label}
              </Button>
            ) : null}
            {secondary ? (
              <Button to={secondary.to} variant="secondary" size="lg">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
