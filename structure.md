portfolio-website/
│
├── client/                         # 🔵 Frontend (React)
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│
│   ├── src/
│   │
│   │   ├── assets/                 # Images, icons, resume
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   ├── resume.pdf
│   │
│   │   ├── components/             # 🔹 Reusable UI components
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │
│   │   │   ├── project/
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   ├── ProjectList.jsx
│   │   │   │
│   │   │   ├── contact/
│   │   │   │   ├── ContactForm.jsx
│   │   │   │
│   │   │   ├── admin/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── ProjectForm.jsx
│   │
│   │   ├── pages/                  # 🔹 Page-level components (Views)
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Admin.jsx
│   │
│   │   ├── routes/                 # 🔹 Routing (Controller-like)
│   │   │   ├── AppRoutes.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │
│   │   ├── services/               # 🔹 API layer (Model interaction)
│   │   │   ├── api.js
│   │   │   ├── projectService.js
│   │   │   ├── contactService.js
│   │
│   │   ├── context/                # Global state (Auth etc.)
│   │   │   ├── AuthContext.jsx
│   │
│   │   ├── hooks/                  # Custom hooks
│   │   │   ├── useFetch.js
│   │
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   ├── variables.css
│   │
│   │   ├── utils/
│   │   │   ├── helpers.js
│   │   │   ├── constants.js
│   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│
│   ├── .env
│   ├── package.json
│
│
├── server/                         # 🔴 Backend (MVC)
│   ├── config/
│   │   ├── db.js
│   │   ├── env.js
│
│   ├── models/                     # 🟢 Models
│   │   ├── UserModel.js
│   │   ├── ProjectModel.js
│   │   ├── SkillModel.js
│   │   ├── ExperienceModel.js
│   │   ├── EducationModel.js
│   │   ├── ContactModel.js
│
│   ├── controllers/                # 🔵 Controllers
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   ├── experienceController.js
│   │   ├── educationController.js
│   │   ├── contactController.js
│   │   ├── authController.js
│
│   ├── routes/                     # 🟡 Routes
│   │   ├── index.js
│   │   ├── projectRoutes.js
│   │   ├── skillRoutes.js
│   │   ├── experienceRoutes.js
│   │   ├── educationRoutes.js
│   │   ├── contactRoutes.js
│   │   ├── authRoutes.js
│
│   ├── services/                   # 🟣 Business logic
│   │   ├── projectService.js
│   │   ├── emailService.js
│   │   ├── authService.js
│
│   ├── middlewares/                # 🔴 Middleware
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   ├── uploadMiddleware.js
│
│   ├── validations/                # ✅ Validation
│   │   ├── projectValidation.js
│   │   ├── contactValidation.js
│   │   ├── authValidation.js
│
│   ├── utils/                      # Helpers
│   │   ├── helpers.js
│   │   ├── constants.js
│   │   ├── apiResponse.js
│
│   ├── uploads/
│
│   ├── .env
│   ├── package.json
│   ├── server.js
│
│
├── .gitignore
├── package.json                   # Optional (for concurrently)
├── README.md