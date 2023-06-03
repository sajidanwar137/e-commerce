import React from 'react'
import { Link} from "react-router-dom";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import './index.scss';
function Sidebar() {
  return (
    <div className='dc-dashboard__sidebar'>
      <div className='dc-dashboard__logo py-9 px-8'>
        <h1 className='dc-h3'>dizcoder</h1>
      </div>
      <div className='dc-dashboard__sidebar--menu-text pb-10 px-8 pt-25'>GETTING STARTED</div>
      <Accordion className='dc-dashboard__sidebar-nav'>
            <AccordionItem>
                <AccordionHeader className='px-8 py-6 d-flex justify-content-between align-items-center dc-dashboard__sidebar-nav--heading' as={'div'}>
                  <div className='d-flex dc-dashboard__sidebar-nav--text'>
                    <span className='dc-icon-user'></span>
                    <span className={`accordion-title`}>Admin setting</span>
                  </div>
                  <span className="dc-icon-arrow-right"></span>
                  <span className="dc-icon-arrow-down"></span>
                </AccordionHeader>
                <AccordionBody>
                    <div className="dc-dashboard__sidebar-nav--content px-8">
                      <ul>
                        <li><a href="#" className='px-12 py-4'>Update profile</a></li>
                        <li><Link to="/dashboard/changepassword" className='px-12 py-4'>Change password</Link></li>
                      </ul>
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default Sidebar
