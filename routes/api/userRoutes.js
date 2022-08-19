const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

// all users
router.route('/')
  .get(getUsers)
  .post(createUser);

// single user
router.route('/:userId')
  .get(getSingleUser);

module.exports = router;