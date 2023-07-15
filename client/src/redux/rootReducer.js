import { combineReducers } from "redux";
import adminSlice from 'redux/slices/adminSlice'

const rootReducer = combineReducers({
  admin: adminSlice
})

export default rootReducer;