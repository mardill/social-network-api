const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought
} = require('../../controllers/thoughtController');


router.route('/')
  .get(getThoughts)
  .post(createThought);


router.route('/:thoughtId')
  .put(getSingleThought)
  .delete(removeThought)



module.exports = router;