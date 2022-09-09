import React from 'react';
import { useContext } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import Select from 'react-select';

function Installment() {
  const { installments, newAppointment, setNewAppointment } = useContext(DentalSimulatorContext);

  const options = () => {
    const newInstallments = [];

    installments.map((installment) => (
      newInstallments.push({ value: installment, label: installment })
    ));
    return newInstallments;
  }

  return (
    <div  className='input-container'>
      <label>
        Número de parcelas<abbr className='required' title='field required'>*</abbr>
      </label>
      <Select
        options={ options() }
        defaultValue={{ value: 1, label: 1 }}
        className='select-treatment input-appointments'
        onChange={ ({ value }) =>  (
          setNewAppointment({ ...newAppointment, installments: value })
        )}
      />
    </div>
  );
}

export default Installment;
