import React, { useState, useEffect } from "react";

const RecorridoVirtual = () => {
  const [data, setdata] = useState({
		recorrido: ""
	});
  useEffect(() => {
		// Using fetch to fetch the api from 
		// flask server it will be redirected to proxy
		fetch("/RecorridoVirtual").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					recorrido: data.recorrido
				});
			})
		);
	}, []);
  return (
    <div>
        <div className="texto">Revisa la informacion del recorrido virtual</div>
        <div className="underline"></div>
        <div className="container">
        <div className="areaTexto">{data.recorrido}</div>
      </div>
    </div>
  )
}

export default RecorridoVirtual
