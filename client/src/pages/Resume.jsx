import { motion } from "framer-motion";
import {
  FaDownload,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import Button from "../components/common/Button";
import {
  PROFILE,
  PLACEHOLDER_SKILLS,
  PLACEHOLDER_EDUCATION,
  SKILL_CATEGORIES,
} from "../utils/constants";
import ScrollReveal from "../components/common/ScrollReveal";
import "./Resume.css";

const Resume = () => {
  return (
    <div
      className="resume-page section"
      style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}
    >
      <div className="container">
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <div className="section-title">
            <h2>Resume</h2>
            <p>A summary of my professional journey</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={30} delay={0.1}>
          <div className="resume-page__actions">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md" icon={<FaDownload />}>
                Download PDF
              </Button>
            </a>
          </div>
        </ScrollReveal>

        <div className="resume-page__content">
          {/* Header */}
          <ScrollReveal direction="up" distance={40} delay={0.15}>
            <motion.div
              className="resume-page__header glass-card"
              whileHover={{ y: -4, boxShadow: "0 0 25px rgba(0, 255, 204, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="resume-page__header-info">
                <h2>{PROFILE.name}</h2>
                <p className="resume-page__header-role">{PROFILE.tagline}</p>
                <p>
                  {PROFILE.location} • {PROFILE.email}
                </p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal direction="up" distance={40} delay={0.2}>
            <div className="resume-page__section">
              <h3 className="resume-page__section-title">
                <FaGraduationCap /> Education
              </h3>
              {PLACEHOLDER_EDUCATION.map((edu, i) => (
                <ScrollReveal key={edu._id} direction="left" distance={30} delay={i * 0.08}>
                  <div className="resume-page__item">
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
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal direction="up" distance={40} delay={0.25}>
            <div className="resume-page__section">
              <h3 className="resume-page__section-title">
                <FaCode /> Technical Skills
              </h3>
              <div className="resume-page__skills">
                {SKILL_CATEGORIES.map((cat, catIdx) => {
                  const catSkills = PLACEHOLDER_SKILLS.filter(
                    (s) => s.category === cat.key,
                  );
                  if (catSkills.length === 0) return null;
                  return (
                    <ScrollReveal key={cat.key} direction="up" distance={25} delay={catIdx * 0.06}>
                      <div className="resume-page__skill-group">
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
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Resume;
