import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import AdminPageTitle from 'components/admin/page-title/AdminPageTitle';
import {validEmail} from 'utility/utility';
import Input from 'components/common/input/Input'
import IconButton from "components/common/icon-button/IconButton";
import { updateAdminProfile } from "store/admin/actions";
import { constants } from 'utility/constants';
import {getLocalStorageByKey} from 'utility/helper';
import ErrorDisplay from 'components/hooks/ErrorDisplay';
import Swal from 'sweetalert2';
import './index.scss';

const UpdateProfile = () => {
  const dispatch = useDispatch()
  const [showError, setShowError] = ErrorDisplay();
  const [error, setError] = useState("");
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  
  const data = useSelector((state) => state?.admin?.data[0]);
  const token = getLocalStorageByKey('__auth', ['token']);
  console.log("token::::",token)

  const handleName = (event) => {
    setAdminName(event.target.value);
  };

  const handleEmail = (event) => {
    setAdminEmail(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const obj = {
      admin_id: data?._id,
      name: adminName,
      email: adminEmail
    }
    if((adminName.trim() === "") && (adminEmail.trim() === "")){
      setError(constants?.emptyField);
      setShowError(true);
      return;
    }
    if (validEmail(adminEmail) && adminEmail.trim() !== "") {
      setError(constants?.validEmail);
      setShowError(true);
      return;
    }
    if (adminEmail.trim() === "") {
      obj.email = data?.email
    }
    if (adminName.trim() === "") {
      obj.name = data?.name
    }

    try {
      const result = await dispatch(updateAdminProfile(obj, token?.token));
      if (result && result.success !== true) {
        setError(result.message);
        setShowError(true);
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
          <div className='dc-admin-update-profile__title-icon border radius-50 d-flex justify-content-center align-items-center me-5'>
            <span className='dc-icon-address-book'></span>
          </div>
          <h5 className='fw-400'>Current Profile Status</h5>
        </div>
        <div className='px-10 py-15'>
          <div className='dc-admin-update-profile__status-col d-flex align-items-center justify-content-start'>
            <div>
              <strong>Name:</strong> {data?.name}
            </div>
            <div>
              <strong>Email:</strong> {data?.email}
            </div>
          </div>
        </div>
      </div>
      <div className='dc-admin-update-profile border box-shadow'>
        <div className='border-b px-10 py-7 d-flex justify-content-start align-items-center'>
          <div className='dc-admin-update-profile__title-icon border radius-50 d-flex justify-content-center align-items-center me-5'>
            <span className='dc-icon-address-book'></span>
          </div>
          <h5 className='fw-400'>Update Profile</h5>
        </div>
        <div className='px-10 py-15'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-lg-4'>
                {showError && <ErrorMessage type="error" message={error}/>}
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4'>
                <Input type={'text'} labelid={'name'} name={'name'} label={'Type Name...'} update={handleName}/>
              </div>
              <div className='col-lg-4'>
                <Input type={'text'} labelid={'email'} name={'email'} label={'Type Email...'} update={handleEmail}/>
              </div>
              <div className='col-lg-4 d-flex align-items-end'>
                <IconButton type="update" theme="secondary" tooltip="Update" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
