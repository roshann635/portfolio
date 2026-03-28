const router = require("express").Router();
const {
  getProjects,
  getFeaturedProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const { protect } = require("../middlewares/authMiddleware");
const { validateProject } = require("../validations/projectValidation");

// The featured route must come before "/:id" to avoid path conflicts (e.g. "featured" being treated as id)
router.get("/", getProjects);
router.get("/featured", getFeaturedProjects);
router.get("/:id", getProject);
router.post("/", protect, validateProject, createProject);
router.put("/:id", protect, validateProject, updateProject);
router.delete("/:id", protect, deleteProject);

module.exports = router;
