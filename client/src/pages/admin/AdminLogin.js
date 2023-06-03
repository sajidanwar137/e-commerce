import React, {useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/actions";
import { useNavigate } from 'react-router-dom';
import {adminLogin } from '../../api/api';

function AdminLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    try {
      const result = await adminLogin(payload);
      if (result && result.success === true) {
        dispatch(login({ admin: result }));
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className='dc-admin-layout p-7 d-flex justify-content-center align-items-center'>
      <div className='dc-admin-layout__layout p-10'>
        <div className='dc-admin-layout__title mb-15 d-flex align-items-center justify-content-center'>
            <div className='dc-admin-layout__admin-icon--icon d-flex justify-content-center align-items-center'>
              <span className="dc-icon-user"></span>
            </div>
            <h4 className='dc-h4'>Admin login</h4>
        </div>
        <form className='dc-admin-layout__layout-body' onSubmit={handleSubmit}>
            <div className='dc-admin-layout__layout-row mb-8'>
                <input className='dc-form-control py-5 px-6' type="email" value={email} onChange={handleEmailChange} placeholder='Username'/>
            </div>
            <div className='dc-admin-layout__layout-row mb-8'>
                <input className='dc-form-control py-5 px-6' type="password" value={password} onChange={handlePasswordChange} placeholder='Password'/>
            </div>
            <div className='dc-admin-layout__layout-row mb-8 d-flex justify-content-center'>
                <a href="#">Forgot Password?</a>
            </div>
            <div className='dc-admin-layout__layout-row'>
                <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
