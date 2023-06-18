import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import InputDC from '../../common/input/InputDC'
import { uplodUserAvtar } from "store/user/actions";
import Swal from 'sweetalert2';
import './index.scss';

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const userData = useSelector((state) => state?.user?.data);
  const token = useSelector((state) => state?.userauth?.token);

  const nameHandler = () => {}
  const emailHandler = () => {}
  const handleProfileSubmit = async event => {
    event.preventDefault();
  }

  return (
    <div className='dc-user-profile'>
      <div className='row mb-15'>
        <div className="col-12">
          <h4>Your Personal Details</h4>
        </div>
      </div>
      <form onSubmit={handleProfileSubmit} encType="multipart/form-data">
        {showError && <ErrorMessage type="error" message={error} />}
        <div className='row'>
          <div className="col-5">
            <InputDC type={'text'} labelid={'update-user-name'} placeholder={userData?.name} update={nameHandler}/>
          </div>
          <div className="col-5">
            <InputDC type={'text'} labelid={'update-user-email'} placeholder={userData?.email} update={emailHandler}/>
          </div>
          <div className="col-2">
            <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Update</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
