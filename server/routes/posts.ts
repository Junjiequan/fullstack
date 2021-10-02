const express = require("express");
const router = express.Router();

const { getPost, addPost } = require("../controllers/posts");

router.get("/", getPost);
router.post("/", addPost);

export = router;
