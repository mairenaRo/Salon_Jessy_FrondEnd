import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TimePicker, DatePicker, ConfigProvider, List, Skeleton, message } from "antd";
import caES from 'antd/es/locale/es_ES';
import 'moment/locale/es-mx';
import "antd/dist/antd.css";

function Element({ ...props }) {
  const current = new Date();
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      id: '88239675',
      title: "title",
      start: new Date("2022-07-25 10:00:00"),
      end: new Date("2022-07-25 11:00:00"),
    },
    {
      id: '86304105',
      title: "Corte pelo Hombre",
      start: new Date("2022-07-25 12:00:00"),
      end: new Date("2022-07-25 13:00:00"),
    },
  ];
  var title = '';
  var list = [...myEventsList];
  const [newEvents, setNewEvents] = useState(myEventsList);
  const [find, setFind] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const format = 'HH';
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  function guardarCita() {
    const event = {
      id: document.getElementById('agregarTelefono').value,
      title: document.getElementById('inputGroup').value,
      start: new Date('' + document.getElementById('fechaCita').value + ' ' + document.getElementById('horaInicio').value + ':00:00'),
      end: new Date('' + document.getElementById('fechaCita').value + ' ' + (parseInt(document.getElementById('horaInicio').value) + 1) + ':00:00')
    }
    list.push(event)
    setNewEvents(list);
    console.log(list);
  };

  function buscarCitas() {
    title = document.getElementById('buscarCita').value;
    const events = newEvents.filter(item => item.id === title);
    setFind(events);
    console.log(find);
  };

  return (
    <ConfigProvider locale={moment.locale('es')}>
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
                <input className="form-control" type="text" placeholder="1234-5678" aria-label="default input example" id='agregarTelefono' />
                <label>Elija la hora del dia: <br />Recuerda que nuestro horario es de 8:00 a 17:00</label>
                <TimePicker defaultValue={moment((current.getHours() + 1) + ':' + current.getMinutes(), format)} format={format} id='horaInicio' />
                <label>Elija la fecha:</label>
                <DatePicker onChange={onChange} id='fechaCita' />
                <label>Seleccione el servicio:</label>
                <div className="input-group mb-3">
                  <select className="form-select" id="inputGroup">
                    <option value="Corte pelo Hombre">Corte pelo Hombre</option>
                    <option value="Estilizado de cabello">Estilizado de cabello</option>
                    <option value="Keratina">Keratina</option>
                    <option value="Especial">Especial</option>
                  </select>
                </div>
                <div id='guardarCita'>
                  <button type="button" className="btn" onClick={guardarCita}>Guardar</button>
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
                <input class="form-control" type="text" placeholder="1234-5678" aria-label="default input example" id="buscarCita" />
                <div id='editarCita'>
                  <button type='button' className='btn' onClick={buscarCitas}>
                    Buscar Citas
                  </button>
                </div>
                <label>Elija la hora del dia:<br />Recuerda que nuestro horario es de 8:00 a 17:00</label>
                <TimePicker defaultValue={moment((current.getHours() + 1) + ':' + current.getMinutes(), format)} format={format} />
                <label>Elija la fecha:</label>
                <DatePicker onChange={onChange} />
              </form>
              <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={find}
                renderItem={(item) => (
                  <List.Item
                    actions={[<a key="list-loadmore-edit">Editar</a>, <a key="list-loadmore-more">Eliminar</a>]}
                  >
                    <Skeleton avatar title={false} loading={item.loading} active>
                      <List.Item.Meta
                        title={item.title}
                        description={item.start + ''}
                      />
                    </Skeleton>
                  </List.Item>
                )}
              />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <Calendar
          localizer={localizer}
          events={newEvents}
          startAccessor="start"
          endAccessor="end"
          defaultView='week'
        />
      </div>
    </ConfigProvider>
  );
}

export default Element;
