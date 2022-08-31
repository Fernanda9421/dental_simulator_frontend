import React, { useContext } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { convertDueDate } from '../../utils/utils';

import './tableReport.css';

function TableReport() {
  const { payments } = useContext(DentalSimulatorContext);

  return (
    <div className='table-container'>
      <table id='table'>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Valor da parcela</th>
            <th>Data de vencimento</th>
          </tr>
        </thead>
        <tbody>
          {
            payments.map(({ id, attendances, installmentValue, dueDate }) => (
              <tr key={ id }>
                <td>{ attendances.clients.fullName }</td>
                <td>R$ { installmentValue }</td>
                <td>{ convertDueDate(dueDate) }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default TableReport;
