
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componant/MasterHome/Home/Home';
import Payment from './Componant/PaymentSystem/Payment/Payment';
import Shapmint from './Componant/Shipment/Shapmint';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/shipment'>
          <Shapmint></Shapmint>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
