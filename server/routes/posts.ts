const express = require("express");
const router = express.Router();

const { getAllPost, addPost, updatePost, deletePost } = require("../controllers/posts");

router.get("*", getAllPost);
router.post("/", addPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export = router;
