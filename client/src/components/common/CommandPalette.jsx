import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaSearch,
  FaHome,
  FaUser,
  FaCode,
  FaFileAlt,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCopy,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { PROFILE, PLACEHOLDER_PROJECTS } from "../../utils/constants";
import "./CommandPalette.css";

const CommandPalette = ({ isOpen, onClose, onToggleTheme, currentTheme }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const actions = [
    // Navigation
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      icon: <FaHome />,
      shortcut: "01",
      run: () => navigate("/"),
    },
    {
      id: "nav-about",
      title: "Go to About",
      category: "Navigation",
      icon: <FaUser />,
      shortcut: "02",
      run: () => navigate("/about"),
    },
    {
      id: "nav-projects",
      title: "Go to Projects",
      category: "Navigation",
      icon: <FaCode />,
      shortcut: "03",
      run: () => navigate("/projects"),
    },
    {
      id: "nav-resume",
      title: "Go to Resume",
      category: "Navigation",
      icon: <FaFileAlt />,
      shortcut: "04",
      run: () => navigate("/resume"),
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      category: "Navigation",
      icon: <FaEnvelope />,
      shortcut: "05",
      run: () => navigate("/contact"),
    },

    // Theme
    {
      id: "theme-toggle",
      title: `Switch to ${currentTheme === "night" ? "Day" : "Night"} Theme`,
      category: "Preferences",
      icon: currentTheme === "night" ? <FaSun /> : <FaMoon />,
      shortcut: "Theme",
      run: () => onToggleTheme?.(),
    },

    // Projects
    ...PLACEHOLDER_PROJECTS.filter((p) => p.featured).map((p) => ({
      id: `project-${p._id}`,
      title: `Project: ${p.title}`,
      category: "Projects",
      icon: <FaCode />,
      shortcut: "Jump",
      run: () => {
        if (window.location.pathname === "/") {
          const el = document.getElementById("selected-work");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/projects");
        }
      },
    })),

    // Quick Actions
    {
      id: "action-resume",
      title: "Download Resume PDF",
      category: "Actions",
      icon: <FaDownload />,
      shortcut: "PDF",
      run: () => window.open("/resume.pdf", "_blank", "noopener,noreferrer"),
    },
    {
      id: "action-copy-email",
      title: "Copy Email to Clipboard",
      category: "Actions",
      icon: <FaCopy />,
      shortcut: "Copy",
      run: () => {
        navigator.clipboard.writeText(PROFILE.email);
        toast.success(`Copied ${PROFILE.email} to clipboard!`);
      },
    },
    {
      id: "ext-github",
      title: "Open GitHub Profile",
      category: "Links",
      icon: <FaGithub />,
      shortcut: "GitHub",
      run: () =>
        window.open(
          "https://github.com/roshann635",
          "_blank",
          "noopener,noreferrer",
        ),
    },
    {
      id: "ext-linkedin",
      title: "Open LinkedIn Profile",
      category: "Links",
      icon: <FaLinkedin />,
      shortcut: "LinkedIn",
      run: () =>
        window.open(PROFILE.socials.linkedin, "_blank", "noopener,noreferrer"),
    },
    {
      id: "ext-leetcode",
      title: "Open LeetCode Profile",
      category: "Links",
      icon: <SiLeetcode />,
      shortcut: "LeetCode",
      run: () =>
        window.open(PROFILE.socials.leetcode, "_blank", "noopener,noreferrer"),
    },
    {
      id: "ext-whatsapp",
      title: "Open WhatsApp Chat",
      category: "Links",
      icon: <FaWhatsapp />,
      shortcut: "WhatsApp",
      run: () =>
        window.open(PROFILE.socials.whatsapp, "_blank", "noopener,noreferrer"),
    },
  ];

  const filteredActions = actions.filter((act) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      act.title.toLowerCase().includes(q) ||
      act.category.toLowerCase().includes(q) ||
      act.id.toLowerCase().includes(q)
    );
  });

  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus?.();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.children[selectedIndex];
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  const executeSelected = () => {
    const item = filteredActions[selectedIndex];
    if (item) {
      item.run();
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredActions.length - 1 ? prev + 1 : 0,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredActions.length - 1,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      executeSelected();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="cmd-palette"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div className="cmd-palette__panel" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-palette__search">
          <FaSearch className="cmd-palette__search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-palette__input"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="off"
          />
          <kbd className="cmd-palette__kbd">ESC</kbd>
        </div>

        <div className="cmd-palette__list" ref={listRef}>
          {filteredActions.length === 0 ? (
            <div className="cmd-palette__empty">No matching commands found</div>
          ) : (
            filteredActions.map((action, idx) => (
              <div
                key={action.id}
                className={`cmd-palette__item ${
                  idx === selectedIndex ? "cmd-palette__item--active" : ""
                }`}
                onClick={() => {
                  action.run();
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="cmd-palette__item-main">
                  <span className="cmd-palette__item-icon">{action.icon}</span>
                  <span className="cmd-palette__item-title">
                    {action.title}
                  </span>
                </div>
                <div className="cmd-palette__item-meta">
                  <span className="cmd-palette__item-cat">
                    {action.category}
                  </span>
                  {action.shortcut && (
                    <kbd className="cmd-palette__item-shortcut">
                      {action.shortcut}
                    </kbd>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cmd-palette__footer">
          <span className="cmd-palette__hint">
            <kbd>↑</kbd> <kbd>↓</kbd> navigate
          </span>
          <span className="cmd-palette__hint">
            <kbd>↵</kbd> select
          </span>
          <span className="cmd-palette__hint">
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
