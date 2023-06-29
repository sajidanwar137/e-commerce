import React, { useState } from 'react';
import './index.scss';

const Button = ({type, buttonLabel, buttonHandler, fullwidth=''}) => {
  const getButtonClass = () => {
    switch (type) {
      case 'primary':
        return 'dc-btn-primary';
      case 'secondary':
        return 'dc-btn-secondary';
      case 'success':
        return 'dc-btn-success';
      case 'danger':
        return 'dc-btn-danger';
      case 'warning':
          return 'dc-btn-warning';
      default:
        return '';
    }
  };
  const buttonClass = getButtonClass();
  return (
    <button type="submit" className={`dc-btn ${fullwidth} px-20 py-4 ${buttonClass}`} onClick={buttonHandler}>{buttonLabel}</button>
  );
};

export default Button;
