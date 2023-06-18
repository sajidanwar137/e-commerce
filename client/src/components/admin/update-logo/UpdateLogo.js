import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateAdminLogo } from "store/adminLogo/actions";
import ErrorMessage from '../../common/error-message/ErrorMessage';
import Swal from 'sweetalert2';
import './index.scss';

const UpdateLogo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.adminlogo?.data[0]);
  const token = useSelector((state) => state?.auth?.token);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadFile, setUploadFile] = useState(data.originalurl);

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadFile(URL.createObjectURL(event.target.files[0]));
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/gif', 'image/png', 'image/svg+xml'];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('adminlogo', selectedFile);
    formData.append('image_id', data._id);
    if (!selectedFile) {
      setError("Invalid file format. Please select a JPEG, JPG, GIF, PNG, or SVG file!");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    try {
      const result = await dispatch(updateAdminLogo(formData, token));
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
    <div className='row dc-admin-change-password d-flex align-items-center'>
      <div className='col-lg-9'>
        <h4 className='mb-25'>Change Admin Logo</h4>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {showError && <ErrorMessage type="error" message={error} />}
          <div className='mb-8'>
            <label className='dc-admin-change-password__label mb-2'>File:</label>
            <input className='dc-form-control pe-6' type="file" onChange={handleFileChange} name="adminlogo" accept=".jpeg,.jpg,.gif,.png,.svg"/>
          </div>
          <div className='d-flex'>
            <button type="submit" className='dc-btn dc-btn-secondary px-20 py-5'>Upload</button>
          </div>
        </form>
      </div>
      <div className='col-lg-3'>
        <div className='dc-admin-change-password__img'>
          <img src={uploadFile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UpdateLogo;
