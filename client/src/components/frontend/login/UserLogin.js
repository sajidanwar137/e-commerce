import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import InputDC from '../../common/input/InputDC'
import Modal from '../../common/modal/Modal'
import UserLoginImg from 'resources/images/admin-login.png';
import './index.scss';

const UserLogin = () => {
  const [email, setEmail] = useState(false);
  const handleSubmit = () => {
    setEmail(true)
  }
  const handleSubmitClose = ()=> {
    setEmail(false)
  }
  const inputHandler = (e) => {
    console.log("VVV:::", e.target.value)
  }
  return (
    <>
      <Link onClick={handleSubmit} className='d-flex align-items-center'>
        <span className='dc-icon-key'></span>
        <span>Login</span>
      </Link>
      <Modal isOpen={email} onClose={handleSubmitClose} modalStyle={'dc-guest-user-login-modal'}>
        <div className='dc-guest-user-login-modal__layout d-flex align-items-center'>
          <div className='dc-guest-user-login-modal__layout-col pe-10'>
            <div className='dc-guest-user-login-modal__layout-title mb-15 d-flex align-items-center justify-content-start'>
                <div className='dc-guest-user-login-modal__layout-title-icon d-flex justify-content-center align-items-center'>
                  <span className="dc-icon-administrator"></span>
                </div>
                <h4 className='dc-h4'>Login</h4>
            </div>
            <div className='mb-10'>
              <p className='body-lg'>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className='dc-guest-user-login-modal__left-img'>
              <img src={UserLoginImg} alt="" />
            </div>
          </div>
          <div className='dc-guest-user-login-modal__layout-col ps-10'>
            <div className='mb-6'>
              <InputDC type={'text'} labelid={'test'} label={'Enter email'} update={inputHandler}/>
            </div>
            <div className='mb-10'>
              <InputDC type={'password'} labelid={'test2'} label={'Enter password'} update={inputHandler}/>
            </div>
            <div className='mb-10 d-flex justify-content-center'>
              <p><Link>Forgot Password?</Link></p>
            </div>
            <div className='col-lg-12 mb-10'>
              <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Login</button>
            </div>
            <div className='d-flex justify-content-end'>
              <p>New to dizcoder? <Link>Create an account</Link></p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UserLogin
