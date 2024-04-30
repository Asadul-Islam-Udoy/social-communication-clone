const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    ustatus:{
      type:String,
      default:'no relationship'
    },
    avatar:{
        type:String,
        default: 'avatar.png'
     },
      cover_image:{
        type:String, 
        default:"cover.jpg"
      },
      lives:{
        type:String,
        },
        country:{
            type:String,
            },
        works:{
           type:String,
          },
        status:{
            type:String,
         },
         followers: [],
         following: [],
       posts: [{
           post:{
            type:mongoose.Schema.ObjectId,
            ref:'Posts'
           }
           }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'Users'
    }
},{timeseries:true})

module.exports = mongoose.model('Profile',ProfileSchema)