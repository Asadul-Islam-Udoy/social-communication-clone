const mongoose = require('mongoose')
const DB_Connection = async(req,res)=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`mongoose connection is ${conn.connection.host}`.bgBlue)
    }
    catch(error){
        console.log(`mongoose connection error${error}`.bgRed);
    }
}
module.exports = DB_Connection