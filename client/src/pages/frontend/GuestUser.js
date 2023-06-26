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
        <Route path="update/avtar/:id" element={<UpdateAvtar/>}/>
        <Route path="update/profile/:id" element={<UpdateProfile/>}/>
        <Route path="update/password/:id" element={<UpdateUserPassword/>}/>
        <Route path="update/address/:id" element={<UpdateUserAddress/>}/>
      </Routes>
    </GuestUserTemplate>
  )
}
export default GuestUser
