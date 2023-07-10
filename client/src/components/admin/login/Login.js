import React, {useState } from 'react';
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLogin } from "store/auth/actions";
import { useNavigate } from 'react-router-dom';
import Input from 'components/common/input/Input'
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import {validEmail} from 'utility/utility';
import {setLocalStorage} from 'utility/helper';
import { constants } from 'utility/constants';
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
      setError(constants?.validEmail);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    // Check if password is empty
    if (password.trim() === "") {
      setError(constants?.emptyPassword);
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
      setLocalStorage('__auth',{
        isAuthenticated: true,
        token:result?.data?.token
      })
      dispatch(adminLogin(result));
      navigate('/dashboard');
    }
    catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div className='dc-admin-login p-7 d-flex justify-content-center align-items-center'>
      <div className='dc-admin-login__layout pt-20 pb-15 px-15 box-shadow'>
        <div className='dc-admin-login__admin-icon radius-50 box-shadow d-flex justify-content-center align-items-center'>
          <span className="dc-icon-password"></span>
        </div>
        <div className='dc-admin-login__layout--col'>
          <div className='dc-admin-login__title mb-15 d-flex align-items-center justify-content-center'>
              <h4 className='dc-h4'>Admin Login</h4>
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
