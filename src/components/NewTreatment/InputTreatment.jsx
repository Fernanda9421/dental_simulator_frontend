import React, { useContext } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { isValidName } from '../../utils/inputValidations';

function InputTreatment() {
  const { newTreatment, setNewTreatment } = useContext(DentalSimulatorContext);
  const { name } = newTreatment;

  const changeName = ({ target: { value } }) => {
    setNewTreatment({ ...newTreatment, name: value });
  }

  return (
    <div className='input-container'>
      <label>
        Tratamento<abbr className='required' title='field required'>*</abbr>
      </label>
      <input
        type='text'
        className='input-appointments'
        name='name'
        placeholder='Nome do tratamento'
        value={ name }
        onChange={ ({ target: { value } }) => changeName({ target: { value } }) }
      />
      {
        (!isValidName(name, 3) && name.length !== 0) && (
          <div className='error-message'>
            Campo 'Tratamento' deve ter no mínimo 3 caracteres
          </div>
        )
      }
    </div>
  );
}

export default InputTreatment;
