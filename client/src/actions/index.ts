import type { Item, Comments_type, Replies } from "../Types";
import type { AppDispatch } from "../index";
import * as api from "../api";

export const fetchAllPosts = async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const addFeedback = (post: Item) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.addFeedback(post);
    dispatch({ type: "ADD_FEEDBACK", payload: data });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const editFeedback = (id: string, post: any) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.editFeedback(id, post);
    dispatch({ type: "EDIT_FEEDBACK", payload: data });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const delFeedback = (id: string) => async (dispatch: AppDispatch) => {
  try {
    await api.delFeedback(id);
    dispatch({ type: "DEL_FEEDBACK", payload: id });
  } catch (err: any) {
    console.log(err.message);
  }
};
export const addComment = (target: string, id: string, post: Comments_type) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.addComment(id, post);
    dispatch({ type: "ADD_COMMENT", payload: data, target: target });
  } catch (err: any) {
    console.log(err.message);
  }
};
export const addDirectReply = (target: string, post: Comments_type) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.addDirectReply(target, post);
    dispatch({ type: "ADD_DIRECTREPLY", payload: data, target: target });
  } catch (err: any) {
    console.log(err.message);
  }
};
export const addInnerReply =
  (target: string, direct_reply_key: string, post: Replies) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await api.addInnerReply(target, post);
      dispatch({ type: "ADD_INNERREPLY", payload: data, target: target });
    } catch (err: any) {
      console.log(err.message);
    }
  };

export const upVote = (item: Item, id: string, user: any) => async (dispatch: AppDispatch) => {
  try {
    await api.upVote(id, user);
    dispatch({ type: "UP_VOTE", payload: item });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const downVote = (item: Item, id: string, user: any) => async (dispatch: AppDispatch) => {
  try {
    await api.downVote(id, user);
    dispatch({ type: "DOWN_VOTE", payload: item });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const setFilter = (item: string) => {
  return {
    type: "SET_FILTER",
    payload: item,
  };
};
export const setSort = (item: string) => {
  return {
    type: "SET_SORT",
    sort: item,
  };
};

export const getUser = (item: any) => {
  return {
    type: "GET_USER",
    payload: item,
  };
};

export const loggedIn = () => {
  return { type: "LOGGED_IN" };
};
export const loggedOut = () => {
  return { type: "LOGGED_OUT" };
};
