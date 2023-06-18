import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import InputDC from '../../common/input/InputDC'
import {validateConfirmPassword, passwordComplexity} from 'utility/utility';
import { userLogout } from 'store/userauth/actions';
import { userRemove } from 'store/user/actions';
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
    <div className='dc-user-change-password'>
      <div className='row mb-15'>
        <div className="col-12">
          <h4>Change Password</h4>
        </div>
      </div>
      <form onSubmit={handleUpdatedPasswordSubmit}>
        {showError && <ErrorMessage type="error" message={error} />}
        <div className='row mb-10'>
          <div className="col-12">
            <InputDC type={'password'} labelid={'current-password'} update={currentPasswordHandler} label={'Current Password'}/>
          </div>
        </div>
        <div className='row mb-10'>
          <div className="col-12">
            <InputDC type={'password'} labelid={'new-password'} update={newPasswordHandler} label={'New Password'}/>
          </div>
        </div>
        <div className='row mb-15'>
          <div className="col-12">
            <InputDC type={'password'} labelid={'confirm-password'} update={confirmPasswordHandler} label={'Confirm Password'}/>
          </div>
        </div>
        <div className='row d-flex justify-content-start'>
          <div className="col-2 d-flex justify-content-start">
            <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserPassword;
