import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import AdminHeader from '../../components/admin/AdminHeader'
import AdminFooter from '../../components/admin/AdminFooter'

function AdminDashboard() {
  return (
    <div className='dc-dashboard d-flex flex-row'>
        <AdminSidebar/>
        <div className='dc-dashboard__layout d-flex flex-column'>
            <AdminHeader/>
            <div className='dc-dashboard__layout-content d-flex flex-column flex-column-fluid'>
                <div className='container'>
                  <div className='d-flex flex-column flex-lg-row px-15'>text</div>
                </div>
            </div>
            <AdminFooter/>
        </div>
    </div>
  )
}

export default AdminDashboard
