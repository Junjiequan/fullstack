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
    default: "Feature",
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
    default: "Suggestion",
  },
});

module.exports = mongoose.model("posts", postsSchema);
