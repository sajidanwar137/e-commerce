import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { adminLogout } from 'store/auth/actions';
import { adminRemove } from 'store/admin/actions';
import { useNavigate } from 'react-router-dom';
import api from 'api/api';
import './index.scss';

function Logout() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const adminData = useSelector((state) => state?.admin);
  const token = useSelector((state) => state?.auth?.token);
  const handleLogout = async (e) => {
    const payload = {admin_id: adminData?.data._id};
    try {
      const result = await api.post('/logout', payload, {headers: {
          Authorization: `Bearer ${token}`,
        }});
      if (result && result.success === true) {
        dispatch(adminLogout({ auth: null }));
        dispatch(adminRemove({ admin: null }));
        navigate('/dashboard/login');
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
