
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
          <Route path='/shipment'>
            <Shapmint></Shapmint>
          </Route>

          <PrivateRoute path='/dashbord'>
            <DashBord></DashBord>
          </PrivateRoute>


          <Route path="/addServices">
            <AddService></AddService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
