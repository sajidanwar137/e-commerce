import React, { useState } from 'react';
import './index.scss';

const Checkbox = ({label, labelid, name}) => {
  return (
    <div className='d-inline-flex justify-content-start align-items-center checkbox-default'>
        <input name={name} id={labelid} type="checkbox"/>
        <label htmlFor={labelid}>{label}</label>
    </div>
  );
};

export default Checkbox;
