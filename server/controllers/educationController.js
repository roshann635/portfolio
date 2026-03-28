const Education = require('../models/EducationModel');
const { success, error } = require('../utils/apiResponse');

exports.getEducation = async (req, res, next) => {
  try {
    const education = await Education.find().sort({ order: 1 });
    res.json(success('Education fetched', education));
  } catch (err) { next(err); }
};

exports.createEducation = async (req, res, next) => {
  try {
    const education = await Education.create(req.body);
    res.status(201).json(success('Education created', education));
  } catch (err) { next(err); }
};

exports.updateEducation = async (req, res, next) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!education) return res.status(404).json(error('Education not found'));
    res.json(success('Education updated', education));
  } catch (err) { next(err); }
};

exports.deleteEducation = async (req, res, next) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) return res.status(404).json(error('Education not found'));
    res.json(success('Education deleted'));
  } catch (err) { next(err); }
};
