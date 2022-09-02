import React, { useContext, useState, useEffect } from 'react';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { requestData } from '../../services/requests';
import Loading from '../Loading/Loading';
import TableAppointment from '../TableAppointment/TableAppointment';

function Appointment() {
  const { setAppointments } = useContext(DentalSimulatorContext);
  const [isLoading, setIsLoading] = useState(true);

  const getAppointments = async () => {
    try {
      const endpoint = "/appointment";
      const allAppointments = await requestData(endpoint);

      setAppointments(allAppointments);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {
        isLoading ? (
          <Loading />
        ) : (
          <div className="appointment-container">
            <h1 className="title">Consultas Cadastradas</h1>
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
