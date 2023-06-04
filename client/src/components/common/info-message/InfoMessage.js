import React from 'react';
import './index.scss';

const InfoMessage = ({ type, message }) => {
  const getMessageClass = () => {
    switch (type) {
      case 'success':
        return 'success';
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      case 'warning':
        return 'warning';
      default:
        return '';
    }
  };
  const getInfoIcon = () => {
    switch (type) {
      case 'success':
        return <span className='dc-icon-success mt-2'></span>;
      case 'error':
        return <span className='dc-icon-error mt-2'></span>;
      case 'info':
        return <span className='dc-icon-info mt-2'></span>;
      case 'warning':
        return <span className='dc-icon-warning mt-2'></span>;
      default:
        return '';
    }
  };

  const messageClass = getMessageClass();
  const infoIcon = getInfoIcon();

  return (
    <div className={`ds-info-message d-flex justify-content-start align-items-start mb-4 ${messageClass}`}>
      {infoIcon}
      <div>{message}</div>
    </div>
  );
};

export default InfoMessage;
