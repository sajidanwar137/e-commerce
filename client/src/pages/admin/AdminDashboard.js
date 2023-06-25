import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import Dashboard from 'components/admin/dashboard/Dashboard'
import UpdateProfile from 'components/admin/update-profile/UpdateProfile'
import UpdateLogo from 'components/admin/update-logo/UpdateLogo'
import PasswordChange from 'components/admin/password-change/PasswordChange'

const AdminDashboard = () => {
  return (
    <Dashboard>
      <Routes>
        {/* <Route path="/" element={<UpdateProfile/>}/> */}
        <Route path="admin/update-admin-name" element={<UpdateProfile/>}/>
        <Route path="admin/update-admin-logo" element={<UpdateLogo/>}/>
        <Route path="admin/admin-change-password" element={<PasswordChange/>}/>
      </Routes>
    </Dashboard>
  )
}

export default AdminDashboard
