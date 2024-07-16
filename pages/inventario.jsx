import React, { useState, useEffect } from 'react';

export const MostrarActivosFijos = (props) => {
  const [activosTecnologicos, setActivosTecnologicos] = useState([]);

  useEffect(() => {
    const storedActivosTecnologicos = JSON.parse(localStorage.getItem('activosTecnologicos'));
    if (storedActivosTecnologicos) {
      setActivosTecnologicos(storedActivosTecnologicos);
    }
  }, []);

  const eliminarActivo = (index) => {
    const updatedActivosTecnologicos = [...activosTecnologicos];
    const activo = updatedActivosTecnologicos[index];
  
    // Aquí puedes aplicar tus validaciones antes de eliminar el activo
    // Por ejemplo, validar si el activo está marcado como "realizado" o cualquier otra validación que necesites
  
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este activo tecnológico?');
    if (confirmDelete) {
      updatedActivosTecnologicos.splice(index, 1); // Elimina el activo tecnológico en el índice dado
      setActivosTecnologicos(updatedActivosTecnologicos);
      localStorage.setItem('activosTecnologicos', JSON.stringify(updatedActivosTecnologicos));
    }
  };

//coso mobiliario
  const [activosMobiliarios, setActivosMobiliarios] = useState([]);

  useEffect(() => {
    const storedActivosMobiliarios = JSON.parse(localStorage.getItem('activosMobiliarios'));
    if (storedActivosMobiliarios) {
      setActivosMobiliarios(storedActivosMobiliarios);
    }
  }, []);
  const eliminarActivoMobiliario = (index) => {
    const updatedActivosMobiliarios = [...activosMobiliarios];
    const activoMobiliario = updatedActivosMobiliarios[index];
  
    // Aquí puedes aplicar tus validaciones específicas para activos mobiliarios antes de eliminar
  
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este activo mobiliario?');
    if (confirmDelete) {
      updatedActivosMobiliarios.splice(index, 1); // Elimina el activo mobiliario en el índice dado
      setActivosMobiliarios(updatedActivosMobiliarios);
      localStorage.setItem('activosMobiliarios', JSON.stringify(updatedActivosMobiliarios));
    }
  };

//coso transporte
  const [activosTransporte, setActivosTransporte] = useState([]);

  useEffect(() => {
    const storedActivosTransporte = JSON.parse(localStorage.getItem('activosTransporte'));
    if (storedActivosTransporte) {
      setActivosTransporte(storedActivosTransporte);
    }
  }, []);
  
const eliminarActivoTransporte = (index) => {
  const updatedActivosTransporte = [...activosTransporte];
  const activoTransporte = updatedActivosTransporte[index];

  // Puedes realizar validaciones específicas para activos de transporte aquí

  const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este activo de transporte?');
  if (confirmDelete) {
    updatedActivosTransporte.splice(index, 1); // Elimina el activo de transporte en el índice dado
    setActivosTransporte(updatedActivosTransporte);
    localStorage.setItem('activosTransporte', JSON.stringify(updatedActivosTransporte));
  }
};
  
  return (
    <div className="container">
        
      <h1>ACTIVOS FIJOS TECNOLÓGICOS</h1>

      {/* Resto del formulario para añadir activos */}

      <table>
        <thead>
          <tr>
            <th>Facultad</th>
            <th>Tipo de Activo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Número de Serie</th>
            <th>Costo de Adquisición</th>
            <th>Estado Físico</th>
            <th>Observación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {activosTecnologicos.map((activo, index) => (
            <tr key={index}>
              <td>{activo.facultad}</td>
              <td>{activo.tipoActivo}</td>
              <td>{activo.marca}</td>
              <td>{activo.modelo}</td>
              <td>{activo.numeroSerie}</td>
              <td>{activo.valorAproximado}</td>
              <td>{activo.estadoFisico}</td>
              <td>{activo.observacion}</td>
              <td>
                <button onClick={() => eliminarActivo(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>ACTIVOS FIJOS MOBILIARIOS</h1>

      {/* Formulario para añadir activos */}

      <table>
        <thead>
          <tr>
            <th>Facultad</th>
            <th>Tipo de Activo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Material</th>
            <th>Valor</th>
            <th>Estado Físico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {activosMobiliarios.map((activo, index) => (
            <tr key={index}>
              <td>{activo.facultad}</td>
              <td>{activo.tipoActivo}</td>
              <td>{activo.marcaMobiliario}</td>
              <td>{activo.modeloMobiliario}</td>
              <td>{activo.materialMobiliario}</td>
              <td>{activo.valorMobiliario}</td>
              <td>{activo.estadoFisico}</td>
              <td>
                <button onClick={() => eliminarActivoMobiliario(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* coso transporte */}
      <h1>ACTIVOS FIJOS DE TRANSPORTE</h1>

      {/* Formulario para añadir activos */}

      <table>
        <thead>
          <tr>
            <th>Facultad</th>
            <th>Tipo de Activo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Valor aproximado</th>
            <th>Valoración</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {activosTransporte.map((activo, index) => (
            <tr key={index}>
              <td>{activo.facultad}</td>
              <td>{activo.tipoActivo}</td>
              <td>{activo.marcaTransporte}</td>
              <td>{activo.modeloTransporte}</td>
              <td>{activo.placaTransporte}</td>
              <td>{activo.valorAproximado}</td>
              <td>{activo.valoracion}</td>
              <td>
                <button onClick={() => eliminarActivoTransporte(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => props.onFormSwitch('inicio')}>Regresar</button>
    </div>
  );
};
