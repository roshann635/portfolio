import { useState } from 'react';
import { FaArrowRight, FaGithub, FaProjectDiagram, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ArchitectureDiagram from './ArchitectureDiagram';
import './ProjectCard.css';

const HAS_DIAGRAM_IDS = ['1', '14', '3', '4'];

const ProjectCard = ({ project }) => {
  const { _id, title, description, techStack, liveUrl, githubUrl } = project;
  const [showArch, setShowArch] = useState(false);
  const hasDiagram = HAS_DIAGRAM_IDS.includes(String(_id));

  return (
    <div className={`project-card ${showArch ? 'project-card--expanded' : ''}`}>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      <p className="project-card__tech">{techStack?.join(' · ')}</p>

      {hasDiagram && showArch && (
        <div className="project-card__arch-drawer">
          <ArchitectureDiagram projectId={String(_id)} />
        </div>
      )}

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

        {hasDiagram && (
          <button
            type="button"
            className="project-card__diagram-btn"
            onClick={() => setShowArch((prev) => !prev)}
            aria-expanded={showArch}
          >
            <FaProjectDiagram />
            <span>{showArch ? 'Hide Architecture' : 'Architecture'}</span>
            {showArch ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
