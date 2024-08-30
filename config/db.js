const mongoose = require("mongoose")

mongoose.connect(`${process.env.MONGOURL}expenxdatabase`).then(() =>{
    console.log("database connected");
}).catch((err) =>{
    console.log(err);
    
})










