const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email :{
        type :String,
        required : true,
        unique : true
    },
    password :{
        type :String,
        required : true,
    },
    name : {type : String},
    posts :[{
        type : Schema.Types.ObjectId,
        ref:"Post"
    }],
    comments :[{
        type : Schema.Types.ObjectId,
        ref:"Comment"
    }],
    likes :[{
        type : Schema.Types.ObjectId,
        ref:"Like"
    }]
})

module.exports = mongoose.model("User",UserSchema);