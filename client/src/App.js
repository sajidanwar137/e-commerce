import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index'
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard'
import HomeFE from './pages/frontend/Home'
import UserProfileFE from './pages/frontend/UserProfileFE'
import AdminChangePassword from './pages/admin/AdminChangePassword'
import AdminForgotPassword from './pages/admin/AdminForgotPassword'
import AdminResetPassword from './pages/admin/AdminResetPassword'
import ChangeAdminLogo from './pages/admin/ChangeAdminLogo'
import UpdateAdminName from './pages/admin/UpdateAdminName'
import {PrivateRoutes, LoggedIn, UserPrivateRoutes} from './AuthRoutes';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<HomeFE/>}/>
        <Route exact path='/' element={<UserPrivateRoutes />}>
          <Route path='/account/:id' element={<UserProfileFE/>}/>
        </Route>
        <Route exact path='/' element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<AdminDashboard/>}/>
          <Route path='/dashboard/admin/admin-change-password' element={<AdminChangePassword/>}/>
          <Route path='/dashboard/admin/update-admin-name' element={<UpdateAdminName/>}/>
          <Route path='/dashboard/admin/update-admin-logo' element={<ChangeAdminLogo/>}/>

          <Route path='/dashboard/logo/admin-change-password' element={<AdminChangePassword/>}/>
          <Route path='/dashboard/logo/update-admin-name' element={<UpdateAdminName/>}/>
          <Route path='/dashboard/logo/update-admin-logo' element={<ChangeAdminLogo/>}/>
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
