import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PROFILE,
  PLACEHOLDER_PROJECTS,
  PLACEHOLDER_SKILLS,
  PLACEHOLDER_ACHIEVEMENTS,
  SKILL_CATEGORIES,
} from "../../utils/constants";
import "./Terminal.css";

const WELCOME_MESSAGE = [
  { type: "system", text: "Roshan Jadhav — Portfolio Shell v1.0.0" },
  { type: "system", text: "Type 'help' to inspect available commands." },
];

const Terminal = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState(WELCOME_MESSAGE);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) {
      setHistory((prev) => [...prev, { type: "prompt", text: "" }]);
      return;
    }

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(" ").filter(Boolean);
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newEntries = [{ type: "prompt", text: trimmed }];

    switch (cmd) {
      case "help":
        newEntries.push({
          type: "output",
          text: [
            "Available commands:",
            "  whoami                     Display developer profile overview",
            "  projects --list            List featured engineering projects",
            "  open <name> [--live|--code] View project (internal navigation by default)",
            "  skills [--category <k>]    List skills (e.g. ai-ml, backend, frontend)",
            "  achievements               List hackathon & technical honors",
            "  contact                    Navigate to contact channel",
            "  clear                      Clear terminal screen",
            "  help                       Show this help manual",
          ].join("\n"),
        });
        break;

      case "whoami":
        newEntries.push({
          type: "output",
          text: `${PROFILE.name} — ${PROFILE.tagline}\n${PROFILE.bio}`,
        });
        break;

      case "projects":
        if (args.includes("--list") || args.length === 0) {
          const featured = PLACEHOLDER_PROJECTS.filter((p) => p.featured);
          const listText = featured
            .map(
              (p) =>
                `• ${p.title}\n  Stack: ${p.techStack.slice(0, 5).join(", ")}...`,
            )
            .join("\n");
          newEntries.push({
            type: "output",
            text: `${listText}\n\nHint: type 'open <name>' to view, or 'open <name> --live' for external site.`,
          });
        } else {
          newEntries.push({
            type: "error",
            text: `Invalid flag. Use 'projects --list'`,
          });
        }
        break;

      case "open":
        if (!args.length) {
          newEntries.push({
            type: "error",
            text: "Usage: open <project_name> [--live | --code] (e.g. open codeforge, open samvaad --live)",
          });
        } else {
          const isLive = args.includes('--live');
          const isCode = args.includes('--code') || args.includes('--github');
          const nameArgs = args.filter((a) => !a.startsWith('--'));

          if (!nameArgs.length) {
            newEntries.push({
              type: 'error',
              text: "Please specify a project name. E.g. 'open codeforge'",
            });
            break;
          }

          const rawQuery = nameArgs.join(' ').toLowerCase();
          const cleanQuery = rawQuery.replace(/[^a-z0-9]/g, '');

          const found = PLACEHOLDER_PROJECTS.find((p) => {
            const cleanTitle = p.title.toLowerCase().replace(/[^a-z0-9]/g, '');
            return (
              cleanTitle.includes(cleanQuery) ||
              cleanQuery.includes(cleanTitle) ||
              p._id.toLowerCase() === rawQuery ||
              p.title.toLowerCase().includes(rawQuery)
            );
          });

          if (found) {
            if (isLive) {
              if (found.liveUrl && found.liveUrl !== '#') {
                window.open(found.liveUrl, '_blank', 'noopener,noreferrer');
                newEntries.push({
                  type: 'output',
                  text: `Opening live deployment for ${found.title}...`,
                });
              } else {
                newEntries.push({
                  type: 'output',
                  text: `Live deployment URL not available for ${found.title}.`,
                });
              }
            } else if (isCode) {
              if (found.githubUrl && found.githubUrl !== '#') {
                window.open(found.githubUrl, '_blank', 'noopener,noreferrer');
                newEntries.push({
                  type: 'output',
                  text: `Opening source repository for ${found.title}...`,
                });
              } else {
                newEntries.push({
                  type: 'output',
                  text: `Source repository not available for ${found.title}.`,
                });
              }
            } else {
              const el = document.getElementById('selected-work');
              if (el && window.location.pathname === '/') {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/projects');
              }
              newEntries.push({
                type: 'output',
                text: `Navigating to ${found.title}.\nTip: use 'open ${rawQuery} --live' or 'open ${rawQuery} --code' for external links.`,
              });
            }
          } else {
            newEntries.push({
              type: 'error',
              text: `Project '${rawQuery}' not found. Type 'projects --list' to view available entries.`,
            });
          }
        }
        break;

      case "skills": {
        const catFlagIndex = args.indexOf("--category");
        if (catFlagIndex !== -1 && args[catFlagIndex + 1]) {
          const catKey = args[catFlagIndex + 1].toLowerCase();
          const categoryObj = SKILL_CATEGORIES.find(
            (c) => c.key.toLowerCase() === catKey,
          );
          if (!categoryObj) {
            const valid = SKILL_CATEGORIES.map((c) => c.key).join(", ");
            newEntries.push({
              type: "error",
              text: `Unknown category '${catKey}'. Valid options: ${valid}`,
            });
          } else {
            const catSkills = PLACEHOLDER_SKILLS.filter(
              (s) => s.category === categoryObj.key,
            ).map((s) => s.name);
            newEntries.push({
              type: "output",
              text: `[${categoryObj.label}]\n${catSkills.join(" · ")}`,
            });
          }
        } else {
          // List all categories
          const formatted = SKILL_CATEGORIES.map((cat) => {
            const catSkills = PLACEHOLDER_SKILLS.filter(
              (s) => s.category === cat.key,
            )
              .map((s) => s.name)
              .join(" · ");
            return `${cat.label.toUpperCase()}:\n  ${catSkills}`;
          }).join("\n\n");
          newEntries.push({
            type: "output",
            text: formatted,
          });
        }
        break;
      }

      case "achievements":
        newEntries.push({
          type: "output",
          text: PLACEHOLDER_ACHIEVEMENTS.map(
            (a) => `• ${a.title}${a.org ? ` (${a.org})` : ""}`,
          ).join("\n"),
        });
        break;

      case "contact":
        navigate("/contact");
        newEntries.push({
          type: "output",
          text: "Routing to contact interface...",
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        newEntries.push({
          type: "error",
          text: `command not found: ${cmd}. type 'help' for a list.`,
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
      return; // Allow global CommandPalette trigger
    }
    if (e.key === "Enter") {
      executeCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!commandHistory.length) return;
      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex] || "");
      }
    }
  };

  return (
    <div
      className="terminal"
      onClick={handleContainerClick}
      role="region"
      aria-label="Interactive Terminal"
    >
      <div className="terminal__header">
        <span className="terminal__header-title">shell://roshan@portfolio</span>
        <span className="terminal__header-badge">LIVE REPL</span>
      </div>

      <div className="terminal__body" ref={terminalBodyRef}>
        {history.map((entry, idx) => (
          <div
            key={idx}
            className={`terminal__entry terminal__entry--${entry.type}`}
          >
            {entry.type === "prompt" && (
              <span className="terminal__prompt-line">
                <span className="terminal__prompt">roshan@portfolio:~$</span>{" "}
                <span className="terminal__command">{entry.text}</span>
              </span>
            )}
            {entry.type !== "prompt" && (
              <pre className="terminal__output">{entry.text}</pre>
            )}
          </div>
        ))}

        <div className="terminal__input-line">
          <span className="terminal__prompt">roshan@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal__input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            autoCapitalize="off"
            autoComplete="off"
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
