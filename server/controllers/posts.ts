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
  const { username, link, title, category, detail, comments, vote, votedList, status } = req.body;
  const newPost = new POSTS({ username, title, vote, votedList, detail, link, category, status, comments });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
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

const addComment: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { key, username, avatar, user_id, comment, replies } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json(`Feedback _id: ${id} not found`);

  const updatedPost = { key, username, avatar, user_id, comment, replies };
  await POSTS.findByIdAndUpdate(id, { $push: { comments: updatedPost } }, { new: true });

  res.json(updatedPost);
};

const upVote: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json(`Feedback _id: ${id} not found`);

  const post = await POSTS.findById(id);
  if (post.votedList.includes(username)) return res.json({ message: `This user have already voted` });

  await POSTS.findByIdAndUpdate(id, { vote: post.vote + 1, $push: { votedList: username } }, { new: true });

  res.json(post);
};

const downVote: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json(`Feedback _id: ${id} not found`);

  const post = await POSTS.findById(id);
  const updatedVotedList = post.votedList.filter((list: string) => list !== username);
  await POSTS.findByIdAndUpdate(id, { vote: post.vote - 1, votedList: updatedVotedList }, { new: true });

  res.json(post);
};

export = { getAllPost, addPost, updatePost, deletePost, addComment, upVote, downVote };
