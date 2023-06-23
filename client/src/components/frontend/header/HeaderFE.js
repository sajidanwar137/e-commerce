import React from 'react'
import './index.scss';
import SplashMessage from '../splash-message/SplashMessage'
import HeaderTopbarFE from '../header-top/HeaderTopbarFE'

const HeaderFE = () => {
  return (
    <>
    <SplashMessage/>
    <HeaderTopbarFE/>
    <div className='dc-header py-15'>
      <div className='dc-container'>
        <div className='row'>
            <div className='col-lg-3'>
              <div className='dc-header__logo'>
                <img src="http://localhost:5000/upload/adminlogo/logo.png?2023-06-11T17:25:12.349Z" alt='' />
              </div>
            </div>
            <div className='col-lg-3'>
              <div>
                <div className='icon'>
                  <span className='dc-icon-truck'></span>
                </div>
                <div className='content'>
                  <p>FREE DELIVERY WORLDWIDE</p>
                  <p>On order over $100</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div>
                <div className='icon'>
                  <span className='dc-icon-truck'></span>
                </div>
                <div className='content'>
                  <p>UP TO 20% OFF COSY LAYERS</p>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div>
                <div className='icon'>
                  <span className='dc-icon-truck'></span>
                </div>
                <div className='content'>
                  <p>Buy 1 get 1 free</p>
                  <p>On order over $100</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeaderFE
