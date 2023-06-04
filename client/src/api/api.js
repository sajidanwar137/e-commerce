import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000/api/v1/'; // Replace with your API base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
//
export const adminLogin = async (data) => {
    try {
      const response = await api.post('/adminlogin', data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
};
// Example API service function to fetch data with a token in headers
export const fetchData = async (token) => {
  try {
    const response = await api.get('/data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

// Example API service function to post data with a token in headers
export const postData = async (data, token) => {
  try {
    const response = await api.post('/logout', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const adminChangePasswordAPI = async (data, token) => {
  try {
    const response = await api.post('/update-admin-password', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
//
export const adminForgotPassword = async (data) => {
  try {
    const response = await api.post('/admin-password-forget', data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
//
export const adminResetPassword = async (data) => {
  try {
    const response = await api.get(`/admin-password-reset?token=${data.token}&password=${data.password}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
// ... Define other API service functions as needed

export default api;
