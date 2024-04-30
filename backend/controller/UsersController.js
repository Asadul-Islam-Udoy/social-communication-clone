
const { ErrorHandler } = require("../error/ErrorHandler");
const UsersModels = require("../models/UsersModels");
const { storeUserToke } = require("../token/storeToken");
const sendEmail = require("../token/sendMail");
const ProfileModels = require("../models/ProfileModels");

exports.RegisterController=ErrorHandler(async(req,res)=>{
    const {first_name,last_name,username,email,password,followers,following}=req.body;

   const isexisEmail = await UsersModels.findOne( { email});
   if(isexisEmail){
    return res.status(401).json({
        success:false,
        message:'your email is already register!'
    })
   }
  const user = await new UsersModels({
    first_name,
    last_name,
    username,
    email,
    password,
    followers,
    following,
  })
  await user.save({validateBeforeSave:false})
  const profile = await ProfileModels.create({
    username:user.username,
    user:user._id
  })
  
  storeUserToke(user,res,200)

})

///login system

exports.LoginController=ErrorHandler(async(req,res)=>{
    const {email,password} = req.body;
    const user = await UsersModels.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({
            success:false,
            message:'your email address is not register!'
        })
       }
    const match = await user.comparePassword(password);
    if(!match){
        return res.status(401).json({
            success:false,
            message:'password is wrong!'
        })
    }
   
    storeUserToke(user,res,200)
});


//logout

exports.LogoutController=ErrorHandler(async(req,res)=>{
    res.clearCookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:false
    })
    return res.status(200).json({
        success:true,
        message:'logout successfully!'
    })
})


//forget password



exports.ForgetPassword=ErrorHandler(async(req,res,nesxt)=>{
   const {email} = req.body;
    const user = await UsersModels.findOne({ email });

    if(!user){
        return res.status(401).json({
            success:false,
            message:'your email address is not currect!'
    })
    }

    const restOtpToken = user.getOtpToken();
    await user.save({validateBeforeSave:false})

    const Otp_Url = `this is a otp ${restOtpToken}`;
    const message = `your otp is :\n\n ${Otp_Url} \n\n if you dont change password igone this otp`

   try{
    await sendEmail({
        email:user.email,
        subject:'social media',
        message
    })
    res.status(200).json({
        success:true,
        message:'email sent successfully!'
    })
    return user
   
    
   }
   catch(error){
    user.resetPasswordOtp = undefined
    user.resetExpiresPassword = undefined
    user.save({validateBeforeSave:false});
    return res.status(400).json({
        success:false,
        message:'email is not send'
    })
   }

})

//forget password reseet 

exports.ForgetPasswordUpdateController=ErrorHandler(async(req,res)=>{

    const user = await UsersModels.findOne({
        resetPasswordOtp:req.body.otp,
        resetExpiresPassword:{$gte:Date.now()}

    })
    if(!user){
        return res.status(400).json({
            success:false,
            message:'otp is not currect'
        })
    }
   if(req.body.newPassword !== req.body.confirmPassword){
    return res.status(400).json({
        success:false,
        message:'password is not match'
    })
   }
   else{
    user.password = req.body.newPassword,
    user.resetPasswordOtp = undefined,
    user.resetExpiresPassword = undefined,
    await user.save({validateBeforeSave:false})
    return res.status(200).json({
        success:false,
        message:'password is reset successfully!'
    })
    }
})

//update password
exports.UpdatePassword=ErrorHandler(async(req,res)=>{
    const { oldPassword,newPassword,confirmPasswore} = req.body;
    const user = await UsersModels.findOne({_id:req.user._id}).select('+password');
    const match = user.comparePassword(oldPassword);
    if(match){
        return res.status(400).json({
            success:false,
            message:'your old password is not match!'
        })
    }
    if(newPassword === confirmPasswore){
        user.password = newPassword
        await user.save({validateBeforeSave:false})
        return res.status(200).json({
            success:true,
            message:'password update successfully!'
        })
    }
    else{
        return res.status(400).json({
            success:false,
            message:'somthing is wrong password is not match'
        })  
    }

})


//update profile

exports.UpdateProfile=ErrorHandler(async(req,res,next)=>{
    const {first_name,last_name,works,username,lives,country,ustatus} = req.body;
    const avatar = req.file.filename;
    const profileUser = await ProfileModels.findOne({user:req.user._id})
    const profile = await ProfileModels.findByIdAndUpdate(profileUser._id,{
             username: username,
             works: works,
             ustatus:ustatus,
             lives: lives,
             country: country,
             avatar: avatar
    },{new:true})
    const profileUsers = await UsersModels.findByIdAndUpdate(req.user._id,{
        username: username,
        first_name : first_name,
        last_name : last_name,
      },{new:true})
   return res.status(200).json({
    success : true,
    message : 'profiel update successfully!'
   })

}) 


//get profile
exports.getSingeUserProfile=ErrorHandler(async(req,res)=>{
    const profile = await ProfileModels.findOne({user:req.user._id}).populate('posts.post','_id image like description likes')
    if(!profile){
        return res.status(400).json({
            success:false,
            message:'user profile is not getttinf'
        })
    }
    return res.status(200).json({
        success:true,
        message:'profile gettinf successfully',
        profile
    })

})


//get all user
exports.getAllUserController=ErrorHandler(async(req,res)=>{
 try{
    
    const profile = await ProfileModels.find();
    const users = profile.filter((item)=>item.user.toString() !== req.user._id.toString())
    if(!users){
      return res.status(400).json({
          success:false,
          message:'user profile is not getting'
      })
  }
  return res.status(200).json({
      success:true,
      message:'profile gettinf successfully',
      users
  })
 }
catch(error){
    return res.status(400).json({
        success:false,
        message:'somting is worng'
    })  
}
})


//get click user show
exports.getSingleUserDetailsController=ErrorHandler(async(req,res)=>{
const user = await ProfileModels.findById(req.params.id).populate('posts.post','image likes description');

 if(!user){
    return res.status(400).json({
        success:false,
        message:'get not single user',
    }) 
 }
 else{
    return res.status(200).json({
        success:true,
        message:'get single user',
        user

    })
 }
})


//get follower me
exports.getAllFollwerController=ErrorHandler(async(req,res)=>{
    const profile = await ProfileModels.findOne({user:req.user._id}).populate('posts.post','_id image like description likes');
    for(let item of profile.followers){
          const followerMe = await ProfileModels.find({user:item.user})
          return res.status(200).json({
            success:true,
            followerMe
          })
    }
  
})


//get following me
exports.getAllFollwingController=ErrorHandler(async(req,res)=>{
  const followingMe = await ProfileModels.findOne({user:req.user._id}).populate('posts.post','_id image like description likes')
  const profileModel = await ProfileModels.find()
  let followerList=[]
  followingMe.followers.forEach(item => {
    const fil = profileModel.filter((i)=>i.user.toString() == item.toString())
    followerList.push(fil)
  });
  let items =[]
  for(let i in followerList){
    followerList[i].forEach((item)=>{
        items.push(item)
    })
  }
  return res.status(200).json({
    success:true,
    items
  })
})