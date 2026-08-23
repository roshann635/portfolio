import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';
import { scrollToTop } from '../../utils/helpers';
import './Footer.css';

const iconMap = { FaGithub, FaLinkedin, FaInstagram, FaEnvelope };

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">Roshan Jadhav</span>
            <p className="footer__tagline">Full-Stack Engineer — MERN & AI/GenAI</p>
            <div className="footer__socials">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label={link.name}>
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer__nav">
            <h4 className="footer__heading">Navigation</h4>
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className="footer__nav-link">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>\u00a9 {year} Roshan's Portfolio. Built with <FaHeart className="footer__heart" /> and code.</p>
          <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
