const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost:27017/UserInfo";
mongoose.connect(mongoDB, {useNewUrlParser:true, useUniFiedTopology:true}).then(()=>{
    console.log("connection sucessfully");
}).catch(()=>{
    console.log("no connection");  
})


