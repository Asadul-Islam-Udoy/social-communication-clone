
exports.storeUserToke=async(user,res,statusCode)=>{
 const token = user.getUserToken();
 const options = {
    expires:new Date(
        Date.now()+process.env.TOKEN_EXPRIES*24*60*60*1000
    
    ),
    httpOnly:false
 }

    res.status(statusCode).cookie('token',token,options).json({
    success:true,
    message:'token generate successfully!',
    user,
    token
 })
 
}