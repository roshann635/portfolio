export const NAV_LINKS = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "About", path: "/about", icon: "👤" },
  { name: "Projects", path: "/projects", icon: "🚀" },
  { name: "Resume", path: "/resume", icon: "📄" },
  { name: "Contact", path: "/contact", icon: "💬" },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", url: "https://github.com/roshann635", icon: "FaGithub" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/roshan-jadhav-100410339",
    icon: "FaLinkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/roshann_635",
    icon: "FaInstagram",
  },
  {
    name: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=roshanjadhav4385@gmail.com",
    icon: "FaEnvelope",
  },
];

export const SKILL_CATEGORIES = [
  { key: "frontend", label: "Frontend", icon: "🎨", color: "#6c63ff" },
  { key: "backend", label: "Backend", icon: "⚙️", color: "#00d4aa" },
  { key: "database", label: "Database", icon: "🗃️", color: "#f59e0b" },
  { key: "tools", label: "DevOps & Tools", icon: "🛠️", color: "#ec4899" },
];

export const PROJECT_CATEGORIES = [
  { key: "all", label: "All Quests" },
  { key: "web", label: "Web Apps" },
  { key: "ai", label: "AI / ML" },
  { key: "other", label: "Other" },
];

export const PROFILE = {
  name: "Roshan",
  tagline: "Full Stack Developer & Creative Coder",
  roles: [
    "CSE Student",
    "Full Stack Developer",
    "DSA Enthusiast",
    "Problem Solver",
  ],
  bio: "Passionate CSE student with a love for creating beautiful, performant web applications. I turn complex problems into elegant solutions. When I’m not coding, you can find me exploring new tech, gaming, or sipping coffee while brainstorming my next project. Let’s build something amazing together!",
  location: "Nashik, Maharashtra, India",
  email: "roshanjadhav4385@gmail.com",
  avatar: "",
  stats: {
    projects: 10,
  },
};

// Placeholder data for when DB is empty
export const PLACEHOLDER_SKILLS = [
  { name: "React", category: "frontend", proficiency: 90 },
  { name: "JavaScript", category: "frontend", proficiency: 92 },

  { name: "HTML/CSS", category: "frontend", proficiency: 95 },
  { name: "Node.js", category: "backend", proficiency: 85 },
  { name: "Express", category: "backend", proficiency: 82 },
  { name: "Python", category: "backend", proficiency: 40 },
  { name: "MongoDB", category: "database", proficiency: 80 },
  { name: "PostgreSQL", category: "database", proficiency: 30 },
  { name: "Git", category: "tools", proficiency: 88 },
  { name: "AWS", category: "tools", proficiency: 60 },
];

export const PLACEHOLDER_PROJECTS = [
  {
    _id: "1",
    title: "SevaSetu--A-platform-connecting-NGO-S-Donors-Volunteer",
    description:
      "A web platform that connects NGOs, donors, and volunteers to facilitate social impact projects and community support.",
    techStack: ["React", "Node.js", "MongoDB"],
    category: "web",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },
  {
    _id: "2",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart, payments, and admin dashboard built with MERN stack.",
    techStack: ["React", "Node.js", "MongoDB"],
    category: "web",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },
  {
    _id: "3",
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot powered by GPT with real-time streaming, conversation history, and custom training.",
    techStack: ["JavaScript", "OpenAI", "React", "WebSocket"],
    category: "ai",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },
  {
    _id: "4",
    title: "Task Manager Pro",
    description:
      "A collaborative project management tool with Kanban boards, team features, and real-time updates.",
    techStack: ["node.js", "React"],
    category: "web",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },

  {
    _id: "5",
    title: "Portfolio CMS",
    description:
      "A headless CMS specifically designed for developer portfolios with markdown support and API generation.",
    techStack: ["Node.js", "Express", "MongoDB", "React"],
    category: "web",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },

  {
    _id: "6",
    title: "Graph_Plotter-using-graphics",
    description:
      "A simple graph plotting application using HTML5 Canvas and JavaScript.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    category: "other",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },

  {
    _id: "7",
    title: "AlgoNova : DSA Visualizer",
    description:
      "A web app that visualizes data structures and algorithms with interactive animations.",
    techStack: ["React", "JavaScript", "CSS"],
    category: "other",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },

  {
    _id: "8",
    title: "ProtectHer",
    description:
      "A safety app for women that shares real-time location with trusted contacts and has an emergency alert feature.",
    techStack: ["React Native", "Node.js", "MongoDB"],
    category: "web",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },

  {
    _id: "9",
    title: "energy-wise-companion",
    description:
      "A web app that helps users track and reduce their energy consumption with personalized tips and analytics.",
    techStack: ["React", "Node.js", "MongoDB"],
    category: "web",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },

  {
    _id: "10",
    title: "sheCityAI",
    description:
      "An AI-powered platform for women safety that provides real-time alerts, location sharing, and community support features.",
    techStack: ["React", "Node.js", "MongoDB", "OpenAI"],
    category: "web",
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
    image: "",
  },
];

export const PLACEHOLDER_EDUCATION = [
  {
    _id: "1",
    institution:
      "K.K. Wagh Institute of Engineering Education and Research, Nashik",
    degree: "B.Tech in Computer Science",
    field: "Computer Science & Engineering",
    startYear: "2024",
    endYear: "2028",
    grade: "9.26 CGPA",
  },

  {
    _id: "2",
    institution: "H.P.T. Arts and R.Y.K. Science College, Nashik",
    degree: "Higher Secondary Certificate",
    field: "Science",
    grade: "81.33%",
  },

  {
    _id: "3",
    institution: "Adarsh Madhya Vidyalaya, Nashik",
    degree: "Secondary School Certificate",
    grade: "96.40%",
  },
];

export const PLACEHOLDER_EXPERIENCES = [
  {
    _id: "1",
    role: "Frontend Developer",
    company: "Indie Studio",
    startDate: "Jan 2023",
    endDate: "Present",
    description:
      "Built interactive React apps, reusable UI components, and optimized performance across mobile and desktop.",
  },
  {
    _id: "2",
    role: "Full Stack Intern",
    company: "Tech Innovators",
    startDate: "Jun 2022",
    endDate: "Dec 2022",
    description:
      "Developed REST APIs with Node.js/MongoDB and integrated authentication, role-based access, and data dashboards.",
  },
  {
    _id: "3",
    role: "Open Source Contributor",
    company: "Community Projects",
    startDate: "Sep 2021",
    endDate: "May 2022",
    description:
      "Contributed bug fixes and features to React libraries, and wrote docs/tests for friendly onboarding.",
  },
];
