export const skills = [
  // Core Languages
  { name: "Python", category: "core", level: "Primary" },
  { name: "JavaScript (ES6+)", category: "core", level: "Primary" },
  { name: "C++", category: "core", level: "Working" },
  { name: "Java", category: "core", level: "Working" },
  { name: "C", category: "core", level: "Working" },

  // AI & ML
  { name: "Google Gemini API", category: "ai-ml", level: "Primary" },
  { name: "scikit-learn", category: "ai-ml", level: "Primary" },
  { name: "OpenCV", category: "ai-ml", level: "Working" },
  { name: "NumPy & Pandas", category: "ai-ml", level: "Primary" },
  { name: "Generative AI & Prompting", category: "ai-ml", level: "Primary" },

  // Backend & APIs
  { name: "Node.js", category: "backend", level: "Primary" },
  { name: "FastAPI", category: "backend", level: "Primary" },
  { name: "Express.js", category: "backend", level: "Primary" },
  { name: "RESTful API Design", category: "backend", level: "Primary" },
  { name: "WebSockets & Socket.IO", category: "backend", level: "Primary" },
  { name: "JWT Authentication", category: "backend", level: "Primary" },

  // Frontend
  { name: "React 19", category: "frontend", level: "Primary" },
  { name: "Vite", category: "frontend", level: "Primary" },
  { name: "Tailwind CSS", category: "frontend", level: "Primary" },
  { name: "HTML5 & CSS3", category: "frontend", level: "Primary" },
  { name: "Responsive Design", category: "frontend", level: "Primary" },

  // Databases & Caching
  { name: "MongoDB & Mongoose", category: "database", level: "Primary" },
  { name: "PostgreSQL", category: "database", level: "Working" },
  { name: "Redis", category: "database", level: "Working" },
  { name: "SQL", category: "database", level: "Working" },

  // DevOps & Engineering Tools
  { name: "Docker & Docker Compose", category: "devops", level: "Working" },
  { name: "Git & GitHub", category: "devops", level: "Primary" },
  { name: "Postman", category: "devops", level: "Primary" },
  { name: "Vercel & Render", category: "devops", level: "Primary" },
  { name: "Linux / Shell", category: "devops", level: "Working" },

  // Core Computer Science Concepts
  { name: "Data Structures & Algorithms", category: "concepts", level: "Core" },
  {
    name: "Object-Oriented Programming (OOP)",
    category: "concepts",
    level: "Core",
  },
  {
    name: "Database Management Systems (DBMS)",
    category: "concepts",
    level: "Core",
  },
  { name: "Operating Systems (OS)", category: "concepts", level: "Core" },
  { name: "Computer Networks (DCN)", category: "concepts", level: "Core" },
  {
    name: "Distributed Systems Architecture",
    category: "concepts",
    level: "Working",
  },
];

export const skillCategories = [
  { key: "core", label: "Core Languages" },
  { key: "ai-ml", label: "AI / Machine Learning" },
  { key: "backend", label: "Backend Systems & APIs" },
  { key: "frontend", label: "Modern Frontend" },
  { key: "database", label: "Databases & Caching" },
  { key: "devops", label: "DevOps & Tooling" },
  { key: "concepts", label: "Computer Science Foundations" },
];
