import React from 'react';
import Select from 'react-select'
import './index.scss';

const ReactSelect = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <Select 
      options={options} 
      className="react-select-container"
      classNamePrefix="react-select"
    />
  );
};

export default ReactSelect;
