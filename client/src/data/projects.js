export const projects = [
  {
    _id: "14",
    title: "CoCompute — LAN Distributed Computing Platform",
    subtitle: "Coordinating multi-machine compute clusters over local networks",
    role: "Full-Stack Development · System Architecture · Distributed Systems",
    tags: ["DISTRIBUTED", "SYSTEMS", "FASTAPI"],
    summary:
      "A distributed computing platform that coordinates multiple networked machines over LAN, featuring dynamic worker discovery, centralized task queue scheduling, real-time hardware telemetry, and AI-assisted job dispatching.",
    description:
      "Engineered a distributed compute engine that pools idle CPU/GPU resources across local network machines. Implements mDNS dynamic discovery, a Redis-backed priority queue, real-time WebSocket telemetry, and containerized worker execution.",
    techStack: [
      "Python",
      "FastAPI",
      "React 19",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Docker",
      "scikit-learn",
    ],
    category: "distributed",
    featured: true,
    flagship: true,
    rank: "01",
    status: "LOCAL / LAN SYSTEM",
    statusType: "local",
    liveUrl: "#",
    githubUrl: "https://github.com/roshann635/CoCompute",
    pillars: [
      {
        title: "Dynamic Worker Discovery",
        description:
          "Nodes on the local subnet broadcast mDNS/UDP beacons on startup; coordinator dynamically registers compute instances and monitors sub-second heartbeat health pings.",
      },
      {
        title: "Telemetry-Aware Task Queue",
        description:
          "Centralized Redis queue manages chunked batch jobs; scheduler evaluates incoming CPU, RAM, and GPU telemetry in real-time to prevent node starvation.",
      },
      {
        title: "Containerized Execution",
        description:
          "Worker agents execute computational tasks within isolated Docker runtime containers, guaranteeing deterministic Python/C++ environments.",
      },
    ],
    architectureHighlights: [
      "Worker node discovery & heartbeat health ping mechanism",
      "Central Redis task queue with priority scheduling",
      "Real-time CPU/RAM/GPU telemetry over WebSockets",
      "Dockerized sandbox worker execution environment",
    ],
    challenges: [
      {
        challenge:
          "How do heterogeneous LAN nodes discover and register without manual IP configuration?",
        solution:
          "Implemented an mDNS/broadcast discovery protocol coupled with automated worker registration and sub-second heartbeat ping monitors.",
      },
      {
        challenge:
          "How to prevent worker node starvation and distribute uneven computational tasks?",
        solution:
          "Built a central Redis-backed priority queue paired with an ML scheduling heuristic that profiles worker CPU/RAM telemetry in real-time.",
      },
    ],
  },
  {
    _id: "1",
    title: "CodeForge — DSA Assessment & Sandboxed Execution",
    subtitle:
      "Sandboxed multi-language code evaluation with real-time test proctoring",
    role: "Full-Stack Architecture · AI Integration",
    tags: ["FULL STACK", "AI/ML", "JUDGE0"],
    summary:
      "A full-stack coding assessment platform combining interactive algorithm visualizations, LeetCode-style problem suites, multi-language Judge0 code execution, and automated anti-cheat proctoring.",
    description:
      "Built an online technical assessment platform featuring Monaco code editor, sandboxed code execution in isolated Docker containers via Judge0, biometric proctoring via face-api.js, and Gemini AI analysis.",
    techStack: [
      "React 19",
      "Monaco Editor",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Judge0",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Gemini API",
      "face-api.js",
    ],
    category: "web",
    featured: true,
    flagship: false,
    rank: "02",
    status: "LIVE DEPLOYMENT",
    statusType: "live",
    liveUrl: "https://codeforge-eta.vercel.app/",
    githubUrl: "https://github.com/roshann635/CodeForge",
    pillars: [
      {
        title: "Sandboxed Multi-Language Execution",
        description:
          "Judge0 worker pools executing in isolated Docker containers with strict CPU/memory limits and timeout teardown in under 2 seconds.",
      },
      {
        title: "Client-Side Video & Focus Proctoring",
        description:
          "Integrated face-api.js for on-device face verification combined with tab-switch focus listeners logging audit timestamps.",
      },
      {
        title: "AI Assessment & Interactive Monaco",
        description:
          "Monaco code editor with multi-language syntax highlighting paired with Gemini GenAI code complexity evaluation and automated test suites.",
      },
    ],
    architectureHighlights: [
      "Isolated containerized Judge0 execution engine",
      "Monaco editor with multi-language syntax highlighting",
      "AI-driven code analysis and automated test-case runner",
      "Real-time client-side proctoring and focus integrity check",
    ],
    challenges: [
      {
        challenge:
          "How to safely execute arbitrary user code in under 2 seconds without risking host security?",
        solution:
          "Dockerized Judge0 worker pools with strict memory/CPU bounds, timeout limits, and ephemeral container teardown.",
      },
      {
        challenge:
          "How to ensure fair testing without intrusive backend streaming pipelines?",
        solution:
          "Client-side biometric verification using face-api.js and visibility state listeners that log immutable audit timestamps.",
      },
    ],
  },
  {
    _id: "3",
    title: "Prep10X — AI-Powered Exam Preparation & Analytics",
    subtitle:
      "Intelligent question generation, document OCR, and performance analytics",
    role: "Full-Stack Engineering · AI/ML Integration · System Design",
    tags: ["AI/ML", "OPENCV", "FASTAPI"],
    summary:
      "An examination intelligence platform featuring secure JWT authentication, multilingual test synthesis, and deep performance analytics, backed by a FastAPI microservice utilizing Google Gemini and OpenCV.",
    description:
      "Developed an adaptive exam preparation platform with a Python FastAPI microservice that extracts text from degraded question scans via OpenCV and Pytesseract, automated with Gemini AI evaluation rubrics.",
    techStack: [
      "React",
      "FastAPI",
      "Python",
      "Node.js",
      "MongoDB",
      "JWT",
      "OpenCV",
      "Pytesseract",
      "Docker",
      "Gemini AI",
    ],
    category: "ai-ml",
    featured: true,
    flagship: false,
    rank: "03",
    status: "LIVE DEPLOYMENT",
    statusType: "live",
    liveUrl: "https://prep10x-by-roshan.vercel.app/",
    githubUrl: "https://github.com/roshann635/prep10x",
    pillars: [
      {
        title: "Dual-Microservice Fast Bridge",
        description:
          "Node.js main application communicates with a high-performance Python FastAPI microservice for asynchronous AI inference and image processing.",
      },
      {
        title: "Computer Vision & Adaptive OCR",
        description:
          "OpenCV image preprocessing (deskewing, adaptive thresholding, noise removal) paired with Pytesseract to accurately extract exam questions from degraded scans.",
      },
      {
        title: "Automated Rubric Grading & Analytics",
        description:
          "Google Gemini API prompt-engineered evaluation rubrics delivering instant score breakdowns and personalized candidate readiness analytics.",
      },
    ],
    architectureHighlights: [
      "FastAPI microservice handling OCR parsing and AI inference",
      "Dual-backend bridge between Node.js API and Python service",
      "Automated prompt-engineered evaluation rubrics",
      "Interactive candidate readiness and weakness analytics dashboard",
    ],
    challenges: [
      {
        challenge:
          "How to reliably parse low-quality scans and handwritten math/code questions?",
        solution:
          "Pre-processed document images via OpenCV adaptive thresholding and deskewing prior to Pytesseract and Gemini vision extraction.",
      },
    ],
  },
  {
    _id: "4",
    title: "Samvaad — Real-Time WebSocket Communication",
    subtitle:
      "Low-latency messaging architecture with instant presence and media support",
    role: "Full-Stack Engineering · Real-Time Systems · Backend Engineering ",
    tags: ["REAL-TIME", "WEBSOCKETS", "BACKEND"],
    summary:
      "A real-time messaging platform supporting direct and group communications, featuring WebSocket-based bi-directional message dispatch, typing indicators, read receipts, and encrypted storage.",
    description:
      "Architected a low-latency real-time messaging platform on Socket.IO and Express. Implements optimistic UI updates with monotonic sequence IDs, room-based broadcast channels, and token-authenticated socket handshakes.",
    techStack: [
      "React 19",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose 9",
      "JWT",
      "bcrypt",
      "Tailwind CSS",
    ],
    category: "web",
    featured: true,
    flagship: false,
    rank: "04",
    status: "LIVE DEPLOYMENT",
    statusType: "live",
    liveUrl: "https://samvaad-where-conversations-come-al.vercel.app/",
    githubUrl:
      "https://github.com/roshann635/Samvaad-Where-conversations-come-alive",
    pillars: [
      {
        title: "Full-Duplex WebSocket Channels",
        description:
          "Persistent Socket.IO bi-directional communication channels with room-based broadcast routing and low-latency dispatch.",
      },
      {
        title: "Optimistic UI & Monotonic Sync",
        description:
          "Client-side message dispatch with monotonic sequence IDs and server acknowledgments guaranteeing ordered message delivery across reconnections.",
      },
      {
        title: "Zero-Trust JWT & Encrypted Persistence",
        description:
          "Strict token authentication on initial handshake with bcrypt hashed passwords and MongoDB indexing for sub-millisecond query retrieval.",
      },
    ],
    architectureHighlights: [
      "Persistent WebSocket channels with room-based pub/sub routing",
      "JWT authentication on initial socket connection handshake",
      "Optimistic UI state dispatch with guaranteed delivery acknowledgment",
    ],
    challenges: [
      {
        challenge:
          "How to handle intermittent connectivity and message ordering?",
        solution:
          "Implemented client-side message queue with monotonic sequence IDs and server-side receipt acknowledgments.",
      },
    ],
  },
  {
    _id: "2",
    title: "Portfolio CMS & Engineering Platform",
    subtitle: "Dynamic portfolio management with custom REST architecture",
    role: "Full-Stack Web · CMS Engine",
    tags: ["FULL STACK", "VITE", "MONGODB"],
    summary:
      "A bespoke portfolio CMS system featuring token-authenticated administrative control, dynamic project publishing, and contact message routing.",
    description:
      "Built a modular portfolio platform with React 19, Express, and MongoDB. Implements clean MVC architecture, custom design token system, rate limiting, and input validation.",
    techStack: [
      "React 19",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "CSS3",
    ],
    category: "web",
    featured: false,
    status: "LIVE DEPLOYMENT",
    statusType: "live",
    liveUrl: "https://roshan-635.vercel.app/",
    githubUrl: "https://github.com/roshann635/portfolio",
  },
  {
    _id: "5",
    title: "SkillSwap — Peer Skill Exchange Platform",
    subtitle: "Collaborative knowledge sharing network",
    role: "Frontend Engineering · Websocket Integration · Database Design",
    tags: ["WEB APP", "NODEJS", "MONGODB"],
    summary:
      "Full-stack web application for peer-to-peer knowledge sharing and skill swapping.",
    description:
      "Developed a peer-to-peer skill exchange platform featuring profile management, skill discovery, match requests, and user messaging.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Java 17+",
      "Spring Boot",
      "Clerk",
      "MongoDB",
      "WebSockets",
    ],
    category: "web",
    featured: false,
    status: "LIVE DEPLOYMENT",
    statusType: "live",
    liveUrl: "https://skill-swap-rose-mu.vercel.app/",
    githubUrl: "https://github.com/roshann635",
  },
  {
    _id: "6",
    title: "Energy Wise Companion",
    subtitle: "Home energy monitoring & efficiency tracker",
    role: "Full-stack Development",
    tags: ["DASHBOARD", "ANALYTICS", "CHARTJS"],
    summary:
      "Interactive dashboard providing appliance-level energy metrics and optimization tips.",
    description:
      "Built an energy tracking dashboard providing appliance-level energy metrics and conservation recommendations using real-time calculations.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    category: "web",
    featured: false,
    status: "SOURCE AVAILABLE",
    statusType: "source",
    liveUrl: "#",
    githubUrl: "https://github.com/roshann635",
  },
];

export const projectCategories = [
  { key: "all", label: "All Work" },
  { key: "distributed", label: "Distributed Systems" },
  { key: "ai-ml", label: "AI & ML" },
  { key: "web", label: "Full-Stack Web" },
];
