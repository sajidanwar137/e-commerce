import React from 'react'
import AdminHeader from '../../components/admin/AdminHeader'
import AdminFooter from '../../components/admin/AdminFooter'

function PageOne() {
  return (
    <div className='dc-dashboard'>
        <div className='dc-dashboard__layout'>
            <h2>Page one</h2>
            <AdminFooter/>
        </div>
    </div>
  )
}

export default PageOne
