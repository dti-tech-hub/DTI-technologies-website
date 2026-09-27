import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { services } from '../data/services.js';
import servicesImage from '../assets/services.png';

// Display titles for all 9 DTI Technologies services
const SERVICE_TITLES = {
  'generative-ai': 'Generative AI',
  'cyber-security': 'Cyber Security',
  'data-engineering': 'Data Engineering',
  'application-development': 'Application Development',
  'data-management': 'Data Management',
  'it-consulting': 'IT Consulting Services',
  'outsourcing': 'Outsourcing Services',
  'maintenance': 'Maintenance Services',
  'other-services': 'Other Services',
};

export default function ServicesGrid() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const isDraggingRef = useRef(false);

  // Sync active dot indicator on scroll
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const firstSlide = slider.querySelector('.services-slider-scroll__slide');
    if (!firstSlide) return;
    const cardWidth = firstSlide.clientWidth;
    const gap = 20; // 1.25rem gap
    const index = Math.round(slider.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(services.length - 1, Math.max(0, index)));
  };

  // Mouse Drag to Scroll implementation
  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    setIsMouseDown(true);
    isDraggingRef.current = false;

    const startX = e.pageX - slider.offsetLeft;
    const startScrollLeft = slider.scrollLeft;

    const handleMouseMove = (moveEvent) => {
      moveEvent.preventDefault();
      const x = moveEvent.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      if (Math.abs(walk) > 5) {
        isDraggingRef.current = true;
      }
      slider.scrollLeft = startScrollLeft - walk;
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const scrollToGroup = (index) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const firstSlide = slider.querySelector('.services-slider-scroll__slide');
    if (!firstSlide) return;
    const cardWidth = firstSlide.clientWidth;
    const gap = 20;
    slider.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  return (
    <section className="section section--secondary services" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services__header">
          <Reveal className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2 id="services-heading">Services built around real technology challenges.</h2>
            <p className="section-heading__desc">
              Intelligent systems, secure applications, modern data platforms, and long-term technology support — delivered by
              engineers who care about outcomes.
            </p>
          </Reveal>
          <Reveal delay={80} className="services__header-image">
            <img src={servicesImage} alt="Our services" loading="lazy" />
          </Reveal>
        </div>
      </div>

      <Reveal delay={80} className="services-carousel-wrapper">
        <div className="container">
          <div
            ref={sliderRef}
            className={`services-slider-scroll ${isMouseDown ? 'is-dragging' : ''}`}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
          >
            <div className="services-slider-scroll__track">
              {services.map((service) => (
                <div key={service.slug} className="services-slider-scroll__slide">
                  <div className="service-glass-card service-card--white">
                    <div className="service-glass-card__head">
                      <div className="service-glass-card__icon">
                        <Icon name={service.icon} size={22} />
                      </div>
                      <span className="service-glass-card__index" aria-hidden="true">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="service-glass-card__name">
                      {SERVICE_TITLES[service.slug] || service.navLabel || service.title}
                    </h3>
                    
                    <p className="service-glass-card__text">{service.cardText}</p>

                    <div className="service-glass-card__footer">
                      <Link
                        to={`/services/${service.slug}`}
                        className="service-glass-card__btn"
                        onClick={(e) => {
                          if (isDraggingRef.current) {
                            e.preventDefault();
                          }
                        }}
                      >
                        More Details
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clean Pagination Dots */}
          <div className="services-carousel__pagination-only">
            {services.slice(0, -3).map((service, idx) => (
              <button
                key={service.slug}
                type="button"
                className={`services-carousel__dot ${idx === activeIndex ? 'is-active' : ''}`}
                onClick={() => scrollToGroup(idx)}
                aria-label={`Go to service ${service.title}`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="container">
        <Reveal delay={120} className="services__cta">
          <Button to="/services" variant="secondary" arrow>
            View all services
          </Button>
        </Reveal>
      </div>
    </section>
  );
}




