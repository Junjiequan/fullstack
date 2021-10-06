import { combineReducers } from "redux";
import feedbackReducer from "./feedbacks";
import filtersReducer from "./filters";
import sortsReducer from "./sorts";
import userReducer from "./user";
import loggedReducer from "./logged";

export const allReducer = combineReducers({
  feedbacks: feedbackReducer,
  filters: filtersReducer,
  sorts: sortsReducer,
  user: userReducer,
  logged: loggedReducer,
});
