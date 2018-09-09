const mongoose = require("mongoose"),
      teamSchema = mongoose.Schema({
          teamName:{type:String, trim:true, default:""},
          city:{type:String, trim:true, default:""},
          league:{type:String, trim:true, default:""}
      });
      
module.exports = mongoose.model("team", teamSchema );
      