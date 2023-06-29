import React, { useState } from 'react';
import './index.scss';

const Radio = ({label, labelid, name}) => {
  return (
    <div className='d-inline-flex justify-content-start align-items-center radio-switch'>
        <input name={name} id={labelid} type="radio"/>
        <label htmlFor={labelid}>{label}</label>
    </div>
  );
};

export default Radio;
