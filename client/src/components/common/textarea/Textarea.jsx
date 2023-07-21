import React from 'react';
import './index.scss';

const Textarea = ({  
  labelid, 
  label, 
  handler, 
  placeHolder, 
  name,
  rows,
  cols 
}) => {
  const handleInputChange = (e) => {
    handler(e);
    const input = e.target;
    if (input.value.length > 0) input.classList.add('dc-textarea__textarea-active')
    else  input.classList.remove('dc-textarea__textarea-active')
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
            onChange={handleInputChange} 
          >
          </textarea>
          {label && <label className='dc-textarea__label' htmlFor={labelid}>{label}</label>}
        </div>
      )}
    </div>
  );
};

export default Textarea;
