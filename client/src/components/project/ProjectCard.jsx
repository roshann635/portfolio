import { useState } from 'react';
import {
  FaArrowRight,
  FaGithub,
  FaProjectDiagram,
  FaChevronDown,
  FaChevronUp,
  FaLightbulb,
  FaBookOpen,
} from 'react-icons/fa';
import ArchitectureDiagram from './ArchitectureDiagram';
import CaseStudyModal from './CaseStudyModal';
import './ProjectCard.css';

const HAS_DIAGRAM_IDS = ['1', '14', '3', '4'];
const HAS_CASE_STUDY_IDS = ['14', '1', '3', '4'];

const ProjectCard = ({ project }) => {
  const {
    _id,
    title,
    subtitle,
    role,
    tags,
    description,
    techStack,
    liveUrl,
    githubUrl,
    status,
    statusType = 'live',
    challenges,
    rank,
  } = project;

  const [showArch, setShowArch] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  const hasDiagram = HAS_DIAGRAM_IDS.includes(String(_id));
  const hasChallenges = challenges && challenges.length > 0;
  const hasCaseStudy = HAS_CASE_STUDY_IDS.includes(String(_id));

  return (
    <>
      <div className={`project-card ${showArch || showChallenges ? 'project-card--expanded' : ''}`}>
        {/* Top Meta: Rank, Domain Tags & Status */}
        <div className="project-card__header">
          <div className="project-card__rank-group">
            {rank && <span className="project-card__rank">{rank}</span>}
            {tags && tags.length > 0 && (
              <div className="project-card__tags">
                {tags.map((t) => (
                  <span key={t} className="project-card__tag">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
          {status && (
            <span className={`project-card__status project-card__status--${statusType}`}>
              <span className="project-card__status-dot" />
              {status}
            </span>
          )}
        </div>

        <h3 className="project-card__title">{title}</h3>
        {subtitle && <p className="project-card__subtitle">{subtitle}</p>}
        {role && (
          <p className="project-card__role">
            <span className="project-card__role-label">ROLE //</span> {role}
          </p>
        )}
        <p className="project-card__desc">{description}</p>
        <p className="project-card__tech">{techStack?.join(' · ')}</p>

        {/* Engineering Challenges Drawer */}
        {hasChallenges && showChallenges && (
          <div className="project-card__challenges-drawer">
            <div className="project-card__challenges-header">
              <FaLightbulb /> Engineering Decisions & Solutions
            </div>
            {challenges.map((c, i) => (
              <div key={i} className="project-card__challenge-item">
                <p className="project-card__challenge-q">
                  <strong>Challenge:</strong> {c.challenge}
                </p>
                <p className="project-card__challenge-a">
                  <strong>Solution:</strong> {c.solution}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Architecture Drawer */}
        {hasDiagram && showArch && (
          <div className="project-card__arch-drawer">
            <ArchitectureDiagram projectId={String(_id)} />
          </div>
        )}

        {/* Action Footer */}
        <div className="project-card__links">
          <div className="project-card__action-group">
            {liveUrl && liveUrl !== '#' && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--primary"
              >
                View live <FaArrowRight />
              </a>
            )}
            {githubUrl && githubUrl !== '#' && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--secondary"
              >
                View code <FaGithub />
              </a>
            )}
          </div>

          <div className="project-card__toggles">
            {hasCaseStudy && (
              <button
                type="button"
                className="project-card__diagram-btn project-card__diagram-btn--highlight"
                onClick={() => setShowCaseStudy(true)}
                aria-label={`Open case study for ${title}`}
              >
                <FaBookOpen />
                <span>Case Study</span>
              </button>
            )}

            {hasChallenges && (
              <button
                type="button"
                className="project-card__diagram-btn"
                onClick={() => setShowChallenges((prev) => !prev)}
                aria-expanded={showChallenges}
              >
                <FaLightbulb />
                <span>{showChallenges ? 'Hide Decisions' : 'Decisions'}</span>
                {showChallenges ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            )}

            {hasDiagram && (
              <button
                type="button"
                className="project-card__diagram-btn"
                onClick={() => setShowArch((prev) => !prev)}
                aria-expanded={showArch}
              >
                <FaProjectDiagram />
                <span>{showArch ? 'Hide Arch' : 'Architecture'}</span>
                {showArch ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Deep-Dive Lightbox */}
      <CaseStudyModal
        isOpen={showCaseStudy}
        onClose={() => setShowCaseStudy(false)}
        project={project}
      />
    </>
  );
};

export default ProjectCard;
