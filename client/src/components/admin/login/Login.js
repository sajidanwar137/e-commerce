import React, {useState } from 'react';
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveAdminAuth } from "redux/slices/adminSlice";
import { useNavigate } from 'react-router-dom';
import Input from 'components/common/input/Input'
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import {validEmail} from 'utility/utility';
import {setLocalStorage} from 'utility/helper';
import { constants } from 'utility/constants';
import ErrorDisplay from 'components/hooks/ErrorDisplay';
import api from 'api/api';
import './index.scss';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = ErrorDisplay();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validEmail(email)) {
      setError(constants?.validEmail);
      setShowError(true);
      return;
    }
    
    if (password.trim() === "") {
      setError(constants?.emptyPassword);
      setShowError(true);
      return;
    }
    try {
      const result = await api.post('/adminlogin', {email: email, password: password});
      if (result && result.success !== true) {
        setError(result.message);
        setShowError(true);
        return;
      }
      const expirationTime = new Date().getTime() + 60 * 60 * 1000;
      setLocalStorage('__auth',{
        isAuthenticated: result?.success,
        token:result?.data?.token,
        adminAuthTime: expirationTime.toString()
      })
      dispatch(saveAdminAuth(result));
      navigate('/dashboard');
    }
    catch (error) {
      console.error('Error fetching data:', error.message);
      //dispatch(saveAdminAuth(error.message));
    }
  };

  return (
    <div className='dc-admin-login p-7 d-flex justify-content-center align-items-center'>
      <div className='dc-admin-login__layout pt-20 pb-15 px-15 box-shadow'>
        <div className='dc-admin-login__admin-icon radius-50 box-shadow d-flex justify-content-center align-items-center'>
          <span className="dc-icon-password"></span>
        </div>
        <div className='dc-admin-login__layout--col'>
          <div className='dc-admin-login__title mb-8 d-flex align-items-center justify-content-center'>
              <h4 className='dc-h4'>Admin Login</h4>
          </div>
          {showError && <ErrorMessage type="error" message={error}/>}
          
          <form className='dc-admin-login__layout-body' onSubmit={handleSubmit}>
              <div className='dc-admin-login__layout-row mb-8'>
                <Input type={'text'} labelid={'admin-user-email'} label={'Email'} update={handleEmailChange}/>
              </div>
              <div className='dc-admin-login__layout-row mb-8'>
                <Input type={'password'} labelid={'admin-password-email'} label={'Password'} update={handlePasswordChange}/>
              </div>
              <div className='dc-admin-login__layout-row mb-8 d-flex justify-content-center'>
                  <Link to="/dashboard/admin-forgot-password" className='px-12 py-4 body-sm'>Forgot Password?</Link>
              </div>
              <div className='dc-admin-login__layout-row d-flex justify-content-center'>
                  <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-4'>Login</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
