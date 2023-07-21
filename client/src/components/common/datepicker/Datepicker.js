import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import './index.scss';

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="dc-datepicker__default border" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <div className="dc-datepicker">
      <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default Datepicker;
