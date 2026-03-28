const { body, validationResult } = require('express-validator');
const { error } = require('../utils/apiResponse');

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(error('Validation failed', errors.array()));
  }
  next();
};

exports.validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
  handleValidation
];
