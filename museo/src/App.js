import './App.css';
import Index from './Components/Index/Index';
import Horarios from './Components/Horarios/Horarios';
import Informacion from './Components/Informacion/Informacion';
import Disposiciones from './Components/Disposiciones/Disposiciones';
import RecorridoVirtual from './Components/RecorridoVirtual/RecorridoVirtual';
import Login from './Components/Login/Login'
import ModificarInformacion from './Components/ModificarInformacion/ModificarInformacion';
import ModificarHorarios from './Components/ModificarHorarios/ModificarHorarios';
import ModificarDisposiciones from './Components/ModificarDisposiciones/ModificarDisposiciones';
import ModificarRecorridoVirtual from './Components/ModificarRecorridoVirtual/ModificarRecorridoVirtual'
import BienvenidoAdmin from './Components/BienvenidoAdmin/BienvenidoAdmin'
import Registrarse from './Components/Registrarse/Registrarse';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import usuario from './Components/Assets/user.png'
import menu from './Components/Assets/menu.png'
import logo from './Components/Assets/logo.png'
import Salas from './Components/Salas/Salas';
import AgregarImgSalas from './Components/AgregarImgSalas/AgregarImgSalas';
import RecuperarPassword from './Components/RecuperarPassword/RecuperarPassword';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  // Agrega aquí más nombres de imágenes
];

function App() {

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
    const handleClickLogin = () => {
      // Redirige a la página deseada
      window.location.href = '/Login';
    };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos).

    return () => {
      clearInterval(interval);
    };
  }, []);

  const imageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    transition: 'background-image 1s ease-in-out',
  };

  return (
    <div>
            <header>
        <h1 className='titulo'><img src={logo}></img></h1>
        <button onClick={toggleMenu}><img src={menu} alt="" srcset="" /></button>
        <button className='boton-texto' onClick={handleClickLogin}><img src={usuario} alt="" srcset="" />Iniciar Sesión</button>
      </header>
      {menuVisible && (
        <nav>
          <ul>
            <li><a href="/" className='menu'>Inicio</a></li>
            <li><a href="/Horarios" className='menu'>Horarios</a></li>
            <li><a href="/Informacion" className='menu'>Informacion</a></li>
            <li><a href="/Disposiciones" className='menu'>Disposiciones</a></li>
            <li><a href="/RecorridoVirtual" className='menu'>Recorrido Virtual</a></li>
            <li><a href="/Salas" className='menu'>Salas</a></li>
          </ul>
        </nav>
      )}
      <div className="App" style={imageStyle}>
        <div className='content'>
          <Router>
      <Routes> 
              <Route exact path='/' element={< Index />}></Route> 
              <Route exact path='/Horarios' element={< Horarios />}></Route> 
              <Route exact path='/Informacion' element={< Informacion />}></Route> 
              <Route exact path='/Disposiciones' element={< Disposiciones />}></Route> 
              <Route exact path='/RecorridoVirtual' element={< RecorridoVirtual />}></Route> 
              <Route exact path='/ModificarDisposiciones' element={< ModificarDisposiciones />}></Route> 
              <Route exact path='/ModificarHorarios' element={< ModificarHorarios />}></Route> 
              <Route exact path='/ModificarInformacion' element={< ModificarInformacion />}></Route> 
              <Route exact path='/ModificarRecorridoVirtual' element={< ModificarRecorridoVirtual />}></Route> 
              <Route exact path='/BienvenidoAdmin' element={< BienvenidoAdmin />}></Route> 
              <Route exact path='/Login' element={< Login />}></Route> 
              <Route exact path='/Registrarse' element={< Registrarse />}></Route> 
              <Route exact path='/Salas' element={< Salas />}></Route> 
              <Route exact path='/AgregarImgSalas' element={< AgregarImgSalas />}></Route> 
              <Route exact path='/RecuperarPassword' element={< RecuperarPassword />}></Route> 
        </Routes>
      </Router>
        </div>
      

    </div>
    </div>
    
  );
}

export default App;
