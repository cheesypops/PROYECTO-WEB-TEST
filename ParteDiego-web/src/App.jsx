import { useState } from 'react'
import React from 'react'
import './App.css'
import PerfilContainer from "./Components/PerfilContainer/PerfilContainer"
import RequisitosContainer from './Components/RequisitosContainer/RequisitosContainer'
import FechaCitaContainer from './Components/FechaCitaContainer/FechaCitaContainer'
import CrearPerfilContainer from './Components/CrearPerfilContainer/CrearPerfilContainer';
import EditarPerfilContainer from './Components/EditarPerfilContainer/EditarPerfilContainer';
import VistaPrincipalContainer from './Components/VistaPrincipalContainer/VistaPrincipalContainer';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

const persona = {
  name: "Diego José Viana Landaverde",
  dui: "12345678-8",
  sangre: "ORH+",
  genero: "Femenino",
  nacimiento: "07/01/2003",
  telefono: "1234-5677",
  nombreE: "Pepe Toño",
  telefonoE: "8765-4321",
  puntos: 10
}

function App() {

  return (
    <Router>
      <div className='App'>
        <main>
          <Routes>
            <Route path="/perfil" element={<PerfilContainer perfil={persona}/>} />
            <Route path="/requisitos" element={<RequisitosContainer perfil={persona}/>} />
            <Route path="/seleccionar-fecha" element={<FechaCitaContainer/>} />
            <Route path="/crear-perfil" element={<CrearPerfilContainer/>} />
            <Route path="/editar-perfil" element={<EditarPerfilContainer perfil={persona}/>} />
            <Route path="/" element={<VistaPrincipalContainer/>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
