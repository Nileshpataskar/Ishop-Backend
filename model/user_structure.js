const mongoose = require("mongoose");

const user_structure = mongoose.Schema({
 
  Email: {
    type: String,
  },
  Name: {
    type: String,
  },
});

const User_db = mongoose.model("User_db", user_structure);
module.exports = User_db;
