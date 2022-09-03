import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Appointments from './pages/Appointments/Appointments';
import NewAppointment from './pages/NewAppointment/NewAppointment';

function DentalSimulatorRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/appointments' element={ <Appointments /> } />
      <Route path='/new/appointment' element={<NewAppointment />} />
    </Routes>
  );
}

export default DentalSimulatorRoutes;
