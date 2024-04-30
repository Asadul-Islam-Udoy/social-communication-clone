
const { ErrorHandler } = require("../error/ErrorHandler");
const PostsModels = require("../models/PostsModels");
const ProfileModels = require("../models/ProfileModels");
const UsersModels = require("../models/UsersModels");

exports.PostsController=ErrorHandler(async(req,res)=>{
    const {description ,comments,likes,shares} = req.body;
    const profile = await ProfileModels.findOne({user:req.user._id})
    const image = req.file.filename
    const post = await PostsModels.create({
        image,
        description,
        comments,
        likes,
        shares,
        user:req.user._id   
    })
    const postssave={  
        post:post._id
        }
   if(post){
     profile.posts.push(postssave)
   }
   await profile.save({validateBeforeSave:false})
   return res.status(200).json({
    success:true,
    message:'post is successfully!',
    post  
    })
})
//post delete
exports.PostDeleteController=async(req,res)=>{
    try{
   
     const myprofile = await ProfileModels.findOne({user:req.user._id});
     const mypost  = myprofile.posts.filter((po)=>po.post.toString() === req.params.id.toString());
     if(mypost){
        myprofile.posts.pop(mypost)
     }
     const posts = await PostsModels.findByIdAndDelete(req.params.id);
     await myprofile.save({validateBeforeSave:false})
     return res.status(200).json({
        success :true,
        message:'post is deleting successfully!',
        posts
    })
    }catch(error){
        return res.status(401).json({
            success :false,
            message:'post is not delete'
        })
    }
}

//getAllPost
exports.GetAllPosts=ErrorHandler(async(req,res)=>{
   try{
    const posts = await PostsModels.find({},).sort('createAt');
    if(posts){
        return res.status(200).json({
            success:true,
            message:'product get successfully!',
            posts
        })
    
    }
    else{
        return res.status(200).json({
            success:false,
            message:'product not get successfully!',
            posts
        })  
    }
   }
    catch(error){
        return res.status(400).json({
            success:false,
            message:'somting is worng'
        })  
    }
})
//like system

exports.PostLikesController=ErrorHandler(async(req,res)=>{
const id = req.params.id;
const userId = req.params.userId;
if(!userId){
  return res.status(400).json({
    success:false,
    message:'user are not user'
  })
}
try{
    const post = await PostsModels.findById(id);
    if(!post.likes.includes(userId)){
        await post.updateOne(({$push:{likes:userId}}))
        res.status(200).json({
            success:true,
            message:'like is successfully'
        })
    }
    else{
        await post.updateOne(({$pull:{likes:userId}}))
        res.status(200).json({
            success:true,
            message:'unlike is successfully'
        })  
    }
}
catch(error){
  return res.status(400).json({
    message:'like is not success!'
  })  
}
})


//follower 

exports.FollowersController=ErrorHandler(async(req,res)=>{
    
 const userModel = await UsersModels.findById(req.params.id);
 const profileMe = await ProfileModels.findOne({user:userModel})
 const YouProfile = await ProfileModels.findOne({user:req.user._id});
    if(!profileMe){
        return res.status(401).json({
            success:false,
            message:'profile user is not getting'
        })
    }
   const checkUser = await profileMe.followers.find((follo)=> follo.toString() === req.user._id.toString())

   if(!checkUser){
    profileMe.followers.push(req.user._id)
    YouProfile.following.push(req.params.id)
   }
   else{
     profileMe.followers.pop(checkUser)
     YouProfile.following.pop(req.user._id)
   
    }
   await profileMe.save({validateBeforeSave:false})
   await YouProfile.save({validateBeforeSave:false})
   return res.status(200).json({
    success:true,
    message:'follower is successfully!',
    profileMe
   })
})


//single user post

exports.UserPostController=ErrorHandler(async(req,res)=>{
    const posts = await PostsModels.find({user:req.user._id})
    if(!posts){
        return res.status(401).json({
            success:false,
            message:'user posts is not getting'
        })
    }
    return res.status(200).json({
        success:true,
        message:'posts getting successfully!',
        posts
    })
})

//cover image

exports.UserCoverImageController=ErrorHandler(async(req,res)=>{
    const profile  = await ProfileModels.findOne({user:req.user._id})
    const cover_image = req.file.filename
    console.log(cover_image)
    if(!profile){
        return res.status(401).json({
            success:false,
            message:'cover image is not create'
        })
    }
    else{
       const update =  await ProfileModels.findByIdAndUpdate(profile._id,{cover_image},{new:true})
      if(update){
        return res.status(200).json({
            success:true,
            message:'cover create successfully!',
        })
      }
    }

})

//my post 

exports.MypostController=ErrorHandler(async(req,res)=>{
    const posts = await PostsModels.find({user:req.user._id})
    if(posts){
        return res.status(200).json({
            success:true,
            message:'post getting  successfully!',
            posts
        })
      }
})