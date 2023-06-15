import { combineReducers } from "redux";

import auth from "./auth";
import admin from "./admin";
import adminlogo from "./adminLogo";
import userauth from "./userauth";
import user from "./user";


const rootReducer = combineReducers({
  auth,
  admin,
  adminlogo,
  userauth,
  user
});

export default rootReducer;
