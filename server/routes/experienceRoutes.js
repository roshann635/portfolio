const router = require('express').Router();
const { getExperiences, createExperience, updateExperience, deleteExperience } = require('../controllers/experienceController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', getExperiences);
router.post('/', protect, createExperience);
router.put('/:id', protect, updateExperience);
router.delete('/:id', protect, deleteExperience);

module.exports = router;
