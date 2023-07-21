import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Message from 'components/common/message/Message';
import Input from 'components/common/input/Input'
import {validEmail, isValidPhoneNumber} from 'utility/utility';
import { updateUserProfile } from "store/user/actions";
import Button from 'components/common/button/Button'
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
    <>
      <div className='dc-user-profile border mb-15'>
        <div className='border-b px-10 py-7 d-flex justify-content-start align-items-center'>
          <span className='dc-icon-address-book me-5'></span>
          <h5 className='fw-400'>Current Profile Status</h5>
        </div>
        <div className='px-10 py-15'>
          <div className='dc-user-profile__status-col d-flex align-items-center justify-content-start'>
            <div className='me-10'>
              <strong>Name:</strong> {userData?.name}
            </div>
            <div className='me-10'>
              <strong>Email:</strong> {userData?.email}
            </div>
            <div>
              <strong>Phone:</strong> {userData?.phone}
            </div>
          </div>
        </div>
      </div>
      <div className='dc-user-profile border'>
        <div className='border-b px-10 py-7 d-flex justify-content-start align-items-center'>
          <span className='dc-icon-address-book me-5'></span>
          <h5 className='fw-400'>Update Profile</h5>
        </div>
        <div className='px-10 py-15'>
          <form onSubmit={handleProfileSubmit}>
            <div className='row'>
              <div className='col-lg-12'>{showError && <Message type="error" message={error} />}</div>
            </div>
            <div className='row mb-15'>
              <div className='col-lg-4'>
                <Input type={'text'} labelid={'update-user-name'} name={'name'} label={'Type name...'} update={nameHandler}/>
              </div>
              <div className='col-lg-4'>
                <Input type={'text'} labelid={'update-user-email'} name={'email'} label={'Type email...'} update={emailHandler}/>
              </div>
              <div className='col-lg-4'>
                <Input type={'text'} labelid={'update-user-phone'} name={'phone'} label={'Type phone...'} update={phoneHandler}/>
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

export default UpdateProfile;
