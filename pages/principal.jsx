import React from 'react';
import facultad1 from '../image/Fac_Adm._Empresa.jpg';
import facultad2 from '../image/Fac_Ciencias_Sociales.jpg';
import facultad3 from '../image/Fac_Ciencias_Vida_y_Tecnología.jpg';
import facultad4 from '../image/Fac_CienciasMedicas.jpg';
import facultad5 from '../image/Fac_Educacion.jpg';
import facultad6 from '../image/Fac_Ingeniería.jpg';

import '../css/main.css';
import '../css/barra-menu.css';
export const PaginaPrincipal = (props) => {
  return (
    <div className="main-page">
      <header>
        <h1 className="titulo1">Bienvenido a la Gestión de Activos Fijos ULEAM</h1>
      </header>

      <nav className="navbar">
        <ul className="nav-list">
          <li className='right'><button onClick={() => props.onFormSwitch('inicio')}>Inicio</button></li>
          <li className="right"><button onClick={() => props.onFormSwitch('perfil')}>Perfil</button></li> 
          <li className="right"><button onClick={() => props.onFormSwitch('mantenimiento')}>Gestión</button></li>
          <li className="right"><button onClick={() => props.onFormSwitch('inventario')}>Inventario</button></li>
          <li className="right dropdown">
            <a href="#"><strong>Activos Fijos</strong></a>
            <div className="dropdown-content">
              <button onClick={() => props.onFormSwitch('tecnologia')}>Tecnología</button>
              <button onClick={() => props.onFormSwitch('mobilario')}>Mobiliario</button>
              <button onClick={() => props.onFormSwitch('transporte')}>Transporte</button>
            </div>
          </li>
        </ul>    
      </nav>

      <h1 className="titulo2">Facultades de la ULEAM</h1>

      <div className="facultad">
        <div>
          <img src={facultad3} alt="Facultad de Ciencias de la Vida y Tecnología" />
          <p>Facultad de Ciencias de la Vida y Tecnología</p>
          <button onClick={() => props.onFormSwitch('inventario')}>Ver activos</button>
        </div>
      </div>

      <div class="facultad">
    <div >
        <img src={facultad2} alt="Facultad de Ciencias Sociales, Derecho y Bienestar" />
        <p>Facultad de Ciencias Sociales, Derecho y Bienestar</p>
        <button onClick={() => props.onFormSwitch('inventario')}>Ver activos</button>
    </div>
</div>

<div class="facultad">
    <div >
        <img src={facultad4} alt="Facultad de Ciencias medicas" />
        <p>Facultad de Ciencias Médicas</p>
        <button onClick={() => props.onFormSwitch('inventario')}>Ver activos</button>
    </div>
</div>

<div class="facultad">
    <div >
    <img src={facultad6} alt="Facultad de ingenieria, industria y construcción" />
        <p>Facultad de Ingeniería, Industria y Construcción</p>
        <button onClick={() => props.onFormSwitch('inventario')}>Ver activos</button>
    </div>
</div>

<div class="facultad">
    <div >
        <img src={facultad5} alt="Facultad de educación" />  
        <p>Facultad de Educación, Turismo, Arte y Humanidades</p>
        <button onClick={() => props.onFormSwitch('inventario')}>Ver activos</button>
    </div>
</div>

<div class="facultad">
    <div >
    <img src={facultad1} alt="Facultad de ciencias administrativas y contables" />
        <p>Facultad de Ciencias Administrativas, Contables y Comercio</p>
        <button onClick={() => props.onFormSwitch('inventario')}>Ver activos</button>
    </div>
</div>

      <footer>
        <p>&copy; 2024 ULEAM</p>
      </footer>
    </div>
  );
}


