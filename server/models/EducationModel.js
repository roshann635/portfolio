const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: [true, 'Institution name is required'],
    trim: true
  },
  degree: {
    type: String,
    required: [true, 'Degree is required'],
    trim: true
  },
  field: {
    type: String,
    default: ''
  },
  startYear: {
    type: String,
    required: true
  },
  endYear: {
    type: String,
    default: 'Present'
  },
  grade: {
    type: String,
    default: ''
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Education', educationSchema);
