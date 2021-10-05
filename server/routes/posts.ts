const express = require("express");
const router = express.Router();

const { getPost, addPost, updatePost, deletePost } = require("../controllers/posts");

router.get("/", getPost);
router.post("/", addPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export = router;
