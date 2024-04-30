const mongoose = require('mongoose');
const PostsSchema = new mongoose.Schema({
    image:{
      type:String,
      required:true
    },
    description:{
        type:String
    },
    like:{
        type:Number,
        default:0
    },
    comments:[{
       user:{
        type:mongoose.Schema.ObjectId,
        ref:'Users'
       },
       comment:{
        type:String,
       }
    }],
    likes:[],
     shares:[{
        user:{
         type:mongoose.Schema.ObjectId,
         ref:'Users'
        },
        share:{
         type:Number,
        }
     }],
     user:{
        type:mongoose.Schema.ObjectId,
        ref:'Users',
        required:true
     },


},{timestamps:true})

module.exports = mongoose.model('Posts',PostsSchema)