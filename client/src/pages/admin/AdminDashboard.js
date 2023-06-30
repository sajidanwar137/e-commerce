import React from 'react'
import { Routes ,Route} from 'react-router-dom';
import DashboardTemplate from 'template/admin/DashboardTemplate'
import UpdateProfile from 'components/admin/update-profile/UpdateProfile'
import UpdateLogo from 'components/admin/update-logo/UpdateLogo'
import PasswordChange from 'components/admin/password-change/PasswordChange'
import UpdateAdminAvtar from 'components/admin/update-avtar/UpdateAdminAvtar'
import GuestUser from 'components/admin/guest-user/GuestUser'

const AdminDashboard = () => {
  return (
    <DashboardTemplate>
      <Routes>
        {/* <Route path="/" element={<UpdateProfile/>}/> */}
        <Route path="admin/manage/profile" element={<UpdateProfile/>}/>
        <Route path="admin/manage/logo" element={<UpdateLogo/>}/>
        <Route path="admin/manage/password" element={<PasswordChange/>}/>
        <Route path="admin/manage/avtar" element={<UpdateAdminAvtar/>}/>
        <Route path="admin/manage/guest/user" element={<GuestUser/>}/>
      </Routes>
    </DashboardTemplate>
  )
}

export default AdminDashboard
