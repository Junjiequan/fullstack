const express = require("express");
const router = express.Router();

const { getAllPost, addPost, updatePost, deletePost, addComment, upVote, downVote } = require("../controllers/posts");

router.get("*", getAllPost);
router.post("/", addPost);
router.patch("/:id", updatePost);
router.patch("/:id/upvote", upVote);
router.patch("/:id/downvote", downVote);
router.patch("/:id/comment", addComment);
router.delete("/:id", deletePost);

export = router;
