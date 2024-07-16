import React, { useState } from 'react';
import logo1 from '../image/logouleam1.jpg';
import '../css/perfil.css'
export const PerfilUsuario = (props) => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || {});
  
  return (
    <div className="main-page">
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

      <header className="perfil">  
      <img src={logo1} alt="Facultad de Ciencias medicas" />
        <h1>Perfil de Usuario</h1>
      </header>
      <div className="profile-container">
      <section className="profile-info">
        <h2>Información del Usuario</h2>
        <p><strong>Nombre:</strong> {userData.nombre}</p>
        <p><strong>Correo Electrónico:</strong> {userData.email}</p>
        <p><strong>Departamento:</strong> {userData.departamento}</p>
        <p><strong>Ubicación:</strong> {userData.ubicacion}</p>
        <p><strong>Número de Empleado:</strong> {userData.numEmpleado}</p>
        <p><strong>Celular:</strong> {userData.celular}</p>
      </section>
      <section className="profile-actions">
        {/* <h2>Acciones</h2> */}
        <button onClick={() => props.onFormSwitch('login')}>Cerrar sesión</button>
      </section>
      </div>
      

      
    
      <footer>
        <p>&copy; 2023 ULEAM</p>
      </footer>
    </div>
  );
}


