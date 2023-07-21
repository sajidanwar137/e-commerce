import React, {useState } from 'react';
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveAdminAuth } from "redux/slices/admin/adminSlice";
import { useNavigate } from 'react-router-dom';
import Input from 'components/common/input/Input'
import Message from 'components/common/message/Message';
import {validEmail} from 'utility/utility';
import {setLocalStorage} from 'utility/helper';
import { constants } from 'utility/constants';
import ErrorDisplay from 'components/hooks/ErrorDisplay';
import Button from "components/common/button/Button";
import api from 'api/api';
import './index.scss';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = ErrorDisplay();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
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
          {showError && <Message type="error" message={error}/>}
          <form className='dc-admin-login__layout-body' onSubmit={handleSubmit}>
              <div className='dc-admin-login__layout-row mb-8'>
                <Input type='text' name='email' labelid='admin-email' label='Email' handler={emailHandler}/>
              </div>
              <div className='dc-admin-login__layout-row mb-8'>
                <Input type={'password'} name='password' labelid={'admin-password'} label={'Password'} handler={passwordHandler}/>
              </div>
              <div className='dc-admin-login__layout-row mb-8 d-flex justify-content-center'>
                  <Link to="/dashboard/admin-forgot-password" className='px-12 py-4'>Forgot Password?</Link>
              </div>
              <div className='dc-admin-login__layout-row d-flex justify-content-center'>
                <Button type="submit" theme='secondary' label='Login' display='block'/>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
