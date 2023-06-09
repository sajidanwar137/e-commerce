import React, {useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getLogo } from "store/logo/actions";
import Logo from "resources/images/logo.png";
import './index.scss';


export default function Sidebar() {
  const data = useSelector((state) => state?.logo?.data[0]);
  const [activeTab, setActiveTab] = useState(-1);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getLogo());
  }, [dispatch]);


  useEffect(() => {
    const savedActiveTab = localStorage.getItem('activeTab');
    if (savedActiveTab) {
      setActiveTab(parseInt(savedActiveTab));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab.toString());
  }, [activeTab]);

  const toggleTab = (index) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? -1 : index));
  };

  return (
    <div className='admin-aside'>
      <div className='admin-aside__logo px-12 d-flex justify-content-start align-items-center'>
        {data && <Link to="/dashboard">
          {data?.originalurl ? (
            <img
              src={data?.originalurl}
              alt="Logo"
              onError={(e) => (e.target.src = Logo)}
            />
          ) : (
            <img src={Logo} alt="Logo" />
          )}
        </Link>}
      </div>
      <div className='admin-aside__menu-text px-12 py-15'>GETTING STARTED</div>
      <div className="admin-aside__menu px-12">
        <ul className="admin-aside__menu--tab">
          <li>
            <div className={`d-flex justify-content-between align-items-center py-8 admin-aside__menu--tab-button ${activeTab === 0 ? 'admin-aside__menu--tab-button--active' : ''}`}
            onClick={() => toggleTab(0)}>
              <div className='admin-aside__menu--icon-col d-flex align-items-center justify-content-start'>
                <span className='radius-50 border admin-aside__menu--icon d-flex justify-content-center align-items-center'>
                  <span className='dc-icon-administrator'></span>
                </span>
                <span>Admin Setting</span>
              </div>
              <span className="dc-icon-arrow-down"></span>
            </div>
            <div className={`ps-5 admin-aside__menu--tab-pane ${activeTab === 0 ? 'admin-aside__menu--tab-pane--active' : ''}`}>
              <ul className='border-s'>
                <li>
                    <NavLink to="/dashboard/admin/update-admin-name" className='px-10 py-4'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/admin/update-admin-logo" className='px-10 py-4'>Logo</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/admin/admin-change-password" className='px-10 py-4'>Password</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/admin/admin-update-avtar" className='px-10 py-4'>Admin Avtar</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={`d-flex justify-content-between align-items-center py-8 admin-aside__menu--tab-button ${activeTab === 1 ? 'admin-aside__menu--tab-button--active' : ''}`}
            onClick={() => toggleTab(1)}>
              <div className='admin-aside__menu--icon-col d-flex align-items-center justify-content-start'>
                <span className='radius-50 border admin-aside__menu--icon d-flex justify-content-center align-items-center'>
                  <span className='dc-icon-administrator'></span>
                </span>
                <span>Admin Setting</span>
              </div>
              <span className="dc-icon-arrow-down"></span>
            </div>
            <div className={`ps-5 admin-aside__menu--tab-pane ${activeTab === 1 ? 'admin-aside__menu--tab-pane--active' : ''}`}>
              <ul className='border-s'>
                <li>
                    <NavLink to="/dashboard/admin/update-admin-name" className='px-10 py-4'>Name update</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/admin/update-admin-logo" className='px-10 py-4'>Change logo</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/admin/admin-change-password" className='px-10 py-4'>Change password</NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
