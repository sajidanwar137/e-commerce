import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PasswordChangeImg from '../../../resources/images/password-change.jpeg';
import {adminChangePasswordAPI } from '../../../api/api';
import './index.scss';

const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const adminData = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

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
        admin_id: adminData.data._id,
        password: newPassword
      };
      const token = adminData.data.token;
      try {
        const result = await adminChangePasswordAPI(payload, token);
        if (result && result.success === true) {
          console.log("result::::::",result)
          //dispatch(logout({ admin: result }));
          //navigate('/dashboard/login');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setMessage('Password changed successfully');
    }
  };

  return (
    <div className='row dc-admin-change-password d-flex align-items-center'>
      <div className='col-lg-6'>
        <h4 className='mb-25'>Reset your password</h4>
        <form onSubmit={handleSubmit}>
          <div className='mb-8'>
            <label className='dc-admin-change-password__label mb-2'>Current Password:</label>
            <input
              className='dc-form-control py-5 px-6'
              type="password"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
              required
            />
          </div>
          <div className='mb-8'>
            <label className='dc-admin-change-password__label mb-2'>New Password:</label>
            <input
              className='dc-form-control py-5 px-6'
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
            />
          </div>
          <div className='mb-8'>
            <label className='dc-admin-change-password__label mb-2'>Confirm Password:</label>
            <input
              className='dc-form-control py-5 px-6'
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <div className='d-flex justify-content-center'>
            <button type="submit" className='dc-btn dc-btn-secondary px-20 py-5'>Change Password</button>
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
      <div className='col-lg-6'>
        <div className='dc-admin-change-password__img'>
          <img src={PasswordChangeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
