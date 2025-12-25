import '../css/Calender.css';
import { useState } from 'react';

function CalenderDate({ id, date, month, currentMonth, clickDate, isToday, isActive }) {
    const baseClassName = (month !== currentMonth) ? 'current-date-div' : 'prev-date-div';

    const finalClassName = [
        baseClassName,
        isActive ? 'click' : '',
        isToday ? 'today' : ''
    ].join(' ').trim();

    return (
        <div className={finalClassName} onClick={() => {
            clickDate(date);
        }}>
            {date}
        </div>
    )
}

export default CalenderDate;