import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avtar from 'resources/images/avtar.jpeg';
import './index.scss';

const UserSidebarFE = () => {
  const userData = useSelector((state) => state?.user?.data);
  return (
    <div className='dc-user-sidebar'>
      <div className='dc-user-sidebar__avtar-col mb-15 d-flex justify-content-center py-30'>
        <div className='dc-user-sidebar__avtar'>
          <img src={Avtar} alt="" />
        </div>
      </div>
      <div className='dc-user-sidebar__user-name mb-15 px-7'>
        <h3>Hi! {userData?.name.split(' ')[0]}</h3>
      </div>
      <ul className='dc-user-sidebar__link-list'>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-admin'></span><span>My Account</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-account-edit'></span><span>Edit Account</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-reset-password'></span><span>Password</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-camera'></span><span>Edit Avtar</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-address-book'></span><span>Address Book</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-heart'></span><span>Wish List</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-orders'></span><span>Order History</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-download'></span><span>Downloads</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-email'></span><span>Subscriptions</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-rewards'></span><span>Reward Points</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-returns'></span><span>Returns</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-transactions'></span><span>Transactions</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-newsletter'></span><span>Newsletter</span></Link></li>
        <li><Link className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-logout'></span><span>Logout</span></Link></li>
      </ul>
    </div>
  )
}

export default UserSidebarFE
