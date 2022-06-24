<<<<<<< Updated upstream
import React from 'react'

function Login() {
  return (
   <form>
        <div className="form-inner">
            <h2> LOGIN</h2>
            <div className=" form-group">
                <label htmlFor="Nombre">Name: </label>
                <input type="text" name="Nombre" id="Nombre" />
            </div>

            <div className="form-group">
                <label htmlFor="Correo">Email:</label>
                <input type="Correo" name="Correo" id ="Correo" />
            </div>

            <div className="form-group">
                <label htmlFor="Contraseña">Contraseña:</label>
                <input type="Contraseña" name="Contraseña" id="Contraseña" />
            </div>    

            <input type="submit" value="LOGIN" />
        </div>
   </form>
  )
=======
import React from 'react';

const Login = () => {
    return (
        <div className="logcontainer" id="logContainer">
            <h2 className='intro' id="iniciarSesion">Iniciar Sesión</h2>
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">*Únicamente para trabajadores del salón</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Recuérdame</label>
            </div>
            <button type="submit" className="btn">Acceder</button>
            </form>
        </div>
    );
>>>>>>> Stashed changes
}

export default Login