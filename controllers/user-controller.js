const { User, Thought } = require('../models');

const userController = {


    getAllUsers(req, res) {
        User.find({})
        
            console.log(err);
            res.status(500).json(err);
        })
    },


    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .p
            if (!dbUserData) {
                res.status(404).json({message: 'No user found'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
           
        });
    },


    createUser({ body }, res) {
        User.create(body)
        .));
    },


    updateUser({ params, body }, res) {
        User.findo user found' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    
    deleteUser({ params }, res) {
        
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!
            }
            
            User.updateMany(
                { _id : {$in: dbUserData.friends } },
                { $pull
            )
            .then(() => {
                ame })
                .then(() => {
                    res
        .catch(err => res.status(400).json(err));
    },

   
    addFriend({ params }, res) {
        
        User.findOne
            if (!dbUserData) {
                res.status(40
            }
           
            User.findOneAndUpdate(
                { _id: p
            .then(dbUserData2 => {
                if(!dbUserData2) {
                    res.sta
       
    },

    
    deleteFriend({ params }, res) {
        
        User.fi
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this userId' });
                return;
            }
           
            User.findOneA
                    res.status(404).json({ message: 'No user found with this friend' })
                    return;
                }
