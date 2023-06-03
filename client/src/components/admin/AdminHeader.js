import React  from 'react'
import { useSelector } from 'react-redux';
import Logout from './Logout'

function AdminHeader() {
  const adminData = useSelector((state) => state.admin);
  return (
    <div className='dc-dashboard__header d-flex align-items-stretch mb-10 py-12 justify-content-between'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between px-15'>
          <h5>Hi! {adminData.data.name}</h5>
          <Logout/>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
