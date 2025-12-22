const mongoose = require("mongoose");

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db connection successful")
    }catch(error){
        console.log(`Db connection failed : ${error.message}`)
    }
}

dbConnection();