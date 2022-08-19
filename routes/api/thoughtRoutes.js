const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  removeThought
} = require('../../controllers/thoughtController');


router.route('/')
  .get(getThoughts)
  .post(createThought);


router.route('/:thoughtId')
  .get(getSingleThought)
  .put(getSingleThought)
  .delete(removeThought)


module.exports = router;