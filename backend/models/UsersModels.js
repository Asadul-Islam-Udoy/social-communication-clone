const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const JWT= require('jsonwebtoken');
const crypto = require('crypto');
const  UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required : true
    },
    last_name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required :true,
        unique:true
    },

    password:{
        type:String,
        required:true,
        select:false
    },

resetPasswordOtp:String,
resetExpiresPassword:Date

},{timestamps:true})



UserSchema.pre('save',async function(next){
if(!this.isModified('password')){
    next();
}
this.password = await bcrypt.hash(this.password,10)
});

UserSchema.methods.comparePassword=async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password);
}
UserSchema.methods.getUserToken=function(){
    return JWT.sign({_id : this._id},process.env.TOKE_SECRITE_KEY,
        {expiresIn:'7d'}
        )
}

UserSchema.methods.getOtpToken=function(){
 const resetOtp = crypto.randomBytes(3).toString('hex').toLocaleUpperCase();
 this.resetPasswordOtp = resetOtp
 this.resetExpiresPassword = Date.now()+15*60*2000
 return resetOtp
}

module.exports = mongoose.model('Users',UserSchema)