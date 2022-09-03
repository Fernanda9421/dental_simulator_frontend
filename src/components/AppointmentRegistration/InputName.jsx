import React, { useContext } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';

function InputName() {
  const { newAppointment, setNewAppointment } = useContext(DentalSimulatorContext);

  const changeName = ({ target: { value } }) => {
    setNewAppointment({ ...newAppointment, clientName: value });
  }

  return (
    <div className='input-container'>
      <label>Nome do cliente</label>
      <input
        type="text"
        className='input-appointments'
        name='name'
        placeholder='Nome completo'
        value={ newAppointment.clientName }
        onChange={ ({ target: { value } }) => changeName({ target: { value } }) }
      />
    </div>
  );
}

export default InputName;
