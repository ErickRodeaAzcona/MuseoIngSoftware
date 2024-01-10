import React, { useState, useEffect } from "react";
import './Horarios.css'



const Horarios = () => {
  const [data, setdata] = useState({
		horario: ""
	});
  useEffect(() => {
		// Using fetch to fetch the api from 
		// flask server it will be redirected to proxy
		fetch("/Horarios").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					horario: data.horario
				});
			})
		);
	}, []);


  return (
    <div>
        <div className="texto">Consulta los horarios disponibles</div>
        <div className="underline"></div>
        <div className="container">
        <div className="areaTexto">{data.horario}</div>
      </div>
    </div>
  )
}

export default Horarios
