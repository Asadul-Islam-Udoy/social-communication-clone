const { ErrorHandler } =require("../error/ErrorHandler");
const JWT = require('jsonwebtoken');
const UsersModels = require("../models/UsersModels");

const isAuthenticationUser =ErrorHandler(async(req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            success:false,
            message:'user tokenss is not define'
        })
    }
    JWT.verify(token, process.env.TOKE_SECRITE_KEY, {}, async(err, decoded) => {

        if (err !== null && err instanceof JWT.TokenExpiredError) {
           return res.status(400).json({
            message:'token is expires'
           })
        }

        if (err instanceof JWT.JsonWebTokenError) {
            return res.status(400).json({
                message:'token is invalid'
               })
        }
        req.user = await UsersModels.findById(decoded);
        next();
    });
})
module.exports = isAuthenticationUser


