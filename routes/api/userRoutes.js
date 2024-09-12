const router = require('express').Router();
const { 
    getUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser,
    addFriend,
    removeFriend   
} = require('../../controllers/users');

router.route('/').get(getUsers);  // Example route to get all users
router.route('/:userId').get(getUserById);  // Example route to get a user by ID
router.route('/').post(createUser); // Route to create a new user
router.route('/:userId').put(updateUser); // Route to update a user
router.route('/:userId').delete(deleteUser); // Route to delete a user
router.route('/:userId/friends/:friendId').post(addFriend); // Route to add a friend to a user
router.route('/:userId/friends/:friendId').delete(removeFriend); // Route to remove friend from a user

module.exports = router;  // Export the router, not an object
