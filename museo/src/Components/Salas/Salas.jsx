import React, { useState, useEffect } from 'react';
import './Salas.css'
const Salas = ({ sala, imagenes }) => (
  <div>
    <h2>{sala}</h2>
    <div className="img-container">
         {imagenes.map((url, index) => (
      <img key={index} src={url} alt={`Imagen ${index + 1}`} />
    ))}   
    </div>

  </div>
);

const MuseoApp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Realiza la solicitud al servidor Flask para obtener el JSON
    fetch('/Salas')
      .then(response => response.json())
      .then(jsonData => {
        // Elimina las comas adicionales al final de cada URL
        const correctedData = Object.fromEntries(
          Object.entries(jsonData).map(([key, value]) => [key, value.replace(/,\s*$/, '')])
        );
        setData(correctedData);
      })
      .catch(error => console.error('Error al obtener el JSON:', error));
  }, []);

  // Verifica si los datos han sido cargados
  if (!data) {
    return <p>Cargando...</p>;
  }

  // Divide las URL en grupos por sala y elimina comas adicionales
  const urlAutos = data.url_autos.replace(/['()]/g, '').split(',').filter(url => url.trim() !== '');
  const urlObras = data.url_obras.replace(/['()]/g, '').split(',').filter(url => url.trim() !== '');
  const urlPrehispanico = data.url_prehispanico.replace(/['()]/g, '').split(',').filter(url => url.trim() !== '');

  return (
    <div>
      <Salas sala="Sala 1: Historia del Automovil" imagenes={urlAutos} />
      <Salas sala="Sala 2: Obras de arte" imagenes={urlObras} />
      <Salas sala="Sala 3: Arte Prehispánico" imagenes={urlPrehispanico} />
      {/* Agrega más salas según sea necesario */}
    </div>
  );
};

export default MuseoApp;





