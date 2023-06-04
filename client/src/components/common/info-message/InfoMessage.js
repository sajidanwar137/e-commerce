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
        return <span className='dc-icon-success'></span>;
      case 'error':
        return <span className='dc-icon-error'></span>;
      case 'info':
        return <span className='dc-icon-info'></span>;
      case 'warning':
        return <span className='dc-icon-warning'></span>;
      default:
        return '';
    }
  };

  const messageClass = getMessageClass();
  const infoIcon = getInfoIcon();

  return (
    <div className={`ds-info-message ${messageClass}`}>
      {infoIcon}
      <div>{message}</div>
    </div>
  );
};

export default InfoMessage;
