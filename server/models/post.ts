import * as mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  detail: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    default: "Feature",
    require: true,
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
    require: true,
  },
});

module.exports = mongoose.model("posts", postsSchema);
