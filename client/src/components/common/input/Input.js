import React from 'react';
import './index.scss';

const Input = ({ 
  type, 
  labelid, 
  label, 
  update, 
  placeholder, 
  name 
}) => {
  const handleInputChange = (e) => {
    update(e);
    const input = e.target;
    if (input.value.length > 0) input.classList.add('dc-input__input-active')
    else  input.classList.remove('dc-input__input-active')
  };

  return (
    <div className='dc-input'>
      {label ? <input autoComplete='off' className='dc-input__input pt-7 pb-3 pe-6 ps-0' name={name} type={type} id={labelid} onChange={handleInputChange} /> : <input autoComplete='off' className='dc-input__input pt-7 pb-3 pe-6 ps-0' name={name} type={type} id={labelid} placeholder={placeholder} onChange={handleInputChange} />}
      <span className='dc-input__bottom-line'></span>
      {label && <label className='dc-input__label' htmlFor={labelid}>{label}</label>}
    </div>
  );
};

export default Input;
