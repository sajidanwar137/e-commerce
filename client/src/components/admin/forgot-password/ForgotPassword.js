import React, {useState } from 'react';
import { Link} from "react-router-dom";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import Input from 'components/common/input/Input'
import ForgotPasswordImg from 'resources/images/forgot-password.png';
import {validEmail} from 'utility/utility';
import api from 'api/api';
import './index.scss';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
    const payload = {
      email: email
    };
    try {
      const result = await api.post('/admin-password-forget', payload);
      if (result && result.success !== true) {
        setError(result.message);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 5000);
        return;
      }
      Swal.fire({
        icon: 'success',
        title: 'Email sent successfully',
        text: result.message,
      }).then(() => {
        navigate('/dashboard/login');
      });
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    setEmail('')
  };

  return (
    <div className='dc-admin-forgot-password p-7 d-flex justify-content-center align-items-center'>
      <div className='dc-admin-forgot-password__layout p-25 d-flex align-items-center'>
        <div className='dc-admin-forgot-password__layout--col pe-12'>
          <div className='dc-admin-forgot-password__title mb-15 d-flex align-items-center justify-content-start'>
              <div className='dc-admin-forgot-password__admin-icon--icon d-flex justify-content-center align-items-center'>
                <span className="dc-icon-administrator"></span>
              </div>
              <h4 className='dc-h4'>Forgot Password?</h4>
          </div>
          <div className='mb-10'>
            <p>To reset your password, enter the registered e-mail adddress and we will send you password reset instructions on your e-mail!</p>
          </div>
          <form className='dc-admin-forgot-password__layout-body' onSubmit={handleSubmit}>
              {showError && <ErrorMessage type="error" message={error} />}
              <div className='dc-admin-forgot-password__layout-row mb-8'>
                <Input type={'text'} labelid={'admin-forgot-password'} label={'Enter your registered email'} update={handleEmailChange}/>
              </div>
              <div className='dc-admin-forgot-password__layout-row mb-8 d-flex justify-content-center'>
                  <Link to="/dashboard/login" className='px-12 py-4'>Wait, I remember my password</Link>
              </div>
              <div className='dc-admin-forgot-password__layout-row'>
                  <button type="submit" className='dc-btn dc-btn-primary dc-btn-fluid px-20 py-4'>Reset</button>
              </div>
          </form>
        </div>
        <div className='dc-admin-forgot-password__layout--col ps-12'>
          <img src={ForgotPasswordImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
