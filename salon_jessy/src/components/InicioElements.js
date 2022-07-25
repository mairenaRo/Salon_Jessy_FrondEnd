import React from 'react';
import s1 from './img/s1.jpeg';
import s2 from './img/s2.jpeg';
import s3 from './img/s3.jpeg';

const InicioElements = () => {
    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" className="container" id="inicioContainer">
            <h2 className='intro' id="intro">Bienvenido a Salón Boutique Jessy</h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
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
        </div>
    );
}

export default InicioElements;