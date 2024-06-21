const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title : {
        type : String,
        reuired : true
    },
    body:{
        type :String
    },
    likes : [{
        type : Schema.Types.ObjectId,
        ref :"Like"
    }],
    comments : [{
        type : Schema.Types.ObjectId,
        ref :"Comment"
    }]
},{timestamps : true})

module.exports = mongoose.models("Post",PostSchema);