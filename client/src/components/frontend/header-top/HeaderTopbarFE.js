import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Modal from '../../common/modal/Modal'
import InputDC from '../../common/input/InputDC'
import './index.scss';

const HeaderTopbarFE = () => {
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
                    <Link onClick={handleSubmit && handleSubmit} className='d-flex align-items-center'>
                      <span className='dc-icon-key'></span>
                      <span>Login</span>
                    </Link>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <Modal isOpen={email} onClose={handleSubmitClose} modalStyle={'dc-login-modal'}>
        <div className='dc-user-login'>
          <div className='row'>
            <div className='col-lg-12'>
              <h3>Login</h3>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <InputDC type={'text'} labelid={'test'} label={'Enter email'} update={inputHandler}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <InputDC type={'password'} labelid={'test'} label={'Enter password'} update={inputHandler}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <p>Forgot Password?</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <p>By continuing, you agree to dizcoder's Terms of Use and Privacy Policy.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <button type="submit" className='dc-btn dc-btn-secondary dc-btn-fluid px-20 py-5'>Login</button>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <p>New to dizcoder? Create an account</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default HeaderTopbarFE
