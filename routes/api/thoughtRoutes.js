const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughts');

// Route to GET all thoughts and POST a new thought
router.route('/')
  .get(getThoughts)        // Get all thoughts
  .post(createThought);    // Create a new thought

// Route to GET, PUT, DELETE a single thought by ID
router.route('/:thoughtId')
  .get(getSingleThought)   // Get a single thought by ID
  .put(updateThought)      // Update a thought by ID
  .delete(deleteThought);  // Delete a thought by ID

// Route to POST a reaction to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction);      // Add a reaction to a thought

// Route to DELETE a reaction by its reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);  // Remove a reaction from a thought

module.exports = router;
