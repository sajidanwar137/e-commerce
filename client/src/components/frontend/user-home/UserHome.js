import React, { useState } from 'react';
import './index.scss';

const UserHome = () => {
  

  return (
    <div className='dc-user-home'>
      <div className='row'>
        <div className="col-4">
          <div className="dc-user-home__card d-flex justify-content-start border p-7 box-shadow">
            <div className="dc-user-home__card--icon">
              <span class="dc-icon-returns"></span>
            </div>
            <div className="dc-user-home__card--content">
              <h5>Your Orders</h5>
              <span>Track, return, or buy things again</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="dc-user-home__card d-flex justify-content-start border p-7 box-shadow">
            <div className="dc-user-home__card--icon">
              <span class="dc-icon-password"></span>
            </div>
            <div className="dc-user-home__card--content">
              <h5>Login & security</h5>
              <span>Edit login, name, and mobile number</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="dc-user-home__card d-flex justify-content-start border p-7 box-shadow">
            <div className="dc-user-home__card--icon">
              <span class="dc-icon-location"></span>
            </div>
            <div className="dc-user-home__card--content">
              <h5>Your Addresses</h5>
              <span>Edit addresses for orders and gifts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
