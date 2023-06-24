import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index'
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard'
import HomeFE from './pages/frontend/Home'

import UserProfileFE from './pages/frontend/UserProfileFE'
import UserAvtar from './pages/frontend/UserAvtar'
import UserUpdateProfile from './pages/frontend/UserUpdateProfile'
import UserUpdatePassword from './pages/frontend/UserUpdatePassword'
import UserUpdateAddress from './pages/frontend/UserUpdateAddress'
import AdminForgotPassword from './pages/admin/AdminForgotPassword'
import AdminResetPassword from './pages/admin/AdminResetPassword'
import {PrivateRoutes, LoggedIn, UserPrivateRoutes} from './AuthRoutes';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<HomeFE/>}/>
        <Route exact path='/' element={<UserPrivateRoutes />}>
          <Route path='/account/:id' element={<UserProfileFE/>}/>
          <Route path='/account/update/avtar/:id' element={<UserAvtar/>}/>
          <Route path='/account/update/profile/:id' element={<UserUpdateProfile/>}/>
          <Route path='/account/update/password/:id' element={<UserUpdatePassword/>}/>
          <Route path='/account/update/address/:id' element={<UserUpdateAddress/>}/>
        </Route>
        <Route exact path='/' element={<PrivateRoutes />}>
          <Route path="/dashboard/*" element={<AdminDashboard />} />
        </Route>
        <Route exact path='/' element={<LoggedIn />}>
          <Route path='/dashboard/login' element={<AdminLogin/>}/>
          <Route path='/dashboard/admin-forgot-password' element={<AdminForgotPassword/>}/>
          <Route path='/dashboard/admin-reset-password' element={<AdminResetPassword/>}/>
        </Route>
      </Routes>
    </Router>
    </Provider>
  );
}



export default App;
