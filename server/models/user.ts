import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  nickname: {
    type: String,
    default: "Anonymous",
    required: true,
  },
  selectedFile: {
    type: String,
    validate: /^data:image|\.(png)$/i,
    default:
      "https://images.vexels.com/media/users/3/143355/isolated/lists/7c9190c0fa15ec714bd3bea70c0ed2bb-mother-of-god-meme-face.png",
  },
});

module.exports = mongoose.model("user", userSchema);
