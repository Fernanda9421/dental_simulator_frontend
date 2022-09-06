import React, { useContext, useState, useEffect } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { requestData } from '../../services/requests';
import ButtonAppointment from '../ButtonAppointment/ButtonAppointment';
import Loading from '../Loading/Loading';
import TableAppointment from '../TableAppointment/TableAppointment';

function Appointment() {
  const { setAppointments } = useContext(DentalSimulatorContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const endpoint = '/appointment';
        const allAppointments = await requestData(endpoint);
  
        setAppointments(allAppointments);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getAppointments();
  }, [setAppointments]);

  return (
    <>
      {
        isLoading ? (
          <Loading />
        ) : (
          <div className='appointment-container'>
            <h1 className='title'>Consultas Cadastradas</h1>
            <div>
              <ButtonAppointment />
            </div>
            <div>
              <TableAppointment />
            </div>
          </div>
        )
      }
    </>
  );
}

export default Appointment;
