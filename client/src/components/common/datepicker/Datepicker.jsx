import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import './index.scss';

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="dc-datepicker">
      <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)}
        placeholderText={"MM/DD/YYYY"}
      />
    </div>
  );
};

export default Datepicker;
