import React, { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import './index.scss';

const CustomAccordion = () => {
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const handleItemClick = (item) => {
    setActiveItem((prevActiveItem) => {
      if (prevActiveItem === item) {
        return '';
      }
      return item;
    });
  };

  const isItemActive = (item) => {
    return (
      item === activeItem ||
      (activeItem !== '/dashboard/admin' && activeItem.startsWith(item))
    );
  };

  return (
    <ul className="dc-dashboard__sidebar-nav">
      <li>
        <Link to="/dashboard/admin/update-admin-name" className={isItemActive('/dashboard/admin') ? 'px-8 py-6 d-flex justify-content-between align-items-center dc-dashboard__sidebar-nav--heading active' : 'px-8 py-6 d-flex justify-content-between align-items-center dc-dashboard__sidebar-nav--heading'} onClick={() => handleItemClick('/dashboard/admin/update-admin-name')}>
            <div className='d-flex dc-dashboard__sidebar-nav--text'>
                <span className='dc-icon-administrator'></span>
                <span className={`accordion-title`}>Admin setting</span>
            </div>
            <span className="dc-icon-arrow-right"></span>
            <span className="dc-icon-arrow-down"></span>
        </Link>
        <div className={isItemActive('/dashboard/admin') ? 'dc-dashboard__sidebar-nav--content px-8 show' : 'dc-dashboard__sidebar-nav--content px-8'}>
            <ul>
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
      <li>
        <Link to="/dashboard/logo/update-admin-name" className={isItemActive('/dashboard/logo') ? 'px-8 py-6 d-flex justify-content-between align-items-center dc-dashboard__sidebar-nav--heading active' : 'px-8 py-6 d-flex justify-content-between align-items-center dc-dashboard__sidebar-nav--heading'} onClick={() => handleItemClick('/dashboard/logo/update-admin-name')}>
            <div className='d-flex dc-dashboard__sidebar-nav--text'>
                <span className='dc-icon-administrator'></span>
                <span className={`accordion-title`}>User setting</span>
            </div>
            <span className="dc-icon-arrow-right"></span>
            <span className="dc-icon-arrow-down"></span>
        </Link>
        <div className={isItemActive('/dashboard/logo') ? 'dc-dashboard__sidebar-nav--content px-8 show' : 'dc-dashboard__sidebar-nav--content px-8'}>
            <ul>
                <li>
                    <NavLink to="/dashboard/logo/update-admin-name" className='px-10 py-4'>Name</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/logo/update-admin-logo" className='px-10 py-4'>Logo</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/logo/admin-change-password" className='px-10 py-4'>Password</NavLink>
                </li>
            </ul>
        </div>
      </li>
    </ul>
  );
};

export default CustomAccordion;
