import React from 'react';
import s1 from './img/s1.jpeg';
import s2 from './img/s2.jpeg';
import s3 from './img/s3.jpeg';

const InicioElements = () => {
    return (
        <div className="container" id="inicioContainer">
            <h2 className='intro'>Bienvenido a Salón Boutique Jessy</h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={s1} className="d-block w-100" height="500px" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={s2} className="d-block w-100" height="500px" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={s3} className="d-block w-100" height="500px" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h2 className='Acerca de'>Acerca de</h2>
            <span>
                <h3>Ubiquenos</h3>
                <p>Estamos ubicados en Santa Gertrudis Sur de Grecia, del Bar el Río 500mts sentido San Rafael de Poas-Grecia. </p>
            </span>
        </div>
    );
}

export default InicioElements;