import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const ContactoElement = () => {
    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" className='container' id="acercaDeContainer">
            <li>
                <h2 className='acercaDeTitulo' id='contactus'>Contáctenos</h2>
                <h3 className='acercaDe'>Ubíquenos</h3>
                <p className='acercaDe'>Estamos ubicados en Alajuela centro, sobre calle ancha, frente al templo católico de la Agonía.
                <br />Teléfono: +506 0000-0000
                <br />Celular: +506 0000-0000
                <br />Correo Electrónico: salonJessy@gmail.com
                <br />Enlace de Waze: <a id='wazelink' href='https://goo.gl/maps/fFi999t1N9vSVtncA'>https://goo.gl/maps/fFi999t1N9vSVtncA</a></p>
            </li>
            <li>
                <div className='map'>
                    <MapContainer center={[10.017227, -84.209164]} zoom={16} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[10.017227, -84.209164]}>
                            <Popup>
                                Aquí estamos. <br /> Visítanos.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </li>
        </div>
    );
}

export default ContactoElement;