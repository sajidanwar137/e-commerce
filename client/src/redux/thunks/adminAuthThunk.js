import { createAsyncThunk } from "@reduxjs/toolkit";
import api from 'api/api';
import {fetchAdminAuthSuccess, fetchAdminAuthFailure} from 'redux/slices/adminAuthSlice'

export const adminLogin = createAsyncThunk(
  'admin/login',
  async (payload, {dispatch}) => {
    //Example
    //const {apiURL, obj = {} } = payload || {};
    try {
      const result = await api.post('/adminlogin', payload);
      dispatch(fetchAdminAuthSuccess(result))
      return result;
    } catch (error) {
      dispatch(fetchAdminAuthFailure(error.message))
      throw error;
    }
  }
);

export default adminLogin;