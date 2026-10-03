import ProcessArt from '../components/ProcessArt.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { processSteps } from '../data/site.js';

export default function HowWeWork() {
  return (
    <section className="section section--tight process-section" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title="A clear path from first conversation to lasting results."
          description="Every engagement moves through the same disciplined stages — so you always know what is happening, what comes next, and why."
          id="process-heading"
          align="center"
        />

        <div className="process__roadmap">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              variant={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 80}
              className={`process__row process__row--${index + 1}`}
            >
              <article className="process__stage">
                <div className="process__art">
                  <ProcessArt name={step.number} />
                </div>

                <span className="process__badge">{step.number}</span>

                {/* Step 1 -> Step 2 & Step 2 -> Step 3 horizontal right arrow */}
                {(index === 0 || index === 1) && (
                  <span className="process__arrow process__arrow--right" aria-hidden="true">
                    <svg viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                      <path d="M 0 10 L 186 10" stroke="var(--color-cobalt)" strokeWidth="2.5" strokeDasharray="5 4" vectorEffect="non-scaling-stroke" />
                      <path d="M 180 4 L 194 10 L 180 16" stroke="var(--color-cobalt)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                )}

                {/* Step 3 -> Step 4 downward turn curve */}
                {index === 2 && (
                  <span className="process__arrow process__arrow--turn" aria-hidden="true">
                    <svg viewBox="0 0 100 240" fill="none" preserveAspectRatio="none">
                      <path d="M 0 10 C 95 10, 95 230, 10 230" stroke="var(--color-cobalt)" strokeWidth="2.5" strokeDasharray="5 4" vectorEffect="non-scaling-stroke" />
                      <path d="M 22 222 L 8 230 L 22 238" stroke="var(--color-cobalt)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                )}

                {/* Step 4 -> Step 5 & Step 5 -> Step 6 horizontal left arrow */}
                {(index === 3 || index === 4) && (
                  <span className="process__arrow process__arrow--left" aria-hidden="true">
                    <svg viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
                      <path d="M 200 10 L 14 10" stroke="var(--color-cobalt)" strokeWidth="2.5" strokeDasharray="5 4" vectorEffect="non-scaling-stroke" />
                      <path d="M 20 4 L 6 10 L 20 16" stroke="var(--color-cobalt)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                )}

                {/* Mobile & Tablet vertical down arrow */}
                {index < 5 && (
                  <span className="process__arrow process__arrow--down" aria-hidden="true">
                    <svg viewBox="0 0 20 100" fill="none" preserveAspectRatio="none">
                      <path d="M 10 0 L 10 86" stroke="var(--color-cobalt)" strokeWidth="2.5" strokeDasharray="5 4" vectorEffect="non-scaling-stroke" />
                      <path d="M 4 80 L 10 94 L 16 80" stroke="var(--color-cobalt)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                )}

                <h3 className="process__title">
                  <span className="sr-only">{`Step ${step.number}: `}</span>
                  {step.title}
                </h3>
                <p className="process__text">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


