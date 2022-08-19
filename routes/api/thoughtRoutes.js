const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  removeThought,
  updateThought
} = require('../../controllers/thoughtController');


router.route('/')
  .get(getThoughts)
  .post(createThought);


router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought)


module.exports = router;