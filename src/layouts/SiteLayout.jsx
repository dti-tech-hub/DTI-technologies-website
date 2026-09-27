import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BackToTop from '../components/BackToTop.jsx';

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo?.({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="site-main page-enter" key={location.pathname} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
