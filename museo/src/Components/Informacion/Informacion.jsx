import React, { useState, useEffect } from "react";

const Informacion = () => {
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
  return (
    <div>
        <div className="texto">Consulta la informacion del museo</div>
        <div className="underline"></div>
        <div className="container">
        <div className="areaTexto">{data.informacion}</div>
      </div>
    </div>
  )
}

export default Informacion
