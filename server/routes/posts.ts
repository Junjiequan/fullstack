const express = require("express");
const router = express.Router();

const {
  getAllPost,
  addPost,
  updatePost,
  deletePost,
  addComment,
  upVote,
  downVote,
  addDirectReply,
  addInnerReply,
} = require("../controllers/posts");

router.get("*", getAllPost);
router.post("/", addPost);
router.patch("/:id", updatePost);
router.patch("/:id/upvote", upVote);
router.patch("/:id/downvote", downVote);
router.patch("/:id/comment", addComment);
router.patch("/:id/direct_reply", addDirectReply);
router.patch("/:id/inner_reply", addInnerReply);
router.delete("/:id", deletePost);

export = router;
