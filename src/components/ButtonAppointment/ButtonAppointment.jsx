import React from 'react';
import { useNavigate } from 'react-router-dom';

import './buttonAppointment.css';

function ButtonAppointment() {
  const navigate = useNavigate();

  const navigateToNewAppointment = () => navigate('/new/appointment');

  return (
    <div className='button-appointment-box'>
      <button
        className='button-report'
        type='button'
        onClick={ () => navigateToNewAppointment() }
      >
        Cadastrar consulta
      </button>
    </div>
  );
}

export default ButtonAppointment;
