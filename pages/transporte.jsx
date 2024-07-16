import React from 'react';

export const ActivosFijosTransporte = (props) => {
  const guardarActivo = () => {
    const facultad = document.getElementById('facultad').value;
    const tipoActivo = document.getElementById('tipoActivo').value;
    const marcaTransporte = document.getElementById('marcaTransporte').value;
    const modeloTransporte = document.getElementById('modeloTransporte').value;
    const placaTransporte = document.getElementById('placaTransporte').value;
    const valorAproximado = document.getElementById('valorAproximado').value;

    const valoracion = document.getElementById('valoracion').value;


    // Validación de campos obligatorios
    if (!facultad || !tipoActivo || !marcaTransporte || !modeloTransporte || !placaTransporte || !valorAproximado || !valoracion) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validación de longitud para campos, excepto facultad y tipo de activo
    const minLength = 3;
    const maxLength = 30;

    if (
      marcaTransporte.length < minLength || marcaTransporte.length > maxLength ||
      modeloTransporte.length < minLength || modeloTransporte.length > maxLength ||
      placaTransporte.length < minLength || placaTransporte.length > maxLength ||
      valorAproximado.length < minLength || valorAproximado.length > maxLength ||
      valoracion.length !== 1 // Longitud fija para la valoración (1 al 10)
    ) {
      alert('Los campos deben tener entre 3 y 30 caracteres (excepto Valoración que debe ser un número entre 1 y 10).');
      return;
    }

    // Validación de número para Placa y Valor Aproximado
    const placaRegex = /^[0-9]+$/;
    const valorAproximadoRegex = /^[0-9]+$/;

    if (!placaTransporte.match(placaRegex) || !valorAproximado.match(valorAproximadoRegex)) {
      alert('La Placa y el Valor Aproximado deben contener solo números.');
      return;
    }
    // Validación de campos obligatorios
    if (facultad && tipoActivo && marcaTransporte && modeloTransporte && placaTransporte && valoracion) {
      // Obtener los datos existentes o inicializar un array vacío
      const activosTransporte = JSON.parse(localStorage.getItem('activosTransporte')) || [];

      // Crear un nuevo objeto de activo de transporte
      const nuevoActivoTransporte = {
        facultad,
        tipoActivo,
        marcaTransporte,
        modeloTransporte,
        placaTransporte,
        valorAproximado,
        valoracion,
      };

      // Agregar el nuevo activo de transporte a la lista
      activosTransporte.push(nuevoActivoTransporte);

      // Guardar en localStorage
      localStorage.setItem('activosTransporte', JSON.stringify(activosTransporte));

      // Limpiar los campos después de guardar
      document.getElementById('facultad').value = '';
      document.getElementById('tipoActivo').value = '';
      document.getElementById('marcaTransporte').value = '';
      document.getElementById('modeloTransporte').value = '';
      document.getElementById('placaTransporte').value = '';
      document.getElementById('valorAproximado').value = '';
      document.getElementById('valoracion').value = '';
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="container">
      <h1>ACTIVOS FIJOS DE TRANSPORTE</h1>

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
        <option value="Bus Escolar">Bus Escolar</option>
          <option value="Motocicleta">Motocicleta</option>
          <option value="Vehículo de Instrucción">Vehículo de Instrucción</option>
      </select>
      <br />

      <label htmlFor="marcaTransporte">Marca:</label>
      <input type="text" id="marcaTransporte" />
      <br />

      <label htmlFor="modeloTransporte">Modelo:</label>
      <input type="text" id="modeloTransporte" />
      <br />

      <label htmlFor="placaTransporte">Placa:</label>
      <input type="text" id="placaTransporte" />
      <br />

      <label htmlFor="valorAproximado">Valor Aproximado:</label>
      <input type="text" id="valorAproximado" />
      <br />

      <label htmlFor="valoracion">Valoración (1 al 10):</label>
      <input type="number" id="valoracion" min="1" max="10" />
      <br />

      <button className="boton" onClick={guardarActivo}>
        Guardar/Enviar
      </button>

      <ul id="listadoTransporte"></ul>
      <button onClick={() => props.onFormSwitch('inicio')}>Regresar</button>
    </div>
  );
};

