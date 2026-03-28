import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import { SOCIAL_LINKS, NAV_LINKS } from "../../utils/constants";
import { scrollToTop } from "../../utils/helpers";
import "./Footer.css";

const iconMap = { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope };

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              Portfolio
              <span className="footer__logo-bracket">/&gt;</span>
            </span>
            <p className="footer__tagline">
              Crafting digital experiences with code and creativity.
            </p>
            <div className="footer__socials">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={link.name}
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer__nav">
            <h4 className="footer__heading">Quick Links</h4>
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className="footer__nav-link">
                {link.icon} {link.name}
              </Link>
            ))}
          </div>

          <div className="footer__stats">
            <h4 className="footer__heading">Explorer Stats</h4>
            <div className="footer__stat-item">
              <span className="footer__stat-label">Pages Discovered</span>
              <span className="footer__stat-value badge teal">
                {NAV_LINKS.length}
              </span>
            </div>
            <div className="footer__stat-item">
              <span className="footer__stat-label">Status</span>
              <span className="footer__stat-value badge">🟢 Online</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} Roshan's Portfolio. Built with{" "}
            <FaHeart className="footer__heart" /> and lots of ☕
          </p>
          <button
            className="footer__scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
