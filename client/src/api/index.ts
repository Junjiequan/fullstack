import axios from "axios";
import type { Item } from "../Types";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const addFeedback = (newPost: Item) => axios.post(url, newPost);
