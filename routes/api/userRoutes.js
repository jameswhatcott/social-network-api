const router = require('express').Router();
const User = require('../../models/User');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find().populate('friends').populate('thoughts');
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new user
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Additional user routes can go here...

module.exports = router;
