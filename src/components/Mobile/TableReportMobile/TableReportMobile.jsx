import React, { useContext } from 'react';
import DentalSimulatorContext from '../../../context/DentalSimulatorContext';
import { convertDate } from '../../../utils/utils';

import '../tableMobile.css';

function TableReportMobile() {
  const { payments } = useContext(DentalSimulatorContext);

  return (
    payments && (
      <div className='table-container-mobile'>
        <div className='table-container-box'>
          {
            payments.map(({ id, attendances, installmentValue, dueDate }) => (
              <div className='table-card' key={id}>
                <div className='first-line-card'>
                  <span className='name'>{ attendances.clients.fullName }</span>
                  <span>R$ { installmentValue }</span>
                </div>
                <div className='second-line-card'>
                  <span>{ convertDate(dueDate) }</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  );
}

export default TableReportMobile;
