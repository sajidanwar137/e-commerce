import React from 'react';
import './index.scss';

const File = ({ 
  id, 
  label, 
  handler,
  name,
  theme
}) => {

  return (
    <div className={`dc-file dc-file-${theme}`}>
      {label && <label htmlFor={id} className='dc-file__label'>{label}</label>}
      <input 
        className='dc-file__input py-4 pe-4' 
        type="file"
        id={id}
        onChange={handler} 
        name={name} 
        accept=".jpeg,.jpg,.gif,.png,.svg"
      />
    </div>
  );
};

export default File;
