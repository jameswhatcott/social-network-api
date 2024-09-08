const router = require('express').Router();
const userRoutes = require('./userRoutes'); // Import other route files
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;  // Make sure you're exporting the router
