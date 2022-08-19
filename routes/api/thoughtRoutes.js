const router = require('express').Router();
const {
  getThoughts,
  getSingleUser,
  createUser,
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);

module.exports = router;