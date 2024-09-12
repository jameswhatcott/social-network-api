# Social Network API

## Description

This project is a social network API built using **Node.js**, **Express**, **MongoDB**, and **Mongoose**. It allows users to create accounts, share their thoughts, react to friends' thoughts, and manage a friends list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Demo](#demo)

## Installation

To run this application locally, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/jameswhatcott/social-network-api.git


2. Navigate to the project directory:

cd social-network-api

3. Install the dependencies:

npm install

4. Set up the MongoDB connection:

Ensure you have MongoDB installed and running locally or have a connection string to a MongoDB Atlas cluster.
Update the config/connection.js file with your MongoDB URI if needed.

5. Seed the database (optional):

npm run seed

6. Start the server:

npm start
The server will run on http://localhost:3000.

## Usage

Once the server is running, you can use Insomnia or Postman to test the API routes. Refer to the API Endpoints section below for available routes.

Example Request to Add a Friend
Method: POST
URL: http://localhost:3000/api/users/:userId/friends/:friendId
API Endpoints

Users

GET /api/users - Get all users
GET /api/users/:userId - Get a single user by ID
POST /api/users - Create a new user
PUT /api/users/:userId - Update a user by ID
DELETE /api/users/:userId - Delete a user by ID


Thoughts

GET /api/thoughts - Get all thoughts
GET /api/thoughts/:thoughtId - Get a single thought by ID
POST /api/thoughts - Create a new thought
PUT /api/thoughts/:thoughtId - Update a thought by ID
DELETE /api/thoughts/:thoughtId - Delete a thought by ID


Friends
POST /api/users/:userId/friends/:friendId - Add a friend to a user
DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user


## Technologies
Node.js
Express.js
MongoDB
Mongoose
JavaScript



## Contributing
If you would like to contribute, feel free to submit a pull request or open an issue.

## Demo


