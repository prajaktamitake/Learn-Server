const express =require("express");


// const dbConfig =require("../db/connect");
const { mongoose } =require("mongoose");
var regUser = mongoose.model('regUser',
{
    name:{
        type:String,
        // required:true,
        trim:true
    },
    email:{
        type:String,
        //  required:true,
         unique:true
    },
    password:{
        type:String,
        // required:true,
    },
    address:{
        type:String,
        // required:true,
   },
   city:{
     type:String,
    //  required:true,
   },
   gender:{
    type:String,
    // required:true,
   },
   language:{
    type:String,
    // required:true,
   },
   image: {
    type: String, 
    required: true
 }


}, 'regUser')
// const registrationUser = new mongoose.model("regUser", RegUser)
module.exports = {regUser}; 