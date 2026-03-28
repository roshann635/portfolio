import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaBriefcase,
  FaUsers,
  FaCoffee,
} from "react-icons/fa";
import Button from "../components/common/Button";
import ProjectCard from "../components/project/ProjectCard";
import {
  PROFILE,
  PLACEHOLDER_PROJECTS,
  PLACEHOLDER_SKILLS,
} from "../utils/constants";
import { generateParticles } from "../utils/helpers";
import useFetch from "../hooks/useFetch";
import "./Home.css";

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const particles = useMemo(() => generateParticles(25), []);

  const { data: dbProjects } = useFetch("/projects/featured");
  const featuredProjects =
    dbProjects && dbProjects.length > 0
      ? dbProjects
      : PLACEHOLDER_PROJECTS.filter((p) => p.featured);

  // Typewriter effect
  useEffect(() => {
    const currentRole = PROFILE.roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PROFILE.roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1),
          );
        },
        isDeleting ? 50 : 100,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const stats = [
    {
      icon: <FaCode />,
      value: PROFILE.stats.projects,
      label: "Projects",
      color: "var(--accent-primary)",
    },
    // { icon: <FaBriefcase />, value: `${PROFILE.stats.experience} Yrs`, label: 'Experience', color: 'var(--accent-secondary)' },
    // { icon: <FaUsers />, value: PROFILE.stats.clients, label: 'Clients', color: 'var(--accent-tertiary)' },
    // { icon: <FaCoffee />, value: PROFILE.stats.coffee, label: 'Coffees', color: 'var(--accent-quaternary)' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="particles">
          {particles.map((p) => (
            <div
              key={p.id}
              className="particle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                "--tx": p.tx,
                "--ty": p.ty,
                "--duration": p.duration,
                "--delay": p.delay,
              }}
            />
          ))}
        </div>

        <div className="hero__glow" />

        <div className="container hero__content">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero__greeting badge teal">
              👋 Welcome to my digital realm
            </span>
            <h1 className="hero__title">
              Hi, I'm <span className="hero__name">{PROFILE.name}</span>
            </h1>
            <div className="hero__role">
              <span className="hero__role-text">{displayText}</span>
              <span className="hero__cursor">|</span>
            </div>
            <p className="hero__bio">{PROFILE.bio}</p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" icon={<FaArrowRight />}>
                <Link
                  to="/projects"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  View Quests
                </Link>
              </Button>
              <Button variant="secondary" size="lg">
                <Link
                  to="/contact"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Contact Me
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero__avatar-wrapper">
              <div className="hero__avatar-ring" />
              <div className="hero__avatar-ring hero__avatar-ring--2" />
              <div className="hero__avatar">
                <span className="hero__avatar-emoji">👨‍💻</span>
              </div>
            </div>
            <div className="hero__level badge amber">Programmer</div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section
      <section className="home-stats">
        <div className="container">
          <div className="home-stats__grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="home-stats__card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="home-stats__icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <h3 className="home-stats__value">{stat.value}</h3>
                <p className="home-stats__label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Quests</h2>
            <p>My most notable adventures in code</p>
          </div>
          <div className="home__projects-grid">
            {featuredProjects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project._id} project={project} index={i} />
            ))}
          </div>
          <div className="home__projects-cta">
            <Button variant="secondary" size="md" icon={<FaArrowRight />}>
              <Link
                to="/projects"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                View All Quests
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
