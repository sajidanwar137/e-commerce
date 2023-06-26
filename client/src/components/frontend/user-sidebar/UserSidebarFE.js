import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { slugCreater } from "utility/utility";
import Avtar from "resources/images/avtar.jpeg";
import "./index.scss";

const UserSidebarFE = () => {
  const userData = useSelector((state) => state?.user?.data);
  return (
    <div className="dc-user-sidebar pb-30 border">
      <div className="dc-user-sidebar__avtar-col border-b mb-15 p-10 d-flex justify-content-center">
        <div className="dc-user-sidebar__avtar border">
          {userData?.avtarOriginalurl ? (
            <img
              src={userData?.avtarOriginalurl}
              alt="Avatar"
              onError={(e) => (e.target.src = Avtar)}
            />
          ) : (
            <img src={Avtar} alt="Avatar" />
          )}
        </div>
      </div>
      <div className="dc-user-sidebar__user-name mb-15 px-7 pb-15 border-b">
        <h3>Hi! {userData?.name.split(" ")[0]}</h3>
      </div>
      <ul className="dc-user-sidebar__link-list">
        <li>
          <NavLink
            to={`/account/${slugCreater(userData?.name, userData?._id)}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-admin"></span>
            </span>
            <span>My Account</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/update/profile/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-account-edit"></span>
            </span>
            <span>Edit Account</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/update/password/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-reset-password"></span>
            </span>
            <span>Password</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/update/avtar/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-camera"></span>
            </span>
            <span>Edit Avtar</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/update/address/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-address-book"></span>
            </span>
            <span>Address Book</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/wishlist/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-heart"></span>
            </span>
            <span>Wish List</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/order/history/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-orders"></span>
            </span>
            <span>Order History</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/download/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-download"></span>
            </span>
            
            <span>Downloads</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/subscriptions/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-email"></span>
            </span>
            <span>Subscriptions</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/reward-points/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-rewards"></span>
            </span>
            <span>Reward Points</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/order/returns/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-returns"></span>
            </span>
            <span>Returns</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/transactions/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-transactions"></span>
            </span>
            <span>Transactions</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/newsletter${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-newsletter"></span>
            </span>
            <span>Newsletter</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/account/user/logout/${slugCreater(
              userData?.name,
              userData?._id
            )}`}
            className="d-flex justify-content-start align-items-center py-4 px-7"
          >
            <span className="border dc-user-sidebar__link-list--icon d-flex justify-content-center align-items-center">
              <span className="dc-icon-logout"></span>
            </span>
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebarFE;
