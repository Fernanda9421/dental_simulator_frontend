import React, { useContext } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';

function InputTreatment() {
  const { newTreatment, setNewTreatment } = useContext(DentalSimulatorContext);

  const changeName = ({ target: { value } }) => {
    setNewTreatment({ ...newTreatment, name: value });
  }

  return (
    <div className='input-container'>
      <label>Tratamento</label>
      <input
        type='text'
        className='input-appointments'
        name='name'
        placeholder='Nome do tratamento'
        value={ newTreatment.name }
        onChange={ ({ target: { value } }) => changeName({ target: { value } }) }
      />
    </div>
  );
}

export default InputTreatment;
