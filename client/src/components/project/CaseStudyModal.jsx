import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaGithub,
  FaServer,
  FaNetworkWired,
  FaMicrochip,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import Button from "../common/Button";
import ArchitectureDiagram from "./ArchitectureDiagram";
import "./CaseStudyModal.css";

const CaseStudyModal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="case-study-modal"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="case-study-modal__card"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="case-study-modal__header">
              <div className="case-study-modal__tag-group">
                <span className="case-study-modal__badge">
                  ENGINEERING CASE STUDY
                </span>
                <span className="case-study-modal__status">
                  {project.status}
                </span>
              </div>
              <button
                className="case-study-modal__close"
                onClick={onClose}
                aria-label="Close Case Study"
              >
                <FaTimes />
              </button>
            </div>

            {/* Content Body */}
            <div className="case-study-modal__body">
              {/* Title Section */}
              <div className="case-study-modal__intro">
                <h2 className="case-study-modal__title">{project.title}</h2>
                <p className="case-study-modal__subtitle">{project.subtitle}</p>
                <p className="case-study-modal__summary">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="case-study-modal__tech-strip">
                {project.techStack?.map((t) => (
                  <span key={t} className="case-study-modal__tech-pill">
                    {t}
                  </span>
                ))}
              </div>

              {/* System Architecture Section */}
              <div className="case-study-modal__section">
                <h3 className="case-study-modal__section-title">
                  <FaNetworkWired /> System Architecture & Topology
                </h3>
                <div className="case-study-modal__diagram-box">
                  <ArchitectureDiagram projectId={String(project._id)} />
                </div>
              </div>

              {/* Core Engineering Pillars */}
              {project.pillars && project.pillars.length > 0 && (
                <div className="case-study-modal__grid">
                  {project.pillars.map((pillar, idx) => (
                    <div key={idx} className="case-study-modal__pillar">
                      <div className="case-study-modal__pillar-icon">
                        {idx === 0 ? (
                          <FaServer />
                        ) : idx === 1 ? (
                          <FaMicrochip />
                        ) : (
                          <FaShieldAlt />
                        )}
                      </div>
                      <h4>{pillar.title}</h4>
                      <p>{pillar.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Engineering Challenges & Solutions */}
              {project.challenges && (
                <div className="case-study-modal__section">
                  <h3 className="case-study-modal__section-title">
                    <FaCheckCircle /> Deep-Dive: Architectural Decisions
                  </h3>
                  <div className="case-study-modal__challenges-list">
                    {project.challenges.map((c, i) => (
                      <div key={i} className="case-study-modal__challenge-card">
                        <div className="case-study-modal__challenge-q">
                          <span className="case-study-modal__challenge-label">
                            PROBLEM:
                          </span>{" "}
                          {c.challenge}
                        </div>
                        <div className="case-study-modal__challenge-a">
                          <span className="case-study-modal__challenge-label">
                            RESOLUTION:
                          </span>{" "}
                          {c.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Footer */}
              <div className="case-study-modal__footer">
                <Button
                  variant="primary"
                  size="md"
                  icon={<FaGithub />}
                  href={project.githubUrl}
                >
                  Explore GitHub Repository
                </Button>
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button variant="secondary" size="md" href={project.liveUrl}>
                    View Live Deployment
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
