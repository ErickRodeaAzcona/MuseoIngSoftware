import React, { useState, useEffect } from "react";

const Disposiciones = () => {
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
        <div className="texto">Consulta las dispociones oficiales</div>
        <div className="underline"></div>
        <div className="container">
        <div className="areaTexto">{data.disposiciones}</div>
      </div>
    </div>
  )
}

export default Disposiciones
