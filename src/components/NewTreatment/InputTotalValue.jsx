import React, { useContext } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';

function InputTotalValue() {
  const { newTreatment, setNewTreatment } = useContext(DentalSimulatorContext);

  const changeValue = ({ target: { value } }) => {
    setNewTreatment({ ...newTreatment, totalPrice: value });
  }

  return (
    <div className='input-container'>
      <label>Valor total</label>
      <input
        type='number'
        className='input-appointments'
        name='totalPrice'
        value={ newTreatment.totalPrice }
        onChange={ ({ target: { value } }) => changeValue({ target: { value } }) }
      />
    </div>
  );
}

export default InputTotalValue;
