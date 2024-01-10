import React from 'react'
import './BienvenidoAdmin.css'
import pollo from '../Assets/pollo.png'
const BienvenidoAdmin = () => {
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
      <div className="bienvenido">
        <div className="text">Bienvenido Administrador!</div>
        <img src={pollo} alt="" srcset="" className='pollo'/>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default BienvenidoAdmin
