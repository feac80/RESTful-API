const mongoose = require("mongoose"),
      profileSchema  = new mongoose.Schema({
          firstName:{type:String, trim:true},
          lastName :{type:String, trim:true},
          age      :{type:Number, trim:true},
          team     :{type:String, trim:true},
          position :{type:String, trim:true} 
      });
      
module.exports = mongoose.model("profile", profileSchema );
     
      