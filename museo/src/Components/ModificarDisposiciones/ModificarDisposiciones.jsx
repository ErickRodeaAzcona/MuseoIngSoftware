import React, { useState, useEffect } from "react";

const ModificarDisposiciones = () => {
  const [data, setdata] = useState({
		disposiciones: ""
	});
  useEffect(() => {
		// Using fetch to fetch the api from 
		// flask server it will be redirected to proxy
		fetch("/Disposiciones").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					disposiciones: data.disposiciones
				});
			})
		);
	}, []);
  return (
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
        <div className="text">Edita las disposiciones oficiales</div>

      </div>  
      <div className="botones">
      <form method='POST'>
      <textarea name="texto" id="texto" cols="30" rows="20" className='textArea' placeholder={data.disposiciones}>{data.disposiciones}</textarea>
      <div className="botonesSubmit">
      <input type='submit' value="Publicar" className='submit'/>
      </div>  
      </form>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ModificarDisposiciones
