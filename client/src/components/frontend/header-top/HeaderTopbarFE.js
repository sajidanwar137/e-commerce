import React from 'react'
import { Link } from 'react-router-dom';
import UserLogin from '../userforgotpassword/UserForgotPassword'
import './index.scss';

const HeaderTopbarFE = () => {
  
  return (
    <>
      <div className='dc-header-top py-5'>
        <div className='dc-container'>
          <div className='row'>
              <div className='col-lg-12'>
              
                <ul className='d-flex justify-content-end gap-5'>
                  <li>
                    <Link className='d-flex align-items-center'>
                      <span className='dc-icon-share'></span>
                      <span>Checkout</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='d-flex align-items-center'>
                      <span className='dc-icon-cart'></span>
                      <span>Shopping Cart</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='d-flex align-items-center'>
                      <span className='dc-icon-heart'></span>
                      <span>Wish List</span>
                    </Link>
                  </li>
                  <li>
                    <Link className='d-flex align-items-center'>
                      <span className='dc-icon-administrator'></span>
                      <span>My account</span>
                    </Link>
                  </li>
                  <li>
                    <UserLogin/>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTopbarFE
