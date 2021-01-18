const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

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

userSchema.pre('save', function(){
    const user = this;
    if(!user.isModified('pass')){
        return next()
    }
    bcrypt.genSalt(10,(err, salt)=>{
        if(err){
            return next(err)
        }
        bcrypt.hash(user.pass,salt,(err, hash)=>{
            if(err){
                return next(err)
            }
            user.pass = hash;
            return next();
        })
    })
})

userSchema.methods.comparePass = function (candidatePass) {
    const user = this;
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePass,user.pass,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if(!isMatch){
                return reject(err)
            }
            resolve(true)
        })
    })
}

mongoose.model('User', userSchema);