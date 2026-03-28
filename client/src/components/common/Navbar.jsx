import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../../utils/constants";
import { getScrollProgress } from "../../utils/helpers";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setProgress(getScrollProgress());
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating to a new page
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container container">
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="navbar__logo-text">Portfolio</span>
            <span className="navbar__logo-bracket">/&gt;</span>
          </Link>

          <div className="navbar__links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? "navbar__link--active" : ""}`}
              >
                <span className="navbar__link-icon">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="navbar__toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* XP Progress Bar */}
        <div className="xp-bar">
          <div className="xp-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="navbar__mobile-links">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`navbar__mobile-link ${location.pathname === link.path ? "navbar__mobile-link--active" : ""}`}
                  >
                    <span className="navbar__link-icon">{link.icon}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="navbar__mobile-xp">
              <span className="navbar__mobile-xp-label">Explorer XP</span>
              <div className="stat-bar">
                <div
                  className="stat-bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="navbar__mobile-xp-value">
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
