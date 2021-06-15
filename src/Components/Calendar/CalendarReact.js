import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarReact.css'

function CalendarReact() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="calendar">
            <br />
            <h2> Calendar View </h2>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default CalendarReact;