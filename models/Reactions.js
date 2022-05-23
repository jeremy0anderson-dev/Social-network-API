const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: "Body Required",
        maxLength: 280
    },
    username:{
        type: String,
        required: "Username Required"
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: (date)=>{
            return new Date(date).toLocaleDateString()
        }
    },
},{
    toJSON:{
        virtuals: true,
        getters: true
    }
})

module.exports=reactionSchema;
