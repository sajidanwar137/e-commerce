import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { slugCreater } from 'utility/utility';
import Avtar from 'resources/images/avtar.jpeg';
import './index.scss';

const UserSidebarFE = () => {
  const userData = useSelector((state) => state?.user?.data);
  return (
    <div className='dc-user-sidebar'>
      <div className='dc-user-sidebar__avtar-col mb-15 d-flex justify-content-center py-30'>
        <div className='dc-user-sidebar__avtar'>
          {userData?.avtarOriginalurl ? (
            <img src={userData?.avtarOriginalurl} alt="Avtar" />
          ) : <img src={Avtar} alt="Avtar" />}
        </div>
      </div>
      <div className='dc-user-sidebar__user-name mb-15 px-7'>
        <h3>Hi! {userData?.name.split(' ')[0]}</h3>
      </div>
      <ul className='dc-user-sidebar__link-list'>
        <li><NavLink to={`/account/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-admin'></span><span>My Account</span></NavLink></li>
        <li><NavLink to={`/account/update/account/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-account-edit'></span><span>Edit Account</span></NavLink></li>
        <li><NavLink to={`/account/update/password/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-reset-password'></span><span>Password</span></NavLink></li>
        <li><NavLink to={`/account/update/avtar/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-camera'></span><span>Edit Avtar</span></NavLink></li>
        <li><NavLink to={`/account/update/address/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-address-book'></span><span>Address Book</span></NavLink></li>
        <li><NavLink to={`/account/wishlist/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-heart'></span><span>Wish List</span></NavLink></li>
        <li><NavLink to={`/account/order/history/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-orders'></span><span>Order History</span></NavLink></li>
        <li><NavLink to={`/account/download/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-download'></span><span>Downloads</span></NavLink></li>
        <li><NavLink to={`/account/subscriptions/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-email'></span><span>Subscriptions</span></NavLink></li>
        <li><NavLink to={`/account/reward-points/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-rewards'></span><span>Reward Points</span></NavLink></li>
        <li><NavLink to={`/account/order/returns/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-returns'></span><span>Returns</span></NavLink></li>
        <li><NavLink to={`/account/transactions/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-transactions'></span><span>Transactions</span></NavLink></li>
        <li><NavLink to={`/account/newsletter${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-newsletter'></span><span>Newsletter</span></NavLink></li>
        <li><NavLink to={`/account/user/logout/${slugCreater(userData?.name, userData?._id)}`} className='d-flex justify-content-start align-items-center py-4 px-7'><span className='dc-icon-logout'></span><span>Logout</span></NavLink></li>
      </ul>
    </div>
  )
}

export default UserSidebarFE
