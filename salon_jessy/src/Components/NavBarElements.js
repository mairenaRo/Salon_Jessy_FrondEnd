import React from 'react';

const NavBarElements = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Catalogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Acerca de</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Iniciar Sesion</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
    );
}

export default NavBarElements
