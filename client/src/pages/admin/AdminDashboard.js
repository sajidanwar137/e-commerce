import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import AdminHeader from '../../components/admin/AdminHeader'
import AdminFooter from '../../components/admin/AdminFooter'

function AdminDashboard() {
  return (
    <div className='dc-dashboard'>
        <AdminSidebar/>
        <div className='dc-dashboard__layout'>
            <AdminHeader/>
            <AdminFooter/>
        </div>
    </div>
  )
}

export default AdminDashboard
