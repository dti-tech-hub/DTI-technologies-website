import { Link } from 'react-router-dom';
import { footerColumns, footerSocials } from '../data/navigation.js';
import { site } from '../data/site.js';
import Icon from '../components/Icon.jsx';
import logo from '../assets/logo.png';

const socialIcons = {
  linkedin: 'linkedin',
  instagram: 'instagram',
  facebook: 'facebook',
  x: 'twitter-x',
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Link to="/" className="brand" aria-label="DTI Technologies — home">
              <span className="brand__logo" aria-hidden="true">
                <img src={logo} alt="" />
              </span>
              <span className="brand__text">
                <span className="brand__name">{site.name}</span>
                <span className="brand__tag">{site.tagline}</span>
              </span>
            </Link>
            <p>{site.description}</p>
            <div className="footer__socials-wrap">
              <div className="footer__socials">
                {footerSocials.map((social) => (
                  <span
                    key={social.id}
                    className="footer__social"
                    role="img"
                    aria-label={`${social.label} — link pending approval`}
                    title={`${social.label} — official profile pending approval`}
                  >
                    <Icon name={socialIcons[social.id]} size={16} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div className="footer__col" key={column.id}>
              <h4>{column.title}</h4>
              <ul className="footer__links">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {site.name}. All Rights Reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
