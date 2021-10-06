const express = require("express");
const router = express.Router();

const { getAllPost, addPost, updatePost, deletePost, addComment } = require("../controllers/posts");

router.get("*", getAllPost);
router.post("/", addPost);
router.patch("/:id", updatePost);
router.patch("/:id/comment", addComment);
router.delete("/:id", deletePost);

export = router;
