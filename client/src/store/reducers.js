import { combineReducers } from "redux";

import auth from "./auth";
import admin from "./admin";
import adminlogo from "./adminLogo";


const rootReducer = combineReducers({
  auth,
  admin,
  adminlogo
});

export default rootReducer;
