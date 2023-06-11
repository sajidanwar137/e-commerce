import React from 'react'
import './index.scss';
import SplashMessage from '../splash-message/SplashMessage'
import HeaderTopbarFE from '../header-top/HeaderTopbarFE'

const HeaderFE = () => {
  return (
    <>
    <SplashMessage/>
    <HeaderTopbarFE/>
    <div className='dc-header'>
      <div className='dc-container'>
        <div className='row'>
            <div className='col-lg-12'>Header here</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeaderFE
