import type { Item, Comments_type } from "../Types";
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

export const addFeedback = (post) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.addFeedback(post);
    dispatch({ type: "ADD_FEEDBACK", payload: data });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const editFeedback = (id, post) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.editFeedback(id, post);
    dispatch({ type: "EDIT_FEEDBACK", payload: data });
  } catch (err: any) {
    console.log(err.message);
  }
};

export const delFeedback = (id) => async (dispatch: AppDispatch) => {
  try {
    await api.delFeedback(id);
    dispatch({ type: "DEL_FEEDBACK", payload: id });
  } catch (err: any) {
    console.log(err.message);
  }
};
export const addComment = (target, id, post) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.addComment(id, post);
    dispatch({ type: "ADD_COMMENT", payload: data, target: target });
  } catch (err: any) {
    console.log(err.message);
  }
};
export const addDirectReply = (item: Comments_type, target_id: string) => {
  return {
    type: "ADD_DIRECTREPLY",
    payload: item,
    target: target_id,
  };
};
export const addInnerReply = (item: Comments_type, target_id: string) => {
  return {
    type: "ADD_INNERREPLY",
    payload: item,
    target: target_id,
  };
};

export const upVote = (item: Item) => {
  return {
    type: "UP_VOTE",
    payload: item,
  };
};
export const downVote = (item: Item) => {
  return {
    type: "DOWN_VOTE",
    payload: item,
  };
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
