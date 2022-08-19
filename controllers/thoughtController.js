const Thought = require('../models/Thought');

module.exports = {

    // get all users
    getThoughts(req, res) {
        User.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    // get a single user
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },

    // create a thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.status(500).json(err));
    },

    // delete a thought
    removeThought(req, res) {
        Application.findOneAndUpdate(
          { _id: req.params.applicationId },
          { $pull: { tags: { tagId: req.params.tagId } } },
          { runValidators: true, new: true }
        )
          .then((application) =>
            !application
              ? res.status(404).json({ message: 'No application with this id!' })
              : res.json(application)
          )
          .catch((err) => res.status(500).json(err));
      },
};




