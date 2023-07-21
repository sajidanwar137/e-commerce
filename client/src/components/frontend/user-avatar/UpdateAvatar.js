import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Message from 'components/common/message/Message';
import { uplodUserAvtar } from "store/user/actions";
import Swal from 'sweetalert2';
import Avtar from 'resources/images/avtar.jpeg';
import Button from 'components/common/button/Button'
import './index.scss';

const UpdateAvatar = () => {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const userData = useSelector((state) => state?.user?.data);
  const token = useSelector((state) => state?.userauth?.token);

  const [uploadFile, setUploadFile] = useState(
    userData ? (userData?.avtarOriginalurl ? userData?.avtarOriginalurl : Avtar) : Avtar
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadFile(URL.createObjectURL(event.target.files[0]));
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/gif', 'image/png', 'image/svg+xml'];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  }

  const handleAvtarSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('useravtar', selectedFile);
    formData.append('user_id', userData?._id);
    if (!selectedFile) {
      setError("Invalid file format. Please select a JPEG, JPG, GIF, PNG, or SVG file!");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    try {
      const result = await dispatch(uplodUserAvtar(formData, token));
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
    <div className='dc-useravtar border box-shadow'>
      <div className='border-b px-10 py-7 d-flex justify-content-start align-items-center'>
        <span className='dc-icon-setting me-5'></span>
        <h5 className='fw-400'>Change Avtar</h5>
      </div>
      <div className='px-10 py-15'>
        <form onSubmit={handleAvtarSubmit} encType="multipart/form-data">
          <div className='row'>
            <div className='col-lg-12'>
              {showError && <Message type="error" message={error} />}
            </div>
          </div>
          <div className='row mb-10'>
            <div className='col-lg-2'>
              <div className='dc-useravtar__preview-col'>
                <img src={uploadFile} alt="" onError={e => e.target.src = Avtar }/>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-start align-items-center'>
            <div className='col-lg-10'>
              <input className='dc-form-control pe-6' onChange={handleFileChange} type="file" name="useravtar" accept=".jpeg,.jpg,.gif,.png,.svg"/>
            </div>
            <div className='col-lg-2'>
              <Button type='secondary' buttonLabel='Upload'/>
            </div>
          </div>
        </form>
      </div>
    </div>
    {/* <div className='dc-useravtar'>
      <div className='row mb-15'>
        <div className="col-12">
          <h4>Change your picture below</h4>
        </div>
      </div>
      <form onSubmit={handleAvtarSubmit} encType="multipart/form-data">
        {showError && <ErrorMessage type="error" message={error} />}
        <div className='dc-useravtar__row d-flex justify-content-start align-items-center'>
          <div className='dc-useravtar__file-col flex-grow-1'>
            <label className='dc-useravtar__file-label mb-2'>Select Avtar</label>
            <div className='dc-useravtar__input-row d-flex justify-content-start align-items-center'>
              <div className='flex-grow-1'>
                <input className='dc-form-control pe-6' onChange={handleFileChange} type="file" name="useravtar" accept=".jpeg,.jpg,.gif,.png,.svg"/>
              </div>
              <div><button type="submit" className='dc-btn dc-btn-primary px-20 py-5'>Upload</button></div>
            </div>
          </div>
          <div className='dc-useravtar__preview-col'>
            <img src={uploadFile} alt="" onError={e => e.target.src = Avtar }/>
          </div>
        </div>
      </form>
    </div> */}
    </>
  );
};

export default UpdateAvatar;
