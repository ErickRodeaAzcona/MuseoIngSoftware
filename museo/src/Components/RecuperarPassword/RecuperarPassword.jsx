import React, { useState, useEffect } from "react";
import icono_usuario from '../Assets/user.png'
import icono_password from '../Assets/password.png'
const RecuperarPassword = () => {

    const [data, setdata] = useState({
		disposiciones: ""
	});
  useEffect(() => {
		// Using fetch to fetch the api from 
		// flask server it will be redirected to proxy
		fetch("/RecuperarPassword").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					password: data.password
				});
			})
		);
	}, []);
  return (
    <div>
          <div>
      <div className='container'>
      <div className='header'>
        <div className="text">Recuperar Contraseña</div> 
        <div className="underline">
        </div>
      </div>
      <div className="inputs">
        <form method='post'>
        <div className="input">
        <img src={icono_usuario} alt="" srcset="" />
        <input type="text" id='username' name='username' placeholder='Nombre completo'/>
    </div>
        
        <div className="input">
            <img src={icono_password} alt="" srcset="" />
            <input type="text" id='correo' name='correo' placeholder='Correo'/>
        </div>
        <div className="submit-container">
        <input type='submit' value="Recuperar" className='submit'/>
        </div>

        </form>
        <div>Tu contraseña es: {data.password}</div>
      </div>
      

      

    </div>
    </div>
    </div>
  )
}

export default RecuperarPassword
