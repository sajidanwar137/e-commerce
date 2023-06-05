import React, {useState } from 'react';
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../store/auth/actions";
import { useNavigate } from 'react-router-dom';
import {adminLogin } from '../../../api/api';
import AdminLoginImg from '../../../resources/images/admin-login.png';
import ErrorMessage from '../../common/error-message/ErrorMessage';
import './index.scss';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError("Please enter a valid email address");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    // Check if password is empty
    if (password.trim() === "") {
      setError("Please enter your password");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }

    const payload = {
      email: email,
      password: password,
    };
    try {
      const result = await adminLogin(payload);
      if (result && result.success !== true) {
        setError(result.message);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 5000);
        return;
      }
      dispatch(login({ admin: result }));
      navigate('/dashboard');
    }
    catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className='dc-admin-layout p-7 d-flex justify-content-center align-items-center'>
      <div className='dc-admin-layout__layout p-25 d-flex align-items-center'>
        <div className='dc-admin-layout__layout--col pe-12'>
          <div className='dc-admin-layout__title mb-15 d-flex align-items-center justify-content-start'>
              <div className='dc-admin-layout__admin-icon--icon d-flex justify-content-center align-items-center'>
                <span className="dc-icon-administrator"></span>
              </div>
              <h4 className='dc-h4'>Admin login</h4>
          </div>
          {showError && <ErrorMessage type="error" message={error} />}
          
          <form className='dc-admin-layout__layout-body' onSubmit={handleSubmit}>
              <div className='dc-admin-layout__layout-row mb-8'>
                  <input className='dc-form-control py-5 px-6' type="email" value={email} onChange={handleEmailChange} placeholder='Email'/>
              </div>
              <div className='dc-admin-layout__layout-row mb-8'>
                  <input className='dc-form-control py-5 px-6' type="password" value={password} onChange={handlePasswordChange} placeholder='Password'/>
              </div>
              <div className='dc-admin-layout__layout-row mb-8 d-flex justify-content-center'>
                  <Link to="/dashboard/admin-forgot-password" className='px-12 py-4'>Forgot Password?</Link>
              </div>
              <div className='dc-admin-layout__layout-row'>
                  <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Login</button>
              </div>
          </form>
        </div>
        <div className='dc-admin-layout__layout--col ps-12'>
          <img src={AdminLoginImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
