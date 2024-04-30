const express = require('express');
const {
     PostsController,
      GetAllPosts, 
      PostLikesController,
       FollowersController,
        UserPostController,
        UserCoverImageController,
        MypostController,
        PostDeleteController
     } = require('../controller/PostsController');
const isAuthenticationUser = require('../middleware/users_admin');
const multer = require('multer')
const path = require('path')
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname),'../frontend/public/posts'))
    },
    filename: function (req, file, cb) {
      cb(null, + '-' + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })
router.post('/posts/create',upload.single('image'),isAuthenticationUser,PostsController)
router.put('/create/cover',upload.single('cover_image'),isAuthenticationUser,UserCoverImageController)
router.get('/posts',isAuthenticationUser,GetAllPosts)
router.put('/like/:id/:userId',PostLikesController)
router.put('/follower/:id',isAuthenticationUser,FollowersController)
router.get('/get_user_post',isAuthenticationUser,UserPostController)
router.get('/my/posts',isAuthenticationUser,MypostController)
router.put('/my/posts/:id',isAuthenticationUser,PostDeleteController)
//

module.exports = router