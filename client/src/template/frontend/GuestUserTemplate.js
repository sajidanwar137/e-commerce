import React from 'react';
import HeaderFE from 'components/frontend/header/HeaderFE'
import NavbarFE from 'components/frontend/navbar/NavbarFE'
import FooterFE from 'components/frontend/footer/FooterFE'
import UserSidebarFE from 'components/frontend/user-sidebar/UserSidebarFE'
const GuestUserTemplate = ({children}) => {
  return (
    <>
      <HeaderFE/>
      <NavbarFE/>
      <div className='dc-body-container pb-25 pt-30'>
        <div className='dc-container'>
          <div className='row'>
            <div className='col-md-3'>
              <UserSidebarFE/>
            </div>
            <div className='col-md-9'>
              <div className='ps-10'>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <FooterFE/>
    </>
  )
}
export default GuestUserTemplate
