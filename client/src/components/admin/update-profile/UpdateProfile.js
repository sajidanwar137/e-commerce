import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from "store/auth/actions";
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import AdminPageTitle from 'components/admin/page-title/AdminPageTitle';
import Input from 'components/common/input/Input'
import api from 'api/api';
import Swal from 'sweetalert2';
import './index.scss';

const UpdateProfile = () => {
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const adminData = useSelector((state) => state.admin);
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      setError("Please enter your updated name");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    const payload = {
      admin_id: adminData.data._id,
      name: name
    };
    const token = adminData.data.token;
    try {
      const result = await api.post('/update-admin-name', payload, {headers: {
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
        dispatch(login({ admin: result }));
        navigate('/dashboard/admin/update-admin-name');
      });
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <>
      <AdminPageTitle icon='dc-icon-role-setting' title='Profile Setting' subheading='This is an example dashboard created using build-in elements and components.'/>
      <div className='dc-admin-pwd-change border box-shadow'>
        <div className='border-b p-15'>
          <h5 className='mb-8 fw-400'>Current Profile Status</h5>
          <div className='dc-admin-pwd-change__status-col d-flex align-items-center justify-content-start'>
            <div>
              <strong>Name:</strong> {adminData.data.name}
            </div>
            <div>
              <strong>Email:</strong> {adminData.data.email}
            </div>
          </div>
        </div>
        <div className='p-15'>
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-lg-12'>
                <h5 className='mb-8 fw-400'>Update Profile</h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>{showError && <ErrorMessage type="error" message={error} />}</div>
            </div>
            <div className='row'>
              <div className='col-lg-4'>
                <Input type={'text'} labelid={'name'} name={'name'} label={'Type Name...'} update={handleName}/>
              </div>
              <div className='col-lg-4'>
                <Input type={'text'} labelid={'email'} name={'email'} label={'Type Email...'} update={handleName}/>
              </div>
              <div className='col-lg-4'>
                <button type="submit" className='dc-btn dc-btn-success px-20 py-5'>Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
