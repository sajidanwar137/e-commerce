import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
          <div className="modal-body">{children}</div>
        </div>
      </div>,
      document.getElementById('modal-root')
    );
};
export default Modal;

// const [isOpen, setIsOpen] = useState(false);
//   const [modalContent, setModalContent] = useState('');

//   const openModal = (content) => {
//     setModalContent(content);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={() => openModal('Hello World')}>Open Modal</button>
//       <Modal isOpen={isOpen} onClose={closeModal}>
//         {modalContent}
//       </Modal>
//     </div>
//   );