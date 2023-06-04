import React, {useState } from 'react';
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {adminForgotPassword } from '../../../api/api';
import ForgotPasswordImg from '../../../resources/images/forgot-password.png';
import './index.scss';

function ForgotPassword() {
  //const dispatch = useDispatch()
  //const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email
    };
    try {
      const result = await adminForgotPassword(payload);
      if (result && result.success === true) {
        console.log("object::::", result)
        //dispatch(login({ admin: result }));
        //navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    setEmail('')
  };

  return (
    <div className='dc-admin-layout p-7 d-flex justify-content-center align-items-center'>
      <div className='dc-admin-layout__layout p-25 d-flex align-items-center'>
        <div className='dc-admin-layout__layout--col pe-12'>
          <div className='dc-admin-layout__title mb-15 d-flex align-items-center justify-content-start'>
              <div className='dc-admin-layout__admin-icon--icon d-flex justify-content-center align-items-center'>
                <span className="dc-icon-administrator"></span>
              </div>
              <h4 className='dc-h4'>Forgot Password?</h4>
          </div>
          <div className='mb-10'>
            <p>To reset your password, enter the registered e-mail adddress and we will send you password reset instructions on your e-mail!</p>
          </div>
          <form className='dc-admin-layout__layout-body' onSubmit={handleSubmit}>
              <div className='dc-admin-layout__layout-row mb-8'>
                  <input className='dc-form-control py-5 px-6' type="email" value={email} onChange={handleEmailChange} placeholder='Enter your registered E-mail'/>
              </div>
              <div className='dc-admin-layout__layout-row mb-8 d-flex justify-content-center'>
                  <Link to="/dashboard/login" className='px-12 py-4'>Wait, I remember my password</Link>
              </div>
              <div className='dc-admin-layout__layout-row'>
                  <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Reset password</button>
              </div>
          </form>
        </div>
        <div className='dc-admin-layout__layout--col ps-12'>
          <img src={ForgotPasswordImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
