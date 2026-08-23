import { FaDownload } from 'react-icons/fa';
import Button from '../components/common/Button';
import {
  PROFILE,
  PLACEHOLDER_SKILLS,
  PLACEHOLDER_EDUCATION,
  PLACEHOLDER_EXPERIENCES,
  PLACEHOLDER_ACHIEVEMENTS,
  SKILL_CATEGORIES,
} from '../utils/constants';
import ScrollReveal from '../components/common/ScrollReveal';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-page section" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-3xl))' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-title">
            <h2>Resume</h2>
            <p>A summary of my professional journey</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
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
          <ScrollReveal>
            <div className="resume-page__header">
              <h2>{PROFILE.name}</h2>
              <p className="resume-page__header-role">{PROFILE.tagline}</p>
              <p className="resume-page__header-contact">{PROFILE.location} &middot; {PROFILE.email}</p>
            </div>
          </ScrollReveal>

          {/* Experience */}
          <ScrollReveal>
            <div className="resume-page__section">
              <h3 className="resume-page__section-title">Experience</h3>
              <div className="resume-page__timeline">
                {PLACEHOLDER_EXPERIENCES.map((exp) => (
                  <div key={exp._id} className="resume-page__timeline-item">
                    <div className="resume-page__timeline-dot" />
                    <div className="resume-page__timeline-content">
                      <div className="resume-page__item-header">
                        <div>
                          <h4>{exp.role}</h4>
                          <p className="resume-page__item-company">{exp.company}</p>
                        </div>
                        <span className="resume-page__item-date">{exp.startDate} &mdash; {exp.endDate}</span>
                      </div>
                      <p className="resume-page__item-desc">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Achievements */}
          <ScrollReveal>
            <div className="resume-page__section">
              <h3 className="resume-page__section-title">Achievements</h3>
              <div className="resume-page__achievements">
                {PLACEHOLDER_ACHIEVEMENTS.map((a) => (
                  <div key={a._id} className="resume-page__achievement">
                    <div className="resume-page__timeline-dot" />
                    <div className="resume-page__achievement-content">
                      <span className="resume-page__achievement-title">{a.title}</span>
                      {a.org && <span className="resume-page__achievement-org">{a.org}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal>
            <div className="resume-page__section">
              <h3 className="resume-page__section-title">Education</h3>
              <div className="resume-page__timeline">
                {PLACEHOLDER_EDUCATION.map((edu) => (
                  <div key={edu._id} className="resume-page__timeline-item">
                    <div className="resume-page__timeline-dot" />
                    <div className="resume-page__timeline-content">
                      <div className="resume-page__item-header">
                        <div>
                          <h4>{edu.degree}</h4>
                          <p className="resume-page__item-company">{edu.institution}</p>
                        </div>
                        <span className="resume-page__item-date">
                          {edu.startYear ? `${edu.startYear} &mdash; ${edu.endYear}` : ''}
                        </span>
                      </div>
                      {edu.grade && <p className="resume-page__item-desc">Grade: {edu.grade}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal>
            <div className="resume-page__section">
              <h3 className="resume-page__section-title">Technical Skills</h3>
              <div className="resume-page__skills">
                {SKILL_CATEGORIES.map((cat) => {
                  const catSkills = PLACEHOLDER_SKILLS.filter((s) => s.category === cat.key);
                  if (catSkills.length === 0) return null;
                  return (
                    <div key={cat.key} className="resume-page__skill-group">
                      <h5>{cat.label}</h5>
                      <div className="resume-page__skill-tags">
                        {catSkills.map((s) => (
                          <span key={s.name} className="resume-page__skill-tag">{s.name}</span>
                        ))}
                      </div>
                    </div>
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
