import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCertificate,
  FaTimes,
} from "react-icons/fa";
import {
  PROFILE,
  PLACEHOLDER_SKILLS,
  PLACEHOLDER_EDUCATION,
  PLACEHOLDER_CERTIFICATES,
  SKILL_CATEGORIES,
} from "../utils/constants";
import useFetch from "../hooks/useFetch";
import ScrollReveal from "../components/common/ScrollReveal";
import "./About.css";

const About = () => {
  const { data: dbSkills } = useFetch("/skills");
  const { data: dbEducation } = useFetch("/education");
  const { data: dbCertificates } = useFetch("/certificates");

  const [previewImage, setPreviewImage] = useState(null);

  const skills =
    dbSkills && dbSkills.length > 0 ? dbSkills : PLACEHOLDER_SKILLS;

  const education =
    dbEducation && dbEducation.length > 0 ? dbEducation : PLACEHOLDER_EDUCATION;

  const certificates =
    dbCertificates && dbCertificates.length > 0
      ? dbCertificates
      : PLACEHOLDER_CERTIFICATES;

  return (
    <div
      className="about section"
      style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}
    >
      <div className="container">
        {/* About Header */}
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <div className="section-title">
            <h2>About Me</h2>
            <p>Get to know the developer behind the code</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={50} delay={0.1}>
          <motion.div
            className="about__intro glass-card"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="about__intro-avatar">
              <span>👨‍💻</span>
            </div>
            <div className="about__intro-content">
              <h3>{PROFILE.name}</h3>
              <p className="about__intro-role">{PROFILE.tagline}</p>
              <p className="about__intro-bio">{PROFILE.bio}</p>
              <div className="about__intro-meta">
                <span>
                  <FaMapMarkerAlt /> {PROFILE.location}
                </span>
                <span className="badge teal">🟢 Available for hire</span>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Skills - RPG Stats */}
        <section className="about__skills">
          <ScrollReveal direction="up" distance={40}>
            <div className="section-title">
              <h2>Skill Tree</h2>
              <p>Character stats & abilities</p>
            </div>
          </ScrollReveal>

          {SKILL_CATEGORIES.map((category, catIdx) => {
            const catSkills = skills.filter((s) => s.category === category.key);
            if (catSkills.length === 0) return null;

            return (
              <ScrollReveal
                key={category.key}
                direction="left"
                distance={40}
                delay={catIdx * 0.08}
              >
                <div className="about__skill-group">
                  <h4 className="about__skill-category">
                    <span>{category.icon}</span> {category.label}
                  </h4>
                  <div className="about__skill-list">
                    {catSkills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        className="about__skill-item"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <div className="about__skill-header">
                          <span className="about__skill-name">{skill.name}</span>
                          <span
                            className="about__skill-level"
                            style={{ color: category.color }}
                          >
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="stat-bar">
                          <motion.div
                            className="stat-bar-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i * 0.05 }}
                            style={{
                              background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </section>

        {/* Education */}
        <section className="about__education">
          <ScrollReveal direction="up" distance={40}>
            <div className="section-title">
              <h2>Training Grounds</h2>
              <p>Academic qualifications</p>
            </div>
          </ScrollReveal>

          <div className="about__education-grid">
            {education.map((edu, i) => (
              <ScrollReveal
                key={edu._id}
                direction="up"
                distance={40}
                delay={i * 0.1}
              >
                <motion.div
                  className="about__education-card glass-card"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 0 25px rgba(0, 255, 204, 0.12)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="about__education-icon">
                    <FaGraduationCap />
                  </div>
                  <h4>{edu.degree}</h4>
                  <p className="about__education-inst">{edu.institution}</p>
                  <div className="about__education-meta">
                    <span>
                      {edu.startYear} — {edu.endYear}
                    </span>
                    {edu.grade && (
                      <span className="badge amber">{edu.grade}</span>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section className="about__certificates">
          <ScrollReveal direction="up" distance={40}>
            <div className="section-title">
              <h2>Achievements Unlocked</h2>
              <p>Certifications & credentials earned</p>
            </div>
          </ScrollReveal>

          <div className="about__certificates-grid">
            {certificates.map((cert, i) => (
              <ScrollReveal
                key={cert._id}
                direction="up"
                distance={40}
                delay={i * 0.1}
              >
                <motion.div
                  className="about__certificate-card glass-card"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 0 25px rgba(108, 99, 255, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Screenshot thumbnail */}
                  {cert.image && (
                    <div
                      className="about__certificate-image"
                      onClick={() => setPreviewImage(cert.image)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setPreviewImage(cert.image)
                      }
                    >
                      <img src={cert.image} alt={cert.title} loading="lazy" />
                      <div className="about__certificate-image-overlay">
                        <span>View</span>
                      </div>
                    </div>
                  )}

                  <div className="about__certificate-body">
                    <div className="about__certificate-icon">
                      <FaCertificate />
                    </div>
                    <h4 className="about__certificate-title">{cert.title}</h4>
                    <p className="about__certificate-issuer">{cert.issuer}</p>
                    <div className="about__certificate-meta">
                      {cert.date && <span className="about__certificate-date">{cert.date}</span>}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox for certificate screenshots */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            className="about__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              className="about__lightbox-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="about__lightbox-close"
                onClick={() => setPreviewImage(null)}
                aria-label="Close preview"
              >
                <FaTimes />
              </button>
              <img src={previewImage} alt="Certificate" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
