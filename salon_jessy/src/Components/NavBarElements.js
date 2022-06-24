import React from 'react';
import logo from './img/LogoJessy1.png';

const NavBarElements = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            <img src={logo} width="85" height="50"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 	
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Acerca de</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Catálogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Iniciar Sesión</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
    );
}

export default NavBarElements;
