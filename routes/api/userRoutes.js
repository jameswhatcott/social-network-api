const router = require('express').Router();
const { getUsers, getUserById } = require('../../controllers/users');

router.route('/').get(getUsers);  // Example route to get all users
router.route('/:id').get(getUserById);  // Example route to get a user by ID

module.exports = router;  // Export the router, not an object
