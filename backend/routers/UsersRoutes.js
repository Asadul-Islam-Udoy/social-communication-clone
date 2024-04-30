const express = require('express');
const { 
     RegisterController,
     LoginController,
     LogoutController,
     ForgetPassword,
     ForgetPasswordUpdateController,
     UpdateProfile,
     getSingeUserProfile,
     getAllUserController,
     getAllFollwerController,
     getAllFollwingController,
     getSingleUserDetailsController,
     } = require('../controller/UsersController');
const multer = require('multer')
const path = require('path')
const isAuthenticationUser = require('../middleware/users_admin');
const router = express.Router();



const storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null,path.join(path.dirname(__dirname),'../frontend/public/profiles'))
     },
     filename: function (req, file, cb) {
       cb(null, + '-' + file.originalname)
     }
   }) 
 const upload = multer({ storage: storage })


router.post('/register',RegisterController);
router.post('/login',LoginController);
router.get('/logout',LogoutController)
router.put('/forget/password',ForgetPassword);
router.put('/forget/password/update',ForgetPasswordUpdateController)
router.put('/profile/update',upload.single('avatar'),isAuthenticationUser,UpdateProfile)
router.get('/getprofile',isAuthenticationUser,getSingeUserProfile)
router.get('/get/all/users',isAuthenticationUser,getAllUserController)
router.get('/get/follower/me',isAuthenticationUser,getAllFollwerController)
router.get('/get/following/me',isAuthenticationUser,getAllFollwingController)
router.get('/single/user/:id',isAuthenticationUser,getSingleUserDetailsController)
module.exports = router
