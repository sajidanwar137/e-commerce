import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import GuestUserTemplate from 'template/frontend/GuestUserTemplate'
import UpdateAvtar from 'components/frontend/user-avtar/UpdateAvtar'
import UpdateProfile from 'components/frontend/user-profile/UpdateProfile'
import UpdateUserPassword from 'components/frontend/user-update-password/UpdateUserPassword'
import UpdateUserAddress from 'components/frontend/user-update-address/UpdateUserAddress'

const GuestUser = () => {
  return (
    <GuestUserTemplate>
      <Routes>
        {/* <Route path=":id" element={<UpdateProfile/>}/> */}
        <Route path=":id/avatar/update" element={<UpdateAvtar/>}/>
        <Route path=":id/profile/update" element={<UpdateProfile/>}/>
        <Route path=":id/password-reset" element={<UpdateUserPassword/>}/>
        <Route path=":id/address" element={<UpdateUserAddress/>}/>
      </Routes>
    </GuestUserTemplate>
  )
}
export default GuestUser
