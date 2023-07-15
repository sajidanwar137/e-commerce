import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  message: null,
  data: [],
  success: false,
  error: null
};

const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers : {
    fetchAdminSuccess: (state, action) => {
      state.data = action?.payload?.data;
      state.success = action?.payload?.success;
    },
    fetchAdminFailure: (state, action) => {
      state.error = action?.payload?.error;
      state.success = action?.payload?.success;
    },
    saveAdminAuth: (state, action) => {
      state.isAuthenticated = action?.payload?.success;
      state.token = action?.payload?.data?.token;
      state.message = action?.payload?.message;
    },
    removeAdminAuth : (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.message = null
    },
  }
});

export const {saveAdminAuth, removeAdminAuth, fetchAdminSuccess, fetchAdminFailure} = adminSlice.actions;
export default adminSlice.reducer;
