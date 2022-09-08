import React, { useEffect } from 'react';
import { useContext } from 'react';
import Select from 'react-select';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { requestData } from '../../services/requests';
import NewTreatment from '../NewTreatment/NewTreatment';

function Treatment() {
  const {
    treatments, setTreatments, newAppointment, setNewAppointment,
  } = useContext(DentalSimulatorContext);

  useEffect(() => {
    const getTreatments = async () => {
      try {
        const endpoint = '/treatment';
        const allTreatments = await requestData(endpoint);
  
        setTreatments(allTreatments);
      } catch (error) {
        console.log(error);
      }
    }

    getTreatments();
  }, [setTreatments]);

  const options = () => {
    const newTreatments = [{ value: 'Outro', label: 'Outro' }];

    treatments.map(({ name }) => (
      newTreatments.unshift({ value: name, label: name })
    ));

    return newTreatments;
  }

  const registerNewTreatment = () => {
    if (newAppointment.treatment === 'Outro') {
      return (
        <NewTreatment />
      )
    }
  }

  return (
    <div  className='input-container'>
      <label>Tratamento</label>
      <Select
        options={ options() }
        className='select-treatment input-appointments'
        onChange={ ({ value }) =>  (
          setNewAppointment({ ...newAppointment, treatment: value })
        )}
      />
      { registerNewTreatment() }
    </div>
  );
}

export default Treatment;
