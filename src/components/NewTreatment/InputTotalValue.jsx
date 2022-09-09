import React, { useContext } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { isValidTotalPrice } from '../../utils/inputValidations';

function InputTotalValue() {
  const { newTreatment, setNewTreatment } = useContext(DentalSimulatorContext);
  const { totalPrice } = newTreatment;

  const changeValue = ({ target: { value } }) => {
    setNewTreatment({ ...newTreatment, totalPrice: value });
  }

  return (
    <div className='input-container'>
      <label>
        Valor total<abbr className='required' title='field required'>*</abbr>
      </label>
      <input
        type='number'
        className='input-appointments'
        name='totalPrice'
        value={ totalPrice }
        onChange={ ({ target: { value } }) => changeValue({ target: { value } }) }
      />
      {
        (!isValidTotalPrice(totalPrice, 0) && totalPrice !== 0) && (
          <div className='error-message'>
            Campo 'Valor total' deve ser um número maior que 0
          </div>
        )
      }
    </div>
  );
}

export default InputTotalValue;
