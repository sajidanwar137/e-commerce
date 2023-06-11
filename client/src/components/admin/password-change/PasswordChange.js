import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { logout } from '../../../store/auth/actions';
import {adminChangePasswordAPI } from '../../../api/api';
import ErrorMessage from '../../common/error-message/ErrorMessage';
import './index.scss';

const PasswordChange = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const adminData = useSelector((state) => state.admin);
  const navigate = useNavigate();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if current password is empty
    if (currentPassword.trim() === "") {
      setError("Please enter your current password");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    if (newPassword.trim() === "") {
      setError("Please enter your new password");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }

    // Password complexity validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/;
    if (!passwordRegex.test(newPassword)) {
      setError("Password must contain at least one capital letter, one special character, and one number");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    // Confirm password validation
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    const payload = {
      admin_id: adminData.data._id,
      password: newPassword
    };
    const token = adminData.data.token;
    try {
      const result = await adminChangePasswordAPI(payload, token);
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
        dispatch(logout({ admin: null }));
      });
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='row dc-admin-change-password d-flex align-items-center'>
      <div className='col-lg-12'>
        <h4 className='mb-25'>Reset your password</h4>
        <form onSubmit={handleSubmit}>
          {showError && <ErrorMessage type="error" message={error} />}
          <div className='mb-8'>
            <label className='dc-admin-change-password__label mb-2'>Current Password:</label>
            <input
              className='dc-form-control py-5 px-6'
              type="password"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
            />
          </div>
          <div className='mb-8'>
            <label className='dc-admin-change-password__label mb-2'>New Password:</label>
            <input
              className='dc-form-control py-5 px-6'
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </div>
          <div className='mb-8'>
            <label className='dc-admin-change-password__label mb-2'>Confirm Password:</label>
            <input
              className='dc-form-control py-5 px-6'
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <button type="submit" className='dc-btn dc-btn-secondary px-20 py-5'>Change Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
