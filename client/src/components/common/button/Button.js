import React, { useState } from 'react';
import './index.scss';

const Button = ({type, buttonLabel, buttonHandler, fullwidth=''}) => {
  return (
    <button type="submit" className={`dc-btn ${fullwidth} px-20 py-4 dc-btn-${type}`} onClick={buttonHandler}>{buttonLabel}</button>
  );
};

export default Button;
