import React from 'react'
import { useSelector } from "react-redux";
import SplashMessage from '../splash-message/SplashMessage'
import HeaderTopbarFE from '../header-top/HeaderTopbarFE'
import Logo from "resources/images/logo.png";
import './index.scss';

const HeaderFE = () => {
  const data = useSelector((state) => state?.logo?.data[0]);
  return (
    <>
    <SplashMessage/>
    <HeaderTopbarFE/>
    <div className='dc-header py-15'>
      <div className='dc-container'>
        <div className='row'>
            <div className='col-lg-3'>
              <div className='dc-header__logo'>
              {data?.originalurl ? (
                  <img
                    src={data?.originalurl}
                    alt="Logo"
                    onError={(e) => (e.target.src = Logo)}
                  />
                ) : (
                  <img src={Logo} alt="Logo" />
                )}
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
