const router = require('express').Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser  } = require('../../controllers/users');

router.route('/').get(getUsers);  // Example route to get all users
router.route('/:id').get(getUserById);  // Example route to get a user by ID
router.route('/').post(createUser); // Route to create a new user
router.route('/:id').put(updateUser); // Route to update a user
router.route('/:id').delete(deleteUser); // Route to delete a user

module.exports = router;  // Export the router, not an object
