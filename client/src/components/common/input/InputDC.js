import React from 'react';
import './index.scss';

const InputDC = ({ type, labelid, label, update }) => {
  const handleInputChange = (e) => {
    update(e);
    const input = e.target;
    if (input.value.length > 0) input.classList.add('dc-input__input-active')
    else  input.classList.remove('dc-input__input-active')
  };

  return (
    <div className='dc-input'>
      <input className='dc-input__input py-5 pe-6 ps-0' type={type} id={labelid} onChange={handleInputChange} />
      <span className='dc-input__bottom-line'></span>
      <label className='dc-input__label' htmlFor={labelid}>{label}</label>
    </div>
  );
};

export default InputDC;
