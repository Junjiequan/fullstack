import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
