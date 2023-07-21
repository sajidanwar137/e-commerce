import React, { useState } from 'react';
import './index.scss';

const Radio = ({
  label, 
  labelid, 
  name,
  handler,
  checked
}) => {
  return (
    <div className='d-inline-flex justify-content-start align-items-center radio-switch'>
      {handler ? (
        <input name={name} id={labelid} type="radio" checked={checked} onChange={handler}/>
      ) : (
        <input name={name} id={labelid} type="radio" checked={checked}/>
      )}
      {label && <label htmlFor={labelid}>{label}</label>}
    </div>
  );
};

export default Radio;
