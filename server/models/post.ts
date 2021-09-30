import * as mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  user_name: {
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
    type: Array,
  },
  vote: {
    type: Number,
  },
  voted: {
    type: Boolean,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("posts", postsSchema);
