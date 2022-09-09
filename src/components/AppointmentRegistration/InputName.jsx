import React, { useContext } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { isValidName } from '../../utils/inputValidations';

function InputName() {
  const { newAppointment, setNewAppointment } = useContext(DentalSimulatorContext);
  const { clientName } = newAppointment;

  const changeName = ({ target: { value } }) => {
    setNewAppointment({ ...newAppointment, clientName: value });
  }

  return (
    <div className='input-container'>
      <label>
        Nome do cliente<abbr className='required' title='campo obrigatório'>*</abbr>
      </label>
      <input
        type='text'
        className='input-appointments'
        name='name'
        placeholder='Nome completo'
        value={ clientName }
        onChange={ ({ target: { value } }) => changeName({ target: { value } }) }
      />
      {
        (!isValidName(clientName, 10) && clientName.length !== 0) && (
          <div className='error-message'>
            Campo 'Nome do cliente' deve ter no mínimo 10 caracteres
          </div>
        )
      }
    </div>
  );
}

export default InputName;
