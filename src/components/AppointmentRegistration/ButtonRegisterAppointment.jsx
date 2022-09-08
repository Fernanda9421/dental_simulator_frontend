import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DentalSimulatorContext from '../../context/DentalSimulatorContext';
import { requestPost } from '../../services/requests';
import { numberOfInstallments } from '../../utils/utils';

function ButtonRegisterAppointment() {
  const {
    newAppointment,
    setNewAppointment,
    buttonEnableForRegisterNewAppointment,
    newTreatment,
    setNewTreatment,
    error,
    setError,
  } = useContext(DentalSimulatorContext);

  const navigate = useNavigate();

  const navigateToHome = () => navigate('/');

  const clearInputs = () => {
    setNewAppointment({
      attendanceDate: new Date(),
      clientName: '',
      treatment: '',
      installments: 1,
      dueDate: new Date(),
    });

    setNewTreatment({
      name: '',
      totalPrice: 0
    });
  }

  const createAppointment = async () => {
    try {
      const { attendanceDate, clientName, treatment, dueDate, installments } = newAppointment;
      const { name, totalPrice } = newTreatment;
      const installmentsArray = numberOfInstallments(installments);
      const endpoint = '/appointment';

      if (name.length !== 0 && totalPrice !== 0) {
        const endpointNewTreatment = '/treatment/register';

        await requestPost(endpointNewTreatment, {
          name, totalPrice,
        });

        await requestPost(endpoint, {
          attendanceDate, clientName, treatment: name, dueDate, installments: installmentsArray,
        });

        navigateToHome();
        clearInputs();
        setError('');
      } else {
        await requestPost(endpoint, {
          attendanceDate, clientName, treatment, dueDate, installments: installmentsArray,
        });
  
        navigateToHome();
        clearInputs();
        setError('');
      }
    } catch (error) {
      setError(error.response.data.message);
      clearInputs();
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
      <span className='span-error'>
        { error }
      </span>
    </div>
  );
}

export default ButtonRegisterAppointment;
