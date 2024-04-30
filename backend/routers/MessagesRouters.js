const express = require("express");
const isAuthenticationUser = require("../middleware/users_admin");
const { MessageCreateController, GetUserMessageContoller, Test } = require("../controller/MessageController");
const router = express.Router()

router.post('/create/message',isAuthenticationUser,MessageCreateController)
router.get('/get/user/messages/:id',isAuthenticationUser,GetUserMessageContoller)
router.get('/test/:id',isAuthenticationUser,Test)
module.exports = router;