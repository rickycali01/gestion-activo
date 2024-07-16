import React from 'react';
import '../css/formulario.css';
import '../css/barra-menu.css';

export const ActivosFijosMobiliarios = (props) => {
  const guardarActivo = () => {
    const facultad = document.getElementById('facultad').value;
    const tipoActivo = document.getElementById('tipoActivo').value;
    const marcaMobiliario = document.getElementById('marcaMobiliario').value;
    const modeloMobiliario = document.getElementById('modeloMobiliario').value;
    const materialMobiliario = document.getElementById('materialMobiliario').value;
    const valorMobiliario = document.getElementById('valorMobiliario').value;
    const estadoFisico = document.getElementById('estadoFisico').value;

    const valorAproximadoRegex = /^[0-9]+$/;
    const formatoMaterial = /^[a-zA-ZÁáÉéÍíÓóÚúÜü\s]+$/;

if (!materialMobiliario.match(formatoMaterial)) {
  alert('El material ingresado solo debe contener letras y espacios');
  return;
}
//validación de longitud mínima y máxima
    if (
      marcaMobiliario.length < 3 || marcaMobiliario.length > 20 ||
      modeloMobiliario.length < 3 || modeloMobiliario.length > 20 ||
      materialMobiliario.length < 3 || materialMobiliario.length > 20 ||
      valorMobiliario.length < 1 || valorMobiliario.length > 10
    ) {
      alert('Los campos deben tener entre 3 y 20 caracteres. Salvo valor mobiliario, ese campo es entre 1 a 10');
      return;
    }
    if (!valorMobiliario.match(valorAproximadoRegex)) {
      alert('El valor mobiliario deben contener solo números.');
      return;
    }
    // Validación de campos obligatorios
    if (facultad && tipoActivo && marcaMobiliario && modeloMobiliario && materialMobiliario && valorMobiliario && estadoFisico) {
      // Obtener los datos existentes o inicializar un array vacío
      const activosMobiliarios = JSON.parse(localStorage.getItem('activosMobiliarios')) || [];

      // Crear un nuevo objeto de activo mobiliario
      const nuevoActivoMobiliario = {
        facultad,
        tipoActivo,
        marcaMobiliario,
        modeloMobiliario,
        materialMobiliario,
        valorMobiliario,
        estadoFisico,
      };

      // Agregar el nuevo activo mobiliario a la lista
      activosMobiliarios.push(nuevoActivoMobiliario);

      // Guardar en localStorage
      localStorage.setItem('activosMobiliarios', JSON.stringify(activosMobiliarios));

      // Limpiar los campos después de guardar
      document.getElementById('facultad').value = '';
      document.getElementById('tipoActivo').value = '';
      document.getElementById('marcaMobiliario').value = '';
      document.getElementById('modeloMobiliario').value = '';
      document.getElementById('materialMobiliario').value = '';
      document.getElementById('valorMobiliario').value = '';
      document.getElementById('estadoFisico').value = '';
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="container">
      <h1>ACTIVOS FIJOS MOBILIARIOS</h1>

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
        <option value="Escritorios">Escritorios</option>
          <option value="Sillas">Sillas</option>
          <option value="Mesas">Mesas</option>
          <option value="Estanterías">Estanterías</option>
          <option value="Pizarras">Pizarras</option>
          <option value="Persianas">Persianas</option>
          <option value="Aspiradoras">Aspiradoras</option>
          <option value="Extintores">Extintores</option>
          <option value="Herramientas">Herramientas</option>
      </select>
      <br />

      <label htmlFor="marcaMobiliario">Marca:</label>
      <input type="text" id="marcaMobiliario" />
      <br />

      <label htmlFor="modeloMobiliario">Modelo:</label>
      <input type="text" id="modeloMobiliario" />
      <br />

      <label htmlFor="materialMobiliario">Material:</label>
      <input type="text" id="materialMobiliario" />
      <br />

      <label htmlFor="valorMobiliario">Valor:</label>
      <input type="text" id="valorMobiliario" />
      <br />

      <label htmlFor="estadoFisico">Estado Físico:</label>
      <select id="estadoFisico">
        <option value="bueno">Bueno</option>
        <option value="regular">Regular</option>
        <option value="malo">Malo</option>
      </select>
      <br />

      <button className="boton" onClick={guardarActivo}>
        Guardar/Enviar
      </button>

      <ul id="listadoMobiliario"></ul>
      <button onClick={() => props.onFormSwitch('inicio')}>Regresar</button>
    </div>
  );
};