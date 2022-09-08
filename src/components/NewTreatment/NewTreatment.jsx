import React from 'react';
import InputTotalValue from './InputTotalValue';
import InputTreatment from './InputTreatment';

import './newTreatment.css';

function NewTreatment() {
  return (
    <div className='new-treatment-container'>
      <legend>Cadastrar novo tratamento</legend>
      <InputTreatment />
      <InputTotalValue />
    </div>
  );
}

export default NewTreatment;
