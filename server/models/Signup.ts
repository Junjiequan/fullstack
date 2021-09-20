const mongoose = require("mongoose");

const Signup = mongoose.Schema({
  username: {
    type: String,
    alowNull: false,
    unique: true,
  },
  password: {
    type: String,
    allowNull: false,
  },
});

module.exports = mongoose.model("signup", Signup);
