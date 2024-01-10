import React from 'react';
import './Login.css'
import icono_usuario from '../Assets/user.png'
import icono_password from '../Assets/password.png'


const Login = () => {


  return (
    <div>
      <div className='container'>
      <div className='header'>
        <div className="text">Iniciar Sesion</div> 
        <div className="underline">
        </div>
      </div>
      <div className="inputs">
        <form method='post'>
        <div className="input">
        <img src={icono_usuario} alt="" srcset="" />
        <input type="text" id='username' name='username' placeholder='Usuario'/>
    </div>
        
        <div className="input">
            <img src={icono_password} alt="" srcset="" />
            <input type="password" id='password' name='password' placeholder='Contraseña'/>
        </div>
        <div className="forgot-password">¿Olvidaste tu contraseña? <span>Click aqui!</span></div>
        <div className="forgot-password">¿No tienes una cuenta? <span><a href='/Registrarse'>Registrate!</a></span></div>
        <div className="submit-container">
        <input type='submit' value="Iniciar sesion" className='submit'/>
        </div>

        </form>
      </div>
      

      

    </div>
    </div>
    
  )
}

export default Login
