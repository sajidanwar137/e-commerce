import React, { useState } from 'react';
import './index.scss';

const ToggleCheckbox = ({status = false, ToggleHandler}) => {

  return (
    <div className='d-inline-flex justify-content-start align-items-center checkbox-switch'>
        <label className="checkbox-switch__label d-inline-flex">
            <input
                type="checkbox"
                name='checkbox'
                checked={status}
                onChange={ToggleHandler}
                className='checkbox-switch__checkbox'
            />
            <span className="checkbox-switch__slider" data-off="Off" data-on="On"></span>
        </label>
    </div>
  );
};

export default ToggleCheckbox;
