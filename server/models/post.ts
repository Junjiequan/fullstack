import * as mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  username: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
  },
  detail: {
    type: String,
  },
  category: {
    type: String,
  },
  comments: {
    type: [Object],
  },
  vote: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("posts", postsSchema);
