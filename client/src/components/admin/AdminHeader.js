import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../redux/auth/actions";
import { useNavigate } from 'react-router-dom';
import {postData } from '../../api/api';

function AdminHeader() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const adminData = useSelector((state) => state.admin);
  
  const [isOpened, setIsOpened] = useState(false);
  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }

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
    <div className='dc-dashboard__header d-flex align-items-stretch mb-2 mb-lg-10 justify-content-between'>
      <div className='container'>
        <h5>Welcome {adminData.data.name}</h5>
        <div className='dc-dashboard__header-right'>
          <button className='dc-dashboard__dropdown-button' onClick={toggle}>Admin <i className="fa-solid fa-user"></i></button>
          {isOpened && (
            <div className='dc-dashboard__header-dropdown'>
              <ul>
                <li><a href="#"><i className="fa-solid fa-user"></i> Update profile</a></li>
                <li><a href="#"><i className="fa-solid fa-lock"></i> Change password</a></li>
                <li><a href="#" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i> Logout</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
