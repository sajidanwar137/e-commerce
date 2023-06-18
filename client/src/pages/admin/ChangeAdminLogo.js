import React from 'react'
import Sidebar from '../../components/admin/sidebar/Sidebar'
import Header from '../../components/admin/header/Header'
import Footer from '../../components/admin/footer/Footer'
import UpdateLogo from '../../components/admin/update-logo/UpdateLogo'

function ChangeAdminLogo() {
  return (
    <div className='dc-dashboard d-flex flex-row'>
        <Sidebar/>
        <div className='dc-dashboard__layout d-flex flex-column'>
            <Header/>
            <div className='dc-dashboard__layout-content d-flex flex-column flex-column-fluid'>
                <div className='container'>
                    <div className='px-15'>
                        <div className='dc-dashboard__layout--card-body p-25'>
                            <UpdateLogo/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default ChangeAdminLogo
