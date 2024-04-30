const express = require('express')
const UserRouter = require('./routers/UsersRoutes')
const PostRouter = require('./routers/PostsRouters')
const MessageRouter = require("./routers/MessagesRouters")
const path = require("path");
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/users',UserRouter)
app.use('/api/post',PostRouter)
app.use('/api/message',MessageRouter)


app.use(express.static(path.join(__dirname,'../frontend/build')));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
})
module.exports = app