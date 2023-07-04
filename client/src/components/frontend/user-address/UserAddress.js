import React, { useState } from 'react';
import UserAddressForm from 'components/frontend/user-address-form/UserAddressForm';
import './index.scss';

const UserAddress = () => {
  return (
    <>
    <UserAddressForm/>
      <div className='dc-user-address border mb-15'>
        <div className='px-10 py-7 d-flex justify-content-start align-items-center'>
          <span className='dc-icon-address-book me-5'></span>
          <h5 className='fw-400'>Your Addresses</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 mb-10'>
          <div className='dc-user-address__add-card border px-10 py-15 d-flex flex-column justify-content-center align-items-center'>
            <span className='dc-icon-plus mb-10'></span>
            <h4>Add address</h4>
          </div>
        </div>
        <div className='col-lg-4 mb-10'>
          <div className='dc-user-address__address border pb-25'>
            <div className='dc-user-address__default-header border-b px-10 py-5'>
              <div>Default: </div>
            </div>
            <div className='dc-user-address__content px-10 py-10'>
              <ul>
                <li>Mohammad Sajid Anwar</li>
                <li>457, Chaknoor Road, Millat Colony</li>
                <li>Dharampur</li>
                <li>SAMASTIPUR, BIHAR 848101</li>
                <li>India</li>
                <li>Phone number: 9911201744</li>
              </ul>
              <div>Add delivery instructions</div>
            </div>
            <div className='dc-user-address__footer d-flex justify-content-start px-10 py-5'>
              <div>Edit</div>
              <div>Remove</div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 mb-10'>
          <div className='dc-user-address__address border pb-25'>
            <div className='dc-user-address__content px-10 py-10'>
              <ul>
                <li>Mohammad Sajid Anwar</li>
                <li>457, Chaknoor Road, Millat Colony</li>
                <li>Dharampur</li>
                <li>SAMASTIPUR, BIHAR 848101</li>
                <li>India</li>
                <li>Phone number: 9911201744</li>
              </ul>
              <div>Add delivery instructions</div>
            </div>
            <div className='dc-user-address__footer d-flex justify-content-start px-10 py-5'>
              <div>Edit</div>
              <div>Remove</div>
              <div>Set as Default</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAddress;
