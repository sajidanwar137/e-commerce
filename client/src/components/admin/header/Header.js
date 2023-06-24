import React  from 'react'
import { useSelector } from 'react-redux';
import Logout from '../logout/Logout'
import './index.scss';
function Header() {
  const adminData = useSelector((state) => state.admin);
  return (
    <div className='admin__header d-flex py-12 px-15 align-items-center justify-content-between'>
      <h5>Hi! {adminData.data.name}</h5>
      <Logout/>
    </div>
  )
}

export default Header
