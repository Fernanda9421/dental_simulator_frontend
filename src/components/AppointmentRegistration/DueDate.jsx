import React, { useContext } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import DatePicker from "react-datepicker";

function DueDate() {
  const { newAppointment, setNewAppointment } = useContext(DentalSimulatorContext);
  const { dueDate } = newAppointment;

  return (
    <div className='input-container div-date'>
      <label>
        Data de vencimento<abbr className='required' title='field required'>*</abbr>
      </label>
      <DatePicker
        className='input-date'
        dateFormat='dd/MM/yyyy'
        selected={dueDate}
        onChange={ (date) => {
          setNewAppointment({ ...newAppointment, dueDate: date })
        }}
      />
    </div>
  );
}

export default DueDate;
