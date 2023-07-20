import React from 'react';
import './index.scss';

const Button = ({
  type, 
  label, 
  handler, 
  display='', 
  theme, 
  tooltip, 
  icon
}) => {
  const classHandler = () => {
    if (display === 'block') return 'dc-btn-fluid';
    else return '';
  };
  return (
    handler ? (
      tooltip ? (
        <button type={type} className={`icon-button p-5 icon-button-${theme}`} data-tooltip={tooltip} onClick={handler}>
          <span className={`dc-icon-${icon}`}></span>
        </button>
      ) : (
        <button type={type} className={`dc-btn ${classHandler()} px-20 py-4 dc-btn-${theme}`} onClick={handler}>{label}</button>
      )
    ) : (
      tooltip ? (
        <button type={type} className={`icon-button p-5 icon-button-${theme}`} data-tooltip={tooltip}>
          <span className={`dc-icon-${icon}`}></span>
        </button>
      ) : (
        <button type={type} className={`dc-btn ${classHandler()} px-20 py-4 dc-btn-${theme}`}>{label}</button>
      )
    )
  );
};

export default Button;
