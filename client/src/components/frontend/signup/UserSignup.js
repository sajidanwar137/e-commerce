import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import InputDC from '../../common/input/InputDC'
import Modal from '../../common/modal/Modal'
import UserSignupImage from 'resources/images/signup.jpeg';
import api from 'api/api';
import './index.scss';

const UserSignup = ({isOpen, onClose, userlogin}) => {
  const [username, setUsername] = useState();
  const [useremail, setUseremail] = useState();
  const [userpassword, setUserpassword] = useState();

  const nameHandler = (e) => {
    setUsername(e.target.value)
  }
  const emailHandler = (e) => {
    setUseremail(e.target.value)
  }
  const passwordHandler = (e) => {
    setUserpassword(e.target.value)
  }
  const confirmPasswordHandler = (e) => {}

  const handleSignupModal = () =>{
    onClose()
  }

  const guestUserSignupSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: username,
      email: useremail,
      password: userpassword,
    };
    try {
      const result = await api.post('/guest/createuser', payload);
      console.log("result::::", result)
      handleSignupModal();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={handleSignupModal} modalStyle={'dc-guest-user-signup-modal'}>
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
          <form className='m-0' onSubmit={guestUserSignupSubmit}>
            <div className='mb-6'>
              <InputDC type={'text'} labelid={'guest-user-name'} label={'Name'} update={nameHandler}/>
            </div>
            <div className='mb-10'>
              <InputDC type={'email'} labelid={'guest-user-email'} label={'Email'} update={emailHandler}/>
            </div>
            <div className='mb-10'>
              <InputDC type={'password'} labelid={'guest-user-password'} label={'Password'} update={passwordHandler}/>
            </div>
            <div className='mb-10'>
              <InputDC type={'password'} labelid={'guest-user-confirm-password'} label={'Confirm password'} update={confirmPasswordHandler}/>
            </div>
            <div className='col-lg-12 mb-10'>
              <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Sign up</button>
            </div>
            <div className='d-flex justify-content-end'>
              <p>Existing User? <Link onClick={userlogin}>Log in</Link></p>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default UserSignup
