import './App.css';
import DentalSimulatorProvider from './context/DentalSimulatorProvider';
import DentalSimulatorRoutes from './Routes';

function App() {
  return (
    <DentalSimulatorProvider>
      <DentalSimulatorRoutes />
    </DentalSimulatorProvider>
  );
}

export default App;
