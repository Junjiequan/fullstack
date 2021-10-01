import { Request, Response, RequestHandler } from "express";

const POSTS = require("../models/post");

const Post: RequestHandler = (req: Request, res: Response) => {
  console.log("");
};

export = { Post };

/**
 * @desc supposedly this section should include the following functions
 */

//addPost
//editPost
//delPost
//addComment
//addDirectReply
//addInnerReply
