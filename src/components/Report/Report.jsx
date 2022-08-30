import React from "react";
import ButtonReport from "../ButtonReport/ButtonReport";
import DateSelected from "../DateSelected/DateSelected";

import './report.css';

function Report() {
  return (
    <div className='report-container'>
      <h1 className='title'>Gerar relatório</h1>
      <div className='report-box'>
        <DateSelected />
        <ButtonReport />
      </div>
    </div>
  );
}

export default Report;
