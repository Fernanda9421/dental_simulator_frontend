import React, { useState } from "react";
import DentalSimulatorContext from "./DentalSimulatorContext";

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
  const [installments, setInstallments] = useState(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  );

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
    installments,
    setInstallments,
  };

  return (
    <DentalSimulatorContext.Provider value={ context }>
      { children }
    </DentalSimulatorContext.Provider>
  );
}

export default DentalSimulatorProvider;
