const Certificate = require('../models/CertificateModel');
const { success, error } = require('../utils/apiResponse');

exports.getCertificates = async (req, res, next) => {
  try {
    const certificates = await Certificate.find().sort({ order: 1 });
    res.json(success('Certificates fetched', certificates));
  } catch (err) { next(err); }
};

exports.createCertificate = async (req, res, next) => {
  try {
    const certificate = await Certificate.create(req.body);
    res.status(201).json(success('Certificate created', certificate));
  } catch (err) { next(err); }
};

exports.updateCertificate = async (req, res, next) => {
  try {
    const certificate = await Certificate.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!certificate) return res.status(404).json(error('Certificate not found'));
    res.json(success('Certificate updated', certificate));
  } catch (err) { next(err); }
};

exports.deleteCertificate = async (req, res, next) => {
  try {
    const certificate = await Certificate.findByIdAndDelete(req.params.id);
    if (!certificate) return res.status(404).json(error('Certificate not found'));
    res.json(success('Certificate deleted'));
  } catch (err) { next(err); }
};
