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
}

export default Login