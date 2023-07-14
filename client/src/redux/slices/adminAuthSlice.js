import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  message: null
};

const adminAuthSlice = createSlice({
  name: 'adminAuthSlice',
  initialState,
  reducers : {
    fetchAdminAuthSuccess: (state, action) => {
      state.isAuthenticated = action?.payload?.success;
      state.token = action?.payload?.data?.token;
      state.message = action?.payload?.message;
    },
    fetchAdminAuthFailure: (state, action) => {
      state.message = action?.payload?.message;
    },
    removeAdminAuth : (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.message = null
    },
  }
});

export const {fetchAdminAuthSuccess, fetchAdminAuthFailure, removeAdminAuth} = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
