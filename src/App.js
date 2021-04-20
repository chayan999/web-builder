
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Componant/MasterHome/Home/Home';
import Shapmint from './Componant/Shipment/Shapmint';
import DashBord from './Componant/DashBord/DashBord';
import AddService from './Componant/AddService/AddService';
import { createContext, useState } from 'react';
import Login from './Componant/Login/Login/Login';
import PrivateRoute from './Componant/Login/PrivateRoute/PrivateRoute'
import AllData from './Componant/AllServices/AllData';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/shipment'>
            <Shapmint></Shapmint>
          </PrivateRoute>

          <PrivateRoute path='/dashbord'>
            <DashBord></DashBord>
          </PrivateRoute>


          <Route path="/addServices">
            <AddService></AddService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path='/allData'>
            <AllData></AllData>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
