import React from 'react';
import './index.scss';

const Checkbox = ({
  label, 
  labelid, 
  name, 
  toggleSwitch, 
  handler,
  ON='On',
  OFF='Off',
  checked
}) => {
  return (
    toggleSwitch && toggleSwitch === 'true' ? (
      <div className='d-inline-flex justify-content-start align-items-center checkbox-switch'>
        <label className="checkbox-switch__label d-inline-flex">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={handler}
                id={labelid}
                className='checkbox-switch__checkbox'
            />
            <span className="checkbox-switch__slider" data-off={OFF} data-on={ON}></span>
        </label>
        {label && <label htmlFor={labelid}>{label}</label>}
      </div>
    ) : (
      <div className='d-inline-flex justify-content-start align-items-center checkbox-default'>
        <input name={name} id={labelid} type="checkbox" onChange={handler}/>
        {label && <label htmlFor={labelid}>{label}</label>}
      </div>
    )
  );
};

export default Checkbox;
