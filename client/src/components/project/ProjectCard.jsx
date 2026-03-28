import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { truncateText } from "../../utils/helpers";
import "./ProjectCard.css";

const ProjectCard = ({ project, index = 0 }) => {
  const { title, description, techStack, image, liveUrl, githubUrl, category } =
    project;

  // Generate random XP once per component instance
  const [xpWidth] = useState(() => 60 + Math.random() * 40);

  const categoryColors = {
    web: "#6c63ff",
    mobile: "#00d4aa",
    ai: "#f59e0b",
    other: "#ec4899",
  };

  return (
    <motion.div
      className="project-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card__image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-card__placeholder">
            <span className="project-card__placeholder-icon">🚀</span>
            <span>{title}</span>
          </div>
        )}
        <div className="project-card__overlay">
          <div className="project-card__actions">
            {liveUrl && liveUrl !== "#" && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__action-btn"
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
            {githubUrl && githubUrl !== "#" && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__action-btn"
              >
                <FaGithub /> Code
              </a>
            )}
          </div>
        </div>
        <span
          className="project-card__category badge"
          style={{
            background: `${categoryColors[category] || "#6c63ff"}22`,
            color: categoryColors[category] || "#6c63ff",
            borderColor: `${categoryColors[category] || "#6c63ff"}55`,
          }}
        >
          {category}
        </span>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{truncateText(description, 120)}</p>
        <div className="project-card__tech">
          {techStack?.map((tech) => (
            <span key={tech} className="project-card__tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__footer">
        <div className="project-card__xp">
          <span className="project-card__xp-label">Quest XP</span>
          <div className="stat-bar" style={{ height: "4px" }}>
            <div className="stat-bar-fill" style={{ width: `${xpWidth}%` }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
