import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from "store/auth/actions";
import ErrorMessage from '../../common/error-message/ErrorMessage';
import api from 'api/api';
import Swal from 'sweetalert2';
import './index.scss';

const UpdateName = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const adminData = useSelector((state) => state.admin);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState('');

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
    <div className='row dc-admin-change-password d-flex align-items-center'>
      <div className='col-lg-12'>
        <h4 className='mb-25'>Change Admin Name</h4>
        <form onSubmit={handleSubmit}>
          {showError && <ErrorMessage type="error" message={error} />}
          <div className='mb-8'>
            <label className='dc-admin-change-password__label mb-2'>Type your update name:</label>
            <input
              className='dc-form-control py-5 px-6'
              type="text"
              value={name}
              onChange={handleName}
              placeholder= {adminData.data.name}
            />
          </div>
          <div className='d-flex'>
            <button type="submit" className='dc-btn dc-btn-secondary px-20 py-5'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateName;
