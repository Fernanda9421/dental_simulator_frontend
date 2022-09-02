import React, { useState } from "react";
import DentalSimulatorContext from "./DentalSimulatorContext";

function DentalSimulatorProvider({ children }) {
  const [payments, setPayments] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const context = {
    payments,
    setPayments,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    appointments,
    setAppointments,
  };

  return (
    <DentalSimulatorContext.Provider value={ context }>
      { children }
    </DentalSimulatorContext.Provider>
  );
}

export default DentalSimulatorProvider;
