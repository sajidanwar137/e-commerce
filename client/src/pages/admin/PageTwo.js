import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import AdminHeader from '../../components/admin/AdminHeader'
import AdminFooter from '../../components/admin/AdminFooter'

function PageOne() {
  return (
    <div className='dc-dashboard'>
        <AdminSidebar/>
        <div className='dc-dashboard__layout'>
            <h2>Page two</h2>
            <AdminHeader/>
            <AdminFooter/>
        </div>
    </div>
  )
}

export default PageOne
