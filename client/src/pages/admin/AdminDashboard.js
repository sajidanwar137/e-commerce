import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import DashboardTemplate from 'template/admin/DashboardTemplate'
import UpdateProfile from 'components/admin/update-profile/UpdateProfile'
import UpdateLogo from 'components/admin/update-logo/UpdateLogo'
import PasswordChange from 'components/admin/password-change/PasswordChange'
import UpdateAdminAvtar from 'components/admin/update-avtar/UpdateAdminAvtar'

const AdminDashboard = () => {
  return (
    <DashboardTemplate>
      <Routes>
        {/* <Route path="/" element={<UpdateProfile/>}/> */}
        <Route path="admin/update-admin-name" element={<UpdateProfile/>}/>
        <Route path="admin/update-admin-logo" element={<UpdateLogo/>}/>
        <Route path="admin/admin-change-password" element={<PasswordChange/>}/>
        <Route path="admin/admin-update-avtar" element={<UpdateAdminAvtar/>}/>
      </Routes>
    </DashboardTemplate>
  )
}

export default AdminDashboard
