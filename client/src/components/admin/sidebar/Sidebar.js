import React, {useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {NavLink} from "react-router-dom";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import { getAdminLogo } from "store/adminLogo/actions";
import './index.scss';


export default function Sidebar() {
  const data = useSelector((state) => state?.adminlogo?.adminlogo?.data[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminLogo());
  }, [dispatch]);

  return (
    <div className='dc-dashboard__sidebar'>
      <div className='dc-dashboard__logo py-9 px-8'>
        {data && <img src={`${data.originalurl}?${data.updatedAt}`} alt='' />}
      </div>
      <div className='dc-dashboard__sidebar--menu-text pb-10 px-8 pt-25'>GETTING STARTED</div>
      <Accordion className='dc-dashboard__sidebar-nav'>
            <AccordionItem>
                <AccordionHeader className='px-8 py-6 d-flex justify-content-between align-items-center dc-dashboard__sidebar-nav--heading' as={'div'}>
                  <div className='d-flex dc-dashboard__sidebar-nav--text'>
                    <span className='dc-icon-administrator'></span>
                    <span className={`accordion-title`}>Admin setting</span>
                  </div>
                  <span className="dc-icon-arrow-right"></span>
                  <span className="dc-icon-arrow-down"></span>
                </AccordionHeader>
                <AccordionBody>
                    <div className="dc-dashboard__sidebar-nav--content px-8">
                      <ul>
                        <li><NavLink to="/dashboard/update-admin-name" className='px-12 py-4'>Update Admin Name</NavLink></li>
                        <li><NavLink to="/dashboard/update-admin-logo" className='px-12 py-4'>Change Admin Logo</NavLink></li>
                        <li><NavLink to="/dashboard/admin-change-password" className='px-12 py-4'>Change Password</NavLink></li>
                      </ul>
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

//export default Sidebar
