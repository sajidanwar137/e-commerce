import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import InputDC from '../../common/input/InputDC'
import Modal from '../../common/modal/Modal'
import UserForgotPasswordImage from 'resources/images/forgot-password.png';
import './index.scss';

const UserForgotPassword = () => {
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
      <Modal isOpen={email} onClose={handleSubmitClose} modalStyle={'dc-guest-user-forgot-modal'}>
        <div className='dc-guest-user-forgot-modal__layout d-flex align-items-center'>
          <div className='dc-guest-user-forgot-modal__layout-col pe-10'>
            <div className='dc-guest-user-forgot-modal__layout-title mb-15 d-flex align-items-center justify-content-start'>
                <div className='dc-guest-user-forgot-modal__layout-title-icon d-flex justify-content-center align-items-center'>
                  <span className="dc-icon-administrator"></span>
                </div>
                <h4 className='dc-h4'>Forgot Password?</h4>
            </div>
            <div className='mb-10'>
              <p>To reset your password, enter the registered e-mail adddress and we will send you password reset instructions on your e-mail!</p>
            </div>
            <div className='dc-guest-user-forgot-modal__left-img'>
              <img src={UserForgotPasswordImage} alt="" />
            </div>
          </div>
          <div className='dc-guest-user-forgot-modal__layout-col ps-10'>
            <div className='mb-10'>
              <InputDC type={'email'} labelid={'test2'} label={'Enter your register email'} update={inputHandler}/>
            </div>
            <div className='mb-10 d-flex justify-content-center'>
              <p><Link>Wait, I remember my password</Link></p>
            </div>
            <div className='col-lg-12 mb-10'>
              <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Submit</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UserForgotPassword
