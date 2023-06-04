import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index'
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard'
import PageOne from './pages/admin/PageOne'
import AdminChangePassword from './pages/admin/AdminChangePassword'
import AdminForgotPassword from './pages/admin/AdminForgotPassword'
import AdminResetPassword from './pages/admin/AdminResetPassword'
import PrivateRoutes from './PrivateRoutes';
import LoggedIn from './utilities/utilities';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<PageOne/>}/>
        <Route exact path='/' element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<AdminDashboard/>}/>
          <Route path='/dashboard/admin-change-password' element={<AdminChangePassword/>}/>
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
