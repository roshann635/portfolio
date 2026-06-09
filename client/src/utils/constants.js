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
    projects: 12,
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
    title: "CodeForge - DSA Learning Platform",
    description:
      "A web platform that provides interactive coding challenges, tutorials, and a community forum for learning data structures and algorithms, with features like code editor, progress tracking, and peer discussions, and video proctoring for coding interviews.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Express.js",
      "API Integration",
      "Video Proctoring",
    ],
    category: "web",
    featured: true,
    liveUrl: "https://codeforge-eta.vercel.app/",
    githubUrl: "https://github.com/roshann635/CodeForge",
    image: "",
  },

  {
    _id: "2",
    title: "Skill_Swap - A Peer-to-Peer Learning Platform",
    description:
      "A web platform that connects people for Learning new skills, collaborating on projects, and sharing knowledge in a community-driven environment.specifically designed for peer-to-peer learning and skill exchange, with features like user profiles, skill listings, messaging, and project collaboration tools. made for college campus students to connect, learn, and grow together.",
    techStack: [
      "React",
      "Java",
      "Spring Boot",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
    ],
    category: "web",
    featured: true,
    liveUrl: "https://skill-swap-rose-mu.vercel.app/",
    githubUrl: "https://github.com/roshann635/Skill_Swap",
    image: "",
  },
  {
    _id: "3",
    title: "Samvaad - Chat App",
    description: "A web platform that connects people for chatting",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
      "Express.js",
    ],
    category: "web",
    featured: true,
    liveUrl: "https://samvaad-where-conversations-come-al.vercel.app/",
    githubUrl:
      "https://github.com/roshann635/Samvaad-Where-conversations-come-alive",
    image: "",
  },
  {
    _id: "4",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and experience, with a responsive design and smooth animations.MongoDB is used to store data and contact form submissions.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    category: "web",
    featured: true,
    liveUrl: "https://portfolio-weld-eight-88.vercel.app/",
    githubUrl: "https://github.com/roshann635/portfolio",
    image: "",
  },
  {
    _id: "5",
    title: "SevaSetu--A-platform-connecting-NGO-S-Donors-Volunteer",
    description:
      "A web platform that connects NGOs, donors, and volunteers to facilitate social impact projects and community support.",
    techStack: ["React", "Node.js", "MongoDB"],
    category: "web",
    featured: true,
    liveUrl: "#",
    githubUrl:
      "https://github.com/roshann635/SevaSetu--A-platform-connecting-NGO-S-Donors-Volunteer",
    image: "",
  },
  {
    _id: "6",
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
    _id: "7",
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
    _id: "8",
    title: "Graph_Plotter-using-graphics",
    description:
      "A simple graph plotting application using HTML5 Canvas and JavaScript.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    category: "other",
    featured: false,
    liveUrl: "#",
    githubUrl: "https://github.com/roshann635/Graph_Plotter-using-graphics",
    image: "",
  },

  {
    _id: "9",
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
    _id: "10",
    title: "ProtectHer",
    description:
      "A safety app for women that shares real-time location with trusted contacts and has an emergency alert feature.",
    techStack: ["React Native", "Node.js", "MongoDB"],
    category: "web",
    featured: false,
    liveUrl: "#",
    githubUrl: "https://github.com/roshann635/protectHer",
    image: "",
  },

  {
    _id: "11",
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
    _id: "12",
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
