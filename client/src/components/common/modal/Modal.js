import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const Modal = ({ isOpen, onClose, children, modalStyle }) => {

  const handleEscapeKey = (event) => {
    if(event.keyCode === 27) {
      onClose(false)
    }
  }

  const handleOverlayClick = (e) => {
    e.target.classList.contains('dc-modal__overlay') && onClose(false);
  }

  useEffect(() => {
    if(isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
    }
    else{
      document.removeEventListener('keydown', handleEscapeKey)
    }
  },[isOpen]);

    return isOpen ? ReactDOM.createPortal(
      <div className="dc-modal d-flex justify-content-center align-items-center">
        <div className="dc-modal__overlay" onClick={(e) => handleOverlayClick(e)}></div>
        <div className={`${modalStyle} dc-modal__content pt-20 pb-15 ps-15 pe-15 position-relative`}>
          <div className="dc-modal__modal-close d-flex justify-content-center align-items-center" onClick={() => onClose(false)}><span className='dc-icon-close'></span></div>
          <div className="dc-modal__content-body">{children}</div>
        </div>
      </div>,
      document.getElementById('modal-root')
    ): null;
};
export default Modal;