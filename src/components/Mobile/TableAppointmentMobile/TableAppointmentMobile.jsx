import React, { useContext } from 'react';
import DentalSimulatorContext from '../../../context/DentalSimulatorContext';
import { convertDate } from '../../../utils/utils';

import '../tableMobile.css';

function TableAppointmentMobile() {
  const { appointments } = useContext(DentalSimulatorContext);

  return (
    appointments && (
      <div className='table-container-mobile'>
        <div className='table-container-box'>
          {
            appointments.map(({ id, attendanceDate, treatments, clients }) => (
              <div className='table-card' key={id}>
                <div className='first-line-card'>
                  <span className='name'>{clients.fullName}</span>
                  <span>R$ {treatments.totalPrice}</span>
                </div>
                <div className='second-line-card'>
                  <span>{treatments.name}</span>
                  <span>{convertDate(attendanceDate)}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  );
}

export default TableAppointmentMobile;
