import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../utils/constants";
import "./Navbar.css";

const CHAPTERS = NAV_LINKS.map((link, i) => ({
  ...link,
  chapter: String(i + 1).padStart(2, "0"),
}));

const Navbar = ({ theme, onToggleTheme, onOpenCommandPalette }) => {
  const location = useLocation();
  const [showLabel, setShowLabel] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Spine */}
      <nav className="spine" aria-label="Main navigation">
        <div className="spine__chapters">
          {CHAPTERS.map((ch) => (
            <Link
              key={ch.path}
              to={ch.path}
              className={`spine__item ${isActive(ch.path) ? "spine__item--active" : ""}`}
              aria-current={isActive(ch.path) ? "page" : undefined}
            >
              <span className="spine__label">
                {ch.chapter} {ch.name}
              </span>
              {isActive(ch.path) && <span className="spine__indicator" />}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="topbar" aria-label="Main navigation">
        <div className="topbar__scroll">
          {CHAPTERS.map((ch) => (
            <Link
              key={ch.path}
              to={ch.path}
              className={`topbar__item ${isActive(ch.path) ? "topbar__item--active" : ""}`}
              aria-current={isActive(ch.path) ? "page" : undefined}
            >
              {ch.chapter} {ch.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Floating Utilities (Command Palette, Direct Resume & Theme Switcher) */}
      <div className="nav-controls">
        <button
          className="cmd-trigger"
          onClick={onOpenCommandPalette}
          aria-label="Open Command Palette"
          title="Open Command Palette (Cmd+K / Ctrl+K)"
        >
          <span className="cmd-trigger__text">Search</span>
          <kbd className="cmd-trigger__kbd">⌘K</kbd>
        </button>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume-btn"
          aria-label="Direct Download Resume PDF"
          title="Download Resume PDF"
        >
          <span>Resume</span>
          <span className="nav-resume-btn__arrow">↗</span>
        </a>

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          onMouseEnter={() => setShowLabel(true)}
          onMouseLeave={() => setShowLabel(false)}
          aria-label={`Switch to ${theme === "night" ? "day" : "night"} theme`}
        >
          <svg
            className="theme-toggle__icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {theme === "night" ? (
              <>
                {/* Sun */}
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </>
            ) : (
              <>
                {/* Moon */}
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </>
            )}
          </svg>
          {showLabel && (
            <span className="theme-toggle__label">
              {theme === "night" ? "DAY" : "NIGHT"}
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
