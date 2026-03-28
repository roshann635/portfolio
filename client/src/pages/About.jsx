import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import {
  PROFILE,
  PLACEHOLDER_SKILLS,
  PLACEHOLDER_EXPERIENCES,
  PLACEHOLDER_EDUCATION,
  SKILL_CATEGORIES,
} from "../utils/constants";
import useFetch from "../hooks/useFetch";
import "./About.css";

const About = () => {
  const { data: dbSkills } = useFetch("/skills");

  const { data: dbEducation } = useFetch("/education");

  const skills =
    dbSkills && dbSkills.length > 0 ? dbSkills : PLACEHOLDER_SKILLS;

  const education =
    dbEducation && dbEducation.length > 0 ? dbEducation : PLACEHOLDER_EDUCATION;

  return (
    <div
      className="about section"
      style={{ paddingTop: "calc(var(--nav-height) + var(--space-3xl))" }}
    >
      <div className="container">
        {/* About Header */}
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know the developer behind the code</p>
        </div>

        <motion.div
          className="about__intro glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        {/* Skills - RPG Stats */}
        <section className="about__skills">
          <div className="section-title">
            <h2>Skill Tree</h2>
            <p>Character stats & abilities</p>
          </div>

          {SKILL_CATEGORIES.map((category) => {
            const catSkills = skills.filter((s) => s.category === category.key);
            if (catSkills.length === 0) return null;

            return (
              <motion.div
                key={category.key}
                className="about__skill-group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            );
          })}
        </section>

        {/* Experience Timeline
        <section className="about__timeline">
          <div className="section-title">
            <h2>Quest Log</h2>
            <p>Professional journey & adventures</p>
          </div>

          <div className="about__timeline-track">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp._id}
                className="about__timeline-item glass-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="about__timeline-dot" />
                <div className="about__timeline-icon"><FaBriefcase /></div>
                <h4>{exp.role}</h4>
                <p className="about__timeline-company">{exp.company}</p>
                <span className="about__timeline-date">
                  <FaCalendarAlt /> {exp.startDate} — {exp.endDate}
                  {exp.current && <span className="badge teal" style={{ marginLeft: '8px' }}>Current</span>}
                </span>
                <p className="about__timeline-desc">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* Education */}
        <section className="about__education">
          <div className="section-title">
            <h2>Training Grounds</h2>
            <p>Academic qualifications</p>
          </div>

          <div className="about__education-grid">
            {education.map((edu, i) => (
              <motion.div
                key={edu._id}
                className="about__education-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
