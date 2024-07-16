import React, { useState, useEffect } from 'react';
import '../css/mantenimiento.css';
import logo1 from '../image/logouleam1.jpg';

export const Mantenimiento = (props) => {
  const [mantenimientos, setMantenimientos] = useState([]);

  useEffect(() => {
    const storedMantenimientos = JSON.parse(localStorage.getItem('mantenimientos'));
    if (storedMantenimientos) {
      setMantenimientos(storedMantenimientos);
    }
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    // Realizar validaciones aquí antes de procesar los datos
  const facultad = formData.get('facultad');
  const tipoActivo = formData.get('tipoActivo');
  const activo = formData.get('activo');
  const tipoMantenimiento = formData.get('tipo');
  const fecha = formData.get('fecha');
  const descripcion = formData.get('descripcion');
  const responsable = formData.get('responsable');

  // Ejemplo de validación simple (puedes ajustar según tus necesidades)
  if (!facultad || !tipoActivo || !activo || !tipoMantenimiento || !fecha || !descripcion || !responsable) {
    alert('Por favor, completa todos los campos.');
    return;
  }
  // Validación para el campo de descripción (al menos 10 caracteres)
  if (descripcion.length < 5) {
    alert('La descripción debe tener al menos 5 caracteres.');
    return;
  }
  if (descripcion.length > 50) {
    alert('La descripción no puede tener como sobrepasar los 50 caracteres.');
    return;
  }
  if (activo.length < 3) {
    alert('El nombre del activo debe tener al menos 3 caracteres.');
    return;
  }
  if (activo.length > 30) {
    alert('El nombre del activo no puede tener màs de 30 caracteres.');
    return;
  }
  // Validación para el campo de responsable (solo letras y espacios permitidos)
  const responsableRegex = /^[A-Za-z\s]+$/;
  if (!responsable.match(responsableRegex)) {
    alert('El nombre del responsable solo puede contener letras y espacios.');
    return;
  }
    const nuevoMantenimiento = {
      
      facultad: formData.get('facultad'),
      tipoActivo: formData.get('tipoActivo'),
      activo: formData.get('activo'),
      tipoMantenimiento: formData.get('tipo'),
      fecha: formData.get('fecha'),
      descripcion: formData.get('descripcion'),
      responsable: formData.get('responsable'),
      realizado: 'No', // Establecer como no realizado por defecto
    };
    
    // Guardar el nuevo mantenimiento en el estado
    setMantenimientos([...mantenimientos, nuevoMantenimiento]);

    // Guardar en el localStorage
    localStorage.setItem('mantenimientos', JSON.stringify([...mantenimientos, nuevoMantenimiento]));

    // Limpiar el formulario después de enviar
    event.target.reset();
  };
  const handleDeleteMantenimiento = (index) => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este mantenimiento?');
    if (confirmDelete) {
      const updatedMantenimientos = [...mantenimientos];
      updatedMantenimientos.splice(index, 1); // Elimina el mantenimiento en el índice dado
      setMantenimientos(updatedMantenimientos);
      localStorage.setItem('mantenimientos', JSON.stringify(updatedMantenimientos));
    }
  };
  
  return (
    <div>
      <section className="uno">
        <img src={logo1} alt="Facultad de Ciencias medicas" />
        <h1 className="titulo">LISTA DE MANTENIMIENTOS PROGRAMADOS</h1>
      </section>

      <section className="MP">
        <div id="listaMantenimientos">
          <h2>Mantenimientos Programados</h2>
          <table id="tablaMantenimientos">
            <thead>
              <tr>
                <th>Facultad</th>
                <th>Tipo de Activo</th>
                <th>Activo</th>
                <th>Tipo de Mantenimiento</th>
                <th>Fecha Programada</th>
                <th>Descripción</th>
                <th>Responsable</th>
                <th>Realizado</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {mantenimientos.map((mantenimiento, index) => (
                <tr key={index}>
                  <td>{mantenimiento.facultad}</td>
                  <td>{mantenimiento.tipoActivo}</td>
                  <td>{mantenimiento.activo}</td>
                  <td>{mantenimiento.tipoMantenimiento}</td>
                  <td>{mantenimiento.fecha}</td>
                  <td>{mantenimiento.descripcion}</td>
                  <td>{mantenimiento.responsable}</td>
                  <td>{mantenimiento.realizado}</td>
                  <td><button onClick={() => handleDeleteMantenimiento(index)}>
                  Eliminar
                </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="NuevoMP">
        <h2>Nuevo Mantenimiento Programado</h2>
        <form onSubmit={handleFormSubmit} id="formulario">
          <label htmlFor="facultad">Facultad:</label>
          <select id="facultad" name="facultad" required>
            {/* Opciones del select de Facultad */}
            <option value="Tecnológico">Tecnológico</option>
            <option value="Inmueble">Mobiliario</option>
            <option value="Transporte">Transporte</option>
          </select><br />

          <label htmlFor="tipoActivo">Tipo de Activo:</label>
          <select id="tipoActivo" name="tipoActivo" required>
            {/* Opciones del select de Tipo de Activo */}
            <option value="preventivo">Preventivo</option>
            <option value="correctivo">Correctivo</option>
          </select><br />

          <label htmlFor="activo">Activo:</label>
          <input type="text" id="activo" name="activo" required /><br />

          <label htmlFor="tipo">Tipo de Mantenimiento:</label>
          <select id="tipo" name="tipo" required>
            <option value="preventivo">Preventivo</option>
            <option value="correctivo">Correctivo</option>
          </select><br />

          <label htmlFor="fecha">Fecha Programada:</label>
          <input type="date" id="fecha" name="fecha" required /><br />

          <label htmlFor="descripcion">Descripción:</label><br />
          <textarea id="descripcion" name="descripcion" rows="4" cols="50" required></textarea><br />

          <label htmlFor="responsable">Responsable:</label>
          <input type="text" id="responsable" name="responsable" required /><br />

          <input type="submit" value="Agregar Mantenimiento" />
        </form>
        <button className="regresar-inicio" onClick={() => props.onFormSwitch('inicio')}>Regresar</button>
      </section>
      
    </div>
  );
};

