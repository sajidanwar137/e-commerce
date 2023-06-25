import { combineReducers } from "redux";

import auth from "./auth";
import admin from "./admin";
import logo from "./logo";
import userauth from "./userauth";
import user from "./user";


const rootReducer = combineReducers({
  auth,
  admin,
  logo,
  userauth,
  user
});

export default rootReducer;
