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
import ProfileModal from "../components/common/ProfileModal";
import "./About.css";

const About = () => {
  const { data: dbSkills } = useFetch("/skills");
  const { data: dbEducation } = useFetch("/education");
  const { data: dbCertificates } = useFetch("/certificates");

  const [previewImage, setPreviewImage] = useState(null);
  const [expandedIssuers, setExpandedIssuers] = useState({});
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

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
            <div
              className="about__portrait"
              onClick={() => setIsProfileModalOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Maximize profile photo and dossier"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsProfileModalOpen(true);
                }
              }}
            >
              <img
                src={PROFILE.avatar || "/photo.jpg"}
                alt={PROFILE.name}
                className="about__portrait-img"
              />
              <span className="about__portrait-expand-badge">MAXIMIZE</span>
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

        {/* Engineering Journey */}
        <section className="about__journey">
          <ScrollReveal>
            <div className="section-title">
              <h2>Engineering Journey</h2>
              <p>Technical evolution and milestones</p>
            </div>
          </ScrollReveal>

          <div className="about__journey-grid">
            <ScrollReveal>
              <div className="about__journey-card">
                <span className="about__journey-year">2024</span>
                <h4>CS Foundations & DSA</h4>
                <p>
                  Commenced B.Tech in CSE (9.28 CGPA), mastering core data
                  structures, algorithms, and modular object-oriented systems in
                  C++ and Python.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="about__journey-card">
                <span className="about__journey-year">2025</span>
                <h4>Full-Stack & 3× Hackathons</h4>
                <p>
                  Architected full-stack web platforms (React, Node.js, FastAPI)
                  and placed as a 3× National Finalist across competitive
                  hackathons.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="about__journey-card about__journey-card--highlight">
                <span className="about__journey-year">2026</span>
                <h4>AI/ML & Distributed Systems</h4>
                <p>
                  Engineered CoCompute (LAN distributed computing platform) and
                  containerized sandboxes with Redis, Docker, and OpenCV/Gemini
                  OCR.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="about__journey-card">
                <span className="about__journey-year">2027+</span>
                <h4>Scalable Systems & AI Architecture</h4>
                <p>
                  Targeting large-scale distributed backends, low-latency
                  microservices, and production ML deployment pipelines.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

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

        {/* Currently Exploring */}
        <section className="about__learning">
          <ScrollReveal>
            <div className="section-title">
              <h2>Currently Exploring</h2>
              <p>Active learning and technical deep-dives</p>
            </div>
          </ScrollReveal>

          <div className="about__learning-grid">
            {PROFILE.currentlyLearning?.map((item) => (
              <ScrollReveal key={item.number}>
                <div className="about__learning-card">
                  <span className="about__learning-num">{item.number}</span>
                  <div className="about__learning-info">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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

      {/* Profile Maximized Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
};

export default About;
