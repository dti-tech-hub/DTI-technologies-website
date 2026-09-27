import Reveal from './Reveal.jsx';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: HeadingTag = 'h2',
  id,
  children,
  className = '',
}) {
  const classes = [
    'section-heading',
    align === 'center' ? 'section-heading--center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Reveal className={classes}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <HeadingTag className="section-heading__title" id={id}>
        {title}
      </HeadingTag>
      {description ? <p className="section-heading__desc">{description}</p> : null}
      {children ? <div className="section-heading__footer">{children}</div> : null}
    </Reveal>
  );
}
