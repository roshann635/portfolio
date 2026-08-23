# 🌐 Roshan Jadhav — Engineering Portfolio

[![Vercel Deployment](https://img.shields.io/badge/Deployed-Vercel-black?style=flat&logo=vercel)](https://roshan-635.vercel.app/)
[![React 19](https://img.shields.io/badge/Frontend-React_19-blue?style=flat&logo=react)](https://react.dev/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=flat&logo=node.js)](https://nodejs.org/)

> **Full-Stack Developer & AI/ML Enthusiast**  
> Building intelligent, production-oriented software across AI/ML, backend systems, and modern web architectures.

🔗 **Live Portfolio:** [https://roshan-635.vercel.app/](https://roshan-635.vercel.app/)

---

## ⚡ Technical Highlights

- **Interactive Hero Shell**: Embedded terminal emulator supporting internal-first project navigation, capability querying, and keyboard history cycling.
- **Vector Architecture Diagrams**: Bespoke system topology diagrams embedded directly into featured project drawers.
- **Live GitHub REST Telemetry**: Cached profile and repository metrics fetched directly from the GitHub API.
- **Command Palette (`⌘K` / `Ctrl+K`)**: Modal search across portfolio sections, project direct jumps, theme switching, and quick actions.
- **Bound Dossier Design System**: Strict flat visual ledger featuring Fraunces and IBM Plex typography in Night and Day themes.

---

## 🚀 Flagship Projects

### 1. 🥇 [CoCompute — LAN-Based Distributed Computing Platform](https://github.com/roshann635/CoCompute)

- **Problem**: Dedicated GPU computing clusters are cost-prohibitive for student labs and individual researchers.
- **Architecture**: Coordinates heterogeneous client nodes over local network (LAN) using an mDNS/broadcast discovery protocol, centralized Redis task scheduling queue, and real-time CPU/RAM/GPU telemetry over WebSockets.
- **Stack**: Python, FastAPI, React 19, PostgreSQL, SQLAlchemy, Redis, WebSockets, Docker, scikit-learn.
- **Status**: Local/LAN System (Source Available).

### 2. 🥈 [CodeForge — DSA Assessment & Sandboxed Execution Engine](https://github.com/roshann635/CodeForge)

- **Problem**: Securely evaluating arbitrary multi-language code submissions under 2 seconds while ensuring test proctoring integrity.
- **Architecture**: Monaco code editor fronting isolated Docker containers via Judge0 API, real-time client-side proctoring telemetry via `face-api.js`, and Gemini GenAI-powered code explanations.
- **Stack**: React 19, Monaco Editor, Express 5, MongoDB, Judge0, Docker, PostgreSQL, Redis, Gemini API.
- **Status**: Live Deployment (`https://codeforge-eta.vercel.app/`).

### 3. 🥉 [Prep10X — AI-Powered Exam Preparation & Analytics](https://github.com/roshann635/prep10x)

- **Problem**: Converting unstructured study notes and low-quality handwritten exams into structured mock tests.
- **Architecture**: Dual-backend bridge between a Node.js API and a Python FastAPI microservice utilizing OpenCV adaptive thresholding, Pytesseract OCR, and Gemini GenAI for automated grading.
- **Stack**: React, FastAPI, Python, Node.js, MongoDB, OpenCV, Pytesseract, Docker, Gemini AI.
- **Status**: Live Deployment (`https://prep10x-by-roshan.vercel.app/`).

### 4. 💬 [Samvaad — Real-Time WebSocket Communication Platform](https://github.com/roshann635/Samvaad-Where-conversations-come-alive)

- **Problem**: Low-latency bi-directional messaging with guaranteed message ordering and presence synchronization.
- **Architecture**: Socket.IO persistent channels with optimistic UI dispatch, monotonic sequence ID queues, and token-authenticated socket handshakes.
- **Stack**: React 19, Node.js, Express, MongoDB, Socket.IO, JWT, bcrypt, Tailwind CSS.
- **Status**: Live Deployment (`https://samvaad-where-conversations-come-al.vercel.app/`).

---

## 🛠️ Technical Taxonomy

| Category                  | Technologies                                                           |
| ------------------------- | ---------------------------------------------------------------------- |
| **Core Languages**        | Python, JavaScript (ES6+), C++, Java, C                                |
| **AI / Machine Learning** | Google Gemini API, scikit-learn, OpenCV, NumPy, Pandas, Generative AI  |
| **Backend & Systems**     | Node.js, FastAPI, Express.js, RESTful APIs, WebSockets, Socket.IO, JWT |
| **Frontend**              | React 19, Vite, Tailwind CSS, HTML5, CSS3, Responsive Design           |
| **Databases & Caching**   | MongoDB, Mongoose, PostgreSQL, Redis, SQL                              |
| **DevOps & Tooling**      | Docker, Docker Compose, Git, GitHub, Postman, Vercel, Render, Linux    |

---

## 🎓 Academic Record & Experience

- **Education**: B.Tech in Computer Science and Engineering, **K.K. Wagh Institute of Engineering Education and Research** (2024–2028) · **9.28 CGPA**
- **Experience**: Virtual Intern — Technology at **Infosys Springboard** (Virtual Internship 7.0, Ongoing)
- **Achievements**:
  - Finalist — Nirmaan Hackathon (Amity University Mumbai)
  - Finalist — PVG HackHub National Level Hackathon (PVG College of Engineering)
  - Finalist — Innovera National Hackathon
  - Google Cloud Arcade — Full Program Completion

---

## 💻 Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/roshann635/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies (optional for dynamic API)
cd ../server
npm install
```

### 3. Run the development server

```bash
# In client directory
cd ../client
npm run dev
```

Open `http://localhost:5173` to explore the live interactive application.

---

## 📄 License & Contact

- **Author**: Roshan Jadhav
- **Email**: [roshanjadhav4385@gmail.com](mailto:roshanjadhav4385@gmail.com)
- **LinkedIn**: [linkedin.com/in/roshan-jadhav-100410339](https://www.linkedin.com/in/roshan-jadhav-100410339)
- **GitHub**: [github.com/roshann635](https://github.com/roshann635)
