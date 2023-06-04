import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordChangeImg from '../../../resources/images/password-change.jpeg';
import {adminResetPassword } from '../../../api/api';
import './index.scss';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);
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

  const validatePassword = () => {
    const errors = [];

    // Password length validation
    if (newPassword.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }

    // Password complexity validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/;
    if (!passwordRegex.test(newPassword)) {
      errors.push(
        'Password must contain at least one capital letter, one special character, and one number'
      );
    }
    // Confirm password validation
    if (newPassword !== confirmPassword) {
      errors.push('New password and confirm password do not match');
    }
    setErrors(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validatePassword();

    if (isValid) {
      const payload = {
        token: variableValue,
        password: newPassword
      };
      try {
        const result = await adminResetPassword(payload);
        if (result && result.success === true) {
          navigate('/dashboard/login');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
      setNewPassword('');
      setConfirmPassword('');
      setMessage('Password changed successfully');
    }
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
              <div className='dc-admin-layout__layout-row mb-8'>
              <label className='dc-admin-change-password__label mb-2'>New Password:</label>
              <input
                className='dc-form-control py-5 px-6'
                type="password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
              </div>
              <div className='dc-admin-layout__layout-row mb-8'>
              <label className='dc-admin-change-password__label mb-2'>Confirm Password:</label>
              <input
                className='dc-form-control py-5 px-6'
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              </div>
              <div className='dc-admin-layout__layout-row'>
                  <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Reset password</button>
              </div>
          </form>
          {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      {message && <p>{message}</p>}
        </div>
        <div className='dc-admin-layout__layout--col ps-12'>
          <img src={PasswordChangeImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
