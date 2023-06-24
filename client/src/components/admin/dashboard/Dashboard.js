import React from 'react'
import Sidebar from 'components/admin/sidebar/Sidebar'
import Header from 'components/admin/header/Header'
import Footer from 'components/admin/footer/Footer'
import './index.scss';

const Dashboard = ({children}) => {
  return (
    <div className='dc-dashboard d-flex flex-column'>
      <div className='dc-dashboard__header box-shadow'>
        <Header/>
      </div>
      <div className='dc-dashboard__sidebar box-shadow'>
        <Sidebar/>
      </div>
      <div className='dc-dashboard__layout d-flex flex-column pt-30'>
          <div className='dc-dashboard__layout-content d-flex flex-column p-15'>
            {children}
          </div>
          <div className='dc-dashboard__footer px-15'>
            <Footer/>
          </div>
      </div>
    </div>
  )
}
export default Dashboard
