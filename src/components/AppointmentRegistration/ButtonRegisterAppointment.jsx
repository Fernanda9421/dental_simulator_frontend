import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { requestPost } from '../../services/requests';
import { numberOfInstallments } from '../../utils/utils';

function ButtonRegisterAppointment() {
  const { newAppointment, setNewAppointment, buttonEnableForRegisterNewAppointment } = useContext(DentalSimulatorContext);
  const navigate = useNavigate();

  const navigateToHome = () => navigate('/');

  const createAppointment = async () => {
    try {
      const { attendanceDate, clientName, treatment, dueDate, installments } = newAppointment;
      const installmentsArray = numberOfInstallments(installments);
      const endpoint = '/appointment';

      await requestPost(endpoint, {
        attendanceDate, clientName, treatment, dueDate, installments: installmentsArray,
      });

      navigateToHome();
      setNewAppointment({
        attendanceDate: new Date(),
        clientName: '',
        treatment: '',
        installments: 1,
        dueDate: new Date(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='button-register'>
      <button
        className='button-report register'
        type='button'
        disabled={ !(buttonEnableForRegisterNewAppointment()) }
        onClick={ () => createAppointment() }
      >
        Cadastrar
      </button>
    </div>
  );
}

export default ButtonRegisterAppointment;
