const MessageModel = require("../models/MessageModel");
const UsersModels = require("../models/UsersModels");
const JWT = require('jsonwebtoken')

exports.MessageCreateController=async(req,res)=>{
try{
    const {message,receverId} = req.body;
const messageCreate = await MessageModel.create({
    conversationId:[req.user._id,receverId],
    senderId:req.user._id,
    text:message
})
if (messageCreate){
    const messages = await MessageModel.find({
        conversationId:{$in:receverId}  
    }) 
    return res.status(200).json({
        success:true,
        message:'message create successfully',
        messages
        
    })  
}
}
catch(error){
    return res.status(400).json({
        success:false,
        message:'somthing is wong',
       
        
    }) 
}
}

//get user message
exports.GetUserMessageContoller=async(req,res)=>{
const messages = await MessageModel.find({
    conversationId:{$in:req.params.id}  
});
return res.status(200).json({
    success:true,
    message:'getting user message',
    messages
})
}

exports.Test=async(req,res,next)=>{
    return res.status(200).json({
        success:true,
        message:'getting user message',
    })
   

}