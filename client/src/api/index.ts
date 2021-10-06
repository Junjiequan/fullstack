import axios from "axios";
import type { Item, Comments_type } from "../Types";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const addFeedback = (newPost: Item) => axios.post(url, newPost);
export const editFeedback = (id: string, editedPost: Item) => axios.patch(`${url}/${id}`, editedPost);
export const addComment = (id: string, comment: Comments_type) => axios.patch(`${url}/${id}/comment`, comment);
export const delFeedback = (id: string) => axios.delete(`${url}/${id}`);

export const upVote = (id: string, user: any) => axios.patch(`${url}/${id}/upvote`, user);
export const downVote = (id: string, user: any) => axios.patch(`${url}/${id}/downvote`, user);
