const { body, validationResult } = require('express-validator');
const { error } = require('../utils/apiResponse');

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(error('Validation failed', errors.array()));
  }
  next();
};

exports.validateProject = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  handleValidation
];
