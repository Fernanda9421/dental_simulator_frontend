import React, { useContext } from 'react';
import ButtonReport from '../ButtonReport/ButtonReport';
import DateSelected from '../DateSelected/DateSelected';
import TableReport from '../TableReport/TableReport';
import { numberOfResults, totalValue } from '../../utils/utils';

import './report.css';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';

function Report() {
  const { payments } = useContext(DentalSimulatorContext);

  return (
    <div className='report-container'>
      <h1 className='title'>Gerar relatório</h1>
      <div className='report-box'>
        <DateSelected />
        <ButtonReport />
      </div>
      <div className='result'>
        <div className='total-box'>
          <span className='span-result'>Resultados:</span>
          <span className='result-value'>{ numberOfResults(payments) }</span>
        </div>
        <div className='total-box'>
          <span className='span-result'>Total à receber:</span>
          <span className='result-value'>R$ { totalValue(payments) }</span>
        </div>
      </div>
      <div>
        <TableReport />
      </div>
    </div>
  );
}

export default Report;
