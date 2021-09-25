const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  selectedFile: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
