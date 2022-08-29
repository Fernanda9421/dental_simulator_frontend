import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Calculator from './pages/Calculator/Calculator';

function DentalSimulatorRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/calculator' element={ <Calculator /> } />
    </Routes>
  );
}

export default DentalSimulatorRoutes;
