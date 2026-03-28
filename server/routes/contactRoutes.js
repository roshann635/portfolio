const router = require('express').Router();
const { getContacts, createContact, markAsRead, deleteContact } = require('../controllers/contactController');
const { protect } = require('../middlewares/authMiddleware');
const { validateContact } = require('../validations/contactValidation');

router.get('/', protect, getContacts);
router.post('/', validateContact, createContact);
router.put('/:id/read', protect, markAsRead);
router.delete('/:id', protect, deleteContact);

module.exports = router;
