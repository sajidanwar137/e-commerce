import React from 'react';
import Select from 'react-select'
import './index.scss';

const AutoSelect = ({data, labeltext,labelstatus, inputref, classprefix, inputId, placeholder, inputchange, inputfocus}) => {
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]

  return (
    <div className={classprefix}>
      {labelstatus && (<label className={`${classprefix}__label`} htmlFor={inputId}>{labeltext}</label>)}
      <Select 
        options={data} 
        unstyled
        className={`${classprefix}-container`}
        classNamePrefix={classprefix}
        inputId={inputId}
        placeholder={placeholder}
        onChange={inputchange}
        onFocus={inputfocus}
        ref={inputref}
      />
    </div>
  );
};

export default AutoSelect;
