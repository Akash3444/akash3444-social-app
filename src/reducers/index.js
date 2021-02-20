import { combineReducers } from "redux";
import userReducer from "./user";
import searchDisplay from "./searchdisplay";
import searchUsers from "./searchuser";
import uploadImage from "./uploadimage";
import postReducer from "./post";
import userProfileReducer from "./userprofile";

export default combineReducers({
  user: userReducer,
  post: postReducer,
  searchDisplay,
  searchUsers,
  uploadImage,
  userProfile: userProfileReducer
});
