const mongoose = require("mongoose");

// User Schema:

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type: String,
        enum:['user','admin'],
        default:'user',
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

const User = mongoose.model('User',userSchema);
module.exports = User;