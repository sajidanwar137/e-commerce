import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index'
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard'
import PageOne from './pages/admin/PageOne'
import PageTwo from './pages/admin/PageTwo'
import ChangePassword from './pages/admin/ChangePassword'
import PrivateRoutes from './PrivateRoutes';
import LoggedIn from './utilities/utilities';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<PageOne/>}/>
        <Route path='/dashboard/changepassword' element={<ChangePassword/>}/>
        <Route exact path='/' element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<AdminDashboard/>}/>
          <Route path='/dashboard/pagetwo' element={<PageTwo/>}/>
        </Route>
        <Route exact path='/' element={<LoggedIn />}>
          <Route path='/dashboard/login' element={<AdminLogin/>}/>
        </Route>
      </Routes>
    </Router>
    </Provider>
  );
}



export default App;
