import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { adminLogout } from 'store/auth/actions';
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import AdminPageTitle from 'components/admin/page-title/AdminPageTitle';
import Input from 'components/common/input/Input'
import api from 'api/api';
import {validateConfirmPassword, passwordComplexity} from 'utility/utility';
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
    const payload = {
      admin_id: adminData.data._id,
      password: newPassword
    };
    const token = adminData.data.token;
    try {
      const result = await api.post('/update-admin-password', payload, {headers: {
        Authorization: `Bearer ${token}`,
      }});
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
        dispatch(adminLogout({ admin: null }));
      });
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <AdminPageTitle icon='dc-icon-reset-password' title='Password' subheading='This is an example dashboard created using build-in elements and components.'/>
      <div className='dc-admin-update-password border box-shadow'>
        <div className='border-b px-10 py-7 d-flex justify-content-start align-items-center'>
          <span className='dc-icon-reset-password me-5'></span>
          <h5 className='fw-400'>Change your password</h5>
        </div>
        <div className='px-10 py-15'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-lg-12'>
                {showError && <ErrorMessage type="error" message={error} />}
              </div>
            </div>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-3'>
                <Input type={'password'} labelid={'currentpassword'} name={'currentpassword'} label={'Type Current Password...'} update={handleCurrentPasswordChange}/>
              </div>
              <div className='col-lg-3'>
                <Input type={'password'} labelid={'newpassword'} name={'newpassword'} label={'Type New Password...'} update={handleNewPasswordChange}/>
              </div>
              <div className='col-lg-3'>
                <Input type={'password'} labelid={'confirmpassword'} name={'confirmpassword'} label={'Type Confirm Password...'} update={handleConfirmPasswordChange}/>
              </div>
              <div className='col-lg-3'>
                <button type="submit" className='dc-btn dc-btn-primary px-20 py-5'>Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordChange;
