import React, { useContext } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DentalSimulatorContext from "../../context/DentalSimulatorContext";
import './dateSelected.css';

function DateSelected() {
  const {
    startDate, setStartDate, endDate, setEndDate,
  } = useContext(DentalSimulatorContext);

  return (
    <div className='date-selected-container'>
      <div className='date-selected-box'>
        <div className='initial-date-box'>
          <span>Data Inicial:</span>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={ startDate }
            onChange={ (date) => setStartDate(date) }
            selectsStart
            startDate={ startDate }
            endDate={ endDate }
          />
        </div>
        <div className='final-date-box'>
          <span>Data final:</span>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={ endDate }
            onChange={ (date) => setEndDate(date) }
            selectsEnd
            startDate={ startDate }
            endDate={ endDate }
            minDate={ startDate }
          />
        </div>
      </div>
    </div>
  );
}

export default DateSelected;
