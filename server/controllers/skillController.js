const Skill = require('../models/SkillModel');
const { success, error } = require('../utils/apiResponse');

exports.getSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find().sort({ order: 1 });
    res.json(success('Skills fetched', skills));
  } catch (err) { next(err); }
};

exports.createSkill = async (req, res, next) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(success('Skill created', skill));
  } catch (err) { next(err); }
};

exports.updateSkill = async (req, res, next) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!skill) return res.status(404).json(error('Skill not found'));
    res.json(success('Skill updated', skill));
  } catch (err) { next(err); }
};

exports.deleteSkill = async (req, res, next) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json(error('Skill not found'));
    res.json(success('Skill deleted'));
  } catch (err) { next(err); }
};
