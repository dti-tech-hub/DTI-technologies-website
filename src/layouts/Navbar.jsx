import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { primaryNav, serviceGroups } from '../data/navigation.js';
import Icon from '../components/Icon.jsx';
import MobileNav from './MobileNav.jsx';
import logo from '../assets/logo.png';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownTriggerRef = useRef(null);
  const toggleRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const openDropdown = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setDropdownOpen(true);
  };

  const scheduleCloseDropdown = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setDropdownOpen(false), 160);
  };

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    [],
  );

  useEffect(() => {
    if (!dropdownOpen) return undefined;
    const onPointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        dropdownTriggerRef.current?.focus();
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [dropdownOpen]);

  const isServicesActive = location.pathname.startsWith('/services');
  const isDropdownItemActive = (slug) => location.pathname === `/services/${slug}`;

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${mobileOpen ? 'is-open' : ''}`.trim()}>
        <div className="container container--wide navbar__inner">
          <Link to="/" className="brand" aria-label="DTI Technologies — home">
            <span className="brand__logo" aria-hidden="true">
              <img src={logo} alt="" />
            </span>
            <span className="brand__text">
              <span className="brand__name">DTI Technologies</span>
              <span className="brand__tag">Technology, Innovation, Transformation</span>
            </span>
          </Link>

          <nav aria-label="Primary">
            <ul className="nav-menu">
              {primaryNav.map((item) =>
                item.hasDropdown ? (
                  <li
                    key={item.id}
                    className={`nav-dropdown ${dropdownOpen ? 'is-open' : ''}`.trim()}
                    ref={dropdownRef}
                    onMouseEnter={openDropdown}
                    onMouseLeave={scheduleCloseDropdown}
                  >
                    <button
                      ref={dropdownTriggerRef}
                      type="button"
                      className={`nav-menu__link dropdown-trigger ${isServicesActive ? 'is-active' : ''}`.trim()}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                      aria-controls="services-dropdown"
                      onClick={() => setDropdownOpen((open) => !open)}
                      onKeyDown={(event) => {
                        if (event.key === 'ArrowDown') {
                          event.preventDefault();
                          setDropdownOpen(true);
                          requestAnimationFrame(() => {
                            dropdownRef.current
                              ?.querySelector('#services-dropdown a')
                              ?.focus();
                          });
                        }
                      }}
                    >
                      {item.label}
                      <Icon name="chevron-down" size={14} className="caret" />
                    </button>

                    <div className="nav-dropdown__panel" id="services-dropdown">
                      <div className="nav-dropdown__grid">
                        {serviceGroups.map((group) => (
                          <div key={group.id} className="nav-dropdown__group">
                            <p className="nav-dropdown__group-title">{group.label}</p>
                            <ul className="nav-dropdown__list">
                              {group.items.map((service) => (
                                <li key={service.slug}>
                                  <Link
                                    to={`/services/${service.slug}`}
                                    className={`nav-dropdown__item ${
                                      isDropdownItemActive(service.slug) ? 'is-active' : ''
                                    }`.trim()}
                                  >
                                    <span className="nav-dropdown__item-icon" aria-hidden="true">
                                      <Icon name={service.icon} size={14} />
                                    </span>
                                    {service.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.id}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) => `nav-menu__link ${isActive ? 'is-active' : ''}`.trim()}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false);
          requestAnimationFrame(() => toggleRef.current?.focus());
        }}
      />
    </>
  );
}
