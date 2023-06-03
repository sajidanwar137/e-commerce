import React from 'react'
import AdminSideNavigation from './AdminSideNavigation'
import { accordionData } from "./sideNavigationData";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

function AdminSidebar() {
  return (
    <div className='dc-dashboard__sidebar'>
      <div className='dc-dashboard__logo'>
        <h1 className='dc-h3'>dizcoder</h1>
      </div>
      <div className='dc-dashboard__sidebar-nav'>
      <Accordion>
            <AccordionItem>
                <AccordionHeader>
                    <h4 className={`accordion-title`}>Title 1</h4>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet.
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader>
                    <h4 className={`accordion-title`}>Title 2</h4>
                </AccordionHeader>

                <AccordionBody>
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet.
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
        {/* <ul>
            {accordionData.map(({ title, content}, index) => (
              <AdminSideNavigation title={title} content={content} key={index}/>
            ))}
        </ul> */}
      </div>
    </div>
  )
}

export default AdminSidebar
