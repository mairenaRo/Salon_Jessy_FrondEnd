import React from "react";
import Paper from '@mui/material/Paper';
import {
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const AgendarElement = () => {
    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" className="container" id='agendarCita'>
            <h2 id='date' className="agendarCitaTitulo">Agendar Cita</h2>
            <Paper>
                <Scheduler>
                    <WeekView startDayHour={7} endDayHour={18} />
                    <Appointments />
                </Scheduler>
            </Paper>
        </div>
    );
}

export default AgendarElement;