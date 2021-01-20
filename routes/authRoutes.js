const express = require('express')
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const {jwtkey} = require('../keys')
const router = express.Router();
const User = mongoose.model('User');
 


router.post('/signup',async (req,res)=>{
        const{email, pass} = req.body;

        try{

            const user = new User({email,pass});
            await user.save();
            const token = jwt.sign({userId:user._id}, jwtkey)
            res.send({token})

        }catch(err){

           return res.status(422).send(err.message)

        }    

    }

)

router.post('/signin',async (req,res)=>{
    const {email,pass} = req.body
    if(!email || !pass){
        return res.status(422).send({error:"Must Provoide Email or Password "})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error:"Must Provoide Email or Password "})
    }
    try{
        await user.comparePassword(pass);
        const token = jwt.sign({userId:user._id},jwtkey)
        res.send({token})
    }catch(err){
        return res.status(422).send({error:"Must Provoide Email or Password "})
    }

})

module.exports = router