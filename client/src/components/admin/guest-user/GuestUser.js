import React, { useState, useEffect } from "react";
import { useSelector} from "react-redux";
import AdminPageTitle from "components/admin/page-title/AdminPageTitle";
import ToggleCheckbox from "components/common/toggle-checkbox/ToggleCheckbox";
import Button from "components/common/button/Button";
import {headerBearer} from 'utility/utility';
import Swal from 'sweetalert2';
import api from 'api/api';
import "./index.scss";

const GuestUser = () => {
  const [index, setIndex] = useState([]);
  const [data, setData] = useState([]);
  const [getUsers, setGetUsers] = useState([]);
  const [getUserId, setGetUserId] = useState();
  const [status, setStatus] = useState();
  const [statusPrev, setStatusPrev] = useState();
  const token = useSelector((state) => state?.auth?.token);

  const CheckboxHandler = (id, status, index) => {
    if(status?.target?.checked === true){
      setStatusPrev(false)
    }
    if(status?.target?.checked === false){
      setStatusPrev(true)
    }
    setStatus(status?.target?.checked)
    setGetUserId(id)
    setIndex(index)
    data[index].isActive = status?.target?.checked;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('guest/getallguestuser', `token=${token}`);
        if (response?.success === true) {
          setGetUsers(response?.data || []);
        }
        
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    setData(getUsers);
    //console.log("Error:", data);
  },[data,getUsers,status]);

  const updateUserStatus = async (item) => {
    const user = item;
    if(getUserId == user?._id){
      const payload = {
        user_id: user?._id,
        isActive: status
      }
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "Do you want to save the user changes?",
        showDenyButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Cancel`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await api.post('guest/user-enable-disable', payload, headerBearer(token));
          if(response?.success === true){
            Swal.fire({
              icon: 'success',
              title: 'Saved!',
              text: response?.message,
            })
          }
        } else if (result.isDenied) {
          Swal.fire('Cancelled',
          'Your imaginary user is safe :)',
          'error').then(async ()=>{
            setStatus(statusPrev)
            data[index].isActive = statusPrev;
          })
        }
      })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You did not update anthing for current user!',
      }).then(async ()=>{
        if(statusPrev){
          setStatus(statusPrev)
          data[index].isActive = statusPrev;
        }
      })
    }
  }
  const deleteUser = (item, index) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "Do you want to delete this user?",
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await api.delete(`guest/user-delete/${item?._id}`,{}, headerBearer(token));
        if(response?.success === true){
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: response?.message,
          }).then(async ()=>{
            const newData = [...getUsers];
            newData.splice(index, 1);
            setGetUsers(newData)
            setData(newData);
          })
        }
      } else if (result.isDenied) {
        Swal.fire('Cancelled',
        'Your imaginary user is safe :)',
        'error')
      }
    })
  }

  return (
    <>
      <AdminPageTitle
        icon="dc-icon-setting"
        title="Guest User List"
        subheading="This is an example dashboard created using build-in elements and components."
      />
      <div className="border box-shadow mb-15 guest-user">
        <div className="border-b px-10 py-7 d-flex justify-content-start align-items-center">
          <span className="dc-icon-address-book me-5"></span>
          <h5 className="fw-400">User list</h5>
        </div>
        <div className="px-10 py-15">
          <div className="guest-user__list d-flex align-items-center justify-content-start">
            <table className="guest-user__table border-s border-t">
              <thead>
                <tr>
                  <th scope="col" className="border-b border-e p-3 text-center">#</th>
                  <th scope="col" className="border-b border-e p-3 text-start">Name</th>
                  <th scope="col" className="border-b border-e p-3 text-start">Email</th>
                  <th scope="col" className="border-b border-e p-3 text-start">Phone</th>
                  <th scope="col" className="border-b border-e p-3 text-end">Status</th>
                  <th scope="col" className="border-b border-e p-3 text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.length > 0 && data.map((item, index) => (
                  <tr key={index}>
                    <th scope="row" className="border-b border-e p-3 text-center">{index+1}</th>
                    <td className="border-b border-e p-3 text-start">{item?.name}</td>
                    <td className="border-b border-e p-3 text-start">{item?.email}</td>
                    <td className="border-b border-e p-3 text-start">{item?.phone}</td>
                    <td className="border-b border-e p-3 text-end">
                      <ToggleCheckbox status={item?.isActive} ToggleHandler={(e) => CheckboxHandler(item?._id, e, index)}/>
                    </td>
                    <td className="border-b border-e p-3 text-end">
                      <div className="d-flex justify-content-end">
                        <div className="me-2">
                          <Button type="button" icon='save' theme="success" tooltip="Save" handler={() => updateUserStatus(item)}/>
                        </div>
                        <div className="ms-2">
                          <Button type="button" icon='delete' theme="danger" tooltip="Delete" handler={() => deleteUser(item,index)}/>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestUser;
