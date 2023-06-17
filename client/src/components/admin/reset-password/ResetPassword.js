import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import PasswordChangeImg from '../../../resources/images/password-change.jpeg';
import ErrorMessage from '../../common/error-message/ErrorMessage';
import {validateConfirmPassword, passwordComplexity} from 'utility/utility';
import api from 'api/api';
import './index.scss';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [variableValue, setVariableValue] = useState(null);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const variable = queryParams.get('token');
    setVariableValue(variable);
  }, []);

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if password is empty
    if (newPassword.trim() === "") {
      setError("Please enter your password");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    // Password length validation
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    // Password complexity validation
    if (passwordComplexity(newPassword)) {
      setError("Password must contain at least one capital letter, one special character, and one number");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    // Confirm password validation
    if (validateConfirmPassword(newPassword,confirmPassword)) {
      setError("New password and confirm password do not match");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    // const payload = {
    //   token: variableValue,
    //   password: newPassword
    // };
    const query = `token=${variableValue}&password=${newPassword}`
    try {
      //const result = await adminResetPassword(payload);
      const result = await api.get('/admin-password-reset', query);
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
        text: result.message,
      }).then(() => {
        navigate('/dashboard/login');
      });
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='dc-admin-layout p-7 d-flex justify-content-center align-items-center'>
      <div className='dc-admin-layout__layout p-25 d-flex align-items-center'>
        <div className='dc-admin-layout__layout--col pe-12'>
          <div className='dc-admin-layout__title mb-15 d-flex align-items-center justify-content-start'>
              <div className='dc-admin-layout__admin-icon--icon d-flex justify-content-center align-items-center'>
                <span className="dc-icon-reset-password"></span>
              </div>
              <h4 className='dc-h4'>Reset password</h4>
          </div>
          <form className='dc-admin-layout__layout-body' onSubmit={handleSubmit}>
            {showError && <ErrorMessage type="error" message={error} />}
            <div className='dc-admin-layout__layout-row mb-8'>
              <label className='dc-admin-change-password__label mb-2'>New Password:</label>
              <input
                className='dc-form-control py-5 px-6'
                type="password"
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
            </div>
            <div className='dc-admin-layout__layout-row mb-8'>
              <label className='dc-admin-change-password__label mb-2'>Confirm Password:</label>
              <input
                className='dc-form-control py-5 px-6'
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            <div className='dc-admin-layout__layout-row'>
              <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Reset password</button>
            </div>
          </form>
        </div>
        <div className='dc-admin-layout__layout--col ps-12'>
          <img src={PasswordChangeImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
