import userReducer from "./user/UserReducer";
import { combineReducers } from "redux";

export default combineReducers({
  user: userReducer,
});
