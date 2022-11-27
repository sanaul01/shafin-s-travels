import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <p>Available Appointment on {format(date, 'PP')} </p>
        </div>
    );
};

export default AvailableAppointment;