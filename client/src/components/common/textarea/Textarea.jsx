import React from 'react';
import './index.scss';

const Textarea = ({  
  labelid, 
  label, 
  handler, 
  placeHolder, 
  name,
  theme,
  rows,
  cols 
}) => {
  const handleInputChange = (e) => {
    handler(e);
    const input = e.target;
    if (input.value.length > 0) input.classList.add('dc-input__input-active')
    else  input.classList.remove('dc-input__input-active')
  };

  return (
    <div className='dc-textarea'>
      {placeHolder ? (
        <div className='dc-textarea__col'>
          <textarea 
            rows={rows} 
            cols={cols}
            autoComplete='off' 
            className='dc-textarea__textarea px-5 py-5 border radius-3' 
            name={name}
            id={labelid} 
            placeholder={placeHolder}>
          </textarea>
        </div>
      ) : (
        <div className='dc-textarea__col'>
          <textarea 
            rows={rows} 
            cols={cols}
            autoComplete='off' 
            className='dc-textarea__textarea px-5 py-5 border radius-3' 
            name={name}
            id={labelid}
          >
          {label && <label className='dc-input__label' htmlFor={labelid}>{label}</label>}
          </textarea>
        </div>
      )}
    </div>
  );
};

export default Textarea;
