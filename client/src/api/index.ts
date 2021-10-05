import axios from "axios";
import type { Item } from "../Types";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const addFeedback = (newPost: Item) => axios.post(url, newPost);
export const editFeedback = (id, editedPost) => axios.patch(`${url}/${id}`, editedPost);
export const delFeedback = (id) => axios.delete(`${url}/${id}`);
