const { User, Thought, Reaction } = require('../models');

const thoughtController = {

    
    getAllThoughts(req, res) {
        Thought.find({})
      
    },

    
    getThoughtById({ params }, res) {
        Thought.findOne()
       
            if (!dbThoughtData) {
               
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
          
    createThought({ body }, res) {
        Th: dbThoughtData._id } },
                { new: true }
            )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.
                }
              

    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
          
            body,
            { new: true }
        )
        .t
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },


    
    deleteThought({ params }, res) {
        
            )
            .then(() => {
                res.json({message: 'Successfully deleted the thought'});
            })
            .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
    },

    
    addReaction({ params, body }, res) {
        Thought.
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id' });
                r
    

    deleteReaction({ params, body }, res) {
        Thought
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id' });
                return;
            }
            res.json({message: 'Successfully deleted the reaction'});
        })
        .catch(err => res.status(500).json(err));
    },
}



