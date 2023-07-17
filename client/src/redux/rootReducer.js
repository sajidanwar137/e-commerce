import { combineReducers } from "redux";
import adminSlice from 'redux/slices/admin/adminSlice'

const rootReducer = combineReducers({
  admin: adminSlice
})

export default rootReducer;