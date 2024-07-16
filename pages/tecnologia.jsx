import React from 'react';

export const ActivosFijosTecnologicos = (props) => {
  const guardarActivo = () => {
    const facultad = document.getElementById('facultad').value;
    const tipoActivo = document.getElementById('tipoActivo').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const numeroSerie = document.getElementById('numeroSerie').value;
    const valorAproximado = document.getElementById('valorAproximado').value;
    const estadoFisico = document.getElementById('estadoFisico').value;
    const observacion = document.getElementById('observacion').value;
    // Validación de campos obligatorios
    if (!facultad || !tipoActivo || !marca || !modelo || !numeroSerie || !valorAproximado || !estadoFisico || !observacion) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    // Validación de número de serie (debe contener solo números)
    const numeroSerieRegex = /^[0-9]+$/;
    if (!numeroSerie.match(numeroSerieRegex)) {
      alert('El número de serie debe contener solo números.');
      return;
    }

    // Validación de valor aproximado (debe contener solo números)
    const valorAproximadoRegex = /^[0-9]+$/;
    if (!valorAproximado.match(valorAproximadoRegex)) {
      alert('El valor aproximado debe contener solo números.');
      return;
    }
    // Validación de longitud mínima y máxima
    if (
      marca.length < 3 || marca.length > 20 ||
      modelo.length < 3 || modelo.length > 20 ||
      numeroSerie.length < 3 || numeroSerie.length > 20 ||
      observacion.length < 3 || observacion.length > 60
    ) {
      alert('Los campos deben tener entre 3 y 20 caracteres, salvo observaciòn, ese campo tiene como màximo 60 caracteres');
      return;
    }
    // Validación de campos obligatorios
    if (facultad && tipoActivo && marca && modelo && numeroSerie && valorAproximado && estadoFisico && observacion) {
      // Obtener los datos existentes o inicializar un array vacío
      const activosTecnologicos = JSON.parse(localStorage.getItem('activosTecnologicos')) || [];

      // Crear un nuevo objeto de activo tecnológico
      const nuevoActivoTecnologico = {
        facultad,
        tipoActivo,
        marca,
        modelo,
        numeroSerie,
        valorAproximado,
        estadoFisico,
        observacion,
      };

      // Agregar el nuevo activo tecnológico a la lista
      activosTecnologicos.push(nuevoActivoTecnologico);

      // Guardar en localStorage
      localStorage.setItem('activosTecnologicos', JSON.stringify(activosTecnologicos));

      // Limpiar los campos después de guardar
      document.getElementById('facultad').value = '';
      document.getElementById('tipoActivo').value = '';
      document.getElementById('marca').value = '';
      document.getElementById('modelo').value = '';
      document.getElementById('numeroSerie').value = '';
      document.getElementById('valorAproximado').value = '';
      document.getElementById('estadoFisico').value = '';
      document.getElementById('observacion').value = '';
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="container">
      <h1>ACTIVOS FIJOS TECNOLÓGICOS</h1>

      <label htmlFor="facultad">Facultad:</label>
      <select id="facultad">
        {/* Opciones de facultad */}
        <option value="Facultad de Ciencias de la Vida y Tecnología">Facultad de Ciencias de la Vida y Tecnología</option>
          <option value="Facultad de Ciencias Sociales, Derecho y Bienestar">Facultad de Ciencias Sociales, Derecho y Bienestar</option>
          <option value="Facultad de Ciencias Médicas">Facultad de Ciencias Médicas</option>
          <option value="Facultad de Ingeniería, Industria y Construcción">Facultad de Ingeniería, Industria y Construcción</option>
          <option value="Facultad de Educación, Turismo, Arte y Humanidades">Facultad de Educación, Turismo, Arte y Humanidades</option>
          <option value="Facultad de Ciencias Administrativas, Contables y Comercio">Facultad de Ciencias Administrativas, Contables y Comercio</option>
      </select>
      <br />

      <label htmlFor="tipoActivo">Tipo de Activo:</label>
      <select id="tipoActivo">
        {/* Opciones de tipo de activo */}
        <option value="PC de escritorio">PC de escritorio</option>
          <option value="Laptop">Laptop</option>
          <option value="Impresora">Impresora</option>
          <option value="Proyector">Proyector</option>
          <option value="Pizarra Digital">Pizarra Digital</option>
          <option value="Camara de Seguridad">Cámara de Seguridad</option>
          <option value="Dispositivo de Almacenamiento Externos">Dispositivo de Almacenamiento Externo</option>
      </select>
      <br />

      <label htmlFor="marca">Marca:</label>
      <input type="text" id="marca" />
      <br />

      <label htmlFor="modelo">Modelo:</label>
      <input type="text" id="modelo" />
      <br />

      <label htmlFor="numeroSerie">Número de Serie:</label>
      <input type="text" id="numeroSerie" />
      <br />

      <label htmlFor="valorAproximado">Costo de Adquisición:</label>
      <input type="text" id="valorAproximado" />
      <br />

      <label htmlFor="estadoFisico">Estado Físico:</label>
      <select id="estadoFisico">
        <option value="bueno">Bueno</option>
        <option value="regular">Regular</option>
        <option value="malo">Malo</option>
      </select>
      <br />

      <label htmlFor="observacion">Observación:</label>
      <textarea id="observacion" rows="4" cols="50"></textarea>
      <br />

      <button className="boton" onClick={guardarActivo}>
        Guardar/Enviar
      </button>

      <ul id="listadoTecnologicosUl"></ul>
      <button onClick={() => props.onFormSwitch('inicio')}>Regresar</button>
    </div>
  );
};

