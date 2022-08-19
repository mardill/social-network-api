const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
} = require('../../controllers/userController');

// all thoughts
router.route('/').get(getThoughts).post(createThought);

// single thought
router.route('/:userId').get(getSingleThought);

module.exports = router;