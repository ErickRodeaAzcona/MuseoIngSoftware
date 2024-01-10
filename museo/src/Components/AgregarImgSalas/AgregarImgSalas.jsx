import React from 'react';
import './AgregarImgSalas.css';

const AgregarImgSalas = () => {
  // Define los elementos para la lista desplegable
  const opcionesSalas = ["autos", "prehispanico", "obras"];

  return (
    <div>
      <div>
        <div>
          <div className="barra">
          <div><a href="/ModificarHorarios" className='links'>Modifica los horarios</a></div>
        <div><a href="/ModificarInformacion" className='links'>Modifica la informacion del Museo</a></div>
        <div><a href="/ModificarDisposiciones" className='links'>Modifica las dispociones oficiales</a></div>
        <div><a href="/ModificarRecorridoVirtual" className='links'>Modifica la informacion del recorrido virtual</a></div>
        <div><a href="/AgregarImgSalas" className='links'>Agrega imagenes a las Salas</a></div>
        <div><a href="/" className='links'>Salir</a></div>
          </div>
          <div className="contenido">
            <div className="editar">
              <div className="text">Agrega Imagenes</div>
            </div>
            <div className="botones">
              <form method='POST'>
                {/* Cambia el textarea por un select */}
                <select name="sala" id="sala" className='textAreaURL'>
                  {/* Mapea las opciones de la sala como elementos option */}
                  {opcionesSalas.map((sala, index) => (
                    <option key={index} value={sala}>{sala}</option>
                  ))}
                </select>
                <textarea name="url" id="url" className='textAreaURL' placeholder='Url de la imagen'></textarea>
                <div className="botonesSubmit">
                  <input type='submit' value="Publicar" className='submit' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarImgSalas;

