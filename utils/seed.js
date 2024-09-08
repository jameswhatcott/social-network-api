const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');
const connection = require('../config/connection');

// Sample users
const users = [
    {
        username: 'johnDoe',
        email: 'john.doe@example.com',
        friends: []
    },
    {
        username: 'janeDoe',
        email: 'jane.doe@example.com',
        friends: []
    },
    {
        username: 'mikeSmith',
        email: 'mike.smith@example.com',
        friends: []
    }
];

// Sample thoughts
const thoughts = [
    {
        thoughtText: "I love coding in JavaScript!",
        username: "johnDoe",
        reactions: [
            {
                reactionBody: "Me too!",
                username: "janeDoe"
            }
        ]
    },
    {
        thoughtText: "MongoDB is really cool!",
        username: "janeDoe",
        reactions: [
            {
                reactionBody: "Absolutely agree!",
                username: "mikeSmith"
            }
        ]
    }
];

// Seed the database
connection.once('open', async () => {
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert sample users
    const createdUsers = await User.insertMany(users);

    // Insert sample thoughts
    const createdThoughts = await Thought.insertMany(thoughts);

    // Add thoughts to users
    for (let i = 0; i < createdThoughts.length; i++) {
        const thought = createdThoughts[i];
        await User.findOneAndUpdate(
            { username: thought.username },
            { $push: { thoughts: thought._id } }
        );
    }

    console.log('Database seeded!');
    process.exit(0);
});
