import React from 'react';
import HeaderFE from '../../components/frontend/header/HeaderFE'
import NavbarFE from '../../components/frontend/navbar/NavbarFE'
import BreadcrumbFE from '../../components/frontend/breadcrumb/BreadcrumbFE'
import UserSidebarFE from '../../components/frontend/user-sidebar/UserSidebarFE'
import FooterFE from '../../components/frontend/footer/FooterFE'

const UserProfileFE = () => {
  return (
    <>
      <HeaderFE/>
      <NavbarFE/>
      <BreadcrumbFE/>
      <div className='dc-body-container py-25'>
        <div className='dc-container'>
          <div className='row g-25'>
            <div className='col-md-3'>
              <UserSidebarFE/>
            </div>
            <div className='col-md-9'>
              <div className="dc-dashboard__layout--card-body p-25"></div>
            </div>
          </div>
        </div>
      </div>
      <FooterFE/>
    </>
  )
}
export default UserProfileFE
