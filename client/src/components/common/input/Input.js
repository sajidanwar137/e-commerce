import React from 'react';
import './index.scss';

const Input = ({ 
  type, 
  labelid, 
  label, 
  handler, 
  placeHolder, 
  name,
  theme 
}) => {
  const handleInputChange = (e) => {
    handler(e);
    const input = e.target;
    if (input.value.length > 0) input.classList.add('dc-input__input-active')
    else  input.classList.remove('dc-input__input-active')
  };

  return (
    <div className='dc-input'>
      {placeHolder ? (
        theme === 'border' ? (
          <div className='dc-input__col'>
            <input 
              autoComplete='off' 
              className='dc-input__input px-5 py-5 border radius-3' 
              name={name} 
              type={type} 
              id={labelid} 
              placeholder={placeHolder}
              onChange={handler} 
            />
          </div>
        ) : (
          <div className='dc-input__col'>
            <input 
              autoComplete='off' 
              className='dc-input__input pe-5 py-5 border-b border-t-0 border-s-0 border-e-0 radius-0' 
              name={name} 
              type={type} 
              id={labelid} 
              placeholder={placeHolder}
              onChange={handler} 
            />
          </div>
        )
      ) : (
        theme === 'border' ? (
          <div className='dc-input__col'>
            <input 
              autoComplete='off' 
              className='dc-input__input px-5 py-5 border radius-3' 
              name={name} 
              type={type} 
              id={labelid}
              onChange={handleInputChange} 
            />
            {label && <label className='dc-input__label' htmlFor={labelid}>{label}</label>}
          </div>
        ) : (
          <div className='dc-input__col'>
            <input 
              autoComplete='off' 
              className='dc-input__input pe-5 py-5 border-b border-t-0 border-s-0 border-e-0 radius-0' 
              name={name} 
              type={type} 
              id={labelid}
              onChange={handleInputChange} 
            />
            <span className='dc-input__bottom-line'></span>
            {label && <label className='dc-input__label label-0' htmlFor={labelid}>{label}</label>}
          </div>
        )
      )}
    </div>
  );
};

export default Input;
