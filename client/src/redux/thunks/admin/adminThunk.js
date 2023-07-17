import { createAsyncThunk } from "@reduxjs/toolkit";
import api from 'api/api';
import {fetchAdminSuccess, fetchAdminFailure} from 'redux/slices/admin/adminSlice'

export const getAdmin = createAsyncThunk(
  'admin',
  async (options, {dispatch}) => {
    //Example
    //const {apiURL, obj = {} } = payload || {};
    try {
      const result = await api.get('/admin',{}, options);
      dispatch(fetchAdminSuccess(result))
    } catch (error) {
      dispatch(fetchAdminFailure(error.message))
      throw error;
    }
  }
);

export default getAdmin;