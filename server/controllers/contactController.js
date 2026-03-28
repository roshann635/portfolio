const Contact = require('../models/ContactModel');
const { success, error } = require('../utils/apiResponse');
const { sendEmail } = require('../services/emailService');

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(success('Contacts fetched', contacts));
  } catch (err) { next(err); }
};

exports.createContact = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    // Try to send email notification (non-blocking)
    try {
      await sendEmail({
        subject: `Portfolio Contact: ${req.body.subject || 'New Message'}`,
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\n\n${req.body.message}`
      });
    } catch (emailErr) {
      console.log('Email notification failed (non-critical):', emailErr.message);
    }
    res.status(201).json(success('Message sent successfully', contact));
  } catch (err) { next(err); }
};

exports.markAsRead = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
    if (!contact) return res.status(404).json(error('Contact not found'));
    res.json(success('Marked as read', contact));
  } catch (err) { next(err); }
};

exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json(error('Contact not found'));
    res.json(success('Contact deleted'));
  } catch (err) { next(err); }
};
