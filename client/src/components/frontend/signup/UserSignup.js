import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import InputDC from '../../common/input/InputDC'
import Modal from '../../common/modal/Modal'
import UserSignupImage from 'resources/images/signup.jpeg';
import './index.scss';

const UserSignup = () => {
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
      <Modal isOpen={email} onClose={handleSubmitClose} modalStyle={'dc-guest-user-signup-modal'}>
        <div className='dc-guest-user-signup-modal__layout d-flex align-items-center'>
          <div className='dc-guest-user-signup-modal__layout-col pe-10'>
            <div className='dc-guest-user-signup-modal__layout-title mb-15 d-flex align-items-center justify-content-start'>
                <div className='dc-guest-user-signup-modal__layout-title-icon d-flex justify-content-center align-items-center'>
                  <span className="dc-icon-administrator"></span>
                </div>
                <h4 className='dc-h4'>Looks like you're new here!</h4>
            </div>
            <div className='mb-10'>
              <p className='body-lg'>Sign up with your information to get started</p>
            </div>
            <div className='dc-guest-user-signup-modal__left-img'>
              <img src={UserSignupImage} alt="" />
            </div>
          </div>
          <div className='dc-guest-user-signup-modal__layout-col ps-10'>
            <div className='mb-6'>
              <InputDC type={'text'} labelid={'test'} label={'Name'} update={inputHandler}/>
            </div>
            <div className='mb-10'>
              <InputDC type={'email'} labelid={'test2'} label={'Email'} update={inputHandler}/>
            </div>
            <div className='mb-10'>
              <InputDC type={'password'} labelid={'test2'} label={'Password'} update={inputHandler}/>
            </div>
            <div className='mb-10'>
              <InputDC type={'password'} labelid={'test2'} label={'Confirm password'} update={inputHandler}/>
            </div>
            <div className='col-lg-12 mb-10'>
              <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Sign up</button>
            </div>
            <div className='d-flex justify-content-end'>
              <p>Existing User? <Link>Log in</Link></p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default UserSignup
