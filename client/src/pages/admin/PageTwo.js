import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import AdminHeader from '../../components/admin/AdminHeader'
import AdminFooter from '../../components/admin/AdminFooter'

function PageOne() {
  return (
    <div className='dc-dashboard'>
        <AdminSidebar/>
        <div className='dc-dashboard__layout d-flex justify-content-center align-items-center'>
            <div className=''>HHHHHH</div>
            <AdminHeader/>
            <AdminFooter/>
        </div>
    </div>
  )
}

export default PageOne
