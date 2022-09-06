import React, { useEffect } from 'react';
import { useContext } from 'react';
import Select from 'react-select';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { requestData } from '../../services/requests';

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
    const newTreatments = [];

    treatments.map(({ name }) => (
      newTreatments.push({ value: name, label: name })
    ));
    return newTreatments;
  }

  return (
    <div className='input-container'>
      <label>Tratamento</label>
      <Select
        options={ options() }
        className='select-treatment input-appointments'
        onChange={ ({ value }) =>  (
          setNewAppointment({ ...newAppointment, treatment: value })
        )}
      />
    </div>
  );
}

export default Treatment;
