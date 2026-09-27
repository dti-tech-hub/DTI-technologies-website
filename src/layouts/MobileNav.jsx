import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { primaryNav, serviceGroups } from '../data/navigation.js';
import Icon from '../components/Icon.jsx';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock.js';
import logo from '../assets/logo.png';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileNav({ open, onClose }) {
  const location = useLocation();
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const [servicesOpen, setServicesOpen] = useState(false);

  useBodyScrollLock(open, 'nav-open');

  useEffect(() => {
    if (open) setServicesOpen(false);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(panel.querySelectorAll(FOCUSABLE)).filter(
        (element) => element.offsetParent !== null,
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);
    return () => document.removeEventListener('keydown', onKeyDown, true);
  }, [open, onClose]);

  const isServicesActive = location.pathname.startsWith('/services');
  const itemDelay = (index) => ({ '--item-delay': `${80 + index * 55}ms` });

  return (
    <div
      id="mobile-navigation"
      className={`mobile-nav ${open ? 'is-open' : ''}`.trim()}
      aria-hidden={!open}
    >
      <div className="mobile-nav__backdrop" onClick={onClose} aria-hidden="true" />

      <div
        className="mobile-nav__panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        tabIndex={-1}
      >
        <div className="mobile-nav__header">
          <Link to="/" className="brand" onClick={onClose}>
            <span className="brand__logo" aria-hidden="true">
              <img src={logo} alt="" />
            </span>
            <span className="brand__text">
              <span className="brand__name">DTI Technologies</span>
              <span className="brand__tag">Technology Services</span>
            </span>
          </Link>
          <button
            type="button"
            className="mobile-nav__close"
            onClick={onClose}
            ref={closeRef}
            aria-label="Close navigation menu"
          >
            <Icon name="close" size={19} />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className="mobile-nav__list">
            {primaryNav.map((item, index) =>
              item.hasDropdown ? (
                <li className="mobile-nav__item" key={item.id} style={itemDelay(index)}>
                  <button
                    type="button"
                    className={`mobile-nav__link ${isServicesActive ? 'is-active' : ''}`.trim()}
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-services-submenu"
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    Services
                    <Icon name="chevron-down" size={17} className="caret" />
                  </button>

                  <div
                    id="mobile-services-submenu"
                    className={`mobile-nav__submenu ${servicesOpen ? 'is-open' : ''}`.trim()}
                  >
                    <Link
                      to="/services"
                      className="mobile-nav__sublink"
                      onClick={onClose}
                    >
                      <span className="dot" aria-hidden="true" />
                      All Services
                    </Link>
                    {serviceGroups.map((group) => (
                      <div key={group.id}>
                        <p className="mobile-nav__group-label">{group.label}</p>
                        {group.items.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className={`mobile-nav__sublink ${
                              location.pathname === `/services/${service.slug}` ? 'is-active' : ''
                            }`.trim()}
                            onClick={onClose}
                          >
                            <span className="dot" aria-hidden="true" />
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </li>
              ) : (
                <li className="mobile-nav__item" key={item.id} style={itemDelay(index)}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `mobile-nav__link ${isActive ? 'is-active' : ''}`.trim()}
                    onClick={onClose}
                  >
                    {item.label}
                    <Icon name="chevron-right" size={16} aria-hidden="true" />
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="mobile-nav__footer">
          <Link to="/contact" className="btn btn--primary btn--block" onClick={onClose}>
            Talk to Our Team
          </Link>
          <p className="form__note">
            Intelligent, secure and scalable digital solutions for modern businesses.
          </p>
        </div>
      </div>
    </div>
  );
}
