import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import AdminPageTitle from 'components/admin/page-title/AdminPageTitle';
import {validEmail} from 'utility/utility';
import Input from 'components/common/input/Input'
import { updateAdminProfile } from "store/admin/actions";
import Swal from 'sweetalert2';
import './index.scss';

const UpdateProfile = () => {
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const dispatch = useDispatch()
  const adminData = useSelector((state) => state.admin);
  const token = useSelector((state) => state?.auth?.token);
  const handleName = (event) => {
    setAdminName(event.target.value);
  };

  const handleEmail = (event) => {
    setAdminEmail(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      admin_id: adminData?.data._id,
      name: adminName,
      email: adminEmail
    }
    if((adminName.trim() === "") && (adminEmail.trim() === "")){
      setError("You are not updating any field!");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    if (validEmail(adminEmail) && adminEmail.trim() !== "") {
      setError("Please enter a valid email address");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    if (adminEmail.trim() === "") {
      obj.email = adminData?.data?.email
    }
    if (adminName.trim() === "") {
      obj.name = adminData?.data?.name
    }

    try {
      const result = await dispatch(updateAdminProfile(obj, token));
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
      setAdminName('')
      setAdminEmail('')
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <>
      <AdminPageTitle icon='dc-icon-role-setting' title='Profile Setting' subheading='This is an example dashboard created using build-in elements and components.'/>
      <div className='dc-admin-update-profile border box-shadow mb-15'>
        <div className='border-b px-10 py-7 d-flex justify-content-start align-items-center'>
          <span className='dc-icon-address-book me-5'></span>
          <h5 className='fw-400'>Current Profile Status</h5>
        </div>
        <div className='px-10 py-15'>
          <div className='dc-admin-update-profile__status-col d-flex align-items-center justify-content-start'>
            <div>
              <strong>Name:</strong> {adminData.data.name}
            </div>
            <div>
              <strong>Email:</strong> {adminData.data.email}
            </div>
          </div>
        </div>
      </div>
      <div className='dc-admin-update-profile border box-shadow'>
        <div className='border-b px-10 py-7 d-flex justify-content-start align-items-center'>
          <span className='dc-icon-address-book me-5'></span>
          <h5 className='fw-400'>Update Profile</h5>
        </div>
        <div className='px-10 py-15'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-lg-12'>{showError && <ErrorMessage type="error" message={error} />}</div>
            </div>
            <div className='row'>
              <div className='col-lg-4'>
                <Input type={'text'} labelid={'name'} name={'name'} label={'Type Name...'} update={handleName}/>
              </div>
              <div className='col-lg-4'>
                <Input type={'text'} labelid={'email'} name={'email'} label={'Type Email...'} update={handleEmail}/>
              </div>
              <div className='col-lg-4'>
                <button type="submit" className='dc-btn dc-btn-primary px-20 py-5'>Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
