const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Certificate title is required'],
    trim: true
  },
  issuer: {
    type: String,
    required: [true, 'Issuer is required'],
    trim: true
  },
  date: {
    type: String,
    default: ''
  },
  credentialUrl: {
    type: String,
    default: ''
  },
  credentialId: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Certificate', certificateSchema);
