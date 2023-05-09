const { Schema, model, Types } = require('mongoose');



function dateFormat(timestamp) {
    
    
    return new Date(timestamp).toLocaleDateString();
    
    
    
  }


const reactionSchema = new Schema({
    
    
    reactionId: {
        
        
        type: Types.ObjectId,
        
        
        default: new Types.ObjectId(),
        
        
       
    },
    
    
    reactionBody: {
        
        
        
        type: String,
        
        
        
        required: true,
        
        
        
        maxLength: 280
        
        
        
    },
    
    
    username: {
        
        
        type: String,
        
        
        required: true
        
        
    },
    
    
    createdAt: {
        
        
        type: Date,
        
        
        default: Date.now
        
        ,
        get: timestamp => dateFormat(timestamp)
        
        
    }
    
    
},
                                  
                                  
{
    
    
    toJSON: {
        
        
        getters: true
        
        
    },
    
    
    id: false
    
    
});



module.exports = reactionSchema;
