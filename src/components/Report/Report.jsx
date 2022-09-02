import React, { useContext, useState, useEffect } from "react";
import ButtonReport from "../ButtonReport/ButtonReport";
import DateSelected from "../DateSelected/DateSelected";
import TableReport from "../TableReport/TableReport";
import Loading from "../Loading/Loading";
import { numberOfResults, totalValue } from "../../utils/utils";
import { requestData } from "../../services/requests";
import DentalSimulatorContext from "../../context/DentalSimulatorContext";

import "./report.css";

function Report() {
  const { payments, setPayments } = useContext(DentalSimulatorContext);
  const [isLoading, setIsLoading] = useState(true);

  const getPayments = async () => {
    try {
      const endpoint = "/payment";
      const paymentsApi = await requestData(endpoint);

      setPayments(paymentsApi);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {
        isLoading ? (
          <Loading />
        ) : (
          <div className="report-container">
            <h1 className="title">Gerar relatório</h1>
            <div className="report-box">
              <DateSelected />
              <ButtonReport />
            </div>
            <div className="result">
              <div className="total-box">
                <span className="span-result">Resultados:</span>
                <span className="result-value">{numberOfResults(payments)}</span>
              </div>
              <div className="total-box">
                <span className="span-result">Total à receber:</span>
                <span className="result-value">R$ {totalValue(payments)}</span>
              </div>
            </div>
            <div>
              <TableReport />
            </div>
          </div>
        )
      }
    </>
  );
}

export default Report;
