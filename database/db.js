const mongoose = require("mongoose")
mongoose.set('strictQuery', true)

function dbConnection(){
  const uri = process.env.DB_ACCESS_URL;
    try{
        mongoose.connect(uri);
    
        const db = mongoose.connection
       
        db.on("error" , console.error.bind(console , "Connection error"))
        db.once("open" , function(){
            console.log("connected successfully")
        })
    
    }catch(err){
        console.log(err)
    }
  
}

module.exports=dbConnection

//2d9jUbIj6Gb4M4Es