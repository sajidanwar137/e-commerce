import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeAdminAuth } from "redux/slices/adminSlice";
import { useNavigate } from 'react-router-dom';
import {headerBearer} from 'utility/utility';
import {setLocalStorage,getLocalStorageByKey} from 'utility/helper';
import api from 'api/api';
import './index.scss';

function Logout() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const data = useSelector((state) => state?.admin?.data);
  const token = getLocalStorageByKey('__auth', ['token'])
  const handleLogout = async (e) => {
    const payload = {admin_id: data[0]?._id};
    try {
      const result = await api.post('/logout', payload, headerBearer(token?.token));
      if (result && result.success === true) {
        navigate('/dashboard/login');
        setLocalStorage('__auth',{
          isAuthenticated: false,
          token:null,
          adminAuthTime: null
        })
        dispatch(removeAdminAuth());
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  return (
    <div className='dc-admin-logout d-flex align-items-center' onClick={handleLogout}>
        <span className='dc-icon-logout'></span>
        <span className='dc-logout__text'>Logout</span>
    </div>
  )
}
export default Logout
