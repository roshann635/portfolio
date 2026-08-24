import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaCode,
  FaWhatsapp,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { PROFILE, NAV_LINKS } from "../../utils/constants";
import { scrollToTop } from "../../utils/helpers";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__logo">{PROFILE.name}</span>
            <p className="footer__title">{PROFILE.title}</p>
            <p className="footer__tagline">{PROFILE.tagline}</p>
            <div className="footer__socials">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub"
              >
                <FaGithub /> <span>GitHub</span>
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a
                href={PROFILE.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LeetCode"
              >
                <SiLeetcode /> <span>LeetCode</span>
              </a>
              <a
                href={PROFILE.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp /> <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="footer__social-link"
                aria-label="Email"
              >
                <FaEnvelope /> <span>Email</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Resume PDF"
              >
                <span>Resume ↗</span>
              </a>
            </div>
          </div>

          <div className="footer__nav">
            <h4 className="footer__heading">Navigation</h4>
            <div className="footer__nav-links">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="footer__nav-link"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer__engineering">
            <h4 className="footer__heading">Engineering</h4>
            <p className="footer__tech-note">
              Flat design ledger system built with React 19, Vite, Framer
              Motion, and IBM Plex Typography.
            </p>
            <a
              href={PROFILE.socials.portfolioRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__source-link"
            >
              <FaCode /> <span>View Source on GitHub ↗</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {PROFILE.name}. All rights reserved.
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
