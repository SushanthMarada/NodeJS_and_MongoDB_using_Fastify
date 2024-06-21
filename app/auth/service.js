const User = require('../users/models/user');

const bcrypt = require('bcrypt');

module.exports = {
    findbyEmail : async (email) => {
        return await User.findOne({email});
    },
    findbyUserId : async(userId) => {
        return await User.findById(userId);
    },
    findbyUserName : async(username) => {
        return await User.findOne(username);
    },
    create : async (data) => {
        data.password = bcrypt.hashSync(data.password,10);
        return await User.create(data);
    },
    isUserNameExists:async(data)=>
    {
        return await User.exists({data});
    },
    isEmailExists:async(data)=>{
        return await User.exists({data});
    },
    comparePassword : async(userPassword,password) => {
        const isCompared = bcrypt.compareSync(userPassword,password);
        return isCompared;
    }
}