import React from 'react'
import './index.scss';

const AdminPageTitle = ({icon, title, subheading}) => {
  return (
    <div className='admin-page-title d-flex justify-content-start align-items-center mb-30'>
      <div className='admin-page-title__icon border box-shadow d-flex align-items-center justify-content-center'>
        <span className={icon}></span>
      </div>
      <div className='admin-page-title__content'>
        <h4 className='fw-400'>{title}</h4>
        <p>{subheading}</p>
      </div>
    </div>
  )
}
export default AdminPageTitle
