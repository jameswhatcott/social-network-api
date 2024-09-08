const mongoose = require('mongoose');

// Environment variable for MongoDB URI or fallback to local database
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetwork';

// Connect to MongoDB
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Log the connection status
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
});

module.exports = mongoose.connection;
