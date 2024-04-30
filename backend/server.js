const app = require('./app');
const colors = require('colors')
const CookieParser = require('cookie-parser')
 const dotenv = require('dotenv');
const DB_Connection = require('./config/db');
dotenv.config({path:'backend/.env'})
app.use(CookieParser())
DB_Connection()
PORT = process.env.PORT || 8000


// app.get('',(req,res)=>{
// return res.status(200).json({
//     success:true,
//     message:'running successfully'
// })
// })

app.listen(PORT,(req,res)=>{
    console.log(`http://127.0.0.1:${PORT}`)
})