import { Request, Response, RequestHandler } from "express";

const POSTS = require("../models/post");

const getPost: RequestHandler = async (req: Request, res: Response) => {
  const Posts = await POSTS.find();
  if (!Posts) {
    res.status(404).json({ error: "fetching posts failed" });
  }

  res.status(200).json({ msg: "successfully loaded" });
};

const addPost: RequestHandler = (req: Request, res: Response) => {
  const { user_name } = req.body;
  POSTS.create({
    username: user_name,
  })
    .then(() => {
      res.json({ message: "Post created!" });
      console.log("posted");
    })
    .catch((err: never) => {
      if (err) {
        res.status(400).json({ error: "Post Exists!" });
        console.log("????");
      }
    });
};

export = { getPost, addPost };

/**
 * @desc supposedly this section should include the following functions
 */

//addPost
//editPost
//delPost
//addComment
//addDirectReply
//addInnerReply
