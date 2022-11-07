import React, {useState} from "react";

import Login from "./componentes/Login";
import Menu from "./componentes/Menu";
import {BrowserRouter as Router, Switch, Router} from "react-router-dom";
import Reserva from "./componentes/Reserva";

function App() {


  const [conectado, setConectado]=useState(false);

  const acceder =(estado)=> {
    setConectado(estado);
  }


  return (
    conectado ?  <Menu/> : <Login acceder={acceder}/>
           
  );

  <Router>
    <switch>
      <Route path="/Reserva" component={Reserva}></Route>
    </switch>
  </Router>
}

export default App;
