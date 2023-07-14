import { combineReducers } from "redux";
import adminAuthSlice from 'redux/slices/adminAuthSlice'

const rootReducer = combineReducers({
  adminAuth: adminAuthSlice
})

export default rootReducer;