import React  from 'react';
import './index.scss';

const IconButton = ({ type, theme, tooltip,  buttonHandler}) => {
  return (
    <button className={`icon-button p-4 icon-button-${theme}`} data-tooltip={tooltip} onClick={buttonHandler}>
      <span className={`dc-icon-${type}`}></span>
    </button>
  );
};

export default IconButton;
