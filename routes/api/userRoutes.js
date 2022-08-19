const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  removeUser,
  updateUser
} = require('../../controllers/userController');

// all users
router.route('/')
  .get(getUsers)
  .post(createUser);

// single user
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(removeUser)



module.exports = router;