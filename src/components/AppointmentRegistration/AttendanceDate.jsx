import React, { useContext } from 'react';
import DatePicker from "react-datepicker";
import DentalSimulatorContext from '../../context/DentalSimulatorContext';

function AttendanceDate() {
  const { newAppointment, setNewAppointment } = useContext(DentalSimulatorContext);

  return (
    <div className='input-container div-date'>
      <label>Data do atendimento</label>
      <DatePicker
        dateFormat='dd/MM/yyyy'
        className='input-date'
        selected={newAppointment.attendanceDate}
        onChange={ (date) => {
          setNewAppointment({ ...newAppointment, attendanceDate: date })
        }}
      />
    </div>
  );
}

export default AttendanceDate;
