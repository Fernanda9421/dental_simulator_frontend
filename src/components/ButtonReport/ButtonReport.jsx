import React, { useContext } from "react";
import DentalSimulatorContext from "../../context/DentalSimulatorContext";
import { requestPost } from "../../services/requests";

import './buttonReport.css';

function ButtonReport() {
  const {
    startDate, endDate, setPayments,
  } = useContext(DentalSimulatorContext);

  const getPayments = async () => {
    try {
      const endpoint = '/payment';
      const payments = await requestPost(endpoint, { startDate, endDate });

      setPayments(payments);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <button
      className='button-report'
      type='button'
      onClick={ () => getPayments() }
    >
      Gerar relatório
    </button>
  );
}

export default ButtonReport;
