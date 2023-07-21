import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateLogo } from "store/logo/actions";
import AdminPageTitle from 'components/admin/page-title/AdminPageTitle';
import Message from 'components/common/message/Message';
import Logo from "resources/images/logo.png";
import { constants } from 'utility/constants';
import Button from "components/common/button/Button";
import {getLocalStorageByKey} from 'utility/helper';
import Swal from 'sweetalert2';
import './index.scss';

const UpdateLogo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.logo?.data[0]);
  const token = getLocalStorageByKey('__auth', ['token'])
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadFile, setUploadFile] = useState(
    data ? (data?.originalurl ? data?.originalurl : Logo) : Logo
  );

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadFile(URL.createObjectURL(event.target.files[0]));
    const allowedTypes = constants?.fileAllowTypes;
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('logo', selectedFile);
    formData.append('image_id', data._id);
    if (!selectedFile) {
      setError(constants?.invalidImage);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    try {
      const result = await dispatch(updateLogo(formData, token?.token));
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
  };

  return (
    <>
    <AdminPageTitle icon='dc-icon-setting' title='Logo' subheading='This is an example dashboard created using build-in elements and components.'/>
    <div className='dc-update-logo border box-shadow'>
      <div className='border-b px-10 py-7 d-flex justify-content-start align-items-center'>
        <div className='dc-update-logo__title-icon border radius-50 d-flex justify-content-center align-items-center me-5'>
          <span className='dc-icon-setting'></span>
        </div>
        <h5 className='fw-400'>Change Logo</h5>
      </div>
      <div className='px-10 py-15'>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className='row'>
            <div className='col-lg-4'>
              {showError && <Message type="error" message={error} />}
            </div>
          </div>
          <div className='row d-flex justify-content-start align-items-center'>
            <div className='col-lg-4'>
              <input className='dc-form-control pe-6' type="file" onChange={handleFileChange} name="logo" accept=".jpeg,.jpg,.gif,.png,.svg"/>
            </div>
            <div className='col-lg-2'>
              <Button type="button" icon='upload' theme="secondary" tooltip="Upload"/>
            </div>
            <div className='col-lg-2'>
              <div className='dc-update-logo__img'>
                <img src={uploadFile} alt="" onError={e => e.target.src = Logo }/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default UpdateLogo;
