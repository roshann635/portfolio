import cert1 from "../assets/certificates/cert1.png";
import cert2 from "../assets/certificates/cert2.png";
import cert3 from "../assets/certificates/cert3.png";
import cert4 from "../assets/certificates/cert4.png";
import cert5 from "../assets/certificates/cert5.png";
import cert6 from "../assets/certificates/cert6.png";
import cert7 from "../assets/certificates/cert7.png";
import cert8 from "../assets/certificates/cert8.png";
import cert9 from "../assets/certificates/cert9.png";
import cert10 from "../assets/certificates/cert10.png";
import cert11 from "../assets/certificates/cert11.png";
import cert12 from "../assets/certificates/cert12.png";
import cert13 from "../assets/certificates/cert13.png";
import cert14 from "../assets/certificates/cert14.png";
import cert15 from "../assets/certificates/cert15.png";
import cert16 from "../assets/certificates/cert16.png";
import cert17 from "../assets/certificates/cert17.png";
import cert18 from "../assets/certificates/cert18.png";
import cert19 from "../assets/certificates/cert19.png";
import cert20 from "../assets/certificates/cert20.png";
import cert21 from "../assets/certificates/cert21.png";
import cert22 from "../assets/certificates/cert22.png";
import cert23 from "../assets/certificates/cert23.png";
import cert24 from "../assets/certificates/cert24.png";
import cert25 from "../assets/certificates/cert25.png";
import cert26 from "../assets/certificates/cert26.png";
import cert27 from "../assets/certificates/cert27.png";
import cert28 from "../assets/certificates/cert28.png";
import cert29 from "../assets/certificates/cert29.png";
import cert30 from "../assets/certificates/cert30.png";
import cert31 from "../assets/certificates/cert31.png";
import cert32 from "../assets/certificates/cert32.png";
import cert33 from "../assets/certificates/cert33.png";
import cert34 from "../assets/certificates/cert34.png";
import cert35 from "../assets/certificates/cert35.png";
import cert36 from "../assets/certificates/cert36.png";
import cert37 from "../assets/certificates/cert37.png";
import cert38 from "../assets/certificates/cert38.png";
import cert39 from "../assets/certificates/cert39.png";
import cert40 from "../assets/certificates/cert40.png";
import cert41 from "../assets/certificates/cert41.png";
import cert42 from "../assets/certificates/cert42.png";
import cert43 from "../assets/certificates/cert43.png";
import cert44 from "../assets/certificates/cert44.png";
import cert45 from "../assets/certificates/cert45.jpeg";

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
  { key: "tools", label: "Tools", icon: "🛠️", color: "#ec4899" },
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
  mobile: "+91 7058601264",
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
  { name: "Python", category: "backend", proficiency: 25 },
  { name: "MongoDB", category: "database", proficiency: 80 },
  { name: "Git", category: "tools", proficiency: 88 },
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
    grade: "9.28 CGPA",
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

