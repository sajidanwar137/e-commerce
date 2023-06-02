import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/index'
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard'
import PageOne from './pages/admin/PageOne'
import PageTwo from './pages/admin/PageTwo'
import PrivateRoutes from './PrivateRoutes';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<PageOne/>}/>
        <Route exact path='/' element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<AdminDashboard/>}/>
        </Route>
        <Route path='/dashboard/login' element={<AdminLogin/>}/>
        <Route path='/dashboard/pagetwo' element={<PageTwo/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}



export default App;
