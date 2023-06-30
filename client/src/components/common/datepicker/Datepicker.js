import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/src/stylesheets/datepicker.scss";
import './index.scss';

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default Datepicker;
