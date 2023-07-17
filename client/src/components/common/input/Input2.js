import React from 'react';
import './index.scss';

const Input = ({ 
  labelPosition,
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
      {labelPosition ? (
        labelPosition === 'top' ? (
          <div className='d-flex flex-column'>
            {label && <label className='dc-input__column-label mb-3 fw-500' htmlFor={labelid}>{label}</label>}
            {theme === 'primary' ? (
              <div className='dc-form__col'>
                <input 
                  autoComplete='off' 
                  className='dc-input__col-input px-5 py-5 border radius-3' 
                  name={name} 
                  type={type} 
                  id={labelid} 
                  placeholder={placeHolder}
                  onChange={handler} 
                />
              </div>
            ) : (
              <div className='dc-form__col'>
                <input 
                  autoComplete='off' 
                  className='dc-input__col-input pe-5 py-5 border-b border-t-0 border-s-0 border-e-0' 
                  name={name} 
                  type={type} 
                  id={labelid} 
                  placeholder={placeHolder}
                  onChange={handler} 
                />
              </div>
            )}
          </div>
        ) : (
          <div className='d-flex align-items-center'>
            {label && <label className='dc-input__column-label me-5 fw-500' htmlFor={labelid}>{label}</label>}
            {theme === 'primary' ? (
              <div className='dc-form__col flex-grow-1'>
                <input 
                  autoComplete='off' 
                  className='dc-input__col-input px-5 py-5 border radius-3' 
                  name={name} 
                  type={type} 
                  id={labelid} 
                  placeholder={placeHolder}
                  onChange={handler} 
                />
              </div>
            ) : (
              <div className='dc-form__col flex-grow-1'>
                <input 
                  autoComplete='off' 
                  className='dc-input__col-input pe-5 py-5 border-b border-t-0 border-s-0 border-e-0' 
                  name={name} 
                  type={type} 
                  id={labelid} 
                  placeholder={placeHolder}
                  onChange={handler} 
                />
              </div>
            )}
          </div>
        )
      ) : (
        theme === 'primary' ? (
          <div className='dc-form__col'>
            <div className='dc-form__input'>
              <input 
                autoComplete='off' 
                className='dc-input__input p-5' 
                name={name} 
                type={type} 
                id={labelid} 
                onChange={handleInputChange} 
              />
              {placeHolder && <label className='dc-input__label' htmlFor={labelid}>{placeHolder}</label>}
            </div>
          </div>
        ) : (
          <div className='dc-form__col'>
            <div className='dc-form__input'>
              <input 
                autoComplete='off' 
                className='dc-input__input p-5' 
                name={name} 
                type={type} 
                id={labelid} 
                onChange={handleInputChange} 
              />
              {placeHolder && <label className='dc-input__label' htmlFor={labelid}>{placeHolder}</label>}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Input;
