import React, { useContext } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { convertDate } from '../../utils/utils';

function TableAppointment() {
  const { appointments } = useContext(DentalSimulatorContext);

  return (
    <div className='table-container'>
      <table id='table'>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Data do atendimento</th>
            <th>Tratamento</th>
            <th>Valor total</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(({ id, attendanceDate, treatments, clients }) => (
            <tr key={id}>
              <td>{clients.fullName}</td>
              <td>{convertDate(attendanceDate)}</td>
              <td>{treatments.name}</td>
              <td>R$ {treatments.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableAppointment;
