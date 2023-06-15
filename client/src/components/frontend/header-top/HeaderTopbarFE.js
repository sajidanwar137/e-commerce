import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import UserLogin from '../login/UserLogin'
import UserSignup from '../signup/UserSignup'
import UserForgotPassword from '../userforgotpassword/UserForgotPassword'
import './index.scss';

const HeaderTopbarFE = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);

  const loginModalTrigger = () => {
    setLoginModal(true)
  }
  const handleLoginModal = ()=> {
    setLoginModal(false)
  }
  const handleLiftingLoginScreen = () => {
    setLoginModal(true)
    setSignupModal(false);
  }
  const handleLiftingUserLoginScreen = () =>{
    setLoginModal(true)
    setForgotPasswordModal(false)
  }
  const handleLiftingForgotScreen = () =>{
    setLoginModal(false);
    setForgotPasswordModal(true)
  }
  const handleLiftingSignupScreen = () => {
    setLoginModal(false);
    setSignupModal(true);
  }

  const handleSignupModal = () => {
    setSignupModal(false);
  }

  const handleForgotPasswordModal = () => {
    setForgotPasswordModal(false)
  }
  
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
                    <Link onClick={loginModalTrigger} className='d-flex align-items-center'>
                      <span className='dc-icon-key'></span>
                      <span>Login</span>
                    </Link>
                    <UserLogin isOpen={loginModal} onClose={handleLoginModal} usersignup={handleLiftingSignupScreen} userforgot={handleLiftingForgotScreen}/>
                    <UserSignup isOpen={signupModal} onClose={handleSignupModal} userlogin={handleLiftingLoginScreen}/>
                    <UserForgotPassword isOpen={forgotPasswordModal} userlogin={handleLiftingUserLoginScreen} onClose={handleForgotPasswordModal}/>
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
