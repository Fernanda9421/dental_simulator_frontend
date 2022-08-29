import React, { useState } from "react";
import DentalSimulatorContext from "./DentalSimulatorContext";

function DentalSimulatorProvider({ children }) {
  const [payments, setPayments] = useState([]);

  const context = {
    payments,
    setPayments,
  };

  return (
    <DentalSimulatorContext.Provider value={ context }>
      { children }
    </DentalSimulatorContext.Provider>
  );
}

export default DentalSimulatorProvider;
