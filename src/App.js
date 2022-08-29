import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './pages/Calculator/Calculator';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/calculator' component={ Calculator } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
