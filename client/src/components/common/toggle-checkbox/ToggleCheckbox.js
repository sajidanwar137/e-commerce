import React, { useState } from 'react';
import './index.scss';

const ToggleCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    //console.log("object", e.target.checked)
    setIsChecked(!isChecked);
  };

  return (
    <div className='d-inline-flex justify-content-start align-items-center checkbox-switch'>
        <label className="checkbox-switch__label d-inline-flex">
            <input
                type="checkbox"
                name='checkbox'
                checked={isChecked}
                onChange={handleCheckboxChange}
                className='checkbox-switch__checkbox'
            />
            <span className="checkbox-switch__slider" data-off="Off" data-on="On"></span>
        </label>
        <span className='checkbox-switch__checkbox-text'>{isChecked ? 'Enable' : 'Disable'}</span>
    </div>
  );
};

export default ToggleCheckbox;
