const Project = require('../models/ProjectModel');

exports.getFilteredProjects = async (filter = {}) => {
  return await Project.find(filter).sort({ order: 1, createdAt: -1 });
};

exports.reorderProjects = async (projectIds) => {
  const updates = projectIds.map((id, index) =>
    Project.findByIdAndUpdate(id, { order: index })
  );
  return await Promise.all(updates);
};
