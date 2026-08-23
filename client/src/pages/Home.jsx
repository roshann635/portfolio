import { useState, useEffect } from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import Button from '../components/common/Button';
import ProjectCard from '../components/project/ProjectCard';
import ScrollReveal from '../components/common/ScrollReveal';
import Terminal from '../components/common/Terminal';
import ProfileModal from '../components/common/ProfileModal';
import {
  PROFILE,
  PLACEHOLDER_PROJECTS,
  PLACEHOLDER_ACHIEVEMENTS,
  PLACEHOLDER_EDUCATION,
} from '../utils/constants';
import useFetch from '../hooks/useFetch';
import './Home.css';

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const { data: dbProjects } = useFetch('/projects/featured');
  const featuredProjects =
    dbProjects && dbProjects.length > 0
      ? dbProjects
      : PLACEHOLDER_PROJECTS.filter((p) => p.featured);

  const edu = PLACEHOLDER_EDUCATION[0];

  // Smooth scroll handler for Selected Work
  const scrollToSelectedWork = (e) => {
    e?.preventDefault();
    const el = document.getElementById('selected-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Typewriter
  useEffect(() => {
    const currentRole = PROFILE.roles[roleIndex];
    let timeout;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PROFILE.roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__content">
          {/* Status Eyebrow */}
          <div className="hero__status-badge">
            <span className="hero__status-pulse" />
            <span>{PROFILE.status}</span>
          </div>

          <h1 className="hero__name">
            {PROFILE.name}
            <span className="hero__name-rule" />
          </h1>

          <h2 className="hero__title">{PROFILE.title}</h2>

          <p className="hero__subtitle">
            <span className="hero__role-prefix">Specializing in </span>
            <span className="hero__role-dynamic">{displayText}</span>
            <span className="hero__cursor">|</span>
          </p>

          <p className="hero__bio">{PROFILE.bio}</p>

          <div className="hero__actions">
            <Button
              variant="primary"
              size="lg"
              icon={<FaArrowRight />}
              onClick={scrollToSelectedWork}
              href="#selected-work"
            >
              Explore Selected Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={<FaDownload />}
              href="/Roshan-Jadhav-Resume.pdf"
            >
              Download Resume ↓
            </Button>
          </div>

          {/* Core Tech Stack Strip (Pillars First) */}
          <div className="hero__tech-strip">
            {['Python', 'React 19', 'Node.js', 'FastAPI', 'AI/ML', 'PostgreSQL', 'Redis', 'Docker'].map((tech) => (
              <span key={tech} className="hero__tech-pill">
                {tech}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">{PROFILE.stats.projects}</span>
              <span className="hero__stat-label">Projects Built</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">{PROFILE.stats.cgpa}</span>
              <span className="hero__stat-label">CGPA</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">{PROFILE.stats.hackathons}</span>
              <span className="hero__stat-label">National Finalist</span>
            </div>
          </div>

          {/* Achievement badges */}
          <div className="hero__achievements">
            {PLACEHOLDER_ACHIEVEMENTS.map((a) => (
              <span key={a._id} className="hero__achievement-badge">
                {a.title}
              </span>
            ))}
          </div>
        </div>

        {/* Right Hero Column: Photo Credentials Plate + Terminal */}
        <div className="hero__right">
          <div
            className="hero__credentials"
            onClick={() => setIsProfileModalOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Maximize profile dossier and credentials"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsProfileModalOpen(true);
              }
            }}
          >
            <div className="hero__portrait">
              <img
                src={PROFILE.avatar || '/photo.jpg'}
                alt={PROFILE.name}
                className="hero__portrait-img"
              />
              <span className="hero__portrait-expand-badge">MAXIMIZE</span>
            </div>
            <div className="hero__credential-info">
              <div className="hero__credential-item">
                <span className="hero__credential-label">Location</span>
                <span className="hero__credential-value">{PROFILE.location}</span>
              </div>
              <div className="hero__credential-item">
                <span className="hero__credential-label">Institute</span>
                <span className="hero__credential-value">{edu?.institution}</span>
              </div>
              <div className="hero__credential-item">
                <span className="hero__credential-label">Academic Record</span>
                <span className="hero__credential-value hero__credential-value--highlight">
                  {edu?.grade}
                </span>
                <span className="hero__credential-sub">
                  {edu?.degree} · {edu?.startYear}–{edu?.endYear}
                </span>
              </div>
            </div>
          </div>

          <div className="hero__terminal-wrapper">
            <Terminal />
          </div>
        </div>
      </section>

      {/* Profile Maximized Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />

      {/* ===== SELECTED WORK ===== */}
      <section className="section featured-section" id="selected-work">
        <div className="container">
          <ScrollReveal>
            <div className="section-title">
              <h2>Selected work</h2>
              <p>End-to-end architectures and intelligent software systems</p>
            </div>
          </ScrollReveal>

          <div className="home__projects-grid">
            {featuredProjects.slice(0, 4).map((project, i) => (
              <ProjectCard key={project._id} project={project} index={i} />
            ))}
          </div>

          <div className="home__projects-cta">
            <Button variant="secondary" size="md" icon={<FaArrowRight />} to="/projects">
              View all projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
