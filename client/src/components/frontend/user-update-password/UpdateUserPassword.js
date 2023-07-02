import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import Input from 'components/common/input/Input'
import {validateConfirmPassword, passwordComplexity} from 'utility/utility';
import { userLogout } from 'store/userauth/actions';
import { userRemove } from 'store/user/actions';
import Button from 'components/common/button/Button'
import api from 'api/api';
import Swal from 'sweetalert2';
import './index.scss';

const UpdateUserPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userData = useSelector((state) => state?.user?.data);
  const token = useSelector((state) => state?.userauth?.token);

  const currentPasswordHandler = (e) => {
    setCurrentPassword(e.target.value);
  }
  const newPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  }
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  }
  const handleUpdatedPasswordSubmit = async event => {
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
      user_id: userData?._id,
      password: newPassword
    };
    
    try {
      const result = await api.post('/guest/update-user-password', payload, {headers: {
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
        navigate('/');
        dispatch(userLogout({ userauth: result }));
        dispatch(userRemove({ user: null }));
      });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  return (
    <>
    <div className='dc-user-change-password border'>
        <div className='border-b px-10 py-7 d-flex justify-content-start align-items-center'>
          <span className='dc-icon-address-book me-5'></span>
          <h5 className='fw-400'>Change Password</h5>
        </div>
        <div className='px-10 py-15'>
          <form onSubmit={handleUpdatedPasswordSubmit}>
            <div className='row'>
              <div className='col-lg-12'>{showError && <ErrorMessage type="error" message={error} />}</div>
            </div>
            <div className='row mb-15'>
              <div className='col-lg-4'>
                <Input type={'password'} labelid={'current-password'} name={'current-password'} label={'Type current password...'} update={currentPasswordHandler}/>
              </div>
              <div className='col-lg-4'>
                <Input type={'password'} labelid={'new-password'} name={'new-password'} label={'Type new password...'} update={newPasswordHandler}/>
              </div>
              <div className='col-lg-4'>
                <Input type={'password'} labelid={'confirm-password'} name={'confirm-password'} label={'Type confirm password...'} update={confirmPasswordHandler}/>
              </div>
            </div>
            <div className='row d-flex align-items-end'>
              <div className='col-lg-12 d-flex justify-content-end'>
                <Button type='secondary' buttonLabel='Update'/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUserPassword;
