const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        min:6

    },
    name:{
        type:String,
        required:true,
        min:6

    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1024
    },
    date:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
        default:'member'
    }
})

module.exports = mongoose.model('User',UserSchema)