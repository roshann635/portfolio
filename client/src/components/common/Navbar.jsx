import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "../../utils/constants";
import { getScrollProgress } from "../../utils/helpers";
import "./Navbar.css";

/**
 * Navbar — Premium glass navbar with:
 *   - Hide on scroll down / show on scroll up
 *   - Animated underline indicator (layoutId)
 *   - Theme switcher (Midnight Neon <-> Retro Brutalist)
 *   - Glowing scroll progress bar
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState("midnight");
  const location = useLocation();
  const lastScrollY = useRef(0);

  // Initialize and listen to theme changes
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "midnight";
    setTheme(savedTheme);
    if (savedTheme === "retro") {
      document.body.classList.add("retro-theme");
    } else {
      document.body.classList.remove("retro-theme");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "midnight" ? "retro" : "midnight";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    if (newTheme === "retro") {
      document.body.classList.add("retro-theme");
    } else {
      document.body.classList.remove("retro-theme");
    }
  };

  // Scroll listener for scrolled state, progress bar, hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 50);
      setProgress(getScrollProgress());

      // Hide/show based on scroll direction
      if (currentY > 300) {
        setHidden(currentY > lastScrollY.current && currentY - lastScrollY.current > 5);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Simple route matching
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${hidden ? "navbar--hidden" : ""}`}
      >
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
                className={`navbar__link ${isLinkActive(link.path) ? "navbar__link--active" : ""}`}
              >
                <span className="navbar__link-icon">{link.icon}</span>
                {link.name}
                {/* Underline indicator */}
                {isLinkActive(link.path) && (
                  <motion.div
                    className="navbar__link-underline"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="navbar__actions" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle Theme"
              style={{
                background: "var(--bg-tertiary)",
                border: "2px solid var(--border-color)",
                color: "var(--text-primary)",
                padding: "0.5rem 0.8rem",
                borderRadius: "var(--radius-full)",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-xs)",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "all var(--transition-fast)",
                boxShadow: "var(--shadow-sm)"
              }}
            >
              {theme === "midnight" ? "⚡ RETRO" : "🌙 NEON"}
            </button>

            <button
              className="navbar__toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
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
                    className={`navbar__mobile-link ${isLinkActive(link.path) ? "navbar__mobile-link--active" : ""}`}
                  >
                    <span className="navbar__link-icon">{link.icon}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div style={{ marginTop: "1.5rem" }}>
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsOpen(false);
                  }}
                  className="theme-toggle-btn"
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "2px solid var(--border-color)",
                    color: "var(--text-primary)",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "var(--radius-full)",
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fs-sm)",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    width: "fit-content"
                  }}
                >
                  {theme === "midnight" ? "⚡ RETRO BRUTALIST" : "🌙 MIDNIGHT NEON"}
                </button>
              </div>
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
