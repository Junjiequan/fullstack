import { Request, Response, RequestHandler } from "express";
import mongoose from "mongoose";

const POSTS = require("../models/post");

const getAllPost: RequestHandler = async (req: Request, res: Response) => {
  try {
    const Posts = await POSTS.find();
    res.status(200).json(Posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const addPost: RequestHandler = async (req: Request, res: Response) => {
  const { username, link, title, category, detail, comments, vote, status } = req.body;
  const newPost = new POSTS({ username, title, vote, detail, link, category, status, comments });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

const updatePost: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { username, link, title, category, detail, comments, vote, status } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json(`Feedback _id: ${id} not found`);

  const updatedPost = { username, link, title, category, detail, comments, vote, status };

  await POSTS.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
};

const deletePost: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json(`Feedback _id: ${id} not found`);

  await POSTS.findByIdAndRemove(id);

  res.json({ message: `Feedback _id:${id} removed successfully!` });
};
/**
 * @desc supposedly this section should include the following functions
 */

//addComment
//addDirectReply
//addInnerReply

export = { getAllPost, addPost, updatePost, deletePost };
