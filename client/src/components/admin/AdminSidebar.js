import React from 'react'
import AdminSideNavigation from './AdminSideNavigation'
import { accordionData } from "./sideNavigationData";

function AdminSidebar() {
  return (
    <div className='dc-dashboard__sidebar'>
      <div className='dc-dashboard__logo'>
        <h1 className='dc-h3'>dizcoder</h1>
      </div>
      <div className='dc-dashboard__sidebar-nav'>
        <ul>
            {accordionData.map(({ title, content}, index) => (
              <AdminSideNavigation title={title} content={content} key={index}/>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminSidebar
