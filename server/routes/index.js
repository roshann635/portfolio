const router = require('express').Router();
const projectRoutes = require('./projectRoutes');
const skillRoutes = require('./skillRoutes');
const experienceRoutes = require('./experienceRoutes');
const educationRoutes = require('./educationRoutes');
const contactRoutes = require('./contactRoutes');
const authRoutes = require('./authRoutes');

router.use('/projects', projectRoutes);
router.use('/skills', skillRoutes);
router.use('/experiences', experienceRoutes);
router.use('/education', educationRoutes);
router.use('/contacts', contactRoutes);
router.use('/auth', authRoutes);

module.exports = router;
