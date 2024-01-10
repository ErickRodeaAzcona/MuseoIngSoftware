import React, { useState, useEffect } from "react";
import './ModificarInformacion.css'

const ModificarInformacion = () => {
  const [data, setdata] = useState({
		informacion: ""
	});
  useEffect(() => {
		// Using fetch to fetch the api from 
		// flask server it will be redirected to proxy
		fetch("/Informacion").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					informacion: data.informacion
				});
			})
		);
	}, []);
  console.log(data.horario)
  return (
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
        <div className="text">Edita la informacion del museo</div>

      </div>
      <div className="botones">
      <form method='POST'>
      <textarea name="texto" id="texto" cols="30" rows="20" className='textArea' placeholder={data.informacion}>{data.informacion}</textarea>
      <div className="botonesSubmit">
      <input type='submit' value="Publicar" className='submit'/>
      </div>

    </form>
      </div>
      </div>
    </div>
  )
}

export default ModificarInformacion
