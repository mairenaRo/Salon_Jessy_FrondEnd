import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TimePicker, DatePicker } from "antd";
import "antd/dist/antd.css";

function Element({ ...props }) {
  const current = new Date();
  const firstDay = new Date(current.getFullYear(), current.getMonth(), 1);
  const lastDay = new Date(current.getFullYear(), current.getMonth(), 0);
  const month = current.getMonth();
  const year = current.getFullYear();
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      title: "today",
      start: new Date("2022-07-25 10:22:00"),
      end: new Date("2022-07-25 10:42:00"),
    },
    {
      title: "string",
      start: new Date("2022-07-25 12:00:00"),
      end: new Date("2022-07-25 13:00:00"),
    },
  ]

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const format = 'HH';

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" className="container" id='agendarCita'>
      <h2 id='date' className="agendarCitaTitulo">Agendar Cita</h2>
      <div className="agendarButtons">
        <button className='btn' id='agendarCitaButton' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
          Agendar Cita
        </button>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Agregar nueva cita</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <form>
              <label>Ingrese su número Telefónico:</label>
              <input class="form-control" type="text" placeholder="1234-5678" aria-label="default input example" />
              <label>Elija la hora del dia:</label>
              <TimePicker defaultValue={moment(current.getHours() + ':' + current.getMinutes(), format)} format={format} />
              <label>Elija la fecha:</label>
              <DatePicker onChange={onChange} />
              <div id='guardarCita'>
                <button type="submit" className="btn">Guardar</button>
              </div>
            </form>
          </div>
        </div>
        <button className="btn" id='editarCitaButton' type="button" onClick={handleShow}>
          Editar mis citas
        </button>
        <Offcanvas placement='end' show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Editar Cita</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <form>
              <label>Ingrese su número Telefónico:</label>
              <input class="form-control" type="text" placeholder="1234-5678" aria-label="default input example" />
              <div id='editarCita'>
                <button className='btn'>
                  Buscar Citas
                </button>
              </div>
              <label>Elija la hora del dia:</label>
              <TimePicker defaultValue={moment((current.getHours()+1) + ':' + current.getMinutes(), format)} format={format} />
              <label>Elija la fecha:</label>
              <DatePicker onChange={onChange} />
            </form>

            
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        defaultView='week'
        messages={{
          next: "sig",
          previous: "ant",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
        }}
      />
    </div>
  );
}

export default Element;
