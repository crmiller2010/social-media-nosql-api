const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

function dateFormat(timestamp) {
    return new Date(timestamp).toLocaleDateString();
  }


    
    
    id: false
});


