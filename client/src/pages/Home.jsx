import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import Button from "../components/common/Button";
import ProjectCard from "../components/project/ProjectCard";
import ScrollReveal from "../components/common/ScrollReveal";
import { PROFILE, PLACEHOLDER_PROJECTS } from "../utils/constants";
import useFetch from "../hooks/useFetch";
import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

const SplitChars = ({ text, className = "" }) => (
  <>
    {text.split("").map((char, i) => (
      <span
        key={i}
        className={`split-char ${className}`}
        style={{ display: "inline-block", opacity: 0 }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </>
);

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef(null);

  const { data: dbProjects } = useFetch("/projects/featured");
  const featuredProjects =
    dbProjects && dbProjects.length > 0
      ? dbProjects
      : PLACEHOLDER_PROJECTS.filter((p) => p.featured);

  // Typewriter
  useEffect(() => {
    const currentRole = PROFILE.roles[roleIndex];
    let timeout;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
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

  // Entrance animations
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(".split-char", {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.025,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        ".hero-subtitle, .hero-actions, .icons-section, .hero-stats-row",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power1.inOut",
          delay: 0.6,
          stagger: 0.1,
        },
      );
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Scroll parallax
  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing-section",
        start: "top top",
        end: "bottom -20%",
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });
    tl1.to(
      ".landing-container",
      { opacity: 0, y: -120, duration: 1, ease: "power2.in" },
      0,
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".featured-section",
        start: "top 80%",
        end: "top 10%",
        scrub: 1.5,
      },
    });
    tl2.fromTo(
      ".featured-section",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, ease: "power3.out" },
    );

    return () => {
      tl1.kill();
      tl2.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="home">
      {/* Fixed social icons */}
      <div className="icons-section">
        <div className="social-icons">
          <a
            href="https://github.com/roshann635"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/roshan-jadhav-100410339"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <Link to="/contact">
            <FaEnvelope />
          </Link>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="landing-section" ref={heroRef}>
        {/* Ambient background shapes */}
        <div className="hero-ambient">
          <div className="hero-glow hero-glow--1" />
          <div className="hero-glow hero-glow--2" />
          <div className="hero-grid-overlay" />
        </div>

        <div className="landing-container">
          {/* Status badge */}
          <div className="hero-status-badge">
            <span className="hero-status-dot" />
            <span>Available for work</span>
          </div>

          {/* Main headline */}
          <h1 className="hero-headline">
            <SplitChars text="Hi, I'm " />
            <span className="split-char" style={{ display: "inline-block" }}>
              <span className="hero-name-highlight">Roshan</span>
            </span>
          </h1>

          {/* Typewriter subtitle */}
          <p className="hero-subtitle">
            <span className="hero-role-prefix">I am a </span>
            <span className="hero-role-dynamic">{displayText}</span>
            <span className="hero__cursor">|</span>
          </p>

          {/* Bio */}
          <p className="hero-bio">{PROFILE.bio}</p>

          {/* CTA buttons */}
          <div className="hero-actions">
            <Button variant="primary" size="lg" icon={<FaArrowRight />}>
              <Link
                to="/projects"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                View Projects
              </Link>
            </Button>
            <Button variant="secondary" size="lg" icon={<FaEnvelope />}>
              <Link
                to="/contact"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Contact Me
              </Link>
            </Button>
          </div>

          {/* Quick stats row */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <FaCode className="hero-stat-icon" />
              <div>
                <span className="hero-stat-number">15+</span>
                <span className="hero-stat-label">Projects Built</span>
              </div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <FaServer className="hero-stat-icon" />
              <div>
                <span className="hero-stat-number">Full Stack</span>
                <span className="hero-stat-label">MERN Specialist</span>
              </div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <FaDatabase className="hero-stat-icon" />
              <div>
                <span className="hero-stat-number">2+ Years</span>
                <span className="hero-stat-label">Coding Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient transition */}
      <div className="scene-cut-transition" />

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="section featured-section">
        <div className="container">
          <ScrollReveal direction="up" distance={50} duration={0.8}>
            <div className="section-title">
              <h2>Featured Quests</h2>
              <p>My most notable adventures in code</p>
            </div>
          </ScrollReveal>

          <div className="home__projects-grid">
            {featuredProjects.slice(0, 3).map((project, i) => (
              <div className="project-card-wrapper" key={project._id}>
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.3} distance={30}>
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
