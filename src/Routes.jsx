import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Clients from './pages/Clients/Clients';

function DentalSimulatorRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/clients' element={ <Clients /> } />
    </Routes>
  );
}

export default DentalSimulatorRoutes;
