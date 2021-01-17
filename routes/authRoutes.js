const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const User = mongoose.model('User'); 


router.post('/signup',(req,res)=>{
        console.log(req.body)
        const{email, pass} = req.body;
        const user = new User({email,pass});
        user.save();
        res.send('hello')
    }
)

module.exports = router