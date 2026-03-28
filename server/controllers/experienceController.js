const Experience = require('../models/ExperienceModel');
const { success, error } = require('../utils/apiResponse');

exports.getExperiences = async (req, res, next) => {
  try {
    const experiences = await Experience.find().sort({ order: 1 });
    res.json(success('Experiences fetched', experiences));
  } catch (err) { next(err); }
};

exports.createExperience = async (req, res, next) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json(success('Experience created', experience));
  } catch (err) { next(err); }
};

exports.updateExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!experience) return res.status(404).json(error('Experience not found'));
    res.json(success('Experience updated', experience));
  } catch (err) { next(err); }
};

exports.deleteExperience = async (req, res, next) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) return res.status(404).json(error('Experience not found'));
    res.json(success('Experience deleted'));
  } catch (err) { next(err); }
};
