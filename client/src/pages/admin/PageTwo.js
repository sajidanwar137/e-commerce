import React from 'react'
import Sidebar from '../../components/admin/sidebar/Sidebar'
import Header from '../../components/admin/header/Header'
import Footer from '../../components/admin/footer/Footer'

function PageOne() {
  return (
    <div className='dc-dashboard'>
        <Sidebar/>
        <div className='dc-dashboard__layout d-flex justify-content-center align-items-center'>
            <div className=''>HHHHHH</div>
            <Header/>
            <Footer/>
        </div>
    </div>
  )
}

export default PageOne
