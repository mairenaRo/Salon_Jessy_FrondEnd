import React from 'react';
import s1 from './img/s1.png';
import s2 from './img/s2.png';
import s3 from './img/s3.png';

const InicioElements = () => {
    return (
        <div className="container" id="inicioContainer">
            <h2 className='intro'>Bienvenido a Salón Boutique Jessy</h2>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                    <img src={s1} alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={s2} className="d-block" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={s3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    );
}

export default InicioElements;