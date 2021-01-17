const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    pass:{
        type:String,
        required:true,
    }
})

mongoose.model('User', userSchema);