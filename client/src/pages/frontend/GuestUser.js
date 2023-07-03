import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import GuestUserTemplate from 'template/frontend/GuestUserTemplate'
import UpdateAvatar from 'components/frontend/user-avatar/UpdateAvatar'
import UpdateProfile from 'components/frontend/user-profile/UpdateProfile'
import UpdateUserPassword from 'components/frontend/user-update-password/UpdateUserPassword'
import UserAddress from 'components/frontend/user-address/UserAddress'
import UserHome from 'components/frontend/user-home/UserHome'

const GuestUser = () => {
  return (
    <GuestUserTemplate>
      <Routes>
        <Route path=":id" element={<UserHome/>}/>
        <Route path=":id/profile/update" element={<UpdateProfile/>}/>
        <Route path=":id/password-reset" element={<UpdateUserPassword/>}/>
        <Route path=":id/avatar/update" element={<UpdateAvatar/>}/>
        <Route path=":id/address" element={<UserAddress/>}/>
      </Routes>
    </GuestUserTemplate>
  )
}
export default GuestUser
