const Thought = require('../models/Thought');

module.exports = {

    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    // get a single thought
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

    // update a thought
    updateThought({params, body}, res){
        Thought.findOneAndUpdate({_id: params.thoughtId }, body, {
            new: true,
            runValidators: true,
          })
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },

    // delete a thought
    removeThought(req, res) {
        Thought.findOneAndDelete(
          { _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
};




