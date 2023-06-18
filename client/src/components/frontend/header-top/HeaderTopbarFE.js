import React, {useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import UserLogin from '../login/UserLogin'
import UserSignup from '../signup/UserSignup'
import UserForgotPassword from '../userforgotpassword/UserForgotPassword'
import { userLogout } from 'store/userauth/actions';
import { slugCreater } from 'utility/utility';
import api from 'api/api';
import Avtar from 'resources/images/avtar.jpeg';
import './index.scss';

const HeaderTopbarFE = () => {
  const dispatch = useDispatch()
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const userauth = useSelector((state) => state?.userauth);
  const userData = useSelector((state) => state?.user?.data);

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
  const userLogoutHandler = async () => {
    const payload = {user_id: userData?._id};
    const token = userauth?.token;
    try {
      const result = await api.post('/guest/userlogout', payload, {headers: {
          Authorization: `Bearer ${token}`,
        }});
      if (result && result.success === true) {
        dispatch(userLogout({ userauth: result }));
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
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
                  {userauth?.isAuthenticated && <li>
                    <div className='dc-header-top__dropdown d-flex align-items-center' ref={dropdownRef}>
                      <div className='d-flex align-items-center dc-header-top__dropdown-button' onClick={toggleDropdown}>
                        <div className='dc-header-top__dropdown--avtar d-flex align-items-center'>
                          {userData?.avtarOriginalurl ? (
                            <img src={userData?.avtarOriginalurl} alt="Avatar" onError={e => e.target.src = Avtar } />
                          ) : (
                            <img src={Avtar} alt="Avatar" />
                          )}
                        </div>
                        <span>Hi! {userData?.name.split(' ')[0]}</span>
                        <span className='dc-icon-arrow-down'></span>
                      </div>
                      <div className={`pt-8 dc-header-top__dropdown-content ${isOpen ? 'dc-header-top__dropdown-content--open' : ''}`}>
                        <ul>
                          <li className='px-5'>
                            <Link to={`/account/${slugCreater(userData?.name, userData?._id)}`} className='py-2 d-flex justify-content-start align-items-center'>
                              <span className='dc-icon-setting'></span>
                              <span>Profile</span>
                            </Link>
                          </li>
                          <li className='px-5'><Link className='py-2 d-flex justify-content-start align-items-center' onClick={userLogoutHandler}><span className='dc-icon-logout'></span><span>Logout</span></Link></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  }
                  {!userauth?.isAuthenticated && <li>
                    <Link onClick={loginModalTrigger} className='d-flex align-items-center'>
                      <span className='dc-icon-key'></span>
                      <span>Login</span>
                    </Link>
                    <UserLogin isOpen={loginModal} onClose={handleLoginModal} usersignup={handleLiftingSignupScreen} userforgot={handleLiftingForgotScreen}/>
                    <UserSignup isOpen={signupModal} onClose={handleSignupModal} userlogin={handleLiftingLoginScreen}/>
                    <UserForgotPassword isOpen={forgotPasswordModal} userlogin={handleLiftingUserLoginScreen} onClose={handleForgotPasswordModal}/>
                  </li>}
                </ul>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderTopbarFE
