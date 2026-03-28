import { motion } from "framer-motion";
import {
  FaDownload,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
} from "react-icons/fa";
import Button from "../components/common/Button";
import {
  PROFILE,
  PLACEHOLDER_SKILLS,
  // PLACEHOLDER_EXPERIENCES,
  PLACEHOLDER_EDUCATION,
  SKILL_CATEGORIES,
} from "../utils/constants";
import "./Resume.css";

const Resume = () => {
  return (
    <div
      className="resume-page section"
      style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}
    >
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>A summary of my professional journey</p>
        </div>

        <div className="resume-page__actions">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="md" icon={<FaDownload />}>
              Download PDF
            </Button>
          </a>
        </div>

        <div className="resume-page__content">
          {/* Header */}
          <motion.div
            className="resume-page__header glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="resume-page__header-info">
              <h2>{PROFILE.name}</h2>
              <p className="resume-page__header-role">{PROFILE.tagline}</p>
              <p>
                {PROFILE.location} • {PROFILE.email}
              </p>
            </div>
          </motion.div>

          {/* Experience Section
          <motion.div
            className="resume-page__section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="resume-page__section-title">
              <FaBriefcase /> Work Experience
            </h3>
            {PLACEHOLDER_EXPERIENCES.map((exp) => (
              <div key={exp._id} className="resume-page__item">
                <div className="resume-page__item-header">
                  <div>
                    <h4>{exp.role}</h4>
                    <p className="resume-page__item-company">{exp.company}</p>
                  </div>
                  <span className="resume-page__item-date">{exp.startDate} — {exp.endDate}</span>
                </div>
                <p className="resume-page__item-desc">{exp.description}</p>
              </div>
            ))}
          </motion.div> */}

          {/* Education */}
          <motion.div
            className="resume-page__section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="resume-page__section-title">
              <FaGraduationCap /> Education
            </h3>
            {PLACEHOLDER_EDUCATION.map((edu) => (
              <div key={edu._id} className="resume-page__item">
                <div className="resume-page__item-header">
                  <div>
                    <h4>{edu.degree}</h4>
                    <p className="resume-page__item-company">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="resume-page__item-date">
                    {edu.startYear} — {edu.endYear}
                  </span>
                </div>
                {edu.grade && (
                  <p className="resume-page__item-desc">Grade: {edu.grade}</p>
                )}
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            className="resume-page__section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="resume-page__section-title">
              <FaCode /> Technical Skills
            </h3>
            <div className="resume-page__skills">
              {SKILL_CATEGORIES.map((cat) => {
                const catSkills = PLACEHOLDER_SKILLS.filter(
                  (s) => s.category === cat.key,
                );
                if (catSkills.length === 0) return null;
                return (
                  <div key={cat.key} className="resume-page__skill-group">
                    <h5 style={{ color: cat.color }}>
                      {cat.icon} {cat.label}
                    </h5>
                    <div className="resume-page__skill-tags">
                      {catSkills.map((s) => (
                        <span key={s.name} className="resume-page__skill-tag">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
