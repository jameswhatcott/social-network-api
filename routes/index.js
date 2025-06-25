const router = require('express').Router();
const apiRoutes = require('./api');  // This line is likely causing the issue

// Add a root route
router.get('/', (req, res) => {
  res.json({ message: 'Social Media API is running!' });
});

router.use('/api', apiRoutes);

module.exports = router;
