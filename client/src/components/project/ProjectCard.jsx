import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { truncateText } from "../../utils/helpers";
import "./ProjectCard.css";

/**
 * ProjectCard — 3D tilt card with:
 *   - Perspective 3D tilt on mouse move
 *   - Light reflection gradient that follows cursor
 *   - Smooth overlay slide-up on hover
 *   - Depth-separated content layers (translateZ)
 */
const ProjectCard = ({ project, index = 0 }) => {
  const { title, description, techStack, image, liveUrl, githubUrl, category } =
    project;

  const [xpWidth] = useState(() => 60 + Math.random() * 40);
  const cardRef = useRef(null);
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });

  const categoryColors = {
    web: "#6c63ff",
    mobile: "#00d4aa",
    ai: "#f59e0b",
    other: "#ec4899",
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  // Dynamic shadow shift based on tilt
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);
  const shadowBlur = useTransform(mouseXSpring, (v) => 20 + Math.abs(v) * 20);


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    // Light reflection position (percentage)
    setLightPos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setLightPos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card glass-card project-card-3d"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        boxShadow: useTransform(
          [shadowX, shadowY, shadowBlur],
          ([x, y, blur]) => `${x}px ${y}px ${blur}px rgba(0,0,0,0.5)`
        ),
      }}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}

      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Light reflection overlay — follows cursor */}
      <div
        className="project-card__light-reflection"
        style={{
          background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
          mixBlendMode: "soft-light",
          pointerEvents: "none",
        }}
      />


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
            transform: "translateZ(30px)",
          }}
        >
          {category}
        </span>
      </div>

      <div className="project-card__content" style={{ transform: "translateZ(40px)" }}>
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
