import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/auth/actions';
import { useNavigate } from 'react-router-dom';
import {postData } from '../../api/api';

function Logout() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const adminData = useSelector((state) => state.admin);
  const handleLogout = async (e) => {
    const payload = {admin_id: adminData.data._id};
    const token = adminData.data.token;
    try {
      const result = await postData(payload, token);
      if (result && result.success === true) {
        dispatch(logout({ admin: result }));
        navigate('/dashboard/login');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  return (
    <div className='dc-logout d-flex align-items-center' onClick={handleLogout}>
        <span className='dc-icon-switch'></span>
        <span className='dc-logout__text'>Logout</span>
    </div>
  )
}
export default Logout
