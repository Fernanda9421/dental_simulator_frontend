import React, { useState } from 'react';
import { isValidName, isValidTreatment, isValidTotalPrice } from '../utils/inputValidations';
import DentalSimulatorContext from './DentalSimulatorContext';

function DentalSimulatorProvider({ children }) {
  const [payments, setPayments] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    attendanceDate: new Date(),
    clientName: '',
    treatment: '',
    installments: 1,
    dueDate: new Date(),
  });
  const [treatments, setTreatments] = useState([]);
  const [newTreatment, setNewTreatment] = useState({
    name: '',
    totalPrice: 0,
  });
  const [installments, setInstallments] = useState(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  );
  const [error, setError] = useState('');

  const buttonEnableForRegisterNewAppointment = () => {
    const { clientName, treatment } = newAppointment;
    const { name, totalPrice } = newTreatment;

    const isValidClient = isValidName(clientName);
    const isValidTreatmentName = isValidTreatment(treatment);
    const isValidNewTreatment = isValidTreatment(name);
    const isValidPrice = isValidTotalPrice(totalPrice);

    if (treatment === 'Outro') {
      return (
        isValidClient && isValidTreatmentName && isValidNewTreatment && isValidPrice
      );
    }
    
    return isValidClient && isValidTreatmentName;
  };

  const context = {
    payments,
    setPayments,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    appointments,
    setAppointments,
    newAppointment,
    setNewAppointment,
    treatments,
    setTreatments,
    newTreatment,
    setNewTreatment,
    installments,
    setInstallments,
    buttonEnableForRegisterNewAppointment,
    error,
    setError,
  };

  return (
    <DentalSimulatorContext.Provider value={ context }>
      { children }
    </DentalSimulatorContext.Provider>
  );
}

export default DentalSimulatorProvider;
