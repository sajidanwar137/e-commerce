import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import Dashboard from 'components/admin/dashboard/Dashboard'
import UpdateName from 'components/admin/update-name/UpdateName'
import UpdateLogo from 'components/admin/update-logo/UpdateLogo'
import PasswordChange from 'components/admin/password-change/PasswordChange'

const AdminDashboard = () => {
  return (
    <Dashboard>
      <Routes>
        {/* <Route path="/" element={<UpdateName/>}/> */}
        <Route path="admin/update-admin-name" element={<UpdateName/>}/>
        <Route path="admin/update-admin-logo" element={<UpdateLogo/>}/>
        <Route path="admin/admin-change-password" element={<PasswordChange/>}/>
      </Routes>
    </Dashboard>
  )
}

export default AdminDashboard
