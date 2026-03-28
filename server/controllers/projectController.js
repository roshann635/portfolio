const Project = require('../models/ProjectModel');
const { success, error } = require('../utils/apiResponse');

// GET /api/projects
exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(success('Projects fetched', projects));
  } catch (err) {
    next(err);
  }
};

// GET /api/projects/featured
exports.getFeaturedProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({ featured: true }).sort({ order: 1 });
    res.json(success('Featured projects fetched', projects));
  } catch (err) {
    next(err);
  }
};

// GET /api/projects/:id
exports.getProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json(error('Project not found'));
    res.json(success('Project fetched', project));
  } catch (err) {
    next(err);
  }
};

// POST /api/projects
exports.createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(success('Project created', project));
  } catch (err) {
    next(err);
  }
};

// PUT /api/projects/:id
exports.updateProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!project) return res.status(404).json(error('Project not found'));
    res.json(success('Project updated', project));
  } catch (err) {
    next(err);
  }
};

// DELETE /api/projects/:id
exports.deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json(error('Project not found'));
    res.json(success('Project deleted'));
  } catch (err) {
    next(err);
  }
};