export const PLACEHOLDER_CERTIFICATES = [
  {
    _id: "1",
    title: "Full Stack Web Development with MERN STACK & GenAI 2026",
    issuer: "Udemy",
    image: cert1,
  },
  {
    _id: "2",
    title: "NodeJS Projects Bootcamp 2025: Learn by Doing",
    issuer: "Udemy",
    image: cert2,
  },
  {
    _id: "3",
    title: "Google AI Essentials Specialization",
    issuer: "Coursera (Google)",
    image: cert3,
  },
  {
    _id: "4",
    title: "Google Prompting Essentials Specialization",
    issuer: "Coursera (Google)",
    image: cert4,
  },
  {
    _id: "5",
    title: "Introduction to AI",
    issuer: "Coursera (Google)",
    image: cert5,
  },
  {
    _id: "6",
    title: "Maximize Productivity with AI Tools",
    issuer: "Google (Coursera)",
    image: cert6,
  },
  {
    _id: "7",
    title: "Discover the Art of Prompting",
    issuer: "Google (Coursera)",
    image: cert7,
  },
  {
    _id: "8",
    title: "Use AI Responsibly",
    issuer: "Google (Coursera)",
    image: cert8,
  },
  {
    _id: "9",
    title: "Stay Ahead of the AI Curve",
    issuer: "Google (Coursera)",
    image: cert9,
  },
  {
    _id: "10",
    title: "Start Writing Prompts like a Pro",
    issuer: "Google (Coursera)",
    image: cert10,
  },
  {
    _id: "11",
    title: "Design Prompts for Everyday Work Tasks",
    issuer: "Google (Coursera)",
    image: cert11,
  },
  {
    _id: "12",
    title: "Speed Up Data Analysis and Presentation Building",
    issuer: "Google (Coursera)",
    image: cert12,
  },
  {
    _id: "13",
    title: "Use AI as a Creative or Expert Partner",
    issuer: "Google (Coursera)",
    image: cert13,
  },
  {
    _id: "14",
    title: "Google AI Essentials V1 Badge",
    issuer: "Credly | Coursera | Google",
    image: cert14,
  },
  {
    _id: "15",
    title: "Google Prompting Essentials",
    issuer: "Credly | Coursera | Google",
    image: cert15,
  },
  {
    _id: "16",
    title: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    image: cert16,
  },
  {
    _id: "17",
    title: "Introduction to Natural Language Processing",
    issuer: "Infosys Springboard",
    image: cert17,
  },
  {
    _id: "18",
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    image: cert18,
  },
  {
    _id: "19",
    title: "Introduction to Deep Learning",
    issuer: "Infosys Springboard",
    image: cert19,
  },
  {
    _id: "20",
    title: "Compute Vision 101",
    issuer: "Infosys Springboard",
    image: cert20,
  },
  {
    _id: "21",
    title: "Introduction to Robotic Process Automation",
    issuer: "Infosys Springboard",
    image: cert21,
  },
  {
    _id: "22",
    title: "Artificial Intelligence Primer Certification",
    issuer: "Infosys Springboard",
    image: cert22,
  },
  {
    _id: "23",
    title: "Introduction to OpenAI GPT Models",
    issuer: "Infosys Springboard",
    image: cert23,
  },
  {
    _id: "24",
    title: "OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers",
    issuer: "Infosys Springboard",
    image: cert24,
  },
  {
    _id: "25",
    title: "Generative models for developers",
    issuer: "Infosys Springboard",
    image: cert25,
  },
  {
    _id: "26",
    title: "Deep Learning for Developers",
    issuer: "Infosys Springboard",
    image: cert26,
  },
  {
    _id: "27",
    title: "Agile Scrum in Practice",
    issuer: "Infosys Springboard",
    image: cert27,
  },
  {
    _id: "28",
    title: "Principles of Generative AI Certification",
    issuer: "Infosys Springboard",
    image: cert28,
  },
  {
    _id: "29",
    title: "Artificial Intelligence",
    issuer: "Infosys Springboard",
    image: cert29,
  },
  {
    _id: "30",
    title: "Generative AI Unleashing",
    issuer: "Infosys Springboard",
    image: cert30,
  },
  {
    _id: "31",
    title: "Prompt Engineering",
    issuer: "Infosys Springboard",
    image: cert31,
  },
  {
    _id: "32",
    title: "Introduction to generative AI and agents",
    issuer: "Microsoft",
    image: cert32,
  },
  {
    _id: "33",
    title: "Google AI Essentials Badge",
    issuer: "Google (Coursera)",
    image: cert33,
  },
  {
    _id: "34",
    title: "Google Prompting Essentials Badge",
    issuer: "Google (Coursera)",
    image: cert34,
  },
  {
    _id: "35",
    title: "Gen AI: Beyond the Chatbot",
    issuer: "Google Cloud | Google Skills",
    image: cert35,
  },
  {
    _id: "36",
    title: "Gen AI: Unlock Foundational Concepts",
    issuer: "Google Cloud | Google Skills",
    image: cert36,
  },
  {
    _id: "37",
    title: "Gen AI: Navigate the Landscape",
    issuer: "Google Cloud | Google Skills",
    image: cert37,
  },
  {
    _id: "38",
    title: "Gen AI Apps: Transform Your Work",
    issuer: "Google Cloud | Google Skills",
    image: cert38,
  },
  {
    _id: "39",
    title: "Gen AI Agents: Transform Your Organization",
    issuer: "Google Cloud | Google Skills",
    image: cert39,
  },
  {
    _id: "40",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud | Google Skills",
    image: cert40,
  },
  {
    _id: "41",
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud | Google Skills",
    image: cert41,
  },
  {
    _id: "42",
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud | Google Skills",
    image: cert42,
  },
  {
    _id: "43",
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud | Google Skills",
    image: cert43,
  },
  {
    _id: "44",
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google Cloud | Google Skills",
    image: cert44,
  },
  {
    _id: "45",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    image: cert45,
  },
];
