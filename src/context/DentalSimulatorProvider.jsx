import React from "react";
import DentalSimulatorContext from "./DentalSimulatorContext";

function DentalSimulatorProvider({ children }) {
  const context = {};

  return (
    <DentalSimulatorContext.Provider value={ context }>
      { children }
    </DentalSimulatorContext.Provider>
  );
}

export default DentalSimulatorProvider;
