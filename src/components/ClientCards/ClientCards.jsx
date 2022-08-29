import React, { useContext, useEffect } from "react";
import DentalSimulatorContext from "../../context/DentalSimulatorContext";
import { convertDueDate } from "../../utils/convertDueDate";
import { requestData } from "../../services/requests";

import './clientCards.css';

function ClientCards() {
  const { payments, setPayments } = useContext(DentalSimulatorContext);

  const getPayments = async () => {
    try {
       const endpoint = '/payment';
      const paymentsApi = await requestData(endpoint);
      
      setPayments(paymentsApi);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPayments();
  }, []);

  return (
    <div className='payment-cards-container'>
      <h1 className='title'>Lista de clientes</h1>
      <div className='payment-cards-div'>
        {
          payments.map(({ id, attendances, installmentValue, dueDate }) => (
            <div key={ id } className='payment-card'>
              <p className='client-name'>
                { attendances.clients.fullName }
              </p>
              <p className='treatment-name'>
                <strong>Tratamento:</strong> { attendances.treatments.name }
              </p>
              <p className='installment-value'>
                <strong>Valor da parcela:</strong> R$ { installmentValue }
              </p>
              <p className='due-date'>
                <strong>Vencimento:</strong> { convertDueDate(dueDate) }
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ClientCards;
