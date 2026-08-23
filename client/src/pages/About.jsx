import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaChevronDown, FaTimes } from "react-icons/fa";
import {
  PROFILE,
  PLACEHOLDER_SKILLS,
  PLACEHOLDER_EDUCATION,
  PLACEHOLDER_CERTIFICATES,
  SKILL_CATEGORIES,
} from "../utils/constants";
import useFetch from "../hooks/useFetch";
import ScrollReveal from "../components/common/ScrollReveal";
import GitHubStats from "../components/common/GitHubStats";
import "./About.css";

const About = () => {
  const { data: dbSkills } = useFetch("/skills");
  const { data: dbEducation } = useFetch("/education");
  const { data: dbCertificates } = useFetch("/certificates");

  const [previewImage, setPreviewImage] = useState(null);
  const [expandedIssuers, setExpandedIssuers] = useState({});

  const skills =
    dbSkills && dbSkills.length > 0 ? dbSkills : PLACEHOLDER_SKILLS;
  const education =
    dbEducation && dbEducation.length > 0 ? dbEducation : PLACEHOLDER_EDUCATION;
  const certificates =
    dbCertificates && dbCertificates.length > 0
      ? dbCertificates
      : PLACEHOLDER_CERTIFICATES;

  // Group certificates by issuer
  const certsByIssuer = certificates.reduce((acc, cert) => {
    const issuer = cert.issuer || "Other";
    if (!acc[issuer]) acc[issuer] = [];
    acc[issuer].push(cert);
    return acc;
  }, {});

  const toggleIssuer = (issuer) => {
    setExpandedIssuers((prev) => ({ ...prev, [issuer]: !prev[issuer] }));
  };

  return (
    <div
      className="about section"
      style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}
    >
      <div className="container">
        {/* Header */}
        <ScrollReveal>
          <div className="section-title">
            <h2>About</h2>
            <p>Background and capabilities</p>
          </div>
        </ScrollReveal>

        {/* Intro: three-column (portrait + bio + facts) */}
        <ScrollReveal>
          <div className="about__intro">
            <div className="about__portrait">
              <img
                src={PROFILE.avatar || "/photo.jpg"}
                alt={PROFILE.name}
                className="about__portrait-img"
              />
            </div>
            <div className="about__intro-bio">
              <h3>{PROFILE.name}</h3>
              <p className="about__intro-role">{PROFILE.tagline}</p>
              <p className="about__intro-text">{PROFILE.bio}</p>
            </div>
            <div className="about__intro-facts">
              <div className="about__fact">
                <span className="about__fact-label">Location</span>
                <span className="about__fact-value">
                  <FaMapMarkerAlt /> {PROFILE.location}
                </span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Current</span>
                <span className="about__fact-value">
                  Infosys Springboard Intern
                </span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Focus</span>
                <span className="about__fact-value">MERN Stack & AI/GenAI</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Status</span>
                <span className="about__fact-value">Open to opportunities</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Live GitHub Stats */}
        <ScrollReveal>
          <GitHubStats username="roshann635" />
        </ScrollReveal>

        {/* Skills */}
        <section className="about__skills">
          <ScrollReveal>
            <div className="section-title">
              <h2>Skills</h2>
              <p>Technologies and tools I work with</p>
            </div>
          </ScrollReveal>

          {SKILL_CATEGORIES.map((category) => {
            const catSkills = skills.filter((s) => s.category === category.key);
            if (catSkills.length === 0) return null;
            return (
              <ScrollReveal key={category.key}>
                <div className="about__skill-group">
                  <h4 className="about__skill-category">{category.label}</h4>
                  <div className="about__skill-pills">
                    {catSkills.map((skill) => (
                      <span key={skill.name} className="about__skill-pill">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </section>

        {/* Education */}
        <section className="about__education">
          <ScrollReveal>
            <div className="section-title">
              <h2>Education</h2>
              <p>Academic qualifications</p>
            </div>
          </ScrollReveal>

          <div className="about__education-list">
            {education.map((edu) => (
              <ScrollReveal key={edu._id}>
                <div className="about__education-item">
                  <div className="about__education-dot" />
                  <div className="about__education-content">
                    <h4>{edu.degree}</h4>
                    <p className="about__education-inst">{edu.institution}</p>
                    <div className="about__education-meta">
                      {edu.startYear && (
                        <span>
                          {edu.startYear} — {edu.endYear}
                        </span>
                      )}
                      {edu.grade && (
                        <span className="about__education-grade">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="about__certs">
          <ScrollReveal>
            <div className="section-title">
              <h2>Certifications</h2>
              <p>{certificates.length} credentials earned</p>
            </div>
          </ScrollReveal>

          <div className="about__certs-accordion">
            {Object.entries(certsByIssuer).map(([issuer, certs]) => (
              <div key={issuer} className="about__certs-group">
                <button
                  className={`about__certs-header ${expandedIssuers[issuer] ? "about__certs-header--open" : ""}`}
                  onClick={() => toggleIssuer(issuer)}
                  aria-expanded={!!expandedIssuers[issuer]}
                >
                  <span className="about__certs-issuer">{issuer}</span>
                  <span className="about__certs-count">{certs.length}</span>
                  <FaChevronDown className="about__certs-chevron" />
                </button>
                {expandedIssuers[issuer] && (
                  <div className="about__certs-list">
                    {certs.map((cert) => (
                      <div key={cert._id} className="about__cert-row">
                        <span className="about__cert-title">{cert.title}</span>
                        {cert.image && (
                          <button
                            className="about__cert-view"
                            onClick={() => setPreviewImage(cert.image)}
                            aria-label={`View ${cert.title}`}
                          >
                            View
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
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
