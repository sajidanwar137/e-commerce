import React, {useState } from 'react';
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "store/auth/actions";
import { useNavigate } from 'react-router-dom';
import Input from 'components/common/input/Input'
import AdminLoginImg from 'resources/images/admin-login.png';
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import {validEmail} from 'utility/utility';
import api from 'api/api';
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
    if (validEmail(email)) {
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
      const result = await api.post('/adminlogin', payload);
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
    <div className='dc-admin-login p-7 d-flex justify-content-center align-items-center'>
      <div className='dc-admin-login__layout p-25 d-flex align-items-center'>
        <div className='dc-admin-login__layout--col pe-12'>
          <div className='dc-admin-login__title mb-15 d-flex align-items-center justify-content-start'>
              <div className='dc-admin-login__admin-icon--icon d-flex justify-content-center align-items-center'>
                <span className="dc-icon-administrator"></span>
              </div>
              <h4 className='dc-h4'>Admin login</h4>
          </div>
          {showError && <ErrorMessage type="error" message={error} />}
          
          <form className='dc-admin-login__layout-body' onSubmit={handleSubmit}>
              <div className='dc-admin-login__layout-row mb-8'>
                <Input type={'text'} labelid={'admin-user-email'} label={'Email'} update={handleEmailChange}/>
              </div>
              <div className='dc-admin-login__layout-row mb-8'>
                <Input type={'password'} labelid={'admin-password-email'} label={'Password'} update={handlePasswordChange}/>
              </div>
              <div className='dc-admin-login__layout-row mb-8 d-flex justify-content-center'>
                  <Link to="/dashboard/admin-forgot-password" className='px-12 py-4'>Forgot Password?</Link>
              </div>
              <div className='dc-admin-login__layout-row'>
                  <button type="submit" className='dc-btn dc-btn-primary dc-btn-fluid px-20 py-4'>Login</button>
              </div>
          </form>
        </div>
        <div className='dc-admin-login__layout--col ps-12'>
          <img src={AdminLoginImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
