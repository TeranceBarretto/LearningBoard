import { combineReducers } from "redux";
import auth from "./auth"
import course from "./course";
import navigation from "./navigation";

export default combineReducers({
  auth,
  course,
  navigation
});