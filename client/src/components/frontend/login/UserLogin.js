import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Input from 'components/common/input/Input'
import Modal from '../../common/modal/Modal'
import UserLoginImg from 'resources/images/admin-login.png';
import { userLogin } from "store/userauth/actions";
import ErrorMessage from 'components/common/error-message/ErrorMessage';
import {validEmail} from 'utility/utility';
import api from 'api/api';
import './index.scss';

const UserLogin = ({isOpen, onClose, userforgot, usersignup}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  
  const handleLoginModal = () => {
    onClose()
  }
  const guestUserLoginSubmit = async (e) => {
    e.preventDefault();
    if (validEmail(email)) {
      setError("Please enter a valid email address");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    if (password.trim() === "") {
      setError("Please enter your password");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
      return;
    }
    const payload = {
      email: email,
      password: password,
    };
    try {
      const result = await api.post('/guest/userlogin', payload);
      if (result && result.success !== true) {
        setError(result.message);
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 5000);
        return;
      }
      dispatch(userLogin({ user: result }));
      handleLoginModal();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Modal isOpen={isOpen} onClose={handleLoginModal} modalStyle={'dc-guest-user-login-modal'}>
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
          <form className='m-0' onSubmit={guestUserLoginSubmit}>
            <div className='mb-3'>{showError && <ErrorMessage type="error" message={error} />}</div>
            <div className='mb-6'>
              <Input type={'text'} labelid={'guest-user-email'} label={'Enter email'} update={emailHandler}/>
            </div>
            <div className='mb-10'>
              <Input type={'password'} labelid={'guest-user-password'} label={'Enter password'} update={passwordHandler}/>
            </div>
            <div className='mb-10 d-flex justify-content-center'>
              <p><Link onClick={userforgot}>Forgot Password?</Link></p>
            </div>
            <div className='col-lg-12 mb-10'>
              <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Login</button>
            </div>
            <div className='d-flex justify-content-end'>
              <p>New to dizcoder? <Link onClick={usersignup}>Create an account</Link></p>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default UserLogin
