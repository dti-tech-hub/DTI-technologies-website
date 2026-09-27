import { useState } from 'react';
import SectionHeading from '../components/SectionHeading.jsx';
import PortfolioModal from '../components/PortfolioModal.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import Button from '../components/Button.jsx';
import { portfolioItems } from '../data/portfolio.js';

export default function PortfolioPreview() {
  const [activeItem, setActiveItem] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const projects = portfolioItems.slice(0, 3);

  return (
    <section className="section section--secondary project-collage-section" aria-labelledby="portfolio-preview-heading">
      <div className="container">
        <Reveal className="section-heading section-heading--center">
          <p className="eyebrow">What we’ve done</p>
          <h2 id="portfolio-preview-heading">A look at the kind of work we deliver.</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="project-collage">
            {projects.map((project, index) => {
              const isHovered = hoveredId === project.id;
              return (
                <div
                  key={project.id}
                  className={`project-collage__item project-collage__item--${index + 1} ${
                    isHovered ? 'is-hovered' : ''
                  }`}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveItem(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveItem(project);
                    }
                  }}
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="project-collage__frame">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-collage__img"
                      />
                    ) : (
                      <div className="project-collage__placeholder">
                        <div className="project-collage__icon">
                          <Icon name={project.icon || 'layers'} size={36} />
                        </div>
                        <span className="project-collage__placeholder-text">
                          Add Picture Here
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className={`project-collage__title ${isHovered ? 'is-active' : ''}`}>
                    {project.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120} className="project-collage__cta">
          <Button to="/portfolio" variant="primary" arrow>
            View portfolio
          </Button>
        </Reveal>
      </div>

      <PortfolioModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}

