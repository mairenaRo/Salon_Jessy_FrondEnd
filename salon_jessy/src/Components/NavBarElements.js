import React from 'react';
import ScrollspyNav from 'react-scrollspy-nav';
import logo from './img/LogoJessy1.png';

const NavBarElements = () => {
  return (
    <nav id="navbar-example3" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="index.html">
          <img src={logo} width="85" height="50" alt='Logo' />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ScrollspyNav>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#intro">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#agendarCita">Agendar Cita</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">Catálogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactus">Contáctenos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#login">Iniciar Sesión</a>
              </li>
            </ul>
          </ScrollspyNav>
        </div>
      </div>
    </nav>
  );
}

export default NavBarElements;
