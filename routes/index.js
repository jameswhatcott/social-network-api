const router = require('express').Router();
const apiRoutes = require('./api');  // This line is likely causing the issue

router.use('/api', apiRoutes);

module.exports = router;
