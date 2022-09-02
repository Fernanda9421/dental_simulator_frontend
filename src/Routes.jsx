import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Appointments from './pages/Appointments/Appointments';

function DentalSimulatorRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/appointments' element={ <Appointments /> } />
    </Routes>
  );
}

export default DentalSimulatorRoutes;
