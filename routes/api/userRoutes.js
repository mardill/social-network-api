const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  removeUser
} = require('../../controllers/userController');

// all users
router.route('/')
  .get(getUsers)
  .post(createUser);

// single user
router.route('/:userId')
  .put(getSingleUser)
  .delete(removeUser)



module.exports = router;