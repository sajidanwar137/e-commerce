import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index'
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard'
import HomeFE from './pages/frontend/Home'

import GuestUser from './pages/frontend/GuestUser'
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
          <Route path="/account/*" element={<GuestUser />} />
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
