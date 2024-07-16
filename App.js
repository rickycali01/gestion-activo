import React, { useState } from 'react';
import './App.css';
import { IniciarSesion } from './pages/login';
import { PaginaPrincipal } from './pages/principal';
import { RegistroUsuario } from './pages/registro';
import { PerfilUsuario } from './pages/perfil';
import { Mantenimiento } from './pages/mantenimiento';
import { ActivosFijosMobiliarios } from './pages/mobilario';
import { ActivosFijosTecnologicos } from './pages/tecnologia';
import { ActivosFijosTransporte } from './pages/transporte';
import { MostrarActivosFijos } from './pages/inventario';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const components = {
    login: <IniciarSesion onFormSwitch={toggleForm} />,
    inicio: <PaginaPrincipal onFormSwitch={toggleForm} />,
    registro: <RegistroUsuario onFormSwitch={toggleForm} />,
    perfil: <PerfilUsuario onFormSwitch={toggleForm} />,
    mantenimiento: <Mantenimiento onFormSwitch={toggleForm} />,
    mobilario: <ActivosFijosMobiliarios onFormSwitch={toggleForm} />,
    tecnologia: <ActivosFijosTecnologicos onFormSwitch={toggleForm} />,
    transporte: <ActivosFijosTransporte onFormSwitch={toggleForm} />,
    inventario: <MostrarActivosFijos onFormSwitch={toggleForm} />,
  };

  const CurrentComponent = components[currentForm];

  return (
    <div className="App">
      {CurrentComponent}
    </div>
  );
}

export default App;
