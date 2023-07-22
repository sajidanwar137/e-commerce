import React from 'react'

import './index.scss';

const Message = ({ type, message}) => {
  return (
    <div className={`ds-error-message d-flex justify-content-start align-items-start mb-4 py-3 px-5 ${type}`}>
    <span className={`dc-icon-${type}`}></span>
    <div className='ds-error-message__text'>{message}</div>
  </div>
  );
};

export default Message;
