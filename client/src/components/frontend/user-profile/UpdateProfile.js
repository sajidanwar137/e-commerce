import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import Input from 'components/common/input/Input'
import {validEmail, isValidPhoneNumber} from 'utility/utility';
import { updateUserProfile } from "store/user/actions";
import Swal from 'sweetalert2';
import './index.scss';

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const userData = useSelector((state) => state?.user?.data);
  const token = useSelector((state) => state?.userauth?.token);

  const nameHandler = (e) => {
    setUserName(e.target.value);
  }
  const emailHandler = (e) => {
    setUserEmail(e.target.value);
  }
  const phoneHandler = (e) => {
    setUserPhone(e.target.value);
  }
  const handleProfileSubmit = async event => {
    event.preventDefault();
    const obj = {
      user_id: userData?._id,
      name: userName,
      email: userEmail,
      phone: userPhone,
    }
    if((userEmail.trim() === "") && (userName.trim() === "") && (userPhone.trim() === "")){
      setError("You are not updating any field!");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    if (validEmail(userEmail) && userEmail.trim() !== "") {
      setError("Please enter a valid email address");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    if (userEmail.trim() === "") {
      obj.email = userData?.email
    }
    if (userName.trim() === "") {
      obj.name = userData?.name
    }
    if (isValidPhoneNumber(userPhone) && userPhone.trim() !== "") {
      setError("Please enter a valid phone number");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    if (userPhone.trim() === "") {
      obj.phone = userData?.phone
    }
    try {
      const result = await dispatch(updateUserProfile(obj, token));
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
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='dc-user-profile'>
      <div className='row mb-15'>
        <div className="col-12">
          <h4>Your Personal Details</h4>
        </div>
      </div>
      <form onSubmit={handleProfileSubmit}>
        {showError && <ErrorMessage type="error" message={error} />}
        <div className='row mb-7'>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <label className='d-flex mt-3' htmlFor="update-user-name">Name:</label>
          </div>
          <div className="col-8">
            <Input type={'text'} labelid={'update-user-name'} placeholder={userData?.name} update={nameHandler}/>
          </div>
        </div>
        <div className='row mb-7'>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <label className='d-flex mt-3' htmlFor="update-user-email">Email:</label>
          </div>
          <div className="col-8">
            <Input type={'text'} labelid={'update-user-email'} placeholder={userData?.email} update={emailHandler}/>
          </div>
        </div>
        <div className='row mb-7'>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <label className='d-flex mt-3' htmlFor="update-user-phone">Phone:</label>
          </div>
          <div className="col-8">
            <Input type={'text'} labelid={'update-user-phone'} placeholder={userData?.phone} update={phoneHandler}/>
          </div>
        </div>
        <div className='row d-flex justify-content-end'>
          <div className="col-2 d-flex justify-content-end">
            <button type="submit" className='dc-btn dc-btn-primary dc-btn-fluid px-20 py-5'>Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
