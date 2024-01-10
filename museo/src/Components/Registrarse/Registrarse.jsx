import React from 'react'
import './Registrarse.css'
import icono_usuario from '../Assets/user.png'
import icono_password from '../Assets/password.png'
import icono_correo from '../Assets/email.png'

const Registrarse = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">Registrate</div> 
        <div className="underline">
        </div>
      </div>
      <div className="inputs">
        <form method='post'>
          <div className="input">
          <img src={icono_usuario} alt="" srcset="" />
        <input type="text" id='nombre' name='nombre' placeholder='Nombre completo'/>
          </div>
          <div className="input">
          <img src={icono_correo} alt="" srcset="" />
        <input type="text" id='correo' name='correo' placeholder='Correo Electronico'/>
          </div>
          <div className="input">
          <img src={icono_password} alt="" srcset="" />
            <input type="password" id='password' name='password' placeholder='Contraseña'/>
          </div>

        <div className="forgot-password">¿Ya tienes una cuenta? <span><a href='/Login'>Inicia Sesion!</a></span></div>
        <div className="submit-container">
        <input type='submit' value="Crear cuenta" className='submit'/>
        </div>

        </form>
      </div>
      

      

    </div>
  )
}

export default Registrarse
