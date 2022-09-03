import React from 'react';
import AttendanceDate from './AttendanceDate';
import InputName from './InputName';
import Treatment from './Treatment';

import './appointmentRegistration.css';
import Installment from './Installment';
import DueDate from './DueDate';
import ButtonRegisterAppointment from './ButtonRegisterAppointment';

function AppointmentRegistration() {
  return (
    <form className='form-container'>
      <div>
        <div>
          <h1 className="title">Cadastrar nova consulta</h1>
        </div>
        <div className='inputs-container'>
          <div className='input-box'>
            <InputName />
          </div>
          <div className='input-box'>
            <Treatment />
          </div>
          <div className='input-box'>
            <Installment />
          </div>
          <div className='date-container input-box'>
            <AttendanceDate />
            <DueDate />
          </div>
          <div>
            <ButtonRegisterAppointment />
          </div>
        </div>
      </div>
    </form>
  );
}

export default AppointmentRegistration;
